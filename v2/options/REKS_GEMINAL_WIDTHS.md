# `REKS_GEMINAL_WIDTHS`

HTML: <https://reksstudio.github.io/v2/manual/setup/#reks_geminal_widths>

Chapter: [6. Active Space and Catalog](https://reksstudio.github.io/v2/manual/setup/index.md#catalog)

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

Units of the active space: electron or hole geminals, electron or hole doublets, one token each; selects the catalog.

Type: array

Default: `[]` (all 2)

```python
"reks": [4, 5],
"reks_geminal_widths": [2, 3],
```

* One token per unit of the active space, in unit order; K = width, the number of the unit's orbitals, K ≤ 8:
* `K` or `"K"`: electron geminal, 2 electrons in K orbitals (K ≥ 2). `"hK"`: hole geminal, 2K − 2 electrons (K ≥ 3); its FON variable is the hole occupation h = 2 − n. `"dK"`: electron doublet, 1 electron (K ≥ 1). `"hdK"`: hole doublet, 2K − 1 electrons (K ≥ 2).
* At least one geminal and at most one doublet. For odd N without a doublet token the SOMO (`"d1"`) is implicit. Unit electrons (plus the implicit SOMO) sum to N, widths to M. Empty (default): every unit is a two-orbital electron geminal.
* Configurations of wider units carry orbital-letter suffixes (`OSSa1`, `DESb1`).
* Selects the catalog `reks{N}{M}_u{tokens}`, the tokens concatenated in unit order, the plain `reks{N}{M}` when every token is 2; the installed ones and their tokens: [§6](https://reksstudio.github.io/v2/manual/setup/index.md#catalog).
