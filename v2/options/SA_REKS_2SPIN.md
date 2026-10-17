# `SA_REKS_2SPIN`

HTML: <https://reksstudio.github.io/v2/manual/setup/#sa_reks_2spin>

Chapter: [9. Spin Manifolds (2S) and Multi-Sector Runs](https://reksstudio.github.io/v2/manual/setup/index.md#spin-manifolds)

Psi4 72ce4d58b, 2026-10-17: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

Spin manifold 2S of each SA block, one integer per block.

Type: array

Default: ladder, lowest manifold

Alias: `REKS_SA_2SPIN`

```python
"sa_reks_2spin": [0, 2],
```

* One integer 2S per SA block (explicit mode, [§9](https://reksstudio.github.io/v2/manual/setup/index.md#spin-manifolds)). Entries are pairwise distinct, in any order (re-sorted ascending).
* Without `SA_REKS_CONFIGS` only `[0]` is accepted; any other value is an input error. States of 2S > 0 on the default ensemble: [`SI_REKS_2SPIN`](https://reksstudio.github.io/v2/options/SI_REKS_2SPIN.md).
