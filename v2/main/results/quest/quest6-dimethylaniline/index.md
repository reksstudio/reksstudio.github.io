# dimethylaniline — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest6-dimethylaniline/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# dimethylaniline

QUEST6: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](https://reksstudio.github.io/v2/main/results/quest/quest6-dimethylaniline/index.md#s1) · [S2](https://reksstudio.github.io/v2/main/results/quest/quest6-dimethylaniline/index.md#s2) · [Orbitals](https://reksstudio.github.io/v2/main/results/quest/quest6-dimethylaniline/index.md#orbitals)

![dimethylaniline: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest6_dimethylaniline.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: B<sub>2</sub> 4.39 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 4.936 | +0.546 | B<sub>2</sub> |
| | (4,4) | 5.061 | +0.671 | B<sub>2</sub> |
| | **(6,6)** | **4.711** | **+0.321** | B<sub>2</sub> |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | 4.786 | +0.396 | B<sub>2</sub> |
| | (4,4) | 4.900 | +0.510 | B<sub>2</sub> |
| | **(6,6)** | **4.599** | **+0.209** | B<sub>2</sub> |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | 4.973 | +0.583 | B<sub>2</sub> |
| | (4,4) | 5.116 | +0.726 | B<sub>2</sub> |
| | **(6,6)** | **4.763** | **+0.372** | B<sub>2</sub> |
| | (8,8) | – | – | – |

### S2 {#s2}

TBE: A<sub>1</sub> 5.40 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | (4,4) | 5.542 | +0.142 | A<sub>1</sub> |
| | **(6,6)** | **5.387** | **−0.013** | A<sub>1</sub> |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **5.356** | **−0.043** | A<sub>1</sub> |
| | (6,6) | 5.165 | −0.235 | A<sub>1</sub> |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 5.584 | +0.184 | A<sub>1</sub> |
| | **(6,6)** | **5.452** | **+0.052** | A<sub>1</sub> |
| | (8,8) | – | – | – |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (2,2)

(a, b)

![dimethylaniline, BH\&HLYP (2,2), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/bh_22_34A.svg)**b** 34A · 0.000002\
−0.0609

![dimethylaniline, BH\&HLYP (2,2), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/bh_22_33A.svg)**a** 33A · 1.999998\
−0.2411

BH\&HLYP, (4,4)

(a, d)

![dimethylaniline, BH\&HLYP (4,4), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/bh_44_34A.svg)**d** 34A · 0.000090\
−0.0675

![dimethylaniline, BH\&HLYP (4,4), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/bh_44_32A.svg)**a** 32A · 1.999910\
−0.2877

(b, c)

![dimethylaniline, BH\&HLYP (4,4), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/bh_44_35A.svg)**c** 35A · 0.000023\
−0.0540

![dimethylaniline, BH\&HLYP (4,4), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/bh_44_33A.svg)**b** 33A · 1.999977\
−0.2410

BH\&HLYP, (6,6)

(a, f)

![dimethylaniline, BH\&HLYP (6,6), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/bh_66_35A.svg)**f** 35A · 0.000000\
−0.0581

![dimethylaniline, BH\&HLYP (6,6), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/bh_66_31A.svg)**a** 31A · 2.000000\
−0.3503

(b, e)

![dimethylaniline, BH\&HLYP (6,6), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/bh_66_34A.svg)**e** 34A · 0.000086\
−0.0692

![dimethylaniline, BH\&HLYP (6,6), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/bh_66_32A.svg)**b** 32A · 1.999914\
−0.2846

(c, d)

![dimethylaniline, BH\&HLYP (6,6), orbital 46A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/bh_66_46A.svg)**d** 46A · 0.000000\
0.0683

![dimethylaniline, BH\&HLYP (6,6), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/bh_66_33A.svg)**c** 33A · 2.000000\
−0.2411

M08-SO, (2,2)

(a, b)

![dimethylaniline, M08-SO (2,2), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/m08_22_34A.svg)**b** 34A · 0.000001\
−0.0773

![dimethylaniline, M08-SO (2,2), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/m08_22_33A.svg)**a** 33A · 1.999999\
−0.2556

M08-SO, (4,4)

(a, d)

![dimethylaniline, M08-SO (4,4), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/m08_44m_34A.svg)**d** 34A · 0.000018\
−0.1042

![dimethylaniline, M08-SO (4,4), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/m08_44m_32A.svg)**a** 32A · 1.999982\
−0.3094

(b, c)

![dimethylaniline, M08-SO (4,4), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/m08_44m_35A.svg)**c** 35A · 0.000008\
−0.0731

![dimethylaniline, M08-SO (4,4), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/m08_44m_33A.svg)**b** 33A · 1.999992\
−0.2580

M08-SO, (6,6)

(a, f)

![dimethylaniline, M08-SO (6,6), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/m08_66_35A.svg)**f** 35A · 0.000000\
−0.0792

![dimethylaniline, M08-SO (6,6), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/m08_66_31A.svg)**a** 31A · 2.000000\
−0.3650

(b, e)

![dimethylaniline, M08-SO (6,6), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/m08_66_34A.svg)**e** 34A · 0.000012\
−0.0909

![dimethylaniline, M08-SO (6,6), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/m08_66_32A.svg)**b** 32A · 1.999988\
−0.3028

(c, d)

![dimethylaniline, M08-SO (6,6), orbital 48A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/m08_66_48A.svg)**d** 48A · 0.000000\
0.0406

![dimethylaniline, M08-SO (6,6), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/m08_66_33A.svg)**c** 33A · 2.000000\
−0.2567

ωB97X, (2,2)

(a, b)

![dimethylaniline, ωB97X (2,2), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/wb_22_34A.svg)**b** 34A · 0.000002\
−0.1056

![dimethylaniline, ωB97X (2,2), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/wb_22_33A.svg)**a** 33A · 1.999998\
−0.2868

ωB97X, (4,4)

(a, d)

![dimethylaniline, ωB97X (4,4), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/wb_44_34A.svg)**d** 34A · 0.000060\
−0.1142

![dimethylaniline, ωB97X (4,4), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/wb_44_32A.svg)**a** 32A · 1.999940\
−0.3381

(b, c)

![dimethylaniline, ωB97X (4,4), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/wb_44_35A.svg)**c** 35A · 0.000021\
−0.0970

![dimethylaniline, ωB97X (4,4), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/wb_44_33A.svg)**b** 33A · 1.999979\
−0.2869

ωB97X, (6,6)

(a, f)

![dimethylaniline, ωB97X (6,6), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/wb_66_35A.svg)**f** 35A · 0.000000\
−0.1045

![dimethylaniline, ωB97X (6,6), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/wb_66_31A.svg)**a** 31A · 2.000000\
−0.3970

(b, e)

![dimethylaniline, ωB97X (6,6), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/wb_66_34A.svg)**e** 34A · 0.000056\
−0.1164

![dimethylaniline, ωB97X (6,6), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/wb_66_32A.svg)**b** 32A · 1.999944\
−0.3352

(c, d)

![dimethylaniline, ωB97X (6,6), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/wb_66_36A.svg)**d** 36A · 0.000000\
0.0264

![dimethylaniline, ωB97X (6,6), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dimethylaniline/wb_66_33A.svg)**c** 33A · 2.000000\
−0.2857

[← benzothiadiazole](https://reksstudio.github.io/v2/main/results/quest/quest6-benzothiadiazole/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-dimethylaniline) · [dipeptide →](https://reksstudio.github.io/v2/main/results/quest/quest6-dipeptide/index.md)
