# pyrrolopyrrole — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest7-pyrrolopyrrole/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# pyrrolopyrrole

QUEST7: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[T1](#t1) · [Orbitals](#orbitals)

![pyrrolopyrrole: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest7_pyrrolopyrrole.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### T1 {#t1}

TBE: B<sub>u</sub> 3.841 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 3.953 | +0.112 | B<sub>u</sub> |
| | **(4,4)** | **3.865** | **+0.024** | B<sub>u</sub> |
| | (6,6) | 3.869 | +0.028 | B<sub>u</sub> |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | 4.116 | +0.275 | B<sub>u</sub> |
| | (4,4) | 4.043 | +0.202 | B<sub>u</sub> |
| | **(6,6)** | **3.997** | **+0.156** | B<sub>u</sub> |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | 4.181 | +0.340 | B<sub>u</sub> |
| | (4,4) | 4.108 | +0.267 | B<sub>u</sub> |
| | **(6,6)** | **4.081** | **+0.240** | B<sub>u</sub> |
| | (8,8) | – | – | – |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (2,2)

(a, b)

![pyrrolopyrrole, BH\&HLYP (2,2), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/bh_22_29A.svg)**b** 29A · 0.000039\
−0.0493

![pyrrolopyrrole, BH\&HLYP (2,2), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/bh_22_28A.svg)**a** 28A · 1.999961\
−0.2300

BH\&HLYP, (4,4)

(a, d)

![pyrrolopyrrole, BH\&HLYP (4,4), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/bh_44m_30A.svg)**d** 30A · 0.000000\
−0.0750

![pyrrolopyrrole, BH\&HLYP (4,4), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/bh_44m_28A.svg)**a** 28A · 2.000000\
−0.2652

(b, c)

![pyrrolopyrrole, BH\&HLYP (4,4), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/bh_44m_29A.svg)**c** 29A · 0.000010\
−0.0895

![pyrrolopyrrole, BH\&HLYP (4,4), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/bh_44m_27A.svg)**b** 27A · 1.999990\
−0.2850

BH\&HLYP, (6,6)

(a, f)

![pyrrolopyrrole, BH\&HLYP (6,6), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/bh_66_30A.svg)**f** 30A · 0.000000\
−0.0435

![pyrrolopyrrole, BH\&HLYP (6,6), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/bh_66_26A.svg)**a** 26A · 2.000000\
−0.3419

(b, e)

![pyrrolopyrrole, BH\&HLYP (6,6), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/bh_66_31A.svg)**e** 31A · 0.000000\
−0.0142

![pyrrolopyrrole, BH\&HLYP (6,6), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/bh_66_27A.svg)**b** 27A · 2.000000\
−0.2836

(c, d)

![pyrrolopyrrole, BH\&HLYP (6,6), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/bh_66_29A.svg)**d** 29A · 0.000067\
−0.0619

![pyrrolopyrrole, BH\&HLYP (6,6), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/bh_66_28A.svg)**c** 28A · 1.999933\
−0.2479

M08-SO, (2,2)

(a, b)

![pyrrolopyrrole, M08-SO (2,2), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/m08_22_29A.svg)**b** 29A · 0.000010\
−0.0662

![pyrrolopyrrole, M08-SO (2,2), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/m08_22_28A.svg)**a** 28A · 1.999990\
−0.2458

M08-SO, (4,4)

(a, d)

![pyrrolopyrrole, M08-SO (4,4), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/m08_44m_30A.svg)**d** 30A · 0.000000\
−0.0847

![pyrrolopyrrole, M08-SO (4,4), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/m08_44m_28A.svg)**a** 28A · 2.000000\
−0.2792

(b, c)

![pyrrolopyrrole, M08-SO (4,4), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/m08_44m_29A.svg)**c** 29A · 0.000004\
−0.1059

![pyrrolopyrrole, M08-SO (4,4), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/m08_44m_27A.svg)**b** 27A · 1.999996\
−0.3005

M08-SO, (6,6)

(a, f)

![pyrrolopyrrole, M08-SO (6,6), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/m08_66_30A.svg)**f** 30A · 0.000000\
−0.0603

![pyrrolopyrrole, M08-SO (6,6), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/m08_66_26A.svg)**a** 26A · 2.000000\
−0.3536

(b, e)

![pyrrolopyrrole, M08-SO (6,6), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/m08_66_33A.svg)**e** 33A · 0.000000\
−0.0277

![pyrrolopyrrole, M08-SO (6,6), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/m08_66_27A.svg)**b** 27A · 2.000000\
−0.2950

(c, d)

![pyrrolopyrrole, M08-SO (6,6), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/m08_66_29A.svg)**d** 29A · 0.000014\
−0.0792

![pyrrolopyrrole, M08-SO (6,6), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/m08_66_28A.svg)**c** 28A · 1.999986\
−0.2632

ωB97X, (2,2)

(a, b)

![pyrrolopyrrole, ωB97X (2,2), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/wb_22_29A.svg)**b** 29A · 0.000036\
−0.0858

![pyrrolopyrrole, ωB97X (2,2), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/wb_22_28A.svg)**a** 28A · 1.999964\
−0.2784

ωB97X, (4,4)

(a, d)

![pyrrolopyrrole, ωB97X (4,4), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/wb_44m_30A.svg)**d** 30A · 0.000000\
−0.0887

![pyrrolopyrrole, ωB97X (4,4), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/wb_44m_28A.svg)**a** 28A · 2.000000\
−0.3114

(b, c)

![pyrrolopyrrole, ωB97X (4,4), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/wb_44m_29A.svg)**c** 29A · 0.000008\
−0.1309

![pyrrolopyrrole, ωB97X (4,4), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/wb_44m_27A.svg)**b** 27A · 1.999992\
−0.3355

ωB97X, (6,6)

(a, f)

![pyrrolopyrrole, ωB97X (6,6), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/wb_66_30A.svg)**f** 30A · 0.000000\
−0.0729

![pyrrolopyrrole, ωB97X (6,6), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/wb_66_26A.svg)**a** 26A · 2.000000\
−0.3833

(b, e)

![pyrrolopyrrole, ωB97X (6,6), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/wb_66_31A.svg)**e** 31A · 0.000000\
−0.0369

![pyrrolopyrrole, ωB97X (6,6), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/wb_66_27A.svg)**b** 27A · 2.000000\
−0.3220

(c, d)

![pyrrolopyrrole, ωB97X (6,6), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/wb_66_29A.svg)**d** 29A · 0.000041\
−0.0978

![pyrrolopyrrole, ωB97X (6,6), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_pyrrolopyrrole/wb_66_28A.svg)**c** 28A · 1.999959\
−0.2900

[← furofuran](https://reksstudio.github.io/v2/main/results/quest/quest7-furofuran/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-pyrrolopyrrole) · [thienothiophene →](https://reksstudio.github.io/v2/main/results/quest/quest7-thienothiophene/index.md)
