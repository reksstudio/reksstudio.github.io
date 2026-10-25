import overview from '../data/overview.json' with { type: 'json' };
import { PLACEHOLDER } from './inline.mjs';

// exactness checks with a stated deviation: {system (null where a placeholder), qty, id, oracle, dev} per sub-list
const page = overview.results.find((r) => r.slug === 'exactness');
const keptRows = (id) => {
  const t = page.blocks.find((b) => b.id === id).tables[0];
  const col = (n) => t.head.indexOf(n);
  return t.rows
    .filter((r) => !PLACEHOLDER.test(r[col('Max deviation')]))
    .map((r) => ({ system: PLACEHOLDER.test(r[col('System')]) ? null : r[col('System')], qty: r[col('Quantity')], id: r[col('Identity tested')], oracle: r[col('Oracle')], dev: r[col('Max deviation')] }));
};
export const identities = keptRows('identities');
export const derivatives = keptRows('derivatives');

// page scope up to its first ";"; every dropped clause announces a check still to be added
const [head, ...rest] = page.blocks.find((b) => b.scope).scope.split(';');
if (!rest.every((x) => /to be added/.test(x))) throw new Error('exact.mjs: a dropped scope clause is not a placeholder');
export const scope = `${head.trim()}.`;

// largest "m·10^{−e}" / "10^{−e}" substring of the deviation cells, as written
const DEV = /(?:(\d+(?:\.\d+)?)·)?10\^\{−(\d+)\}/g;
const devMax = (rows) =>
  rows
    .flatMap((r) => [...r.dev.matchAll(DEV)].map((m) => ({ v: (m[1] ? Number(m[1]) : 1) * 10 ** -Number(m[2]), t: m[0] })))
    .reduce((a, x) => (x.v > a.v ? x : a)).t;

// identities with the deviation in E_h / without a unit
export const inEh = identities.filter((r) => r.dev.includes('E_{h}'));
export const noUnit = identities.filter((r) => !r.dev.includes('E_{h}'));

// tokens {exact:name}
export const vars = {
  nChecks: identities.length + derivatives.length,
  reach: head.match(/reach (.+)$/)[1].trim(),
  idMax: `≤ ${devMax(inEh.filter((r) => r.oracle !== 'symmetry'))}`,
  symMax: devMax(inEh.filter((r) => r.oracle === 'symmetry')),
  fdMax: `≤ ${devMax(derivatives)}`,
};
