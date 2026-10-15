# naphthalene — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest5-naphthalene/>

Psi4 bd0fb43ef, 2026-10-15: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# naphthalene

QUEST5: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](https://reksstudio.github.io/v2/main/results/quest/quest5-naphthalene/index.md#s1) · [S2](https://reksstudio.github.io/v2/main/results/quest/quest5-naphthalene/index.md#s2) · [T1](https://reksstudio.github.io/v2/main/results/quest/quest5-naphthalene/index.md#t1) · [T2](https://reksstudio.github.io/v2/main/results/quest/quest5-naphthalene/index.md#t2) · [Orbitals](https://reksstudio.github.io/v2/main/results/quest/quest5-naphthalene/index.md#orbitals)

![naphthalene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest5_naphthalene.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: B<sub>3u</sub> 4.27 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | (4,4) | 4.916 | +0.646 | B<sub>3u</sub> |
| | (6,6) | 4.959 | +0.689 | B<sub>3u</sub> |
| | **(8,8)** | **4.754** | **+0.484** | B<sub>3u</sub> |
| M08-SO | (2,2) | – | – | – |
| | (4,4) | 4.889 | +0.619 | B<sub>3u</sub> |
| | (6,6) | 4.922 | +0.652 | B<sub>3u</sub> |
| | **(8,8)** | **4.758** | **+0.488** | B<sub>3u</sub> |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 5.275 | +1.005 | B<sub>3u</sub> |
| | (6,6) | 5.304 | +1.034 | B<sub>3u</sub> |
| | **(8,8)** | **5.084** | **+0.814** | B<sub>3u</sub> |

### S2 {#s2}

TBE: B<sub>2u</sub> 4.90 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | **(2,2)** | **4.886** | **−0.014** | B<sub>2u</sub> |
| | (4,4) | 4.771 | −0.129 | B<sub>2u</sub> |
| | (6,6) | 4.799 | −0.101 | B<sub>2u</sub> |
| | (8,8) | 4.822 | −0.078 | B<sub>2u</sub> |
| M08-SO | **(2,2)** | **4.642** | **−0.258** | B<sub>2u</sub> |
| | (4,4) | 4.506 | −0.394 | B<sub>2u</sub> |
| | (6,6) | 4.525 | −0.375 | B<sub>2u</sub> |
| | (8,8) | 4.534 | −0.366 | B<sub>2u</sub> |
| ωB97X | (2,2) | 5.032 | +0.132 | B<sub>2u</sub> |
| | **(4,4)** | **4.900** | **+0.000** | B<sub>2u</sub> |
| | (6,6) | 4.866 | −0.034 | B<sub>2u</sub> |
| | (8,8) | 4.883 | −0.017 | B<sub>2u</sub> |

### T1 {#t1}

TBE: B<sub>2u</sub> 3.17 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 3.486 | +0.316 | B<sub>2u</sub> |
| | (4,4) | 3.594 | +0.424 | B<sub>2u</sub> |
| | (6,6) | 3.411 | +0.241 | B<sub>2u</sub> |
| | **(8,8)** | **3.321** | **+0.151** | B<sub>2u</sub> |
| M08-SO | (2,2) | 3.585 | +0.415 | B<sub>2u</sub> |
| | (4,4) | 3.707 | +0.537 | B<sub>2u</sub> |
| | (6,6) | 3.502 | +0.333 | B<sub>2u</sub> |
| | **(8,8)** | **3.389** | **+0.220** | B<sub>2u</sub> |
| ωB97X | (2,2) | 3.631 | +0.461 | B<sub>2u</sub> |
| | (4,4) | 3.758 | +0.588 | B<sub>2u</sub> |
| | (6,6) | 3.504 | +0.334 | B<sub>2u</sub> |
| | **(8,8)** | **3.404** | **+0.234** | B<sub>2u</sub> |

### T2 {#t2}

TBE: B<sub>3u</sub> 4.16 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | (4,4) | 4.583 | +0.423 | B<sub>3u</sub> |
| | (6,6) | 4.715 | +0.555 | B<sub>3u</sub> |
| | **(8,8)** | **4.471** | **+0.311** | B<sub>3u</sub> |
| M08-SO | (2,2) | – | – | – |
| | (4,4) | 4.649 | +0.489 | B<sub>3u</sub> |
| | (6,6) | 4.756 | +0.596 | B<sub>3u</sub> |
| | **(8,8)** | **4.525** | **+0.365** | B<sub>3u</sub> |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 4.733 | +0.573 | B<sub>3u</sub> |
| | (6,6) | 4.894 | +0.734 | B<sub>3u</sub> |
| | **(8,8)** | **4.620** | **+0.460** | B<sub>3u</sub> |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (2,2)

(a, b)

![naphthalene, BH\&HLYP (2,2), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/bh_22_35A.svg)**b** 35A · 0.000069\
−0.1033

![naphthalene, BH\&HLYP (2,2), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/bh_22_34A.svg)**a** 34A · 1.999931\
−0.2591

BH\&HLYP, (4,4)

(a, d)

(b, c)

![naphthalene, BH\&HLYP (4,4), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/bh_44m_36A.svg)**d** 36A · 0.000021\
−0.0858

![naphthalene, BH\&HLYP (4,4), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/bh_44m_35A.svg)**c** 35A · 0.000046\
−0.1096

![naphthalene, BH\&HLYP (4,4), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/bh_44m_33A.svg)**a** 33A · 1.999979\
−0.2931

![naphthalene, BH\&HLYP (4,4), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/bh_44m_34A.svg)**b** 34A · 1.999954\
−0.2642

BH\&HLYP, (6,6)

(a, f)

(b, e)

(c, d)

![naphthalene, BH\&HLYP (6,6), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/bh_66_37A.svg)**f** 37A · 0.000000\
−0.0631

![naphthalene, BH\&HLYP (6,6), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/bh_66_36A.svg)**e** 36A · 0.000022\
−0.0808

![naphthalene, BH\&HLYP (6,6), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/bh_66_35A.svg)**d** 35A · 0.000072\
−0.1075

![naphthalene, BH\&HLYP (6,6), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/bh_66_32A.svg)**a** 32A · 2.000000\
−0.3410

![naphthalene, BH\&HLYP (6,6), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/bh_66_33A.svg)**b** 33A · 1.999978\
−0.2953

![naphthalene, BH\&HLYP (6,6), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/bh_66_34A.svg)**c** 34A · 1.999928\
−0.2631

BH\&HLYP, (8,8)

(a, h)

(b, g)

(c, f)

(d, e)

![naphthalene, BH\&HLYP (8,8), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/bh_88_39A.svg)**h** 39A · 0.000000\
0.0054

![naphthalene, BH\&HLYP (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/bh_88_37A.svg)**g** 37A · 0.000000\
−0.0708

![naphthalene, BH\&HLYP (8,8), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/bh_88_36A.svg)**f** 36A · 0.000020\
−0.0972

![naphthalene, BH\&HLYP (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/bh_88_35A.svg)**e** 35A · 0.000072\
−0.1104

![naphthalene, BH\&HLYP (8,8), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/bh_88_31A.svg)**a** 31A · 2.000000\
−0.3918

![naphthalene, BH\&HLYP (8,8), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/bh_88_32A.svg)**b** 32A · 2.000000\
−0.3429

![naphthalene, BH\&HLYP (8,8), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/bh_88_33A.svg)**c** 33A · 1.999980\
−0.2962

![naphthalene, BH\&HLYP (8,8), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/bh_88_34A.svg)**d** 34A · 1.999928\
−0.2641

M08-SO, (2,2)

(a, b)

![naphthalene, M08-SO (2,2), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/m08_22_35A.svg)**b** 35A · 0.000011\
−0.1233

![naphthalene, M08-SO (2,2), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/m08_22_34A.svg)**a** 34A · 1.999989\
−0.2759

M08-SO, (4,4)

(a, d)

(b, c)

![naphthalene, M08-SO (4,4), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/m08_44m_36A.svg)**d** 36A · 0.000003\
−0.1067

![naphthalene, M08-SO (4,4), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/m08_44m_35A.svg)**c** 35A · 0.000007\
−0.1292

![naphthalene, M08-SO (4,4), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/m08_44m_33A.svg)**a** 33A · 1.999997\
−0.3103

![naphthalene, M08-SO (4,4), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/m08_44m_34A.svg)**b** 34A · 1.999993\
−0.2813

M08-SO, (6,6)

(a, f)

(b, e)

(c, d)

![naphthalene, M08-SO (6,6), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/m08_66_37A.svg)**f** 37A · 0.000000\
−0.0829

![naphthalene, M08-SO (6,6), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/m08_66_36A.svg)**e** 36A · 0.000003\
−0.0998

![naphthalene, M08-SO (6,6), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/m08_66_35A.svg)**d** 35A · 0.000011\
−0.1275

![naphthalene, M08-SO (6,6), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/m08_66_32A.svg)**a** 32A · 2.000000\
−0.3570

![naphthalene, M08-SO (6,6), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/m08_66_33A.svg)**b** 33A · 1.999997\
−0.3118

![naphthalene, M08-SO (6,6), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/m08_66_34A.svg)**c** 34A · 1.999989\
−0.2798

M08-SO, (8,8)

(a, h)

(b, g)

(c, f)

(d, e)

![naphthalene, M08-SO (8,8), orbital 41A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/m08_88_41A.svg)**h** 41A · 0.000000\
−0.0149

![naphthalene, M08-SO (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/m08_88_37A.svg)**g** 37A · 0.000000\
−0.0904

![naphthalene, M08-SO (8,8), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/m08_88_36A.svg)**f** 36A · 0.000002\
−0.1155

![naphthalene, M08-SO (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/m08_88_35A.svg)**e** 35A · 0.000011\
−0.1307

![naphthalene, M08-SO (8,8), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/m08_88_30A.svg)**a** 30A · 2.000000\
−0.4072

![naphthalene, M08-SO (8,8), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/m08_88_32A.svg)**b** 32A · 2.000000\
−0.3586

![naphthalene, M08-SO (8,8), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/m08_88_33A.svg)**c** 33A · 1.999998\
−0.3125

![naphthalene, M08-SO (8,8), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/m08_88_34A.svg)**d** 34A · 1.999989\
−0.2807

ωB97X, (2,2)

(a, b)

![naphthalene, ωB97X (2,2), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/wb_22_35A.svg)**b** 35A · 0.000056\
−0.1461

![naphthalene, ωB97X (2,2), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/wb_22_34A.svg)**a** 34A · 1.999944\
−0.3071

ωB97X, (4,4)

(a, d)

(b, c)

![naphthalene, ωB97X (4,4), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/wb_44m_36A.svg)**d** 36A · 0.000015\
−0.1305

![naphthalene, ωB97X (4,4), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/wb_44m_35A.svg)**c** 35A · 0.000030\
−0.1513

![naphthalene, ωB97X (4,4), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/wb_44m_33A.svg)**a** 33A · 1.999985\
−0.3432

![naphthalene, ωB97X (4,4), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/wb_44m_34A.svg)**b** 34A · 1.999970\
−0.3137

ωB97X, (6,6)

(a, f)

(b, e)

(c, d)

![naphthalene, ωB97X (6,6), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/wb_66_37A.svg)**f** 37A · 0.000000\
−0.1007

![naphthalene, ωB97X (6,6), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/wb_66_36A.svg)**e** 36A · 0.000015\
−0.1202

![naphthalene, ωB97X (6,6), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/wb_66_35A.svg)**d** 35A · 0.000056\
−0.1501

![naphthalene, ωB97X (6,6), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/wb_66_32A.svg)**a** 32A · 2.000000\
−0.3920

![naphthalene, ωB97X (6,6), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/wb_66_33A.svg)**b** 33A · 1.999985\
−0.3440

![naphthalene, ωB97X (6,6), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/wb_66_34A.svg)**c** 34A · 1.999944\
−0.3101

ωB97X, (8,8)

(a, h)

(b, g)

(c, f)

(d, e)

![naphthalene, ωB97X (8,8), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/wb_88_38A.svg)**h** 38A · 0.000000\
−0.0233

![naphthalene, ωB97X (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/wb_88_37A.svg)**g** 37A · 0.000000\
−0.1067

![naphthalene, ωB97X (8,8), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/wb_88_36A.svg)**f** 36A · 0.000012\
−0.1368

![naphthalene, ωB97X (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/wb_88_35A.svg)**e** 35A · 0.000055\
−0.1527

![naphthalene, ωB97X (8,8), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/wb_88_30A.svg)**a** 30A · 2.000000\
−0.4429

![naphthalene, ωB97X (8,8), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/wb_88_32A.svg)**b** 32A · 2.000000\
−0.3926

![naphthalene, ωB97X (8,8), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/wb_88_33A.svg)**c** 33A · 1.999988\
−0.3424

![naphthalene, ωB97X (8,8), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_naphthalene/wb_88_34A.svg)**d** 34A · 1.999945\
−0.3099

[← maleimide](https://reksstudio.github.io/v2/main/results/quest/quest5-maleimide/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-naphthalene) · [nitroxyl →](https://reksstudio.github.io/v2/main/results/quest/quest5-nitroxyl/index.md)
