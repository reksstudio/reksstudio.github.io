import data from '../data/quest.json' with { type: 'json' };

export const quest = data;
export const { funcs, states, sets, molecules, counts } = data;

// set_stats row: QUEST set ('3' ... '7', 'all') x functional key x group (S1 ... T2, S, T, all)
export function stat(q, f, g) {
  const s = data.stats.find((x) => x.q === q && x.f === f && x.g === g);
  if (!s) throw new Error(`quest.json: no stats row ${q} ${f} ${g}`);
  return s;
}

export const n3 = (v) => v.toFixed(3);
// signed with a typographic minus: 0.1 -> "+0.100", -0.1 -> "−0.100"
export const signed = (v, nd = 3) => `${v < 0 ? '−' : '+'}${Math.abs(v).toFixed(nd)}`;
// value per functional joined in the functional order: "0.216 / 0.236 / 0.224"
export const perF = (fn) => funcs.map((f) => fn(f)).join(' / ');
export const funcLabels = perF((f) => f.label);

// molecule page and its state anchor, relative to the QUEST page
export const molHref = (m, s) => `${m.slug}/${s ? `#${s.toLowerCase()}` : ''}`;
// tooltip of one chart dot: "furan · S1 · BH&HLYP: Δ +0.086 eV, (4,4)"
export const dotTitle = (m, s, f, r) => `${m.name} · ${s} · ${f.label}: Δ ${signed(r.d)} eV, ${r.as}`;

const GREEK = { Sigma: 'Σ', Delta: 'Δ', Pi: 'Π' };
// csv irrep -> inline markup: B3u -> B_{3u}, A1'' -> A_{1}′′, Sigma_u- -> Σ_{u}^{−}, MIXED -> –
export function irrep(s) {
  if (s === 'MIXED') return '–';
  const g = s.match(/^(Sigma|Delta|Pi)(?:_([gu]))?([+-])?$/);
  if (g) return `${GREEK[g[1]]}${g[2] ? `_{${g[2]}}` : ''}${g[3] ? `^{${g[3] === '-' ? '−' : '+'}}` : ''}`;
  const m = s.match(/^([ABE])(\d?[gu]?)('*)$/);
  if (!m) throw new Error(`quest.json: unknown irrep ${s}`);
  return `${m[1]}${m[2] ? `_{${m[2]}}` : ''}${'′'.repeat(m[3].length)}`;
}

// tokens {quest:name} in overview.json text
export const vars = {
  molecules: counts.molecules,
  pairs: counts.pairs,
  singlet: counts.perState.S1 + counts.perState.S2,
  triplet: counts.perState.T1 + counts.perState.T2,
  perState: states.map((s) => counts.perState[s]).join(' / '),
  complete: counts.complete,
  geometryOnly: counts.geometryOnly.join(' and '),
  mae: perF((f) => n3(stat('all', f.key, 'all').MAE)),
  medae: perF((f) => n3(stat('all', f.key, 'all').MedAE)),
  basis: data.basis.join(', '),
  funcs: funcLabels,
};
