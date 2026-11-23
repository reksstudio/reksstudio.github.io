# `REKS_GRAD_DEGEN_TOL`

HTML: <https://reksstudio.github.io/manual/setup/#reks_grad_degen_tol>

Chapter: [10. Properties, Gradients, Couplings](https://reksstudio.github.io/manual/setup/index.md#response)

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/llms.txt>. Every page: `https://reksstudio.github.io/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/inputs/<file>.txt`.

Gap below which a requested root is flagged as quasi-degenerate.

Type: double

Default: `1e-6`

```python
"reks_grad_degen_tol": 1e-5,
```

* Gap (E<sub>h</sub>) below which a requested root is computed with a quasi-degeneracy warning.
* On a Davidson cassette, also the gap between the last requested and the last computed root below which the computed set grows ([SI eigensolver](https://reksstudio.github.io/manual/concepts/index.md#si-solver)).
