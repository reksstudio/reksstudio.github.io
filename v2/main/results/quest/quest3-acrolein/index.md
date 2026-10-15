# acrolein — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest3-acrolein/>

Psi4 bd0fb43ef, 2026-10-15: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# acrolein

QUEST3: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](https://reksstudio.github.io/v2/main/results/quest/quest3-acrolein/index.md#s1) · [S2](https://reksstudio.github.io/v2/main/results/quest/quest3-acrolein/index.md#s2) · [T1](https://reksstudio.github.io/v2/main/results/quest/quest3-acrolein/index.md#t1) · [T2](https://reksstudio.github.io/v2/main/results/quest/quest3-acrolein/index.md#t2) · [Orbitals](https://reksstudio.github.io/v2/main/results/quest/quest3-acrolein/index.md#orbitals)

![acrolein: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_acrolein.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: A′′ 3.78 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **4.076** | **+0.296** | A′′ |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **4.168** | **+0.388** | A′′ |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 4.172 | +0.392 | A′′ |
| | (6,6) | – | – | – |
| | **(8,8)** | **3.917** | **+0.137** | A′′ |

### S2 {#s2}

TBE: A′ 6.69 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | **(2,2)** | **6.548** | **−0.142** | A′ |
| | (4,4) | 6.525 | −0.165 | A′ |
| | (6,6) | – | – | – |
| | (8,8) | 6.870 | +0.180 | A′ |
| M08-SO | (2,2) | 6.364 | −0.326 | A′ |
| | **(4,4)** | **6.909** | **+0.219** | A′ |
| | (6,6) | – | – | – |
| | (8,8) | 6.364 | −0.326 | A′ |
| ωB97X | (2,2) | 6.566 | −0.124 | A′ |
| | (4,4) | 6.481 | −0.209 | A′ |
| | (6,6) | – | – | – |
| | **(8,8)** | **6.662** | **−0.029** | A′ |

### T1 {#t1}

TBE: A′′ 3.51 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **3.675** | **+0.165** | A′′ |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **3.902** | **+0.393** | A′′ |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 3.781 | +0.271 | A′′ |
| | (6,6) | – | – | – |
| | **(8,8)** | **3.539** | **+0.029** | A′′ |

### T2 {#t2}

TBE: A′ 3.94 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 3.849 | −0.091 | A′ |
| | **(4,4)** | **3.948** | **+0.008** | A′ |
| | (6,6) | – | – | – |
| | (8,8) | 3.876 | −0.064 | A′ |
| M08-SO | **(2,2)** | **3.988** | **+0.048** | A′ |
| | (4,4) | 4.032 | +0.092 | A′ |
| | (6,6) | – | – | – |
| | (8,8) | 3.811 | −0.129 | A′ |
| ωB97X | (2,2) | 3.970 | +0.030 | A′ |
| | (4,4) | 4.008 | +0.068 | A′ |
| | (6,6) | – | – | – |
| | **(8,8)** | **3.946** | **+0.006** | A′ |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (2,2)

(a, b)

![acrolein, BH\&HLYP (2,2), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/bh_22_16A.svg)**b** 16A · 0.000931\
−0.1598

![acrolein, BH\&HLYP (2,2), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/bh_22_14A.svg)**a** 14A · 1.999069\
−0.3621

BH\&HLYP, (4,4)

(a, d)

(b, c)

![acrolein, BH\&HLYP (4,4), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/bh_44m_17A.svg)**d** 17A · 0.000209\
−0.1102

![acrolein, BH\&HLYP (4,4), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/bh_44m_16A.svg)**c** 16A · 0.000000\
−0.2063

![acrolein, BH\&HLYP (4,4), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/bh_44m_15A.svg)**a** 15A · 1.999791\
−0.3634

![acrolein, BH\&HLYP (4,4), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/bh_44m_14A.svg)**b** 14A · 2.000000\
−0.3721

BH\&HLYP, (8,8)

(a, h)

(b, g)

(c, f)

(d, e)

![acrolein, BH\&HLYP (8,8), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/bh_88_19A.svg)**h** 19A · 0.000000\
−0.0839

![acrolein, BH\&HLYP (8,8), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/bh_88_18A.svg)**g** 18A · 0.000000\
−0.0853

![acrolein, BH\&HLYP (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/bh_88_17A.svg)**f** 17A · 0.000000\
−0.1323

![acrolein, BH\&HLYP (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/bh_88_16A.svg)**e** 16A · 0.000589\
−0.2086

![acrolein, BH\&HLYP (8,8), orbital 9A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/bh_88_9A.svg)**a** 9A · 2.000000\
−0.6176

![acrolein, BH\&HLYP (8,8), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/bh_88_10A.svg)**b** 10A · 2.000000\
−0.6109

![acrolein, BH\&HLYP (8,8), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/bh_88_13A.svg)**c** 13A · 2.000000\
−0.5100

![acrolein, BH\&HLYP (8,8), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/bh_88_14A.svg)**d** 14A · 1.999411\
−0.4125

M08-SO, (2,2)

(a, b)

![acrolein, M08-SO (2,2), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/m08_22_16A.svg)**b** 16A · 0.000429\
−0.1767

![acrolein, M08-SO (2,2), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/m08_22_14A.svg)**a** 14A · 1.999571\
−0.3747

M08-SO, (4,4)

(a, d)

(b, c)

![acrolein, M08-SO (4,4), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/m08_44m_17A.svg)**d** 17A · 0.000080\
−0.1304

![acrolein, M08-SO (4,4), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/m08_44m_16A.svg)**c** 16A · 0.000000\
−0.2107

![acrolein, M08-SO (4,4), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/m08_44m_14A.svg)**a** 14A · 1.999920\
−0.3768

![acrolein, M08-SO (4,4), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/m08_44m_15A.svg)**b** 15A · 2.000000\
−0.3758

M08-SO, (8,8)

(a, h)

(b, g)

(c, f)

(d, e)

![acrolein, M08-SO (8,8), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/m08_88_19A.svg)**h** 19A · 0.000000\
−0.0931

![acrolein, M08-SO (8,8), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/m08_88_18A.svg)**g** 18A · 0.000000\
−0.0952

![acrolein, M08-SO (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/m08_88_17A.svg)**f** 17A · 0.000000\
−0.1532

![acrolein, M08-SO (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/m08_88_16A.svg)**e** 16A · 0.000209\
−0.2206

![acrolein, M08-SO (8,8), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/m08_88_10A.svg)**a** 10A · 2.000000\
−0.6102

![acrolein, M08-SO (8,8), orbital 9A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/m08_88_9A.svg)**b** 9A · 2.000000\
−0.6103

![acrolein, M08-SO (8,8), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/m08_88_13A.svg)**c** 13A · 2.000000\
−0.5222

![acrolein, M08-SO (8,8), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/m08_88_14A.svg)**d** 14A · 1.999791\
−0.4202

ωB97X, (2,2)

(a, b)

![acrolein, ωB97X (2,2), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/wb_22_16A.svg)**b** 16A · 0.000704\
−0.2085

![acrolein, ωB97X (2,2), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/wb_22_14A.svg)**a** 14A · 1.999296\
−0.4113

ωB97X, (4,4)

(a, d)

(b, c)

![acrolein, ωB97X (4,4), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/wb_44_17A.svg)**d** 17A · 0.000000\
−0.1210

![acrolein, ωB97X (4,4), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/wb_44_16A.svg)**c** 16A · 0.000124\
−0.2202

![acrolein, ωB97X (4,4), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/wb_44_12A.svg)**a** 12A · 2.000000\
−0.5135

![acrolein, ωB97X (4,4), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/wb_44_14A.svg)**b** 14A · 1.999876\
−0.4272

ωB97X, (8,8)

(a, h)

(b, g)

(c, f)

(d, e)

![acrolein, ωB97X (8,8), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/wb_88_19A.svg)**h** 19A · 0.000000\
−0.1108

![acrolein, ωB97X (8,8), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/wb_88_18A.svg)**g** 18A · 0.000000\
−0.1162

![acrolein, ωB97X (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/wb_88_17A.svg)**f** 17A · 0.000000\
−0.1800

![acrolein, ωB97X (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/wb_88_16A.svg)**e** 16A · 0.000322\
−0.2497

![acrolein, ωB97X (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/wb_88_15A.svg)**a** 15A · 2.000000\
−0.4488

![acrolein, ωB97X (8,8), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/wb_88_13A.svg)**b** 13A · 2.000000\
−0.5253

![acrolein, ωB97X (8,8), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/wb_88_12A.svg)**c** 12A · 2.000000\
−0.5566

![acrolein, ωB97X (8,8), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acrolein/wb_88_14A.svg)**d** 14A · 1.999678\
−0.4521

[← acetone](https://reksstudio.github.io/v2/main/results/quest/quest3-acetone/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-acrolein) · [benzene →](https://reksstudio.github.io/v2/main/results/quest/quest3-benzene/index.md)
