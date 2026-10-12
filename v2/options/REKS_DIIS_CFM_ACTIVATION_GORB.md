# `REKS_DIIS_CFM_ACTIVATION_GORB`

HTML: <https://reksstudio.github.io/v2/manual/run-control/#reks_diis_cfm_activation_gorb>

Psi4 b275f4294, 2026-10-11: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `<page>/index.md` (markdown). Option cards: `options/<NAME>.md`. Raw files: `<file>.txt` (text/plain).

Orbital-gradient norm ‖g_orb‖\_F below which GVB-DIIS takes over from the TRAH warm-up.

Type: double

Default: `1e-3`

```python
"reks_diis_cfm_activation_gorb": 1e-4,
```

* Threshold on ‖g<sub>orb</sub>‖<sub>F</sub> for GVB-DIIS to take over from the TRAH warm-up once `REKS_GVB_DIIS_START` is reached: always with `CFM`, with `ORBITAL` only under `REKS_DIIS_ACTIVATION` `GRADIENT`. Inert without `REKS_USE_TRAH`.
