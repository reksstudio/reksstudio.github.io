# `REKS_FON_INTERP_DELTA`

HTML: <https://reksstudio.github.io/v2/manual/run-control/#reks_fon_interp_delta>

Chapter: [12. Fractional Occupation Numbers (FONs)](https://reksstudio.github.io/v2/manual/run-control/index.md#fons)

Psi4 72ce4d58b, 2026-10-17: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

Parameter δ of the factor f(n_p n_q) that multiplies the coupling term of each geminal in the REKS energy.

Type: double

Default: `0.4`

```python
"reks_fon_interp_delta": 0.4,
```

* Parameter δ ≥ 0 of the factor f(x), x = n<sub>p</sub> n<sub>q</sub>, that multiplies the coupling Δ of each geminal in the energy ([Coupling Δ and factor f](https://reksstudio.github.io/v2/manual/concepts/index.md#coupling)).
