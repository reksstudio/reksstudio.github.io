import { BRANCH, REPO_URL } from '../lib/site.mjs';

export const buildFromSource = `# clone the branch
git clone --branch ${BRANCH} ${REPO_URL}.git
cd psi4

# set up build dependencies
conda env create -f environment.yml -n p4env311
conda activate p4env311

# configure and build
cmake -S. -Bobjdir -DCMAKE_INSTALL_PREFIX=/path/to/install
cmake --build objdir --target install -j$(nproc)`;

// macOS has no nproc
export const buildJobsMac = buildFromSource.split('\n').at(-1).replace('$(nproc)', '$(sysctl -n hw.ncpu)');
