# `REKS_CPREKS_MAXITER`

HTML: <https://reksstudio.github.io/v2/manual/setup/#reks_cpreks_maxiter>

Psi4 b275f4294, 2026-10-11: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `<page>/index.md` (markdown). Option cards: `options/<NAME>.md`. Raw files: `<file>.txt` (text/plain).

Maximum number of rounds of the CP-REKS (Z-vector) solver; exceeding it stops the run with the residual reached.

Type: int

Default: `200`

```python
"reks_cpreks_maxiter": 400,
```

* CP-REKS rounds before an error is raised.
