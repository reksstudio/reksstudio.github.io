import raw from '../data/overview.json' with { type: 'json' };
import { toHtml } from './inline.mjs';
import { entryHref } from './manual-pages.mjs';
import { doiUrl, reference, shortRef } from './literature.mjs';
import { vars } from './quest.mjs';

// {quest:name} in any text -> the value computed from quest.json
const data = JSON.parse(
  JSON.stringify(raw).replace(/\{quest:(\w+)\}/g, (_, k) => {
    if (!(k in vars)) throw new Error(`overview.json: unknown token {quest:${k}}`);
    return vars[k];
  }),
);

export const { classes, parts, results, manualRows, landing, cost, history } = data;

const PLACEHOLDER = /^(to be added|not stated in v1)/;

// inline markup -> HTML; a value starting with "to be added" or "not stated in v1" is set as a placeholder
export const html = (s) => (PLACEHOLDER.test(s) ? `<span class="ph">${toHtml(s)}</span>` : toHtml(s));

// count with thousands separated by sep: 1234567 -> "1 234 567"
export const fmtCount = (n, sep = ' ') => n.toLocaleString('en-US').replaceAll(',', sep);

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
  r.rows ??
  r.blocks.filter((b) => b.id).map((b) => ({ system: b.system, as: b.as, reference: r.rowRef, number: b.number ?? 'to be added', anchor: b.id }));

// [{group, rows: [{...row, cls, problem, href}]}] of one part, groups in the order of the part
export function indexRows(part, base) {
  return part.groups.map((g) => ({
    group: g,
    rows: [
      ...results.filter((r) => r.cls === g).flatMap((r) =>
        rowsOf(r).map((row) => ({ ...row, slug: r.slug, problem: r.problem, href: resultHref(base, r.slug, row.anchor) })),
      ),
      ...manualRows.filter((m) => m.cls === g).map((m) => ({ ...m, href: manualHref(base, m.manual), manualRow: true })),
    ],
  })).filter((g) => g.rows.length);
}

// inline markup -> plain text (aria labels): _{x} -> x, ^{x} -> ^x
export const plain = (s) => s.replace(/_\{([^}]+)\}/g, '$1').replace(/\^\{([^}]+)\}/g, '^$1');

// {head, values} of the BH&HLYP row of cost[table]; values as numbers
export function costRow(table) {
  const row = cost[table].rows.find((r) => r[0].startsWith('BH&HLYP'));
  if (!row) throw new Error(`overview.json: no BH&HLYP row in cost.${table}`);
  return { head: cost[table].head.slice(1), values: row.slice(1).map(Number) };
}

// literature.json key -> {text, href, authors}
export const cite = (key) => {
  const e = reference(key);
  return { text: shortRef(e), href: doiUrl(e), authors: e.authors };
};
