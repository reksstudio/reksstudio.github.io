import data from '../data/scale.json' with { type: 'json' };
import lit from '../data/scale_lit.json' with { type: 'json' };
import { andList, formulaMarkup, toHtml } from './inline.mjs';
import { doiUrl, reference, shortRef } from './literature.mjs';
import { EH_EV, ladderOf, notInstalled, orbitalsOf, sg, twoSList } from './ladder.mjs';
import { counts as zethCounts } from './zeth.mjs';
import { buildOf, pcOf, revLineOf } from './site.mjs';

export const { method, counts } = data;
// set {key, id (anchor prefix), plain "6-31G(d) · BH&HLYP", html, markup, tick}; SI energies in meV above the rung's lowest state
export const ladder = ladderOf(data, {
  setLabel: (plain) => ({ id: plain.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''), plain, html: toHtml(plain), markup: plain, tick: [plain, ''] }),
  noun: 'set',
  unit: { label: 'meV', factor: 1000, nd: 1 },
  grid: 500,
  zero: 'lowest',
  holes: false,
  names: { reks: 'REKS', ssr: 'SSR' },
});
export const { compounds, rungs, rungsOf, geoms, geomsOf, topRung } = ladder;
export const PREFIX = 'main/results/large-molecules/';

// atom count of a formula in inline markup, "C_{2}H_{4}" -> 6
export const atomsOf = (f) => [...f.replace(/[_{}]/g, '').matchAll(/[A-Z][a-z]?(\d*)/g)].reduce((n, m) => n + (m[1] ? +m[1] : 1), 0);

// datasets of the reach map: legend label, colour class (spin palette); the large molecules take PALETTE in order
const PALETTE = ['s6', 's0'];
if (compounds.length > PALETTE.length) throw new Error(`scale.mjs: ${compounds.length} large molecules, ${PALETTE.length} reach-map colours`);
export const REACH_SETS = [
  { key: 'dissociation', label: 'Dissociation', cls: 's3' },
  { key: 'quest', label: 'QUEST', cls: 's2' },
  { key: 'zethrenes', label: 'Zethrenes', cls: 's1' },
  ...compounds.map((c, i) => ({ key: c.id, label: c.id, cls: PALETTE[i] })),
];
// every job of the sets; the Psi4 builds of their machines
export const allJobs = compounds.flatMap((c) => Object.values(c.geoms).flatMap((g) => Object.values(g.rungs).flatMap((r) => r.jobs)));
const pcs = [...new Set(allJobs.map((j) => pcOf(j.host)))].sort();
export const buildLine = `Psi4 branch ${method.branch}, the commit of each job on its run line; ${pcs.map((p) => `${p}: ${buildOf(p)}`).join('; ')}`;

// wall time "22 min", "1 h 56 min"; peak RSS kB -> "216 GiB" (no break before the unit)
export const wall = (s) => {
  const m = Math.round(s / 60);
  return m < 60 ? `${m} min` : `${Math.floor(m / 60)} h ${m % 60} min`;
};
export const gib = (kb) => `${Math.round(kb / 1048576)} GiB`;
// role of a job with its spin sectors: "SI 2S = 6–12", "SCF"
export const jobRole = (j) => (j.twoS ? `${j.role} 2S = ${twoSList(j.twoS)}` : j.role);
// spin sectors of a rung record in 2S order
export const sectors = (r) => Object.keys(r.si).sort((a, b) => a - b);
// "2S = 0–12"
export const spinRange = (r) => `2S = ${twoSList(sectors(r).map(Number))}`;

// sources of the experiment slot and of the geometries: literature.json keys
for (const r of [...lit.exp, ...lit.models]) for (const s of r.src) reference(s.key);
for (const c of compounds) reference(c.geometrySource);
export const litCite = ({ key, loc }) => ({ text: `${shortRef(reference(key))}, ${loc}`, href: doiUrl(reference(key)) });
export const expRows = (id) => lit.exp.filter((r) => r.core === id);
export const modelRows = (id) => lit.models.filter((r) => r.core === id);

// largest run: top rung of the sets at nbfMax with the longest SCF job (first job); every job of that rung, consecutive
// jobs on one machine × cores grouped: "SCF 2 h 12 min, SI 2S = 0 48 min on PC-1 × 96; ..."
const big = compounds
  .flatMap((c) => geomsOf(c).filter((g) => c.geoms[g.key].nbf === counts.nbfMax).map((g) => ({ c, s: c.geoms[g.key], rg: topRung(c, g) })))
  .map((x) => ({ ...x, r: x.s.rungs[x.rg.key] }))
  .reduce((a, x) => (x.r.jobs[0].wall_s > a.r.jobs[0].wall_s ? x : a));
const largestRun = (() => {
  const groups = [];
  for (const j of big.r.jobs) {
    const m = `${pcOf(j.host)} × ${j.cores}`;
    if (groups.at(-1)?.m === m) groups.at(-1).jobs.push(j);
    else groups.push({ m, jobs: [j] });
  }
  return `${big.c.id} ${big.rg.label}, ${big.s.basis} · ${big.s.functional} · ${groups.map((g) => `${g.jobs.map((j) => `${jobRole(j)} ${wall(j.wall_s)}`).join(', ')} on ${g.m}`).join('; ')}`;
})();
const top = compounds.filter((c) => c.rungs.includes(data.rungs.at(-1)[0]));

export const revLine = revLineOf(method);

// path -> llms.txt description of each data file
export const DATA = {
  'data/scale_rows.tsv': `Large molecules (TNS, TTR), one row per set and active space (${counts.calculations}), tab-separated: compound, basis, functional, active_space, nbf, E_SA / Eh, lowest state, SI configurations per 2S, lowest E per 2S / Eh and in meV above the lowest state of the row, y0, y1 of S0, SA-REKS FONs, jobs (role, .out, cores, commit, wall s, peak RSS kB); n/a: 2S not in the SI of the row.`,
};

// E(lowest of 2S = q) - E(S0) / meV of a rung record, null when the SI has no such sector
const gapMeV = (r, q) => (r.e0[q] == null ? null : (r.e0[q] - r.e0['0']) * EH_EV * 1000);
export const GAP_TWIN = [['ST', '2'], ['SQ', '4']].map(([q, s]) => ({ title: `ΔE_{${q}} / meV`, cell: (r) => sg(gapMeV(r, s), 1) }));
// rung labels, the first with its prefix f ('reks', 'ssr', 'label'): "REKS(4,4), (6,6)"
export const rungList = (rs, f) => rs.map((r, i) => (i ? r.label : r[f])).join(', ');
// active spaces of a compound "(10,10), (12,12)" or "(4,4)–(10,10)", the first prefixed by f
export const rungSpan = (c, f = 'label') => {
  const rs = rungsOf(c);
  return rs.length > 2 ? `${rs[0][f]}–${rs.at(-1).label}` : rungList(rs, f);
};

// values substituted for {scale:name} tokens
export const vars = {
  molecules: counts.molecules + zethCounts.compounds,
  atomsMax: counts.atomsMax,
  asMax: counts.asMax,
  reksMax: rungs.find((r) => r.label === counts.asMax).reks,
  asM: orbitalsOf(counts.asMax),
  asMaxOn: top.map((c) => c.id).join(', '),
  at1010: compounds.filter((c) => c.rungs.includes('1010')).map((c) => c.id).join(', '),
  basisMax: big.s.basis,
  nbfMax: counts.nbfMax,
  largestRun,
  sa: method.sa,
  rev: buildLine,
  // "TNS: a.xyz ([cite:key]); TTR: ..."
  geomLine: compounds.map((c) => `${c.id}: ${[...new Set(geomsOf(c).map((g) => c.geoms[g.key].xyz))].join(', ')} ([cite:${c.geometrySource}])`).join('; '),
  notInstalledAs: andList(rungs.filter((r) => notInstalled(r.label)).map((r, i) => (i ? r.label : r.reks))),
  // "TNS: 6-31G(d) · BH&HLYP REKS(12,12); ... TTR: ..."
  setList: compounds
    .map((c) => `${c.id}: ${geomsOf(c).map((g) => `${g.plain} ${rungList(rungsOf(c).filter((r) => c.geoms[g.key].rungs[r.key]), 'reks')}`).join('; ')}`)
    .join('. '),
  // per compound: formula fTNS "C_{132}H_{60}", active spaces asTNS "REKS(12,12)"
  ...Object.fromEntries(compounds.flatMap((c) => [[`f${c.id}`, formulaMarkup(c.formula)], [`as${c.id}`, rungSpan(c, 'reks')]])),
};
