# quinoxaline — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest6-quinoxaline/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# quinoxaline

QUEST6: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](#s1) · [S2](#s2) · [T1](#t1) · [T2](#t2) · [Orbitals](#orbitals)

![quinoxaline: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest6_quinoxaline.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: B<sub>2</sub> 4.641 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | **(2,2)** | **4.717** | **+0.076** | B<sub>2</sub> |
| | (4,4) | 4.735 | +0.094 | B<sub>2</sub> |
| | (6,6) | 4.819 | +0.178 | B<sub>2</sub> |
| | (8,8) | 4.751 | +0.110 | B<sub>2</sub> |
| M08-SO | **(2,2)** | **4.640** | **−0.001** | B<sub>2</sub> |
| | (4,4) | 4.589 | −0.052 | B<sub>2</sub> |
| | (6,6) | 4.597 | −0.044 | B<sub>2</sub> |
| | (8,8) | 4.521 | −0.120 | B<sub>2</sub> |
| ωB97X | (2,2) | 4.807 | +0.166 | B<sub>2</sub> |
| | (4,4) | 4.806 | +0.165 | B<sub>2</sub> |
| | (6,6) | 4.845 | +0.204 | B<sub>2</sub> |
| | **(8,8)** | **4.754** | **+0.113** | B<sub>2</sub> |

### S2 {#s2}

TBE: A<sub>1</sub> 4.248 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | (4,4) | 4.877 | +0.629 | A<sub>1</sub> |
| | (6,6) | 4.991 | +0.743 | A<sub>1</sub> |
| | **(8,8)** | **4.683** | **+0.435** | A<sub>1</sub> |
| M08-SO | (2,2) | – | – | – |
| | (4,4) | 4.877 | +0.629 | A<sub>1</sub> |
| | (6,6) | 4.957 | +0.709 | A<sub>1</sub> |
| | **(8,8)** | **4.707** | **+0.460** | A<sub>1</sub> |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 5.201 | +0.953 | A<sub>1</sub> |
| | (6,6) | 5.308 | +1.060 | A<sub>1</sub> |
| | **(8,8)** | **5.026** | **+0.778** | A<sub>1</sub> |

### T1 {#t1}

TBE: B<sub>2</sub> 3.255 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 3.387 | +0.132 | B<sub>2</sub> |
| | (4,4) | 3.636 | +0.381 | B<sub>2</sub> |
| | (6,6) | 3.508 | +0.253 | B<sub>2</sub> |
| | **(8,8)** | **3.369** | **+0.114** | B<sub>2</sub> |
| M08-SO | (2,2) | 3.548 | +0.293 | B<sub>2</sub> |
| | (4,4) | 3.780 | +0.525 | B<sub>2</sub> |
| | (6,6) | 3.631 | +0.376 | B<sub>2</sub> |
| | **(8,8)** | **3.455** | **+0.200** | B<sub>2</sub> |
| ωB97X | (2,2) | 3.510 | +0.255 | B<sub>2</sub> |
| | (4,4) | 3.805 | +0.550 | B<sub>2</sub> |
| | (6,6) | 3.606 | +0.350 | B<sub>2</sub> |
| | **(8,8)** | **3.440** | **+0.185** | B<sub>2</sub> |

### T2 {#t2}

TBE: B<sub>1</sub> 3.352 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **3.585** | **+0.233** | –<sup>m</sup> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **4.246** | **+0.894** | –<sup>m</sup> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **3.768** | **+0.416** | –<sup>m</sup> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (2,2)

(a, b)

![quinoxaline, BH\&HLYP (2,2), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/bh_22_35A.svg)**b** 35A · 0.000023\
−0.1366

![quinoxaline, BH\&HLYP (2,2), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/bh_22_34A.svg)**a** 34A · 1.999977\
−0.2991

BH\&HLYP, (4,4)

(a, d)

![quinoxaline, BH\&HLYP (4,4), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/bh_44_36A.svg)**d** 36A · 0.000026\
−0.0889

![quinoxaline, BH\&HLYP (4,4), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/bh_44_33A.svg)**a** 33A · 1.999974\
−0.3070

(b, c)

![quinoxaline, BH\&HLYP (4,4), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/bh_44_35A.svg)**c** 35A · 0.000013\
−0.1319

![quinoxaline, BH\&HLYP (4,4), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/bh_44_34A.svg)**b** 34A · 1.999987\
−0.2994

BH\&HLYP, (6,6)

(a, f)

![quinoxaline, BH\&HLYP (6,6), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/bh_66_37A.svg)**f** 37A · 0.000000\
−0.0827

![quinoxaline, BH\&HLYP (6,6), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/bh_66_31A.svg)**a** 31A · 2.000000\
−0.3944

(b, e)

![quinoxaline, BH\&HLYP (6,6), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/bh_66_36A.svg)**e** 36A · 0.000028\
−0.0949

![quinoxaline, BH\&HLYP (6,6), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/bh_66_33A.svg)**b** 33A · 1.999972\
−0.3103

(c, d)

![quinoxaline, BH\&HLYP (6,6), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/bh_66_35A.svg)**d** 35A · 0.000075\
−0.1413

![quinoxaline, BH\&HLYP (6,6), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/bh_66_34A.svg)**c** 34A · 1.999925\
−0.3044

BH\&HLYP, (8,8)

(a, h)

![quinoxaline, BH\&HLYP (8,8), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/bh_88_38A.svg)**h** 38A · 0.000000\
−0.0145

![quinoxaline, BH\&HLYP (8,8), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/bh_88_29A.svg)**a** 29A · 2.000000\
−0.4187

(b, g)

![quinoxaline, BH\&HLYP (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/bh_88_37A.svg)**g** 37A · 0.000000\
−0.0931

![quinoxaline, BH\&HLYP (8,8), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/bh_88_31A.svg)**b** 31A · 2.000000\
−0.3994

(c, f)

![quinoxaline, BH\&HLYP (8,8), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/bh_88_36A.svg)**f** 36A · 0.000022\
−0.1118

![quinoxaline, BH\&HLYP (8,8), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/bh_88_33A.svg)**c** 33A · 1.999978\
−0.3138

(d, e)

![quinoxaline, BH\&HLYP (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/bh_88_35A.svg)**e** 35A · 0.000059\
−0.1441

![quinoxaline, BH\&HLYP (8,8), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/bh_88_34A.svg)**d** 34A · 1.999941\
−0.3033

M08-SO, (2,2)

(a, b)

![quinoxaline, M08-SO (2,2), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/m08_22_35A.svg)**b** 35A · 0.000007\
−0.1546

![quinoxaline, M08-SO (2,2), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/m08_22_34A.svg)**a** 34A · 1.999993\
−0.3145

M08-SO, (4,4)

(a, d)

![quinoxaline, M08-SO (4,4), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/m08_44m_36A.svg)**d** 36A · 0.000003\
−0.1300

![quinoxaline, M08-SO (4,4), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/m08_44m_33A.svg)**a** 33A · 1.999997\
−0.3242

(b, c)

![quinoxaline, M08-SO (4,4), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/m08_44m_35A.svg)**c** 35A · 0.000007\
−0.1509

![quinoxaline, M08-SO (4,4), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/m08_44m_34A.svg)**b** 34A · 1.999993\
−0.3217

M08-SO, (6,6)

(a, f)

![quinoxaline, M08-SO (6,6), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/m08_66_37A.svg)**f** 37A · 0.000000\
−0.1032

![quinoxaline, M08-SO (6,6), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/m08_66_30A.svg)**a** 30A · 2.000000\
−0.4096

(b, e)

![quinoxaline, M08-SO (6,6), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/m08_66_36A.svg)**e** 36A · 0.000003\
−0.1143

![quinoxaline, M08-SO (6,6), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/m08_66_33A.svg)**b** 33A · 1.999997\
−0.3269

(c, d)

![quinoxaline, M08-SO (6,6), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/m08_66_35A.svg)**d** 35A · 0.000012\
−0.1596

![quinoxaline, M08-SO (6,6), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/m08_66_34A.svg)**c** 34A · 1.999988\
−0.3211

M08-SO, (8,8)

(a, h)

![quinoxaline, M08-SO (8,8), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/m08_88_38A.svg)**h** 38A · 0.000000\
−0.0334

![quinoxaline, M08-SO (8,8), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/m08_88_29A.svg)**a** 29A · 2.000000\
−0.4340

(b, g)

![quinoxaline, M08-SO (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/m08_88_37A.svg)**g** 37A · 0.000000\
−0.1129

![quinoxaline, M08-SO (8,8), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/m08_88_30A.svg)**b** 30A · 2.000000\
−0.4141

(c, f)

![quinoxaline, M08-SO (8,8), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/m08_88_36A.svg)**f** 36A · 0.000003\
−0.1302

![quinoxaline, M08-SO (8,8), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/m08_88_33A.svg)**c** 33A · 1.999997\
−0.3294

(d, e)

![quinoxaline, M08-SO (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/m08_88_35A.svg)**e** 35A · 0.000011\
−0.1626

![quinoxaline, M08-SO (8,8), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/m08_88_34A.svg)**d** 34A · 1.999989\
−0.3198

ωB97X, (2,2)

(a, b)

![quinoxaline, ωB97X (2,2), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/wb_22_35A.svg)**b** 35A · 0.000017\
−0.1797

![quinoxaline, ωB97X (2,2), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/wb_22_34A.svg)**a** 34A · 1.999983\
−0.3483

ωB97X, (4,4)

(a, d)

![quinoxaline, ωB97X (4,4), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/wb_44_36A.svg)**d** 36A · 0.000019\
−0.1317

![quinoxaline, ωB97X (4,4), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/wb_44_32A.svg)**a** 32A · 1.999981\
−0.3565

(b, c)

![quinoxaline, ωB97X (4,4), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/wb_44_35A.svg)**c** 35A · 0.000006\
−0.1710

![quinoxaline, ωB97X (4,4), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/wb_44_34A.svg)**b** 34A · 1.999994\
−0.3489

ωB97X, (6,6)

(a, f)

![quinoxaline, ωB97X (6,6), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/wb_66_37A.svg)**f** 37A · 0.000000\
−0.1263

![quinoxaline, ωB97X (6,6), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/wb_66_30A.svg)**a** 30A · 2.000000\
−0.4451

(b, e)

![quinoxaline, ωB97X (6,6), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/wb_66_36A.svg)**e** 36A · 0.000020\
−0.1363

![quinoxaline, ωB97X (6,6), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/wb_66_33A.svg)**b** 33A · 1.999980\
−0.3598

(c, d)

![quinoxaline, ωB97X (6,6), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/wb_66_35A.svg)**d** 35A · 0.000045\
−0.1851

![quinoxaline, ωB97X (6,6), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/wb_66_34A.svg)**c** 34A · 1.999955\
−0.3516

ωB97X, (8,8)

(a, h)

![quinoxaline, ωB97X (8,8), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/wb_88_38A.svg)**h** 38A · 0.000000\
−0.0469

![quinoxaline, ωB97X (8,8), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/wb_88_29A.svg)**a** 29A · 2.000000\
−0.4714

(b, g)

![quinoxaline, ωB97X (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/wb_88_37A.svg)**g** 37A · 0.000000\
−0.1344

![quinoxaline, ωB97X (8,8), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/wb_88_30A.svg)**b** 30A · 2.000000\
−0.4484

(c, f)

![quinoxaline, ωB97X (8,8), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/wb_88_36A.svg)**f** 36A · 0.000013\
−0.1514

![quinoxaline, ωB97X (8,8), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/wb_88_33A.svg)**c** 33A · 1.999987\
−0.3594

(d, e)

![quinoxaline, ωB97X (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/wb_88_35A.svg)**e** 35A · 0.000035\
−0.1872

![quinoxaline, ωB97X (8,8), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_quinoxaline/wb_88_34A.svg)**d** 34A · 1.999965\
−0.3494

[← phthalazine](https://reksstudio.github.io/v2/main/results/quest/quest6-phthalazine/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-quinoxaline) · [twisted DMABN →](https://reksstudio.github.io/v2/main/results/quest/quest6-tdmabn/index.md)
