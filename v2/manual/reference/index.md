# Reference — REKS Studio Manual

HTML: <https://reksstudio.github.io/v2/manual/reference/>

Psi4 bd0fb43ef, 2026-10-15: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

[Manual](https://reksstudio.github.io/v2/manual/index.md) › Reference

# Reference

Chapters 18–19 of the REKS Studio user manual

## 18. Option Table {#option-table}

`GUESS_ACTIVE_WINDOW` is a general SCF option; the others are REKS options. Seven options have an `REKS_`-prefixed alias, given under the option name; setting both names is an error.

### Active space {#active-space}

| Option | Default | Meaning | Used in |
| - | - | - | - |
| [`REKS`](https://reksstudio.github.io/v2/options/REKS.md) `[N, M]` | — (required) | Active space `[N, M]`: N active electrons in M active orbitals; selects the catalog. | §1 Minimal input · Explicit SA pool and SI cassettes §2 Active space, core, virtual §3 Start REKS §4 Lone pair: REKS(2,3) §5 One gradient() call · Geometry optimization · Surface hopping §6 `REKS_GEMINAL_WIDTHS` §9 Input patterns §10 `SI_REKS_GRAD` §11 Restart mechanism · `GUESS_ACTIVE_WINDOW` |

### Catalog {#catalog}

| Option | Default | Meaning | Used in |
| - | - | - | - |
| [`REKS_GEMINAL_WIDTHS`](https://reksstudio.github.io/v2/options/REKS_GEMINAL_WIDTHS.md) array | `[]` (all 2) | Width (orbital count) of each geminal, N/2 integers summing to M; selects the catalog `reks{N}{M}_u{w0}{w1}…`. | §1 §2 Pairing scheme §4 Geminal of width w · Lone pair: REKS(2,3) §6 |

### SA pool {#sa-pool}

| Option | Default | Meaning | Used in |
| - | - | - | - |
| [`SA_REKS_CONFIGS`](https://reksstudio.github.io/v2/options/SA_REKS_CONFIGS.md) array · alias `REKS_SA_CONFIGS` | catalog `sa_default` pool on 2S = 0 | SA-REKS configuration pool: one block (flat list) or one block per spin manifold (nested list) of names, indices or bulk tokens. | §1 Minimal input · Explicit SA pool and SI cassettes §3 Higher spin states §4 Lone pair: REKS(2,3) §9 `SA_REKS_2SPIN` |
| [`SA_REKS_WEIGHTS`](https://reksstudio.github.io/v2/options/SA_REKS_WEIGHTS.md) array · alias `REKS_SA_WEIGHTS` | uniform `1/n` | Weights of the SA pool entries, configurations first, then the `sa_reks_extra` determinants; non-negative, summing to 1. | §1 Minimal input · Explicit SA pool and SI cassettes §2 SA-REKS ensemble and weights §8 `SA_REKS_CONFIGS` · `SA_REKS_EXTRA` §16 SCF |
| [`SA_REKS_EXTRA`](https://reksstudio.github.io/v2/options/SA_REKS_EXTRA.md) array of arrays · alias `REKS_SA_EXTRA` | none | Extra Slater determinants of the SA ensemble, as occupation vectors; each has its own weight, carries no FON and enters no SI cassette. | §2 SA-REKS ensemble and weights · Spin manifold and run sector §3 Higher spin states §4 States: SI-SA-REKS(2,3) §5 Geometry optimization · Surface hopping §8 `SA_REKS_CONFIGS` · `SA_REKS_WEIGHTS` §9 Input patterns |

### SI cassettes {#si-cassettes}

| Option | Default | Meaning | Used in |
| - | - | - | - |
| [`SI_REKS_CONFIGS`](https://reksstudio.github.io/v2/options/SI_REKS_CONFIGS.md) array · alias `REKS_SI_CONFIGS` | one full-block cassette, lowest manifold | SI-SA-REKS cassettes: the configuration sets whose secular equations give the states, in groups per spin manifold. | §1 Minimal input · Explicit SA pool and SI cassettes §2 SI cassette §3 Higher spin states §4 Lone pair: REKS(2,3) · Gradients · States: SI-SA-REKS(2,3) §9 `SI_REKS_2SPIN` · Input patterns · Cassette order §10 §16 |
| [`SI_REKS_PRINT_STATES`](https://reksstudio.github.io/v2/options/SI_REKS_PRINT_STATES.md) int | `5` | States per cassette whose per-state and pair tables are printed; 0 = none, -1 = all. | §2 SI eigensolver §8 `SI_REKS_SOLVER` §16 SI states §17 |
| [`SI_REKS_STORE_STATES`](https://reksstudio.github.io/v2/options/SI_REKS_STORE_STATES.md) array of int · alias `REKS_SI_STORE_STATES` | all; the first 10 if `M ≥ 6` and > 10 configurations | States per cassette whose properties are stored on the wavefunction (arrays, Molden and cube files); 0 = none, -1 = all. | §2 SI eigensolver §3 Higher spin states §8 `SI_REKS_CONFIGS` · `SI_REKS_PRINT_STATES` · `SI_REKS_SOLVER` §9 `SI_REKS_2SPIN` · Cassette order §15 Files §16 SI states §17 |
| [`SI_REKS_OVERLAP_CUTOFF`](https://reksstudio.github.io/v2/options/SI_REKS_OVERLAP_CUTOFF.md) double | `1e-10` | Overlap eigenvalues <code>s ≤ cutoff · s<sub>max</sub></code> of the SI basis are treated as null space and dropped. | §2 SI Hamiltonian and overlap §17 |
| [`SI_REKS_SOLVER`](https://reksstudio.github.io/v2/options/SI_REKS_SOLVER.md) `AUTO`\|`DIRECT`\|`DAVIDSON` | `AUTO` | Eigensolver of each SI cassette: LAPACK on every root, or Davidson on the lowest roots. | §2 SI eigensolver §16 SI states |
| [`SI_REKS_DAVIDSON_R_CONVERGENCE`](https://reksstudio.github.io/v2/options/SI_REKS_DAVIDSON_R_CONVERGENCE.md) double | `1e-12` | Residual norm in E_h each Davidson root of the SI problem converges to. | |

### Spin manifolds {#spin-manifolds}

| Option | Default | Meaning | Used in |
| - | - | - | - |
| [`SA_REKS_2SPIN`](https://reksstudio.github.io/v2/options/SA_REKS_2SPIN.md) array · alias `REKS_SA_2SPIN` | ladder, lowest manifold | Spin manifold 2S of each SA block, one integer per block. | §3 Higher spin states §6 `REKS` §8 `SA_REKS_CONFIGS` · `SA_REKS_WEIGHTS` §9 |
| [`SI_REKS_2SPIN`](https://reksstudio.github.io/v2/options/SI_REKS_2SPIN.md) array · alias `REKS_SI_2SPIN` | ladder, lowest manifold | 2S of each SI group; more than one entry requires the 3-level `si_reks_configs` form. | §1 §3 Higher spin states §4 States: SI-SA-REKS(2,3) §5 Geometry optimization · Surface hopping §6 `REKS` §8 `SI_REKS_CONFIGS` · `SI_REKS_STORE_STATES` §9 `SA_REKS_2SPIN` · Input patterns · Cassette order §10 `SI_REKS_PROPERTY_FOR` · `SI_REKS_GRAD` · `SI_REKS_NAC` §16 SI states |

### State properties {#state-properties}

| Option | Default | Meaning | Used in |
| - | - | - | - |
| [`SI_REKS_ANALYSIS`](https://reksstudio.github.io/v2/options/SI_REKS_ANALYSIS.md) array | all blocks except multipoles > 2 | State-property blocks of the SI states to compute, print and store (moments, charges, bond indices, NTO, exciton, …). | §1 §2 Unrelaxed and relaxed densities §10 State properties §15 Files §16 Unrelaxed state and transition properties · Gradients, NAC, conical intersections |
| [`SI_REKS_ANALYSIS_CHANGE_MIN`](https://reksstudio.github.io/v2/options/SI_REKS_ANALYSIS_CHANGE_MIN.md) double | `0.1` | Smallest state-to-state change of a charge or bond index that is printed. | §16 Unrelaxed state and transition properties |
| [`SI_REKS_PROPERTY_FOR`](https://reksstudio.github.io/v2/options/SI_REKS_PROPERTY_FOR.md) array of arrays | `[]` | States, per cassette, whose dipole, quadrupole, charges and bond indices are evaluated with the relaxed (CP-REKS) density. | §2 SI eigensolver · Unrelaxed and relaxed densities §8 `SI_REKS_STORE_STATES` · `SI_REKS_SOLVER` §9 `SI_REKS_2SPIN` · Cassette order §10 State properties · `SI_REKS_ANALYSIS` · `REKS_EKT` · `SI_REKS_GRAD` · `REKS_CPREKS_CONV` §16 Relaxed properties and EKT |
| [`REKS_EKT`](https://reksstudio.github.io/v2/options/REKS_EKT.md) bool | `false` | Enables EKT: ionization energies, pole strengths and Dyson orbitals of the `si_reks_property_for` states or of the SA ensemble. | §2 Orbitals, orbital energies, SCF convergence §10 State properties · `SI_REKS_ANALYSIS` §16 Relaxed properties and EKT |
| [`REKS_EKT_OCC_TOL`](https://reksstudio.github.io/v2/options/REKS_EKT_OCC_TOL.md) double | `1e-6` | Cutoff on the density eigenvalues: those at or below it are dropped from the EKT metric. | §16 Relaxed properties and EKT |

### Gradients and couplings {#gradients-and-couplings}

| Option | Default | Meaning | Used in |
| - | - | - | - |
| [`SI_REKS_GRAD`](https://reksstudio.github.io/v2/options/SI_REKS_GRAD.md) array of arrays | `[]` (SA ensemble) | Roots whose analytic gradients are computed, per cassette; the first listed root is followed (`CURRENT ENERGY`, returned gradient). | §1 Explicit SA pool and SI cassettes · Worked inputs §2 SI eigensolver §4 Gradients §5 One gradient() call · Gradients and couplings against finite differences · Geometry optimization · Surface hopping §8 `SI_REKS_STORE_STATES` · `SI_REKS_SOLVER` §9 `SI_REKS_2SPIN` · Cassette order §10 `SI_REKS_NAC` · `REKS_CPREKS_CONV` §16 SCF · Gradients, NAC, conical intersections §17 |
| [`SI_REKS_NAC`](https://reksstudio.github.io/v2/options/SI_REKS_NAC.md) array | `[]` | Root pairs `[I, J]` per cassette whose nonadiabatic couplings and conical-intersection topography are computed. | §1 Explicit SA pool and SI cassettes §2 SI eigensolver §5 One gradient() call · Gradients and couplings against finite differences · Surface hopping §8 `SI_REKS_STORE_STATES` §9 `SI_REKS_2SPIN` · Cassette order §10 `SI_REKS_GRAD` · `REKS_CPREKS_CONV` §16 Gradients, NAC, conical intersections |
| [`REKS_CPREKS_CONV`](https://reksstudio.github.io/v2/options/REKS_CPREKS_CONV.md) double | `1e-9` | Residual threshold of the CP-REKS (Z-vector) solver. `reks_cpreks_maxiter` (200) bounds its rounds. | §5 One gradient() call · Surface hopping §16 Gradients, NAC, conical intersections |
| [`REKS_CPREKS_MAXITER`](https://reksstudio.github.io/v2/options/REKS_CPREKS_MAXITER.md) int | `200` | Maximum number of rounds of the CP-REKS (Z-vector) solver; exceeding it stops the run with the residual reached. | §10 `REKS_CPREKS_CONV` |
| [`REKS_GRAD_DEGEN_TOL`](https://reksstudio.github.io/v2/options/REKS_GRAD_DEGEN_TOL.md) double | `1e-6` | Gap below which a requested root is flagged as quasi-degenerate. | §2 SI eigensolver §16 Gradients, NAC, conical intersections |
| [`REKS_CI_TOPOGRAPHY_GAP`](https://reksstudio.github.io/v2/options/REKS_CI_TOPOGRAPHY_GAP.md) double | `5e-3` | Largest gap at which the topography table of a NAC pair is printed. | §16 Gradients, NAC, conical intersections §17 |

### Guess {#guess}

| Option | Default | Meaning | Used in |
| - | - | - | - |
| [`GUESS_ACTIVE_WINDOW`](https://reksstudio.github.io/v2/options/GUESS_ACTIVE_WINDOW.md) array | `[]` (off) | MOs of the read guess placed in the active columns, one token per active orbital: 0-based index, `HOMO-k` or `LUMO+k`. | §1 §3 Start REKS §4 Geminal of width w §5 Geometry optimization §11 §17 |

### FONs {#fons}

| Option | Default | Meaning | Used in |
| - | - | - | - |
| [`REKS_FON_INTERP_DELTA`](https://reksstudio.github.io/v2/options/REKS_FON_INTERP_DELTA.md) double | `0.4` | Parameter δ of the factor f(n_p n_q) that multiplies the coupling term of each geminal in the REKS energy. | §2 Coupling Δ and factor f §4 Lone pair: REKS(2,3) · States: SI-SA-REKS(2,3) |
| [`REKS_<L>_FON`](https://reksstudio.github.io/v2/options/REKS_N_FON.md) double | `-1.0` each | Lower bound on the free FON n_p of every geminal of one FON generation (`reks_n_fon`, `reks_m_fon`, …); negative disables it. | §6 FON sets §12 §17 |

### FON micro-solver {#fon-micro-solver}

[FON micro-solver](https://reksstudio.github.io/v2/manual/run-control/index.md#fon-micro)

| Option | Default | Meaning | Used in |
| - | - | - | - |
| `REKS_FON_MICRO_NR_MAXITER` int | `20` | Newton iteration cap per geminal block per SCF iteration. | |
| `REKS_FON_MICRO_LS_MAXITER` int | `20` | Armijo backtracking (step halving) cap inside one Newton step. | |
| `REKS_FON_MICRO_CONVERGENCE` double | `1e-12` | Step-norm convergence threshold. | |
| `REKS_FON_MICRO_MIN_EIGENVALUE` double | `1e-8` | Floor on the absolute eigenvalues of the reduced Hessian; negative curvature is flipped. | |
| `REKS_FON_MICRO_BOUND_MARGIN` double | `1e-8` | Margin m of the SCF FON box \[ℓ, 2 − m] kept by the FON micro-solver and the TRAH step, in (0, 1); SI box: `SI_REKS_FON_BOUND_MARGIN`. | §12 `REKS_<L>_FON` |
| `REKS_FON_MICRO_BOUNDARY_SKIN` double | `0.05` | A generation-0 multi-start seed landing within this distance of 0 or 2 counts as boundary-trapped and loses to an interior minimum. | |
| `SI_REKS_FON_BOUND_MARGIN` double | `1e-8` | Margin m of the box \[m, 2 − m] of the SI-only FONs ([SI-only FONs](https://reksstudio.github.io/v2/manual/concepts/index.md#si-only-fons)) and of their CP-REKS at-bound test, in \[0, 1). | §2 SI-only FONs |

### Convergence engines {#convergence-engines}

| Option | Default | Meaning | Used in |
| - | - | - | - |
| [`REKS_USE_TRAH`](https://reksstudio.github.io/v2/options/REKS_USE_TRAH.md) bool | `false` | Trust-region Newton (TRAH) step on the active–active rotations and FONs: warm-up before GVB-DIIS, or the whole SCF without it. | §4 States: SI-SA-REKS(2,3) §12 §13 The three engines · `REKS_DIIS_ACTIVATION` · `REKS_DIIS_CFM_ACTIVATION_GORB` §14 `REKS_GEMINAL_DELOC` §17 |
| [`REKS_GVB_DIIS`](https://reksstudio.github.io/v2/options/REKS_GVB_DIIS.md) bool | `true` | GVB-DIIS accelerator of the orbital optimization, in the formulation set by `reks_diis_formulation`. | §4 States: SI-SA-REKS(2,3) §13 The three engines §14 `REKS_GEMINAL_DELOC` §16 SCF |
| [`REKS_DIIS_FORMULATION`](https://reksstudio.github.io/v2/options/REKS_DIIS_FORMULATION.md) `CFM`\|`ORBITAL` | `ORBITAL` | GVB-DIIS formulation: extrapolation of the orbital-rotation generators κ, or of the composite multishell Fock matrix (`CFM`). | §13 `REKS_GVB_DIIS` · `REKS_GVB_LEVEL_SHIFT` §17 |
| [`REKS_GVB_DIIS_START`](https://reksstudio.github.io/v2/options/REKS_GVB_DIIS_START.md) int | `3` | First SCF iteration of GVB-DIIS; earlier iterations run the level-shifted burn-in or TRAH. | §13 The three engines · `REKS_DIIS_ACTIVATION` · `REKS_DIIS_CFM_ACTIVATION_GORB` |
| [`REKS_DIIS_ACTIVATION`](https://reksstudio.github.io/v2/options/REKS_DIIS_ACTIVATION.md) `ITERATION`\|`GRADIENT` | `ITERATION` | Criterion for `ORBITAL` GVB-DIIS to take over from the TRAH warm-up: the iteration count alone, or also the orbital gradient. | §13 The three engines · `REKS_DIIS_CFM_ACTIVATION_GORB` |
| [`REKS_DIIS_CFM_ACTIVATION_GORB`](https://reksstudio.github.io/v2/options/REKS_DIIS_CFM_ACTIVATION_GORB.md) double | `1e-3` | Orbital-gradient norm ‖g_orb‖\_F below which GVB-DIIS takes over from the TRAH warm-up. | §13 The three engines · `REKS_DIIS_ACTIVATION` |
| [`REKS_GVB_ROBUST_VERDICT`](https://reksstudio.github.io/v2/options/REKS_GVB_ROBUST_VERDICT.md) bool | `true` | Enables the post-hoc verdict that rewinds extrapolated GVB-DIIS steps whose orbital gradient grows. | |
| [`REKS_GVB_LEVEL_SHIFT`](https://reksstudio.github.io/v2/options/REKS_GVB_LEVEL_SHIFT.md) double | `1.0` (CFM only) | Shell gap of the multishell Fock matrix in the `CFM` formulation of GVB-DIIS. | |

### Level shift {#level-shift}

| Option | Default | Meaning | Used in |
| - | - | - | - |
| [`LEVEL_SHIFT_ADAPT`](https://reksstudio.github.io/v2/options/LEVEL_SHIFT_ADAPT.md) bool | `true` | Adaptive base of the staircase level shift: decays while the orbitals are stable, grows back up to `level_shift` on swaps or strong mixing. | |

### GVB-DIIS conditioning chain (expert) {#gvb-diis-conditioning-chain-expert}

| Option | Default | Meaning | Used in |
| - | - | - | - |
| `REKS_DIIS_COND_ANGLE_FILTER` | `true` | Enables the angle filter with stale-drop that prunes near-dependent and stale GVB-DIIS error vectors. | §13 |
| `REKS_DIIS_COND_ANGLE_CUTOFF` | `0.1` | Angle-filter cutoff c_s: smallest sine of the angle to the kept differences for a GVB-DIIS error vector to stay. | §13 |
| `REKS_DIIS_COND_STALE_DELTA` | `1e-4` | Stale-drop threshold δ: GVB-DIIS error vectors with norm above the newest norm / √δ are dropped; 0 switches it off. | §13 |
| `REKS_DIIS_COND_KAPPA_BYPASS` | `1e9` | Condition number of the GVB-DIIS error matrix above which the SVD-conditioned solve replaces the plain bordered solve. | |
| `REKS_DIIS_COND_SVD_RCOND` | `1e-8` | Relative singular-value cutoff of the SVD-conditioned GVB-DIIS solve. | |
| `REKS_DIIS_COND_COEFF_NORM_MAX` | `1e3` | Bound c_max on the GVB-DIIS coefficient norm \|c\|², also used by the angle filter to drop near-duplicate error vectors. | §13 |
| `REKS_DIIS_COND_TIKHONOV` | `true` | Enables the Tikhonov ridge on the SVD-conditioned GVB-DIIS solve. | |
| `REKS_DIIS_COND_TIKHONOV_SCALE` | `0.0` | Ridge magnitude of the Tikhonov-regularized GVB-DIIS SVD solve; 0 applies no ridge. | |

### GVB-DIIS monitors / verdicts (expert) {#gvb-diis-monitors-verdicts-expert}

| Option | Default | Meaning | Used in |
| - | - | - | - |
| `REKS_DIIS_MON_VERDICT_RHO` | `1.5` | Verdict trip ratio: a GVB-DIIS step is rewound when ‖g_orb‖ exceeds this multiple of its maximum over the recent iterates. | §13 `REKS_GVB_ROBUST_VERDICT` |
| `REKS_DIIS_MON_VERDICT_STREAK` | `3` | Consecutive verdict rewinds without a new best iterate before GVB-DIIS restarts from the best iterate. | |
| `REKS_DIIS_MON_SUPPRESS_WINDOW` | `3` | Iterations after a GVB-DIIS rewind, restart or switch during which the verdict is suspended. | |
| `REKS_DIIS_MON_NONMONOTONE_M` | `3` | Depth M of the nonmonotone references of the GVB-DIIS monitors: max ‖g_orb‖ and min E_SA over the last M iterates. | |
| `REKS_GVB_GATE_STREAK` | `2` | Consecutive iterations meeting the energy and gradient thresholds before GVB-DIIS reports convergence. | §13 The three engines |
| `REKS_DIIS_GUARD_LATCH_GRACE` | `3` | Consecutive iterations without the basin signal after which the GVB-DIIS outcome guard clears its basin latch. | |
| `REKS_DIIS_GUARD_LANDING_TOLERANCE` | `1e-12` | Relative tolerance at which a GVB-DIIS rewind landing counts as a repeat (best E_SA and best ‖g_orb‖ reproduced). | |
| `REKS_DIIS_MON_PROGRESS_EPS` | `1e-2` | Sufficient-decrease fraction ε: a GVB-DIIS iterate counts as progress only if ‖g_orb‖ ≤ (1 − ε) × best ‖g_orb‖. | |
| `REKS_DIIS_FON_BRANCH_CUTOFF` | `0.1` | FON displacement from the best iterate at or above which the GVB-DIIS guard reads an energy drop as a basin transition. | |
| `REKS_DIIS_RESTART_BUDGET` | `2` | GVB-DIIS monitor restarts without sufficient improvement allowed before the monitors stop and rewind once to the best iterate. | |
| `REKS_DIIS_MON_CYCLE` | `true` | Enables the GVB-DIIS no-progress / step-cap monitor, which restarts from the best iterate. | |
| `REKS_DIIS_MON_CYCLE_WINDOW` | `12` | Iterations without a new best ‖g_orb‖ before the GVB-DIIS cycle monitor restarts from the best iterate. | |
| `REKS_DIIS_MON_CYCLE_CAP_STREAK` | `3` | Consecutive `ORBITAL` step-cap hits before the GVB-DIIS cycle monitor restarts. | |
| `REKS_DIIS_ORB_BASE_MAP_DAMP` | `0.6` | Damping α of the `ORBITAL` GVB-DIIS Newton step from the re-anchored frame after a restart. | |

### Geminal delocalization {#geminal-delocalization}

| Option | Default | Meaning | Used in |
| - | - | - | - |
| [`REKS_GEMINAL_DELOC`](https://reksstudio.github.io/v2/options/REKS_GEMINAL_DELOC.md) bool | `false` | After the SCF, rotates generation-0 geminal pairs to their IPR minimum and reconverges; kept if it converges to a lower E_SA. | §14 §15 `REKS_REPORT_LEVEL` §17 |

### Reporting {#reporting}

| Option | Default | Meaning | Used in |
| - | - | - | - |
| [`REKS_REPORT_LEVEL`](https://reksstudio.github.io/v2/options/REKS_REPORT_LEVEL.md) int (1–5) | `2` | Verbosity of the REKS output, 1–5: from the SCF trace and energetics up to per-iteration solver traces and intermediate matrices. | §2 SI Hamiltonian and overlap · Coupling damping below 100 % exact exchange §10 `REKS_CPREKS_CONV` §12 `REKS_<L>_FON` §13 §15 Print order · Run report §16 SCF · SI states · Unrelaxed state and transition properties · Relaxed properties and EKT §17 |

## 19. References {#references}

Method:

* Every REKS run: Filatov, M.; Shaik, S. A spin-restricted ensemble-referenced Kohn–Sham method and its application to diradicaloid situations. *Chem. Phys. Lett.* **1999**, *304*, 429–437. [doi:10.1016/S0009-2614(99)00336-X](https://doi.org/10.1016/S0009-2614\(99\)00336-X)
* Related REKS work: Filatov, M.; Shaik, S. Artificial symmetry breaking in radicals is avoided by the use of the Ensemble-Referenced Kohn–Sham (REKS) method. *Chem. Phys. Lett.* **2000**, *332*, 409–419. [doi:10.1016/S0009-2614(00)01257-4](https://doi.org/10.1016/S0009-2614\(00\)01257-4)
* Every REKS run: Filatov, M. Spin-restricted ensemble-referenced Kohn–Sham method: basic principles and application to strongly correlated ground and excited states of molecules. *WIREs Comput. Mol. Sci.* **2015**, *5*, 146–167. [doi:10.1002/wcms.1209](https://doi.org/10.1002/wcms.1209)
* Every REKS run (interpolating factor f): Moreira, I. de P. R.; Costa, R.; Filatov, M.; Illas, F. Restricted ensemble-referenced Kohn–Sham versus broken symmetry approaches in density functional theory: Magnetic coupling in Cu binuclear complexes. *J. Chem. Theory Comput.* **2007**, *3*, 764–774. [doi:10.1021/ct7000057](https://doi.org/10.1021/ct7000057)
* SA-REKS ensemble: Gross, E. K. U.; Oliveira, L. N.; Kohn, W. Rayleigh-Ritz variational principle for ensembles of fractionally occupied states. *Phys. Rev. A* **1988**, *37*, 2805–2808. [doi:10.1103/PhysRevA.37.2805](https://doi.org/10.1103/PhysRevA.37.2805)
* SA-REKS ensemble: Gross, E. K. U.; Oliveira, L. N.; Kohn, W. Density-functional theory for ensembles of fractionally occupied states. I. Basic formalism. *Phys. Rev. A* **1988**, *37*, 2809–2820. [doi:10.1103/PhysRevA.37.2809](https://doi.org/10.1103/PhysRevA.37.2809)
* SA-REKS ensemble: Theophilou, A. K. The energy density functional formalism for excited states. *J. Phys. C: Solid State Phys.* **1979**, *12*, 5419–5430. [doi:10.1088/0022-3719/12/24/013](https://doi.org/10.1088/0022-3719/12/24/013)
* SA-REKS ensemble: Filatov, M. Ensemble DFT approach to excited states of strongly correlated molecular systems. In *Density-Functional Methods for Excited States*; Ferré, N.; Filatov, M.; Huix-Rotllant, M., Eds.; Top. Curr. Chem., Vol. 368; Springer International Publishing: Cham, 2016; pp 97–124. [doi:10.1007/128_2015_630](https://doi.org/10.1007/128_2015_630)
* SA pool with more than one excited configuration; SSR (SI-SA-REKS): Filatov, M.; Huix-Rotllant, M.; Burghardt, I. Ensemble density functional theory method correctly describes bond dissociation, excited state electron transfer, and double excitations. *J. Chem. Phys.* **2015**, *142*, 184104. [doi:10.1063/1.4919773](https://doi.org/10.1063/1.4919773)
* REKS(4,4); (6,6) active space, or SI on a sector 2S > 0 (REKS(4,4) form generalized): Filatov, M.; Martínez, T. J.; Kim, K. S. Using the GVB Ansatz to develop ensemble DFT method for describing multiple strongly correlated electron pairs. *Phys. Chem. Chem. Phys.* **2016**, *18*, 21040–21050. [doi:10.1039/C6CP00236F](https://doi.org/10.1039/C6CP00236F)
* REKS(4,4); (6,6) active space, or SI on a sector 2S > 0 (REKS(4,4) form generalized): Filatov, M.; Liu, F.; Kim, K. S.; Martínez, T. J. Self-consistent implementation of ensemble density functional theory method for multiple strongly correlated electron pairs. *J. Chem. Phys.* **2016**, *145*, 244104. [doi:10.1063/1.4972174](https://doi.org/10.1063/1.4972174)
* SSR with four or more active orbitals; Coupling damping (Eq. (B50)): Filatov, M.; Martínez, T. J.; Kim, K. S. Description of ground and excited electronic states by ensemble density functional method with extended active space. *J. Chem. Phys.* **2017**, *147*, 064104. [doi:10.1063/1.4996873](https://doi.org/10.1063/1.4996873)
* CP-REKS, gradients and relaxed properties: Filatov, M.; Liu, F.; Martínez, T. J. Analytical derivatives of the individual state energies in ensemble density functional theory method. I. General formalism. *J. Chem. Phys.* **2017**, *147*, 034113. [doi:10.1063/1.4994542](https://doi.org/10.1063/1.4994542)
* CP-REKS, gradients and relaxed properties; Nonadiabatic coupling vectors (model part, Eq. (47)): Liu, F.; Filatov, M.; Martínez, T. J. Analytical derivatives of the individual state energies in ensemble density functional theory. II. Implementation on graphical processing units (GPUs). *J. Chem. Phys.* **2021**, *154*, 104108. [doi:10.1063/5.0041389](https://doi.org/10.1063/5.0041389)
* Nonadiabatic coupling vectors: Filatov, M.; Min, S. K.; Kim, K. S. Direct nonadiabatic dynamics by mixed quantum-classical formalism connected with ensemble density functional theory method: Application to trans-penta-2,4-dieniminium cation. *J. Chem. Theory Comput.* **2018**, *14*, 4499–4512. [doi:10.1021/acs.jctc.8b00217](https://doi.org/10.1021/acs.jctc.8b00217)
* Related REKS work: Filatov, M.; Min, S. K.; Kim, K. S. Non-adiabatic dynamics of ring opening in cyclohexa-1,3-diene described by an ensemble density-functional theory method. *Mol. Phys.* **2019**, *117*, 1128–1141. [doi:10.1080/00268976.2018.1519200](https://doi.org/10.1080/00268976.2018.1519200)
* Coupling damping (constants; one set for all spins): Grimme, S.; Waletzke, M. A combination of Kohn–Sham density functional theory and multi-reference configuration interaction methods. *J. Chem. Phys.* **1999**, *111*, 5645–5655. [doi:10.1063/1.479866](https://doi.org/10.1063/1.479866)
* Extended Koopmans' theorem (ionization energies): Filatov, M.; Lee, S.; Choi, C. H. Computation of molecular ionization energies using an ensemble density functional theory method. *J. Chem. Theory Comput.* **2020**, *16*, 4489–4504. [doi:10.1021/acs.jctc.0c00218](https://doi.org/10.1021/acs.jctc.0c00218)
* Related REKS work: Filatov, M.; Lee, S.; Nakata, H.; Choi, C. H. Computation of molecular electron affinities using an ensemble density functional theory method. *J. Phys. Chem. A* **2020**, *124*, 7795–7804. [doi:10.1021/acs.jpca.0c06976](https://doi.org/10.1021/acs.jpca.0c06976)
* Related REKS work: Filatov, M.; Lee, S.; Choi, C. H. Description of sudden polarization in the excited electronic states with an ensemble density functional theory method. *J. Chem. Theory Comput.* **2021**, *17*, 5123–5139. [doi:10.1021/acs.jctc.1c00479](https://doi.org/10.1021/acs.jctc.1c00479)
* SSR (SI-SA-REKS): Filatov, M. Assessment of density functional methods for obtaining geometries at conical intersections in organic molecules. *J. Chem. Theory Comput.* **2013**, *9*, 4526–4541. [doi:10.1021/ct400598b](https://doi.org/10.1021/ct400598b)
* SSR (SI-SA-REKS): Huix-Rotllant, M.; Filatov, M.; Gozem, S.; Schapiro, I.; Olivucci, M.; Ferré, N. Assessment of density functional theory for describing the correlation effects on the ground and excited state potential energy surfaces of a retinal chromophore model. *J. Chem. Theory Comput.* **2013**, *9*, 3917–3932. [doi:10.1021/ct4003465](https://doi.org/10.1021/ct4003465)
* Reference excitation energies (QUEST): Véril, M.; Scemama, A.; Caffarel, M.; Lipparini, F.; Boggio-Pasqua, M.; Jacquemin, D.; Loos, P.-F. QUESTDB: A database of highly accurate excitation energies for the electronic structure community. *WIREs Comput. Mol. Sci.* **2021**, *11*, e1517. [doi:10.1002/wcms.1517](https://doi.org/10.1002/wcms.1517)
* Every REKS run (catalog generator and engine); (6,6) active space, or SI on a sector 2S > 0 (primary source): Komarov, K.; Filatov, M.; Min, S. K. Automated Symbolic Derivation Enables Scalable Ensemble DFT for Strongly Correlated Molecules and Materials. *ChemRxiv* **2026**. [doi:10.26434/chemrxiv.15008475/v1](https://doi.org/10.26434/chemrxiv.15008475/v1)
* BH\&HLYP functional (half-and-half mixing; the reference Libxc gives for HYB_GGA_XC_BHANDHLYP): Becke, A. D. A new mixing of Hartree–Fock and local density-functional theories. *J. Chem. Phys.* **1993**, *98*, 1372–1377. [doi:10.1063/1.464304](https://doi.org/10.1063/1.464304)
* BH\&HLYP functional (B88 exchange): Becke, A. D. Density-functional exchange-energy approximation with correct asymptotic behavior. *Phys. Rev. A* **1988**, *38*, 3098–3100. [doi:10.1103/PhysRevA.38.3098](https://doi.org/10.1103/PhysRevA.38.3098)
* BH\&HLYP functional (LYP correlation): Lee, C.; Yang, W.; Parr, R. G. Development of the Colle-Salvetti correlation-energy formula into a functional of the electron density. *Phys. Rev. B* **1988**, *37*, 785–789. [doi:10.1103/PhysRevB.37.785](https://doi.org/10.1103/PhysRevB.37.785)

Properties:

* Mayer bond index: Mayer, I. Charge, bond order and valence in the ab initio SCF theory. *Chem. Phys. Lett.* **1983**, *97*, 270–274. [doi:10.1016/0009-2614(83)80005-0](https://doi.org/10.1016/0009-2614\(83\)80005-0)
* Odd and unpaired electrons (N_D, N_U, N_U,nl) (N_D): Takatsuka, K.; Fueno, T.; Yamaguchi, K. Distribution of odd electrons in ground-state molecules. *Theor. Chim. Acta* **1978**, *48*, 175–183. [doi:10.1007/BF00549017](https://doi.org/10.1007/BF00549017)
* Odd and unpaired electrons (N_D, N_U, N_U,nl) (N_U, N_U,nl): Head-Gordon, M. Characterizing unpaired electrons from the one-particle density matrix. *Chem. Phys. Lett.* **2003**, *372*, 508–511. [doi:10.1016/S0009-2614(03)00422-6](https://doi.org/10.1016/S0009-2614\(03\)00422-6)
* Natural transition orbitals: Martin, R. L. Natural transition orbitals. *J. Chem. Phys.* **2003**, *118*, 4775–4777. [doi:10.1063/1.1558471](https://doi.org/10.1063/1.1558471)
* Exciton descriptors: Plasser, F.; Wormit, M.; Dreuw, A. New tools for the systematic analysis and visualization of electronic excitations. I. Formalism. *J. Chem. Phys.* **2014**, *141*, 024106. [doi:10.1063/1.4885819](https://doi.org/10.1063/1.4885819)
* Exciton descriptors: Bäppler, S. A.; Plasser, F.; Wormit, M.; Dreuw, A. Exciton analysis of many-body wave functions: Bridging the gap between the quasiparticle and molecular orbital pictures. *Phys. Rev. A* **2014**, *90*, 052521. [doi:10.1103/PhysRevA.90.052521](https://doi.org/10.1103/PhysRevA.90.052521)
* Fragment charge-transfer descriptors: Plasser, F.; Lischka, H. Analysis of excitonic and charge transfer interactions from quantum chemical calculations. *J. Chem. Theory Comput.* **2012**, *8*, 2777–2789. [doi:10.1021/ct300307c](https://doi.org/10.1021/ct300307c)
* Fragment charge-transfer descriptors: Plasser, F. TheoDORE: A toolbox for a detailed and automated analysis of electronic excited state computations. *J. Chem. Phys.* **2020**, *152*, 084108. [doi:10.1063/1.5143076](https://doi.org/10.1063/1.5143076)
* Fragment charge difference: Voityuk, A. A.; Rösch, N. Fragment charge difference method for estimating donor–acceptor electronic coupling: Application to DNA π-stacks. *J. Chem. Phys.* **2002**, *117*, 5607–5616. [doi:10.1063/1.1502255](https://doi.org/10.1063/1.1502255)
* Fragment excitation difference: Hsu, C.-P.; You, Z.-Q.; Chen, H.-C. Characterization of the short-range couplings in excitation energy transfer. *J. Phys. Chem. C* **2008**, *112*, 1204–1212. [doi:10.1021/jp076512i](https://doi.org/10.1021/jp076512i)
* Fragment spin difference: You, Z.-Q.; Hsu, C.-P. The fragment spin difference scheme for triplet-triplet energy transfer coupling. *J. Chem. Phys.* **2010**, *133*, 074105. [doi:10.1063/1.3467882](https://doi.org/10.1063/1.3467882)
* Conical-intersection topography: Fdez. Galván, I.; Delcey, M. G.; Pedersen, T. B.; Aquilante, F.; Lindh, R. Analytical state-average complete-active-space self-consistent field nonadiabatic coupling vectors: Implementation with density-fitted two-electron integrals and application to conical intersections. *J. Chem. Theory Comput.* **2016**, *12*, 3636–3653. [doi:10.1021/acs.jctc.6b00384](https://doi.org/10.1021/acs.jctc.6b00384)
* Conical-intersection topography: Fdez. Galván, I.; Brakestad, A.; Vacher, M. Role of conical intersection seam topography in the chemiexcitation of 1,2-dioxetanes. *Phys. Chem. Chem. Phys.* **2022**, *24*, 1638–1653. [doi:10.1039/D1CP05028A](https://doi.org/10.1039/D1CP05028A)
* Chirgwin-Coulson weights: Chirgwin, B. H.; Coulson, C. A. The electronic structure of conjugated systems. VI. *Proc. R. Soc. London, Ser. A* **1950**, *201*, 196–209. [doi:10.1098/rspa.1950.0053](https://doi.org/10.1098/rspa.1950.0053)
* Wiberg bond index: Wiberg, K. B. Application of the Pople-Santry-Segal CNDO method to the cyclopropylcarbinyl and cyclobutyl cation and to bicyclobutane. *Tetrahedron* **1968**, *24*, 1083–1096. [doi:10.1016/0040-4020(68)88057-3](https://doi.org/10.1016/0040-4020\(68\)88057-3)
* Extended Koopmans' theorem (ionization energies): Smith, D. W.; Day, O. W. Extension of Koopmans' theorem. I. Derivation. *J. Chem. Phys.* **1975**, *62*, 113–114. [doi:10.1063/1.430253](https://doi.org/10.1063/1.430253)
* Extended Koopmans' theorem (ionization energies): Morrell, M. M.; Parr, R. G.; Levy, M. Calculation of ionization potentials from density matrices and natural functions, and the long-range behavior of natural orbitals and electron density. *J. Chem. Phys.* **1975**, *62*, 549–554. [doi:10.1063/1.430509](https://doi.org/10.1063/1.430509)

Solvers:

* GVB-DIIS solvers (multishell Fock extrapolation): Muller, R. P.; Langlois, J.-M.; Ringnalda, M. N.; Friesner, R. A.; Goddard, W. A. A generalized direct inversion in the iterative subspace approach for generalized valence bond wave functions. *J. Chem. Phys.* **1994**, *100*, 1226–1235. [doi:10.1063/1.466653](https://doi.org/10.1063/1.466653)
* GVB-DIIS solvers (orbital-rotation DIIS): Ionova, I. V.; Carter, E. A. Orbital-based direct inversion in the iterative subspace for the generalized valence bond method. *J. Chem. Phys.* **1995**, *102*, 1251–1256. [doi:10.1063/1.468912](https://doi.org/10.1063/1.468912)
* GVB-DIIS solvers (r-GDIIS extension): Sethio, D.; Azzopardi, E.; Fdez. Galván, I.; Lindh, R. A story of three levels of sophistication in SCF/KS-DFT orbital optimization procedures. *J. Phys. Chem. A* **2024**, *128*, 2472–2486. [doi:10.1021/acs.jpca.3c07647](https://doi.org/10.1021/acs.jpca.3c07647)
* Trust-region solver (TRAH) (Ch. 4 and 11): Nocedal, J.; Wright, S. J. *Numerical Optimization*, 2nd ed.; Springer: New York, 2006. ISBN 978-0-387-30303-1.
* Trust-region solver (TRAH): Baker, J. An algorithm for the location of transition states. *J. Comput. Chem.* **1986**, *7*, 385–395. [doi:10.1002/jcc.540070402](https://doi.org/10.1002/jcc.540070402)
* Trust-region solver (TRAH): Cerjan, C. J.; Miller, W. H. On finding transition states. *J. Chem. Phys.* **1981**, *75*, 2800–2806. [doi:10.1063/1.442352](https://doi.org/10.1063/1.442352)
* Trust-region solver (TRAH): Helmich-Paris, B. A trust-region augmented Hessian implementation for restricted and unrestricted Hartree–Fock and Kohn–Sham methods. *J. Chem. Phys.* **2021**, *154*, 164104. [doi:10.1063/5.0040798](https://doi.org/10.1063/5.0040798)
* Trust-region solver (TRAH) (state-averaged form): Helmich-Paris, B. A trust-region augmented Hessian implementation for state-specific and state-averaged CASSCF wave functions. *J. Chem. Phys.* **2022**, *156*, 204104. [doi:10.1063/5.0090447](https://doi.org/10.1063/5.0090447)

Optimization and dynamics:

* Geometry optimization (DL-FIND): Kästner, J.; Carr, J. M.; Keal, T. W.; Thiel, W.; Wander, A.; Sherwood, P. DL-FIND: An open-source geometry optimizer for atomistic simulations. *J. Phys. Chem. A* **2009**, *113*, 11856–11865. [doi:10.1021/jp9028968](https://doi.org/10.1021/jp9028968)
* Surface hopping (PyUNIxMD): Lee, I. S.; Ha, J.-K.; Han, D.; Kim, T. I.; Moon, S. W.; Min, S. K. PyUNIxMD: A Python-based excited state molecular dynamics package. *J. Comput. Chem.* **2021**, *42*, 1755–1766. [doi:10.1002/jcc.26711](https://doi.org/10.1002/jcc.26711)
* FSSH (mqc.SH): Tully, J. C. Molecular dynamics with electronic transitions. *J. Chem. Phys.* **1990**, *93*, 1061–1071. [doi:10.1063/1.459170](https://doi.org/10.1063/1.459170)
* mqc.SH, dec_correction="edc": Granucci, G.; Persico, M. Critical appraisal of the fewest switches algorithm for surface hopping. *J. Chem. Phys.* **2007**, *126*, 134114. [doi:10.1063/1.2715585](https://doi.org/10.1063/1.2715585)
* mqc.SH, dec_correction="idc": Nelson, T.; Fernandez-Alberti, S.; Roitberg, A. E.; Tretiak, S. Nonadiabatic excited-state molecular dynamics: Treatment of electronic decoherence. *J. Chem. Phys.* **2013**, *138*, 224111. [doi:10.1063/1.4809568](https://doi.org/10.1063/1.4809568)
* DISH-XF (mqc.SHXF): Ha, J.-K.; Lee, I. S.; Min, S. K. Surface hopping dynamics beyond nonadiabatic couplings for quantum coherence. *J. Phys. Chem. Lett.* **2018**, *9*, 1097–1104. [doi:10.1021/acs.jpclett.8b00060](https://doi.org/10.1021/acs.jpclett.8b00060)

Software:

* Every REKS run: Smith, D. G. A.; Burns, L. A.; Simmonett, A. C.; Parrish, R. M.; Schieber, M. C.; Galvelis, R.; Kraus, P.; Kruse, H.; Di Remigio, R.; Alenaizan, A.; James, A. M.; Lehtola, S.; Misiewicz, J. P.; Scheurer, M.; Shaw, R. A.; Schriber, J. B.; Xie, Y.; Glick, Z. L.; Sirianni, D. A.; O'Brien, J. S.; Waldrop, J. M.; Kumar, A.; Hohenstein, E. G.; Pritchard, B. P.; Brooks, B. R.; Schaefer, H. F., III; Sokolov, A. Y.; Patkowski, K.; DePrince, A. E., III; Bozkaya, U.; King, R. A.; Evangelista, F. A.; Turney, J. M.; Crawford, T. D.; Sherrill, C. D. PSI4 1.4: Open-source software for high-throughput quantum chemistry. *J. Chem. Phys.* **2020**, *152*, 184108. [doi:10.1063/5.0006002](https://doi.org/10.1063/5.0006002)
* DFT functional (Libxc): Lehtola, S.; Steigemann, C.; Oliveira, M. J. T.; Marques, M. A. L. Recent developments in libxc — A comprehensive library of functionals for density functional theory. *SoftwareX* **2018**, *7*, 1–5. [doi:10.1016/j.softx.2017.11.002](https://doi.org/10.1016/j.softx.2017.11.002)
* D3 dispersion correction (D3(0)): Grimme, S.; Antony, J.; Ehrlich, S.; Krieg, H. A consistent and accurate ab initio parametrization of density functional dispersion correction (DFT-D) for the 94 elements H-Pu. *J. Chem. Phys.* **2010**, *132*, 154104. [doi:10.1063/1.3382344](https://doi.org/10.1063/1.3382344)
* D3 dispersion correction (D3(BJ)): Grimme, S.; Ehrlich, S.; Goerigk, L. Effect of the damping function in dispersion corrected density functional theory. *J. Comput. Chem.* **2011**, *32*, 1456–1465. [doi:10.1002/jcc.21759](https://doi.org/10.1002/jcc.21759)

What to cite for a calculation: [Documentation, Cite](https://reksstudio.github.io/v2/docs/index.md#cite).

## Index {#index}

[A](https://reksstudio.github.io/v2/manual/reference/index.md#index-a)[B](https://reksstudio.github.io/v2/manual/reference/index.md#index-b)[C](https://reksstudio.github.io/v2/manual/reference/index.md#index-c)[D](https://reksstudio.github.io/v2/manual/reference/index.md#index-d)[E](https://reksstudio.github.io/v2/manual/reference/index.md#index-e)[F](https://reksstudio.github.io/v2/manual/reference/index.md#index-f)[G](https://reksstudio.github.io/v2/manual/reference/index.md#index-g)[H](https://reksstudio.github.io/v2/manual/reference/index.md#index-h)[I](https://reksstudio.github.io/v2/manual/reference/index.md#index-i)[L](https://reksstudio.github.io/v2/manual/reference/index.md#index-l)[M](https://reksstudio.github.io/v2/manual/reference/index.md#index-m)[N](https://reksstudio.github.io/v2/manual/reference/index.md#index-n)[O](https://reksstudio.github.io/v2/manual/reference/index.md#index-o)[P](https://reksstudio.github.io/v2/manual/reference/index.md#index-p)[Q](https://reksstudio.github.io/v2/manual/reference/index.md#index-q)[R](https://reksstudio.github.io/v2/manual/reference/index.md#index-r)[S](https://reksstudio.github.io/v2/manual/reference/index.md#index-s)[T](https://reksstudio.github.io/v2/manual/reference/index.md#index-t)[U](https://reksstudio.github.io/v2/manual/reference/index.md#index-u)[V](https://reksstudio.github.io/v2/manual/reference/index.md#index-v)[W](https://reksstudio.github.io/v2/manual/reference/index.md#index-w)

### A {#index-a}

* [Active one-particle density matrices](https://reksstudio.github.io/v2/manual/properties/index.md#active-rdm)
* [Active orbitals localize on one fragment](https://reksstudio.github.io/v2/manual/diagnose/index.md#diag-localized)
* Active space [Input](https://reksstudio.github.io/v2/manual/setup/index.md#active-space)[Reference](https://reksstudio.github.io/v2/manual/reference/index.md#active-space)
* [Active Space and Catalog](https://reksstudio.github.io/v2/manual/setup/index.md#catalog)
* [Active space fails to load](https://reksstudio.github.io/v2/manual/diagnose/index.md#diag-catalog)
* [Active space, core, virtual](https://reksstudio.github.io/v2/manual/concepts/index.md#active-core-virtual)
* [Adiabatic (SSR) states](https://reksstudio.github.io/v2/manual/concepts/index.md#ssr-states)
* [`Adiabatic states`](https://reksstudio.github.io/v2/manual/properties/index.md#ssr-energies)
* [`Alternative configuration lists`](https://reksstudio.github.io/v2/options/SI_REKS_CONFIGS.md)
* [`Atomic charges (relaxed density matrix P^r)`](https://reksstudio.github.io/v2/manual/properties/index.md#relaxed-properties)
* [`Atomic charges (unrelaxed state density matrix)`](https://reksstudio.github.io/v2/manual/properties/index.md#atomic-charges)
* [Atomic charges of the states (unrelaxed)](https://reksstudio.github.io/v2/manual/properties/index.md#atomic-charges)
* [Atomic spin populations of the states (2S > 0)](https://reksstudio.github.io/v2/manual/properties/index.md#atomic-spins)

### B {#index-b}

* [Bond and lone pair: REKS(4,5), REKS(4,6)](https://reksstudio.github.io/v2/manual/wide-geminals/index.md#wide-two-pairs)
* [`Bond indices (unrelaxed state density matrix)`](https://reksstudio.github.io/v2/manual/properties/index.md#bond-indices)
* [Bond indices of the relaxed density](https://reksstudio.github.io/v2/manual/properties/index.md#relaxed-bond-indices)
* [Bond indices of the states (unrelaxed)](https://reksstudio.github.io/v2/manual/properties/index.md#bond-indices)
* [Bulk Tokens and Pattern Syntax](https://reksstudio.github.io/v2/manual/setup/index.md#bulk-tokens)

### C {#index-c}

* [Cartesian multipole moments of order l ≥ 3](https://reksstudio.github.io/v2/manual/properties/index.md#multipoles)
* [Cassette order](https://reksstudio.github.io/v2/manual/setup/index.md#cassette-order)
* [Catalog](https://reksstudio.github.io/v2/manual/reference/index.md#catalog)
* [Check the optimization](https://reksstudio.github.io/v2/manual/dynamics/index.md#check-optimization)
* Check the solution [First Calculation](https://reksstudio.github.io/v2/manual/first-calculation/index.md#check-solution)[Wide Geminals](https://reksstudio.github.io/v2/manual/wide-geminals/index.md#wide-check)
* [Check the trajectory](https://reksstudio.github.io/v2/manual/dynamics/index.md#check-trajectory)
* [Chirgwin–Coulson weights](https://reksstudio.github.io/v2/manual/concepts/index.md#cc-weights)
* [Choose the pairs](https://reksstudio.github.io/v2/manual/first-calculation/index.md#choose-pairs)
* [Concepts](https://reksstudio.github.io/v2/manual/concepts/index.md#concepts)
* [Configuration and its energy](https://reksstudio.github.io/v2/manual/concepts/index.md#configuration-energy)
* [`Conical-intersection (CI) topography S1/S2`](https://reksstudio.github.io/v2/manual/properties/index.md#ci-topography)
* [Conical-intersection topography](https://reksstudio.github.io/v2/manual/properties/index.md#ci-topography)
* [Convergence engines](https://reksstudio.github.io/v2/manual/reference/index.md#convergence-engines)
* [`Coupled-perturbed REKS (CP-REKS, Z-vector) solver`](https://reksstudio.github.io/v2/options/REKS_CPREKS_CONV.md)
* [Coupling damping below 100 % exact exchange](https://reksstudio.github.io/v2/manual/concepts/index.md#coupling-damping)
* [Coupling Δ and factor f](https://reksstudio.github.io/v2/manual/concepts/index.md#coupling)
* [`CURRENT DIPOLE`](https://reksstudio.github.io/v2/manual/properties/index.md#relaxed-properties)
* `CURRENT ENERGY` [Output and properties: SA-REKS ensemble energy and configuration energies](https://reksstudio.github.io/v2/manual/properties/index.md#sa-energy)[Output and properties: Nuclear gradients of SSR states](https://reksstudio.github.io/v2/manual/properties/index.md#state-gradient)
* `CURRENT GRADIENT` [Output and properties: Nuclear gradients of SSR states](https://reksstudio.github.io/v2/manual/properties/index.md#state-gradient)[Output and properties: Nuclear gradient of the SA-REKS ensemble](https://reksstudio.github.io/v2/manual/properties/index.md#sa-gradient)
* [`CURRENT REFERENCE ENERGY`](https://reksstudio.github.io/v2/manual/properties/index.md#sa-energy)

### D {#index-d}

* [`DFT XC ENERGY`](https://reksstudio.github.io/v2/manual/properties/index.md#sa-energy)
* [Diagnose](https://reksstudio.github.io/v2/manual/diagnose/index.md#diagnose)
* [`Dipole moment (relaxed density matrix P^r)`](https://reksstudio.github.io/v2/manual/properties/index.md#relaxed-properties)
* [`Dipole moment (unrelaxed state density matrix)`](https://reksstudio.github.io/v2/manual/properties/index.md#permanent-dipole)

### E {#index-e}

* [EKT ionization energies of the SA-REKS ensemble](https://reksstudio.github.io/v2/manual/properties/index.md#ekt-ensemble)
* [EKT ionization energies, pole strengths and Dyson orbitals of SI states](https://reksstudio.github.io/v2/manual/properties/index.md#ekt-states)
* [`Energetics`](https://reksstudio.github.io/v2/manual/properties/index.md#sa-energy)
* [Ensemble Kohn–Sham reference and FONs](https://reksstudio.github.io/v2/manual/concepts/index.md#ensemble-fons)
* [`Exciton descriptors`](https://reksstudio.github.io/v2/manual/properties/index.md#exciton)
* [Exciton descriptors, hole and electron populations, natural difference orbitals](https://reksstudio.github.io/v2/manual/properties/index.md#exciton)
* [Expert stabilizers](https://reksstudio.github.io/v2/manual/run-control/index.md#expert-stabilizers)
* [Explicit SA pool and SI cassettes](https://reksstudio.github.io/v2/manual/index.md#explicit-input)

### F {#index-f}

* [Files](https://reksstudio.github.io/v2/manual/properties/index.md#files)
* [First Calculation](https://reksstudio.github.io/v2/manual/first-calculation/index.md#first-calculation)
* FON micro-solver [Run control](https://reksstudio.github.io/v2/manual/run-control/index.md#fon-micro)[Reference](https://reksstudio.github.io/v2/manual/reference/index.md#fon-micro-solver)
* [`FON optimization after the SCF`](https://reksstudio.github.io/v2/manual/properties/index.md#si-fons)
* [FON pinned at a bound, symmetry-broken charges](https://reksstudio.github.io/v2/manual/diagnose/index.md#diag-fon-pinned)
* [FON set and generation](https://reksstudio.github.io/v2/manual/concepts/index.md#fon-generation)
* [FON sets](https://reksstudio.github.io/v2/manual/setup/index.md#fon-sets)
* [FONs](https://reksstudio.github.io/v2/manual/reference/index.md#fons)
* [FONs of a geminal invert](https://reksstudio.github.io/v2/manual/diagnose/index.md#diag-fon-inverted)
* [FONs of the SI-only geminals](https://reksstudio.github.io/v2/manual/properties/index.md#si-fons)
* [Fractional Occupation Numbers (FONs)](https://reksstudio.github.io/v2/manual/run-control/index.md#fons)
* [Fractional occupation numbers of the SA-REKS ensemble](https://reksstudio.github.io/v2/manual/properties/index.md#sa-fons)
* [Fragment charge-transfer descriptors](https://reksstudio.github.io/v2/manual/properties/index.md#fragment-ct)
* [Fragment couplings (FCD, FED, FSD)](https://reksstudio.github.io/v2/manual/properties/index.md#fragment-couplings)
* [`Fragment couplings F1 - F2`](https://reksstudio.github.io/v2/manual/properties/index.md#fragment-couplings)
* [`Fragments: charge-transfer descriptors`](https://reksstudio.github.io/v2/manual/properties/index.md#fragment-ct)
* [`Fragments: hole and electron populations`](https://reksstudio.github.io/v2/manual/properties/index.md#fragment-ct)

### G {#index-g}

* Geminal Delocalization [Run control](https://reksstudio.github.io/v2/manual/run-control/index.md#geminal-deloc)[Reference](https://reksstudio.github.io/v2/manual/reference/index.md#geminal-delocalization)
* [Geminal of width w](https://reksstudio.github.io/v2/manual/wide-geminals/index.md#wide-pps)
* [Geminals](https://reksstudio.github.io/v2/manual/concepts/index.md#geminals)
* [Geometry optimization](https://reksstudio.github.io/v2/manual/dynamics/index.md#geometry-optimization)
* [Ghost states and a collapsed SI spectrum](https://reksstudio.github.io/v2/manual/diagnose/index.md#diag-ghost-states)
* [`Gradient of S1`](https://reksstudio.github.io/v2/manual/properties/index.md#state-gradient)
* [`Gradient request`](https://reksstudio.github.io/v2/options/SI_REKS_GRAD.md)
* [Gradients](https://reksstudio.github.io/v2/manual/wide-geminals/index.md#wide-gradients)
* Gradients and couplings [Input](https://reksstudio.github.io/v2/manual/setup/index.md#gradients-couplings)[Reference](https://reksstudio.github.io/v2/manual/reference/index.md#gradients-and-couplings)
* [Gradients and couplings against finite differences](https://reksstudio.github.io/v2/manual/dynamics/index.md#grad-fd)
* [Gradients, NAC, conical intersections](https://reksstudio.github.io/v2/manual/properties/index.md#gradients-nac-conical-intersections)
* [Guess](https://reksstudio.github.io/v2/manual/reference/index.md#guess)
* [`GUESS_ACTIVE_WINDOW`](https://reksstudio.github.io/v2/options/GUESS_ACTIVE_WINDOW.md)
* [Guesses and Restarts](https://reksstudio.github.io/v2/manual/run-control/index.md#guesses)
* [GVB-DIIS conditioning chain (expert)](https://reksstudio.github.io/v2/manual/reference/index.md#gvb-diis-conditioning-chain-expert)
* [GVB-DIIS convergence quality](https://reksstudio.github.io/v2/manual/properties/index.md#convergence-quality)
* [GVB-DIIS monitors / verdicts (expert)](https://reksstudio.github.io/v2/manual/reference/index.md#gvb-diis-monitors-verdicts-expert)

### H {#index-h}

* [`Hamiltonian`](https://reksstudio.github.io/v2/manual/properties/index.md#si-matrices)
* [Higher spin states](https://reksstudio.github.io/v2/manual/first-calculation/index.md#first-spin)
* [`Hole and electron populations`](https://reksstudio.github.io/v2/manual/properties/index.md#exciton)

### I {#index-i}

* [If the SCF does not converge](https://reksstudio.github.io/v2/manual/first-calculation/index.md#no-convergence)
* [Input patterns](https://reksstudio.github.io/v2/manual/setup/index.md#input-patterns)
* [Inspect the orbitals](https://reksstudio.github.io/v2/manual/first-calculation/index.md#inspect-orbitals)
* [`Ionization energies (EKT) and Dyson orbitals`](https://reksstudio.github.io/v2/manual/properties/index.md#ekt-states)
* [`Iterations`](https://reksstudio.github.io/v2/manual/run-control/index.md#engines)

### L {#index-l}

* Level shift [Run control](https://reksstudio.github.io/v2/manual/run-control/index.md#level-shift)[Reference](https://reksstudio.github.io/v2/manual/reference/index.md#level-shift)
* [`LEVEL_SHIFT_ADAPT`](https://reksstudio.github.io/v2/options/LEVEL_SHIFT_ADAPT.md)
* [Lone pair: REKS(2,3)](https://reksstudio.github.io/v2/manual/wide-geminals/index.md#wide-lone-pair)

### M {#index-m}

* [Magnetic transition moments and rotatory strengths](https://reksstudio.github.io/v2/manual/properties/index.md#transition-magnetic)
* [Microstate](https://reksstudio.github.io/v2/manual/concepts/index.md#microstate)
* [Minimal input](https://reksstudio.github.io/v2/manual/index.md#minimal-input)
* [`Multipole moments of order 3 (unrelaxed state density matrix)`](https://reksstudio.github.io/v2/manual/properties/index.md#multipoles)

### N {#index-n}

* [`NAC S1/S2`](https://reksstudio.github.io/v2/manual/properties/index.md#nac)
* [Naming convention](https://reksstudio.github.io/v2/manual/setup/index.md#naming-convention)
* [Natural orbitals and occupations of the active space](https://reksstudio.github.io/v2/manual/properties/index.md#natural-orbitals)
* [`Natural orbitals of the active space`](https://reksstudio.github.io/v2/manual/properties/index.md#natural-orbitals)
* [Natural transition orbitals](https://reksstudio.github.io/v2/manual/properties/index.md#nto)
* [`Natural transition orbitals (NTO)`](https://reksstudio.github.io/v2/manual/properties/index.md#nto)
* [Nonadiabatic coupling vectors](https://reksstudio.github.io/v2/manual/properties/index.md#nac)
* [Nuclear gradient of the SA-REKS ensemble](https://reksstudio.github.io/v2/manual/properties/index.md#sa-gradient)
* [Nuclear gradients of SSR states](https://reksstudio.github.io/v2/manual/properties/index.md#state-gradient)
* [`NUCLEAR REPULSION ENERGY`](https://reksstudio.github.io/v2/manual/properties/index.md#sa-energy)

### O {#index-o}

* [One gradient() call](https://reksstudio.github.io/v2/manual/dynamics/index.md#one-gradient)
* [`ONE-ELECTRON ENERGY`](https://reksstudio.github.io/v2/manual/properties/index.md#sa-energy)
* [Optimization and Dynamics](https://reksstudio.github.io/v2/manual/dynamics/index.md#opt-dynamics)
* [Option Table](https://reksstudio.github.io/v2/manual/reference/index.md#option-table)
* [Orbitals of the SI step](https://reksstudio.github.io/v2/manual/properties/index.md#si-orbitals)
* [Orbitals, orbital energies, SCF convergence](https://reksstudio.github.io/v2/manual/concepts/index.md#orbitals-scf)
* [Output](https://reksstudio.github.io/v2/manual/setup/index.md#output)

### P {#index-p}

* [Pairing scheme](https://reksstudio.github.io/v2/manual/concepts/index.md#pairing-scheme)
* [Pairing schemes](https://reksstudio.github.io/v2/manual/setup/index.md#pairing-schemes)
* [`Pairing schemes (geminal orbitals)`](https://reksstudio.github.io/v2/manual/setup/index.md#pairing-schemes)
* [Permanent and difference dipole moments (unrelaxed)](https://reksstudio.github.io/v2/manual/properties/index.md#permanent-dipole)
* [`Post-Iterations`](https://reksstudio.github.io/v2/manual/properties/index.md#sa-fons)
* [`Pre-Iterations`](https://reksstudio.github.io/v2/manual/run-control/index.md#restart)
* [Print order](https://reksstudio.github.io/v2/manual/properties/index.md#print-order)
* [Properties](https://reksstudio.github.io/v2/manual/properties/index.md#properties)
* [Properties, Gradients, Couplings](https://reksstudio.github.io/v2/manual/setup/index.md#response)

### Q {#index-q}

* [`Quadrupole moment (relaxed density matrix P^r)`](https://reksstudio.github.io/v2/manual/properties/index.md#relaxed-properties)
* [`Quadrupole moment (unrelaxed state density matrix)`](https://reksstudio.github.io/v2/manual/properties/index.md#quadrupole)
* [Quadrupole moments of the states (unrelaxed)](https://reksstudio.github.io/v2/manual/properties/index.md#quadrupole)
* [Quasi-degenerate roots](https://reksstudio.github.io/v2/manual/diagnose/index.md#diag-quasi-degenerate)

### R {#index-r}

* [`Radical character`](https://reksstudio.github.io/v2/manual/properties/index.md#radical-character)
* [Reading the Output](https://reksstudio.github.io/v2/manual/properties/index.md#reading-output)
* [References](https://reksstudio.github.io/v2/manual/reference/index.md#references)
* [`REKS`](https://reksstudio.github.io/v2/options/REKS.md)
* [`REKS <L>_FON`](https://reksstudio.github.io/v2/manual/properties/index.md#sa-fons)
* [`REKS <L>_FON K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#si-fons)
* [`REKS <L>_FON META`](https://reksstudio.github.io/v2/manual/properties/index.md#sa-fons)
* [`REKS <L>_FON META K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#si-fons)
* [`REKS C PATH B K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#si-orbitals)
* [`REKS DYSON ORBITALS AO`](https://reksstudio.github.io/v2/manual/properties/index.md#ekt-ensemble)
* [`REKS DYSON ORBITALS MO`](https://reksstudio.github.io/v2/manual/properties/index.md#ekt-ensemble)
* [`REKS EKT IONIZATION ENERGIES`](https://reksstudio.github.io/v2/manual/properties/index.md#ekt-ensemble)
* [`REKS EKT NATURAL OCCUPATIONS`](https://reksstudio.github.io/v2/manual/properties/index.md#ekt-ensemble)
* [`REKS EKT POLE STRENGTHS`](https://reksstudio.github.io/v2/manual/properties/index.md#ekt-ensemble)
* [`REKS FON`](https://reksstudio.github.io/v2/manual/properties/index.md#sa-fons)
* [`REKS FON K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#si-fons)
* [`REKS FON META`](https://reksstudio.github.io/v2/manual/properties/index.md#sa-fons)
* [`REKS FON META K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#si-fons)
* [`REKS G`](https://reksstudio.github.io/v2/manual/properties/index.md#sa-fons)
* [`REKS GATE RMS`](https://reksstudio.github.io/v2/manual/properties/index.md#convergence-quality)
* [`REKS Geminal Delocalization`](https://reksstudio.github.io/v2/options/REKS_GEMINAL_DELOC.md)
* [`REKS GORB FRO`](https://reksstudio.github.io/v2/manual/properties/index.md#convergence-quality)
* [`REKS HEISENBERG J`](https://reksstudio.github.io/v2/manual/properties/index.md#spin-state-energetics)
* [`REKS HEISENBERG J SPINS`](https://reksstudio.github.io/v2/manual/properties/index.md#spin-state-energetics)
* [`REKS N ACTIVE ELECTRONS`](https://reksstudio.github.io/v2/manual/properties/index.md#sa-fons)
* [`REKS N ACTIVE ORBITALS`](https://reksstudio.github.io/v2/manual/properties/index.md#sa-fons)
* [`REKS N SECTORS`](https://reksstudio.github.io/v2/manual/properties/index.md#sa-fons)
* [`REKS NCORE K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#si-orbitals)
* [`REKS QUALITY BASIN FIRES`](https://reksstudio.github.io/v2/manual/properties/index.md#convergence-quality)
* [`REKS QUALITY GORB FRO`](https://reksstudio.github.io/v2/manual/properties/index.md#convergence-quality)
* [`REKS QUALITY GORB RMS`](https://reksstudio.github.io/v2/manual/properties/index.md#convergence-quality)
* [`REKS QUALITY GRAZING`](https://reksstudio.github.io/v2/manual/properties/index.md#convergence-quality)
* [`REKS QUALITY LANDINGS`](https://reksstudio.github.io/v2/manual/properties/index.md#convergence-quality)
* [`REKS QUALITY MAX RUNG`](https://reksstudio.github.io/v2/manual/properties/index.md#convergence-quality)
* [`REKS QUALITY VERDICT TRIPS`](https://reksstudio.github.io/v2/manual/properties/index.md#convergence-quality)
* [`REKS SA_WEIGHTS`](https://reksstudio.github.io/v2/manual/properties/index.md#sa-energy)
* [`REKS SECTOR <s> …`](https://reksstudio.github.io/v2/manual/properties/index.md#si-fons)
* [`REKS SECTOR <s> EKT ...`](https://reksstudio.github.io/v2/manual/properties/index.md#ekt-ensemble)
* [`REKS Studio`](https://reksstudio.github.io/v2/manual/properties/index.md#run-report)
* [`REKS Studio setup`](https://reksstudio.github.io/v2/manual/properties/index.md#run-report)
* [`REKS TARGET STATE ENERGY`](https://reksstudio.github.io/v2/manual/properties/index.md#state-gradient)
* [`REKS W_PPS`](https://reksstudio.github.io/v2/manual/properties/index.md#sa-energy)
* [REKS\_\<L>\_FON](https://reksstudio.github.io/v2/options/REKS_N_FON.md)
* [`REKS_CI_TOPOGRAPHY_GAP`](https://reksstudio.github.io/v2/options/REKS_CI_TOPOGRAPHY_GAP.md)
* [`REKS_CPREKS_CONV`](https://reksstudio.github.io/v2/options/REKS_CPREKS_CONV.md)
* [`REKS_CPREKS_MAXITER`](https://reksstudio.github.io/v2/options/REKS_CPREKS_MAXITER.md)
* [`REKS_DIIS_ACTIVATION`](https://reksstudio.github.io/v2/options/REKS_DIIS_ACTIVATION.md)
* [`REKS_DIIS_CFM_ACTIVATION_GORB`](https://reksstudio.github.io/v2/options/REKS_DIIS_CFM_ACTIVATION_GORB.md)
* [`REKS_DIIS_COND_ANGLE_CUTOFF`](https://reksstudio.github.io/v2/manual/reference/index.md#gvb-diis-conditioning-chain-expert)
* [`REKS_DIIS_COND_ANGLE_FILTER`](https://reksstudio.github.io/v2/manual/reference/index.md#gvb-diis-conditioning-chain-expert)
* [`REKS_DIIS_COND_COEFF_NORM_MAX`](https://reksstudio.github.io/v2/manual/reference/index.md#gvb-diis-conditioning-chain-expert)
* [`REKS_DIIS_COND_KAPPA_BYPASS`](https://reksstudio.github.io/v2/manual/reference/index.md#gvb-diis-conditioning-chain-expert)
* [`REKS_DIIS_COND_STALE_DELTA`](https://reksstudio.github.io/v2/manual/reference/index.md#gvb-diis-conditioning-chain-expert)
* [`REKS_DIIS_COND_SVD_RCOND`](https://reksstudio.github.io/v2/manual/reference/index.md#gvb-diis-conditioning-chain-expert)
* [`REKS_DIIS_COND_TIKHONOV`](https://reksstudio.github.io/v2/manual/reference/index.md#gvb-diis-conditioning-chain-expert)
* [`REKS_DIIS_COND_TIKHONOV_SCALE`](https://reksstudio.github.io/v2/manual/reference/index.md#gvb-diis-conditioning-chain-expert)
* [`REKS_DIIS_FON_BRANCH_CUTOFF`](https://reksstudio.github.io/v2/manual/reference/index.md#gvb-diis-monitors-verdicts-expert)
* [`REKS_DIIS_FORMULATION`](https://reksstudio.github.io/v2/options/REKS_DIIS_FORMULATION.md)
* [`REKS_DIIS_GUARD_LANDING_TOLERANCE`](https://reksstudio.github.io/v2/manual/reference/index.md#gvb-diis-monitors-verdicts-expert)
* [`REKS_DIIS_GUARD_LATCH_GRACE`](https://reksstudio.github.io/v2/manual/reference/index.md#gvb-diis-monitors-verdicts-expert)
* [`REKS_DIIS_MON_CYCLE`](https://reksstudio.github.io/v2/manual/reference/index.md#gvb-diis-monitors-verdicts-expert)
* [`REKS_DIIS_MON_CYCLE_CAP_STREAK`](https://reksstudio.github.io/v2/manual/reference/index.md#gvb-diis-monitors-verdicts-expert)
* [`REKS_DIIS_MON_CYCLE_WINDOW`](https://reksstudio.github.io/v2/manual/reference/index.md#gvb-diis-monitors-verdicts-expert)
* [`REKS_DIIS_MON_NONMONOTONE_M`](https://reksstudio.github.io/v2/manual/reference/index.md#gvb-diis-monitors-verdicts-expert)
* [`REKS_DIIS_MON_PROGRESS_EPS`](https://reksstudio.github.io/v2/manual/reference/index.md#gvb-diis-monitors-verdicts-expert)
* [`REKS_DIIS_MON_SUPPRESS_WINDOW`](https://reksstudio.github.io/v2/manual/reference/index.md#gvb-diis-monitors-verdicts-expert)
* [`REKS_DIIS_MON_VERDICT_RHO`](https://reksstudio.github.io/v2/manual/reference/index.md#gvb-diis-monitors-verdicts-expert)
* [`REKS_DIIS_MON_VERDICT_STREAK`](https://reksstudio.github.io/v2/manual/reference/index.md#gvb-diis-monitors-verdicts-expert)
* [`REKS_DIIS_ORB_BASE_MAP_DAMP`](https://reksstudio.github.io/v2/manual/reference/index.md#gvb-diis-monitors-verdicts-expert)
* [`REKS_DIIS_RESTART_BUDGET`](https://reksstudio.github.io/v2/manual/reference/index.md#gvb-diis-monitors-verdicts-expert)
* [`REKS_EKT`](https://reksstudio.github.io/v2/options/REKS_EKT.md)
* [`REKS_EKT_OCC_TOL`](https://reksstudio.github.io/v2/options/REKS_EKT_OCC_TOL.md)
* [`REKS_FON_INTERP_DELTA`](https://reksstudio.github.io/v2/options/REKS_FON_INTERP_DELTA.md)
* [`REKS_FON_MICRO_BOUND_MARGIN`](https://reksstudio.github.io/v2/manual/run-control/index.md#fon-micro)
* [`REKS_FON_MICRO_BOUNDARY_SKIN`](https://reksstudio.github.io/v2/manual/run-control/index.md#fon-micro)
* [`REKS_FON_MICRO_CONVERGENCE`](https://reksstudio.github.io/v2/manual/run-control/index.md#fon-micro)
* [`REKS_FON_MICRO_LS_MAXITER`](https://reksstudio.github.io/v2/manual/run-control/index.md#fon-micro)
* [`REKS_FON_MICRO_MIN_EIGENVALUE`](https://reksstudio.github.io/v2/manual/run-control/index.md#fon-micro)
* [`REKS_FON_MICRO_NR_MAXITER`](https://reksstudio.github.io/v2/manual/run-control/index.md#fon-micro)
* [`REKS_GEMINAL_DELOC`](https://reksstudio.github.io/v2/options/REKS_GEMINAL_DELOC.md)
* [`REKS_GEMINAL_WIDTHS`](https://reksstudio.github.io/v2/options/REKS_GEMINAL_WIDTHS.md)
* [`REKS_GRAD_DEGEN_TOL`](https://reksstudio.github.io/v2/options/REKS_GRAD_DEGEN_TOL.md)
* [`REKS_GVB_DIIS`](https://reksstudio.github.io/v2/options/REKS_GVB_DIIS.md)
* [`REKS_GVB_DIIS_START`](https://reksstudio.github.io/v2/options/REKS_GVB_DIIS_START.md)
* [`REKS_GVB_GATE_STREAK`](https://reksstudio.github.io/v2/manual/reference/index.md#gvb-diis-monitors-verdicts-expert)
* [`REKS_GVB_LEVEL_SHIFT`](https://reksstudio.github.io/v2/options/REKS_GVB_LEVEL_SHIFT.md)
* [`REKS_GVB_ROBUST_VERDICT`](https://reksstudio.github.io/v2/options/REKS_GVB_ROBUST_VERDICT.md)
* [`REKS_N_FON`](https://reksstudio.github.io/v2/options/REKS_N_FON.md)
* [`REKS_REPORT_LEVEL`](https://reksstudio.github.io/v2/options/REKS_REPORT_LEVEL.md)
* [`REKS_SA_2SPIN`](https://reksstudio.github.io/v2/options/SA_REKS_2SPIN.md)
* [`REKS_SA_CONFIGS`](https://reksstudio.github.io/v2/options/SA_REKS_CONFIGS.md)
* [`REKS_SA_EXTRA`](https://reksstudio.github.io/v2/options/SA_REKS_EXTRA.md)
* [`REKS_SA_WEIGHTS`](https://reksstudio.github.io/v2/options/SA_REKS_WEIGHTS.md)
* [`REKS_SI_2SPIN`](https://reksstudio.github.io/v2/options/SI_REKS_2SPIN.md)
* [`REKS_SI_CONFIGS`](https://reksstudio.github.io/v2/options/SI_REKS_CONFIGS.md)
* [`REKS_SI_STORE_STATES`](https://reksstudio.github.io/v2/options/SI_REKS_STORE_STATES.md)
* [`REKS_USE_TRAH`](https://reksstudio.github.io/v2/options/REKS_USE_TRAH.md)
* [Relaxed dipole, quadrupole and atomic charges](https://reksstudio.github.io/v2/manual/properties/index.md#relaxed-properties)
* [`Relaxed properties`](https://reksstudio.github.io/v2/manual/properties/index.md#relaxed-properties)
* [Relaxed properties and EKT](https://reksstudio.github.io/v2/manual/properties/index.md#relaxed-properties-and-ekt)
* [Report level](https://reksstudio.github.io/v2/manual/properties/index.md#report-level)
* [Reporting](https://reksstudio.github.io/v2/manual/reference/index.md#reporting)
* [Required and rejected settings](https://reksstudio.github.io/v2/manual/index.md#required-and-rejected-settings)
* [Requirements](https://reksstudio.github.io/v2/manual/dynamics/index.md#dyn-requirements)
* [Restart mechanism](https://reksstudio.github.io/v2/manual/run-control/index.md#restart)
* [`Returned gradient`](https://reksstudio.github.io/v2/manual/properties/index.md#state-gradient)
* [Rules for all entries](https://reksstudio.github.io/v2/manual/properties/index.md#rules-for-all-entries)
* [Run report](https://reksstudio.github.io/v2/manual/properties/index.md#run-report)

### S {#index-s}

* `SA pool` [Input: SA_REKS_CONFIGS](https://reksstudio.github.io/v2/options/SA_REKS_CONFIGS.md)[Input: SA pool](https://reksstudio.github.io/v2/manual/setup/index.md#sa-pool)[Reference](https://reksstudio.github.io/v2/manual/reference/index.md#sa-pool)
* [SA Pool and SI Cassettes](https://reksstudio.github.io/v2/manual/setup/index.md#selecting)
* [`SA_REKS_2SPIN`](https://reksstudio.github.io/v2/options/SA_REKS_2SPIN.md)
* [`SA_REKS_CONFIGS`](https://reksstudio.github.io/v2/options/SA_REKS_CONFIGS.md)
* [`SA_REKS_EXTRA`](https://reksstudio.github.io/v2/options/SA_REKS_EXTRA.md)
* [`SA_REKS_WEIGHTS`](https://reksstudio.github.io/v2/options/SA_REKS_WEIGHTS.md)
* [`SA-REKS energy decomposition`](https://reksstudio.github.io/v2/manual/properties/index.md#sa-energy)
* [SA-REKS ensemble and weights](https://reksstudio.github.io/v2/manual/concepts/index.md#sa-ensemble)
* [SA-REKS ensemble energy and configuration energies](https://reksstudio.github.io/v2/manual/properties/index.md#sa-energy)
* [Scans](https://reksstudio.github.io/v2/manual/first-calculation/index.md#first-scans)
* [SCF](https://reksstudio.github.io/v2/manual/properties/index.md#scf)
* [SCF Convergence Engines](https://reksstudio.github.io/v2/manual/run-control/index.md#scf-engines)
* [SCF converges instantly to a wrong energy after a restart](https://reksstudio.github.io/v2/manual/diagnose/index.md#diag-wrong-window)
* [SCF hits MAXITER or continues unconverged](https://reksstudio.github.io/v2/manual/diagnose/index.md#diag-maxiter)
* [`SCF ITERATIONS`](https://reksstudio.github.io/v2/manual/properties/index.md#convergence-quality)
* [SCF oscillates or cycles](https://reksstudio.github.io/v2/manual/diagnose/index.md#diag-oscillation)
* [`SCF TOTAL ENERGY`](https://reksstudio.github.io/v2/manual/properties/index.md#sa-energy)
* `SCF TOTAL GRADIENT` [Output and properties: Nuclear gradients of SSR states](https://reksstudio.github.io/v2/manual/properties/index.md#state-gradient)[Output and properties: Nuclear gradient of the SA-REKS ensemble](https://reksstudio.github.io/v2/manual/properties/index.md#sa-gradient)
* [Seed orbitals](https://reksstudio.github.io/v2/manual/first-calculation/index.md#seed-orbitals)
* [SI cassette](https://reksstudio.github.io/v2/manual/concepts/index.md#si-cassette)
* SI cassettes [Input](https://reksstudio.github.io/v2/manual/setup/index.md#si-cassettes)[Reference](https://reksstudio.github.io/v2/manual/reference/index.md#si-cassettes)
* [`SI Davidson solver`](https://reksstudio.github.io/v2/manual/properties/index.md#si-davidson)
* [SI eigensolver](https://reksstudio.github.io/v2/manual/concepts/index.md#si-solver)
* SI Hamiltonian and overlap [Output and properties](https://reksstudio.github.io/v2/manual/properties/index.md#si-matrices)[Concepts](https://reksstudio.github.io/v2/manual/concepts/index.md#si-hamiltonian)
* [`SI pools`](https://reksstudio.github.io/v2/options/SI_REKS_CONFIGS.md)
* [SI states](https://reksstudio.github.io/v2/manual/properties/index.md#si-states)
* [`SI_REKS_2SPIN`](https://reksstudio.github.io/v2/options/SI_REKS_2SPIN.md)
* [`SI_REKS_ANALYSIS`](https://reksstudio.github.io/v2/options/SI_REKS_ANALYSIS.md)
* [`SI_REKS_ANALYSIS_CHANGE_MIN`](https://reksstudio.github.io/v2/options/SI_REKS_ANALYSIS_CHANGE_MIN.md)
* [`SI_REKS_CONFIGS`](https://reksstudio.github.io/v2/options/SI_REKS_CONFIGS.md)
* [`SI_REKS_DAVIDSON_R_CONVERGENCE`](https://reksstudio.github.io/v2/options/SI_REKS_DAVIDSON_R_CONVERGENCE.md)
* [`SI_REKS_FON_BOUND_MARGIN`](https://reksstudio.github.io/v2/manual/run-control/index.md#fon-micro)
* [`SI_REKS_GRAD`](https://reksstudio.github.io/v2/options/SI_REKS_GRAD.md)
* [`SI_REKS_NAC`](https://reksstudio.github.io/v2/options/SI_REKS_NAC.md)
* [`SI_REKS_OVERLAP_CUTOFF`](https://reksstudio.github.io/v2/options/SI_REKS_OVERLAP_CUTOFF.md)
* [`SI_REKS_PRINT_STATES`](https://reksstudio.github.io/v2/options/SI_REKS_PRINT_STATES.md)
* [`SI_REKS_PROPERTY_FOR`](https://reksstudio.github.io/v2/options/SI_REKS_PROPERTY_FOR.md)
* [`SI_REKS_SOLVER`](https://reksstudio.github.io/v2/options/SI_REKS_SOLVER.md)
* [`SI_REKS_STORE_STATES`](https://reksstudio.github.io/v2/options/SI_REKS_STORE_STATES.md)
* [SI-only FONs](https://reksstudio.github.io/v2/manual/concepts/index.md#si-only-fons)
* [`SI-SA-REKS analytic gradient: targets`](https://reksstudio.github.io/v2/manual/properties/index.md#state-gradient)
* [Spin energetics](https://reksstudio.github.io/v2/manual/properties/index.md#spin-energetics)
* [Spin manifold and run sector](https://reksstudio.github.io/v2/manual/concepts/index.md#run-sector)
* [Spin manifolds](https://reksstudio.github.io/v2/manual/reference/index.md#spin-manifolds)
* [Spin Manifolds (2S) and Multi-Sector Runs](https://reksstudio.github.io/v2/manual/setup/index.md#spin-manifolds)
* [Spin-polarized configurations](https://reksstudio.github.io/v2/manual/concepts/index.md#sps-configurations)
* [`Spin-state energetics`](https://reksstudio.github.io/v2/manual/properties/index.md#spin-state-energetics)
* [Spin-state gaps and Heisenberg J](https://reksstudio.github.io/v2/manual/properties/index.md#spin-state-energetics)
* [`SSR 1-RDM ACTIVE STATE=<k> K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#active-rdm)
* [`SSR 1-RDM ADIABATIC K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#active-rdm)
* [`SSR 1-RDM DIABATIC SPARSE K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#active-rdm)
* [`SSR ACTIVE ORBITALS K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#ssr-energies)
* [`SSR CASSETTE 2S K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#ssr-energies)
* [`SSR CASSETTE SECTOR K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#ssr-energies)
* [`SSR CI G <I> <J> CASSETTE <e>`](https://reksstudio.github.io/v2/manual/properties/index.md#ci-topography)
* [`SSR CI H <I> <J> CASSETTE <e>`](https://reksstudio.github.io/v2/manual/properties/index.md#ci-topography)
* [`SSR CI TOPOGRAPHY <I> <J> CASSETTE <e>`](https://reksstudio.github.io/v2/manual/properties/index.md#ci-topography)
* [`SSR COEFFICIENTS K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#ssr-composition)
* [`SSR CT FRAGMENT DESCRIPTORS K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#fragment-ct)
* [`SSR CT FRAGMENT HOLE POPULATIONS K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#fragment-ct)
* [`SSR CT FRAGMENT PARTICLE POPULATIONS K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#fragment-ct)
* [`SSR CT OMEGA ATOMS K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#exciton)
* [`SSR DIFFERENCE DENSITY EIGENVALUES K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#exciton)
* [`SSR DIFFERENCE DIPOLES K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#permanent-dipole)
* [`SSR DYSON ORBITALS AO ROOT <r> CASSETTE <e>`](https://reksstudio.github.io/v2/manual/properties/index.md#ekt-states)
* [`SSR DYSON ORBITALS MO ROOT <r> CASSETTE <e>`](https://reksstudio.github.io/v2/manual/properties/index.md#ekt-states)
* [SSR eigenvectors and Chirgwin–Coulson weights](https://reksstudio.github.io/v2/manual/properties/index.md#ssr-composition)
* [`SSR EKT IONIZATION ENERGIES ROOT <r> CASSETTE <e>`](https://reksstudio.github.io/v2/manual/properties/index.md#ekt-states)
* [`SSR EKT NATURAL OCCUPATIONS ROOT <r> CASSETTE <e>`](https://reksstudio.github.io/v2/manual/properties/index.md#ekt-states)
* [`SSR EKT POLE STRENGTHS ROOT <r> CASSETTE <e>`](https://reksstudio.github.io/v2/manual/properties/index.md#ekt-states)
* [`SSR ENERGIES K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#ssr-energies)
* [`SSR EXCITON DESCRIPTORS K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#exciton)
* [`SSR EXCITON HOLE POPULATIONS K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#exciton)
* [`SSR EXCITON PARTICLE POPULATIONS K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#exciton)
* [`SSR FCD LOWDIN COUPLINGS <F> <G> K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#fragment-couplings)
* [`SSR FCD MULLIKEN COUPLINGS <F> <G> K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#fragment-couplings)
* [`SSR FED COUPLINGS <F> <G> K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#fragment-couplings)
* [`SSR FSD COUPLINGS <F> <G> K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#fragment-couplings)
* [`SSR HAMILTONIAN K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#si-matrices)
* [`SSR LOWDIN CHARGES K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#atomic-charges)
* [`SSR LOWDIN SPINS K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#atomic-spins)
* [`SSR MAGNETIC TRANSITION DIPOLES K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#transition-magnetic)
* [`SSR MAYER INDICES K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#bond-indices)
* [`SSR MULLIKEN CHARGES K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#atomic-charges)
* [`SSR MULLIKEN SPINS K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#atomic-spins)
* [`SSR MULTIPOLES L=<l> K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#multipoles)
* [`SSR NAC <I> <J> CASSETTE <e>`](https://reksstudio.github.io/v2/manual/properties/index.md#nac)
* [`SSR NAC MODEL <I> <J> CASSETTE <e>`](https://reksstudio.github.io/v2/manual/properties/index.md#nac)
* [`SSR NAC RESIDUAL <I> <J> CASSETTE <e>`](https://reksstudio.github.io/v2/manual/properties/index.md#nac)
* [`SSR NATURAL OCCUPATIONS K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#natural-orbitals)
* [`SSR NATURAL ORBITALS ACTIVE STATE=<k> K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#natural-orbitals)
* [`SSR NATURAL ORBITALS AO STATE=<k> K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#natural-orbitals)
* [`SSR NDO AO ROOT <I> -> ROOT <J> K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#exciton)
* [`SSR NTO HOLES AO ROOT <I> -> ROOT <J> K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#nto)
* [`SSR NTO PARTICLES AO ROOT <I> -> ROOT <J> K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#nto)
* [`SSR NTO WEIGHTS K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#nto)
* [`SSR OSCILLATOR STRENGTHS K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#transition-dipole)
* [`SSR OSCILLATOR STRENGTHS VELOCITY K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#transition-velocity)
* [`SSR OVERLAP SPARSE K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#si-matrices)
* [`SSR PERMANENT DIPOLES K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#permanent-dipole)
* [`SSR QUADRUPOLES K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#quadrupole)
* [`SSR RADICAL INDICES K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#radical-character)
* [`SSR ROOT <I> GRADIENT CASSETTE <e>`](https://reksstudio.github.io/v2/manual/properties/index.md#nac)
* [`SSR ROOT <J> GRADIENT CASSETTE <e>`](https://reksstudio.github.io/v2/manual/properties/index.md#nac)
* [`SSR ROOT <r> GRADIENT CASSETTE <e>`](https://reksstudio.github.io/v2/manual/properties/index.md#state-gradient)
* [`SSR ROOT <r> RELAXED DENSITY CASSETTE <e>`](https://reksstudio.github.io/v2/manual/properties/index.md#relaxed-properties)
* [`SSR ROOT <r> RELAXED DIPOLE CASSETTE <e>`](https://reksstudio.github.io/v2/manual/properties/index.md#relaxed-properties)
* [`SSR ROOT <r> RELAXED LOWDIN CHARGES CASSETTE <e>`](https://reksstudio.github.io/v2/manual/properties/index.md#relaxed-properties)
* [`SSR ROOT <r> RELAXED MAYER INDICES CASSETTE <e>`](https://reksstudio.github.io/v2/manual/properties/index.md#relaxed-bond-indices)
* [`SSR ROOT <r> RELAXED MULLIKEN CHARGES CASSETTE <e>`](https://reksstudio.github.io/v2/manual/properties/index.md#relaxed-properties)
* [`SSR ROOT <r> RELAXED QUADRUPOLES CASSETTE <e>`](https://reksstudio.github.io/v2/manual/properties/index.md#relaxed-properties)
* [`SSR ROOT <r> RELAXED WIBERG LOWDIN INDICES CASSETTE <e>`](https://reksstudio.github.io/v2/manual/properties/index.md#relaxed-bond-indices)
* [`SSR ROTATORY STRENGTHS K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#transition-magnetic)
* [`SSR SI LIST`](https://reksstudio.github.io/v2/manual/properties/index.md#ssr-energies)
* [`SSR SPIN 1-RDM ACTIVE STATE=<k> K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#active-rdm)
* [SSR state energies](https://reksstudio.github.io/v2/manual/properties/index.md#ssr-energies)
* [`SSR STORED STATES K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#ssr-energies)
* [`SSR TRACELESS QUADRUPOLES K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#quadrupole)
* [`SSR TRANSITION DIPOLES K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#transition-dipole)
* [`SSR TRANSITION LOWDIN CHARGES K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#transition-charges)
* [`SSR TRANSITION MULLIKEN CHARGES K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#transition-charges)
* [`SSR TRANSITION MULTIPOLES L=<l> K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#multipoles)
* [`SSR TRANSITION QUADRUPOLES K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#transition-second-moments)
* [`SSR UNPAIRED ATOMIC POPULATIONS K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#radical-character)
* [`SSR VELOCITY TRANSITION DIPOLES K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#transition-velocity)
* [`SSR WIBERG LOWDIN INDICES K=<e>`](https://reksstudio.github.io/v2/manual/properties/index.md#bond-indices)
* [Start](https://reksstudio.github.io/v2/manual/index.md#overview)
* [Start REKS](https://reksstudio.github.io/v2/manual/first-calculation/index.md#start-reks)
* [`State analysis`](https://reksstudio.github.io/v2/options/SI_REKS_ANALYSIS.md)
* [`State interaction`](https://reksstudio.github.io/v2/options/SI_REKS_CONFIGS.md)
* [`State interaction: setup over the union of the SI cassettes`](https://reksstudio.github.io/v2/options/SI_REKS_CONFIGS.md)
* [State labels](https://reksstudio.github.io/v2/manual/setup/index.md#state-labels)
* State properties [Input](https://reksstudio.github.io/v2/manual/setup/index.md#state-properties)[Reference](https://reksstudio.github.io/v2/manual/reference/index.md#state-properties)
* [`State summary`](https://reksstudio.github.io/v2/manual/properties/index.md#ssr-energies)
* [States: SI-SA-REKS(2,3)](https://reksstudio.github.io/v2/manual/wide-geminals/index.md#wide-states)
* [Summary](https://reksstudio.github.io/v2/manual/properties/index.md#summary)
* [`Summary of the energy phase`](https://reksstudio.github.io/v2/manual/properties/index.md#files)
* [Surface hopping](https://reksstudio.github.io/v2/manual/dynamics/index.md#surface-hopping)

### T {#index-t}

* [Tasks](https://reksstudio.github.io/v2/manual/index.md#tasks)
* [The three engines](https://reksstudio.github.io/v2/manual/run-control/index.md#engines)
* [`Transition charges`](https://reksstudio.github.io/v2/manual/properties/index.md#transition-charges)
* [Transition dipole moments and length-form oscillator strengths](https://reksstudio.github.io/v2/manual/properties/index.md#transition-dipole)
* [`Transition second moments`](https://reksstudio.github.io/v2/manual/properties/index.md#transition-second-moments)
* [`Transitions`](https://reksstudio.github.io/v2/manual/properties/index.md#transition-dipole)
* [`TWO-ELECTRON ENERGY`](https://reksstudio.github.io/v2/manual/properties/index.md#sa-energy)

### U {#index-u}

* [Unknown configuration name or type](https://reksstudio.github.io/v2/manual/diagnose/index.md#diag-unknown-token)
* [Unrelaxed and relaxed densities](https://reksstudio.github.io/v2/manual/concepts/index.md#densities)
* [Unrelaxed state and transition properties](https://reksstudio.github.io/v2/manual/properties/index.md#unrelaxed-state-and-transition-properties)

### V {#index-v}

* [Variable names](https://reksstudio.github.io/v2/manual/properties/index.md#variable-names)
* [`Velocity and magnetic transition moments`](https://reksstudio.github.io/v2/manual/properties/index.md#transition-velocity)
* [Velocity-form transition moments and oscillator strengths](https://reksstudio.github.io/v2/manual/properties/index.md#transition-velocity)

### W {#index-w}

* [Which active space?](https://reksstudio.github.io/v2/manual/first-calculation/index.md#which-active-space)
* [Wide Geminals](https://reksstudio.github.io/v2/manual/wide-geminals/index.md#wide-geminals)
* Worked inputs [Start](https://reksstudio.github.io/v2/manual/index.md#worked-inputs)[First Calculation](https://reksstudio.github.io/v2/manual/first-calculation/index.md#first-inputs)[Wide Geminals](https://reksstudio.github.io/v2/manual/wide-geminals/index.md#wide-inputs)[Optimization and Dynamics](https://reksstudio.github.io/v2/manual/dynamics/index.md#dynamics-inputs)
