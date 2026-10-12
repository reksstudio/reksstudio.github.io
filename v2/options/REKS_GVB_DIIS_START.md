# `REKS_GVB_DIIS_START`

HTML: <https://reksstudio.github.io/v2/manual/run-control/#reks_gvb_diis_start>

Psi4 b275f4294, 2026-10-11: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `<page>/index.md` (markdown). Option cards: `options/<NAME>.md`. Raw files: `<file>.txt` (text/plain).

First SCF iteration of GVB-DIIS; earlier iterations run the level-shifted burn-in or TRAH.

Type: int

Default: `3`

```python
"reks_gvb_diis_start": 5,
```

* SCF iteration at which GVB-DIIS takes over from the burn-in or from TRAH ([The three engines](https://reksstudio.github.io/v2/manual/run-control/index.md#engines)).
