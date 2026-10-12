# `REKS_GVB_DIIS`

HTML: <https://reksstudio.github.io/v2/manual/run-control/#reks_gvb_diis>

Psi4 b275f4294, 2026-10-11: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `<page>/index.md` (markdown). Option cards: `options/<NAME>.md`. Raw files: `<file>.txt` (text/plain).

GVB-DIIS accelerator of the orbital optimization, in the formulation set by `reks_diis_formulation`.

Type: bool

Default: `true`

```python
"reks_gvb_diis": False,
```

* The GVB-DIIS accelerator, the default engine; its formulation is `REKS_DIIS_FORMULATION`.
