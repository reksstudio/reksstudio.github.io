# `REKS_GVB_DIIS_START`

HTML: <https://reksstudio.github.io/v2/manual/run-control/#reks_gvb_diis_start>

Chapter: [13. SCF Convergence Engines](https://reksstudio.github.io/v2/manual/run-control/index.md#scf-engines)

Psi4 d40267fc2, 2026-10-13: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

First SCF iteration of GVB-DIIS; earlier iterations run the level-shifted burn-in or TRAH.

Type: int

Default: `3`

```python
"reks_gvb_diis_start": 5,
```

* SCF iteration at which GVB-DIIS takes over from the burn-in or from TRAH ([The three engines](https://reksstudio.github.io/v2/manual/run-control/index.md#engines)).
