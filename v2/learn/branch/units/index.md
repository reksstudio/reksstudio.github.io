# Wide, hole and doublet units — REKS Studio Learn

HTML: <https://reksstudio.github.io/v2/learn/branch/units/>

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

[Learn](https://reksstudio.github.io/v2/learn/index.md) › Wide, hole and doublet units

# Wide, hole and doublet units

## Wide, hole and doublet units {#branch-units}

Wide geminals, hole geminals, doublets and the implicit SOMO; each unit kind is defined once in [Unit](https://reksstudio.github.io/v2/learn/concepts/index.md#unit), its slots in [Slots of each unit kind](https://reksstudio.github.io/v2/learn/procedure/index.md#unit-slots), every catalog in [Active space and catalog](https://reksstudio.github.io/v2/learn/reference/index.md#catalog).

## Wide electron geminals {#units-wide}

### Lone pair over three orbitals: BH, REKS(2,3) 3 {#case-wide-bh-23}

**Can one pair spread over more than two orbitals?**

Predict

The boron lone pair correlates with both π orbitals. REKS(2,2) takes one of them into the pair. Where does the second π go in REKS(2,3)?

Input: [`wide_bh_23.dat`](https://reksstudio.github.io/v2/inputs/wide_bh_23.dat.txt); charge 0, multiplicity 1

Active space: catalog `reks23_u3` = REKS(2,3); units `[3]`: electron geminal (FON n); 2S = 0 (7 configurations), 2 (3 configurations)

SA, SI: defaults ([SA-REKS ensemble and weights](https://reksstudio.github.io/v2/learn/concepts/index.md#sa-ensemble), [SI cassette](https://reksstudio.github.io/v2/learn/concepts/index.md#si-cassette))

```psithon
#! SA-REKS(2,3) and SI-SA-REKS(2,3) of BH, BH&HLYP/cc-pVDZ: one geminal over the lone pair and both pi orbitals.  # changed

molecule bh {  # changed
0 1
B 0.0 0.0 0.0  # changed
H 0.0 0.0 1.2324  # changed
symmetry c1
}

set {
  basis      cc-pvdz
  reference  reks
  reks       [2, 3]  # changed
  reks_geminal_widths [3]  # changed
}

energy('bhhlyp')
```

Highlighted: changed from [One electron pair: H₂, REKS(2,2)](https://reksstudio.github.io/v2/learn/path/p1/index.md#case-h2-pair); removed:

```psithon
#! SI-SA-REKS(2,2) of H2, BH&HLYP/cc-pVDZ, default SA ensemble and SI cassette.
molecule h2 {
H 0.0 0.0 0.0
H 0.0 0.0 0.74
  reks       [2, 2]
```

Look at: the FONs of slots a, b, c in `Post-Iterations` ([Fractional occupation numbers of the SA-REKS ensemble](https://reksstudio.github.io/v2/learn/reference/properties/index.md#sa-fons))

Output: to be computed

Orbitals: orbitals will be shown

Check: both π FONs equal: the cylindrical symmetry of BH

Try: [`reks [2, 2]`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-reks) without the [`reks_geminal_widths`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-reks_geminal_widths) line: one π in the pair, the other left out

Why

A geminal of width K holds two electrons in K orbitals ([Unit](https://reksstudio.github.io/v2/learn/concepts/index.md#unit)).

Branches from here: [Geminal over four orbitals: REKS(2,4) 4](#case-wide-24)

### Geminal over four orbitals: REKS(2,4) 4 {#case-wide-24}

**What does a geminal of width 4 hold?**

* **Input:** input will be added

* **System:** system to be chosen

* **Active space:** catalog `reks24_u4` = REKS(2,4); units `[4]`: electron geminal (FON n); 2S = 0 (13 configurations), 2 (6 configurations)

* **Output:** to be computed

* **Orbitals:** orbitals will be shown

* **Check:** the four FONs of the geminal sum to 2 ([Unit](https://reksstudio.github.io/v2/learn/concepts/index.md#unit))

The seed chain REKS(2,3) → REKS(4,5) → REKS(4,6):

### Bond and lone pair: BH, REKS(4,5) 2 3 {#case-wide-bh-45}

**How is a wide geminal seeded next to a pair?**

Predict

Straight from the RHF orbitals, will the SCF put the lone pair and both π into one geminal?

* **Input:** input will be added

* **System:** BH, the geometry of [Lone pair over three orbitals: BH, REKS(2,3) 3](#case-wide-bh-23), seeded from its REKS(2,3) orbitals

* **Active space:** catalog `reks45_u23` = REKS(4,5); units `[2, 3]`: electron geminal (FON n), electron geminal (FON n); 2S = 0 (118 configurations), 2 (75 configurations), 4 (5 configurations)

* **Look at:** the character of the columns of the REKS(2,3) file, then the `swaps` of the window

* **Output:** to be computed

* **Orbitals:** orbitals will be shown

* **Check:** lone pair and both π in (a,c,d), the B–H bond and σ<sup>\*</sup> in (b,e)

* **Try:** stage `reks45_rhf` of [`wide_bh_45.py`](https://reksstudio.github.io/v2/inputs/wide_bh_45.py.txt): the same active space straight from the RHF seed

Why

Each wider space reads the orbitals of the previous one ([Restart mechanism](https://reksstudio.github.io/v2/learn/reference/run-control/index.md#restart)): REKS(2,3) → REKS(4,5) → REKS(4,6). A REKS restart file stores the core, then the active orbitals in slot order, then the virtuals; integer window tokens are 0-based columns of the read file ([`GUESS_ACTIVE_WINDOW`](https://reksstudio.github.io/v2/learn/reference/run-control/index.md#guess_active_window)).

Branches from here: [Two wide geminals: BH, REKS(4,6) 3 3](#case-wide-bh-46)

### Two wide geminals: BH, REKS(4,6) 3 3 {#case-wide-bh-46}

**What does one more orbital in the bond geminal add?**

* **Input:** input will be added

* **System:** BH, seeded from the REKS(4,5) orbitals of [Bond and lone pair: BH, REKS(4,5) 2 3](#case-wide-bh-45)

* **Active space:** catalog `reks46_u33` = REKS(4,6); units `[3, 3]`: 2 × electron geminal (FON n); 2S = 0 (190 configurations), 2 (141 configurations), 4 (15 configurations)

* **Look at:** the FONs of both geminals of `Pairing scheme 0` in `Post-Iterations`

* **Output:** to be computed

* **Orbitals:** orbitals will be shown

* **Check:** lone pair and both π in (a,d,f); B–H bond, σ<sup>\*</sup> and a second σ in (b,c,e)

Why

A product of geminals has no correlation between the geminals: CASCI in the same orbitals is lower for two geminals ([Unit](https://reksstudio.github.io/v2/learn/concepts/index.md#unit)).

## Hole geminals {#units-hole}

### Hole geminal: REKS(4,3) h3 {#case-hole-43}

**What if two holes, not two electrons, are shared over three orbitals?**

* **Input:** input will be added

* **System:** system to be chosen; candidates: NH, O<sub>3</sub>

* **Active space:** catalog `reks43_uh3` = REKS(4,3); units `[h3]`: hole geminal (FON h); 2S = 0 (7 configurations), 2 (3 configurations)

* **Output:** to be computed

* **Orbitals:** orbitals will be shown

* **Check:** the hole occupations h = 2 − n of the three slots sum to 2 ([Unit](https://reksstudio.github.io/v2/learn/concepts/index.md#unit))

Why

A hole geminal hK holds 2K − 2 electrons in K orbitals; its FON variable is the hole occupation h = 2 − n ([Fractional occupation numbers (FONs)](https://reksstudio.github.io/v2/learn/reference/run-control/index.md#fons)).

Branches from here: [Hole geminal and SOMO: REKS(5,4) h3 d1](#case-hole-54)

### Hole geminal and SOMO: REKS(5,4) h3 d1 {#case-hole-54}

**Where does the odd electron go next to a hole geminal?**

* **Input:** input will be added

* **System:** system to be chosen; candidates: H<sub>5</sub>

* **Active space:** catalog `reks54_uh3` = REKS(5,4); units `[h3, d1]`: hole geminal (FON h), electron doublet; 2S = 1 (20 configurations), 3 (4 configurations)

* **Output:** to be computed

* **Orbitals:** orbitals will be shown

* **Check:** multiplicity 2; the implicit SOMO d1 next to the hole geminal ([Unit](https://reksstudio.github.io/v2/learn/concepts/index.md#unit))

### Hole geminal and pair: REKS(6,5) h3 2 {#case-hole-pair-65}

**Can a hole geminal and an electron pair share one active space?**

* **Input:** input will be added

* **System:** system to be chosen; candidates: H<sub>6</sub>

* **Active space:** catalog `reks65_uh32` = REKS(6,5); units `[h3, 2]`: hole geminal (FON h), electron geminal (FON n); 2S = 0 (82 configurations), 2 (55 configurations), 4 (5 configurations)

* **Output:** to be computed

* **Orbitals:** orbitals will be shown

* **Check:** hole occupations of the h3 unit sum to 2, FONs of the pair sum to 2 ([Unit](https://reksstudio.github.io/v2/learn/concepts/index.md#unit))

* **Branches from here:** [Two hole geminals: REKS(8,6) h3 h3](#case-holes-86)

### Two hole geminals: REKS(8,6) h3 h3 {#case-holes-86}

**What do two hole geminals give?**

* **Input:** input will be added

* **System:** system to be chosen; candidates: H<sub>8</sub>

* **Active space:** catalog `reks86_uh3h3` = REKS(8,6); units `[h3, h3]`: 2 × hole geminal (FON h); 2S = 0 (190 configurations), 2 (141 configurations), 4 (15 configurations)

* **Output:** to be computed

* **Orbitals:** orbitals will be shown

* **Check:** hole occupations of each h3 unit sum to 2 ([Unit](https://reksstudio.github.io/v2/learn/concepts/index.md#unit))

## Odd N: SOMO and doublets {#units-odd}

### Implicit SOMO: REKS(3,3) 2 d1 {#case-odd-33}

**How does REKS treat an odd electron?**

* **Input:** input will be added

* **System:** system to be chosen

* **Active space:** catalog `reks33` = REKS(3,3); units `[2, d1]`: electron geminal (FON n), electron doublet; 2S = 1 (8 configurations), 3 (1 configuration)

* **Output:** to be computed

* **Orbitals:** orbitals will be shown

* **Check:** multiplicity 2; roots labelled D0, D1, … on the lowest manifold ([Adiabatic (SSR) states](https://reksstudio.github.io/v2/learn/concepts/index.md#ssr-states))

Why

The SOMO is the implicit d1 unit ([Unit](https://reksstudio.github.io/v2/learn/concepts/index.md#unit)), slot b between the pair (a,c) ([Slots of each unit kind](https://reksstudio.github.io/v2/learn/procedure/index.md#unit-slots)); the molecular multiplicity stays canonical, 2 for odd N ([Spin manifold and run sector](https://reksstudio.github.io/v2/learn/concepts/index.md#run-sector)).

Branches from here: [Two pairs and a SOMO: REKS(5,5) 2 2 d1](#case-odd-55) · [Wide geminal and SOMO: REKS(3,4) 3 d1](#case-odd-34-u3) · [Electron doublet over two orbitals: REKS(3,4) 2 d2](#case-doublet-34)

### Two pairs and a SOMO: REKS(5,5) 2 2 d1 {#case-odd-55}

**What do two pairs next to an odd electron give?**

* **Input:** input will be added

* **System:** system to be chosen

* **Active space:** catalog `reks55` = REKS(5,5); units `[2, 2, d1]`: 2 × electron geminal (FON n), electron doublet; 2S = 1 (77 configurations), 3 (28 configurations), 5 (1 configuration)

* **Output:** to be computed

* **Orbitals:** orbitals will be shown

* **Check:** multiplicity 2; roots labelled D0, D1, … on 2S = 1, the lowest manifold ([Adiabatic (SSR) states](https://reksstudio.github.io/v2/learn/concepts/index.md#ssr-states))

### Wide geminal and SOMO: REKS(3,4) 3 d1 {#case-odd-34-u3}

**Can the pair next to an odd electron be wide?**

* **Input:** input will be added

* **System:** system to be chosen; candidates: H<sub>4</sub><sup>+</sup>

* **Active space:** catalog `reks34_u3` = REKS(3,4); units `[3, d1]`: electron geminal (FON n), electron doublet; 2S = 1 (20 configurations), 3 (4 configurations)

* **Output:** to be computed

* **Orbitals:** orbitals will be shown

* **Check:** three FONs of the geminal sum to 2; the implicit SOMO d1 ([Unit](https://reksstudio.github.io/v2/learn/concepts/index.md#unit))

### Electron doublet over two orbitals: REKS(3,4) 2 d2 {#case-doublet-34}

**Can the odd electron spread over two orbitals?**

* **Input:** input will be added

* **System:** system to be chosen; candidates: NO

* **Active space:** catalog `reks34_u2d2` = REKS(3,4); units `[2, d2]`: electron geminal (FON n), electron doublet; 2S = 1 (14 configurations), 3 (3 configurations)

* **Output:** to be computed

* **Orbitals:** orbitals will be shown

* **Check:** multiplicity 2; the doublet carries no FON ([Unit](https://reksstudio.github.io/v2/learn/concepts/index.md#unit))

Why

An electron doublet dK holds one electron in K orbitals and has no FON variable; its aufbau slot is the first orbital ([Unit](https://reksstudio.github.io/v2/learn/concepts/index.md#unit)).

Branches from here: [Hole doublet: REKS(5,4) 2 hd2](#case-hole-doublet-54)

### Hole doublet: REKS(5,4) 2 hd2 {#case-hole-doublet-54}

**Can the odd hole spread over two orbitals?**

* **Input:** input will be added

* **System:** system to be chosen; candidates: OH

* **Active space:** catalog `reks54_u2hd2` = REKS(5,4); units `[2, hd2]`: electron geminal (FON n), hole doublet; 2S = 1 (14 configurations), 3 (3 configurations)

* **Output:** to be computed

* **Orbitals:** orbitals will be shown

* **Check:** multiplicity 2; the hole doublet carries no FON ([Unit](https://reksstudio.github.io/v2/learn/concepts/index.md#unit))

Why

A hole doublet hdK holds 2K − 1 electrons in K orbitals; its aufbau slot is the last orbital ([Unit](https://reksstudio.github.io/v2/learn/concepts/index.md#unit)).

Branches from here: [Wide geminal and hole doublet: REKS(7,6) 3 hd3](#case-doublet-76)

### Wide geminal and hole doublet: REKS(7,6) 3 hd3 {#case-doublet-76}

**Can a wide geminal and a wide hole doublet share one active space?**

* **Input:** input will be added

* **System:** system to be chosen

* **Active space:** catalog `reks76_u3hd3` = REKS(7,6); units `[3, hd3]`: electron geminal (FON n), hole doublet; 2S = 1 (56 configurations), 3 (16 configurations)

* **Output:** to be computed

* **Orbitals:** orbitals will be shown

* **Check:** three FONs of the geminal sum to 2; the hole doublet carries no FON ([Unit](https://reksstudio.github.io/v2/learn/concepts/index.md#unit))

## Linked files

[inputs/wide_bh_23.dat](https://reksstudio.github.io/v2/inputs/wide_bh_23.dat.txt)

[inputs/wide_bh_45.py](https://reksstudio.github.io/v2/inputs/wide_bh_45.py.txt)
