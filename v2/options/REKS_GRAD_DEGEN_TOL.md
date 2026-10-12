# `REKS_GRAD_DEGEN_TOL`

HTML: <https://reksstudio.github.io/v2/manual/setup/#reks_grad_degen_tol>

Psi4 b275f4294, 2026-10-11: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `<page>/index.md` (markdown). Option cards: `options/<NAME>.md`. Raw files: `<file>.txt` (text/plain).

Gap below which a requested root is flagged as quasi-degenerate.

Type: double

Default: `1e-6`

```python
"reks_grad_degen_tol": 1e-5,
```

* Gap (E<sub>h</sub>) below which a requested root is computed with a quasi-degeneracy warning.
