---
title: Run control
---

## 7\. Guesses and Restarts

Restarts use Psi4 checkpoints; `GUESS_ACTIVE_WINDOW` places the read orbitals in the active space.

### Restart mechanism {#restart}

```python
E, wfn = psi4.energy("bhhlyp", restart_file="name.wfn.npy", return_wfn=True)   # read a checkpoint
wfn.to_file("name.wfn")                                                          # writes name.wfn.npy
```

-   `restart_file` names a serialized `Wavefunction` (`.wfn.npy`). For a `.npy` file the driver sets `GUESS READ` and prints `Found user provided orbital data. Setting orbital guess to READ`. `psi4.core.Wavefunction.from_file(...)` only loads the file into a Python object; the SCF guess does not use it.
-   `"df_scf_guess"` acts only with `scf_type DIRECT`, where it runs a density-fitted SCF before the exact-integral SCF.
-   Restart points: the previous geometry of a scan, a lower-level pre-optimization, or a run that hit `maxiter` (§diag-maxiter).

A scan restarts each point from the previous one; `psi4.core.clean()` removes the scratch files of the finished point:

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

Linear H₄, BH&HLYP/6-31G: the restarted point 1.6 Å and a cold SAD start reach the same E = −1.884453547559 E<sub>h</sub>.

`Pre-Iterations` reports the guess. A REKS restart file restores the orbitals and the FON sets of the run that wrote it; the `REKS orbitals` line is printed at every level:

@@fragment pre-iterations@@

`MOLDEN_WRITE` (standard Psi4) writes the final orbitals to a Molden file for inspection of the active window (§files).

@@options guess@@

## 8\. Fractional Occupation Numbers (FONs)

Each geminal pair carries FONs with $n_p + n_q = 2$; the free FON $n_p$ (first orbital of the pair) lies in a box (§2):

$$
n_p \in [\,\ell,\; 2 - m\,], \qquad \ell = \begin{cases} \texttt{REKS\_<L>\_FON} & \text{if} \ge 0 \\ m & \text{otherwise} \end{cases}, \qquad m = \texttt{REKS\_FON\_MICRO\_BOUND\_MARGIN}.
$$

A generation-0 FON of a two-orbital pair that crosses 1 swaps the two orbitals, so the printed generation-0 FONs have $n_p \ge n_q$; FONs of higher generations can have $n_p < n_q$. FONs are optimized every SCF iteration by a projected-Newton micro-solver with Armijo backtracking: one joint Newton solve over all FONs of a (sector, generation) block, the other blocks held fixed. FONs are stored per FON set (§3); each generation has its own lower-bound option, default `-1.0` (off):

| Generation (set) | 0 (`n`) | 1 (`m`) | 2 (`u`) | 3 (`v`) | 4 (`w`) | 5 (`x`) | 6 (`y`) | 7 (`z`) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Option | `REKS_N_FON` | `REKS_M_FON` | `REKS_U_FON` | `REKS_V_FON` | `REKS_W_FON` | `REKS_X_FON` | `REKS_Y_FON` | `REKS_Z_FON` |

@@options fons@@

FON micro-solver traces are printed at `REKS_REPORT_LEVEL` ≥ 4.

@@options fon-micro@@

## 9\. SCF Convergence Engines

Three engines optimize the orbitals and FONs; most runs set at most `LEVEL_SHIFT` and `REKS_USE_TRAH`.

### The three engines {#engines}

| `REKS_USE_TRAH` | `REKS_GVB_DIIS` | Iterations (trace tag) |
| --- | --- | --- |
| false (default) | true (default) | the first `REKS_GVB_DIIS_START` − 1 iterations are level-shifted Fock steps without an accelerator (`SHIFT`), then GVB-DIIS |
| true | true | TRAH warm-up (`TRAH/SHIFT`); GVB-DIIS once `REKS_GVB_DIIS_START` is reached and the active formulation's activation gate is satisfied |
| true | false | TRAH for the entire SCF |
| false | false | level-shifted Fock steps (`PLAIN/SHIFT`) |

`Iterations` prints one line per SCF iteration: `@REKS iter` (`@DF-REKS iter` with density fitting), the SA-REKS energy, its change, `RMS |[F,D]|` and the engine tag. `RMS |[F,D]|` is compared with `D_CONVERGENCE`; with $n$ the number of MOs it is

$$
\mathrm{RMS} = \begin{cases} \lVert \mathbf g_{\mathrm{orb}} \rVert_F / n & \text{GVB-DIIS}\\ \max\!\big(\sqrt{\lVert \mathbf g_{\mathrm{orb}} \rVert^2 + \lVert \mathbf g_{\mathrm{FON}} \rVert^2},\ \lVert \mathbf V - \mathbf 1 \rVert_F\big) / n & \text{TRAH}\\ \mathrm{rms}(\mathbf{FDS} - \mathbf{SDF}) & \text{otherwise} \end{cases}
$$

with $\mathbf g_{\mathrm{orb}}$, $\mathbf g_{\mathrm{FON}}$ the orbital and FON gradients and $\mathbf V$ the rotation that canonicalizes the current orbitals within their roles. A converged SCF ends with the line below (otherwise §diag-maxiter):

@@fragment iterations@@

@@options engines@@

### Level shift

REKS reads Psi4's `LEVEL_SHIFT` / `LEVEL_SHIFT_CUTOFF`; when unset, REKS sets `LEVEL_SHIFT = 0.6` and `LEVEL_SHIFT_CUTOFF = 0.0` (the shift stays on for the whole SCF). The shift acts on the Fock-diagonalization steps (trace tags ending in `SHIFT`); `ORB-GVB-DIIS` steps diagonalize no Fock matrix and carry no shift. It is a staircase over the active slots $k = 0, 1, \dots$ (ordered within each geminal by the diagonal Fock elements) and the virtuals, with base shift $s$:

$$
\Delta\varepsilon_k = (k+1)\,s, \qquad \Delta\varepsilon_{\mathrm{virt}} = (n_{\mathrm{act}}+1)\,s.
$$

@@options level-shift@@

### Expert stabilizers

The two expert groups of §14 (angle filtering, SVD conditioning, Tikhonov ridging, verdict rewind and restart monitors, cycle detection, basin guards) act automatically on ill-conditioned or non-monotone GVB-DIIS steps. `REKS_REPORT_LEVEL` 4 shows which monitor fires.

## 10\. Delocalization (IPR) Penalty

@@options ipr@@

## 11\. Report Level

@@options report@@

Blocks added at each level; each level prints everything of the levels below. Output lines: one `gradient()` run of H₄ REKS(4,4) with two cassettes, NAC, relaxed properties, EKT and Molden files.

| Level | Adds | Lines |
| --- | --- | --- |
| 1 | `Pre-Iterations` with the `REKS orbitals` line; `Iterations` and the convergence line; `Post-Iterations` (grid electrons, final energy); `Energetics`; `Summary` / `Summary of the energy phase` (`MOLDEN_WRITE`); `Returned gradient` with Psi4's `-Total Gradient` | 670 |
| 2 (default) | Banner; `REKS Studio setup` with `Pairing schemes`, `SA pool`, `SI pools`, `State analysis`, `Gradient request`; orbital energies with the FONs in `Post-Iterations`; `SA-REKS energy decomposition`; `REKS IPR Penalty Final`; SI setup, `FON optimization after the SCF`, per cassette `Hamiltonian`, `Adiabatic states` and the property blocks; `State summary`; `Spin-state energetics`; CP-REKS solver (Psi4 `PRINT` ≥ 1); `Relaxed properties`; EKT; gradient targets, `Gradient of …`, `NAC …`, CI topography | 2072 |
| 3 | `XC evaluation … per string … per key` in the setup; Hamiltonian counters (`coupled`/`zero`, `Terms`, `Reuse`, overlap terms) and the `Off-diagonal channel` table; EKT `dropped eigenvalues` and the Dyson MO matrix; `[REKS-GRAD]` `C_eff` per microstate and Psi4 per-channel gradient terms; `==> References <==` | 2475 |
| 4–5 | 4: `REKS Memory Footprint`, `Run diagnostics`, per-iteration solver traces (`[GVB-FON]`, `[ORB-DIIS]`, `[TRAH]`, `[LEVEL_SHIFT]`, …), `CP-REKS Z-Vector Profile`; per cassette `Microstate energies (sorted by energy)`, `Fractional Occupation Numbers (active orbitals)`, `Lagrangian eps_pq and ERI (pq\|st)`, `Pre-diagonalization SI Hamiltonian` and `SI Overlap S` in blocks of 18 columns. 5: per SCF iteration the active orbitals, Fock asymmetry, orbital update, coupling Fock matrix, SA energy, weighting factors C<sub>L</sub> and the microstate energies | 3997; 8138 |

From level 3 the configuration-axis arrays `SSR COEFFICIENTS K=e`, `SSR HAMILTONIAN K=e`, `SSR OVERLAP SPARSE K=e` and `SSR 1-RDM DIABATIC SPARSE K=e` are stored; level 4 prints the Hamiltonian and overlap. Levels 4–5 grow with the active space and the cassette dimension.

## 12\. Diagnose

Each entry names what the output prints, then what to do. A converged SCF can still show several of them.

#### SCF converges instantly to a wrong energy after a restart {#diag-wrong-window}

The active-window orbitals of the loaded `.wfn.npy` landed in the wrong columns. Observed (linear H₄, BH&HLYP/6-31G, restart from a run with E = −1.88445354755929 E<sub>h</sub>): the window `['HOMO-1', 'HOMO', 'LUMO+1', 'LUMO+2']` puts 5A into the active space and leaves 3A virtual; the setup lists `Active MO indices` 1A–4A, the FONs sit at 2 and 0, and the energy is 0.32 E<sub>h</sub> higher:

@@fragment window-swap@@

Compare the `Pairing scheme` line of `Post-Iterations` with `Active MO indices`, and the final energy with that of the run that wrote the orbitals. Inspect the Molden file, then fix the window with §guess_active_window.

#### SCF hits `MAXITER` or continues unconverged {#diag-maxiter}

With `FAIL_ON_MAXITER` false the trace ends as below (H₄, `maxiter` 2); SI, properties and files follow on the unconverged orbitals, and the wavefunction is returned.

@@fragment maxiter@@

Save it with `wfn.to_file(...)` and restart from it rather than starting over (§restart). Raise `MAXITER`, or raise `REKS_REPORT_LEVEL` to 4 to see which GVB-DIIS monitor (verdict rewind, cycle detection, basin guard) fires repeatedly (§9).

#### SCF oscillates or cycles {#diag-oscillation}

The GVB-DIIS monitors (§9) catch and restart such runs. If that stays unproductive, use the §reks_use_trah warm-up, or switch §reks_diis_formulation between `"ORBITAL"` and `"CFM"`.

#### FONs of a geminal invert {#diag-fon-inverted}

`Post-Iterations` prints n<sub>p</sub> < n<sub>q</sub> for a geminal of generation ≥ 1 (generation-0 pairs are swapped, §8). A floor of `1.0` on its generation (§reks_l_fon; e.g. `reks_m_fon: 1.0` for generation `m`) excludes n<sub>p</sub> < n<sub>q</sub> without fixing the FON to a single value. The floor does not keep n<sub>p</sub> away from the closed-shell limit 2.

#### FON pinned at a bound, symmetry-broken charges {#diag-fon-pinned}

`Post-Iterations` prints `n_a = 2.000000`, `n_b = 0.000000`, and equivalent atoms carry different charges. Observed: twisted ethylene (90°), SSR(2,2), cold SAD start; seeded from 60° and 75°, the same geometry converges to `n_a = 1.000000` with C1 = C2 = −0.334991 (S0). On the cold branch the analytic S1 gradient agrees with a 5-point finite difference to 9·10<sup>−8</sup> E<sub>h</sub>/a<sub>0</sub>; a 2-point difference deviates by 2.3·10<sup>−2</sup> because its −h point converges to the other solution.

Seed from a neighbouring geometry (§restart) and compare the FON columns between runs; geminals entering only SI configurations can also lie at the bound (§si-fons).

#### Active orbitals localize on one fragment {#diag-localized}

The active orbitals localize instead of forming the delocalized solution, the intended REKS solution. Set a positive §reks_deloc_ipr_penalty; the report then ends with `=== REKS IPR Penalty Final ===` and the basin verdict.

#### Unknown configuration name or type {#diag-unknown-token}

The error lists every valid type and name of the manifold the block is bound to, here `REKS(4,4)`, 2S = 0; it is generated from the same catalog (§3):

@@fragment err-token@@

#### Active space fails to load {#diag-catalog}

No catalog file exists for that active space; the error lists the installed ones (§3):

@@fragment err-catalog@@

#### Ghost states and a collapsed SI spectrum {#diag-ghost-states}

Observed (REKS(4,6)[3,3], H₄): `Ghost states` reports 159 removed states, `Independent states` is 1, and S0 = −10358357.624062862247 E<sub>h</sub> against `E[SA-REKS]` = −1.266834523295 E<sub>h</sub>. Compare `Independent states` with `Configurations` and the null modes, and E(S0) with `@REKS Final Energy` (§si-matrices).

#### Quasi-degenerate roots {#diag-quasi-degenerate}

`SI_REKS_GRAD` follows a root by index. The gap of the followed pair is printed in the `NAC` header (§nac) and in the CI-topography header when it is below `REKS_CI_TOPOGRAPHY_GAP` (§ci-topography); compare the leading configurations of the followed root in `Adiabatic states` between runs.
