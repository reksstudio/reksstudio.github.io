// Inline mini-markup of reference.json / properties.json / blocks.json text fields:
//   `x` -> code    **x** -> strong    *x* -> em    _{x} -> sub    ^{x} -> sup
// Code content is literal except _{x} and ^{x}; other spans nest. Everything else is text.
import temml from 'temml';

const OVERLINE = String.fromCodePoint(0x203e);
const MACRON = String.fromCodePoint(0x304);
// Latin letter -> Mathematical Italic code point (italic h is U+210E, outside the block)
const italic = (c) =>
  String.fromCodePoint(c === 'h' ? 0x210e : (c >= 'a' ? 0x1d44e - 0x61 : 0x1d434 - 0x41) + c.charCodeAt(0));
const BAR = new RegExp(`<mover><mi>([A-Za-z])</mi><mo[^>]*>${OVERLINE}</mo></mover>`, 'g');
const NOT_MOVER = '(?:(?!</?mover>)[\\s\\S])*';
const LATIN_BAR = new RegExp(`<mover>${NOT_MOVER}<mi>[A-Za-z]${NOT_MOVER}${OVERLINE}</mo></mover>`);

// TeX -> MathML (temml; a TeX error throws). \bar on one Latin letter -> one <mi> holding the math-italic
// letter + U+0304; any other overbar over Latin letters throws. Display math keeps display="block" only.
export function tex(s, display) {
  const out = temml
    .renderToString(s, { displayMode: display, throwOnError: true })
    .replace(BAR, (m, c) => `<mi>${italic(c)}${MACRON}</mi>`)
    .replace(' class="tml-display" style="display:block math;"', '');
  if (LATIN_BAR.test(out)) throw new Error(`tex: overbar over Latin letters other than one letter: ${s}`);
  return out;
}

const SPAN = /`([^`]+)`|\*\*(.+?)\*\*|\*(.+?)\*|([_^])\{([^}]+)\}/g;
const SCRIPT = /([_^])\{([^}]+)\}/g;
const TAG = { _: 'sub', '^': 'sup' };
const ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '{': '&#123;', '}': '&#125;' };
const escape = (s) => s.replace(/[&<>{}]/g, (c) => ESC[c]);

function codeHtml(s) {
  let out = '';
  let last = 0;
  for (const m of s.matchAll(SCRIPT)) {
    out += escape(s.slice(last, m.index)) + `<${TAG[m[1]]}>${escape(m[2])}</${TAG[m[1]]}>`;
    last = m.index + m[0].length;
  }
  return out + escape(s.slice(last));
}

// Data text carries no TeX: "$" throws (math is set in md files only)
function noMath(s) {
  if (s.includes('$')) throw new Error(`inline: "$" in data text: ${s}`);
  return s;
}

// HTML for templates (set:html); quotes stay literal
export function toHtml(s) {
  noMath(s);
  let out = '';
  let last = 0;
  for (const m of s.matchAll(SPAN)) {
    out += escape(s.slice(last, m.index));
    const [, code, strong, em, mark, script] = m;
    if (code !== undefined) out += `<code>${codeHtml(code)}</code>`;
    else if (strong !== undefined) out += `<strong>${toHtml(strong)}</strong>`;
    else if (em !== undefined) out += `<em>${toHtml(em)}</em>`;
    else out += `<${TAG[mark]}>${toHtml(script)}</${TAG[mark]}>`;
    last = m.index + m[0].length;
  }
  return out + escape(s.slice(last));
}

// Markdown for the manual: the markup is markdown except _{x} -> <sub>x</sub>, ^{x} -> <sup>x</sup>;
// a code span holding either becomes raw <code> HTML, since markdown code spans are literal
export const toMd = (s) =>
  noMath(s)
    .replace(/`([^`]+)`/g, (m, code) => (/[_^]\{/.test(code) ? `<code>${codeHtml(code)}</code>` : m))
    .replace(/(`[^`]*`)|([_^])\{([^}]+)\}/g, (m, code, mark, script) => code ?? `<${TAG[mark]}>${script}</${TAG[mark]}>`);
