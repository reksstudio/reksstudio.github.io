# `REKS_GEMINAL_WIDTHS`

HTML: <https://reksstudio.github.io/v2/manual/setup/#reks_geminal_widths>

Chapter: [6. Active Space and Catalog](https://reksstudio.github.io/v2/manual/setup/index.md#catalog)

Psi4 f31cf1f94, 2026-10-15: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

Width (orbital count) of each geminal, N/2 integers summing to M; selects the catalog `reks{N}{M}_u{w0}{w1}…`.

Type: array

Default: `[]` (all 2)

```python
"reks": [4, 5],
"reks_geminal_widths": [2, 3],
```

* Orbital count of each two-electron geminal: N/2 integers, each in \[2, 8], summing to M. Empty (default): every geminal spans 2 orbitals.
* A width-w geminal holds 2 electrons in w orbitals; its configurations carry orbital-letter suffixes (`OSSa1`, `DESb1`).
* Selects the catalog `reks{N}{M}_u{w0}{w1}…`; the installed ones are listed above.
