import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { properties } from '../data/properties.json' with { type: 'json' };
import blocks from '../data/blocks.json' with { type: 'json' };
import { fragmentIds, markerContent, optionAlias, optionGroups, optionId, optionKeys, parseMarker } from './reference.mjs';

// Manual pages in reading order: src/content/manual/<file>.md -> <base>manual/<slug>/ ('' = <base>manual/).
// Page titles live in the frontmatter of each file. tocDepth = deepest heading level in the page TOC (default 3);
// index = the page that ends with the A-Z index.
export const PAGES = [
  { slug: '', file: 'overview' },
  { slug: 'concepts', file: 'concepts' },
  { slug: 'first-calculation', file: 'first-calculation' },
  { slug: 'dynamics', file: 'dynamics' },
  { slug: 'setup', file: 'setup', tocDepth: 4 },
  { slug: 'run-control', file: 'run-control', tocDepth: 4 },
  { slug: 'properties', file: 'properties', tocDepth: 4 },
  { slug: 'diagnose', file: 'diagnose', tocDepth: 4 },
  { slug: 'reference', file: 'reference', index: true },
];

export const pagePath = (slug) => (slug ? `manual/${slug}/` : 'manual/');

// anchor id on page slug: "#id" from that page, "<base>manual/<slug>/#id" from anywhere else
const anchorHref = (slug, id, fromSlug, base) => (slug === fromSlug ? `#${id}` : `${base}${pagePath(slug)}#${id}`);

// relative to the Astro project root (the working directory of astro build/dev); import.meta.url is not usable
// here because pages bundle this module into .astro/.prerender/
const DIR = new URL('src/content/manual/', pathToFileURL(`${process.cwd()}/`));
// any h2; a well-formed chapter h2 "## N\. title {#id}" (N captured); any h2-h4 with an explicit "{#id}"
const H2 = /^## .*$/gm;
const CHAPTER = /^## (\d+)\\\. .+ \{#[^}\s]+\}$/;
const EXPLICIT = /^(#{2,4}) (.+?) \{#([^}\s]+)\}$/gm;
const MARKER_LINE = /^@@.*$/gm;

const sources = new Map();
const source = (file) => {
  if (!sources.has(file)) sources.set(file, readFileSync(new URL(`${file}.md`, DIR), 'utf8'));
  return sources.get(file);
};

// heading markdown -> heading text: backslash escapes and code-span backticks removed
const headingText = (md) => md.replace(/\\(.)/g, '$1').replaceAll('`', '');

const count = (list) => list.reduce((m, x) => m.set(x, (m.get(x) ?? 0) + 1), new Map());

// Throws unless: every option key sits in one group; every non-compact group and every property stage is rendered
// once, a compact group at most once; print-order, option-table and property-table are rendered once; every
// fragment is printed; every block owner is a known id; every option or property owning a block prints a fragment.
function checkCoverage(map, markers, printed, owners) {
  const fail = (msg) => {
    throw new Error(`manual coverage: ${msg}`);
  };
  const used = count(markers.map(({ name, arg }) => (arg ? `${name} ${arg}` : name)));
  const grouped = count(optionGroups().flatMap((g) => g.keys));
  for (const key of optionKeys()) if (grouped.get(key) !== 1) fail(`option ${key} is in ${grouped.get(key) ?? 0} groups`);
  for (const key of grouped.keys()) if (!optionKeys().includes(key)) fail(`group key ${key} is not an option`);
  for (const g of optionGroups()) {
    const n = used.get(`options ${g.id}`) ?? 0;
    if (g.compact ? n > 1 : n !== 1) fail(`option group ${g.id} rendered ${n} times`);
  }
  for (const stage of new Set(properties.map((p) => p.stage))) {
    if (used.get(`properties ${stage}`) !== 1) fail(`property stage ${stage} rendered ${used.get(`properties ${stage}`) ?? 0} times`);
  }
  for (const name of ['print-order', 'option-table', 'property-table']) {
    if (used.get(name) !== 1) fail(`@@${name}@@ rendered ${used.get(name) ?? 0} times`);
  }
  for (const id of fragmentIds()) if (!printed.has(id)) fail(`fragment ${id} is printed nowhere`);
  for (const b of blocks) {
    if (!map.has(b.owner)) fail(`block ${b.id}: unknown owner "${b.owner}"`);
    const data = owners.get(b.owner);
    if (data && !data.fragments?.length) fail(`${b.owner} owns block ${b.id} but prints no fragment`);
  }
}

let entries;

// entry id -> { slug, title, code, chapter }: the entries rendered by the markers of every page plus the explicit
// "{#id}" headings; chapter = N for the h2 "## N\. title {#id}", else undefined.
// Throws on a repeated id, on an h2 that is not "## N\. title {#id}" with N = 1, 2, ... in PAGES order,
// and on a failed checkCoverage.
export function entryMap() {
  if (entries) return entries;
  const map = new Map();
  const owners = new Map();
  const markers = [];
  const printed = new Set();
  const add = (id, slug, title, code, chapter) => {
    if (map.has(id)) throw new Error(`manual: entry id "${id}" appears twice`);
    map.set(id, { slug, title, code, chapter });
  };
  let chapter = 0;
  for (const { slug, file } of PAGES) {
    const md = source(file);
    for (const [line] of md.matchAll(H2)) {
      chapter += 1;
      if (Number(line.match(CHAPTER)?.[1]) !== chapter) {
        throw new Error(`manual: ${file}.md: "${line}" is not "## ${chapter}\\. <title> {#id}"`);
      }
    }
    for (const [, level, title, id] of md.matchAll(EXPLICIT)) {
      add(id, slug, headingText(title), false, level === '##' ? Number(title.match(/^\d+/)[0]) : undefined);
    }
    for (const [line] of md.matchAll(MARKER_LINE)) {
      const marker = parseMarker(line.trim());
      const content = markerContent(marker);
      markers.push(marker);
      content.fragments.forEach((id) => printed.add(id));
      for (const e of content.entries) {
        add(e.id, slug, e.title, e.code);
        if (e.owner) owners.set(e.id, e.owner);
      }
    }
  }
  checkCoverage(map, markers, printed, owners);
  entries = map;
  return map;
}

// "§<id>" target: "#id" on the page fromSlug, "<base>manual/<slug>/#id" from anywhere else
export function entryHref(id, fromSlug, base) {
  const e = entryMap().get(id);
  if (!e) throw new Error(`manual: no entry §${id}`);
  return anchorHref(e.slug, id, fromSlug, base);
}

// printed block header -> index term: "=> X, cassette 0 <=" -> "X"; a cassette clause and everything after it dropped
const blockTerm = (header) =>
  header.replace(/^=+>?\s*|\s*<?=+$/g, '').replace(/,?\s*\(?cassette \d+\)?.*$/, '').replace(/[\s:,]+$/, '');

// stored variable names of a property: its code spans with no lower case outside "<...>" placeholders
const variableNames = (text = '') =>
  [...text.matchAll(/`([^`]+)`/g)].map((m) => m[1]).filter((s) => /^[A-Z]/.test(s) && !/[a-z]/.test(s.replace(/<[^>]*>/g, '')));

// A-Z index: option keys and aliases, property names, printed block headers, stored variable names and the
// headings of pages [{ slug, title, headings }] -> [{ letter, terms: [{ text, code, targets: [{ href, label }] }] }];
// terms merge case-insensitively and keep each distinct target once; a target is labelled by its page title, or by
// "page: target title" when the term has two targets on that page; hrefs are relative to the page fromSlug
export function manualIndex(pages, fromSlug, base) {
  const titles = new Map(pages.map((p) => [p.slug, p.title]));
  const terms = new Map();
  const add = (text, code, slug, href, title) => {
    const key = text.toLowerCase();
    if (!terms.has(key)) terms.set(key, { text, code, targets: [] });
    const term = terms.get(key);
    term.code ||= code;
    if (!term.targets.some((t) => t.href === href)) term.targets.push({ href, page: titles.get(slug), title });
  };
  const stripNum = (text) => text.replace(/^\d+\.\s+/, '');
  const addHeading = (text, code, slug, h) => add(text, code, slug, anchorHref(slug, h.slug, fromSlug, base), stripNum(h.text));
  const addEntry = (text, code, id) => {
    const href = entryHref(id, fromSlug, base);
    const e = entryMap().get(id);
    add(text, code, e.slug, href, e.title);
  };

  // option key -> its entry, else the entry of its compact group, else its group heading (level 3, unique title)
  const addOption = (text, key) => {
    if (entryMap().has(optionId(key))) return addEntry(text, true, optionId(key));
    const g = optionGroups().find((x) => x.keys.includes(key));
    if (entryMap().has(g.id)) return addEntry(text, true, g.id);
    const found = pages.flatMap((p) => p.headings.filter((h) => h.depth === 3 && h.text === g.title).map((h) => [p.slug, h]));
    if (found.length !== 1) throw new Error(`manual index: option group "${g.title}" has ${found.length} headings`);
    addHeading(text, true, ...found[0]);
  };

  const keys = optionKeys();
  for (const key of keys) {
    addOption(key, key);
    if (optionAlias(key)) addOption(optionAlias(key), key);
  }
  for (const p of properties) {
    addEntry(p.name, false, p.id);
    for (const name of variableNames(p.variables)) if (!keys.includes(name)) addEntry(name, true, p.id);
  }
  for (const b of blocks) addEntry(blockTerm(b.header), true, b.owner);
  for (const p of pages) for (const h of p.headings) addHeading(stripNum(h.text), false, p.slug, h);

  for (const { targets } of terms.values()) {
    for (const t of targets) {
      const shared = targets.filter((x) => x.page === t.page).length > 1;
      t.label = shared ? `${t.page}: ${t.title}` : t.page;
    }
  }
  const groups = new Map();
  for (const term of [...terms.values()].sort((a, b) => a.text.localeCompare(b.text, 'en', { sensitivity: 'base' }))) {
    const first = term.text[0].toUpperCase();
    const letter = /[A-Z]/.test(first) ? first : '#';
    if (!groups.has(letter)) groups.set(letter, []);
    groups.get(letter).push(term);
  }
  return [...groups].map(([letter, list]) => ({ letter, terms: list }));
}
