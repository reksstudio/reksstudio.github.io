# nitroxyl — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest5-nitroxyl/>

Psi4 bd0fb43ef, 2026-10-15: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# nitroxyl

QUEST5: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](https://reksstudio.github.io/v2/main/results/quest/quest5-nitroxyl/index.md#s1) · [T1](https://reksstudio.github.io/v2/main/results/quest/quest5-nitroxyl/index.md#t1) · [T2](https://reksstudio.github.io/v2/main/results/quest/quest5-nitroxyl/index.md#t2) · [Orbitals](https://reksstudio.github.io/v2/main/results/quest/quest5-nitroxyl/index.md#orbitals)

![nitroxyl: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest5_nitroxyl.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: A′′ 1.74 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **2.085** | **+0.345** | A′′ |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **1.902** | **+0.162** | A′′ |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **1.849** | **+0.109** | A′′ |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

### T1 {#t1}

TBE: A′′ 0.88 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **1.170** | **+0.290** | A′′ |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **1.112** | **+0.232** | A′′ |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **0.990** | **+0.110** | A′′ |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

### T2 {#t2}

TBE: A′ 5.61 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 5.062 | −0.548 | A′ |
| | **(4,4)** | **5.221** | **−0.389** | A′ |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | **(2,2)** | **5.641** | **+0.031** | A′ |
| | (4,4) | 5.710 | +0.100 | A′ |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | 5.494 | −0.116 | A′ |
| | **(4,4)** | **5.570** | **−0.040** | A′ |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (2,2)

(a, b)

![nitroxyl, BH\&HLYP (2,2), orbital 9A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_nitroxyl/bh_22_9A.svg)**b** 9A · 0.008421\
−0.2461

![nitroxyl, BH\&HLYP (2,2), orbital 7A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_nitroxyl/bh_22_7A.svg)**a** 7A · 1.991579\
−0.5384

BH\&HLYP, (4,4)

(a, d)

(b, c)

![nitroxyl, BH\&HLYP (4,4), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_nitroxyl/bh_44m_10A.svg)**d** 10A · 0.000000\
−0.1189

![nitroxyl, BH\&HLYP (4,4), orbital 9A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_nitroxyl/bh_44m_9A.svg)**c** 9A · 0.000199\
−0.3873

![nitroxyl, BH\&HLYP (4,4), orbital 7A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_nitroxyl/bh_44m_7A.svg)**a** 7A · 2.000000\
−0.5954

![nitroxyl, BH\&HLYP (4,4), orbital 8A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_nitroxyl/bh_44m_8A.svg)**b** 8A · 1.999801\
−0.4225

M08-SO, (2,2)

(a, b)

![nitroxyl, M08-SO (2,2), orbital 9A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_nitroxyl/m08_22_9A.svg)**b** 9A · 0.002000\
−0.2610

![nitroxyl, M08-SO (2,2), orbital 7A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_nitroxyl/m08_22_7A.svg)**a** 7A · 1.998000\
−0.5515

M08-SO, (4,4)

(a, d)

(b, c)

![nitroxyl, M08-SO (4,4), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_nitroxyl/m08_44m_10A.svg)**d** 10A · 0.000000\
−0.1245

![nitroxyl, M08-SO (4,4), orbital 9A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_nitroxyl/m08_44m_9A.svg)**c** 9A · 0.000094\
−0.3843

![nitroxyl, M08-SO (4,4), orbital 7A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_nitroxyl/m08_44m_7A.svg)**a** 7A · 2.000000\
−0.6016

![nitroxyl, M08-SO (4,4), orbital 8A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_nitroxyl/m08_44m_8A.svg)**b** 8A · 1.999906\
−0.4266

ωB97X, (2,2)

(a, b)

![nitroxyl, ωB97X (2,2), orbital 9A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_nitroxyl/wb_22_9A.svg)**b** 9A · 0.002111\
−0.3008

![nitroxyl, ωB97X (2,2), orbital 6A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_nitroxyl/wb_22_6A.svg)**a** 6A · 1.997889\
−0.5862

ωB97X, (4,4)

(a, d)

(b, c)

![nitroxyl, ωB97X (4,4), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_nitroxyl/wb_44m_10A.svg)**d** 10A · 0.000000\
−0.1529

![nitroxyl, ωB97X (4,4), orbital 9A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_nitroxyl/wb_44m_9A.svg)**c** 9A · 0.000138\
−0.4115

![nitroxyl, ωB97X (4,4), orbital 7A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_nitroxyl/wb_44m_7A.svg)**a** 7A · 2.000000\
−0.6330

![nitroxyl, ωB97X (4,4), orbital 8A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_nitroxyl/wb_44m_8A.svg)**b** 8A · 1.999862\
−0.4486

[← naphthalene](https://reksstudio.github.io/v2/main/results/quest/quest5-naphthalene/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-nitroxyl) · [octatetraene →](https://reksstudio.github.io/v2/main/results/quest/quest5-octatetraene/index.md)
