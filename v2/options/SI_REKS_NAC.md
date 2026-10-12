# `SI_REKS_NAC`

HTML: <https://reksstudio.github.io/v2/manual/setup/#si_reks_nac>

Psi4 b275f4294, 2026-10-11: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `<page>/index.md` (markdown). Option cards: `options/<NAME>.md`. Raw files: `<file>.txt` (text/plain).

Root pairs `[I, J]` per cassette whose nonadiabatic couplings and conical-intersection topography are computed.

Type: array

Default: `[]`

```python
"si_reks_nac": [[[1, 2]]],
```

* Pairs `[I, J]` per SI cassette, `[[[I, J], ...], ...]`, or `ALL`; the call above couples S1 and S2 of cassette 0. Computed in `gradient()`; the roots of each pair join the gradient targets.
* Publishes `SSR NAC I J CASSETTE e` (1/bohr, [Nonadiabatic coupling vectors](https://reksstudio.github.io/v2/manual/properties/index.md#nac)) and the conical-intersection topography `SSR CI TOPOGRAPHY I J CASSETTE e` ([Conical-intersection topography](https://reksstudio.github.io/v2/manual/properties/index.md#ci-topography)).
* Without `SI_REKS_GRAD` the followed root: [`SI_REKS_GRAD`](https://reksstudio.github.io/v2/options/SI_REKS_GRAD.md).
