import { basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import GithubSlugger from 'github-slugger';
import { tex } from './inline.mjs';
import { PAGES, entryHref, entryMap } from './manual-pages.mjs';

function element(tagName, className, children) {
  return { type: 'element', tagName, properties: { className: [className] }, children };
}

export const headingId = (text, slugger) => slugger.slug(text).replace(/-+/g, '-');

function textOf(node) {
  if (node.type === 'text') return node.value;
  return (node.children || []).map(textOf).join('');
}

const HEADINGS = new Set(['h2', 'h3', 'h4']);
const SECTION_REF = /§(\d+|[a-z][a-z0-9_-]*[a-z0-9])/g;
const NO_LINK = new Set(['a', 'code', 'pre', 'h1', 'h2', 'h3', 'h4']);
const isElement = (node, tagName) => node.type === 'element' && node.tagName === tagName;
const isBlank = (node) => node.type === 'text' && !node.value.trim();

// ul > li > [strong "Label:", rest...] for every li  ->  dl.fields > [dt "Label", dd > rest]...; other lists unchanged
function fieldList(node) {
  if (!isElement(node, 'ul')) return node;
  const items = node.children.filter((child) => !isBlank(child));
  const pairs = [];
  for (const li of items) {
    if (!isElement(li, 'li')) return node;
    const [label, ...rest] = li.children.filter((child, i) => i > 0 || !isBlank(child));
    const text = label && isElement(label, 'strong') && textOf(label);
    if (!text || !text.endsWith(':')) return node;
    if (rest[0]?.type === 'text') rest[0] = { ...rest[0], value: rest[0].value.trimStart() };
    pairs.push(
      { type: 'element', tagName: 'dt', properties: {}, children: [{ type: 'text', value: text.slice(0, -1) }] },
      { type: 'element', tagName: 'dd', properties: {}, children: rest },
    );
  }
  return pairs.length ? element('dl', 'fields', pairs) : node;
}

// text "§<id>" -> link(id, match); skipped inside a/code/pre/h1-h4
function linkSectionRefs(node, link) {
  if (node.type === 'text') {
    const out = [];
    let last = 0;
    for (const m of node.value.matchAll(SECTION_REF)) {
      if (m.index > last) out.push({ type: 'text', value: node.value.slice(last, m.index) });
      out.push(link(m[1], m[0]));
      last = m.index + m[0].length;
    }
    if (last === 0) return [node];
    if (last < node.value.length) out.push({ type: 'text', value: node.value.slice(last) });
    return out;
  }
  if (node.type !== 'element' && node.type !== 'root') return [node];
  if (node.type === 'element' && NO_LINK.has(node.tagName)) return [node];
  return [{ ...node, children: node.children.flatMap((c) => linkSectionRefs(c, link)) }];
}

// Satteri hast plugin for one manual page (ctx.fileURL = src/content/manual/<file>.md, listed in PAGES):
//   h2/h3/h4 id            =  explicit "{#id}" kept and registered in the slugger first; otherwise
//                             github-slugger slug with runs of "-" collapsed to one; a duplicate id throws
//   $tex$, $$tex$$         ->  MathML from tex() (inline code.math-inline; display pre > code.math-display)
//   ul of "**Label:** x"   ->  dl.fields > [dt Label, dd x]
//   "§<id>" in text        ->  a[href=entryHref(id)] > "§N" if the entry is chapter N, else its title
//                             (in code for an option); numeric "§N" and an unknown id throw
//   root > [h2, ...content]  ->  root > section.docsec > [h2, div.prose > content]
//   table                  ->  div.reftable-wrap > table
export default function manualHast(ctx, base) {
  const file = basename(fileURLToPath(ctx.fileURL), '.md');
  const page = PAGES.find((p) => p.file === file);
  if (!page) throw new Error(`manual-hast: ${file}.md is not in the manual page list (manual-pages.mjs)`);
  const link = (target, text) => {
    const a = (href, children) => ({ type: 'element', tagName: 'a', properties: { href }, children });
    if (/^\d+$/.test(target)) throw new Error(`manual-hast: ${file}.md: "${text}": use §<id> of the chapter`);
    const e = entryMap().get(target);
    if (!e) throw new Error(`manual-hast: ${file}.md: unresolved "${text}"`);
    const href = entryHref(target, page.slug, base);
    if (e.chapter) return a(href, [{ type: 'text', value: `§${e.chapter}` }]);
    const title = { type: 'text', value: e.title };
    return a(href, [e.code ? { type: 'element', tagName: 'code', properties: {}, children: [title] } : title]);
  };
  return {
    name: 'manual-hast',
    before(root, visit) {
      const slugger = new GithubSlugger();
      const isHeading = (node) => node.type === 'element' && HEADINGS.has(node.tagName);
      const explicit = new Set();
      for (const node of root.children.filter(isHeading)) {
        const id = node.properties?.id;
        if (typeof id !== 'string') continue;
        if (explicit.has(id)) throw new Error(`manual-hast: ${file}.md: duplicate heading id "#${id}"`);
        if (slugger.slug(id) !== id) throw new Error(`manual-hast: ${file}.md: heading id "#${id}" is not a slug`);
        explicit.add(id);
      }
      const ids = new Set();
      const nodes = root.children.map((node) => {
        if (!isHeading(node)) return fieldList(node);
        const text = textOf(node);
        const id = typeof node.properties?.id === 'string' ? node.properties.id : headingId(text, slugger);
        if (ids.has(id)) throw new Error(`manual-hast: ${file}.md: duplicate heading id "#${id}" ("${text}")`);
        ids.add(id);
        const entry = explicit.has(id) && entryMap().get(id);
        if (entry && entry.title !== text) {
          throw new Error(`manual-hast: ${file}.md: heading "#${id}" reads "${text}", its "§${id}" link text is "${entry.title}"`);
        }
        return { ...node, properties: { ...node.properties, id } };
      });
      const children = [];
      let prose = null;
      for (const node of nodes.flatMap((c) => linkSectionRefs(c, link))) {
        if (isElement(node, 'h2')) {
          prose = element('div', 'prose', []);
          children.push(element('section', 'docsec', [node, prose]));
        } else if (prose) {
          prose.children.push(node);
        } else {
          children.push(node);
        }
      }
      visit.replaceNode(root, { type: 'root', children });
    },
    element: [
      {
        filter: ['code'],
        visit(node, visit) {
          if (!node.properties?.className?.includes('math-inline')) return;
          visit.replaceNode(node, { type: 'raw', value: tex(visit.textContent(node), false) });
        },
      },
      {
        filter: ['pre'],
        visit(node, visit) {
          const code = node.children.find((child) => isElement(child, 'code'));
          if (!code?.properties?.className?.includes('math-display')) return;
          visit.replaceNode(node, { type: 'raw', value: tex(visit.textContent(code), true) });
        },
      },
      {
        filter: ['table'],
        visit(node, visit) {
          visit.wrapNode(node, element('div', 'reftable-wrap', []));
        },
      },
    ],
  };
}
