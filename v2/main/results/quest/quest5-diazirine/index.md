# diazirine — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest5-diazirine/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# diazirine

QUEST5: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](https://reksstudio.github.io/v2/main/results/quest/quest5-diazirine/index.md#s1) · [T1](https://reksstudio.github.io/v2/main/results/quest/quest5-diazirine/index.md#t1) · [Orbitals](https://reksstudio.github.io/v2/main/results/quest/quest5-diazirine/index.md#orbitals)

![diazirine: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest5_diazirine.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: B<sub>1</sub> 4.09 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **4.121** | **+0.031** | B<sub>1</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **4.236** | **+0.146** | B<sub>1</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **4.178** | **+0.088** | B<sub>1</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

### T1 {#t1}

TBE: B<sub>1</sub> 3.49 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **3.426** | **−0.064** | B<sub>1</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **3.563** | **+0.073** | B<sub>1</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **3.533** | **+0.043** | B<sub>1</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (4,4)

(a, d)

![diazirine, BH\&HLYP (4,4), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_diazirine/bh_44m_13A.svg)**d** 13A · 0.000000\
−0.1005

![diazirine, BH\&HLYP (4,4), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_diazirine/bh_44m_10A.svg)**a** 10A · 2.000000\
−0.4696

(b, c)

![diazirine, BH\&HLYP (4,4), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_diazirine/bh_44m_12A.svg)**c** 12A · 0.000000\
−0.2818

![diazirine, BH\&HLYP (4,4), orbital 11A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_diazirine/bh_44m_11A.svg)**b** 11A · 2.000000\
−0.4172

M08-SO, (4,4)

(a, d)

![diazirine, M08-SO (4,4), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_diazirine/m08_44m_13A.svg)**d** 13A · 0.000000\
−0.1123

![diazirine, M08-SO (4,4), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_diazirine/m08_44m_10A.svg)**a** 10A · 2.000000\
−0.4742

(b, c)

![diazirine, M08-SO (4,4), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_diazirine/m08_44m_12A.svg)**c** 12A · 0.000000\
−0.2741

![diazirine, M08-SO (4,4), orbital 11A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_diazirine/m08_44m_11A.svg)**b** 11A · 2.000000\
−0.4185

ωB97X, (4,4)

(a, d)

![diazirine, ωB97X (4,4), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_diazirine/wb_44m_13A.svg)**d** 13A · 0.000000\
−0.1300

![diazirine, ωB97X (4,4), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_diazirine/wb_44m_10A.svg)**a** 10A · 2.000000\
−0.5102

(b, c)

![diazirine, ωB97X (4,4), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_diazirine/wb_44m_12A.svg)**c** 12A · 0.000000\
−0.3114

![diazirine, ωB97X (4,4), orbital 11A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_diazirine/wb_44m_11A.svg)**b** 11A · 2.000000\
−0.4590

[← cyclopentadienone](https://reksstudio.github.io/v2/main/results/quest/quest5-cyclopentadienone/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-diazirine) · [hexatriene →](https://reksstudio.github.io/v2/main/results/quest/quest5-hexatriene/index.md)
