# thienothiophene — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest7-thienothiophene/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# thienothiophene

QUEST7: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](#s1) · [S2](#s2) · [T1](#t1) · [T2](#t2) · [Orbitals](#orbitals)

![thienothiophene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest7_thienothiophene.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: B<sub>u</sub> 4.965 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 5.190 | +0.225 | B<sub>u</sub> |
| | (4,4) | 5.256 | +0.291 | B<sub>u</sub> |
| | (6,6) | 5.209 | +0.244 | B<sub>u</sub> |
| | **(8,8)** | **5.166** | **+0.201** | B<sub>u</sub> |
| M08-SO | **(2,2)** | **4.972** | **+0.007** | B<sub>u</sub> |
| | (4,4) | 5.035 | +0.070 | B<sub>u</sub> |
| | (6,6) | 4.942 | −0.023 | B<sub>u</sub> |
| | (8,8) | 4.893 | −0.072 | B<sub>u</sub> |
| ωB97X | (2,2) | 5.340 | +0.376 | B<sub>u</sub> |
| | (4,4) | 5.391 | +0.426 | B<sub>u</sub> |
| | (6,6) | 5.363 | +0.398 | B<sub>u</sub> |
| | **(8,8)** | **5.301** | **+0.336** | B<sub>u</sub> |

### S2 {#s2}

TBE: B<sub>u</sub> 5.243 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | (4,4) | 5.585 | +0.342 | B<sub>u</sub> |
| | **(6,6)** | **5.549** | **+0.306** | B<sub>u</sub> |
| | (8,8) | 5.573 | +0.330 | B<sub>u</sub> |
| M08-SO | (2,2) | – | – | – |
| | (4,4) | 5.378 | +0.135 | B<sub>u</sub> |
| | **(6,6)** | **5.341** | **+0.098** | B<sub>u</sub> |
| | (8,8) | 5.349 | +0.106 | B<sub>u</sub> |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 5.712 | +0.469 | B<sub>u</sub> |
| | **(6,6)** | **5.615** | **+0.372** | B<sub>u</sub> |
| | (8,8) | 5.649 | +0.406 | B<sub>u</sub> |

### T1 {#t1}

TBE: B<sub>u</sub> 3.465 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 3.643 | +0.177 | B<sub>u</sub> |
| | (4,4) | 3.648 | +0.183 | B<sub>u</sub> |
| | **(6,6)** | **3.581** | **+0.116** | B<sub>u</sub> |
| | (8,8) | 3.600 | +0.135 | B<sub>u</sub> |
| M08-SO | (2,2) | 3.790 | +0.325 | B<sub>u</sub> |
| | (4,4) | 3.786 | +0.321 | B<sub>u</sub> |
| | **(6,6)** | **3.676** | **+0.211** | B<sub>u</sub> |
| | (8,8) | 3.686 | +0.221 | B<sub>u</sub> |
| ωB97X | (2,2) | 3.814 | +0.349 | B<sub>u</sub> |
| | (4,4) | 3.821 | +0.356 | B<sub>u</sub> |
| | **(6,6)** | **3.745** | **+0.280** | B<sub>u</sub> |
| | (8,8) | 3.753 | +0.288 | B<sub>u</sub> |

### T2 {#t2}

TBE: B<sub>u</sub> 4.261 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | (4,4) | 4.366 | +0.105 | B<sub>u</sub> |
| | **(6,6)** | **4.358** | **+0.097** | B<sub>u</sub> |
| | (8,8) | 4.362 | +0.101 | B<sub>u</sub> |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **4.364** | **+0.103** | B<sub>u</sub> |
| | (6,6) | 4.380 | +0.119 | B<sub>u</sub> |
| | (8,8) | 4.382 | +0.121 | B<sub>u</sub> |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 4.456 | +0.195 | B<sub>u</sub> |
| | **(6,6)** | **4.427** | **+0.166** | B<sub>u</sub> |
| | (8,8) | 4.436 | +0.175 | B<sub>u</sub> |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (2,2)

(a, b)

![thienothiophene, BH\&HLYP (2,2), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/bh_22_37A.svg)**b** 37A · 0.000083\
−0.0994

![thienothiophene, BH\&HLYP (2,2), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/bh_22_36A.svg)**a** 36A · 1.999917\
−0.2655

BH\&HLYP, (4,4)

(a, d)

![thienothiophene, BH\&HLYP (4,4), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/bh_44_38A.svg)**d** 38A · 0.000000\
−0.0593

![thienothiophene, BH\&HLYP (4,4), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/bh_44_35A.svg)**a** 35A · 2.000000\
−0.2868

(b, c)

![thienothiophene, BH\&HLYP (4,4), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/bh_44_37A.svg)**c** 37A · 0.000025\
−0.1014

![thienothiophene, BH\&HLYP (4,4), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/bh_44_36A.svg)**b** 36A · 1.999975\
−0.2733

BH\&HLYP, (6,6)

(a, f)

![thienothiophene, BH\&HLYP (6,6), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/bh_66_38A.svg)**f** 38A · 0.000000\
−0.0700

![thienothiophene, BH\&HLYP (6,6), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/bh_66_34A.svg)**a** 34A · 2.000000\
−0.3448

(b, e)

![thienothiophene, BH\&HLYP (6,6), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/bh_66_39A.svg)**e** 39A · 0.000000\
−0.0331

![thienothiophene, BH\&HLYP (6,6), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/bh_66_35A.svg)**b** 35A · 2.000000\
−0.2896

(c, d)

![thienothiophene, BH\&HLYP (6,6), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/bh_66_37A.svg)**d** 37A · 0.000029\
−0.1030

![thienothiophene, BH\&HLYP (6,6), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/bh_66_36A.svg)**c** 36A · 1.999971\
−0.2719

BH\&HLYP, (8,8)

(a, h)

![thienothiophene, BH\&HLYP (8,8), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/bh_88_38A.svg)**h** 38A · 0.000000\
−0.0810

![thienothiophene, BH\&HLYP (8,8), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/bh_88_32A.svg)**a** 32A · 2.000000\
−0.4079

(b, g)

![thienothiophene, BH\&HLYP (8,8), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/bh_88_39A.svg)**g** 39A · 0.000000\
−0.0758

![thienothiophene, BH\&HLYP (8,8), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/bh_88_34A.svg)**b** 34A · 2.000000\
−0.3455

(c, f)

![thienothiophene, BH\&HLYP (8,8), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/bh_88_40A.svg)**f** 40A · 0.000000\
−0.0397

![thienothiophene, BH\&HLYP (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/bh_88_35A.svg)**c** 35A · 2.000000\
−0.2893

(d, e)

![thienothiophene, BH\&HLYP (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/bh_88_37A.svg)**e** 37A · 0.000020\
−0.1070

![thienothiophene, BH\&HLYP (8,8), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/bh_88_36A.svg)**d** 36A · 1.999980\
−0.2744

M08-SO, (2,2)

(a, b)

![thienothiophene, M08-SO (2,2), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/m08_22_37A.svg)**b** 37A · 0.000014\
−0.1160

![thienothiophene, M08-SO (2,2), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/m08_22_36A.svg)**a** 36A · 1.999986\
−0.2800

M08-SO, (4,4)

(a, d)

![thienothiophene, M08-SO (4,4), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/m08_44_38A.svg)**d** 38A · 0.000000\
−0.0760

![thienothiophene, M08-SO (4,4), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/m08_44_35A.svg)**a** 35A · 2.000000\
−0.3002

(b, c)

![thienothiophene, M08-SO (4,4), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/m08_44_37A.svg)**c** 37A · 0.000008\
−0.1177

![thienothiophene, M08-SO (4,4), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/m08_44_36A.svg)**b** 36A · 1.999992\
−0.2859

M08-SO, (6,6)

(a, f)

![thienothiophene, M08-SO (6,6), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/m08_66_38A.svg)**f** 38A · 0.000000\
−0.0870

![thienothiophene, M08-SO (6,6), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/m08_66_34A.svg)**a** 34A · 2.000000\
−0.3567

(b, e)

![thienothiophene, M08-SO (6,6), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/m08_66_39A.svg)**e** 39A · 0.000000\
−0.0509

![thienothiophene, M08-SO (6,6), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/m08_66_35A.svg)**b** 35A · 2.000000\
−0.3022

(c, d)

![thienothiophene, M08-SO (6,6), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/m08_66_37A.svg)**d** 37A · 0.000006\
−0.1196

![thienothiophene, M08-SO (6,6), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/m08_66_36A.svg)**c** 36A · 1.999994\
−0.2855

M08-SO, (8,8)

(a, h)

![thienothiophene, M08-SO (8,8), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/m08_88_39A.svg)**h** 39A · 0.000000\
−0.0913

![thienothiophene, M08-SO (8,8), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/m08_88_33A.svg)**a** 33A · 2.000000\
−0.4148

(b, g)

![thienothiophene, M08-SO (8,8), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/m08_88_38A.svg)**g** 38A · 0.000000\
−0.0931

![thienothiophene, M08-SO (8,8), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/m08_88_34A.svg)**b** 34A · 2.000000\
−0.3583

(c, f)

![thienothiophene, M08-SO (8,8), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/m08_88_40A.svg)**f** 40A · 0.000000\
−0.0575

![thienothiophene, M08-SO (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/m08_88_35A.svg)**c** 35A · 2.000000\
−0.3027

(d, e)

![thienothiophene, M08-SO (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/m08_88_37A.svg)**e** 37A · 0.000005\
−0.1234

![thienothiophene, M08-SO (8,8), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/m08_88_36A.svg)**d** 36A · 1.999995\
−0.2880

ωB97X, (2,2)

(a, b)

![thienothiophene, ωB97X (2,2), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/wb_22_37A.svg)**b** 37A · 0.000059\
−0.1428

![thienothiophene, ωB97X (2,2), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/wb_22_36A.svg)**a** 36A · 1.999941\
−0.3165

ωB97X, (4,4)

(a, d)

![thienothiophene, ωB97X (4,4), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/wb_44_38A.svg)**d** 38A · 0.000000\
−0.0955

![thienothiophene, ωB97X (4,4), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/wb_44_35A.svg)**a** 35A · 2.000000\
−0.3348

(b, c)

![thienothiophene, ωB97X (4,4), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/wb_44_37A.svg)**c** 37A · 0.000030\
−0.1437

![thienothiophene, ωB97X (4,4), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/wb_44_36A.svg)**b** 36A · 1.999970\
−0.3190

ωB97X, (6,6)

(a, f)

![thienothiophene, ωB97X (6,6), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/wb_66_38A.svg)**f** 38A · 0.000000\
−0.1052

![thienothiophene, ωB97X (6,6), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/wb_66_34A.svg)**a** 34A · 2.000000\
−0.3916

(b, e)

![thienothiophene, ωB97X (6,6), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/wb_66_39A.svg)**e** 39A · 0.000000\
−0.0686

![thienothiophene, ωB97X (6,6), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/wb_66_35A.svg)**b** 35A · 2.000000\
−0.3363

(c, d)

![thienothiophene, ωB97X (6,6), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/wb_66_37A.svg)**d** 37A · 0.000029\
−0.1449

![thienothiophene, ωB97X (6,6), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/wb_66_36A.svg)**c** 36A · 1.999971\
−0.3167

ωB97X, (8,8)

(a, h)

![thienothiophene, ωB97X (8,8), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/wb_88_39A.svg)**h** 39A · 0.000000\
−0.1058

![thienothiophene, ωB97X (8,8), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/wb_88_33A.svg)**a** 33A · 2.000000\
−0.4484

(b, g)

![thienothiophene, ωB97X (8,8), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/wb_88_38A.svg)**g** 38A · 0.000000\
−0.1105

![thienothiophene, ωB97X (8,8), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/wb_88_34A.svg)**b** 34A · 2.000000\
−0.3932

(c, f)

![thienothiophene, ωB97X (8,8), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/wb_88_40A.svg)**f** 40A · 0.000000\
−0.0757

![thienothiophene, ωB97X (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/wb_88_35A.svg)**c** 35A · 2.000000\
−0.3372

(d, e)

![thienothiophene, ωB97X (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/wb_88_37A.svg)**e** 37A · 0.000025\
−0.1490

![thienothiophene, ωB97X (8,8), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest7_thienothiophene/wb_88_36A.svg)**d** 36A · 1.999975\
−0.3188

[← pyrrolopyrrole](https://reksstudio.github.io/v2/main/results/quest/quest7-pyrrolopyrrole/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-thienothiophene) · [TTF →](https://reksstudio.github.io/v2/main/results/quest/quest7-ttf/index.md)
