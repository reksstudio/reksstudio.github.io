import GithubSlugger from 'github-slugger';
import raw from '../data/overview.json' with { type: 'json' };
import { PLACEHOLDER, toHtml } from './inline.mjs';
import { entryHref } from './manual-pages.mjs';
import { citeLink, doiUrl, reference, shortRef } from './literature.mjs';
import { vars as quest } from './quest.mjs';
import { vars as zeth } from './zeth.mjs';
import { vars as dissoc } from './dissoc.mjs';
import { vars as scale } from './scale.mjs';
import { vars as exact } from './exact.mjs';
import { vars as zexp } from './zethexp.mjs';

const VARS = { quest, zeth, dissoc, scale, exact, zexp };
const TOKEN = new RegExp(`\\{(${Object.keys(VARS).join('|')}):(\\w+)\\}`, 'g');
const value = (lib, k) => {
  if (!(k in VARS[lib])) throw new Error(`overview.json: unknown token {${lib}:${k}}`);
  return String(VARS[lib][k]);
};
// {lib:name} in any text -> the value computed from that lib's data, escaped for the JSON text it splices into
const data = JSON.parse(JSON.stringify(raw).replace(TOKEN, (_, lib, k) => JSON.stringify(value(lib, k)).slice(1, -1)));

// per spin sector: spins = Configurations column, equations = sum of Equations column
const { head: eqHead, rows: eqRows } = data.landing.equations;
const confCol = eqHead.indexOf('Configurations');
const eqCol = eqHead.indexOf('Equations');
if (confCol < 0 || eqCol < 0) throw new Error('overview.json: no Configurations or Equations column in landing.equations');
for (const c of data.landing.count) {
  const rows = eqRows.filter((r) => r[0] === c.as);
  if (!rows.length) throw new Error(`overview.json: no ${c.as} rows in landing.equations`);
  c.spins = rows.map((r) => Number(r[confCol].replaceAll(' ', '')));
  c.equations = rows.reduce((s, r) => s + BigInt(r[eqCol].replaceAll(' ', '')), 0n);
}

export const { classes, results, manualRows, landing, history, moved, hub } = data;

// hub.sections entry of id; throws on an unknown id
export const section = (id) => {
  const s = hub.sections.find((x) => x.id === id);
  if (!s) throw new Error(`overview.json: no hub section ${id}`);
  return s;
};

const CITE = /\[cite:([\w-]+)\]/;
// inline markup -> HTML; [cite:key] -> linked label (needs base); placeholder text gets class "ph"
export const html = (s, base) => {
  const out = s.split(CITE).map((x, i) => {
    if (i % 2 === 0) return toHtml(x);
    if (base === undefined) throw new Error(`overview: [cite:${x}] without base`);
    return citeLink(x, base);
  }).join('');
  return PLACEHOLDER.test(s) ? `<span class="ph">${out}</span>` : out;
};

const HEADLINE = new RegExp(`\\{#(${Object.keys(VARS).join('|')}):(\\w+)\\}`);
// inline markup -> HTML; {#lib:name} -> its value as a headline number (span.hv)
export const hubHtml = (s) => {
  const p = s.split(HEADLINE);
  let out = toHtml(p[0]);
  for (let i = 1; i < p.length; i += 3) out += `<span class="hv">${toHtml(value(p[i], p[i + 1]))}</span>${toHtml(p[i + 2])}`;
  return out;
};

// hub index groups: distinct results[].problem in order, then the cost group; {t, id}
const slugger = new GithubSlugger();
export const indexGroups = [...new Set(results.map((r) => r.problem)), hub.costGroup].map((t) => ({ t, id: `index-${slugger.slug(t)}` }));

export const resultHref = (base, slug, anchor) => `${base}main/results/${slug}/${anchor ? `#${anchor}` : ''}`;
export const manualHref = (base, id) => entryHref(id, null, base);
// result-page links per hub topic: {href, t}
export const hubLinks = (base) => {
  const l = (slug, anchor, t) => ({ href: resultHref(base, slug, anchor), t });
  return {
    exactness: [l('exactness', 'identities', 'Identities'), l('exactness', 'derivatives', 'Derivatives')],
    quest: [l('quest', 'errors', 'Errors by state'), l('quest', 'sets', 'By set'), l('quest', 'table', 'Full table')],
    zethrenes: [l('zethrenes', 'ladder', 'Ladder'), l('zethrenes', 'occupations', 'Occupations')],
    zethExp: l('zethrenes', 'experiment', 'vs experiment'),
    photochemistry: [l('c2h4-photochemistry', 'meci', 'MECI'), l('c2h4-photochemistry', 'ts', 'Torsion TS'), l('c2h4-photochemistry', 'trajectory', 'Trajectory'), { href: manualHref(base, 'dynamics-inputs'), t: 'Worked inputs (Manual: dynamics)' }],
  };
};

// table cell: text, or {t, manual} / {t, href} as a link
export function cellHtml(c, base) {
  if (typeof c === 'string') return html(c);
  const href = c.manual ? manualHref(base, c.manual) : `${base}${c.href}`;
  return `<a href="${href}">${toHtml(c.t)}</a>`;
}

// inline markup -> plain text (aria labels): _{x} -> x, ^{x} -> ^x
export const plain = (s) => s.replace(/_\{([^}]+)\}/g, '$1').replace(/\^\{([^}]+)\}/g, '^$1');

// literature.json key -> {text, href, authors}
export const cite = (key) => {
  const e = reference(key);
  return { text: shortRef(e), href: doiUrl(e), authors: e.authors };
};
