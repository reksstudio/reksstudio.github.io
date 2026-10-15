# propynal — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest3-propynal/>

Psi4 bd0fb43ef, 2026-10-15: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# propynal

QUEST3: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](https://reksstudio.github.io/v2/main/results/quest/quest3-propynal/index.md#s1) · [T1](https://reksstudio.github.io/v2/main/results/quest/quest3-propynal/index.md#t1) · [T2](https://reksstudio.github.io/v2/main/results/quest/quest3-propynal/index.md#t2) · [Orbitals](https://reksstudio.github.io/v2/main/results/quest/quest3-propynal/index.md#orbitals)

![propynal: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_propynal.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: A′′ 3.80 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | (4,4) | 4.021 | +0.222 | A′′ |
| | (6,6) | 5.704 | +1.904 | A′′ |
| | **(8,8)** | **3.966** | **+0.166** | A′′ |
| M08-SO | (2,2) | – | – | – |
| | (4,4) | 4.133 | +0.333 | A′′ |
| | (6,6) | 5.793 | +1.993 | A′′ |
| | **(8,8)** | **3.791** | **−0.009** | A′′ |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 4.150 | +0.350 | A′′ |
| | (6,6) | 5.719 | +1.919 | A′′ |
| | **(8,8)** | **3.891** | **+0.091** | A′′ |

### T1 {#t1}

TBE: A′′ 3.47 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **3.543** | **+0.073** | A′′ |
| | (6,6) | 5.450 | +1.980 | A′′ |
| | (8,8) | 3.551 | +0.081 | A′′ |
| M08-SO | (2,2) | – | – | – |
| | (4,4) | 3.793 | +0.323 | A′′ |
| | (6,6) | 5.449 | +1.979 | A′′ |
| | **(8,8)** | **3.569** | **+0.099** | A′′ |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 3.677 | +0.207 | A′′ |
| | (6,6) | 5.422 | +1.952 | A′′ |
| | **(8,8)** | **3.491** | **+0.021** | A′′ |

### T2 {#t2}

TBE: A′ 4.47 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 4.222 | −0.248 | A′ |
| | (4,4) | 4.363 | −0.107 | A′ |
| | (6,6) | 4.338 | −0.132 | A′ |
| | **(8,8)** | **4.498** | **+0.028** | A′ |
| M08-SO | **(2,2)** | **4.483** | **+0.013** | A′ |
| | (4,4) | 4.563 | +0.093 | A′ |
| | (6,6) | 4.566 | +0.096 | A′ |
| | (8,8) | 4.712 | +0.242 | A′ |
| ωB97X | (2,2) | 4.398 | −0.072 | A′ |
| | (4,4) | 4.502 | +0.032 | A′ |
| | **(6,6)** | **4.497** | **+0.027** | A′ |
| | (8,8) | 4.612 | +0.142 | A′ |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (2,2)

(a, b)

![propynal, BH\&HLYP (2,2), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/bh_22_15A.svg)**b** 15A · 0.000107\
−0.1676

![propynal, BH\&HLYP (2,2), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/bh_22_13A.svg)**a** 13A · 1.999893\
−0.3868

BH\&HLYP, (4,4)

(a, d)

(b, c)

![propynal, BH\&HLYP (4,4), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/bh_44m_16A.svg)**d** 16A · 0.000000\
−0.1304

![propynal, BH\&HLYP (4,4), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/bh_44m_15A.svg)**c** 15A · 0.000000\
−0.2440

![propynal, BH\&HLYP (4,4), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/bh_44m_13A.svg)**a** 13A · 2.000000\
−0.3833

![propynal, BH\&HLYP (4,4), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/bh_44m_12A.svg)**b** 12A · 2.000000\
−0.3958

BH\&HLYP, (6,6)

(a, f)

(b, e)

(c, d)

![propynal, BH\&HLYP (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/bh_66_17A.svg)**f** 17A · 0.000000\
−0.0716

![propynal, BH\&HLYP (6,6), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/bh_66_16A.svg)**e** 16A · 0.000124\
−0.1219

![propynal, BH\&HLYP (6,6), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/bh_66_15A.svg)**d** 15A · 0.000190\
−0.1853

![propynal, BH\&HLYP (6,6), orbital 11A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/bh_66_11A.svg)**a** 11A · 2.000000\
−0.4987

![propynal, BH\&HLYP (6,6), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/bh_66_14A.svg)**b** 14A · 1.999876\
−0.3999

![propynal, BH\&HLYP (6,6), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/bh_66_12A.svg)**c** 12A · 1.999810\
−0.4036

BH\&HLYP, (8,8)

(a, h)

(b, g)

(c, f)

(d, e)

![propynal, BH\&HLYP (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/bh_88_17A.svg)**h** 17A · 0.000000\
−0.1123

![propynal, BH\&HLYP (8,8), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/bh_88_18A.svg)**g** 18A · 0.000000\
−0.0790

![propynal, BH\&HLYP (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/bh_88_16A.svg)**f** 16A · 0.000000\
−0.1344

![propynal, BH\&HLYP (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/bh_88_15A.svg)**e** 15A · 0.000223\
−0.2091

![propynal, BH\&HLYP (8,8), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/bh_88_13A.svg)**a** 13A · 2.000000\
−0.4102

![propynal, BH\&HLYP (8,8), orbital 11A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/bh_88_11A.svg)**b** 11A · 2.000000\
−0.5168

![propynal, BH\&HLYP (8,8), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/bh_88_14A.svg)**c** 14A · 2.000000\
−0.4093

![propynal, BH\&HLYP (8,8), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/bh_88_12A.svg)**d** 12A · 1.999777\
−0.4153

M08-SO, (2,2)

(a, b)

![propynal, M08-SO (2,2), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/m08_22_15A.svg)**b** 15A · 0.000046\
−0.1813

![propynal, M08-SO (2,2), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/m08_22_13A.svg)**a** 13A · 1.999954\
−0.3948

M08-SO, (4,4)

(a, d)

(b, c)

![propynal, M08-SO (4,4), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/m08_44m_16A.svg)**d** 16A · 0.000000\
−0.1400

![propynal, M08-SO (4,4), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/m08_44m_15A.svg)**c** 15A · 0.000000\
−0.2499

![propynal, M08-SO (4,4), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/m08_44m_13A.svg)**a** 13A · 2.000000\
−0.3910

![propynal, M08-SO (4,4), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/m08_44m_12A.svg)**b** 12A · 2.000000\
−0.3999

M08-SO, (6,6)

(a, f)

(b, e)

(c, d)

![propynal, M08-SO (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/m08_66_17A.svg)**f** 17A · 0.000000\
−0.0885

![propynal, M08-SO (6,6), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/m08_66_16A.svg)**e** 16A · 0.000011\
−0.1326

![propynal, M08-SO (6,6), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/m08_66_15A.svg)**d** 15A · 0.000045\
−0.1997

![propynal, M08-SO (6,6), orbital 11A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/m08_66_11A.svg)**a** 11A · 2.000000\
−0.5105

![propynal, M08-SO (6,6), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/m08_66_14A.svg)**b** 14A · 1.999989\
−0.4071

![propynal, M08-SO (6,6), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/m08_66_12A.svg)**c** 12A · 1.999955\
−0.4137

M08-SO, (8,8)

(a, h)

(b, g)

(c, f)

(d, e)

![propynal, M08-SO (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/m08_88_17A.svg)**h** 17A · 0.000000\
−0.1254

![propynal, M08-SO (8,8), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/m08_88_18A.svg)**g** 18A · 0.000000\
−0.0989

![propynal, M08-SO (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/m08_88_16A.svg)**f** 16A · 0.000000\
−0.1456

![propynal, M08-SO (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/m08_88_15A.svg)**e** 15A · 0.000063\
−0.2214

![propynal, M08-SO (8,8), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/m08_88_13A.svg)**a** 13A · 2.000000\
−0.4189

![propynal, M08-SO (8,8), orbital 11A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/m08_88_11A.svg)**b** 11A · 2.000000\
−0.5286

![propynal, M08-SO (8,8), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/m08_88_14A.svg)**c** 14A · 2.000000\
−0.4162

![propynal, M08-SO (8,8), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/m08_88_12A.svg)**d** 12A · 1.999937\
−0.4253

ωB97X, (2,2)

(a, b)

![propynal, ωB97X (2,2), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/wb_22_15A.svg)**b** 15A · 0.000066\
−0.2123

![propynal, ωB97X (2,2), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/wb_22_13A.svg)**a** 13A · 1.999934\
−0.4330

ωB97X, (4,4)

(a, d)

(b, c)

![propynal, ωB97X (4,4), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/wb_44m_16A.svg)**d** 16A · 0.000000\
−0.1717

![propynal, ωB97X (4,4), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/wb_44m_15A.svg)**c** 15A · 0.000000\
−0.2805

![propynal, ωB97X (4,4), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/wb_44m_12A.svg)**a** 12A · 2.000000\
−0.4313

![propynal, ωB97X (4,4), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/wb_44m_13A.svg)**b** 13A · 2.000000\
−0.4232

ωB97X, (6,6)

(a, f)

(b, e)

(c, d)

![propynal, ωB97X (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/wb_66_17A.svg)**f** 17A · 0.000000\
−0.1043

![propynal, ωB97X (6,6), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/wb_66_16A.svg)**e** 16A · 0.000028\
−0.1569

![propynal, ωB97X (6,6), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/wb_66_15A.svg)**d** 15A · 0.000107\
−0.2313

![propynal, ωB97X (6,6), orbital 11A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/wb_66_11A.svg)**a** 11A · 2.000000\
−0.5428

![propynal, ωB97X (6,6), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/wb_66_13A.svg)**b** 13A · 1.999972\
−0.4375

![propynal, ωB97X (6,6), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/wb_66_12A.svg)**c** 12A · 1.999893\
−0.4436

ωB97X, (8,8)

(a, h)

(b, g)

(c, f)

(d, e)

![propynal, ωB97X (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/wb_88_17A.svg)**h** 17A · 0.000000\
−0.1462

![propynal, ωB97X (8,8), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/wb_88_18A.svg)**g** 18A · 0.000000\
−0.1199

![propynal, ωB97X (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/wb_88_16A.svg)**f** 16A · 0.000000\
−0.1623

![propynal, ωB97X (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/wb_88_15A.svg)**e** 15A · 0.000114\
−0.2537

![propynal, ωB97X (8,8), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/wb_88_13A.svg)**a** 13A · 2.000000\
−0.4471

![propynal, ωB97X (8,8), orbital 11A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/wb_88_11A.svg)**b** 11A · 2.000000\
−0.5623

![propynal, ωB97X (8,8), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/wb_88_14A.svg)**c** 14A · 2.000000\
−0.4448

![propynal, ωB97X (8,8), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_propynal/wb_88_12A.svg)**d** 12A · 1.999886\
−0.4570

[← methylenecyclopropene](https://reksstudio.github.io/v2/main/results/quest/quest3-methylenecyclopropene/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-propynal) · [pyrazine →](https://reksstudio.github.io/v2/main/results/quest/quest3-pyrazine/index.md)
