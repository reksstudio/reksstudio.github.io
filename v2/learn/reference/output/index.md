# Output reference — REKS Studio Learn

HTML: <https://reksstudio.github.io/v2/learn/reference/output/>

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

[Learn](https://reksstudio.github.io/v2/learn/index.md) › Output reference

# Output reference

## Reading the output {#reading-output}

### Print order {#print-order}

Blocks of a `gradient()` run with every block on, at [`REKS_REPORT_LEVEL`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-reks_report_level) 2; an `energy()` run ends before `SI-SA-REKS analytic gradient: targets`.

| Block | Entry |
| - | - |
| `REKS Studio` | [Run report](#run-report) |
| `==> REKS Studio setup <==` | [Run report](#run-report) |
| `=> Pairing schemes (geminal orbitals) <=` | [Pairing schemes](https://reksstudio.github.io/v2/learn/reference/index.md#pairing-schemes) |
| `=> SA pool <=` | [`SA_REKS_CONFIGS`](https://reksstudio.github.io/v2/learn/reference/index.md#sa_reks_configs) |
| `=> SI pools <=` | [`SI_REKS_CONFIGS`](https://reksstudio.github.io/v2/learn/reference/index.md#si_reks_configs) |
| `=> State analysis [PROPERTIES] <=` | [`SI_REKS_ANALYSIS`](https://reksstudio.github.io/v2/learn/reference/index.md#si_reks_analysis) |
| `=> Gradient request <=` | [`SI_REKS_GRAD`](https://reksstudio.github.io/v2/learn/reference/index.md#si_reks_grad) |
| `==> Pre-Iterations <==` | [Restart mechanism](https://reksstudio.github.io/v2/learn/reference/run-control/index.md#restart) |
| `==> Iterations <==` | [The three engines](https://reksstudio.github.io/v2/learn/reference/run-control/index.md#engines) |
| `==> REKS Geminal Delocalization <==` | [`REKS_GEMINAL_DELOC`](https://reksstudio.github.io/v2/learn/reference/run-control/index.md#reks_geminal_deloc) |
| `==> Post-Iterations <==` | [Fractional occupation numbers of the SA-REKS ensemble](https://reksstudio.github.io/v2/learn/reference/properties/index.md#sa-fons) |
| `=> Energetics <=` | [SA-REKS ensemble energy and configuration energies](https://reksstudio.github.io/v2/learn/reference/properties/index.md#sa-energy) |
| `=> SA-REKS energy decomposition <=` | [SA-REKS ensemble energy and configuration energies](https://reksstudio.github.io/v2/learn/reference/properties/index.md#sa-energy) |
| `==> State interaction: setup over the union of the SI cassettes <==` | [`SI_REKS_CONFIGS`](https://reksstudio.github.io/v2/learn/reference/index.md#si_reks_configs) |
| `=> FON optimization after the SCF <=` | [FONs of the SI-only geminals](https://reksstudio.github.io/v2/learn/reference/properties/index.md#si-fons) |
| `==> SI Davidson solver (cassette 0) <==` | [SI Davidson solver](https://reksstudio.github.io/v2/learn/reference/properties/index.md#si-davidson) |
| `==> State interaction: cassette 0, 18SI-3SA-REKS(4,4), 2S=0 (singlet) <==` | [`SI_REKS_CONFIGS`](https://reksstudio.github.io/v2/learn/reference/index.md#si_reks_configs) |
| `=> SI Hamiltonian: dimension, matrix elements and eigenproblem, cassette 0 <=` | [SI Hamiltonian and overlap](https://reksstudio.github.io/v2/learn/reference/properties/index.md#si-matrices) |
| `=> Adiabatic states, cassette 0 <=` | [SSR state energies](https://reksstudio.github.io/v2/learn/reference/properties/index.md#ssr-energies) |
| `=> Natural occupation numbers and natural orbitals of the active space [NO_OCCUPATIONS], cassette 0 <=` | [Natural orbitals and occupations of the active space](https://reksstudio.github.io/v2/learn/reference/properties/index.md#natural-orbitals) |
| `=> Transition dipole moments and oscillator strengths [TRANSITION_DIPOLE], cassette 0 <=` | [Transition dipole moments and length-form oscillator strengths](https://reksstudio.github.io/v2/learn/reference/properties/index.md#transition-dipole) |
| `=> Velocity-form and magnetic transition moments, rotatory strengths [E_TDM_VEL, M_TDM], cassette 0 <=` | [Velocity-form transition moments and oscillator strengths](https://reksstudio.github.io/v2/learn/reference/properties/index.md#transition-velocity) |
| `=> Radical character [RADICAL], cassette 0 <=` | [Radical character](https://reksstudio.github.io/v2/learn/reference/properties/index.md#radical-character) |
| `=> Dipole moment (unrelaxed state density matrix) [DIPOLE], cassette 0 <=` | [Permanent and difference dipole moments (unrelaxed)](https://reksstudio.github.io/v2/learn/reference/properties/index.md#permanent-dipole) |
| `=> Quadrupole moment (unrelaxed state density matrix) [QUADRUPOLE], cassette 0 <=` | [Quadrupole moments of the states (unrelaxed)](https://reksstudio.github.io/v2/learn/reference/properties/index.md#quadrupole) |
| `=> Transition second moments [TRANSITION_QUADRUPOLE], cassette 0 <=` | [Transition second moments](https://reksstudio.github.io/v2/learn/reference/properties/index.md#transition-second-moments) |
| `=> State and transition multipole moments of order 3 (unrelaxed state density matrix) [MULTIPOLE(3)], cassette 0 <=` | [Cartesian multipole moments of order l ≥ 3](https://reksstudio.github.io/v2/learn/reference/properties/index.md#multipoles) |
| `=> Atomic charges (unrelaxed state density matrix) [MULLIKEN_CHARGES, LOWDIN_CHARGES], cassette 0 <=` | [Atomic charges of the states (unrelaxed)](https://reksstudio.github.io/v2/learn/reference/properties/index.md#atomic-charges) |
| `=> Atomic spin populations (unrelaxed state spin density, M_S = S) [MULLIKEN_SPINS, LOWDIN_SPINS], cassette 1 <=` | [Atomic spin populations of the states (2S > 0)](https://reksstudio.github.io/v2/learn/reference/properties/index.md#atomic-spins) |
| `=> Transition charges [TRANSITION_CHARGES], cassette 0 <=` | [Transition charges](https://reksstudio.github.io/v2/learn/reference/properties/index.md#transition-charges) |
| `=> Bond indices (unrelaxed state density matrix) [MAYER_INDICES, WIBERG_LOWDIN_INDICES], cassette 0 <=` | [Bond indices of the states (unrelaxed)](https://reksstudio.github.io/v2/learn/reference/properties/index.md#bond-indices) |
| `=> Natural transition orbitals (NTO): weights and participation ratios [NTO], cassette 0 <=` | [Natural transition orbitals](https://reksstudio.github.io/v2/learn/reference/properties/index.md#nto) |
| `=> Exciton descriptors [EXCITON], cassette 0 <=` | [Exciton descriptors, hole and electron populations, natural difference orbitals](https://reksstudio.github.io/v2/learn/reference/properties/index.md#exciton) |
| `=> Hole and electron populations [EXCITON], cassette 0 <=` | [Exciton descriptors, hole and electron populations, natural difference orbitals](https://reksstudio.github.io/v2/learn/reference/properties/index.md#exciton) |
| `=> Fragments: charge-transfer descriptors [EXCITON], cassette 0 <=` | [Fragment charge-transfer descriptors](https://reksstudio.github.io/v2/learn/reference/properties/index.md#fragment-ct) |
| `=> Fragments: hole and electron populations [EXCITON], cassette 0 <=` | [Fragment charge-transfer descriptors](https://reksstudio.github.io/v2/learn/reference/properties/index.md#fragment-ct) |
| `=> Fragment diabatic couplings F1 - F2 [FRAGMENT_COUPLINGS], cassette 0 <=` | [Fragment couplings (FCD, FED, FSD)](https://reksstudio.github.io/v2/learn/reference/properties/index.md#fragment-couplings) |
| `==> State summary [SUMMARY] <==` | [SSR state energies](https://reksstudio.github.io/v2/learn/reference/properties/index.md#ssr-energies) |
| `=> Alternative configuration lists <=` | [`SI_REKS_CONFIGS`](https://reksstudio.github.io/v2/learn/reference/index.md#si_reks_configs) |
| `==> Spin-state energetics <==` | [Spin-state gaps and Heisenberg J](https://reksstudio.github.io/v2/learn/reference/properties/index.md#spin-state-energetics) |
| `==> Coupled-perturbed REKS (CP-REKS, Z-vector) solver <==` | [`REKS_CPREKS_CONV`](https://reksstudio.github.io/v2/learn/reference/index.md#reks_cpreks_conv) |
| [`==> Relaxed properties [SI_REKS_PROPERTY_FOR], cassette 0 <==`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-si_reks_property_for) | [Relaxed dipole, quadrupole and atomic charges](https://reksstudio.github.io/v2/learn/reference/properties/index.md#relaxed-properties) |
| `=> Dipole moment (relaxed density matrix P^r), cassette 0 <=` | [Relaxed dipole, quadrupole and atomic charges](https://reksstudio.github.io/v2/learn/reference/properties/index.md#relaxed-properties) |
| `=> Quadrupole moment (relaxed density matrix P^r), cassette 0 <=` | [Relaxed dipole, quadrupole and atomic charges](https://reksstudio.github.io/v2/learn/reference/properties/index.md#relaxed-properties) |
| `=> Atomic charges (relaxed density matrix P^r), cassette 0 <=` | [Relaxed dipole, quadrupole and atomic charges](https://reksstudio.github.io/v2/learn/reference/properties/index.md#relaxed-properties) |
| [`==> Ionization energies (EKT) and Dyson orbitals [REKS_EKT], cassette 0 <==`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-reks_ekt) | [EKT ionization energies, pole strengths and Dyson orbitals of SI states](https://reksstudio.github.io/v2/learn/reference/properties/index.md#ekt-states) |
| `==> Summary of the energy phase <==` | [Files](#files) |
| `==> SI-SA-REKS analytic gradient: targets <==` | [Nuclear gradients of SSR states](https://reksstudio.github.io/v2/learn/reference/properties/index.md#state-gradient) |
| `==> Gradient of S1, cassette 0 <==` | [Nuclear gradients of SSR states](https://reksstudio.github.io/v2/learn/reference/properties/index.md#state-gradient) |
| `==> NAC S1/S2, cassette 0 <==` | [Nonadiabatic coupling vectors](https://reksstudio.github.io/v2/learn/reference/properties/index.md#nac) |
| `==> Conical-intersection (CI) topography S1/S2 (cassette 0), E(S2) - E(S1) = 4.092e-03 Eh <==` | [Conical-intersection topography](https://reksstudio.github.io/v2/learn/reference/properties/index.md#ci-topography) |
| `==> Returned gradient <==` | [Nuclear gradients of SSR states](https://reksstudio.github.io/v2/learn/reference/properties/index.md#state-gradient) |

### Run report {#run-report}

At the default [`REKS_REPORT_LEVEL`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-reks_report_level) 2 ([`REKS_REPORT_LEVEL`](#reks_report_level)) the REKS part of the output opens with the banner and the setup block:

```log
=========================================================================

                               REKS Studio

            Spin-Restricted Ensemble-referenced Kohn-Sham DFT
    State-Averaged (SA-REKS) and State-Interaction (SI-SA-REKS = SSR)

           Konstantin Komarov, Michael Filatov, Seung Kyu Min

 Ulsan National Institute of Science and Technology (UNIST), South Korea

=========================================================================
```

```log
==> REKS Studio setup <==

    SA ensemble           REKS(4,4), 2S=0 (singlet)
    SI cassettes          2S = 0, 2 (SI pools)
    Active space          4 electrons in 4 orbitals, 6 doubly occupied core orbitals
    Active MO indices     7A(a), 8A(b), 9A(c), 10A(d)
    Orbital solver        GVB-DIIS (ORBITAL), level shift 0.60 Eh, adaptive (decreases as the SCF stabilizes)
    FON solver            projected Newton, interpolation delta 0.40
    XC evaluation         exchange {GGA_X_B88 x 0.5}, correlation {GGA_C_LYP x 1.0}, exact exchange x 0.50
```

Check the core count and `Active MO indices` ([Check the solution](https://reksstudio.github.io/v2/learn/procedure/index.md#check-solution)). The blocks that follow: [Print order](#print-order). Output fragments are verbatim from runs at the Psi4 revision of the site ([Documentation, Version](https://reksstudio.github.io/v2/docs/index.md#version)). A fragment of a property entry without a `Run:` line is from the reference run: C₂H₄ at R(CC) 2.32 Å, REKS(4,4), BH\&HLYP/6-31G(d), cassettes 2S = 0, 2.

### Report level {#report-level}

#### [`REKS_REPORT_LEVEL`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-reks_report_level) {#reks_report_level}

Verbosity of the REKS output, 1–5: from the SCF trace and energetics up to per-iteration solver traces and intermediate matrices.

Type: int (1–5)

Default: `2`

```python
"reks_report_level": 4,
```

* Selects which REKS blocks appear: the numbers of the run are printed at level 2; levels 3–5 add counters, solver traces and intermediate matrices.

Blocks added at each level; each level prints everything of the levels below. Output lines: one `gradient()` run of H₄ REKS(4,4) with two cassettes, NAC, relaxed properties, EKT and Molden files.

| Level | Adds | Lines |
| - | - | - |
| 1 | `Pre-Iterations` with the `REKS orbitals` line; `Iterations` and the convergence line; `Post-Iterations` (grid electrons, final energy); `Energetics`; `Summary` / `Summary of the energy phase` (`MOLDEN_WRITE`); `Returned gradient` with Psi4's `-Total Gradient` | 670 |
| 2 (default) | Banner; `REKS Studio setup` with `Pairing schemes`, `SA pool`, `SI pools`, `State analysis`, `Gradient request`; `REKS Geminal Delocalization` ([`REKS_GEMINAL_DELOC`](https://reksstudio.github.io/v2/learn/reference/run-control/index.md#reks_geminal_deloc)); orbital energies with the FONs in `Post-Iterations`; `SA-REKS energy decomposition`; SI setup, `FON optimization after the SCF`, `SI Davidson solver` (Davidson cassettes, [SI Davidson solver](https://reksstudio.github.io/v2/learn/reference/properties/index.md#si-davidson)), per cassette `SI Hamiltonian`, `Adiabatic states` and the property blocks; `State summary`; `Spin-state energetics`; CP-REKS solver (Psi4 `PRINT` ≥ 1); `Relaxed properties`; EKT; gradient targets, `Gradient of …`, `NAC …`, CI topography | 2144 |
| 3 | `XC evaluation … per string … per key` in the setup; Hamiltonian counters (`coupled`/`zero`, `Terms`, `Reuse`, overlap terms) and the `Off-diagonal channel` table; under `Adiabatic states` the overlap S_ij / sqrt(S_ii S_jj) of configuration pairs listed in one row; EKT `dropped eigenvalues` and the Dyson MO matrix; `[REKS-GRAD]` `C_eff` per microstate and Psi4 per-channel gradient terms; `==> References <==` | 2549 |
| 4–5 | 4: `REKS Memory Footprint`, `Run diagnostics`, per-iteration solver traces (`[GVB-FON]`, `[ORB-DIIS]`, `[TRAH]`, `[LEVEL_SHIFT]`, …), `CP-REKS Z-Vector Profile`; per cassette `Microstate energies (sorted by energy)`, `Fractional Occupation Numbers (active orbitals)`, `Lagrangian eps_pq and ERI (pq\|st)`, `Pre-diagonalization SI Hamiltonian` and `SI Overlap S` in blocks of 18 columns (up to 8 active orbitals); the Davidson trace ([SI Davidson solver](https://reksstudio.github.io/v2/learn/reference/properties/index.md#si-davidson)). 5: per SCF iteration the active orbitals, Fock asymmetry, orbital update, coupling Fock matrix, SA energy, weighting factors C<sub>L</sub> and the microstate energies | 4125; 8183 |

From level 3 the configuration-axis arrays `SSR COEFFICIENTS K=e`, `SSR HAMILTONIAN K=e`, `SSR OVERLAP SPARSE K=e` and `SSR 1-RDM DIABATIC SPARSE K=e` are stored (the Hamiltonian and overlap up to 8 active orbitals); level 4 prints the Hamiltonian and overlap. Levels 4–5 grow with the active space and the cassette dimension.

### Variable names {#variable-names}

All variables are set on the wavefunction and copied to the global (core) variables at the end of `energy()` and `gradient()`.

| Pattern | Holds |
| - | - |
| `<base> K=<e>` | per-cassette SI arrays; for cassette 0 most of them also under the bare `<base>` |
| `REKS SECTOR <s> <base> K=<e>` | a cassette in run sector s ≥ 1; a leading `REKS `of the base is dropped (`REKS SECTOR 1 SSR ENERGIES K=1`, `REKS SECTOR 1 C PATH B K=1`) |
| `SSR ROOT <r> … CASSETTE <e>` | response, gradient and relaxed arrays of root r; never sector-prefixed |
| `SSR EKT … ROOT <r> CASSETTE <e>`, `SSR DYSON ORBITALS … ROOT <r> CASSETTE <e>` | EKT arrays; never sector-prefixed |
| `SSR NAC [MODEL\|RESIDUAL] <I> <J> CASSETTE <e>`, `SSR CI … <I> <J> CASSETTE <e>` | NAC and CI arrays; never sector-prefixed |
| `SSR … K=<e>` (scalars) | never sector-prefixed |

### Files {#files}

| File | Content |
| - | - |
| `<prefix>.molden` | SA-REKS orbitals; `Occup` of the active MOs = FONs of set n |
| `<prefix>.no.<label>_cassette<e>.molden` | natural orbitals of a state |
| `<prefix>.dyson.<label>_cassette<e>.molden` | Dyson orbitals of a state |
| `<prefix>.nto.<label I>-<label J>_cassette<e>.molden` | natural transition orbitals of a pair |
| `<prefix>.ndo.<label I>-<label J>_cassette<e>.molden` | natural difference orbitals of a pair |

State labels such as `S1`, `T2`; `<prefix>` = `WRITER_FILE_LABEL` when set, else the output file name without extension followed by `.<molecule name>` for a named molecule. With `MOLDEN_WRITE` the run ends with a summary of the files written (`Summary` in `energy()`, `Summary of the energy phase` in `gradient()`, at every report level):

```log
==> Summary of the energy phase <==

    Files: Molden, directory .:
      SA-REKS orbitals; Occup of the active MOs = FONs of set n, not natural occupations
        test_reks44_all.reks44.molden
      Dyson orbitals
        test_reks44_all.reks44.dyson.S1_cassette0.molden
        test_reks44_all.reks44.dyson.S2_cassette0.molden
      Natural orbitals, NTO, NDO of the SI states: not written; require SI_REKS_STORE_STATES > 0
      and SI_REKS_ANALYSIS NO_OCCUPATIONS / NTO / EXCITON
```
