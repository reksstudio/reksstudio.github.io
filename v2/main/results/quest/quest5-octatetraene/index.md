# octatetraene — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest5-octatetraene/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# octatetraene

QUEST5: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](#s1) · [S2](#s2) · [T1](#t1) · [T2](#t2) · [Orbitals](#orbitals)

![octatetraene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest5_octatetraene.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: B<sub>u</sub> 4.78 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 4.162 | −0.618 | B<sub>u</sub> |
| | (4,4) | 4.214 | −0.566 | B<sub>u</sub> |
| | (6,6) | 4.308 | −0.472 | B<sub>u</sub> |
| | **(8,8)** | **4.415** | **−0.365** | B<sub>u</sub> |
| M08-SO | (2,2) | 4.024 | −0.756 | B<sub>u</sub> |
| | (4,4) | 4.089 | −0.691 | B<sub>u</sub> |
| | (6,6) | 4.166 | −0.614 | B<sub>u</sub> |
| | **(8,8)** | **4.247** | **−0.533** | B<sub>u</sub> |
| ωB97X | (2,2) | 4.565 | −0.215 | B<sub>u</sub> |
| | (4,4) | 4.620 | −0.160 | B<sub>u</sub> |
| | (6,6) | 4.663 | −0.117 | B<sub>u</sub> |
| | **(8,8)** | **4.763** | **−0.017** | B<sub>u</sub> |

### S2 {#s2}

TBE: A<sub>g</sub> 4.90 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 6.963 | +2.062 | A<sub>g</sub> |
| | (4,4) | 4.973 | +0.072 | A<sub>g</sub> |
| | **(6,6)** | **4.957** | **+0.057** | A<sub>g</sub> |
| | (8,8) | 4.697 | −0.203 | A<sub>g</sub> |
| M08-SO | (2,2) | 6.865 | +1.965 | A<sub>g</sub> |
| | (4,4) | 4.947 | +0.047 | A<sub>g</sub> |
| | **(6,6)** | **4.934** | **+0.034** | A<sub>g</sub> |
| | (8,8) | 4.661 | −0.239 | A<sub>g</sub> |
| ωB97X | (2,2) | 7.559 | +2.659 | A<sub>g</sub> |
| | **(4,4)** | **4.988** | **+0.088** | A<sub>g</sub> |
| | (6,6) | 4.997 | +0.097 | A<sub>g</sub> |
| | (8,8) | 4.697 | −0.203 | A<sub>g</sub> |

### T1 {#t1}

TBE: B<sub>u</sub> 2.36 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 2.576 | +0.216 | B<sub>u</sub> |
| | (4,4) | 2.445 | +0.085 | B<sub>u</sub> |
| | (6,6) | 2.423 | +0.063 | B<sub>u</sub> |
| | **(8,8)** | **2.419** | **+0.059** | B<sub>u</sub> |
| M08-SO | (2,2) | 2.702 | +0.342 | B<sub>u</sub> |
| | (4,4) | 2.571 | +0.211 | B<sub>u</sub> |
| | (6,6) | 2.534 | +0.174 | B<sub>u</sub> |
| | **(8,8)** | **2.526** | **+0.166** | B<sub>u</sub> |
| ωB97X | (2,2) | 2.778 | +0.418 | B<sub>u</sub> |
| | (4,4) | 2.708 | +0.348 | B<sub>u</sub> |
| | (6,6) | 2.629 | +0.269 | B<sub>u</sub> |
| | **(8,8)** | **2.591** | **+0.231** | B<sub>u</sub> |

### T2 {#t2}

TBE: A<sub>g</sub> 3.73 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | (4,4) | 3.777 | +0.047 | A<sub>g</sub> |
| | (6,6) | 3.795 | +0.065 | A<sub>g</sub> |
| | **(8,8)** | **3.718** | **−0.012** | A<sub>g</sub> |
| M08-SO | (2,2) | – | – | – |
| | (4,4) | 3.887 | +0.157 | A<sub>g</sub> |
| | (6,6) | 3.873 | +0.143 | A<sub>g</sub> |
| | **(8,8)** | **3.783** | **+0.053** | A<sub>g</sub> |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 4.189 | +0.459 | A<sub>g</sub> |
| | (6,6) | 4.285 | +0.555 | A<sub>g</sub> |
| | **(8,8)** | **4.175** | **+0.445** | A<sub>g</sub> |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (2,2)

(a, b)

![octatetraene, BH\&HLYP (2,2), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/bh_22_30A.svg)**b** 30A · 0.000723\
−0.1185

![octatetraene, BH\&HLYP (2,2), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/bh_22_29A.svg)**a** 29A · 1.999277\
−0.2444

BH\&HLYP, (4,4)

(a, d)

![octatetraene, BH\&HLYP (4,4), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/bh_44_31A.svg)**d** 31A · 0.000000\
−0.0470

![octatetraene, BH\&HLYP (4,4), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/bh_44_28A.svg)**a** 28A · 2.000000\
−0.3181

(b, c)

![octatetraene, BH\&HLYP (4,4), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/bh_44_30A.svg)**c** 30A · 0.000399\
−0.1215

![octatetraene, BH\&HLYP (4,4), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/bh_44_29A.svg)**b** 29A · 1.999601\
−0.2443

BH\&HLYP, (6,6)

(a, f)

![octatetraene, BH\&HLYP (6,6), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/bh_66_32A.svg)**f** 32A · 0.000000\
−0.0303

![octatetraene, BH\&HLYP (6,6), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/bh_66_27A.svg)**a** 27A · 2.000000\
−0.3816

(b, e)

![octatetraene, BH\&HLYP (6,6), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/bh_66_31A.svg)**e** 31A · 0.000001\
−0.0627

![octatetraene, BH\&HLYP (6,6), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/bh_66_28A.svg)**b** 28A · 1.999999\
−0.3229

(c, d)

![octatetraene, BH\&HLYP (6,6), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/bh_66_30A.svg)**d** 30A · 0.000424\
−0.1248

![octatetraene, BH\&HLYP (6,6), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/bh_66_29A.svg)**c** 29A · 1.999576\
−0.2501

BH\&HLYP, (8,8)

(a, h)

![octatetraene, BH\&HLYP (8,8), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/bh_88_32A.svg)**h** 32A · 0.000000\
−0.0533

![octatetraene, BH\&HLYP (8,8), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/bh_88_26A.svg)**a** 26A · 2.000000\
−0.4136

(b, g)

![octatetraene, BH\&HLYP (8,8), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/bh_88_33A.svg)**g** 33A · 0.000000\
−0.0410

![octatetraene, BH\&HLYP (8,8), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/bh_88_27A.svg)**b** 27A · 2.000000\
−0.3822

(c, f)

![octatetraene, BH\&HLYP (8,8), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/bh_88_31A.svg)**f** 31A · 0.000000\
−0.0740

![octatetraene, BH\&HLYP (8,8), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/bh_88_28A.svg)**c** 28A · 2.000000\
−0.3310

(d, e)

![octatetraene, BH\&HLYP (8,8), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/bh_88_30A.svg)**e** 30A · 0.000674\
−0.1290

![octatetraene, BH\&HLYP (8,8), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/bh_88_29A.svg)**d** 29A · 1.999326\
−0.2522

M08-SO, (2,2)

(a, b)

![octatetraene, M08-SO (2,2), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/m08_22_30A.svg)**b** 30A · 0.000216\
−0.1358

![octatetraene, M08-SO (2,2), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/m08_22_29A.svg)**a** 29A · 1.999784\
−0.2608

M08-SO, (4,4)

(a, d)

![octatetraene, M08-SO (4,4), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/m08_44m_31A.svg)**d** 31A · 0.000000\
−0.0800

![octatetraene, M08-SO (4,4), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/m08_44m_28A.svg)**a** 28A · 2.000000\
−0.3358

(b, c)

![octatetraene, M08-SO (4,4), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/m08_44m_30A.svg)**c** 30A · 0.000064\
−0.1562

![octatetraene, M08-SO (4,4), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/m08_44m_29A.svg)**b** 29A · 1.999936\
−0.2648

M08-SO, (6,6)

(a, f)

![octatetraene, M08-SO (6,6), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/m08_66_32A.svg)**f** 32A · 0.000000\
−0.0467

![octatetraene, M08-SO (6,6), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/m08_66_27A.svg)**a** 27A · 2.000000\
−0.3953

(b, e)

![octatetraene, M08-SO (6,6), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/m08_66_31A.svg)**e** 31A · 0.000000\
−0.0798

![octatetraene, M08-SO (6,6), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/m08_66_28A.svg)**b** 28A · 2.000000\
−0.3374

(c, d)

![octatetraene, M08-SO (6,6), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/m08_66_30A.svg)**d** 30A · 0.000095\
−0.1430

![octatetraene, M08-SO (6,6), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/m08_66_29A.svg)**c** 29A · 1.999905\
−0.2658

M08-SO, (8,8)

(a, h)

![octatetraene, M08-SO (8,8), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/m08_88_32A.svg)**h** 32A · 0.000000\
−0.0702

![octatetraene, M08-SO (8,8), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/m08_88_26A.svg)**a** 26A · 2.000000\
−0.4266

(b, g)

![octatetraene, M08-SO (8,8), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/m08_88_33A.svg)**g** 33A · 0.000000\
−0.0589

![octatetraene, M08-SO (8,8), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/m08_88_27A.svg)**b** 27A · 2.000000\
−0.3967

(c, f)

![octatetraene, M08-SO (8,8), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/m08_88_31A.svg)**f** 31A · 0.000000\
−0.0908

![octatetraene, M08-SO (8,8), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/m08_88_28A.svg)**c** 28A · 2.000000\
−0.3470

(d, e)

![octatetraene, M08-SO (8,8), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/m08_88_30A.svg)**e** 30A · 0.000163\
−0.1481

![octatetraene, M08-SO (8,8), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/m08_88_29A.svg)**d** 29A · 1.999837\
−0.2684

ωB97X, (2,2)

(a, b)

![octatetraene, ωB97X (2,2), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/wb_22_30A.svg)**b** 30A · 0.000946\
−0.1559

![octatetraene, ωB97X (2,2), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/wb_22_29A.svg)**a** 29A · 1.999054\
−0.2930

ωB97X, (4,4)

(a, d)

![octatetraene, ωB97X (4,4), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/wb_44m_31A.svg)**d** 31A · 0.000000\
−0.0964

![octatetraene, ωB97X (4,4), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/wb_44m_28A.svg)**a** 28A · 2.000000\
−0.3694

(b, c)

![octatetraene, ωB97X (4,4), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/wb_44m_30A.svg)**c** 30A · 0.000159\
−0.1801

![octatetraene, ωB97X (4,4), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/wb_44m_29A.svg)**b** 29A · 1.999841\
−0.2943

ωB97X, (6,6)

(a, f)

![octatetraene, ωB97X (6,6), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/wb_66_32A.svg)**f** 32A · 0.000000\
−0.0530

![octatetraene, ωB97X (6,6), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/wb_66_27A.svg)**a** 27A · 2.000000\
−0.4320

(b, e)

![octatetraene, ωB97X (6,6), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/wb_66_31A.svg)**e** 31A · 0.000000\
−0.0927

![octatetraene, ωB97X (6,6), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/wb_66_28A.svg)**b** 28A · 2.000000\
−0.3689

(c, d)

![octatetraene, ωB97X (6,6), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/wb_66_30A.svg)**d** 30A · 0.000397\
−0.1623

![octatetraene, ωB97X (6,6), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/wb_66_29A.svg)**c** 29A · 1.999603\
−0.2937

ωB97X, (8,8)

(a, h)

![octatetraene, ωB97X (8,8), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/wb_88_32A.svg)**h** 32A · 0.000000\
−0.0855

![octatetraene, ωB97X (8,8), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/wb_88_26A.svg)**a** 26A · 2.000000\
−0.4561

(b, g)

![octatetraene, ωB97X (8,8), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/wb_88_33A.svg)**g** 33A · 0.000000\
−0.0681

![octatetraene, ωB97X (8,8), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/wb_88_27A.svg)**b** 27A · 2.000000\
−0.4325

(c, f)

![octatetraene, ωB97X (8,8), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/wb_88_31A.svg)**f** 31A · 0.000000\
−0.1018

![octatetraene, ωB97X (8,8), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/wb_88_28A.svg)**c** 28A · 2.000000\
−0.3880

(d, e)

![octatetraene, ωB97X (8,8), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/wb_88_30A.svg)**e** 30A · 0.000790\
−0.1685

![octatetraene, ωB97X (8,8), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_octatetraene/wb_88_29A.svg)**d** 29A · 1.999210\
−0.2974

[← nitroxyl](https://reksstudio.github.io/v2/main/results/quest/quest5-nitroxyl/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-octatetraene) · [streptocyanine-C3 →](https://reksstudio.github.io/v2/main/results/quest/quest5-strepto-c3/index.md)
