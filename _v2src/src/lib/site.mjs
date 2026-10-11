import changes from '../data/changes.json' with { type: 'json' };

export const BRANCH = 'kk/reks.studio';
export const REPO = 'ConstLike/psi4';
export const REPO_URL = `https://github.com/${REPO}`;
export const SOURCE_URL = `${REPO_URL}/tree/${BRANCH}`;
export const EMAIL = 'reks.studio1@gmail.com';
export const PSI4_MANUAL = 'https://psicode.org/psi4manual/master/';

export const shortRev = (rev) => rev.slice(0, 9);

// measured psi4 commit of every output on the site: last record of changes.json
export function siteRev() {
  const { rev, date } = changes.at(-1);
  return { rev, short: shortRev(rev), date };
}
