// Byte-budget gate over the built site: per page, gzip -9 bytes of
// HTML + linked CSS <= LIMIT_PAGE, JS = 0 (JSON-like script types excluded),
// font preloads <= LIMIT_PRELOADS; each image file <= LIMIT_IMAGE (raw bytes).
// Exits 1 on any violation.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { gzipSync } from 'node:zlib';

const OUT = fileURLToPath(new URL('../../v2/', import.meta.url));
const BASE = '/v2/';
const KB = 1024;
const LIMIT_PAGE = 50 * KB;
const LIMIT_IMAGE = 100 * KB;
const LIMIT_PRELOADS = 0;
const IMAGE_EXT = new Set(['.avif', '.webp', '.jpg', '.jpeg', '.png', '.gif', '.svg']);
const NON_JS_SCRIPT_TYPES = new Set(['speculationrules', 'application/ld+json', 'application/json', 'importmap']);

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

const gz = (buf) => gzipSync(buf, { level: 9 }).length;
const fileOf = (href) => join(OUT, href.slice(BASE.length));
const attr = (tag, name) => tag.match(new RegExp(`\\s${name}=["']?([^"'\\s>]+)`, 'i'))?.[1];

const files = walk(OUT);
const failures = [];
const rows = [];

for (const page of files.filter((f) => f.endsWith('.html'))) {
  const html = readFileSync(page, 'utf8');
  const name = relative(OUT, page);

  let js = 0;
  for (const m of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    const type = attr(m[1], 'type');
    if (type && NON_JS_SCRIPT_TYPES.has(type.toLowerCase())) continue;
    const src = attr(m[1], 'src');
    js += src ? gz(readFileSync(fileOf(src))) : gz(Buffer.from(m[2]));
  }

  let css = 0;
  for (const m of html.matchAll(/<link\b[^>]*rel=["']?stylesheet[^>]*>/gi)) {
    css += gz(readFileSync(fileOf(attr(m[0], 'href'))));
  }

  const preloads = [...html.matchAll(/<link\b[^>]*rel=["']?preload[^>]*>/gi)]
    .filter((m) => attr(m[0], 'as') === 'font').length;

  const htmlGz = gz(Buffer.from(html));
  const total = htmlGz + css;
  rows.push({ name, htmlGz, css, total, js, preloads });

  if (js > 0) failures.push(`${name}: JS ${js} B gzip (budget 0)`);
  if (total > LIMIT_PAGE) failures.push(`${name}: HTML+CSS ${total} B gzip (budget ${LIMIT_PAGE})`);
  if (preloads > LIMIT_PRELOADS) failures.push(`${name}: ${preloads} font preloads (budget ${LIMIT_PRELOADS})`);
}

const images = files.filter((f) => IMAGE_EXT.has(extname(f).toLowerCase()));
for (const image of images) {
  const size = statSync(image).size;
  if (size > LIMIT_IMAGE) failures.push(`${relative(OUT, image)}: image ${size} B (budget ${LIMIT_IMAGE})`);
}

const pad = (v, n) => String(v).padStart(n);
console.log(`\nbudget (gzip -9 bytes)  ${'page'.padEnd(20)}${pad('html', 8)}${pad('css', 8)}${pad('total', 8)}${pad('js', 6)}${pad('fonts', 7)}`);
for (const r of rows.sort((a, b) => a.name.localeCompare(b.name))) {
  console.log(`                        ${r.name.padEnd(20)}${pad(r.htmlGz, 8)}${pad(r.css, 8)}${pad(r.total, 8)}${pad(r.js, 6)}${pad(r.preloads, 7)}`);
}
const largest = Math.max(...images.map((f) => statSync(f).size));
console.log(`images: ${images.length}, largest ${largest} B (budget ${LIMIT_IMAGE})`);

if (failures.length) {
  console.error(`\nbudget FAILED:\n  ${failures.join('\n  ')}`);
  process.exit(1);
}
console.log('budget OK');
