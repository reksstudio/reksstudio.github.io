import raw from '../data/overview.json' with { type: 'json' };
import { toHtml } from './inline.mjs';
import { entryHref } from './manual-pages.mjs';
import { doiUrl, reference, shortRef } from './literature.mjs';
import { vars as quest } from './quest.mjs';
import { vars as zeth } from './zeth.mjs';
import { rows as dissocRows, vars as dissoc } from './dissoc.mjs';

const VARS = { quest, zeth, dissoc };
const TOKEN = new RegExp(`\\{(${Object.keys(VARS).join('|')}):(\\w+)\\}`, 'g');
// {lib:name} in any text -> the value computed from that lib's data, escaped for the JSON text it splices into
const data = JSON.parse(
  JSON.stringify(raw).replace(TOKEN, (_, lib, k) => {
    if (!(k in VARS[lib])) throw new Error(`overview.json: unknown token {${lib}:${k}}`);
    return JSON.stringify(String(VARS[lib][k])).slice(1, -1);
  }),
);
// index rows of a result built from its data module
const ROWS = { dissociation: dissocRows };

export const { classes, parts, results, manualRows, landing, history, moved } = data;

const PLACEHOLDER = /^(to be added|not stated in v1)/;

// inline markup -> HTML; a value starting with "to be added" or "not stated in v1" is set as a placeholder
export const html = (s) => (PLACEHOLDER.test(s) ? `<span class="ph">${toHtml(s)}</span>` : toHtml(s));

export const resultHref = (base, slug, anchor) => `${base}main/results/${slug}/${anchor ? `#${anchor}` : ''}`;
export const manualHref = (base, id) => entryHref(id, null, base);

// table cell: text, or {t, manual} / {t, href} as a link
export function cellHtml(c, base) {
  if (typeof c === 'string') return html(c);
  const href = c.manual ? manualHref(base, c.manual) : `${base}${c.href}`;
  return `<a href="${href}">${toHtml(c.t)}</a>`;
}

// index rows of a result: its own rows, else one row per block with an id (family page)
export const rowsOf = (r) =>
  ROWS[r.slug] ??
  r.rows ??
  r.blocks.filter((b) => b.id && !b.hidden).map((b) => ({ system: b.system, as: b.as, reference: r.rowRef, number: b.number ?? 'to be added', anchor: b.id }));

// [{group, rows: [{...row, cls, problem, href}]}] of one part, groups in the order of the part
export function indexRows(part, base) {
  return part.groups.map((g) => ({
    group: g,
    rows: [
      ...results.flatMap((r) =>
        rowsOf(r)
          .filter((row) => (row.cls ?? r.cls) === g)
          .map((row) => ({ ...row, slug: r.slug, problem: r.problem, href: resultHref(base, r.slug, row.anchor) })),
      ),
      ...manualRows.filter((m) => m.cls === g).map((m) => ({ ...m, href: manualHref(base, m.manual), manualRow: true })),
    ],
  })).filter((g) => g.rows.length);
}

// inline markup -> plain text (aria labels): _{x} -> x, ^{x} -> ^x
export const plain = (s) => s.replace(/_\{([^}]+)\}/g, '$1').replace(/\^\{([^}]+)\}/g, '^$1');

// literature.json key -> {text, href, authors}
export const cite = (key) => {
  const e = reference(key);
  return { text: shortRef(e), href: doiUrl(e), authors: e.authors };
};
