# `REKS_GVB_DIIS`

HTML: <https://reksstudio.github.io/v2/manual/run-control/#reks_gvb_diis>

Chapter: [13. SCF Convergence Engines](https://reksstudio.github.io/v2/manual/run-control/index.md#scf-engines)

Psi4 72ce4d58b, 2026-10-17: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

GVB-DIIS accelerator of the orbital optimization, in the formulation set by `reks_diis_formulation`.

Type: bool

Default: `true`

```python
"reks_gvb_diis": False,
```

* The GVB-DIIS accelerator, the default engine; its formulation is `REKS_DIIS_FORMULATION`.
