// SVG chart helpers shared by the Cost page charts
export const r1 = (v) => Math.round(v * 10) / 10;

// log axis: lo -> x0, hi -> x0 + w
export const logScale = (lo, hi, x0, w) => (v) => r1(x0 + (Math.log(v / lo) / Math.log(hi / lo)) * w);

export const SHAPES = ['circle', 'square', 'triangle', 'diamond'];

// mark path centred at (cx, cy), size r: circle radius r, square half-side r, diamond half-diagonal 1.25 r,
// triangle circumradius 1.2 r
export function markPath(shape, cx, cy, r = 4) {
  const [x, y] = [r1(cx), r1(cy)];
  if (shape === 'circle') return `M${r1(x - r)} ${y}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0-${2 * r} 0z`;
  if (shape === 'square') return `M${r1(x - r)} ${r1(y - r)}l${2 * r} 0 0 ${2 * r}-${2 * r} 0z`;
  if (shape === 'diamond') {
    const d = r1(1.25 * r);
    return `M${x} ${r1(y - d)}l${d} ${d}-${d} ${d}-${d}-${d}z`;
  }
  if (shape === 'triangle') {
    const [t, b, s] = [r1(1.2 * r), r1(0.6 * r), r1(1.04 * r)];
    return `M${x} ${r1(y - t)}l${s} ${r1(t + b)}-${r1(2 * s)} 0z`;
  }
  throw new Error(`svgmarks: unknown shape ${shape}`);
}
