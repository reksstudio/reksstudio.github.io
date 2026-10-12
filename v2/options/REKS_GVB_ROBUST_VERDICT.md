# `REKS_GVB_ROBUST_VERDICT`

HTML: <https://reksstudio.github.io/v2/manual/run-control/#reks_gvb_robust_verdict>

Psi4 b275f4294, 2026-10-11: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `<page>/index.md` (markdown). Option cards: `options/<NAME>.md`. Raw files: `<file>.txt` (text/plain).

Enables the post-hoc verdict that rewinds extrapolated GVB-DIIS steps whose orbital gradient grows.

Type: bool

Default: `true`

```python
"reks_gvb_robust_verdict": False,
```

* Post-hoc acceptance verdict on extrapolated GVB-DIIS steps; its trip ratio is `REKS_DIIS_MON_VERDICT_RHO` ([§18](https://reksstudio.github.io/v2/manual/reference/index.md#option-table)).
