# `REKS_GVB_ROBUST_VERDICT`

HTML: <https://reksstudio.github.io/v2/manual/run-control/#reks_gvb_robust_verdict>

Chapter: [13. SCF Convergence Engines](https://reksstudio.github.io/v2/manual/run-control/index.md#scf-engines)

Psi4 f31cf1f94, 2026-10-15: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

Enables the post-hoc verdict that rewinds extrapolated GVB-DIIS steps whose orbital gradient grows.

Type: bool

Default: `true`

```python
"reks_gvb_robust_verdict": False,
```

* Post-hoc acceptance verdict on extrapolated GVB-DIIS steps; its trip ratio is `REKS_DIIS_MON_VERDICT_RHO` ([§18](https://reksstudio.github.io/v2/manual/reference/index.md#option-table)).
