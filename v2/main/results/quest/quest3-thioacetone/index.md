# thioacetone — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest3-thioacetone/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# thioacetone

QUEST3: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](https://reksstudio.github.io/v2/main/results/quest/quest3-thioacetone/index.md#s1) · [T1](https://reksstudio.github.io/v2/main/results/quest/quest3-thioacetone/index.md#t1) · [T2](https://reksstudio.github.io/v2/main/results/quest/quest3-thioacetone/index.md#t2) · [Orbitals](https://reksstudio.github.io/v2/main/results/quest/quest3-thioacetone/index.md#orbitals)

![thioacetone: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_thioacetone.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: A<sub>2</sub> 2.53 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **2.793** | **+0.263** | A<sub>2</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **2.942** | **+0.412** | A<sub>2</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **2.864** | **+0.334** | A<sub>2</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

### T1 {#t1}

TBE: A<sub>2</sub> 2.33 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **2.449** | **+0.119** | A<sub>2</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **2.597** | **+0.267** | A<sub>2</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **2.521** | **+0.191** | A<sub>2</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

### T2 {#t2}

TBE: A<sub>1</sub> 3.45 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 3.260 | −0.190 | A<sub>1</sub> |
| | **(4,4)** | **3.381** | **−0.069** | A<sub>1</sub> |
| | (6,6) | 3.619 | +0.169 | A<sub>1</sub> |
| | (8,8) | – | – | – |
| M08-SO | **(2,2)** | **3.451** | **+0.001** | A<sub>1</sub> |
| | (4,4) | 3.590 | +0.140 | A<sub>1</sub> |
| | (6,6) | 3.844 | +0.394 | A<sub>1</sub> |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | 3.335 | −0.115 | A<sub>1</sub> |
| | **(4,4)** | **3.455** | **+0.005** | A<sub>1</sub> |
| | (6,6) | 3.724 | +0.274 | A<sub>1</sub> |
| | (8,8) | – | – | – |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (2,2)

(a, b)

![thioacetone, BH\&HLYP (2,2), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/bh_22_21A.svg)**b** 21A · 0.000656\
−0.1638

![thioacetone, BH\&HLYP (2,2), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/bh_22_19A.svg)**a** 19A · 1.999344\
−0.3415

BH\&HLYP, (4,4)

(a, d)

![thioacetone, BH\&HLYP (4,4), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/bh_44m_22A.svg)**d** 22A · 0.000000\
−0.0855

![thioacetone, BH\&HLYP (4,4), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/bh_44m_19A.svg)**a** 19A · 2.000000\
−0.3771

(b, c)

![thioacetone, BH\&HLYP (4,4), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/bh_44m_21A.svg)**c** 21A · 0.000000\
−0.2313

![thioacetone, BH\&HLYP (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/bh_44m_20A.svg)**b** 20A · 2.000000\
−0.3444

BH\&HLYP, (6,6)

(a, f)

![thioacetone, BH\&HLYP (6,6), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/bh_66_22A.svg)**f** 22A · 0.000000\
−0.0666

![thioacetone, BH\&HLYP (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/bh_66_17A.svg)**a** 17A · 2.000000\
−0.4811

(b, e)

![thioacetone, BH\&HLYP (6,6), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/bh_66_23A.svg)**e** 23A · 0.000000\
−0.0657

![thioacetone, BH\&HLYP (6,6), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/bh_66_18A.svg)**b** 18A · 2.000000\
−0.4664

(c, d)

![thioacetone, BH\&HLYP (6,6), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/bh_66_21A.svg)**d** 21A · 0.001580\
−0.1890

![thioacetone, BH\&HLYP (6,6), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/bh_66_19A.svg)**c** 19A · 1.998420\
−0.3700

M08-SO, (2,2)

(a, b)

![thioacetone, M08-SO (2,2), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/m08_22_21A.svg)**b** 21A · 0.000557\
−0.1730

![thioacetone, M08-SO (2,2), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/m08_22_19A.svg)**a** 19A · 1.999443\
−0.3504

M08-SO, (4,4)

(a, d)

![thioacetone, M08-SO (4,4), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/m08_44m_22A.svg)**d** 22A · 0.000000\
−0.0952

![thioacetone, M08-SO (4,4), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/m08_44m_19A.svg)**a** 19A · 2.000000\
−0.3815

(b, c)

![thioacetone, M08-SO (4,4), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/m08_44m_21A.svg)**c** 21A · 0.000000\
−0.2347

![thioacetone, M08-SO (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/m08_44m_20A.svg)**b** 20A · 2.000000\
−0.3514

M08-SO, (6,6)

(a, f)

![thioacetone, M08-SO (6,6), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/m08_66_23A.svg)**f** 23A · 0.000000\
−0.0748

![thioacetone, M08-SO (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/m08_66_17A.svg)**a** 17A · 2.000000\
−0.4824

(b, e)

![thioacetone, M08-SO (6,6), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/m08_66_22A.svg)**e** 22A · 0.000000\
−0.0793

![thioacetone, M08-SO (6,6), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/m08_66_18A.svg)**b** 18A · 2.000000\
−0.4668

(c, d)

![thioacetone, M08-SO (6,6), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/m08_66_21A.svg)**d** 21A · 0.000471\
−0.1947

![thioacetone, M08-SO (6,6), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/m08_66_19A.svg)**c** 19A · 1.999529\
−0.3792

ωB97X, (2,2)

(a, b)

![thioacetone, ωB97X (2,2), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/wb_22_21A.svg)**b** 21A · 0.000675\
−0.2096

![thioacetone, ωB97X (2,2), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/wb_22_19A.svg)**a** 19A · 1.999325\
−0.3918

ωB97X, (4,4)

(a, d)

![thioacetone, ωB97X (4,4), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/wb_44m_22A.svg)**d** 22A · 0.000000\
−0.1071

![thioacetone, ωB97X (4,4), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/wb_44m_19A.svg)**a** 19A · 2.000000\
−0.4234

(b, c)

![thioacetone, ωB97X (4,4), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/wb_44m_21A.svg)**c** 21A · 0.000000\
−0.2722

![thioacetone, ωB97X (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/wb_44m_20A.svg)**b** 20A · 2.000000\
−0.3872

ωB97X, (6,6)

(a, f)

![thioacetone, ωB97X (6,6), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/wb_66_23A.svg)**f** 23A · 0.000000\
−0.0819

![thioacetone, ωB97X (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/wb_66_17A.svg)**a** 17A · 2.000000\
−0.5197

(b, e)

![thioacetone, ωB97X (6,6), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/wb_66_22A.svg)**e** 22A · 0.000000\
−0.0995

![thioacetone, ωB97X (6,6), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/wb_66_18A.svg)**b** 18A · 2.000000\
−0.5075

(c, d)

![thioacetone, ωB97X (6,6), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/wb_66_21A.svg)**d** 21A · 0.001014\
−0.2333

![thioacetone, ωB97X (6,6), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thioacetone/wb_66_19A.svg)**c** 19A · 1.998986\
−0.4189

[← tetrazine](https://reksstudio.github.io/v2/main/results/quest/quest3-tetrazine/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-thioacetone) · [thiophene →](https://reksstudio.github.io/v2/main/results/quest/quest3-thiophene/index.md)
