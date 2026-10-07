---
title: Properties
---

## 13\. Properties

Unrelaxed properties (`SI_REKS_ANALYSIS`) use the densities ρ<sup>(IJ)</sup> = ⟨I|Ê<sub>pq</sub>|J⟩ of the SSR states in the SA-REKS orbitals; relaxed properties use the relaxed density P<sup>r</sup> of the states named in `SI_REKS_PROPERTY_FOR` (§2). ρ<sup>(IJ)</sup> is spin-summed and active (MO coefficients C<sub>a</sub>); core density D<sup>c</sup>.

### Rules for all entries

-   Tables are printed at `REKS_REPORT_LEVEL` ≥ 2 unless an entry states otherwise.
-   A switch named as an `SI_REKS_ANALYSIS` block is on by default (§si_reks_analysis). "SI present" = at least one SI cassette with configurations, the default when `SI_REKS_CONFIGS` is absent; an all-empty `SI_REKS_CONFIGS` turns it off.
-   Transition quantities are computed for pairs I < J within one cassette and printed when at least 2 states are printed; per-state and pair tables are bounded by `SI_REKS_PRINT_STATES`.
-   The per-state and per-pair `SSR … K=e` arrays exist only for the states stored by `SI_REKS_STORE_STATES`; `SSR ENERGIES K=e` holds every physical root, and the `SSR ROOT r … CASSETTE e`, `SSR NAC …`, `SSR CI …` and EKT arrays are stored whenever their block runs.
-   The `=>` sub-block headers of a cassette carry `, cassette e`; with a single SI cassette that suffix is absent. The `==>` headers (`State interaction: cassette e`, `Relaxed properties`, EKT, `Gradient of`, `NAC`, CI topography) always name the cassette.
-   The sign of a phase-odd quantity (transition dipole, velocity and magnetic moments, transition multipoles and charges, NAC vectors and their sum over atoms, g̃ and h̃ of the CI topography, FCD/FED couplings, NTO and NDO orbitals) is arbitrary between runs, also of the same input (H₄: S0→S1 `mu_z` = 2.846913 in one run, −2.846913 in another). Moduli, f, |d|, R<sub>len</sub> and R<sub>vel</sub> agree. Within one run all quantities share one phase, so their relations hold (Σ<sub>A</sub> d<sub>A</sub> = −p<sub>IJ</sub>; φ and s<sub>y</sub> of the CI topography from the same d).

### Variable names

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

### Summary

@@property-table@@

### Print order {#print-order}

Blocks of a `gradient()` run with every block on, at `REKS_REPORT_LEVEL` 2; an `energy()` run stops after `Summary`.

@@print-order@@

### SCF

@@properties scf@@

### SI states

@@properties si@@

### Unrelaxed state and transition properties

@@properties unrelaxed@@

### Relaxed properties and EKT

@@properties relaxed@@

### Gradients, NAC, conical intersections

@@properties gradient@@

### Spin energetics

@@properties spin@@
