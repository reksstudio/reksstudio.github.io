# acetone — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest3-acetone/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# acetone

QUEST3: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](https://reksstudio.github.io/v2/main/results/quest/quest3-acetone/index.md#s1) · [T1](https://reksstudio.github.io/v2/main/results/quest/quest3-acetone/index.md#t1) · [T2](https://reksstudio.github.io/v2/main/results/quest/quest3-acetone/index.md#t2) · [Orbitals](https://reksstudio.github.io/v2/main/results/quest/quest3-acetone/index.md#orbitals)

![acetone: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_acetone.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: A<sub>2</sub> 4.47 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **4.616** | **+0.146** | A<sub>2</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **4.607** | **+0.137** | A<sub>2</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **4.671** | **+0.201** | A<sub>2</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

### T1 {#t1}

TBE: A<sub>2</sub> 4.13 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **4.146** | **+0.016** | A<sub>2</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **4.248** | **+0.118** | A<sub>2</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **4.198** | **+0.068** | A<sub>2</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

### T2 {#t2}

TBE: A<sub>1</sub> 6.25 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | **(2,2)** | **5.992** | **−0.258** | A<sub>1</sub> |
| | (4,4) | 6.658 | +0.408 | A<sub>1</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | **(2,2)** | **6.355** | **+0.105** | A<sub>1</sub> |
| | (4,4) | 7.034 | +0.783 | A<sub>1</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | **(2,2)** | **6.215** | **−0.035** | A<sub>1</sub> |
| | (4,4) | 6.959 | +0.709 | A<sub>1</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (2,2)

(a, b)

![acetone, BH\&HLYP (2,2), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acetone/bh_22_17A.svg)**b** 17A · 0.000047\
−0.1324

![acetone, BH\&HLYP (2,2), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acetone/bh_22_15A.svg)**a** 15A · 1.999953\
−0.4373

BH\&HLYP, (4,4)

(a, d)

![acetone, BH\&HLYP (4,4), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acetone/bh_44m_18A.svg)**d** 18A · 0.000000\
−0.0914

![acetone, BH\&HLYP (4,4), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acetone/bh_44m_15A.svg)**a** 15A · 2.000000\
−0.4716

(b, c)

![acetone, BH\&HLYP (4,4), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acetone/bh_44m_17A.svg)**c** 17A · 0.000000\
−0.2271

![acetone, BH\&HLYP (4,4), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acetone/bh_44m_16A.svg)**b** 16A · 2.000000\
−0.4107

M08-SO, (2,2)

(a, b)

![acetone, M08-SO (2,2), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acetone/m08_22_17A.svg)**b** 17A · 0.000035\
−0.1444

![acetone, M08-SO (2,2), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acetone/m08_22_15A.svg)**a** 15A · 1.999965\
−0.4444

M08-SO, (4,4)

(a, d)

![acetone, M08-SO (4,4), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acetone/m08_44m_18A.svg)**d** 18A · 0.000000\
−0.1004

![acetone, M08-SO (4,4), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acetone/m08_44m_15A.svg)**a** 15A · 2.000000\
−0.4744

(b, c)

![acetone, M08-SO (4,4), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acetone/m08_44m_17A.svg)**c** 17A · 0.000000\
−0.2250

![acetone, M08-SO (4,4), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acetone/m08_44m_16A.svg)**b** 16A · 2.000000\
−0.4099

ωB97X, (2,2)

(a, b)

![acetone, ωB97X (2,2), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acetone/wb_22_17A.svg)**b** 17A · 0.000043\
−0.1804

![acetone, ωB97X (2,2), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acetone/wb_22_15A.svg)**a** 15A · 1.999957\
−0.4766

ωB97X, (4,4)

(a, d)

![acetone, ωB97X (4,4), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acetone/wb_44m_18A.svg)**d** 18A · 0.000000\
−0.1129

![acetone, ωB97X (4,4), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acetone/wb_44m_15A.svg)**a** 15A · 2.000000\
−0.5062

(b, c)

![acetone, ωB97X (4,4), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acetone/wb_44m_17A.svg)**c** 17A · 0.000000\
−0.2585

![acetone, ωB97X (4,4), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_acetone/wb_44m_16A.svg)**b** 16A · 2.000000\
−0.4371

[Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-acetone) · [acrolein →](https://reksstudio.github.io/v2/main/results/quest/quest3-acrolein/index.md)
