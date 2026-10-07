export const buildFromSource = `# clone the branch
git clone --branch kk/reks.studio https://github.com/ConstLike/psi4.git
cd psi4

# set up build dependencies
conda env create -f environment.yml -n p4env311
conda activate p4env311

# configure and build
cmake -S. -Bobjdir -DCMAKE_INSTALL_PREFIX=/path/to/install
cmake --build objdir --target install -j$(nproc)`;

export const landingJob = `import psi4

mol = psi4.geometry("""
0 1
C   0.000000   1.301509  -2.315529
C   0.000000  -1.301509  -2.315529
...
units bohr
""")

psi4.set_options({
  "basis": "aug-cc-pVTZ",
  "reference": "reks",
  "reks": [4, 4],  # active space: 4 electrons, 4 orbitals

  # state-averaged ensemble — the configurations entering orbital optimization
  "sa_reks_configs": ["PPS1", "OSS1", "OSS2"],

  # an extra determinant (e.g. a high-spin state), given its own weight
  # in the SA ensemble to help SCF convergence, but left out of SI
  "sa_reks_extra": [[1, 1, 1, 1, 0, 0, 0, 0]],

  # state-interaction ensemble — set independently from sa_reks_configs,
  # mixed afterward to produce the final multi-state energies
  "si_reks_configs": [["PPS1", "OSS1", "OSS2", "OSS3", "OSS4"]],
})

E, wfn = psi4.energy("bhhlyp", return_wfn=True)`;

export const docsJob = `import psi4

mol = psi4.geometry("""
0 1
C   0.000000   1.301509  -2.315529
C   0.000000  -1.301509  -2.315529
...
units bohr
""")

psi4.set_options({
  "basis": "aug-cc-pVTZ",
  "reference": "reks",
  "reks": [4, 4],

  "sa_reks_configs": ["PPS1", "OSS1", "OSS2"],
  "sa_reks_extra": [[1, 1, 1, 1, 0, 0, 0, 0]],
  "si_reks_configs": [["PPS1", "OSS1", "OSS2", "OSS3", "OSS4"]],
})

E, wfn = psi4.energy("bhhlyp", return_wfn=True)`;

export const docsRestart = `# restart_file with a .npy file sets guess READ; to_file writes next.wfn.npy
E, wfn = psi4.energy("bhhlyp", restart_file="prev.wfn.npy", return_wfn=True)
wfn.to_file("next.wfn")`;
