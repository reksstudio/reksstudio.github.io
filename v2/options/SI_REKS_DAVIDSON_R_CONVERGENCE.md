# `SI_REKS_DAVIDSON_R_CONVERGENCE`

HTML: <https://reksstudio.github.io/v2/manual/setup/#si_reks_davidson_r_convergence>

Chapter: [8. SA Pool and SI Cassettes](https://reksstudio.github.io/v2/manual/setup/index.md#selecting)

Psi4 f31cf1f94, 2026-10-15: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

Residual norm in E_h each Davidson root of the SI problem converges to.

Type: double

Default: `1e-12`

```python
"si_reks_davidson_r_convergence": 1e-10,
```

* Residual norm ‖(A − θ) x‖<sub>2</sub> (E<sub>h</sub>) every Davidson root converges to, A the SI Hamiltonian in the orthonormalized configuration basis ([SI eigensolver](https://reksstudio.github.io/v2/manual/concepts/index.md#si-solver)). A root whose residual stalls at the rounding level of its product is accepted there, and that level is printed.
* A value ≤ 0 stops the run: `SI_REKS_DAVIDSON_R_CONVERGENCE is …; it must be positive (residual norm in Eh, default 1e-12).`
