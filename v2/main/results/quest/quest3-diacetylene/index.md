# diacetylene — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest3-diacetylene/>

Psi4 bd0fb43ef, 2026-10-15: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# diacetylene

QUEST3: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](https://reksstudio.github.io/v2/main/results/quest/quest3-diacetylene/index.md#s1) · [S2](https://reksstudio.github.io/v2/main/results/quest/quest3-diacetylene/index.md#s2) · [T1](https://reksstudio.github.io/v2/main/results/quest/quest3-diacetylene/index.md#t1) · [T2](https://reksstudio.github.io/v2/main/results/quest/quest3-diacetylene/index.md#t2) · [Orbitals](https://reksstudio.github.io/v2/main/results/quest/quest3-diacetylene/index.md#orbitals)

![diacetylene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_diacetylene.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: Σ<sub>u</sub><sup>−</sup> 5.33 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | (4,4) | 5.032 | −0.298 | A<sub>u</sub><sup>a</sup> |
| | **(6,6)** | **5.063** | **−0.267** | A<sub>u</sub><sup>a</sup> |
| | (8,8) | 4.991 | −0.339 | A<sub>u</sub><sup>a</sup> |
| M08-SO | (2,2) | – | – | – |
| | (4,4) | 5.278 | −0.052 | A<sub>u</sub><sup>a</sup> |
| | **(6,6)** | **5.296** | **−0.034** | A<sub>u</sub><sup>a</sup> |
| | (8,8) | 5.209 | −0.121 | A<sub>u</sub><sup>a</sup> |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 5.217 | −0.113 | A<sub>u</sub><sup>a</sup> |
| | **(6,6)** | **5.272** | **−0.058** | A<sub>u</sub><sup>a</sup> |
| | (8,8) | 5.109 | −0.221 | A<sub>u</sub><sup>a</sup> |

### S2 {#s2}

TBE: Δ<sub>u</sub> 5.61 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | (4,4) | 5.013 | −0.597 | B<sub>1u</sub><sup>a</sup> |
| | **(6,6)** | **5.022** | **−0.588** | B<sub>1u</sub><sup>a</sup> |
| | (8,8) | 4.975 | −0.635 | B<sub>1u</sub><sup>a</sup> |
| M08-SO | (2,2) | – | – | – |
| | (4,4) | 4.638 | −0.972 | B<sub>1u</sub><sup>a</sup> |
| | **(6,6)** | **4.640** | **−0.970** | B<sub>1u</sub><sup>a</sup> |
| | (8,8) | 4.527 | −1.083 | B<sub>1u</sub><sup>a</sup> |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 5.083 | −0.527 | B<sub>1u</sub><sup>a</sup> |
| | **(6,6)** | **5.092** | **−0.518** | B<sub>1u</sub><sup>a</sup> |
| | (8,8) | 4.981 | −0.629 | B<sub>1u</sub><sup>a</sup> |

### T1 {#t1}

TBE: Σ<sub>u</sub><sup>+</sup> 4.10 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | (4,4) | 4.280 | +0.180 | B<sub>1u</sub><sup>a</sup> |
| | (6,6) | 4.315 | +0.215 | B<sub>1u</sub><sup>a</sup> |
| | **(8,8)** | **4.215** | **+0.115** | B<sub>1u</sub><sup>a</sup> |
| M08-SO | (2,2) | – | – | – |
| | (4,4) | 4.567 | +0.467 | B<sub>1u</sub><sup>a</sup> |
| | (6,6) | 4.585 | +0.485 | B<sub>1u</sub><sup>a</sup> |
| | **(8,8)** | **4.440** | **+0.340** | B<sub>1u</sub><sup>a</sup> |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 4.445 | +0.345 | B<sub>1u</sub><sup>a</sup> |
| | (6,6) | 4.502 | +0.402 | B<sub>1u</sub><sup>a</sup> |
| | **(8,8)** | **4.351** | **+0.251** | B<sub>1u</sub><sup>a</sup> |

### T2 {#t2}

TBE: Δ<sub>u</sub> 4.78 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | (4,4) | 4.611 | −0.169 | B<sub>1u</sub><sup>a</sup> |
| | **(6,6)** | **4.630** | **−0.150** | B<sub>1u</sub><sup>a</sup> |
| | (8,8) | 4.553 | −0.227 | B<sub>1u</sub><sup>a</sup> |
| M08-SO | (2,2) | – | – | – |
| | (4,4) | 4.858 | +0.078 | A<sub>u</sub><sup>a</sup> |
| | (6,6) | 4.888 | +0.107 | A<sub>u</sub><sup>a</sup> |
| | **(8,8)** | **4.735** | **−0.045** | B<sub>1u</sub><sup>a</sup> |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **4.774** | **−0.006** | B<sub>1u</sub><sup>a</sup> |
| | (6,6) | 4.823 | +0.043 | B<sub>1u</sub><sup>a</sup> |
| | (8,8) | 4.697 | −0.083 | B<sub>1u</sub><sup>a</sup> |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, linear molecule: slice in a plane through the axis, turned per orbital to its largest lobe; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (4,4)

(a, d)

(b, c)

![diacetylene, BH\&HLYP (4,4), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/bh_44m_15A.svg)**d** 15A · 0.000000\
−0.1538

![diacetylene, BH\&HLYP (4,4), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/bh_44m_14A.svg)**c** 14A · 0.000000\
−0.1538

![diacetylene, BH\&HLYP (4,4), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/bh_44m_12A.svg)**a** 12A · 2.000000\
−0.3382

![diacetylene, BH\&HLYP (4,4), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/bh_44m_13A.svg)**b** 13A · 2.000000\
−0.3382

BH\&HLYP, (6,6)

(a, f)

(b, e)

(c, d)

![diacetylene, BH\&HLYP (6,6), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/bh_66_16A.svg)**f** 16A · 0.000000\
−0.0708

![diacetylene, BH\&HLYP (6,6), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/bh_66_15A.svg)**e** 15A · 0.000356\
−0.1545

![diacetylene, BH\&HLYP (6,6), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/bh_66_14A.svg)**d** 14A · 0.000427\
−0.1872

![diacetylene, BH\&HLYP (6,6), orbital 9A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/bh_66_9A.svg)**a** 9A · 2.000000\
−0.6470

![diacetylene, BH\&HLYP (6,6), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/bh_66_12A.svg)**b** 12A · 1.999644\
−0.3701

![diacetylene, BH\&HLYP (6,6), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/bh_66_13A.svg)**c** 13A · 1.999573\
−0.3672

BH\&HLYP, (8,8)

(a, h)

(b, g)

(c, f)

(d, e)

![diacetylene, BH\&HLYP (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/bh_88_16A.svg)**h** 16A · 0.000000\
−0.0482

![diacetylene, BH\&HLYP (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/bh_88_17A.svg)**g** 17A · 0.000000\
−0.0411

![diacetylene, BH\&HLYP (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/bh_88_15A.svg)**f** 15A · 0.000264\
−0.1535

![diacetylene, BH\&HLYP (8,8), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/bh_88_14A.svg)**e** 14A · 0.000349\
−0.2164

![diacetylene, BH\&HLYP (8,8), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/bh_88_10A.svg)**a** 10A · 2.000000\
−0.4612

![diacetylene, BH\&HLYP (8,8), orbital 11A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/bh_88_11A.svg)**b** 11A · 2.000000\
−0.4570

![diacetylene, BH\&HLYP (8,8), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/bh_88_12A.svg)**c** 12A · 1.999736\
−0.3588

![diacetylene, BH\&HLYP (8,8), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/bh_88_13A.svg)**d** 13A · 1.999651\
−0.3564

M08-SO, (4,4)

(a, d)

(b, c)

![diacetylene, M08-SO (4,4), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/m08_44m_15A.svg)**d** 15A · 0.000000\
−0.1629

![diacetylene, M08-SO (4,4), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/m08_44m_14A.svg)**c** 14A · 0.000000\
−0.1629

![diacetylene, M08-SO (4,4), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/m08_44m_13A.svg)**a** 13A · 2.000000\
−0.3485

![diacetylene, M08-SO (4,4), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/m08_44m_12A.svg)**b** 12A · 2.000000\
−0.3485

M08-SO, (6,6)

(a, f)

(b, e)

(c, d)

![diacetylene, M08-SO (6,6), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/m08_66_16A.svg)**f** 16A · 0.000000\
−0.0779

![diacetylene, M08-SO (6,6), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/m08_66_14A.svg)**e** 14A · 0.000069\
−0.1793

![diacetylene, M08-SO (6,6), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/m08_66_15A.svg)**d** 15A · 0.000078\
−0.1674

![diacetylene, M08-SO (6,6), orbital 9A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/m08_66_9A.svg)**a** 9A · 2.000000\
−0.6335

![diacetylene, M08-SO (6,6), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/m08_66_12A.svg)**b** 12A · 1.999931\
−0.3798

![diacetylene, M08-SO (6,6), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/m08_66_13A.svg)**c** 13A · 1.999922\
−0.3736

M08-SO, (8,8)

(a, h)

(b, g)

(c, f)

(d, e)

![diacetylene, M08-SO (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/m08_88_16A.svg)**h** 16A · 0.000000\
−0.0622

![diacetylene, M08-SO (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/m08_88_17A.svg)**g** 17A · 0.000000\
−0.0562

![diacetylene, M08-SO (8,8), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/m08_88_14A.svg)**f** 14A · 0.000058\
−0.1956

![diacetylene, M08-SO (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/m08_88_15A.svg)**e** 15A · 0.000052\
−0.1649

![diacetylene, M08-SO (8,8), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/m08_88_10A.svg)**a** 10A · 2.000000\
−0.4663

![diacetylene, M08-SO (8,8), orbital 11A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/m08_88_11A.svg)**b** 11A · 2.000000\
−0.4615

![diacetylene, M08-SO (8,8), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/m08_88_12A.svg)**c** 12A · 1.999942\
−0.3666

![diacetylene, M08-SO (8,8), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/m08_88_13A.svg)**d** 13A · 1.999948\
−0.3633

ωB97X, (4,4)

(a, d)

(b, c)

![diacetylene, ωB97X (4,4), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/wb_44m_14A.svg)**d** 14A · 0.000000\
−0.1942

![diacetylene, ωB97X (4,4), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/wb_44m_15A.svg)**c** 15A · 0.000000\
−0.1942

![diacetylene, ωB97X (4,4), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/wb_44m_12A.svg)**a** 12A · 2.000000\
−0.3846

![diacetylene, ωB97X (4,4), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/wb_44m_13A.svg)**b** 13A · 2.000000\
−0.3846

ωB97X, (6,6)

(a, f)

(b, e)

(c, d)

![diacetylene, ωB97X (6,6), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/wb_66_16A.svg)**f** 16A · 0.000000\
−0.0840

![diacetylene, ωB97X (6,6), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/wb_66_14A.svg)**e** 14A · 0.000251\
−0.2099

![diacetylene, ωB97X (6,6), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/wb_66_15A.svg)**d** 15A · 0.000288\
−0.1984

![diacetylene, ωB97X (6,6), orbital 9A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/wb_66_9A.svg)**a** 9A · 2.000000\
−0.6706

![diacetylene, ωB97X (6,6), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/wb_66_12A.svg)**b** 12A · 1.999749\
−0.4169

![diacetylene, ωB97X (6,6), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/wb_66_13A.svg)**c** 13A · 1.999712\
−0.4109

ωB97X, (8,8)

(a, h)

(b, g)

(c, f)

(d, e)

![diacetylene, ωB97X (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/wb_88_16A.svg)**h** 16A · 0.000000\
−0.0725

![diacetylene, ωB97X (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/wb_88_17A.svg)**g** 17A · 0.000000\
−0.0641

![diacetylene, ωB97X (8,8), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/wb_88_14A.svg)**f** 14A · 0.000191\
−0.2228

![diacetylene, ωB97X (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/wb_88_15A.svg)**e** 15A · 0.000196\
−0.1941

![diacetylene, ωB97X (8,8), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/wb_88_10A.svg)**a** 10A · 2.000000\
−0.5021

![diacetylene, ωB97X (8,8), orbital 11A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/wb_88_11A.svg)**b** 11A · 2.000000\
−0.4966

![diacetylene, ωB97X (8,8), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/wb_88_12A.svg)**c** 12A · 1.999809\
−0.3979

![diacetylene, ωB97X (8,8), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_diacetylene/wb_88_13A.svg)**d** 13A · 1.999804\
−0.3960

[← cyclopropenone](https://reksstudio.github.io/v2/main/results/quest/quest3-cyclopropenone/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-diacetylene) · [furan →](https://reksstudio.github.io/v2/main/results/quest/quest3-furan/index.md)
