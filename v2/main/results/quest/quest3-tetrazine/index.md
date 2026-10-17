# tetrazine — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest3-tetrazine/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# tetrazine

QUEST3: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](#s1) · [S2](#s2) · [T1](#t1) · [T2](#t2) · [Orbitals](#orbitals)

![tetrazine: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_tetrazine.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: B<sub>3u</sub> 2.47 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **2.761** | **+0.291** | B<sub>3u</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **2.591** | **+0.121** | B<sub>3u</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **2.554** | **+0.084** | B<sub>3u</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

### S2 {#s2}

TBE: A<sub>u</sub> 3.69 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **4.366** | **+0.676** | A<sub>u</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **4.122** | **+0.432** | A<sub>u</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **4.103** | **+0.413** | A<sub>u</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

### T1 {#t1}

TBE: B<sub>3u</sub> 1.85 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **2.262** | **+0.412** | B<sub>3u</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **2.163** | **+0.312** | B<sub>3u</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **2.095** | **+0.245** | B<sub>3u</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

### T2 {#t2}

TBE: A<sub>u</sub> 3.45 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **4.142** | **+0.692** | A<sub>u</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **3.903** | **+0.453** | A<sub>u</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **3.875** | **+0.425** | A<sub>u</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (4,4)

(a, d)

![tetrazine, BH\&HLYP (4,4), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_tetrazine/bh_44m_23A.svg)**d** 23A · 0.000000\
−0.1710

![tetrazine, BH\&HLYP (4,4), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_tetrazine/bh_44m_19A.svg)**a** 19A · 2.000000\
−0.4352

(b, c)

![tetrazine, BH\&HLYP (4,4), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_tetrazine/bh_44m_22A.svg)**c** 22A · 0.000000\
−0.2474

![tetrazine, BH\&HLYP (4,4), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_tetrazine/bh_44m_21A.svg)**b** 21A · 2.000000\
−0.3416

M08-SO, (4,4)

(a, d)

![tetrazine, M08-SO (4,4), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_tetrazine/m08_44m_23A.svg)**d** 23A · 0.000000\
−0.1829

![tetrazine, M08-SO (4,4), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_tetrazine/m08_44m_19A.svg)**a** 19A · 2.000000\
−0.4340

(b, c)

![tetrazine, M08-SO (4,4), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_tetrazine/m08_44m_22A.svg)**c** 22A · 0.000000\
−0.2551

![tetrazine, M08-SO (4,4), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_tetrazine/m08_44m_21A.svg)**b** 21A · 2.000000\
−0.3428

ωB97X, (4,4)

(a, d)

![tetrazine, ωB97X (4,4), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_tetrazine/wb_44m_23A.svg)**d** 23A · 0.000000\
−0.2165

![tetrazine, ωB97X (4,4), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_tetrazine/wb_44m_19A.svg)**a** 19A · 2.000000\
−0.4662

(b, c)

![tetrazine, ωB97X (4,4), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_tetrazine/wb_44m_22A.svg)**c** 22A · 0.000000\
−0.2861

![tetrazine, ωB97X (4,4), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_tetrazine/wb_44m_21A.svg)**b** 21A · 2.000000\
−0.3734

[← pyrrole](https://reksstudio.github.io/v2/main/results/quest/quest3-pyrrole/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-tetrazine) · [thioacetone →](https://reksstudio.github.io/v2/main/results/quest/quest3-thioacetone/index.md)
