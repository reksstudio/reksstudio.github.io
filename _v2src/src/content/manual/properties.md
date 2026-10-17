---
title: Output and properties
---

## 15\. Reading the Output {#reading-output}

### Print order {#print-order}

Blocks of a `gradient()` run with every block on, at `REKS_REPORT_LEVEL` 2; an `energy()` run ends before `SI-SA-REKS analytic gradient: targets`.

@@print-order@@

### Run report {#run-report}

At the default `REKS_REPORT_LEVEL` 2 (§reks_report_level) the REKS part of the output opens with the banner and the setup block:

@@fragment banner@@

@@fragment setup@@

Check the core count and `Active MO indices` (§check-solution). The blocks that follow: §print-order. Output fragments are verbatim from runs of this build: C₂H₄ REKS(4,4), BH&HLYP/6-31G(d), cassettes 2S = 0 and 2, for most blocks; linear H₄ REKS(4,4) for the narrower tables.

### Report level {#report-level}

@@options report@@

Blocks added at each level; each level prints everything of the levels below. Output lines: one `gradient()` run of H₄ REKS(4,4) with two cassettes, NAC, relaxed properties, EKT and Molden files.

| Level | Adds | Lines |
| --- | --- | --- |
| 1 | `Pre-Iterations` with the `REKS orbitals` line; `Iterations` and the convergence line; `Post-Iterations` (grid electrons, final energy); `Energetics`; `Summary` / `Summary of the energy phase` (`MOLDEN_WRITE`); `Returned gradient` with Psi4's `-Total Gradient` | 670 |
| 2 (default) | Banner; `REKS Studio setup` with `Pairing schemes`, `SA pool`, `SI pools`, `State analysis`, `Gradient request`; `REKS Geminal Delocalization` (§reks_geminal_deloc); orbital energies with the FONs in `Post-Iterations`; `SA-REKS energy decomposition`; SI setup, `FON optimization after the SCF`, `SI Davidson solver` (Davidson cassettes, §si-davidson), per cassette `SI Hamiltonian`, `Adiabatic states` and the property blocks; `State summary`; `Spin-state energetics`; CP-REKS solver (Psi4 `PRINT` ≥ 1); `Relaxed properties`; EKT; gradient targets, `Gradient of …`, `NAC …`, CI topography | 2144 |
| 3 | `XC evaluation … per string … per key` in the setup; Hamiltonian counters (`coupled`/`zero`, `Terms`, `Reuse`, overlap terms) and the `Off-diagonal channel` table; under `Adiabatic states` the overlap S_ij / sqrt(S_ii S_jj) of configuration pairs listed in one row; EKT `dropped eigenvalues` and the Dyson MO matrix; `[REKS-GRAD]` `C_eff` per microstate and Psi4 per-channel gradient terms; `==> References <==` | 2549 |
| 4–5 | 4: `REKS Memory Footprint`, `Run diagnostics`, per-iteration solver traces (`[GVB-FON]`, `[ORB-DIIS]`, `[TRAH]`, `[LEVEL_SHIFT]`, …), `CP-REKS Z-Vector Profile`; per cassette `Microstate energies (sorted by energy)`, `Fractional Occupation Numbers (active orbitals)`, `Lagrangian eps_pq and ERI (pq\|st)`, `Pre-diagonalization SI Hamiltonian` and `SI Overlap S` in blocks of 18 columns (up to 8 active orbitals); the Davidson trace (§si-davidson). 5: per SCF iteration the active orbitals, Fock asymmetry, orbital update, coupling Fock matrix, SA energy, weighting factors C<sub>L</sub> and the microstate energies | 4125; 8183 |

From level 3 the configuration-axis arrays `SSR COEFFICIENTS K=e`, `SSR HAMILTONIAN K=e`, `SSR OVERLAP SPARSE K=e` and `SSR 1-RDM DIABATIC SPARSE K=e` are stored (the Hamiltonian and overlap up to 8 active orbitals); level 4 prints the Hamiltonian and overlap. Levels 4–5 grow with the active space and the cassette dimension.

### Variable names {#variable-names}

All variables are set on the wavefunction and copied to the global (core) variables at the end of `energy()` and `gradient()`.

| Pattern | Holds |
| --- | --- |
| `<base> K=<e>` | per-cassette SI arrays; for cassette 0 most of them also under the bare `<base>` |
| `REKS SECTOR <s> <base> K=<e>` | a cassette in run sector s ≥ 1; a leading `REKS ` of the base is dropped (`REKS SECTOR 1 SSR ENERGIES K=1`, `REKS SECTOR 1 C PATH B K=1`) |
| `SSR ROOT <r> … CASSETTE <e>` | response, gradient and relaxed arrays of root r; never sector-prefixed |
| `SSR EKT … ROOT <r> CASSETTE <e>`, `SSR DYSON ORBITALS … ROOT <r> CASSETTE <e>` | EKT arrays; never sector-prefixed |
| `SSR NAC [MODEL\|RESIDUAL] <I> <J> CASSETTE <e>`, `SSR CI … <I> <J> CASSETTE <e>` | NAC and CI arrays; never sector-prefixed |
| `SSR … K=<e>` (scalars) | never sector-prefixed |

### Files {#files}

| File | Content |
| --- | --- |
| `<prefix>.molden` | SA-REKS orbitals; `Occup` of the active MOs = FONs of set n |
| `<prefix>.no.<label>_cassette<e>.molden` | natural orbitals of a state |
| `<prefix>.dyson.<label>_cassette<e>.molden` | Dyson orbitals of a state |
| `<prefix>.nto.<label I>-<label J>_cassette<e>.molden` | natural transition orbitals of a pair |
| `<prefix>.ndo.<label I>-<label J>_cassette<e>.molden` | natural difference orbitals of a pair |

State labels such as `S1`, `T2`; `<prefix>` = `WRITER_FILE_LABEL` when set, else the output file name without extension followed by `.<molecule name>` for a named molecule. With `MOLDEN_WRITE` the run ends with a summary of the files written (`Summary` in `energy()`, `Summary of the energy phase` in `gradient()`, at every report level):

@@fragment summary@@

## 16\. Properties {#properties}

Unrelaxed properties (`SI_REKS_ANALYSIS`) use the densities ρ<sup>(IJ)</sup> = ⟨I|Ê<sub>pq</sub>|J⟩ of the SSR states in the SA-REKS orbitals; relaxed properties use the relaxed density P<sup>r</sup> of the states named in `SI_REKS_PROPERTY_FOR` (§densities). ρ<sup>(IJ)</sup> is spin-summed and active (MO coefficients C<sub>a</sub>); core density D<sup>c</sup>.

### Rules for all entries

-   Tables are printed at `REKS_REPORT_LEVEL` ≥ 2 unless an entry states otherwise.
-   A switch named as an `SI_REKS_ANALYSIS` block is on by default (§si_reks_analysis). "SI present" = at least one SI cassette with configurations, the default when `SI_REKS_CONFIGS` is absent; an all-empty `SI_REKS_CONFIGS` turns it off.
-   Transition quantities are computed for pairs I < J within one cassette and printed when at least 2 states are printed; per-state and pair tables are bounded by `SI_REKS_PRINT_STATES`.
-   The per-state and per-pair `SSR … K=e` arrays exist only for the states stored by `SI_REKS_STORE_STATES`; `SSR ENERGIES K=e` holds every physical root (on the Davidson path the computed roots, §si-solver), and the `SSR ROOT r … CASSETTE e`, `SSR NAC …`, `SSR CI …` and EKT arrays are stored whenever their block runs.
-   The `=>` sub-block headers of a cassette carry `, cassette e`; with a single SI cassette that suffix is absent. The `==>` headers (`State interaction: cassette e`, `Relaxed properties`, EKT of the states, `Gradient of`, `NAC`, CI topography) always name the cassette.
-   A property header names in brackets the switches of its block: the `SI_REKS_ANALYSIS` names of the block that are on, all of them when none is on (`[MULLIKEN_CHARGES, LOWDIN_CHARGES]`), or the option (`[SI_REKS_PROPERTY_FOR]`, `[REKS_EKT]`).
-   The sign of a phase-odd quantity (transition dipole, velocity and magnetic moments, transition multipoles and charges, NAC vectors and their sum over atoms, g̃ and h̃ of the CI topography, FCD/FED couplings, NTO particles) is arbitrary between runs, also of the same input (H₄: S0→S1 `mu_z` = −2.943014 in one run, 2.943014 in another). Moduli, f, |d|, R<sub>len</sub> and R<sub>vel</sub> agree. Within one run all quantities share one phase, so their relations hold (Σ<sub>A</sub> d<sub>A</sub> = −p<sub>IJ</sub>; φ and s<sub>y</sub> of the CI topography from the same d).

### Summary

@@property-table@@

### SCF {#scf}

@@properties scf@@

### SI states {#si-states}

@@properties si@@

### Unrelaxed state and transition properties {#unrelaxed-state-and-transition-properties}

@@properties unrelaxed@@

### Spin energetics {#spin-energetics}

@@properties spin@@

### Relaxed properties and EKT {#relaxed-properties-and-ekt}

@@properties relaxed@@

### Gradients, NAC, conical intersections {#gradients-nac-conical-intersections}

@@properties gradient@@
