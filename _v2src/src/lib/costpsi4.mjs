// Cost page section B (inside Psi4, paper v1): every number from public/data/cost_psi4.tsv.txt
import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { formulaMarkup } from './inline.mjs';

// paths resolve against the working directory (Astro project root)
const ROOT = pathToFileURL(`${process.cwd()}/`);
const SOURCE = 'data/cost_psi4.tsv';
const COLS = ['molecule', 'name', 'formula', 'charge', 'atoms', 'basis', 'nbf', 'functional', 'method', 'space', 'states',
  'n_repeats', 'n_ok', 'rep_time', 'niter', 'wall_s', 'wall_min', 'wall_max', 'scf_wall_s', 'fock_wall_s', 'fock_calls',
  'si_wall_s', 'rep_peak', 'peak_mb'];
const TEXT = new Set(['molecule', 'name', 'formula', 'basis', 'functional', 'method', 'space']);
// columns empty by design: space of the references, states of the SCF jobs, si_wall_s outside SSR
const OPTIONAL = new Set(['space', 'states', 'si_wall_s']);
export const SIX_LARGEST = 6;

// tab-separated text -> rows {col: string}; header must equal COLS
function parseTsv(text) {
  const [head, ...lines] = text.trimEnd().split('\n');
  if (head !== COLS.join('\t')) throw new Error(`${SOURCE}: header differs from ${COLS.join(',')}`);
  return lines.map((l, i) => {
    const f = l.split('\t');
    if (f.length !== COLS.length) throw new Error(`${SOURCE} line ${i + 2}: ${f.length} fields, expected ${COLS.length}`);
    return Object.fromEntries(COLS.map((c, k) => [c, f[k]]));
  });
}

const typed = (r, i) =>
  Object.fromEntries(
    COLS.map((c) => {
      if (r[c] === '' && !OPTIONAL.has(c)) throw new Error(`${SOURCE} row ${i + 2}: empty ${c}`);
      if (TEXT.has(c) || r[c] === '') return [c, r[c] === '' ? null : r[c]];
      const v = Number(r[c]);
      if (!Number.isFinite(v)) throw new Error(`${SOURCE} row ${i + 2}: ${c} = ${r[c]} is not a number`);
      return [c, v];
    }),
  );

const cells = parseTsv(readFileSync(new URL(`public/${SOURCE}.txt`, ROOT), 'utf8')).map(typed);

export const uniq = (xs) => [...new Set(xs)];
const label = (map, what) => (fn) => {
  if (!(fn in map)) throw new Error(`${SOURCE}: unknown functional ${fn} (${what})`);
  return map[fn];
};
export const fnLabel = label({ bhhlyp: 'BH&HLYP', hf: 'HF' }, 'name');
export const refLabel = label({ bhhlyp: 'RKS', hf: 'RHF' }, 'reference');
export const tdaLabel = label({ bhhlyp: 'TDDFT-TDA', hf: 'CIS' }, 'TDA');
export const tdaShort = label({ bhhlyp: 'TDA', hf: 'CIS' }, 'TDA');
export const functionals = uniq(cells.map((c) => c.functional));
functionals.forEach(fnLabel);
// active spaces in ladder order
export const spaces = uniq(cells.filter((c) => c.space).map((c) => c.space)).sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)));

// SVG drawing size from its width / height attributes (draw_molecules.py)
const drawing = (id) => {
  const file = `figures/cost/mol/${id}.svg`;
  let text;
  try {
    text = readFileSync(new URL(`public/${file}`, ROOT), 'utf8');
  } catch {
    throw new Error(`${SOURCE}: drawing missing for molecule ${id}: public/${file} (run draw_molecules.py)`);
  }
  const [, w, h] = text.match(/<svg[^>]* width="(\d+)" height="(\d+)"/) ?? [];
  if (!w) throw new Error(`public/${file}: no width / height`);
  return { svg: file, w: Number(w), h: Number(h) };
};

const META = ['molecule', 'name', 'formula', 'charge', 'atoms', 'basis', 'nbf'];
export const molecules = uniq(cells.map((c) => c.molecule))
  .map((id) => {
    const rs = cells.filter((c) => c.molecule === id);
    for (const k of META) if (uniq(rs.map((r) => r[k])).length > 1) throw new Error(`${SOURCE}: ${id} has two values of ${k}`);
    const r = rs[0];
    return { id, name: r.name, formula: r.formula, charge: r.charge, atoms: r.atoms, basis: r.basis, nbf: r.nbf, ...drawing(id) };
  })
  .sort((a, b) => a.nbf - b.nbf);
if (molecules.length < SIX_LARGEST) throw new Error(`${SOURCE}: ${molecules.length} molecules, fewer than ${SIX_LARGEST}`);
export const molId = (m) => `mol-${m.id}`;
export const molHref = (m) => `#${molId(m)}`;
// "C5H9N2", charge 1 -> "C_{5}H_{9}N_{2}^{+}"
export const molFormulaMarkup = (m) =>
  `${formulaMarkup(m.formula)}${m.charge ? `^{${Math.abs(m.charge) > 1 ? Math.abs(m.charge) : ''}${m.charge > 0 ? '+' : '−'}}` : ''}`;

// basis sets in nbf order with their molecules; a basis must hold one contiguous nbf range
export const bases = uniq(molecules.map((m) => m.basis)).map((basis) => ({ basis, mols: molecules.filter((m) => m.basis === basis) }));
if (bases.some((b, i) => i && b.mols[0].nbf < bases[i - 1].mols.at(-1).nbf)) throw new Error(`${SOURCE}: basis sets overlap in nbf`);
export const testSet = { n: molecules.length, nbf_min: molecules[0].nbf, nbf_max: molecules.at(-1).nbf, bases };

// one job: kind 'scf' (reference, SA-REKS) or 'exc' (TDA, SSR); space null = reference / TDA
export function job(id, fn, kind, sp = null) {
  const r = cells.filter((c) => c.molecule === id && c.functional === fn && (c.states != null) === (kind === 'exc') && c.space === sp);
  if (r.length !== 1) throw new Error(`${SOURCE}: ${r.length} rows for ${id} ${fn} ${kind} ${sp}`);
  return r[0];
}
const states = (fn, sp) => uniq(molecules.map((m) => job(m.id, fn, 'exc', sp).states));
// state count per job: one value over molecules and functionals
export const nStates = (sp = null) => {
  const n = uniq(functionals.flatMap((fn) => states(fn, sp)));
  if (n.length !== 1) throw new Error(`${SOURCE}: state count of ${sp ?? 'TDA'} differs between rows`);
  return n[0];
};

// repeats run per job: one value over the file
export const repeats = (() => {
  const n = uniq(cells.map((c) => c.n_repeats));
  if (n.length !== 1) throw new Error(`${SOURCE}: n_repeats differs between rows`);
  return n[0];
})();

const perBuild = (r) => r.fock_wall_s / r.fock_calls;
// per-molecule quantity {v, a, b}: value and, for a ratio v = a / b, the two measured numbers
const Q = {
  // whole SCF job wall, SA-REKS / reference (fig6)
  scf_ratio: (id, fn, sp) => ratio(job(id, fn, 'scf', sp).wall_s, job(id, fn, 'scf').wall_s),
  // one Fock build, SA-REKS / reference (fig2)
  fock_ratio: (id, fn, sp) => ratio(perBuild(job(id, fn, 'scf', sp)), perBuild(job(id, fn, 'scf'))),
  // whole SSR run / whole 20-state TDA run (fig8)
  ssr_tda_ratio: (id, fn, sp) => ratio(job(id, fn, 'exc', sp).wall_s, job(id, fn, 'exc').wall_s),
  // SI step / TDA response = TDA wall - its SCF wall (fig4)
  si_response_ratio: (id, fn, sp) => {
    const t = job(id, fn, 'exc');
    return ratio(job(id, fn, 'exc', sp).si_wall_s, t.wall_s - t.scf_wall_s);
  },
  // peak memory, SA-REKS / reference (fig3) and SSR / TDA (fig7)
  memory_scf_ratio: (id, fn, sp) => ratio(job(id, fn, 'scf', sp).peak_mb, job(id, fn, 'scf').peak_mb),
  memory_excited_ratio: (id, fn, sp) => ratio(job(id, fn, 'exc', sp).peak_mb, job(id, fn, 'exc').peak_mb),
  // SCF iterations (fig6), Fock time per build (fig1); sp null = reference
  iterations: (id, fn, sp) => ({ v: job(id, fn, 'scf', sp).niter }),
  fock_s_per_build: (id, fn, sp) => ({ v: perBuild(job(id, fn, 'scf', sp)) }),
};
function ratio(a, b) {
  return { v: a / b, a, b };
}
// [{m, v, a, b}] in nbf order
export const perMolecule = (q, fn, sp = null) => molecules.map((m) => ({ m, ...Q[q](m.id, fn, sp) }));

const median = (xs) => {
  const s = [...xs].sort((a, b) => a - b);
  const k = s.length >> 1;
  return s.length % 2 ? s[k] : (s[k - 1] + s[k]) / 2;
};
function summary(vals) {
  return {
    n: vals.length, median: median(vals), min: Math.min(...vals), max: Math.max(...vals),
    n_below_1: vals.filter((v) => v < 1).length, n_above_1: vals.filter((v) => v > 1).length,
  };
}
// all molecules or the six largest nbf
export const stat = (q, fn, sp = null, six = false) => summary(perMolecule(q, fn, sp).slice(six ? -SIX_LARGEST : 0).map((p) => p.v));

// (k, R^2) of y = c N^k: least squares of ln y on ln N over points with y > 0
function powerlaw(pts) {
  const p = pts.filter(([, y]) => y > 0);
  const xs = p.map(([x]) => Math.log(x));
  const ys = p.map(([, y]) => Math.log(y));
  const mx = xs.reduce((s, v) => s + v, 0) / xs.length;
  const my = ys.reduce((s, v) => s + v, 0) / ys.length;
  const k = xs.reduce((s, x, i) => s + (x - mx) * (ys[i] - my), 0) / xs.reduce((s, x) => s + (x - mx) ** 2, 0);
  const ss = ys.reduce((s, y) => s + (y - my) ** 2, 0);
  const res = xs.reduce((s, x, i) => s + (ys[i] - my - k * (x - mx)) ** 2, 0);
  return { k, r2: 1 - res / ss };
}
// Fock time per build against nbf, all molecules; sp null = reference
export const fockExponent = (fn, sp = null) => powerlaw(perMolecule('fock_s_per_build', fn, sp).map((p) => [p.m.nbf, p.v]));

// printed forms: ratios 2 decimals; seconds 3 significant digits, integer from 100 s; GiB 1 decimal; "1/1105"
export const f2 = (v) => v.toFixed(2);
export const fsec = (v) => (v >= 100 ? v.toFixed(0) : v.toPrecision(3));
export const gibOfMb = (mb) => (mb / 1024).toFixed(1);
export const inverse = (v) => `1/${Math.round(1 / v)}`;

// pooled over spaces x functionals, six largest
const pooled = (q) => summary(functionals.flatMap((fn) => spaces.flatMap((sp) => perMolecule(q, fn, sp).slice(-SIX_LARGEST).map((p) => p.v))));
export const memory = {
  scf: pooled('memory_scf_ratio'),
  excited: pooled('memory_excited_ratio'),
  perSpace: summary(functionals.flatMap((fn) => spaces.map((sp) => stat('memory_scf_ratio', fn, sp, true).median))),
};

const big = spaces.at(-1);
// SCF iteration medians of the largest space and of its reference, BH&HLYP first
export const iterSentence = `${fnLabel(functionals[0])}, SA-REKS${big} from ${refLabel(functionals[0])} orbitals: median ${stat('iterations', functionals[0], big).median} SCF iterations; ${refLabel(functionals[0])} from SAD: ${stat('iterations', functionals[0]).median}.`;

export const DATA = {
  [SOURCE]: `Cost benchmark B (paper v1): SA-REKS and SSR against RKS / RHF and 20-state TDA / CIS inside Psi4, ${testSet.n} molecules, ${testSet.nbf_min}–${testSet.nbf_max} basis functions, BH&HLYP and HF; one row per molecule, functional and job (${cells.length}), tab-separated: ${COLS.join(', ')}. method: rks = reference, reks<nn> = SA-REKS, tda020 = 20-state TDA, ssr<nn> = SSR; states: states computed. Wall and SCF wall in s (whole process; fastest converged repeat rep_time; min, max over converged repeats), n_ok of n_repeats converged; Fock wall in s over fock_calls builds; si_wall_s = SI step of SSR; peak_mb = smallest peak RSS over all repeats (rep_peak), MiB.`,
};
