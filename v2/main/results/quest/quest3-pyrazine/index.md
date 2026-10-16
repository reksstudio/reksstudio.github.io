# pyrazine — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest3-pyrazine/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# pyrazine

QUEST3: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](https://reksstudio.github.io/v2/main/results/quest/quest3-pyrazine/index.md#s1) · [S2](https://reksstudio.github.io/v2/main/results/quest/quest3-pyrazine/index.md#s2) · [T1](https://reksstudio.github.io/v2/main/results/quest/quest3-pyrazine/index.md#t1) · [T2](https://reksstudio.github.io/v2/main/results/quest/quest3-pyrazine/index.md#t2) · [Orbitals](https://reksstudio.github.io/v2/main/results/quest/quest3-pyrazine/index.md#orbitals)

![pyrazine: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_pyrazine.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: B<sub>3u</sub> 4.15 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **4.299** | **+0.149** | –<sup>m</sup> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **4.162** | **+0.012** | B<sub>3u</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **4.137** | **−0.013** | B<sub>3u</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

### S2 {#s2}

TBE: B<sub>1u</sub> 6.88 eV (BH\&HLYP); A<sub>u</sub> 4.98 eV (M08-SO); B<sub>2g</sub> 5.71 eV (ωB97X)

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | (4,4) | 6.958 | +0.078 | –<sup>m</sup> |
| | (6,6) | 6.702 | −0.177 | B<sub>1u</sub> |
| | **(8,8)** | **6.854** | **−0.026** | B<sub>1u</sub> |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **5.639** | **+0.659** | A<sub>u</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **5.639** | **−0.071** | –<sup>m</sup> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

### T1 {#t1}

TBE: B<sub>3u</sub> 3.59 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **3.836** | **+0.246** | –<sup>m</sup> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **3.802** | **+0.212** | B<sub>3u</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **3.714** | **+0.124** | B<sub>3u</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

### T2 {#t2}

TBE: B<sub>1u</sub> 4.35 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | (4,4) | 4.631 | +0.281 | B<sub>1u</sub> |
| | (6,6) | 4.456 | +0.106 | B<sub>1u</sub> |
| | **(8,8)** | **4.431** | **+0.081** | B<sub>1u</sub> |
| M08-SO | (2,2) | – | – | – |
| | (4,4) | 4.836 | +0.486 | B<sub>1u</sub> |
| | (6,6) | 4.661 | +0.311 | B<sub>1u</sub> |
| | **(8,8)** | **4.642** | **+0.292** | B<sub>1u</sub> |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 4.723 | +0.373 | B<sub>1u</sub> |
| | (6,6) | 4.514 | +0.164 | B<sub>1u</sub> |
| | **(8,8)** | **4.506** | **+0.156** | B<sub>1u</sub> |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (4,4)

(a, d)

![pyrazine, BH\&HLYP (4,4), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/bh_44m_23A.svg)**d** 23A · 0.000008\
−0.1216

![pyrazine, BH\&HLYP (4,4), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/bh_44m_21A.svg)**a** 21A · 1.999992\
−0.3334

(b, c)

![pyrazine, BH\&HLYP (4,4), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/bh_44m_22A.svg)**c** 22A · 0.000001\
−0.1692

![pyrazine, BH\&HLYP (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/bh_44m_20A.svg)**b** 20A · 1.999999\
−0.3369

BH\&HLYP, (6,6)

(a, f)

![pyrazine, BH\&HLYP (6,6), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/bh_66_24A.svg)**f** 24A · 0.000000\
−0.0244

![pyrazine, BH\&HLYP (6,6), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/bh_66_16A.svg)**a** 16A · 2.000000\
−0.5169

(b, e)

![pyrazine, BH\&HLYP (6,6), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/bh_66_23A.svg)**e** 23A · 0.000301\
−0.1569

![pyrazine, BH\&HLYP (6,6), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/bh_66_19A.svg)**b** 19A · 1.999699\
−0.4106

(c, d)

![pyrazine, BH\&HLYP (6,6), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/bh_66_22A.svg)**d** 22A · 0.000264\
−0.1631

![pyrazine, BH\&HLYP (6,6), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/bh_66_21A.svg)**c** 21A · 1.999736\
−0.3492

BH\&HLYP, (8,8)

(a, h)

![pyrazine, BH\&HLYP (8,8), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/bh_88_24A.svg)**h** 24A · 0.000000\
−0.0906

![pyrazine, BH\&HLYP (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/bh_88_15A.svg)**a** 15A · 2.000000\
−0.5510

(b, g)

![pyrazine, BH\&HLYP (8,8), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/bh_88_25A.svg)**g** 25A · 0.000000\
−0.0334

![pyrazine, BH\&HLYP (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/bh_88_16A.svg)**b** 16A · 2.000000\
−0.5250

(c, f)

![pyrazine, BH\&HLYP (8,8), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/bh_88_23A.svg)**f** 23A · 0.000296\
−0.1650

![pyrazine, BH\&HLYP (8,8), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/bh_88_19A.svg)**c** 19A · 1.999704\
−0.4137

(d, e)

![pyrazine, BH\&HLYP (8,8), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/bh_88_22A.svg)**e** 22A · 0.000322\
−0.2049

![pyrazine, BH\&HLYP (8,8), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/bh_88_20A.svg)**d** 20A · 1.999678\
−0.3571

M08-SO, (4,4)

(a, d)

![pyrazine, M08-SO (4,4), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/m08_44m_23A.svg)**d** 23A · 0.000009\
−0.1356

![pyrazine, M08-SO (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/m08_44m_20A.svg)**a** 20A · 1.999991\
−0.3456

(b, c)

![pyrazine, M08-SO (4,4), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/m08_44m_22A.svg)**c** 22A · 0.000000\
−0.1867

![pyrazine, M08-SO (4,4), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/m08_44m_21A.svg)**b** 21A · 2.000000\
−0.3419

M08-SO, (6,6)

(a, f)

![pyrazine, M08-SO (6,6), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/m08_66_24A.svg)**f** 24A · 0.000000\
−0.0379

![pyrazine, M08-SO (6,6), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/m08_66_16A.svg)**a** 16A · 2.000000\
−0.5277

(b, e)

![pyrazine, M08-SO (6,6), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/m08_66_23A.svg)**e** 23A · 0.000038\
−0.1743

![pyrazine, M08-SO (6,6), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/m08_66_19A.svg)**b** 19A · 1.999962\
−0.4211

(c, d)

![pyrazine, M08-SO (6,6), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/m08_66_22A.svg)**d** 22A · 0.000033\
−0.1771

![pyrazine, M08-SO (6,6), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/m08_66_20A.svg)**c** 20A · 1.999967\
−0.3610

M08-SO, (8,8)

(a, h)

![pyrazine, M08-SO (8,8), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/m08_88_24A.svg)**h** 24A · 0.000000\
−0.0997

![pyrazine, M08-SO (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/m08_88_15A.svg)**a** 15A · 2.000000\
−0.5486

(b, g)

![pyrazine, M08-SO (8,8), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/m08_88_25A.svg)**g** 25A · 0.000000\
−0.0520

![pyrazine, M08-SO (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/m08_88_16A.svg)**b** 16A · 2.000000\
−0.5381

(c, f)

![pyrazine, M08-SO (8,8), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/m08_88_23A.svg)**f** 23A · 0.000037\
−0.1811

![pyrazine, M08-SO (8,8), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/m08_88_19A.svg)**c** 19A · 1.999963\
−0.4270

(d, e)

![pyrazine, M08-SO (8,8), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/m08_88_22A.svg)**e** 22A · 0.000041\
−0.2204

![pyrazine, M08-SO (8,8), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/m08_88_20A.svg)**d** 20A · 1.999959\
−0.3708

ωB97X, (4,4)

(a, d)

![pyrazine, ωB97X (4,4), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/wb_44m_23A.svg)**d** 23A · 0.000017\
−0.1681

![pyrazine, ωB97X (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/wb_44m_20A.svg)**a** 20A · 1.999983\
−0.3805

(b, c)

![pyrazine, ωB97X (4,4), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/wb_44m_22A.svg)**c** 22A · 0.000000\
−0.2152

![pyrazine, ωB97X (4,4), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/wb_44m_21A.svg)**b** 21A · 2.000000\
−0.3757

ωB97X, (6,6)

(a, f)

![pyrazine, ωB97X (6,6), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/wb_66_24A.svg)**f** 24A · 0.000000\
−0.0493

![pyrazine, ωB97X (6,6), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/wb_66_16A.svg)**a** 16A · 2.000000\
−0.5607

(b, e)

![pyrazine, ωB97X (6,6), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/wb_66_22A.svg)**e** 22A · 0.000091\
−0.2052

![pyrazine, ωB97X (6,6), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/wb_66_18A.svg)**b** 18A · 1.999909\
−0.4502

(c, d)

![pyrazine, ωB97X (6,6), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/wb_66_23A.svg)**d** 23A · 0.000137\
−0.2033

![pyrazine, ωB97X (6,6), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/wb_66_20A.svg)**c** 20A · 1.999863\
−0.3919

ωB97X, (8,8)

(a, h)

![pyrazine, ωB97X (8,8), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/wb_88_24A.svg)**h** 24A · 0.000000\
−0.1069

![pyrazine, ωB97X (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/wb_88_15A.svg)**a** 15A · 2.000000\
−0.5819

(b, g)

![pyrazine, ωB97X (8,8), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/wb_88_25A.svg)**g** 25A · 0.000000\
−0.0699

![pyrazine, ωB97X (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/wb_88_16A.svg)**b** 16A · 2.000000\
−0.5739

(c, f)

![pyrazine, ωB97X (8,8), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/wb_88_23A.svg)**f** 23A · 0.000089\
−0.2132

![pyrazine, ωB97X (8,8), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/wb_88_18A.svg)**c** 18A · 1.999911\
−0.4586

(d, e)

![pyrazine, ωB97X (8,8), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/wb_88_22A.svg)**e** 22A · 0.000160\
−0.2487

![pyrazine, ωB97X (8,8), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrazine/wb_88_20A.svg)**d** 20A · 1.999840\
−0.4048

[← propynal](https://reksstudio.github.io/v2/main/results/quest/quest3-propynal/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-pyrazine) · [pyridazine →](https://reksstudio.github.io/v2/main/results/quest/quest3-pyridazine/index.md)
