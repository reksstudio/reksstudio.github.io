# `REKS_DIIS_ACTIVATION`

HTML: <https://reksstudio.github.io/v2/manual/run-control/#reks_diis_activation>

Chapter: [13. SCF Convergence Engines](https://reksstudio.github.io/v2/manual/run-control/index.md#scf-engines)

Psi4 72ce4d58b, 2026-10-17: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

Criterion for `ORBITAL` GVB-DIIS to take over from the TRAH warm-up: the iteration count alone, or also the orbital gradient.

Type: `ITERATION`|`GRADIENT`

Default: `ITERATION`

```python
"reks_diis_activation": "GRADIENT",
```

* When `ORBITAL` GVB-DIIS takes over from the TRAH warm-up: `ITERATION` at iteration `REKS_GVB_DIIS_START`; `GRADIENT` from that iteration on, once ‖g<sub>orb</sub>‖<sub>F</sub> \< `REKS_DIIS_CFM_ACTIVATION_GORB`. Inert without `REKS_USE_TRAH` and with `CFM`, which always waits for the gradient.
