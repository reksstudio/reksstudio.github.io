# `REKS_EKT_OCC_TOL`

HTML: <https://reksstudio.github.io/v2/manual/setup/#reks_ekt_occ_tol>

Chapter: [10. Properties, Gradients, Couplings](https://reksstudio.github.io/v2/manual/setup/index.md#response)

Psi4 bd0fb43ef, 2026-10-15: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

Cutoff on the density eigenvalues: those at or below it are dropped from the EKT metric.

Type: double

Default: `1e-6`

```python
"reks_ekt_occ_tol": 1e-8,
```

* Density eigenvalues at or below this are dropped from the EKT metric.
