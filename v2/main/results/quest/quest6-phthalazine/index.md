# phthalazine — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest6-phthalazine/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# phthalazine

QUEST6: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](https://reksstudio.github.io/v2/main/results/quest/quest6-phthalazine/index.md#s1) · [S2](https://reksstudio.github.io/v2/main/results/quest/quest6-phthalazine/index.md#s2) · [T1](https://reksstudio.github.io/v2/main/results/quest/quest6-phthalazine/index.md#t1) · [T2](https://reksstudio.github.io/v2/main/results/quest/quest6-phthalazine/index.md#t2) · [Orbitals](https://reksstudio.github.io/v2/main/results/quest/quest6-phthalazine/index.md#orbitals)

![phthalazine: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest6_phthalazine.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: A<sub>2</sub> 3.898 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **4.672** | **+0.774** | A<sub>2</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **4.493** | **+0.595** | A<sub>2</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **4.550** | **+0.652** | A<sub>2</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

### S2 {#s2}

TBE: B<sub>1</sub> 4.302 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **4.617** | **+0.315** | B<sub>1</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **4.389** | **+0.087** | B<sub>1</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **4.458** | **+0.156** | B<sub>1</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

### T1 {#t1}

TBE: B<sub>2</sub> 3.430 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 3.798 | +0.368 | B<sub>2</sub> |
| | (4,4) | 3.817 | +0.387 | B<sub>2</sub> |
| | (6,6) | 3.678 | +0.248 | B<sub>2</sub> |
| | **(8,8)** | **3.533** | **+0.103** | B<sub>2</sub> |
| M08-SO | (2,2) | 3.905 | +0.475 | B<sub>2</sub> |
| | (4,4) | 3.899 | +0.469 | B<sub>2</sub> |
| | (6,6) | 3.781 | +0.351 | B<sub>2</sub> |
| | **(8,8)** | **3.610** | **+0.180** | B<sub>2</sub> |
| ωB97X | (2,2) | 3.924 | +0.494 | B<sub>2</sub> |
| | (4,4) | 3.989 | +0.559 | B<sub>2</sub> |
| | (6,6) | 3.777 | +0.347 | B<sub>2</sub> |
| | **(8,8)** | **3.609** | **+0.179** | B<sub>2</sub> |

### T2 {#t2}

TBE: A<sub>2</sub> 3.626 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **4.467** | **+0.841** | A<sub>2</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **4.340** | **+0.714** | A<sub>2</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **4.355** | **+0.729** | A<sub>2</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (2,2)

(a, b)

![phthalazine, BH\&HLYP (2,2), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/bh_22_35A.svg)**b** 35A · 0.000047\
−0.1316

![phthalazine, BH\&HLYP (2,2), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/bh_22_34A.svg)**a** 34A · 1.999953\
−0.2997

BH\&HLYP, (4,4)

(a, d)

![phthalazine, BH\&HLYP (4,4), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/bh_44m_35A.svg)**d** 35A · 0.000000\
−0.1629

![phthalazine, BH\&HLYP (4,4), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/bh_44m_33A.svg)**a** 33A · 2.000000\
−0.3295

(b, c)

![phthalazine, BH\&HLYP (4,4), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/bh_44m_36A.svg)**c** 36A · 0.000015\
−0.1369

![phthalazine, BH\&HLYP (4,4), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/bh_44m_34A.svg)**b** 34A · 1.999985\
−0.3049

BH\&HLYP, (6,6)

(a, f)

![phthalazine, BH\&HLYP (6,6), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/bh_66_37A.svg)**f** 37A · 0.000000\
−0.0816

![phthalazine, BH\&HLYP (6,6), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/bh_66_31A.svg)**a** 31A · 2.000000\
−0.3726

(b, e)

![phthalazine, BH\&HLYP (6,6), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/bh_66_36A.svg)**e** 36A · 0.000031\
−0.1194

![phthalazine, BH\&HLYP (6,6), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/bh_66_32A.svg)**b** 32A · 1.999969\
−0.3367

(c, d)

![phthalazine, BH\&HLYP (6,6), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/bh_66_35A.svg)**d** 35A · 0.000040\
−0.1352

![phthalazine, BH\&HLYP (6,6), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/bh_66_34A.svg)**c** 34A · 1.999960\
−0.3024

BH\&HLYP, (8,8)

(a, h)

![phthalazine, BH\&HLYP (8,8), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/bh_88_38A.svg)**h** 38A · 0.000000\
−0.0234

![phthalazine, BH\&HLYP (8,8), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/bh_88_29A.svg)**a** 29A · 2.000000\
−0.4423

(b, g)

![phthalazine, BH\&HLYP (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/bh_88_37A.svg)**g** 37A · 0.000000\
−0.0889

![phthalazine, BH\&HLYP (8,8), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/bh_88_31A.svg)**b** 31A · 2.000000\
−0.3739

(c, f)

![phthalazine, BH\&HLYP (8,8), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/bh_88_36A.svg)**f** 36A · 0.000031\
−0.1362

![phthalazine, BH\&HLYP (8,8), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/bh_88_32A.svg)**c** 32A · 1.999969\
−0.3375

(d, e)

![phthalazine, BH\&HLYP (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/bh_88_35A.svg)**e** 35A · 0.000042\
−0.1380

![phthalazine, BH\&HLYP (8,8), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/bh_88_34A.svg)**d** 34A · 1.999958\
−0.3030

M08-SO, (2,2)

(a, b)

![phthalazine, M08-SO (2,2), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/m08_22_35A.svg)**b** 35A · 0.000007\
−0.1511

![phthalazine, M08-SO (2,2), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/m08_22_34A.svg)**a** 34A · 1.999993\
−0.3161

M08-SO, (4,4)

(a, d)

![phthalazine, M08-SO (4,4), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/m08_44m_35A.svg)**d** 35A · 0.000000\
−0.1744

![phthalazine, M08-SO (4,4), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/m08_44m_33A.svg)**a** 33A · 2.000000\
−0.3325

(b, c)

![phthalazine, M08-SO (4,4), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/m08_44m_36A.svg)**c** 36A · 0.000002\
−0.1551

![phthalazine, M08-SO (4,4), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/m08_44m_34A.svg)**b** 34A · 1.999998\
−0.3195

M08-SO, (6,6)

(a, f)

![phthalazine, M08-SO (6,6), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/m08_66_37A.svg)**f** 37A · 0.000000\
−0.1014

![phthalazine, M08-SO (6,6), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/m08_66_30A.svg)**a** 30A · 2.000000\
−0.3883

(b, e)

![phthalazine, M08-SO (6,6), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/m08_66_36A.svg)**e** 36A · 0.000005\
−0.1369

![phthalazine, M08-SO (6,6), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/m08_66_32A.svg)**b** 32A · 1.999995\
−0.3524

(c, d)

![phthalazine, M08-SO (6,6), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/m08_66_35A.svg)**d** 35A · 0.000006\
−0.1547

![phthalazine, M08-SO (6,6), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/m08_66_34A.svg)**c** 34A · 1.999994\
−0.3186

M08-SO, (8,8)

(a, h)

![phthalazine, M08-SO (8,8), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/m08_88_38A.svg)**h** 38A · 0.000000\
−0.0431

![phthalazine, M08-SO (8,8), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/m08_88_28A.svg)**a** 28A · 2.000000\
−0.4574

(b, g)

![phthalazine, M08-SO (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/m08_88_37A.svg)**g** 37A · 0.000000\
−0.1088

![phthalazine, M08-SO (8,8), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/m08_88_30A.svg)**b** 30A · 2.000000\
−0.3897

(c, f)

![phthalazine, M08-SO (8,8), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/m08_88_36A.svg)**f** 36A · 0.000005\
−0.1532

![phthalazine, M08-SO (8,8), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/m08_88_32A.svg)**c** 32A · 1.999995\
−0.3533

(d, e)

![phthalazine, M08-SO (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/m08_88_35A.svg)**e** 35A · 0.000006\
−0.1582

![phthalazine, M08-SO (8,8), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/m08_88_34A.svg)**d** 34A · 1.999994\
−0.3194

ωB97X, (2,2)

(a, b)

![phthalazine, ωB97X (2,2), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/wb_22_35A.svg)**b** 35A · 0.000039\
−0.1762

![phthalazine, ωB97X (2,2), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/wb_22_34A.svg)**a** 34A · 1.999961\
−0.3486

ωB97X, (4,4)

(a, d)

![phthalazine, ωB97X (4,4), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/wb_44m_35A.svg)**d** 35A · 0.000000\
−0.2045

![phthalazine, ωB97X (4,4), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/wb_44m_33A.svg)**a** 33A · 2.000000\
−0.3627

(b, c)

![phthalazine, ωB97X (4,4), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/wb_44m_36A.svg)**c** 36A · 0.000012\
−0.1798

![phthalazine, ωB97X (4,4), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/wb_44m_34A.svg)**b** 34A · 1.999988\
−0.3515

ωB97X, (6,6)

(a, f)

![phthalazine, ωB97X (6,6), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/wb_66_37A.svg)**f** 37A · 0.000000\
−0.1212

![phthalazine, ωB97X (6,6), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/wb_66_30A.svg)**a** 30A · 2.000000\
−0.4237

(b, e)

![phthalazine, ωB97X (6,6), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/wb_66_36A.svg)**e** 36A · 0.000018\
−0.1602

![phthalazine, ωB97X (6,6), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/wb_66_32A.svg)**b** 32A · 1.999982\
−0.3853

(c, d)

![phthalazine, ωB97X (6,6), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/wb_66_35A.svg)**d** 35A · 0.000027\
−0.1791

![phthalazine, ωB97X (6,6), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/wb_66_34A.svg)**c** 34A · 1.999973\
−0.3495

ωB97X, (8,8)

(a, h)

![phthalazine, ωB97X (8,8), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/wb_88_38A.svg)**h** 38A · 0.000000\
−0.0561

![phthalazine, ωB97X (8,8), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/wb_88_28A.svg)**a** 28A · 2.000000\
−0.4926

(b, g)

![phthalazine, ωB97X (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/wb_88_37A.svg)**g** 37A · 0.000000\
−0.1266

![phthalazine, ωB97X (8,8), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/wb_88_30A.svg)**b** 30A · 2.000000\
−0.4237

(c, f)

![phthalazine, ωB97X (8,8), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/wb_88_36A.svg)**f** 36A · 0.000016\
−0.1766

![phthalazine, ωB97X (8,8), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/wb_88_32A.svg)**c** 32A · 1.999984\
−0.3838

(d, e)

![phthalazine, ωB97X (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/wb_88_35A.svg)**e** 35A · 0.000029\
−0.1821

![phthalazine, ωB97X (8,8), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_phthalazine/wb_88_34A.svg)**d** 34A · 1.999971\
−0.3490

[← NPNO](https://reksstudio.github.io/v2/main/results/quest/quest6-npno/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-phthalazine) · [quinoxaline →](https://reksstudio.github.io/v2/main/results/quest/quest6-quinoxaline/index.md)
