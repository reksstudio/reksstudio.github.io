# `REKS_REPORT_LEVEL`

HTML: <https://reksstudio.github.io/v2/manual/properties/#reks_report_level>

Chapter: [15. Reading the Output](https://reksstudio.github.io/v2/manual/properties/index.md#reading-output)

Psi4 bd0fb43ef, 2026-10-15: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

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
| 2 (default) | Banner; `REKS Studio setup` with `Pairing schemes`, `SA pool`, `SI pools`, `State analysis`, `Gradient request`; `REKS Geminal Delocalization` ([`REKS_GEMINAL_DELOC`](https://reksstudio.github.io/v2/options/REKS_GEMINAL_DELOC.md)); orbital energies with the FONs in `Post-Iterations`; `SA-REKS energy decomposition`; SI setup, `FON optimization after the SCF`, `SI Davidson solver` (Davidson cassettes, [SI Davidson solver](https://reksstudio.github.io/v2/manual/properties/index.md#si-davidson)), per cassette `Hamiltonian`, `Adiabatic states` and the property blocks; `State summary`; `Spin-state energetics`; CP-REKS solver (Psi4 `PRINT` ≥ 1); `Relaxed properties`; EKT; gradient targets, `Gradient of …`, `NAC …`, CI topography | 2148 |
| 3 | `XC evaluation … per string … per key` in the setup; Hamiltonian counters (`coupled`/`zero`, `Terms`, `Reuse`, overlap terms) and the `Off-diagonal channel` table; EKT `dropped eigenvalues` and the Dyson MO matrix; `[REKS-GRAD]` `C_eff` per microstate and Psi4 per-channel gradient terms; `==> References <==` | 2549 |
| 4–5 | 4: `REKS Memory Footprint`, `Run diagnostics`, per-iteration solver traces (`[GVB-FON]`, `[ORB-DIIS]`, `[TRAH]`, `[LEVEL_SHIFT]`, …), `CP-REKS Z-Vector Profile`; per cassette `Microstate energies (sorted by energy)`, `Fractional Occupation Numbers (active orbitals)`, `Lagrangian eps_pq and ERI (pq\|st)`, `Pre-diagonalization SI Hamiltonian` and `SI Overlap S` in blocks of 18 columns (up to 8 active orbitals); the Davidson trace ([SI Davidson solver](https://reksstudio.github.io/v2/manual/properties/index.md#si-davidson)). 5: per SCF iteration the active orbitals, Fock asymmetry, orbital update, coupling Fock matrix, SA energy, weighting factors C<sub>L</sub> and the microstate energies | 4125; 8183 |

From level 3 the configuration-axis arrays `SSR COEFFICIENTS K=e`, `SSR HAMILTONIAN K=e`, `SSR OVERLAP SPARSE K=e` and `SSR 1-RDM DIABATIC SPARSE K=e` are stored (the Hamiltonian and overlap up to 8 active orbitals); level 4 prints the Hamiltonian and overlap. Levels 4–5 grow with the active space and the cassette dimension.
