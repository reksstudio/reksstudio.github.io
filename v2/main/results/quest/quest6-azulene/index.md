# azulene — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest6-azulene/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# azulene

QUEST6: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](https://reksstudio.github.io/v2/main/results/quest/quest6-azulene/index.md#s1) · [S2](https://reksstudio.github.io/v2/main/results/quest/quest6-azulene/index.md#s2) · [T1](https://reksstudio.github.io/v2/main/results/quest/quest6-azulene/index.md#t1) · [T2](https://reksstudio.github.io/v2/main/results/quest/quest6-azulene/index.md#t2) · [Orbitals](https://reksstudio.github.io/v2/main/results/quest/quest6-azulene/index.md#orbitals)

![azulene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest6_azulene.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: B<sub>2</sub> 2.161 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | **(2,2)** | **2.425** | **+0.264** | B<sub>2</sub> |
| | (4,4) | 2.630 | +0.469 | B<sub>2</sub> |
| | (6,6) | 2.663 | +0.502 | B<sub>2</sub> |
| | (8,8) | 2.741 | +0.580 | B<sub>2</sub> |
| M08-SO | **(2,2)** | **2.498** | **+0.337** | B<sub>2</sub> |
| | (4,4) | 2.663 | +0.502 | B<sub>2</sub> |
| | (6,6) | 2.700 | +0.538 | B<sub>2</sub> |
| | (8,8) | 2.851 | +0.690 | B<sub>2</sub> |
| ωB97X | **(2,2)** | **2.422** | **+0.261** | B<sub>2</sub> |
| | (4,4) | 2.675 | +0.514 | B<sub>2</sub> |
| | (6,6) | 2.725 | +0.564 | B<sub>2</sub> |
| | (8,8) | 2.716 | +0.555 | B<sub>2</sub> |

### S2 {#s2}

TBE: A<sub>1</sub> 3.849 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 6.495 | +2.646 | A<sub>1</sub> |
| | (4,4) | 3.771 | −0.079 | A<sub>1</sub> |
| | **(6,6)** | **3.799** | **−0.050** | A<sub>1</sub> |
| | (8,8) | 3.791 | −0.058 | A<sub>1</sub> |
| M08-SO | (2,2) | 6.434 | +2.585 | A<sub>1</sub> |
| | (4,4) | 3.570 | −0.280 | A<sub>1</sub> |
| | (6,6) | 3.600 | −0.249 | A<sub>1</sub> |
| | **(8,8)** | **3.635** | **−0.214** | A<sub>1</sub> |
| ωB97X | (2,2) | 6.671 | +2.822 | A<sub>1</sub> |
| | (4,4) | 3.933 | +0.084 | A<sub>1</sub> |
| | (6,6) | 4.003 | +0.154 | A<sub>1</sub> |
| | **(8,8)** | **3.916** | **+0.067** | A<sub>1</sub> |

### T1 {#t1}

TBE: B<sub>2</sub> 2.180 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 1.948 | −0.232 | B<sub>2</sub> |
| | **(4,4)** | **2.302** | **+0.122** | B<sub>2</sub> |
| | (6,6) | 2.433 | +0.253 | B<sub>2</sub> |
| | (8,8) | 2.518 | +0.338 | B<sub>2</sub> |
| M08-SO | **(2,2)** | **2.035** | **−0.145** | B<sub>2</sub> |
| | (4,4) | 2.373 | +0.193 | B<sub>2</sub> |
| | (6,6) | 2.464 | +0.284 | B<sub>2</sub> |
| | (8,8) | 2.618 | +0.438 | B<sub>2</sub> |
| ωB97X | (2,2) | 1.951 | −0.229 | B<sub>2</sub> |
| | **(4,4)** | **2.350** | **+0.170** | B<sub>2</sub> |
| | (6,6) | 2.497 | +0.317 | B<sub>2</sub> |
| | (8,8) | 2.506 | +0.326 | B<sub>2</sub> |

### T2 {#t2}

TBE: A<sub>1</sub> 2.460 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **2.822** | **+0.362** | A<sub>1</sub> |
| | (6,6) | 2.896 | +0.436 | A<sub>1</sub> |
| | (8,8) | 2.864 | +0.404 | A<sub>1</sub> |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **2.920** | **+0.460** | A<sub>1</sub> |
| | (6,6) | 2.984 | +0.524 | A<sub>1</sub> |
| | (8,8) | 2.990 | +0.530 | A<sub>1</sub> |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **2.880** | **+0.420** | A<sub>1</sub> |
| | (6,6) | 2.975 | +0.515 | A<sub>1</sub> |
| | (8,8) | 2.901 | +0.442 | A<sub>1</sub> |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (2,2)

(a, b)

![azulene, BH\&HLYP (2,2), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/bh_22_35A.svg)**b** 35A · 0.000000\
−0.1417

![azulene, BH\&HLYP (2,2), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/bh_22_34A.svg)**a** 34A · 2.000000\
−0.2422

BH\&HLYP, (4,4)

(a, d)

![azulene, BH\&HLYP (4,4), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/bh_44_35A.svg)**d** 35A · 0.000365\
−0.1357

![azulene, BH\&HLYP (4,4), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/bh_44_33A.svg)**a** 33A · 1.999635\
−0.2811

(b, c)

![azulene, BH\&HLYP (4,4), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/bh_44_36A.svg)**c** 36A · 0.000337\
−0.1029

![azulene, BH\&HLYP (4,4), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/bh_44_34A.svg)**b** 34A · 1.999663\
−0.2413

BH\&HLYP, (6,6)

(a, f)

![azulene, BH\&HLYP (6,6), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/bh_66_37A.svg)**f** 37A · 0.000000\
−0.0349

![azulene, BH\&HLYP (6,6), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/bh_66_32A.svg)**a** 32A · 2.000000\
−0.3641

(b, e)

![azulene, BH\&HLYP (6,6), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/bh_66_35A.svg)**e** 35A · 0.000378\
−0.1454

![azulene, BH\&HLYP (6,6), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/bh_66_33A.svg)**b** 33A · 1.999622\
−0.2935

(c, d)

![azulene, BH\&HLYP (6,6), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/bh_66_36A.svg)**d** 36A · 0.000474\
−0.1386

![azulene, BH\&HLYP (6,6), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/bh_66_34A.svg)**c** 34A · 1.999526\
−0.2550

BH\&HLYP, (8,8)

(a, h)

![azulene, BH\&HLYP (8,8), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/bh_88_38A.svg)**h** 38A · 0.000000\
−0.0165

![azulene, BH\&HLYP (8,8), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/bh_88_32A.svg)**a** 32A · 2.000000\
−0.3539

(b, g)

![azulene, BH\&HLYP (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/bh_88_37A.svg)**g** 37A · 0.000000\
−0.0285

![azulene, BH\&HLYP (8,8), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/bh_88_31A.svg)**b** 31A · 2.000000\
−0.3644

(c, f)

![azulene, BH\&HLYP (8,8), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/bh_88_36A.svg)**f** 36A · 0.000019\
−0.1489

![azulene, BH\&HLYP (8,8), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/bh_88_33A.svg)**c** 33A · 1.999981\
−0.3372

(d, e)

![azulene, BH\&HLYP (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/bh_88_35A.svg)**e** 35A · 0.000388\
−0.1625

![azulene, BH\&HLYP (8,8), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/bh_88_34A.svg)**d** 34A · 1.999612\
−0.2502

M08-SO, (2,2)

(a, b)

![azulene, M08-SO (2,2), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/m08_22_35A.svg)**b** 35A · 0.000000\
−0.1569

![azulene, M08-SO (2,2), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/m08_22_34A.svg)**a** 34A · 2.000000\
−0.2576

M08-SO, (4,4)

(a, d)

![azulene, M08-SO (4,4), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/m08_44_35A.svg)**d** 35A · 0.000120\
−0.1534

![azulene, M08-SO (4,4), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/m08_44_33A.svg)**a** 33A · 1.999880\
−0.2984

(b, c)

![azulene, M08-SO (4,4), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/m08_44_36A.svg)**c** 36A · 0.000101\
−0.1217

![azulene, M08-SO (4,4), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/m08_44_34A.svg)**b** 34A · 1.999899\
−0.2577

M08-SO, (6,6)

(a, f)

![azulene, M08-SO (6,6), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/m08_66_37A.svg)**f** 37A · 0.000000\
−0.0558

![azulene, M08-SO (6,6), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/m08_66_32A.svg)**a** 32A · 2.000000\
−0.3804

(b, e)

![azulene, M08-SO (6,6), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/m08_66_35A.svg)**e** 35A · 0.000069\
−0.1625

![azulene, M08-SO (6,6), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/m08_66_33A.svg)**b** 33A · 1.999931\
−0.3128

(c, d)

![azulene, M08-SO (6,6), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/m08_66_36A.svg)**d** 36A · 0.000125\
−0.1579

![azulene, M08-SO (6,6), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/m08_66_34A.svg)**c** 34A · 1.999875\
−0.2737

M08-SO, (8,8)

(a, h)

![azulene, M08-SO (8,8), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/m08_88_38A.svg)**h** 38A · 0.000000\
−0.0373

![azulene, M08-SO (8,8), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/m08_88_32A.svg)**a** 32A · 2.000000\
−0.3726

(b, g)

![azulene, M08-SO (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/m08_88_37A.svg)**g** 37A · 0.000000\
−0.0471

![azulene, M08-SO (8,8), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/m08_88_31A.svg)**b** 31A · 2.000000\
−0.3800

(c, f)

![azulene, M08-SO (8,8), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/m08_88_36A.svg)**f** 36A · 0.000010\
−0.1676

![azulene, M08-SO (8,8), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/m08_88_33A.svg)**c** 33A · 1.999990\
−0.3517

(d, e)

![azulene, M08-SO (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/m08_88_35A.svg)**e** 35A · 0.000113\
−0.1793

![azulene, M08-SO (8,8), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/m08_88_34A.svg)**d** 34A · 1.999887\
−0.2672

ωB97X, (2,2)

(a, b)

![azulene, ωB97X (2,2), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/wb_22_35A.svg)**b** 35A · 0.000000\
−0.1874

![azulene, ωB97X (2,2), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/wb_22_34A.svg)**a** 34A · 2.000000\
−0.2895

ωB97X, (4,4)

(a, d)

![azulene, ωB97X (4,4), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/wb_44_35A.svg)**d** 35A · 0.000461\
−0.1798

![azulene, ωB97X (4,4), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/wb_44_33A.svg)**a** 33A · 1.999539\
−0.3307

(b, c)

![azulene, ωB97X (4,4), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/wb_44_36A.svg)**c** 36A · 0.000388\
−0.1444

![azulene, ωB97X (4,4), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/wb_44_34A.svg)**b** 34A · 1.999612\
−0.2891

ωB97X, (6,6)

(a, f)

![azulene, ωB97X (6,6), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/wb_66_37A.svg)**f** 37A · 0.000000\
−0.0539

![azulene, ωB97X (6,6), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/wb_66_32A.svg)**a** 32A · 2.000000\
−0.4152

(b, e)

![azulene, ωB97X (6,6), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/wb_66_35A.svg)**e** 35A · 0.000523\
−0.1892

![azulene, ωB97X (6,6), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/wb_66_33A.svg)**b** 33A · 1.999477\
−0.3408

(c, d)

![azulene, ωB97X (6,6), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/wb_66_36A.svg)**d** 36A · 0.000586\
−0.1785

![azulene, ωB97X (6,6), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/wb_66_34A.svg)**c** 34A · 1.999414\
−0.2997

ωB97X, (8,8)

(a, h)

![azulene, ωB97X (8,8), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/wb_88_38A.svg)**h** 38A · 0.000000\
−0.0431

![azulene, ωB97X (8,8), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/wb_88_31A.svg)**a** 31A · 2.000000\
−0.4511

(b, g)

![azulene, ωB97X (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/wb_88_37A.svg)**g** 37A · 0.000000\
−0.0533

![azulene, ωB97X (8,8), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/wb_88_32A.svg)**b** 32A · 2.000000\
−0.4159

(c, f)

![azulene, ωB97X (8,8), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/wb_88_36A.svg)**f** 36A · 0.000089\
−0.1927

![azulene, ωB97X (8,8), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/wb_88_33A.svg)**c** 33A · 1.999911\
−0.3423

(d, e)

![azulene, ωB97X (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/wb_88_35A.svg)**e** 35A · 0.000764\
−0.2035

![azulene, ωB97X (8,8), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_azulene/wb_88_34A.svg)**d** 34A · 1.999236\
−0.2993

[← aniline](https://reksstudio.github.io/v2/main/results/quest/quest6-aniline/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-azulene) · [benzothiadiazole →](https://reksstudio.github.io/v2/main/results/quest/quest6-benzothiadiazole/index.md)
