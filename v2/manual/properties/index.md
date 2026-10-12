# Output and properties — REKS Studio Manual

HTML: <https://reksstudio.github.io/v2/manual/properties/>

Psi4 b275f4294, 2026-10-11: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `<page>/index.md` (markdown). Option cards: `options/<NAME>.md`. Raw files: `<file>.txt` (text/plain).

[Manual](https://reksstudio.github.io/v2/manual/index.md) › Output and properties

# Output and properties

Chapters 15–16 of the REKS Studio user manual

## 15. Reading the Output {#reading-output}

### Print order {#print-order}

Blocks of a `gradient()` run with every block on, at `REKS_REPORT_LEVEL` 2; an `energy()` run ends before `SI-SA-REKS analytic gradient: targets`.

| Block | Entry |
| - | - |
| `REKS Studio` | [Run report](https://reksstudio.github.io/v2/manual/properties/index.md#run-report) |
| `==> REKS Studio setup <==` | [Run report](https://reksstudio.github.io/v2/manual/properties/index.md#run-report) |
| `=> Pairing schemes (GVB(2,2) geminal pairs) <=` | [Pairing schemes](https://reksstudio.github.io/v2/manual/setup/index.md#pairing-schemes) |
| `=> SA pool <=` | [`SA_REKS_CONFIGS`](https://reksstudio.github.io/v2/options/SA_REKS_CONFIGS.md) |
| `=> SI pools <=` | [`SI_REKS_CONFIGS`](https://reksstudio.github.io/v2/options/SI_REKS_CONFIGS.md) |
| `=> State analysis <=` | [`SI_REKS_ANALYSIS`](https://reksstudio.github.io/v2/options/SI_REKS_ANALYSIS.md) |
| `=> Gradient request <=` | [`SI_REKS_GRAD`](https://reksstudio.github.io/v2/options/SI_REKS_GRAD.md) |
| `==> Pre-Iterations <==` | [Restart mechanism](https://reksstudio.github.io/v2/manual/run-control/index.md#restart) |
| `==> Iterations <==` | [The three engines](https://reksstudio.github.io/v2/manual/run-control/index.md#engines) |
| `==> REKS Geminal Delocalization <==` | [`REKS_GEMINAL_DELOC`](https://reksstudio.github.io/v2/options/REKS_GEMINAL_DELOC.md) |
| `==> Post-Iterations <==` | [Fractional occupation numbers of the SA-REKS ensemble](https://reksstudio.github.io/v2/manual/properties/index.md#sa-fons) |
| `=> Energetics <=` | [SA-REKS ensemble energy and configuration energies](https://reksstudio.github.io/v2/manual/properties/index.md#sa-energy) |
| `=> SA-REKS energy decomposition <=` | [SA-REKS ensemble energy and configuration energies](https://reksstudio.github.io/v2/manual/properties/index.md#sa-energy) |
| `==> State interaction: setup over the union of the SI cassettes <==` | [`SI_REKS_CONFIGS`](https://reksstudio.github.io/v2/options/SI_REKS_CONFIGS.md) |
| `=> FON optimization after the SCF <=` | [FONs of the SI-only geminals](https://reksstudio.github.io/v2/manual/properties/index.md#si-fons) |
| `==> State interaction: cassette 0, 18SI-3SA-REKS(4,4), 2S=0 (singlet) <==` | [`SI_REKS_CONFIGS`](https://reksstudio.github.io/v2/options/SI_REKS_CONFIGS.md) |
| `=> Hamiltonian, cassette 0 <=` | [SI Hamiltonian and overlap](https://reksstudio.github.io/v2/manual/properties/index.md#si-matrices) |
| `=> Adiabatic states, cassette 0 <=` | [SSR state energies](https://reksstudio.github.io/v2/manual/properties/index.md#ssr-energies) |
| `=> Transitions, cassette 0 <=` | [Transition dipole moments and length-form oscillator strengths](https://reksstudio.github.io/v2/manual/properties/index.md#transition-dipole) |
| `=> Velocity and magnetic transition moments, cassette 0 <=` | [Velocity-form transition moments and oscillator strengths](https://reksstudio.github.io/v2/manual/properties/index.md#transition-velocity) |
| `=> Natural orbitals of the active space, cassette 0 <=` | [Natural orbitals and occupations of the active space](https://reksstudio.github.io/v2/manual/properties/index.md#natural-orbitals) |
| `=> Radical character, cassette 0 <=` | [Radical character](https://reksstudio.github.io/v2/manual/properties/index.md#radical-character) |
| `=> Dipole moment (unrelaxed state density matrix), cassette 0 <=` | [Permanent and difference dipole moments (unrelaxed)](https://reksstudio.github.io/v2/manual/properties/index.md#permanent-dipole) |
| `=> Quadrupole moment (unrelaxed state density matrix), cassette 0 <=` | [Quadrupole moments of the states (unrelaxed)](https://reksstudio.github.io/v2/manual/properties/index.md#quadrupole) |
| `=> Transition second moments, cassette 0 <=` | [Transition second moments](https://reksstudio.github.io/v2/manual/properties/index.md#transition-second-moments) |
| `=> Multipole moments of order 3 (unrelaxed state density matrix), cassette 0 <=` | [Cartesian multipole moments of order l ≥ 3](https://reksstudio.github.io/v2/manual/properties/index.md#multipoles) |
| `=> Atomic charges (unrelaxed state density matrix), cassette 0 <=` | [Atomic charges of the states (unrelaxed)](https://reksstudio.github.io/v2/manual/properties/index.md#atomic-charges) |
| `=> Transition charges, cassette 0 <=` | [Transition charges](https://reksstudio.github.io/v2/manual/properties/index.md#transition-charges) |
| `=> Bond indices (unrelaxed state density matrix), cassette 0 <=` | [Bond indices of the states (unrelaxed)](https://reksstudio.github.io/v2/manual/properties/index.md#bond-indices) |
| `=> Natural transition orbitals (NTO), cassette 0 <=` | [Natural transition orbitals](https://reksstudio.github.io/v2/manual/properties/index.md#nto) |
| `=> Exciton descriptors, cassette 0 <=` | [Exciton descriptors, hole and electron populations, natural difference orbitals](https://reksstudio.github.io/v2/manual/properties/index.md#exciton) |
| `=> Hole and electron populations, cassette 0 <=` | [Exciton descriptors, hole and electron populations, natural difference orbitals](https://reksstudio.github.io/v2/manual/properties/index.md#exciton) |
| `=> Fragments: charge-transfer descriptors, cassette 0 <=` | [Fragment charge-transfer descriptors](https://reksstudio.github.io/v2/manual/properties/index.md#fragment-ct) |
| `=> Fragments: hole and electron populations, cassette 0 <=` | [Fragment charge-transfer descriptors](https://reksstudio.github.io/v2/manual/properties/index.md#fragment-ct) |
| `=> Fragment couplings F1 - F2, cassette 0 <=` | [Fragment couplings (FCD, FED, FSD)](https://reksstudio.github.io/v2/manual/properties/index.md#fragment-couplings) |
| `==> State summary <==` | [SSR state energies](https://reksstudio.github.io/v2/manual/properties/index.md#ssr-energies) |
| `=> Alternative configuration lists <=` | [`SI_REKS_CONFIGS`](https://reksstudio.github.io/v2/options/SI_REKS_CONFIGS.md) |
| `==> Spin-state energetics <==` | [Spin-state gaps and Heisenberg J](https://reksstudio.github.io/v2/manual/properties/index.md#spin-state-energetics) |
| `==> Coupled-perturbed REKS (CP-REKS, Z-vector) solver <==` | [`REKS_CPREKS_CONV`](https://reksstudio.github.io/v2/options/REKS_CPREKS_CONV.md) |
| `==> Relaxed properties, cassette 0 <==` | [Relaxed dipole, quadrupole and atomic charges](https://reksstudio.github.io/v2/manual/properties/index.md#relaxed-properties) |
| `=> Dipole moment (relaxed density matrix P^r), cassette 0 <=` | [Relaxed dipole, quadrupole and atomic charges](https://reksstudio.github.io/v2/manual/properties/index.md#relaxed-properties) |
| `=> Quadrupole moment (relaxed density matrix P^r), cassette 0 <=` | [Relaxed dipole, quadrupole and atomic charges](https://reksstudio.github.io/v2/manual/properties/index.md#relaxed-properties) |
| `=> Atomic charges (relaxed density matrix P^r), cassette 0 <=` | [Relaxed dipole, quadrupole and atomic charges](https://reksstudio.github.io/v2/manual/properties/index.md#relaxed-properties) |
| `==> Ionization energies (EKT) and Dyson orbitals, cassette 0 <==` | [EKT ionization energies, pole strengths and Dyson orbitals of SI states](https://reksstudio.github.io/v2/manual/properties/index.md#ekt-states) |
| `==> Summary of the energy phase <==` | [Files](https://reksstudio.github.io/v2/manual/properties/index.md#files) |
| `==> SI-SA-REKS analytic gradient: targets <==` | [Nuclear gradients of SSR states](https://reksstudio.github.io/v2/manual/properties/index.md#state-gradient) |
| `==> Gradient of S1, cassette 0 <==` | [Nuclear gradients of SSR states](https://reksstudio.github.io/v2/manual/properties/index.md#state-gradient) |
| `==> NAC S1/S2, cassette 0 <==` | [Nonadiabatic coupling vectors](https://reksstudio.github.io/v2/manual/properties/index.md#nac) |
| `==> Conical-intersection (CI) topography S1/S2 (cassette 0), E(S2) - E(S1) = 4.756e-03 Eh <==` | [Conical-intersection topography](https://reksstudio.github.io/v2/manual/properties/index.md#ci-topography) |
| `==> Returned gradient <==` | [Nuclear gradients of SSR states](https://reksstudio.github.io/v2/manual/properties/index.md#state-gradient) |

### Run report {#run-report}

At the default `REKS_REPORT_LEVEL` 2 ([`REKS_REPORT_LEVEL`](https://reksstudio.github.io/v2/options/REKS_REPORT_LEVEL.md)) the REKS part of the output opens with the banner and the setup block:

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

Check the core count and `Active MO indices` ([Check the solution](https://reksstudio.github.io/v2/manual/first-calculation/index.md#check-solution)). The blocks that follow: [Print order](https://reksstudio.github.io/v2/manual/properties/index.md#print-order). Output fragments are verbatim from runs of this build: C₂H₄ REKS(4,4), BH\&HLYP/6-31G(d), cassettes 2S = 0 and 2, for most blocks; linear H₄ REKS(4,4) for the narrower tables.

### Report level {#report-level}

#### `REKS_REPORT_LEVEL` {#reks_report_level}

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
| 2 (default) | Banner; `REKS Studio setup` with `Pairing schemes`, `SA pool`, `SI pools`, `State analysis`, `Gradient request`; `REKS Geminal Delocalization` ([`REKS_GEMINAL_DELOC`](https://reksstudio.github.io/v2/options/REKS_GEMINAL_DELOC.md)); orbital energies with the FONs in `Post-Iterations`; `SA-REKS energy decomposition`; SI setup, `FON optimization after the SCF`, per cassette `Hamiltonian`, `Adiabatic states` and the property blocks; `State summary`; `Spin-state energetics`; CP-REKS solver (Psi4 `PRINT` ≥ 1); `Relaxed properties`; EKT; gradient targets, `Gradient of …`, `NAC …`, CI topography | 2178 |
| 3 | `XC evaluation … per string … per key` in the setup; Hamiltonian counters (`coupled`/`zero`, `Terms`, `Reuse`, overlap terms) and the `Off-diagonal channel` table; EKT `dropped eigenvalues` and the Dyson MO matrix; `[REKS-GRAD]` `C_eff` per microstate and Psi4 per-channel gradient terms; `==> References <==` | 2581 |
| 4–5 | 4: `REKS Memory Footprint`, `Run diagnostics`, per-iteration solver traces (`[GVB-FON]`, `[ORB-DIIS]`, `[TRAH]`, `[LEVEL_SHIFT]`, …), `CP-REKS Z-Vector Profile`; per cassette `Microstate energies (sorted by energy)`, `Fractional Occupation Numbers (active orbitals)`, `Lagrangian eps_pq and ERI (pq\|st)`, `Pre-diagonalization SI Hamiltonian` and `SI Overlap S` in blocks of 18 columns. 5: per SCF iteration the active orbitals, Fock asymmetry, orbital update, coupling Fock matrix, SA energy, weighting factors C<sub>L</sub> and the microstate energies | 4105; 8224 |

From level 3 the configuration-axis arrays `SSR COEFFICIENTS K=e`, `SSR HAMILTONIAN K=e`, `SSR OVERLAP SPARSE K=e` and `SSR 1-RDM DIABATIC SPARSE K=e` are stored; level 4 prints the Hamiltonian and overlap. Levels 4–5 grow with the active space and the cassette dimension.

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

## 16. Properties {#properties}

Unrelaxed properties (`SI_REKS_ANALYSIS`) use the densities ρ<sup>(IJ)</sup> = ⟨I|Ê<sub>pq</sub>|J⟩ of the SSR states in the SA-REKS orbitals; relaxed properties use the relaxed density P<sup>r</sup> of the states named in `SI_REKS_PROPERTY_FOR` ([Unrelaxed and relaxed densities](https://reksstudio.github.io/v2/manual/concepts/index.md#densities)). ρ<sup>(IJ)</sup> is spin-summed and active (MO coefficients C<sub>a</sub>); core density D<sup>c</sup>.

### Rules for all entries {#rules-for-all-entries}

* Tables are printed at `REKS_REPORT_LEVEL` ≥ 2 unless an entry states otherwise.
* A switch named as an `SI_REKS_ANALYSIS` block is on by default ([`SI_REKS_ANALYSIS`](https://reksstudio.github.io/v2/options/SI_REKS_ANALYSIS.md)). "SI present" = at least one SI cassette with configurations, the default when `SI_REKS_CONFIGS` is absent; an all-empty `SI_REKS_CONFIGS` turns it off.
* Transition quantities are computed for pairs I \< J within one cassette and printed when at least 2 states are printed; per-state and pair tables are bounded by `SI_REKS_PRINT_STATES`.
* The per-state and per-pair `SSR … K=e` arrays exist only for the states stored by `SI_REKS_STORE_STATES`; `SSR ENERGIES K=e` holds every physical root, and the `SSR ROOT r … CASSETTE e`, `SSR NAC …`, `SSR CI …` and EKT arrays are stored whenever their block runs.
* The `=>` sub-block headers of a cassette carry `, cassette e`; with a single SI cassette that suffix is absent. The `==>` headers (`State interaction: cassette e`, `Relaxed properties`, EKT, `Gradient of`, `NAC`, CI topography) always name the cassette.
* The sign of a phase-odd quantity (transition dipole, velocity and magnetic moments, transition multipoles and charges, NAC vectors and their sum over atoms, g̃ and h̃ of the CI topography, FCD/FED couplings, NTO and NDO orbitals) is arbitrary between runs, also of the same input (H₄: S0→S1 `mu_z` = 2.846913 in one run, −2.846913 in another). Moduli, f, |d|, R<sub>len</sub> and R<sub>vel</sub> agree. Within one run all quantities share one phase, so their relations hold (Σ<sub>A</sub> d<sub>A</sub> = −p<sub>IJ</sub>; φ and s<sub>y</sub> of the CI topography from the same d).

### Summary {#summary}

| Property | Switch | Default | Printed |
| - | - | - | - |
| [SA-REKS ensemble energy and configuration energies](https://reksstudio.github.io/v2/manual/properties/index.md#sa-energy) | every REKS run | | yes |
| [Fractional occupation numbers of the SA-REKS ensemble](https://reksstudio.github.io/v2/manual/properties/index.md#sa-fons) | every REKS run | | yes |
| [GVB-DIIS convergence quality](https://reksstudio.github.io/v2/manual/properties/index.md#convergence-quality) | `REKS_GVB_DIIS` true | on | yes |
| [FONs of the SI-only geminals](https://reksstudio.github.io/v2/manual/properties/index.md#si-fons) | SI present | | yes |
| [SSR state energies](https://reksstudio.github.io/v2/manual/properties/index.md#ssr-energies) | SI present | | yes |
| [SSR eigenvectors and Chirgwin–Coulson weights](https://reksstudio.github.io/v2/manual/properties/index.md#ssr-composition) | SI present | | yes |
| [SI Hamiltonian and overlap](https://reksstudio.github.io/v2/manual/properties/index.md#si-matrices) | SI present | | yes |
| [Orbitals of the SI step](https://reksstudio.github.io/v2/manual/properties/index.md#si-orbitals) | SI present | | no |
| [Transition dipole moments and length-form oscillator strengths](https://reksstudio.github.io/v2/manual/properties/index.md#transition-dipole) | `SI_REKS_ANALYSIS` `TRANSITION_DIPOLE` | always | yes |
| [Velocity-form transition moments and oscillator strengths](https://reksstudio.github.io/v2/manual/properties/index.md#transition-velocity) | `SI_REKS_ANALYSIS` `E_TDM_VEL` | on | yes |
| [Magnetic transition moments and rotatory strengths](https://reksstudio.github.io/v2/manual/properties/index.md#transition-magnetic) | `SI_REKS_ANALYSIS` `M_TDM` | on | yes |
| [Natural orbitals and occupations of the active space](https://reksstudio.github.io/v2/manual/properties/index.md#natural-orbitals) | `SI_REKS_ANALYSIS` `NO_OCCUPATIONS` | always | yes |
| [Radical character](https://reksstudio.github.io/v2/manual/properties/index.md#radical-character) | `SI_REKS_ANALYSIS` `RADICAL` | on | yes |
| [Permanent and difference dipole moments (unrelaxed)](https://reksstudio.github.io/v2/manual/properties/index.md#permanent-dipole) | `SI_REKS_ANALYSIS` `DIPOLE` (or `MULTIPOLE(n)`) | on | yes |
| [Quadrupole moments of the states (unrelaxed)](https://reksstudio.github.io/v2/manual/properties/index.md#quadrupole) | `SI_REKS_ANALYSIS` `QUADRUPOLE` (or `MULTIPOLE(n)`, n ≥ 2) | on | yes |
| [Transition second moments](https://reksstudio.github.io/v2/manual/properties/index.md#transition-second-moments) | `SI_REKS_ANALYSIS` `TRANSITION_QUADRUPOLE` (or `MULTIPOLE(n)`, n ≥ 2) | on | yes |
| [Cartesian multipole moments of order l ≥ 3](https://reksstudio.github.io/v2/manual/properties/index.md#multipoles) | `SI_REKS_ANALYSIS` `MULTIPOLE(n)`, n ≥ 3 | off | yes |
| [Atomic charges of the states (unrelaxed)](https://reksstudio.github.io/v2/manual/properties/index.md#atomic-charges) | `SI_REKS_ANALYSIS` `MULLIKEN_CHARGES` / `LOWDIN_CHARGES` | on | yes |
| [Atomic spin populations of the states (2S > 0)](https://reksstudio.github.io/v2/manual/properties/index.md#atomic-spins) | `SI_REKS_ANALYSIS` `MULLIKEN_SPINS` / `LOWDIN_SPINS` | on | yes |
| [Transition charges](https://reksstudio.github.io/v2/manual/properties/index.md#transition-charges) | `SI_REKS_ANALYSIS` `TRANSITION_CHARGES` | on | yes |
| [Bond indices of the states (unrelaxed)](https://reksstudio.github.io/v2/manual/properties/index.md#bond-indices) | `SI_REKS_ANALYSIS` `MAYER_INDICES` / `WIBERG_LOWDIN_INDICES` | on | yes |
| [Natural transition orbitals](https://reksstudio.github.io/v2/manual/properties/index.md#nto) | `SI_REKS_ANALYSIS` `NTO` | on | yes |
| [Exciton descriptors, hole and electron populations, natural difference orbitals](https://reksstudio.github.io/v2/manual/properties/index.md#exciton) | `SI_REKS_ANALYSIS` `EXCITON` | on | yes |
| [Fragment charge-transfer descriptors](https://reksstudio.github.io/v2/manual/properties/index.md#fragment-ct) | `SI_REKS_ANALYSIS` `EXCITON` | on | yes |
| [Fragment couplings (FCD, FED, FSD)](https://reksstudio.github.io/v2/manual/properties/index.md#fragment-couplings) | `SI_REKS_ANALYSIS` `FRAGMENT_COUPLINGS` | on | yes |
| [Active one-particle density matrices](https://reksstudio.github.io/v2/manual/properties/index.md#active-rdm) | `SI_REKS_ANALYSIS` `DENSITIES`; diabatic: `REKS_REPORT_LEVEL` ≥ 3 | on | no |
| [Relaxed dipole, quadrupole and atomic charges](https://reksstudio.github.io/v2/manual/properties/index.md#relaxed-properties) | `SI_REKS_PROPERTY_FOR` lists the state | off | yes |
| [Bond indices of the relaxed density](https://reksstudio.github.io/v2/manual/properties/index.md#relaxed-bond-indices) | `SI_REKS_PROPERTY_FOR` lists the state | off | no |
| [EKT ionization energies, pole strengths and Dyson orbitals of SI states](https://reksstudio.github.io/v2/manual/properties/index.md#ekt-states) | `REKS_EKT` true and `SI_REKS_PROPERTY_FOR` lists the state | off | yes |
| [EKT ionization energies of the SA-REKS ensemble](https://reksstudio.github.io/v2/manual/properties/index.md#ekt-ensemble) | `REKS_EKT` true and no state listed in `SI_REKS_PROPERTY_FOR` | off | yes |
| [Nuclear gradients of SSR states](https://reksstudio.github.io/v2/manual/properties/index.md#state-gradient) | `SI_REKS_GRAD` names the root | off | yes |
| [Nuclear gradient of the SA-REKS ensemble](https://reksstudio.github.io/v2/manual/properties/index.md#sa-gradient) | `gradient()` with `SI_REKS_GRAD` and `SI_REKS_NAC` not set | | yes |
| [Nonadiabatic coupling vectors](https://reksstudio.github.io/v2/manual/properties/index.md#nac) | `SI_REKS_NAC` lists the pair or `ALL` | off | yes |
| [Conical-intersection topography](https://reksstudio.github.io/v2/manual/properties/index.md#ci-topography) | `SI_REKS_NAC` lists the pair | off | yes |
| [Spin-state gaps and Heisenberg J](https://reksstudio.github.io/v2/manual/properties/index.md#spin-state-energetics) | SI cassettes on at least 2 spin manifolds | | yes |

### SCF {#scf}

#### SA-REKS ensemble energy and configuration energies {#sa-energy}

Weighted sum of the energies E<sub>X</sub> of the SA-pool configurations, with the weights w<sub>X</sub> of `SA_REKS_WEIGHTS`.

On: every REKS run

Units: E<sub>h</sub>

$$
E_{\mathrm{SA}} = \sum_X w_X E_X
$$

```log
=> Energetics <=

 Nuclear Repulsion Energy =             25.1844817236300855
 One-Electron Energy =                -153.5867652831177850
 Two-Electron Energy =                  56.4995948627347033
 DFT Exchange-Correlation Energy =      -6.2238541886040730
 Empirical Dispersion Energy =           0.0000000000000000
 VV10 Nonlocal Energy =                  0.0000000000000000
 Total Energy =                        -78.1265428853570683
```

```log
=> SA-REKS energy decomposition <=

   Config       SA weight       E(config) [Eh]  w_SA * E(config) [Eh]
   ------------------------------------------------------------------
   PPS1          0.333333     -78.285529090429       -26.095176363476
   OSS1          0.333333     -78.016461045704       -26.005487015235
   OSS2          0.333333     -78.077638519938       -26.025879506646
   ------------------------------------------------------------------
   E[SA-REKS]                                        -78.126542885357
```

Stored: `SCF TOTAL ENERGY`, `CURRENT REFERENCE ENERGY`, `CURRENT ENERGY` ([`SI_REKS_GRAD`](https://reksstudio.github.io/v2/options/SI_REKS_GRAD.md)), `REKS SA_WEIGHTS`, `REKS W_PPS`, `NUCLEAR REPULSION ENERGY`, `ONE-ELECTRON ENERGY`, `TWO-ELECTRON ENERGY`, `DFT XC ENERGY`

* The configuration energies E<sub>X</sub> are printed, not stored.
* `Total Energy` of `Energetics` equals `@REKS Final Energy` and the `E[SA-REKS]` row of the decomposition.

#### Fractional occupation numbers of the SA-REKS ensemble {#sa-fons}

FONs of the active orbitals of each geminal, summing to 2 per geminal (n<sub>p</sub> + n<sub>q</sub> = 2 for a two-orbital geminal (p,q)), one set per FON generation, pairing scheme and run sector ([FON set and generation](https://reksstudio.github.io/v2/manual/concepts/index.md#fon-generation)).

On: every REKS run

For: every generation with at least one active geminal in the SA ensemble

Units: electrons

```log
==> Post-Iterations <==
[...]
    Orbital energies [Eh] = diagonal of the SA-REKS coupling Fock matrix in the MO basis.
[...]
    Active, fractionally occupied (4):

      Pairing scheme 0: (a,d) & (b,c) = (7A,10A) & (8A,9A)

       7A     -0.334486  (a)    n_a =  1.970714    m_a =  1.970145
       8A     -0.238234  (b)    n_b =  1.390406    m_b =  1.389772
       9A     -0.199029  (c)    n_c =  0.609594    m_c =  0.610228
      10A     -0.097027  (d)    n_d =  0.029286    m_d =  0.029855
```

Stored: `REKS FON`, `REKS <L>_FON` (L = M, U, V, W, X, Y, Z), `REKS FON META`, `REKS <L>_FON META`; `REKS N ACTIVE ELECTRONS`, `REKS N ACTIVE ORBITALS`, `REKS G`, `REKS N SECTORS`

Files: `<prefix>.molden` (`MOLDEN_WRITE`): `Occup` of the active MOs = FONs of set n, not natural occupations

* FON arrays: (u − 1) × n<sub>g</sub>, u = widest geminal width, n<sub>g</sub> = geminals of the generation; row r = free FON n<sub>r</sub>, the last FON is 2 − Σ; unused cells −1. META arrays: (1 + u) × n<sub>g</sub>, pairing scheme (row 0) and MO indices (rows 1..).
* Check: the active set ([Check the solution](https://reksstudio.github.io/v2/manual/first-calculation/index.md#check-solution)); `2.000000`/`0.000000` lie at the bound ([FON pinned at a bound, symmetry-broken charges](https://reksstudio.github.io/v2/manual/diagnose/index.md#diag-fon-pinned)).

#### GVB-DIIS convergence quality {#convergence-quality}

Diagnostics of the finished GVB-DIIS run: final orbital-gradient norms, landings, verdict trips, highest fallback rung (0 ARMED, 1 RETAIN, 2 FALLBACK), basin fires, and GRAZING = 1 when the final iterate landed within a decade of a convergence gate (CLEAN otherwise).

* **On:** `REKS_GVB_DIIS` true (default: on)

* **Units:** a.u. (gradient norms); counts; 0/1 flag

* **Stored:** `REKS QUALITY GORB FRO`, `REKS QUALITY GORB RMS`, `REKS QUALITY LANDINGS`, `REKS QUALITY VERDICT TRIPS`, `REKS QUALITY MAX RUNG`, `REKS QUALITY BASIN FIRES`, `REKS QUALITY GRAZING`; `REKS GORB FRO`, `REKS GATE RMS`; `SCF ITERATIONS`

- Printed only at `REKS_REPORT_LEVEL` ≥ 4, as one `[QUALITY]` trace line.
- `REKS GORB FRO` and `REKS GATE RMS` hold the value of the last SCF iteration that set them (TRAH after iteration 0; GVB-DIIS with a nonzero orbital gradient, the witnessed gradient norm).

### SI states {#si-states}

#### FONs of the SI-only geminals {#si-fons}

FONs of geminals that enter only SI configurations, optimized after the SCF at fixed SA-REKS orbitals ([SI-only FONs](https://reksstudio.github.io/v2/manual/concepts/index.md#si-only-fons)).

On: SI present

For: SI configurations with geminals absent from the SA ensemble

Units: electrons

```log
=> FON optimization after the SCF <=

   Set     Geminals  Iterations   Last change      Residual
   --------------------------------------------------------
   n              2           2       0.0e+00       1.1e-10
   m              2           2       0.0e+00       1.4e-14
   mt1            4           2       0.0e+00       3.6e-14
   --------------------------------------------------------

   Scheme  Geminal     n                   m                   mt1
   -----------------------------------------------------------------------------
        0  (a,d)       1.970714/0.029286*  1.970145/0.029855*  1.970620/0.029380
        0  (b,c)       1.390406/0.609594*  1.389772/0.610228*  1.388723/0.611277
        1  (a,c)       2.000000/0.000000   2.000000/0.000000   2.000000/0.000000
        1  (b,d)       1.998088/0.001912   1.999782/0.000218   1.999779/0.000221
   -----------------------------------------------------------------------------
   Geminals entering only SI configurations, FONs optimized after the SCF at fixed SA orbitals.
   Iterations = passes until no occupation changes by more than 1e-07; Last change = largest change in the last pass;
   Residual = largest first-order optimality residual.
   Second table: n_p/n_q of each geminal (p,q) per FON set; * = SA geminal, optimized in the SCF.
```

Stored: `REKS FON K=<e>`, `REKS <L>_FON K=<e>`, `REKS FON META K=<e>`, `REKS <L>_FON META K=<e>` (sector form `REKS SECTOR <s> …`); per SI cassette, per generation whose FON layer holds all geminals of the cassette

* No bare (cassette 0) alias.
* Read the `Residual` column. Geminals without `*` printed as `2.000000/0.000000` lie at the bound, as scheme 1 `(a,c)` above; compare the same columns between runs.

#### SSR state energies {#ssr-energies}

Eigenvalues of the SI eigenproblem of each cassette after removal of the overlap null modes ([SI Hamiltonian and overlap](https://reksstudio.github.io/v2/manual/concepts/index.md#si-hamiltonian)); states ordered by energy, root index 0-based.

On: SI present

For: every physical root of every SI cassette with at least one configuration, independent of `SI_REKS_STORE_STATES` and `SI_REKS_PRINT_STATES`

Units: E<sub>h</sub> (stored); E<sub>h</sub> and eV relative to the lowest state of the first typed SI cassette, S0 when that cassette is a singlet (printed)

```log
=> Adiabatic states, cassette 0 <=

   State            E [Eh]  E-E(S0) [eV]   Leading configurations (w_j in %)
   ----------------------------------------------------------------------------------------------------
   S0     -78.300687507270         0.000   PPS1(61.6) PPS2(36.5) DOSS_SPS_1(1.8)
   S1     -78.181411797824         3.246   OSS4(92.2) OSS_DES4(5.1) OSS3(2.5)
   S2     -78.176656077663         3.375   DES2(51.4) DOSS_SPS_0(21.7) DES4(10.5) PPS2(7.5)
[...]
   ----------------------------------------------------------------------------------------------------
   w_j = c_j (S c)_j = Chirgwin-Coulson weight of configuration j in the state, sum_j w_j = 100 %;
   listed: the three largest |w_j| >= 0.1 %, then every further |w_j| > 5 %.

   Overlap S_ij / sqrt(S_ii S_jj) of configuration pairs listed in the same row above 0.5 in magnitude:
   PPS1  / PPS2    0.83    PPS2  / DES2    0.55    DES1  / DDES2  -0.55    DDES1 / DDES2   0.83
```

```log
==> State summary <==

    State            E [Eh]  E-E(S0) [eV]  E-E(S0) [kcal/mol]  lambda [nm]    f_len     Main configurations (w_j in %)
    ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    S0     -78.300687507270         0.000                0.00            -        -     PPS1(61.6); PPS2(36.5)
    T1     -78.279831032158         0.568               13.09            -        -     T_PPS2(97.4) 8A(b)->9A(c)
    T2     -78.224960817446         2.061               47.52            -        -     T_PPS4(88.1) 8A(b)->10A(d)
    S1     -78.181411797824         3.246               74.85        382.0  0.00000     OSS4(92.2) 8A(b)->10A(d)
    S2     -78.176656077663         3.375               77.83        367.4  0.00002     DES2(51.4) 8A(b),8A(b)->9A(c),9A(c)
    S3     -78.170600623799         3.540               81.63        350.3  0.01136 *   OSS2(69.7) 8A(b)->9A(c)
[...]
    ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    Printed states of the first cassette of each spin multiplicity, ordered by energy.
    lambda, f_len: - for a spin multiplicity other than S0's (no spin-orbit coupling).
    Main configurations: the largest |w_j| (>= 0.1 %), then every further |w_j| >= 25 %.
    * = length and velocity forms differ by more than a factor of 3 (tested when f_len or f_vel > 1e-3):
    the hypervirial relation |p| = dE |mu| does not hold for these approximate states; f is qualitative only.
```

Stored: `SSR ENERGIES K=<e>`; bookkeeping `SSR SI LIST`, `SSR CASSETTE 2S K=<e>`, `SSR STORED STATES K=<e>`, `SSR ACTIVE ORBITALS K=<e>`, `SSR CASSETTE SECTOR K=<e>`

* The four bookkeeping scalars never take the sector prefix.
* `Adiabatic states` lists `SI_REKS_PRINT_STATES` rows; in later cassettes a `ref` row repeats S0 of cassette 0.
* `State summary`, printed with two or more SI cassettes, merges the printed states of the first cassette of each multiplicity by energy.
* Check E(S0) against `@REKS Final Energy` (`E[SA-REKS]`) and the gaps between neighbouring roots: in the runs of this manual E(S0) lies 0.04–0.48 E<sub>h</sub> below E<sub>SA</sub>; S0 = −1.0·10<sup>7</sup> E<sub>h</sub> at E<sub>SA</sub> = −1.27 E<sub>h</sub> marks ghost roots ([Ghost states and a collapsed SI spectrum](https://reksstudio.github.io/v2/manual/diagnose/index.md#diag-ghost-states)).

#### SSR eigenvectors and Chirgwin–Coulson weights {#ssr-composition}

Eigenvector c of each state over the configurations of its cassette, and the Chirgwin–Coulson weights ω<sub>j</sub> ([Chirgwin–Coulson weights](https://reksstudio.github.io/v2/manual/concepts/index.md#cc-weights)), printed in `Adiabatic states` ([SSR state energies](https://reksstudio.github.io/v2/manual/properties/index.md#ssr-energies)).

* **On:** SI present

* **Units:** dimensionless (coefficients); % (printed weights)

* **Stored:** `SSR COEFFICIENTS K=<e>` (`REKS_REPORT_LEVEL` ≥ 3)

- The weights are printed, not stored.
- No bare (cassette 0) alias.

#### SI Hamiltonian and overlap {#si-matrices}

Hamiltonian H and overlap S of the cassette over its configurations, before diagonalization; the printed block gives dimensions, the number of overlapping pairs and the rank after Löwdin regularization.

On: SI present

Units: E<sub>h</sub> (H); dimensionless (S)

$$
V_{ij} = \tilde H_{ij} - \tilde S_{ij}\,\frac{\tilde H_{ii} + \tilde H_{jj}}{2}, \qquad \tilde S_{ij} = \frac{S_{ij}}{\sqrt{S_{ii} S_{jj}}}, \quad \tilde H_{ij} = \frac{H_{ij}}{\sqrt{S_{ii} S_{jj}}}
$$

```log
=> Hamiltonian, cassette 0 <=

   Configurations        18
   Microstates           37       entering the matrix elements of this cassette
   Matrix elements       171      diagonal 18, off-diagonal 153
   Overlap               S != I: 16 of 153 pairs overlap
   Eigenproblem          H c = E S c, dimension 18
   Regularization        rank-revealing Lowdin, sigma = 2.00e-10: the 18 configurations
                         span 16 dimensions (2 overlap null modes removed)
   Independent states    16
```

```log
Consistency           max |V| = 2.5706 mEh over pairs with |S_ij|/sqrt(S_ii S_jj) > 0.99 (PPS1 / PPS2)
```

Stored: `SSR HAMILTONIAN K=<e>`, `SSR OVERLAP SPARSE K=<e>` (rows \[i n<sub>cfg</sub> + j, S<sub>ij</sub>]), stored at `REKS_REPORT_LEVEL` ≥ 3

* Matrices printed only at `REKS_REPORT_LEVEL` ≥ 4. No bare (cassette 0) alias.
* `Independent states` = `Configurations` − overlap null modes − ghost roots. A `Regularization` line appears when null modes are removed, a `Ghost states` line when ghost roots ([Adiabatic (SSR) states](https://reksstudio.github.io/v2/manual/concepts/index.md#ssr-states)) are removed.
* Two configurations with |S̃<sub>ij</sub>| close to 1 are nearly the same function; their coupling then follows from the overlap, and V<sub>ij</sub> vanishes for two identical functions.
* The `Consistency` line (second fragment, H<sub>4</sub> REKS(4,4)) gives the largest |V<sub>ij</sub>| in mE<sub>h</sub> over the pairs with |S̃<sub>ij</sub>| > 0.99 (a fixed bound, not an option) and the pair where it occurs; without such a pair the line is absent. The code sets no bound on |V<sub>ij</sub>|.

#### Orbitals of the SI step {#si-orbitals}

MO coefficients of the SI state-property evaluation (the Fock-snapshot orbitals when present, else the SCF orbitals; the basis of the Dyson MO arrays) and the number of core orbitals.

* **On:** SI present

* **Units:** AO coefficients

* **Printed:** no

* **Stored:** `REKS C PATH B K=<e>`, `REKS NCORE K=<e>`

- Sector form drops the leading `REKS `: `REKS SECTOR <s> C PATH B K=<e>`.

### Unrelaxed state and transition properties {#unrelaxed-state-and-transition-properties}

#### Transition dipole moments and length-form oscillator strengths {#transition-dipole}

Transition dipoles between adiabatic states from the unrelaxed transition densities, and the length-form oscillator strengths.

On: `SI_REKS_ANALYSIS` `TRANSITION_DIPOLE` (default: always)

For: pairs I \< J

Units: e a<sub>0</sub> (stored); e a<sub>0</sub> and D (printed); f dimensionless

$$
\Delta E = E_J - E_I, \qquad \lambda = hc/\Delta E
$$

$$
\boldsymbol\mu_{IJ} = \langle I|\hat{\boldsymbol\mu}|J\rangle, \qquad \hat{\boldsymbol\mu} = -\sum_i \mathbf r_i
$$

$$
f_{\mathrm{len}} = \tfrac{2}{3}\,\Delta E\,|\boldsymbol\mu_{IJ}|^2 \quad (\Delta E \text{ in } E_{\mathrm h})
$$

```log
=> Transitions, cassette 0 <=

   Transition   dE [eV]  lambda [nm]  mu_x [e a0]  mu_y [e a0]  mu_z [e a0]  |mu| [e a0]   |mu| [D]      f_len
   -------------------------------------------------------------------------------------------------------------
   S0->S1         3.246        382.0     0.000000    -0.000512     0.000000     0.000512   0.001301    0.00000
   S0->S2         3.375        367.4     0.000000     0.000000     0.016269     0.016269   0.041351    0.00002
   S0->S3         3.540        350.3     0.000000     0.000000    -0.361851     0.361851   0.919734    0.01136 *
[...]
   * = length and velocity forms differ by more than a factor of 3 (tested when f_len or f_vel > 1e-3):
   the hypervirial relation |p| = dE |mu| does not hold for these approximate states; f is qualitative only.
```

Stored: `SSR TRANSITION DIPOLES K=<e>`, `SSR OSCILLATOR STRENGTHS K=<e>`

* The `*` flag after f<sub>len</sub> (length and velocity forms differ by more than a factor of 3, tested when f<sub>len</sub> or f<sub>vel</sub> exceeds 10<sup>-3</sup>) appears only when the velocity table is computed too (`E_TDM_VEL` or `M_TDM`).
* λ prints `-` for a gap that prints as 0.000 eV.

#### Velocity-form transition moments and oscillator strengths {#transition-velocity}

Velocity-form transition moments and oscillator strengths, printed with the magnetic moments ([Magnetic transition moments and rotatory strengths](https://reksstudio.github.io/v2/manual/properties/index.md#transition-magnetic)).

On: `SI_REKS_ANALYSIS` `E_TDM_VEL` (default: on)

For: pairs I \< J

Units: a.u.; f dimensionless

$$
\mathbf p_{IJ} = \langle I|\nabla|J\rangle, \qquad f_{\mathrm{vel}} = \frac{2}{3\,\Delta E}\,|\mathbf p_{IJ}|^2
$$

```log
=> Velocity and magnetic transition moments, cassette 0 <=

   Transition         p_x         p_y         p_z         m_x         m_y         m_z       f_vel         R_vel
   ------------------------------------------------------------------------------------------------------------
   S0->S1        0.000000   -0.000161    0.000000   -0.372053    0.000000    0.000000    0.000000      0.000000
   S0->S2        0.000000    0.000000   -0.000635    0.000000    0.000000    0.000000    0.000002      0.000000
   S0->S3        0.000000    0.000000    0.013689    0.000000    0.000000    0.000000    0.000960 *    0.000000
```

Stored: `SSR VELOCITY TRANSITION DIPOLES K=<e>`, `SSR OSCILLATOR STRENGTHS VELOCITY K=<e>`

* `*` after f<sub>vel</sub>: same test as after f<sub>len</sub> ([Transition dipole moments and length-form oscillator strengths](https://reksstudio.github.io/v2/manual/properties/index.md#transition-dipole)).
* The NAC sum-rule check against −p ([Nonadiabatic coupling vectors](https://reksstudio.github.io/v2/manual/properties/index.md#nac)) is printed only when these moments exist.

#### Magnetic transition moments and rotatory strengths {#transition-magnetic}

Magnetic transition moments and velocity-form rotatory strengths, printed in the velocity table ([Velocity-form transition moments and oscillator strengths](https://reksstudio.github.io/v2/manual/properties/index.md#transition-velocity)).

On: `SI_REKS_ANALYSIS` `M_TDM` (default: on)

For: pairs I \< J; `M_TDM` also computes the transition dipoles

Units: a.u.

$$
\boldsymbol\mu_{IJ} = -\langle I|\mathbf r|J\rangle, \qquad \mathbf p_{IJ} = \langle I|\nabla|J\rangle, \qquad \mathbf m_{IJ} = -\tfrac12\,\langle I|\mathbf r\times\nabla|J\rangle, \qquad R_{\mathrm{len}} = \boldsymbol\mu_{IJ}\cdot\mathbf m_{IJ}, \qquad R_{\mathrm{vel}} = -\frac{\mathbf p_{IJ}\cdot\mathbf m_{IJ}}{\Delta E}
$$

Stored: `SSR MAGNETIC TRANSITION DIPOLES K=<e>`, `SSR ROTATORY STRENGTHS K=<e>` (columns \[R<sub>len</sub>, R<sub>vel</sub>])

* μ includes the electron charge −1; m is real (the factor i of the operator is dropped).
* R<sub>len</sub> is stored, not printed; the table prints R<sub>vel</sub>.

#### Natural orbitals and occupations of the active space {#natural-orbitals}

Eigenvectors and eigenvalues of the active 1-RDM of each state; orbitals expanded over the active MOs.

On: `SI_REKS_ANALYSIS` `NO_OCCUPATIONS` (default: always)

Units: electrons (occupations)

```log
=> Natural orbitals of the active space, cassette 0 <=

   S0
     occ         1.933380    1.510942    0.488886    0.066792
     --------------------------------------------------------
     NO 1       -1.0000 a    0.0000 b    0.0000 c    0.0003 d
     NO 2        0.0000 a   -1.0000 b   -0.0003 c    0.0000 d
     NO 3        0.0000 a   -0.0003 b    1.0000 c    0.0000 d
     NO 4        0.0003 a    0.0000 b    0.0000 c    1.0000 d
[...]
   occ = natural occupation; NO k = natural orbital k, expansion coefficients over the active MOs.
```

Stored: `SSR NATURAL OCCUPATIONS K=<e>`, `SSR NATURAL ORBITALS ACTIVE STATE=<k> K=<e>`, `SSR NATURAL ORBITALS AO STATE=<k> K=<e>`

Files: `<prefix>.no.<label>_cassette<e>.molden` (`MOLDEN_WRITE`, stored states above 0)

* Stored occupations are in descending order (NO 1 = largest); the printed rows follow the active MOs, each NO on the row of its dominant MO coefficient, and the occ header follows that row order.
* The occupations of each state sum to the number of active electrons.

#### Radical character {#radical-character}

Indices y<sub>0</sub>, y<sub>1</sub> (occupations of the LUNO and LUNO+1) and the effective numbers of unpaired electrons, over the active natural occupations n<sub>a</sub> of the state (descending).

On: `SI_REKS_ANALYSIS` `RADICAL` (default: on)

Units: y dimensionless; N electrons

$$
y_i = n_{\mathrm{LUNO}+i}, \qquad \mathrm{LUNO} = N_{\mathrm{act}}/2 \ (\text{0-based}), \qquad i = 0, 1
$$

$$
N_D = \sum_a n_a(2-n_a), \qquad N_U = \sum_a \min(n_a,\, 2-n_a), \qquad N_{U,\mathrm{nl}} = \sum_a n_a^2(2-n_a)^2
$$

```log
=> Radical character, cassette 0 <=

   State             y0          y1         N_D         N_U      N_U,nl
   --------------------------------------------------------------------
   S0          0.488886    0.066792    1.735625    1.111356    1.125063
   S1          0.971846    0.080285    2.306662    2.104262    2.044339
[...]
   Radical character of each state. y0, y1 = diradical/tetraradical indices
   from the LUNO/LUNO+1 occupations (0 = closed shell, 1 = pure radical).
```

Stored: `SSR RADICAL INDICES K=<e>` (columns \[y0, y1, N_D, N_U, N_U,nl]), `SSR UNPAIRED ATOMIC POPULATIONS K=<e>`

* Unpaired atomic populations are stored, not printed.
* y<sub>0</sub>, y<sub>1</sub> equal the corresponding occupations in `Natural orbitals` ([Natural orbitals and occupations of the active space](https://reksstudio.github.io/v2/manual/properties/index.md#natural-orbitals)); they are not Yamaguchi's spin-projected index. `-` is printed when the active space has no LUNO or LUNO+1.
* 2S > 0: the spin-unpaired electrons are counted as well, N<sub>D</sub> ≥ N<sub>U</sub> ≥ 2S; a LUNO opened by the spin gives y ≈ 1.

Ref: N<sub>D</sub>: [Takatsuka et al., Theor. Chim. Acta 1978, 48, 175](https://reksstudio.github.io/v2/manual/reference/index.md#takatsuka1978-odd-electrons); N<sub>U</sub> (linear) and N<sub>U,nl</sub> (nonlinear): [Head-Gordon, Chem. Phys. Lett. 2003, 372, 508](https://reksstudio.github.io/v2/manual/reference/index.md#head-gordon2003-unpaired).

#### Permanent and difference dipole moments (unrelaxed) {#permanent-dipole}

Dipole moment of each state from the unrelaxed state density, origin 0, and the difference dipole relative to S0.

On: `SI_REKS_ANALYSIS` `DIPOLE` (or `MULTIPOLE(n)`) (default: on)

For: difference dipoles: two or more states

Units: e a<sub>0</sub> (stored); e a<sub>0</sub> and D (printed)

$$
\boldsymbol\mu_I = \sum_A Z_A \mathbf R_A - \langle I|\textstyle\sum_i \mathbf r_i|I\rangle
$$

$$
\Delta\boldsymbol\mu_I = \boldsymbol\mu_I - \boldsymbol\mu_{S_0}
$$

```log
=> Dipole moment (unrelaxed state density matrix), cassette 0 <=

   State       mu_x [e a0]  mu_y [e a0]  mu_z [e a0]  |mu| [e a0]     |mu| [D]
   ---------------------------------------------------------------------------
   S0             0.000000     0.000000     0.002014     0.002014     0.005118
   S1             0.000000     0.000000     0.014160     0.014160     0.035990
```

Stored: `SSR PERMANENT DIPOLES K=<e>`, `SSR DIFFERENCE DIPOLES K=<e>`

#### Quadrupole moments of the states (unrelaxed) {#quadrupole}

Full Cartesian quadrupole of each state (nuclei and electrons, origin 0) from the unrelaxed state density, and its traceless part.

On: `SI_REKS_ANALYSIS` `QUADRUPOLE` (or `MULTIPOLE(n)`, n ≥ 2) (default: on)

Units: e a<sub>0</sub><sup>2</sup>

$$
Q_{\mathrm{tl},ij} = Q_{ij} - \tfrac13\,\mathrm{tr}(Q)\,\delta_{ij}
$$

```log
=> Quadrupole moment (unrelaxed state density matrix), cassette 0 <=

   State                         xx          xy          xz          yy          yz          zz
   --------------------------------------------------------------------------------------------
   S0        Q_ij         -9.218073    0.000000    0.000000  -12.215663    0.000000   -6.885707
             Q_tl_ij       0.221741    0.000000    0.000000   -2.775849    0.000000    2.554107
```

Stored: `SSR QUADRUPOLES K=<e>`, `SSR TRACELESS QUADRUPOLES K=<e>`

* Components xx, xy, xz, yy, yz, zz.

#### Transition second moments {#transition-second-moments}

Cartesian second moments of the transition density of each pair, trace included.

On: `SI_REKS_ANALYSIS` `TRANSITION_QUADRUPOLE` (or `MULTIPOLE(n)`, n ≥ 2) (default: on)

For: pairs I \< J

Units: e a<sub>0</sub><sup>2</sup>

$$
\langle I|\textstyle -\sum r_i r_j|J\rangle, \qquad i, j = x, y, z
$$

```log
=> Transition second moments, cassette 0 <=

   Transition          xx          xy          xz          yy          yz          zz
   ----------------------------------------------------------------------------------
   S0->S1        0.000000    0.000000    0.000000    0.000000    0.390067    0.000000
   S0->S2        0.054364    0.000000    0.000000    0.144255    0.000000   -0.475730
[...]
   Its traceless part governs electric-quadrupole transitions, not contained in f_len.
```

Stored: `SSR TRANSITION QUADRUPOLES K=<e>`

#### Cartesian multipole moments of order l ≥ 3 {#multipoles}

Cartesian multipole moments of order l of each state (nuclei included) and of each transition; components x<sup>a</sup> y<sup>b</sup> z<sup>c</sup>, a + b + c = l, in lexicographic order, origin 0, trace included.

On: `SI_REKS_ANALYSIS` `MULTIPOLE(n)`, n ≥ 3 (default: off)

For: one table per order l = 3..n

Units: e a<sub>0</sub><sup>l</sup>

$$
M_I = \sum_A Z_A\, x_A^a y_A^b z_A^c - \langle I|\textstyle\sum_i x_i^a y_i^b z_i^c|I\rangle
$$

$$
M_{IJ} = \langle I|\textstyle -\sum_i x_i^a y_i^b z_i^c|J\rangle
$$

```log
=> Multipole moments of order 3 (unrelaxed state density matrix), cassette 0 <=

   State              xxx         xxy         xxz         xyy         xyz         xzz         yyy         yyz         yzz         zzz
   ----------------------------------------------------------------------------------------------------------------------------------
   S0            0.000000    0.000000   -0.011289    0.000000    0.000000    0.000000    0.000000    0.066278    0.000000    0.149616
   S1            0.000000    0.000000    0.110874    0.000000    0.000000    0.000000    0.000000    0.088748    0.000000    0.413698
```

Stored: `SSR MULTIPOLES L=<l> K=<e>`, `SSR TRANSITION MULTIPOLES L=<l> K=<e>`

#### Atomic charges of the states (unrelaxed) {#atomic-charges}

Mulliken and Löwdin charges of each state from the spin-summed unrelaxed state density P<sup>(I)</sup> = D<sup>c</sup> + C<sub>a</sub> ρ<sup>(II)</sup> C<sub>a</sub><sup>T</sup> (core D<sup>c</sup> included).

On: `SI_REKS_ANALYSIS` `MULLIKEN_CHARGES` / `LOWDIN_CHARGES` (default: on)

Units: e

$$
q^{\mathrm M}_A = Z_A - \sum_{\mu\in A}(\mathbf P^{(I)}\mathbf S)_{\mu\mu}, \qquad q^{\mathrm L}_A = Z_A - \sum_{\mu\in A}(\mathbf S^{1/2}\mathbf P^{(I)}\mathbf S^{1/2})_{\mu\mu}
$$

```log
=> Atomic charges (unrelaxed state density matrix), cassette 0 <=

   Mulliken
   Atom                S0          S1          S2          S3          S4
   ----------------------------------------------------------------------
   H1            0.139211    0.039518   -0.021310    0.018011    0.123394
   H2           -0.139211   -0.039518    0.021310   -0.018011   -0.123394
   H3           -0.139211   -0.039518    0.021310   -0.018011   -0.123394
   H4            0.139211    0.039518   -0.021310    0.018011    0.123394
   ----------------------------------------------------------------------

   Mulliken, change X(Sj) - X(Si); - = |change| < 0.1; unchanged rows and tables omitted
   Atom            S0->S1      S0->S2      S0->S3      S0->S4
   ----------------------------------------------------------
   H1                   -   -0.160521   -0.121200           -
   H2                   -    0.160521    0.121200           -
   H3                   -    0.160521    0.121200           -
   H4                   -   -0.160521   -0.121200           -
   ----------------------------------------------------------
```

Stored: `SSR MULLIKEN CHARGES K=<e>`, `SSR LOWDIN CHARGES K=<e>`

* Change tables X(S<sub>j</sub>) − X(S<sub>i</sub>) print entries with |change| ≥ `SI_REKS_ANALYSIS_CHANGE_MIN` (default 0.1); rows and tables without such a change are omitted.
* The charges of each state sum to the molecular charge.

#### Atomic spin populations of the states (2S > 0) {#atomic-spins}

Mulliken and Löwdin spin populations of each state of a 2S > 0 cassette, from the spin density Q = D<sup>α</sup> − D<sup>β</sup> of its M<sub>S</sub> = S component.

On: `SI_REKS_ANALYSIS` `MULLIKEN_SPINS` / `LOWDIN_SPINS` (default: on)

For: cassettes with 2S > 0

Units: electrons

$$
s^{\mathrm M}_A = \sum_{\mu\in A}(\mathbf Q\mathbf S)_{\mu\mu}, \qquad s^{\mathrm L}_A = \sum_{\mu\in A}(\mathbf S^{1/2}\mathbf Q\mathbf S^{1/2})_{\mu\mu}, \qquad \mathbf Q = \mathbf D^{\alpha} - \mathbf D^{\beta}\ \ (M_S = S)
$$

$$
\sum_A s_A = 2M_S
$$

```log
=> Atomic spin populations (unrelaxed state spin density, M_S = S), cassette 1 <=

   Mulliken
   Atom                T1          T2          T3          T4          T5
   ----------------------------------------------------------------------
   C1            0.291930    0.090878    0.515228    0.252168    0.507605
   C2            0.291930    0.090878    0.515228    0.252168    0.507605
   C3            0.227326    0.418081    0.216368    0.248321    0.238601
   C4            0.227326    0.418081    0.216368    0.248321    0.238601
   C5            0.480743    0.491040    0.268405    0.499511    0.253794
   C6            0.480743    0.491040    0.268405    0.499511    0.253794
[...]
   Spin population of each atom: s_A = sum_{mu in A} (Q S)_mumu (Mulliken),
   (S^1/2 Q S^1/2)_mumu (Lowdin); Q = D^alpha - D^beta of the M_S = S component,
   sum_A s_A = 2 M_S; another M_S scales s_A by M_S/S.
```

Stored: `SSR MULLIKEN SPINS K=<e>`, `SSR LOWDIN SPINS K=<e>` (with the sector prefix, [Variable names](https://reksstudio.github.io/v2/manual/properties/index.md#variable-names))

* Another M<sub>S</sub> component scales s<sub>A</sub> by M<sub>S</sub>/S.
* Change tables as for the charges ([Atomic charges of the states (unrelaxed)](https://reksstudio.github.io/v2/manual/properties/index.md#atomic-charges)).

#### Transition charges {#transition-charges}

Mulliken and Löwdin atomic charges of the transition density ρ<sup>(IJ)</sup> of each pair I → J: the formulas of [Atomic charges of the states (unrelaxed)](https://reksstudio.github.io/v2/manual/properties/index.md#atomic-charges) with P<sup>(I)</sup> replaced by C<sub>a</sub> ρ<sup>(IJ)</sup> C<sub>a</sub><sup>T</sup>, without Z<sub>A</sub>; the charges of a pair sum to 0.

On: `SI_REKS_ANALYSIS` `TRANSITION_CHARGES` (default: on)

For: pairs I \< J

Units: e

```log
=> Transition charges, cassette 0 <=

   Mulliken
   Atom            S0->S1      S0->S2      S0->S3      S0->S4      S1->S2      S1->S3      S1->S4      S2->S3      S2->S4      S3->S4
   ----------------------------------------------------------------------------------------------------------------------------------
   H1           -0.518340    0.048321   -0.451513    0.441579    0.161921    0.361484    0.547847    0.092855   -0.105954   -0.067768
   H2            0.266469   -0.048321    0.451513   -0.441579   -0.317585   -0.023930   -0.002624   -0.092855    0.105954    0.067768
   H3           -0.266469   -0.048321    0.451513   -0.441579    0.317585    0.023930    0.002624   -0.092855    0.105954    0.067768
   H4            0.518340    0.048321   -0.451513    0.441579   -0.161921   -0.361484   -0.547847    0.092855   -0.105954   -0.067768
   ----------------------------------------------------------------------------------------------------------------------------------
[...]
   Transition charge of each atom for I -> J (e); measures the localization of the transition density.
```

Stored: `SSR TRANSITION MULLIKEN CHARGES K=<e>`, `SSR TRANSITION LOWDIN CHARGES K=<e>`

#### Bond indices of the states (unrelaxed) {#bond-indices}

Mayer and Wiberg–Löwdin bond indices of each atom pair A ≠ B from the spin-summed unrelaxed state density P<sup>(I)</sup> ([Atomic charges of the states (unrelaxed)](https://reksstudio.github.io/v2/manual/properties/index.md#atomic-charges)); in a 2S > 0 cassette also from the spin density Q ([Atomic spin populations of the states (2S > 0)](https://reksstudio.github.io/v2/manual/properties/index.md#atomic-spins)).

On: `SI_REKS_ANALYSIS` `MAYER_INDICES` / `WIBERG_LOWDIN_INDICES` (default: on)

For: printed rows: pairs with index ≥ 0.10 in any state; change tables as for the charges ([Atomic charges of the states (unrelaxed)](https://reksstudio.github.io/v2/manual/properties/index.md#atomic-charges))

Units: dimensionless

$$
B^{\mathrm{Mayer}}_{AB} = \sum_{\mu\in A}\sum_{\nu\in B}(\mathbf P\mathbf S)_{\mu\nu}(\mathbf P\mathbf S)_{\nu\mu}, \qquad B^{\mathrm{WL}}_{AB} = \sum_{\mu\in A}\sum_{\nu\in B}\big[(\mathbf S^{1/2}\mathbf P\mathbf S^{1/2})_{\mu\nu}\big]^2
$$

$$
2S > 0:\ \ B^{\mathrm{Mayer}}_{AB} = \sum_{\mu\in A}\sum_{\nu\in B}\big[(\mathbf D\mathbf S)_{\mu\nu}(\mathbf D\mathbf S)_{\nu\mu} + (\mathbf Q\mathbf S)_{\mu\nu}(\mathbf Q\mathbf S)_{\nu\mu}\big], \qquad \mathbf D = \mathbf D^{\alpha} + \mathbf D^{\beta},\ \ \mathbf Q = \mathbf D^{\alpha} - \mathbf D^{\beta}\ \ (M_S = S)
$$

```log
=> Bond indices (unrelaxed state density matrix), cassette 0 <=

   Mayer
   Bond                S0          S1          S2          S3          S4
   ----------------------------------------------------------------------
   H1-H2         0.826494    0.194189   -0.021751    0.092368    0.022388
   H1-H3        -0.015179   -0.037356   -0.001690    0.045579    0.181498
   H1-H4         0.130165    0.126219    0.078371    0.066822   -0.007359
   H2-H3         0.125078    0.441091    0.418345    0.045832   -0.112002
   H2-H4        -0.015179   -0.037356   -0.001690    0.045579    0.181498
   H3-H4         0.826494    0.194189   -0.021751    0.092368    0.022388
   ----------------------------------------------------------------------
[...]
   Bond order of each atom pair in each state: Mayer and Wiberg-Lowdin indices; pairs with index >= 0.10 in any state.
   Qualitative for correlated states; compare between states, not with integer bond orders.
```

Stored: `SSR MAYER INDICES K=<e>`, `SSR WIBERG LOWDIN INDICES K=<e>` (m × natom<sup>2</sup>, column A·natom + B)

* 2S > 0: the Wiberg–Löwdin index takes S<sup>1/2</sup> X S<sup>1/2</sup> in place of X S for X = D, Q (open-shell form). 2S = 0: the spin-summed density only.

Ref: [Mayer, Chem. Phys. Lett. 1983, 97, 270](https://reksstudio.github.io/v2/manual/reference/index.md#mayer1983-bond-order).

#### Natural transition orbitals {#nto}

Hole/particle orbital pairs of the transition density T<sub>pq</sub> with weights w<sub>k</sub>, the participation ratio PR, and the magnitude Ω of the transition density.

On: `SI_REKS_ANALYSIS` `NTO` (default: on)

For: pairs I \< J

Units: dimensionless (weights); AO coefficients (orbitals)

$$
\mathbf T = \boldsymbol\rho^{(IJ)} = \mathbf U\,\mathrm{diag}(s_k)\,\mathbf V^{\mathsf T}, \qquad w_k = \frac{s_k^2}{\sum_l s_l^2}, \qquad \mathrm{PR} = \Big(\sum_k w_k^2\Big)^{-1}
$$

$$
\Omega = \tfrac12 \sum_{pq} T_{pq}^2 = \tfrac12 \sum_k s_k^2
$$

```log
=> Natural transition orbitals (NTO), cassette 0 <=

   Transition        w_1        w_2        w_3         PR      Omega
   -----------------------------------------------------------------
   S0->S1       0.971010   0.025578   0.003404   1.059854   0.666569
   S0->S2       0.548469   0.451196   0.000328   1.982569   0.398602
   S0->S3       0.731721   0.166222   0.098744   1.745789   0.752936
   S0->S4       0.962008   0.033444   0.004224   1.079220   0.689251
   S0->S5              -          -          -          -   0.026841
[...]
   NTO decomposition of each transition into hole -> electron orbital pairs.
   w_1..w_3 = weights of the leading NTO pairs; PR = participation ratio;
   PR ~ 1 = transition dominated by one NTO pair, larger PR = transition distributed over several pairs.
[...]
   - = Omega < 0.05, NTO decomposition not meaningful.
```

Stored: `SSR NTO WEIGHTS K=<e>`, `SSR NTO HOLES AO ROOT <I> -> ROOT <J> K=<e>`, `SSR NTO PARTICLES AO ROOT <I> -> ROOT <J> K=<e>`

Files: `<prefix>.nto.<label I>-<label J>_cassette<e>.molden` (`MOLDEN_WRITE`, stored states above 0); cube `CUBEPROP_TASKS` `SSR_NTOS` (pairs with w ≥ 0.1)

* Holes: columns of U, particles: columns of V (active MOs; AO form C<sub>a</sub>U, C<sub>a</sub>V). T is spin-summed, so a pure singlet single excitation has Ω = 1. The first three weights are printed; weights and PR print `-` when Ω \< 0.05.
* The bare alias of `SSR NTO HOLES`/`PARTICLES` exists only for pairs 0 → J of cassette 0; `SSR NTO WEIGHTS` has the full bare alias.

Ref: [Martin, J. Chem. Phys. 2003, 118, 4775](https://reksstudio.github.io/v2/manual/reference/index.md#martin2003-nto).

#### Exciton descriptors, hole and electron populations, natural difference orbitals {#exciton}

Descriptors of the transition density (d<sub>h→e</sub>, σ<sub>h</sub>, σ<sub>e</sub>, d<sub>exc</sub>, R<sub>eh</sub>, p<sub>prom</sub>), Löwdin hole and electron populations per atom, and the eigenpairs of the difference density ρ<sup>(JJ)</sup> − ρ<sup>(II)</sup>.

On: `SI_REKS_ANALYSIS` `EXCITON` (default: on)

For: pairs I \< J

Units: distances a<sub>0</sub>; R<sub>eh</sub> dimensionless; populations and p<sub>prom</sub> electrons

$$
\Omega_{AB} = \tfrac12\sum_{\mu\in A}\sum_{\nu\in B}\big[(\mathbf X\mathbf T\mathbf X^{\mathsf T})_{\mu\nu}\big]^2, \quad \mathbf X = \mathbf S^{1/2}\mathbf C_a, \qquad h_A = \sum_B \Omega_{AB}, \quad e_B = \sum_A \Omega_{AB}
$$

$$
\langle \mathbf r\rangle_h = \frac{\mathrm{tr}(\mathbf T^{\mathsf T}\mathbf r\,\mathbf T)}{2\Omega}, \quad \langle \mathbf r\rangle_e = \frac{\mathrm{tr}(\mathbf T\,\mathbf r\,\mathbf T^{\mathsf T})}{2\Omega}, \quad \langle r^2\rangle_h = \frac{\mathrm{tr}(\mathbf T^{\mathsf T}\mathbf r^2\,\mathbf T)}{2\Omega}, \quad \langle \mathbf r_h\cdot\mathbf r_e\rangle = \frac{\sum_a \mathrm{tr}(\mathbf T^{\mathsf T} \mathbf x_a \mathbf T \mathbf x_a)}{2\Omega}
$$

$$
d_{h\to e} = |\langle\mathbf r\rangle_e - \langle\mathbf r\rangle_h|, \qquad \sigma_{h} = \sqrt{\langle r^2\rangle_{h} - |\langle\mathbf r\rangle_{h}|^2}, \qquad \sigma_{e} = \sqrt{\langle r^2\rangle_{e} - |\langle\mathbf r\rangle_{e}|^2}
$$

$$
d_{\mathrm{exc}} = \sqrt{\langle r^2\rangle_h + \langle r^2\rangle_e - 2\langle\mathbf r_h\cdot\mathbf r_e\rangle}, \qquad R_{eh} = \frac{\langle\mathbf r_h\cdot\mathbf r_e\rangle - \langle\mathbf r\rangle_h\cdot\langle\mathbf r\rangle_e}{\sigma_h\sigma_e}
$$

$$
\boldsymbol\rho^{(JJ)} - \boldsymbol\rho^{(II)} = \sum_k \lambda_k \mathbf v_k\mathbf v_k^{\mathsf T}, \qquad p_{\mathrm{prom}} = \sum_{\lambda_k > 0}\lambda_k
$$

```log
=> Exciton descriptors, cassette 0 <=

   Transition    d_h->e   sigma_h   sigma_e     d_exc      R_eh    p_prom
   ----------------------------------------------------------------------
   S0->S1        0.0136    2.9285    3.0405    4.3381   -0.0560    0.9614
   S0->S2        0.4275    2.9629    2.9633    5.2357   -0.5507    1.1739
   S0->S3        0.2237    2.9227    2.9951    4.9209   -0.3800    0.5982
   S0->S4        0.0076    2.7138    3.0074    4.1761   -0.0632    0.9364
   S0->S5             -         -         -         -         -    1.4134
[...]
   ----------------------------------------------------------------------
   Exciton descriptors (a0): d_h->e = hole-electron centroid distance
   (large = stronger charge-transfer character); sigma_h/e = hole/electron sizes;
   d_exc = rms electron-hole separation; R_eh = hole-electron correlation (-1..1);
   p_prom = number of electrons promoted I -> J.
   - = Omega < 0.05, descriptors not meaningful.
```

```log
=> Hole and electron populations, cassette 0 <=

   Hole h_A
   Atom            S0->S1      S0->S2      S0->S3      S0->S4      S1->S2      S1->S3      S1->S4      S2->S3      S2->S4      S3->S4
   ----------------------------------------------------------------------------------------------------------------------------------
   H1            0.335317    0.066128    0.134620    0.263500    0.201833    0.135100    0.232446    0.172293    0.080799    0.063976
   H2            0.162318    0.180778    0.216050    0.126727    0.147487    0.171082    0.063268    0.077069    0.071555    0.021491
   H3            0.162318    0.180778    0.216050    0.126727    0.147487    0.171082    0.063268    0.077069    0.071555    0.021491
   H4            0.335317    0.066128    0.134620    0.263500    0.201833    0.135100    0.232446    0.172293    0.080799    0.063976
   ----------------------------------------------------------------------------------------------------------------------------------
[...]
   Hole (h_A) and electron (e_A) populations of the transition per atom (Lowdin):
   origin and destination of the excited electron; each column sums to Omega of the NTO table.
```

Stored: `SSR EXCITON DESCRIPTORS K=<e>` (columns \[Ω, d<sub>h→e</sub>, σ<sub>h</sub>, σ<sub>e</sub>, d<sub>exc</sub>, R<sub>eh</sub>, p]), `SSR DIFFERENCE DENSITY EIGENVALUES K=<e>`, `SSR CT OMEGA ATOMS K=<e>`, `SSR EXCITON HOLE POPULATIONS K=<e>`, `SSR EXCITON PARTICLE POPULATIONS K=<e>`, `SSR NDO AO ROOT <I> -> ROOT <J> K=<e>`

Files: `<prefix>.ndo.<label I>-<label J>_cassette<e>.molden` (`MOLDEN_WRITE`, stored states above 0); cube `CUBEPROP_TASKS` `SSR_NDOS` (|λ| ≥ 0.1), `SSR_ATTACHMENT_DETACHMENT`

* `-` in the d<sub>h→e</sub> … R<sub>eh</sub> columns = Ω below 0.05 (or a zero transition density); p<sub>prom</sub> is printed for every pair.
* x<sub>a</sub>, r and r<sup>2</sup> are the AO dipole and second-moment integrals in the active MO basis; Ω<sub>AB</sub> is the Löwdin form, not the Mulliken-type Ω of [Plasser and Lischka, J. Chem. Theory Comput. 2012, 8, 2777](https://reksstudio.github.io/v2/manual/reference/index.md#plasser2012-charge-transfer). h<sub>A</sub>, e<sub>B</sub> are not normalized; each sums to Ω. NDOs are C<sub>a</sub> v<sub>k</sub>.
* `SSR CT OMEGA ATOMS`, the hole/particle populations and `SSR NDO AO` have no bare (cassette 0) alias.

Ref: [Plasser et al., J. Chem. Phys. 2014, 141, 024106](https://reksstudio.github.io/v2/manual/reference/index.md#plasser2014-exciton-formalism); [Bäppler et al., Phys. Rev. A 2014, 90, 052521](https://reksstudio.github.io/v2/manual/reference/index.md#bappler2014-exciton).

#### Fragment charge-transfer descriptors {#fragment-ct}

Charge moved between fragments, TheoDORE CT number (h/e split), participation ratios PR<sub>i</sub>, PR<sub>f</sub>, PR<sub>F</sub>, DEL, localization POS, and Löwdin hole and electron populations per fragment.

On: `SI_REKS_ANALYSIS` `EXCITON` (default: on)

For: a molecule of at least 2 fragments (`--` separators), no ghost fragments or atoms; pairs I \< J

Units: q<sub>moved</sub>, ΔN<sub>F</sub> in e; other columns dimensionless

$$
\tilde\Omega_{FG} = \Omega_{FG}/\Omega, \qquad r_F = \sum_G \tilde\Omega_{FG}, \qquad c_F = \sum_G \tilde\Omega_{GF}, \qquad \mathrm{CT} = \sum_{F\ne G}\tilde\Omega_{FG}
$$

$$
\mathrm{PR}_i = \Big(\sum_F r_F^2\Big)^{-1}, \qquad \mathrm{PR}_f = \Big(\sum_F c_F^2\Big)^{-1}, \qquad \mathrm{PR} = \tfrac12(\mathrm{PR}_i + \mathrm{PR}_f)
$$

$$
\mathrm{DEL} = \Big(\sum_F \big[\tfrac12(r_F + c_F)\big]^2\Big)^{-1}, \qquad \mathrm{POS} = \sum_F F\,\tfrac12(r_F + c_F)
$$

$$
\Delta N_F = N^{\mathrm L}_F(J) - N^{\mathrm L}_F(I), \qquad q_{\mathrm{moved}} = \sum_F \max(0, \Delta N_F)
$$

```log
=> Fragments: charge-transfer descriptors, cassette 0 <=

   Transition   q_moved [e]       h/e split      PR_i      PR_f      PR_F       DEL       POS
   ------------------------------------------------------------------------------------------
   S0->S1          0.001075        0.551060  1.999998  1.999993  1.999996  2.000000  1.500217
   S0->S2          0.026441        0.995306  1.981510  1.981746  1.981628  2.000000  1.500156
   S0->S3          0.026786        0.832052  1.994956  1.994939  1.994947  2.000000  1.500021
   S0->S4          0.001054        0.560031  1.999988  1.999998  1.999993  1.999994  1.500890
   S0->S5          0.000625               -         -         -         -         -         -
[...]
   dN_F = Lowdin population of F in (J - I). h/e split = TheoDORE CT number: fraction of
   the excitation with hole and electron on different fragments (both directions summed).
   PR_i, PR_f, PR_F, DEL = participation ratios for hole, electron, both, and exciton delocalization.
   POS = fragment where the excitation is localized (1 = F1, 2 = F2, ...).
   F1 = atoms 1-3, F2 = atoms 4-6.
```

```log
=> Fragments: hole and electron populations, cassette 0 <=

   Hole h_F
   Fragment        S0->S1      S0->S2      S0->S3      S0->S4      S1->S2      S1->S3      S1->S4      S2->S3      S2->S4      S3->S4
   ----------------------------------------------------------------------------------------------------------------------------------
   F1            0.497636    0.246906    0.350670    0.390227    0.349320    0.306181    0.295715    0.249362    0.152354    0.085467
   F2            0.497636    0.246906    0.350670    0.390227    0.349320    0.306181    0.295715    0.249362    0.152354    0.085467
   ----------------------------------------------------------------------------------------------------------------------------------
[...]
   h_F, e_F = hole and electron populations of the transition density (Lowdin).
```

Stored: `SSR CT FRAGMENT DESCRIPTORS K=<e>` (columns \[CT, PRi, PRf, PR, DEL, POS]), `SSR CT FRAGMENT HOLE POPULATIONS K=<e>`, `SSR CT FRAGMENT PARTICLE POPULATIONS K=<e>`

* q<sub>moved</sub> and Net ΔN<sub>F</sub> are printed, not stored; stored column CT is the printed h/e split. The fragment populations have no bare (cassette 0) alias.
* Ω<sub>FG</sub> sums the atom-pair Ω<sub>AB</sub> of [Exciton descriptors, hole and electron populations, natural difference orbitals](https://reksstudio.github.io/v2/manual/properties/index.md#exciton) over the fragments; F in POS is 1-based; N<sup>L</sup><sub>F</sub> is the Löwdin active population of fragment F. Printed headers: `h/e split` for CT, `PR_F` for PR. CT to POS print `-` when Ω \< 0.05; q<sub>moved</sub> is always printed.
* The fragment line (`F1 = atoms 1-3, F2 = atoms 4-6`) shows the partition used.

Ref: [Plasser and Lischka, J. Chem. Theory Comput. 2012, 8, 2777](https://reksstudio.github.io/v2/manual/reference/index.md#plasser2012-charge-transfer); [Plasser, J. Chem. Phys. 2020, 152, 084108](https://reksstudio.github.io/v2/manual/reference/index.md#plasser2020-theodore) (TheoDORE).

#### Fragment couplings (FCD, FED, FSD) {#fragment-couplings}

Diabatic coupling V<sub>F</sub> between fragments F and G: FCD from the charge difference D = q(F) − q(G) (Löwdin and Mulliken charges); FED from the excitation difference D = x(F) − x(G) between excited states (2S = 0); FSD from the spin difference D = s(F) − s(G) (Löwdin spin populations) between the states of a 2S > 0 cassette, in place of FED.

On: `SI_REKS_ANALYSIS` `FRAGMENT_COUPLINGS` (default: on)

For: a molecule of at least 2 fragments (`--` separators), no ghost fragments or atoms; FED needs at least 2 excited states; FSD every pair of states of a 2S > 0 cassette; printed: pairs with |D<sub>I</sub> − D<sub>J</sub>| ≥ 0.1

Units: E<sub>h</sub> (stored); E<sub>h</sub> and meV (printed)

$$
V_{mn} = \frac{(E_n - E_m)\,D_{mn}}{\sqrt{(D_{mm} - D_{nn})^2 + 4D_{mn}^2}}
$$

$$
\text{FCD:}\ D_{mn} = q^F_{mn} - q^G_{mn}, \quad q^F_{mm} = \sum_{A\in F} q_A(m), \quad q^F_{mn} = \sum_{A\in F} q_A(m\to n)
$$

$$
\text{FED:}\ D_{mn} = x^F_{mn} - x^G_{mn}, \quad x^F_{mn} = \tfrac12\,\mathrm{tr}\big[\mathbf T_m^{\mathsf T}(\mathbf G^F\mathbf T_n + \mathbf T_n\mathbf G^F)\big], \quad \mathbf T_m = \boldsymbol\rho^{(0m)}, \quad m, n \ge 1
$$

$$
\text{FSD:}\ D_{mn} = s^F_{mn} - s^G_{mn}, \quad s^F_{mm} = \sum_{A\in F} s^{\mathrm L}_A(m), \quad s^F_{mn} = \sum_{A\in F} \langle m|s^{\mathrm L}_A|n\rangle, \quad m, n \ge 0
$$

```log
=> Fragment couplings F1 - F2, cassette 0 <=

   FCD (fragment charge difference), all pairs of states
   Coupling     V_F Lowdin [Eh]    V_F Lowdin [meV]   V_F Mulliken [Eh]  V_F Mulliken [meV]
   -------------------------------------------------------------------------------------------
   S0/S10              0.011252             306.175            0.010470             284.900
   S0/S11             -0.162660           -4426.195           -0.158592           -4315.500
   S0/S14             -0.199057           -5416.626           -0.199331           -5424.086
   S0/S15             -0.006648            -180.911           -0.006714            -182.706
[...]
   -------------------------------------------------------------------------------------------
   68 of 120 pairs not printed (|D_I - D_J| < 0.1)

   FED (fragment excitation difference): no pair of excited states with |D_I - D_J| >= 0.1,
   D = x(F1) - x(F2) (none printed)

   Diabatic coupling V_F between F1 and F2: FCD = charge-transfer coupling, D = q(F1) - q(F2);
   FED = excitation-transfer coupling, D = x(F1) - x(F2). Larger |V_F| = stronger
   inter-fragment coupling. Printed: pairs with |D_I - D_J| >= 0.1.
   * = Lowdin and Mulliken V_F differ in sign or by more than a factor 2:
   the pair is ill-conditioned, V_F not usable.
```

```log
FSD (fragment spin difference), all pairs of states
Coupling     V_F Lowdin [Eh]    V_F Lowdin [meV]
------------------------------------------------
T1/T2               0.035361             962.219
T1/T3              -0.098132           -2670.302
T1/T4               0.045961            1250.653
T1/T5              -0.027480            -747.756

T2/T3               0.020817             566.460
T2/T4              -0.121179           -3297.443
T2/T5              -0.018786            -511.184

T3/T4               0.014038             381.993
T3/T5              -0.041908           -1140.371

T4/T5               0.045427            1236.121
------------------------------------------------
Diabatic coupling V_F between F1 and F2: FCD = charge-transfer coupling, D = q(F1) - q(F2);
FSD = spin energy-transfer coupling, D = s(F1) - s(F2), s = Lowdin spin population.
Larger |V_F| = stronger inter-fragment coupling. Printed: pairs with |D_I - D_J| >= 0.1.
```

Stored: `SSR FCD LOWDIN COUPLINGS <F> <G> K=<e>`, `SSR FCD MULLIKEN COUPLINGS <F> <G> K=<e>`, `SSR FED COUPLINGS <F> <G> K=<e>`, `SSR FSD COUPLINGS <F> <G> K=<e>` (with the sector prefix)

* States m \< n of one cassette, fragments F \< G; q<sub>A</sub> are the state and transition charges ([Atomic charges of the states (unrelaxed)](https://reksstudio.github.io/v2/manual/properties/index.md#atomic-charges), [Transition charges](https://reksstudio.github.io/v2/manual/properties/index.md#transition-charges)), G<sup>F</sup> the Löwdin projector on the atoms of F. V carries the sign of D<sub>mn</sub>, which follows the state phases; compare |V| with literature values. `*` marks a row where the Löwdin and Mulliken FCD values differ in sign or by more than a factor of 2.
* Computes the state and transition charges, and in a 2S > 0 cassette the Löwdin spins, without printing or storing them when those blocks are not listed. No bare alias.
* FSD: V is invariant to the scale of D, so the M<sub>S</sub> of s cancels. FED is not computed in a 2S > 0 cassette.

Ref: FCD: [Voityuk and Rösch, J. Chem. Phys. 2002, 117, 5607](https://reksstudio.github.io/v2/manual/reference/index.md#voityuk2002-fcd); FED: [Hsu et al., J. Phys. Chem. C 2008, 112, 1204](https://reksstudio.github.io/v2/manual/reference/index.md#hsu2008-fed); FSD: [You and Hsu, J. Chem. Phys. 2010, 133, 074105](https://reksstudio.github.io/v2/manual/reference/index.md#you2010-fsd).

#### Active one-particle density matrices {#active-rdm}

Active 1-RDMs of the adiabatic states (bra I) and diabatic 1-RDMs over the configurations.

On: `SI_REKS_ANALYSIS` `DENSITIES`; diabatic: `REKS_REPORT_LEVEL` ≥ 3 (default: on)

For: `SSR 1-RDM ACTIVE STATE=<k>`: k below the number of stored states

Units: electrons

Printed: no

$$
\rho^{(IJ)}_{pq} = \langle I|\hat E_{pq}|J\rangle
$$

Stored: `SSR 1-RDM ACTIVE STATE=<k> K=<e>`, `SSR 1-RDM ADIABATIC K=<e>` (row I·m + J, column p·N + q), `SSR 1-RDM DIABATIC SPARSE K=<e>`; 2S > 0: `SSR SPIN 1-RDM ACTIVE STATE=<k> K=<e>`, the active spin density of the M<sub>S</sub> = S component, same layout (with the sector prefix)

Files: cube files via `psi4.cubeprop(wfn)` with `CUBEPROP_TASKS` `SSR_DENSITIES` (`SSR_D_<label>_cassette<e>.cube`), `SSR_DIFFERENCE_DENSITIES` (`SSR_DD_<label>-<label 0>_cassette<e>.cube`), `SSR_TRANSITION_DENSITIES` (`SSR_TD_<label I>-<label J>_cassette<e>.cube`)

* `REKS_REPORT_LEVEL` 5 dumps ρ<sup>(k)</sup> and the diabatic blocks as `[DEBUG]` text.

### Spin energetics {#spin-energetics}

#### Spin-state gaps and Heisenberg J {#spin-state-energetics}

Lowest state of each multiplicity over all cassettes, the gap between manifolds whose 2S differ by 2, the coupling J and the SI lowering of each state.

On: SI cassettes on at least 2 spin manifolds

For: manifolds with a physical root (a manifold declared by an empty block has none); J and its variables: manifolds whose 2S differ by 2

Units: E<sub>h</sub> (stored J); printed E<sub>h</sub>, eV and cm<sup>-1</sup>

$$
\mathrm{Gap} = E(\text{high spin}) - E(\text{low spin}), \qquad J = -\frac{\mathrm{Gap}}{2S_{\mathrm{high}}} \quad \text{for} \quad \hat H = -2J\,\hat{\mathbf S}_A\cdot\hat{\mathbf S}_B
$$

$$
\mathrm{Lowering} = \min_i H_{ii} - E
$$

```log
==> Spin-state energetics <==

    Spins  Low-spin state   High-spin state    E(low spin) [Eh]   E(high spin) [Eh]    Gap [eV]        J [Eh]   J [cm^-1]  Lowering(lo) [eV]  Lowering(hi) [eV]
    -----------------------------------------------------------------------------------------------------------------------------------------------------------
    S/T    S0 (cassette 0)  T1 (cassette 1)    -78.300687507270    -78.279831032158       0.568     -0.010428    -2288.73              0.412              0.106
    -----------------------------------------------------------------------------------------------------------------------------------------------------------
    Spins = the two spin multiplicities compared (S/T = singlet/triplet). Low-/high-spin state = lowest state of each multiplicity over all cassettes.
```

Stored: `REKS HEISENBERG J`, `REKS HEISENBERG J SPINS` (rows \[2S_lo, 2S_hi])

* With three or more manifolds the block prints the ratio J(T/Q)/J(S/T); ratio 1 = one J for all spin pairs (Landé interval rule).
* J is a spin-coupling constant only if the two states have the same open-shell orbitals and similar SI lowering (`Lowering(lo)`, `Lowering(hi)`).

### Relaxed properties and EKT {#relaxed-properties-and-ekt}

#### Relaxed dipole, quadrupole and atomic charges {#relaxed-properties}

Dipole, quadrupole (full Cartesian tensor and traceless part) and Mulliken and Löwdin charges of the relaxed density P<sup>r</sup> of the CP-REKS (Z-vector) response of a state ([Unrelaxed and relaxed densities](https://reksstudio.github.io/v2/manual/concepts/index.md#densities)).

On: `SI_REKS_PROPERTY_FOR` lists the state (default: off)

For: `energy()` and `gradient()`; one CP-REKS solve shared with the gradient and NAC targets

Units: e a<sub>0</sub> (dipole; printed also D); e a<sub>0</sub><sup>2</sup> (quadrupole); e (charges)

```log
==> Relaxed properties, cassette 0 <==

 => Dipole moment (relaxed density matrix P^r), cassette 0 <=

    State     mu_x [e a0]  mu_y [e a0]  mu_z [e a0]  |mu| [e a0]     |mu| [D]
    -------------------------------------------------------------------------
    S1           0.000000     0.000000    -0.009032     0.009032     0.022956
    S2           0.000000     0.000000    -0.131130     0.131130     0.333300
    -------------------------------------------------------------------------
    Dipole moment of each state with orbital relaxation, mu = -dE/d(field).
```

```log
=> Quadrupole moment (relaxed density matrix P^r), cassette 0 <=

   State                     xx          xy          xz          yy          yz          zz
   ----------------------------------------------------------------------------------------
   S1    Q_ij         -9.043299    0.000000    0.000000  -10.695051    0.000000   -7.602565
         Q_tl_ij       0.070340    0.000000    0.000000   -1.581413    0.000000    1.511073
   S2    Q_ij         -8.978423    0.000000    0.000000  -11.703153    0.000000   -7.578590
         Q_tl_ij       0.441632    0.000000    0.000000   -2.283097    0.000000    1.841465
   ----------------------------------------------------------------------------------------
   Quadrupole moment of each state with orbital relaxation (e a0^2). Q_ij = full Cartesian
   tensor (nuclei + electrons); Q_tl = traceless part, Q_tl_ij = Q_ij - tr(Q)/3 delta_ij.
```

```log
=> Atomic charges (relaxed density matrix P^r), cassette 0 <=

   Mulliken
   Atom                S1          S2
   ----------------------------------
   C1           -0.362198   -0.396517
   H2            0.180277    0.189349
   H3            0.180277    0.189349
   C4           -0.360926   -0.372669
   H5            0.181285    0.195245
   H6            0.181285    0.195245
   ----------------------------------
```

Stored: `SSR ROOT <r> RELAXED DIPOLE CASSETTE <e>`, `SSR ROOT <r> RELAXED QUADRUPOLES CASSETTE <e>`, `SSR ROOT <r> RELAXED MULLIKEN CHARGES CASSETTE <e>`, `SSR ROOT <r> RELAXED LOWDIN CHARGES CASSETTE <e>`, `SSR ROOT <r> RELAXED DENSITY CASSETTE <e>` (AO); `CURRENT DIPOLE` = relaxed dipole of the followed root when it is listed, otherwise unset

Files: cube `CUBEPROP_TASKS` `SSR_DENSITIES`: `SSR_D_<label>_relaxed_cassette<e>.cube`

* The charges of each state sum to the molecular charge.
* The EKT block prints the count of the negative natural occupations of P<sup>r</sup> ([Unrelaxed and relaxed densities](https://reksstudio.github.io/v2/manual/concepts/index.md#densities), [EKT ionization energies, pole strengths and Dyson orbitals of SI states](https://reksstudio.github.io/v2/manual/properties/index.md#ekt-states)).

#### Bond indices of the relaxed density {#relaxed-bond-indices}

Mayer and Wiberg–Löwdin indices of P<sup>r</sup>.

* **On:** `SI_REKS_PROPERTY_FOR` lists the state (default: off)

* **Units:** dimensionless

* **Printed:** no

* **Stored:** `SSR ROOT <r> RELAXED MAYER INDICES CASSETTE <e>`, `SSR ROOT <r> RELAXED WIBERG LOWDIN INDICES CASSETTE <e>` (natom × natom)

#### EKT ionization energies, pole strengths and Dyson orbitals of SI states {#ekt-states}

Extended Koopmans' theorem on the relaxed energy-weighted density W and the relaxed density P<sup>r</sup> of a state: IP, ε, pole strength per spin orbital, Dyson orbitals; ref = lowest state of the first typed SI cassette (S0 for a singlet cassette).

On: `REKS_EKT` true and `SI_REKS_PROPERTY_FOR` lists the state (default: off)

For: natural orbitals of P<sup>r</sup> with occupation above `REKS_EKT_OCC_TOL` (10<sup>-6</sup>)

Units: E<sub>h</sub> (stored); eV (printed IP), E<sub>h</sub> (printed ε)

$$
\mathbf W\mathbf c_k = \varepsilon_k\,\mathbf P\mathbf c_k, \qquad \mathbf c_k^{\mathsf T}\mathbf P\mathbf c_k = 1, \qquad \mathrm{IP}_k = -\varepsilon_k
$$

$$
\mathbf d_k = \mathbf P\mathbf c_k, \qquad \phi^{\mathrm{Dyson}}_k = \mathbf d_k/\sqrt2, \qquad \mathrm{pole}_k = \tfrac12|\mathbf d_k|^2, \qquad \sum_k \mathrm{pole}_k = \tfrac12\sum_{a\,\mathrm{kept}} p_a
$$

$$
E_{\mathrm{cation}} - E_{\mathrm{ref}} = \mathrm{IP} + E_{\mathrm{state}} - E_{\mathrm{ref}}
$$

```log
==> Ionization energies (EKT) and Dyson orbitals, cassette 0 <==

    S1
    Peak    IP [eV]  E(cation)-E(S0) [eV]     eps [Eh]  Strength  occ(MO)   Dyson orbital (MO share [%])   Flag
    ------------------------------------------------------------------------------------------------------------------------------
       1      4.800                 8.046    -0.176391   0.67274  1.02815   10A(d)  94.1, 12A 5.4          active + off occ/2
       2      5.415                 8.660    -0.198985   0.48915  0.97185   8A(b)   99.8                   active
       3      9.552                12.798    -0.351039   0.84157  1.91972   7A(a)   99.3                   active + off occ/2
[...]
    ------------------------------------------------------------------------------------------------------------------------------
    10 rows = one per natural orbital of P^r with occupation > 1e-06; sum of strengths = 8.04658 (sum rule: half the sum of these occupations).
    P^r: 9 negative natural occupations, lowest -8.360e-02; strengths may leave 0..1 by as much.
[...]
    Strength = pole strength per spin orbital (0..1), ~ occ(MO)/2 for a Dyson orbital dominated by one MO;
    occ(MO) = unrelaxed occupation of the leading MO; Dyson orbital = MO shares d_p^2/Strength in %.
    Flag: active = ionization from an active MO, IP error of order 1 eV possible;
          off occ/2 = strength differs from occ(MO)/2;
          low-occ = ionization from a weakly occupied MO (occ(MO) < 0.1), not numbered;
          weak = strength < 0.05.
    W, P^r = relaxed energy-weighted density and relaxed density of the state.
    Absolute IPs carry a functional-dependent shift; only peak spacings are reliable.
```

Stored: `SSR EKT IONIZATION ENERGIES ROOT <r> CASSETTE <e>`, `SSR EKT POLE STRENGTHS ROOT <r> CASSETTE <e>`, `SSR EKT NATURAL OCCUPATIONS ROOT <r> CASSETTE <e>`, `SSR DYSON ORBITALS MO ROOT <r> CASSETTE <e>`, `SSR DYSON ORBITALS AO ROOT <r> CASSETTE <e>`

Files: `<prefix>.dyson.<label>_cassette<e>.molden` (`MOLDEN_WRITE`; Ene = −IP, Occup = pole strength)

* W is the symmetrized energy-weighted density of the state's response, P = P<sup>r</sup> in the MO basis. The problem is solved in the natural orbitals of P with occupations p<sub>a</sub> above `REKS_EKT_OCC_TOL`; smaller and negative ones are dropped.
* States of a 2S > 0 cassette: spin-averaged EKT (spin-summed P<sup>r</sup>); strength = α/β average of the pole strengths.
* One table per state at `REKS_REPORT_LEVEL` 2; level 3 adds the dropped eigenvalues and the Dyson MO block.
* Check `sum of strengths` against half the sum of the occupations, the count of negative natural occupations of P<sup>r</sup>, and the `Flag` column; strengths lie outside 0..1 by up to the lowest negative occupation.

Ref: [Filatov et al., J. Chem. Theory Comput. 2020, 16, 4489](https://reksstudio.github.io/v2/manual/reference/index.md#filatov2020-ekt).

#### EKT ionization energies of the SA-REKS ensemble {#ekt-ensemble}

Extended Koopmans' theorem on the generalized Fock matrix W and the fractional-occupation density D of the SA-REKS ensemble, in the block `==> Ionization energies (EKT) and Dyson orbitals, SA-REKS ensemble <==`.

* **On:** `REKS_EKT` true and no state listed in `SI_REKS_PROPERTY_FOR` (default: off)

* **For:** the SCF finalize of `energy()` and `gradient()`

* **Units:** E<sub>h</sub> (stored); eV (printed IP), E<sub>h</sub> (printed ε)

* **Stored:** `REKS EKT IONIZATION ENERGIES`, `REKS EKT POLE STRENGTHS`, `REKS EKT NATURAL OCCUPATIONS`, `REKS DYSON ORBITALS MO`, `REKS DYSON ORBITALS AO` (sector form `REKS SECTOR <s> EKT ...` when the SA ensemble lies in run sector s above 0)

* **Files:** `<prefix>.dyson.sa.molden` (`sector<s>_sa` for s above 0) (`MOLDEN_WRITE`)

- The equations of [EKT ionization energies, pole strengths and Dyson orbitals of SI states](https://reksstudio.github.io/v2/manual/properties/index.md#ekt-states) with W the symmetrized generalized Fock matrix and P = diag(2f), f = 1 (core), n/2 (active), 0 (virtual).
- The `State analysis` line of `REKS_EKT` then names the SA-REKS ensemble.

### Gradients, NAC, conical intersections {#gradients-nac-conical-intersections}

#### Nuclear gradients of SSR states {#state-gradient}

Gradient of an adiabatic SSR state from the CP-REKS response.

On: `SI_REKS_GRAD` names the root (default: off)

For: `gradient()`; roots of `SI_REKS_NAC` pairs join the targets without being listed

Units: E<sub>h</sub>/a<sub>0</sub>

$$
\mathbf g = \frac{\mathrm dE}{\mathrm d\mathbf R}, \qquad \text{force} = -\mathbf g
$$

```log
==> SI-SA-REKS analytic gradient: targets <==

    #   Target         Cassette
    ---------------------------
    1   gradient S1 *         0
    2   gradient S2           0
    3   NAC S1/S2             0
    ---------------------------
    * = followed state, returned by gradient().
```

```log
==> Gradient of S1, cassette 0 <==

    E = -78.181411797824 Eh

    Gradient dE/dR of S1 (cassette 0) [Eh/a0]
    Atom                  X                  Y                  Z
    -------------------------------------------------------------
    C1       0.000000000000     0.000000000000    -0.044084341931
    H2       0.007401694811     0.000000000000    -0.001232538604
    H3      -0.007401694811     0.000000000000    -0.001232538604
    C4      -0.000000000001    -0.000000000001     0.050609934847
    H5       0.013913877423     0.000000000000    -0.002030257854
    H6      -0.013913877423     0.000000000000    -0.002030257853
    -------------------------------------------------------------
    max |g| = 5.061e-02 Eh/a0   rms |g| = 1.669e-02 Eh/a0   |sum over atoms| = 1.4e-14 Eh/a0
```

```log
==> Returned gradient <==

-Total Gradient:
   Atom            X                  Y                   Z
  ------   -----------------  -----------------  -----------------
     1       -0.000000000000     0.000000000000    -0.044084341931
     2        0.007401694811    -0.000000000000    -0.001232538604
     3       -0.007401694811    -0.000000000000    -0.001232538604
[...]
    Returned gradient of S1 (cassette 0).
```

Stored: `SSR ROOT <r> GRADIENT CASSETTE <e>`; `CURRENT ENERGY` and `REKS TARGET STATE ENERGY` (followed root, set in `energy()` too); `CURRENT GRADIENT`, `SCF TOTAL GRADIENT` (followed root)

* The followed state (`*`) and `CURRENT ENERGY`: [`SI_REKS_GRAD`](https://reksstudio.github.io/v2/options/SI_REKS_GRAD.md).
* A root within `REKS_GRAD_DEGEN_TOL` (10<sup>-6</sup> E<sub>h</sub>) of another physical root of its cassette is computed with a warning. A meta-GGA functional raises an error: no analytic SI gradient.
* `E` of a `Gradient of` block equals the state's energy in `Adiabatic states`; `Returned gradient` names the `*` state and repeats its table.
* Converged response: `Remain` reaches 0 in the CP-REKS solver block ([`REKS_CPREKS_CONV`](https://reksstudio.github.io/v2/options/REKS_CPREKS_CONV.md)); each gradient prints `|sum over atoms|` near zero.

#### Nuclear gradient of the SA-REKS ensemble {#sa-gradient}

Gradient of E<sub>SA</sub>, returned by `gradient()` when no SI root is ordered; blocks `SA-REKS analytic gradient: targets`, `Gradient of the SA-REKS ensemble`, `Returned gradient`.

On: `gradient()` with `SI_REKS_GRAD` and `SI_REKS_NAC` not set

Units: E<sub>h</sub>/a<sub>0</sub>

$$
\mathbf g = \frac{\mathrm dE_{\mathrm{SA}}}{\mathrm d\mathbf R}
$$

Stored: `CURRENT GRADIENT`, `SCF TOTAL GRADIENT` (stock psi4 names)

* `CURRENT DIPOLE` is unset.

#### Nonadiabatic coupling vectors {#nac}

Derivative coupling between two adiabatic states of one cassette: a model part from the SI matrices and a residual part, the derivative of the configuration functions (orbital and FON response).

On: `SI_REKS_NAC` lists the pair or `ALL` (default: off)

For: `gradient()`

Units: 1/a<sub>0</sub>

$$
\mathbf d_{IJ} = \langle I|\tfrac{\mathrm d}{\mathrm d\mathbf R} J\rangle = \mathbf d_{\mathrm{model}} + \mathbf d_{\mathrm{residual}}, \qquad \mathbf d_{JI} = -\mathbf d_{IJ}
$$

$$
\mathbf d_{\mathrm{model}} = \frac{\mathbf c_I^{\mathsf T}\big(\mathrm d\mathbf H/\mathrm d\mathbf R - E_J\,\mathrm d\mathbf S/\mathrm d\mathbf R\big)\,\mathbf c_J}{E_J - E_I}
$$

$$
\textstyle\sum_A \mathbf d_{IJ}(A) = -\mathbf p_{IJ}
$$

```log
==> NAC S1/S2, cassette 0 <==

    E(S2) - E(S1) = 0.004755720161 Eh = 0.129 eV

    Nonadiabatic coupling d_12 = <S1|d/dR S2> [1/a0]
    Atom                  X                  Y                  Z
    -------------------------------------------------------------
    C1       0.000000000000   -15.149724827099    -0.000000000034
    H2       0.000000000001     5.247132242451     0.000000000000
    H3      -0.000000000001     5.247132242464     0.000000000000
    C4       0.000000000000    14.301163401467     0.000000000007
    H5       0.000000000004    -4.823770374412     0.000000000014
    H6      -0.000000000004    -4.823770374416     0.000000000014
    -------------------------------------------------------------
    |d_12| = 2.314e+01 1/a0   |E(S2) - E(S1)| |d_12| = 1.101e-01 Eh/a0
    |d_model| = 2.631e+01, |d_residual| = 3.172e+00 (1/a0)
    sum over atoms of d_12       = (-2.403e-15, -1.838e-03,  2.789e-13) 1/a0
    -p from the velocity moments = (-2.781e-15, -1.838e-03,  2.834e-13) 1/a0   consistent (deviation 1.4e-13)
```

Stored: `SSR NAC <I> <J> CASSETTE <e>`, `SSR NAC MODEL <I> <J> CASSETTE <e>`, `SSR NAC RESIDUAL <I> <J> CASSETTE <e>`; the root gradients `SSR ROOT <I> GRADIENT CASSETTE <e>`, `SSR ROOT <J> GRADIENT CASSETTE <e>`

* The sum rule is checked against −p from the velocity moments only when `SI_REKS_ANALYSIS` computes them (`E_TDM_VEL` or `M_TDM`); the line ends with `consistent` when the deviation is ≤ 10<sup>-6</sup>, otherwise it reads `deviation …` without `consistent`. Without the moments the legend prints `-p_12 requires SI_REKS_ANALYSIS E_TDM_VEL`.
* The header prints the gap of the pair ([Quasi-degenerate roots](https://reksstudio.github.io/v2/manual/diagnose/index.md#diag-quasi-degenerate)).

#### Conical-intersection topography {#ci-topography}

Topography of the intersection of the pair A, B (lower, upper root) from the pair gradients G and the NAC: g̃, h̃ rotated by φ to mutual orthogonality, tilt s along them, pitch δ<sub>gh</sub>, asymmetry Δ<sub>gh</sub>, relative tilt σ, tilt heading θ<sub>s</sub>, P (below 1 peaked, above 1 sloped), B (below 1 bifurcating, above 1 single path).

On: `SI_REKS_NAC` lists the pair (default: off)

For: every NAC pair (both root gradients are computed); table when E<sub>B</sub> − E<sub>A</sub> ≤ `REKS_CI_TOPOGRAPHY_GAP` (default 5·10<sup>-3</sup> E<sub>h</sub>), one line otherwise; variables at any gap

Units: E<sub>h</sub>/a<sub>0</sub> (|g̃|, |h̃|, s<sub>x</sub>, s<sub>y</sub>, δ<sub>gh</sub>); rad (φ, θ<sub>s</sub>); dimensionless (Δ<sub>gh</sub>, σ, P, B); E<sub>h</sub> (E<sub>B</sub> − E<sub>A</sub>)

$$
\mathbf g = \tfrac12(\mathbf G_B - \mathbf G_A), \qquad \mathbf h = (E_B - E_A)\,\mathbf d_{AB}, \qquad \mathbf s = \tfrac12(\mathbf G_A + \mathbf G_B)
$$

$$
\phi = \tfrac12\,\mathrm{atan2}(2\,\mathbf g\cdot\mathbf h,\ \mathbf g\cdot\mathbf g - \mathbf h\cdot\mathbf h), \qquad \tilde{\mathbf g} = \cos\phi\,\mathbf g + \sin\phi\,\mathbf h, \qquad \tilde{\mathbf h} = -\sin\phi\,\mathbf g + \cos\phi\,\mathbf h
$$

$$
s_x = \frac{\mathbf s\cdot\tilde{\mathbf g}}{|\tilde{\mathbf g}|}, \qquad s_y = \frac{\mathbf s\cdot\tilde{\mathbf h}}{|\tilde{\mathbf h}|}
$$

$$
\delta_{gh} = \sqrt{\tfrac12\big(|\tilde{\mathbf g}|^2 + |\tilde{\mathbf h}|^2\big)}, \qquad \Delta_{gh} = \frac{|\tilde{\mathbf g}|^2 - |\tilde{\mathbf h}|^2}{|\tilde{\mathbf g}|^2 + |\tilde{\mathbf h}|^2}
$$

$$
\sigma = \frac{\sqrt{s_x^2 + s_y^2}}{\delta_{gh}}, \qquad \theta_s = \mathrm{atan2}(|s_y|, |s_x|)
$$

$$
P = \frac{\sigma^2}{1 - \Delta_{gh}^2}\big(1 - \Delta_{gh}\cos 2\theta_s\big)
$$

$$
B =\Big(\frac{\sigma}{2\Delta_{gh}}\Big)^{2/3}\Big[\big((1+\Delta_{gh})\cos^2\theta_s\big)^{1/3} + \big((1-\Delta_{gh})\sin^2\theta_s\big)^{1/3}\Big]
$$

```log
==> Conical-intersection (CI) topography S1/S2 (cassette 0), E(S2) - E(S1) = 4.756e-03 Eh <==

    Quantity                 Unit             Value
    ----------------------------------------------------------------------
    |g~|                     Eh/a0     1.100659e-01
    |h~|                     Eh/a0     2.322846e-02
[...]
    P                                  1.926520e+00    sloped (P > 1)
    B                                  1.611657e-01    bifurcating (B < 1)
    ----------------------------------------------------------------------
[...]
    P < 1 peaked, > 1 sloped;  B < 1 bifurcating, > 1 single path.
```

```log
CI topography T1/T2: not printed, E(T2) - E(T1) = 1.493 eV > 0.136 eV (5 mEh, REKS_CI_TOPOGRAPHY_GAP).
```

Stored: `SSR CI TOPOGRAPHY <I> <J> CASSETTE <e>` (1 × 12: |g̃|, |h̃|, φ, s<sub>x</sub>, s<sub>y</sub>, δ<sub>gh</sub>, Δ<sub>gh</sub>, σ, θ<sub>s</sub>, P, B, E<sub>B</sub> − E<sub>A</sub>), `SSR CI G <I> <J> CASSETTE <e>`, `SSR CI H <I> <J> CASSETTE <e>`

* A is the lower root; d<sub>AB</sub> is the full NAC (model + residual). The branch of φ gives |g̃| ≥ |h̃|, so Δ<sub>gh</sub> ∈ \[0, 1] and θ<sub>s</sub> ∈ \[0, π/2]. P is infinite when |h̃| vanishes, B when Δ<sub>gh</sub> vanishes.

Ref: [Fdez. Galván et al., J. Chem. Theory Comput. 2016, 12, 3636](https://reksstudio.github.io/v2/manual/reference/index.md#galvan2016-sa-casscf-nac) and [Fdez. Galván et al., Phys. Chem. Chem. Phys. 2022, 24, 1638](https://reksstudio.github.io/v2/manual/reference/index.md#galvan2022-ci-topography).
