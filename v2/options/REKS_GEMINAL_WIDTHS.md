# `REKS_GEMINAL_WIDTHS`

HTML: <https://reksstudio.github.io/v2/manual/setup/#reks_geminal_widths>

Psi4 b275f4294, 2026-10-11: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `<page>/index.md` (markdown). Option cards: `options/<NAME>.md`. Raw files: `<file>.txt` (text/plain).

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
