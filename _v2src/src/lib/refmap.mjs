import overview from '../data/overview.json' with { type: 'json' };
import { systems } from './dissoc.mjs';
import { molecules } from './quest.mjs';
import { compounds as zethCompounds, ladder as zethLadder, rungs as zethRungs } from './zeth.mjs';
import { pairs } from './zethexp.mjs';
import { REACH_SETS, atomsOf, compounds, expRows, geomsOf, ladder as scaleLadder, rungsOf, vars as scaleVars } from './scale.mjs';
import { orbitalsOf, rungId } from './ladder.mjs';

export const REF_ORDER = ['same', 'related', 'surface', 'none'];
export const BAND_ORDER = ['exact', 'near-exact', 'tbe', 'experiment'];
export const COMPARED = new Set(['same', 'related']);
const R = 'main/results/';
const CLASSES = ['A', 'B', 'C', 'D'];
const problem = (slug) => overview.results.find((r) => r.slug === slug).problem;
const measured = new Set(pairs().map((p) => p.core));
const top = zethRungs.at(-1).key;

// one entry per published run: {set, slug? (dissociation), name, core?, rung?, atoms?, m?, href, hub, problem, band, ref}; href/hub site-relative; band: the hub band that shows the run
export const entries = [{ set: 'exactness', name: 'exactness checks', href: `${R}exactness/`, hub: `${R}exactness/`, problem: problem('exactness'), band: 'exact', ref: 'same' }];
const put = (e) => entries.push(e);
for (const s of systems) {
  const base = { set: 'dissociation', slug: s.slug, name: s.id.replace(/[_{}]/g, ''), atoms: atomsOf(s.id), m: orbitalsOf(s.as), href: `${R}dissociation/${s.slug}/`, hub: `${R}dissociation/`, problem: problem('dissociation') };
  const bands = [s.ref && 'near-exact', Object.keys(s.values.exp ?? {}).length && 'experiment'].filter(Boolean);
  if (CLASSES.includes(s.cls) && bands.length) for (const band of bands) put({ ...base, band, ref: 'same' });
  else put({ ...base, band: 'near-exact', ref: 'none' });
}
for (const q of molecules) {
  const ks = new Set(Object.values(q.states).flatMap((byF) => Object.values(byF).flatMap((r) => Object.keys(r.rungs ?? {}))));
  for (const k of ks) put({ set: 'quest', name: q.name, atoms: q.atoms, m: orbitalsOf(k), href: `${R}quest/${q.slug}/`, hub: `${R}quest/`, problem: problem('quest'), band: 'tbe', ref: 'same' });
}
for (const c of zethCompounds) {
  for (const r of zethLadder.rungs) {
    const g = zethLadder.geomsOf(c).find((x) => c.geoms[x.key].rungs[r.key]);
    if (!g) continue;
    const rel = measured.has(c.id) && r.key === top;
    put({ set: 'zethrenes', name: c.id, core: c.id, rung: r.label, atoms: c.atoms, m: orbitalsOf(r.key), href: `${R}zethrenes/${c.slug}/#${rungId(g, r)}`, hub: `${R}zethrenes/`, problem: problem('zethrenes'), band: 'experiment', ref: rel ? 'related' : 'none' });
  }
}
for (const c of compounds) {
  const ref = expRows(c.id).length ? 'surface' : 'none';
  for (const r of rungsOf(c)) {
    const g = geomsOf(c).find((x) => c.geoms[x.key].rungs[r.key]);
    put({ set: c.id, name: c.id, core: c.id, rung: r.label, atoms: c.atoms, m: orbitalsOf(r.key), href: `${R}large-molecules/${c.slug}/#${rungId(g, r)}`, hub: `${R}large-molecules/${c.slug}/`, problem: problem('large-molecules'), band: 'experiment', ref });
  }
}
put({ set: 'photochemistry', name: 'C2H4 photochemistry', href: `${R}c2h4-photochemistry/`, hub: `${R}c2h4-photochemistry/`, problem: problem('c2h4-photochemistry'), band: 'experiment', ref: 'none' });

// one dot per (set, atoms, M) over entries with atoms; href: the single run at the dot, else hub
export const reach = () => {
  const dots = new Map();
  for (const e of entries.filter((x) => x.atoms)) {
    const key = `${e.set}|${e.atoms}|${e.m}`;
    if (!dots.has(key)) dots.set(key, { ...e, names: [], hrefs: new Set() });
    dots.get(key).names.push(e.name);
    dots.get(key).hrefs.add(e.href);
  }
  return [...dots.values()].map(({ hrefs, ...d }) => ({ ...d, names: [...new Set(d.names)], href: hrefs.size === 1 ? [...hrefs][0] : d.hub }));
};

const sets = Object.fromEntries(REACH_SETS.map((s) => [s.key, s]));
// REACH_SETS entry of a dot
export const reachSet = (d) => sets[d.set];
// "QUEST: furan, imidazole · 9 atoms · REKS(4,4)"
export const reachTitle = (d) => {
  const { label } = reachSet(d);
  return `${label}${d.names.length > 1 || d.names[0] !== label ? `: ${d.names.join(', ')}` : ''} · ${d.atoms} atoms · ${scaleLadder.names.reks}(${d.m},${d.m})`;
};
// active-space rows M0..M1 in steps of 2: M0 the smallest of the dots, M1 the largest published
export const reachRows = (dots) => {
  const [M0, M1] = [Math.min(...dots.map((d) => d.m)), orbitalsOf(scaleVars.asMax)];
  return { M0, M1, rows: Array.from({ length: (M1 - M0) / 2 + 1 }, (_, i) => M0 + 2 * i) };
};
// one label per large molecule at its highest dot: {t, atoms, m}
export const reachLabels = (dots) => compounds.map((c) => ({ t: c.id, atoms: c.atoms, m: Math.max(...dots.filter((d) => d.set === c.id).map((d) => d.m)) }));
