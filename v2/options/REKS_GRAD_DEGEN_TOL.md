# `REKS_GRAD_DEGEN_TOL`

HTML: <https://reksstudio.github.io/v2/manual/setup/#reks_grad_degen_tol>

Chapter: [10. Properties, Gradients, Couplings](https://reksstudio.github.io/v2/manual/setup/index.md#response)

Psi4 f31cf1f94, 2026-10-15: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

Gap below which a requested root is flagged as quasi-degenerate.

Type: double

Default: `1e-6`

```python
"reks_grad_degen_tol": 1e-5,
```

* Gap (E<sub>h</sub>) below which a requested root is computed with a quasi-degeneracy warning.
* On a Davidson cassette, also the gap between the last requested and the last computed root below which the computed set grows ([SI eigensolver](https://reksstudio.github.io/v2/manual/concepts/index.md#si-solver)).
