# `REKS_CPREKS_CONV`

HTML: <https://reksstudio.github.io/v2/manual/setup/#reks_cpreks_conv>

Psi4 b275f4294, 2026-10-11: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `<page>/index.md` (markdown). Option cards: `options/<NAME>.md`. Raw files: `<file>.txt` (text/plain).

Residual threshold of the CP-REKS (Z-vector) solver. `reks_cpreks_maxiter` (200) bounds its rounds.

Type: double

Default: `1e-9`

```python
"reks_cpreks_conv": 1e-10,
```

```log
==> Coupled-perturbed REKS (CP-REKS, Z-vector) solver <==

    For                   relaxed properties of S1, S2 (cassette 0);
                          gradients of S1, S2 (cassette 0);
                          NAC S1/S2 (cassette 0)
    Equations             4: 2 states + 2 for NAC S1/S2 (cassette 0)
    Maxiter               200
    Convergence           1.000e-09
    Orbital rotations     310

    Iter      Mean |R|       Max |R|   Remain   Time [s]
    ----------------------------------------------------
       1     2.990e-01     9.607e-01        4       0.01
       2     1.585e-01     5.441e-01        4       0.02
[...]
      12     1.614e-09     1.614e-09        1       0.14
      13     1.363e-10     1.363e-10        0       0.14
    ----------------------------------------------------
    Z-vectors converged in 13 iterations.
```

* CP-REKS (Z-vector) residual threshold, relative to max(1, ‖b‖). One solve serves the relaxed properties, gradients and NACs of the run.
* The solver block is printed when `SI_REKS_PROPERTY_FOR` names states, or in `gradient()` with `SI_REKS_GRAD` or `SI_REKS_NAC`, at `REKS_REPORT_LEVEL` ≥ 2 and Psi4 `PRINT` ≥ 1 (defaults).
* Converged: `Remain` reaches 0 and the block ends with `Z-vectors converged in N iterations.`. Non-convergence ends the run with `no convergence in N rounds`.
* A target t closes at max(threshold, 10 ε ‖A‖ ‖Z<sub>t</sub>‖), ε the machine epsilon, ‖A‖ = max(max<sub>i</sub> |A<sub>ii</sub>|, max ‖A d‖ over the unit search directions d): below that the residual is roundoff of the operator. Targets closed at this floor are counted after the converged line (`N target(s) closed at the roundoff floor 10 eps |A| |Z|`). When the explicit residual of a target exceeds this bound, every open target continues from its explicit residual in a new search space.
