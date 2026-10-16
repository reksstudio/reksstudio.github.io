import lit from '../data/literature.json' with { type: 'json' };
import { toHtml } from './inline.mjs';

// literature.json: {functions: [{id, label, when?, cite}], entries: [{key, type, authors[], title,
//   journal | booktitle + editors + publisher + series?, edition?, year, volume?, pages?, doi | isbn,
//   for: [{fn, note?}], group, landing?}]}
// Load throws unless: keys are unique slugs; an article has a DOI, other types an ISBN or DOI; every `for` is
// non-empty and names known functions; every function is cited.
const KEY = /^[a-z][a-z0-9_-]*[a-z0-9]$/;
export const GROUPS = ['Method', 'Properties', 'Solvers', 'Optimization and dynamics', 'Software'];

const functions = new Map(lit.functions.map((f) => [f.id, f]));
const entries = new Map();
// throws unless: slug key, DOI (article) or ISBN/DOI (other types), no "et al." in authors
export function checkEntry(e, file) {
  const fail = (msg) => {
    throw new Error(`${file}: ${e.key}: ${msg}`);
  };
  if (!KEY.test(e.key)) fail('key is not a slug');
  if (e.type === 'article' && !e.doi) fail('article without DOI');
  if (e.type !== 'article' && !e.isbn && !e.doi) fail(`${e.type} without ISBN or DOI`);
  if (e.authors.some((a) => a.includes('et al'))) fail('"et al." in authors');
}
for (const e of lit.entries) {
  const fail = (msg) => {
    throw new Error(`literature.json: ${e.key}: ${msg}`);
  };
  checkEntry(e, 'literature.json');
  if (entries.has(e.key)) fail('duplicate key');
  if (!e.for?.length) fail('no "for"');
  for (const { fn } of e.for) if (!functions.has(fn)) fail(`unknown function "${fn}"`);
  if (!GROUPS.includes(e.group)) fail(`unknown group "${e.group}"`);
  entries.set(e.key, e);
}
for (const id of functions.keys()) {
  if (!lit.entries.some((e) => e.for.some((f) => f.fn === id))) throw new Error(`literature.json: function ${id} cites nothing`);
}

export function reference(key) {
  const e = entries.get(key);
  if (!e) throw new Error(`literature.json: no entry "${key}"`);
  return e;
}
export const references = () => [...entries.values()];
export const doiUrl = (e) => e.doi && `https://doi.org/${e.doi}`;

const surname = (author) => author.split(',')[0];
// "Filatov", "Filatov and Shaik", "Filatov et al."
const authorShort = (a) => (a.length === 1 ? surname(a[0]) : a.length === 2 ? `${surname(a[0])} and ${surname(a[1])}` : `${surname(a[0])} et al.`);
const source = (e) => e.journal ?? e.series ?? e.booktitle ?? e.title;
const firstPage = (pages) => pages?.split('–')[0];

// "Hu et al. 2016"; with the journal when two cited references share it: "Hu et al., J. Am. Chem. Soc. 2016"
export const authorYear = (e, journal) => (journal ? `${authorShort(e.authors)}, ${source(e)} ${e.year}` : `${authorShort(e.authors)} ${e.year}`);

// "Filatov, WIREs Comput. Mol. Sci. 2015, 5, 146"
export const shortRef = (e) =>
  `${authorShort(e.authors)}, ${[`${source(e)} ${e.year}`, e.volume, firstPage(e.pages)].filter(Boolean).join(', ')}`;

// ACS citation in the inline markup of inline.mjs: Authors. Title. *Journal* **Year**, *Vol*, Pages.
export function acs(e) {
  const authors = e.authors.join('; ');
  if (e.type === 'book') return `${authors} *${e.title}*${e.edition ? `, ${e.edition} ed.` : ''}; ${e.publisher}, ${e.year}.`;
  if (e.type === 'incollection') {
    const eds = e.editors?.length ? ` ${e.editors.join('; ')}, Ed${e.editors.length > 1 ? 's' : ''}.;` : '';
    const series = e.series ? ` ${e.series}, Vol. ${e.volume};` : '';
    return `${authors} ${e.title}. In *${e.booktitle}*;${eds}${series} ${e.publisher}, ${e.year}${e.pages ? `; pp ${e.pages}` : ''}.`;
  }
  const vol = e.volume ? `, *${e.volume}*` : '';
  const pages = e.pages ? `, ${e.pages}` : '';
  return `${authors} ${e.title}. *${e.journal}* **${e.year}**${vol}${pages}.`;
}

// labels of the functions the entry is cited for, each with its note
const caption = (e) => e.for.map(({ fn, note }) => (note ? `${functions.get(fn).label} (${note})` : functions.get(fn).label)).join('; ');

// per group: p + ul.refs > li#key > [caption, ACS, DOI link]
export function literatureHtml() {
  return GROUPS.map((g) => {
    const list = references().filter((e) => e.group === g);
    if (!list.length) return '';
    const items = list.map((e) => {
      const link = e.doi ? ` <a href="${doiUrl(e)}">doi:${e.doi}</a>` : e.isbn ? ` ISBN ${e.isbn}.` : '';
      return `<li id="${e.key}">${toHtml(caption(e))}: ${toHtml(acs(e))}${link}</li>`;
    });
    return `<p>${g}:</p>\n<ul class="refs">\n${items.join('\n')}\n</ul>`;
  })
    .filter(Boolean)
    .join('\n\n');
}

// one row per function with cite !== false: {fn, refs: [{e, note}]}
export const citeRows = () =>
  lit.functions.filter((f) => f.cite !== false).map((f) => ({
    fn: f,
    refs: references().filter((e) => e.for.some((x) => x.fn === f.id)).map((e) => ({ e, note: e.for.find((x) => x.fn === f.id).note })),
  }));

const bibEscape = (s) => s.replace(/[{}]/g, '').replace(/&/g, '\\&');
// BibTeX of every entry; authors "Last, F." joined with " and "
export function bib() {
  return references()
    .map((e) => {
      const fields = [
        ['author', e.authors.join(' and ')],
        ['title', e.title],
        ['journal', e.type === 'article' ? e.journal : undefined],
        ['booktitle', e.type === 'incollection' ? e.booktitle : undefined],
        ['editor', e.editors?.join(' and ')],
        ['series', e.series],
        ['edition', e.edition],
        ['publisher', e.publisher],
        ['year', e.year],
        ['volume', e.volume],
        ['pages', e.pages],
        ['doi', e.doi],
        ['isbn', e.isbn],
      ].filter(([, v]) => v);
      // title in double braces: BibTeX styles keep its capitalization
      const value = (k, v) => (k === 'title' ? `{{${bibEscape(v)}}}` : `{${bibEscape(String(v))}}`);
      return `@${e.type}{${e.key},\n${fields.map(([k, v]) => `  ${k} = ${value(k, v)}`).join(',\n')}\n}`;
    })
    .join('\n\n')
    .concat('\n');
}
