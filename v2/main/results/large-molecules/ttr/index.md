# TTR: Tetra[3]trianguleno[3]rhombene — Large molecules — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/large-molecules/ttr/>

Psi4 builds of these outputs: 0b7a4f5b4, 1b68aa1f5, 2acf2c145, 4c3025f7c, 5a77936fa, 72ce4d58b, 8c95db042, a5ccb08fa, d40267fc2, d5586d10a, e95c2d234, f31cf1f94 (kk/reks.v42), named on each run line. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# Tetra\[3]trianguleno\[3]rhombene (TTR)

C<sub>118</sub>H<sub>34</sub>, 152 atoms (“butterfly”, molecule 1 of [Song et al. 2024](https://reksstudio.github.io/v2/manual/reference/index.md#song2024-butterfly)); SA-REKS and SI-SA-REKS (SSR) at REKS(4,4)–(10,10); sets cc-pVTZ (4016 basis functions) · BH\&HLYP; def2-TZVP (3862) · BH\&HLYP.

[cc-pVTZ · BH\&HLYP REKS(10,10) details](#cc-pvtz-bh-hlyp-1010) · [def2-TZVP · BH\&HLYP REKS(10,10) details](#def2-tzvp-bh-hlyp-1010)

[Spin gaps](#gaps) · [Spin sectors](#spins) · [SI states](#states) · [Natural occupations](#occupations) · [Experiment](#experiment) · [Calculations](#calculations)

![TTR: drawing of the calculated geometry](https://reksstudio.github.io/v2/figures/scale/mol/TTR.svg)

Calculated geometry, 16 px/Å: explicit hydrogens, no bond orders.

* C
* H

## Spin gaps

ΔE<sub>ST</sub> = E(T1) − E(S0), ΔE<sub>SQ</sub> = E(Q1) − E(S0)

ΔE<sub>ST</sub> / meV

| Active space | cc-pVTZ · BH\&HLYP | def2-TZVP · BH\&HLYP |
| - | - | - |
| SSR(4,4) | −0.9 | −0.9 |
| SSR(6,6) | +15.7 | +15.6 |
| SSR(8,8) | +30.2 | +30.1 |
| SSR(10,10) | +35.2 | +35.0 |

ΔE<sub>SQ</sub> / meV

| Active space | cc-pVTZ · BH\&HLYP | def2-TZVP · BH\&HLYP |
| - | - | - |
| SSR(4,4) | +13.9 | +13.9 |
| SSR(6,6) | +52.7 | +52.5 |
| SSR(8,8) | +88.2 | +87.8 |
| SSR(10,10) | +80.2 | +79.9 |

T1, Q1: lowest state with 2S = 2, 4; positive: above S0.

## Spin sectors

Lowest state per spin sector, E − E(lowest) / meV

| Basis · functional | Active space | 2S = 0 | 2S = 2 | 2S = 4 | 2S = 6 | 2S = 8 | 2S = 10 |
| - | - | - | - | - | - | - | - |
| cc-pVTZ · BH\&HLYP | SSR(4,4) | S0 0.9 | T1 0.0 | Q1 14.8 | n/a | n/a | n/a |
| | SSR(6,6) | S0 0.0 | T1 15.7 | Q1 52.7 | Sp1 1476.4 | n/a | n/a |
| | SSR(8,8) | S0 0.0 | T1 30.2 | Q1 88.2 | Sp1 1409.4 | N1 3897.6 | n/a |
| | SSR(10,10) | S0 0.0 | T1 35.2 | Q1 80.2 | Sp1 1298.8 | N1 3943.8 | U1 7317.7 |
| def2-TZVP · BH\&HLYP | SSR(4,4) | S0 0.9 | T1 0.0 | Q1 14.8 | n/a | n/a | n/a |
| | SSR(6,6) | S0 0.0 | T1 15.6 | Q1 52.5 | Sp1 1473.5 | n/a | n/a |
| | SSR(8,8) | S0 0.0 | T1 30.1 | Q1 87.8 | Sp1 1406.3 | N1 3890.4 | n/a |
| | SSR(10,10) | S0 0.0 | T1 35.0 | Q1 79.9 | Sp1 1296.5 | N1 3936.7 | U1 7310.5 |

Lowest SI state of each spin sector 2S in the output and its E − E(lowest) / meV; n/a: the sector is not in the SI of that active space.

## SI states along the ladder

* 2S = 0: S0–S5
* 2S = 2: T1–T3
* 2S = 4: Q1

TTR cc-pVTZ · BH\&HLYP: SI states per active space, E − E(lowest) / meV, 0 to 200, joined across active spaces; numbers in the tables below

TTR def2-TZVP · BH\&HLYP: SI states per active space, E − E(lowest) / meV, 0 to 200, joined across active spaces; numbers in the tables below

S2, S3, S4, S5 lie above the chart (1732 to 1875 meV); in the calculations below.

One column per active space and one level per shown SI state (S0–S5, T1–T3, Q1) below the largest energy gap among them at E − E(lowest) / meV, the lowest computed state of that set and active space at zero; colour = 2S; close levels sit side by side. A line joins a level to one level of the same 2S at the next active space when their leading excitation patterns or density changes ΔD agree (the zethrene rule). The hover gives patterns and ΔD. Every printed root of every spin sector: in the calculations below.

Table: threads per set

cc-pVTZ · BH\&HLYP: threads

| 2S | Active spaces | Threads |
| - | - | - |
| 0 | SSR(4,4) → SSR(6,6) | S0→S0, S1→S1, S2→S3, S3→S5, S4→S4, S5→S2 |
| | SSR(6,6) → SSR(8,8) | S0→S0, S1→S1, S2→S2, S3→S4, S4→S3, S5→S5 |
| | SSR(8,8) → SSR(10,10) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S5 |
| 2 | SSR(4,4) → SSR(6,6) | T1→T1, T2→T2, T3→T3 |
| | SSR(6,6) → SSR(8,8) | T1→T1, T2→T2, T3→T3 |
| | SSR(8,8) → SSR(10,10) | T1→T1, T2→T2, T3→T3 |
| 4 | SSR(4,4) → SSR(6,6) | Q1→Q1 |
| | SSR(6,6) → SSR(8,8) | Q1→Q1 |
| | SSR(8,8) → SSR(10,10) | Q1→Q1 |

def2-TZVP · BH\&HLYP: threads

| 2S | Active spaces | Threads |
| - | - | - |
| 0 | SSR(4,4) → SSR(6,6) | S0→S0, S1→S1, S2→S3, S3→S5, S4→S4, S5→S2 |
| | SSR(6,6) → SSR(8,8) | S0→S0, S1→S1, S2→S2, S3→S4, S4→S3, S5→S5 |
| | SSR(8,8) → SSR(10,10) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S5 |
| 2 | SSR(4,4) → SSR(6,6) | T1→T1, T2→T2, T3→T3 |
| | SSR(6,6) → SSR(8,8) | T1→T1, T2→T2, T3→T3 |
| | SSR(8,8) → SSR(10,10) | T1→T1, T2→T2, T3→T3 |
| 4 | SSR(4,4) → SSR(6,6) | Q1→Q1 |
| | SSR(6,6) → SSR(8,8) | Q1→Q1 |
| | SSR(8,8) → SSR(10,10) | Q1→Q1 |

## Natural occupations

cc-pVTZ · BH\&HLYP

TTR cc-pVTZ · BH\&HLYP, S0: natural occupations per active space in the order printed, 0 to 2; y0, y1

TTR cc-pVTZ · BH\&HLYP, T1: natural occupations per active space in the order printed, 0 to 2

TTR cc-pVTZ · BH\&HLYP, Q1: natural occupations per active space in the order printed, 0 to 2

def2-TZVP · BH\&HLYP

TTR def2-TZVP · BH\&HLYP, S0: natural occupations per active space in the order printed, 0 to 2; y0, y1

TTR def2-TZVP · BH\&HLYP, T1: natural occupations per active space in the order printed, 0 to 2

TTR def2-TZVP · BH\&HLYP, Q1: natural occupations per active space in the order printed, 0 to 2

Natural occupations n<sub>i</sub> of the SI state (0 to 2, the cell is 2), the "occ" line of the output block "Natural occupation numbers and natural orbitals of the active space" in the order printed, centred on the HOMO | LUMO divide (dashed), so an orbital keeps its column along the ladder; y<sub>0</sub> = n<sub>LUNO</sub>, y<sub>1</sub> = n<sub>LUNO+1</sub>, as the code prints them; y<sub>0</sub>, y<sub>1</sub> for S0 only (n/a for T1, Q1); otherwise n/a: no such state or orbital in the SI space of this active space.

Table: natural occupations

cc-pVTZ · BH\&HLYP: natural occupations

| State | Active space | n<sub>i</sub> (slot: n) | y<sub>0</sub> | y<sub>1</sub> |
| - | - | - | - | - |
| S0 | SSR(4,4) | a: 1.1005, b: 1.1005, c: 0.8995, d: 0.8995 | 0.8995 | 0.8995 |
| | SSR(6,6) | a: 1.9530, b: 1.0934, c: 1.0910, d: 0.9090, e: 0.9066, f: 0.0470 | 0.9090 | 0.9066 |
| | SSR(8,8) | a: 1.9765, b: 1.9347, c: 1.1058, d: 1.1027, e: 0.8974, f: 0.8941, g: 0.0656, h: 0.0231 | 0.8974 | 0.8941 |
| | SSR(10,10) | a: 1.9883, b: 1.9737, c: 1.9342, d: 1.0939, e: 1.0909, f: 0.9092, g: 0.9061, h: 0.0663, i: 0.0260, j: 0.0115 | 0.9092 | 0.9061 |
| T1 | SSR(4,4) | a: 1.1105, b: 1.0217, c: 0.9783, d: 0.8895 | n/a | n/a |
| | SSR(6,6) | a: 1.9586, b: 1.0301, c: 1.0943, d: 0.9057, e: 0.9699, f: 0.0414 | n/a | n/a |
| | SSR(8,8) | a: 1.9795, b: 1.9417, c: 1.0919, d: 1.0311, e: 0.9690, f: 0.9082, g: 0.0585, h: 0.0202 | n/a | n/a |
| | SSR(10,10) | a: 1.9881, b: 1.9768, c: 1.9412, d: 1.0835, e: 1.0259, f: 0.9741, g: 0.9165, h: 0.0591, i: 0.0231, j: 0.0116 | n/a | n/a |
| Q1 | SSR(4,4) | a: 1.0000, b: 1.0000, c: 1.0000, d: 1.0000 | n/a | n/a |
| | SSR(6,6) | a: 1.9768, b: 0.9993, c: 1.0018, d: 0.9982, e: 1.0006, f: 0.0233 | n/a | n/a |
| | SSR(8,8) | a: 1.9842, b: 1.9622, c: 1.0006, d: 1.0031, e: 0.9969, f: 0.9994, g: 0.0375, h: 0.0161 | n/a | n/a |
| | SSR(10,10) | a: 1.9872, b: 1.9795, c: 1.9590, d: 1.0006, e: 1.0039, f: 0.9960, g: 0.9994, h: 0.0409, i: 0.0215, j: 0.0118 | n/a | n/a |

def2-TZVP · BH\&HLYP: natural occupations

| State | Active space | n<sub>i</sub> (slot: n) | y<sub>0</sub> | y<sub>1</sub> |
| - | - | - | - | - |
| S0 | SSR(4,4) | a: 1.1005, b: 1.1005, c: 0.8995, d: 0.8995 | 0.8995 | 0.8995 |
| | SSR(6,6) | a: 1.9530, b: 1.0934, c: 1.0910, d: 0.9090, e: 0.9066, f: 0.0470 | 0.9090 | 0.9066 |
| | SSR(8,8) | a: 1.9766, b: 1.9348, c: 1.1058, d: 1.1027, e: 0.8974, f: 0.8941, g: 0.0655, h: 0.0230 | 0.8974 | 0.8941 |
| | SSR(10,10) | a: 1.9884, b: 1.9738, c: 1.9343, d: 1.0940, e: 1.0910, f: 0.9091, g: 0.9059, h: 0.0662, i: 0.0259, j: 0.0115 | 0.9091 | 0.9059 |
| T1 | SSR(4,4) | a: 1.1105, b: 1.0217, c: 0.9783, d: 0.8895 | n/a | n/a |
| | SSR(6,6) | a: 1.9586, b: 1.0301, c: 1.0944, d: 0.9056, e: 0.9699, f: 0.0414 | n/a | n/a |
| | SSR(8,8) | a: 1.9796, b: 1.9418, c: 1.0311, d: 1.0920, e: 0.9081, f: 0.9689, g: 0.0584, h: 0.0201 | n/a | n/a |
| | SSR(10,10) | a: 1.9881, b: 1.9769, c: 1.9413, d: 1.0259, e: 1.0836, f: 0.9164, g: 0.9741, h: 0.0590, i: 0.0230, j: 0.0116 | n/a | n/a |
| Q1 | SSR(4,4) | a: 1.0000, b: 1.0000, c: 1.0000, d: 1.0000 | n/a | n/a |
| | SSR(6,6) | a: 1.9768, b: 0.9992, c: 1.0018, d: 0.9982, e: 1.0006, f: 0.0233 | n/a | n/a |
| | SSR(8,8) | a: 1.9842, b: 1.9623, c: 1.0006, d: 1.0031, e: 0.9969, f: 0.9994, g: 0.0375, h: 0.0160 | n/a | n/a |
| | SSR(10,10) | a: 1.9872, b: 1.9796, c: 1.9591, d: 1.0006, e: 1.0039, f: 0.9960, g: 0.9994, h: 0.0408, i: 0.0214, j: 0.0117 | n/a | n/a |

## Experiment

| Step | Bias / mV | Tip | Measured over | Substrate, T | Source |
| - | - | - | - | - | - |
| step near E<sub>F</sub> | ±9 (text: ~9 meV) | metal tip | molecule, point of Fig. 2c | Au(111), 4.3 K (Fig. 2 caption; Methods: 4.5 K) | [Song et al., Nat. Chem. 2024, 16, 938, p. 940, Fig. 2d; p. 941; Methods](https://doi.org/10.1038/s41557-024-01453-9) |
| state C: molecule in its first spin-excited state and NiCp<sub>2</sub> excited (paper's assignment) | ±13 | NiCp<sub>2</sub>-functionalized tip | corner of the molecule, large tip–sample distance | Au(111), 1.3 K | [Song et al., Nat. Chem. 2024, 16, 938, p. 942, Fig. 4c and caption; p. 943; Methods](https://doi.org/10.1038/s41557-024-01453-9) |

Inelastic electron tunnelling spectroscopy (IETS): steps of dI/dV at the bias values printed in the paper; a step at bias ±V is an excitation of energy e|V|. The calculation is the free molecule in the gas phase.

Models of the papers: step near E<sub>F</sub> read as the singlet–triplet spin excitation ([Song et al., Nat. Chem. 2024, 16, 938, p. 941](https://doi.org/10.1038/s41557-024-01453-9)); CASSCF(4,4), (8,8) and (12,12), def2-TZVP ([Song et al., Nat. Chem. 2024, 16, 938, SI §3.1](https://doi.org/10.1038/s41557-024-01453-9)); DLPNO–NEVPT2 on CASSCF(4,4), def2-SVP: S–T 8 meV ([Song et al., Nat. Chem. 2024, 16, 938, p. 941; Methods](https://doi.org/10.1038/s41557-024-01453-9)); Hubbard CAS-CI, t = −2.8 eV, U = 4.3 eV: S–T 15 meV ([Song et al., Nat. Chem. 2024, 16, 938, SI §3](https://doi.org/10.1038/s41557-024-01453-9)); DFT S–T 42 (TPSS), 70 (TPSSh), 80 (B3LYP), 117 (PBE0), 269 meV (ωB97X-D3), def2-SVP ([Song et al., Nat. Chem. 2024, 16, 938, Suppl. Table 1; SI §2](https://doi.org/10.1038/s41557-024-01453-9)); four-site Heisenberg model, J<sub>12</sub> = 9 meV, J<sub>13</sub> = J<sub>14</sub> = −J<sub>12</sub>; NiCp<sub>2</sub> anisotropy D<sub>Ni</sub> = 4 meV, its own excitation at ±4 mV ([Song et al., Nat. Chem. 2024, 16, 938, SI §5](https://doi.org/10.1038/s41557-024-01453-9)).

## Calculations

One entry per set and active space. Inside: the run line of each job (wall time, machine × cores, peak resident memory, Psi4 commit), SI configurations per spin sector, every printed root per spin sector as E − E(lowest) / meV, and the SA-REKS active orbitals where drawn.

Orbitals: one column per active pair as the code pairs them, antibonding orbital above, bonding below. Contours ±0.01, ±0.02, ±0.04 a.u. in a plane 0.6 Å above the molecular plane; blue + / copper −.

### cc-pVTZ · BH\&HLYP {#cc-pvtz-bh-hlyp}

cc-pVTZ · BH\&HLYP · REKS(4,4) · 2S = 0–4 · lowest T1

SCF+SI 2S = 0–4: wall time 50 min, PC-1\* × 96 cores, peak 219 GiB · Psi4 d40267fc2

SI configurations: 2S = 0: 18, 2S = 2: 11, 2S = 4: 1

Every printed root per spin sector, E − E(lowest) / meV

**2S = 0**, 16 roots: S0 0.9, S1 92.7, S2 1845.4, S3 1864.3, S4 1871.3, S5 1874.8, S6 2743.8, S7 2774.5, S8 3055.5, S9 3061.3, S10 3299.5, S11 3300.1, S12 4137.0, S13 4152.3, S14 7798.4, S15 7798.8

**2S = 2**, 11 roots: T1 0.0, T2 49.0, T3 53.9, T4 1854.1, T5 1870.5, T6 1873.4, T7 1882.3, T8 2734.1, T9 2744.4, T10 3052.3, T11 3058.6

**2S = 4**, 1 roots: Q1 14.8

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(b, c)

![TTR cc-pVTZ · BH\&HLYP REKS(4,4), orbital 372A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_cctz_bhhlyp/44_372A.svg)**c** 372A · 0.8733\
−0.164145

![TTR cc-pVTZ · BH\&HLYP REKS(4,4), orbital 370A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_cctz_bhhlyp/44_370A.svg)**b** 370A · 1.1267\
−0.166416

(a, d)

![TTR cc-pVTZ · BH\&HLYP REKS(4,4), orbital 373A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_cctz_bhhlyp/44_373A.svg)**d** 373A · 0.8732\
−0.164139

![TTR cc-pVTZ · BH\&HLYP REKS(4,4), orbital 371A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_cctz_bhhlyp/44_371A.svg)**a** 371A · 1.1268\
−0.166412

cc-pVTZ · BH\&HLYP · REKS(6,6) · 2S = 0–6 · lowest S0

SCF+SI 2S = 0–6: wall time 1 h 9 min, PC-1\* × 96 cores, peak 226 GiB · Psi4 d40267fc2

SI configurations: 2S = 0: 161, 2S = 2: 153, 2S = 4: 41, 2S = 6: 1

Every printed root per spin sector, E − E(lowest) / meV

**2S = 0**, 20 roots: S0 0.0, S1 138.8, S2 1806.4, S3 1810.4, S4 1822.0, S5 1831.6, S6 1970.5, S7 1971.9, S8 2088.8, S9 2158.1, S10 2284.9, S11 2291.6, S12 2421.0, S13 2537.3, S14 2545.5, S15 2551.1, S16 2601.1, S17 2614.5, S18 2728.7, S19 3063.3

**2S = 2**, 20 roots: T1 15.7, T2 91.1, T3 92.1, T4 1451.2, T5 1797.8, T6 1830.6, T7 1832.3, T8 1857.4, T9 1857.7, T10 1861.3, T11 1924.3, T12 2064.8, T13 2081.6, T14 2097.5, T15 2173.3, T16 2233.9, T17 2277.0, T18 2280.0, T19 2327.5, T20 2332.7

**2S = 4**, 20 roots: Q1 52.7, Q2 1297.8, Q3 1390.4, Q4 1702.5, Q5 2050.7, Q6 2227.1, Q7 2244.1, Q8 2318.6, Q9 2357.5, Q10 2465.5, Q11 3468.9, Q12 3578.1, Q13 3579.5, Q14 3591.7, Q15 3593.9, Q16 3985.1, Q17 4205.5, Q18 4303.4, Q19 4436.4, Q20 4622.4

**2S = 6**, 1 roots: Sp1 1476.4

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(c, d)

![TTR cc-pVTZ · BH\&HLYP REKS(6,6), orbital 372A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_cctz_bhhlyp/66_372A.svg)**d** 372A · 0.8739\
−0.169572

![TTR cc-pVTZ · BH\&HLYP REKS(6,6), orbital 370A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_cctz_bhhlyp/66_370A.svg)**c** 370A · 1.1261\
−0.170608

(b, e)

![TTR cc-pVTZ · BH\&HLYP REKS(6,6), orbital 373A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_cctz_bhhlyp/66_373A.svg)**e** 373A · 0.8739\
−0.169565

![TTR cc-pVTZ · BH\&HLYP REKS(6,6), orbital 371A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_cctz_bhhlyp/66_371A.svg)**b** 371A · 1.1261\
−0.170603

(a, f)

![TTR cc-pVTZ · BH\&HLYP REKS(6,6), orbital 374A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_cctz_bhhlyp/66_374A.svg)**f** 374A · 0.0000\
−0.123301

![TTR cc-pVTZ · BH\&HLYP REKS(6,6), orbital 369A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_cctz_bhhlyp/66_369A.svg)**a** 369A · 2.0000\
−0.192333

cc-pVTZ · BH\&HLYP · REKS(8,8) · 2S = 0–8 · lowest S0

SCF+SI 2S = 0–8: wall time 1 h 21 min, PC-1\* × 96 cores, peak 228 GiB · Psi4 d40267fc2

SI configurations: 2S = 0: 1 934, 2S = 2: 2 524, 2S = 4: 1 172, 2S = 6: 199, 2S = 8: 1

Every printed root per spin sector, E − E(lowest) / meV

**2S = 0**, 20 roots: S0 0.0, S1 152.9, S2 1747.2, S3 1755.3, S4 1760.5, S5 1770.8, S6 1871.8, S7 1963.3, S8 2043.9, S9 2060.7, S10 2136.2, S11 2144.4, S12 2188.4, S13 2221.9, S14 2315.3, S15 2356.8, S16 2376.2, S17 2379.0, S18 2456.1, S19 2645.9

**2S = 2**, 20 roots: T1 30.2, T2 95.4, T3 121.1, T4 1503.9, T5 1733.2, T6 1768.4, T7 1799.4, T8 1804.4, T9 1818.1, T10 1819.7, T11 1820.8, T12 1832.6, T13 1906.1, T14 1939.6, T15 2045.0, T16 2072.1, T17 2099.1, T18 2149.9, T19 2150.1, T20 2233.3

**2S = 4**, 20 roots: Q1 88.2, Q2 1269.9, Q3 1328.8, Q4 1537.6, Q5 1768.5, Q6 1938.4, Q7 1946.0, Q8 2126.3, Q9 2147.1, Q10 2241.8, Q11 2276.8, Q12 2317.2, Q13 2331.0, Q14 2518.1, Q15 2821.8, Q16 2934.7, Q17 2952.9, Q18 3026.1, Q19 3112.4, Q20 3185.0

**2S = 6**, 20 roots: Sp1 1409.4, Sp2 1961.4, Sp3 2939.7, Sp4 3264.1, Sp5 3680.9, Sp6 3741.6, Sp7 3987.5, Sp8 4009.8, Sp9 4120.9, Sp10 4146.1, Sp11 4259.9, Sp12 4559.5, Sp13 4793.7, Sp14 5364.0, Sp15 5393.9, Sp16 5447.9, Sp17 5451.5, Sp18 5557.8, Sp19 5598.2, Sp20 6156.7

**2S = 8**, 1 roots: N1 3897.6

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(d, e)

![TTR cc-pVTZ · BH\&HLYP REKS(8,8), orbital 372A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_cctz_bhhlyp/88_372A.svg)**e** 372A · 0.8786\
−0.173051

![TTR cc-pVTZ · BH\&HLYP REKS(8,8), orbital 370A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_cctz_bhhlyp/88_370A.svg)**d** 370A · 1.1214\
−0.173266

(c, f)

![TTR cc-pVTZ · BH\&HLYP REKS(8,8), orbital 373A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_cctz_bhhlyp/88_373A.svg)**f** 373A · 0.8785\
−0.173045

![TTR cc-pVTZ · BH\&HLYP REKS(8,8), orbital 371A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_cctz_bhhlyp/88_371A.svg)**c** 371A · 1.1215\
−0.173261

(b, g)

![TTR cc-pVTZ · BH\&HLYP REKS(8,8), orbital 374A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_cctz_bhhlyp/88_374A.svg)**g** 374A · 0.0000\
−0.130257

![TTR cc-pVTZ · BH\&HLYP REKS(8,8), orbital 369A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_cctz_bhhlyp/88_369A.svg)**b** 369A · 2.0000\
−0.191927

(a, h)

![TTR cc-pVTZ · BH\&HLYP REKS(8,8), orbital 375A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_cctz_bhhlyp/88_375A.svg)**h** 375A · 0.0000\
−0.100826

![TTR cc-pVTZ · BH\&HLYP REKS(8,8), orbital 368A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_cctz_bhhlyp/88_368A.svg)**a** 368A · 2.0000\
−0.221797

cc-pVTZ · BH\&HLYP · REKS(10,10) · 2S = 0–10 · lowest S0

SCF+SI 2S = 0–10: wall time 1 h 43 min, PC-1\* × 96 cores, peak 198 GiB · Psi4 d40267fc2

SI configurations: 2S = 0: 29 082, 2S = 2: 48 090, 2S = 4: 31 275, 2S = 6: 9 635, 2S = 8: 1 209, 2S = 10: 1

Every printed root per spin sector, E − E(lowest) / meV

**2S = 0**, 20 roots: S0 0.0, S1 167.8, S2 1737.1, S3 1744.7, S4 1775.8, S5 1790.2, S6 1807.4, S7 1886.9, S8 1889.7, S9 1960.5, S10 2077.1, S11 2088.1, S12 2119.8, S13 2184.0, S14 2187.1, S15 2230.8, S16 2306.4, S17 2315.0, S18 2332.6, S19 2453.6

**2S = 2**, 20 roots: T1 35.2, T2 105.3, T3 134.0, T4 1425.1, T5 1676.3, T6 1732.2, T7 1743.2, T8 1743.5, T9 1795.6, T10 1804.1, T11 1858.9, T12 1859.3, T13 1890.2, T14 1898.8, T15 1970.7, T16 1984.8, T17 2015.1, T18 2060.2, T19 2070.0, T20 2070.1

**2S = 4**, 20 roots: Q1 80.2, Q2 1128.4, Q3 1276.4, Q4 1478.9, Q5 1736.8, Q6 1753.6, Q7 1847.8, Q8 1907.8, Q9 2040.3, Q10 2112.9, Q11 2196.4, Q12 2216.3, Q13 2310.6, Q14 2514.5, Q15 2521.4, Q16 2619.0, Q17 2665.8, Q18 2770.7, Q19 2806.8, Q20 2823.3

**2S = 6**, 20 roots: Sp1 1298.8, Sp2 1989.4, Sp3 2783.9, Sp4 2855.9, Sp5 3045.3, Sp6 3051.9, Sp7 3492.5, Sp8 3630.6, Sp9 3672.2, Sp10 3834.0, Sp11 3925.3, Sp12 3951.2, Sp13 3952.7, Sp14 4058.4, Sp15 4088.9, Sp16 4238.9, Sp17 4243.0, Sp18 4385.7, Sp19 4515.7, Sp20 4571.3

**2S = 8**, 20 roots: N1 3943.8, N2 4460.2, N3 4984.3, N4 5204.3, N5 5539.7, N6 5587.8, N7 5667.4, N8 6609.1, N9 6849.6, N10 6925.6, N11 7048.7, N12 7223.7, N13 7348.7, N14 7381.9, N15 7578.4, N16 7588.2, N17 7619.1, N18 7713.6, N19 7782.2, N20 8193.6

**2S = 10**, 1 roots: U1 7317.7

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(e, f)

![TTR cc-pVTZ · BH\&HLYP REKS(10,10), orbital 370A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_cctz_bhhlyp/1010_370A.svg)**f** 370A · 0.8834\
−0.175727

![TTR cc-pVTZ · BH\&HLYP REKS(10,10), orbital 372A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_cctz_bhhlyp/1010_372A.svg)**e** 372A · 1.1166\
−0.175455

(d, g)

![TTR cc-pVTZ · BH\&HLYP REKS(10,10), orbital 371A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_cctz_bhhlyp/1010_371A.svg)**g** 371A · 0.8833\
−0.175722

![TTR cc-pVTZ · BH\&HLYP REKS(10,10), orbital 373A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_cctz_bhhlyp/1010_373A.svg)**d** 373A · 1.1167\
−0.175452

(c, h)

![TTR cc-pVTZ · BH\&HLYP REKS(10,10), orbital 374A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_cctz_bhhlyp/1010_374A.svg)**h** 374A · 0.0000\
−0.130976

![TTR cc-pVTZ · BH\&HLYP REKS(10,10), orbital 369A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_cctz_bhhlyp/1010_369A.svg)**c** 369A · 2.0000\
−0.192361

(b, i)

![TTR cc-pVTZ · BH\&HLYP REKS(10,10), orbital 375A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_cctz_bhhlyp/1010_375A.svg)**i** 375A · 0.0000\
−0.103752

![TTR cc-pVTZ · BH\&HLYP REKS(10,10), orbital 368A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_cctz_bhhlyp/1010_368A.svg)**b** 368A · 2.0000\
−0.221809

(a, j)

![TTR cc-pVTZ · BH\&HLYP REKS(10,10), orbital 376A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_cctz_bhhlyp/1010_376A.svg)**j** 376A · 0.0000\
−0.085133

![TTR cc-pVTZ · BH\&HLYP REKS(10,10), orbital 367A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_cctz_bhhlyp/1010_367A.svg)**a** 367A · 2.0000\
−0.235135

### def2-TZVP · BH\&HLYP {#def2-tzvp-bh-hlyp}

def2-TZVP · BH\&HLYP · REKS(4,4) · 2S = 0–4 · lowest T1

SCF+SI 2S = 0–4: wall time 43 min, PC-1\* × 96 cores, peak 293 GiB · Psi4 d40267fc2

SI configurations: 2S = 0: 18, 2S = 2: 11, 2S = 4: 1

Every printed root per spin sector, E − E(lowest) / meV

**2S = 0**, 16 roots: S0 0.9, S1 92.7, S2 1840.4, S3 1859.2, S4 1866.2, S5 1869.7, S6 2736.4, S7 2767.1, S8 3047.7, S9 3053.4, S10 3289.2, S11 3289.9, S12 4126.8, S13 4142.1, S14 7778.2, S15 7778.8

**2S = 2**, 11 roots: T1 0.0, T2 49.0, T3 53.9, T4 1848.9, T5 1865.3, T6 1868.3, T7 1877.2, T8 2726.7, T9 2737.1, T10 3044.5, T11 3050.8

**2S = 4**, 1 roots: Q1 14.8

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(b, c)

![TTR def2-TZVP · BH\&HLYP REKS(4,4), orbital 372A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_tzvp_bhhlyp/44_372A.svg)**c** 372A · 0.8732\
−0.164885

![TTR def2-TZVP · BH\&HLYP REKS(4,4), orbital 370A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_tzvp_bhhlyp/44_370A.svg)**b** 370A · 1.1268\
−0.167148

(a, d)

![TTR def2-TZVP · BH\&HLYP REKS(4,4), orbital 373A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_tzvp_bhhlyp/44_373A.svg)**d** 373A · 0.8731\
−0.164880

![TTR def2-TZVP · BH\&HLYP REKS(4,4), orbital 371A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_tzvp_bhhlyp/44_371A.svg)**a** 371A · 1.1269\
−0.167145

def2-TZVP · BH\&HLYP · REKS(6,6) · 2S = 0–6 · lowest S0

SCF+SI 2S = 0–6: wall time 1 h 19 min, PC-1\* × 96 cores, peak 294 GiB · Psi4 d40267fc2

SI configurations: 2S = 0: 161, 2S = 2: 153, 2S = 4: 41, 2S = 6: 1

Every printed root per spin sector, E − E(lowest) / meV

**2S = 0**, 20 roots: S0 0.0, S1 138.6, S2 1801.3, S3 1805.3, S4 1816.9, S5 1826.5, S6 1965.6, S7 1967.3, S8 2084.1, S9 2152.4, S10 2280.1, S11 2286.7, S12 2415.3, S13 2530.8, S14 2540.1, S15 2544.4, S16 2594.5, S17 2608.9, S18 2722.0, S19 3054.9

**2S = 2**, 20 roots: T1 15.6, T2 91.0, T3 91.9, T4 1447.3, T5 1793.6, T6 1825.8, T7 1828.0, T8 1852.3, T9 1852.6, T10 1856.2, T11 1920.3, T12 2060.4, T13 2076.6, T14 2092.6, T15 2168.1, T16 2228.0, T17 2272.1, T18 2274.6, T19 2321.9, T20 2327.5

**2S = 4**, 20 roots: Q1 52.5, Q2 1294.6, Q3 1387.1, Q4 1699.2, Q5 2046.6, Q6 2222.0, Q7 2239.4, Q8 2313.0, Q9 2352.1, Q10 2459.4, Q11 3461.0, Q12 3569.6, Q13 3571.0, Q14 3583.3, Q15 3585.4, Q16 3975.6, Q17 4195.5, Q18 4294.0, Q19 4425.8, Q20 4611.7

**2S = 6**, 1 roots: Sp1 1473.5

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(c, d)

![TTR def2-TZVP · BH\&HLYP REKS(6,6), orbital 372A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_tzvp_bhhlyp/66_372A.svg)**d** 372A · 0.8739\
−0.170300

![TTR def2-TZVP · BH\&HLYP REKS(6,6), orbital 370A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_tzvp_bhhlyp/66_370A.svg)**c** 370A · 1.1261\
−0.171331

(b, e)

![TTR def2-TZVP · BH\&HLYP REKS(6,6), orbital 373A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_tzvp_bhhlyp/66_373A.svg)**e** 373A · 0.8738\
−0.170294

![TTR def2-TZVP · BH\&HLYP REKS(6,6), orbital 371A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_tzvp_bhhlyp/66_371A.svg)**b** 371A · 1.1262\
−0.171327

(a, f)

![TTR def2-TZVP · BH\&HLYP REKS(6,6), orbital 374A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_tzvp_bhhlyp/66_374A.svg)**f** 374A · 0.0000\
−0.124158

![TTR def2-TZVP · BH\&HLYP REKS(6,6), orbital 369A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_tzvp_bhhlyp/66_369A.svg)**a** 369A · 2.0000\
−0.193047

def2-TZVP · BH\&HLYP · REKS(8,8) · 2S = 0–8 · lowest S0

SCF+SI 2S = 0–8: wall time 1 h 38 min, PC-1\* × 96 cores, peak 296 GiB · Psi4 d40267fc2

SI configurations: 2S = 0: 1 934, 2S = 2: 2 524, 2S = 4: 1 172, 2S = 6: 199, 2S = 8: 1

Every printed root per spin sector, E − E(lowest) / meV

**2S = 0**, 20 roots: S0 0.0, S1 152.6, S2 1742.3, S3 1750.4, S4 1755.5, S5 1765.8, S6 1867.4, S7 1958.7, S8 2038.4, S9 2054.7, S10 2131.1, S11 2139.4, S12 2183.2, S13 2216.0, S14 2309.7, S15 2350.4, S16 2369.7, S17 2372.0, S18 2448.6, S19 2638.9

**2S = 2**, 20 roots: T1 30.1, T2 95.2, T3 120.7, T4 1499.9, T5 1729.4, T6 1764.1, T7 1794.6, T8 1799.9, T9 1813.3, T10 1814.6, T11 1815.7, T12 1828.1, T13 1902.0, T14 1934.6, T15 2039.9, T16 2066.8, T17 2092.7, T18 2144.2, T19 2144.6, T20 2227.3

**2S = 4**, 20 roots: Q1 87.8, Q2 1266.9, Q3 1325.9, Q4 1534.7, Q5 1765.2, Q6 1933.6, Q7 1941.8, Q8 2120.2, Q9 2141.4, Q10 2235.9, Q11 2271.0, Q12 2310.9, Q13 2325.4, Q14 2511.9, Q15 2814.5, Q16 2929.2, Q17 2947.3, Q18 3019.2, Q19 3106.8, Q20 3179.4

**2S = 6**, 20 roots: Sp1 1406.3, Sp2 1957.5, Sp3 2934.6, Sp4 3257.9, Sp5 3673.1, Sp6 3734.4, Sp7 3978.0, Sp8 4001.0, Sp9 4112.7, Sp10 4136.8, Sp11 4251.5, Sp12 4549.7, Sp13 4783.2, Sp14 5353.6, Sp15 5382.9, Sp16 5437.3, Sp17 5441.6, Sp18 5546.1, Sp19 5586.5, Sp20 6144.1

**2S = 8**, 1 roots: N1 3890.4

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(d, e)

![TTR def2-TZVP · BH\&HLYP REKS(8,8), orbital 372A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_tzvp_bhhlyp/88_372A.svg)**e** 372A · 0.8785\
−0.173769

![TTR def2-TZVP · BH\&HLYP REKS(8,8), orbital 370A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_tzvp_bhhlyp/88_370A.svg)**d** 370A · 1.1215\
−0.173981

(c, f)

![TTR def2-TZVP · BH\&HLYP REKS(8,8), orbital 373A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_tzvp_bhhlyp/88_373A.svg)**f** 373A · 0.8784\
−0.173764

![TTR def2-TZVP · BH\&HLYP REKS(8,8), orbital 371A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_tzvp_bhhlyp/88_371A.svg)**c** 371A · 1.1216\
−0.173978

(b, g)

![TTR def2-TZVP · BH\&HLYP REKS(8,8), orbital 374A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_tzvp_bhhlyp/88_374A.svg)**g** 374A · 0.0000\
−0.131116

![TTR def2-TZVP · BH\&HLYP REKS(8,8), orbital 369A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_tzvp_bhhlyp/88_369A.svg)**b** 369A · 2.0000\
−0.192647

(a, h)

![TTR def2-TZVP · BH\&HLYP REKS(8,8), orbital 375A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_tzvp_bhhlyp/88_375A.svg)**h** 375A · 0.0000\
−0.101756

![TTR def2-TZVP · BH\&HLYP REKS(8,8), orbital 368A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_tzvp_bhhlyp/88_368A.svg)**a** 368A · 2.0000\
−0.222498

def2-TZVP · BH\&HLYP · REKS(10,10) · 2S = 0–10 · lowest S0

SCF+SI 2S = 0–10: wall time 2 h 47 min, PC-1\* × 96 cores, peak 201 GiB · Psi4 d40267fc2

SI configurations: 2S = 0: 29 082, 2S = 2: 48 090, 2S = 4: 31 275, 2S = 6: 9 635, 2S = 8: 1 209, 2S = 10: 1

Every printed root per spin sector, E − E(lowest) / meV

**2S = 0**, 20 roots: S0 0.0, S1 167.3, S2 1732.4, S3 1740.1, S4 1771.7, S5 1785.1, S6 1802.4, S7 1882.0, S8 1885.5, S9 1955.2, S10 2072.1, S11 2083.4, S12 2115.1, S13 2178.7, S14 2182.0, S15 2224.9, S16 2300.7, S17 2309.0, S18 2326.6, S19 2449.6

**2S = 2**, 20 roots: T1 35.0, T2 105.1, T3 133.5, T4 1421.5, T5 1672.5, T6 1728.1, T7 1739.1, T8 1739.4, T9 1791.6, T10 1799.2, T11 1853.5, T12 1854.1, T13 1885.5, T14 1895.1, T15 1965.3, T16 1980.2, T17 2010.1, T18 2055.1, T19 2064.8, T20 2065.4

**2S = 4**, 20 roots: Q1 79.9, Q2 1126.1, Q3 1273.8, Q4 1476.2, Q5 1733.7, Q6 1750.2, Q7 1843.5, Q8 1903.5, Q9 2035.4, Q10 2108.2, Q11 2191.1, Q12 2211.0, Q13 2305.3, Q14 2508.6, Q15 2517.6, Q16 2617.1, Q17 2661.6, Q18 2765.7, Q19 2802.1, Q20 2820.8

**2S = 6**, 20 roots: Sp1 1296.5, Sp2 1985.6, Sp3 2779.4, Sp4 2853.5, Sp5 3042.8, Sp6 3047.1, Sp7 3489.4, Sp8 3623.4, Sp9 3666.4, Sp10 3825.9, Sp11 3921.2, Sp12 3944.5, Sp13 3948.3, Sp14 4050.0, Sp15 4081.2, Sp16 4232.0, Sp17 4238.1, Sp18 4379.1, Sp19 4508.9, Sp20 4563.3

**2S = 8**, 20 roots: N1 3936.7, N2 4455.6, N3 4978.3, N4 5199.8, N5 5532.8, N6 5583.2, N7 5660.9, N8 6603.1, N9 6843.1, N10 6916.2, N11 7038.8, N12 7213.3, N13 7340.3, N14 7374.1, N15 7565.9, N16 7579.4, N17 7609.8, N18 7703.9, N19 7771.8, N20 8182.7

**2S = 10**, 1 roots: U1 7310.5

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(e, f)

![TTR def2-TZVP · BH\&HLYP REKS(10,10), orbital 370A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_tzvp_bhhlyp/1010_370A.svg)**f** 370A · 0.8833\
−0.176436

![TTR def2-TZVP · BH\&HLYP REKS(10,10), orbital 372A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_tzvp_bhhlyp/1010_372A.svg)**e** 372A · 1.1167\
−0.176163

(d, g)

![TTR def2-TZVP · BH\&HLYP REKS(10,10), orbital 371A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_tzvp_bhhlyp/1010_371A.svg)**g** 371A · 0.8832\
−0.176433

![TTR def2-TZVP · BH\&HLYP REKS(10,10), orbital 373A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_tzvp_bhhlyp/1010_373A.svg)**d** 373A · 1.1168\
−0.176160

(c, h)

![TTR def2-TZVP · BH\&HLYP REKS(10,10), orbital 374A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_tzvp_bhhlyp/1010_374A.svg)**h** 374A · 0.0000\
−0.131836

![TTR def2-TZVP · BH\&HLYP REKS(10,10), orbital 369A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_tzvp_bhhlyp/1010_369A.svg)**c** 369A · 2.0000\
−0.193079

(b, i)

![TTR def2-TZVP · BH\&HLYP REKS(10,10), orbital 375A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_tzvp_bhhlyp/1010_375A.svg)**i** 375A · 0.0000\
−0.104677

![TTR def2-TZVP · BH\&HLYP REKS(10,10), orbital 368A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_tzvp_bhhlyp/1010_368A.svg)**b** 368A · 2.0000\
−0.222509

(a, j)

![TTR def2-TZVP · BH\&HLYP REKS(10,10), orbital 376A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_tzvp_bhhlyp/1010_376A.svg)**j** 376A · 0.0000\
−0.085924

![TTR def2-TZVP · BH\&HLYP REKS(10,10), orbital 367A](https://reksstudio.github.io/v2/figures/scale/orb/TTR_tzvp_bhhlyp/1010_367A.svg)**a** 367A · 2.0000\
−0.235857

\* PC-1: 2 × 48-core AMD EPYC 9475F (Zen 5), 96 cores, 384 GB

[← TNS](https://reksstudio.github.io/v2/main/results/large-molecules/tns/index.md) · [Back to the systems](https://reksstudio.github.io/v2/main/results/large-molecules/index.md#c-ttr)
