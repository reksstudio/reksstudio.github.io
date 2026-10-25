# TNS: triangulene nanostar — Large molecules — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/large-molecules/tns/>

Psi4 builds of these outputs: 0b7a4f5b4, 1b68aa1f5, 2acf2c145, 4c3025f7c, 5a77936fa, 72ce4d58b, 8c95db042, a5ccb08fa, d40267fc2, d5586d10a, e95c2d234, f31cf1f94 (kk/reks.v42), named on each run line. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# Triangulene nanostar (TNS)

C<sub>132</sub>H<sub>60</sub>, 192 atoms; SA-REKS and SI-SA-REKS (SSR) at REKS(12,12); sets 6-31G(d) (2100 basis functions) · BH\&HLYP, HF; def2-TZVP (4452) · BH\&HLYP, HF.

[6-31G(d) · BH\&HLYP REKS(12,12) details](#6-31g-d-bh-hlyp-1212) · [6-31G(d) · HF REKS(12,12) details](#6-31g-d-hf-1212) · [def2-TZVP · BH\&HLYP REKS(12,12) details](#def2-tzvp-bh-hlyp-1212) · [def2-TZVP · HF REKS(12,12) details](#def2-tzvp-hf-1212)

[Spin gaps](#gaps) · [Spin sectors](#spins) · [SI states](#states) · [Natural occupations](#occupations) · [Experiment](#experiment) · [Calculations](#calculations)

![TNS: drawing of the calculated geometry](https://reksstudio.github.io/v2/figures/scale/mol/TNS.svg)

Calculated geometry, 16 px/Å: explicit hydrogens, no bond orders.

* C
* H

## Spin gaps

ΔE<sub>ST</sub> = E(T1) − E(S0), ΔE<sub>SQ</sub> = E(Q1) − E(S0)

ΔE<sub>ST</sub>, ΔE<sub>SQ</sub> / meV at SSR(12,12)

| Basis · functional | ΔE<sub>ST</sub> | ΔE<sub>SQ</sub> |
| - | - | - |
| 6-31G(d) · BH\&HLYP | −28.9 | −0.8 |
| 6-31G(d) · HF | −77.0 | −93.0 |
| def2-TZVP · BH\&HLYP | −51.4 | −23.8 |
| def2-TZVP · HF | −85.4 | −101.6 |

T1, Q1: lowest state with 2S = 2, 4; positive: above S0.

## Spin sectors

Lowest state per spin sector, E − E(lowest) / meV

| Basis · functional | Active space | 2S = 0 | 2S = 2 | 2S = 4 | 2S = 6 | 2S = 8 | 2S = 10 | 2S = 12 |
| - | - | - | - | - | - | - | - | - |
| 6-31G(d) · BH\&HLYP | SSR(12,12) | S0 28.9 | T1 0.0 | Q1 28.1 | Sp1 188.7 | N1 411.1 | U1 552.8 | Tr1 1025.0 |
| 6-31G(d) · HF | SSR(12,12) | S0 93.0 | T1 16.0 | Q1 0.0 | Sp1 9.0 | N1 22.3 | U1 39.7 | Tr1 63.1 |
| def2-TZVP · BH\&HLYP | SSR(12,12) | S0 51.4 | T1 0.0 | Q1 27.6 | Sp1 199.3 | N1 438.4 | U1 736.8 | Tr1 1087.8 |
| def2-TZVP · HF | SSR(12,12) | S0 101.6 | T1 16.2 | Q1 0.0 | Sp1 13.9 | N1 33.6 | U1 59.0 | Tr1 92.4 |

Lowest SI state of each spin sector 2S in the output and its E − E(lowest) / meV; n/a: the sector is not in the SI of that active space.

## SI states at SSR(12,12)

* 2S = 0: S0–S5
* 2S = 2: T1–T3
* 2S = 4: Q1

TNS SSR(12,12): SI states per set, E − E(lowest) / meV, 0 to 3000; numbers in the tables below

One column per set and one level per shown SI state (S0–S5, T1–T3, Q1) at E − E(lowest) / meV, the lowest computed state of that set and active space at zero; colour = 2S; close levels sit side by side. The hover gives patterns and ΔD. Every printed root of every spin sector: in the calculations below.

## Natural occupations

6-31G(d) · BH\&HLYP

TNS 6-31G(d) · BH\&HLYP, S0: natural occupations per active space in the order printed, 0 to 2; y0, y1

TNS 6-31G(d) · BH\&HLYP, T1: natural occupations per active space in the order printed, 0 to 2

TNS 6-31G(d) · BH\&HLYP, Q1: natural occupations per active space in the order printed, 0 to 2

6-31G(d) · HF

TNS 6-31G(d) · HF, S0: natural occupations per active space in the order printed, 0 to 2; y0, y1

TNS 6-31G(d) · HF, T1: natural occupations per active space in the order printed, 0 to 2

TNS 6-31G(d) · HF, Q1: natural occupations per active space in the order printed, 0 to 2

def2-TZVP · BH\&HLYP

TNS def2-TZVP · BH\&HLYP, S0: natural occupations per active space in the order printed, 0 to 2; y0, y1

TNS def2-TZVP · BH\&HLYP, T1: natural occupations per active space in the order printed, 0 to 2

TNS def2-TZVP · BH\&HLYP, Q1: natural occupations per active space in the order printed, 0 to 2

def2-TZVP · HF

TNS def2-TZVP · HF, S0: natural occupations per active space in the order printed, 0 to 2; y0, y1

TNS def2-TZVP · HF, T1: natural occupations per active space in the order printed, 0 to 2

TNS def2-TZVP · HF, Q1: natural occupations per active space in the order printed, 0 to 2

Natural occupations n<sub>i</sub> of the SI state (0 to 2, the cell is 2), the "occ" line of the output block "Natural occupation numbers and natural orbitals of the active space" in the order printed, centred on the HOMO | LUMO divide (dashed), so an orbital keeps its column along the ladder; y<sub>0</sub> = n<sub>LUNO</sub>, y<sub>1</sub> = n<sub>LUNO+1</sub>, as the code prints them; y<sub>0</sub>, y<sub>1</sub> for S0 only (n/a for T1, Q1); otherwise n/a: no such state or orbital in the SI space of this active space.

Table: natural occupations

6-31G(d) · BH\&HLYP: natural occupations

| State | Active space | n<sub>i</sub> (slot: n) | y<sub>0</sub> | y<sub>1</sub> |
| - | - | - | - | - |
| S0 | SSR(12,12) | a: 1.2819, b: 1.2026, c: 1.2049, d: 1.1127, e: 1.1292, f: 1.1084, g: 0.8915, h: 0.8705, i: 0.8871, j: 0.7952, k: 0.7975, l: 0.7185 | 0.8915 | 0.8871 |
| T1 | SSR(12,12) | a: 1.2072, b: 1.1620, c: 1.1624, d: 1.0937, e: 1.0984, f: 1.0765, g: 0.9235, h: 0.9016, i: 0.9063, j: 0.8375, k: 0.8380, l: 0.7929 | n/a | n/a |
| Q1 | SSR(12,12) | a: 1.1652, b: 1.1297, c: 1.1246, d: 1.0734, e: 1.0739, f: 1.0573, g: 0.9427, h: 0.9259, i: 0.9264, j: 0.8755, k: 0.8702, l: 0.8351 | n/a | n/a |

6-31G(d) · HF: natural occupations

| State | Active space | n<sub>i</sub> (slot: n) | y<sub>0</sub> | y<sub>1</sub> |
| - | - | - | - | - |
| S0 | SSR(12,12) | a: 1.2076, b: 1.1385, c: 1.1253, d: 1.1258, e: 1.0926, f: 1.0985, g: 0.9014, h: 0.9075, i: 0.8741, j: 0.8747, k: 0.8614, l: 0.7926 | 0.9075 | 0.9014 |
| T1 | SSR(12,12) | a: 1.1498, b: 1.1169, c: 1.1081, d: 1.0772, e: 1.0801, f: 1.0767, g: 0.9233, h: 0.9199, i: 0.9229, j: 0.8919, k: 0.8829, l: 0.8503 | n/a | n/a |
| Q1 | SSR(12,12) | a: 1.1177, b: 1.0958, c: 1.0885, d: 1.0588, e: 1.0632, f: 1.0585, g: 0.9415, h: 0.9368, i: 0.9412, j: 0.9115, k: 0.9041, l: 0.8824 | n/a | n/a |

def2-TZVP · BH\&HLYP: natural occupations

| State | Active space | n<sub>i</sub> (slot: n) | y<sub>0</sub> | y<sub>1</sub> |
| - | - | - | - | - |
| S0 | SSR(12,12) | a: 1.3386, b: 1.2431, c: 1.2427, d: 1.1630, e: 1.1409, f: 1.1228, g: 0.8770, h: 0.8588, i: 0.8364, j: 0.7576, k: 0.7570, l: 0.6621 | 0.8770 | 0.8588 |
| T1 | SSR(12,12) | a: 1.2518, b: 1.1992, c: 1.1975, d: 1.1201, e: 1.1207, f: 1.0952, g: 0.9047, h: 0.8793, i: 0.8798, j: 0.8026, k: 0.8009, l: 0.7483 | n/a | n/a |
| Q1 | SSR(12,12) | a: 1.2062, b: 1.1608, c: 1.1527, d: 1.0921, e: 1.0893, f: 1.0724, g: 0.9272, h: 0.9107, i: 0.9079, j: 0.8478, k: 0.8391, l: 0.7940 | n/a | n/a |

def2-TZVP · HF: natural occupations

| State | Active space | n<sub>i</sub> (slot: n) | y<sub>0</sub> | y<sub>1</sub> |
| - | - | - | - | - |
| S0 | SSR(12,12) | a: 1.2414, b: 1.1632, c: 1.1536, d: 1.1469, e: 1.1175, f: 1.1224, g: 0.8775, h: 0.8825, i: 0.8530, j: 0.8463, k: 0.8366, l: 0.7589 | 0.8825 | 0.8775 |
| T1 | SSR(12,12) | a: 1.1817, b: 1.1433, c: 1.1348, d: 1.0961, e: 1.1024, f: 1.0971, g: 0.9029, h: 0.8976, i: 0.9040, j: 0.8652, k: 0.8565, l: 0.8185 | n/a | n/a |
| Q1 | SSR(12,12) | a: 1.1458, b: 1.1186, c: 1.1114, d: 1.0742, e: 1.0814, f: 1.0749, g: 0.9251, h: 0.9186, i: 0.9258, j: 0.8886, k: 0.8812, l: 0.8543 | n/a | n/a |

## Experiment

| Step | Bias / mV |
| - | - |
| E<sub>1</sub>, step height ≈ 35 % | ±14(1) |
| E<sub>2</sub>, step height ≈ 35 % | ±42(2) |
| E<sub>3</sub>, step height \< 7 % | ±80(2) |

Tip: not stated (CO tip for bond-resolved images); Measured over: edge of a triangulene unit (Fig. 3b); Substrate, T: Au(111), 5 K; Source: [Hieulle et al., Angew. Chem. Int. Ed. 2021, 60, 25224, p. 25227; Fig. 3c (p. 25228); SI §2.1](https://doi.org/10.1002/anie.202108301). Inelastic electron tunnelling spectroscopy (IETS): steps of dI/dV at the bias values printed in the paper; a step at bias ±V is an excitation of energy e|V|. The calculation is the free molecule in the gas phase.

Models of the papers: steps read as ΔS = 1 transitions from the S<sub>T</sub> = 0 ground state to collective triplet states ([Hieulle et al., Angew. Chem. Int. Ed. 2021, 60, 25224, p. 25227](https://doi.org/10.1002/anie.202108301)); mean-field Hubbard model of the p<sub>z</sub> lattice, t<sub>1</sub> = 2.7 eV, t<sub>2</sub> = 0.2 eV, t<sub>3</sub> = 0.18 eV, U = 3.5 eV ([Hieulle et al., Angew. Chem. Int. Ed. 2021, 60, 25224, SI §2.2](https://doi.org/10.1002/anie.202108301)); isotropic Heisenberg ring of six S = 1 spins, J = 18 meV fitted to step E<sub>1</sub>, T<sub>eff</sub> = 5 K ([Hieulle et al., Angew. Chem. Int. Ed. 2021, 60, 25224, p. 25227; SI §2.2](https://doi.org/10.1002/anie.202108301)); Heisenberg ring of twelve S = 1/2 spins, J = 14 meV at −J′/J = 5: fits E<sub>1</sub>, not E<sub>2</sub>; the six-spin S = 1 ring is kept ([Hieulle et al., Angew. Chem. Int. Ed. 2021, 60, 25224, SI §2.6](https://doi.org/10.1002/anie.202108301)).

## Calculations

One entry per set and active space. Inside: the run line of each job (wall time, machine × cores, peak resident memory, Psi4 commit), SI configurations per spin sector, every printed root per spin sector as E − E(lowest) / meV, and the SA-REKS active orbitals where drawn.

Orbitals: one column per active pair as the code pairs them, antibonding orbital above, bonding below. Contours ±0.01, ±0.02, ±0.04 a.u. in a plane 0.6 Å above the molecular plane; blue + / copper −.

### 6-31G(d) · BH\&HLYP {#6-31g-d-bh-hlyp}

6-31G(d) · BH\&HLYP · REKS(12,12) · 2S = 0–12 · lowest T1

SCF: wall time 22 min, PC-1\* × 96 cores, peak 175 GiB · Psi4 8c95db042SI 2S = 0: wall time 1 h 43 min, PC-1\* × 96 cores, peak 261 GiB · Psi4 4c3025f7cSI 2S = 2: wall time 1 h 11 min, PC-1\* × 96 cores, peak 339 GiB · Psi4 5a77936faSI 2S = 4: wall time 4 h 57 min, PC-2\* × 18 cores, peak 388 GiB · Psi4 1b68aa1f5SI 2S = 6–12: wall time 6 h 6 min, PC-2\* × 18 cores, peak 384 GiB · Psi4 72ce4d58b

SI configurations: 2S = 0: 55 428, 2S = 2: 150 249, 2S = 4: 167 315, 2S = 6: 92 954, 2S = 8: 23 094, 2S = 10: 203, 2S = 12: 1

Every printed root per spin sector, E − E(lowest) / meV

**2S = 0**, 50 roots: S0 28.9, S1 2397.2, S2 2474.9, S3 2521.0, S4 2728.6, S5 2760.2, S6 2766.0, S7 2787.7, S8 2849.6, S9 2914.4, S10 2973.5, S11 3028.6, S12 3073.8, S13 3076.8, S14 3102.6, S15 3123.3, S16 3135.7, S17 3179.8, S18 3202.7, S19 3219.5, S20 3230.6, S21 3309.4, S22 3410.3, S23 3460.1, S24 3489.9, S25 3540.1, S26 3552.1, S27 3583.7, S28 3596.0, S29 3637.2, S30 3647.4, S31 3656.4, S32 3697.5, S33 3701.7, S34 3730.4, S35 3730.6, S36 3737.8, S37 3744.2, S38 3769.3, S39 3771.4, S40 3839.8, S41 3869.3, S42 3875.5, S43 3885.8, S44 3912.2, S45 3920.0, S46 3920.9, S47 3929.6, S48 3943.9, S49 3974.5

**2S = 2**, 50 roots: T1 0.0, T2 1679.7, T3 1708.9, T4 1733.6, T5 1744.5, T6 1957.5, T7 2005.9, T8 2190.1, T9 2237.8, T10 2411.9, T11 2462.4, T12 2533.4, T13 2590.8, T14 2612.4, T15 2662.9, T16 2676.5, T17 2682.7, T18 2724.3, T19 2746.4, T20 2783.3, T21 2807.7, T22 2873.3, T23 2888.3, T24 2900.3, T25 2915.4, T26 2930.4, T27 2941.6, T28 2975.0, T29 2989.4, T30 3004.8, T31 3019.1, T32 3050.2, T33 3094.2, T34 3096.4, T35 3105.9, T36 3109.5, T37 3133.9, T38 3164.9, T39 3165.2, T40 3197.6, T41 3207.0, T42 3222.3, T43 3235.9, T44 3252.1, T45 3276.0, T46 3283.8, T47 3287.6, T48 3334.6, T49 3350.4, T50 3377.3

**2S = 4**, 50 roots: Q1 28.1, Q2 709.8, Q3 1225.9, Q4 1380.1, Q5 1453.5, Q6 1460.4, Q7 1597.2, Q8 1653.0, Q9 1666.4, Q10 1703.1, Q11 1755.3, Q12 1837.4, Q13 1985.3, Q14 2052.1, Q15 2075.2, Q16 2140.1, Q17 2154.5, Q18 2168.2, Q19 2206.5, Q20 2256.8, Q21 2309.1, Q22 2322.6, Q23 2326.7, Q24 2331.6, Q25 2346.3, Q26 2379.1, Q27 2391.7, Q28 2410.9, Q29 2423.9, Q30 2451.6, Q31 2476.5, Q32 2478.5, Q33 2505.1, Q34 2517.4, Q35 2532.3, Q36 2553.9, Q37 2561.9, Q38 2570.7, Q39 2580.8, Q40 2599.5, Q41 2631.5, Q42 2645.5, Q43 2647.1, Q44 2651.1, Q45 2656.4, Q46 2681.5, Q47 2696.0, Q48 2700.4, Q49 2733.3, Q50 2742.4

**2S = 6**, 50 roots: Sp1 188.7, Sp2 1066.4, Sp3 1090.7, Sp4 1222.7, Sp5 1308.2, Sp6 1347.2, Sp7 1395.3, Sp8 1528.9, Sp9 1619.5, Sp10 1659.5, Sp11 1777.3, Sp12 1864.4, Sp13 1979.3, Sp14 2083.2, Sp15 2098.4, Sp16 2101.3, Sp17 2178.0, Sp18 2223.0, Sp19 2260.6, Sp20 2272.7, Sp21 2273.6, Sp22 2325.1, Sp23 2386.9, Sp24 2402.6, Sp25 2408.3, Sp26 2436.5, Sp27 2449.8, Sp28 2456.9, Sp29 2463.2, Sp30 2474.0, Sp31 2507.3, Sp32 2517.4, Sp33 2534.0, Sp34 2540.5, Sp35 2575.2, Sp36 2588.1, Sp37 2610.9, Sp38 2644.3, Sp39 2647.4, Sp40 2648.9, Sp41 2691.1, Sp42 2697.4, Sp43 2702.4, Sp44 2715.9, Sp45 2723.4, Sp46 2745.4, Sp47 2749.6, Sp48 2767.8, Sp49 2800.3, Sp50 2828.2

**2S = 8**, 50 roots: N1 411.1, N2 910.0, N3 1098.0, N4 1109.3, N5 1210.3, N6 1358.2, N7 1590.3, N8 1710.4, N9 1924.9, N10 2113.8, N11 2149.7, N12 2187.3, N13 2254.7, N14 2298.6, N15 2309.4, N16 2322.1, N17 2392.1, N18 2470.7, N19 2514.2, N20 2615.3, N21 2621.6, N22 2624.4, N23 2664.9, N24 2695.1, N25 2715.0, N26 2730.7, N27 2751.8, N28 2812.8, N29 2859.1, N30 2873.6, N31 2879.0, N32 2893.0, N33 2907.1, N34 2913.6, N35 2936.4, N36 2966.4, N37 2992.9, N38 3021.4, N39 3053.0, N40 3065.5, N41 3077.7, N42 3101.1, N43 3115.7, N44 3143.3, N45 3168.2, N46 3171.7, N47 3173.0, N48 3192.6, N49 3197.3, N50 3204.1

**2S = 10**, 50 roots: U1 552.8, U2 691.2, U3 714.9, U4 1338.3, U5 1348.9, U6 1518.4, U7 1740.6, U8 1881.2, U9 2480.0, U10 2564.9, U11 2825.0, U12 3085.6, U13 3108.8, U14 3121.9, U15 3151.6, U16 3152.8, U17 3181.0, U18 3186.2, U19 3202.2, U20 3239.3, U21 3251.0, U22 3269.4, U23 3335.7, U24 3343.1, U25 3357.6, U26 3423.7, U27 3525.1, U28 3533.2, U29 3563.3, U30 3564.1, U31 3578.2, U32 3608.2, U33 3631.8, U34 3633.3, U35 3653.6, U36 3714.5, U37 3733.5, U38 3737.1, U39 3740.0, U40 3752.6, U41 3765.7, U42 3775.9, U43 3787.8, U44 3804.5, U45 3809.0, U46 3812.2, U47 3824.4, U48 3829.5, U49 3852.7, U50 3871.4

**2S = 12**, 1 roots: Tr1 1025.0

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(f, g)

![TNS 6-31G(d) · BH\&HLYP REKS(12,12), orbital 430A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_631gd_bhhlyp/1212_430A.svg)**g** 430A · 0.3664\
−0.153197

![TNS 6-31G(d) · BH\&HLYP REKS(12,12), orbital 431A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_631gd_bhhlyp/1212_431A.svg)**f** 431A · 1.6336\
−0.151978

(e, h)

![TNS 6-31G(d) · BH\&HLYP REKS(12,12), orbital 429A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_631gd_bhhlyp/1212_429A.svg)**h** 429A · 0.3739\
−0.155053

![TNS 6-31G(d) · BH\&HLYP REKS(12,12), orbital 428A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_631gd_bhhlyp/1212_428A.svg)**e** 428A · 1.6261\
−0.155104

(d, i)

![TNS 6-31G(d) · BH\&HLYP REKS(12,12), orbital 425A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_631gd_bhhlyp/1212_425A.svg)**i** 425A · 0.4399\
−0.155780

![TNS 6-31G(d) · BH\&HLYP REKS(12,12), orbital 424A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_631gd_bhhlyp/1212_424A.svg)**d** 424A · 1.5601\
−0.156008

(c, j)

![TNS 6-31G(d) · BH\&HLYP REKS(12,12), orbital 426A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_631gd_bhhlyp/1212_426A.svg)**j** 426A · 0.1996\
−0.155353

![TNS 6-31G(d) · BH\&HLYP REKS(12,12), orbital 422A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_631gd_bhhlyp/1212_422A.svg)**c** 422A · 1.8004\
−0.158559

(b, k)

![TNS 6-31G(d) · BH\&HLYP REKS(12,12), orbital 427A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_631gd_bhhlyp/1212_427A.svg)**k** 427A · 0.2137\
−0.155225

![TNS 6-31G(d) · BH\&HLYP REKS(12,12), orbital 423A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_631gd_bhhlyp/1212_423A.svg)**b** 423A · 1.7863\
−0.158459

(a, l)

![TNS 6-31G(d) · BH\&HLYP REKS(12,12), orbital 432A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_631gd_bhhlyp/1212_432A.svg)**l** 432A · 0.0112\
−0.151847

![TNS 6-31G(d) · BH\&HLYP REKS(12,12), orbital 421A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_631gd_bhhlyp/1212_421A.svg)**a** 421A · 1.9888\
−0.159025

### 6-31G(d) · HF {#6-31g-d-hf}

6-31G(d) · HF · REKS(12,12) · 2S = 0–12 · lowest Q1

SCF: wall time 44 min, PC-1\* × 96 cores, peak 168 GiB · Psi4 f31cf1f94SI 2S = 0: wall time 38 min, PC-1\* × 96 cores, peak 236 GiB · Psi4 0b7a4f5b4SI 2S = 2: wall time 30 min, PC-1\* × 96 cores, peak 322 GiB · Psi4 d5586d10aSI 2S = 4: wall time 58 min, PC-2\* × 18 cores, peak 507 GiB · Psi4 d5586d10aSI 2S = 6–12: wall time 2 h 21 min, PC-2\* × 18 cores, peak 376 GiB · Psi4 0b7a4f5b4

SI configurations: 2S = 0: 55 428, 2S = 2: 150 249, 2S = 4: 167 315, 2S = 6: 92 954, 2S = 8: 23 094, 2S = 10: 203, 2S = 12: 1

Every printed root per spin sector, E − E(lowest) / meV

**2S = 0**, 50 roots: S0 93.0, S1 2098.9, S2 2345.7, S3 2725.1, S4 2744.3, S5 2745.5, S6 2901.6, S7 3314.8, S8 3326.1, S9 3576.5, S10 3600.4, S11 3887.3, S12 3948.9, S13 4008.8, S14 4039.6, S15 4126.5, S16 4186.7, S17 4396.7, S18 4474.7, S19 4505.8, S20 4561.7, S21 4582.8, S22 4658.3, S23 4752.1, S24 4792.1, S25 4822.9, S26 4833.8, S27 4907.0, S28 4935.4, S29 4946.5, S30 5011.3, S31 5013.9, S32 5039.9, S33 5082.2, S34 5088.3, S35 5098.8, S36 5151.2, S37 5155.1, S38 5195.1, S39 5207.3, S40 5214.8, S41 5242.7, S42 5260.1, S43 5294.5, S44 5314.8, S45 5317.2, S46 5322.2, S47 5342.6, S48 5394.1, S49 5416.2

**2S = 2**, 50 roots: T1 16.0, T2 1096.5, T3 1284.2, T4 1466.6, T5 1708.7, T6 2143.8, T7 2196.7, T8 2206.3, T9 2247.5, T10 2260.9, T11 2465.5, T12 2604.0, T13 2632.3, T14 2690.8, T15 2857.6, T16 2942.0, T17 2972.2, T18 3045.3, T19 3071.0, T20 3353.5, T21 3426.5, T22 3497.0, T23 3512.8, T24 3673.7, T25 3725.1, T26 3762.4, T27 3794.4, T28 3848.0, T29 3889.7, T30 3905.2, T31 3918.7, T32 3925.3, T33 3973.2, T34 3976.4, T35 4015.8, T36 4083.9, T37 4091.0, T38 4093.7, T39 4166.6, T40 4189.2, T41 4208.5, T42 4214.1, T43 4216.7, T44 4223.2, T45 4270.9, T46 4301.5, T47 4320.9, T48 4321.1, T49 4338.3, T50 4353.3

**2S = 4**, 50 roots: Q1 0.0, Q2 556.5, Q3 1102.9, Q4 1233.9, Q5 1584.7, Q6 1682.0, Q7 1948.8, Q8 1999.4, Q9 2066.5, Q10 2093.4, Q11 2176.9, Q12 2203.4, Q13 2248.6, Q14 2322.5, Q15 2384.7, Q16 2433.2, Q17 2508.2, Q18 2626.2, Q19 2835.4, Q20 2908.9, Q21 3020.8, Q22 3074.4, Q23 3158.0, Q24 3187.7, Q25 3216.8, Q26 3302.3, Q27 3370.1, Q28 3413.0, Q29 3416.6, Q30 3453.5, Q31 3494.7, Q32 3510.2, Q33 3546.8, Q34 3595.6, Q35 3636.5, Q36 3640.7, Q37 3708.0, Q38 3730.1, Q39 3739.8, Q40 3765.3, Q41 3805.8, Q42 3879.6, Q43 3922.7, Q44 3935.0, Q45 3939.2, Q46 3964.8, Q47 3973.5, Q48 3989.0, Q49 3996.3, Q50 4010.1

**2S = 6**, 50 roots: Sp1 9.0, Sp2 721.3, Sp3 931.8, Sp4 1115.2, Sp5 1331.9, Sp6 1623.9, Sp7 1677.7, Sp8 1789.4, Sp9 1887.7, Sp10 1902.4, Sp11 1971.9, Sp12 1974.3, Sp13 2142.6, Sp14 2202.8, Sp15 2284.6, Sp16 2435.2, Sp17 2452.7, Sp18 2511.6, Sp19 2674.5, Sp20 2708.3, Sp21 2714.0, Sp22 2731.2, Sp23 2836.5, Sp24 2998.4, Sp25 3027.3, Sp26 3099.8, Sp27 3116.2, Sp28 3169.1, Sp29 3212.9, Sp30 3330.1, Sp31 3349.2, Sp32 3369.9, Sp33 3375.2, Sp34 3449.7, Sp35 3480.8, Sp36 3514.7, Sp37 3536.6, Sp38 3625.4, Sp39 3666.6, Sp40 3723.7, Sp41 3763.6, Sp42 3786.1, Sp43 3796.1, Sp44 3816.4, Sp45 3886.8, Sp46 3911.7, Sp47 3915.5, Sp48 3933.1, Sp49 3969.9, Sp50 3989.7

**2S = 8**, 50 roots: N1 22.3, N2 534.5, N3 927.1, N4 1011.6, N5 1295.6, N6 1442.9, N7 1557.0, N8 1699.3, N9 1857.0, N10 2020.9, N11 2124.1, N12 2144.2, N13 2206.4, N14 2240.1, N15 2286.5, N16 2637.8, N17 2676.9, N18 2704.7, N19 2854.3, N20 2859.0, N21 3165.2, N22 3305.7, N23 3379.5, N24 3381.5, N25 3614.7, N26 3663.9, N27 3672.1, N28 3714.4, N29 3813.7, N30 3819.7, N31 3839.2, N32 3900.1, N33 3959.8, N34 4013.5, N35 4018.4, N36 4040.3, N37 4065.5, N38 4067.8, N39 4102.3, N40 4149.4, N41 4174.9, N42 4193.9, N43 4207.3, N44 4211.8, N45 4296.4, N46 4303.2, N47 4317.1, N48 4353.1, N49 4411.1, N50 4423.5

**2S = 10**, 50 roots: U1 39.7, U2 59.5, U3 597.1, U4 1105.2, U5 1373.1, U6 1379.0, U7 1673.1, U8 1847.5, U9 2691.8, U10 3137.7, U11 3298.6, U12 3354.8, U13 3671.9, U14 3720.2, U15 3846.8, U16 3853.7, U17 3928.3, U18 3963.1, U19 3995.5, U20 4018.3, U21 4045.5, U22 4070.9, U23 4088.5, U24 4113.3, U25 4125.1, U26 4202.1, U27 4206.3, U28 4539.6, U29 4547.5, U30 4624.6, U31 4672.7, U32 4709.4, U33 4712.7, U34 4720.9, U35 4747.4, U36 4760.5, U37 4775.7, U38 4782.0, U39 4791.4, U40 4826.1, U41 4830.0, U42 4839.5, U43 4860.0, U44 4863.7, U45 4892.4, U46 4907.4, U47 4929.3, U48 4948.3, U49 4953.4, U50 4954.5

**2S = 12**, 1 roots: Tr1 63.1

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(f, g)

![TNS 6-31G(d) · HF REKS(12,12), orbital 428A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_631gd_hf/1212_428A.svg)**g** 428A · 0.4127\
−0.152011

![TNS 6-31G(d) · HF REKS(12,12), orbital 431A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_631gd_hf/1212_431A.svg)**f** 431A · 1.5873\
−0.150157

(e, h)

![TNS 6-31G(d) · HF REKS(12,12), orbital 424A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_631gd_hf/1212_424A.svg)**h** 424A · 0.5133\
−0.157457

![TNS 6-31G(d) · HF REKS(12,12), orbital 427A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_631gd_hf/1212_427A.svg)**e** 427A · 1.4867\
−0.155120

(d, i)

![TNS 6-31G(d) · HF REKS(12,12), orbital 430A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_631gd_hf/1212_430A.svg)**i** 430A · 0.4053\
−0.150843

![TNS 6-31G(d) · HF REKS(12,12), orbital 432A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_631gd_hf/1212_432A.svg)**d** 432A · 1.5947\
−0.148085

(c, j)

![TNS 6-31G(d) · HF REKS(12,12), orbital 421A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_631gd_hf/1212_421A.svg)**j** 421A · 0.4431\
−0.160930

![TNS 6-31G(d) · HF REKS(12,12), orbital 422A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_631gd_hf/1212_422A.svg)**c** 422A · 1.5569\
−0.159926

(b, k)

![TNS 6-31G(d) · HF REKS(12,12), orbital 426A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_631gd_hf/1212_426A.svg)**k** 426A · 0.4510\
−0.155716

![TNS 6-31G(d) · HF REKS(12,12), orbital 423A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_631gd_hf/1212_423A.svg)**b** 423A · 1.5491\
−0.159087

(a, l)

![TNS 6-31G(d) · HF REKS(12,12), orbital 429A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_631gd_hf/1212_429A.svg)**l** 429A · 0.1757\
−0.151548

![TNS 6-31G(d) · HF REKS(12,12), orbital 425A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_631gd_hf/1212_425A.svg)**a** 425A · 1.8243\
−0.155987

### def2-TZVP · BH\&HLYP {#def2-tzvp-bh-hlyp}

def2-TZVP · BH\&HLYP · REKS(12,12) · 2S = 0–12 · lowest T1

SCF: wall time 2 h 12 min, PC-1\* × 96 cores, peak 325 GiB · Psi4 e95c2d234SI 2S = 0: wall time 48 min, PC-1\* × 96 cores, peak 350 GiB · Psi4 2acf2c145SI 2S = 2: wall time 3 h 9 min, PC-2\* × 36 cores, peak 385 GiB · Psi4 a5ccb08faSI 2S = 4: wall time 2 h 53 min, PC-2\* × 36 cores, peak 494 GiB · Psi4 a5ccb08faSI 2S = 6–12: wall time 2 h 2 min, PC-2\* × 36 cores, peak 501 GiB · Psi4 a5ccb08fa

SI configurations: 2S = 0: 55 428, 2S = 2: 150 249, 2S = 4: 167 315, 2S = 6: 92 954, 2S = 8: 23 094, 2S = 10: 203, 2S = 12: 1

Every printed root per spin sector, E − E(lowest) / meV

**2S = 0**, 50 roots: S0 51.4, S1 2311.5, S2 2348.0, S3 2585.3, S4 2610.0, S5 2677.0, S6 2706.4, S7 2769.5, S8 2819.2, S9 2965.5, S10 2986.8, S11 3037.7, S12 3068.9, S13 3070.8, S14 3097.9, S15 3126.3, S16 3130.1, S17 3230.9, S18 3234.5, S19 3291.8, S20 3299.5, S21 3377.8, S22 3384.1, S23 3412.7, S24 3449.0, S25 3496.5, S26 3509.5, S27 3549.0, S28 3571.2, S29 3579.8, S30 3598.7, S31 3609.5, S32 3617.0, S33 3648.5, S34 3661.7, S35 3679.4, S36 3688.2, S37 3701.0, S38 3725.8, S39 3736.6, S40 3744.0, S41 3763.5, S42 3799.8, S43 3805.6, S44 3840.8, S45 3840.8, S46 3865.1, S47 3889.2, S48 3889.4, S49 3893.1

**2S = 2**, 50 roots: T1 0.0, T2 1639.2, T3 1678.5, T4 1834.2, T5 1878.7, T6 2100.1, T7 2151.0, T8 2239.9, T9 2256.0, T10 2315.7, T11 2361.0, T12 2413.8, T13 2535.1, T14 2602.6, T15 2622.4, T16 2632.4, T17 2687.4, T18 2694.8, T19 2780.5, T20 2820.5, T21 2835.0, T22 2847.6, T23 2906.5, T24 2912.0, T25 2938.4, T26 2944.4, T27 2986.4, T28 3001.2, T29 3009.8, T30 3047.6, T31 3050.4, T32 3083.0, T33 3095.0, T34 3113.4, T35 3133.7, T36 3138.1, T37 3150.0, T38 3151.7, T39 3171.5, T40 3193.7, T41 3214.4, T42 3221.6, T43 3234.9, T44 3250.0, T45 3270.7, T46 3307.8, T47 3311.1, T48 3314.0, T49 3332.0, T50 3342.2

**2S = 4**, 50 roots: Q1 27.6, Q2 1208.0, Q3 1462.3, Q4 1557.6, Q5 1587.6, Q6 1608.9, Q7 1768.9, Q8 1774.4, Q9 1799.5, Q10 1971.2, Q11 2022.6, Q12 2115.6, Q13 2146.1, Q14 2229.8, Q15 2263.5, Q16 2288.1, Q17 2288.9, Q18 2358.6, Q19 2371.7, Q20 2386.9, Q21 2411.7, Q22 2473.2, Q23 2477.2, Q24 2488.6, Q25 2507.3, Q26 2532.4, Q27 2546.7, Q28 2556.3, Q29 2565.2, Q30 2577.0, Q31 2603.1, Q32 2613.3, Q33 2636.2, Q34 2640.8, Q35 2660.8, Q36 2687.0, Q37 2701.9, Q38 2715.5, Q39 2728.6, Q40 2739.0, Q41 2741.4, Q42 2755.5, Q43 2776.5, Q44 2780.8, Q45 2816.7, Q46 2822.2, Q47 2831.1, Q48 2844.2, Q49 2851.1, Q50 2855.2

**2S = 6**, 50 roots: Sp1 199.3, Sp2 1161.0, Sp3 1296.7, Sp4 1430.7, Sp5 1454.2, Sp6 1518.4, Sp7 1750.0, Sp8 1781.9, Sp9 1821.7, Sp10 2015.2, Sp11 2032.3, Sp12 2095.5, Sp13 2120.9, Sp14 2152.7, Sp15 2195.5, Sp16 2223.9, Sp17 2274.2, Sp18 2351.0, Sp19 2374.5, Sp20 2408.1, Sp21 2434.8, Sp22 2444.2, Sp23 2469.7, Sp24 2493.0, Sp25 2548.5, Sp26 2564.0, Sp27 2565.8, Sp28 2568.1, Sp29 2583.8, Sp30 2611.1, Sp31 2613.7, Sp32 2634.1, Sp33 2644.2, Sp34 2651.7, Sp35 2672.5, Sp36 2682.2, Sp37 2691.7, Sp38 2740.1, Sp39 2743.8, Sp40 2750.7, Sp41 2783.7, Sp42 2809.5, Sp43 2809.6, Sp44 2825.2, Sp45 2829.2, Sp46 2834.5, Sp47 2858.5, Sp48 2860.6, Sp49 2865.2, Sp50 2883.1

**2S = 8**, 50 roots: N1 438.4, N2 1057.9, N3 1144.8, N4 1158.7, N5 1441.8, N6 1468.1, N7 1800.3, N8 1832.1, N9 1903.6, N10 2029.0, N11 2281.9, N12 2330.8, N13 2418.6, N14 2428.1, N15 2429.8, N16 2454.9, N17 2523.1, N18 2553.9, N19 2580.2, N20 2601.6, N21 2632.0, N22 2724.2, N23 2735.3, N24 2772.9, N25 2775.4, N26 2783.8, N27 2794.9, N28 2810.1, N29 2814.9, N30 2816.2, N31 2853.8, N32 2875.8, N33 2915.0, N34 2936.5, N35 2938.6, N36 2975.7, N37 2977.7, N38 2989.4, N39 3061.1, N40 3064.7, N41 3069.8, N42 3101.5, N43 3114.4, N44 3140.1, N45 3141.1, N46 3147.4, N47 3157.5, N48 3164.2, N49 3165.2, N50 3166.1

**2S = 10**, 50 roots: U1 736.8, U2 741.4, U3 767.1, U4 1305.6, U5 1379.8, U6 1461.8, U7 1706.7, U8 1969.1, U9 2505.3, U10 2759.9, U11 2907.2, U12 2953.3, U13 2977.5, U14 3038.7, U15 3041.5, U16 3114.6, U17 3126.2, U18 3146.5, U19 3147.2, U20 3161.6, U21 3191.0, U22 3201.8, U23 3217.7, U24 3249.9, U25 3249.9, U26 3270.5, U27 3448.3, U28 3466.2, U29 3466.3, U30 3480.9, U31 3501.6, U32 3540.8, U33 3599.0, U34 3606.0, U35 3624.8, U36 3629.5, U37 3637.5, U38 3669.1, U39 3689.6, U40 3698.0, U41 3706.0, U42 3718.4, U43 3737.7, U44 3742.1, U45 3749.5, U46 3767.0, U47 3774.9, U48 3776.6, U49 3791.6, U50 3805.3

**2S = 12**, 1 roots: Tr1 1087.8

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(f, g)

![TNS def2-TZVP · BH\&HLYP REKS(12,12), orbital 430A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_tzvp_bhhlyp/1212_430A.svg)**g** 430A · 0.3032\
−0.162529

![TNS def2-TZVP · BH\&HLYP REKS(12,12), orbital 431A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_tzvp_bhhlyp/1212_431A.svg)**f** 431A · 1.6968\
−0.162132

(e, h)

![TNS def2-TZVP · BH\&HLYP REKS(12,12), orbital 425A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_tzvp_bhhlyp/1212_425A.svg)**h** 425A · 0.3241\
−0.164442

![TNS def2-TZVP · BH\&HLYP REKS(12,12), orbital 424A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_tzvp_bhhlyp/1212_424A.svg)**e** 424A · 1.6759\
−0.165554

(d, i)

![TNS def2-TZVP · BH\&HLYP REKS(12,12), orbital 427A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_tzvp_bhhlyp/1212_427A.svg)**i** 427A · 0.2288\
−0.163206

![TNS def2-TZVP · BH\&HLYP REKS(12,12), orbital 426A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_tzvp_bhhlyp/1212_426A.svg)**d** 426A · 1.7712\
−0.163814

(c, j)

![TNS def2-TZVP · BH\&HLYP REKS(12,12), orbital 428A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_tzvp_bhhlyp/1212_428A.svg)**j** 428A · 0.1051\
−0.163068

![TNS def2-TZVP · BH\&HLYP REKS(12,12), orbital 423A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_tzvp_bhhlyp/1212_423A.svg)**c** 423A · 1.8949\
−0.168922

(b, k)

![TNS def2-TZVP · BH\&HLYP REKS(12,12), orbital 429A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_tzvp_bhhlyp/1212_429A.svg)**k** 429A · 0.1090\
−0.162880

![TNS def2-TZVP · BH\&HLYP REKS(12,12), orbital 422A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_tzvp_bhhlyp/1212_422A.svg)**b** 422A · 1.8910\
−0.169242

(a, l)

![TNS def2-TZVP · BH\&HLYP REKS(12,12), orbital 432A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_tzvp_bhhlyp/1212_432A.svg)**l** 432A · 0.0022\
−0.159272

![TNS def2-TZVP · BH\&HLYP REKS(12,12), orbital 421A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_tzvp_bhhlyp/1212_421A.svg)**a** 421A · 1.9978\
−0.170991

### def2-TZVP · HF {#def2-tzvp-hf}

def2-TZVP · HF · REKS(12,12) · 2S = 0–12 · lowest Q1

SCF: wall time 1 h 46 min, PC-1\* × 96 cores, peak 313 GiB · Psi4 2acf2c145SI 2S = 0: wall time 31 min, PC-1\* × 96 cores, peak 336 GiB · Psi4 2acf2c145SI 2S = 2: wall time 1 h 27 min, PC-2\* × 36 cores, peak 374 GiB · Psi4 a5ccb08faSI 2S = 4: wall time 1 h 46 min, PC-2\* × 36 cores, peak 483 GiB · Psi4 a5ccb08faSI 2S = 6–12: wall time 1 h 6 min, PC-2\* × 36 cores, peak 488 GiB · Psi4 a5ccb08fa

SI configurations: 2S = 0: 55 428, 2S = 2: 150 249, 2S = 4: 167 315, 2S = 6: 92 954, 2S = 8: 23 094, 2S = 10: 203, 2S = 12: 1

Every printed root per spin sector, E − E(lowest) / meV

**2S = 0**, 50 roots: S0 101.6, S1 2000.0, S2 2187.2, S3 2532.7, S4 2561.2, S5 2571.6, S6 2724.3, S7 3154.8, S8 3237.8, S9 3352.9, S10 3488.0, S11 3709.3, S12 3776.0, S13 3848.1, S14 3851.6, S15 3946.1, S16 3960.5, S17 4105.0, S18 4146.1, S19 4263.3, S20 4355.6, S21 4410.2, S22 4471.5, S23 4506.7, S24 4531.5, S25 4574.2, S26 4596.4, S27 4690.3, S28 4693.1, S29 4707.5, S30 4724.0, S31 4808.0, S32 4842.2, S33 4845.9, S34 4852.7, S35 4912.8, S36 4918.1, S37 4924.6, S38 4947.5, S39 4973.0, S40 5016.2, S41 5030.4, S42 5041.3, S43 5062.2, S44 5078.6, S45 5140.0, S46 5143.4, S47 5150.9, S48 5161.9, S49 5187.3

**2S = 2**, 50 roots: T1 16.2, T2 1034.8, T3 1189.1, T4 1373.5, T5 1611.9, T6 1979.0, T7 1979.4, T8 2116.6, T9 2121.2, T10 2169.4, T11 2282.9, T12 2384.8, T13 2435.5, T14 2483.9, T15 2623.7, T16 2794.8, T17 2807.0, T18 2833.2, T19 2940.2, T20 3164.3, T21 3188.7, T22 3242.4, T23 3245.9, T24 3440.5, T25 3449.5, T26 3538.2, T27 3564.2, T28 3577.9, T29 3597.3, T30 3650.8, T31 3660.8, T32 3668.7, T33 3744.8, T34 3789.9, T35 3813.6, T36 3832.6, T37 3916.9, T38 3925.8, T39 3947.5, T40 3954.0, T41 3968.1, T42 3999.2, T43 4022.3, T44 4027.4, T45 4057.6, T46 4088.7, T47 4097.2, T48 4119.8, T49 4129.6, T50 4146.9

**2S = 4**, 50 roots: Q1 0.0, Q2 594.8, Q3 1023.7, Q4 1136.9, Q5 1494.3, Q6 1530.8, Q7 1864.9, Q8 1866.3, Q9 1924.2, Q10 1961.8, Q11 1979.3, Q12 2015.7, Q13 2100.4, Q14 2120.2, Q15 2211.6, Q16 2269.0, Q17 2352.8, Q18 2452.2, Q19 2596.0, Q20 2659.4, Q21 2853.2, Q22 2856.3, Q23 2968.3, Q24 3011.8, Q25 3029.8, Q26 3053.2, Q27 3122.5, Q28 3188.3, Q29 3212.3, Q30 3228.9, Q31 3236.9, Q32 3278.2, Q33 3345.7, Q34 3367.3, Q35 3407.1, Q36 3416.6, Q37 3469.6, Q38 3497.2, Q39 3505.9, Q40 3525.1, Q41 3573.1, Q42 3615.5, Q43 3650.0, Q44 3658.8, Q45 3710.7, Q46 3719.7, Q47 3751.1, Q48 3753.7, Q49 3767.3, Q50 3812.8

**2S = 6**, 50 roots: Sp1 13.9, Sp2 708.1, Sp3 885.0, Sp4 1029.1, Sp5 1220.9, Sp6 1506.7, Sp7 1616.2, Sp8 1713.6, Sp9 1747.2, Sp10 1814.9, Sp11 1824.3, Sp12 1831.3, Sp13 1963.3, Sp14 1991.7, Sp15 2116.8, Sp16 2255.8, Sp17 2306.8, Sp18 2325.9, Sp19 2503.1, Sp20 2535.2, Sp21 2562.7, Sp22 2601.8, Sp23 2676.7, Sp24 2837.5, Sp25 2915.2, Sp26 2928.3, Sp27 2957.4, Sp28 2969.4, Sp29 3024.1, Sp30 3106.2, Sp31 3109.7, Sp32 3160.1, Sp33 3190.6, Sp34 3226.0, Sp35 3289.8, Sp36 3328.1, Sp37 3367.1, Sp38 3419.1, Sp39 3453.6, Sp40 3516.8, Sp41 3554.5, Sp42 3572.2, Sp43 3603.5, Sp44 3609.6, Sp45 3639.4, Sp46 3697.0, Sp47 3731.0, Sp48 3794.9, Sp49 3812.2, Sp50 3815.8

**2S = 8**, 50 roots: N1 33.6, N2 513.5, N3 877.6, N4 927.0, N5 1205.7, N6 1405.5, N7 1504.1, N8 1572.0, N9 1726.5, N10 1862.1, N11 1972.1, N12 2038.3, N13 2039.4, N14 2089.9, N15 2163.1, N16 2442.4, N17 2542.7, N18 2554.7, N19 2725.3, N20 2789.2, N21 2937.8, N22 3096.9, N23 3227.2, N24 3286.3, N25 3436.4, N26 3481.6, N27 3501.0, N28 3616.0, N29 3627.6, N30 3650.8, N31 3660.9, N32 3751.2, N33 3812.1, N34 3825.6, N35 3867.5, N36 3887.1, N37 3898.2, N38 3937.2, N39 3940.7, N40 3993.4, N41 4026.8, N42 4038.5, N43 4057.3, N44 4068.2, N45 4097.9, N46 4137.6, N47 4149.0, N48 4185.3, N49 4245.0, N50 4247.7

**2S = 10**, 50 roots: U1 59.0, U2 82.3, U3 556.9, U4 1022.3, U5 1331.1, U6 1344.5, U7 1625.9, U8 1723.0, U9 2641.1, U10 3004.8, U11 3162.3, U12 3272.6, U13 3564.7, U14 3590.2, U15 3666.6, U16 3715.2, U17 3787.7, U18 3836.3, U19 3871.2, U20 3888.7, U21 3902.2, U22 3904.6, U23 3942.4, U24 3994.6, U25 4015.0, U26 4017.5, U27 4051.2, U28 4338.7, U29 4382.6, U30 4488.7, U31 4538.9, U32 4576.6, U33 4578.3, U34 4583.2, U35 4584.4, U36 4637.6, U37 4651.5, U38 4656.7, U39 4666.2, U40 4680.6, U41 4682.0, U42 4703.7, U43 4719.1, U44 4726.0, U45 4730.4, U46 4747.4, U47 4779.7, U48 4780.5, U49 4793.3, U50 4826.4

**2S = 12**, 1 roots: Tr1 92.4

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(f, g)

![TNS def2-TZVP · HF REKS(12,12), orbital 428A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_tzvp_hf/1212_428A.svg)**g** 428A · 0.3548\
−0.159025

![TNS def2-TZVP · HF REKS(12,12), orbital 429A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_tzvp_hf/1212_429A.svg)**f** 429A · 1.6452\
−0.158222

(e, h)

![TNS def2-TZVP · HF REKS(12,12), orbital 425A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_tzvp_hf/1212_425A.svg)**h** 425A · 0.4512\
−0.164203

![TNS def2-TZVP · HF REKS(12,12), orbital 426A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_tzvp_hf/1212_426A.svg)**e** 426A · 1.5488\
−0.163124

(d, i)

![TNS def2-TZVP · HF REKS(12,12), orbital 431A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_tzvp_hf/1212_431A.svg)**i** 431A · 0.3470\
−0.157996

![TNS def2-TZVP · HF REKS(12,12), orbital 432A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_tzvp_hf/1212_432A.svg)**d** 432A · 1.6530\
−0.155797

(c, j)

![TNS def2-TZVP · HF REKS(12,12), orbital 424A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_tzvp_hf/1212_424A.svg)**j** 424A · 0.3816\
−0.166767

![TNS def2-TZVP · HF REKS(12,12), orbital 423A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_tzvp_hf/1212_423A.svg)**c** 423A · 1.6184\
−0.167765

(b, k)

![TNS def2-TZVP · HF REKS(12,12), orbital 422A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_tzvp_hf/1212_422A.svg)**k** 422A · 0.4180\
−0.169839

![TNS def2-TZVP · HF REKS(12,12), orbital 421A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_tzvp_hf/1212_421A.svg)**b** 421A · 1.5820\
−0.171727

(a, l)

![TNS def2-TZVP · HF REKS(12,12), orbital 430A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_tzvp_hf/1212_430A.svg)**l** 430A · 0.1171\
−0.158164

![TNS def2-TZVP · HF REKS(12,12), orbital 427A](https://reksstudio.github.io/v2/figures/scale/orb/TNS_tzvp_hf/1212_427A.svg)**a** 427A · 1.8829\
−0.162404

\* PC-1: 2 × 48-core AMD EPYC 9475F (Zen 5), 96 cores, 384 GB; PC-2: 2 × 18-core Intel Xeon Gold 6240 (Cascade Lake), 36 cores, 754 GB

[Back to the systems](https://reksstudio.github.io/v2/main/results/large-molecules/index.md#c-tns) · [TTR →](https://reksstudio.github.io/v2/main/results/large-molecules/ttr/index.md)
