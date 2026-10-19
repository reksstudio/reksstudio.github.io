import { escape, toHtml } from './inline.mjs';
import { SECTION_REF, entryLink, entryMap } from './manual-pages.mjs';
import { optionGroup, optionId } from './reference.mjs';

export function docsRefs(base) {
  // "§<id>" -> manual link (entryLink); a numeric "§N" or an unknown id throws
  const link = (id) => {
    if (/^\d+$/.test(id) || !entryMap().has(id)) throw new Error(`docs: unresolved "§${id}"`);
    const l = entryLink(id, null, base);
    const label = l.code ? '<code>' + escape(l.text) + '</code>' : escape(l.text);
    return `<a href="${l.href}">${label}</a>`;
  };
  // inline markup -> HTML with every "§<id>" linked
  const refs = (text) => toHtml(text).replace(SECTION_REF, (m, id) => link(id));
  // option of a compact group (no entry of its own) -> the group table
  const option = (key) => {
    const g = optionGroup(key);
    if (!g.compact) return link(optionId(key));
    return `<a href="${entryLink(g.id, null, base).href}"><code>${escape(key)}</code></a>`;
  };
  return { link, refs, option };
}
