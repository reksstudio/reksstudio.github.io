# `SI_REKS_2SPIN`

HTML: <https://reksstudio.github.io/v2/manual/setup/#si_reks_2spin>

Chapter: [9. Spin Manifolds (2S) and Multi-Sector Runs](https://reksstudio.github.io/v2/manual/setup/index.md#spin-manifolds)

Psi4 d40267fc2, 2026-10-13: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

2S of each SI group; more than one entry requires the 3-level `si_reks_configs` form.

Type: array

Default: ladder, lowest manifold

Alias: `REKS_SI_2SPIN`

```python
"si_reks_2spin": [0, 2],
```

* One integer 2S per SI group (explicit mode, [§9](https://reksstudio.github.io/v2/manual/setup/index.md#spin-manifolds)), pairwise distinct, in any order; more than one entry requires the 3-level `si_reks_configs` form.
* `[x]` alone: the default SA ensemble on 2S = 0 and the default SI cassette on 2S = x ([Input patterns](https://reksstudio.github.io/v2/manual/setup/index.md#input-patterns)).
