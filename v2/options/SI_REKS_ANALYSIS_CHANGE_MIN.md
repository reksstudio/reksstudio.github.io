# `SI_REKS_ANALYSIS_CHANGE_MIN`

HTML: <https://reksstudio.github.io/v2/manual/setup/#si_reks_analysis_change_min>

Chapter: [10. Properties, Gradients, Couplings](https://reksstudio.github.io/v2/manual/setup/index.md#response)

Psi4 bd0fb43ef, 2026-10-15: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

Smallest state-to-state change of a charge or bond index that is printed.

Type: double

Default: `0.1`

```python
"si_reks_analysis_change_min": 0.05,
```

* Smallest state-to-state change of a charge, spin population or bond index that is printed ([Atomic charges of the states (unrelaxed)](https://reksstudio.github.io/v2/manual/properties/index.md#atomic-charges), [Atomic spin populations of the states (2S > 0)](https://reksstudio.github.io/v2/manual/properties/index.md#atomic-spins)).
