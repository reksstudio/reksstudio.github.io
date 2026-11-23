# `SI_REKS_PRINT_STATES`

HTML: <https://reksstudio.github.io/manual/setup/#si_reks_print_states>

Chapter: [8. SA Pool and SI Cassettes](https://reksstudio.github.io/manual/setup/index.md#selecting)

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/llms.txt>. Every page: `https://reksstudio.github.io/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/inputs/<file>.txt`.

States per cassette whose per-state and pair tables are printed; 0 = none, -1 = all.

Type: int

Default: `5`

```python
"si_reks_print_states": -1,
```

* States per cassette listed in the per-state and pair tables; `0` = none, `-1` = all, on a Davidson cassette the 50 lowest ([SI eigensolver](https://reksstudio.github.io/manual/concepts/index.md#si-solver)).
* Properties are computed for max(print, store) states ([`SI_REKS_STORE_STATES`](https://reksstudio.github.io/options/SI_REKS_STORE_STATES.md)). Counts are clamped to the number of physical states.
