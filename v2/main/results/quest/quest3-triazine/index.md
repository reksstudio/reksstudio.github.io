# triazine — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest3-triazine/>

Psi4 bd0fb43ef, 2026-10-15: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# triazine

QUEST3: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](https://reksstudio.github.io/v2/main/results/quest/quest3-triazine/index.md#s1) · [S2](https://reksstudio.github.io/v2/main/results/quest/quest3-triazine/index.md#s2) · [T1](https://reksstudio.github.io/v2/main/results/quest/quest3-triazine/index.md#t1) · [T2](https://reksstudio.github.io/v2/main/results/quest/quest3-triazine/index.md#t2) · [Orbitals](https://reksstudio.github.io/v2/main/results/quest/quest3-triazine/index.md#orbitals)

![triazine: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_triazine.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: A<sub>1</sub>′′ 4.72 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **5.536** | **+0.816** | A<sub>2</sub><sup>a</sup> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **5.408** | **+0.688** | A<sub>2</sub><sup>a</sup> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **5.399** | **+0.679** | A<sub>2</sub><sup>a</sup> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

### S2 {#s2}

TBE: A<sub>2</sub>′′ 4.75 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **5.222** | **+0.472** | B<sub>1</sub><sup>a</sup> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **5.058** | **+0.308** | B<sub>1</sub><sup>a</sup> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **5.096** | **+0.346** | B<sub>1</sub><sup>a</sup> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

### T1 {#t1}

TBE: A<sub>2</sub>′′ 4.33 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **4.910** | **+0.580** | B<sub>1</sub><sup>a</sup> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **4.754** | **+0.424** | B<sub>1</sub><sup>a</sup> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **4.760** | **+0.430** | B<sub>1</sub><sup>a</sup> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

### T2 {#t2}

TBE: E′′ 4.51 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **4.935** | **+0.425** | B<sub>1</sub><sup>a</sup> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **4.843** | **+0.333** | B<sub>1</sub><sup>a</sup> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **4.823** | **+0.313** | B<sub>1</sub><sup>a</sup> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (4,4)

(a, d)

(b, c)

![triazine, BH\&HLYP (4,4), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_triazine/bh_44m_23A.svg)**d** 23A · 0.000000\
−0.1690

![triazine, BH\&HLYP (4,4), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_triazine/bh_44m_22A.svg)**c** 22A · 0.000000\
−0.1713

![triazine, BH\&HLYP (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_triazine/bh_44m_20A.svg)**a** 20A · 2.000000\
−0.3716

![triazine, BH\&HLYP (4,4), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_triazine/bh_44m_21A.svg)**b** 21A · 2.000000\
−0.3704

M08-SO, (4,4)

(a, d)

(b, c)

![triazine, M08-SO (4,4), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_triazine/m08_44m_23A.svg)**d** 23A · 0.000000\
−0.1806

![triazine, M08-SO (4,4), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_triazine/m08_44m_22A.svg)**c** 22A · 0.000000\
−0.1814

![triazine, M08-SO (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_triazine/m08_44m_20A.svg)**a** 20A · 2.000000\
−0.3751

![triazine, M08-SO (4,4), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_triazine/m08_44m_21A.svg)**b** 21A · 2.000000\
−0.3740

ωB97X, (4,4)

(a, d)

(b, c)

![triazine, ωB97X (4,4), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_triazine/wb_44m_23A.svg)**d** 23A · 0.000000\
−0.2132

![triazine, ωB97X (4,4), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_triazine/wb_44m_22A.svg)**c** 22A · 0.000000\
−0.2147

![triazine, ωB97X (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_triazine/wb_44m_20A.svg)**a** 20A · 2.000000\
−0.4054

![triazine, ωB97X (4,4), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_triazine/wb_44m_21A.svg)**b** 21A · 2.000000\
−0.4042

[← thiopropynal](https://reksstudio.github.io/v2/main/results/quest/quest3-thiopropynal/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-triazine) · [azanaphthalene →](https://reksstudio.github.io/v2/main/results/quest/quest5-azanaphthalene/index.md)
