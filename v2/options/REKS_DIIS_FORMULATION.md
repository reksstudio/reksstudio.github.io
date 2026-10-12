# `REKS_DIIS_FORMULATION`

HTML: <https://reksstudio.github.io/v2/manual/run-control/#reks_diis_formulation>

Psi4 b275f4294, 2026-10-11: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `<page>/index.md` (markdown). Option cards: `options/<NAME>.md`. Raw files: `<file>.txt` (text/plain).

GVB-DIIS formulation: extrapolation of the orbital-rotation generators κ, or of the composite multishell Fock matrix (`CFM`).

Type: `CFM`|`ORBITAL`

Default: `ORBITAL`

```python
"reks_diis_formulation": "CFM",
```

* `ORBITAL` (default; trace tag `ORB-GVB-DIIS`) extrapolates skew-symmetric rotation generators κ directly in the MO basis and bypasses Fock diagonalization each step ([Ionova and Carter, J. Chem. Phys. 1995, 102, 1251](https://reksstudio.github.io/v2/manual/reference/index.md#ionova1995-orbital-diis); the r-GDIIS variant of [Sethio et al., J. Phys. Chem. A 2024, 128, 2472](https://reksstudio.github.io/v2/manual/reference/index.md#sethio2024-r-gdiis)).
* `CFM` (trace tag `CFM-GVB-DIIS/SHIFT`) extrapolates the composite multishell Fock matrix, the multishell-Fock DIIS of [Muller et al., J. Chem. Phys. 1994, 100, 1226](https://reksstudio.github.io/v2/manual/reference/index.md#muller1994-gvb-diis), where every active orbital is its own shell (core = 1 shell, virtual = 1 shell).
