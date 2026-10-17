# pyridazine — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest3-pyridazine/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# pyridazine

QUEST3: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](#s1) · [S2](#s2) · [T1](#t1) · [T2](#t2) · [Orbitals](#orbitals)

![pyridazine: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_pyridazine.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: B<sub>1</sub> 3.83 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **4.145** | **+0.315** | B<sub>1</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **3.987** | **+0.157** | B<sub>1</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **3.978** | **+0.148** | B<sub>1</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

### S2 {#s2}

TBE: A<sub>2</sub> 4.37 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **4.784** | **+0.414** | A<sub>2</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **4.654** | **+0.284** | A<sub>2</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **4.674** | **+0.304** | A<sub>2</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

### T1 {#t1}

TBE: B<sub>1</sub> 3.19 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **3.455** | **+0.265** | B<sub>1</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **3.403** | **+0.213** | B<sub>1</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **3.358** | **+0.168** | B<sub>1</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

### T2 {#t2}

TBE: A<sub>2</sub> 4.11 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **4.614** | **+0.504** | A<sub>2</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **4.490** | **+0.381** | A<sub>2</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **4.490** | **+0.380** | A<sub>2</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (4,4)

(a, d)

![pyridazine, BH\&HLYP (4,4), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridazine/bh_44m_23A.svg)**d** 23A · 0.000081\
−0.1266

![pyridazine, BH\&HLYP (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridazine/bh_44m_20A.svg)**a** 20A · 1.999919\
−0.3561

(b, c)

![pyridazine, BH\&HLYP (4,4), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridazine/bh_44m_22A.svg)**c** 22A · 0.000000\
−0.1956

![pyridazine, BH\&HLYP (4,4), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridazine/bh_44m_21A.svg)**b** 21A · 2.000000\
−0.3367

M08-SO, (4,4)

(a, d)

![pyridazine, M08-SO (4,4), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridazine/m08_44m_23A.svg)**d** 23A · 0.000013\
−0.1462

![pyridazine, M08-SO (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridazine/m08_44m_20A.svg)**a** 20A · 1.999987\
−0.3710

(b, c)

![pyridazine, M08-SO (4,4), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridazine/m08_44m_22A.svg)**c** 22A · 0.000000\
−0.2035

![pyridazine, M08-SO (4,4), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridazine/m08_44m_21A.svg)**b** 21A · 2.000000\
−0.3375

ωB97X, (4,4)

(a, d)

![pyridazine, ωB97X (4,4), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridazine/wb_44m_23A.svg)**d** 23A · 0.000041\
−0.1762

![pyridazine, ωB97X (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridazine/wb_44m_20A.svg)**a** 20A · 1.999959\
−0.4060

(b, c)

![pyridazine, ωB97X (4,4), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridazine/wb_44m_22A.svg)**c** 22A · 0.000000\
−0.2355

![pyridazine, ωB97X (4,4), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridazine/wb_44m_21A.svg)**b** 21A · 2.000000\
−0.3684

[← pyrazine](https://reksstudio.github.io/v2/main/results/quest/quest3-pyrazine/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-pyridazine) · [pyridine →](https://reksstudio.github.io/v2/main/results/quest/quest3-pyridine/index.md)
