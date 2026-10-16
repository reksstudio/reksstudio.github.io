# furofuran — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest7-furofuran/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# furofuran

QUEST7: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S2](https://reksstudio.github.io/v2/main/results/quest/quest7-furofuran/index.md#s2) · [T1](https://reksstudio.github.io/v2/main/results/quest/quest7-furofuran/index.md#t1) · [T2](https://reksstudio.github.io/v2/main/results/quest/quest7-furofuran/index.md#t2) · [Orbitals](https://reksstudio.github.io/v2/main/results/quest/quest7-furofuran/index.md#orbitals)

![furofuran: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest7_furofuran.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S2 {#s2}

TBE: B<sub>u</sub> 5.489 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 5.319 | −0.170 | B<sub>u</sub> |
| | (4,4) | 5.421 | −0.068 | B<sub>u</sub> |
| | **(6,6)** | **5.553** | **+0.064** | B<sub>u</sub> |
| | (8,8) | 5.579 | +0.090 | B<sub>u</sub> |
| M08-SO | (2,2) | 5.152 | −0.337 | B<sub>u</sub> |
| | (4,4) | 5.265 | −0.224 | B<sub>u</sub> |
| | **(6,6)** | **5.319** | **−0.170** | B<sub>u</sub> |
| | (8,8) | 5.318 | −0.171 | B<sub>u</sub> |
| ωB97X | **(2,2)** | **5.505** | **+0.015** | B<sub>u</sub> |
| | (4,4) | 5.558 | +0.069 | B<sub>u</sub> |
| | (6,6) | 5.706 | +0.217 | B<sub>u</sub> |
| | (8,8) | 5.696 | +0.207 | B<sub>u</sub> |

### T1 {#t1}

TBE: B<sub>u</sub> 3.578 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 3.647 | +0.069 | B<sub>u</sub> |
| | (4,4) | 3.720 | +0.142 | B<sub>u</sub> |
| | (6,6) | 3.524 | −0.054 | B<sub>u</sub> |
| | **(8,8)** | **3.526** | **−0.051** | B<sub>u</sub> |
| M08-SO | (2,2) | 3.843 | +0.265 | B<sub>u</sub> |
| | (4,4) | 3.935 | +0.357 | B<sub>u</sub> |
| | (6,6) | 3.684 | +0.106 | B<sub>u</sub> |
| | **(8,8)** | **3.666** | **+0.088** | B<sub>u</sub> |
| ωB97X | (2,2) | 3.895 | +0.317 | B<sub>u</sub> |
| | (4,4) | 4.012 | +0.434 | B<sub>u</sub> |
| | (6,6) | 3.784 | +0.206 | B<sub>u</sub> |
| | **(8,8)** | **3.768** | **+0.190** | B<sub>u</sub> |

### T2 {#t2}

TBE: A<sub>g</sub> 4.869 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | (4,4) | 5.447 | +0.578 | A<sub>g</sub> |
| | **(6,6)** | **4.742** | **−0.127** | A<sub>g</sub> |
| | (8,8) | 4.737 | −0.132 | A<sub>g</sub> |
| M08-SO | (2,2) | – | – | – |
| | (4,4) | 5.588 | +0.719 | A<sub>g</sub> |
| | **(6,6)** | **4.835** | **−0.034** | A<sub>g</sub> |
| | (8,8) | 4.816 | −0.053 | A<sub>g</sub> |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 5.788 | +0.919 | A<sub>g</sub> |
| | (6,6) | 5.034 | +0.165 | A<sub>g</sub> |
| | **(8,8)** | **5.015** | **+0.146** | A<sub>g</sub> |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (2,2)

(a, b)

![furofuran, BH\&HLYP (2,2), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/bh_22_29A.svg)**b** 29A · 0.000106\
−0.0881

![furofuran, BH\&HLYP (2,2), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/bh_22_28A.svg)**a** 28A · 1.999894\
−0.2599

BH\&HLYP, (4,4)

(a, d)

![furofuran, BH\&HLYP (4,4), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/bh_44_30A.svg)**d** 30A · 0.000000\
−0.0474

![furofuran, BH\&HLYP (4,4), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/bh_44_27A.svg)**a** 27A · 2.000000\
−0.3390

(b, c)

![furofuran, BH\&HLYP (4,4), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/bh_44_29A.svg)**c** 29A · 0.000079\
−0.0952

![furofuran, BH\&HLYP (4,4), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/bh_44_28A.svg)**b** 28A · 1.999921\
−0.2665

BH\&HLYP, (6,6)

(a, f)

![furofuran, BH\&HLYP (6,6), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/bh_66_30A.svg)**f** 30A · 0.000000\
−0.0644

![furofuran, BH\&HLYP (6,6), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/bh_66_26A.svg)**a** 26A · 2.000000\
−0.3695

(b, e)

![furofuran, BH\&HLYP (6,6), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/bh_66_31A.svg)**e** 31A · 0.000000\
−0.0203

![furofuran, BH\&HLYP (6,6), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/bh_66_27A.svg)**b** 27A · 2.000000\
−0.3446

(c, d)

![furofuran, BH\&HLYP (6,6), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/bh_66_29A.svg)**d** 29A · 0.000124\
−0.0981

![furofuran, BH\&HLYP (6,6), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/bh_66_28A.svg)**c** 28A · 1.999876\
−0.2707

BH\&HLYP, (8,8)

(a, h)

![furofuran, BH\&HLYP (8,8), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/bh_88_31A.svg)**h** 31A · 0.000000\
−0.0789

![furofuran, BH\&HLYP (8,8), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/bh_88_25A.svg)**a** 25A · 2.000000\
−0.4515

(b, g)

![furofuran, BH\&HLYP (8,8), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/bh_88_30A.svg)**g** 30A · 0.000000\
−0.0824

![furofuran, BH\&HLYP (8,8), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/bh_88_26A.svg)**b** 26A · 2.000000\
−0.3747

(c, f)

![furofuran, BH\&HLYP (8,8), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/bh_88_32A.svg)**f** 32A · 0.000000\
−0.0332

![furofuran, BH\&HLYP (8,8), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/bh_88_27A.svg)**c** 27A · 2.000000\
−0.3537

(d, e)

![furofuran, BH\&HLYP (8,8), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/bh_88_29A.svg)**e** 29A · 0.000156\
−0.1084

![furofuran, BH\&HLYP (8,8), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/bh_88_28A.svg)**d** 28A · 1.999844\
−0.2768

M08-SO, (2,2)

(a, b)

![furofuran, M08-SO (2,2), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/m08_22_29A.svg)**b** 29A · 0.000020\
−0.1049

![furofuran, M08-SO (2,2), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/m08_22_28A.svg)**a** 28A · 1.999980\
−0.2756

M08-SO, (4,4)

(a, d)

![furofuran, M08-SO (4,4), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/m08_44_30A.svg)**d** 30A · 0.000000\
−0.0659

![furofuran, M08-SO (4,4), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/m08_44_27A.svg)**a** 27A · 2.000000\
−0.3516

(b, c)

![furofuran, M08-SO (4,4), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/m08_44_29A.svg)**c** 29A · 0.000018\
−0.1116

![furofuran, M08-SO (4,4), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/m08_44_28A.svg)**b** 28A · 1.999982\
−0.2815

M08-SO, (6,6)

(a, f)

![furofuran, M08-SO (6,6), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/m08_66_30A.svg)**f** 30A · 0.000000\
−0.0821

![furofuran, M08-SO (6,6), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/m08_66_26A.svg)**a** 26A · 2.000000\
−0.3808

(b, e)

![furofuran, M08-SO (6,6), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/m08_66_31A.svg)**e** 31A · 0.000000\
−0.0385

![furofuran, M08-SO (6,6), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/m08_66_27A.svg)**b** 27A · 2.000000\
−0.3548

(c, d)

![furofuran, M08-SO (6,6), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/m08_66_29A.svg)**d** 29A · 0.000020\
−0.1132

![furofuran, M08-SO (6,6), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/m08_66_28A.svg)**c** 28A · 1.999980\
−0.2844

M08-SO, (8,8)

(a, h)

![furofuran, M08-SO (8,8), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/m08_88_31A.svg)**h** 31A · 0.000000\
−0.0899

![furofuran, M08-SO (8,8), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/m08_88_25A.svg)**a** 25A · 2.000000\
−0.4538

(b, g)

![furofuran, M08-SO (8,8), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/m08_88_30A.svg)**g** 30A · 0.000000\
−0.1010

![furofuran, M08-SO (8,8), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/m08_88_26A.svg)**b** 26A · 2.000000\
−0.3877

(c, f)

![furofuran, M08-SO (8,8), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/m08_88_32A.svg)**f** 32A · 0.000000\
−0.0531

![furofuran, M08-SO (8,8), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/m08_88_27A.svg)**c** 27A · 2.000000\
−0.3654

(d, e)

![furofuran, M08-SO (8,8), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/m08_88_29A.svg)**e** 29A · 0.000024\
−0.1240

![furofuran, M08-SO (8,8), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/m08_88_28A.svg)**d** 28A · 1.999976\
−0.2912

ωB97X, (2,2)

(a, b)

![furofuran, ωB97X (2,2), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/wb_22_29A.svg)**b** 29A · 0.000060\
−0.1279

![furofuran, ωB97X (2,2), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/wb_22_28A.svg)**a** 28A · 1.999940\
−0.3099

ωB97X, (4,4)

(a, d)

![furofuran, ωB97X (4,4), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/wb_44_30A.svg)**d** 30A · 0.000000\
−0.0872

![furofuran, ωB97X (4,4), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/wb_44_27A.svg)**a** 27A · 2.000000\
−0.3806

(b, c)

![furofuran, ωB97X (4,4), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/wb_44_29A.svg)**c** 29A · 0.000051\
−0.1363

![furofuran, ωB97X (4,4), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/wb_44_28A.svg)**b** 28A · 1.999949\
−0.3135

ωB97X, (6,6)

(a, f)

![furofuran, ωB97X (6,6), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/wb_66_30A.svg)**f** 30A · 0.000000\
−0.0991

![furofuran, ωB97X (6,6), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/wb_66_26A.svg)**a** 26A · 2.000000\
−0.4110

(b, e)

![furofuran, ωB97X (6,6), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/wb_66_31A.svg)**e** 31A · 0.000000\
−0.0503

![furofuran, ωB97X (6,6), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/wb_66_27A.svg)**b** 27A · 2.000000\
−0.3810

(c, d)

![furofuran, ωB97X (6,6), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/wb_66_29A.svg)**d** 29A · 0.000066\
−0.1357

![furofuran, ωB97X (6,6), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/wb_66_28A.svg)**c** 28A · 1.999934\
−0.3128

ωB97X, (8,8)

(a, h)

![furofuran, ωB97X (8,8), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/wb_88_31A.svg)**h** 31A · 0.000000\
−0.0969

![furofuran, ωB97X (8,8), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/wb_88_25A.svg)**a** 25A · 2.000000\
−0.4811

(b, g)

![furofuran, ωB97X (8,8), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/wb_88_30A.svg)**g** 30A · 0.000000\
−0.1211

![furofuran, ωB97X (8,8), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/wb_88_26A.svg)**b** 26A · 2.000000\
−0.4216

(c, f)

![furofuran, ωB97X (8,8), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/wb_88_32A.svg)**f** 32A · 0.000000\
−0.0741

![furofuran, ωB97X (8,8), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/wb_88_27A.svg)**c** 27A · 2.000000\
−0.3947

(d, e)

![furofuran, ωB97X (8,8), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/wb_88_29A.svg)**e** 29A · 0.000075\
−0.1490

![furofuran, ωB97X (8,8), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_furofuran/wb_88_28A.svg)**d** 28A · 1.999925\
−0.3237

[← diketopyrrolopyrrole](https://reksstudio.github.io/v2/main/results/quest/quest7-diketopyrrolopyrrole/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-furofuran) · [pyrrolopyrrole →](https://reksstudio.github.io/v2/main/results/quest/quest7-pyrrolopyrrole/index.md)
