# `REKS_<L>_FON`

HTML: <https://reksstudio.github.io/v2/manual/run-control/#reks_l_fon>

Chapter: [12. Fractional Occupation Numbers (FONs)](https://reksstudio.github.io/v2/manual/run-control/index.md#fons)

Psi4 72ce4d58b, 2026-10-17: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

Lower bound on the free FON n_p of every geminal of one FON generation (`reks_n_fon`, `reks_m_fon`, …); negative disables it.

Type: double

Default: `-1.0` each

```python
"reks_m_fon": 1.0,
```

```log
[REKS] REKS_M_FON lower bound = 1.00000000 (experimental limiter active)
```

```log
[REKS] WARNING: REKS_M_FON=2.50000000 exceeds maximum valid floor 1.99999999; clamped (FON frozen at upper boundary).
```

* One option per FON generation ([FON sets](https://reksstudio.github.io/v2/manual/setup/index.md#fon-sets)). A non-negative value ℓ is the lower end of the box of the free FON n<sub>p</sub> of every geminal of that generation ([§12](https://reksstudio.github.io/v2/manual/run-control/index.md#fons)): n<sub>p</sub> stays variable in \[ℓ, 2 − m], m = `REKS_FON_MICRO_BOUND_MARGIN`.
* The call above restricts n<sub>p</sub> of every generation-1 geminal to \[1, 2 − m]: it excludes n<sub>p</sub> \< n<sub>q</sub>, and n<sub>p</sub> may still reach the closed-shell limit 2 ([FONs of a geminal invert](https://reksstudio.github.io/v2/manual/diagnose/index.md#diag-fon-inverted)). At `REKS_REPORT_LEVEL` ≥ 4 an active floor prints the first line above.
* A value above 2 − m is clamped to 2 − m and the FON is frozen there, with the warning above (`REKS_M_FON` 2.5). Negative (the default) disables the bound; the lower end is then m.

FON micro-solver traces are printed at `REKS_REPORT_LEVEL` ≥ 4.
