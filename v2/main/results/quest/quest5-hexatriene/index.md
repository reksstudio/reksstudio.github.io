# hexatriene — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest5-hexatriene/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# hexatriene

QUEST5: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](#s1) · [S2](#s2) · [T1](#t1) · [T2](#t2) · [Orbitals](#orbitals)

![hexatriene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest5_hexatriene.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: B<sub>u</sub> 5.37 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 4.797 | −0.573 | B<sub>u</sub> |
| | (4,4) | 4.888 | −0.482 | B<sub>u</sub> |
| | (6,6) | 4.982 | −0.388 | B<sub>u</sub> |
| | **(8,8)** | **5.087** | **−0.283** | B<sub>u</sub> |
| M08-SO | (2,2) | 4.608 | −0.762 | B<sub>u</sub> |
| | (4,4) | 4.727 | −0.643 | B<sub>u</sub> |
| | (6,6) | 4.766 | −0.604 | B<sub>u</sub> |
| | **(8,8)** | **4.846** | **−0.524** | B<sub>u</sub> |
| ωB97X | (2,2) | 5.119 | −0.251 | B<sub>u</sub> |
| | (4,4) | 5.215 | −0.155 | B<sub>u</sub> |
| | (6,6) | 5.314 | −0.057 | B<sub>u</sub> |
| | **(8,8)** | **5.401** | **+0.031** | B<sub>u</sub> |

### S2 {#s2}

TBE: A<sub>g</sub> 5.62 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 8.008 | +2.388 | A<sub>g</sub> |
| | **(4,4)** | **5.691** | **+0.071** | A<sub>g</sub> |
| | (6,6) | 5.775 | +0.155 | A<sub>g</sub> |
| | (8,8) | 5.736 | +0.116 | A<sub>g</sub> |
| M08-SO | (2,2) | 7.867 | +2.248 | A<sub>g</sub> |
| | **(4,4)** | **5.645** | **+0.025** | A<sub>g</sub> |
| | (6,6) | 5.754 | +0.134 | A<sub>g</sub> |
| | (8,8) | 5.732 | +0.112 | A<sub>g</sub> |
| ωB97X | (2,2) | 8.475 | +2.855 | A<sub>g</sub> |
| | **(4,4)** | **5.626** | **+0.006** | A<sub>g</sub> |
| | (6,6) | 5.780 | +0.160 | A<sub>g</sub> |
| | (8,8) | 5.755 | +0.135 | A<sub>g</sub> |

### T1 {#t1}

TBE: B<sub>u</sub> 2.73 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 2.930 | +0.200 | B<sub>u</sub> |
| | (4,4) | 2.799 | +0.069 | B<sub>u</sub> |
| | **(6,6)** | **2.745** | **+0.015** | B<sub>u</sub> |
| | (8,8) | 2.745 | +0.015 | B<sub>u</sub> |
| M08-SO | (2,2) | 3.079 | +0.349 | B<sub>u</sub> |
| | (4,4) | 2.944 | +0.214 | B<sub>u</sub> |
| | (6,6) | 2.876 | +0.146 | B<sub>u</sub> |
| | **(8,8)** | **2.867** | **+0.137** | B<sub>u</sub> |
| ωB97X | (2,2) | 3.098 | +0.368 | B<sub>u</sub> |
| | (4,4) | 3.031 | +0.301 | B<sub>u</sub> |
| | **(6,6)** | **2.933** | **+0.203** | B<sub>u</sub> |
| | (8,8) | 2.936 | +0.205 | B<sub>u</sub> |

### T2 {#t2}

TBE: A<sub>g</sub> 4.36 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **4.302** | **−0.058** | A<sub>g</sub> |
| | (6,6) | 4.239 | −0.121 | A<sub>g</sub> |
| | (8,8) | 4.175 | −0.185 | A<sub>g</sub> |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **4.414** | **+0.054** | A<sub>g</sub> |
| | (6,6) | 4.289 | −0.071 | A<sub>g</sub> |
| | (8,8) | 4.231 | −0.129 | A<sub>g</sub> |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 4.663 | +0.303 | A<sub>g</sub> |
| | (6,6) | 4.603 | +0.243 | A<sub>g</sub> |
| | **(8,8)** | **4.553** | **+0.193** | A<sub>g</sub> |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (2,2)

(a, b)

![hexatriene, BH\&HLYP (2,2), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/bh_22_23A.svg)**b** 23A · 0.000856\
−0.1159

![hexatriene, BH\&HLYP (2,2), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/bh_22_22A.svg)**a** 22A · 1.999144\
−0.2606

BH\&HLYP, (4,4)

(a, d)

![hexatriene, BH\&HLYP (4,4), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/bh_44m_24A.svg)**d** 24A · 0.000001\
−0.0584

![hexatriene, BH\&HLYP (4,4), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/bh_44m_21A.svg)**a** 21A · 1.999999\
−0.3521

(b, c)

![hexatriene, BH\&HLYP (4,4), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/bh_44m_23A.svg)**c** 23A · 0.000326\
−0.1417

![hexatriene, BH\&HLYP (4,4), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/bh_44m_22A.svg)**b** 22A · 1.999674\
−0.2684

BH\&HLYP, (6,6)

(a, f)

![hexatriene, BH\&HLYP (6,6), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/bh_66_25A.svg)**f** 25A · 0.000000\
−0.0522

![hexatriene, BH\&HLYP (6,6), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/bh_66_20A.svg)**a** 20A · 2.000000\
−0.4135

(b, e)

![hexatriene, BH\&HLYP (6,6), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/bh_66_24A.svg)**e** 24A · 0.000001\
−0.0588

![hexatriene, BH\&HLYP (6,6), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/bh_66_21A.svg)**b** 21A · 1.999999\
−0.3546

(c, d)

![hexatriene, BH\&HLYP (6,6), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/bh_66_23A.svg)**d** 23A · 0.001053\
−0.1278

![hexatriene, BH\&HLYP (6,6), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/bh_66_22A.svg)**c** 22A · 1.998947\
−0.2711

BH\&HLYP, (8,8)

(a, h)

![hexatriene, BH\&HLYP (8,8), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/bh_88_25A.svg)**h** 25A · 0.000000\
−0.0689

![hexatriene, BH\&HLYP (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/bh_88_16A.svg)**a** 16A · 2.000000\
−0.5027

(b, g)

![hexatriene, BH\&HLYP (8,8), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/bh_88_26A.svg)**g** 26A · 0.000000\
−0.0653

![hexatriene, BH\&HLYP (8,8), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/bh_88_20A.svg)**b** 20A · 2.000000\
−0.4237

(c, f)

![hexatriene, BH\&HLYP (8,8), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/bh_88_24A.svg)**f** 24A · 0.000001\
−0.0817

![hexatriene, BH\&HLYP (8,8), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/bh_88_21A.svg)**c** 21A · 1.999999\
−0.3659

(d, e)

![hexatriene, BH\&HLYP (8,8), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/bh_88_23A.svg)**e** 23A · 0.001127\
−0.1394

![hexatriene, BH\&HLYP (8,8), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/bh_88_22A.svg)**d** 22A · 1.998873\
−0.2792

M08-SO, (2,2)

(a, b)

![hexatriene, M08-SO (2,2), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/m08_22_23A.svg)**b** 23A · 0.000231\
−0.1334

![hexatriene, M08-SO (2,2), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/m08_22_22A.svg)**a** 22A · 1.999769\
−0.2765

M08-SO, (4,4)

(a, d)

![hexatriene, M08-SO (4,4), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/m08_44m_24A.svg)**d** 24A · 0.000000\
−0.0770

![hexatriene, M08-SO (4,4), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/m08_44m_21A.svg)**a** 21A · 2.000000\
−0.3667

(b, c)

![hexatriene, M08-SO (4,4), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/m08_44m_23A.svg)**c** 23A · 0.000077\
−0.1577

![hexatriene, M08-SO (4,4), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/m08_44m_22A.svg)**b** 22A · 1.999923\
−0.2841

M08-SO, (6,6)

(a, f)

![hexatriene, M08-SO (6,6), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/m08_66_25A.svg)**f** 25A · 0.000000\
−0.0691

![hexatriene, M08-SO (6,6), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/m08_66_20A.svg)**a** 20A · 2.000000\
−0.4270

(b, e)

![hexatriene, M08-SO (6,6), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/m08_66_24A.svg)**e** 24A · 0.000000\
−0.0762

![hexatriene, M08-SO (6,6), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/m08_66_21A.svg)**b** 21A · 2.000000\
−0.3687

(c, d)

![hexatriene, M08-SO (6,6), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/m08_66_23A.svg)**d** 23A · 0.000228\
−0.1472

![hexatriene, M08-SO (6,6), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/m08_66_22A.svg)**c** 22A · 1.999772\
−0.2860

M08-SO, (8,8)

(a, h)

![hexatriene, M08-SO (8,8), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/m08_88_26A.svg)**h** 26A · 0.000000\
−0.0773

![hexatriene, M08-SO (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/m08_88_16A.svg)**a** 16A · 2.000000\
−0.5016

(b, g)

![hexatriene, M08-SO (8,8), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/m08_88_25A.svg)**g** 25A · 0.000000\
−0.0841

![hexatriene, M08-SO (8,8), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/m08_88_20A.svg)**b** 20A · 2.000000\
−0.4376

(c, f)

![hexatriene, M08-SO (8,8), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/m08_88_24A.svg)**f** 24A · 0.000000\
−0.0997

![hexatriene, M08-SO (8,8), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/m08_88_21A.svg)**c** 21A · 2.000000\
−0.3804

(d, e)

![hexatriene, M08-SO (8,8), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/m08_88_23A.svg)**e** 23A · 0.000261\
−0.1574

![hexatriene, M08-SO (8,8), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/m08_88_22A.svg)**d** 22A · 1.999739\
−0.2943

ωB97X, (2,2)

(a, b)

![hexatriene, ωB97X (2,2), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/wb_22_23A.svg)**b** 23A · 0.001009\
−0.1565

![hexatriene, ωB97X (2,2), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/wb_22_22A.svg)**a** 22A · 1.998991\
−0.3102

ωB97X, (4,4)

(a, d)

![hexatriene, ωB97X (4,4), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/wb_44m_24A.svg)**d** 24A · 0.000000\
−0.0958

![hexatriene, ωB97X (4,4), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/wb_44m_21A.svg)**a** 21A · 2.000000\
−0.4017

(b, c)

![hexatriene, ωB97X (4,4), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/wb_44m_23A.svg)**c** 23A · 0.000193\
−0.1837

![hexatriene, ωB97X (4,4), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/wb_44m_22A.svg)**b** 22A · 1.999807\
−0.3145

ωB97X, (6,6)

(a, f)

![hexatriene, ωB97X (6,6), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/wb_66_25A.svg)**f** 25A · 0.000000\
−0.0850

![hexatriene, ωB97X (6,6), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/wb_66_20A.svg)**a** 20A · 2.000000\
−0.4641

(b, e)

![hexatriene, ωB97X (6,6), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/wb_66_24A.svg)**e** 24A · 0.000000\
−0.0926

![hexatriene, ωB97X (6,6), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/wb_66_21A.svg)**b** 21A · 2.000000\
−0.4022

(c, d)

![hexatriene, ωB97X (6,6), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/wb_66_23A.svg)**d** 23A · 0.001005\
−0.1712

![hexatriene, ωB97X (6,6), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/wb_66_22A.svg)**c** 22A · 1.998995\
−0.3166

ωB97X, (8,8)

(a, h)

![hexatriene, ωB97X (8,8), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/wb_88_26A.svg)**h** 26A · 0.000000\
−0.0848

![hexatriene, ωB97X (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/wb_88_16A.svg)**a** 16A · 2.000000\
−0.5356

(b, g)

![hexatriene, ωB97X (8,8), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/wb_88_25A.svg)**g** 25A · 0.000000\
−0.1014

![hexatriene, ωB97X (8,8), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/wb_88_20A.svg)**b** 20A · 2.000000\
−0.4762

(c, f)

![hexatriene, ωB97X (8,8), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/wb_88_24A.svg)**f** 24A · 0.000000\
−0.1181

![hexatriene, ωB97X (8,8), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/wb_88_21A.svg)**c** 21A · 2.000000\
−0.4157

(d, e)

![hexatriene, ωB97X (8,8), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/wb_88_23A.svg)**e** 23A · 0.001075\
−0.1814

![hexatriene, ωB97X (8,8), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_hexatriene/wb_88_22A.svg)**d** 22A · 1.998925\
−0.3258

[← diazirine](https://reksstudio.github.io/v2/main/results/quest/quest5-diazirine/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-hexatriene) · [maleimide →](https://reksstudio.github.io/v2/main/results/quest/quest5-maleimide/index.md)
