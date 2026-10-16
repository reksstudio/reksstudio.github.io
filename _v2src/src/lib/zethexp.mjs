import { EH_EV, EH_KCAL, compounds, rungs } from './zeth.mjs';
import { vsexp } from './zethlit.mjs';

// REKS vs experiment: each vsexp row with the REKS value from zeth.json energies (Eh); d = REKS - experiment.
// Throws on an unknown core, a missing geometry or top rung, or no singlet led by the row's configuration.

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
