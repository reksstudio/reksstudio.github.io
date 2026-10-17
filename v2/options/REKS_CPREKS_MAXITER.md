# `REKS_CPREKS_MAXITER`

HTML: <https://reksstudio.github.io/v2/manual/setup/#reks_cpreks_maxiter>

Chapter: [10. Properties, Gradients, Couplings](https://reksstudio.github.io/v2/manual/setup/index.md#response)

Psi4 72ce4d58b, 2026-10-17: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

Maximum number of rounds of the CP-REKS (Z-vector) solver; exceeding it stops the run with the residual reached.

Type: int

Default: `200`

```python
"reks_cpreks_maxiter": 400,
```

* CP-REKS rounds before an error is raised.
