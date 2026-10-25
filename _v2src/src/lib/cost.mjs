import raw from '../data/cost.json' with { type: 'json' };
import { DATA as psi4Data, spaces as psi4Spaces, uniq } from './costpsi4.mjs';
import { landing } from './overview.mjs';
import { BRANCH, REPO_URL } from './site.mjs';

export const cost = raw;
const { md, step } = raw;

export const PREFIX = 'main/cost/';

// seconds as RESULTS.md prints them: two decimals
export const fs = (v) => v.toFixed(2);
export const fgib = (v) => v.toFixed(1);
// value and unit joined by a no-break space
const NB = String.fromCodePoint(0xa0);
const sec = (v) => `${fs(v)}${NB}s`;
const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const SHORT = { 'TDA-TDDFT': 'TDA' };
export const short = (m) => SHORT[m] ?? m;
export const CODE = { 'Psi4-REKS': 'REKS Studio', ORCA: 'ORCA', 'Q-Chem': 'Q-Chem', Psi4: 'Psi4' };
// job row name: REKS by its active space, other codes by method
export const jobShort = (r) => (r.code === 'Psi4-REKS' ? r.space : short(r.method));
// code header of a job group: REKS with its method, active space removed
export const codeHead = (r) => (r.code === 'Psi4-REKS' ? `${CODE[r.code]}, ${r.method.replace(r.space, '')}` : CODE[r.code]);
// looser-threshold mark of a job
export const dagger = (r) => (r?.loose ? ' †' : '');

// label of a job without a measured wall
export const offLabel = (r) => (r.status === 'stopped' ? `${r.stop_label}, not completed` : r.stop_label ?? 'not run');

export const panels = md.panels;
export const bases = uniq(panels.map((p) => p.basis));
export const panelOf = (system) => panels.find((p) => p.system === system);
// "TO", "TC" in the first basis; "TO def2-TZVP" in the others
export const sysName = (system) => {
  const p = panelOf(system);
  return p.basis === bases[0] ? system.split('_')[0] : `${system.split('_')[0]} ${p.basis}`;
};
const rowOf = (system, code, method) => md.rows.find((r) => r.system === system && r.code === code && r.method === method);
const closedFirst = (a, b) => (a.shell === b.shell ? 0 : a.shell === 'closed' ? -1 : 1);

// {code, label, scf, resp} per md.order entry for one panel; resp pairs with scf
export const figRows = (system) =>
  md.order.map((o) => ({
    code: o.code,
    label: o.code === 'Psi4-REKS' ? o.scf.replace('SA-REKS', '') : o.resp ? `${o.scf} → ${short(o.resp)}` : o.scf,
    scf: rowOf(system, o.code, o.scf),
    resp: o.resp ? rowOf(system, o.code, o.resp) : null,
  }));

// ORCA (or Q-Chem) figRows entry whose response job is the physics partner of the panel (TDA closed, SF-TDA open shell)
export const partner = (system, code = 'ORCA') => figRows(system).find((f) => f.code === code && f.resp?.method === panelOf(system).ref_method);
export const setting = (key, code = '') => md.settings.find((s) => s.key === key && s.code === code).value;

const branch = md.setup.find((s) => s.branch).branch;
const reksRows = md.rows.filter((r) => r.code === 'Psi4-REKS' && r.version);
const reksMain = Object.entries(Object.groupBy(reksRows, (r) => r.version)).sort((a, b) => b[1].length - a[1].length)[0][0];
const reksOther = Object.entries(Object.groupBy(reksRows.filter((r) => r.version !== reksMain), (r) => r.version)).map(
  ([v, rs]) => `${uniq(rs.map((r) => `${sysName(r.system)} ${r.space}`)).join(', ')}: ${v}`,
);
const psi4Rows = md.rows.filter((r) => r.code === 'Psi4' && r.version);
// "kk/reks.v42 @ cf0bacc93 (TC def2-TZVP (8,8): 3eb094626)"
export const reksBuild = `${branch} @ ${reksMain}${reksOther.length ? ` (${reksOther.join('; ')})` : ''}`;
export const codeVersion = (code) => uniq(md.rows.filter((r) => r.code === code && r.version).map((r) => r.version)).join(', ');
export const buildLine = `REKS rows: ${reksBuild}; Psi4 ${uniq(psi4Rows.map((r) => r.method.replace(' (T)', ''))).join('/')}: ${codeVersion('Psi4')}.`;

const proto = md.protocol;
// active spaces in ladder order
export const spaces = uniq(md.claims.map((c) => c.space));
export const looseMark = `e ${proto.loose_e_conv}, d ${proto.loose_d_conv}`;
export const tightMark = `e ${proto.e_conv}, d ${proto.d_conv}`;
// "TC (10,10), TC def2-TZVP (8,8), (10,10)"
export const looseCases = Object.entries(Object.groupBy(md.rows.filter((r) => r.code === 'Psi4-REKS' && r.loose), (r) => r.system))
  .map(([s, rs]) => `${sysName(s)} ${spaces.filter((sp) => rs.some((r) => r.space === sp)).join(', ')}`)
  .join(', ');

// Keyline: per active space, "less" iff SI-SA-REKS wall_max < min wall_min of the ORCA methods on every test
const claim = (b, s) => md.claims.find((c) => c.basis === b && c.space === s);
const refs = Object.keys(md.claims[0].systems[0].orca);
const daggers = (systems) => {
  const l = systems.filter((x) => x.holds && x.loose);
  return l.length ? ` (${l.map((x) => `${x.shell} shell${dagger(x)}`).join(', ')})` : '';
};
const kind = (s) => {
  const n = bases.filter((b) => claim(b, s).holds).length;
  return n === bases.length ? 'all' : n ? 'some' : 'none';
};
const failCase = (x) => {
  const ref = panelOf(x.system).ref_method;
  const ms = [ref, ...refs.filter((m) => m !== ref)].filter((m) => x.reks_wall_max >= x.orca[m].wall_min);
  return `${sec(x.reks_wall_s)} vs ORCA ${ms.map((m) => `${short(m)} ${sec(x.orca[m].wall_s)}`).join(' / ')} (${x.shell} shell)`;
};
const runs = spaces.reduce((acc, s) => {
  const last = acc.at(-1);
  if (last && kind(s) !== 'some' && last.kind === kind(s)) last.spaces.push(s);
  else acc.push({ kind: kind(s), spaces: [s] });
  return acc;
}, []);
const span = (ss) => (ss.length > 1 ? `${ss[0]}–${ss.at(-1)}` : ss[0]);
// the first SI-SA-REKS space computes fewer states than the others
const firstSi = `${md.order[0].resp}: ${setting('states_22')} states`;
const parts = runs.map(({ kind: k, spaces: ss }) => {
  const sys = ss.flatMap((s) => bases.flatMap((b) => claim(b, s).systems));
  const head = `${span(ss)}${ss.includes(spaces[0]) ? ` (${firstSi})` : ''}`;
  if (k === 'all') return { k, head, text: `less time than ORCA ${refs.map(short).join(' and ')} on all ${WORDS[sys.length / ss.length]} tests${daggers(sys)}.` };
  if (k === 'none') return { k, head, text: 'more, shown as is.' };
  const s = ss[0];
  const held = bases.filter((b) => claim(b, s).holds);
  const failed = bases.filter((b) => !claim(b, s).holds);
  const n = claim(held[0], s).systems.length;
  return {
    k,
    head,
    text: `less in ${held.join(', ')} on ${n === 2 ? 'both' : `all ${WORDS[n]}`} systems${daggers(held.flatMap((b) => claim(b, s).systems))}; ${failed
      .map((b) => `in ${b} ${claim(b, s).systems.filter((x) => !x.holds).sort(closedFirst).map(failCase).join(', ')}`)
      .join('; ')}.`,
  };
});
// keyline parts {head, text} in ladder order
export const claimParts = parts.map(({ head, text }) => ({ head, text }));
const joined = (x) => `${x.head}: ${x.text}`;
// band: ORCA TDA as the reference; headline = leading spaces with SI-SA-REKS wall_max < ORCA TDA wall_min on every test
const BAND_REF = 'TDA-TDDFT';
const tdaHolds = (s) => bases.every((b) => claim(b, s).systems.every((x) => x.reks_wall_max < x.orca[BAND_REF].wall_min));
const tdaFail = spaces.findIndex((s) => !tdaHolds(s));
const tdaRun = tdaFail < 0 ? spaces : spaces.slice(0, tdaFail);
if (!tdaRun.length) throw new Error('cost.mjs: no active space takes less time than ORCA TDA on every test');
export const bandClaim = `Excited states ${span(tdaRun)} in less wall time than ORCA ${short(BAND_REF)}, on all ${WORDS[bases.flatMap((b) => claim(b, tdaRun[0]).systems).length]} tests.`;
// no line break inside "SI-SA-REKS(2,2)"
export const bandSiNote = firstSi.replaceAll('-', String.fromCodePoint(0x2011));
// band test: open shell in the first basis, every job of it measured
export const bandPanel = panels.find((p) => p.basis === bases[0] && p.shell === 'open');
// ORCA figRows entry whose response job is the band reference (its SCF job: the ground-state line)
export const bandRef = figRows(bandPanel.system).find((f) => f.code === 'ORCA' && f.resp?.method === BAND_REF);

// keyline: cases where REKS takes less time or is close; the slower cases set apart
export const claimsText = parts.filter((x) => x.k !== 'none').map(joined).join(' ');
export const claimsMore = parts.filter((x) => x.k === 'none').map(joined).join(' ');
const SPEC_TEXT =
  '(2,2)–(6,6) (SI-SA-REKS(2,2): N states): less time than ORCA TDA and SF-TDA on all four tests. (8,8): less in def2-TZVP on both systems (closed shell †); in 6-31G(d) # s vs ORCA TDA # s (closed shell), # s vs ORCA SF-TDA # s / TDA # s (open shell). (10,10): more, shown as is.';
if (`${claimsText} ${claimsMore}`.replace(/\d+\.\d+/g, '#').replace(/: \d+ states\)/, ': N states)').replaceAll(NB, ' ') !== SPEC_TEXT) throw new Error(`cost.mjs: keyline differs from the agreed text: ${claimsText}`);

// lead pairs: the installed active space in the largest basis, closed shell first
const lead = claim(bases.at(-1), landing.installed);
export const leadText = `${lead.basis}, ${panelOf(lead.systems[0].system).nbf} basis functions: ${[...lead.systems]
  .sort(closedFirst)
  .map((x) => {
    const ref = panelOf(x.system).ref_method;
    return `${x.shell} shell SI-SA-REKS${lead.space} ${sec(x.reks_wall_s)} vs ORCA ${short(ref)} ${sec(x.orca[ref].wall_s)}`;
  })
  .join('; ')}.`;

export const installed = landing.installed;

// SCF iteration range of SA-REKS in the largest space of B, looser-threshold rows apart
const big = psi4Spaces.at(-1);
const bigRows = md.rows.filter((r) => r.method === `SA-REKS${big}` && r.status === 'ok');
const tight = bigRows.filter((r) => !r.loose).map((r) => r.scf_iter);
const [lo, hi] = [Math.min(...tight), Math.max(...tight)];
const looseIt = bigRows.filter((r) => r.loose).map((r) => `${r.scf_iter} in ${sysName(r.system)} †`);
export const iterA = `SA-REKS${big} from the previous-step orbitals: ${lo === hi ? lo : `${lo}–${hi}`} SCF iterations${looseIt.length ? ` (${looseIt.join(', ')})` : ''}.`;

// data file path -> description
export const DATA = {
  'data/cost_md.tsv': `Cost benchmark A: REKS Studio (Psi4) against ORCA and Q-Chem, one hot-start step of the tetracene dimer, BH&HLYP, ${bases.join(' and ')}; one row per job (${md.rows.length}), tab-separated: ${Object.keys(md.rows[0]).join(', ')}. Wall in s (fastest converged repeat; min, max over repeats), peak PSS in GiB, s per iteration where the program prints the phase time, CPU load in cores; loose: REKS run at ${looseMark}.`,
  ...psi4Data,
};
export const revLine = `Psi4 builds of these outputs: benchmark A ${buildLine.replace(/\.$/, '')}; benchmark B paper v1, build not recorded; C2H4 step ${step.rev}. Install: branch ${BRANCH} of <${REPO_URL}>.`;
