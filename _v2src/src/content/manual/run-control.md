---
title: Run control
---

## 10\. Guesses and Restarts {#guesses}

Restarts use Psi4 checkpoints; `GUESS_ACTIVE_WINDOW` places the read orbitals in the active space. Seeding a first calculation: §first-calculation.

### Restart mechanism {#restart}

```python
E, wfn = psi4.energy("bhhlyp", restart_file="name.wfn.npy", return_wfn=True)   # read a checkpoint
wfn.to_file("name.wfn")                                                          # writes name.wfn.npy
```

-   `restart_file` names a serialized `Wavefunction` (`.wfn.npy`). For a `.npy` file the driver sets `GUESS READ` and prints `Found user provided orbital data. Setting orbital guess to READ`. `psi4.core.Wavefunction.from_file(...)` only loads the file into a Python object; the SCF guess does not use it.
-   `"df_scf_guess"` acts only with `scf_type DIRECT`, where it runs a density-fitted SCF before the exact-integral SCF.
-   Restart points: the previous geometry of a scan, a lower-level pre-optimization, a run that hit `maxiter` (§diag-maxiter), or an RKS run at the same geometry (§seed-orbitals).

A scan (§first-scans) in code; `psi4.core.clean()` removes the scratch files of the finished point:

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

## 11\. Fractional Occupation Numbers (FONs) {#fons}

Each geminal pair carries FONs with $n_p + n_q = 2$ (§geminals); the free FON $n_p$ (first orbital of the pair) lies in a box:

$$
n_p \in [\,\ell,\; 2 - m\,], \qquad \ell = \begin{cases} \texttt{REKS\_<L>\_FON} & \text{if} \ge 0 \\ m & \text{otherwise} \end{cases}, \qquad m = \texttt{REKS\_FON\_MICRO\_BOUND\_MARGIN}.
$$

A generation-0 FON of a two-orbital pair that crosses 1 swaps the two orbitals, so the printed generation-0 FONs have $n_p \ge n_q$; FONs of higher generations can have $n_p < n_q$. FONs are optimized every SCF iteration by a projected-Newton micro-solver with Armijo backtracking: one joint Newton solve over all FONs of a (sector, generation) block, the other blocks held fixed. FONs are stored per FON set; each generation has its own lower-bound option (§reks_l_fon).

@@options fons@@

FON micro-solver traces are printed at `REKS_REPORT_LEVEL` ≥ 4.

@@options fon-micro@@

## 12\. SCF Convergence Engines {#scf-engines}

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

with $\mathbf g_{\mathrm{orb}}$, $\mathbf g_{\mathrm{FON}}$ the orbital and FON gradients and $\mathbf V$ the rotation that canonicalizes the current orbitals within their roles. GVB-DIIS converges when $|\Delta E| <$ `E_CONVERGENCE` and RMS $<$ `D_CONVERGENCE` hold in `REKS_GVB_GATE_STREAK` (default 2) consecutive iterations; the sign of $\Delta E$ is not tested, so the last iterations may rise within these bounds. A converged SCF ends with the line below (otherwise §diag-maxiter):

@@fragment iterations@@

@@options engines@@

### Level shift {#level-shift}

REKS reads Psi4's `LEVEL_SHIFT` / `LEVEL_SHIFT_CUTOFF`; when unset, REKS sets `LEVEL_SHIFT = 0.6` and `LEVEL_SHIFT_CUTOFF = 0.0` (the shift stays on for the whole SCF). The shift acts on the Fock-diagonalization steps (trace tags ending in `SHIFT`); `ORB-GVB-DIIS` steps diagonalize no Fock matrix and carry no shift. It is a staircase over the active slots $k = 0, 1, \dots$ (ordered within each geminal by the diagonal Fock elements) and the virtuals, with base shift $s$:

$$
\Delta\varepsilon_k = (k+1)\,s, \qquad \Delta\varepsilon_{\mathrm{virt}} = (n_{\mathrm{act}}+1)\,s.
$$

@@options level-shift@@

### Expert stabilizers

The two expert groups of §option-table (angle filtering, SVD conditioning, Tikhonov ridging, verdict rewind and restart monitors, cycle detection, basin guards) act automatically on ill-conditioned or non-monotone GVB-DIIS steps. `REKS_REPORT_LEVEL` 4 shows which monitor fires.

## 13\. Delocalization (IPR) Penalty {#ipr}

A positive `REKS_DELOC_IPR_PENALTY` λ penalizes localization of the active orbitals and drives the SCF to the delocalized solution, the intended REKS solution.

@@options ipr@@
