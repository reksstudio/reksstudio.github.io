import data from '../data/zeth.json' with { type: 'json' };
import { fmtCount, toHtml } from './inline.mjs';
import { reference, shortRef } from './literature.mjs';
import { signed } from './quest.mjs';
import { BRANCH, REPO_URL } from './site.mjs';
import { expSources } from './zethlit.mjs';

export const zeth = data;
// 1 Eh in eV and in kcal/mol
export const EH_EV = 27.21138602;
export const EH_KCAL = 627.509474;
export const { method, counts, compounds } = data;
export const rungs = data.rungs.map(([key, label]) => ({ key, label }));
// {key, id (anchor prefix), plain R_cs, html R<sub>cs</sub>, markup R_{cs}}
export const geoms = data.geoms.map(([key, plain]) => {
  const markup = `R_{${plain.slice(2)}}`;
  return { key, id: plain.slice(2).toLowerCase(), plain, html: toHtml(markup), markup };
});
// geometries of a compound, in the order of geoms
export const geomsOf = (c) => geoms.filter((g) => c.geoms[g.key]);
// largest computed active space of one geometry of a compound
export const topRung = (c, g) => rungs.findLast((r) => c.geoms[g.key].rungs[r.key]);
// geometries whose largest computed active space is not the last rung: ["PIF R<sub>T</sub> at (8,8)"]
export const shortTop = () =>
  compounds.flatMap((c) => geomsOf(c).filter((g) => topRung(c, g) !== rungs.at(-1)).map((g) => `${c.id} ${g.html} at ${topRung(c, g).label}`));
export const SPINS = [
  { s: '0', label: 'S0', cls: 's0' },
  { s: '2', label: 'T1', cls: 's1' },
  { s: '4', label: 'Q1', cls: 's2' },
];

// difference with sign, "0.0" when it rounds to zero; null -> "n/a" (outside the SI space of the rung)
export const sg = (v, nd = 3) => (v == null ? 'n/a' : Number(v.toFixed(nd)) === 0 ? (0).toFixed(nd) : signed(v, nd));
export const f4 = (v) => (v == null ? 'n/a' : v.toFixed(4));
export const KCAL = 'kcal mol⁻¹';
// active orbital label "H-1" -> "H−1"; pattern "H-1,H>L,L+1" -> "H−1,H→L,L+1", "ref" -> no electron moved
export const orb = (t) => t.replace('-', '−');
export const pattern = (t) => (t === 'ref' ? 'ground (reference pairs)' : t.replaceAll('-', '−').replace('>', '→'));
// listed weight from which the leading patterns of a state are shown
const LISTED_MIN = 50;
// "H,H→L,L 59 %, H−1→L 21 %", or the listed share when the listed configurations carry less than half the state
export const leadText = (s) =>
  s.listed >= LISTED_MIN ? s.lead.map(([t, p]) => `${pattern(t)} ${p} %`).join(', ') : `listed configurations ${s.listed.toFixed(1)} % of the state`;
// density change of the active orbitals from S0: "H −0.82, L +0.81"
export const sigText = (s) => s.sig.map(([o, v]) => `${orb(o)} ${sg(v, 2)}`).join(', ');
// level hover: "FP R_os (10,10) S1 · +1.537 eV · ΔD H −0.82, L +0.81 · H→L 95 %"
export const levelTitle = (c, g, rg, s) =>
  [`${c.id} ${g.plain} ${rg.label} ${s.label}`, `${sg(s.eV)} eV`, s.sig.length > 0 && `ΔD ${sigText(s)}`, leadText(s)].filter(Boolean).join(' · ');
export const NOT_COMPUTED = '–';
// SVG coordinate to one decimal
export const f1 = (v) => Math.round(v * 10) / 10;

// compound page, relative to the zethrenes page
export const cmpHref = (c) => `${c.slug}/`;
export const cardId = (c) => `c-${c.slug}`;
export const rungId = (g, r) => `${g.id}-${r.key}`;
// "C28H16" -> "C_{28}H_{16}" (inline markup)
export const formulaMarkup = (f) => f.replace(/(\d+)/g, '_{$1}');
export const title = (c) => `${c.name[0].toUpperCase()}${c.name.slice(1)}`;

// "Hu et al. (2016) give no R<sub>os</sub> for IF." for every geometry missing from a compound (all or one)
export const absentLine = (only) =>
  compounds
    .filter((c) => !only || c === only)
    .flatMap((c) => geoms.filter((g) => !c.geoms[g.key]).map((g) => `Hu et al. (2016) give no ${g.html} for ${c.id}.`))
    .join(' ');

const hu = reference('hu2016-tetraradicaloid');
// active spaces whose SI catalogues the install does not ship
const NOT_INSTALLED = ['88', '1010'];

// output path prefix of the section; provenance line of psi4 builds and install branch
export const PREFIX = 'main/results/zethrenes/';
export const revLine = `Psi4 builds of these outputs: ${method.psi4.map((b) => b.commit).join(', ')} (${method.branch}), named on each run line. Install: branch ${BRANCH} of <${REPO_URL}>.`;

// "b0c2d45a7 (fenrir psi4-reks, 10 runs, 2026-10-12)", dates as one day or a range
const span = (b) => (b.from.slice(0, 10) === b.to.slice(0, 10) ? b.from.slice(0, 10) : `${b.from.slice(0, 10)} to ${b.to.slice(0, 10)}`);
const revisions = method.psi4.map((b) => `${b.commit} (${b.tree}, ${b.runs} runs, ${span(b)})`).join('; ');

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
  hu: shortRef(hu),
  huDoi: hu.doi,
  expSources,
};
