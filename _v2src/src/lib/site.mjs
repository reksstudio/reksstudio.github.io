import changes from '../data/changes.json' with { type: 'json' };
import machines from '../data/machines.json' with { type: 'json' };

export const BRANCH = 'kk/reks.studio';
export const REPO = 'ConstLike/psi4';
export const REPO_URL = `https://github.com/${REPO}`;
export const SOURCE_URL = `${REPO_URL}/tree/${BRANCH}`;
export const EMAIL = 'reks.studio1@gmail.com';
export const PSI4_MANUAL = 'https://psicode.org/psi4manual/master/';

export const shortRev = (rev) => rev.slice(0, 9);
// provenance line of a ladder section: its psi4 builds and the install branch
export const revLineOf = (method) =>
  `Psi4 builds of these outputs: ${method.psi4.map((b) => b.commit).join(', ')} (${method.branch}), named on each run line. Install: branch ${BRANCH} of <${REPO_URL}>.`;

// compute nodes of the published runs (machines.json), matched by host name; only the PC label reaches a page
const MACHINES = machines.machines.map((m) => ({ ...m, host: new RegExp(m.host) }));
export const pcOf = (host) => {
  const m = MACHINES.find((x) => x.host.test(host));
  if (!m) throw new Error(`machines.json: no machine for host ${host}`);
  return m.id;
};
// machines among hosts, in MACHINES order; "PC-1 = 2 x 48-core ...; PC-2 = ..."
const machinesOf = (hosts) => MACHINES.filter((m) => hosts.some((h) => m.host.test(h)));
export const machineLine = (hosts) => machinesOf(hosts).map((m) => `${m.id} = ${m.text}`).join('; ');
// footnote of a "PC-1*" mark: "* PC-1: 2 x 48-core ...; PC-2: ..."
export const machineNote = (hosts) => `* ${machinesOf(hosts).map((m) => `${m.id}: ${m.text}`).join('; ')}`;
// Psi4 install of a machine as its build log (PC-1) or job logs (PC-2) print it
export const buildOf = (pc) => {
  const b = MACHINES.find((m) => m.id === pc)?.build;
  if (!b) throw new Error(`machines.json: no build for ${pc}`);
  return b;
};

// measured psi4 commit of every output on the site: last record of changes.json
export function siteRev() {
  const { rev, date } = changes.at(-1);
  return { rev, short: shortRev(rev), date };
}
