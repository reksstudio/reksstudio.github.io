# Documentation — REKS Studio

HTML: <https://reksstudio.github.io/v2/docs/>

Psi4 f31cf1f94, 2026-10-15: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

Documentation

# The code: build, version, citation

## Install

REKS Studio is a branch of Psi4 and builds with the Psi4 CMake build; the configuration catalogs are installed with it ([§6](https://reksstudio.github.io/v2/manual/setup/index.md#catalog)).

```bash
# clone the branch
git clone --branch kk/reks.studio https://github.com/ConstLike/psi4.git
cd psi4

# set up build dependencies
conda env create -f environment.yml -n p4env311
conda activate p4env311

# configure and build
cmake -S. -Bobjdir -DCMAKE_INSTALL_PREFIX=/path/to/install
cmake --build objdir --target install -j$(nproc)
```

macOS, last line: `cmake --build objdir --target install -j$(sysctl -n hw.ncpu)`

## Check the build

In `objdir`: `ctest -L reks`; every test passes within its own tolerances.

Then run `psi4 reks22_h2.dat` (download from [Worked inputs](https://reksstudio.github.io/v2/manual/index.md#worked-inputs)) and compare S0 with the table there: they agree within the energy convergence threshold of the run, 10<sup>−6</sup> E<sub>h</sub> (Psi4 default; the input sets none); the last printed digits depend on the BLAS library and the number of threads.

## Version

Psi4 `f31cf1f94`, 2026-10-15: the commit of every output in the manual. Option names and defaults may change on this branch.

## Changes

### Psi4 `f31cf1f94`, 2026-10-15

* Each SI cassette is solved by LAPACK (every root) or by block Davidson (the lowest roots), [`SI_REKS_SOLVER`](https://reksstudio.github.io/v2/options/SI_REKS_SOLVER.md); on a Davidson cassette a count -1 means the 50 lowest roots ([SI eigensolver](https://reksstudio.github.io/v2/manual/concepts/index.md#si-solver), [SI Davidson solver](https://reksstudio.github.io/v2/manual/properties/index.md#si-davidson)).
* [`SI_REKS_GRAD`](https://reksstudio.github.io/v2/options/SI_REKS_GRAD.md), [`SI_REKS_NAC`](https://reksstudio.github.io/v2/options/SI_REKS_NAC.md), [`SI_REKS_PROPERTY_FOR`](https://reksstudio.github.io/v2/options/SI_REKS_PROPERTY_FOR.md) and [`SI_REKS_STORE_STATES`](https://reksstudio.github.io/v2/options/SI_REKS_STORE_STATES.md) take one entry per SI cassette in the spin order of [`SI_REKS_2SPIN`](https://reksstudio.github.io/v2/options/SI_REKS_2SPIN.md) (spin groups as listed there, cassettes of a group in their [`SI_REKS_CONFIGS`](https://reksstudio.github.io/v2/options/SI_REKS_CONFIGS.md) order); the printed K stays in ascending 2S ([Cassette order](https://reksstudio.github.io/v2/manual/setup/index.md#cassette-order)).
* The SI-only FONs stay in \[m, 2 − m], m set by the SI FON bound margin ([SI-only FONs](https://reksstudio.github.io/v2/manual/concepts/index.md#si-only-fons), [FON micro-solver](https://reksstudio.github.io/v2/manual/run-control/index.md#fon-micro)).
* Added: [`SI_REKS_DAVIDSON_R_CONVERGENCE`](https://reksstudio.github.io/v2/options/SI_REKS_DAVIDSON_R_CONVERGENCE.md)
* Added: [`SI_REKS_FON_BOUND_MARGIN`](https://reksstudio.github.io/v2/manual/run-control/index.md#fon-micro)
* Added: [`SI_REKS_SOLVER`](https://reksstudio.github.io/v2/options/SI_REKS_SOLVER.md)

### Psi4 `d40267fc2`, 2026-10-13

* One-electron SI couplings are Slater–Condon elements over the Fock matrices of the microstates, the bra/ket mean for an excitation ([SI Hamiltonian and overlap](https://reksstudio.github.io/v2/manual/concepts/index.md#si-hamiltonian)); SSR energies and state properties follow from them.
* SI gradients and NAC are analytic with meta-GGA functionals ([Nuclear gradients of SSR states](https://reksstudio.github.io/v2/manual/properties/index.md#state-gradient), [Nonadiabatic coupling vectors](https://reksstudio.github.io/v2/manual/properties/index.md#nac)); Laplacian-dependent meta-GGAs are rejected with an input error.
* NTO holes, NDOs, state natural orbitals and EKT eigenvectors are in a canonical basis of each degenerate span ([Natural transition orbitals](https://reksstudio.github.io/v2/manual/properties/index.md#nto), [Natural orbitals and occupations of the active space](https://reksstudio.github.io/v2/manual/properties/index.md#natural-orbitals)).

### Psi4 `b275f4294`, 2026-10-11

## Cite

Cite the papers of each feature used. All entries: [reks-studio.bib](https://reksstudio.github.io/v2/reks-studio.bib.txt); full references: [§19](https://reksstudio.github.io/v2/manual/reference/index.md#references).

| Feature | When | Cite |
| - | - | - |
| Every REKS run | [§1](https://reksstudio.github.io/v2/manual/index.md#overview) | [Filatov and Shaik, Chem. Phys. Lett. 1999, 304, 429](https://reksstudio.github.io/v2/manual/reference/index.md#filatov1999-reks); [Filatov, WIREs Comput. Mol. Sci. 2015, 5, 146](https://reksstudio.github.io/v2/manual/reference/index.md#filatov2015-wires); [Moreira et al., J. Chem. Theory Comput. 2007, 3, 764](https://reksstudio.github.io/v2/manual/reference/index.md#moreira2007-interpolation) (interpolating factor f); [Komarov et al., ChemRxiv 2026](https://reksstudio.github.io/v2/manual/reference/index.md#komarov2026-reks-studio) (catalog generator and engine); [Smith et al., J. Chem. Phys. 2020, 152, 184108](https://reksstudio.github.io/v2/manual/reference/index.md#smith2020-psi4) |
| DFT functional (Libxc) | [§1](https://reksstudio.github.io/v2/manual/index.md#overview): a functional with an `XC evaluation` line, not psi4.energy("scf") | [Lehtola et al., SoftwareX 2018, 7, 1](https://reksstudio.github.io/v2/manual/reference/index.md#lehtola2018-libxc) |
| BH\&HLYP functional | [§1](https://reksstudio.github.io/v2/manual/index.md#overview): psi4.energy("bhhlyp") | [Becke, J. Chem. Phys. 1993, 98, 1372](https://reksstudio.github.io/v2/manual/reference/index.md#becke1993-half-and-half) (half-and-half mixing; the reference Libxc gives for HYB_GGA_XC_BHANDHLYP); [Becke, Phys. Rev. A 1988, 38, 3098](https://reksstudio.github.io/v2/manual/reference/index.md#becke1988-b88) (B88 exchange); [Lee et al., Phys. Rev. B 1988, 37, 785](https://reksstudio.github.io/v2/manual/reference/index.md#lee1988-lyp) (LYP correlation) |
| SA-REKS ensemble | [SA-REKS ensemble and weights](https://reksstudio.github.io/v2/manual/concepts/index.md#sa-ensemble) | [Gross et al., Phys. Rev. A 1988, 37, 2805](https://reksstudio.github.io/v2/manual/reference/index.md#gross1988-variational); [Gross et al., Phys. Rev. A 1988, 37, 2809](https://reksstudio.github.io/v2/manual/reference/index.md#gross1988-ensemble-dft); [Theophilou, J. Phys. C: Solid State Phys. 1979, 12, 5419](https://reksstudio.github.io/v2/manual/reference/index.md#theophilou1979-excited); [Filatov, Top. Curr. Chem. 2016, 368, 97](https://reksstudio.github.io/v2/manual/reference/index.md#filatov2016-sa-reks) |
| SA pool with more than one excited configuration | [SA pool](https://reksstudio.github.io/v2/manual/setup/index.md#sa-pool) | [Filatov et al., J. Chem. Phys. 2015, 142, 184104](https://reksstudio.github.io/v2/manual/reference/index.md#filatov2015-si-sa-reks) |
| REKS(4,4) | [Active space](https://reksstudio.github.io/v2/manual/setup/index.md#active-space): four active orbitals | [Filatov et al., Phys. Chem. Chem. Phys. 2016, 18, 21040](https://reksstudio.github.io/v2/manual/reference/index.md#filatov2016-gvb-ansatz); [Filatov et al., J. Chem. Phys. 2016, 145, 244104](https://reksstudio.github.io/v2/manual/reference/index.md#filatov2016-reks44) |
| (6,6) active space, or SI on a sector 2S > 0 | [Active space](https://reksstudio.github.io/v2/manual/setup/index.md#active-space), [§9](https://reksstudio.github.io/v2/manual/setup/index.md#spin-manifolds) | [Filatov et al., Phys. Chem. Chem. Phys. 2016, 18, 21040](https://reksstudio.github.io/v2/manual/reference/index.md#filatov2016-gvb-ansatz) (REKS(4,4) form generalized); [Filatov et al., J. Chem. Phys. 2016, 145, 244104](https://reksstudio.github.io/v2/manual/reference/index.md#filatov2016-reks44) (REKS(4,4) form generalized); [Komarov et al., ChemRxiv 2026](https://reksstudio.github.io/v2/manual/reference/index.md#komarov2026-reks-studio) (primary source) |
| SSR (SI-SA-REKS) | [SI cassette](https://reksstudio.github.io/v2/manual/concepts/index.md#si-cassette) | [Filatov et al., J. Chem. Phys. 2015, 142, 184104](https://reksstudio.github.io/v2/manual/reference/index.md#filatov2015-si-sa-reks); [Filatov, J. Chem. Theory Comput. 2013, 9, 4526](https://reksstudio.github.io/v2/manual/reference/index.md#filatov2013-ci-geometries); [Huix-Rotllant et al., J. Chem. Theory Comput. 2013, 9, 3917](https://reksstudio.github.io/v2/manual/reference/index.md#huix-rotllant2013-retinal) |
| SSR with four or more active orbitals | [SI cassette](https://reksstudio.github.io/v2/manual/concepts/index.md#si-cassette), [Active space](https://reksstudio.github.io/v2/manual/setup/index.md#active-space) | [Filatov et al., J. Chem. Phys. 2017, 147, 064104](https://reksstudio.github.io/v2/manual/reference/index.md#filatov2017-extended-space) |
| Coupling damping | [Coupling damping below 100 % exact exchange](https://reksstudio.github.io/v2/manual/concepts/index.md#coupling-damping) | [Filatov et al., J. Chem. Phys. 2017, 147, 064104](https://reksstudio.github.io/v2/manual/reference/index.md#filatov2017-extended-space) (Eq. (B50)); [Grimme and Waletzke, J. Chem. Phys. 1999, 111, 5645](https://reksstudio.github.io/v2/manual/reference/index.md#grimme1999-dft-mrci) (constants; one set for all spins) |
| CP-REKS, gradients and relaxed properties | [Gradients and couplings](https://reksstudio.github.io/v2/manual/setup/index.md#gradients-couplings) | [Filatov et al., J. Chem. Phys. 2017, 147, 034113](https://reksstudio.github.io/v2/manual/reference/index.md#filatov2017-gradients); [Liu et al., J. Chem. Phys. 2021, 154, 104108](https://reksstudio.github.io/v2/manual/reference/index.md#liu2021-gradients-gpu) |
| Nonadiabatic coupling vectors | [Gradients and couplings](https://reksstudio.github.io/v2/manual/setup/index.md#gradients-couplings) | [Liu et al., J. Chem. Phys. 2021, 154, 104108](https://reksstudio.github.io/v2/manual/reference/index.md#liu2021-gradients-gpu) (model part, Eq. (47)); [Filatov et al., J. Chem. Theory Comput. 2018, 14, 4499](https://reksstudio.github.io/v2/manual/reference/index.md#filatov2018-nac-dynamics) |
| Extended Koopmans' theorem (ionization energies) | [State properties](https://reksstudio.github.io/v2/manual/setup/index.md#state-properties) | [Filatov et al., J. Chem. Theory Comput. 2020, 16, 4489](https://reksstudio.github.io/v2/manual/reference/index.md#filatov2020-ekt); [Smith and Day, J. Chem. Phys. 1975, 62, 113](https://reksstudio.github.io/v2/manual/reference/index.md#smith1975-ekt); [Morrell et al., J. Chem. Phys. 1975, 62, 549](https://reksstudio.github.io/v2/manual/reference/index.md#morrell1975-ekt) |
| Chirgwin-Coulson weights | [Chirgwin–Coulson weights](https://reksstudio.github.io/v2/manual/concepts/index.md#cc-weights) | [Chirgwin and Coulson, Proc. R. Soc. London, Ser. A 1950, 201, 196](https://reksstudio.github.io/v2/manual/reference/index.md#chirgwin1950-weights) |
| Mayer bond index | [State properties](https://reksstudio.github.io/v2/manual/setup/index.md#state-properties) | [Mayer, Chem. Phys. Lett. 1983, 97, 270](https://reksstudio.github.io/v2/manual/reference/index.md#mayer1983-bond-order) |
| Wiberg bond index | [State properties](https://reksstudio.github.io/v2/manual/setup/index.md#state-properties) | [Wiberg, Tetrahedron 1968, 24, 1083](https://reksstudio.github.io/v2/manual/reference/index.md#wiberg1968-bond-index) |
| Odd and unpaired electrons (N_D, N_U, N_U,nl) | [State properties](https://reksstudio.github.io/v2/manual/setup/index.md#state-properties) | [Takatsuka et al., Theor. Chim. Acta 1978, 48, 175](https://reksstudio.github.io/v2/manual/reference/index.md#takatsuka1978-odd-electrons) (N_D); [Head-Gordon, Chem. Phys. Lett. 2003, 372, 508](https://reksstudio.github.io/v2/manual/reference/index.md#head-gordon2003-unpaired) (N_U, N_U,nl) |
| Natural transition orbitals | [State properties](https://reksstudio.github.io/v2/manual/setup/index.md#state-properties) | [Martin, J. Chem. Phys. 2003, 118, 4775](https://reksstudio.github.io/v2/manual/reference/index.md#martin2003-nto) |
| Exciton descriptors | [State properties](https://reksstudio.github.io/v2/manual/setup/index.md#state-properties) | [Plasser et al., J. Chem. Phys. 2014, 141, 024106](https://reksstudio.github.io/v2/manual/reference/index.md#plasser2014-exciton-formalism); [Bäppler et al., Phys. Rev. A 2014, 90, 052521](https://reksstudio.github.io/v2/manual/reference/index.md#bappler2014-exciton) |
| Fragment charge-transfer descriptors | [State properties](https://reksstudio.github.io/v2/manual/setup/index.md#state-properties) | [Plasser and Lischka, J. Chem. Theory Comput. 2012, 8, 2777](https://reksstudio.github.io/v2/manual/reference/index.md#plasser2012-charge-transfer); [Plasser, J. Chem. Phys. 2020, 152, 084108](https://reksstudio.github.io/v2/manual/reference/index.md#plasser2020-theodore) |
| Fragment charge difference | [State properties](https://reksstudio.github.io/v2/manual/setup/index.md#state-properties) | [Voityuk and Rösch, J. Chem. Phys. 2002, 117, 5607](https://reksstudio.github.io/v2/manual/reference/index.md#voityuk2002-fcd) |
| Fragment excitation difference | [State properties](https://reksstudio.github.io/v2/manual/setup/index.md#state-properties) | [Hsu et al., J. Phys. Chem. C 2008, 112, 1204](https://reksstudio.github.io/v2/manual/reference/index.md#hsu2008-fed) |
| Fragment spin difference | [State properties](https://reksstudio.github.io/v2/manual/setup/index.md#state-properties) | [You and Hsu, J. Chem. Phys. 2010, 133, 074105](https://reksstudio.github.io/v2/manual/reference/index.md#you2010-fsd) |
| Conical-intersection topography | [State properties](https://reksstudio.github.io/v2/manual/setup/index.md#state-properties) | [Fdez. Galván et al., J. Chem. Theory Comput. 2016, 12, 3636](https://reksstudio.github.io/v2/manual/reference/index.md#galvan2016-sa-casscf-nac); [Fdez. Galván et al., Phys. Chem. Chem. Phys. 2022, 24, 1638](https://reksstudio.github.io/v2/manual/reference/index.md#galvan2022-ci-topography) |
| D3 dispersion correction | a functional name with a `-d3` suffix, e.g. `bhhlyp-d3bj` | [Grimme et al., J. Chem. Phys. 2010, 132, 154104](https://reksstudio.github.io/v2/manual/reference/index.md#grimme2010-d3) (D3(0)); [Grimme et al., J. Comput. Chem. 2011, 32, 1456](https://reksstudio.github.io/v2/manual/reference/index.md#grimme2011-d3bj) (D3(BJ)) |
| Geometry optimization (DL-FIND) | [Geometry optimization](https://reksstudio.github.io/v2/manual/dynamics/index.md#geometry-optimization) | [Kästner et al., J. Phys. Chem. A 2009, 113, 11856](https://reksstudio.github.io/v2/manual/reference/index.md#kastner2009-dl-find) |
| Surface hopping (PyUNIxMD) | [Surface hopping](https://reksstudio.github.io/v2/manual/dynamics/index.md#surface-hopping) | [Lee et al., J. Comput. Chem. 2021, 42, 1755](https://reksstudio.github.io/v2/manual/reference/index.md#lee2021-pyunixmd) |
| FSSH (mqc.SH) | [Surface hopping](https://reksstudio.github.io/v2/manual/dynamics/index.md#surface-hopping) | [Tully, J. Chem. Phys. 1990, 93, 1061](https://reksstudio.github.io/v2/manual/reference/index.md#tully1990-fssh) |
| mqc.SH, dec_correction="edc" | [Surface hopping](https://reksstudio.github.io/v2/manual/dynamics/index.md#surface-hopping) | [Granucci and Persico, J. Chem. Phys. 2007, 126, 134114](https://reksstudio.github.io/v2/manual/reference/index.md#granucci2007-edc) |
| mqc.SH, dec_correction="idc" | [Surface hopping](https://reksstudio.github.io/v2/manual/dynamics/index.md#surface-hopping) | [Nelson et al., J. Chem. Phys. 2013, 138, 224111](https://reksstudio.github.io/v2/manual/reference/index.md#nelson2013-idc) |
| DISH-XF (mqc.SHXF) | [Surface hopping](https://reksstudio.github.io/v2/manual/dynamics/index.md#surface-hopping) | [Ha et al., J. Phys. Chem. Lett. 2018, 9, 1097](https://reksstudio.github.io/v2/manual/reference/index.md#ha2018-dish-xf) |

### Method name and computational details

Name the method SSR (SI-SA-REKS, [§1](https://reksstudio.github.io/v2/manual/index.md#overview)); in a paper give the printed label `kSI-lSA-REKS(N,M)` ([SI cassette](https://reksstudio.github.io/v2/manual/concepts/index.md#si-cassette)), the functional as printed in the `XC evaluation` line, and the basis. The label carries only counts: name the SA-pool configurations with their weights and the cassette configurations as printed; defaults may change between revisions ([Changes](https://reksstudio.github.io/v2/docs/index.md#changes)).

Report:

* the printed blocks `==> REKS Studio setup <==`, `=> SA pool <=`, `=> Pairing schemes (geminal orbitals) <=`, `=> SI pools <=`, `==> State interaction: setup over the union of the SI cassettes <==`, which hold these names and weights;
* every REKS option set to a value other than its default (column Default of [§18](https://reksstudio.github.io/v2/manual/reference/index.md#option-table)), and always [`SA_REKS_WEIGHTS`](https://reksstudio.github.io/v2/options/SA_REKS_WEIGHTS.md), [`SI_REKS_OVERLAP_CUTOFF`](https://reksstudio.github.io/v2/options/SI_REKS_OVERLAP_CUTOFF.md), [`REKS_CPREKS_CONV`](https://reksstudio.github.io/v2/options/REKS_CPREKS_CONV.md), [`GUESS_ACTIVE_WINDOW`](https://reksstudio.github.io/v2/options/GUESS_ACTIVE_WINDOW.md), [`REKS_<L>_FON`](https://reksstudio.github.io/v2/options/REKS_N_FON.md), [`REKS_GEMINAL_WIDTHS`](https://reksstudio.github.io/v2/options/REKS_GEMINAL_WIDTHS.md);
* the Psi4 options [`basis`](https://psicode.org/psi4manual/master/autodir_options_c/scf__basis.html), [`puream`](https://psicode.org/psi4manual/master/autodir_options_c/globals__puream.html), [`dft_spherical_points`](https://psicode.org/psi4manual/master/autodir_options_c/scf__dft_spherical_points.html), [`dft_radial_points`](https://psicode.org/psi4manual/master/autodir_options_c/scf__dft_radial_points.html), [`scf_type`](https://psicode.org/psi4manual/master/autodir_options_c/globals__scf_type.html), [`df_basis_scf`](https://psicode.org/psi4manual/master/autodir_options_c/scf__df_basis_scf.html), [`e_convergence`](https://psicode.org/psi4manual/master/autodir_options_c/scf__e_convergence.html), [`d_convergence`](https://psicode.org/psi4manual/master/autodir_options_c/scf__d_convergence.html);
* the full input file (the whole options block and the geometry) in the SI; it also covers Psi4 options outside the list above
* the functional name with its dispersion suffix, e.g. `bhhlyp-d3bj`
* whether coupling damping was applied ([Coupling damping below 100 % exact exchange](https://reksstudio.github.io/v2/manual/concepts/index.md#coupling-damping))
* the seed orbitals ([Seed orbitals](https://reksstudio.github.io/v2/manual/first-calculation/index.md#seed-orbitals)) and the C1 point group
* optimization and dynamics: every argument of the driver call, defaults included; simplest is the whole driver script in the SI ([Geometry optimization](https://reksstudio.github.io/v2/manual/dynamics/index.md#geometry-optimization), [Surface hopping](https://reksstudio.github.io/v2/manual/dynamics/index.md#surface-hopping))
* PyUNIxMD and libdlfind versions ([Requirements](https://reksstudio.github.io/v2/manual/dynamics/index.md#dyn-requirements))

## Licence

LGPL-3.0, as Psi4: [COPYING.LESSER](https://github.com/ConstLike/psi4/blob/kk/reks.studio/COPYING.LESSER).

## Contact

[reks.studio1@gmail.com](mailto:reks.studio1@gmail.com). Attach the input, the output at [`REKS_REPORT_LEVEL`](https://reksstudio.github.io/v2/options/REKS_REPORT_LEVEL.md) `3`, and the `Git: Rev` line of the output header.

## Manual

[Tasks](https://reksstudio.github.io/v2/manual/index.md#tasks): which input and which output for a task. [§18](https://reksstudio.github.io/v2/manual/reference/index.md#option-table): every option.

## Linked files

[reks-studio.bib](https://reksstudio.github.io/v2/reks-studio.bib.txt)

```bibtex
@article{filatov1999-reks,
  author = {Filatov, M. and Shaik, S.},
  title = {{A spin-restricted ensemble-referenced Kohn–Sham method and its application to diradicaloid situations}},
  journal = {Chem. Phys. Lett.},
  year = {1999},
  volume = {304},
  pages = {429–437},
  doi = {10.1016/S0009-2614(99)00336-X}
}

@article{filatov2000-symmetry-breaking,
  author = {Filatov, M. and Shaik, S.},
  title = {{Artificial symmetry breaking in radicals is avoided by the use of the Ensemble-Referenced Kohn–Sham (REKS) method}},
  journal = {Chem. Phys. Lett.},
  year = {2000},
  volume = {332},
  pages = {409–419},
  doi = {10.1016/S0009-2614(00)01257-4}
}

@article{filatov2015-wires,
  author = {Filatov, M.},
  title = {{Spin-restricted ensemble-referenced Kohn–Sham method: basic principles and application to strongly correlated ground and excited states of molecules}},
  journal = {WIREs Comput. Mol. Sci.},
  year = {2015},
  volume = {5},
  pages = {146–167},
  doi = {10.1002/wcms.1209}
}

@article{moreira2007-interpolation,
  author = {Moreira, I. de P. R. and Costa, R. and Filatov, M. and Illas, F.},
  title = {{Restricted ensemble-referenced Kohn–Sham versus broken symmetry approaches in density functional theory: Magnetic coupling in Cu binuclear complexes}},
  journal = {J. Chem. Theory Comput.},
  year = {2007},
  volume = {3},
  pages = {764–774},
  doi = {10.1021/ct7000057}
}

@article{gross1988-variational,
  author = {Gross, E. K. U. and Oliveira, L. N. and Kohn, W.},
  title = {{Rayleigh-Ritz variational principle for ensembles of fractionally occupied states}},
  journal = {Phys. Rev. A},
  year = {1988},
  volume = {37},
  pages = {2805–2808},
  doi = {10.1103/PhysRevA.37.2805}
}

@article{gross1988-ensemble-dft,
  author = {Gross, E. K. U. and Oliveira, L. N. and Kohn, W.},
  title = {{Density-functional theory for ensembles of fractionally occupied states. I. Basic formalism}},
  journal = {Phys. Rev. A},
  year = {1988},
  volume = {37},
  pages = {2809–2820},
  doi = {10.1103/PhysRevA.37.2809}
}

@article{theophilou1979-excited,
  author = {Theophilou, A. K.},
  title = {{The energy density functional formalism for excited states}},
  journal = {J. Phys. C: Solid State Phys.},
  year = {1979},
  volume = {12},
  pages = {5419–5430},
  doi = {10.1088/0022-3719/12/24/013}
}

@incollection{filatov2016-sa-reks,
  author = {Filatov, M.},
  title = {{Ensemble DFT approach to excited states of strongly correlated molecular systems}},
  booktitle = {Density-Functional Methods for Excited States},
  editor = {Ferré, N. and Filatov, M. and Huix-Rotllant, M.},
  series = {Top. Curr. Chem.},
  publisher = {Springer International Publishing: Cham},
  year = {2016},
  volume = {368},
  pages = {97–124},
  doi = {10.1007/128_2015_630},
  isbn = {978-3-319-22080-2}
}

@article{filatov2015-si-sa-reks,
  author = {Filatov, M. and Huix-Rotllant, M. and Burghardt, I.},
  title = {{Ensemble density functional theory method correctly describes bond dissociation, excited state electron transfer, and double excitations}},
  journal = {J. Chem. Phys.},
  year = {2015},
  volume = {142},
  pages = {184104},
  doi = {10.1063/1.4919773}
}

@article{filatov2016-gvb-ansatz,
  author = {Filatov, M. and Martínez, T. J. and Kim, K. S.},
  title = {{Using the GVB Ansatz to develop ensemble DFT method for describing multiple strongly correlated electron pairs}},
  journal = {Phys. Chem. Chem. Phys.},
  year = {2016},
  volume = {18},
  pages = {21040–21050},
  doi = {10.1039/C6CP00236F}
}

@article{filatov2016-reks44,
  author = {Filatov, M. and Liu, F. and Kim, K. S. and Martínez, T. J.},
  title = {{Self-consistent implementation of ensemble density functional theory method for multiple strongly correlated electron pairs}},
  journal = {J. Chem. Phys.},
  year = {2016},
  volume = {145},
  pages = {244104},
  doi = {10.1063/1.4972174}
}

@article{filatov2017-extended-space,
  author = {Filatov, M. and Martínez, T. J. and Kim, K. S.},
  title = {{Description of ground and excited electronic states by ensemble density functional method with extended active space}},
  journal = {J. Chem. Phys.},
  year = {2017},
  volume = {147},
  pages = {064104},
  doi = {10.1063/1.4996873}
}

@article{filatov2017-gradients,
  author = {Filatov, M. and Liu, F. and Martínez, T. J.},
  title = {{Analytical derivatives of the individual state energies in ensemble density functional theory method. I. General formalism}},
  journal = {J. Chem. Phys.},
  year = {2017},
  volume = {147},
  pages = {034113},
  doi = {10.1063/1.4994542}
}

@article{liu2021-gradients-gpu,
  author = {Liu, F. and Filatov, M. and Martínez, T. J.},
  title = {{Analytical derivatives of the individual state energies in ensemble density functional theory. II. Implementation on graphical processing units (GPUs)}},
  journal = {J. Chem. Phys.},
  year = {2021},
  volume = {154},
  pages = {104108},
  doi = {10.1063/5.0041389}
}

@article{filatov2018-nac-dynamics,
  author = {Filatov, M. and Min, S. K. and Kim, K. S.},
  title = {{Direct nonadiabatic dynamics by mixed quantum-classical formalism connected with ensemble density functional theory method: Application to trans-penta-2,4-dieniminium cation}},
  journal = {J. Chem. Theory Comput.},
  year = {2018},
  volume = {14},
  pages = {4499–4512},
  doi = {10.1021/acs.jctc.8b00217}
}

@article{filatov2019-chd-dynamics,
  author = {Filatov, M. and Min, S. K. and Kim, K. S.},
  title = {{Non-adiabatic dynamics of ring opening in cyclohexa-1,3-diene described by an ensemble density-functional theory method}},
  journal = {Mol. Phys.},
  year = {2019},
  volume = {117},
  pages = {1128–1141},
  doi = {10.1080/00268976.2018.1519200}
}

@article{grimme1999-dft-mrci,
  author = {Grimme, S. and Waletzke, M.},
  title = {{A combination of Kohn–Sham density functional theory and multi-reference configuration interaction methods}},
  journal = {J. Chem. Phys.},
  year = {1999},
  volume = {111},
  pages = {5645–5655},
  doi = {10.1063/1.479866}
}

@article{filatov2020-ekt,
  author = {Filatov, M. and Lee, S. and Choi, C. H.},
  title = {{Computation of molecular ionization energies using an ensemble density functional theory method}},
  journal = {J. Chem. Theory Comput.},
  year = {2020},
  volume = {16},
  pages = {4489–4504},
  doi = {10.1021/acs.jctc.0c00218}
}

@article{filatov2020-electron-affinities,
  author = {Filatov, M. and Lee, S. and Nakata, H. and Choi, C. H.},
  title = {{Computation of molecular electron affinities using an ensemble density functional theory method}},
  journal = {J. Phys. Chem. A},
  year = {2020},
  volume = {124},
  pages = {7795–7804},
  doi = {10.1021/acs.jpca.0c06976}
}

@article{filatov2021-sudden-polarization,
  author = {Filatov, M. and Lee, S. and Choi, C. H.},
  title = {{Description of sudden polarization in the excited electronic states with an ensemble density functional theory method}},
  journal = {J. Chem. Theory Comput.},
  year = {2021},
  volume = {17},
  pages = {5123–5139},
  doi = {10.1021/acs.jctc.1c00479}
}

@article{filatov2013-ci-geometries,
  author = {Filatov, M.},
  title = {{Assessment of density functional methods for obtaining geometries at conical intersections in organic molecules}},
  journal = {J. Chem. Theory Comput.},
  year = {2013},
  volume = {9},
  pages = {4526–4541},
  doi = {10.1021/ct400598b}
}

@article{huix-rotllant2013-retinal,
  author = {Huix-Rotllant, M. and Filatov, M. and Gozem, S. and Schapiro, I. and Olivucci, M. and Ferré, N.},
  title = {{Assessment of density functional theory for describing the correlation effects on the ground and excited state potential energy surfaces of a retinal chromophore model}},
  journal = {J. Chem. Theory Comput.},
  year = {2013},
  volume = {9},
  pages = {3917–3932},
  doi = {10.1021/ct4003465}
}

@article{veril2021-questdb,
  author = {Véril, M. and Scemama, A. and Caffarel, M. and Lipparini, F. and Boggio-Pasqua, M. and Jacquemin, D. and Loos, P.-F.},
  title = {{QUESTDB: A database of highly accurate excitation energies for the electronic structure community}},
  journal = {WIREs Comput. Mol. Sci.},
  year = {2021},
  volume = {11},
  pages = {e1517},
  doi = {10.1002/wcms.1517}
}

@article{komarov2026-reks-studio,
  author = {Komarov, K. and Filatov, M. and Min, S. K.},
  title = {{Automated Symbolic Derivation Enables Scalable Ensemble DFT for Strongly Correlated Molecules and Materials}},
  journal = {ChemRxiv},
  year = {2026},
  doi = {10.26434/chemrxiv.15008475/v1}
}

@article{becke1993-half-and-half,
  author = {Becke, A. D.},
  title = {{A new mixing of Hartree–Fock and local density-functional theories}},
  journal = {J. Chem. Phys.},
  year = {1993},
  volume = {98},
  pages = {1372–1377},
  doi = {10.1063/1.464304}
}

@article{becke1988-b88,
  author = {Becke, A. D.},
  title = {{Density-functional exchange-energy approximation with correct asymptotic behavior}},
  journal = {Phys. Rev. A},
  year = {1988},
  volume = {38},
  pages = {3098–3100},
  doi = {10.1103/PhysRevA.38.3098}
}

@article{lee1988-lyp,
  author = {Lee, C. and Yang, W. and Parr, R. G.},
  title = {{Development of the Colle-Salvetti correlation-energy formula into a functional of the electron density}},
  journal = {Phys. Rev. B},
  year = {1988},
  volume = {37},
  pages = {785–789},
  doi = {10.1103/PhysRevB.37.785}
}

@article{mayer1983-bond-order,
  author = {Mayer, I.},
  title = {{Charge, bond order and valence in the ab initio SCF theory}},
  journal = {Chem. Phys. Lett.},
  year = {1983},
  volume = {97},
  pages = {270–274},
  doi = {10.1016/0009-2614(83)80005-0}
}

@article{takatsuka1978-odd-electrons,
  author = {Takatsuka, K. and Fueno, T. and Yamaguchi, K.},
  title = {{Distribution of odd electrons in ground-state molecules}},
  journal = {Theor. Chim. Acta},
  year = {1978},
  volume = {48},
  pages = {175–183},
  doi = {10.1007/BF00549017}
}

@article{head-gordon2003-unpaired,
  author = {Head-Gordon, M.},
  title = {{Characterizing unpaired electrons from the one-particle density matrix}},
  journal = {Chem. Phys. Lett.},
  year = {2003},
  volume = {372},
  pages = {508–511},
  doi = {10.1016/S0009-2614(03)00422-6}
}

@article{martin2003-nto,
  author = {Martin, R. L.},
  title = {{Natural transition orbitals}},
  journal = {J. Chem. Phys.},
  year = {2003},
  volume = {118},
  pages = {4775–4777},
  doi = {10.1063/1.1558471}
}

@article{plasser2014-exciton-formalism,
  author = {Plasser, F. and Wormit, M. and Dreuw, A.},
  title = {{New tools for the systematic analysis and visualization of electronic excitations. I. Formalism}},
  journal = {J. Chem. Phys.},
  year = {2014},
  volume = {141},
  pages = {024106},
  doi = {10.1063/1.4885819}
}

@article{bappler2014-exciton,
  author = {Bäppler, S. A. and Plasser, F. and Wormit, M. and Dreuw, A.},
  title = {{Exciton analysis of many-body wave functions: Bridging the gap between the quasiparticle and molecular orbital pictures}},
  journal = {Phys. Rev. A},
  year = {2014},
  volume = {90},
  pages = {052521},
  doi = {10.1103/PhysRevA.90.052521}
}

@article{plasser2012-charge-transfer,
  author = {Plasser, F. and Lischka, H.},
  title = {{Analysis of excitonic and charge transfer interactions from quantum chemical calculations}},
  journal = {J. Chem. Theory Comput.},
  year = {2012},
  volume = {8},
  pages = {2777–2789},
  doi = {10.1021/ct300307c}
}

@article{plasser2020-theodore,
  author = {Plasser, F.},
  title = {{TheoDORE: A toolbox for a detailed and automated analysis of electronic excited state computations}},
  journal = {J. Chem. Phys.},
  year = {2020},
  volume = {152},
  pages = {084108},
  doi = {10.1063/1.5143076}
}

@article{voityuk2002-fcd,
  author = {Voityuk, A. A. and Rösch, N.},
  title = {{Fragment charge difference method for estimating donor–acceptor electronic coupling: Application to DNA π-stacks}},
  journal = {J. Chem. Phys.},
  year = {2002},
  volume = {117},
  pages = {5607–5616},
  doi = {10.1063/1.1502255}
}

@article{hsu2008-fed,
  author = {Hsu, C.-P. and You, Z.-Q. and Chen, H.-C.},
  title = {{Characterization of the short-range couplings in excitation energy transfer}},
  journal = {J. Phys. Chem. C},
  year = {2008},
  volume = {112},
  pages = {1204–1212},
  doi = {10.1021/jp076512i}
}

@article{you2010-fsd,
  author = {You, Z.-Q. and Hsu, C.-P.},
  title = {{The fragment spin difference scheme for triplet-triplet energy transfer coupling}},
  journal = {J. Chem. Phys.},
  year = {2010},
  volume = {133},
  pages = {074105},
  doi = {10.1063/1.3467882}
}

@article{galvan2016-sa-casscf-nac,
  author = {Fdez. Galván, I. and Delcey, M. G. and Pedersen, T. B. and Aquilante, F. and Lindh, R.},
  title = {{Analytical state-average complete-active-space self-consistent field nonadiabatic coupling vectors: Implementation with density-fitted two-electron integrals and application to conical intersections}},
  journal = {J. Chem. Theory Comput.},
  year = {2016},
  volume = {12},
  pages = {3636–3653},
  doi = {10.1021/acs.jctc.6b00384}
}

@article{galvan2022-ci-topography,
  author = {Fdez. Galván, I. and Brakestad, A. and Vacher, M.},
  title = {{Role of conical intersection seam topography in the chemiexcitation of 1,2-dioxetanes}},
  journal = {Phys. Chem. Chem. Phys.},
  year = {2022},
  volume = {24},
  pages = {1638–1653},
  doi = {10.1039/D1CP05028A}
}

@article{chirgwin1950-weights,
  author = {Chirgwin, B. H. and Coulson, C. A.},
  title = {{The electronic structure of conjugated systems. VI}},
  journal = {Proc. R. Soc. London, Ser. A},
  year = {1950},
  volume = {201},
  pages = {196–209},
  doi = {10.1098/rspa.1950.0053}
}

@article{wiberg1968-bond-index,
  author = {Wiberg, K. B.},
  title = {{Application of the Pople-Santry-Segal CNDO method to the cyclopropylcarbinyl and cyclobutyl cation and to bicyclobutane}},
  journal = {Tetrahedron},
  year = {1968},
  volume = {24},
  pages = {1083–1096},
  doi = {10.1016/0040-4020(68)88057-3}
}

@article{smith1975-ekt,
  author = {Smith, D. W. and Day, O. W.},
  title = {{Extension of Koopmans' theorem. I. Derivation}},
  journal = {J. Chem. Phys.},
  year = {1975},
  volume = {62},
  pages = {113–114},
  doi = {10.1063/1.430253}
}

@article{morrell1975-ekt,
  author = {Morrell, M. M. and Parr, R. G. and Levy, M.},
  title = {{Calculation of ionization potentials from density matrices and natural functions, and the long-range behavior of natural orbitals and electron density}},
  journal = {J. Chem. Phys.},
  year = {1975},
  volume = {62},
  pages = {549–554},
  doi = {10.1063/1.430509}
}

@article{muller1994-gvb-diis,
  author = {Muller, R. P. and Langlois, J.-M. and Ringnalda, M. N. and Friesner, R. A. and Goddard, W. A.},
  title = {{A generalized direct inversion in the iterative subspace approach for generalized valence bond wave functions}},
  journal = {J. Chem. Phys.},
  year = {1994},
  volume = {100},
  pages = {1226–1235},
  doi = {10.1063/1.466653}
}

@article{ionova1995-orbital-diis,
  author = {Ionova, I. V. and Carter, E. A.},
  title = {{Orbital-based direct inversion in the iterative subspace for the generalized valence bond method}},
  journal = {J. Chem. Phys.},
  year = {1995},
  volume = {102},
  pages = {1251–1256},
  doi = {10.1063/1.468912}
}

@article{sethio2024-r-gdiis,
  author = {Sethio, D. and Azzopardi, E. and Fdez. Galván, I. and Lindh, R.},
  title = {{A story of three levels of sophistication in SCF/KS-DFT orbital optimization procedures}},
  journal = {J. Phys. Chem. A},
  year = {2024},
  volume = {128},
  pages = {2472–2486},
  doi = {10.1021/acs.jpca.3c07647}
}

@book{nocedal2006-numerical-optimization,
  author = {Nocedal, J. and Wright, S. J.},
  title = {{Numerical Optimization}},
  edition = {2nd},
  publisher = {Springer: New York},
  year = {2006},
  isbn = {978-0-387-30303-1}
}

@article{baker1986-eigenvector-following,
  author = {Baker, J.},
  title = {{An algorithm for the location of transition states}},
  journal = {J. Comput. Chem.},
  year = {1986},
  volume = {7},
  pages = {385–395},
  doi = {10.1002/jcc.540070402}
}

@article{cerjan1981-transition-states,
  author = {Cerjan, C. J. and Miller, W. H.},
  title = {{On finding transition states}},
  journal = {J. Chem. Phys.},
  year = {1981},
  volume = {75},
  pages = {2800–2806},
  doi = {10.1063/1.442352}
}

@article{helmich-paris2021-trah-scf,
  author = {Helmich-Paris, B.},
  title = {{A trust-region augmented Hessian implementation for restricted and unrestricted Hartree–Fock and Kohn–Sham methods}},
  journal = {J. Chem. Phys.},
  year = {2021},
  volume = {154},
  pages = {164104},
  doi = {10.1063/5.0040798}
}

@article{helmich-paris2022-trah-casscf,
  author = {Helmich-Paris, B.},
  title = {{A trust-region augmented Hessian implementation for state-specific and state-averaged CASSCF wave functions}},
  journal = {J. Chem. Phys.},
  year = {2022},
  volume = {156},
  pages = {204104},
  doi = {10.1063/5.0090447}
}

@article{kastner2009-dl-find,
  author = {Kästner, J. and Carr, J. M. and Keal, T. W. and Thiel, W. and Wander, A. and Sherwood, P.},
  title = {{DL-FIND: An open-source geometry optimizer for atomistic simulations}},
  journal = {J. Phys. Chem. A},
  year = {2009},
  volume = {113},
  pages = {11856–11865},
  doi = {10.1021/jp9028968}
}

@article{lee2021-pyunixmd,
  author = {Lee, I. S. and Ha, J.-K. and Han, D. and Kim, T. I. and Moon, S. W. and Min, S. K.},
  title = {{PyUNIxMD: A Python-based excited state molecular dynamics package}},
  journal = {J. Comput. Chem.},
  year = {2021},
  volume = {42},
  pages = {1755–1766},
  doi = {10.1002/jcc.26711}
}

@article{tully1990-fssh,
  author = {Tully, J. C.},
  title = {{Molecular dynamics with electronic transitions}},
  journal = {J. Chem. Phys.},
  year = {1990},
  volume = {93},
  pages = {1061–1071},
  doi = {10.1063/1.459170}
}

@article{granucci2007-edc,
  author = {Granucci, G. and Persico, M.},
  title = {{Critical appraisal of the fewest switches algorithm for surface hopping}},
  journal = {J. Chem. Phys.},
  year = {2007},
  volume = {126},
  pages = {134114},
  doi = {10.1063/1.2715585}
}

@article{nelson2013-idc,
  author = {Nelson, T. and Fernandez-Alberti, S. and Roitberg, A. E. and Tretiak, S.},
  title = {{Nonadiabatic excited-state molecular dynamics: Treatment of electronic decoherence}},
  journal = {J. Chem. Phys.},
  year = {2013},
  volume = {138},
  pages = {224111},
  doi = {10.1063/1.4809568}
}

@article{ha2018-dish-xf,
  author = {Ha, J.-K. and Lee, I. S. and Min, S. K.},
  title = {{Surface hopping dynamics beyond nonadiabatic couplings for quantum coherence}},
  journal = {J. Phys. Chem. Lett.},
  year = {2018},
  volume = {9},
  pages = {1097–1104},
  doi = {10.1021/acs.jpclett.8b00060}
}

@article{smith2020-psi4,
  author = {Smith, D. G. A. and Burns, L. A. and Simmonett, A. C. and Parrish, R. M. and Schieber, M. C. and Galvelis, R. and Kraus, P. and Kruse, H. and Di Remigio, R. and Alenaizan, A. and James, A. M. and Lehtola, S. and Misiewicz, J. P. and Scheurer, M. and Shaw, R. A. and Schriber, J. B. and Xie, Y. and Glick, Z. L. and Sirianni, D. A. and O'Brien, J. S. and Waldrop, J. M. and Kumar, A. and Hohenstein, E. G. and Pritchard, B. P. and Brooks, B. R. and Schaefer, H. F., III and Sokolov, A. Y. and Patkowski, K. and DePrince, A. E., III and Bozkaya, U. and King, R. A. and Evangelista, F. A. and Turney, J. M. and Crawford, T. D. and Sherrill, C. D.},
  title = {{PSI4 1.4: Open-source software for high-throughput quantum chemistry}},
  journal = {J. Chem. Phys.},
  year = {2020},
  volume = {152},
  pages = {184108},
  doi = {10.1063/5.0006002}
}

@article{lehtola2018-libxc,
  author = {Lehtola, S. and Steigemann, C. and Oliveira, M. J. T. and Marques, M. A. L.},
  title = {{Recent developments in libxc — A comprehensive library of functionals for density functional theory}},
  journal = {SoftwareX},
  year = {2018},
  volume = {7},
  pages = {1–5},
  doi = {10.1016/j.softx.2017.11.002}
}

@article{grimme2010-d3,
  author = {Grimme, S. and Antony, J. and Ehrlich, S. and Krieg, H.},
  title = {{A consistent and accurate ab initio parametrization of density functional dispersion correction (DFT-D) for the 94 elements H-Pu}},
  journal = {J. Chem. Phys.},
  year = {2010},
  volume = {132},
  pages = {154104},
  doi = {10.1063/1.3382344}
}

@article{grimme2011-d3bj,
  author = {Grimme, S. and Ehrlich, S. and Goerigk, L.},
  title = {{Effect of the damping function in dispersion corrected density functional theory}},
  journal = {J. Comput. Chem.},
  year = {2011},
  volume = {32},
  pages = {1456–1465},
  doi = {10.1002/jcc.21759}
}
```
