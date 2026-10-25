import { EH_EV, sg, sgRange } from './ladder.mjs';
import { EH_KCAL, compounds, geoms, rungs } from './zeth.mjs';
import { authorYear } from './literature.mjs';
import { refOf, vsexp } from './zethlit.mjs';

// vsexp rows with the REKS value; d = REKS - experiment. Throws on an unknown core, missing geometry/top rung, or no matching singlet.

const NM_EV = 1239.84198;
const K_PER_KCAL = 503.2195;
const TOP = rungs.at(-1).key;
const fail = (msg) => {
  throw new Error(`zethexp: ${msg}`);
};
const rec = (c, g, k) => c.geoms[g]?.rungs[k];

// E(T1) at R_T − E(S0) at the zero geometry / Eh, null where a geometry lacks the rung
const t1Eh = (c, k) => {
  const [z, t] = [rec(c, c.zero, k), rec(c, 'T', k)];
  return z && t ? t.e0['2'] - z.e0['0'] : null;
};
const times = (x, f) => (x == null ? null : x * f);
// vertical emission E(T1) − E(S0) at R_T / eV
const vertical = (c, k) => {
  const t = rec(c, 'T', k);
  return t ? (t.e0['2'] - t.e0['0']) * EH_EV : null;
};
// lowest T1 − lowest S0 over the computed geometries / eV
const minmin = (c, k) => {
  const rs = Object.keys(c.geoms).map((g) => rec(c, g, k)).filter(Boolean);
  return (Math.min(...rs.map((r) => r.e0['2'])) - Math.min(...rs.map((r) => r.e0['0']))) * EH_EV;
};
// singlet Sn (n > 0) whose first lead is config, the larger f on a tie; {v: E(Sn) − E(S0) / eV, s}
const singlet = (c, g, k, config) => {
  const r = rec(c, g, k);
  const s = r?.states
    .filter((x) => /^S[1-9]/.test(x.label) && x.E != null && x.lead[0]?.[0] === config)
    .reduce((a, x) => (a && (a.f ?? 0) >= (x.f ?? 0) ? a : x), null);
  return s ? { v: (s.E - r.e0['0']) * EH_EV, s } : null;
};

const ROWS = vsexp.map((row) => {
  const c = compounds.find((x) => x.id === row.core) ?? fail(`unknown core ${row.core}`);
  if (!rec(c, c.zero, TOP)) fail(`${row.id}: no ${c.zero} ${TOP}`);
  const { v, unit } = row.printed;
  // experiment in the unit of the REKS value: eV, kcal/mol for 2J
  const exp = unit === 'nm' ? NM_EV / v : unit === 'K' ? v / K_PER_KCAL : v;
  const base = { ...row, c, exp, film: row.film ?? null, state: null, cs: null, vert: null, min: null, kcal: null };
  if (row.kind === 'T1' || row.kind === '2J') {
    if (!rec(c, 'T', TOP)) fail(`${row.id}: no T ${TOP}`);
    const ladder = rungs.map((r) => (row.kind === 'T1' ? times(t1Eh(c, r.key), EH_EV) : times(t1Eh(c, r.key), -EH_KCAL)));
    const ours = ladder.at(-1);
    if (row.kind === '2J') return { ...base, ours, d: ours - exp, ladder };
    return {
      ...base, ours, d: ours - exp, ladder,
      vert: { ours: vertical(c, TOP), ladder: rungs.map((r) => vertical(c, r.key)) },
      min: rungs.map((r) => minmin(c, r.key)),
      kcal: rungs.map((r) => times(t1Eh(c, r.key), EH_KCAL)),
    };
  }
  const top = singlet(c, c.zero, TOP, row.config) ?? fail(`${row.id}: no singlet led by ${row.config} at ${TOP}`);
  return {
    ...base,
    ours: top.v,
    d: top.v - exp,
    state: top.s,
    ladder: rungs.map((r) => singlet(c, c.zero, r.key, row.config)?.v ?? null),
    cs: singlet(c, 'S_cs', TOP, row.config)?.v ?? null,
  };
});

// rows of one core (all cores without argument), in the order of zeth_lit.json
export const pairs = (core) => ROWS.filter((r) => !core || r.core === core);
// rows of one kind in the open panels
const main = (rows, kind) => rows.filter((p) => p.kind === kind && p.group === 'main');
// rows split by panel: T1 and absorption (open panels), more, tierB; j2: the 2J row
export const groupsOf = (rows) => ({
  t1: main(rows, 'T1'),
  ab: main(rows, 'abs'),
  more: rows.filter((p) => p.group === 'more'),
  tierB: rows.filter((p) => p.group === 'tierB'),
  j2: rows.find((p) => p.kind === '2J'),
});

export const geo = (key) => geoms.find((g) => g.key === key);
export const d2 = (v) => sg(v, 2);
// "Author (year)" of a row's first source
export const cite = (p) => authorYear(refOf(p.src[0].key));
// distinct cite() of the rows, joined by ", "
export const srcList = (rows) => [...new Set(rows.map(cite))].join(', ');
// most common zero geometry of the rows, per-core exceptions in parentheses: "R_os (IF: R_cs)"
export const zeroOf = (rows, fmt = (g) => g.html) => {
  const count = new Map();
  for (const p of rows) count.set(p.c.zero, (count.get(p.c.zero) ?? 0) + 1);
  const common = [...count].sort((a, b) => b[1] - a[1])[0][0];
  const other = [...new Set(rows.filter((p) => p.c.zero !== common).map((p) => `${p.core}: ${fmt(geo(p.c.zero))}`))];
  return `${fmt(geo(common))}${other.length ? ` (${other.join('; ')})` : ''}`;
};
export const range = (ds) => sgRange(ds, 2, 'eV');
export const counted = (rows) => {
  const k = new Set(rows.map((p) => p.core)).size;
  return `${rows.length} ${rows.length === 1 ? 'molecule' : 'molecules'} (${k} ${k === 1 ? 'core' : 'cores'})`;
};

// step from the second-last to the last rung
export const step = (p) => p.ladder.at(-1) - p.ladder.at(-2);
export const byCore = (rows) => [...new Map(rows.map((p) => [p.core, p])).values()];
const stepHead = `${rungs.at(-2).label} → ${rungs.at(-1).label}`;
const t1Steps = (t1) => `${byCore(t1).map((p) => d2(step(p))).join(' / ')} eV (${byCore(t1).map((p) => p.core).join(' / ')})`;
export const stepLine = (t1, ab) =>
  `${stepHead}: ${[t1.length && `T1 ${t1Steps(t1)}`, ab.length && `absorption ${range(byCore(ab).map(step))}`].filter(Boolean).join(', ')}; every active space in the details.`;

export const geomSource = 'UCAM-B3LYP/6-31G* geometries of Hu et al. (2016), not reoptimized';

const { t1, ab, more, tierB, j2 } = groupsOf(pairs());
const shown = [...t1, ...ab, ...more, ...tierB];
// tokens {zexp:name}
export const vars = {
  nMol: new Set(shown.map((p) => p.mol)).size,
  nCore: new Set(shown.map((p) => p.core)).size,
  absAssigned: ab.filter((p) => p.assigned).length,
  absN: ab.length,
  absRange: range(ab.map((p) => p.d)),
  j2: `${d2(j2.d)} kcal mol^{−1}`,
  j2mol: j2.mol,
  t1Step: `${stepHead}: ${t1Steps(t1)}`,
  absStep: `${stepHead}: ${range(byCore(ab).map(step))}`,
};
