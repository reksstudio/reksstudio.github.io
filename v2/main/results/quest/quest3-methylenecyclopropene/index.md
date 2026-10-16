# methylenecyclopropene — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest3-methylenecyclopropene/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# methylenecyclopropene

QUEST3: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](https://reksstudio.github.io/v2/main/results/quest/quest3-methylenecyclopropene/index.md#s1) · [S2](https://reksstudio.github.io/v2/main/results/quest/quest3-methylenecyclopropene/index.md#s2) · [T1](https://reksstudio.github.io/v2/main/results/quest/quest3-methylenecyclopropene/index.md#t1) · [T2](https://reksstudio.github.io/v2/main/results/quest/quest3-methylenecyclopropene/index.md#t2) · [Orbitals](https://reksstudio.github.io/v2/main/results/quest/quest3-methylenecyclopropene/index.md#orbitals)

![methylenecyclopropene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_methylenecyclopropene.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: B<sub>2</sub> 4.28 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 4.244 | −0.036 | B<sub>2</sub> |
| | (4,4) | 4.655 | +0.375 | B<sub>2</sub> |
| | **(6,6)** | **4.256** | **−0.024** | B<sub>2</sub> |
| | (8,8) | 4.772 | +0.492 | B<sub>2</sub> |
| M08-SO | **(2,2)** | **4.268** | **−0.012** | B<sub>2</sub> |
| | (4,4) | 4.656 | +0.376 | B<sub>2</sub> |
| | (6,6) | 4.243 | −0.037 | B<sub>2</sub> |
| | (8,8) | 4.693 | +0.413 | B<sub>2</sub> |
| ωB97X | **(2,2)** | **4.345** | **+0.065** | B<sub>2</sub> |
| | (4,4) | 4.769 | +0.489 | B<sub>2</sub> |
| | (6,6) | 4.371 | +0.091 | B<sub>2</sub> |
| | (8,8) | 4.812 | +0.532 | B<sub>2</sub> |

### S2 {#s2}

TBE: A<sub>1</sub> 6.12 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **6.170** | **+0.050** | A<sub>1</sub> |
| | (6,6) | 6.922 | +0.802 | A<sub>1</sub> |
| | (8,8) | 7.346 | +1.226 | A<sub>1</sub> |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **6.102** | **−0.018** | A<sub>1</sub> |
| | (6,6) | 6.727 | +0.607 | A<sub>1</sub> |
| | (8,8) | 7.082 | +0.962 | A<sub>1</sub> |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **6.408** | **+0.288** | A<sub>1</sub> |
| | (6,6) | 6.995 | +0.875 | A<sub>1</sub> |
| | (8,8) | 7.270 | +1.150 | A<sub>1</sub> |

### T1 {#t1}

TBE: B<sub>2</sub> 3.49 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 3.136 | −0.354 | B<sub>2</sub> |
| | **(4,4)** | **3.424** | **−0.066** | B<sub>2</sub> |
| | (6,6) | 3.178 | −0.312 | B<sub>2</sub> |
| | (8,8) | 3.303 | −0.187 | B<sub>2</sub> |
| M08-SO | (2,2) | 3.452 | −0.038 | B<sub>2</sub> |
| | (4,4) | 3.669 | +0.179 | B<sub>2</sub> |
| | **(6,6)** | **3.462** | **−0.028** | B<sub>2</sub> |
| | (8,8) | 3.626 | +0.136 | B<sub>2</sub> |
| ωB97X | (2,2) | 3.311 | −0.179 | B<sub>2</sub> |
| | (4,4) | 3.518 | +0.028 | B<sub>2</sub> |
| | (6,6) | 3.368 | −0.122 | B<sub>2</sub> |
| | **(8,8)** | **3.511** | **+0.021** | B<sub>2</sub> |

### T2 {#t2}

TBE: A<sub>1</sub> 4.74 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | (4,4) | 4.264 | −0.475 | A<sub>1</sub> |
| | (6,6) | 4.256 | −0.484 | A<sub>1</sub> |
| | **(8,8)** | **4.484** | **−0.256** | A<sub>1</sub> |
| M08-SO | (2,2) | – | – | – |
| | (4,4) | 4.398 | −0.342 | A<sub>1</sub> |
| | (6,6) | 4.378 | −0.362 | A<sub>1</sub> |
| | **(8,8)** | **4.619** | **−0.121** | A<sub>1</sub> |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 4.474 | −0.266 | A<sub>1</sub> |
| | (6,6) | 4.468 | −0.272 | A<sub>1</sub> |
| | **(8,8)** | **4.652** | **−0.088** | A<sub>1</sub> |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (2,2)

(a, b)

![methylenecyclopropene, BH\&HLYP (2,2), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/bh_22_15A.svg)**b** 15A · 0.000001\
−0.0955

![methylenecyclopropene, BH\&HLYP (2,2), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/bh_22_14A.svg)**a** 14A · 1.999999\
−0.2747

BH\&HLYP, (4,4)

(a, d)

![methylenecyclopropene, BH\&HLYP (4,4), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/bh_44_15A.svg)**d** 15A · 0.000003\
−0.1198

![methylenecyclopropene, BH\&HLYP (4,4), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/bh_44_12A.svg)**a** 12A · 1.999997\
−0.4541

(b, c)

![methylenecyclopropene, BH\&HLYP (4,4), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/bh_44_16A.svg)**c** 16A · 0.000007\
−0.0752

![methylenecyclopropene, BH\&HLYP (4,4), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/bh_44_14A.svg)**b** 14A · 1.999993\
−0.2820

BH\&HLYP, (6,6)

(a, f)

![methylenecyclopropene, BH\&HLYP (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/bh_66_17A.svg)**f** 17A · 0.000000\
−0.0870

![methylenecyclopropene, BH\&HLYP (6,6), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/bh_66_10A.svg)**a** 10A · 2.000000\
−0.5546

(b, e)

![methylenecyclopropene, BH\&HLYP (6,6), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/bh_66_16A.svg)**e** 16A · 0.000008\
−0.1143

![methylenecyclopropene, BH\&HLYP (6,6), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/bh_66_12A.svg)**b** 12A · 1.999992\
−0.4699

(c, d)

![methylenecyclopropene, BH\&HLYP (6,6), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/bh_66_15A.svg)**d** 15A · 0.000090\
−0.1171

![methylenecyclopropene, BH\&HLYP (6,6), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/bh_66_14A.svg)**c** 14A · 1.999910\
−0.3146

BH\&HLYP, (8,8)

(a, h)

![methylenecyclopropene, BH\&HLYP (8,8), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/bh_88_18A.svg)**h** 18A · 0.000000\
−0.0850

![methylenecyclopropene, BH\&HLYP (8,8), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/bh_88_12A.svg)**a** 12A · 2.000000\
−0.4851

(b, g)

![methylenecyclopropene, BH\&HLYP (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/bh_88_17A.svg)**g** 17A · 0.000000\
−0.0964

![methylenecyclopropene, BH\&HLYP (8,8), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/bh_88_10A.svg)**b** 10A · 2.000000\
−0.5612

(c, f)

![methylenecyclopropene, BH\&HLYP (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/bh_88_16A.svg)**f** 16A · 0.000009\
−0.1399

![methylenecyclopropene, BH\&HLYP (8,8), orbital 11A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/bh_88_11A.svg)**c** 11A · 1.999991\
−0.4871

(d, e)

![methylenecyclopropene, BH\&HLYP (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/bh_88_15A.svg)**e** 15A · 0.000157\
−0.1749

![methylenecyclopropene, BH\&HLYP (8,8), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/bh_88_14A.svg)**d** 14A · 1.999843\
−0.3193

M08-SO, (2,2)

(a, b)

![methylenecyclopropene, M08-SO (2,2), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/m08_22_15A.svg)**b** 15A · 0.000000\
−0.1080

![methylenecyclopropene, M08-SO (2,2), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/m08_22_14A.svg)**a** 14A · 2.000000\
−0.2880

M08-SO, (4,4)

(a, d)

![methylenecyclopropene, M08-SO (4,4), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/m08_44_15A.svg)**d** 15A · 0.000000\
−0.1314

![methylenecyclopropene, M08-SO (4,4), orbital 11A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/m08_44_11A.svg)**a** 11A · 2.000000\
−0.4669

(b, c)

![methylenecyclopropene, M08-SO (4,4), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/m08_44_16A.svg)**c** 16A · 0.000006\
−0.0870

![methylenecyclopropene, M08-SO (4,4), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/m08_44_14A.svg)**b** 14A · 1.999994\
−0.2947

M08-SO, (6,6)

(a, f)

![methylenecyclopropene, M08-SO (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/m08_66_17A.svg)**f** 17A · 0.000000\
−0.0962

![methylenecyclopropene, M08-SO (6,6), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/m08_66_10A.svg)**a** 10A · 2.000000\
−0.5576

(b, e)

![methylenecyclopropene, M08-SO (6,6), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/m08_66_16A.svg)**e** 16A · 0.000001\
−0.1251

![methylenecyclopropene, M08-SO (6,6), orbital 11A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/m08_66_11A.svg)**b** 11A · 1.999999\
−0.4834

(c, d)

![methylenecyclopropene, M08-SO (6,6), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/m08_66_15A.svg)**d** 15A · 0.000059\
−0.1303

![methylenecyclopropene, M08-SO (6,6), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/m08_66_14A.svg)**c** 14A · 1.999941\
−0.3271

M08-SO, (8,8)

(a, h)

![methylenecyclopropene, M08-SO (8,8), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/m08_88_18A.svg)**h** 18A · 0.000000\
−0.0954

![methylenecyclopropene, M08-SO (8,8), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/m08_88_12A.svg)**a** 12A · 2.000000\
−0.4851

(b, g)

![methylenecyclopropene, M08-SO (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/m08_88_17A.svg)**g** 17A · 0.000000\
−0.1046

![methylenecyclopropene, M08-SO (8,8), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/m08_88_10A.svg)**b** 10A · 2.000000\
−0.5643

(c, f)

![methylenecyclopropene, M08-SO (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/m08_88_16A.svg)**f** 16A · 0.000002\
−0.1483

![methylenecyclopropene, M08-SO (8,8), orbital 11A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/m08_88_11A.svg)**c** 11A · 1.999998\
−0.5001

(d, e)

![methylenecyclopropene, M08-SO (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/m08_88_15A.svg)**e** 15A · 0.000086\
−0.1871

![methylenecyclopropene, M08-SO (8,8), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/m08_88_14A.svg)**d** 14A · 1.999914\
−0.3318

ωB97X, (2,2)

(a, b)

![methylenecyclopropene, ωB97X (2,2), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/wb_22_15A.svg)**b** 15A · 0.000001\
−0.1431

![methylenecyclopropene, ωB97X (2,2), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/wb_22_14A.svg)**a** 14A · 1.999999\
−0.3237

ωB97X, (4,4)

(a, d)

![methylenecyclopropene, ωB97X (4,4), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/wb_44_15A.svg)**d** 15A · 0.000001\
−0.1667

![methylenecyclopropene, ωB97X (4,4), orbital 11A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/wb_44_11A.svg)**a** 11A · 1.999999\
−0.5023

(b, c)

![methylenecyclopropene, ωB97X (4,4), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/wb_44_16A.svg)**c** 16A · 0.000013\
−0.1087

![methylenecyclopropene, ωB97X (4,4), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/wb_44_14A.svg)**b** 14A · 1.999987\
−0.3295

ωB97X, (6,6)

(a, f)

![methylenecyclopropene, ωB97X (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/wb_66_17A.svg)**f** 17A · 0.000000\
−0.1098

![methylenecyclopropene, ωB97X (6,6), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/wb_66_10A.svg)**a** 10A · 2.000000\
−0.5926

(b, e)

![methylenecyclopropene, ωB97X (6,6), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/wb_66_15A.svg)**e** 15A · 0.000004\
−0.1597

![methylenecyclopropene, ωB97X (6,6), orbital 11A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/wb_66_11A.svg)**b** 11A · 1.999996\
−0.5206

(c, d)

![methylenecyclopropene, ωB97X (6,6), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/wb_66_16A.svg)**d** 16A · 0.000086\
−0.1583

![methylenecyclopropene, ωB97X (6,6), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/wb_66_14A.svg)**c** 14A · 1.999914\
−0.3642

ωB97X, (8,8)

(a, h)

![methylenecyclopropene, ωB97X (8,8), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/wb_88_18A.svg)**h** 18A · 0.000000\
−0.1124

![methylenecyclopropene, ωB97X (8,8), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/wb_88_12A.svg)**a** 12A · 2.000000\
−0.5210

(b, g)

![methylenecyclopropene, ωB97X (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/wb_88_17A.svg)**g** 17A · 0.000000\
−0.1244

![methylenecyclopropene, ωB97X (8,8), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/wb_88_10A.svg)**b** 10A · 2.000000\
−0.6003

(c, f)

![methylenecyclopropene, ωB97X (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/wb_88_16A.svg)**f** 16A · 0.000004\
−0.1849

![methylenecyclopropene, ωB97X (8,8), orbital 11A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/wb_88_11A.svg)**c** 11A · 1.999996\
−0.5388

(d, e)

![methylenecyclopropene, ωB97X (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/wb_88_15A.svg)**e** 15A · 0.000120\
−0.2200

![methylenecyclopropene, ωB97X (8,8), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_methylenecyclopropene/wb_88_14A.svg)**d** 14A · 1.999880\
−0.3693

[← isobutene](https://reksstudio.github.io/v2/main/results/quest/quest3-isobutene/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-methylenecyclopropene) · [propynal →](https://reksstudio.github.io/v2/main/results/quest/quest3-propynal/index.md)
