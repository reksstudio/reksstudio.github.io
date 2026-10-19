# Changes — REKS Studio

HTML: <https://reksstudio.github.io/v2/docs/changes/>

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

[Documentation](https://reksstudio.github.io/v2/docs/index.md)

# Changes

### Psi4 `e95c2d234`, 2026-10-19

* A two-orbital pair keeps its orbitals in their slots when its FON crosses 1, so the printed n_a can be below 1; only generation-0 geminals wider than two are reordered to descending occupation ([§12](https://reksstudio.github.io/v2/manual/run-control/index.md#fons)).
* Performance optimization of SI: catalog reading, FON relaxation, overlap blocks, Davidson multiply; memory optimization of SI.

### Psi4 `72ce4d58b`, 2026-10-17

* Property headers name their switches in brackets, e.g. `[DIPOLE]`, `[SUMMARY]`; several blocks are renamed, natural orbitals print before the transitions, `State analysis` is alphabetical ([Print order](https://reksstudio.github.io/v2/manual/properties/index.md#print-order), [`SI_REKS_ANALYSIS`](https://reksstudio.github.io/v2/options/SI_REKS_ANALYSIS.md)); the CT columns are `CT`, `PR_h`, `PR_e`, `PR` ([Fragment charge-transfer descriptors](https://reksstudio.github.io/v2/manual/properties/index.md#fragment-ct)).
* `State summary` lists the three largest weights ≥ 1 % per state, then every further one > 20 %; the overlap pairs under `Adiabatic states` print from level 3 ([SSR state energies](https://reksstudio.github.io/v2/manual/properties/index.md#ssr-energies), [`REKS_REPORT_LEVEL`](https://reksstudio.github.io/v2/options/REKS_REPORT_LEVEL.md)).
* Davidson: search space min(r, max(40, 16k)), start vectors and preconditioner from the P space, Jacobi–Davidson corrections; with the default counts the shipped catalogs solve the whole space ([SI eigensolver](https://reksstudio.github.io/v2/manual/concepts/index.md#si-solver), [SI Davidson solver](https://reksstudio.github.io/v2/manual/properties/index.md#si-davidson)).

### Psi4 `bd0fb43ef`, 2026-10-15

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
