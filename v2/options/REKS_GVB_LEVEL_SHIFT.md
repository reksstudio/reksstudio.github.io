# `REKS_GVB_LEVEL_SHIFT`

HTML: <https://reksstudio.github.io/v2/manual/run-control/#reks_gvb_level_shift>

Chapter: [13. SCF Convergence Engines](https://reksstudio.github.io/v2/manual/run-control/index.md#scf-engines)

Psi4 72ce4d58b, 2026-10-17: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

Shell gap of the multishell Fock matrix in the `CFM` formulation of GVB-DIIS.

Type: double

Default: `1.0` (CFM only)

```python
"reks_gvb_level_shift": 1.0,
```

* Artificial shell gap of the CFM multishell Fock matrix, separate from `LEVEL_SHIFT`; unused with `REKS_DIIS_FORMULATION` `ORBITAL` (the default).
