# `SI_REKS_NAC`

HTML: <https://reksstudio.github.io/v2/manual/setup/#si_reks_nac>

Chapter: [10. Properties, Gradients, Couplings](https://reksstudio.github.io/v2/manual/setup/index.md#response)

Psi4 72ce4d58b, 2026-10-17: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

Root pairs `[I, J]` per cassette whose nonadiabatic couplings and conical-intersection topography are computed.

Type: array

Default: `[]`

```python
"si_reks_nac": [[[1, 2]]],
```

* Pairs `[I, J]` per SI cassette, in the spin order of [`SI_REKS_2SPIN`](https://reksstudio.github.io/v2/options/SI_REKS_2SPIN.md) ([Cassette order](https://reksstudio.github.io/v2/manual/setup/index.md#cassette-order)), `[[[I, J], ...], ...]`, or `ALL`; the call above couples S1 and S2 of cassette 0. Computed in `gradient()`; the roots of each pair join the gradient targets.
* Publishes `SSR NAC I J CASSETTE e` (1/bohr, [Nonadiabatic coupling vectors](https://reksstudio.github.io/v2/manual/properties/index.md#nac)) and the conical-intersection topography `SSR CI TOPOGRAPHY I J CASSETTE e` ([Conical-intersection topography](https://reksstudio.github.io/v2/manual/properties/index.md#ci-topography)); e is the printed cassette index K (ascending 2S).
* Without `SI_REKS_GRAD` the followed root: [`SI_REKS_GRAD`](https://reksstudio.github.io/v2/options/SI_REKS_GRAD.md).
