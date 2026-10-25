import { signed } from './quest.mjs';

// difference with sign, "0.0" when it rounds to zero; null -> "n/a" (outside the SI space of the rung)
export const sg = (v, nd = 3) => (v == null ? 'n/a' : Number(v.toFixed(nd)) === 0 ? (0).toFixed(nd) : signed(v, nd));
export const f4 = (v) => (v == null ? 'n/a' : v.toFixed(4));
// orbital label "H-1" -> "H−1"
export const orb = (t) => t.replace('-', '−');
// pattern "H-1,H>L,L+1" -> "H−1,H→L,L+1"; "ref" = no electron moved
export const pattern = (t) => (t === 'ref' ? 'ground (reference pairs)' : t.replaceAll('-', '−').replace('>', '→'));
// listed weight from which the leading patterns of a state are shown
const LISTED_MIN = 50;
// "H,H→L,L 59 %, H−1→L 21 %", or the listed share when the listed configurations carry less than half the state
export const leadText = (s) =>
  s.listed >= LISTED_MIN ? s.lead.map(([t, p]) => `${pattern(t)} ${p} %`).join(', ') : `listed configurations ${s.listed.toFixed(1)} % of the state`;
// density change of the active orbitals from S0: "H −0.82, L +0.81"
export const sigText = (s) => s.sig.map(([o, v]) => `${orb(o)} ${sg(v, 2)}`).join(', ');
export const NOT_COMPUTED = '–';
export { r1 as f1 } from './svgmarks.mjs';
// spin letter of a state label: "S0" -> "S", "Sp1" -> "Sp"
export const letter = (label) => label.match(/^[A-Z][a-z]?/)[0];
// compound page, relative to its set page
export const cmpHref = (c) => `${c.slug}/`;
// compound name with a capital first letter
export const title = (c) => `${c.name[0].toUpperCase()}${c.name.slice(1)}`;
// anchors: compound card on the set page, calculation block of geometry g and rung r on the compound page
export const cardId = (c) => `c-${c.slug}`;
export const rungId = (g, r) => `${g.id}-${r.key}`;
// legend of the orbital blocks of a compound page
export const ORB_KEY = '<b>slot</b> MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair';

// 1 Eh in eV
export const EH_EV = 27.21138602;
// orbitals M of an active-space label "(10,10)" or a rung key "1010"
export const orbitalsOf = (t) => parseInt(t[0] === '(' ? t.slice(1) : t.slice(0, t.length / 2), 10);
// 2S values "0–12" when they run in steps of 2 over more than two, else "0, 2"
export const twoSList = (s) => (s.length > 2 && s.every((v, i) => i === 0 || v - s[i - 1] === 2) ? `${s[0]}–${s.at(-1)}` : s.join(', '));

const SPINS = [
  { s: '0', label: 'S0', cls: 's0' },
  { s: '2', label: 'T1', cls: 's1' },
  { s: '4', label: 'Q1', cls: 's2' },
];
// accessors of a ladder dataset (zeth.json schema); zero: 'S0' or 'lowest'; names: prefixes of rung.reks / rung.ssr
export const ladderOf = (json, { setLabel, noun, unit, spins = SPINS, grid, zero = 'S0', holes = true, names = { reks: '', ssr: '' } }) => {
  const rungs = json.rungs.map(([key, label]) => ({ key, label, reks: `${names.reks}${label}`, ssr: `${names.ssr}${label}` }));
  const geoms = json.geoms.map(([key, plain]) => ({ key, ...setLabel(plain) }));
  const geomsOf = (c) => geoms.filter((g) => c.geoms[g.key]);
  // rungs of the compounds' own rung lists (all rungs for compounds without one)
  const rungsOf = (...cs) => rungs.filter((r) => cs.some((c) => !c.rungs || c.rungs.includes(r.key)));
  // chart energy of state s of rung record r / eV
  const level = zero === 'S0' ? (r, s) => s.eV : (r, s) => (s.E - r.low.E) * EH_EV;
  const zeroLabel = zero === 'S0' ? 'E(S0)' : 'E(lowest)';
  // largest computed active space of one geometry of a compound
  const topRung = (c, g) => rungs.findLast((r) => c.geoms[g.key].rungs[r.key]);
  // shown states of a spin: "S0–S5", "Q1"
  const range = (L) => {
    const ls = json.states.filter((s) => letter(s) === L);
    return ls.length > 1 ? `${ls[0]}–${ls.at(-1)}` : ls[0];
  };
  const sp = spins.map((x) => ({ ...x, letter: letter(x.label), shown: range(letter(x.label)) }));
  // level hover: "FP R_os (10,10) S1 · +1.537 eV · ΔD H −0.82, L +0.81 · H→L 95 %"
  const levelTitle = (c, g, rg, s) =>
    [`${c.id} ${g.plain} ${rg.ssr} ${s.label}`, `${sg(level(c.geoms[g.key].rungs[rg.key], s) * unit.factor, unit.nd)} ${unit.label}`, s.sig.length > 0 && `ΔD ${sigText(s)}`, leadText(s)]
      .filter(Boolean)
      .join(' · ');
  return { compounds: json.compounds, rungs, rungsOf, geoms, geomsOf, topRung, noun, spins: sp, unit, grid, level, zeroLabel, holes, levelTitle, names };
};
