# maleimide — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest5-maleimide/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# maleimide

QUEST5: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](#s1) · [S2](#s2) · [T1](#t1) · [T2](#t2) · [Orbitals](#orbitals)

![maleimide: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest5_maleimide.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: B<sub>1</sub> 3.80 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **4.474** | **+0.674** | B<sub>1</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **4.338** | **+0.538** | B<sub>1</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **4.432** | **+0.632** | B<sub>1</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

### S2 {#s2}

TBE: B<sub>2</sub> 6.21 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | (4,4) | 6.341 | +0.131 | B<sub>2</sub> |
| | **(6,6)** | **6.285** | **+0.075** | B<sub>2</sub> |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **6.166** | **−0.044** | B<sub>2</sub> |
| | (6,6) | 6.119 | −0.091 | B<sub>2</sub> |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 6.317 | +0.107 | B<sub>2</sub> |
| | **(6,6)** | **6.303** | **+0.092** | B<sub>2</sub> |
| | (8,8) | – | – | – |

### T1 {#t1}

TBE: B<sub>1</sub> 3.57 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **4.194** | **+0.624** | B<sub>1</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **4.180** | **+0.610** | B<sub>1</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **4.155** | **+0.585** | B<sub>1</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

### T2 {#t2}

TBE: B<sub>2</sub> 3.74 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **3.730** | **−0.010** | B<sub>2</sub> |
| | (6,6) | 3.690 | −0.050 | B<sub>2</sub> |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **3.786** | **+0.046** | B<sub>2</sub> |
| | (6,6) | 3.826 | +0.086 | B<sub>2</sub> |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **3.749** | **+0.009** | B<sub>2</sub> |
| | (6,6) | 3.771 | +0.031 | B<sub>2</sub> |
| | (8,8) | – | – | – |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (4,4)

(a, d)

![maleimide, BH\&HLYP (4,4), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_maleimide/bh_44m_27A.svg)**d** 27A · 0.000028\
−0.0831

![maleimide, BH\&HLYP (4,4), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_maleimide/bh_44m_24A.svg)**a** 24A · 1.999972\
−0.3765

(b, c)

![maleimide, BH\&HLYP (4,4), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_maleimide/bh_44m_26A.svg)**c** 26A · 0.000000\
−0.2007

![maleimide, BH\&HLYP (4,4), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_maleimide/bh_44m_25A.svg)**b** 25A · 2.000000\
−0.3733

BH\&HLYP, (6,6)

(a, f)

![maleimide, BH\&HLYP (6,6), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_maleimide/bh_66_26A.svg)**f** 26A · 0.000001\
−0.1895

![maleimide, BH\&HLYP (6,6), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_maleimide/bh_66_21A.svg)**a** 21A · 1.999999\
−0.4850

(b, e)

![maleimide, BH\&HLYP (6,6), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_maleimide/bh_66_28A.svg)**e** 28A · 0.000000\
−0.0631

![maleimide, BH\&HLYP (6,6), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_maleimide/bh_66_23A.svg)**b** 23A · 2.000000\
−0.3831

(c, d)

![maleimide, BH\&HLYP (6,6), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_maleimide/bh_66_27A.svg)**d** 27A · 0.000000\
−0.0645

![maleimide, BH\&HLYP (6,6), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_maleimide/bh_66_25A.svg)**c** 25A · 2.000000\
−0.3745

M08-SO, (4,4)

(a, d)

![maleimide, M08-SO (4,4), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_maleimide/m08_44_27A.svg)**d** 27A · 0.000000\
−0.0722

![maleimide, M08-SO (4,4), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_maleimide/m08_44_23A.svg)**a** 23A · 2.000000\
−0.4006

(b, c)

![maleimide, M08-SO (4,4), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_maleimide/m08_44_26A.svg)**c** 26A · 0.000000\
−0.2059

![maleimide, M08-SO (4,4), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_maleimide/m08_44_24A.svg)**b** 24A · 2.000000\
−0.3937

M08-SO, (6,6)

(a, f)

![maleimide, M08-SO (6,6), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_maleimide/m08_66_26A.svg)**f** 26A · 0.000000\
−0.2060

![maleimide, M08-SO (6,6), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_maleimide/m08_66_21A.svg)**a** 21A · 2.000000\
−0.4975

(b, e)

![maleimide, M08-SO (6,6), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_maleimide/m08_66_28A.svg)**e** 28A · 0.000000\
−0.0785

![maleimide, M08-SO (6,6), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_maleimide/m08_66_23A.svg)**b** 23A · 2.000000\
−0.3952

(c, d)

![maleimide, M08-SO (6,6), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_maleimide/m08_66_27A.svg)**d** 27A · 0.000000\
−0.0800

![maleimide, M08-SO (6,6), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_maleimide/m08_66_24A.svg)**c** 24A · 2.000000\
−0.3854

ωB97X, (4,4)

(a, d)

![maleimide, ωB97X (4,4), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_maleimide/wb_44m_27A.svg)**d** 27A · 0.000023\
−0.1328

![maleimide, ωB97X (4,4), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_maleimide/wb_44m_22A.svg)**a** 22A · 1.999977\
−0.4236

(b, c)

![maleimide, ωB97X (4,4), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_maleimide/wb_44m_26A.svg)**c** 26A · 0.000000\
−0.2367

![maleimide, ωB97X (4,4), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_maleimide/wb_44m_25A.svg)**b** 25A · 2.000000\
−0.4013

ωB97X, (6,6)

(a, f)

![maleimide, ωB97X (6,6), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_maleimide/wb_66_26A.svg)**f** 26A · 0.000000\
−0.2366

![maleimide, ωB97X (6,6), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_maleimide/wb_66_21A.svg)**a** 21A · 2.000000\
−0.5239

(b, e)

![maleimide, ωB97X (6,6), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_maleimide/wb_66_27A.svg)**e** 27A · 0.000000\
−0.1023

![maleimide, ωB97X (6,6), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_maleimide/wb_66_23A.svg)**b** 23A · 2.000000\
−0.4235

(c, d)

![maleimide, ωB97X (6,6), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_maleimide/wb_66_28A.svg)**d** 28A · 0.000000\
−0.1015

![maleimide, ωB97X (6,6), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_maleimide/wb_66_24A.svg)**c** 24A · 2.000000\
−0.4166

[← hexatriene](https://reksstudio.github.io/v2/main/results/quest/quest5-hexatriene/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-maleimide) · [naphthalene →](https://reksstudio.github.io/v2/main/results/quest/quest5-naphthalene/index.md)
