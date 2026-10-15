# pyrrole — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest3-pyrrole/>

Psi4 bd0fb43ef, 2026-10-15: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# pyrrole

QUEST3: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](https://reksstudio.github.io/v2/main/results/quest/quest3-pyrrole/index.md#s1) · [S2](https://reksstudio.github.io/v2/main/results/quest/quest3-pyrrole/index.md#s2) · [T1](https://reksstudio.github.io/v2/main/results/quest/quest3-pyrrole/index.md#t1) · [T2](https://reksstudio.github.io/v2/main/results/quest/quest3-pyrrole/index.md#t2) · [Orbitals](https://reksstudio.github.io/v2/main/results/quest/quest3-pyrrole/index.md#orbitals)

![pyrrole: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_pyrrole.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: A<sub>1</sub> 6.30 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **6.218** | **−0.082** | A<sub>1</sub> |
| | (6,6) | 6.148 | −0.152 | A<sub>1</sub> |
| | (8,8) | 6.140 | −0.160 | A<sub>1</sub> |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **6.213** | **−0.087** | A<sub>1</sub> |
| | (6,6) | 6.139 | −0.161 | A<sub>1</sub> |
| | (8,8) | 6.137 | −0.163 | A<sub>1</sub> |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **6.199** | **−0.101** | A<sub>1</sub> |
| | (6,6) | 6.140 | −0.160 | A<sub>1</sub> |
| | (8,8) | 6.127 | −0.173 | A<sub>1</sub> |

### S2 {#s2}

TBE: B<sub>2</sub> 6.26 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 6.374 | +0.114 | B<sub>2</sub> |
| | **(4,4)** | **6.536** | **+0.276** | B<sub>2</sub> |
| | (6,6) | 6.646 | +0.387 | B<sub>2</sub> |
| | (8,8) | 6.790 | +0.530 | B<sub>2</sub> |
| M08-SO | (2,2) | 6.168 | −0.092 | B<sub>2</sub> |
| | **(4,4)** | **6.343** | **+0.083** | B<sub>2</sub> |
| | (6,6) | 6.361 | +0.101 | B<sub>2</sub> |
| | (8,8) | 6.457 | +0.197 | B<sub>2</sub> |
| ωB97X | (2,2) | 6.478 | +0.218 | B<sub>2</sub> |
| | **(4,4)** | **6.647** | **+0.387** | B<sub>2</sub> |
| | (6,6) | 6.663 | +0.403 | B<sub>2</sub> |
| | (8,8) | 6.752 | +0.492 | B<sub>2</sub> |

### T1 {#t1}

TBE: B<sub>2</sub> 4.51 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | **(2,2)** | **4.562** | **+0.052** | B<sub>2</sub> |
| | (4,4) | 4.394 | −0.116 | B<sub>2</sub> |
| | (6,6) | 4.622 | +0.112 | B<sub>2</sub> |
| | (8,8) | 4.658 | +0.148 | B<sub>2</sub> |
| M08-SO | (2,2) | 4.701 | +0.191 | B<sub>2</sub> |
| | **(4,4)** | **4.553** | **+0.043** | B<sub>2</sub> |
| | (6,6) | 4.820 | +0.310 | B<sub>2</sub> |
| | (8,8) | 4.848 | +0.338 | B<sub>2</sub> |
| ωB97X | **(2,2)** | **4.677** | **+0.167** | B<sub>2</sub> |
| | (4,4) | 4.762 | +0.252 | B<sub>2</sub> |
| | (6,6) | 4.828 | +0.318 | B<sub>2</sub> |
| | (8,8) | 4.856 | +0.346 | B<sub>2</sub> |

### T2 {#t2}

TBE: A<sub>1</sub> 5.45 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | (4,4) | 5.509 | +0.059 | A<sub>1</sub> |
| | (6,6) | 5.437 | −0.013 | A<sub>1</sub> |
| | **(8,8)** | **5.453** | **+0.003** | A<sub>1</sub> |
| M08-SO | (2,2) | – | – | – |
| | (4,4) | 5.692 | +0.242 | A<sub>1</sub> |
| | **(6,6)** | **5.644** | **+0.194** | A<sub>1</sub> |
| | (8,8) | 5.651 | +0.201 | A<sub>1</sub> |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 5.652 | +0.202 | A<sub>1</sub> |
| | **(6,6)** | **5.616** | **+0.166** | A<sub>1</sub> |
| | (8,8) | 5.628 | +0.178 | A<sub>1</sub> |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (2,2)

(a, b)

![pyrrole, BH\&HLYP (2,2), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/bh_22_19A.svg)**b** 19A · 0.000041\
−0.0585

![pyrrole, BH\&HLYP (2,2), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/bh_22_18A.svg)**a** 18A · 1.999959\
−0.2706

BH\&HLYP, (4,4)

(a, d)

(b, c)

![pyrrole, BH\&HLYP (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/bh_44_20A.svg)**d** 20A · 0.000001\
−0.0245

![pyrrole, BH\&HLYP (4,4), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/bh_44_19A.svg)**c** 19A · 0.000041\
−0.0598

![pyrrole, BH\&HLYP (4,4), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/bh_44_17A.svg)**a** 17A · 1.999999\
−0.3133

![pyrrole, BH\&HLYP (4,4), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/bh_44_18A.svg)**b** 18A · 1.999959\
−0.2755

BH\&HLYP, (6,6)

(a, f)

(b, e)

(c, d)

![pyrrole, BH\&HLYP (6,6), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/bh_66_20A.svg)**f** 20A · 0.000000\
−0.0652

![pyrrole, BH\&HLYP (6,6), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/bh_66_21A.svg)**e** 21A · 0.000003\
−0.0576

![pyrrole, BH\&HLYP (6,6), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/bh_66_19A.svg)**d** 19A · 0.000097\
−0.0796

![pyrrole, BH\&HLYP (6,6), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/bh_66_16A.svg)**a** 16A · 2.000000\
−0.4851

![pyrrole, BH\&HLYP (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/bh_66_17A.svg)**b** 17A · 1.999997\
−0.3438

![pyrrole, BH\&HLYP (6,6), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/bh_66_18A.svg)**c** 18A · 1.999903\
−0.2988

BH\&HLYP, (8,8)

(a, h)

(b, g)

(c, f)

(d, e)

![pyrrole, BH\&HLYP (8,8), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/bh_88_21A.svg)**h** 21A · 0.000000\
−0.0686

![pyrrole, BH\&HLYP (8,8), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/bh_88_22A.svg)**g** 22A · 0.000000\
−0.0621

![pyrrole, BH\&HLYP (8,8), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/bh_88_19A.svg)**f** 19A · 0.000005\
−0.0933

![pyrrole, BH\&HLYP (8,8), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/bh_88_20A.svg)**e** 20A · 0.000123\
−0.0924

![pyrrole, BH\&HLYP (8,8), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/bh_88_14A.svg)**a** 14A · 2.000000\
−0.5291

![pyrrole, BH\&HLYP (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/bh_88_16A.svg)**b** 16A · 2.000000\
−0.5200

![pyrrole, BH\&HLYP (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/bh_88_17A.svg)**c** 17A · 1.999995\
−0.3530

![pyrrole, BH\&HLYP (8,8), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/bh_88_18A.svg)**d** 18A · 1.999877\
−0.3054

M08-SO, (2,2)

(a, b)

![pyrrole, M08-SO (2,2), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/m08_22_19A.svg)**b** 19A · 0.000011\
−0.0766

![pyrrole, M08-SO (2,2), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/m08_22_18A.svg)**a** 18A · 1.999989\
−0.2836

M08-SO, (4,4)

(a, d)

(b, c)

![pyrrole, M08-SO (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/m08_44_20A.svg)**d** 20A · 0.000000\
−0.0447

![pyrrole, M08-SO (4,4), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/m08_44_19A.svg)**c** 19A · 0.000007\
−0.0782

![pyrrole, M08-SO (4,4), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/m08_44_17A.svg)**a** 17A · 2.000000\
−0.3251

![pyrrole, M08-SO (4,4), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/m08_44_18A.svg)**b** 18A · 1.999993\
−0.2898

M08-SO, (6,6)

(a, f)

(b, e)

(c, d)

![pyrrole, M08-SO (6,6), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/m08_66_21A.svg)**f** 21A · 0.000000\
−0.0732

![pyrrole, M08-SO (6,6), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/m08_66_20A.svg)**e** 20A · 0.000000\
−0.0781

![pyrrole, M08-SO (6,6), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/m08_66_19A.svg)**d** 19A · 0.000016\
−0.0965

![pyrrole, M08-SO (6,6), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/m08_66_16A.svg)**a** 16A · 2.000000\
−0.4859

![pyrrole, M08-SO (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/m08_66_17A.svg)**b** 17A · 2.000000\
−0.3559

![pyrrole, M08-SO (6,6), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/m08_66_18A.svg)**c** 18A · 1.999984\
−0.3134

M08-SO, (8,8)

(a, h)

(b, g)

(c, f)

(d, e)

![pyrrole, M08-SO (8,8), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/m08_88_21A.svg)**h** 21A · 0.000000\
−0.0798

![pyrrole, M08-SO (8,8), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/m08_88_22A.svg)**g** 22A · 0.000000\
−0.0685

![pyrrole, M08-SO (8,8), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/m08_88_19A.svg)**f** 19A · 0.000001\
−0.1132

![pyrrole, M08-SO (8,8), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/m08_88_20A.svg)**e** 20A · 0.000020\
−0.1086

![pyrrole, M08-SO (8,8), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/m08_88_14A.svg)**a** 14A · 2.000000\
−0.5269

![pyrrole, M08-SO (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/m08_88_15A.svg)**b** 15A · 2.000000\
−0.5232

![pyrrole, M08-SO (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/m08_88_17A.svg)**c** 17A · 1.999999\
−0.3654

![pyrrole, M08-SO (8,8), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/m08_88_18A.svg)**d** 18A · 1.999980\
−0.3196

ωB97X, (2,2)

(a, b)

![pyrrole, ωB97X (2,2), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/wb_22_19A.svg)**b** 19A · 0.000037\
−0.1018

![pyrrole, ωB97X (2,2), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/wb_22_18A.svg)**a** 18A · 1.999963\
−0.3182

ωB97X, (4,4)

(a, d)

(b, c)

![pyrrole, ωB97X (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/wb_44_20A.svg)**d** 20A · 0.000001\
−0.0673

![pyrrole, ωB97X (4,4), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/wb_44_19A.svg)**c** 19A · 0.000025\
−0.1030

![pyrrole, ωB97X (4,4), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/wb_44_17A.svg)**a** 17A · 1.999999\
−0.3561

![pyrrole, ωB97X (4,4), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/wb_44_18A.svg)**b** 18A · 1.999975\
−0.3214

ωB97X, (6,6)

(a, f)

(b, e)

(c, d)

![pyrrole, ωB97X (6,6), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/wb_66_21A.svg)**f** 21A · 0.000000\
−0.0794

![pyrrole, ωB97X (6,6), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/wb_66_20A.svg)**e** 20A · 0.000001\
−0.1059

![pyrrole, ωB97X (6,6), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/wb_66_19A.svg)**d** 19A · 0.000043\
−0.1252

![pyrrole, ωB97X (6,6), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/wb_66_16A.svg)**a** 16A · 2.000000\
−0.5193

![pyrrole, ωB97X (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/wb_66_17A.svg)**b** 17A · 1.999999\
−0.3918

![pyrrole, ωB97X (6,6), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/wb_66_18A.svg)**c** 18A · 1.999957\
−0.3489

ωB97X, (8,8)

(a, h)

(b, g)

(c, f)

(d, e)

![pyrrole, ωB97X (8,8), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/wb_88_22A.svg)**h** 22A · 0.000000\
−0.0831

![pyrrole, ωB97X (8,8), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/wb_88_21A.svg)**g** 21A · 0.000000\
−0.0866

![pyrrole, ωB97X (8,8), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/wb_88_19A.svg)**f** 19A · 0.000002\
−0.1444

![pyrrole, ωB97X (8,8), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/wb_88_20A.svg)**e** 20A · 0.000049\
−0.1380

![pyrrole, ωB97X (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/wb_88_15A.svg)**a** 15A · 2.000000\
−0.5557

![pyrrole, ωB97X (8,8), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/wb_88_14A.svg)**b** 14A · 2.000000\
−0.5629

![pyrrole, ωB97X (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/wb_88_17A.svg)**c** 17A · 1.999998\
−0.4016

![pyrrole, ωB97X (8,8), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrrole/wb_88_18A.svg)**d** 18A · 1.999951\
−0.3560

[← pyrimidine](https://reksstudio.github.io/v2/main/results/quest/quest3-pyrimidine/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-pyrrole) · [tetrazine →](https://reksstudio.github.io/v2/main/results/quest/quest3-tetrazine/index.md)
