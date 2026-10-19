import data from '../data/dissociation.json' with { type: 'json' };
import overview from '../data/overview.json' with { type: 'json' };
import TEXT from '../data/dissociation_text.json' with { type: 'json' };
import { escape, toHtml } from './inline.mjs';
import { authorYear, reference, shortRef } from './literature.mjs';
import { BRANCH, REPO_URL } from './site.mjs';

const { rules } = data;
const EV = rules.EV;
export const FIG_DECIMALS = rules.fig_decimals;
// source note of a value read from the paper figure ("Fig. 3")
const FIG = rules.fig_note;
// "min": every curve to its own minimum in eV; "abs": E / Eh
const REL = rules.zero === 'min';

export const systems = [...data.systems].sort((a, b) => a.order - b.order);
export const chains = systems.filter((s) => s.kind === 'chain' && s.ref);
export const far = systems.filter((s) => s.kind === 'chain' && !s.ref);
export const molecules = systems.filter((s) => s.kind === 'molecule');
// molecules with near-exact reference points, and with an experimental value
export const pointMols = molecules.filter((s) => s.ref);
const expMols = molecules.filter((s) => Object.keys(s.values.exp ?? {}).length);
// molecules with an experimental R_e: the bond-length card (every one, C2 included)
const reMols = expMols.filter((s) => s.values.exp?.Re);

export const sysHref = (s) => `${s.slug}/`;
export const OUT_OF_REACH = 'FCI out of reach at this size';

// markup "H_{8}", "^{1}S_{g}^{+}" -> escaped SVG tspans; dy = run offset (sub +3, sup -4, base 0) minus the current one
export const sub = (s) => {
  let cur = 0;
  return s.split(/([_^]\{[^}]+\})/).filter((t) => t !== '').map((t) => {
    const m = t.match(/^([_^])\{([^}]+)\}$/);
    const off = m ? (m[1] === '_' ? 3 : -4) : 0;
    const body = escape(m ? m[2] : t);
    const dy = off - cur;
    cur = off;
    if (!m && dy === 0) return body;
    return `<tspan${m ? ' class="sb"' : ''}${dy ? ` dy="${dy}"` : ''}>${body}</tspan>`;
  }).join('');
};
const SUBS = '₀₁₂₃₄₅₆₇₈₉';
const SUPS = { 1: '¹', 2: '²', 3: '³', 4: '⁴', '+': '⁺', '−': '⁻' };
// markup -> plain Unicode text (<title>, aria): digits sub- and superscripted, other scripts inline
export const uni = (s) =>
  s.replace(/_\{([^}]+)\}/g, (_, x) => (/^\d+$/.test(x) ? [...x].map((c) => SUBS[c]).join('') : x))
    .replace(/\^\{([^}]+)\}/g, (_, x) => [...x].map((c) => SUPS[c] ?? c).join(''));

// fixed-point with nd decimals, U+2212 for minus
export const num = (v, nd) => v.toFixed(nd).replace('-', '−');
// R range end: 3 decimals, a trailing zero dropped: 0.700 -> 0.70, 4.925 -> 4.925
const rEnd = (v) => v.toFixed(3).replace(/0$/, '');
const rRange = (s) => `${rEnd(s.R[0])}–${rEnd(s.R.at(-1))}`;
const asOf = (s) => s.as;
const asRange = (list) => {
  const sp = [...new Set(list.map(asOf))].sort((a, b) => parseInt(a.slice(1), 10) - parseInt(b.slice(1), 10));
  return sp.length === 1 ? sp[0] : `${sp[0]}–${sp.at(-1)}`;
};
// "H_{2}-H_{8}" (en dash) for consecutive chains, "C_{2}H_{4}, C_{2}" for molecules
const idRange = (list) => (list.length > 2 && list.every((s) => s.kind === 'chain') ? `${list[0].id}–${list.at(-1).id}` : list.map((s) => s.id).join(', '));
const andList = (xs) => (xs.length < 2 ? xs.join('') : `${xs.slice(0, -1).join(', ')} and ${xs.at(-1)}`);

// linked short label "Huber and Herzberg 1979"; the full entry is on the reference page
const PAPER = 'komarov2026-reks-studio';
export const cite = (key, base) => `<a href="${base}manual/reference/#${key}">${toHtml(authorYear(reference(key)))}</a>`;
export const citeText = (key) => shortRef(reference(key));

// panel geometry, index and big (subpage) sizes
// L, R: plot edges; PT-PB energy band; OT-OB occupation band; LX: end-label column; CH: tick character advance;
// LCH: label character advance (mono, 0.6 em of .lab 11 / 13 px)
export const GEOM = {
  index: { W: 360, H: 400, L: 44, R: 296, PT: 50, PB: 244, OT: 287, OB: 362, TTL: 14, AX: 33, R0: 255, OTT: 268, XT: 378, XTT: 396, LX: 302, SEP: 13, CH: 7.5, LCH: 6.6 },
  big: { W: 720, H: 480, L: 60, R: 610, PT: 60, PB: 318, OT: 368, OB: 440, TTL: 16, AX: 36, R0: 332, OTT: 348, XT: 458, XTT: 476, LX: 617, SEP: 15, CH: 8.4, LCH: 7.8 },
};
const STEPS = [1, 2, 5].flatMap((m) => [-4, -3, -2, -1, 0, 1, 2].map((k) => m * 10 ** k)).sort((a, b) => a - b);
const decimals = (step) => Math.max(0, -Math.floor(Math.log10(step) + 1e-9));
const fmtTick = (v, step) => num(Math.abs(v) < step / 2 ? 0 : v, decimals(step));

// relative path, integer coordinates at k x the viewBox (k = 10 inside g.x10; k = 1 for the thin unnamed roots);
// null in points breaks the path
export function pathD(points, x, y, k = 10) {
  let d = '';
  let prev = null;
  for (const p of points) {
    if (!p) {
      prev = null;
      continue;
    }
    const q = [Math.round(x(p[0]) * k), Math.round(y(p[1]) * k)];
    if (!prev) d += `M${q[0]} ${q[1]}l`;
    else {
      const dx = q[0] - prev[0];
      const dy = q[1] - prev[1];
      d += `${d.endsWith('l') ? '' : dx < 0 ? '' : ' '}${dx}${dy < 0 ? '' : ' '}${dy}`;
    }
    prev = q;
  }
  return d.replace(/l(?=M|$)/g, '');
}

// points of one series on the published grid; a break where neighbours are more than 1.5 median steps apart
function withGaps(R, E) {
  const steps = R.slice(1).map((r, i) => r - R[i]).sort((a, b) => a - b);
  const med = steps[Math.floor(steps.length / 2)];
  const out = [];
  R.forEach((r, i) => {
    if (E[i] == null) return out.push(null);
    if (i > 0 && r - R[i - 1] > 1.5 * med + 1e-9) out.push(null);
    out.push([r, E[i]]);
  });
  return out;
}

const minOf = (E) => Math.min(...E.filter((v) => v != null));
const lastOf = (E) => E.findLast((v) => v != null);

// energy transform of P1: abs (Eh) or relative to a curve minimum (eV)
const shiftBy = (zero) => (v) => (v == null ? null : REL ? (v - zero) * EV : v);

// ticks: smallest 1/2/5 step with 4-6 lines and labels of <= 5 characters
// (6 characters where no 5-character step exists, e.g. -109.4; the plot then starts one character further right)
function ticks(low, top) {
  for (const chars of [5, 6]) {
    for (const step of STEPS) {
      const lo = Math.floor(low / step + 1e-9) * step;
      const hi = Math.ceil(top / step - 1e-9) * step;
      const n = Math.round((hi - lo) / step) + 1;
      if (n < 4 || n > 6) continue;
      const vals = Array.from({ length: n }, (_, k) => lo + k * step);
      if (vals.every((v) => fmtTick(v, step).length <= chars)) return { lo, hi, step, vals, chars };
    }
  }
  throw new Error(`dissoc: no tick step for ${low}..${top}`);
}

// symmetric push apart of end labels {y, h}, y increasing downwards
function push(labels) {
  labels.sort((a, b) => a.y - b.y);
  for (let it = 0; it < 80; it++) {
    for (let k = 0; k + 1 < labels.length; k++) {
      const need = (labels[k].h + labels[k + 1].h) / 2;
      const d = labels[k + 1].y - labels[k].y;
      if (d < need) {
        labels[k].y -= (need - d) / 2;
        labels[k + 1].y += (need - d) / 2;
      }
    }
  }
  return labels;
}

// stored SI roots of one system: [{spin, k, E}] in the order of the data (k: index within its 2S)
const rootsOf = (s) => {
  const seen = {};
  return s.full.E.map((E, i) => {
    const spin = s.full.spin[i];
    seen[spin] = (seen[spin] ?? -1) + 1;
    return { spin, k: seen[spin], E };
  });
};
// a curve that leaves the window upward ends there (it does not come back)
const untilAbove = (E, top) => {
  const i = E.findIndex((v, j) => v != null && v > top && E.slice(0, j).some((u) => u != null && u <= top));
  return i < 0 ? E : E.map((v, j) => (j < i ? v : null));
};

export const SHADES = ['o0', 'o1', 'o2', 'o3', 'o4'];
export const STATE_LABEL = { X: 'X^{1}Σ_{g}^{+}', a: 'a^{3}Π_{u}', A: 'A^{1}Π_{u}', B: 'B^{1}Δ_{g}' };

// figure model of one system at size 'index' or 'big' (subpage), built once per system and size; read-only
const FIGS = new Map();
export function figure(s, size = 'index') {
  const key = `${s.slug}|${size}`;
  if (!FIGS.has(key)) FIGS.set(key, buildFigure(s, size));
  return FIGS.get(key);
}

function buildFigure(s, size) {
  const G = GEOM[size];
  const z0 = minOf(s.S0);
  const S0 = s.S0.map(shiftBy(z0));
  const ref = (s.ref ?? []).map((r) => {
    const zr = s.kind === 'chain' ? minOf(r.E) : minOf(s.ref[0].E);
    return { ...r, Ez: r.E.map(shiftBy(zr)) };
  });
  const named = s.named.map((n) => ({ ...n, Ez: n.E.map(shiftBy(z0)) }));
  const limits = s.limits.map((l) => ({ ...l, Ez: shiftBy(z0)(l.E) }));
  const marks = s.marks.map((m) => ({ ...m, Ez: shiftBy(z0)(m.E) }));
  const extra = s.ref_extra.map((r) => ({ ...r, Ez: r.E.map(shiftBy(minOf(s.ref[0]?.E ?? r.E))) }));
  const vert = s.vertical && { ...s.vertical, Ez0: shiftBy(z0)(s.vertical.E0), Ez1: shiftBy(z0)(s.vertical.E1) };
  // window: the manifest window of the system (owner figure), else low from S0, references and named states and
  // high from their values at R_max, limits and marks
  const lowVals = [...S0, ...ref.flatMap((r) => r.Ez), ...extra.flatMap((r) => r.Ez), ...named.flatMap((n) => n.Ez)].filter((v) => v != null);
  const highVals = [lastOf(S0), ...ref.map((r) => lastOf(r.Ez)), ...named.map((n) => lastOf(n.Ez)), ...limits.map((l) => l.Ez), ...marks.map((m) => m.Ez), ...(vert ? [vert.Ez1] : [])];
  const low = REL ? 0 : Math.min(...lowVals);
  const high = Math.max(...highVals);
  const T = s.ywin && !REL ? ticks(s.ywin[0], s.ywin[1]) : ticks(low, low + 1.15 * (high - low));
  const L = G.L + (T.chars - 5) * G.CH;
  // R axis padded by 2 % on both sides, so that data starting at the window edge clears the tick labels
  const pad = 0.02 * (s.xwin[1] - s.xwin[0]);
  const [r0, r1] = [s.xwin[0] - pad, s.xwin[1] + pad];
  const x = (r) => L + ((r - r0) / (r1 - r0)) * (G.R - L);
  const y = (e) => G.PB - ((e - T.lo) / (T.hi - T.lo)) * (G.PB - G.PT);
  const yo = (n) => G.OB - (n / 2) * (G.OB - G.OT);
  const inX = (r) => r >= s.xwin[0] - 1e-9 && r <= s.xwin[1] + 1e-9;
  const inY = (e) => e >= T.lo - 1e-9 && e <= T.hi + 1e-9;
  const xticks = (() => {
    const st = s.xwin[1] - s.xwin[0] > 2 ? 1 : 0.5;
    const out = [];
    for (let v = Math.ceil(s.xwin[0] / st - 1e-9) * st; v <= s.xwin[1] + 1e-9; v += st) out.push(Number(v.toFixed(2)));
    return out;
  })();
  const nd = REL ? 2 : 5;
  const eTxt = (v) => `${num(v, nd)} ${REL ? 'eV' : 'Eh'}`;
  const name = uni(s.id);
  const paths = [];
  const labels = [];
  const rr = s.R;
  const clipE = (E) => E.map((v, i) => (inX(rr[i]) ? v : null));

  // unnamed SSR roots in one neutral ink: the singlets of the paper's set (molecules: index and subpage; chains:
  // subpage only); a root drawn as a named state is left out here
  const namedRoots = new Set(s.named.filter((n) => n.series.startsWith('root:')).map((n) => Number(n.series.slice(5))));
  const showRoots = s.kind === 'molecule' || size === 'big';
  const roots = showRoots
    ? rootsOf(s).filter((r) => r.k > 0 && r.spin === 0 && !namedRoots.has(r.k))
      .map((r) => ({ ...r, Ez: clipE(r.E.map(shiftBy(z0))) })).filter((r) => r.Ez.some((v) => v != null && v <= T.hi))
    : [];
  const rootPaths = roots.map((r) => pathD(withGaps(rr, r.Ez), x, y, 1));
  // RKS contrast line at viewBox resolution (thin dashed), ends where it leaves the window upward
  const rksPath = s.rks && {
    d: pathD(withGaps(s.rks.R, untilAbove(s.rks.E.map(shiftBy(minOf(s.rks.E))).map((v, i) => (inX(s.rks.R[i]) ? v : null)), T.hi)), x, y, 1),
    title: `${name} ${s.rks.figure ? `KS DFT (${FIG})` : 'RKS'}, R ${rEnd(s.rks.R[0])}–${rEnd(s.rks.R.at(-1))} Å`,
  };
  for (const n of named) {
    const E = clipE(n.Ez);
    paths.push({ d: pathD(withGaps(rr, E), x, y), cls: `nm c-${n.colour}`, title: `${name} ${uni(n.label)}` });
    const e = lastOf(E);
    if (e != null && inY(e)) labels.push({ y: y(e), h: G.SEP, text: n.label, cls: `l-nm c-${n.colour}` });
  }
  paths.push({ d: pathD(withGaps(rr, clipE(S0)), x, y), cls: 'ssr', title: `${name} S0, R ${rRange(s)} Å` });
  labels.push({ y: y(lastOf(clipE(S0))), h: G.SEP, text: 'S0', cls: 'l-s0' });

  // reference marks (outside the clip, drawn after every curve), r = radius: chains FCI circles; molecules hollow in
  // the colour of their state, a³Πu triangles; experiment: diamonds in ink; larger-basis FCI: hollow triangles
  const MR = size === 'big' ? 1.25 : 1;
  const marksOut = [];
  for (const r of ref) {
    r.R.forEach((R, i) => {
      if (!inX(R)) return;
      const e = r.Ez[i];
      if (!inY(e)) throw new Error(`dissoc: ${s.slug} reference point R ${R} outside the window`);
      const what = s.kind === 'chain' ? 'FCI' : `${uni(r.state)} reference point`;
      const tri = r.label === 'a';
      marksOut.push({ shape: tri ? 'tri' : 'circle', r: (tri ? 2.6 : 2.2) * MR, cx: x(R), cy: y(e), cls: s.kind === 'chain' ? 'rf' : `rf c-${r.colour}`, title: `${what} R ${R.toFixed(2)} Å: ${eTxt(e)}` });
    });
  }
  if (s.kind === 'chain' && ref.length) labels.push({ y: y(lastOf(ref[0].Ez)), h: G.SEP, text: 'FCI', cls: 'l-ref' });
  for (const r of extra) {
    r.R.forEach((R, i) => {
      if (!inY(r.Ez[i])) throw new Error(`dissoc: ${s.slug} FCI ${r.basis} R ${R} outside the window`);
      marksOut.push({ shape: 'tri', r: 2.6 * MR, cx: x(R), cy: y(r.Ez[i]), cls: 'fx', title: `FCI/${r.basis} R ${R.toFixed(2)} Å: ${eTxt(r.Ez[i])}` });
    });
  }
  for (const m of marks) {
    if (!inY(m.Ez)) throw new Error(`dissoc: ${s.slug} mark outside the window`);
    const st = m.state === 'S0' ? 'S0' : uni(STATE_LABEL[m.state]);
    marksOut.push({ shape: 'diamond', r: 3.6 * MR, cx: x(m.R), cy: y(m.Ez), cls: 'xp', title: `${name} ${st}: experimental R_e ${m.R} Å (${citeText(m.source)})` });
  }
  push(labels);

  // text placement: every text box clear of the drawn lines and markers
  // obstacles: line segments [x1, y1, x2, y2] (S0, named states, RKS, R_e line, limit segments, arrow shaft;
  // occupation lines, the n = 1 rule, S1 ticks) and boxes (markers enlarged by their radius, placed text);
  // the thin unnamed roots are not obstacles
  const lines = [];
  const boxes = marksOut.map((m) => [m.cx - m.r - 1, m.cy - m.r - 1, m.cx + m.r + 1, m.cy + m.r + 1]);
  const texts = [];
  // the segments of one polyline share an id: a crossing counts once per drawn line
  const polyline = (R, E, Y) => {
    const id = Symbol('line');
    let prev = null;
    R.forEach((r, i) => {
      if (E[i] == null || !inX(r)) return (prev = null);
      const q = [x(r), Y(E[i])];
      if (prev) lines.push([...prev, ...q, id]);
      prev = q;
    });
  };
  // segment against box (Liang-Barsky clipping)
  const cross = ([x1, y1, x2, y2], [bx0, by0, bx1, by1]) => {
    let t0 = 0;
    let t1 = 1;
    for (const [p, q] of [[x1 - x2, x1 - bx0], [x2 - x1, bx1 - x1], [y1 - y2, y1 - by0], [y2 - y1, by1 - y1]]) {
      if (p === 0) {
        if (q < 0) return false;
      } else if (p < 0) t0 = Math.max(t0, q / p);
      else t1 = Math.min(t1, q / p);
      if (t0 > t1) return false;
    }
    return true;
  };
  const over = (a, b) => a[0] < b[2] && b[0] < a[2] && a[1] < b[3] && b[1] < a[3];
  const cost = (b) => new Set(lines.filter((g) => cross(g, b)).map((g) => g[4] ?? g)).size + boxes.filter((o) => over(o, b)).length + texts.filter((o) => over(o, b)).length;
  const blocked = (b) => lines.some((g) => cross(g, b)) || boxes.some((o) => over(o, b)) || texts.some((o) => over(o, b));
  // glyph box of a one-line text at baseline ty from xs to xe (superscripts reach 4 above the cap height,
  // subscripts 3 below the baseline)
  const tbox = (xs, xe, ty, n = 1) => [xs - 2, ty - G.SEP + 1, xe + 2, ty + 3 + (n - 1) * G.SEP];
  const tw = (t) => uni(t).length * G.LCH;
  const inPlot = (b) => b[0] >= L && b[2] <= G.R && b[1] >= G.PT && b[3] <= G.PB;
  // free start-anchored box of n lines of width w whose centre is nearest to (cx, cy): {xs, ty, b, d} or null
  const nearestFree = (w, n, cx, cy) => {
    let best = null;
    for (let ty = G.PT + G.SEP; ty <= G.PB - 3; ty += 4) {
      for (let xs = L + 4; xs + w <= G.R - 2; xs += 4) {
        const b = tbox(xs, xs + w, ty, n);
        if (!inPlot(b) || blocked(b)) continue;
        const d = Math.hypot((b[0] + b[2]) / 2 - cx, (b[1] + b[3]) / 2 - cy);
        if (!best || d < best.d) best = { xs, ty, b, d };
      }
    }
    return best;
  };
  // curve parts outside the plot are clipped: obstacles only inside the energy band
  const clipped = (a, b) => (a[1] < G.PT && b[1] < G.PT) || (a[1] > G.PB && b[1] > G.PB);
  const polyE = (R, E) => {
    const n0 = lines.length;
    polyline(R, E, y);
    lines.splice(n0, Infinity, ...lines.slice(n0).filter((g) => !clipped([g[0], g[1]], [g[2], g[3]])));
  };

  polyE(rr, S0);
  for (const n of named) polyE(rr, n.Ez);
  const rksE = s.rks && untilAbove(s.rks.E.map(shiftBy(minOf(s.rks.E))), T.hi);
  if (s.rks) polyE(s.rks.R, rksE);
  // R_e line and root-0 hairlines (between segments of constant character) in each panel
  const reX = inX(s.re) ? x(s.re) : null;
  if (reX != null) lines.push([reX, G.PT, reX, G.PB], [reX, G.OT, reX, G.OB]);
  const seg0 = s.root0.filter((g) => g.to >= s.xwin[0] && g.from <= s.xwin[1]).map((g) => ({ ...g, x1: x(Math.max(g.from, s.xwin[0])), x2: x(Math.min(g.to, s.xwin[1])) }));
  const hairR = seg0.slice(1).map((g, i) => (seg0[i].to + g.from) / 2);
  const hair = hairR.map(x);
  for (const h of hair) lines.push([h, G.PT, h, G.PB], [h, G.OT, h, G.OB]);
  const segX1 = G.R - 0.15 * (G.R - L);
  for (const l of limits) lines.push([segX1, y(l.Ez), G.R, y(l.Ez)]);

  // separated fragments: short dashed segment over the last 15 % of the plot width; labels placed bottom-up, one-line
  // "8 E(H), ROKS" above its own segment (the lowest free baseline up to 2 lines above it, no other segment between),
  // end-anchored at the plot edge or slid left in 4-unit steps to the first free x (the segment then extends to the
  // label start); below the segment (up to 2 lines lower) only for the lowest segment; no free place: segment without
  // label (value in its title, reported at build)
  const eFig = (v, fig) => (fig && !REL ? `${num(v, FIG_DECIMALS)} Eh` : eTxt(v));
  const yLow = Math.max(...limits.map((l) => y(l.Ez)));
  const between = (ya, yb) => limits.some((o) => y(o.Ez) > ya && y(o.Ez) < yb);
  const segs = limits.map((l) => ({ l, yl: y(l.Ez) })).sort((a, b) => b.yl - a.yl).map(({ l, yl }) => {
    const text = l.label.join(', ');
    const title = `${uni(text)}: ${eFig(l.Ez, l.source === FIG)}`;
    // one line "2 E(CH_2 ^1B_1), SSR(2,2)"; where no place is free for it: fragment and method on two lines, then the
    // term alone "^1B_1"
    const term = l.label[0].match(/E\([^ )]+ ([^)]+)\)/)?.[1];
    for (const form of [[text], l.label, ...(term ? [[term]] : [])]) {
      const n = form.length;
      const w = Math.max(...form.map(tw));
      // box of n lines whose last baseline is ty
      const nbox = (xe, ty) => { const b = tbox(xe - w, xe, ty); b[1] -= (n - 1) * G.SEP; return b; };
      // first free x at baseline ty
      const slide = (ty, ok) => {
        for (let xe = G.R - 2; xe - w >= L + 2; xe -= 4) {
          const b = nbox(xe, ty);
          if (inPlot(b) && ok(b) && !blocked(b)) return xe;
        }
        return null;
      };
      let ty = null;
      let tx = null;
      for (let up = 4; up <= 4 + 2 * G.SEP && tx == null; up += 4) [ty, tx] = [yl - up, slide(yl - up, (b) => !between(b[1], yl))];
      for (let down = 0; down <= 2 * G.SEP && tx == null && yl === yLow; down += 4) {
        const below = yl + n * G.SEP - 2 + down;
        const xb = slide(below, () => true);
        if (xb != null) [tx, ty] = [xb, below];
      }
      if (tx == null) continue;
      texts.push(nbox(tx, ty));
      return { x1: Math.min(segX1, tx - w), x2: G.R, y: yl, tx, rows: form.map((t, k) => ({ t, ty: ty - (n - 1 - k) * G.SEP })), title };
    }
    console.warn(`dissoc: ${s.slug} ${size}: limit label "${uni(text)}" has no free place; segment drawn without label`);
    return { x1: segX1, x2: G.R, y: yl, tx: null, rows: [], title };
  });
  // assert each limit label sits beside its own segment
  for (const g of segs.filter((g) => g.rows.length)) {
    const [top, bot] = [g.rows[0].ty - G.SEP + 1, g.rows.at(-1).ty + 3];
    if (!(bot <= g.y && !between(top, g.y)) && !(top >= g.y - 1 && g.y === yLow)) {
      throw new Error(`dissoc: ${s.slug} ${size}: limit label "${g.rows.map((r) => r.t).join(' ')}" not beside its own segment`);
    }
  }
  // vertical excitation (paper Fig. 3): arrow at R from S0 up; value | reference beside it ("7.85 eV" / "TBE 7.93";
  // index size one line "7.85 | 7.93 eV"): the first free candidate beside the shaft, left of the arrow before right,
  // from the arrow top down to the plot bottom; none free: the free start-anchored place nearest to the arrow foot;
  // none free: index size no label (the caption gives the values), subpage the place beside the shaft crossed least
  // (reported at build)
  let arrow = null;
  if (vert) {
    const ax = x(vert.R);
    const [ay0, ay1] = [y(vert.Ez0), y(vert.Ez1)];
    lines.push([ax, ay0, ax, ay1]);
    const two = size === 'index' ? [`${vert.eV.toFixed(2)} | ${vert.ref} eV`] : [`${vert.eV.toFixed(2)} eV`, `TBE ${vert.ref}`];
    const w = Math.max(...two.map(tw));
    let best = null;
    let least = null;
    for (const side of [-1, 1]) {
      for (let yy = ay1 + G.SEP; yy <= G.PB && !best; yy += 4) {
        const x0 = side < 0 ? ax - 6 - w : ax + 6;
        const b = tbox(x0, x0 + w, yy, two.length);
        if (!inPlot(b)) continue;
        const c = cost(b);
        if (!c) best = { yy, b, tx: side < 0 ? ax - 6 : ax + 6, anchor: side < 0 ? 'end' : 'start' };
        else if (!texts.some((o) => over(o, b)) && (!least || c < least.c)) least = { c, yy, b, tx: side < 0 ? ax - 6 : ax + 6, anchor: side < 0 ? 'end' : 'start' };
      }
      if (best) break;
    }
    if (!best) {
      const f = nearestFree(w, two.length, ax, ay0);
      if (f) best = { yy: f.ty, b: f.b, tx: f.xs, anchor: 'start' };
    }
    if (!best && size !== 'index') {
      console.warn(`dissoc: ${s.slug} ${size}: arrow label crosses ${least.c} obstacle(s)`);
      best = least;
    }
    if (best) texts.push(best.b);
    else best = { yy: 0, tx: ax, anchor: 'start' };
    arrow = {
      x: ax, y0: ay0, y1: ay1, lines: best.b ? two : [], ty: best.yy, tx: best.tx, anchor: best.anchor,
      title: `${name} vertical excitation at R ${vert.R} Å: ${vert.eV.toFixed(2)} eV; TBE ${uni(vert.state)} ${vert.ref} eV (${citeText(vert.source)})`,
    };
  }
  // key of the larger-basis FCI points: next to its marks, the free start-anchored place nearest to the first mark
  let extraKey = null;
  if (extra.length) {
    const text = extra.map((r) => `△ FCI/${r.basis}`).join(' · ');
    const w = tw(text);
    const m0 = marksOut.find((m) => m.cls === 'fx');
    const best = nearestFree(w, 1, m0.cx, m0.cy);
    if (!best) throw new Error(`dissoc: ${s.slug} ${size}: no free place for the FCI key`);
    texts.push(best.b);
    extraKey = { x: best.xs, y: best.ty, text };
  }

  // occupations: S0 solid; a further state of the manifest (occ_states) dashed in the same shades
  const occ = s.occ;
  // a line runs through the R that have a value (figure-sourced N2: the converged .out points only)
  const occLine = (line) => {
    const v = clipE(line);
    const keep = v.map((e, i) => i).filter((i) => v[i] != null);
    return pathD(withGaps(keep.map((i) => rr[i]), keep.map((i) => v[i])), x, yo);
  };
  const occPaths = [
    ...occ.n.map((line, j) => ({ d: occLine(line), cls: SHADES[occ.shade[j]] })),
    ...s.occ_more.flatMap((o) => o.n.map((line, j) => ({ d: occLine(line), cls: `${SHADES[o.shade[j]]} od` }))),
  ];
  let occLabels = [];
  if (occ.labels) {
    const seen = new Set();
    const lastIn = rr.findLastIndex((r) => inX(r));
    occ.labels.forEach((lab, j) => {
      if (seen.has(lab)) return;
      seen.add(lab);
      const count = occ.labels.filter((l) => l === lab).length;
      occLabels.push({ y: yo(occ.n[j][lastIn]), h: G.SEP, text: count > 1 ? `${lab} ×${count}` : lab, cls: SHADES[occ.shade[j]] });
    });
    occLabels = push(occLabels);
  }
  // changes of character of the further occupation states (S1): short dashed ticks across the occupation panel top,
  // where no S0 hairline stands
  const ticksS1 = s.occ_more.flatMap((o) => o.changes).filter((r) => inX(r) && !hairR.some((h) => Math.abs(h - r) < 0.01)).map(x);

  // occupation panel obstacles; level labels "paired" (n = 2), "singly occupied" (n = 1): the end-label column when it
  // holds no orbital names, else the left margin just above the level, else a free x-span above the level (n = 1: or
  // below it); none free: left out
  for (const line of [...occ.n, ...s.occ_more.flatMap((o) => o.n)]) polyline(rr, line, yo);
  lines.push([L, yo(1), G.R, yo(1)]);
  for (const tx of ticksS1) lines.push([tx, G.OT - 6, tx, G.OT + 6]);
  const occTitle = s.occ_more.length ? `n_{i} of S0 (solid) and ${s.occ_more.map((o) => `S${o.state}`).join(', ')} (dashed)` : 'n_{i} of S0';
  texts.push(tbox(4, 4 + tw(occTitle), G.OTT));
  const levels = [];
  for (const [n, t] of [[2, 'paired'], [1, 'singly occupied']]) {
    if (!occLabels.length) {
      levels.push(n === 2 ? { x: G.LX, y: yo(2) + 4, lines: [t] } : { x: G.LX, y: yo(1) - 2, lines: t.split(' ') });
      continue;
    }
    const w = tw(t);
    const tys = n === 2 ? [yo(2) - 4] : [yo(1) - 4, yo(1) + G.SEP - 1];
    let got = null;
    for (const ty of tys) {
      for (let xs = L + 3; xs + w <= G.R - 2 && !got; xs += 4) if (!blocked(tbox(xs, xs + w, ty))) got = { x: xs, y: ty, lines: [t] };
      if (got) break;
    }
    if (got) {
      texts.push(tbox(got.x, got.x + w, got.y));
      levels.push(got);
    }
  }
  // a label centred on its segment, moved off a hairline it would cross
  const r0lab = seg0.filter((g) => g.label).map((g) => {
    const w = 3.2 * G.SEP;
    let cx = (g.x1 + g.x2) / 2;
    for (const h of hair) if (Math.abs(cx - h) < w / 2 + 3) cx = h + (cx < h ? -1 : 1) * (w / 2 + 4);
    return { x: cx, text: g.label };
  });

  return {
    s, G, T, L, x, y, yo, xticks, paths, rootPaths, rksPath, marks: marksOut, extraKey, segs, arrow, labels, occPaths, occLabels, levels, hair, ticksS1, r0lab, roots,
    reX,
    yTicks: T.vals.map((v) => ({ y: y(v), t: fmtTick(v, T.step) })),
    axis: REL ? 'E − E_{min} / eV' : 'E / E_{h}',
    occTitle,
    ttl: `${s.id} · SSR${s.as}`,
    xTitle: `${s.coord} / Å`,
    counts: { drawn: roots.length + 1 + namedRoots.size, stored: s.counts.roots_stored },
  };
}

const f3 = (v) => v.toFixed(3);
const f2 = (v) => v.toFixed(2);
const exp = (s) => s.values.exp ?? {};
const s0Key = (s) => (s.ref && s.kind === 'molecule' ? 'X' : 'S0');
// diatomic: the scan is the full geometry; polyatomic: a rigid scan of R_CC
const diatomic = (s) => /^[A-Z][a-z]?_\{2\}$/.test(s.id);
const scanNote = (s) => (diatomic(s) ? '' : ' (rigid R_{CC} scan)');
// "R_{e} 1.333 A (rigid R_{CC} scan) . exp. 1.3305 A (r_{e})" (middle dot, angstrom sign)
export const numberLine = (s) => {
  const k = s0Key(s);
  const e = exp(s).Re?.[k];
  // figure-sourced curve: R_e as stated with the figure
  const own = `R_{e} ${f3(s.values.Re[k])} Å${scanNote(s)}${s.source === 'figure' ? ` (${FIG})` : ''}`;
  return e ? `${own} · exp. ${e.v} Å (${e.kind.replace('_', '_{').concat(e.kind.includes('_') ? '}' : '')})` : own;
};
// figure-sourced limits bottom to top: "CH_{2} limits: ^{3}B_{1} ROKS −78.278 · ^{1}A_{1} SSR(2,2) −78.236 E_{h}"
export const limitsLine = (s) => {
  const lim = s.limits.filter((l) => l.source === FIG).sort((a, b) => a.E - b.E);
  if (!lim.length) return '';
  const part = (l) => l.label[0].match(/E\(([^ )]+) ([^)]+)\)/).slice(1);
  return `${part(lim[0])[0]} limits: ${lim.map((l) => `${part(l)[1]} ${l.label[1]} ${num(l.E, FIG_DECIMALS)}`).join(' · ')} E_{h}`;
};
// HTML: "Fig. 3 [cite]", a value taken from the paper figure
export const figCite = (base) => `${FIG} [${cite(PAPER, base)}]`;
// HTML: "BH&HLYP/6-31G(d) | 1934SI-6SA-REKS(8,8) | R 0.70-4.925 A | 171 points | FCI 43" (middle-dot separators); figure-sourced: "curves: Fig. 3 [cite]"
export const setupHtml = (s, base) =>
  [
    toHtml(`${s.functional}/${s.basis}`),
    toHtml(s.cassette),
    `R ${rRange(s)} Å`,
    s.source === 'figure' ? `curves: ${figCite(base)}` : `${s.counts.points} points`,
    s.kind === 'chain' && s.ref && `FCI ${s.counts.ref_points}`,
    s.kind === 'molecule' && s.ref && `reference points ${s.counts.ref_points}`,
    s.ref_note && toHtml(s.ref_note),
  ].filter(Boolean).join(' · ');
// "H_{8}: 14 of 100 SI states and the per-point data ->" (arrow glyph); figure-sourced: "N_{2}: S0, excited states and ..."
export const subLink = (s) => {
  const f = figure(s, 'big');
  return s.source === 'figure'
    ? `${s.id}: S0, excited states and the per-point data →`
    : `${s.id}: ${f.counts.drawn} of ${f.counts.stored} SI states and the per-point data →`;
};
// HTML under the per-point table: "E(S0) column from Fig. 3 [cite]; n_i computed."
export const figColumnsHtml = (s, base) => {
  const cols = [...(s.source === 'figure' ? ['S0'] : []), ...s.named.filter((n) => n.figure).map((n) => n.label)].map((l) => `E(${l})`);
  return cols.length ? `${toHtml(andList(cols))} column${cols.length > 1 ? 's' : ''} from ${figCite(base)}; n<sub>i</sub> computed.` : '';
};

// C2 comparison table {head, rows}
export function constTable(s) {
  const e = exp(s);
  const v = s.values;
  const rows = [];
  for (const st of ['X', 'a', 'A', 'B']) if (e.Re?.[st]) rows.push([`R_{e} ${STATE_LABEL[st]} / Å`, f3(v.Re[st]), e.Re[st].v]);
  for (const st of ['a', 'A', 'B']) if (e.Te?.[st]) rows.push([`T_{e} ${STATE_LABEL[st]} / eV`, f2(v.Te[st]), e.Te[st].v]);
  if (e.De?.X) rows.push([`D_{e} ${STATE_LABEL.X} / eV`, f2(v.De), e.De.X.v]);
  return { head: ['Quantity', 'SSR', 'Experiment'], rows };
}
// HTML: "Experiment: R_e, T_e [cite]; D_e [cite]."
export const constSources = (s, base) => {
  const by = new Map();
  for (const [q, v] of Object.entries(exp(s))) for (const x of Object.values(v)) by.set(x.source, [...new Set([...(by.get(x.source) ?? []), q])]);
  return `Experiment: ${[...by].map(([k, qs]) => `${qs.map((q) => toHtml(q.replace('e', '_{e}'))).join(', ')} [${cite(k, base)}]`).join('; ')}.`;
};

// system card table of a molecule: {head, rows}; chains draw a mini curve instead
export function cardTable(s) {
  const e = exp(s);
  const k = s0Key(s);
  if (s.ref) {
    return {
      head: ['', 'SSR', 'exp.'],
      rows: [['R_{e} Å', f3(s.values.Re[k]), e.Re[k].v], ...(e.De ? [['D_{e} eV', f2(s.values.De), e.De.X.v]] : [])],
    };
  }
  return e.Re?.[k]
    ? { head: ['', 'SSR', 'exp.'], rows: [['R_{e} Å', f3(s.values.Re[k]), e.Re[k].v]] }
    : { head: ['', 'SSR'], rows: [['R_{e} Å', f3(s.values.Re[k])]] };
}

// mini curve of a chain: S0 and FCI on one Eh scale, raw points
export function mini(s, x0, w, h, top = 6) {
  const fci = s.ref ? s.ref[0].R.map((r, j) => [r, s.ref[0].E[j]]).filter(([r]) => r >= s.xwin[0] - 1e-9 && r <= s.xwin[1] + 1e-9) : [];
  const es = [...s.S0, ...fci.map((p) => p[1])];
  const [lo, hi] = [Math.min(...es), Math.max(...es)];
  const x = (r) => x0 + ((r - s.xwin[0]) / (s.xwin[1] - s.xwin[0])) * w;
  const y = (e) => top + ((hi - e) / (hi - lo)) * h;
  return { fci: fci.length ? pathD(fci, x, y) : null, ssr: pathD(s.R.map((r, j) => [r, s.S0[j]]), x, y) };
}

// one row per system: reference kind and headline number
export const rows = systems.map((s) => {
  const e = exp(s);
  const k = s.kind === 'molecule' && s0Key(s);
  let reference;
  let number;
  if (s.kind === 'chain') {
    reference = s.ref ? `FCI, ${s.ref[0].basis}` : s.ref_note;
    number = s.ref ? 'vs FCI, same basis' : `${s.counts.points} points`;
  } else if (s.ref) {
    reference = 'experiment; near-exact reference points';
    number = `D_{e} ${f2(s.values.De)} · exp. ${e.De.X.v} eV; R_{e} ${f3(s.values.Re[k])} · exp. ${e.Re[k].v} Å`;
  } else if (e.Re?.[k]) {
    reference = 'experiment';
    number = `R_{e} ${f3(s.values.Re[k])} · exp. ${e.Re[k].v} Å${scanNote(s)}`;
  } else {
    reference = 'none';
    number = `R_{e} ${f3(s.values.Re[k])} Å${scanNote(s)}`;
  }
  return { system: s.id, as: s.as, reference, number, anchor: s.slug, cls: s.cls };
});

// band: D_e of the reference-point molecule; table: bond lengths; curves: FCI chains
const bandSys = pointMols.find((s) => exp(s).De);
const tableRows = reMols.map((s) => [`${s.id}${scanNote(s) ? ' (rigid R_{CC} scan)' : ''}`, f3(s.values.Re[s0Key(s)]), exp(s).Re[s0Key(s)].v]);
const span1 = (list, f) => [...new Set(list.map(f))];
export const cards = {
  band: bandSys && (() => {
    const [ref, err] = exp(bandSys).De.X.v.split(' ± ').map(Number);
    return { ours: Number(f2(bandSys.values.De)), ref, err, axis: [Math.floor((ref - 2 * err) * 10) / 10, Math.ceil((ref + 2 * err) * 10) / 10] };
  })(),
  table: tableRows.length ? { head: ['', 'SSR / Å', 'exp. / Å'], rows: tableRows } : null,
  curves: chains,
};

// hero: raw H2 S0, FCI, RKS / Eh
const h2 = systems.find((s) => s.slug === 'h2');
export const hero = { ssr: h2.R.map((r, i) => [r, h2.S0[i]]), fci: h2.ref[0].R.map((r, i) => [r, h2.ref[0].E[i]]), ks: h2.rks.R.map((r, i) => [r, h2.rks.E[i]]) };

const NOT_INSTALLED_FROM = Number(overview.landing.installed.match(/\d+/)[0]);
const notInstalled = [...new Set(systems.map(asOf))].filter((a) => Number(a.match(/\d+/)[0]) > NOT_INSTALLED_FROM);
const byValue = (f) => {
  const m = new Map();
  for (const s of systems) m.set(f(s), [...(m.get(f(s)) ?? []), s]);
  return [...m.entries()];
};
const ids = (list) => list.map((s) => s.id).join(', ');
// basis as set: H in 6-31G(d) carries no polarisation
const basisText = (b) => (b === '6-31G(d)' ? '6-31G(d) (on H: 6-31G)' : b);
const POOL_STD = (s) => {
  const names = s.sa.split(' ').map((t) => t.split(':')[0]);
  const m = Number(s.as.match(/\d+/)[0]) / 2;
  const std = ['PPS1', ...Array.from({ length: m }, (_, k) => `OSS${k + 1}`), 'Extra1'];
  return names.join(' ') === std.join(' ');
};
// SA member name as printed: Extra1 -> all-alpha determinant
export const poolName = (n) => (n === 'Extra1' ? 'all-α determinant' : n);
// element symbols of a system id, in order of appearance
export const elementsOf = (s) => [...new Set([...s.id.matchAll(/[A-Z][a-z]?/g)].map((m) => m[0]))];
const poolText = (s) => {
  const items = s.sa.split(' ').map((t) => t.split(':'));
  return `${items.map(([n]) => poolName(n)).join(', ')}; ${items.length} states, ${items[0][1]} each`;
};
const configs = (n) => `${n} configuration${n === 1 ? '' : 's'}`;
export const siSectors = (s) => s.cassettes.map((c) => `2S = ${c.spin}: ${configs(c.n)}`).join('; ');
const siText = systems.map((s) => `${s.id} ${s.cassette}`).join(', ');
const multiSpin = systems.filter((s) => s.cassettes.length > 1);
const spinText = byValue((s) => (s.cassettes.length > 1 ? s.cassettes.map((c) => c.n).join(' / ') : null))
  .filter(([k]) => k)
  .map(([k, list]) => `${ids(list)}: 2S = ${list[0].cassettes.map((c) => c.spin).join(', ')} with ${k} configurations`)
  .join('; ');
const setupRows = {
  method: byValue((s) => `${s.functional}/${basisText(s.basis)}`).map(([f, list]) => `${f}: ${ids(list)}`).join('; '),
  sa: [
    systems.filter(POOL_STD).length && `PPS1 + OSS1…OSS(M/2) + all-α determinant, equal weights: ${ids(systems.filter(POOL_STD))}`,
    ...systems.filter((s) => !POOL_STD(s)).map((s) => `${s.id}: ${poolText(s)}`),
  ].filter(Boolean).join('; '),
  si: `${siText}${multiSpin.length ? `; ${spinText}` : ''}`,
};
// SCF settings as printed in the .out headers: "DF, energy/density thresholds 1.00e-07/1.00e-05, grid 75 x 302"
export const scfText = (s) => `${s.settings.scf_type}, energy/density thresholds ${s.settings.e_threshold}/${s.settings.d_threshold}, grid ${s.settings.radial_points} × ${s.settings.spherical_points}`;

// reference lines: FCI chains, larger-basis FCI points, reference points, experiment
const refFci = chains.length
  ? `FCI (detci, all MOs, num_roots 1) in the basis of each chain: ${byValue((s) => (chains.includes(s) ? s.ref[0].basis : null)).filter(([k]) => k).map(([b, list]) => `${b}: ${ids(list)}`).join('; ')}.`
  : '';
const extraSys = systems.filter((s) => s.ref_extra.length);
const refExtra = extraSys.length
  ? `FCI single points: ${extraSys.flatMap((s) => s.ref_extra.map((r) => `${r.basis} (${s.id}, R ${r.R.map((v) => v.toFixed(2)).join(', ')} Å)`)).join(', ')}; detci, all MOs.`
  : '';
// HTML: "Reference points: SHCI extrapolated to the FCI limit, frozen core, cc-pV5Z [cite], shifted by -89.23 mEh."
const shiftHtml = (s) => (s.ref_shift ? `, shifted by ${num(s.ref_shift, 2)} mE<sub>h</sub>` : '');
export const refPointsHtml = (s, base) =>
  `Reference points: SHCI extrapolated to the FCI limit, frozen core, ${escape(s.ref[0].basis)} [${cite(s.ref[0].source, base)}]${shiftHtml(s)}.`;
// HTML, each source once: "Experiment: C_2H_4 R_e [cite]; N_2 R_e, C_2 D_e [cite]; C_2 R_e, T_e [cite]."
export const expHtml = (base) => {
  const by = new Map();
  for (const s of expMols) {
    for (const [q, v] of Object.entries(exp(s))) {
      for (const k of new Set(Object.values(v).map((x) => x.source))) {
        const per = by.get(k) ?? new Map();
        per.set(s.id, [...(per.get(s.id) ?? []), q.replace('e', '_{e}')]);
        by.set(k, per);
      }
    }
  }
  return by.size
    ? `Experiment: ${[...by].map(([k, per]) => `${[...per].map(([id, qs]) => toHtml(`${id} ${qs.join(', ')}`)).join(', ')} [${cite(k, base)}]`).join('; ')}.`
    : '';
};
const vertSys = systems.filter((s) => s.vertical);
// what each system takes from the paper figure: "N_2 curves; C_2H_4 named states, KS DFT, arrow and CH_2 limits"
const figParts = systems.map((s) => {
  if (s.source === 'figure') return `${s.id} curves`;
  const frag = s.limits.filter((l) => l.source === FIG).map((l) => l.label[0].match(/E\(([^ )]+)/)[1]);
  const what = [
    s.named.some((n) => n.figure) && 'named states',
    s.rks?.figure && 'KS DFT',
    s.vertical?.from && 'arrow',
    frag.length && `${frag[0]} limits`,
  ].filter(Boolean);
  return what.length ? `${s.id} ${andList(what)}` : null;
}).filter(Boolean);
export const vertHtml = (base) =>
  [
    vertSys.length && `Vertical excitation, TBE: ${vertSys.map((s) => `${toHtml(s.id)} ${toHtml(s.vertical.state)} ${s.vertical.ref} eV`).join(', ')} [${[...new Set(vertSys.map((s) => s.vertical.source))].map((k) => cite(k, base)).join(', ')}].`,
    figParts.length && `${toHtml(figParts.join('; '))}: ${figCite(base)}.`,
  ].filter(Boolean).join(' ');

// inline markup strings, no links
export const vars = {
  h1: `Bond dissociation: ${[idRange([...chains, ...far]), ...molecules.map((s) => s.id)].join(', ')}`,
  ident: `SSR states along the bond coordinate against ${andList([
    chains.length && `FCI in the same basis (${idRange(chains)})`,
    pointMols.length && `near-exact reference points (${ids(pointMols)})`,
    expMols.length && `experiment (${ids(expMols)})`,
  ].filter(Boolean))}, with their natural occupations.`,
  keyline: `${systems.length} systems · SSR${asRange(systems)} · ${systems.filter((s) => s.source !== 'figure').reduce((t, s) => t + s.counts.points, 0)} computed points along R`,
  farTitle: far.length ? `${ids(far)}: ${OUT_OF_REACH}` : '',
  farNav: far.length ? ids(far) : '',
  notInstalledAs: andList(notInstalled),
  setupMethod: setupRows.method,
  setupSa: setupRows.sa,
  setupSi: setupRows.si,
  refFci,
  refExtra,
  card2Title: reMols.length ? `${ids(reMols)}: bond length${reMols.length > 1 ? 's' : ''}` : '',
  card2Sub: reMols.length ? reMols.map((s) => `${s.id}: SSR${s.as}, ${s.functional}/${s.basis}`).join('; ') : '',
  card3Title: chains.length ? `Hydrogen chains ${idRange(chains)} pulled apart` : '',
  card3Sub: chains.length
    ? `SSR${asRange(chains)}, ${span1(chains, (s) => s.functional).join(', ')}; ${byValue((s) => (chains.includes(s) ? s.basis : null)).filter(([k]) => k).map(([b, list]) => `${b} (${ids(list)})`).join(', ')}`
    : '',
  De: bandSys ? f2(bandSys.values.De) : '',
  DeExp: bandSys ? exp(bandSys).De.X.v : '',
  rowChains: [...chains, ...far].map((s) => s.id).join(' · '),
  rowChainsText: `Bond dissociation against FCI in the same basis${far.length ? `; ${ids(far)}: ${OUT_OF_REACH}` : ''}.`,
  rowMols: molecules.filter((s) => !s.ref).map((s) => s.id).join(' · '),
  rowMolsText: reMols.some((s) => !s.ref) ? `Bonds broken along the full curve; R_{e} against experiment: ${ids(reMols.filter((s) => !s.ref))}.` : 'Bonds broken along the full curve; natural occupations of S0.',
  rowPoints: pointMols.map((s) => s.id).join(' · '),
  rowPointsText: 'Curves against near-exact reference points; natural occupations and spectroscopic constants against experiment.',
};

// [anchor, names, text]; a row without systems is left out
export const rootRows = [
  ['h-chains', vars.rowChains, vars.rowChainsText],
  ['molecules', vars.rowMols, vars.rowMolsText],
  [pointMols[0]?.slug, vars.rowPoints, vars.rowPointsText],
].filter(([id, names]) => id && names);

// markup with [cite:key] -> HTML with house citations; {token} from the data
const paperHtml = (t, base, tok = {}) =>
  t.replace(/\{(\w+)\}/g, (m, k) => (k in tok ? tok[k] : m))
    .split(/\[cite:([\w-]+)\]/).map((x, i) => (i % 2 ? `[${cite(x, base)}]` : toHtml(x))).join('');
// "at an increment of 0.05 A", or the range of a non-uniform grid
const scanText = (s) => {
  const st = [...new Set(s.R.slice(1).map((r, i) => Number((r - s.R[i]).toFixed(3))))].sort((a, b) => a - b);
  return st.length === 1 ? `at an increment of ${st[0]} Å` : `at increments of ${st[0]}–${st.at(-1)} Å`;
};
// tokens of the subpage prose: numbers the page shows
const tokens = (s) => {
  const v = s.values;
  const e = exp(s);
  const t = { scan: scanText(s), basis: s.basis };
  if (v.Re) t.re = f3(v.Re[s0Key(s)]);
  if (e.Re?.[s0Key(s)]) t.reExp = e.Re[s0Key(s)].v;
  if (v.De != null) t.de = f2(v.De);
  if (v.Te?.B != null && e.Te?.B) t.dTeB = f2(Number(e.Te.B.v) - v.Te.B);
  return t;
};
const intro = (base) => {
  // the paper's serial comma: "a, b, and c"
  const b = molecules.filter((s) => TEXT.bonds[s.slug]).map((s) => TEXT.bonds[s.slug]);
  const bonds = b.length > 2 ? `${b.slice(0, -1).join(', ')}, and ${b.at(-1)}` : b.join(' and ');
  return TEXT.intro.map((p) => paperHtml(p.replace('{molbonds}', bonds), base));
};
export const paper = {
  intro,
  chains: (base) => paperHtml(TEXT.chains, base),
  // caption of one molecule; with reference points, their sentence follows
  molecule: (s, base) => `${paperHtml(TEXT[s.slug], base)}${arrowNote(s)}${s.ref ? ` ${refPointsHtml(s, base)}` : ''}`,
  // subpage: its prose paragraphs, its caption (chains: the clauses true for its chart), its orbital caption
  prose: (s, base) => (TEXT.prose[s.slug] ?? []).map((p) => paperHtml(p, base, tokens(s))),
  caption: (s, base) => (s.kind === 'chain' ? paperHtml(TEXT.chainSub[s.slug], base) : paper.molecule(s, base)),
  orbitals: (s, base) => (TEXT.orbitals[s.slug] ? paperHtml(TEXT.orbitals[s.slug], base) : ''),
  methods: (s, base) => paperHtml(TEXT.methods[s.kind === 'chain' ? (s.ref ? 'chain' : 'chainNoFci') : s.slug] ?? '', base, tokens(s)),
};
// caption clause where the index-size chart has no free place for the arrow label: " Arrow: 7.85 eV; TBE 7.93 eV."
const arrowNote = (s) => (s.vertical && !figure(s, 'index').arrow.lines.length ? ` Arrow: ${s.vertical.eV.toFixed(2)} eV; TBE ${s.vertical.ref} eV.` : '');
// caption clause of the state-change marks: " Thin vertical lines: S0 changes state; dashed ticks: S1."
export const changesText = (s) => {
  const more = s.occ_more.filter((o) => o.changes.length).map((o) => `S${o.state}`);
  return s.root0.length ? ` Thin vertical lines: S0 changes state${more.length ? `; dashed ticks: ${more.join(', ')}` : ''}.` : '';
};
// HTML: "R(C–C); planar D_2h, … [cite]"
export const geometryHtml = (s, base) => paperHtml(`${s.coord}; ${s.geometry}`, base);

// output path prefix; the Psi4 commit where the manifest has one
export const PREFIX = 'main/results/dissociation/';
const commits = systems.filter((s) => s.commit);
export const revLine = `${commits.length ? `Psi4 builds of these outputs: ${commits.map((s) => `${uni(s.id)} ${s.commit}`).join(', ')}. ` : ''}Install: branch ${BRANCH} of <${REPO_URL}>.`;

// path -> description of each data file
export const DATA = Object.fromEntries(
  systems.map((s) => [
    s.tsv,
    `${uni(s.id)} dissociation, ${s.functional}/${s.basis}, ${s.cassette}${s.source === 'figure' ? `, curves from ${FIG} of the paper` : ''}: one row per published R (${s.counts.points}), tab-separated: R_A, E_S0_Eh${s.named.length ? `, E_<state>_Eh of the named states${s.named.every((n) => n.figure) ? ` (${FIG})` : ''}` : ''}${s.ref ? `${s.kind === 'chain' ? ', E_FCI_S0_Eh (FCI, same basis' : `, E_ref_<state>_Eh (reference points, ${s.ref[0].column}`}; empty without a point)` : ''}${s.rks ? `, E_RKS_Eh${s.rks.figure ? ` (KS DFT of ${FIG})` : ''}` : ''}, S0 natural occupations ${s.occ.labels ? 'per active orbital' : 'n1..nM in decreasing order'}.`,
  ]),
);
