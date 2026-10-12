# `REKS`

HTML: <https://reksstudio.github.io/v2/manual/setup/#reks>

Psi4 b275f4294, 2026-10-11: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `<page>/index.md` (markdown). Option cards: `options/<NAME>.md`. Raw files: `<file>.txt` (text/plain).

Active space `[N, M]`: N active electrons in M active orbitals; selects the catalog.

Type: `[N, M]`

Default: — (required)

```python
"reks": [4, 4],
```

```log
REKS requires the canonical symmetric-Ms reference: N=2 implies molecule multiplicity 1 (even N -> 1, odd N -> 2), but the molecule multiplicity is 3. Do not set the multiplicity to 2S+1; keep the canonical value and pick spin manifolds via SA_REKS_2SPIN / SI_REKS_2SPIN.
```

* N active electrons in M active orbitals, exactly two integers; a third element (the former spin element) is an input error. Only installed catalogs run ([§6](https://reksstudio.github.io/v2/manual/setup/index.md#catalog)).
* Molecule multiplicity: 1 for even N, 2 for odd N (no installed catalog has odd N); any other value is the error above. The spin manifolds are chosen by [`SA_REKS_2SPIN`](https://reksstudio.github.io/v2/options/SA_REKS_2SPIN.md) / [`SI_REKS_2SPIN`](https://reksstudio.github.io/v2/options/SI_REKS_2SPIN.md) or the ladder ([§9](https://reksstudio.github.io/v2/manual/setup/index.md#spin-manifolds)).
