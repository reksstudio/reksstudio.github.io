# `REKS_EKT`

HTML: <https://reksstudio.github.io/v2/manual/setup/#reks_ekt>

Psi4 b275f4294, 2026-10-11: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `<page>/index.md` (markdown). Option cards: `options/<NAME>.md`. Raw files: `<file>.txt` (text/plain).

Enables EKT: ionization energies, pole strengths and Dyson orbitals of the `si_reks_property_for` states or of the SA ensemble.

Type: bool

Default: `false`

```python
"reks_ekt": True,
```

* Extended Koopmans ionization energies, pole strengths and Dyson orbitals for the `SI_REKS_PROPERTY_FOR` states ([EKT ionization energies, pole strengths and Dyson orbitals of SI states](https://reksstudio.github.io/v2/manual/properties/index.md#ekt-states)), otherwise for the SA ensemble ([EKT ionization energies of the SA-REKS ensemble](https://reksstudio.github.io/v2/manual/properties/index.md#ekt-ensemble)).
