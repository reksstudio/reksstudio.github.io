import data from '../data/zeth.json' with { type: 'json' };
import { fmtCount, toHtml } from './inline.mjs';
import { ladderOf, sg } from './ladder.mjs';
import { pcOf, revLineOf } from './site.mjs';
import { expSources } from './zethlit.mjs';

export const zeth = data;
// 1 Eh in kcal/mol
export const EH_KCAL = 627.509474;
export const { method, counts } = data;
// geometry {key, id (anchor prefix), plain R_cs, html R<sub>cs</sub>, markup R_{cs}, tick [R, cs]}; SI state energies in eV
export const ladder = ladderOf(data, {
  setLabel: (plain) => {
    const markup = `R_{${plain.slice(2)}}`;
    return { id: plain.slice(2).toLowerCase(), plain, html: toHtml(markup), markup, tick: ['R', plain.slice(2)] };
  },
  noun: 'geometry',
  unit: { label: 'eV', factor: 1, nd: 3 },
  grid: 0.5,
});
export const { compounds, rungs, geoms, geomsOf, topRung } = ladder;
// geometries whose largest computed active space is not the last rung: ["PIF R<sub>T</sub> at (8,8)"]
export const shortTop = () =>
  compounds.flatMap((c) => geomsOf(c).filter((g) => topRung(c, g) !== rungs.at(-1)).map((g) => `${c.id} ${g.html} at ${topRung(c, g).label}`));
export const KCAL = 'kcal mol⁻¹';
// compound with the most atoms
export const largest = compounds.reduce((a, c) => (c.atoms > a.atoms ? c : a));

// "Hu et al. (2016) give no R<sub>os</sub> for IF." for every geometry missing from a compound (all or one)
export const absentLine = (only) =>
  compounds
    .filter((c) => !only || c === only)
    .flatMap((c) => geoms.filter((g) => !c.geoms[g.key]).map((g) => `Hu et al. (2016) give no ${g.html} for ${c.id}.`))
    .join(' ');

// active spaces whose SI catalogues the install does not ship
const NOT_INSTALLED = ['88', '1010'];

// output path prefix of the section; provenance line of psi4 builds and install branch
export const PREFIX = 'main/results/zethrenes/';
export const revLine = revLineOf(method);

// "b0c2d45a7 (PC-2, PC-3, 10 runs, 2026-10-12)", dates as one day or a range
const span = (b) => (b.from.slice(0, 10) === b.to.slice(0, 10) ? b.from.slice(0, 10) : `${b.from.slice(0, 10)} to ${b.to.slice(0, 10)}`);
export const allRuns = compounds.flatMap((c) => Object.values(c.geoms).flatMap((g) => Object.values(g.rungs).map((r) => r.run)));
const pcsOf = (commit) => [...new Set(allRuns.filter((r) => r.commit === commit).map((r) => pcOf(r.host)))].sort();
const revisions = method.psi4.map((b) => `${b.commit} (${pcsOf(b.commit).join(', ')}, ${b.runs} runs, ${span(b)})`).join('; ');

// path -> llms.txt description of each data file
export const DATA = {
  'data/zethrenes_rows.tsv': `Zethrenes and related PAHs (Hu et al. 2016), one row per calculation (${counts.calculations}), tab-separated: compound, geometry (R_cs, R_os, R_T), active_space, SI sizes per 2S, E_SA and lowest E of 2S = 0, 2, 4 / Eh, dE_ST = E(T1) - E(S0) and dE_SQ = E(Q1) - E(S0) / kcal/mol (2 decimals), y0, y1 of S0, SA-REKS FONs, source .out; n/a: outside the SI space of the rung.`,
};

// dot chart spec: compounds (rows), title, axis title, tick step, dots of a rung record [{v, tip}],
// end: formatter of the value column at the right (null: no column)
const gap = (q) => ({
  compounds, title: ['ΔE', q], axis: ['ΔE', q, ` / ${KCAL}`], step: q === 'ST' ? 10 : 20,
  dots: (r) => (r.dE[q] == null ? [] : [{ v: r.dE[q], tip: `· ΔE_${q} ${sg(r.dE[q], 1)} kcal/mol` }]),
  end: (v) => sg(v, 1),
});
// natural occupations n_i of the S0 SI state, in the printed order of its natural orbitals
const occ = (cs) => ({
  compounds: cs, title: null, axis: ['n', 'i', ' of S0'], step: 0.5,
  dots: (r) => r.occ['0'].map((v, k) => ({ v, tip: `S0 n${k + 1}: ${v.toFixed(2)}` })),
  end: null,
});
export const GAPS = [gap('ST'), gap('SQ')];
// occupation chart: rows split over two panels, compounds in paper order
export const OCCS = [occ(compounds.slice(0, 4)), occ(compounds.slice(4))];
// table twins of the charts: title and cell of a rung record, one row per compound and geometry
export const GAP_TWIN = ['ST', 'SQ'].map((q) => ({ title: `ΔE_{${q}} / kcal mol^{−1}`, cell: (r) => sg(r.dE[q], 1) }));
export const OCC_TWIN = [{ title: 'Natural occupations n_{i} of S0, printed order', cell: (r) => r.occ['0'].map((v) => v.toFixed(4)).join(' ') }];

// values substituted for {zeth:name} tokens
export const vars = {
  compounds: counts.compounds,
  geometries: counts.geometries,
  calculations: counts.calculations,
  notInstalledAs: NOT_INSTALLED.map((k) => rungs.find((r) => r.key === k).label).join(' and '),
  notInstalled: compounds.flatMap((c) => Object.values(c.geoms).flatMap((g) => Object.keys(g.rungs))).filter((k) => NOT_INSTALLED.includes(k)).length,
  atoms: `${counts.atoms[0]}–${counts.atoms[1]}`,
  atomsMax: counts.atoms[1],
  nbfMax: counts.nbfMax,
  siMax: fmtCount(counts.siMax),
  functional: method.functional,
  basis: method.basis,
  sa: method.sa,
  branch: method.branch,
  revisions,
  expSources,
};
