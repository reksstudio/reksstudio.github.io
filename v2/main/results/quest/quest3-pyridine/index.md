# pyridine — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest3-pyridine/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# pyridine

QUEST3: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](https://reksstudio.github.io/v2/main/results/quest/quest3-pyridine/index.md#s1) · [S2](https://reksstudio.github.io/v2/main/results/quest/quest3-pyridine/index.md#s2) · [T1](https://reksstudio.github.io/v2/main/results/quest/quest3-pyridine/index.md#t1) · [T2](https://reksstudio.github.io/v2/main/results/quest/quest3-pyridine/index.md#t2) · [Orbitals](https://reksstudio.github.io/v2/main/results/quest/quest3-pyridine/index.md#orbitals)

![pyridine: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_pyridine.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: B<sub>1</sub> 4.95 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **4.826** | **−0.124** | –<sup>m</sup> |
| | (6,6) | – | – | – |
| | (8,8) | 7.314 | +2.364 | B<sub>1</sub> |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **4.781** | **−0.169** | –<sup>m</sup> |
| | (6,6) | – | – | – |
| | (8,8) | 7.500 | +2.550 | B<sub>1</sub> |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **4.737** | **−0.213** | –<sup>m</sup> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

### S2 {#s2}

TBE: B<sub>2</sub> 5.14 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 5.937 | +0.797 | B<sub>2</sub> |
| | (4,4) | 5.943 | +0.803 | B<sub>2</sub> |
| | (6,6) | 5.727 | +0.587 | B<sub>2</sub> |
| | **(8,8)** | **5.602** | **+0.462** | B<sub>2</sub> |
| M08-SO | (2,2) | 5.936 | +0.796 | B<sub>2</sub> |
| | (4,4) | 5.867 | +0.727 | B<sub>2</sub> |
| | (6,6) | 5.606 | +0.466 | B<sub>2</sub> |
| | **(8,8)** | **5.527** | **+0.387** | B<sub>2</sub> |
| ωB97X | (2,2) | 6.055 | +0.915 | B<sub>2</sub> |
| | (4,4) | 6.027 | +0.886 | B<sub>2</sub> |
| | (6,6) | 5.714 | +0.574 | B<sub>2</sub> |
| | **(8,8)** | **5.616** | **+0.476** | B<sub>2</sub> |

### T1 {#t1}

TBE: A<sub>1</sub> 4.30 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **4.275** | **−0.025** | –<sup>m</sup> |
| | (6,6) | 4.532 | +0.232 | A<sub>1</sub> |
| | (8,8) | 4.434 | +0.134 | A<sub>1</sub> |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **4.326** | **+0.026** | –<sup>m</sup> |
| | (6,6) | 4.706 | +0.406 | A<sub>1</sub> |
| | (8,8) | 4.617 | +0.317 | A<sub>1</sub> |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **4.231** | **−0.069** | –<sup>m</sup> |
| | (6,6) | 4.559 | +0.259 | A<sub>1</sub> |
| | (8,8) | 4.473 | +0.173 | A<sub>1</sub> |

### T2 {#t2}

TBE: B<sub>1</sub> 4.46 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **4.502** | **+0.042** | –<sup>m</sup> |
| | (6,6) | – | – | – |
| | (8,8) | 7.290 | +2.830 | B<sub>1</sub> |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **4.602** | **+0.142** | –<sup>m</sup> |
| | (6,6) | – | – | – |
| | (8,8) | 7.442 | +2.982 | B<sub>1</sub> |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **4.517** | **+0.057** | –<sup>m</sup> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (2,2)

(a, b)

![pyridine, BH\&HLYP (2,2), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/bh_22_22A.svg)**b** 22A · 0.000004\
−0.1100

![pyridine, BH\&HLYP (2,2), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/bh_22_21A.svg)**a** 21A · 1.999996\
−0.3215

BH\&HLYP, (4,4)

(a, d)

![pyridine, BH\&HLYP (4,4), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/bh_44m_22A.svg)**d** 22A · 0.000000\
−0.1504

![pyridine, BH\&HLYP (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/bh_44m_20A.svg)**a** 20A · 2.000000\
−0.3465

(b, c)

![pyridine, BH\&HLYP (4,4), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/bh_44m_23A.svg)**c** 23A · 0.000014\
−0.1094

![pyridine, BH\&HLYP (4,4), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/bh_44m_21A.svg)**b** 21A · 1.999986\
−0.3282

BH\&HLYP, (6,6)

(a, f)

![pyridine, BH\&HLYP (6,6), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/bh_66_24A.svg)**f** 24A · 0.000000\
−0.0199

![pyridine, BH\&HLYP (6,6), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/bh_66_18A.svg)**a** 18A · 2.000000\
−0.4716

(b, e)

![pyridine, BH\&HLYP (6,6), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/bh_66_23A.svg)**e** 23A · 0.000091\
−0.1274

![pyridine, BH\&HLYP (6,6), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/bh_66_19A.svg)**b** 19A · 1.999909\
−0.3907

(c, d)

![pyridine, BH\&HLYP (6,6), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/bh_66_22A.svg)**d** 22A · 0.000230\
−0.1601

![pyridine, BH\&HLYP (6,6), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/bh_66_21A.svg)**c** 21A · 1.999770\
−0.3449

BH\&HLYP, (8,8)

(a, h)

![pyridine, BH\&HLYP (8,8), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/bh_88_24A.svg)**h** 24A · 0.000000\
−0.0700

![pyridine, BH\&HLYP (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/bh_88_15A.svg)**a** 15A · 2.000000\
−0.5439

(b, g)

![pyridine, BH\&HLYP (8,8), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/bh_88_25A.svg)**g** 25A · 0.000000\
−0.0222

![pyridine, BH\&HLYP (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/bh_88_17A.svg)**b** 17A · 2.000000\
−0.4862

(c, f)

![pyridine, BH\&HLYP (8,8), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/bh_88_23A.svg)**f** 23A · 0.000113\
−0.1375

![pyridine, BH\&HLYP (8,8), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/bh_88_19A.svg)**c** 19A · 1.999887\
−0.3859

(d, e)

![pyridine, BH\&HLYP (8,8), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/bh_88_22A.svg)**e** 22A · 0.000277\
−0.2062

![pyridine, BH\&HLYP (8,8), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/bh_88_21A.svg)**d** 21A · 1.999723\
−0.3497

M08-SO, (2,2)

(a, b)

![pyridine, M08-SO (2,2), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/m08_22_22A.svg)**b** 22A · 0.000002\
−0.1249

![pyridine, M08-SO (2,2), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/m08_22_20A.svg)**a** 20A · 1.999998\
−0.3358

M08-SO, (4,4)

(a, d)

![pyridine, M08-SO (4,4), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/m08_44m_22A.svg)**d** 22A · 0.000000\
−0.1606

![pyridine, M08-SO (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/m08_44m_20A.svg)**a** 20A · 2.000000\
−0.3506

(b, c)

![pyridine, M08-SO (4,4), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/m08_44m_23A.svg)**c** 23A · 0.000002\
−0.1274

![pyridine, M08-SO (4,4), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/m08_44m_21A.svg)**b** 21A · 1.999998\
−0.3408

M08-SO, (6,6)

(a, f)

![pyridine, M08-SO (6,6), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/m08_66_25A.svg)**f** 25A · 0.000000\
−0.0344

![pyridine, M08-SO (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/m08_66_17A.svg)**a** 17A · 2.000000\
−0.4918

(b, e)

![pyridine, M08-SO (6,6), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/m08_66_23A.svg)**e** 23A · 0.000022\
−0.1465

![pyridine, M08-SO (6,6), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/m08_66_19A.svg)**b** 19A · 1.999978\
−0.3967

(c, d)

![pyridine, M08-SO (6,6), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/m08_66_22A.svg)**d** 22A · 0.000032\
−0.1765

![pyridine, M08-SO (6,6), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/m08_66_21A.svg)**c** 21A · 1.999968\
−0.3581

M08-SO, (8,8)

(a, h)

![pyridine, M08-SO (8,8), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/m08_88_24A.svg)**h** 24A · 0.000000\
−0.0772

![pyridine, M08-SO (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/m08_88_15A.svg)**a** 15A · 2.000000\
−0.5422

(b, g)

![pyridine, M08-SO (8,8), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/m08_88_25A.svg)**g** 25A · 0.000000\
−0.0415

![pyridine, M08-SO (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/m08_88_17A.svg)**b** 17A · 2.000000\
−0.5039

(c, f)

![pyridine, M08-SO (8,8), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/m08_88_23A.svg)**f** 23A · 0.000023\
−0.1550

![pyridine, M08-SO (8,8), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/m08_88_19A.svg)**c** 19A · 1.999977\
−0.3965

(d, e)

![pyridine, M08-SO (8,8), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/m08_88_22A.svg)**e** 22A · 0.000039\
−0.2226

![pyridine, M08-SO (8,8), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/m08_88_21A.svg)**d** 21A · 1.999961\
−0.3640

ωB97X, (2,2)

(a, b)

![pyridine, ωB97X (2,2), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/wb_22_22A.svg)**b** 22A · 0.000004\
−0.1542

![pyridine, ωB97X (2,2), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/wb_22_20A.svg)**a** 20A · 1.999996\
−0.3728

ωB97X, (4,4)

(a, d)

![pyridine, ωB97X (4,4), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/wb_44m_22A.svg)**d** 22A · 0.000000\
−0.1915

![pyridine, ωB97X (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/wb_44m_20A.svg)**a** 20A · 2.000000\
−0.3837

(b, c)

![pyridine, ωB97X (4,4), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/wb_44m_23A.svg)**c** 23A · 0.000007\
−0.1574

![pyridine, ωB97X (4,4), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/wb_44m_21A.svg)**b** 21A · 1.999993\
−0.3751

ωB97X, (6,6)

(a, f)

![pyridine, ωB97X (6,6), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/wb_66_24A.svg)**f** 24A · 0.000000\
−0.0337

![pyridine, ωB97X (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/wb_66_17A.svg)**a** 17A · 2.000000\
−0.5235

(b, e)

![pyridine, ωB97X (6,6), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/wb_66_23A.svg)**e** 23A · 0.000053\
−0.1749

![pyridine, ωB97X (6,6), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/wb_66_19A.svg)**b** 19A · 1.999947\
−0.4222

(c, d)

![pyridine, ωB97X (6,6), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/wb_66_22A.svg)**d** 22A · 0.000117\
−0.1988

![pyridine, ωB97X (6,6), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/wb_66_21A.svg)**c** 21A · 1.999883\
−0.3856

ωB97X, (8,8)

(a, h)

![pyridine, ωB97X (8,8), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/wb_88_24A.svg)**h** 24A · 0.000000\
−0.0816

![pyridine, ωB97X (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/wb_88_15A.svg)**a** 15A · 2.000000\
−0.5730

(b, g)

![pyridine, ωB97X (8,8), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/wb_88_25A.svg)**g** 25A · 0.000000\
−0.0540

![pyridine, ωB97X (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/wb_88_17A.svg)**b** 17A · 2.000000\
−0.5409

(c, f)

![pyridine, ωB97X (8,8), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/wb_88_23A.svg)**f** 23A · 0.000059\
−0.1848

![pyridine, ωB97X (8,8), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/wb_88_19A.svg)**c** 19A · 1.999941\
−0.4254

(d, e)

![pyridine, ωB97X (8,8), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/wb_88_22A.svg)**e** 22A · 0.000136\
−0.2481

![pyridine, ωB97X (8,8), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyridine/wb_88_21A.svg)**d** 21A · 1.999864\
−0.3958

[← pyridazine](https://reksstudio.github.io/v2/main/results/quest/quest3-pyridazine/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-pyridine) · [pyrimidine →](https://reksstudio.github.io/v2/main/results/quest/quest3-pyrimidine/index.md)
