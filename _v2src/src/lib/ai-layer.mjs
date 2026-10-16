// Astro integration (astro:build:done): per page a markdown twin X/index.md of <main>, per option a card options/<NAME>.md,
// <file>.txt copies of linked files, llms.txt; throws on any check failure, then strips TeX annotations and <main> from the HTML.
import { copyFileSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { htmlToHast } from 'satteri';
import { defaultHandlers, toMdast } from 'hast-util-to-mdast';
import { toText } from 'hast-util-to-text';
import { toMarkdown } from 'mdast-util-to-markdown';
import { toString } from 'mdast-util-to-string';
import { gfmTableToMarkdown } from 'mdast-util-gfm-table';
import { mathToMarkdown } from 'mdast-util-math';
import { mdxJsxToMarkdown } from 'mdast-util-mdx-jsx';
import { textOf } from './manual-hast.mjs';
import { PAGES, entryHref, entryMap, optionHref, optionRowHref, pagePath, stripNum } from './manual-pages.mjs';
import { USED_IN, optionGroup, optionId, optionKeys, optionTitle, optionType } from './reference.mjs';
import { BRANCH, REPO_URL, siteRev } from './site.mjs';
import { DATA as questData, PREFIX as questPrefix, revLine as questRev } from './quest.mjs';
import { DATA as zethData, PREFIX as zethPrefix, revLine as zethRev } from './zeth.mjs';
import { DATA as zethLitData, LIT_HIDDEN } from './zethlit.mjs';

const SUMMARY = 'REKS(N,M) / SA-REKS / SI-REKS ensemble DFT in Psi4: user manual, option reference, example inputs.';
const LANG = { '.py': 'python', '.dat': 'text', '.bib': 'bibtex' };
// public/data/<file>.txt: tables for agents, listed in llms.txt only, linked from no page
const DATA = { ...questData, ...zethData, ...(LIT_HIDDEN ? {} : zethLitData) };
const DRAFT = 'main/';
const IMAGE = new Set(['.avif', '.webp', '.jpg', '.jpeg', '.png', '.gif', '.svg']);
// Claude Code WebFetch truncates longer text
const MAX_CHARS = 100000;
const TEX = 'application/x-tex';
const ANNOTATION = /<annotation encoding="application\/x-tex">[^<]*<\/annotation>/g;
const SEMANTICS = /<\/?semantics>/g;
// the <main> wrapper with the whitespace compressHTML puts after it
const MAIN = /<\/?main>\s*/g;
const LLMS_ITEM = /^- \[[^\]]+\]\([^)]+\)(: .*)?$/;
const MD = { extensions: [gfmTableToMarkdown({ tablePipeAlign: false }), mathToMarkdown(), mdxJsxToMarkdown()] };

const isEl = (n, ...tags) => n.type === 'element' && tags.includes(n.tagName);
// the node and its descendants passing test, in document order (hast or mdast)
const all = (n, test) => [...(test(n) ? [n] : []), ...(n.children ?? []).flatMap((c) => all(c, test))];
// copy of the tree without the descendants failing keep
const keepOnly = (n, keep) => (n.children ? { ...n, children: n.children.filter(keep).map((c) => keepOnly(c, keep)) } : n);
const mapTree = (n, f) => f(n.children ? { ...n, children: n.children.map((c) => mapTree(c, f)) } : n);
const markdown = (children) => toMarkdown({ type: 'root', children }, MD);
const inline = (children) => markdown([{ type: 'paragraph', children }]).trim().replace(/\s*\n\s*/g, ' ');
const fail = (msg) => {
  throw new Error(`ai-layer: ${msg}`);
};

// drop set, applied alike to the twin and to the HTML side of the text check
const kept = (n) =>
  !(
    isEl(n, 'nav', 'script') ||
    n.properties?.ariaHidden === 'true' ||
    (isEl(n, 'svg') && !['img', 'group'].includes(n.properties.role)) ||
    (isEl(n, 'details') && all(n, (x) => isEl(x, 'nav')).length)
  );

const texOf = (math) => all(math, (n) => isEl(n, 'annotation') && n.properties.encoding === TEX)[0];
const jsx = (name) => (state, node) => ({ type: 'mdxJsxTextElement', name, attributes: [], children: state.all(node) });
// h2-h4: heading + " {#id}"; the id is also kept in data
const withId = (tag) => (state, node) => {
  const h = defaultHandlers[tag](state, node);
  if (node.properties.id) {
    h.children.push({ type: 'text', value: ` {#${node.properties.id}}` });
    h.data = { id: node.properties.id };
  }
  return h;
};

const handlers = {
  math: (state, node) => ({ type: node.properties.display === 'block' ? 'math' : 'inlineMath', value: textOf(texOf(node)) }),
  sub: jsx('sub'),
  sup: jsx('sup'),
  code: (state, node) => (node.children.some((c) => c.type === 'element') ? jsx('code')(state, node) : defaultHandlers.code(state, node)),
  pre: (state, node) =>
    node.properties.dataLanguage
      ? { type: 'code', lang: node.properties.dataLanguage, value: textOf(node).replace(/\n+$/, '') }
      : defaultHandlers.pre(state, node),
  // dl.fields -> one paragraph "Label: value" per dd
  dl(state, node) {
    if (!node.properties.className?.includes('fields')) return defaultHandlers.dl(state, node);
    let label;
    return node.children.filter((c) => c.type === 'element').flatMap((c) => {
      if (isEl(c, 'dt')) label = textOf(c);
      return isEl(c, 'dd') ? [{ type: 'paragraph', children: [{ type: 'text', value: `${label}: ` }, ...state.all(c)] }] : [];
    });
  },
  h2: withId('h2'),
  h3: withId('h3'),
  h4: withId('h4'),
  svg: (state, node) => ({ type: 'paragraph', children: [{ type: 'text', value: node.properties.ariaLabel }] }),
};

// counted pairs: hast test in the pruned <main> minus the subtrees of the optional 4th tags, mdast test in its conversion
const COUNTS = [
  ['math', (n) => isEl(n, 'math'), (n) => n.type === 'inlineMath' || n.type === 'math'],
  ['sub', (n) => isEl(n, 'sub'), (n) => n.type === 'mdxJsxTextElement' && n.name === 'sub'],
  ['sup', (n) => isEl(n, 'sup'), (n) => n.type === 'mdxJsxTextElement' && n.name === 'sup'],
  ['pre', (n) => isEl(n, 'pre'), (n) => n.type === 'code'],
  ['table row', (n) => isEl(n, 'tr'), (n) => n.type === 'tableRow'],
  ['h2-h4', (n) => isEl(n, 'h2', 'h3', 'h4'), (n) => n.type === 'heading' && n.depth >= 2 && n.depth <= 4],
  ['link', (n) => isEl(n, 'a') && n.properties.href !== undefined, (n) => n.type === 'link', ['pre', 'svg']],
];

// structural counts; the text of <main> (math removed, sub/sup delimited, svg = its label) found
// token by token, in order, in the plain text of the mdast (math removed); no inline math with "|" in a table cell
function checkCoverage(name, main, mdast) {
  for (const [what, inHast, inMdast, skip] of COUNTS) {
    const h = all(skip ? keepOnly(main, (n) => !isEl(n, ...skip)) : main, inHast).length;
    const m = all(mdast, inMdast).length;
    if (h !== m) fail(`${name}: ${h} ${what} in <main>, ${m} in the twin`);
  }
  const htmlSide = mapTree(keepOnly(main, (n) => !isEl(n, 'math')), (n) => {
    if (isEl(n, 'sub', 'sup')) return { ...n, children: [{ type: 'text', value: ' ' }, ...n.children, { type: 'text', value: ' ' }] };
    return isEl(n, 'svg') ? { type: 'text', value: ` ${n.properties.ariaLabel} ` } : n;
  });
  const text = toString(keepOnly(mdast, (n) => n.type !== 'inlineMath' && n.type !== 'math'));
  let at = 0;
  for (const token of toText(htmlSide).split(/\s+/).filter(Boolean)) {
    const i = text.indexOf(token, at);
    if (i < 0) fail(`${name}: text "${token}" of <main> is missing from the twin after "${text.slice(Math.max(0, at - 80), at)}"`);
    at = i + token.length;
  }
  for (const cell of all(mdast, (n) => n.type === 'tableCell')) {
    if (all(cell, (n) => n.type === 'inlineMath' && n.value.includes('|')).length) fail(`${name}: inline math with "|" in a table cell`);
  }
}

// built page -> { name, url, title, main (pruned hast), headings, links (site files it links) }; one <main>, TeX annotation on every math
function readPage(file, out, root) {
  const name = relative(out, file);
  const html = readFileSync(file, 'utf8');
  const tree = htmlToHast(html);
  const mains = all(tree, (n) => isEl(n, 'main'));
  if (mains.length !== 1 || html.split('<main>').length !== 2 || html.split('</main>').length !== 2) {
    fail(`${name}: ${mains.length} <main> elements, one expected`);
  }
  for (const math of all(tree, (n) => isEl(n, 'math'))) if (!texOf(math)) fail(`${name}: <math> without a TeX annotation`);
  const main = keepOnly(mains[0], kept);
  const url = new URL(name.replace(/index\.html$/, ''), root);
  const links = all(main, (n) => isEl(n, 'a') && n.properties.href !== undefined)
    .map((a) => new URL(a.properties.href, url))
    .filter((u) => u.href.startsWith(root.href) && !u.pathname.endsWith('/') && !IMAGE.has(extname(u.pathname)) && extname(u.pathname) !== '.html')
    .map((u) => decodeURIComponent(u.pathname.slice(root.pathname.length)));
  const headings = all(main, (n) => isEl(n, 'h2', 'h3', 'h4') && n.properties.id).map((h) => ({ depth: Number(h.tagName[1]), text: textOf(h), slug: h.properties.id }));
  const title = textOf(all(tree, (n) => isEl(n, 'title'))[0]);
  return { name, file, html, url, title, main, headings, links: [...new Set(links)] };
}

// option in a compact group: its option-table rows in the manual twins -> lines "Type:", "Alias:" (from the
// "type · alias" line of the name cell), then "<column>: value"; brief = the Meaning value
function rowCard(key, tables) {
  const meta = [];
  const columns = [];
  let brief;
  for (const table of tables) {
    const [head, ...rows] = table.children;
    for (const row of rows) {
      const [first, ...cells] = row.children;
      if (all(first, (n) => n.type === 'inlineCode')[0]?.value !== key) continue;
      const small = inline(first.children.slice(1).filter((n) => n.type !== 'break'));
      for (const part of small ? small.split(' · ') : []) meta.push(part.startsWith('alias ') ? `Alias: ${part.slice(6)}` : `Type: ${part}`);
      cells.forEach((cell, i) => {
        const label = inline(head.children[i + 1].children);
        if (label === 'Meaning') brief = inline(cell.children);
        columns.push(`${label}: ${inline(cell.children)}`);
      });
    }
  }
  if (!columns.length) fail(`option ${key}: no option-table row`);
  if (!brief) fail(`option ${key}: no Meaning column`);
  return { body: `${[...new Set([...meta, ...columns])].join('\n\n')}\n`, brief };
}

// option with an entry: its h4 section in the twin of its page, heading excluded; brief = its first paragraph
function sectionCard(key, mdast) {
  const id = optionId(key);
  const start = mdast.children.findIndex((n) => n.type === 'heading' && n.data?.id === id);
  if (start < 0) fail(`option ${key}: no top-level heading {#${id}}`);
  const end = mdast.children.findIndex((n, i) => i > start && n.type === 'heading' && n.depth <= 4);
  const nodes = mdast.children.slice(start + 1, end < 0 ? undefined : end);
  if (nodes[0]?.type !== 'paragraph') fail(`option ${key}: entry does not start with its brief`);
  return { body: markdown(nodes), brief: inline(nodes[0].children) };
}

// one H1, then text, then H2 sections holding only "- [title](url): note" items
function checkLlms(text) {
  const lines = text.split('\n');
  if (!lines[0].startsWith('# ') || lines.slice(1).some((l) => l.startsWith('# '))) fail('llms.txt needs exactly one H1, on line 1');
  const sections = lines.slice(lines.findIndex((l) => l.startsWith('## ')));
  for (const l of sections) if (l && !l.startsWith('## ') && !LLMS_ITEM.test(l)) fail(`llms.txt: "${l}" is no list item`);
  if (lines.some((l) => /^#{3,} /.test(l))) fail('llms.txt: heading deeper than H2');
}

export default function aiLayer() {
  let root;
  let publicDir;
  return {
    name: 'ai-layer',
    hooks: {
      'astro:config:done': ({ config }) => {
        root = new URL(config.base, config.site);
        publicDir = config.publicDir;
      },
      'astro:build:done': ({ dir, logger }) => {
        const out = fileURLToPath(dir);
        const rev = siteRev();
        const llmsUrl = new URL('llms.txt', root).href;
        // the wording of the Documentation page: the measured commit, not claimed to be on the branch
        const revLine = `Psi4 ${rev.short}, ${rev.date}: the commit of every output on this site. Install: branch ${BRANCH} of <${REPO_URL}>.`;
        // pages whose outputs come from other builds: path prefix -> their line
        const ownRev = { [zethPrefix]: zethRev, [questPrefix]: questRev };
        const revOf = (name) => ownRev[Object.keys(ownRev).find((prefix) => name.startsWith(prefix))] ?? revLine;
        // absolute URL patterns, so that a summary of any generated file still carries usable addresses
        const convention = [
          `Every page: \`${root.href}<page>/index.md\` (markdown).`,
          `Option cards: \`${root.href}options/<NAME>.md\`.`,
          `Raw files: file URL + \`.txt\` (text/plain), e.g. \`${root.href}inputs/<file>.txt\`.`,
        ].join(' ');
        const header = (title, html, extra = [], rev = revLine) =>
          [`# ${title}`, `HTML: <${html}>`, ...extra, rev, `Site index: <${llmsUrl}>. ${convention}`].join('\n\n') + '\n\n';
        const cardUrl = (key) => new URL(`options/${key}.md`, root).href;
        const twinOf = (url) => new URL('index.md', url).href;
        // entry href of an option with its own entry -> its card
        const cardOf = new Map(
          optionKeys()
            .filter((key) => entryMap().has(optionId(key)))
            .map((key) => [entryHref(optionId(key), null, root.pathname), cardUrl(key)]),
        );
        // option-table row hrefs (links to them are dropped in twins)
        const rowHrefs = new Set(optionKeys().map((key) => optionRowHref(key, null, root.pathname)));
        const pages = readdirSync(out, { recursive: true })
          .filter((f) => f.endsWith('.html'))
          .sort()
          .map((f) => readPage(join(out, f), out, root));
        const linked = new Set(pages.flatMap((p) => p.links));
        // pages of the draft Overview section (main/) get twins but stay out of llms.txt
        const listed = pages.filter((p) => !p.name.startsWith(DRAFT));
        const rawUrl = (path) => new URL(`${path}.txt`, root).href;
        // link in a twin or card: site page -> its twin, option entry -> its card, linked file -> its .txt,
        // anything else absolute
        const target = (href, from) => {
          const url = new URL(href, from);
          if (!url.href.startsWith(root.href)) return href;
          const card = cardOf.get(url.pathname + url.hash);
          if (card) return card;
          const path = decodeURIComponent(url.pathname.slice(root.pathname.length));
          if (linked.has(path)) return rawUrl(path);
          if (url.pathname.endsWith('/')) url.pathname += 'index.md';
          return url.href;
        };
        for (const p of pages) {
          p.mdast = toMdast({ type: 'root', children: p.main.children }, { handlers });
          checkCoverage(p.name, p.main, p.mdast);
          // links to option-table rows, and every link of the option table's "Used in" column -> their text
          const usedIn = new Set(
            all(p.mdast, (x) => x.type === 'table').flatMap((t) => {
              const col = t.children[0].children.findIndex((c) => inline(c.children) === USED_IN);
              return col < 0 ? [] : t.children.slice(1).map((row) => row.children[col]);
            }),
          );
          for (const n of all(p.mdast, (x) => x.children?.some((c) => c.type === 'link'))) {
            n.children = n.children.flatMap((c) => {
              const url = c.type === 'link' && new URL(c.url, p.url);
              return url && (rowHrefs.has(url.pathname + url.hash) || usedIn.has(n)) ? c.children : [c];
            });
          }
          for (const n of all(p.mdast, (x) => x.type === 'link' || x.type === 'image')) n.url = target(n.url, p.url);
        }

        const generated = new Map();
        for (const p of pages) {
          // main/ pages list their files as links; other pages also embed each file
          const files = p.links.flatMap((path) => {
            const link = { type: 'link', url: rawUrl(path), children: [{ type: 'text', value: path }] };
            if (p.name.startsWith(DRAFT)) return [{ type: 'paragraph', children: [link] }];
            const lang = LANG[extname(path)];
            if (!lang) fail(`${p.name} links ${path}: no fence language for "${extname(path)}"`);
            const value = readFileSync(join(out, path), 'utf8').replace(/\n+$/, '');
            return [{ type: 'paragraph', children: [link] }, { type: 'code', lang, value }];
          });
          const tail = files.length ? [{ type: 'heading', depth: 2, children: [{ type: 'text', value: 'Linked files' }] }, ...files] : [];
          generated.set(p.name.replace(/\.html$/, '.md'), header(p.title, p.url.href, [], revOf(p.name)) + markdown([...p.mdast.children, ...tail]));
        }

        const pageOf = (slug) => pages.find((p) => p.name === `${pagePath(slug)}index.html`);
        const manual = PAGES.map(({ slug }) => pageOf(slug));
        const headings = PAGES.map(({ slug }, i) => ({ slug, headings: manual[i].headings }));
        const tables = manual.flatMap((p) => all(p.mdast, (n) => n.type === 'table'));
        // manual URL of a card -> "Chapter: [title](twin#id)" of the h2 holding it, the context its text refers to
        const sectionLine = (url) => {
          const p = pages.find((x) => x.url.pathname === url.pathname);
          const at = p.headings.findIndex((h) => h.slug === url.hash.slice(1));
          if (at < 0) fail(`no heading ${url.hash} on ${p.name}`);
          const h = p.headings.slice(0, at + 1).findLast((x) => x.depth === 2);
          return `Chapter: [${h.text}](${twinOf(p.url)}#${h.slug})`;
        };
        const cards = optionKeys().map((key) => {
          const { body, brief } = optionGroup(key).compact
            ? rowCard(key, tables)
            : sectionCard(key, pageOf(entryMap().get(optionId(key)).slug).mdast);
          const html = new URL(optionHref(key, headings, null, root.pathname), root);
          const text = header(`\`${optionTitle(key)}\``, html.href, [sectionLine(html)]) + body;
          if (!/^Default: /m.test(body)) fail(`card ${key} has no Default line`);
          if (/^Type: /m.test(body) !== Boolean(optionType(key))) fail(`card ${key}: Type line does not match reference.json`);
          generated.set(`options/${key}.md`, text);
          return { key, brief };
        });

        const inputs = fileURLToPath(new URL('inputs/', publicDir));
        for (const f of readdirSync(inputs, { recursive: true, withFileTypes: true }).filter((d) => d.isFile())) {
          const name = relative(inputs, join(f.parentPath, f.name));
          if (!linked.has(`inputs/${name}`)) fail(`inputs/${name} is linked from no <main>`);
        }
        const data = readdirSync(new URL('data/', publicDir)).sort().map((file) => {
          const path = `data/${file.replace(/\.txt$/, '')}`;
          if (!file.endsWith('.txt') || !DATA[path]) fail(`public/data/${file}: no .txt name or no entry in DATA`);
          if (pages.some((p) => p.html.includes(path))) fail(`${path} is linked from a page`);
          const chars = readFileSync(new URL(`data/${file}`, publicDir), 'utf8').length;
          if (chars >= MAX_CHARS) fail(`data/${file}: ${chars} characters (limit ${MAX_CHARS})`);
          return `- [${path}](${rawUrl(path)}): ${DATA[path]}`;
        });

        const name = (p) => p.title.split(' — ')[0];
        const twin = (p) => `- [${name(p)}](${twinOf(p.url)})`;
        // h2 and h3 titles without chapter numbers, the page name and one-letter headings (A-Z index) left out
        const sections = (p) =>
          p.headings
            .filter((h) => h.depth <= 3 && h.text.length > 1)
            .map((h) => stripNum(h.text))
            .filter((t) => t !== name(p))
            .join('; ');
        // linked file -> the second cell of the first table row, in manual reading order, that links it
        const rowOf = new Map();
        const nonManual = listed.filter((p) => !manual.includes(p));
        const ordered = [...manual, ...nonManual];
        for (const row of ordered.flatMap((p) => all(p.mdast, (n) => n.type === 'tableRow'))) {
          const [first, second] = row.children;
          const url = all(first, (n) => n.type === 'link')[0]?.url;
          if (url && second && !rowOf.has(url)) rowOf.set(url, inline(second.children));
        }
        const fileItem = (path) =>
          `- [${path}](${rawUrl(path)}): ${rowOf.get(rawUrl(path)) ?? listed.filter((p) => p.links.includes(path)).map(name).join('; ')}`;
        // other pages: the landing (shortest path) first
        const other = [...nonManual].sort((a, b) => a.name.length - b.name.length);
        // site links root-relative: llms.txt is read from its own URL
        const llms = [
          '# REKS Studio',
          `> ${SUMMARY}`,
          revLine,
          `## Manual\n${manual.map((p) => `${twin(p)}: ${sections(p)}`).join('\n')}`,
          `## Options\n${cards.map(({ key, brief }) => `- [\`${optionTitle(key)}\`](${cardUrl(key)}): ${brief}`).join('\n')}`,
          `## Files\n${[...new Set(listed.flatMap((p) => p.links))].sort().map(fileItem).join('\n')}`,
          `## Data\n${data.join('\n')}`,
          `## Optional\n${other.map(twin).join('\n')}`,
        ].join('\n\n').replaceAll(`](${root.origin}/`, '](/') + '\n';
        checkLlms(llms);
        generated.set('llms.txt', llms);

        for (const [name, text] of generated) {
          if (text.length >= MAX_CHARS) fail(`${name}: ${text.length} characters (limit ${MAX_CHARS})`);
          if (text.startsWith('---')) fail(`${name} begins with "---"`);
        }
        for (const path of linked) if (readFileSync(join(out, path), 'utf8').startsWith('---')) fail(`${path} begins with "---"`);

        mkdirSync(join(out, 'options'), { recursive: true });
        for (const [name, text] of generated) writeFileSync(join(out, name), text);
        for (const path of linked) copyFileSync(join(out, path), join(out, `${path}.txt`));
        for (const p of pages) {
          writeFileSync(p.file, p.html.replace(ANNOTATION, '').replace(SEMANTICS, '').replace(MAIN, ''));
        }
        logger.info(`${pages.length} twins, ${cards.length} option cards, ${linked.size} raw files, llms.txt`);
      },
    },
  };
}
