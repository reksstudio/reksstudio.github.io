# `SI_REKS_STORE_STATES`

HTML: <https://reksstudio.github.io/v2/manual/setup/#si_reks_store_states>

Psi4 b275f4294, 2026-10-11: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `<page>/index.md` (markdown). Option cards: `options/<NAME>.md`. Raw files: `<file>.txt` (text/plain).

States per cassette whose properties are stored on the wavefunction (arrays, Molden and cube files); 0 = none, -1 = all.

Type: array of int

Default: all; the first 10 if `M ≥ 6` and > 10 configurations

Alias: `REKS_SI_STORE_STATES`

```python
"si_reks_store_states": [-1, 0],
```

* One integer per cassette, in cassette order K = 0, 1, … (ascending 2S): states whose properties are stored on the wavefunction (array variables, Molden and cube files); `0` = none, `-1` = all.
* Roots requested in `SI_REKS_GRAD`, `SI_REKS_NAC`, `SI_REKS_PROPERTY_FOR` keep their eigenvectors regardless.
