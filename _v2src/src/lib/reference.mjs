import ref from '../data/reference.json' with { type: 'json' };
import { properties } from '../data/properties.json' with { type: 'json' };
import blocks from '../data/blocks.json' with { type: 'json' };
import fragmentList from '../data/fragments.json' with { type: 'json' };
import { toHtml, toMd } from './inline.mjs';
import { entryMap } from './manual-pages.mjs';

function entry(key) {
  const e = ref.entries[key];
  if (!e) throw new Error(`reference.json: no entry "${key}"`);
  return e;
}

const FRAGMENTS = new Map(fragmentList.map((f) => [f.id, f]));

function fragment(id) {
  const f = FRAGMENTS.get(id);
  if (!f) throw new Error(`fragments.json: no fragment "${id}"`);
  return f;
}

export function group(id) {
  const g = ref.groups.find((x) => x.id === id);
  if (!g) throw new Error(`reference.json: no option group "${id}"`);
  return g;
}

export const optionGroups = () => ref.groups;
export const optionKeys = () => Object.keys(ref.entries).filter((key) => ref.entries[key].option);
export const optionId = (key) => entry(key).id ?? key.toLowerCase();
export const optionAlias = (key) => entry(key).alias;
const optionTitle = (key) => entry(key).title ?? key;

// docs: div.kwrow > [div.kwname > [label, span.kwalias?], p > brief]
function kwRow(key) {
  const e = entry(key);
  const label = e.label ?? key.toLowerCase();
  const tag = e.tag ?? (e.alias && `alias: ${e.alias.toLowerCase()}`);
  const alias = tag ? `<span class="kwalias">${toHtml(tag)}</span>` : '';
  return `<div class="kwrow"><div class="kwname">${toHtml(label)}${alias}</div><p>${toHtml(e.brief)}</p></div>`;
}

export const kwRows = (keys) => ` ${keys.map(kwRow).join(' ')} `;

const mdRow = (cells) => `| ${cells.map((c) => toMd(c).replaceAll('|', '\\|')).join(' | ')} |`;
const mdTable = (head, rows) => [mdRow(head), mdRow(head.map(() => '---')), ...rows.map(mdRow)].join('\n');

// "- **Label:** value" per non-empty value (dl.fields in manual-hast)
const fieldsMd = (pairs) => pairs.filter(([, v]) => v).map(([label, v]) => `- **${label}:** ${toMd(v)}`).join('\n');
// "* item": a list marker other than the fields' "-", so the two lists never merge
const bulletsMd = (items = []) => items.map((s) => `* ${toMd(s)}`).join('\n');
// data TeX, emitted as display math blocks
const formulasMd = (items = []) => items.map((s) => `$$\n${s}\n$$`).join('\n\n');
// verbatim log text: fence language "log" (pre[data-language="log"], set apart from typed input)
const fragmentMd = (id) => `\`\`\`log\n${fragment(id).text}\n\`\`\``;
const fragmentsMd = (ids = []) => ids.map(fragmentMd).join('\n\n');
const blocksMd = (parts) => parts.filter(Boolean).join('\n\n');

// option call: '"<key>": <value>,' from a Python-literal value, or the stored call text
function callMd(key, e) {
  const call = e.callText ?? (e.call && `"${key.toLowerCase()}": ${e.call},`);
  return call && `\`\`\`python\n${call}\n\`\`\``;
}

// option entry: h4 {#id}, Type/Default/Alias/Allowed, call, fragments, rules, formulas, See
function optionEntryMd(key) {
  const e = entry(key);
  return blocksMd([
    `#### \`${optionTitle(key)}\` {#${optionId(key)}}`,
    fieldsMd([['Type', e.type], ['Default', e.default], ['Alias', e.alias && `\`${e.alias}\``], ['Allowed', e.allowed]]),
    callMd(key, e),
    fragmentsMd(e.fragments),
    bulletsMd(e.rules),
    formulasMd(e.formulas),
    fieldsMd([['See', e.see]]),
  ]);
}

// compact option group: h4 {#group id} + table Option | Default | Meaning
function compactGroupMd(g) {
  const rows = g.keys.map((key) => [`\`${key}\``, entry(key).default, entry(key).brief ?? '']);
  return blocksMd([`#### ${g.title} {#${g.id}}`, mdTable(['Option', 'Default', 'Meaning'], rows)]);
}

const groupMd = (id) => {
  const g = group(id);
  return g.compact ? compactGroupMd(g) : g.keys.map(optionEntryMd).join('\n\n');
};

// property entry: h4 {#id}, definition, On/For/Units/Printed, formulas, fragments, Stored/Files, bullets, Ref
function propertyEntryMd(p) {
  const on = p.default ? `${p.on} (default: ${p.default})` : p.on;
  return blocksMd([
    `#### ${p.name} {#${p.id}}`,
    toMd(p.brief),
    fieldsMd([['On', on], ['For', p.for], ['Units', p.units], ['Printed', p.printed === false && 'no']]),
    formulasMd(p.formulas),
    fragmentsMd(p.fragments),
    fieldsMd([['Stored', p.variables], ['Files', p.files]]),
    bulletsMd(p.bullets),
    fieldsMd([['Ref', p.ref]]),
  ]);
}

export const stageProperties = (stage) => {
  const list = properties.filter((p) => p.stage === stage);
  if (!list.length) throw new Error(`properties.json: no property of stage "${stage}"`);
  return list;
};

// Properties chapter: Property | Switch | Default | Printed, one linked row per property
const propertyTableMd = () =>
  mdTable(
    ['Property', 'Switch', 'Default', 'Printed'],
    properties.map((p) => [`§${p.id}`, p.on, p.default ?? '', p.printed === false ? 'no' : 'yes']),
  );

// print order of the report blocks: Block | Entry, one row per header, linked to the entry or section that explains it
const printOrderMd = () => mdTable(['Block', 'Entry'], blocks.map((b) => [`\`${b.header}\``, `§${b.owner}`]));

// Option table chapter: per group "### title" + Option | Type | Default | Alias (compact: Option | Default)
function optionTableMd() {
  return ref.groups
    .map((g) => {
      const described = g.compact && entryMap().has(g.id) ? `§${g.id}` : '';
      const table = g.compact
        ? mdTable(['Option', 'Default'], g.keys.map((key) => [`\`${key}\``, entry(key).default]))
        : mdTable(
            ['Option', 'Type', 'Default', 'Alias'],
            g.keys.map((key) => [`§${optionId(key)}`, entry(key).type ?? '', entry(key).default, entry(key).alias ? `\`${entry(key).alias}\`` : '']),
          );
      return blocksMd([`### ${g.title}`, described, table]);
    })
    .join('\n\n');
}

// marker name -> [takes an argument, markdown renderer]
const MARKERS = {
  options: [true, groupMd],
  properties: [true, (stage) => stageProperties(stage).map(propertyEntryMd).join('\n\n')],
  fragment: [true, fragmentMd],
  'print-order': [false, printOrderMd],
  'option-table': [false, optionTableMd],
  'property-table': [false, propertyTableMd],
};

// paragraph text -> { name, arg } for "@@name@@" / "@@name arg@@"; null when the text does not start with "@@";
// a "@@" paragraph that names no marker, or misses or adds an argument, throws
export function parseMarker(text) {
  if (!text.startsWith('@@')) return null;
  const m = text.match(/^@@([a-z-]+)(?: ([A-Za-z0-9_-]+))?@@$/);
  const spec = m && MARKERS[m[1]];
  if (!spec || spec[0] !== Boolean(m[2])) throw new Error(`manual: unresolved marker "${text}"`);
  return { name: m[1], arg: m[2] };
}

// entries a marker renders ({id, title, code}) and the fragment ids it prints
export function markerContent({ name, arg }) {
  if (name === 'options') {
    const g = group(arg);
    if (g.compact) return { entries: [{ id: g.id, title: g.title, code: false }], fragments: [] };
    return {
      entries: g.keys.map((key) => ({ id: optionId(key), title: optionTitle(key), code: true, owner: entry(key) })),
      fragments: g.keys.flatMap((key) => entry(key).fragments ?? []),
    };
  }
  if (name === 'properties') {
    const list = stageProperties(arg);
    return {
      entries: list.map((p) => ({ id: p.id, title: p.name, code: false, owner: p })),
      fragments: list.flatMap((p) => p.fragments ?? []),
    };
  }
  if (name === 'fragment') return { entries: [], fragments: [fragment(arg).id] };
  return { entries: [], fragments: [] };
}

export const fragmentIds = () => [...FRAGMENTS.keys()];

// Satteri mdast plugin: marker paragraph -> generated markdown
export function referenceMdast() {
  return {
    name: 'reference',
    paragraph(node, ctx) {
      const marker = parseMarker(ctx.textContent(node));
      if (marker) ctx.replaceNode(node, { raw: MARKERS[marker.name][1](marker.arg), mdxExpressions: false });
    },
  };
}
