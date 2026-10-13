# Run control — REKS Studio Manual

HTML: <https://reksstudio.github.io/v2/manual/run-control/>

Psi4 d40267fc2, 2026-10-13: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

[Manual](https://reksstudio.github.io/v2/manual/index.md) › Run control

# Run control

Chapters 11–14 of the REKS Studio user manual

## 11. Guesses and Restarts {#guesses}

Restarts use Psi4 checkpoints; `GUESS_ACTIVE_WINDOW` places the read orbitals in the active space. Seeding a first calculation: [§3](https://reksstudio.github.io/v2/manual/first-calculation/index.md#first-calculation).

### Restart mechanism {#restart}

```python
E, wfn = psi4.energy("bhhlyp", restart_file="name.wfn.npy", return_wfn=True)   # read a checkpoint
wfn.to_file("name.wfn")                                                          # writes name.wfn.npy
```

* `restart_file` names a serialized `Wavefunction` (`.wfn.npy`). For a `.npy` file the driver sets `GUESS READ` and prints `Found user provided orbital data. Setting orbital guess to READ`. `psi4.core.Wavefunction.from_file(...)` only loads the file into a Python object; the SCF guess does not use it.
* A `restart_file` that names no file stops the run before the SCF with `FileNotFoundError`: `energy()` with Psi4's `No such file or directory`, `gradient()`, `optimize()` and `hessian()` with the path looked for and the current directory. These three read only `.npy` files; an existing file of another type, or an item that is not a path, is a `ValidationError`. A relative path is taken from the current directory at the moment of the call (an absolute path for drivers that change directory, [Worked inputs](https://reksstudio.github.io/v2/manual/dynamics/index.md#dynamics-inputs)).
* `"df_scf_guess"` acts only with `scf_type DIRECT`, where it runs a density-fitted SCF before the exact-integral SCF.
* Restart points: the previous geometry of a scan, a lower-level pre-optimization, a run that hit `maxiter` ([SCF hits MAXITER or continues unconverged](https://reksstudio.github.io/v2/manual/diagnose/index.md#diag-maxiter)), or an RKS run at the same geometry ([Seed orbitals](https://reksstudio.github.io/v2/manual/first-calculation/index.md#seed-orbitals)).

A scan ([Scans](https://reksstudio.github.io/v2/manual/first-calculation/index.md#first-scans)) in code; `psi4.core.clean()` removes the scratch files of the finished point:

```python
psi4.set_options({"basis": "6-31g", "scf_type": "pk", "reference": "reks", "reks": [4, 4]})
restart = {}
for r in (1.4, 1.5, 1.6):
    psi4.geometry(f"H 0 0 0\nH 0 0 {r}\nH 0 0 {2 * r}\nH 0 0 {3 * r}\nsymmetry c1")
    e, wfn = psi4.energy("bhhlyp", return_wfn=True, **restart)
    wfn.to_file(f"h4_{r}.wfn")
    restart = {"restart_file": f"h4_{r}.wfn.npy"}
    psi4.core.clean()
```

Linear H₄, BH\&HLYP/6-31G: the restarted point 1.6 Å and a cold SAD start reach the same E = −1.884453547559 E<sub>h</sub>.

`Pre-Iterations` reports the guess. A REKS restart file restores the orbitals and the FON sets of the run that wrote it; the `REKS orbitals` line is printed at every level:

```log
==> Pre-Iterations <==

SCF Guess: REKS orbitals restored from previous computation (REKS::guess override).

    FON sets restored from the saved wavefunction:
    n: n_a = 1.970714, n_b = 1.390406;
    m: m_a = 1.970145, m_b = 1.389772.
[...]
  REKS orbitals: core 6 / active 4 (4 electrons) / virtual 28
```

`MOLDEN_WRITE` (standard Psi4) writes the final orbitals to a Molden file for inspection of the active window ([Files](https://reksstudio.github.io/v2/manual/properties/index.md#files)).

#### `GUESS_ACTIVE_WINDOW` {#guess_active_window}

MOs of the read guess placed in the active columns, one token per active orbital: 0-based index, `HOMO-k` or `LUMO+k`.

Type: array

Default: `[]` (off)

```python
"guess_active_window": ["HOMO-1", "HOMO", "LUMO", "LUMO+1"],
```

* Moves the listed MOs of the read guess into the active MO columns by column swaps, one token per active orbital, in active-column order; a displaced MO takes the vacated column. Token order sets the pairs ([Pairing scheme](https://reksstudio.github.io/v2/manual/concepts/index.md#pairing-scheme), [Choose the pairs](https://reksstudio.github.io/v2/manual/first-calculation/index.md#choose-pairs)). The call above is for `reks [4, 4]`.
* Tokens: 0-based MO indices or `HOMO`, `LUMO`, `HOMO-k`, `LUMO+k` of the loaded α occupation. The `GUESS READ: active window` line reports the resolved columns and swaps ([SCF converges instantly to a wrong energy after a restart](https://reksstudio.github.io/v2/manual/diagnose/index.md#diag-wrong-window)).
* Requires `guess read` (a REKS run stops with a `ValidationError` otherwise); a non-REKS reference ignores the option. C1 only.
* If projection onto the current basis drops a read MO as linearly dependent, `REKS READ: WARNING` names it; the later columns shift, and the window may no longer match.

## 12. Fractional Occupation Numbers (FONs) {#fons}

Each geminal pair carries FONs with $n_p + n_q = 2$ ([Geminals](https://reksstudio.github.io/v2/manual/concepts/index.md#geminals)); the free FON $n_p$ (first orbital of the pair) lies in a box, kept by the FON micro-solver and the TRAH step (FONs restored from a REKS restart file are clamped to $[m, 2 - m]$):

$$
n_p \in [\,\ell,\; 2 - m\,], \qquad \ell = \begin{cases} \texttt{REKS\_<L>\_FON} & \text{if} \ge 0 \\ m & \text{otherwise} \end{cases}, \qquad m = \texttt{REKS\_FON\_MICRO\_BOUND\_MARGIN}.
$$

A FON pushed past an end of the box stops on it, and the SCF counts it converged there. Generation-0 geminals are kept in descending occupation by reordering their orbitals, columns and FONs of every set together (the energy is unchanged): the first FON step orders each geminal, later a two-orbital pair whose FON crosses 1 swaps its orbitals and a wider geminal is reordered when its order changes. Without `REKS_USE_TRAH` the printed generation-0 FONs therefore have $n_p \ge n_q$, with one exception: in an SA ensemble over several spin sectors a pair swaps when its FON crosses 1 in any sector, which can leave the printed FON below 1. TRAH steps move the FONs without reordering. FONs of higher generations are never reordered and can have $n_p < n_q$. Outside TRAH steps FONs are optimized every SCF iteration by a projected-Newton micro-solver with Armijo backtracking: one joint Newton solve over all FONs of a (sector, generation) block, the other blocks held fixed. FONs are stored per FON set; each generation has its own lower-bound option ([`REKS_<L>_FON`](https://reksstudio.github.io/v2/options/REKS_N_FON.md)).

#### `REKS_FON_INTERP_DELTA` {#reks_fon_interp_delta}

Parameter δ of the factor f(n_p n_q) that multiplies the coupling term of each geminal in the REKS energy.

Type: double

Default: `0.4`

```python
"reks_fon_interp_delta": 0.4,
```

* Parameter δ ≥ 0 of the factor f(x), x = n<sub>p</sub> n<sub>q</sub>, that multiplies the coupling Δ of each geminal in the energy ([Coupling Δ and factor f](https://reksstudio.github.io/v2/manual/concepts/index.md#coupling)).

#### `REKS_<L>_FON` {#reks_l_fon}

Lower bound on the free FON n_p of every geminal of one FON generation (`reks_n_fon`, `reks_m_fon`, …); negative disables it.

Type: double

Default: `-1.0` each

```python
"reks_m_fon": 1.0,
```

```log
[REKS] REKS_M_FON lower bound = 1.00000000 (experimental limiter active)
```

```log
[REKS] WARNING: REKS_M_FON=2.50000000 exceeds maximum valid floor 1.99999999; clamped (FON frozen at upper boundary).
```

* One option per FON generation ([FON sets](https://reksstudio.github.io/v2/manual/setup/index.md#fon-sets)). A non-negative value ℓ is the lower end of the box of the free FON n<sub>p</sub> of every geminal of that generation ([§12](https://reksstudio.github.io/v2/manual/run-control/index.md#fons)): n<sub>p</sub> stays variable in \[ℓ, 2 − m], m = `REKS_FON_MICRO_BOUND_MARGIN`.
* The call above restricts n<sub>p</sub> of every generation-1 geminal to \[1, 2 − m]: it excludes n<sub>p</sub> \< n<sub>q</sub>, and n<sub>p</sub> may still reach the closed-shell limit 2 ([FONs of a geminal invert](https://reksstudio.github.io/v2/manual/diagnose/index.md#diag-fon-inverted)). At `REKS_REPORT_LEVEL` ≥ 4 an active floor prints the first line above.
* A value above 2 − m is clamped to 2 − m and the FON is frozen there, with the warning above (`REKS_M_FON` 2.5). Negative (the default) disables the bound; the lower end is then m.

FON micro-solver traces are printed at `REKS_REPORT_LEVEL` ≥ 4.

#### FON micro-solver {#fon-micro}

| Option | Default | Meaning |
| - | - | - |
| `REKS_FON_MICRO_NR_MAXITER` | `20` | Newton iteration cap per geminal block per SCF iteration. |
| `REKS_FON_MICRO_LS_MAXITER` | `20` | Armijo backtracking (step halving) cap inside one Newton step. |
| `REKS_FON_MICRO_CONVERGENCE` | `1e-12` | Step-norm convergence threshold. |
| `REKS_FON_MICRO_MIN_EIGENVALUE` | `1e-8` | Floor on the absolute eigenvalues of the reduced Hessian; negative curvature is flipped. |
| `REKS_FON_MICRO_BOUND_MARGIN` | `1e-8` | Margin m of the SCF FON box \[ℓ, 2 − m] kept by the FON micro-solver and the TRAH step; must lie in (0, 1). |
| `REKS_FON_MICRO_BOUNDARY_SKIN` | `0.05` | A generation-0 multi-start seed landing within this distance of 0 or 2 counts as boundary-trapped and loses to an interior minimum. |

## 13. SCF Convergence Engines {#scf-engines}

Three engines optimize the orbitals and FONs; most runs set at most `LEVEL_SHIFT` and `REKS_USE_TRAH`.

### The three engines {#engines}

| `REKS_USE_TRAH` | `REKS_GVB_DIIS` | Iterations (trace tag) |
| - | - | - |
| false (default) | true (default) | the first `REKS_GVB_DIIS_START` − 1 iterations are level-shifted Fock steps without an accelerator (`SHIFT`), then GVB-DIIS |
| true | true | TRAH warm-up (`TRAH/SHIFT`); GVB-DIIS from iteration `REKS_GVB_DIIS_START`, with `CFM`, and with `ORBITAL` under `REKS_DIIS_ACTIVATION` `GRADIENT`, once ‖**g**<sub>orb</sub>‖<sub>F</sub> \< `REKS_DIIS_CFM_ACTIVATION_GORB` |
| true | false | TRAH for the entire SCF |
| false | false | level-shifted Fock steps (`PLAIN/SHIFT`) |

`Iterations` prints one line per SCF iteration: `@REKS iter` (`@DF-REKS iter` with density fitting), the SA-REKS energy, its change, `RMS |[F,D]|` and the engine tag. `RMS |[F,D]|` is compared with `D_CONVERGENCE`; with $n$ the number of MOs it is

$$
\mathrm{RMS} = \begin{cases} \lVert \mathbf g_{\mathrm{orb}} \rVert_F / n & \text{GVB-DIIS}\\ \max\!\big(\sqrt{\lVert \mathbf g_{\mathrm{orb}} \rVert^2 + \lVert \mathbf g_{\mathrm{FON}} \rVert^2},\ \lVert \mathbf V - \mathbf 1 \rVert_F\big) / n & \text{TRAH}\\ \mathrm{rms}(\mathbf{FDS} - \mathbf{SDF}) & \text{otherwise} \end{cases}
$$

with $\mathbf g_{\mathrm{orb}}$, $\mathbf g_{\mathrm{FON}}$ the orbital and FON gradients and $\mathbf V$ the rotation that canonicalizes the current orbitals within their roles. GVB-DIIS converges when $|\Delta E| <$ `E_CONVERGENCE` and RMS $<$ `D_CONVERGENCE` hold in `REKS_GVB_GATE_STREAK` (default 2) consecutive iterations; the sign of $\Delta E$ is not tested, so the last iterations may rise within these bounds. A converged SCF ends with the line below (otherwise [SCF hits MAXITER or continues unconverged](https://reksstudio.github.io/v2/manual/diagnose/index.md#diag-maxiter)):

```log
==> Iterations <==

                         Total Energy        Delta E     RMS |[F,D]|

 @DF-REKS iter SAD:    -1.87313880489000   -1.87314e+00   0.00000e+00
 @DF-REKS iter   1:    -1.67191477831402    2.01224e-01   4.25060e-03 SHIFT
 @DF-REKS iter   2:    -1.85615375141313   -1.84239e-01   6.35543e-03 SHIFT
 @DF-REKS iter   3:    -1.85801940076408   -1.86565e-03   6.51017e-03 ORB-GVB-DIIS
[...]
 @DF-REKS iter  11:    -1.85941446727766    2.22045e-16   8.68918e-11 ORB-GVB-DIIS

Energy and wave function converged.
```

#### `REKS_USE_TRAH` {#reks_use_trah}

Trust-region Newton (TRAH) step on the active–active rotations and FONs: warm-up before GVB-DIIS, or the whole SCF without it.

Type: bool

Default: `false`

```python
"reks_use_trah": True,
```

* Trust-region Newton solver (trace tag `TRAH/SHIFT`) for the stationary point of the SA energy in the active–active orbital rotations and the FONs: a box-constrained damped Newton step from the eigendecomposition of the analytic active–active Hessian, a bisection on the damping until the step norm matches the trust radius, and eigenvector following along the inter-pair modes ([Nocedal and Wright, Numerical Optimization 2006](https://reksstudio.github.io/v2/manual/reference/index.md#nocedal2006-numerical-optimization), Ch. 4 and 11; [Baker, J. Comput. Chem. 1986, 7, 385](https://reksstudio.github.io/v2/manual/reference/index.md#baker1986-eigenvector-following); [Cerjan and Miller, J. Chem. Phys. 1981, 75, 2800](https://reksstudio.github.io/v2/manual/reference/index.md#cerjan1981-transition-states); [Helmich-Paris, J. Chem. Phys. 2021, 154, 164104](https://reksstudio.github.io/v2/manual/reference/index.md#helmich-paris2021-trah-scf)).
* The intra-geminal rotations and the FONs are minimized; their Hessian block enters the step with |λ| of its eigenvalues. When that block has a negative eigenvalue λ (eigenvector v) and ½ |λ| Δ<sup>2</sup> > `E_CONVERGENCE` (Δ the trust radius), the step s is extended along v to the trust radius, s → s + σ τ v with τ = (Δ<sup>2</sup> − ‖s‖<sup>2</sup>)<sup>½</sup> cut back to the variable bounds and σ = −sign(g · v); such a point is left, not reported as converged. After this step the trust radius follows the energy ratio ρ = ΔE / ΔE<sub>model</sub>.
* TRAH steps move the FONs without reordering the orbitals of a geminal ([§12](https://reksstudio.github.io/v2/manual/run-control/index.md#fons)).
* Warm-up or whole SCF: [The three engines](https://reksstudio.github.io/v2/manual/run-control/index.md#engines).

#### `REKS_GVB_DIIS` {#reks_gvb_diis}

GVB-DIIS accelerator of the orbital optimization, in the formulation set by `reks_diis_formulation`.

Type: bool

Default: `true`

```python
"reks_gvb_diis": False,
```

* The GVB-DIIS accelerator, the default engine; its formulation is `REKS_DIIS_FORMULATION`.

#### `REKS_DIIS_FORMULATION` {#reks_diis_formulation}

GVB-DIIS formulation: extrapolation of the orbital-rotation generators κ, or of the composite multishell Fock matrix (`CFM`).

Type: `CFM`|`ORBITAL`

Default: `ORBITAL`

```python
"reks_diis_formulation": "CFM",
```

* `ORBITAL` (default; trace tag `ORB-GVB-DIIS`) extrapolates skew-symmetric rotation generators κ directly in the MO basis and bypasses Fock diagonalization each step ([Ionova and Carter, J. Chem. Phys. 1995, 102, 1251](https://reksstudio.github.io/v2/manual/reference/index.md#ionova1995-orbital-diis); the r-GDIIS variant of [Sethio et al., J. Phys. Chem. A 2024, 128, 2472](https://reksstudio.github.io/v2/manual/reference/index.md#sethio2024-r-gdiis)).
* `CFM` (trace tag `CFM-GVB-DIIS/SHIFT`) extrapolates the composite multishell Fock matrix, the multishell-Fock DIIS of [Muller et al., J. Chem. Phys. 1994, 100, 1226](https://reksstudio.github.io/v2/manual/reference/index.md#muller1994-gvb-diis), where every active orbital is its own shell (core = 1 shell, virtual = 1 shell).

#### `REKS_GVB_DIIS_START` {#reks_gvb_diis_start}

First SCF iteration of GVB-DIIS; earlier iterations run the level-shifted burn-in or TRAH.

Type: int

Default: `3`

```python
"reks_gvb_diis_start": 5,
```

* SCF iteration at which GVB-DIIS takes over from the burn-in or from TRAH ([The three engines](https://reksstudio.github.io/v2/manual/run-control/index.md#engines)).

#### `REKS_DIIS_ACTIVATION` {#reks_diis_activation}

Criterion for `ORBITAL` GVB-DIIS to take over from the TRAH warm-up: the iteration count alone, or also the orbital gradient.

Type: `ITERATION`|`GRADIENT`

Default: `ITERATION`

```python
"reks_diis_activation": "GRADIENT",
```

* When `ORBITAL` GVB-DIIS takes over from the TRAH warm-up: `ITERATION` at iteration `REKS_GVB_DIIS_START`; `GRADIENT` from that iteration on, once ‖g<sub>orb</sub>‖<sub>F</sub> \< `REKS_DIIS_CFM_ACTIVATION_GORB`. Inert without `REKS_USE_TRAH` and with `CFM`, which always waits for the gradient.

#### `REKS_DIIS_CFM_ACTIVATION_GORB` {#reks_diis_cfm_activation_gorb}

Orbital-gradient norm ‖g_orb‖\_F below which GVB-DIIS takes over from the TRAH warm-up.

Type: double

Default: `1e-3`

```python
"reks_diis_cfm_activation_gorb": 1e-4,
```

* Threshold on ‖g<sub>orb</sub>‖<sub>F</sub> for GVB-DIIS to take over from the TRAH warm-up once `REKS_GVB_DIIS_START` is reached: always with `CFM`, with `ORBITAL` only under `REKS_DIIS_ACTIVATION` `GRADIENT`. Inert without `REKS_USE_TRAH`.

#### `REKS_GVB_ROBUST_VERDICT` {#reks_gvb_robust_verdict}

Enables the post-hoc verdict that rewinds extrapolated GVB-DIIS steps whose orbital gradient grows.

Type: bool

Default: `true`

```python
"reks_gvb_robust_verdict": False,
```

* Post-hoc acceptance verdict on extrapolated GVB-DIIS steps; its trip ratio is `REKS_DIIS_MON_VERDICT_RHO` ([§18](https://reksstudio.github.io/v2/manual/reference/index.md#option-table)).

#### `REKS_GVB_LEVEL_SHIFT` {#reks_gvb_level_shift}

Shell gap of the multishell Fock matrix in the `CFM` formulation of GVB-DIIS.

Type: double

Default: `1.0` (CFM only)

```python
"reks_gvb_level_shift": 1.0,
```

* Artificial shell gap of the CFM multishell Fock matrix, separate from `LEVEL_SHIFT`; unused with `REKS_DIIS_FORMULATION` `ORBITAL` (the default).

### Level shift {#level-shift}

REKS reads Psi4's `LEVEL_SHIFT` / `LEVEL_SHIFT_CUTOFF`; when unset, REKS sets `LEVEL_SHIFT = 0.6` and `LEVEL_SHIFT_CUTOFF = 0.0` (the shift stays on for the whole SCF). The shift acts on the Fock-diagonalization steps (trace tags ending in `SHIFT`); `ORB-GVB-DIIS` steps diagonalize no Fock matrix and carry no shift. It is a staircase over the active slots $k = 0, 1, \dots$ (ordered within each geminal by the diagonal Fock elements) and the virtuals, with base shift $s$:

$$
\Delta\varepsilon_k = (k+1)\,s, \qquad \Delta\varepsilon_{\mathrm{virt}} = (n_{\mathrm{act}}+1)\,s.
$$

#### `LEVEL_SHIFT_ADAPT` {#level_shift_adapt}

Adaptive base of the staircase level shift: decays while the orbitals are stable, grows back up to `level_shift` on swaps or strong mixing.

Type: bool

Default: `true`

```python
"level_shift_adapt": False,
```

* True: the base shift equals `LEVEL_SHIFT` through iteration 3; afterwards it decays (factor 0.5–0.95) when the previous iteration had no orbital swaps and maximal active mixing below 0.15, and grows by a factor 1.5 when the previous iteration had swaps or mixing above 0.30; it stays within \[0.01, `LEVEL_SHIFT`].
* False holds the base shift at `LEVEL_SHIFT` for every iteration.

### Expert stabilizers {#expert-stabilizers}

The two expert groups of [§18](https://reksstudio.github.io/v2/manual/reference/index.md#option-table) (angle filtering, SVD conditioning, Tikhonov ridging, verdict rewind and restart monitors, cycle detection, basin guards) act automatically on ill-conditioned or non-monotone GVB-DIIS steps. `REKS_REPORT_LEVEL` 4 shows which monitor fires.

GVB-DIIS keeps the last `DIIS_MAX_VECS` (default 10) error vectors; a new vector replaces the oldest. The angle filter (`REKS_DIIS_COND_ANGLE_FILTER`) keeps the newest vector $\mathbf e_0$ and tests the others from newer to older on their differences $\mathbf d_i = \mathbf e_i - \mathbf e_0$; vector $i$ is dropped when

$$
\delta\,\lVert \mathbf e_i \rVert^2 \ge \lVert \mathbf e_0 \rVert^2, \qquad c_{\max} \lVert \mathbf d_i \rVert^2 \le \lVert \mathbf e_0 \rVert^2, \qquad \text{or} \qquad \sin\varphi_i = \frac{\lVert (\mathbf 1 - \mathbf P)\,\mathbf d_i \rVert}{\lVert \mathbf d_i \rVert} < c_s,
$$

with $\mathbf P$ the projector on the differences kept so far, $\delta$ = `REKS_DIIS_COND_STALE_DELTA`, $c_{\max}$ = `REKS_DIIS_COND_COEFF_NORM_MAX`, $c_s$ = `REKS_DIIS_COND_ANGLE_CUTOFF`.

## 14. Geminal Delocalization {#geminal-deloc}

`REKS_GEMINAL_DELOC` rotates each orbital pair of a generation-0 geminal whose Löwdin IPR lies in the upper half of its range under rotations of the pair to the IPR minimum (the most delocalized frame of the pair), converges the SCF again from the rotated orbitals, and keeps the rotated solution only if its E<sub>SA</sub> is lower.

#### `REKS_GEMINAL_DELOC` {#reks_geminal_deloc}

After the SCF, rotates generation-0 geminal pairs to their IPR minimum and reconverges; kept if it converges to a lower E_SA.

Type: bool

Default: `false`

```python
"reks_geminal_deloc": True,
```

```log
==> REKS Geminal Delocalization <==

  Geminal  MO a  MO b          x  angle (deg)
        0     8     9   1.000000     -45.0000

  x: position of the pair's Loewdin frame between the minimum (0) and the maximum (1) of
     IPR_ab = sum_A [p_a(A)^2 + p_b(A)^2] over rotations of the pair; rotated to the minimum
     when x > 1/2. The SCF restarts from the rotated orbitals.
```

```log
==> REKS Geminal Delocalization <==

  E_SA before rotation       -78.351265591745
  E_SA after rotation        -78.362111811377
  Rotated solution kept (lower E_SA).
```

```log
==> REKS Geminal Delocalization <==

  E_SA before rotation       -77.884884825216
  E_SA after rotation        -77.884884825216
  Rotated solution rejected; SCF restarts from the orbitals before the rotation.
```

* After the SCF converges, every orbital pair (a, b) of every generation-0 geminal is tested: IPR<sub>ab</sub>, the Löwdin inverse participation ratio of the pair, runs over \[IPR<sub>ab</sub>(0) + α − r, IPR<sub>ab</sub>(0) + α + r] under the rotation θ, and x is the position of the current orbitals in that range (0 = minimum, 1 = maximum). A pair with x > 1/2 is rotated by θ<sup>\*</sup> to the minimum; a pair with r ≤ 64 ε IPR<sub>ab</sub>(0) (ε the machine epsilon) is left alone. Sweeps over all pairs repeat until one rotates nothing; the FONs are not changed.
* First block: the rotated pairs (geminal, 1-based MO numbers, x, θ<sup>\*</sup> in degrees); the SCF then converges again from the rotated orbitals. Without a pair at x > 1/2 the block reads `No geminal orbital pair with x > 1/2.` and no further SCF runs.
* Second block: the rotated solution is kept when its SCF converges with E<sub>SA</sub>(after) \< E<sub>SA</sub>(before) − `E_CONVERGENCE`; otherwise the SCF converges once more from the orbitals before the rotation. The SI step, properties and gradients follow the final solution.
* C<sub>2</sub>H<sub>4</sub> at 90°, BH\&HLYP/6-31G, SSR(2,2) with the all-α determinant, from a localized seed (the active pair of the delocalized solution rotated by 45°, n = 2): without the option the SCF stays there, E<sub>SA</sub> = −78.351265591745 E<sub>h</sub>, n<sub>a</sub> = 2; with it x = 1, θ<sup>\*</sup> = −45°, and the SCF reaches E<sub>SA</sub> = −78.362111811377 E<sub>h</sub>, n<sub>a</sub> = 1, the solution of the 0° → 90° restart chain (first two blocks above).
* HF/6-31G(d), seed built the same way from the HF delocalized solution, `REKS_USE_TRAH` with `REKS_GVB_DIIS` false: the localized solution, E<sub>SA</sub> = −77.884884825216 E<sub>h</sub>, lies below the delocalized one, −77.879948708032 E<sub>h</sub>; the SCF from the rotated orbitals (θ<sup>\*</sup> = 45°) returns to the localized solution, and the rotation is rejected (third block).

$$
a' = a\cos\theta + b\sin\theta, \qquad b' = -a\sin\theta + b\cos\theta
$$

$$
p_A(i) = \sum_{\mu \in A} \tilde C_{\mu i}^{\,2}, \qquad t_A(a,b) = \sum_{\mu \in A} \tilde C_{\mu a} \tilde C_{\mu b}, \qquad \tilde{\mathbf C} = \mathbf S^{1/2}\mathbf C
$$

$$
\mathrm{IPR}_{ab}(\theta) = \sum_A \big[p_A(a')^2 + p_A(b')^2\big] = \mathrm{IPR}_{ab}(0) + \alpha\,(1 - \cos 4\theta) + \beta \sin 4\theta
$$

$$
\alpha = \sum_A \Big[t_A(a,b)^2 - \tfrac14\big(p_A(a) - p_A(b)\big)^2\Big], \qquad \beta = \sum_A t_A(a,b)\big(p_A(a) - p_A(b)\big)
$$

$$
r = \sqrt{\alpha^2 + \beta^2}, \qquad \mathrm{IPR}_{ab}(\theta) \in \big[\mathrm{IPR}_{ab}(0) + \alpha - r,\ \mathrm{IPR}_{ab}(0) + \alpha + r\big]
$$

$$
x = \frac{r - \alpha}{2r}, \qquad \theta^{*} = -\tfrac14\,\mathrm{atan2}(\beta, \alpha), \qquad \mathrm{IPR}_{ab}(\theta^{*}) = \mathrm{IPR}_{ab}(0) - 2 r x
$$
