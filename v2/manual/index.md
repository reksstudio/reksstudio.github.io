# Start — REKS Studio Manual

HTML: <https://reksstudio.github.io/v2/manual/>

Psi4 f31cf1f94, 2026-10-15: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

User Manual

# REKS Studio — User Manual

A guide to the REKS(N,M) / SA-REKS / SI-REKS implementation in Psi4

[Psi4 revision `f31cf1f94`, 2026-10-15](https://reksstudio.github.io/v2/docs/index.md#version)

Spin-Restricted Ensemble-referenced Kohn-Sham DFT\
State-Averaged (SA-REKS) and State-Interaction (SI-SA-REKS = SSR)\
Konstantin Komarov, Michael Filatov, Seung Kyu Min\
Ulsan National Institute of Science and Technology (UNIST), South Korea

## 1. Start {#overview}

REKS Studio is the REKS solver of this Psi4 branch, selected with `reference reks`. It gives:

* **REKS(N,M)**: ensemble DFT with `N` active electrons in `M` active orbitals, distributed over GVB-like geminal (paired-orbital) configurations whose fractional occupation numbers (FONs) are optimized self-consistently together with the orbitals.
* **SA-REKS**: an ensemble of such configurations averaged with fixed weights; its energy is optimized during SCF.
* **SI-SA-REKS** (SSR): a post-SCF eigenproblem in a basis of catalog configurations (a cassette, chosen independently of the SA ensemble) that gives adiabatic state energies, densities and transition properties, gradients and couplings, from one SCF.

A functional, a basis, and an SCF type are chosen as for any Psi4 reference, and `psi4.energy("<functional>")` is called as usual, e.g. `psi4.energy("bhhlyp")`; the functional builds the Kohn–Sham matrices of every microstate ([Microstate](https://reksstudio.github.io/v2/manual/concepts/index.md#microstate)). `psi4.energy("scf")` runs REKS with Hartree–Fock exchange and no functional; its setup block then has no `XC evaluation` line.

### Tasks {#tasks}

| Task | Input | Output |
| - | - | - |
| First calculation of a new molecule | RKS seed, `restart_file`, [`GUESS_ACTIVE_WINDOW`](https://reksstudio.github.io/v2/options/GUESS_ACTIVE_WINDOW.md) ([§3](https://reksstudio.github.io/v2/manual/first-calculation/index.md#first-calculation)) | [Check the solution](https://reksstudio.github.io/v2/manual/first-calculation/index.md#check-solution) |
| Geminal over 3 or more orbitals: REKS(2,3), (4,5), (4,6) | [`REKS_GEMINAL_WIDTHS`](https://reksstudio.github.io/v2/options/REKS_GEMINAL_WIDTHS.md), seed chain ([Bond and lone pair: REKS(4,5), REKS(4,6)](https://reksstudio.github.io/v2/manual/wide-geminals/index.md#wide-two-pairs)) | [Check the solution](https://reksstudio.github.io/v2/manual/wide-geminals/index.md#wide-check) |
| Energies of several states | default cassette, or [`SI_REKS_CONFIGS`](https://reksstudio.github.io/v2/options/SI_REKS_CONFIGS.md) | [SSR state energies](https://reksstudio.github.io/v2/manual/properties/index.md#ssr-energies) |
| S1 gradient and S1/S2 coupling | `"si_reks_grad": [[1]]`, `"si_reks_nac": [[[1, 2]]]`, `psi4.gradient(...)` ([One gradient() call](https://reksstudio.github.io/v2/manual/dynamics/index.md#one-gradient)) | [Nuclear gradients of SSR states](https://reksstudio.github.io/v2/manual/properties/index.md#state-gradient), [Nonadiabatic coupling vectors](https://reksstudio.github.io/v2/manual/properties/index.md#nac) |
| Geometry optimization of a state | `reks_dlfind.py`, [Geometry optimization](https://reksstudio.github.io/v2/manual/dynamics/index.md#geometry-optimization) | [Check the optimization](https://reksstudio.github.io/v2/manual/dynamics/index.md#check-optimization) |
| Surface-hopping dynamics | `reks_unixmd.py`, [Surface hopping](https://reksstudio.github.io/v2/manual/dynamics/index.md#surface-hopping) | [Check the trajectory](https://reksstudio.github.io/v2/manual/dynamics/index.md#check-trajectory) |
| Transition dipoles, oscillator strengths | default [`SI_REKS_ANALYSIS`](https://reksstudio.github.io/v2/options/SI_REKS_ANALYSIS.md) | [Transition dipole moments and length-form oscillator strengths](https://reksstudio.github.io/v2/manual/properties/index.md#transition-dipole) |
| Dipoles, charges, bond indices, NTOs, relaxed properties, EKT | [State properties](https://reksstudio.github.io/v2/manual/setup/index.md#state-properties) | [Print order](https://reksstudio.github.io/v2/manual/properties/index.md#print-order) |
| Triplet states | `"si_reks_2spin": [2]` ([Input patterns](https://reksstudio.github.io/v2/manual/setup/index.md#input-patterns)) | [SSR state energies](https://reksstudio.github.io/v2/manual/properties/index.md#ssr-energies) |
| Singlet–triplet gaps | [`SI_REKS_2SPIN`](https://reksstudio.github.io/v2/options/SI_REKS_2SPIN.md) with two manifolds | [Spin-state gaps and Heisenberg J](https://reksstudio.github.io/v2/manual/properties/index.md#spin-state-energetics) |
| Scan with restarts | [Restart mechanism](https://reksstudio.github.io/v2/manual/run-control/index.md#restart), [`GUESS_ACTIVE_WINDOW`](https://reksstudio.github.io/v2/options/GUESS_ACTIVE_WINDOW.md) | [Scans](https://reksstudio.github.io/v2/manual/first-calculation/index.md#first-scans) |
| Look up an option | [§18](https://reksstudio.github.io/v2/manual/reference/index.md#option-table), [Index](https://reksstudio.github.io/v2/manual/reference/index.md#index) | — |
| Identify a printed block | — | [Print order](https://reksstudio.github.io/v2/manual/properties/index.md#print-order) |
| A problem in the output | — | [§17](https://reksstudio.github.io/v2/manual/diagnose/index.md#diagnose) |

### Minimal input {#minimal-input}

```psithon
set {
    reference  reks
    reks       [ 2, 2 ]
}
energy('bhhlyp')
```

Only `reference reks` and `reks [N, M]` are required. Absent `sa_reks_configs`: the catalog's default SA pool ([`SA_REKS_CONFIGS`](https://reksstudio.github.io/v2/options/SA_REKS_CONFIGS.md)). Absent `sa_reks_weights`: uniform weights. Absent `si_reks_configs`: one cassette spanning the full configuration block of the run's lowest manifold ([`SI_REKS_CONFIGS`](https://reksstudio.github.io/v2/options/SI_REKS_CONFIGS.md)). For `reks [2, 2]`, the defaults are SA = PPS1, OSS1 (weights 0.5) and the cassette PPS1, OSS1, DES1, printed as `3SI-2SA-REKS(2,2)`. A new molecule starts from seeded and checked active orbitals ([§3](https://reksstudio.github.io/v2/manual/first-calculation/index.md#first-calculation)).

### Explicit SA pool and SI cassettes {#explicit-input}

SI-SA-REKS(4,4) with an explicit SA pool and weights and four SI cassettes, written as one group (one spin manifold) of four cassettes `[[[…], […], […], […]]]` ([`SI_REKS_CONFIGS`](https://reksstudio.github.io/v2/options/SI_REKS_CONFIGS.md)). Each cassette is its own eigenproblem in the same SA orbitals; `PPS2` belongs to pairing scheme 1 (`SI pools` prints the definition of every name, [Pairing scheme](https://reksstudio.github.io/v2/manual/concepts/index.md#pairing-scheme); tokens: [§7](https://reksstudio.github.io/v2/manual/setup/index.md#bulk-tokens)):

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

S0 falls by 32.5 mE<sub>h</sub> from cassette 0 to the full block. S1 is the `OSS2` state in every cassette: −1.575184 E<sub>h</sub> in cassettes 0 and 2, −1.578547 E<sub>h</sub> in cassettes 1 and 3, which add `OSS_DES1`. S2 changes character with the cassette: `OSS1` in cassette 0, `DES2` in cassette 1, an `OSS3`/`DES2` mixture in cassettes 2 and 3. The `OSS1` state, S2 of cassette 0, moves up to S5 in cassette 2 (same energy) and to S3 and S6 in cassettes 1 and 3 (−0.759700 E<sub>h</sub>). The four `Adiabatic states` tables:

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

   Overlap S_ij / sqrt(S_ii S_jj) of configuration pairs listed in the same row above 0.5 in magnitude:
   PPS1 / PPS2   1.00
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
   S4[1]  -0.316996802406        49.206   DOSS_SPS_0(68.2) DOSS_SPS_1(27.9) DES1(2.1)
   S5[1]  -0.146502273691        53.845   DOSS_SPS_1(49.4) DOSS_SPS_0(30.7) DES1(14.4)
   S6[1]   0.025866246557        58.535   OSS_DES2(99.0) OSS1(0.7) OSS_DES1(0.2)
   S7[1]   0.583716625951        73.715   DES1(82.5) DOSS_SPS_1(15.9) DOSS_SPS_0(1.0)
   S8[1]   0.919636705226        82.856   OSS_DES1(99.6) OSS_DES2(0.3) OSS2(0.1)
   S9[1]   1.170788605323        89.690   DDES1(98.1) DOSS_SPS_1(1.0) DES1(0.9)
   -----------------------------------------------------------------------------------
   w_j = c_j (S c)_j = Chirgwin-Coulson weight of configuration j in the state, sum_j w_j = 100 %;
   listed: the three largest |w_j| >= 0.1 %, then every further |w_j| > 5 %.
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
   S4[2]  -0.949704282395        31.989   OSS4(89.2) DES2(4.9) DOSS_SPS_0(2.7)
   S5[2]  -0.754226404381        37.308   OSS1(99.7) OSS2(0.3)
   S6[2]  -0.300919686184        49.643   DOSS_SPS_0(60.3) DOSS_SPS_1(34.8) DES1(2.5)
   S7[2]  -0.094264473304        55.267   DOSS_SPS_1(42.3) DOSS_SPS_0(33.7) DES1(15.8)
   S8[2]   0.596839748783        74.072   DES1(81.5) DOSS_SPS_1(15.8) DOSS_SPS_0(1.4)
   -----------------------------------------------------------------------------------
   w_j = c_j (S c)_j = Chirgwin-Coulson weight of configuration j in the state, sum_j w_j = 100 %;
   listed: the three largest |w_j| >= 0.1 %, then every further |w_j| > 5 %.
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
   S4[3]   -0.994944258185        30.758   OSS4(77.0) DES2(10.4) DOSS_SPS_0(4.9)
   S5[3]   -0.782002831796        36.552   DES3(74.2) DOSS_SPS_0(10.2) OSS3(5.9) OSS4(5.4)
   S6[3]   -0.759700282426        37.159   OSS1(99.0) OSS_DES2(0.7) OSS2(0.3)
   S7[3]   -0.306971418288        49.479   DOSS_SPS_1(47.1) DOSS_SPS_0(37.0) DES3(4.6)
   S8[3]   -0.213443534482        52.024   DOSS_SPS_1(25.4) DOSS_SPS_0(20.9) DES4(20.4) DES3(10.5) OSS_DES3(6.4) OSS4(6.0)
   S9[3]    0.025866246557        58.535   OSS_DES2(99.0) OSS1(0.7) OSS_DES1(0.2)
   S10[3]   0.164742871402        62.315   DES1(37.8) DES4(36.7) DOSS_SPS_0(17.7)
   S11[3]   0.237268815103        64.288   OSS_DES3(68.5) DES4(22.3) DES1(5.6)
   S12[3]   0.623308933249        74.793   OSS_DES4(42.2) DES1(21.2) OSS_DES3(14.9) DES4(9.9)
   S13[3]   0.919636705226        82.856   OSS_DES1(99.6) OSS_DES2(0.3) OSS2(0.1)
   S14[3]   0.920768049864        82.887   OSS_DES4(47.4) DES1(23.4) DOSS_SPS_1(14.0)
   S15[3]   1.242339480860        91.637   DDES1(43.7) DDES2(42.2) DES1(5.4)
   -----------------------------------------------------------------------------------------------------------------------
   w_j = c_j (S c)_j = Chirgwin-Coulson weight of configuration j in the state, sum_j w_j = 100 %;
   listed: the three largest |w_j| >= 0.1 %, then every further |w_j| > 5 %.

   Overlap S_ij / sqrt(S_ii S_jj) of configuration pairs listed in the same row above 0.5 in magnitude:
   PPS1  / PPS2    1.00    DDES1 / DDES2   1.00
```

`ref` is S0 of cassette 0, the reference of the eV column. `PPS1` and `PPS2` overlap with 1.00 at this geometry (cassettes 0 and 3); S3 of cassette 0, the other `PPS1`/`PPS2` combination, lies at +3.64 E<sub>h</sub>.

Without `si_reks_grad` and `si_reks_nac`, as in both inputs above, `energy()` returns E<sub>SA</sub> (`CURRENT ENERGY` = `SCF TOTAL ENERGY`), not an SSR state energy: −1.643432513968 E<sub>h</sub> for this H₄ run, against S0 = −2.125272976235 to −2.157804217606 E<sub>h</sub> of the four cassettes. With a followed state: [`SI_REKS_GRAD`](https://reksstudio.github.io/v2/options/SI_REKS_GRAD.md). Energies in the output and their variables:

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

### Required and rejected settings {#required-and-rejected-settings}

| Setting | Rule |
| - | - |
| Molecule symmetry | C1; any other point group is an input error (below). |
| Molecule multiplicity | The canonical value ([`REKS`](https://reksstudio.github.io/v2/options/REKS.md)). |
| `DIIS`, `SOSCF` | Switched off by REKS. |
| `LEVEL_SHIFT`, `LEVEL_SHIFT_CUTOFF` | Unset: REKS defaults ([Level shift](https://reksstudio.github.io/v2/manual/run-control/index.md#level-shift)). |
| `PCM`, `DDX`, `PE`, `MOM_START`, `FRAC_START` | Rejected with an input error. |
| VV10 functionals (`-V`, `-NL`), Laplacian-dependent meta-GGAs (e.g. `zlp`), `DFT_GRAC_SHIFT` ≠ 0 | Rejected with an input error. |

H₂ without `symmetry c1`:

```log
========================= REKS INPUT ERROR =========================
REKS requires C1 symmetry, but the molecule has 8 irreps. Add 'symmetry c1' to the molecule.
====================================================================
```

### Worked inputs {#worked-inputs}

Complete inputs, each running with this build. Run a `.dat` file with `psi4 file.dat`, a `.py` file with `python file.py`. Seeded initial calculations: [Worked inputs](https://reksstudio.github.io/v2/manual/first-calculation/index.md#first-inputs); wide geminals: [Worked inputs](https://reksstudio.github.io/v2/manual/wide-geminals/index.md#wide-inputs); optimization and dynamics: [Worked inputs](https://reksstudio.github.io/v2/manual/dynamics/index.md#dynamics-inputs).

| File | Calculation | Result |
| - | - | - |
| [`reks22_h2.dat`](https://reksstudio.github.io/v2/inputs/reks22_h2.dat.txt) | SI-SA-REKS(2,2), H₂ (0.74 Å), BH\&HLYP/cc-pVDZ, default pools | S0 = −1.159238310496 Eh |
| [`reks44_h4_singlet_triplet.py`](https://reksstudio.github.io/v2/inputs/reks44_h4_singlet_triplet.py.txt) | SI-SA-REKS(4,4), linear H₄ (1.6 Å), BH\&HLYP/6-31G; SA `[PPS1, OSS1]` + `[T_PPS1]`, full SI cassette on 2S = 0 and 2S = 2 | S0 = −2.101144140471, T1 = −2.049371603420 Eh |
| [`reks44_h4_heisenberg.dat`](https://reksstudio.github.io/v2/inputs/reks44_h4_heisenberg.dat.txt) | SI-SA-REKS(4,4), linear H₄ (1.6 Å), BH\&HLYP/6-31G; sectors 2S = 0, 2, 4; [Spin-state gaps and Heisenberg J](https://reksstudio.github.io/v2/manual/properties/index.md#spin-state-energetics) | S0 = −2.072348701131, T1 = −2.045831290718, Q1 = −1.888567570704 Eh |
| [`reks22_h2_triplet_gradient.dat`](https://reksstudio.github.io/v2/inputs/reks22_h2_triplet_gradient.dat.txt) | SI-SA-REKS(2,2), H₂ (1.6 Å), BH\&HLYP/6-31G(d); analytic gradient and relaxed properties of T1 ([`SI_REKS_GRAD`](https://reksstudio.github.io/v2/options/SI_REKS_GRAD.md)) | T1 = −0.959546621300 Eh; dE/dz(H1) = 0.041765470832 Eh/bohr |

## Contents {#contents}

### [Start](https://reksstudio.github.io/v2/manual/index.md)

* [1. Start](https://reksstudio.github.io/v2/manual/index.md#overview)
* [Tasks](https://reksstudio.github.io/v2/manual/index.md#tasks)
* [Minimal input](https://reksstudio.github.io/v2/manual/index.md#minimal-input)
* [Explicit SA pool and SI cassettes](https://reksstudio.github.io/v2/manual/index.md#explicit-input)
* [Required and rejected settings](https://reksstudio.github.io/v2/manual/index.md#required-and-rejected-settings)
* [Worked inputs](https://reksstudio.github.io/v2/manual/index.md#worked-inputs)

### [Concepts](https://reksstudio.github.io/v2/manual/concepts/index.md)

* [2. Concepts](https://reksstudio.github.io/v2/manual/concepts/index.md#concepts)
* [Active space, core, virtual](https://reksstudio.github.io/v2/manual/concepts/index.md#active-core-virtual)
* [Ensemble Kohn–Sham reference and FONs](https://reksstudio.github.io/v2/manual/concepts/index.md#ensemble-fons)
* [Microstate](https://reksstudio.github.io/v2/manual/concepts/index.md#microstate)
* [Geminals](https://reksstudio.github.io/v2/manual/concepts/index.md#geminals)
* [Pairing scheme](https://reksstudio.github.io/v2/manual/concepts/index.md#pairing-scheme)
* [Configuration and its energy](https://reksstudio.github.io/v2/manual/concepts/index.md#configuration-energy)
* [Coupling Δ and factor f](https://reksstudio.github.io/v2/manual/concepts/index.md#coupling)
* [FON set and generation](https://reksstudio.github.io/v2/manual/concepts/index.md#fon-generation)
* [SA-REKS ensemble and weights](https://reksstudio.github.io/v2/manual/concepts/index.md#sa-ensemble)
* [Orbitals, orbital energies, SCF convergence](https://reksstudio.github.io/v2/manual/concepts/index.md#orbitals-scf)
* [Spin-polarized configurations](https://reksstudio.github.io/v2/manual/concepts/index.md#sps-configurations)
* [Spin manifold and run sector](https://reksstudio.github.io/v2/manual/concepts/index.md#run-sector)
* [SI cassette](https://reksstudio.github.io/v2/manual/concepts/index.md#si-cassette)
* [SI-only FONs](https://reksstudio.github.io/v2/manual/concepts/index.md#si-only-fons)
* [SI Hamiltonian and overlap](https://reksstudio.github.io/v2/manual/concepts/index.md#si-hamiltonian)
* [SI eigensolver](https://reksstudio.github.io/v2/manual/concepts/index.md#si-solver)
* [Coupling damping below 100 % exact exchange](https://reksstudio.github.io/v2/manual/concepts/index.md#coupling-damping)
* [Adiabatic (SSR) states](https://reksstudio.github.io/v2/manual/concepts/index.md#ssr-states)
* [Chirgwin–Coulson weights](https://reksstudio.github.io/v2/manual/concepts/index.md#cc-weights)
* [Unrelaxed and relaxed densities](https://reksstudio.github.io/v2/manual/concepts/index.md#densities)

### [First Calculation](https://reksstudio.github.io/v2/manual/first-calculation/index.md)

* [3. First Calculation](https://reksstudio.github.io/v2/manual/first-calculation/index.md#first-calculation)
* [Which active space?](https://reksstudio.github.io/v2/manual/first-calculation/index.md#which-active-space)
* [Choose the pairs](https://reksstudio.github.io/v2/manual/first-calculation/index.md#choose-pairs)
* [Seed orbitals](https://reksstudio.github.io/v2/manual/first-calculation/index.md#seed-orbitals)
* [Inspect the orbitals](https://reksstudio.github.io/v2/manual/first-calculation/index.md#inspect-orbitals)
* [Start REKS](https://reksstudio.github.io/v2/manual/first-calculation/index.md#start-reks)
* [Check the solution](https://reksstudio.github.io/v2/manual/first-calculation/index.md#check-solution)
* [Higher spin states](https://reksstudio.github.io/v2/manual/first-calculation/index.md#first-spin)
* [Worked inputs](https://reksstudio.github.io/v2/manual/first-calculation/index.md#first-inputs)
* [Scans](https://reksstudio.github.io/v2/manual/first-calculation/index.md#first-scans)
* [If the SCF does not converge](https://reksstudio.github.io/v2/manual/first-calculation/index.md#no-convergence)

### [Wide Geminals](https://reksstudio.github.io/v2/manual/wide-geminals/index.md)

* [4. Wide Geminals](https://reksstudio.github.io/v2/manual/wide-geminals/index.md#wide-geminals)
* [Geminal of width w](https://reksstudio.github.io/v2/manual/wide-geminals/index.md#wide-pps)
* [Lone pair: REKS(2,3)](https://reksstudio.github.io/v2/manual/wide-geminals/index.md#wide-lone-pair)
* [Bond and lone pair: REKS(4,5), REKS(4,6)](https://reksstudio.github.io/v2/manual/wide-geminals/index.md#wide-two-pairs)
* [Check the solution](https://reksstudio.github.io/v2/manual/wide-geminals/index.md#wide-check)
* [Gradients](https://reksstudio.github.io/v2/manual/wide-geminals/index.md#wide-gradients)
* [States: SI-SA-REKS(2,3)](https://reksstudio.github.io/v2/manual/wide-geminals/index.md#wide-states)
* [Worked inputs](https://reksstudio.github.io/v2/manual/wide-geminals/index.md#wide-inputs)

### [Optimization and Dynamics](https://reksstudio.github.io/v2/manual/dynamics/index.md)

* [5. Optimization and Dynamics](https://reksstudio.github.io/v2/manual/dynamics/index.md#opt-dynamics)
* [Requirements](https://reksstudio.github.io/v2/manual/dynamics/index.md#dyn-requirements)
* [One gradient() call](https://reksstudio.github.io/v2/manual/dynamics/index.md#one-gradient)
* [Gradients and couplings against finite differences](https://reksstudio.github.io/v2/manual/dynamics/index.md#grad-fd)
* [Geometry optimization](https://reksstudio.github.io/v2/manual/dynamics/index.md#geometry-optimization)
* [Check the optimization](https://reksstudio.github.io/v2/manual/dynamics/index.md#check-optimization)
* [Surface hopping](https://reksstudio.github.io/v2/manual/dynamics/index.md#surface-hopping)
* [Check the trajectory](https://reksstudio.github.io/v2/manual/dynamics/index.md#check-trajectory)
* [Worked inputs](https://reksstudio.github.io/v2/manual/dynamics/index.md#dynamics-inputs)

### [Input](https://reksstudio.github.io/v2/manual/setup/index.md)

* [6. Active Space and Catalog](https://reksstudio.github.io/v2/manual/setup/index.md#catalog)
* [Active space](https://reksstudio.github.io/v2/manual/setup/index.md#active-space)
* [Naming convention](https://reksstudio.github.io/v2/manual/setup/index.md#naming-convention)
* [FON sets](https://reksstudio.github.io/v2/manual/setup/index.md#fon-sets)
* [Pairing schemes](https://reksstudio.github.io/v2/manual/setup/index.md#pairing-schemes)
* [7. Bulk Tokens and Pattern Syntax](https://reksstudio.github.io/v2/manual/setup/index.md#bulk-tokens)
* [8. SA Pool and SI Cassettes](https://reksstudio.github.io/v2/manual/setup/index.md#selecting)
* [SA pool](https://reksstudio.github.io/v2/manual/setup/index.md#sa-pool)
* [SI cassettes](https://reksstudio.github.io/v2/manual/setup/index.md#si-cassettes)
* [9. Spin Manifolds (2S) and Multi-Sector Runs](https://reksstudio.github.io/v2/manual/setup/index.md#spin-manifolds)
* [Input patterns](https://reksstudio.github.io/v2/manual/setup/index.md#input-patterns)
* [State labels](https://reksstudio.github.io/v2/manual/setup/index.md#state-labels)
* [Output](https://reksstudio.github.io/v2/manual/setup/index.md#output)
* [Cassette order](https://reksstudio.github.io/v2/manual/setup/index.md#cassette-order)
* [10. Properties, Gradients, Couplings](https://reksstudio.github.io/v2/manual/setup/index.md#response)
* [State properties](https://reksstudio.github.io/v2/manual/setup/index.md#state-properties)
* [Gradients and couplings](https://reksstudio.github.io/v2/manual/setup/index.md#gradients-couplings)

### [Run control](https://reksstudio.github.io/v2/manual/run-control/index.md)

* [11. Guesses and Restarts](https://reksstudio.github.io/v2/manual/run-control/index.md#guesses)
* [Restart mechanism](https://reksstudio.github.io/v2/manual/run-control/index.md#restart)
* [12. Fractional Occupation Numbers (FONs)](https://reksstudio.github.io/v2/manual/run-control/index.md#fons)
* [13. SCF Convergence Engines](https://reksstudio.github.io/v2/manual/run-control/index.md#scf-engines)
* [The three engines](https://reksstudio.github.io/v2/manual/run-control/index.md#engines)
* [Level shift](https://reksstudio.github.io/v2/manual/run-control/index.md#level-shift)
* [Expert stabilizers](https://reksstudio.github.io/v2/manual/run-control/index.md#expert-stabilizers)
* [14. Geminal Delocalization](https://reksstudio.github.io/v2/manual/run-control/index.md#geminal-deloc)

### [Output and properties](https://reksstudio.github.io/v2/manual/properties/index.md)

* [15. Reading the Output](https://reksstudio.github.io/v2/manual/properties/index.md#reading-output)
* [Print order](https://reksstudio.github.io/v2/manual/properties/index.md#print-order)
* [Run report](https://reksstudio.github.io/v2/manual/properties/index.md#run-report)
* [Report level](https://reksstudio.github.io/v2/manual/properties/index.md#report-level)
* [Variable names](https://reksstudio.github.io/v2/manual/properties/index.md#variable-names)
* [Files](https://reksstudio.github.io/v2/manual/properties/index.md#files)
* [16. Properties](https://reksstudio.github.io/v2/manual/properties/index.md#properties)
* [Rules for all entries](https://reksstudio.github.io/v2/manual/properties/index.md#rules-for-all-entries)
* [Summary](https://reksstudio.github.io/v2/manual/properties/index.md#summary)
* [SCF](https://reksstudio.github.io/v2/manual/properties/index.md#scf)
* [SI states](https://reksstudio.github.io/v2/manual/properties/index.md#si-states)
* [Unrelaxed state and transition properties](https://reksstudio.github.io/v2/manual/properties/index.md#unrelaxed-state-and-transition-properties)
* [Spin energetics](https://reksstudio.github.io/v2/manual/properties/index.md#spin-energetics)
* [Relaxed properties and EKT](https://reksstudio.github.io/v2/manual/properties/index.md#relaxed-properties-and-ekt)
* [Gradients, NAC, conical intersections](https://reksstudio.github.io/v2/manual/properties/index.md#gradients-nac-conical-intersections)

### [Diagnose](https://reksstudio.github.io/v2/manual/diagnose/index.md)

* [17. Diagnose](https://reksstudio.github.io/v2/manual/diagnose/index.md#diagnose)

### [Reference](https://reksstudio.github.io/v2/manual/reference/index.md)

* [18. Option Table](https://reksstudio.github.io/v2/manual/reference/index.md#option-table)
* [Active space](https://reksstudio.github.io/v2/manual/reference/index.md#active-space)
* [Catalog](https://reksstudio.github.io/v2/manual/reference/index.md#catalog)
* [SA pool](https://reksstudio.github.io/v2/manual/reference/index.md#sa-pool)
* [SI cassettes](https://reksstudio.github.io/v2/manual/reference/index.md#si-cassettes)
* [Spin manifolds](https://reksstudio.github.io/v2/manual/reference/index.md#spin-manifolds)
* [State properties](https://reksstudio.github.io/v2/manual/reference/index.md#state-properties)
* [Gradients and couplings](https://reksstudio.github.io/v2/manual/reference/index.md#gradients-and-couplings)
* [Guess](https://reksstudio.github.io/v2/manual/reference/index.md#guess)
* [FONs](https://reksstudio.github.io/v2/manual/reference/index.md#fons)
* [FON micro-solver](https://reksstudio.github.io/v2/manual/reference/index.md#fon-micro-solver)
* [Convergence engines](https://reksstudio.github.io/v2/manual/reference/index.md#convergence-engines)
* [Level shift](https://reksstudio.github.io/v2/manual/reference/index.md#level-shift)
* [GVB-DIIS conditioning chain (expert)](https://reksstudio.github.io/v2/manual/reference/index.md#gvb-diis-conditioning-chain-expert)
* [GVB-DIIS monitors / verdicts (expert)](https://reksstudio.github.io/v2/manual/reference/index.md#gvb-diis-monitors-verdicts-expert)
* [Geminal delocalization](https://reksstudio.github.io/v2/manual/reference/index.md#geminal-delocalization)
* [Reporting](https://reksstudio.github.io/v2/manual/reference/index.md#reporting)
* [19. References](https://reksstudio.github.io/v2/manual/reference/index.md#references)

## Linked files

[inputs/reks22_h2.dat](https://reksstudio.github.io/v2/inputs/reks22_h2.dat.txt)

```text
#! SA-REKS(2,2) and SI-SA-REKS(2,2) of H2, BH&HLYP/cc-pVDZ, default SA and SI pools.

molecule h2 {
0 1
H 0.0 0.0 0.0
H 0.0 0.0 0.74
symmetry c1
}

set {
  basis      cc-pvdz
  reference  reks
  reks       [2, 2]
}

energy('bhhlyp')
```

[inputs/reks44_h4_singlet_triplet.py](https://reksstudio.github.io/v2/inputs/reks44_h4_singlet_triplet.py.txt)

```python
"""SI-SA-REKS(4,4) of linear H4 (R = 1.6 A), BH&HLYP/6-31G: joint singlet + triplet SA,
one full SI cassette per manifold."""
import psi4

psi4.set_output_file("reks44_h4_singlet_triplet.out", False)
psi4.set_memory("1 GB")

psi4.geometry("""
0 1
H 0.0 0.0 0.0
H 0.0 0.0 1.6
H 0.0 0.0 3.2
H 0.0 0.0 4.8
symmetry c1
""")

psi4.set_options({
    "basis": "6-31g",
    "reference": "reks",
    "reks": [4, 4],
    "reks_use_trah": True,
    "e_convergence": 1e-8,
    "d_convergence": 1e-6,
    "sa_reks_configs": [["PPS1", "OSS1"], ["T_PPS1"]],
    "si_reks_configs": [[["full"]], [["full"]]],
    "si_reks_2spin": [0, 2],
})

e_sa, wfn = psi4.energy("bhhlyp", return_wfn=True)
print(f"E(SA) = {e_sa:.10f}")
print("S states:", wfn.array_variable("SSR ENERGIES K=0").np.ravel()[:3])
print("T states:", wfn.array_variable("REKS SECTOR 1 SSR ENERGIES K=1").np.ravel()[:3])
print("J [Eh]  :", wfn.array_variable("REKS HEISENBERG J").np.ravel())
```

[inputs/reks44_h4_heisenberg.dat](https://reksstudio.github.io/v2/inputs/reks44_h4_heisenberg.dat.txt)

```text
#! SI-SA-REKS(4,4) of linear H4 (R = 1.6 A), BH&HLYP/6-31G: singlet, triplet and quintet
#! sectors, SA weights 1/6. Prints the Spin-state energetics table (J for H = -2J S_A.S_B).

molecule h4 {
0 1
H 0.0 0.0 0.0
H 0.0 0.0 1.6
H 0.0 0.0 3.2
H 0.0 0.0 4.8
symmetry c1
}

set {
  basis            6-31g
  scf_type         pk
  reference        reks
  reks             [4, 4]
  reks_use_trah    true
  guess            sad
  maxiter          150
  e_convergence    1e-10
  d_convergence    1e-8
  sa_reks_2spin    [0, 2, 4]
  sa_reks_configs  [[0, 1, 2], [0, 1], [0]]
  sa_reks_weights  [0.1666666666666667, 0.1666666666666667, 0.1666666666666667, 0.1666666666666667, 0.1666666666666667, 0.1666666666666665]
  si_reks_configs  [[[0, 1, 2]], [[0, 1]], [[0]]]
  si_reks_2spin    [0, 2, 4]
}

energy('bhhlyp')
```

[inputs/reks22_h2_triplet_gradient.dat](https://reksstudio.github.io/v2/inputs/reks22_h2_triplet_gradient.dat.txt)

```text
#! SI-SA-REKS(2,2) of H2 (R = 1.6 A), BH&HLYP/6-31G(d): singlet SA pool plus a triplet sector.
#! Analytic gradient of T1 (cassette 1) and its relaxed properties.

molecule h2 {
0 1
H 0.0 0.0 0.0
H 0.0 0.0 1.6
symmetry c1
no_reorient
no_com
}

set {
  basis                 6-31g(d)
  scf_type              pk
  reference             reks
  reks                  [2, 2]
  e_convergence         1e-10
  d_convergence         1e-8
  sa_reks_configs       [[0, 1], [0]]
  sa_reks_weights       [0.3333333333333333, 0.3333333333333333, 0.3333333333333334]
  si_reks_configs       [[[0, 1]], [[0]]]
  si_reks_grad          [[], [0]]
  si_reks_property_for  [[], ["T1"]]
}

grad, wfn = gradient('bhhlyp', return_wfn=True)
```
