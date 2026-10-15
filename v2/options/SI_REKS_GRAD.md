# `SI_REKS_GRAD`

HTML: <https://reksstudio.github.io/v2/manual/setup/#si_reks_grad>

Chapter: [10. Properties, Gradients, Couplings](https://reksstudio.github.io/v2/manual/setup/index.md#response)

Psi4 bd0fb43ef, 2026-10-15: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

Roots whose analytic gradients are computed, per cassette; the first listed root is followed (`CURRENT ENERGY`, returned gradient).

Type: array of arrays

Default: `[]` (SA ensemble)

```python
"si_reks_grad": [[1, 2]],
```

```log
=> Gradient request <=

   Cassette  States    NAC pairs
   -----------------------------
          0  S1 *, S2  S1/S2
   -----------------------------
   States = SI states whose nuclear gradient is computed. * = followed state, returned by gradient().
```

* Roots whose gradients are computed, one inner list per cassette; inner list t = the t-th cassette in the spin order of [`SI_REKS_2SPIN`](https://reksstudio.github.io/v2/options/SI_REKS_2SPIN.md) ([Cassette order](https://reksstudio.github.io/v2/manual/setup/index.md#cassette-order); with `si_reks_2spin` `[2, 0]` list 0 is the triplet cassette); roots as in [Adiabatic (SSR) states](https://reksstudio.github.io/v2/manual/concepts/index.md#ssr-states). Inner list `[-1]` = all roots of that cassette (`[[-1]]`), on a Davidson cassette the 50 lowest; a flat `[-1]` is an input error. More inner lists than SI cassettes stop the run before the SCF: `REKS input error: SI_REKS_GRAD: 2 order list(s) for 1 SI cassette(s).`
* The followed root, marked `*` in `Gradient request`, is the first entry of the first non-empty inner list (`-1` → root 0). Without `SI_REKS_GRAD` it is the lowest root index in the pairs of the first non-empty `SI_REKS_NAC` list.
* With a followed root, `CURRENT ENERGY` is its energy, also stored as `REKS TARGET STATE ENERGY`, in `energy()` and `gradient()`; `gradient()` returns its gradient ([Nuclear gradients of SSR states](https://reksstudio.github.io/v2/manual/properties/index.md#state-gradient)). Without a followed root: [Explicit SA pool and SI cassettes](https://reksstudio.github.io/v2/manual/index.md#explicit-input).
* `CURRENT DIPOLE` is the relaxed dipole of the followed root when `SI_REKS_PROPERTY_FOR` lists that root, and is unset otherwise.
* Triplet gradient of `reks [2, 2]`: the triplet-gradient worked input ([Worked inputs](https://reksstudio.github.io/v2/manual/index.md#worked-inputs)), with `si_reks_grad` `[[], [0]]` following T1 of cassette 1.
