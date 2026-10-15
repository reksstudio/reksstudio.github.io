# cyanoacetylene — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest3-cyanoacetylene/>

Psi4 bd0fb43ef, 2026-10-15: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# cyanoacetylene

QUEST3: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](https://reksstudio.github.io/v2/main/results/quest/quest3-cyanoacetylene/index.md#s1) · [S2](https://reksstudio.github.io/v2/main/results/quest/quest3-cyanoacetylene/index.md#s2) · [T1](https://reksstudio.github.io/v2/main/results/quest/quest3-cyanoacetylene/index.md#t1) · [T2](https://reksstudio.github.io/v2/main/results/quest/quest3-cyanoacetylene/index.md#t2) · [Orbitals](https://reksstudio.github.io/v2/main/results/quest/quest3-cyanoacetylene/index.md#orbitals)

![cyanoacetylene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_cyanoacetylene.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: Σ<sup>−</sup> 5.80 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **5.446** | **−0.354** | A<sub>2</sub><sup>a</sup> |
| | (6,6) | – | – | – |
| | (8,8) | 5.362 | −0.439 | A<sub>2</sub><sup>a</sup> |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **5.703** | **−0.097** | A<sub>2</sub><sup>a</sup> |
| | (6,6) | – | – | – |
| | (8,8) | 5.646 | −0.154 | A<sub>2</sub><sup>a</sup> |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **5.639** | **−0.161** | A<sub>2</sub><sup>a</sup> |
| | (6,6) | – | – | – |
| | (8,8) | 5.538 | −0.262 | A<sub>2</sub><sup>a</sup> |

### S2 {#s2}

TBE: Δ 6.07 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **5.450** | **−0.620** | A<sub>1</sub><sup>a</sup> |
| | (6,6) | – | – | – |
| | (8,8) | 5.422 | −0.648 | A<sub>1</sub><sup>a</sup> |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **5.056** | **−1.014** | A<sub>1</sub><sup>a</sup> |
| | (6,6) | – | – | – |
| | (8,8) | 5.007 | −1.063 | A<sub>1</sub><sup>a</sup> |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **5.356** | **−0.714** | A<sub>1</sub><sup>a</sup> |
| | (6,6) | – | – | – |
| | (8,8) | 5.294 | −0.776 | A<sub>1</sub><sup>a</sup> |

### T1 {#t1}

TBE: Σ<sup>+</sup> 4.44 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | (4,4) | 4.576 | +0.136 | A<sub>1</sub><sup>a</sup> |
| | (6,6) | – | – | – |
| | **(8,8)** | **4.571** | **+0.131** | A<sub>1</sub><sup>a</sup> |
| M08-SO | (2,2) | – | – | – |
| | (4,4) | 4.874 | +0.434 | A<sub>1</sub><sup>a</sup> |
| | (6,6) | – | – | – |
| | **(8,8)** | **4.843** | **+0.403** | A<sub>1</sub><sup>a</sup> |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 4.748 | +0.308 | A<sub>1</sub><sup>a</sup> |
| | (6,6) | – | – | – |
| | **(8,8)** | **4.731** | **+0.291** | A<sub>1</sub><sup>a</sup> |

### T2 {#t2}

TBE: Δ 5.21 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | (4,4) | 4.943 | −0.267 | A<sub>1</sub><sup>a</sup> |
| | (6,6) | – | – | – |
| | **(8,8)** | **4.970** | **−0.240** | A<sub>1</sub><sup>a</sup> |
| M08-SO | (2,2) | – | – | – |
| | (4,4) | 5.240 | +0.030 | A<sub>1</sub><sup>a</sup> |
| | (6,6) | – | – | – |
| | **(8,8)** | **5.181** | **−0.029** | A<sub>1</sub><sup>a</sup> |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 5.123 | −0.087 | A<sub>1</sub><sup>a</sup> |
| | (6,6) | – | – | – |
| | **(8,8)** | **5.124** | **−0.086** | A<sub>1</sub><sup>a</sup> |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, linear molecule: slice in a plane through the axis, turned per orbital to its largest lobe; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (4,4)

(a, d)

(b, c)

![cyanoacetylene, BH\&HLYP (4,4), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/bh_44m_14A.svg)**d** 14A · 0.000000\
−0.1921

![cyanoacetylene, BH\&HLYP (4,4), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/bh_44m_15A.svg)**c** 15A · 0.000000\
−0.1921

![cyanoacetylene, BH\&HLYP (4,4), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/bh_44m_12A.svg)**a** 12A · 2.000000\
−0.3932

![cyanoacetylene, BH\&HLYP (4,4), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/bh_44m_13A.svg)**b** 13A · 2.000000\
−0.3931

BH\&HLYP, (8,8)

(a, h)

(b, g)

(c, f)

(d, e)

![cyanoacetylene, BH\&HLYP (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/bh_88_16A.svg)**h** 16A · 0.000000\
−0.0678

![cyanoacetylene, BH\&HLYP (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/bh_88_17A.svg)**g** 17A · 0.000000\
−0.0611

![cyanoacetylene, BH\&HLYP (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/bh_88_15A.svg)**f** 15A · 0.000207\
−0.1894

![cyanoacetylene, BH\&HLYP (8,8), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/bh_88_14A.svg)**e** 14A · 0.000376\
−0.2580

![cyanoacetylene, BH\&HLYP (8,8), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/bh_88_10A.svg)**a** 10A · 2.000000\
−0.5114

![cyanoacetylene, BH\&HLYP (8,8), orbital 11A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/bh_88_11A.svg)**b** 11A · 2.000000\
−0.5084

![cyanoacetylene, BH\&HLYP (8,8), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/bh_88_12A.svg)**c** 12A · 1.999793\
−0.4208

![cyanoacetylene, BH\&HLYP (8,8), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/bh_88_13A.svg)**d** 13A · 1.999624\
−0.4138

M08-SO, (4,4)

(a, d)

(b, c)

![cyanoacetylene, M08-SO (4,4), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/m08_44m_15A.svg)**d** 15A · 0.000000\
−0.1997

![cyanoacetylene, M08-SO (4,4), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/m08_44m_14A.svg)**c** 14A · 0.000000\
−0.1998

![cyanoacetylene, M08-SO (4,4), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/m08_44m_13A.svg)**a** 13A · 2.000000\
−0.4033

![cyanoacetylene, M08-SO (4,4), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/m08_44m_12A.svg)**b** 12A · 2.000000\
−0.4033

M08-SO, (8,8)

(a, h)

(b, g)

(c, f)

(d, e)

![cyanoacetylene, M08-SO (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/m08_88_16A.svg)**h** 16A · 0.000000\
−0.0812

![cyanoacetylene, M08-SO (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/m08_88_17A.svg)**g** 17A · 0.000000\
−0.0735

![cyanoacetylene, M08-SO (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/m08_88_15A.svg)**f** 15A · 0.000040\
−0.1982

![cyanoacetylene, M08-SO (8,8), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/m08_88_14A.svg)**e** 14A · 0.000076\
−0.2609

![cyanoacetylene, M08-SO (8,8), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/m08_88_10A.svg)**a** 10A · 2.000000\
−0.5188

![cyanoacetylene, M08-SO (8,8), orbital 11A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/m08_88_11A.svg)**b** 11A · 2.000000\
−0.5151

![cyanoacetylene, M08-SO (8,8), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/m08_88_12A.svg)**c** 12A · 1.999960\
−0.4271

![cyanoacetylene, M08-SO (8,8), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/m08_88_13A.svg)**d** 13A · 1.999924\
−0.4211

ωB97X, (4,4)

(a, d)

(b, c)

![cyanoacetylene, ωB97X (4,4), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/wb_44m_14A.svg)**d** 14A · 0.000000\
−0.2328

![cyanoacetylene, ωB97X (4,4), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/wb_44m_15A.svg)**c** 15A · 0.000000\
−0.2328

![cyanoacetylene, ωB97X (4,4), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/wb_44m_12A.svg)**a** 12A · 2.000000\
−0.4386

![cyanoacetylene, ωB97X (4,4), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/wb_44m_13A.svg)**b** 13A · 2.000000\
−0.4386

ωB97X, (8,8)

(a, h)

(b, g)

(c, f)

(d, e)

![cyanoacetylene, ωB97X (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/wb_88_16A.svg)**h** 16A · 0.000000\
−0.0933

![cyanoacetylene, ωB97X (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/wb_88_17A.svg)**g** 17A · 0.000000\
−0.0859

![cyanoacetylene, ωB97X (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/wb_88_15A.svg)**f** 15A · 0.000112\
−0.2309

![cyanoacetylene, ωB97X (8,8), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/wb_88_14A.svg)**e** 14A · 0.000168\
−0.2881

![cyanoacetylene, ωB97X (8,8), orbital 9A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/wb_88_9A.svg)**a** 9A · 2.000000\
−0.5529

![cyanoacetylene, ωB97X (8,8), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/wb_88_10A.svg)**b** 10A · 2.000000\
−0.5502

![cyanoacetylene, ωB97X (8,8), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/wb_88_12A.svg)**c** 12A · 1.999888\
−0.4577

![cyanoacetylene, ωB97X (8,8), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoacetylene/wb_88_13A.svg)**d** 13A · 1.999832\
−0.4526

[← butadiene](https://reksstudio.github.io/v2/main/results/quest/quest3-butadiene/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-cyanoacetylene) · [cyanoformaldehyde →](https://reksstudio.github.io/v2/main/results/quest/quest3-cyanoformaldehyde/index.md)
