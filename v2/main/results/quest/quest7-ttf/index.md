# TTF — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest7-ttf/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# TTF

QUEST7: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](https://reksstudio.github.io/v2/main/results/quest/quest7-ttf/index.md#s1) · [S2](https://reksstudio.github.io/v2/main/results/quest/quest7-ttf/index.md#s2) · [T1](https://reksstudio.github.io/v2/main/results/quest/quest7-ttf/index.md#t1) · [T2](https://reksstudio.github.io/v2/main/results/quest/quest7-ttf/index.md#t2) · [Orbitals](https://reksstudio.github.io/v2/main/results/quest/quest7-ttf/index.md#orbitals)

![TTF: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest7_ttf.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: B<sub>3u</sub> 2.800 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **3.103** | **+0.303** | B<sub>3u</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **3.002** | **+0.202** | B<sub>3u</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **3.341** | **+0.541** | B<sub>3u</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

### S2 {#s2}

TBE: B<sub>2u</sub> 3.773 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **3.760** | **−0.013** | B<sub>2u</sub> |
| | (6,6) | 3.787 | +0.014 | B<sub>2u</sub> |
| | (8,8) | 3.864 | +0.091 | B<sub>2u</sub> |
| M08-SO | (2,2) | – | – | – |
| | (4,4) | 3.668 | −0.105 | B<sub>2u</sub> |
| | (6,6) | 3.691 | −0.082 | B<sub>2u</sub> |
| | **(8,8)** | **3.704** | **−0.069** | B<sub>2u</sub> |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **4.068** | **+0.295** | B<sub>2u</sub> |
| | (6,6) | 4.068 | +0.295 | B<sub>2u</sub> |
| | (8,8) | 4.103 | +0.330 | B<sub>2u</sub> |

### T1 {#t1}

TBE: B<sub>3u</sub> 2.652 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **2.960** | **+0.308** | B<sub>3u</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **2.905** | **+0.253** | B<sub>3u</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **3.214** | **+0.562** | B<sub>3u</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

### T2 {#t2}

TBE: B<sub>1u</sub> 2.993 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | (4,4) | – | – | – |
| | **(6,6)** | **3.510** | **+0.517** | B<sub>1u</sub> |
| | (8,8) | 3.638 | +0.645 | B<sub>1u</sub> |
| M08-SO | (2,2) | – | – | – |
| | (4,4) | – | – | – |
| | **(6,6)** | **3.568** | **+0.575** | B<sub>1u</sub> |
| | (8,8) | 3.812 | +0.820 | B<sub>1u</sub> |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | – | – | – |
| | **(6,6)** | **3.601** | **+0.608** | B<sub>1u</sub> |
| | (8,8) | 3.790 | +0.797 | B<sub>1u</sub> |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (4,4)

(a, d)

![TTF, BH\&HLYP (4,4), orbital 54A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/bh_44m_54A.svg)**d** 54A · 0.000000\
−0.0727

![TTF, BH\&HLYP (4,4), orbital 51A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/bh_44m_51A.svg)**a** 51A · 2.000000\
−0.2852

(b, c)

![TTF, BH\&HLYP (4,4), orbital 53A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/bh_44m_53A.svg)**c** 53A · 0.000000\
−0.0997

![TTF, BH\&HLYP (4,4), orbital 52A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/bh_44m_52A.svg)**b** 52A · 2.000000\
−0.2145

BH\&HLYP, (6,6)

(a, f)

![TTF, BH\&HLYP (6,6), orbital 55A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/bh_66_55A.svg)**f** 55A · 0.000000\
−0.0653

![TTF, BH\&HLYP (6,6), orbital 50A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/bh_66_50A.svg)**a** 50A · 2.000000\
−0.3429

(b, e)

![TTF, BH\&HLYP (6,6), orbital 53A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/bh_66_53A.svg)**e** 53A · 0.000000\
−0.0782

![TTF, BH\&HLYP (6,6), orbital 51A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/bh_66_51A.svg)**b** 51A · 2.000000\
−0.2873

(c, d)

![TTF, BH\&HLYP (6,6), orbital 54A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/bh_66_54A.svg)**d** 54A · 0.000041\
−0.0717

![TTF, BH\&HLYP (6,6), orbital 52A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/bh_66_52A.svg)**c** 52A · 1.999959\
−0.2166

BH\&HLYP, (8,8)

(a, h)

![TTF, BH\&HLYP (8,8), orbital 56A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/bh_88_56A.svg)**h** 56A · 0.000000\
−0.0512

![TTF, BH\&HLYP (8,8), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/bh_88_40A.svg)**a** 40A · 2.000000\
−0.4935

(b, g)

![TTF, BH\&HLYP (8,8), orbital 55A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/bh_88_55A.svg)**g** 55A · 0.000000\
−0.0702

![TTF, BH\&HLYP (8,8), orbital 50A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/bh_88_50A.svg)**b** 50A · 2.000000\
−0.3434

(c, f)

![TTF, BH\&HLYP (8,8), orbital 54A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/bh_88_54A.svg)**f** 54A · 0.000000\
−0.0802

![TTF, BH\&HLYP (8,8), orbital 51A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/bh_88_51A.svg)**c** 51A · 2.000000\
−0.2902

(d, e)

![TTF, BH\&HLYP (8,8), orbital 53A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/bh_88_53A.svg)**e** 53A · 0.000051\
−0.0925

![TTF, BH\&HLYP (8,8), orbital 52A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/bh_88_52A.svg)**d** 52A · 1.999949\
−0.2211

M08-SO, (4,4)

(a, d)

![TTF, M08-SO (4,4), orbital 54A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/m08_44m_54A.svg)**d** 54A · 0.000000\
−0.0882

![TTF, M08-SO (4,4), orbital 51A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/m08_44m_51A.svg)**a** 51A · 2.000000\
−0.2985

(b, c)

![TTF, M08-SO (4,4), orbital 53A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/m08_44m_53A.svg)**c** 53A · 0.000000\
−0.1141

![TTF, M08-SO (4,4), orbital 52A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/m08_44m_52A.svg)**b** 52A · 2.000000\
−0.2269

M08-SO, (6,6)

(a, f)

![TTF, M08-SO (6,6), orbital 55A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/m08_66_55A.svg)**f** 55A · 0.000000\
−0.0781

![TTF, M08-SO (6,6), orbital 50A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/m08_66_50A.svg)**a** 50A · 2.000000\
−0.3522

(b, e)

![TTF, M08-SO (6,6), orbital 53A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/m08_66_53A.svg)**e** 53A · 0.000000\
−0.0932

![TTF, M08-SO (6,6), orbital 51A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/m08_66_51A.svg)**b** 51A · 2.000000\
−0.3004

(c, d)

![TTF, M08-SO (6,6), orbital 54A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/m08_66_54A.svg)**d** 54A · 0.000014\
−0.0852

![TTF, M08-SO (6,6), orbital 52A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/m08_66_52A.svg)**c** 52A · 1.999986\
−0.2295

M08-SO, (8,8)

(a, h)

![TTF, M08-SO (8,8), orbital 56A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/m08_88_56A.svg)**h** 56A · 0.000000\
−0.0648

![TTF, M08-SO (8,8), orbital 41A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/m08_88_41A.svg)**a** 41A · 2.000000\
−0.5026

(b, g)

![TTF, M08-SO (8,8), orbital 55A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/m08_88_55A.svg)**g** 55A · 0.000000\
−0.0960

![TTF, M08-SO (8,8), orbital 50A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/m08_88_50A.svg)**b** 50A · 2.000000\
−0.3655

(c, f)

![TTF, M08-SO (8,8), orbital 54A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/m08_88_54A.svg)**f** 54A · 0.000000\
−0.1018

![TTF, M08-SO (8,8), orbital 51A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/m08_88_51A.svg)**c** 51A · 2.000000\
−0.3135

(d, e)

![TTF, M08-SO (8,8), orbital 53A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/m08_88_53A.svg)**e** 53A · 0.000012\
−0.1319

![TTF, M08-SO (8,8), orbital 52A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/m08_88_52A.svg)**d** 52A · 1.999988\
−0.2433

ωB97X, (4,4)

(a, d)

![TTF, ωB97X (4,4), orbital 54A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/wb_44m_54A.svg)**d** 54A · 0.000000\
−0.1006

![TTF, ωB97X (4,4), orbital 51A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/wb_44m_51A.svg)**a** 51A · 2.000000\
−0.3330

(b, c)

![TTF, ωB97X (4,4), orbital 53A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/wb_44m_53A.svg)**c** 53A · 0.000000\
−0.1351

![TTF, ωB97X (4,4), orbital 52A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/wb_44m_52A.svg)**b** 52A · 2.000000\
−0.2583

ωB97X, (6,6)

(a, f)

![TTF, ωB97X (6,6), orbital 55A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/wb_66_55A.svg)**f** 55A · 0.000000\
−0.0962

![TTF, ωB97X (6,6), orbital 50A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/wb_66_50A.svg)**a** 50A · 2.000000\
−0.3901

(b, e)

![TTF, ωB97X (6,6), orbital 54A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/wb_66_54A.svg)**e** 54A · 0.000000\
−0.1100

![TTF, ωB97X (6,6), orbital 51A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/wb_66_51A.svg)**b** 51A · 2.000000\
−0.3356

(c, d)

![TTF, ωB97X (6,6), orbital 53A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/wb_66_53A.svg)**d** 53A · 0.000058\
−0.1126

![TTF, ωB97X (6,6), orbital 52A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/wb_66_52A.svg)**c** 52A · 1.999942\
−0.2616

ωB97X, (8,8)

(a, h)

![TTF, ωB97X (8,8), orbital 64A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/wb_88_64A.svg)**h** 64A · 0.000000\
0.0839

![TTF, ωB97X (8,8), orbital 41A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/wb_88_41A.svg)**a** 41A · 2.000000\
−0.5371

(b, g)

![TTF, ωB97X (8,8), orbital 55A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/wb_88_55A.svg)**g** 55A · 0.000000\
−0.1083

![TTF, ωB97X (8,8), orbital 50A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/wb_88_50A.svg)**b** 50A · 2.000000\
−0.3980

(c, f)

![TTF, ωB97X (8,8), orbital 54A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/wb_88_54A.svg)**f** 54A · 0.000000\
−0.1149

![TTF, ωB97X (8,8), orbital 51A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/wb_88_51A.svg)**c** 51A · 2.000000\
−0.3441

(d, e)

![TTF, ωB97X (8,8), orbital 53A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/wb_88_53A.svg)**e** 53A · 0.000055\
−0.1495

![TTF, ωB97X (8,8), orbital 52A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_ttf/wb_88_52A.svg)**d** 52A · 1.999945\
−0.2718

[← thienothiophene](https://reksstudio.github.io/v2/main/results/quest/quest7-thienothiophene/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-ttf)
