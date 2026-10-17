# imidazole — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest3-imidazole/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# imidazole

QUEST3: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](#s1) · [S2](#s2) · [T1](#t1) · [T2](#t2) · [Orbitals](#orbitals)

![imidazole: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_imidazole.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: A′′ 6.50 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **6.912** | **+0.412** | A′′ |
| | (6,6) | 6.756 | +0.256 | A′′ |
| | (8,8) | 5.965 | −0.535 | A′′ |
| M08-SO | (2,2) | – | – | – |
| | (4,4) | 6.995 | +0.495 | A′′ |
| | (6,6) | 6.899 | +0.399 | A′′ |
| | **(8,8)** | **6.189** | **−0.311** | A′′ |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 7.030 | +0.530 | A′′ |
| | (6,6) | 7.374 | +0.874 | A′′ |
| | **(8,8)** | **6.404** | **−0.096** | A′′ |

### S2 {#s2}

TBE: A′ 6.41 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 6.619 | +0.209 | A′ |
| | **(4,4)** | **6.404** | **−0.006** | A′ |
| | (6,6) | 6.543 | +0.133 | A′ |
| | (8,8) | 6.744 | +0.334 | A′ |
| M08-SO | **(2,2)** | **6.395** | **−0.015** | A′ |
| | (4,4) | 6.238 | −0.172 | A′ |
| | (6,6) | 6.495 | +0.085 | A′ |
| | (8,8) | 6.589 | +0.179 | A′ |
| ωB97X | (2,2) | 6.670 | +0.260 | A′ |
| | (4,4) | 6.350 | −0.060 | A′ |
| | **(6,6)** | **6.413** | **+0.004** | A′ |
| | (8,8) | 6.626 | +0.216 | A′ |

### T1 {#t1}

TBE: A′ 4.73 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | **(2,2)** | **4.729** | **−0.002** | A′ |
| | (4,4) | 4.834 | +0.104 | A′ |
| | (6,6) | 4.821 | +0.091 | A′ |
| | (8,8) | 4.853 | +0.123 | A′ |
| M08-SO | **(2,2)** | **4.889** | **+0.159** | A′ |
| | (4,4) | 5.000 | +0.270 | A′ |
| | (6,6) | 5.012 | +0.282 | A′ |
| | (8,8) | 5.039 | +0.309 | A′ |
| ωB97X | **(2,2)** | **4.840** | **+0.110** | A′ |
| | (4,4) | 4.968 | +0.238 | A′ |
| | (6,6) | 4.996 | +0.266 | A′ |
| | (8,8) | 5.047 | +0.317 | A′ |

### T2 {#t2}

TBE: A′′ 6.31 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **6.256** | **−0.054** | A′′ |
| | (6,6) | 6.723 | +0.413 | A′′ |
| | (8,8) | 5.944 | −0.366 | A′′ |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **6.465** | **+0.155** | A′′ |
| | (6,6) | 6.867 | +0.557 | A′′ |
| | (8,8) | 6.088 | −0.222 | A′′ |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **6.404** | **+0.094** | A′′ |
| | (6,6) | 7.377 | +1.067 | A′′ |
| | (8,8) | 6.459 | +0.149 | A′′ |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (2,2)

(a, b)

![imidazole, BH\&HLYP (2,2), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/bh_22_19A.svg)**b** 19A · 0.000039\
−0.0715

![imidazole, BH\&HLYP (2,2), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/bh_22_18A.svg)**a** 18A · 1.999961\
−0.2928

BH\&HLYP, (4,4)

(a, d)

![imidazole, BH\&HLYP (4,4), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/bh_44m_19A.svg)**d** 19A · 0.000000\
−0.1182

![imidazole, BH\&HLYP (4,4), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/bh_44m_16A.svg)**a** 16A · 2.000000\
−0.3801

(b, c)

![imidazole, BH\&HLYP (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/bh_44m_20A.svg)**c** 20A · 0.000141\
−0.0721

![imidazole, BH\&HLYP (4,4), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/bh_44m_18A.svg)**b** 18A · 1.999859\
−0.2892

BH\&HLYP, (6,6)

(a, f)

![imidazole, BH\&HLYP (6,6), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/bh_66_21A.svg)**f** 21A · 0.000000\
−0.0669

![imidazole, BH\&HLYP (6,6), orbital 11A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/bh_66_11A.svg)**a** 11A · 2.000000\
−0.6888

(b, e)

![imidazole, BH\&HLYP (6,6), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/bh_66_20A.svg)**e** 20A · 0.000003\
−0.0720

![imidazole, BH\&HLYP (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/bh_66_17A.svg)**b** 17A · 1.999997\
−0.3807

(c, d)

![imidazole, BH\&HLYP (6,6), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/bh_66_19A.svg)**d** 19A · 0.000075\
−0.0981

![imidazole, BH\&HLYP (6,6), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/bh_66_18A.svg)**c** 18A · 1.999925\
−0.3222

BH\&HLYP, (8,8)

(a, h)

![imidazole, BH\&HLYP (8,8), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/bh_88_22A.svg)**h** 22A · 0.000000\
−0.0794

![imidazole, BH\&HLYP (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/bh_88_16A.svg)**a** 16A · 2.000000\
−0.4913

(b, g)

![imidazole, BH\&HLYP (8,8), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/bh_88_21A.svg)**g** 21A · 0.000000\
−0.1039

![imidazole, BH\&HLYP (8,8), orbital 11A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/bh_88_11A.svg)**b** 11A · 2.000000\
−0.6050

(c, f)

![imidazole, BH\&HLYP (8,8), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/bh_88_19A.svg)**f** 19A · 0.000002\
−0.1086

![imidazole, BH\&HLYP (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/bh_88_17A.svg)**c** 17A · 1.999998\
−0.3925

(d, e)

![imidazole, BH\&HLYP (8,8), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/bh_88_20A.svg)**e** 20A · 0.000050\
−0.1066

![imidazole, BH\&HLYP (8,8), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/bh_88_18A.svg)**d** 18A · 1.999950\
−0.3274

M08-SO, (2,2)

(a, b)

![imidazole, M08-SO (2,2), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/m08_22_19A.svg)**b** 19A · 0.000009\
−0.0895

![imidazole, M08-SO (2,2), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/m08_22_18A.svg)**a** 18A · 1.999991\
−0.3054

M08-SO, (4,4)

(a, d)

![imidazole, M08-SO (4,4), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/m08_44m_19A.svg)**d** 19A · 0.000000\
−0.1277

![imidazole, M08-SO (4,4), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/m08_44m_16A.svg)**a** 16A · 2.000000\
−0.3811

(b, c)

![imidazole, M08-SO (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/m08_44m_20A.svg)**c** 20A · 0.000026\
−0.0914

![imidazole, M08-SO (4,4), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/m08_44m_18A.svg)**b** 18A · 1.999974\
−0.3035

M08-SO, (6,6)

(a, f)

![imidazole, M08-SO (6,6), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/m08_66_21A.svg)**f** 21A · 0.000000\
−0.0752

![imidazole, M08-SO (6,6), orbital 11A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/m08_66_11A.svg)**a** 11A · 2.000000\
−0.6880

(b, e)

![imidazole, M08-SO (6,6), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/m08_66_20A.svg)**e** 20A · 0.000000\
−0.0911

![imidazole, M08-SO (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/m08_66_17A.svg)**b** 17A · 2.000000\
−0.3929

(c, d)

![imidazole, M08-SO (6,6), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/m08_66_19A.svg)**d** 19A · 0.000012\
−0.1160

![imidazole, M08-SO (6,6), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/m08_66_18A.svg)**c** 18A · 1.999988\
−0.3360

M08-SO, (8,8)

(a, h)

![imidazole, M08-SO (8,8), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/m08_88_22A.svg)**h** 22A · 0.000000\
−0.0880

![imidazole, M08-SO (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/m08_88_16A.svg)**a** 16A · 2.000000\
−0.4898

(b, g)

![imidazole, M08-SO (8,8), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/m08_88_21A.svg)**g** 21A · 0.000000\
−0.1127

![imidazole, M08-SO (8,8), orbital 11A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/m08_88_11A.svg)**b** 11A · 2.000000\
−0.6120

(c, f)

![imidazole, M08-SO (8,8), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/m08_88_19A.svg)**f** 19A · 0.000000\
−0.1290

![imidazole, M08-SO (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/m08_88_17A.svg)**c** 17A · 2.000000\
−0.4050

(d, e)

![imidazole, M08-SO (8,8), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/m08_88_20A.svg)**e** 20A · 0.000009\
−0.1230

![imidazole, M08-SO (8,8), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/m08_88_18A.svg)**d** 18A · 1.999991\
−0.3416

ωB97X, (2,2)

(a, b)

![imidazole, ωB97X (2,2), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/wb_22_19A.svg)**b** 19A · 0.000031\
−0.1170

![imidazole, ωB97X (2,2), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/wb_22_18A.svg)**a** 18A · 1.999969\
−0.3409

ωB97X, (4,4)

(a, d)

![imidazole, ωB97X (4,4), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/wb_44m_19A.svg)**d** 19A · 0.000000\
−0.1562

![imidazole, ωB97X (4,4), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/wb_44m_16A.svg)**a** 16A · 2.000000\
−0.4102

(b, c)

![imidazole, ωB97X (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/wb_44m_20A.svg)**c** 20A · 0.000080\
−0.1186

![imidazole, ωB97X (4,4), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/wb_44m_18A.svg)**b** 18A · 1.999920\
−0.3380

ωB97X, (6,6)

(a, f)

![imidazole, ωB97X (6,6), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/wb_66_21A.svg)**f** 21A · 0.000000\
−0.0808

![imidazole, ωB97X (6,6), orbital 11A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/wb_66_11A.svg)**a** 11A · 2.000000\
−0.7207

(b, e)

![imidazole, ωB97X (6,6), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/wb_66_20A.svg)**e** 20A · 0.000001\
−0.1203

![imidazole, ωB97X (6,6), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/wb_66_16A.svg)**b** 16A · 1.999999\
−0.4246

(c, d)

![imidazole, ωB97X (6,6), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/wb_66_19A.svg)**d** 19A · 0.000030\
−0.1446

![imidazole, ωB97X (6,6), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/wb_66_18A.svg)**c** 18A · 1.999970\
−0.3729

ωB97X, (8,8)

(a, h)

![imidazole, ωB97X (8,8), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/wb_88_22A.svg)**h** 22A · 0.000000\
−0.0993

![imidazole, ωB97X (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/wb_88_16A.svg)**a** 16A · 2.000000\
−0.5183

(b, g)

![imidazole, ωB97X (8,8), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/wb_88_21A.svg)**g** 21A · 0.000000\
−0.1275

![imidazole, ωB97X (8,8), orbital 11A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/wb_88_11A.svg)**b** 11A · 2.000000\
−0.6469

(c, f)

![imidazole, ωB97X (8,8), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/wb_88_19A.svg)**f** 19A · 0.000001\
−0.1600

![imidazole, ωB97X (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/wb_88_17A.svg)**c** 17A · 1.999999\
−0.4365

(d, e)

![imidazole, ωB97X (8,8), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/wb_88_20A.svg)**e** 20A · 0.000020\
−0.1529

![imidazole, ωB97X (8,8), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_imidazole/wb_88_18A.svg)**d** 18A · 1.999980\
−0.3797

[← glyoxal](https://reksstudio.github.io/v2/main/results/quest/quest3-glyoxal/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-imidazole) · [isobutene →](https://reksstudio.github.io/v2/main/results/quest/quest3-isobutene/index.md)
