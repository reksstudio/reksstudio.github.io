# azanaphthalene — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest5-azanaphthalene/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# azanaphthalene

QUEST5: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](#s1) · [S2](#s2) · [T1](#t1) · [T2](#t2) · [Orbitals](#orbitals)

![azanaphthalene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest5_azanaphthalene.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: B<sub>3g</sub> 3.14 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **3.588** | **+0.448** | –<sup>m</sup> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **3.372** | **+0.232** | –<sup>m</sup> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **3.431** | **+0.291** | B<sub>3g</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

### S2 {#s2}

TBE: B<sub>2u</sub> 4.28 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | **(2,2)** | **4.731** | **+0.452** | B<sub>2u</sub> |
| | (4,4) | 4.825 | +0.545 | B<sub>2u</sub> |
| | (6,6) | 4.914 | +0.634 | B<sub>2u</sub> |
| | (8,8) | 4.793 | +0.513 | B<sub>2u</sub> |
| M08-SO | **(2,2)** | **4.784** | **+0.504** | B<sub>2u</sub> |
| | (4,4) | 4.835 | +0.554 | B<sub>2u</sub> |
| | (6,6) | 4.885 | +0.605 | B<sub>2u</sub> |
| | (8,8) | 4.785 | +0.505 | B<sub>2u</sub> |
| ωB97X | **(2,2)** | **5.026** | **+0.746** | B<sub>2u</sub> |
| | (4,4) | 5.156 | +0.876 | B<sub>2u</sub> |
| | (6,6) | 5.224 | +0.944 | B<sub>2u</sub> |
| | (8,8) | 5.105 | +0.825 | B<sub>2u</sub> |

### T1 {#t1}

TBE: B<sub>3u</sub> 3.75 eV (BH\&HLYP); B<sub>3g</sub> 2.82 eV (M08-SO, ωB97X)

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | (4,4) | 3.651 | −0.099 | –<sup>m</sup> |
| | (6,6) | 4.021 | +0.271 | B<sub>3u</sub> |
| | **(8,8)** | **3.852** | **+0.102** | B<sub>3u</sub> |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **3.220** | **+0.400** | –<sup>m</sup> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **3.244** | **+0.424** | –<sup>m</sup> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

### T2 {#t2}

TBE: B<sub>2u</sub> 3.67 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 3.455 | −0.215 | B<sub>2u</sub> |
| | **(4,4)** | **3.805** | **+0.135** | B<sub>2u</sub> |
| | (6,6) | 3.966 | +0.296 | B<sub>2u</sub> |
| | (8,8) | 3.872 | +0.202 | B<sub>2u</sub> |
| M08-SO | **(2,2)** | **3.610** | **−0.060** | B<sub>2u</sub> |
| | (4,4) | 3.960 | +0.290 | B<sub>2u</sub> |
| | (6,6) | 4.085 | +0.415 | B<sub>2u</sub> |
| | (8,8) | 3.985 | +0.315 | B<sub>2u</sub> |
| ωB97X | **(2,2)** | **3.603** | **−0.067** | B<sub>2u</sub> |
| | (4,4) | 3.959 | +0.289 | B<sub>2u</sub> |
| | (6,6) | 4.116 | +0.446 | B<sub>2u</sub> |
| | (8,8) | 4.010 | +0.340 | B<sub>2u</sub> |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (2,2)

(a, b)

![azanaphthalene, BH\&HLYP (2,2), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/bh_22_35A.svg)**b** 35A · 0.000018\
−0.1688

![azanaphthalene, BH\&HLYP (2,2), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/bh_22_33A.svg)**a** 33A · 1.999982\
−0.3318

BH\&HLYP, (4,4)

(a, d)

![azanaphthalene, BH\&HLYP (4,4), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/bh_44_35A.svg)**d** 35A · 0.000051\
−0.1663

![azanaphthalene, BH\&HLYP (4,4), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/bh_44_32A.svg)**a** 32A · 1.999949\
−0.3632

(b, c)

![azanaphthalene, BH\&HLYP (4,4), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/bh_44_36A.svg)**c** 36A · 0.000039\
−0.1180

![azanaphthalene, BH\&HLYP (4,4), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/bh_44_33A.svg)**b** 33A · 1.999961\
−0.3293

BH\&HLYP, (6,6)

(a, f)

![azanaphthalene, BH\&HLYP (6,6), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/bh_66_37A.svg)**f** 37A · 0.000000\
−0.1164

![azanaphthalene, BH\&HLYP (6,6), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/bh_66_28A.svg)**a** 28A · 2.000000\
−0.4415

(b, e)

![azanaphthalene, BH\&HLYP (6,6), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/bh_66_35A.svg)**e** 35A · 0.000060\
−0.1747

![azanaphthalene, BH\&HLYP (6,6), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/bh_66_32A.svg)**b** 32A · 1.999940\
−0.3620

(c, d)

![azanaphthalene, BH\&HLYP (6,6), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/bh_66_36A.svg)**d** 36A · 0.000045\
−0.1234

![azanaphthalene, BH\&HLYP (6,6), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/bh_66_33A.svg)**c** 33A · 1.999955\
−0.3308

BH\&HLYP, (8,8)

(a, h)

![azanaphthalene, BH\&HLYP (8,8), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/bh_88_38A.svg)**h** 38A · 0.000000\
−0.0346

![azanaphthalene, BH\&HLYP (8,8), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/bh_88_27A.svg)**a** 27A · 2.000000\
−0.4632

(b, g)

![azanaphthalene, BH\&HLYP (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/bh_88_37A.svg)**g** 37A · 0.000000\
−0.1271

![azanaphthalene, BH\&HLYP (8,8), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/bh_88_28A.svg)**b** 28A · 2.000000\
−0.4443

(c, f)

![azanaphthalene, BH\&HLYP (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/bh_88_35A.svg)**f** 35A · 0.000057\
−0.1775

![azanaphthalene, BH\&HLYP (8,8), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/bh_88_32A.svg)**c** 32A · 1.999943\
−0.3637

(d, e)

![azanaphthalene, BH\&HLYP (8,8), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/bh_88_36A.svg)**e** 36A · 0.000039\
−0.1482

![azanaphthalene, BH\&HLYP (8,8), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/bh_88_33A.svg)**d** 33A · 1.999961\
−0.3306

M08-SO, (2,2)

(a, b)

![azanaphthalene, M08-SO (2,2), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/m08_22_35A.svg)**b** 35A · 0.000009\
−0.1820

![azanaphthalene, M08-SO (2,2), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/m08_22_33A.svg)**a** 33A · 1.999991\
−0.3469

M08-SO, (4,4)

(a, d)

![azanaphthalene, M08-SO (4,4), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/m08_44m_36A.svg)**d** 36A · 0.000001\
−0.1402

![azanaphthalene, M08-SO (4,4), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/m08_44m_33A.svg)**a** 33A · 1.999999\
−0.3437

(b, c)

![azanaphthalene, M08-SO (4,4), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/m08_44m_35A.svg)**c** 35A · 0.000000\
−0.2005

![azanaphthalene, M08-SO (4,4), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/m08_44m_34A.svg)**b** 34A · 2.000000\
−0.3350

M08-SO, (6,6)

(a, f)

![azanaphthalene, M08-SO (6,6), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/m08_66_37A.svg)**f** 37A · 0.000000\
−0.1341

![azanaphthalene, M08-SO (6,6), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/m08_66_28A.svg)**a** 28A · 2.000000\
−0.4568

(b, e)

![azanaphthalene, M08-SO (6,6), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/m08_66_35A.svg)**e** 35A · 0.000008\
−0.1919

![azanaphthalene, M08-SO (6,6), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/m08_66_32A.svg)**b** 32A · 1.999992\
−0.3771

(c, d)

![azanaphthalene, M08-SO (6,6), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/m08_66_36A.svg)**d** 36A · 0.000005\
−0.1439

![azanaphthalene, M08-SO (6,6), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/m08_66_33A.svg)**c** 33A · 1.999995\
−0.3476

M08-SO, (8,8)

(a, h)

![azanaphthalene, M08-SO (8,8), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/m08_88_38A.svg)**h** 38A · 0.000000\
−0.0540

![azanaphthalene, M08-SO (8,8), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/m08_88_27A.svg)**a** 27A · 2.000000\
−0.4782

(b, g)

![azanaphthalene, M08-SO (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/m08_88_37A.svg)**g** 37A · 0.000000\
−0.1438

![azanaphthalene, M08-SO (8,8), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/m08_88_28A.svg)**b** 28A · 2.000000\
−0.4593

(c, f)

![azanaphthalene, M08-SO (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/m08_88_35A.svg)**f** 35A · 0.000008\
−0.1954

![azanaphthalene, M08-SO (8,8), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/m08_88_32A.svg)**c** 32A · 1.999992\
−0.3786

(d, e)

![azanaphthalene, M08-SO (8,8), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/m08_88_36A.svg)**e** 36A · 0.000004\
−0.1674

![azanaphthalene, M08-SO (8,8), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/m08_88_33A.svg)**d** 33A · 1.999996\
−0.3471

ωB97X, (2,2)

(a, b)

![azanaphthalene, ωB97X (2,2), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/wb_22_35A.svg)**b** 35A · 0.000026\
−0.2064

![azanaphthalene, ωB97X (2,2), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/wb_22_33A.svg)**a** 33A · 1.999974\
−0.3817

ωB97X, (4,4)

(a, d)

![azanaphthalene, ωB97X (4,4), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/wb_44m_36A.svg)**d** 36A · 0.000004\
−0.1671

![azanaphthalene, ωB97X (4,4), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/wb_44m_33A.svg)**a** 33A · 1.999996\
−0.3765

(b, c)

![azanaphthalene, ωB97X (4,4), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/wb_44m_35A.svg)**c** 35A · 0.000000\
−0.2281

![azanaphthalene, ωB97X (4,4), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/wb_44m_34A.svg)**b** 34A · 2.000000\
−0.3668

ωB97X, (6,6)

(a, f)

![azanaphthalene, ωB97X (6,6), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/wb_66_37A.svg)**f** 37A · 0.000000\
−0.1617

![azanaphthalene, ωB97X (6,6), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/wb_66_28A.svg)**a** 28A · 2.000000\
−0.4918

(b, e)

![azanaphthalene, ωB97X (6,6), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/wb_66_35A.svg)**e** 35A · 0.000029\
−0.2188

![azanaphthalene, ωB97X (6,6), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/wb_66_32A.svg)**b** 32A · 1.999971\
−0.4092

(c, d)

![azanaphthalene, ωB97X (6,6), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/wb_66_36A.svg)**d** 36A · 0.000031\
−0.1685

![azanaphthalene, ωB97X (6,6), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/wb_66_33A.svg)**c** 33A · 1.999969\
−0.3816

ωB97X, (8,8)

(a, h)

![azanaphthalene, ωB97X (8,8), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/wb_88_38A.svg)**h** 38A · 0.000000\
−0.0707

![azanaphthalene, ωB97X (8,8), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/wb_88_27A.svg)**a** 27A · 2.000000\
−0.5140

(b, g)

![azanaphthalene, ωB97X (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/wb_88_37A.svg)**g** 37A · 0.000000\
−0.1702

![azanaphthalene, ωB97X (8,8), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/wb_88_28A.svg)**b** 28A · 2.000000\
−0.4938

(c, f)

![azanaphthalene, ωB97X (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/wb_88_35A.svg)**f** 35A · 0.000027\
−0.2220

![azanaphthalene, ωB97X (8,8), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/wb_88_32A.svg)**c** 32A · 1.999973\
−0.4101

(d, e)

![azanaphthalene, ωB97X (8,8), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/wb_88_36A.svg)**e** 36A · 0.000024\
−0.1943

![azanaphthalene, ωB97X (8,8), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_azanaphthalene/wb_88_33A.svg)**d** 33A · 1.999976\
−0.3791

[← triazine](https://reksstudio.github.io/v2/main/results/quest/quest3-triazine/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-azanaphthalene) · [benzoquinone →](https://reksstudio.github.io/v2/main/results/quest/quest5-benzoquinone/index.md)
