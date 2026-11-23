# `SA_REKS_2SPIN`

HTML: <https://reksstudio.github.io/manual/setup/#sa_reks_2spin>

Chapter: [9. Spin Manifolds (2S) and Multi-Sector Runs](https://reksstudio.github.io/manual/setup/index.md#spin-manifolds)

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/llms.txt>. Every page: `https://reksstudio.github.io/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/inputs/<file>.txt`.

Spin manifold 2S of each SA block, one integer per block.

Type: array

Default: ladder, lowest manifold

Alias: `REKS_SA_2SPIN`

```python
"sa_reks_2spin": [0, 2],
```

* One integer 2S per SA block (explicit mode, [§9](https://reksstudio.github.io/manual/setup/index.md#spin-manifolds)). Entries are pairwise distinct, in any order (re-sorted ascending).
* Without `SA_REKS_CONFIGS` only `[N mod 2]` is accepted (`[0]` for even N, `[1]` for odd N); any other value is an input error. States of higher 2S on the default ensemble: [`SI_REKS_2SPIN`](https://reksstudio.github.io/options/SI_REKS_2SPIN.md).
