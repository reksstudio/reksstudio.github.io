# `SI_REKS_PROPERTY_FOR`

HTML: <https://reksstudio.github.io/v2/manual/setup/#si_reks_property_for>

Chapter: [10. Properties, Gradients, Couplings](https://reksstudio.github.io/v2/manual/setup/index.md#response)

Psi4 f31cf1f94, 2026-10-15: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

States, per cassette, whose dipole, quadrupole, charges and bond indices are evaluated with the relaxed (CP-REKS) density.

Type: array of arrays

Default: `[]`

```python
"si_reks_property_for": [["S1,S2"], []],
```

* States evaluated with the relaxed density: dipole, quadrupole, Mulliken/Löwdin charges, Mayer/Wiberg indices ([Relaxed dipole, quadrupole and atomic charges](https://reksstudio.github.io/v2/manual/properties/index.md#relaxed-properties), [Bond indices of the relaxed density](https://reksstudio.github.io/v2/manual/properties/index.md#relaxed-bond-indices)).
* Entries: indices or labels, ranges, lists (`"S0..5"`, `"T1"`), inside the per-cassette inner lists (`[["S0..1"]]`), in the spin order of [`SI_REKS_2SPIN`](https://reksstudio.github.io/v2/options/SI_REKS_2SPIN.md) ([Cassette order](https://reksstudio.github.io/v2/manual/setup/index.md#cassette-order)); a flat list is rejected.
