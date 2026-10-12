# `REKS_GVB_LEVEL_SHIFT`

HTML: <https://reksstudio.github.io/v2/manual/run-control/#reks_gvb_level_shift>

Psi4 b275f4294, 2026-10-11: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `<page>/index.md` (markdown). Option cards: `options/<NAME>.md`. Raw files: `<file>.txt` (text/plain).

Shell gap of the multishell Fock matrix in the `CFM` formulation of GVB-DIIS.

Type: double

Default: `1.0` (CFM only)

```python
"reks_gvb_level_shift": 1.0,
```

* Artificial shell gap of the CFM multishell Fock matrix, separate from `LEVEL_SHIFT`; unused with `REKS_DIIS_FORMULATION` `ORBITAL` (the default).
