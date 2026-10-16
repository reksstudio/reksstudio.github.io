import data from '../data/zeth_lit.json' with { type: 'json' };
import overview from '../data/overview.json' with { type: 'json' };
import zeth from '../data/zeth.json' with { type: 'json' };
import { codeHtml, toHtml } from './inline.mjs';
import { acs, authorYear, checkEntry, doiUrl, reference, references } from './literature.mjs';

// zeth_lit.json (written by _LAB/lit/zethrenes/build_lit.py, never by hand): literature on the seven Hu 2016 cores.
// Load throws unless: every core id is a zeth.json compound; every source key resolves; local keys are unique and
// not in literature.json; every row has sources with locations; an energy row and a row with a gap carry a
// definition; kinds come from KINDS; a row without quote has a quoted value; no held source; refs pass checkEntry.
const HU = 'hu2016-tetraradicaloid';
const HELD = /^(canola|misztal)/;
export const KINDS = {
  parent: 'the unsubstituted hydrocarbon of the core',
  derivative: 'a substituted molecule, measured or computed in full',
  'computational model': 'a computed molecule with substituents removed or replaced',
  class: 'a statement covering a set of molecules',
  'core, as named by the authors': 'a row naming the core alone',
};
const fail = (msg) => {
  throw new Error(`zeth_lit.json: ${msg}`);
};
// sentence case: a capital after the first word only in a name, an acronym or after ": " / "? "
const NAMES = /^(Clar|Clar's|Kekulé)$/;
const local = new Map();
const globalKeys = new Set(references().map((r) => r.key));
for (const e of data.refs) {
  checkEntry(e, 'zeth_lit.json');
  if (local.has(e.key) || globalKeys.has(e.key)) fail(`${e.key}: duplicate key`);
  if (HELD.test(e.key)) fail(`${e.key}: held source`);
  const caps = e.title.replace(/[:?] [A-Z]/g, '').split(' ').slice(1).filter((w) => /^[A-Z][a-z]/.test(w) && !/[A-Z0-9].*[A-Z0-9]/.test(w.slice(1)) && !NAMES.test(w));
  if (caps.length) fail(`${e.key}: title not in sentence case (${caps.join(', ')})`);
  local.set(e.key, e);
}
export const refOf = (key) => (key === HU ? reference(HU) : local.get(key) ?? fail(`unknown source ${key}`));

const parts = (q) => (q == null ? [] : typeof q === 'string' ? [{ text: q }] : q);
function checkRow(r, where, kind) {
  if (!r.src?.length) fail(`${where}: no source`);
  for (const s of r.src) {
    refOf(s.key);
    if (!s.loc) fail(`${where}: source ${s.key} without location`);
  }
  if (kind && !(r.kind in KINDS)) fail(`${where}: kind ${r.kind}`);
  if (r.qclass === 'energy' && !r.def) fail(`${where}: energy row without definition`);
  if (r.gap && !r.def) fail(`${where}: gap without definition`);
  if (r.value !== undefined && !r.quote && !r.table2 && !r.value.startsWith('“')) fail(`${where}: no quote, no table and no quoted value`);
}
const ids = new Set(zeth.compounds.map((c) => c.id));
for (const c of data.cores) {
  if (!ids.has(c.id)) fail(`core ${c.id} not in zeth.json`);
  for (const p of ['exp', 'theory']) c[p].forEach((r, i) => checkRow(r, `${c.id} ${p} ${i}`, true));
  for (const p of ['parent', 'ident', 'printed']) (c[p] ?? []).forEach((r, i) => checkRow(r, `${c.id} ${p} ${i}`));
  (c.table2?.notes ?? []).forEach((r, i) => checkRow(r, `${c.id} table2 note ${i}`));
  if (c.ones) checkRow(c.ones, `${c.id} ones`);
}
for (const [p, list] of Object.entries({ wording: data.cross.wording, others: data.cross.others, printed: data.cross.printed })) {
  list.forEach((r, i) => checkRow(r, `cross ${p} ${i}`));
}
export const coreOf = (id) => data.cores.find((c) => c.id === id);
// overview.json "hidden": the literature block, its compound-page sections and its data file are not built
export const LIT_HIDDEN = overview.results.find((r) => r.slug === 'zethrenes').blocks.find((b) => b.id === 'literature').hidden === true;
// experimental rows of the REKS vs experiment block and the count of their sources
export const vsexp = data.vsexp;
export const expSources = new Set(vsexp.flatMap((r) => r.src.map((s) => s.key))).size;

// path -> llms.txt description of the data file
export const DATA = {
  'data/zethrenes_lit.tsv': 'Literature on the seven cores of the zethrenes results page (Hu et al. 2016), one row per experiment or computed row as printed in its source, tab-separated: core, table (experiment, computed), kind, molecule, quantity or method, value or y0 / occupation, gap, definition and sign, conditions and derived labels, source with location, verbatim quote; units and signs as printed.',
};

// every source key below an object, in document order
const keysOf = (x) => (Array.isArray(x) ? x.flatMap(keysOf) : x && typeof x === 'object' ? [...(x.key && x.loc !== undefined ? [x.key] : []), ...Object.values(x).flatMap(keysOf)] : []);

const q = (s) => `“${codeHtml(s)}”`;
const quoteHtml = (r) => parts(r.quote).map((p) => (p.at ? `${codeHtml(p.at)}: ${q(p.text)}` : q(p.text))).join('<br>');
const muted = (s) => `<span class="zlm">${codeHtml(s)}</span>`;

// one page: its sources in order of first citation; authors and year shared by two of them -> journal on both
export function litPage(order) {
  const keys = [...new Set(keysOf(order))];
  const count = new Map();
  for (const k of keys) count.set(authorYear(refOf(k)), (count.get(authorYear(refOf(k))) ?? 0) + 1);
  const name = (k) => authorYear(refOf(k), count.get(authorYear(refOf(k))) > 1);
  const cite = (src) => src.map((s) => `<a href="#ref-${s.key}">${codeHtml(`${name(s.key)}, ${s.loc}`)}</a>`).join('; ');
  const link = (k) => `<a href="#ref-${k}">${codeHtml(name(k))}</a>`;
  // source cell: citation, then the quote one click away
  const source = (r) => (r.quote ? `${cite(r.src)}<br><details><summary>quote</summary>${quoteHtml(r)}</details>` : cite(r.src));
  const sources = keys.map((k) => {
    const e = refOf(k);
    return { id: `ref-${k}`, html: toHtml(acs(e)), doi: e.doi, href: doiUrl(e) };
  });
  return { cite, link, source, sources, name };
}

const join = (xs) => xs.filter(Boolean).join('; ');
const defCell = (r) => [join([r.def, r.cond].map((s) => s && codeHtml(s))), r.derived && muted(r.derived)].filter(Boolean).join('; ');
const molCell = (r) => `${muted(r.kind)} · ${codeHtml(r.mol)}`;
export const EXP_HEAD = ['Molecule', 'Quantity', 'Value as printed', 'Conditions, definition, sign', 'Source'];
export const THEORY_HEAD = ['Molecule', 'Method', 'y<sub>0</sub> / occupation', 'Gap as printed', 'Definition, geometry', 'Source'];
export const T2_HEAD = 'Quantity';

// substituent labels on a page: the glosses whose suffix ends a printed label
const glossesOf = (labels) => data.glosses.filter((g) => labels.some((l) => new RegExp(`${g.suffix.replace(/[-]/g, '\\-')}(?![A-Za-z0-9])`).test(l)));

// compound-page block of one core: rows with HTML cells, legends, sub-tables, notes, sources
export function coreBlock(id) {
  const c = coreOf(id);
  if (!c) return null;
  const labels = [...c.exp, ...c.theory].map((r) => r.mol).concat(c.table2?.cols ?? [], c.ones ? [c.ones.mol] : [], c.scope.map((s) => s.mol));
  const glosses = glossesOf(labels);
  const page = litPage([glosses, c.exp, c.table2?.notes ?? [], c.ones ?? [], c.theory, c.parent ?? [], c.ident ?? [], c.printed ?? []]);
  const kinds = Object.keys(KINDS).filter((k) => [...c.exp, ...c.theory].some((r) => r.kind === k));
  const kindsOnPage = new Set([...c.exp, ...c.theory].map((r) => r.kind));
  if (kinds.length !== kindsOnPage.size) fail(`${id}: legend kinds differ from row kinds`);
  // printed footnote letters b-e: after a TPA value, at the start of its footnote
  const t2 = (t) => t && {
    head: [T2_HEAD, ...t.cols],
    rows: t.rows.map((r) => [codeHtml(r.q), ...r.cells.map((s) => codeHtml(s).replace(/(\d)([b-e])$/, '$1<sup>$2</sup>'))]),
    foot: (t.foot ?? []).map((s) => codeHtml(s).replace(/^([b-e])σ/, '<sup>$1</sup>σ')),
  };
  return {
    name: c.name,
    kinds: kinds.map((k) => `${k}: ${KINDS[k]}`).join(' · '),
    glosses: glosses.map((g) => `<span class="zs">${codeHtml(g.suffix)}: ${codeHtml(g.text)}</span> (${page.cite(g.src)})`).join(' · '),
    exp: c.exp.map((r) => [molCell(r), codeHtml(r.quantity), codeHtml(r.value), defCell(r), page.source(r)]),
    t2caption: `${page.cite([{ key: HU, loc: 'Table 2' }])}, as printed`,
    table2: c.table2 && { ...t2(c.table2), notes: c.table2.notes.map((n) => `${codeHtml(n.mol)}: ${join([n.cond && codeHtml(n.cond), page.source(n)])}`) },
    ones: c.ones && {
      summary: `${codeHtml(c.ones.mol)} · ${codeHtml(c.ones.quantity)}`,
      line: join([codeHtml(c.ones.value), c.ones.cond && codeHtml(c.ones.cond), page.cite(c.ones.src)]),
      table2: t2(c.ones.table2),
    },
    scope: c.scope.map((s) => codeHtml(s.text)),
    theory: c.theory.map((r) => [molCell(r), codeHtml(r.method), codeHtml(r.occ ?? ''), codeHtml(r.gap ?? ''), defCell(r), page.source(r)]),
    parent: (c.parent ?? []).map((r) => `${page.cite(r.src)}${r.scope ? ` (${codeHtml(r.scope)})` : ''}: ${quoteHtml(r)}`),
    ident: (c.ident ?? []).map((r) => `${codeHtml(r.text)} (${page.cite(r.src)})`),
    printed: (c.printed ?? []).map((r) => `${codeHtml(r.text)} (${page.cite(r.src)})`),
    sources: page.sources,
  };
}

// cores in the order of Hu 2016 Table 1
const T1_ORDER = data.cross.hu16Table1.rows.map((r) => r[1]);
const slugOf = (id) => zeth.compounds.find((c) => c.id === id).slug;

// index block: Table A (Hu 2016 Table 1 as printed), Table B (experiment rows per core), cross-compound sub-blocks
export function indexBlock() {
  const x = data.cross;
  const t1 = x.hu16Table1;
  const exp = T1_ORDER.map((id) => {
    const c = coreOf(id);
    const rows = [...c.exp, ...(c.table2?.notes ?? []), ...(c.ones ? [c.ones] : [])];
    return { id, mols: [...new Set(rows.map((r) => r.mol))], keys: [...new Set(rows.flatMap((r) => r.src.map((s) => s.key)))] };
  });
  const page = litPage([t1.src, exp.map((b) => b.keys.map((key) => ({ key, loc: '' }))), x.wording, x.lukman, x.y0method, x.signs, x.others, x.othersPrinted, x.printed]);
  const cell = (s) => ({ t: s, lit: true });
  return {
    tableA: {
      caption: [codeHtml(t1.caption), codeHtml(t1.caption2), codeHtml(t1.caption3)],
      title: `${page.cite(t1.src.map((s) => ({ ...s, loc: 'Table 1' })))}, as printed`,
      head: t1.head.map(cell),
      rows: t1.rows.map(([mode, id, ...rest]) => [cell(mode), { t: id, lit: true, href: `main/results/zethrenes/${slugOf(id)}/#literature` }, ...rest.map(cell)]),
    },
    tableB: exp.map((b) => [codeHtml(b.id), b.mols.map(codeHtml).join(', '), b.keys.map(page.link).join(', '), `${slugOf(b.id)}/#lit-exp`]),
    wording: x.wording.map((r) => [page.cite(r.src), codeHtml(r.scope ?? ''), quoteHtml(r)]),
    lukman: {
      quote: q(x.lukman.quote),
      cite: page.cite(x.lukman.src),
      refs: x.lukman.refs.map((r) => `ref. ${codeHtml(r.n)} = ${codeHtml(r.text)}`).join('; '),
      note: codeHtml(x.lukman.note),
    },
    y0: {
      line: `${q(x.y0method.quote)} (${page.cite(x.y0method.src)})`,
      rows: x.y0method.rows.map((r) => [codeHtml(r.method), codeHtml(r.occ ?? ''), page.source(r)]),
    },
    signs: x.signs.map((g) => ({ group: codeHtml(g.group), items: g.items.map((it) => `${page.cite(it.src)}: ${codeHtml(it.text)}`) })),
    others: x.others.map((r) => [`<span class="zlb">${codeHtml(r.mol)}</span> ${muted(`(${r.name})`)}`, codeHtml(r.quantity), codeHtml(r.value), page.source(r)]),
    othersPrinted: x.othersPrinted.map((r) => `${codeHtml(r.text)} (${page.cite(r.src)})`),
    printed: x.printed.map((r) => `${codeHtml(r.text)} (${page.cite(r.src)})`),
    sources: page.sources,
  };
}
