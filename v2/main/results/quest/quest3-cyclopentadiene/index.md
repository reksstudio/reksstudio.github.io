# cyclopentadiene — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest3-cyclopentadiene/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# cyclopentadiene

QUEST3: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](#s1) · [S2](#s2) · [T1](#t1) · [T2](#t2) · [Orbitals](#orbitals)

![cyclopentadiene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_cyclopentadiene.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: B<sub>2</sub> 5.54 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 5.282 | −0.258 | B<sub>2</sub> |
| | (4,4) | 5.388 | −0.152 | B<sub>2</sub> |
| | **(6,6)** | **5.505** | **−0.035** | B<sub>2</sub> |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | 4.975 | −0.565 | B<sub>2</sub> |
| | (4,4) | 5.105 | −0.435 | B<sub>2</sub> |
| | **(6,6)** | **5.162** | **−0.378** | B<sub>2</sub> |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | 5.196 | −0.344 | B<sub>2</sub> |
| | (4,4) | 5.329 | −0.211 | B<sub>2</sub> |
| | **(6,6)** | **5.408** | **−0.132** | B<sub>2</sub> |
| | (8,8) | – | – | – |

### S2 {#s2}

TBE: A<sub>1</sub> 6.52 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 9.169 | +2.649 | A<sub>1</sub> |
| | **(4,4)** | **6.215** | **−0.305** | A<sub>1</sub> |
| | (6,6) | 6.201 | −0.319 | A<sub>1</sub> |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | 8.939 | +2.419 | A<sub>1</sub> |
| | **(4,4)** | **6.171** | **−0.349** | A<sub>1</sub> |
| | (6,6) | 6.138 | −0.382 | A<sub>1</sub> |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | 9.158 | +2.638 | A<sub>1</sub> |
| | **(4,4)** | **6.178** | **−0.342** | A<sub>1</sub> |
| | (6,6) | 6.172 | −0.348 | A<sub>1</sub> |
| | (8,8) | – | – | – |

### T1 {#t1}

TBE: B<sub>2</sub> 3.31 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 3.353 | +0.043 | B<sub>2</sub> |
| | (4,4) | 3.262 | −0.048 | B<sub>2</sub> |
| | **(6,6)** | **3.269** | **−0.041** | B<sub>2</sub> |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | 3.546 | +0.236 | B<sub>2</sub> |
| | (4,4) | 3.485 | +0.175 | B<sub>2</sub> |
| | **(6,6)** | **3.452** | **+0.142** | B<sub>2</sub> |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | 3.504 | +0.194 | B<sub>2</sub> |
| | **(4,4)** | **3.411** | **+0.101** | B<sub>2</sub> |
| | (6,6) | 3.413 | +0.103 | B<sub>2</sub> |
| | (8,8) | – | – | – |

### T2 {#t2}

TBE: A<sub>1</sub> 5.11 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **5.002** | **−0.108** | A<sub>1</sub> |
| | (6,6) | 4.981 | −0.129 | A<sub>1</sub> |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **5.110** | **+0.000** | A<sub>1</sub> |
| | (6,6) | 5.085 | −0.025 | A<sub>1</sub> |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 5.065 | −0.045 | A<sub>1</sub> |
| | **(6,6)** | **5.071** | **−0.039** | A<sub>1</sub> |
| | (8,8) | – | – | – |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (2,2)

(a, b)

![cyclopentadiene, BH\&HLYP (2,2), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/bh_22_19A.svg)**b** 19A · 0.000408\
−0.1066

![cyclopentadiene, BH\&HLYP (2,2), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/bh_22_18A.svg)**a** 18A · 1.999592\
−0.2712

BH\&HLYP, (4,4)

(a, d)

![cyclopentadiene, BH\&HLYP (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/bh_44_20A.svg)**d** 20A · 0.000000\
−0.0290

![cyclopentadiene, BH\&HLYP (4,4), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/bh_44_17A.svg)**a** 17A · 2.000000\
−0.3668

(b, c)

![cyclopentadiene, BH\&HLYP (4,4), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/bh_44_19A.svg)**c** 19A · 0.000340\
−0.1109

![cyclopentadiene, BH\&HLYP (4,4), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/bh_44_18A.svg)**b** 18A · 1.999660\
−0.2768

BH\&HLYP, (6,6)

(a, f)

![cyclopentadiene, BH\&HLYP (6,6), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/bh_66_20A.svg)**f** 20A · 0.000000\
−0.0825

![cyclopentadiene, BH\&HLYP (6,6), orbital 11A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/bh_66_11A.svg)**a** 11A · 2.000000\
−0.6261

(b, e)

![cyclopentadiene, BH\&HLYP (6,6), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/bh_66_21A.svg)**e** 21A · 0.000000\
−0.0545

![cyclopentadiene, BH\&HLYP (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/bh_66_17A.svg)**b** 17A · 2.000000\
−0.3896

(c, d)

![cyclopentadiene, BH\&HLYP (6,6), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/bh_66_19A.svg)**d** 19A · 0.000505\
−0.1286

![cyclopentadiene, BH\&HLYP (6,6), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/bh_66_18A.svg)**c** 18A · 1.999495\
−0.2961

M08-SO, (2,2)

(a, b)

![cyclopentadiene, M08-SO (2,2), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/m08_22_19A.svg)**b** 19A · 0.000058\
−0.1265

![cyclopentadiene, M08-SO (2,2), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/m08_22_18A.svg)**a** 18A · 1.999942\
−0.2870

M08-SO, (4,4)

(a, d)

![cyclopentadiene, M08-SO (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/m08_44_20A.svg)**d** 20A · 0.000000\
−0.0501

![cyclopentadiene, M08-SO (4,4), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/m08_44_17A.svg)**a** 17A · 2.000000\
−0.3790

(b, c)

![cyclopentadiene, M08-SO (4,4), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/m08_44_19A.svg)**c** 19A · 0.000039\
−0.1308

![cyclopentadiene, M08-SO (4,4), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/m08_44_18A.svg)**b** 18A · 1.999961\
−0.2925

M08-SO, (6,6)

(a, f)

![cyclopentadiene, M08-SO (6,6), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/m08_66_20A.svg)**f** 20A · 0.000000\
−0.0910

![cyclopentadiene, M08-SO (6,6), orbital 11A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/m08_66_11A.svg)**a** 11A · 2.000000\
−0.6275

(b, e)

![cyclopentadiene, M08-SO (6,6), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/m08_66_21A.svg)**e** 21A · 0.000000\
−0.0750

![cyclopentadiene, M08-SO (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/m08_66_17A.svg)**b** 17A · 2.000000\
−0.4019

(c, d)

![cyclopentadiene, M08-SO (6,6), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/m08_66_19A.svg)**d** 19A · 0.000061\
−0.1463

![cyclopentadiene, M08-SO (6,6), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/m08_66_18A.svg)**c** 18A · 1.999939\
−0.3112

ωB97X, (2,2)

(a, b)

![cyclopentadiene, ωB97X (2,2), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/wb_22_19A.svg)**b** 19A · 0.000162\
−0.1578

![cyclopentadiene, ωB97X (2,2), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/wb_22_18A.svg)**a** 18A · 1.999838\
−0.3232

ωB97X, (4,4)

(a, d)

![cyclopentadiene, ωB97X (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/wb_44_20A.svg)**d** 20A · 0.000000\
−0.0733

![cyclopentadiene, ωB97X (4,4), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/wb_44_17A.svg)**a** 17A · 2.000000\
−0.4128

(b, c)

![cyclopentadiene, ωB97X (4,4), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/wb_44_19A.svg)**c** 19A · 0.000115\
−0.1599

![cyclopentadiene, ωB97X (4,4), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/wb_44_18A.svg)**b** 18A · 1.999885\
−0.3258

ωB97X, (6,6)

(a, f)

![cyclopentadiene, ωB97X (6,6), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/wb_66_21A.svg)**f** 21A · 0.000000\
−0.0988

![cyclopentadiene, ωB97X (6,6), orbital 11A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/wb_66_11A.svg)**a** 11A · 2.000000\
−0.6624

(b, e)

![cyclopentadiene, ωB97X (6,6), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/wb_66_20A.svg)**e** 20A · 0.000000\
−0.1019

![cyclopentadiene, ωB97X (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/wb_66_17A.svg)**b** 17A · 2.000000\
−0.4384

(c, d)

![cyclopentadiene, ωB97X (6,6), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/wb_66_19A.svg)**d** 19A · 0.000166\
−0.1769

![cyclopentadiene, ωB97X (6,6), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyclopentadiene/wb_66_18A.svg)**c** 18A · 1.999834\
−0.3470

[← cyanogen](https://reksstudio.github.io/v2/main/results/quest/quest3-cyanogen/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-cyclopentadiene) · [cyclopropenethione →](https://reksstudio.github.io/v2/main/results/quest/quest3-cyclopropenethione/index.md)
