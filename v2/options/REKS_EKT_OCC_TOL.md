# `REKS_EKT_OCC_TOL`

HTML: <https://reksstudio.github.io/v2/manual/setup/#reks_ekt_occ_tol>

Psi4 b275f4294, 2026-10-11: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `<page>/index.md` (markdown). Option cards: `options/<NAME>.md`. Raw files: `<file>.txt` (text/plain).

Cutoff on the density eigenvalues: those at or below it are dropped from the EKT metric.

Type: double

Default: `1e-6`

```python
"reks_ekt_occ_tol": 1e-8,
```

* Density eigenvalues at or below this are dropped from the EKT metric.
