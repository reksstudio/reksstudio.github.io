# benzene — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest3-benzene/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# benzene

QUEST3: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](#s1) · [S2](#s2) · [T1](#t1) · [T2](#t2) · [Orbitals](#orbitals)

![benzene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_benzene.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: B<sub>2u</sub> 5.06 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | (4,4) | 5.881 | +0.821 | B<sub>3u</sub><sup>a</sup> |
| | **(6,6)** | **5.413** | **+0.353** | B<sub>3u</sub><sup>a</sup> |
| | (8,8) | 5.452 | +0.392 | B<sub>3u</sub><sup>a</sup> |
| M08-SO | (2,2) | – | – | – |
| | (4,4) | 5.772 | +0.712 | B<sub>3u</sub><sup>a</sup> |
| | **(6,6)** | **5.370** | **+0.310** | B<sub>3u</sub><sup>a</sup> |
| | (8,8) | 5.401 | +0.341 | B<sub>3u</sub><sup>a</sup> |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 5.970 | +0.910 | B<sub>3u</sub><sup>a</sup> |
| | **(6,6)** | **5.497** | **+0.437** | B<sub>3u</sub><sup>a</sup> |
| | (8,8) | 5.530 | +0.470 | B<sub>3u</sub><sup>a</sup> |

### S2 {#s2}

TBE: B<sub>1u</sub> 6.45 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | (4,4) | 6.258 | −0.192 | B<sub>2u</sub><sup>a</sup> |
| | (6,6) | 6.205 | −0.245 | B<sub>2u</sub><sup>a</sup> |
| | **(8,8)** | **6.306** | **−0.144** | B<sub>2u</sub><sup>a</sup> |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **5.843** | **−0.607** | B<sub>2u</sub><sup>a</sup> |
| | (6,6) | 5.772 | −0.678 | B<sub>2u</sub><sup>a</sup> |
| | (8,8) | 5.843 | −0.607 | B<sub>2u</sub><sup>a</sup> |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 6.176 | −0.274 | B<sub>2u</sub><sup>a</sup> |
| | (6,6) | 6.110 | −0.340 | B<sub>2u</sub><sup>a</sup> |
| | **(8,8)** | **6.181** | **−0.269** | B<sub>2u</sub><sup>a</sup> |

### T1 {#t1}

TBE: B<sub>1u</sub> 4.16 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | (4,4) | 4.458 | +0.298 | B<sub>2u</sub><sup>a</sup> |
| | **(6,6)** | **4.235** | **+0.075** | B<sub>2u</sub><sup>a</sup> |
| | (8,8) | 4.235 | +0.075 | B<sub>2u</sub><sup>a</sup> |
| M08-SO | (2,2) | – | – | – |
| | (4,4) | 4.626 | +0.466 | B<sub>2u</sub><sup>a</sup> |
| | (6,6) | 4.384 | +0.224 | B<sub>2u</sub><sup>a</sup> |
| | **(8,8)** | **4.372** | **+0.212** | B<sub>2u</sub><sup>a</sup> |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 4.559 | +0.399 | B<sub>2u</sub><sup>a</sup> |
| | **(6,6)** | **4.314** | **+0.154** | B<sub>2u</sub><sup>a</sup> |
| | (8,8) | 4.322 | +0.162 | B<sub>2u</sub><sup>a</sup> |

### T2 {#t2}

TBE: E<sub>1u</sub> 4.85 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | (4,4) | 5.072 | +0.222 | B<sub>2u</sub><sup>a</sup> |
| | **(6,6)** | **4.837** | **−0.013** | B<sub>2u</sub><sup>a</sup> |
| | (8,8) | 4.866 | +0.016 | B<sub>2u</sub><sup>a</sup> |
| M08-SO | (2,2) | – | – | – |
| | (4,4) | 5.221 | +0.371 | B<sub>2u</sub><sup>a</sup> |
| | **(6,6)** | **5.016** | **+0.166** | B<sub>2u</sub><sup>a</sup> |
| | (8,8) | 5.044 | +0.194 | B<sub>2u</sub><sup>a</sup> |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 5.193 | +0.343 | B<sub>2u</sub><sup>a</sup> |
| | **(6,6)** | **4.958** | **+0.108** | B<sub>2u</sub><sup>a</sup> |
| | (8,8) | 4.988 | +0.138 | B<sub>2u</sub><sup>a</sup> |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (4,4)

(a, d)

![benzene, BH\&HLYP (4,4), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/bh_44m_23A.svg)**d** 23A · 0.000002\
−0.0978

![benzene, BH\&HLYP (4,4), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/bh_44m_21A.svg)**a** 21A · 1.999998\
−0.3074

(b, c)

![benzene, BH\&HLYP (4,4), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/bh_44m_22A.svg)**c** 22A · 0.000001\
−0.0985

![benzene, BH\&HLYP (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/bh_44m_20A.svg)**b** 20A · 1.999999\
−0.3082

BH\&HLYP, (6,6)

(a, f)

![benzene, BH\&HLYP (6,6), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/bh_66_29A.svg)**f** 29A · 0.000000\
0.0350

![benzene, BH\&HLYP (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/bh_66_17A.svg)**a** 17A · 2.000000\
−0.4412

(b, e)

![benzene, BH\&HLYP (6,6), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/bh_66_23A.svg)**e** 23A · 0.000128\
−0.0956

![benzene, BH\&HLYP (6,6), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/bh_66_21A.svg)**b** 21A · 1.999872\
−0.3118

(c, d)

![benzene, BH\&HLYP (6,6), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/bh_66_22A.svg)**d** 22A · 0.000191\
−0.1304

![benzene, BH\&HLYP (6,6), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/bh_66_20A.svg)**c** 20A · 1.999809\
−0.3141

BH\&HLYP, (8,8)

(a, h)

![benzene, BH\&HLYP (8,8), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/bh_88_24A.svg)**h** 24A · 0.000000\
−0.0826

![benzene, BH\&HLYP (8,8), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/bh_88_12A.svg)**a** 12A · 2.000000\
−0.6309

(b, g)

![benzene, BH\&HLYP (8,8), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/bh_88_27A.svg)**g** 27A · 0.000000\
0.0164

![benzene, BH\&HLYP (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/bh_88_17A.svg)**b** 17A · 2.000000\
−0.4553

(c, f)

![benzene, BH\&HLYP (8,8), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/bh_88_23A.svg)**f** 23A · 0.000146\
−0.1074

![benzene, BH\&HLYP (8,8), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/bh_88_21A.svg)**c** 21A · 1.999854\
−0.3230

(d, e)

![benzene, BH\&HLYP (8,8), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/bh_88_22A.svg)**e** 22A · 0.000232\
−0.1729

![benzene, BH\&HLYP (8,8), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/bh_88_20A.svg)**d** 20A · 1.999768\
−0.3257

M08-SO, (4,4)

(a, d)

![benzene, M08-SO (4,4), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/m08_44_23A.svg)**d** 23A · 0.000020\
−0.1039

![benzene, M08-SO (4,4), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/m08_44_21A.svg)**a** 21A · 1.999980\
−0.3219

(b, c)

![benzene, M08-SO (4,4), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/m08_44_22A.svg)**c** 22A · 0.000021\
−0.1169

![benzene, M08-SO (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/m08_44_20A.svg)**b** 20A · 1.999979\
−0.3224

M08-SO, (6,6)

(a, f)

![benzene, M08-SO (6,6), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/m08_66_29A.svg)**f** 29A · 0.000000\
0.0136

![benzene, M08-SO (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/m08_66_17A.svg)**a** 17A · 2.000000\
−0.4548

(b, e)

![benzene, M08-SO (6,6), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/m08_66_23A.svg)**e** 23A · 0.000024\
−0.1156

![benzene, M08-SO (6,6), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/m08_66_21A.svg)**b** 21A · 1.999976\
−0.3263

(c, d)

![benzene, M08-SO (6,6), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/m08_66_22A.svg)**d** 22A · 0.000027\
−0.1480

![benzene, M08-SO (6,6), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/m08_66_20A.svg)**c** 20A · 1.999973\
−0.3287

M08-SO, (8,8)

(a, h)

![benzene, M08-SO (8,8), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/m08_88_24A.svg)**h** 24A · 0.000000\
−0.0911

![benzene, M08-SO (8,8), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/m08_88_12A.svg)**a** 12A · 2.000000\
−0.6334

(b, g)

![benzene, M08-SO (8,8), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/m08_88_27A.svg)**g** 27A · 0.000000\
−0.0066

![benzene, M08-SO (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/m08_88_17A.svg)**b** 17A · 2.000000\
−0.4693

(c, f)

![benzene, M08-SO (8,8), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/m08_88_23A.svg)**f** 23A · 0.000028\
−0.1259

![benzene, M08-SO (8,8), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/m08_88_21A.svg)**c** 21A · 1.999972\
−0.3382

(d, e)

![benzene, M08-SO (8,8), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/m08_88_22A.svg)**e** 22A · 0.000033\
−0.1905

![benzene, M08-SO (8,8), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/m08_88_20A.svg)**d** 20A · 1.999967\
−0.3407

ωB97X, (4,4)

(a, d)

![benzene, ωB97X (4,4), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/wb_44_23A.svg)**d** 23A · 0.000059\
−0.1301

![benzene, ωB97X (4,4), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/wb_44_21A.svg)**a** 21A · 1.999941\
−0.3566

(b, c)

![benzene, ωB97X (4,4), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/wb_44_22A.svg)**c** 22A · 0.000088\
−0.1438

![benzene, ωB97X (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/wb_44_20A.svg)**b** 20A · 1.999912\
−0.3569

ωB97X, (6,6)

(a, f)

![benzene, ωB97X (6,6), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/wb_66_24A.svg)**f** 24A · 0.000000\
−0.0009

![benzene, ωB97X (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/wb_66_17A.svg)**a** 17A · 2.000000\
−0.4903

(b, e)

![benzene, ωB97X (6,6), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/wb_66_23A.svg)**e** 23A · 0.000071\
−0.1429

![benzene, ωB97X (6,6), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/wb_66_21A.svg)**b** 21A · 1.999929\
−0.3574

(c, d)

![benzene, ωB97X (6,6), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/wb_66_22A.svg)**d** 22A · 0.000100\
−0.1728

![benzene, ωB97X (6,6), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/wb_66_20A.svg)**c** 20A · 1.999900\
−0.3597

ωB97X, (8,8)

(a, h)

![benzene, ωB97X (8,8), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/wb_88_24A.svg)**h** 24A · 0.000000\
−0.0975

![benzene, ωB97X (8,8), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/wb_88_12A.svg)**a** 12A · 2.000000\
−0.6667

(b, g)

![benzene, ωB97X (8,8), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/wb_88_25A.svg)**g** 25A · 0.000000\
−0.0269

![benzene, ωB97X (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/wb_88_17A.svg)**b** 17A · 2.000000\
−0.5081

(c, f)

![benzene, ωB97X (8,8), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/wb_88_23A.svg)**f** 23A · 0.000079\
−0.1551

![benzene, ωB97X (8,8), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/wb_88_21A.svg)**c** 21A · 1.999921\
−0.3724

(d, e)

![benzene, ωB97X (8,8), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/wb_88_22A.svg)**e** 22A · 0.000116\
−0.2191

![benzene, ωB97X (8,8), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_benzene/wb_88_20A.svg)**d** 20A · 1.999884\
−0.3750

[← acrolein](https://reksstudio.github.io/v2/main/results/quest/quest3-acrolein/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-benzene) · [butadiene →](https://reksstudio.github.io/v2/main/results/quest/quest3-butadiene/index.md)
