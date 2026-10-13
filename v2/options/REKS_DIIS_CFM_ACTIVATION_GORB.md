# `REKS_DIIS_CFM_ACTIVATION_GORB`

HTML: <https://reksstudio.github.io/v2/manual/run-control/#reks_diis_cfm_activation_gorb>

Chapter: [13. SCF Convergence Engines](https://reksstudio.github.io/v2/manual/run-control/index.md#scf-engines)

Psi4 d40267fc2, 2026-10-13: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

Orbital-gradient norm ‖g_orb‖\_F below which GVB-DIIS takes over from the TRAH warm-up.

Type: double

Default: `1e-3`

```python
"reks_diis_cfm_activation_gorb": 1e-4,
```

* Threshold on ‖g<sub>orb</sub>‖<sub>F</sub> for GVB-DIIS to take over from the TRAH warm-up once `REKS_GVB_DIIS_START` is reached: always with `CFM`, with `ORBITAL` only under `REKS_DIIS_ACTIVATION` `GRADIENT`. Inert without `REKS_USE_TRAH`.
