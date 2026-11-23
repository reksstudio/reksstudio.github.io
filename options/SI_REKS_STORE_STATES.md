# `SI_REKS_STORE_STATES`

HTML: <https://reksstudio.github.io/manual/setup/#si_reks_store_states>

Chapter: [8. SA Pool and SI Cassettes](https://reksstudio.github.io/manual/setup/index.md#selecting)

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/llms.txt>. Every page: `https://reksstudio.github.io/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/inputs/<file>.txt`.

States per cassette whose properties are stored on the wavefunction (arrays, Molden and cube files); 0 = none, -1 = all.

Type: array of int

Default: all; the first 10 if `M ≥ 6` and > 10 configurations

Alias: `REKS_SI_STORE_STATES`

```python
"si_reks_store_states": [-1, 0],
```

* One integer per cassette, entry t = the t-th cassette in the spin order of [`SI_REKS_2SPIN`](https://reksstudio.github.io/options/SI_REKS_2SPIN.md) ([Cassette order](https://reksstudio.github.io/manual/setup/index.md#cassette-order)): states whose properties are stored on the wavefunction (array variables, Molden and cube files); `0` = none, `-1` = all, on a Davidson cassette the 50 lowest ([SI eigensolver](https://reksstudio.github.io/manual/concepts/index.md#si-solver)).
* Roots requested in `SI_REKS_GRAD`, `SI_REKS_NAC`, `SI_REKS_PROPERTY_FOR` keep their eigenvectors regardless.
