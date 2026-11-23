# Input reference — REKS Studio Learn

HTML: <https://reksstudio.github.io/learn/reference/>

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/llms.txt>. Every page: `https://reksstudio.github.io/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/inputs/<file>.txt`.

[Learn](https://reksstudio.github.io/learn/index.md) › Input reference

# Input reference

## Input {#input}

REKS Studio is the REKS solver of this Psi4 branch, selected with `reference reks`. A functional, a basis, and an SCF type are chosen as for any Psi4 reference, and `psi4.energy("<functional>")` is called as usual, e.g. `psi4.energy("bhhlyp")`; the functional builds the Kohn–Sham matrices of every microstate ([Microstate](https://reksstudio.github.io/learn/concepts/index.md#microstate)). `psi4.energy("scf")` runs REKS with Hartree–Fock exchange and no functional; its setup block then has no `XC evaluation` line.

### Minimal input {#minimal-input}

```psithon
set {
    reference  reks
    reks       [ 2, 2 ]
}
energy('bhhlyp')
```

Only `reference reks` and [`reks [N, M]`](https://reksstudio.github.io/learn/reference/options/index.md#row-reks) are required. Absent [`sa_reks_configs`](https://reksstudio.github.io/learn/reference/options/index.md#row-sa_reks_configs): the catalog's default SA pool ([`SA_REKS_CONFIGS`](#sa_reks_configs)). Absent [`sa_reks_weights`](https://reksstudio.github.io/learn/reference/options/index.md#row-sa_reks_weights): uniform weights. Absent [`si_reks_configs`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_configs): one cassette spanning the full configuration block of the run's lowest manifold ([`SI_REKS_CONFIGS`](#si_reks_configs)). For [`reks [2, 2]`](https://reksstudio.github.io/learn/reference/options/index.md#row-reks), the defaults are SA = PPS1, OSS1 (weights 0.5) and the cassette PPS1, OSS1, DES1, printed as `3SI-2SA-REKS(2,2)`. A new molecule starts from seeded and checked active orbitals ([Procedure](https://reksstudio.github.io/learn/procedure/index.md#procedure)).

### Explicit SA pool and SI cassettes {#explicit-input}

SSR(4,4) with an explicit SA pool and weights and four SI cassettes, written as one group (one spin manifold) of four cassettes `[[[…], […], […], […]]]` ([`SI_REKS_CONFIGS`](#si_reks_configs)). Each cassette is its own eigenproblem in the same SA orbitals; `PPS2` belongs to pairing scheme 1 (`SI pools` prints the definition of every name, [Pairing scheme](https://reksstudio.github.io/learn/concepts/index.md#pairing-scheme); tokens: [Bulk tokens and pattern syntax](#bulk-tokens)). Complete input: [Four SI cassettes from one SCF](https://reksstudio.github.io/learn/branch/solvers/index.md#case-cassettes-h4).

```python
psi4.set_options({
    'reference':       'reks',
    'reks':            [4, 4],
    'sa_reks_configs': ['PPS1', 'OSS1', 'OSS2'],
    'sa_reks_weights': [0.5, 0.25, 0.25],
    'si_reks_configs': [[['PPS1', 'PPS2', 'OSS1', 'OSS2'], ['single-scheme'], ['mixed-scheme'], ['full']]],
})
psi4.energy('scf')
```

or as PSithon (`.dat`) input:

```psithon
set {
    reference        reks
    reks             [ 4, 4 ]
    sa_reks_configs  [ PPS1, OSS1, OSS2 ]
    sa_reks_weights  [ 0.5, 0.25, 0.25 ]
    si_reks_configs  [ [ [PPS1, PPS2, OSS1, OSS2], [single-scheme], [mixed-scheme], [full] ] ]
}
energy('scf')
```

Linear H₄ (sto-3g, H–H 0.9 Å, `symmetry c1`), HF: one SCF, E<sub>SA</sub> = −1.643432513968 E<sub>h</sub>; the four cassettes give (E<sub>h</sub>):

| Cassette | Configurations (states) | S0 | S1 | S2 |
| - | - | - | - | - |
| 0: `PPS1`, `PPS2`, `OSS1`, `OSS2` | 4 (4) | −2.125272976235 | −1.575184105930 | −0.754226404381 |
| 1: `single-scheme` (scheme 0 + `DOSS_SPS_0`, `_1`) | 10 (10) | −2.140622335856 | −1.578546559161 | −1.311136456214 |
| 2: `mixed-scheme` | 9 (9) | −2.143592670888 | −1.575184105930 | −1.475834553802 |
| 3: `full` | 18 (16) | −2.157804217606 | −1.578546559161 | −1.556892128760 |

S0 falls by 32.5 mE<sub>h</sub> from cassette 0 to the full block. S1 is the `OSS2` state in every cassette; it is lower in cassettes 1 and 3, which add `OSS_DES1`. S2 changes character with the cassette: `OSS1` in cassette 0, `DES2` in cassette 1, an `OSS3`/`DES2` mixture in cassettes 2 and 3 (with `DES3` 7.7 % in cassette 3). The first four states of each cassette in `Adiabatic states`:

```log
=> Adiabatic states, cassette 0 <=

   State           E [Eh]  E-E(S0) [eV]   Leading configurations (w_j in %)
   ------------------------------------------------------------------------
   S0     -2.125272976235         0.000   PPS1(51.1) PPS2(48.9)
   S1     -1.575184105930        14.969   OSS2(99.7) OSS1(0.3)
   S2     -0.754226404381        37.308   OSS1(99.7) OSS2(0.3)
   S3      3.641662279045       156.926   PPS2(51.1) PPS1(48.9)
   ------------------------------------------------------------------------
   w_j = c_j (S c)_j = Chirgwin-Coulson weight of configuration j in the state, sum_j w_j = 100 %;
   listed: the three largest |w_j| >= 0.1 %, then every further |w_j| > 5 %.
```

```log
=> Adiabatic states, cassette 1 <=

   State           E [Eh]  E-E(S0) [eV]   Leading configurations (w_j in %)
   -----------------------------------------------------------------------------------
   ref    -2.125272976235         0.000   S0 of cassette 0
   S0[1]  -2.140622335856        -0.418   PPS1(98.9) DOSS_SPS_1(1.0)
   S1[1]  -1.578546559161        14.877   OSS2(99.5) OSS1(0.3) OSS_DES1(0.1)
   S2[1]  -1.311136456214        22.154   DES2(94.3) DOSS_SPS_1(5.0) DDES1(0.3)
   S3[1]  -0.759700282426        37.159   OSS1(99.0) OSS_DES2(0.7) OSS2(0.3)
```

```log
=> Adiabatic states, cassette 2 <=

   State           E [Eh]  E-E(S0) [eV]   Leading configurations (w_j in %)
   -----------------------------------------------------------------------------------
   ref    -2.125272976235         0.000   S0 of cassette 0
   S0[2]  -2.143592670888        -0.499   PPS1(98.5) DOSS_SPS_1(0.9) OSS3(0.3)
   S1[2]  -1.575184105930        14.969   OSS2(99.7) OSS1(0.3)
   S2[2]  -1.475834553802        17.672   OSS3(53.3) DES2(39.0) OSS4(5.3)
   S3[2]  -1.222179421667        24.574   DES2(50.3) OSS3(43.3) DOSS_SPS_1(3.7)
```

```log
=> Adiabatic states, cassette 3 <=

   State            E [Eh]  E-E(S0) [eV]   Leading configurations (w_j in %)
   -----------------------------------------------------------------------------------------------------------------------
   ref     -2.125272976235         0.000   S0 of cassette 0
   S0[3]   -2.157804217606        -0.885   PPS1(49.1) PPS2(48.3) DOSS_SPS_1(1.1)
   S1[3]   -1.578546559161        14.877   OSS2(99.5) OSS1(0.3) OSS_DES1(0.1)
   S2[3]   -1.556892128760        15.466   OSS3(46.2) DES2(35.6) DES3(7.7)
   S3[3]   -1.243261461583        24.001   OSS3(45.4) DES2(44.7) OSS4(4.7)
```

Only the roots of the first cassette of a manifold carry plain labels (`S0`, `S1`, …); `State summary` lists them, and `Alternative configuration lists` matches the states of the later cassettes (`S0[1]`, …) to them. `ref` and the eV column refer to the lowest state of the first cassette of the run ([Cassette order](#cassette-order)).

Without [`si_reks_grad`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_grad) and [`si_reks_nac`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_nac), as in both inputs above, `energy()` returns E<sub>SA</sub> (`CURRENT ENERGY` = `SCF TOTAL ENERGY`), not an SSR state energy: −1.643432513968 E<sub>h</sub> for this H₄ run, against S0 = −2.125272976235 to −2.157804217606 E<sub>h</sub> of the four cassettes. With a followed state: [`SI_REKS_GRAD`](#si_reks_grad). Energies in the output and their variables:

| Quantity | Printed in | Variable |
| - | - | - |
| SA-REKS ensemble energy E<sub>SA</sub> | `@REKS Final Energy` (`@DF-REKS` with density fitting), `Energetics` | `SCF TOTAL ENERGY` |
| SA configuration energies (PPS, OSS, …), not states | `SA-REKS energy decomposition` | — |
| SSR states S0, S1, … of cassette e | `Adiabatic states` | `SSR ENERGIES K=e` |
| Followed state, gradient | `Gradient request` (`*`), `Returned gradient` | `CURRENT ENERGY`, `CURRENT GRADIENT` |

From Python:

```python
e, wfn = psi4.energy("bhhlyp", return_wfn=True)
ssr = wfn.array_variable("SSR ENERGIES K=0").np.ravel()   # S0, S1, ... of cassette 0
e_sa = psi4.variable("SCF TOTAL ENERGY")
```

### Required and rejected settings {#required-settings}

| Setting | Rule |
| - | - |
| Molecule symmetry | C1; any other point group is an input error (below). |
| Molecule multiplicity | The canonical value ([`REKS`](#reks)). |
| `DIIS`, `SOSCF` | Switched off by REKS. |
| `LEVEL_SHIFT`, `LEVEL_SHIFT_CUTOFF` | Unset: REKS defaults ([Level shift](https://reksstudio.github.io/learn/reference/run-control/index.md#level-shift)). |
| `PCM`, `DDX`, `PE`, `MOM_START`, `FRAC_START` | Rejected with an input error. |
| VV10 functionals (`-V`, `-NL`), Laplacian-dependent meta-GGAs (e.g. `zlp`), `DFT_GRAC_SHIFT` ≠ 0 | Rejected with an input error. |

H₂ without `symmetry c1`:

```log
========================= REKS INPUT ERROR =========================
REKS requires C1 symmetry, but the molecule has 8 irreps. Add 'symmetry c1' to the molecule.
====================================================================
```

### Worked inputs {#worked-inputs}

Complete inputs, each running with this build. Run a `.dat` file with `psi4 file.dat`, a `.py` file with `python file.py`; a file with stages runs `python file.py <stage>`, the stages in the order listed in the file. Every other input belongs to its case.

| File | Calculation | Result |
| - | - | - |
| [`reks22_h2.dat`](https://reksstudio.github.io/inputs/reks22_h2.dat.txt) | SSR(2,2), H₂ (0.74 Å), BH\&HLYP/cc-pVDZ, default pools | S0 = −1.159238310496 Eh |
| [`reks44_h4_singlet_triplet.py`](https://reksstudio.github.io/inputs/reks44_h4_singlet_triplet.py.txt) | SSR(4,4), linear H₄ (1.6 Å), BH\&HLYP/6-31G, DF; default SA pool, all-α determinant for SCF stability; full SI cassette on 2S = 0 and 2S = 2 | S0 = −2.100482886123, T1 = −2.049090638114 Eh |
| [`reks44_h4_heisenberg.dat`](https://reksstudio.github.io/inputs/reks44_h4_heisenberg.dat.txt) | SSR(4,4), linear H₄ (1.6 Å), BH\&HLYP/6-31G, PK; default SA pool, all-α determinant for SCF stability; full SI cassettes on 2S = 0, 2, 4; [Spin-state gaps and Heisenberg J](https://reksstudio.github.io/learn/reference/properties/index.md#spin-state-energetics) | S0 = −2.100474673257, T1 = −2.049091247233, Q1 = −1.889644027865 Eh |
| [`reks22_h2_triplet_gradient.dat`](https://reksstudio.github.io/inputs/reks22_h2_triplet_gradient.dat.txt) | SSR(2,2), H₂ (1.6 Å), BH\&HLYP/6-31G(d); analytic gradient and relaxed properties of T1 ([`SI_REKS_GRAD`](#si_reks_grad)) | T1 = −0.959546621300 Eh; dE/dz(H1) = 0.041765470832 Eh/bohr |

## Active space and catalog {#catalog}

Configurations come from binary catalogs, one per `(N,M)` and unit set, in `<PSIDATADIR>/reks_catalog` (a non-empty environment variable `PSI4_REKS_CATALOG` replaces the directory). A catalog lists every spin-inequivalent configuration of every spin manifold, each with a **name** and a **type**. Installed, with the number of configurations of each manifold:

| `reks` | [`reks_geminal_widths`](https://reksstudio.github.io/learn/reference/options/index.md#row-reks_geminal_widths) | Catalog | Units | 2S | Cases |
| - | - | - | - | - | - |
| `[2, 2]` | — | `reks22` | `[2]`: electron geminal (FON n) | 0 (3 configurations), 2 (1 configuration) | [Small basis first: 6-31G(d) to cc-pVTZ](https://reksstudio.github.io/learn/branch/solvers/index.md#case-basis-c2h4) · [Twisted ethylene without a seed](https://reksstudio.github.io/learn/path/p3/index.md#case-c2h4-90-cold) · [Twisted ethylene, REKS(2,2)](https://reksstudio.github.io/learn/path/p2/index.md#case-c2h4-90) · [S1 gradient and S0/S1 coupling of twisted ethylene](https://reksstudio.github.io/learn/path/p6/index.md#case-c2h4-gradient) · [One electron pair: H₂, REKS(2,2)](https://reksstudio.github.io/learn/path/p1/index.md#case-h2-pair) · [Surface hopping of ethylene on S1](https://reksstudio.github.io/learn/branch/dynamics/index.md#case-md-c2h4) · [S0/S1 MECI of ethylene with DL-FIND](https://reksstudio.github.io/learn/branch/dynamics/index.md#case-meci-c2h4) · [S0 minimum of ethylene with DL-FIND](https://reksstudio.github.io/learn/branch/dynamics/index.md#case-opt-c2h4) · [Dipoles, charges, NTOs, relaxed properties and EKT](https://reksstudio.github.io/learn/branch/properties/index.md#case-props-c2h4) · [Gradient and relaxed properties of a triplet](https://reksstudio.github.io/learn/branch/properties/index.md#case-props-h2-triplet) |
| `[2, 3]` | `[3]` | `reks23_u3` | `[3]`: electron geminal (FON n) | 0 (7 configurations), 2 (3 configurations) | [TRAH for the whole SCF: states of BH](https://reksstudio.github.io/learn/branch/solvers/index.md#case-trah-bh) · [Lone pair over three orbitals: BH, REKS(2,3) 3](https://reksstudio.github.io/learn/branch/units/index.md#case-wide-bh-23) |
| `[2, 4]` | `[4]` | `reks24_u4` | `[4]`: electron geminal (FON n) | 0 (13 configurations), 2 (6 configurations) | [Geminal over four orbitals: REKS(2,4) 4](https://reksstudio.github.io/learn/branch/units/index.md#case-wide-24) |
| `[3, 3]` | — | `reks33` | `[2, d1]`: electron geminal (FON n), electron doublet | 1 (8 configurations), 3 (1 configuration) | [Implicit SOMO: REKS(3,3) 2 d1](https://reksstudio.github.io/learn/branch/units/index.md#case-odd-33) |
| `[3, 4]` | `["2", "d2"]` | `reks34_u2d2` | `[2, d2]`: electron geminal (FON n), electron doublet | 1 (14 configurations), 3 (3 configurations) | [Electron doublet over two orbitals: REKS(3,4) 2 d2](https://reksstudio.github.io/learn/branch/units/index.md#case-doublet-34) |
| `[3, 4]` | `[3]` | `reks34_u3` | `[3, d1]`: electron geminal (FON n), electron doublet | 1 (20 configurations), 3 (4 configurations) | [Wide geminal and SOMO: REKS(3,4) 3 d1](https://reksstudio.github.io/learn/branch/units/index.md#case-odd-34-u3) |
| `[4, 3]` | `["h3"]` | `reks43_uh3` | `[h3]`: hole geminal (FON h) | 0 (7 configurations), 2 (3 configurations) | [Hole geminal: REKS(4,3) h3](https://reksstudio.github.io/learn/branch/units/index.md#case-hole-43) |
| `[4, 4]` | — | `reks44` | `[2, 2]`: 2 × electron geminal (FON n) | 0 (18 configurations), 2 (11 configurations), 4 (1 configuration) | [Two pairs: butadiene, REKS(4,4)](https://reksstudio.github.io/learn/path/p4/index.md#case-butadiene-44) · [Singlets, triplets and the quintet of butadiene](https://reksstudio.github.io/learn/path/p5/index.md#case-butadiene-spin) · [Four SI cassettes from one SCF](https://reksstudio.github.io/learn/branch/solvers/index.md#case-cassettes-h4) · [Singlets, triplets and the quintet of linear H₄](https://reksstudio.github.io/learn/branch/spin/index.md#case-h4-heisenberg) · [Singlets and triplets of linear H₄](https://reksstudio.github.io/learn/branch/spin/index.md#case-h4-singlet-triplet) · [Scan with restarts: linear H₄](https://reksstudio.github.io/learn/branch/solvers/index.md#case-scan-h4) |
| `[4, 5]` | `[2, 3]` | `reks45_u23` | `[2, 3]`: electron geminal (FON n), electron geminal (FON n) | 0 (118 configurations), 2 (75 configurations), 4 (5 configurations) | [Bond and lone pair: BH, REKS(4,5) 2 3](https://reksstudio.github.io/learn/branch/units/index.md#case-wide-bh-45) |
| `[4, 6]` | `[3, 3]` | `reks46_u33` | `[3, 3]`: 2 × electron geminal (FON n) | 0 (190 configurations), 2 (141 configurations), 4 (15 configurations) | [Two wide geminals: BH, REKS(4,6) 3 3](https://reksstudio.github.io/learn/branch/units/index.md#case-wide-bh-46) |
| `[5, 4]` | `["2", "hd2"]` | `reks54_u2hd2` | `[2, hd2]`: electron geminal (FON n), hole doublet | 1 (14 configurations), 3 (3 configurations) | [Hole doublet: REKS(5,4) 2 hd2](https://reksstudio.github.io/learn/branch/units/index.md#case-hole-doublet-54) |
| `[5, 4]` | `["h3"]` | `reks54_uh3` | `[h3, d1]`: hole geminal (FON h), electron doublet | 1 (20 configurations), 3 (4 configurations) | [Hole geminal and SOMO: REKS(5,4) h3 d1](https://reksstudio.github.io/learn/branch/units/index.md#case-hole-54) |
| `[5, 5]` | — | `reks55` | `[2, 2, d1]`: 2 × electron geminal (FON n), electron doublet | 1 (77 configurations), 3 (28 configurations), 5 (1 configuration) | [Two pairs and a SOMO: REKS(5,5) 2 2 d1](https://reksstudio.github.io/learn/branch/units/index.md#case-odd-55) |
| `[6, 5]` | `["h3", "2"]` | `reks65_uh32` | `[h3, 2]`: hole geminal (FON h), electron geminal (FON n) | 0 (82 configurations), 2 (55 configurations), 4 (5 configurations) | [Hole geminal and pair: REKS(6,5) h3 2](https://reksstudio.github.io/learn/branch/units/index.md#case-hole-pair-65) |
| `[6, 6]` | — | `reks66` | `[2, 2, 2]`: 3 × electron geminal (FON n) | 0 (161 configurations), 2 (153 configurations), 4 (41 configurations), 6 (1 configuration) | [Spin ladder of hexatriene, 2S = 0 to 6](https://reksstudio.github.io/learn/branch/spin/index.md#case-hexatriene-ladder) · [A triplet configuration in the SA ensemble](https://reksstudio.github.io/learn/branch/spin/index.md#case-hexatriene-sa-t1) · [Surface hopping of hexatriene on T1](https://reksstudio.github.io/learn/branch/dynamics/index.md#case-md-hexatriene) · [T1 minimum of hexatriene](https://reksstudio.github.io/learn/branch/dynamics/index.md#case-opt-hexatriene) |
| `[7, 6]` | `["3", "hd3"]` | `reks76_u3hd3` | `[3, hd3]`: electron geminal (FON n), hole doublet | 1 (56 configurations), 3 (16 configurations) | [Wide geminal and hole doublet: REKS(7,6) 3 hd3](https://reksstudio.github.io/learn/branch/units/index.md#case-doublet-76) |
| `[8, 6]` | `["h3", "h3"]` | `reks86_uh3h3` | `[h3, h3]`: 2 × hole geminal (FON h) | 0 (190 configurations), 2 (141 configurations), 4 (15 configurations) | [Two hole geminals: REKS(8,6) h3 h3](https://reksstudio.github.io/learn/branch/units/index.md#case-holes-86) |

Odd N: the singly occupied orbital (SOMO) is implicit unless a doublet unit (`"dK"`, `"hdK"`) is listed. Any other `(N,M)` or unit set stops the run at catalog load ([Active space fails to load](https://reksstudio.github.io/learn/diagnose/index.md#diag-catalog)). Units: [Unit](https://reksstudio.github.io/learn/concepts/index.md#unit); slots and seeds of each unit kind: [Slots of each unit kind](https://reksstudio.github.io/learn/procedure/index.md#unit-slots).

### Active space {#active-space}

#### [`REKS`](https://reksstudio.github.io/learn/reference/options/index.md#row-reks) {#reks}

Active space `[N, M]`: N active electrons in M active orbitals; selects the catalog.

Type: `[N, M]`

Default: — (required)

```python
"reks": [4, 4],
```

Run: H₂ (1.6 Å), REKS(2,2), BH\&HLYP/6-31G, multiplicity 3.

```log
REKS requires the canonical symmetric-Ms reference: N=2 implies molecule multiplicity 1 (even N -> 1, odd N -> 2), but the molecule multiplicity is 3. Do not set the multiplicity to 2S+1; keep the canonical value and pick spin manifolds via SA_REKS_2SPIN / SI_REKS_2SPIN.
```

* N active electrons in M active orbitals, exactly two integers; a third element is an input error. Only installed catalogs run ([Active space and catalog](#catalog)).
* Molecule multiplicity: 1 for even N, 2 for odd N; any other value is the error above. The spin manifolds are chosen by [`SA_REKS_2SPIN`](#sa_reks_2spin) / [`SI_REKS_2SPIN`](#si_reks_2spin) or the ladder ([Spin manifolds (2S) and multi-manifold runs](#spin-manifolds)).

#### [`REKS_GEMINAL_WIDTHS`](https://reksstudio.github.io/learn/reference/options/index.md#row-reks_geminal_widths) {#reks_geminal_widths}

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
* Selects the catalog `reks{N}{M}_u{tokens}`, the tokens concatenated in unit order, the plain `reks{N}{M}` when every token is 2; the installed ones and their tokens: [Active space and catalog](#catalog).

### Naming convention {#naming-convention}

Every configuration has a name of the form `<TYPE><index>`, e.g. `PPS1`, `OSS2`, `T_PPS3`; a member of a spin-polarized set is named `<TYPE>_<k>`, e.g. `DOSS_SPS_0`, `TT_SPS_0`. A type is a `_`-separated sequence of words; a multiplier letter in front of `OSS` or `DES` counts the geminals (none = 1, `D` = 2, `T` = 3; the generator naming continues with `Q`, `Qu`, `S`, `Sp`, `O`, `N` for 4–9, which no installed catalog uses).

| Prefix family | Meaning |
| - | - |
| `PPS` | The **perfectly-paired singlet**: every geminal Φ<sub>0</sub>. Every `(N,M)` catalog has at least one `PPS` configuration. |
| `OSS`, `DOSS`, `TOSS` | 1, 2, 3 open-shell-singlet (Φ<sub>1</sub>) geminals. Installed: `OSS` in every catalog, `DOSS` in `(6,6)`, as `DOSS_SPS` in `(4,4)` and `(4,5)`, `TOSS` only as `TOSS_SPS` in `(6,6)`. |
| `DES`, `DDES`, `TDES` | 1, 2, 3 doubly-excited (Φ<sub>2</sub>) geminals. `TDES` exists in `(6,6)` only. |
| Compound types (`OSS_DES`, `DOSS_DES`, `OSS_DDES`) | Both kinds of geminals in one configuration. |
| A first word of k letters `T` (`T_PPS3`, `TT_SPS_0`, `TTT_SPS_0`) | k triplet-coupled geminals (a `T` glued to `OSS` or `DES`, as in `TOSS`, is the multiplier 3); manifold 2S = 2k (coupling: [Spin manifold and run sector](https://reksstudio.github.io/learn/concepts/index.md#run-sector)). In `(2,2)` the single 2S = 2 configuration is named `T1`. |
| `SPS` (as in `DOSS_SPS_0`) | A **spin-polarized** configuration; member `k` of the set is orthogonalized to members 0 … k − 1. |
| Lettered types (`OSSa`, `DESb`, `Ta`, `DESa_OSSb`, `TaTb_SPS`, `PPS_Da`, `T_PPSd`) | Unit catalogs ([`REKS_GEMINAL_WIDTHS`](https://reksstudio.github.io/learn/reference/options/index.md#row-reks_geminal_widths)): wide, hole and doublet units. |

Bulk tokens ([Bulk tokens and pattern syntax](#bulk-tokens)) select configurations without listing names; an unknown token lists every valid type and name of the block's manifold ([Unknown configuration name or type](https://reksstudio.github.io/learn/diagnose/index.md#diag-unknown-token)).

### FON sets {#fon-sets}

The FON set of a configuration (column `FON set` of the SI pool tables) follows its generation, the number of open pairs ([FON set and generation](https://reksstudio.github.io/learn/concepts/index.md#fon-generation)). Option: the lower bound of the free FON of that generation ([`REKS_<L>_FON`](https://reksstudio.github.io/learn/reference/run-control/index.md#reks_l_fon)).

| Set | Generation (open pairs) | Configuration types | Option |
| - | - | - | - |
| `n` | 0 | `PPS`, `DES`, `DDES`, `TDES` | [`REKS_N_FON`](https://reksstudio.github.io/learn/reference/options/index.md#row-reks_l_fon) |
| `m` | 1 | `OSS`, `OSS_DES`, `OSS_DDES`; `T_PPS`, `T_DES`, `T_DDES` | [`REKS_M_FON`](https://reksstudio.github.io/learn/reference/options/index.md#row-reks_l_fon) |
| `u` | 2 | `DOSS`, `DOSS_DES`; `T_OSS`, `T_OSS_DES`, `TT_PPS`, `TT_DES` | [`REKS_U_FON`](https://reksstudio.github.io/learn/reference/options/index.md#row-reks_l_fon) |
| `v`, `w`, `x`, `y`, `z` | 3–7 | — | [`REKS_V_FON`](https://reksstudio.github.io/learn/reference/options/index.md#row-reks_l_fon), [`REKS_W_FON`](https://reksstudio.github.io/learn/reference/options/index.md#row-reks_l_fon), [`REKS_X_FON`](https://reksstudio.github.io/learn/reference/options/index.md#row-reks_l_fon), [`REKS_Y_FON`](https://reksstudio.github.io/learn/reference/options/index.md#row-reks_l_fon), [`REKS_Z_FON`](https://reksstudio.github.io/learn/reference/options/index.md#row-reks_l_fon) |

The label is the set letter, the pairing-scheme digit (`n0`, `n1`), and `t<s>` for run sector s > 0 (`m0t1`, [Spin manifold and run sector](https://reksstudio.github.io/learn/concepts/index.md#run-sector)); `FON optimization after the SCF` prints the scheme in its own column (`n`, `mt1`). Spin-polarized configurations, whose pairs are all open, have no FON and show `-`.

### Pairing schemes {#pairing-schemes}

No option selects a pairing scheme ([Pairing scheme](https://reksstudio.github.io/learn/concepts/index.md#pairing-scheme)); the configurations of the SA pool do (`single-scheme:N`, `mixed-scheme:N`, [Bulk tokens and pattern syntax](#bulk-tokens)). The setup report prints the schemes:

```log
=> Pairing schemes (geminal orbitals) <=

   Scheme 0: (a,d) & (b,c)
   Scheme 1: (a,c) & (b,d)

[...]
   FON = fractional occupation number n_p of an active orbital (0..2); the FONs of a geminal sum to 2.
```

## Bulk tokens and pattern syntax {#bulk-tokens}

Accepted wherever a configuration name is (SA blocks, SI cassettes, `exclude:`):

| Token | Expands to |
| - | - |
| `"full"` | The entire configuration block of that manifold. |
| A configuration **type** name, e.g. `"PPS"`, `"OSS"`, `"DOSS"` | Every configuration of that type in the manifold, lettered types (`OSSa`, `Ta`) included. |
| `"single-scheme:N"` (PSithon: `"single-scheme-N"` or `"single-scheme_N"`) | Every configuration of pairing scheme `N` (0 if `:N` is omitted), plus the spin-polarized base configurations, which all schemes share. |
| `"mixed-scheme:N"` | The SSR state set on scheme `N`: that scheme's configurations with at most one excited geminal (Φ<sub>1</sub> or Φ<sub>2</sub>) *plus every open-shell-singlet configuration of the manifold* plus the spin-polarized base configurations. For `REKS(4,4)`, `mixed-scheme:0` = `PPS1, OSS1, OSS2, OSS3, OSS4, DES1, DES2, DOSS_SPS_0, DOSS_SPS_1`. |
| `"sps"` | The spin-polarized base configurations. |
| A pattern with `*` or `?` | Every configuration name it glob-matches. |
| `"exclude:X"` (also `exclude-X` / `exclude_X`) | **SI cassettes only.** Removes what `X` (any form above) selects from the cassette, wherever it stands in the list, e.g. `["full", "exclude:sps"]` = the whole manifold minus the spin-polarized base. |

A scheme token may union several indices: `"single-scheme-1-2-3"`, or `"single-scheme:1,2,3"` in the Python API; a literal `:` cannot be used inside a PSithon `.dat` array element, since the PSithon array parser splits on `:`. The separators `:`, `-`, `_` and `,` are equivalent; a scheme reached twice is an input error. Tokens are case-insensitive. Besides indices, a scheme token accepts scheme classes, defined for pairs relative to scheme 0 by the permutation of antibonding partners: `T` (one transposition), `D<k>` (`k` disjoint transpositions, `k ≥ 2`), `C<l>[X<l>…]` (cycles of the listed lengths, each `≥ 2`), e.g. `"single-scheme-T"`.

| | SA block | SI cassette |
| - | - | - |
| Kind | weighted list | set |
| Same configuration twice (directly or by overlapping tokens) | input error; combine overlapping selections into one multi-index token | kept once, at its first position |
| `exclude:` | not accepted | subtracts |

## SA pool and SI cassettes {#selecting}

### SA pool {#sa-pool}

#### [`SA_REKS_CONFIGS`](https://reksstudio.github.io/learn/reference/options/index.md#row-sa_reks_configs) {#sa_reks_configs}

SA-REKS configuration pool: one block (flat list) or one block per spin manifold (nested list) of names, indices or bulk tokens.

Type: array

Default: PPS + OSS pool of scheme 0 on the lowest manifold, 2S = N mod 2

Alias: [`REKS_SA_CONFIGS`](https://reksstudio.github.io/learn/reference/options/index.md#row-sa_reks_configs)

```python
"sa_reks_configs": ["PPS1", "OSS1", "OSS2"],
```

Run: C₂H₄ at R(CC) 2.32 Å, REKS(4,4), BH\&HLYP/6-31G(d), cassettes 2S = 0, 2.

```log
=> SA pool <=

    Cat  Config       SA weight  Definition
   ---------------------------------------------------------------
      0  PPS1          0.333333  A[(core) Phi_0(a,d) * Phi_0(b,c)]
      1  OSS1          0.333333  A[(core) Phi_1(a,d) * Phi_0(b,c)]
      2  OSS2          0.333333  A[(core) Phi_0(a,d) * Phi_1(b,c)]
   ---------------------------------------------------------------
                 sum = 1.000000

   E[SA-REKS] = 0.333333 * E(PPS1)
              + 0.333333 * E(OSS1)
              + 0.333333 * E(OSS2)

   Cat = catalog index of the configuration. A[...] = antisymmetrized product
   of the geminals (pairing schemes above) and the doubly occupied core orbitals (core).
```

* Flat list = one block on one spin manifold, e.g. `["PPS1", "OSS1", "OSS2"]` or by local index `[0, 1, 2]`. Elements: configuration names, local integer indices, or bulk tokens ([Bulk tokens and pattern syntax](#bulk-tokens)).
* A configuration may not repeat within a block: an SA block is a weighted list ([Bulk tokens and pattern syntax](#bulk-tokens)).
* Nested list = one block per spin manifold, e.g. `[["PPS1", "OSS1"], ["T_PPS1"]]`, mapped to manifolds by ladder position or by [`SA_REKS_2SPIN`](https://reksstudio.github.io/learn/reference/options/index.md#row-sa_reks_2spin) ([Spin manifolds (2S) and multi-manifold runs](#spin-manifolds)).
* Absent: one block on the lowest manifold, 2S = N mod 2: the configurations of pairing scheme 0 with no doubly excited unit, at most one open-shell-singlet unit, no triplet word and the doublet unit at its aufbau placement, in catalog order. Defaults: `REKS(2,2)` `[PPS1, OSS1]`, `REKS(4,4)` `[PPS1, OSS1, OSS2]`, `REKS(6,6)` `[PPS1, OSS1, OSS2, OSS3]`.
* Check `sum = 1.000000` and that every [`SA_REKS_EXTRA`](https://reksstudio.github.io/learn/reference/options/index.md#row-sa_reks_extra) determinant of the input is listed (`Extra1`, …).

See: [`SA_REKS_WEIGHTS`](#sa_reks_weights), [`SA_REKS_EXTRA`](#sa_reks_extra), [SA-REKS ensemble and weights](https://reksstudio.github.io/learn/concepts/index.md#sa-ensemble)

#### [`SA_REKS_WEIGHTS`](https://reksstudio.github.io/learn/reference/options/index.md#row-sa_reks_weights) {#sa_reks_weights}

Weights of the SA pool entries, configurations first, then the [`sa_reks_extra`](https://reksstudio.github.io/learn/reference/options/index.md#row-sa_reks_extra) determinants; non-negative, summing to 1.

Type: array

Default: uniform `1/n`

Alias: [`REKS_SA_WEIGHTS`](https://reksstudio.github.io/learn/reference/options/index.md#row-sa_reks_weights)

```python
"sa_reks_weights": [0.5, 0.25, 0.25],
```

* One non-negative weight per SA pool entry, in the order typed (concatenated block order, then the [`SA_REKS_EXTRA`](https://reksstudio.github.io/learn/reference/options/index.md#row-sa_reks_extra) determinants), summing to 1.0 (tolerance 10<sup>-8</sup>). Omitted: uniform 1/n.
* A configuration or extra determinant with weight 0 leaves the SA ensemble; a zero-weight configuration that is also an SI member has its SI-only geminals' FONs optimized after the SCF.
* If [`SA_REKS_2SPIN`](https://reksstudio.github.io/learn/reference/options/index.md#row-sa_reks_2spin) lists manifolds out of ascending-2S order, configurations and weights are re-sorted jointly into ascending 2S; a weight still matches the configuration in the order typed.

#### [`SA_REKS_EXTRA`](https://reksstudio.github.io/learn/reference/options/index.md#row-sa_reks_extra) {#sa_reks_extra}

Extra Slater determinants of the SA ensemble, as occupation vectors; each has its own weight, carries no FON and enters no SI cassette.

Type: array of arrays

Default: none

Alias: [`REKS_SA_EXTRA`](https://reksstudio.github.io/learn/reference/options/index.md#row-sa_reks_extra)

```python
"sa_reks_extra": [[1, 1, 1, 1, 0, 0, 0, 0]],
```

Run: linear H₄ (1.2 Å), REKS(4,4), BH\&HLYP/6-31G, SI on 2S = 2.

```log
=> SA pool <=

    Cat  Config       SA weight  Definition
   --------------------------------------------------------
      0  PPS1          0.250000  A[Phi_0(a,d) * Phi_0(b,c)]
      1  OSS1          0.250000  A[Phi_1(a,d) * Phi_0(b,c)]
      2  OSS2          0.250000  A[Phi_0(a,d) * Phi_1(b,c)]
         Extra1        0.250000  A[|a,b,c,d|]
   --------------------------------------------------------
                 sum = 1.000000
```

* Each element is a Slater determinant given as an occupation vector `[alpha(M) | beta(M)]` of length 2M, 0/1 entries summing to N; the call above is the all-α determinant of REKS(4,4).
* Each determinant joins the SA ensemble with a fixed weight from the tail of [`SA_REKS_WEIGHTS`](https://reksstudio.github.io/learn/reference/options/index.md#row-sa_reks_weights), adds its Kohn–Sham energy to E<sub>SA</sub>, carries no FON, and changes the SA orbitals and with them every SI state. It never enters an SI cassette.
* Recommended: the all-α determinant in every SA-REKS ensemble, for SCF stability and the shape of the orbitals. The code does not add it by default.

### SI cassettes {#si-cassettes}

#### [`SI_REKS_CONFIGS`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_configs) {#si_reks_configs}

SI-SA-REKS cassettes: the configuration sets whose secular equations give the states, in groups per spin manifold.

Type: array

Default: one full-block cassette, lowest manifold

Alias: [`REKS_SI_CONFIGS`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_configs)

```python
"si_reks_configs": [[["PPS1", "PPS2", "OSS1", "OSS2"], ["single-scheme"], ["mixed-scheme"], ["full"]]],
```

Run: C₂H₄ at R(CC) 2.32 Å, REKS(4,4), BH\&HLYP/6-31G(d), cassettes 2S = 0, 2.

```log
=> SI pools <=

   Cassette  Spin          Configs  Method              Wfn storage
   ----------------------------------------------------------------
          0  2S=0 (singlet)     18  18SI-3SA-REKS(4,4)  none
          1  2S=2 (triplet)     11  11SI-3SA-REKS(4,4)  none
   ----------------------------------------------------------------
   kSI-lSA-REKS = SSR over k configurations in the orbitals of the l-configuration SA ensemble;
   Wfn storage = states stored on the wavefunction, written to *.npy by wfn.to_file (SI_REKS_STORE_STATES).
[...]
   Cassette 0, 2S=0 (singlet)
    Cat  Config       FON set  Definition
   -------------------------------------------------------------------------------------------------------
      0  PPS1         n0       A[(core) Phi_0(a,d) * Phi_0(b,c)]
      1  OSS1         m0       A[(core) Phi_1(a,d) * Phi_0(b,c)]
      2  OSS2         m0       A[(core) Phi_0(a,d) * Phi_1(b,c)]
```

Run: C₂H₄ at R(CC) 2.32 Å, REKS(4,4), BH\&HLYP/6-31G(d), cassettes 2S = 0, 2.

```log
==> State interaction: setup over the union of the SI cassettes <==

    Microstates                   37: 18 in the SA ensemble, 19 SI-only
    Spin-string densities         14: 12 from the SCF, 2 built
    Fock matrices, energies       19 SI-only microstates
    FON optimization              3 FON sets, table below
    Active-MO ERIs (pq|rs)        6 active MO pairs pq
    Spin-string densities = densities of the microstate occupation bitmasks.
[...]
==> State interaction: cassette 0, 18SI-3SA-REKS(4,4), 2S=0 (singlet) <==
```

Run: linear H₄ (0.9 Å), REKS(4,4), HF/STO-3G, with the call above.

```log
=> Alternative configuration lists <=

   State           E [Eh]  E-E(S0) [eV]  E-E(S0) [kcal/mol]  E-E(own lowest) [eV]  Closest in cassette 0  dE_exc - closest [eV]   Main configurations (w_j in %)
   -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   S0[1]  -2.140622335856        -0.418               -9.63                 0.000  S0 (99 %)                              0.000   PPS1(98.9)
   S1[1]  -1.578546559161        14.877              343.08                15.295  S1 (100 %)                             0.326   OSS2(99.5) 2A(b)->3A(c)
   S2[1]  -1.311136456214        22.154              510.88                22.571  -                                          -   DES2(94.3) 2A(b),2A(b)->3A(c),3A(c); DOSS_SPS_1(5.0) 1A(a)->3A(c), 2A(b)->4A(d)
   S3[1]  -0.759700282426        37.159              856.91                37.577  S2 (99 %)                              0.269   OSS1(99.0) 1A(a)->4A(d)
   S4[1]  -0.316996802406        49.206             1134.71                49.623  -                                          -   DOSS_SPS_0(68.2) 1A(a)->4A(d), 2A(b)->3A(c); DOSS_SPS_1(27.9) 1A(a)->3A(c), 2A(b)->4A(d); DES1(2.1) 1A(a),1A(a)->4A(d),4A(d)
   S0[2]  -2.143592670888        -0.499              -11.50                 0.000  S0 (98 %)                              0.000   PPS1(98.5)
   S1[2]  -1.575184105930        14.969              345.19                15.467  S1 (100 %)                             0.499   OSS2(99.7) 2A(b)->3A(c)
   S2[2]  -1.475834553802        17.672              407.53                18.171  -                                          -   OSS3(53.3) 1A(a)->3A(c); DES2(39.0) 2A(b),2A(b)->3A(c),3A(c); OSS4(5.3) 2A(b)->4A(d)
   S3[2]  -1.222179421667        24.574              566.70                25.073  -                                          -   DES2(50.3) 2A(b),2A(b)->3A(c),3A(c); OSS3(43.3) 1A(a)->3A(c); DOSS_SPS_1(3.7) 1A(a)->3A(c), 2A(b)->4A(d)
   S4[2]  -0.949704282395        31.989              737.68                32.487  -                                          -   OSS4(89.2) 2A(b)->4A(d); DES2(4.9) 2A(b),2A(b)->3A(c),3A(c); DOSS_SPS_0(2.7) 1A(a)->4A(d), 2A(b)->3A(c)
   S0[3]  -2.157804217606        -0.885              -20.41                 0.000  S0 (97 %)                              0.000   PPS1(49.1); PPS2(48.3); DOSS_SPS_1(1.1) 1A(a)->3A(c), 2A(b)->4A(d)
   S1[3]  -1.578546559161        14.877              343.08                15.762  S1 (100 %)                             0.794   OSS2(99.5) 2A(b)->3A(c)
   S2[3]  -1.556892128760        15.466              356.66                16.352  -                                          -   OSS3(46.2) 1A(a)->3A(c); DES2(35.6) 2A(b),2A(b)->3A(c),3A(c); DES3(7.7) 1A(a),1A(a)->3A(c),3A(c)
   S3[3]  -1.243261461583        24.001              553.47                24.886  -                                          -   OSS3(45.4) 1A(a)->3A(c); DES2(44.7) 2A(b),2A(b)->3A(c),3A(c); OSS4(4.7) 2A(b)->4A(d)
   S4[3]  -0.994944258185        30.758              709.29                31.643  -                                          -   OSS4(77.0) 2A(b)->4A(d); DES2(10.4) 2A(b),2A(b)->3A(c),3A(c); DOSS_SPS_0(4.9) 1A(a)->4A(d), 2A(b)->3A(c)
   -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   Closest = state of the first list of largest weight overlap sum_j min(w_j(A), w_j(B)) >= 50 %
   (configurations of |S| >= 0.95 merged); dE_exc = E-E(own lowest).
```

* 3-level `[[[...], ...], [[...], ...], ...]`: one group of cassettes per outer entry, each group mapped to a spin manifold like the SA blocks (ladder position or [`SI_REKS_2SPIN`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_2spin)). The call above is one group of four cassettes, each with its own states (third fragment; energies: [Explicit SA pool and SI cassettes](#explicit-input)). A cassette is a set of names, indices or bulk tokens ([Bulk tokens and pattern syntax](#bulk-tokens)); a repeated selection is kept at its first position. First two fragments: `[[["full"]], [["full"]]]` with [`SI_REKS_2SPIN`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_2spin) `[0, 2]`.
* 2-level `[[...], [...], ...]`: the cassettes of a single group on the run's lowest manifold (or the one [`SI_REKS_2SPIN`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_2spin) names); legal only when [`SI_REKS_2SPIN`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_2spin) is absent or has length 1. The 3-level form without [`SI_REKS_2SPIN`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_2spin) maps group 0 to ladder position 0, the catalog's first spin sector; the two forms coincide when that is the run's lowest manifold, as in the call above.
* Absent: one cassette spanning the whole configuration block of the run's lowest (or [`SI_REKS_2SPIN`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_2spin)-chosen) manifold. `[[]]` runs no SI step and sets no `SSR` arrays.
* A flat list of names (`["PPS1", "OSS1"]`) is an input error: [`SI_REKS_CONFIGS: scalar elements are not a cassette form; use a list of cassettes [[...], ...] (2-level) or cassette groups [[[...]], ...] (3-level).`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_configs)
* `Wfn storage` `none` in `SI pools` means no per-state `SSR … K=e` analysis arrays and no natural-orbital, NTO or NDO Molden files for that cassette ([`SI_REKS_STORE_STATES`](#si_reks_store_states)).
* Each cassette opens with a `State interaction: cassette e` header; its 2S tag appears when the run has more than one spin manifold.
* Two or more cassettes of one 2S add `Alternative configuration lists` after `State summary` (third fragment): the states of the later cassettes with energies relative to S0 and to their own lowest state, the closest state of the first list by weight overlap, and the main configurations.

See: [SI cassette](https://reksstudio.github.io/learn/concepts/index.md#si-cassette), [`SI_REKS_2SPIN`](#si_reks_2spin), [SSR state energies](https://reksstudio.github.io/learn/reference/properties/index.md#ssr-energies)

#### [`SI_REKS_PRINT_STATES`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_print_states) {#si_reks_print_states}

States per cassette whose per-state and pair tables are printed; 0 = none, -1 = all.

Type: int

Default: `5`

```python
"si_reks_print_states": -1,
```

* States per cassette listed in the per-state and pair tables; `0` = none, `-1` = all, on a Davidson cassette the 50 lowest ([SI eigensolver](https://reksstudio.github.io/learn/concepts/index.md#si-solver)).
* Properties are computed for max(print, store) states ([`SI_REKS_STORE_STATES`](#si_reks_store_states)). Counts are clamped to the number of physical states.

#### [`SI_REKS_STORE_STATES`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_store_states) {#si_reks_store_states}

States per cassette whose properties are stored on the wavefunction (arrays, Molden and cube files); 0 = none, -1 = all.

Type: array of int

Default: all; the first 10 if `M ≥ 6` and > 10 configurations

Alias: [`REKS_SI_STORE_STATES`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_store_states)

```python
"si_reks_store_states": [-1, 0],
```

* One integer per cassette, entry t = the t-th cassette in the spin order of [`SI_REKS_2SPIN`](#si_reks_2spin) ([Cassette order](#cassette-order)): states whose properties are stored on the wavefunction (array variables, Molden and cube files); `0` = none, `-1` = all, on a Davidson cassette the 50 lowest ([SI eigensolver](https://reksstudio.github.io/learn/concepts/index.md#si-solver)).
* Roots requested in [`SI_REKS_GRAD`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_grad), [`SI_REKS_NAC`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_nac), [`SI_REKS_PROPERTY_FOR`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_property_for) keep their eigenvectors regardless.

#### [`SI_REKS_OVERLAP_CUTOFF`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_overlap_cutoff) {#si_reks_overlap_cutoff}

Overlap eigenvalues <code>s ≤ cutoff · s<sub>max</sub></code> of the SI basis are treated as null space and dropped.

Type: double

Default: `1e-10`

```python
"si_reks_overlap_cutoff": 1e-8,
```

* Eigenvectors of the SI overlap with s ≤ cutoff · s<sub>max</sub> form the null space and are removed before diagonalization ([SI Hamiltonian and overlap](https://reksstudio.github.io/learn/reference/properties/index.md#si-matrices)).
* Ghost roots (configurations with s just above the cutoff): [Adiabatic (SSR) states](https://reksstudio.github.io/learn/concepts/index.md#ssr-states).
* The printed σ = cutoff · s<sub>max</sub>: `Regularization … sigma = σ: the N configurations span r dimensions (K overlap null modes removed)`. A larger cutoff removes more modes; the number of roots is capped by r.
* Large active spaces, spurious lowest root: signs and the value 1e-4 in [Ghost states and a collapsed SI spectrum](https://reksstudio.github.io/learn/diagnose/index.md#diag-ghost-states).

#### [`SI_REKS_SOLVER`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_solver) {#si_reks_solver}

Eigensolver of each SI cassette: LAPACK on every root, or Davidson on the lowest roots.

Type: `AUTO`|`DIRECT`|`DAVIDSON`

Default: `AUTO`

```python
"si_reks_solver": "DAVIDSON",
```

Run: all-trans-hexatriene, REKS(6,6), BH\&HLYP/6-31G(d), Davidson, 3 stored states.

```log
==> SI Davidson solver (cassette 0) <==

    Roots                 7 (3 requested + 4 margin) of 115
    Convergence           1.000e-12

    Iter      Mean |R|       Max |R|   Remain   Applications   Time [s]
    -------------------------------------------------------------------
       1     7.779e-16     1.021e-15        0              8       0.00
    -------------------------------------------------------------------
    7 roots converged in 1 iterations, 22 operator applications.
[...]
    Computed states       7 of 115 (lowest roots, Davidson)
```

* `DIRECT`: every root, LAPACK on the dense Hamiltonian of the cassette. `DAVIDSON`: the lowest roots, block Davidson on the sparse Hamiltonian; how many: [SI eigensolver](https://reksstudio.github.io/learn/concepts/index.md#si-solver). `AUTO`: per cassette, `DIRECT` up to 4000 configurations, `DAVIDSON` above; the catalogs shipped with Psi4 stay below.
* On a Davidson cassette `SSR ENERGIES K=e` holds the computed roots, and a count `-1` in [`SI_REKS_PRINT_STATES`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_print_states), [`SI_REKS_STORE_STATES`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_store_states), [`SI_REKS_GRAD`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_grad) or [`SI_REKS_PROPERTY_FOR`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_property_for) stands for the 50 lowest roots.

#### [`SI_REKS_DAVIDSON_R_CONVERGENCE`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_davidson_r_convergence) {#si_reks_davidson_r_convergence}

Residual norm in E_h each Davidson root of the SI problem converges to.

Type: double

Default: `1e-12`

```python
"si_reks_davidson_r_convergence": 1e-10,
```

* Residual norm ‖(A − θ) x‖<sub>2</sub> (E<sub>h</sub>) every Davidson root converges to, A the SI Hamiltonian in the orthonormalized configuration basis ([SI eigensolver](https://reksstudio.github.io/learn/concepts/index.md#si-solver)). A root whose residual stalls at the rounding level of its product is accepted there, and that level is printed.
* A value ≤ 0 stops the run: [`SI_REKS_DAVIDSON_R_CONVERGENCE is …; it must be positive (residual norm in Eh, default 1e-12).`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_davidson_r_convergence)

## Spin manifolds (2S) and multi-manifold runs {#spin-manifolds}

All manifolds of a run ([Spin manifold and run sector](https://reksstudio.github.io/learn/concepts/index.md#run-sector)) share one SCF. Without [`SA_REKS_CONFIGS`](https://reksstudio.github.io/learn/reference/options/index.md#row-sa_reks_configs) the SA pool is the default pool ([`SA_REKS_CONFIGS`](#sa_reks_configs)).

| Mode | When | Block or group i | Empty block `[]` |
| - | - | - | - |
| Ladder | [`SA_REKS_2SPIN`](https://reksstudio.github.io/learn/reference/options/index.md#row-sa_reks_2spin) / [`SI_REKS_2SPIN`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_2spin) absent | the i-th manifold of the catalog, ascending 2S (0-based, order typed) | skips that rung |
| Explicit | [`SA_REKS_2SPIN`](https://reksstudio.github.io/learn/reference/options/index.md#row-sa_reks_2spin) / [`SI_REKS_2SPIN`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_2spin) given | the manifold named by entry i | declares the manifold: it participates with no configurations |

### Spin-manifold options {#spin-options}

#### [`SA_REKS_2SPIN`](https://reksstudio.github.io/learn/reference/options/index.md#row-sa_reks_2spin) {#sa_reks_2spin}

Spin manifold 2S of each SA block, one integer per block.

Type: array

Default: ladder, lowest manifold

Alias: [`REKS_SA_2SPIN`](https://reksstudio.github.io/learn/reference/options/index.md#row-sa_reks_2spin)

```python
"sa_reks_2spin": [0, 2],
```

* One integer 2S per SA block (explicit mode, [Spin manifolds (2S) and multi-manifold runs](#spin-manifolds)). Entries are pairwise distinct, in any order (re-sorted ascending).
* Without [`SA_REKS_CONFIGS`](https://reksstudio.github.io/learn/reference/options/index.md#row-sa_reks_configs) only `[N mod 2]` is accepted (`[0]` for even N, `[1]` for odd N); any other value is an input error. States of higher 2S on the default ensemble: [`SI_REKS_2SPIN`](#si_reks_2spin).

#### [`SI_REKS_2SPIN`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_2spin) {#si_reks_2spin}

2S of each SI group; more than one entry requires the 3-level [`si_reks_configs`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_configs) form.

Type: array

Default: ladder, lowest manifold

Alias: [`REKS_SI_2SPIN`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_2spin)

```python
"si_reks_2spin": [0, 2],
```

* One integer 2S per SI group (explicit mode, [Spin manifolds (2S) and multi-manifold runs](#spin-manifolds)), pairwise distinct, in any order; more than one entry requires the 3-level [`si_reks_configs`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_configs) form. The 2-level form is one group of cassettes on one manifold. Two entries with a 2-level [`si_reks_configs`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_configs) stop the run: `REKS input error: SI_REKS_2SPIN has 2 labels (one per SI group), which requires the 3-level SI_REKS_CONFIGS form [[[...]], ...] (one group of cassettes per label); got a 2-level list of cassettes.`
* `[x]` alone: the default SA ensemble on 2S = 0 and the default SI cassette on 2S = x ([Input patterns](#input-patterns)).
* Sets the order of the SI cassettes: the spin groups follow this list, the cassettes of a group the order of its [`SI_REKS_CONFIGS`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_configs) block. The per-cassette lists [`SI_REKS_GRAD`](#si_reks_grad), [`SI_REKS_NAC`](#si_reks_nac), [`SI_REKS_PROPERTY_FOR`](#si_reks_property_for) and [`SI_REKS_STORE_STATES`](#si_reks_store_states) take their entries in this order: with `[2, 0]` entry 0 is the triplet cassette. The printed index K and the `K=e`, `CASSETTE e` names run in ascending 2S (the triplet is K = 1). Without the option (ladder) both orders are ascending 2S ([Cassette order](#cassette-order)).

### Input patterns {#input-patterns}

Recommended SA ensemble for states on several spin manifolds: the default 2S = 0 pool (PPS and the OSS configurations of pairing scheme 0); the T_PPS configurations that lead T1/T2 may be added, nothing of higher spin. The all-α determinant is added for SCF stability ([`SA_REKS_EXTRA`](#sa_reks_extra)).

Linear H₄ (R = 1.6 Å), BH\&HLYP/6-31G. In all three the SA pool is the default 2S = 0 pool of REKS(4,4), `PPS1`, `OSS1`, `OSS2`; one SCF, E<sub>SA</sub> = −1.8826103083 E<sub>h</sub> in every case. The input adds the all-α determinant with an equal weight ([`sa_reks_extra`](https://reksstudio.github.io/learn/reference/options/index.md#row-sa_reks_extra)).

**Triplet states only**

```python
"reks": [4, 4],
"sa_reks_extra": [[1, 1, 1, 1, 0, 0, 0, 0]],   # all-alpha determinant in SA
"si_reks_2spin": [2],
```

[`SI_REKS_CONFIGS`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_configs) is absent, so the single SI cassette is the whole 2S = 2 block: 11 configurations (`T_PPS1`–`4`, `T_DES1`–`4`, `T_OSS_SPS_0`–`2`), 11 triplet roots, printed as cassette 0. No singlet SI states are computed.

**Singlet and triplet states**

```python
"reks": [4, 4],
"sa_reks_extra": [[1, 1, 1, 1, 0, 0, 0, 0]],
"si_reks_configs": [[["full"]], [["full"]]],   # 2S = 0, 2S = 2
```

Two SI groups without [`SI_REKS_2SPIN`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_2spin) take the ladder: group 0 → 2S = 0, group 1 → 2S = 2. Cassette 0: 18 singlet configurations, 16 roots (2 overlap null modes); cassette 1: the 11 triplet configurations, the same 11 roots as above. Adding [`"si_reks_2spin": [0, 2]`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_2spin) gives the identical run; [`SI_REKS_2SPIN`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_2spin) is needed only to skip a manifold or to change the cassette order ([Cassette order](#cassette-order)).

**Singlet, triplet and quintet states**

```python
"reks": [4, 4],
"sa_reks_extra": [[1, 1, 1, 1, 0, 0, 0, 0]],
"si_reks_configs": [[["full"]], [["full"]], [["full"]]],   # 2S = 0, 2, 4
```

The third group of the ladder is 2S = 4: one configuration, `TT_SPS_0`, one quintet root. The singlet and triplet cassettes are those of the previous pattern, with the same roots.

### State labels {#state-labels}

| Even N, 2S | 0 | 2 | 4 | 6 | 8 | 10 | 12 |
| - | - | - | - | - | - | - | - |
| Root 0, 1, … | `S0`, `S1`, … | `T1`, `T2`, … | `Q1` | `Sp1` | `N1` | `U1` | `Tr1` |

| Odd N, 2S | 1 | 3 | 5 | 7 | 9 | 11 |
| - | - | - | - | - | - | - |
| Root 0, 1, … | `D0`, `D1`, … | `Qa1`, `Qa2`, … | `Sx1` | `Oc1` | `De1` | `Du1` |

The lowest manifold counts from 0, every other from 1. [`SI_REKS_PROPERTY_FOR`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_property_for) accepts these labels, [`SI_REKS_GRAD`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_grad) takes 0-based root indices; Molden and cube file names use the labels.

### Output {#output}

With SSR states on two or more manifolds the report prints [Spin-state gaps and Heisenberg J](https://reksstudio.github.io/learn/reference/properties/index.md#spin-state-energetics). Per-sector arrays carry a sector prefix for s > 0 ([Variable names](https://reksstudio.github.io/learn/reference/output/index.md#variable-names)).

### Cassette order {#cassette-order}

[`SI_REKS_2SPIN`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_2spin) sets the order of the SI cassettes: SI groups as listed, the cassettes of a group in the order of its [`SI_REKS_CONFIGS`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_configs) block. The per-cassette lists [`SI_REKS_GRAD`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_grad), [`SI_REKS_NAC`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_nac), [`SI_REKS_PROPERTY_FOR`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_property_for) and [`SI_REKS_STORE_STATES`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_store_states) take one entry per cassette in this order. The cassette blocks are printed in this order, and state energies are given relative to the lowest state of its first cassette. The cassette index K in headers and in the `K=e` and `CASSETTE e` names runs in ascending 2S. Without [`SI_REKS_2SPIN`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_2spin) (ladder) both orders are ascending 2S.

```python
"si_reks_2spin":        [2, 0],
"si_reks_configs":      [[[0]], [[0, 1]]],   # triplet, singlet
"si_reks_grad":         [[0], []],           # T1: printed as cassette 1, SSR ROOT 0 GRADIENT CASSETTE 1
"si_reks_store_states": [1, 0],              # 1 triplet state stored, no singlet
```

H₂ REKS(2,2): with `[2, 0]` the gradient and the stored state go to the triplet (K = 1), the triplet block is printed first and energies are given as `E-E(T1)`; with `[0, 2]` the same lists select the singlet (K = 0).

## Properties, gradients, couplings {#response}

Relaxed properties, gradients and couplings are computed from one coupled-perturbed REKS (CP-REKS, Z-vector) solve. List-of-lists options mirror [`SI_REKS_CONFIGS`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_configs): inner list `t` refers to the t-th cassette in the order of [Cassette order](#cassette-order); roots as in [Adiabatic (SSR) states](https://reksstudio.github.io/learn/concepts/index.md#ssr-states). For [`SI_REKS_GRAD`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_grad), [`SI_REKS_NAC`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_nac) and [`SI_REKS_PROPERTY_FOR`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_property_for), more inner lists than cassettes is an input error; fewer lists leave the remaining cassettes without requests, and `[]` requests none for its cassette.

### State properties {#state-properties}

[`SI_REKS_ANALYSIS`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_analysis) selects the property blocks of the SSR states (unrelaxed densities), [`SI_REKS_PROPERTY_FOR`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_property_for) the states that also get relaxed properties, [`REKS_EKT`](https://reksstudio.github.io/learn/reference/options/index.md#row-reks_ekt) ionization energies of those states. `State analysis` in the setup block lists every block; struck-through names are not computed.

```python
psi4.set_options({
    # + TRANSITION_DIPOLE, NO_OCCUPATIONS (always on)
    "si_reks_analysis": ["DIPOLE", "RADICAL", "NTO", "MULTIPOLE(3)"],
    # relaxed properties and EKT of S0, S1 of cassette 0
    "si_reks_property_for": [["S0..1"], []],
    "reks_ekt": True,
})
```

#### [`SI_REKS_ANALYSIS`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_analysis) {#si_reks_analysis}

State-property blocks of the SI states to compute, print and store (moments, charges, bond indices, NTO, exciton, …).

Type: array

Default: all blocks except multipoles > 2

```python
"si_reks_analysis": ["all"],
```

Run: C₂H₄ at R(CC) 2.32 Å, REKS(4,4), BH\&HLYP/6-31G(d), cassettes 2S = 0, 2.

```log
=> State analysis [PROPERTIES] <=

   DENSITIES               active 1-RDMs of the states and the adiabatic 1-RDM (stored)
   DIPOLE                  permanent and difference dipoles of the states
   E_TDM_VEL               velocity transition moments, oscillator strengths f_vel
   EXCITON                 exciton and CT descriptors, hole/electron populations; NDOs (stored)
   FRAGMENT_COUPLINGS      FCD and FED (FSD for 2S > 0) fragment couplings
   LOWDIN_CHARGES          Lowdin charges of the states
   LOWDIN_SPINS            Lowdin spin populations of the 2S > 0 states
   M_TDM                   magnetic transition moments, rotatory strengths
   MAYER_INDICES           Mayer bond indices of the states
   MULLIKEN_CHARGES        Mulliken charges of the states
   MULLIKEN_SPINS          Mulliken spin populations of the 2S > 0 states
   M̶U̶L̶T̶I̶P̶O̶L̶E̶(̶n̶)̶            multipoles of order 3..n of the states and transitions
   NO_OCCUPATIONS          natural occupation numbers and natural orbitals of the states
   NTO                     NTO weights and participation ratios; natural transition orbitals (stored)
   QUADRUPOLE              quadrupoles of the states, full Cartesian and traceless
   RADICAL                 radical indices; unpaired atomic populations (stored)
   REKS_EKT                ionization energies and Dyson orbitals (EKT) of the states below
   SI_REKS_PROPERTY_FOR    relaxed dipole, quadrupole and atomic charges (density P^r) of the states below
   TRANSITION_CHARGES      Mulliken and Lowdin transition charges
   TRANSITION_DIPOLE       transition dipoles, oscillator strengths f_len
   TRANSITION_QUADRUPOLE   transition second moments, trace included
   WIBERG_LOWDIN_INDICES   Wiberg-Lowdin bond indices of the states

   Cassette  States
   ----------------
          0  S1, S2
   ----------------
```

* Property blocks to compute, print and store. Unset: every block except multipoles above order 2. `[]`: `TRANSITION_DIPOLE` and `NO_OCCUPATIONS`. A list: these two plus the listed names.
* Names: `DIPOLE`, `QUADRUPOLE`, `MULTIPOLE(n)`, `TRANSITION_DIPOLE`, `TRANSITION_QUADRUPOLE`, `E_TDM_VEL`, `M_TDM`, `MULLIKEN_CHARGES`, `LOWDIN_CHARGES`, `MULLIKEN_SPINS`, `LOWDIN_SPINS`, `TRANSITION_CHARGES`, `MAYER_INDICES`, `WIBERG_LOWDIN_INDICES`, `NO_OCCUPATIONS`, `DENSITIES`, `RADICAL`, `NTO`, `EXCITON`, `FRAGMENT_COUPLINGS`, `ALL`, case-insensitive; each property entry names its switch ([Properties](https://reksstudio.github.io/learn/reference/properties/index.md#properties)). `MULLIKEN_SPINS`, `LOWDIN_SPINS` act on 2S > 0 cassettes ([Atomic spin populations of the states (2S > 0)](https://reksstudio.github.io/learn/reference/properties/index.md#atomic-spins)).
* A block another listed block needs is computed without being printed or stored: `RADICAL` needs `NO_OCCUPATIONS`, `FRAGMENT_COUPLINGS` the state and transition charges and, in a 2S > 0 cassette, the Löwdin spins.
* `MULTIPOLE(n)` adds `DIPOLE` and `TRANSITION_DIPOLE`, for n ≥ 2 `QUADRUPOLE` and `TRANSITION_QUADRUPOLE`, for n ≥ 3 the multipoles of order 3..n. `ALL` switches on every name except `MULTIPOLE(n)`: `["ALL", "MULTIPOLE(4)"]` adds both.
* `State analysis [PROPERTIES]` lists every name, [`SI_REKS_PROPERTY_FOR`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_property_for) and [`REKS_EKT`](https://reksstudio.github.io/learn/reference/options/index.md#row-reks_ekt) in alphabetical order (`_` read as a space) with a description, names not run struck through; with [`SI_REKS_PROPERTY_FOR`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_property_for) it adds the states of each cassette that receive relaxed properties (and EKT when [`REKS_EKT`](https://reksstudio.github.io/learn/reference/options/index.md#row-reks_ekt) is true).

#### [`SI_REKS_ANALYSIS_CHANGE_MIN`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_analysis_change_min) {#si_reks_analysis_change_min}

Smallest state-to-state change of a charge or bond index that is printed.

Type: double

Default: `0.1`

```python
"si_reks_analysis_change_min": 0.05,
```

* Smallest state-to-state change of a charge, spin population or bond index that is printed ([Atomic charges of the states (unrelaxed)](https://reksstudio.github.io/learn/reference/properties/index.md#atomic-charges), [Atomic spin populations of the states (2S > 0)](https://reksstudio.github.io/learn/reference/properties/index.md#atomic-spins)).

#### [`SI_REKS_PROPERTY_FOR`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_property_for) {#si_reks_property_for}

States, per cassette, whose dipole, quadrupole, charges and bond indices are evaluated with the relaxed (CP-REKS) density.

Type: array of arrays

Default: `[]`

```python
"si_reks_property_for": [["S1,S2"], []],
```

* States evaluated with the relaxed density: dipole, quadrupole, Mulliken/Löwdin charges, Mayer/Wiberg indices ([Relaxed dipole, quadrupole and atomic charges](https://reksstudio.github.io/learn/reference/properties/index.md#relaxed-properties), [Bond indices of the relaxed density](https://reksstudio.github.io/learn/reference/properties/index.md#relaxed-bond-indices)).
* Entries: indices or labels, ranges, lists (`"S0..5"`, `"T1"`), inside the per-cassette inner lists (`[["S0..1"]]`), in the spin order of [`SI_REKS_2SPIN`](#si_reks_2spin) ([Cassette order](#cassette-order)); a flat list is rejected.

#### [`REKS_EKT`](https://reksstudio.github.io/learn/reference/options/index.md#row-reks_ekt) {#reks_ekt}

Enables EKT: ionization energies, pole strengths and Dyson orbitals of the [`si_reks_property_for`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_property_for) states or of the SA ensemble.

Type: bool

Default: `false`

```python
"reks_ekt": True,
```

* Extended Koopmans ionization energies, pole strengths and Dyson orbitals for the [`SI_REKS_PROPERTY_FOR`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_property_for) states ([EKT ionization energies, pole strengths and Dyson orbitals of SI states](https://reksstudio.github.io/learn/reference/properties/index.md#ekt-states)), otherwise for the SA ensemble ([EKT ionization energies of the SA-REKS ensemble](https://reksstudio.github.io/learn/reference/properties/index.md#ekt-ensemble)).

#### [`REKS_EKT_OCC_TOL`](https://reksstudio.github.io/learn/reference/options/index.md#row-reks_ekt_occ_tol) {#reks_ekt_occ_tol}

Cutoff on the density eigenvalues: those at or below it are dropped from the EKT metric.

Type: double

Default: `1e-6`

```python
"reks_ekt_occ_tol": 1e-8,
```

* Density eigenvalues at or below this are dropped from the EKT metric.

### Gradients and couplings {#gradients-couplings}

Worked call, optimization and dynamics: [Optimization and dynamics](https://reksstudio.github.io/learn/branch/dynamics/index.md#opt-dynamics).

#### [`SI_REKS_GRAD`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_grad) {#si_reks_grad}

Roots whose analytic gradients are computed, per cassette; the first listed root is followed (`CURRENT ENERGY`, returned gradient).

Type: array of arrays

Default: `[]` (SA ensemble)

```python
"si_reks_grad": [[1, 2]],
```

Run: C₂H₄ at R(CC) 2.32 Å, REKS(4,4), BH\&HLYP/6-31G(d), cassettes 2S = 0, 2.

```log
=> Gradient request <=

   Cassette  States    NAC pairs
   -----------------------------
          0  S1 *, S2  S1/S2
   -----------------------------
   States = SI states whose nuclear gradient is computed. * = followed state, returned by gradient().
```

* Roots whose gradients are computed, one inner list per cassette; inner list t = the t-th cassette in the spin order of [`SI_REKS_2SPIN`](#si_reks_2spin) ([Cassette order](#cassette-order); with [`si_reks_2spin`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_2spin) `[2, 0]` list 0 is the triplet cassette); roots as in [Adiabatic (SSR) states](https://reksstudio.github.io/learn/concepts/index.md#ssr-states). Inner list `[-1]` = all roots of that cassette (`[[-1]]`), on a Davidson cassette the 50 lowest; a flat `[-1]` is an input error. More inner lists than SI cassettes stop the run before the SCF: [`REKS input error: SI_REKS_GRAD: 2 order list(s) for 1 SI cassette(s).`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_grad)
* The followed root, marked `*` in `Gradient request`, is the first entry of the first non-empty inner list (`-1` → root 0). Without [`SI_REKS_GRAD`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_grad) it is the lowest root index in the pairs of the first non-empty [`SI_REKS_NAC`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_nac) list.
* With a followed root, `CURRENT ENERGY` is its energy, also stored as `REKS TARGET STATE ENERGY`, in `energy()` and `gradient()`; `gradient()` returns its gradient ([Nuclear gradients of SSR states](https://reksstudio.github.io/learn/reference/properties/index.md#state-gradient)). Without a followed root: [Explicit SA pool and SI cassettes](#explicit-input).
* `CURRENT DIPOLE` is the relaxed dipole of the followed root when [`SI_REKS_PROPERTY_FOR`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_property_for) lists that root, and is unset otherwise.
* Triplet gradient of [`reks [2, 2]`](https://reksstudio.github.io/learn/reference/options/index.md#row-reks): the triplet-gradient worked input ([Worked inputs](#worked-inputs)), with [`si_reks_grad`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_grad) `[[], [0]]` following T1 of cassette 1.

#### [`SI_REKS_NAC`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_nac) {#si_reks_nac}

Root pairs `[I, J]` per cassette whose nonadiabatic couplings and conical-intersection topography are computed.

Type: array

Default: `[]`

```python
"si_reks_nac": [[[1, 2]]],
```

* Pairs `[I, J]` per SI cassette, in the spin order of [`SI_REKS_2SPIN`](#si_reks_2spin) ([Cassette order](#cassette-order)), `[[[I, J], ...], ...]`, or `ALL`; the call above couples S1 and S2 of cassette 0. Computed in `gradient()`; the roots of each pair join the gradient targets.
* Publishes `SSR NAC I J CASSETTE e` (1/bohr, [Nonadiabatic coupling vectors](https://reksstudio.github.io/learn/reference/properties/index.md#nac)) and the conical-intersection topography `SSR CI TOPOGRAPHY I J CASSETTE e` ([Conical-intersection topography](https://reksstudio.github.io/learn/reference/properties/index.md#ci-topography)); e is the printed cassette index K (ascending 2S).
* Without [`SI_REKS_GRAD`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_grad) the followed root: [`SI_REKS_GRAD`](#si_reks_grad).

#### [`REKS_CPREKS_CONV`](https://reksstudio.github.io/learn/reference/options/index.md#row-reks_cpreks_conv) {#reks_cpreks_conv}

Residual threshold of the CP-REKS (Z-vector) solver. [`reks_cpreks_maxiter`](https://reksstudio.github.io/learn/reference/options/index.md#row-reks_cpreks_maxiter) (200) bounds its rounds.

Type: double

Default: `1e-9`

```python
"reks_cpreks_conv": 1e-10,
```

Run: C₂H₄ at R(CC) 2.32 Å, REKS(4,4), BH\&HLYP/6-31G(d), cassettes 2S = 0, 2.

```log
==> Coupled-perturbed REKS (CP-REKS, Z-vector) solver <==

    For                   relaxed properties of S1, S2 (cassette 0);
                          gradients of S1, S2 (cassette 0);
                          NAC S1/S2 (cassette 0)
    Equations             4: 2 states + 2 for NAC S1/S2 (cassette 0)
    Maxiter               200
    Convergence           1.000e-09
    Orbital rotations     310

    Iter      Mean |R|       Max |R|   Remain   Time [s]
    ----------------------------------------------------
       1     2.988e-01     9.691e-01        4       0.01
       2     1.648e-01     5.702e-01        4       0.03
[...]
      12     1.091e-08     1.091e-08        1       0.13
      13     5.914e-10     5.914e-10        0       0.14
    ----------------------------------------------------
    Z-vectors converged in 13 iterations.
```

* CP-REKS (Z-vector) residual threshold, relative to max(1, ‖b‖). One solve serves the relaxed properties, gradients and NACs of the run.
* The solver block is printed when [`SI_REKS_PROPERTY_FOR`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_property_for) names states, or in `gradient()` with [`SI_REKS_GRAD`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_grad) or [`SI_REKS_NAC`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_nac), at [`REKS_REPORT_LEVEL`](https://reksstudio.github.io/learn/reference/options/index.md#row-reks_report_level) ≥ 2 and Psi4 `PRINT` ≥ 1 (defaults).
* Converged: `Remain` reaches 0 and the block ends with `Z-vectors converged in N iterations.`. Non-convergence ends the run with `no convergence in N rounds`.
* A target t closes at max(threshold, 10 ε ‖A‖ ‖Z<sub>t</sub>‖), ε the machine epsilon, ‖A‖ = max(max<sub>i</sub> |A<sub>ii</sub>|, max ‖A d‖ over the unit search directions d): below that the residual is roundoff of the operator. Targets closed at this floor are counted after the converged line (`N target(s) closed at the roundoff floor 10 eps |A| |Z|`). When the explicit residual of a target exceeds this bound, every open target continues from its explicit residual in a new search space.

#### [`REKS_CPREKS_MAXITER`](https://reksstudio.github.io/learn/reference/options/index.md#row-reks_cpreks_maxiter) {#reks_cpreks_maxiter}

Maximum number of rounds of the CP-REKS (Z-vector) solver; exceeding it stops the run with the residual reached.

Type: int

Default: `200`

```python
"reks_cpreks_maxiter": 400,
```

* CP-REKS rounds before an error is raised.

#### [`REKS_GRAD_DEGEN_TOL`](https://reksstudio.github.io/learn/reference/options/index.md#row-reks_grad_degen_tol) {#reks_grad_degen_tol}

Gap below which a requested root is flagged as quasi-degenerate.

Type: double

Default: `1e-6`

```python
"reks_grad_degen_tol": 1e-5,
```

* Gap (E<sub>h</sub>) below which a requested root is computed with a quasi-degeneracy warning.
* On a Davidson cassette, also the gap between the last requested and the last computed root below which the computed set grows ([SI eigensolver](https://reksstudio.github.io/learn/concepts/index.md#si-solver)).

#### [`REKS_CI_TOPOGRAPHY_GAP`](https://reksstudio.github.io/learn/reference/options/index.md#row-reks_ci_topography_gap) {#reks_ci_topography_gap}

Largest gap at which the topography table of a NAC pair is printed.

Type: double

Default: `5e-3`

```python
"reks_ci_topography_gap": 1e-2,
```

* Largest pair gap (E<sub>h</sub>) at which the topography table of a NAC pair is printed ([Conical-intersection topography](https://reksstudio.github.io/learn/reference/properties/index.md#ci-topography)).

## Linked files

[inputs/reks22_h2.dat](https://reksstudio.github.io/inputs/reks22_h2.dat.txt)

[inputs/reks44_h4_singlet_triplet.py](https://reksstudio.github.io/inputs/reks44_h4_singlet_triplet.py.txt)

[inputs/reks44_h4_heisenberg.dat](https://reksstudio.github.io/inputs/reks44_h4_heisenberg.dat.txt)

[inputs/reks22_h2_triplet_gradient.dat](https://reksstudio.github.io/inputs/reks22_h2_triplet_gradient.dat.txt)
