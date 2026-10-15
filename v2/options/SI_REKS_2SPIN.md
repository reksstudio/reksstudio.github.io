# `SI_REKS_2SPIN`

HTML: <https://reksstudio.github.io/v2/manual/setup/#si_reks_2spin>

Chapter: [9. Spin Manifolds (2S) and Multi-Sector Runs](https://reksstudio.github.io/v2/manual/setup/index.md#spin-manifolds)

Psi4 f31cf1f94, 2026-10-15: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

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
* Sets the order of the SI cassettes: the spin groups follow this list, the cassettes of a group the order of its `SI_REKS_CONFIGS` block. The per-cassette lists [`SI_REKS_GRAD`](https://reksstudio.github.io/v2/options/SI_REKS_GRAD.md), [`SI_REKS_NAC`](https://reksstudio.github.io/v2/options/SI_REKS_NAC.md), [`SI_REKS_PROPERTY_FOR`](https://reksstudio.github.io/v2/options/SI_REKS_PROPERTY_FOR.md) and [`SI_REKS_STORE_STATES`](https://reksstudio.github.io/v2/options/SI_REKS_STORE_STATES.md) take their entries in this order: with `[2, 0]` entry 0 is the triplet cassette. The printed index K and the `K=e`, `CASSETTE e` names run in ascending 2S (the triplet is K = 1). Without the option (ladder) both orders are ascending 2S ([Cassette order](https://reksstudio.github.io/v2/manual/setup/index.md#cassette-order)).
