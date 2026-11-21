# Option table — REKS Studio Learn

HTML: <https://reksstudio.github.io/v2/learn/reference/options/>

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

[Learn](https://reksstudio.github.io/v2/learn/index.md) › Option table

# Option table

## Option table {#option-table}

[`GUESS_ACTIVE_WINDOW`](#row-guess_active_window) is a general SCF option; the others are REKS options. Seven options have an `REKS_`-prefixed alias, given under the option name; setting both names is an error.

### Active space {#active-space}

| Option | Default | Meaning | Used in |
| - | - | - | - |
| [`REKS`](https://reksstudio.github.io/v2/learn/reference/index.md#reks) `[N, M]` | — (required) | Active space `[N, M]`: N active electrons in M active orbitals; selects the catalog. | I want to… Every active space you can run today One electron pair: H₂, REKS(2,2) Twisted ethylene, REKS(2,2) Twisted ethylene without a seed Two pairs: butadiene, REKS(4,4) Singlets, triplets and the quintet of butadiene S1 gradient and S0/S1 coupling of twisted ethylene Procedure Start REKS Wide electron geminals Lone pair over three orbitals: BH, REKS(2,3) 3 Spin manifolds and J Singlets and triplets of linear H₄ · Singlets, triplets and the quintet of linear H₄ · Spin ladder of hexatriene, 2S = 0 to 6 · A triplet configuration in the SA ensemble State properties Dipoles, charges, NTOs, relaxed properties and EKT · Gradient and relaxed properties of a triplet Geometry optimization S0 minimum of ethylene with DL-FIND · T1 minimum of hexatriene Surface hopping Surface hopping of ethylene on S1 · Surface hopping of hexatriene on T1 Conical intersections S0/S1 MECI of ethylene with DL-FIND Solvers and control TRAH for the whole SCF: states of BH · Four SI cassettes from one SCF · Scan with restarts: linear H₄ · Small basis first: 6-31G(d) to cc-pVTZ Concepts Active space, core, virtual Input Minimal input · Explicit SA pool and SI cassettes · Required and rejected settings Active space and catalog `REKS_GEMINAL_WIDTHS` Spin manifolds (2S) and multi-manifold runs Input patterns Properties, gradients, couplings `SI_REKS_GRAD` Guesses and restarts `GUESS_ACTIVE_WINDOW` |

### Catalog {#catalog}

| Option | Default | Meaning | Used in |
| - | - | - | - |
| [`REKS_GEMINAL_WIDTHS`](https://reksstudio.github.io/v2/learn/reference/index.md#reks_geminal_widths) array | `[]` (all 2) | Units of the active space: electron or hole geminals, electron or hole doublets, one token each; selects the catalog. | Procedure Slots of each unit kind Wide electron geminals Lone pair over three orbitals: BH, REKS(2,3) 3 Solvers and control TRAH for the whole SCF: states of BH Concepts Unit · Pairing scheme Active space and catalog Fractional occupation numbers (FONs) |

### SA pool {#sa-pool}

| Option | Default | Meaning | Used in |
| - | - | - | - |
| [`SA_REKS_CONFIGS`](https://reksstudio.github.io/v2/learn/reference/index.md#sa_reks_configs) array · alias [`REKS_SA_CONFIGS`](#row-sa_reks_configs) | PPS + OSS pool of scheme 0 on the lowest manifold, 2S = N mod 2 | SA-REKS configuration pool: one block (flat list) or one block per spin manifold (nested list) of names, indices or bulk tokens. | Spin manifolds and J A triplet configuration in the SA ensemble State properties Gradient and relaxed properties of a triplet Solvers and control Four SI cassettes from one SCF Input Minimal input · Explicit SA pool and SI cassettes Spin manifolds (2S) and multi-manifold runs `SA_REKS_2SPIN` |
| [`SA_REKS_WEIGHTS`](https://reksstudio.github.io/v2/learn/reference/index.md#sa_reks_weights) array · alias [`REKS_SA_WEIGHTS`](#row-sa_reks_weights) | uniform `1/n` | Weights of the SA pool entries, configurations first, then the [`sa_reks_extra`](#row-sa_reks_extra) determinants; non-negative, summing to 1. | State properties Gradient and relaxed properties of a triplet Solvers and control Four SI cassettes from one SCF Concepts SA-REKS ensemble and weights Input Minimal input · Explicit SA pool and SI cassettes SA pool and SI cassettes `SA_REKS_CONFIGS` · `SA_REKS_EXTRA` Properties SCF |
| [`SA_REKS_EXTRA`](https://reksstudio.github.io/v2/learn/reference/index.md#sa_reks_extra) array of arrays · alias [`REKS_SA_EXTRA`](#row-sa_reks_extra) | none | Extra Slater determinants of the SA ensemble, as occupation vectors; each has its own weight, carries no FON and enters no SI cassette. | Two pairs: butadiene, REKS(4,4) Window, measured Singlets, triplets and the quintet of butadiene Procedure Start REKS Spin manifolds and J Singlets and triplets of linear H₄ · Singlets, triplets and the quintet of linear H₄ · Spin ladder of hexatriene, 2S = 0 to 6 · A triplet configuration in the SA ensemble Geometry optimization T1 minimum of hexatriene Surface hopping Surface hopping of hexatriene on T1 Solvers and control TRAH for the whole SCF: states of BH Concepts SA-REKS ensemble and weights SA pool and SI cassettes `SA_REKS_CONFIGS` · `SA_REKS_WEIGHTS` Spin manifolds (2S) and multi-manifold runs Input patterns |

### SI cassettes {#si-cassettes}

| Option | Default | Meaning | Used in |
| - | - | - | - |
| [`SI_REKS_CONFIGS`](https://reksstudio.github.io/v2/learn/reference/index.md#si_reks_configs) array · alias [`REKS_SI_CONFIGS`](#row-si_reks_configs) | one full-block cassette, lowest manifold | SI-SA-REKS cassettes: the configuration sets whose secular equations give the states, in groups per spin manifold. | Singlets, triplets and the quintet of butadiene Spin manifolds and J Singlets and triplets of linear H₄ · Singlets, triplets and the quintet of linear H₄ · Spin ladder of hexatriene, 2S = 0 to 6 · A triplet configuration in the SA ensemble State properties Gradient and relaxed properties of a triplet Solvers and control TRAH for the whole SCF: states of BH · Four SI cassettes from one SCF Concepts SI cassette Input Minimal input · Explicit SA pool and SI cassettes Spin manifolds (2S) and multi-manifold runs `SI_REKS_2SPIN` · Input patterns · Cassette order Properties, gradients, couplings Properties Rules for all entries |
| [`SI_REKS_PRINT_STATES`](https://reksstudio.github.io/v2/learn/reference/index.md#si_reks_print_states) int | `5` | States per cassette whose per-state and pair tables are printed; 0 = none, -1 = all. | Concepts SI eigensolver Diagnose Ghost states and a collapsed SI spectrum SA pool and SI cassettes `SI_REKS_SOLVER` Properties Rules for all entries · SSR states |
| [`SI_REKS_STORE_STATES`](https://reksstudio.github.io/v2/learn/reference/index.md#si_reks_store_states) array of int · alias [`REKS_SI_STORE_STATES`](#row-si_reks_store_states) | all; the first 10 if `M ≥ 6` and > 10 configurations | States per cassette whose properties are stored on the wavefunction (arrays, Molden and cube files); 0 = none, -1 = all. | Concepts SI eigensolver Diagnose Ghost states and a collapsed SI spectrum SA pool and SI cassettes `SI_REKS_CONFIGS` · `SI_REKS_PRINT_STATES` · `SI_REKS_SOLVER` Spin manifolds (2S) and multi-manifold runs `SI_REKS_2SPIN` · Cassette order Reading the output Files Properties Rules for all entries · SSR states |
| [`SI_REKS_OVERLAP_CUTOFF`](https://reksstudio.github.io/v2/learn/reference/index.md#si_reks_overlap_cutoff) double | `1e-10` | Overlap eigenvalues <code>s ≤ cutoff · s<sub>max</sub></code> of the SI basis are treated as null space and dropped. | Concepts SI Hamiltonian and overlap Diagnose Ghost states and a collapsed SI spectrum |
| [`SI_REKS_SOLVER`](https://reksstudio.github.io/v2/learn/reference/index.md#si_reks_solver) `AUTO`\|`DIRECT`\|`DAVIDSON` | `AUTO` | Eigensolver of each SI cassette: LAPACK on every root, or Davidson on the lowest roots. | Concepts SI eigensolver Properties SSR states |
| [`SI_REKS_DAVIDSON_R_CONVERGENCE`](https://reksstudio.github.io/v2/learn/reference/index.md#si_reks_davidson_r_convergence) double | `1e-12` | Residual norm in E_h each Davidson root of the SI problem converges to. | |

### Spin manifolds {#spin-manifolds}

| Option | Default | Meaning | Used in |
| - | - | - | - |
| [`SA_REKS_2SPIN`](https://reksstudio.github.io/v2/learn/reference/index.md#sa_reks_2spin) array · alias [`REKS_SA_2SPIN`](#row-sa_reks_2spin) | ladder, lowest manifold | Spin manifold 2S of each SA block, one integer per block. | Spin manifolds and J A triplet configuration in the SA ensemble Active space and catalog `REKS` SA pool and SI cassettes `SA_REKS_CONFIGS` · `SA_REKS_WEIGHTS` Spin manifolds (2S) and multi-manifold runs |
| [`SI_REKS_2SPIN`](https://reksstudio.github.io/v2/learn/reference/index.md#si_reks_2spin) array · alias [`REKS_SI_2SPIN`](#row-si_reks_2spin) | ladder, lowest manifold | 2S of each SI group; more than one entry requires the 3-level [`si_reks_configs`](#row-si_reks_configs) form. | Singlets, triplets and the quintet of butadiene Spin manifolds and J Singlets and triplets of linear H₄ · Spin ladder of hexatriene, 2S = 0 to 6 · A triplet configuration in the SA ensemble Geometry optimization T1 minimum of hexatriene Surface hopping Surface hopping of hexatriene on T1 Solvers and control TRAH for the whole SCF: states of BH Active space and catalog `REKS` SA pool and SI cassettes `SI_REKS_CONFIGS` · `SI_REKS_STORE_STATES` Spin manifolds (2S) and multi-manifold runs `SA_REKS_2SPIN` · Input patterns · Cassette order Properties, gradients, couplings `SI_REKS_PROPERTY_FOR` · `SI_REKS_GRAD` · `SI_REKS_NAC` Properties SSR states |

### State properties {#state-properties}

| Option | Default | Meaning | Used in |
| - | - | - | - |
| [`SI_REKS_ANALYSIS`](https://reksstudio.github.io/v2/learn/reference/index.md#si_reks_analysis) array | all blocks except multipoles > 2 | State-property blocks of the SI states to compute, print and store (moments, charges, bond indices, NTO, exciton, …). | State properties Dipoles, charges, NTOs, relaxed properties and EKT Concepts Unrelaxed and relaxed densities Properties, gradients, couplings State properties Reading the output Files Properties Rules for all entries · Unrelaxed state and transition properties · Gradients, NAC, conical intersections |
| [`SI_REKS_ANALYSIS_CHANGE_MIN`](https://reksstudio.github.io/v2/learn/reference/index.md#si_reks_analysis_change_min) double | `0.1` | Smallest state-to-state change of a charge or bond index that is printed. | Properties Unrelaxed state and transition properties |
| [`SI_REKS_PROPERTY_FOR`](https://reksstudio.github.io/v2/learn/reference/index.md#si_reks_property_for) array of arrays | `[]` | States, per cassette, whose dipole, quadrupole, charges and bond indices are evaluated with the relaxed (CP-REKS) density. | State properties Dipoles, charges, NTOs, relaxed properties and EKT · Gradient and relaxed properties of a triplet Concepts SI eigensolver · Unrelaxed and relaxed densities SA pool and SI cassettes `SI_REKS_STORE_STATES` · `SI_REKS_SOLVER` Spin manifolds (2S) and multi-manifold runs `SI_REKS_2SPIN` · Cassette order Properties, gradients, couplings State properties · `SI_REKS_ANALYSIS` · `REKS_EKT` · `SI_REKS_GRAD` · `REKS_CPREKS_CONV` Properties Rules for all entries · Relaxed properties and EKT |
| [`REKS_EKT`](https://reksstudio.github.io/v2/learn/reference/index.md#reks_ekt) bool | `false` | Enables EKT: ionization energies, pole strengths and Dyson orbitals of the [`si_reks_property_for`](#row-si_reks_property_for) states or of the SA ensemble. | State properties Dipoles, charges, NTOs, relaxed properties and EKT Concepts Orbitals, orbital energies, SCF convergence Properties, gradients, couplings State properties · `SI_REKS_ANALYSIS` Properties Rules for all entries · Relaxed properties and EKT |
| [`REKS_EKT_OCC_TOL`](https://reksstudio.github.io/v2/learn/reference/index.md#reks_ekt_occ_tol) double | `1e-6` | Cutoff on the density eigenvalues: those at or below it are dropped from the EKT metric. | Properties Relaxed properties and EKT |

### Gradients and couplings {#gradients-and-couplings}

| Option | Default | Meaning | Used in |
| - | - | - | - |
| [`SI_REKS_GRAD`](https://reksstudio.github.io/v2/learn/reference/index.md#si_reks_grad) array of arrays | `[]` (SA ensemble) | Roots whose analytic gradients are computed, per cassette; the first listed root is followed (`CURRENT ENERGY`, returned gradient). | S1 gradient and S0/S1 coupling of twisted ethylene State properties Dipoles, charges, NTOs, relaxed properties and EKT · Gradient and relaxed properties of a triplet Geometry optimization S0 minimum of ethylene with DL-FIND · T1 minimum of hexatriene Surface hopping Conical intersections S0/S1 MECI of ethylene with DL-FIND Concepts SI eigensolver Diagnose Quasi-degenerate roots Input Explicit SA pool and SI cassettes · Worked inputs SA pool and SI cassettes `SI_REKS_STORE_STATES` · `SI_REKS_SOLVER` Spin manifolds (2S) and multi-manifold runs `SI_REKS_2SPIN` · Cassette order Properties, gradients, couplings `SI_REKS_NAC` · `REKS_CPREKS_CONV` Properties SCF · Gradients, NAC, conical intersections |
| [`SI_REKS_NAC`](https://reksstudio.github.io/v2/learn/reference/index.md#si_reks_nac) array | `[]` | Root pairs `[I, J]` per cassette whose nonadiabatic couplings and conical-intersection topography are computed. | S1 gradient and S0/S1 coupling of twisted ethylene State properties Dipoles, charges, NTOs, relaxed properties and EKT Surface hopping Concepts SI eigensolver Input Explicit SA pool and SI cassettes SA pool and SI cassettes `SI_REKS_STORE_STATES` Spin manifolds (2S) and multi-manifold runs `SI_REKS_2SPIN` · Cassette order Properties, gradients, couplings `SI_REKS_GRAD` · `REKS_CPREKS_CONV` Properties Gradients, NAC, conical intersections |
| [`REKS_CPREKS_CONV`](https://reksstudio.github.io/v2/learn/reference/index.md#reks_cpreks_conv) double | `1e-9` | Residual threshold of the CP-REKS (Z-vector) solver. [`reks_cpreks_maxiter`](#row-reks_cpreks_maxiter) (200) bounds its rounds. | S1 gradient and S0/S1 coupling of twisted ethylene Surface hopping Surface hopping of hexatriene on T1 Properties Gradients, NAC, conical intersections |
| [`REKS_CPREKS_MAXITER`](https://reksstudio.github.io/v2/learn/reference/index.md#reks_cpreks_maxiter) int | `200` | Maximum number of rounds of the CP-REKS (Z-vector) solver; exceeding it stops the run with the residual reached. | Properties, gradients, couplings `REKS_CPREKS_CONV` |
| [`REKS_GRAD_DEGEN_TOL`](https://reksstudio.github.io/v2/learn/reference/index.md#reks_grad_degen_tol) double | `1e-6` | Gap below which a requested root is flagged as quasi-degenerate. | Concepts SI eigensolver Properties Gradients, NAC, conical intersections |
| [`REKS_CI_TOPOGRAPHY_GAP`](https://reksstudio.github.io/v2/learn/reference/index.md#reks_ci_topography_gap) double | `5e-3` | Largest gap at which the topography table of a NAC pair is printed. | Conical intersections Topography of a conical intersection Diagnose Quasi-degenerate roots Properties Gradients, NAC, conical intersections |

### Guess {#guess}

| Option | Default | Meaning | Used in |
| - | - | - | - |
| [`GUESS_ACTIVE_WINDOW`](https://reksstudio.github.io/v2/learn/reference/run-control/index.md#guess_active_window) array | `[]` (off) | MOs of the read guess placed in the active columns, one token per active orbital: 0-based index, `HOMO-k` or `LUMO+k`. | Two pairs: butadiene, REKS(4,4) Singlets, triplets and the quintet of butadiene Procedure Slots of each unit kind · Start REKS Wide electron geminals Bond and lone pair: BH, REKS(4,5) 2 3 Spin manifolds and J Spin ladder of hexatriene, 2S = 0 to 6 · A triplet configuration in the SA ensemble Geometry optimization T1 minimum of hexatriene Diagnose SCF converges instantly to a wrong energy after a restart Guesses and restarts |

### FONs {#fons}

| Option | Default | Meaning | Used in |
| - | - | - | - |
| [`REKS_FON_INTERP_DELTA`](https://reksstudio.github.io/v2/learn/reference/run-control/index.md#reks_fon_interp_delta) double | `0.4` | Parameter δ of the factor f(n_p n_q) that multiplies the coupling term of each geminal in the REKS energy. | Concepts Unit · Coupling Δ and factor f |
| [`REKS_<L>_FON`](https://reksstudio.github.io/v2/learn/reference/run-control/index.md#reks_l_fon) double | `-1.0` each | Lower bound on the free FON n_p of every geminal of one FON generation ([`reks_n_fon`](#row-reks_l_fon), [`reks_m_fon`](#row-reks_l_fon), …); negative disables it. | Solvers and control Lower bound on the FONs of a generation Diagnose FONs of a geminal invert Active space and catalog FON sets Fractional occupation numbers (FONs) |

### FON micro-solver {#fon-micro-solver}

[FON micro-solver](https://reksstudio.github.io/v2/learn/reference/run-control/index.md#fon-micro)

| Option | Default | Meaning | Used in |
| - | - | - | - |
| `REKS_FON_MICRO_NR_MAXITER` int | `20` | Newton iteration cap per geminal block per SCF iteration. | |
| `REKS_FON_MICRO_LS_MAXITER` int | `20` | Armijo backtracking (step halving) cap inside one Newton step. | |
| `REKS_FON_MICRO_CONVERGENCE` double | `1e-12` | Step-norm convergence threshold. | |
| `REKS_FON_MICRO_MIN_EIGENVALUE` double | `1e-8` | Floor on the absolute eigenvalues of the reduced Hessian; negative curvature is flipped. | |
| `REKS_FON_MICRO_BOUND_MARGIN` double | `1e-8` | Margin m of the SCF FON box \[ℓ, 2 − m] kept by the FON micro-solver and the TRAH step, in (0, 1); SI box: [`SI_REKS_FON_BOUND_MARGIN`](#row-si_reks_fon_bound_margin). | Fractional occupation numbers (FONs) `REKS_<L>_FON` |
| `REKS_FON_MICRO_BOUNDARY_SKIN` double | `0.05` | A generation-0 multi-start seed landing within this distance of 0 or 2 counts as boundary-trapped and loses to an interior minimum. | |
| `SI_REKS_FON_BOUND_MARGIN` double | `1e-8` | Margin m of the box \[m, 2 − m] of the SI-only FONs ([SI-only FONs](https://reksstudio.github.io/v2/learn/concepts/index.md#si-only-fons)) and of their CP-REKS at-bound test, in \[0, 1). | Concepts SI-only FONs |

### Convergence engines {#convergence-engines}

| Option | Default | Meaning | Used in |
| - | - | - | - |
| [`REKS_USE_TRAH`](https://reksstudio.github.io/v2/learn/reference/run-control/index.md#reks_use_trah) bool | `false` | Trust-region Newton (TRAH) step on the active–active rotations and FONs: warm-up before GVB-DIIS, or the whole SCF without it. | Spin manifolds and J Singlets and triplets of linear H₄ · Singlets, triplets and the quintet of linear H₄ Solvers and control TRAH for the whole SCF: states of BH Diagnose SCF oscillates or cycles SCF convergence engines The three engines · `REKS_DIIS_ACTIVATION` · `REKS_DIIS_CFM_ACTIVATION_GORB` Geminal delocalization `REKS_GEMINAL_DELOC` |
| [`REKS_GVB_DIIS`](https://reksstudio.github.io/v2/learn/reference/run-control/index.md#reks_gvb_diis) bool | `true` | GVB-DIIS accelerator of the orbital optimization, in the formulation set by [`reks_diis_formulation`](#row-reks_diis_formulation). | Solvers and control TRAH for the whole SCF: states of BH SCF convergence engines The three engines Geminal delocalization `REKS_GEMINAL_DELOC` Properties SCF |
| [`REKS_DIIS_FORMULATION`](https://reksstudio.github.io/v2/learn/reference/run-control/index.md#reks_diis_formulation) `CFM`\|`ORBITAL` | `ORBITAL` | GVB-DIIS formulation: extrapolation of the orbital-rotation generators κ, or of the composite multishell Fock matrix (`CFM`). | Diagnose SCF oscillates or cycles SCF convergence engines `REKS_GVB_DIIS` · `REKS_GVB_LEVEL_SHIFT` |
| [`REKS_GVB_DIIS_START`](https://reksstudio.github.io/v2/learn/reference/run-control/index.md#reks_gvb_diis_start) int | `3` | First SCF iteration of GVB-DIIS; earlier iterations run the level-shifted burn-in or TRAH. | SCF convergence engines The three engines · `REKS_DIIS_ACTIVATION` · `REKS_DIIS_CFM_ACTIVATION_GORB` |
| [`REKS_DIIS_ACTIVATION`](https://reksstudio.github.io/v2/learn/reference/run-control/index.md#reks_diis_activation) `ITERATION`\|`GRADIENT` | `ITERATION` | Criterion for `ORBITAL` GVB-DIIS to take over from the TRAH warm-up: the iteration count alone, or also the orbital gradient. | SCF convergence engines The three engines · `REKS_DIIS_CFM_ACTIVATION_GORB` |
| [`REKS_DIIS_CFM_ACTIVATION_GORB`](https://reksstudio.github.io/v2/learn/reference/run-control/index.md#reks_diis_cfm_activation_gorb) double | `1e-3` | Orbital-gradient norm ‖g_orb‖\_F below which GVB-DIIS takes over from the TRAH warm-up. | SCF convergence engines The three engines · `REKS_DIIS_ACTIVATION` |
| [`REKS_GVB_ROBUST_VERDICT`](https://reksstudio.github.io/v2/learn/reference/run-control/index.md#reks_gvb_robust_verdict) bool | `true` | Enables the post-hoc verdict that rewinds extrapolated GVB-DIIS steps whose orbital gradient grows. | |
| [`REKS_GVB_LEVEL_SHIFT`](https://reksstudio.github.io/v2/learn/reference/run-control/index.md#reks_gvb_level_shift) double | `1.0` (CFM only) | Shell gap of the multishell Fock matrix in the `CFM` formulation of GVB-DIIS. | |

### Level shift {#level-shift}

| Option | Default | Meaning | Used in |
| - | - | - | - |
| [`LEVEL_SHIFT_ADAPT`](https://reksstudio.github.io/v2/learn/reference/run-control/index.md#level_shift_adapt) bool | `true` | Adaptive base of the staircase level shift: decays while the orbitals are stable, grows back up to `level_shift` on swaps or strong mixing. | |

### GVB-DIIS conditioning chain (expert) {#gvb-diis-conditioning-chain-expert}

[GVB-DIIS conditioning chain (expert)](https://reksstudio.github.io/v2/learn/reference/run-control/index.md#diis-conditioning)

| Option | Default | Meaning | Used in |
| - | - | - | - |
| `REKS_DIIS_COND_ANGLE_FILTER` | `true` | Enables the angle filter with stale-drop that prunes near-dependent and stale GVB-DIIS error vectors. | SCF convergence engines |
| `REKS_DIIS_COND_ANGLE_CUTOFF` | `0.1` | Angle-filter cutoff c_s: smallest sine of the angle to the kept differences for a GVB-DIIS error vector to stay. | SCF convergence engines |
| `REKS_DIIS_COND_STALE_DELTA` | `1e-4` | Stale-drop threshold δ: GVB-DIIS error vectors with norm above the newest norm / √δ are dropped; 0 switches it off. | SCF convergence engines |
| `REKS_DIIS_COND_KAPPA_BYPASS` | `1e9` | Condition number of the GVB-DIIS error matrix above which the SVD-conditioned solve replaces the plain bordered solve. | |
| `REKS_DIIS_COND_SVD_RCOND` | `1e-8` | Relative singular-value cutoff of the SVD-conditioned GVB-DIIS solve. | |
| `REKS_DIIS_COND_COEFF_NORM_MAX` | `1e3` | Bound c_max on the GVB-DIIS coefficient norm \|c\|², also used by the angle filter to drop near-duplicate error vectors. | SCF convergence engines |
| `REKS_DIIS_COND_TIKHONOV` | `true` | Enables the Tikhonov ridge on the SVD-conditioned GVB-DIIS solve. | |
| `REKS_DIIS_COND_TIKHONOV_SCALE` | `0.0` | Ridge magnitude of the Tikhonov-regularized GVB-DIIS SVD solve; 0 applies no ridge. | |

### GVB-DIIS monitors / verdicts (expert) {#gvb-diis-monitors-verdicts-expert}

[GVB-DIIS monitors / verdicts (expert)](https://reksstudio.github.io/v2/learn/reference/run-control/index.md#diis-monitors)

| Option | Default | Meaning | Used in |
| - | - | - | - |
| `REKS_DIIS_MON_VERDICT_RHO` | `1.5` | Verdict trip ratio: a GVB-DIIS step is rewound when ‖g_orb‖ exceeds this multiple of its maximum over the recent iterates. | SCF convergence engines `REKS_GVB_ROBUST_VERDICT` |
| `REKS_DIIS_MON_VERDICT_STREAK` | `3` | Consecutive verdict rewinds without a new best iterate before GVB-DIIS restarts from the best iterate. | |
| `REKS_DIIS_MON_SUPPRESS_WINDOW` | `3` | Iterations after a GVB-DIIS rewind, restart or switch during which the verdict is suspended. | |
| `REKS_DIIS_MON_NONMONOTONE_M` | `3` | Depth M of the nonmonotone references of the GVB-DIIS monitors: max ‖g_orb‖ and min E_SA over the last M iterates. | |
| `REKS_GVB_GATE_STREAK` | `2` | Consecutive iterations meeting the energy and gradient thresholds before GVB-DIIS reports convergence. | SCF convergence engines The three engines |
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
| [`REKS_GEMINAL_DELOC`](https://reksstudio.github.io/v2/learn/reference/run-control/index.md#reks_geminal_deloc) bool | `false` | After the SCF, rotates generation-0 pairs past the IPR midpoint to their IPR minimum and reconverges; kept if lower in E_SA. | Solvers and control Delocalizing localized active orbitals Diagnose A lower ensemble energy from another start · Active orbitals localize on one fragment Geminal delocalization Reading the output `REKS_REPORT_LEVEL` |

### Reporting {#reporting}

| Option | Default | Meaning | Used in |
| - | - | - | - |
| [`REKS_REPORT_LEVEL`](https://reksstudio.github.io/v2/learn/reference/output/index.md#reks_report_level) int (1–5) | `2` | Verbosity of the REKS output, 1–5: from the SCF trace and energetics up to per-iteration solver traces and intermediate matrices. | Concepts SI Hamiltonian and overlap · Coupling damping below 100 % exact exchange Diagnose SCF hits MAXITER or continues unconverged · Ghost states and a collapsed SI spectrum Properties, gradients, couplings `REKS_CPREKS_CONV` Fractional occupation numbers (FONs) `REKS_<L>_FON` SCF convergence engines Reading the output Print order · Run report Properties Rules for all entries · SCF · SSR states · Unrelaxed state and transition properties · Relaxed properties and EKT |
