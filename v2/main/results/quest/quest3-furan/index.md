# furan — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest3-furan/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# furan

QUEST3: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](https://reksstudio.github.io/v2/main/results/quest/quest3-furan/index.md#s1) · [S2](https://reksstudio.github.io/v2/main/results/quest/quest3-furan/index.md#s2) · [T1](https://reksstudio.github.io/v2/main/results/quest/quest3-furan/index.md#t1) · [T2](https://reksstudio.github.io/v2/main/results/quest/quest3-furan/index.md#t2) · [Orbitals](https://reksstudio.github.io/v2/main/results/quest/quest3-furan/index.md#orbitals)

![furan: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_furan.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: A<sub>1</sub> 6.56 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **6.339** | **−0.221** | A<sub>1</sub> |
| | (6,6) | 6.245 | −0.315 | A<sub>1</sub> |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | (4,4) | 6.349 | −0.211 | A<sub>1</sub> |
| | **(6,6)** | **6.249** | **−0.311** | A<sub>1</sub> |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **6.294** | **−0.266** | A<sub>1</sub> |
| | (6,6) | 6.207 | −0.353 | A<sub>1</sub> |
| | (8,8) | – | – | – |

### S2 {#s2}

TBE: B<sub>2</sub> 6.37 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 6.254 | −0.116 | B<sub>2</sub> |
| | **(4,4)** | **6.456** | **+0.086** | B<sub>2</sub> |
| | (6,6) | 6.608 | +0.238 | B<sub>2</sub> |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | 5.970 | −0.400 | B<sub>2</sub> |
| | (4,4) | 6.211 | −0.159 | B<sub>2</sub> |
| | **(6,6)** | **6.280** | **−0.089** | B<sub>2</sub> |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | 6.233 | −0.137 | B<sub>2</sub> |
| | **(4,4)** | **6.470** | **+0.100** | B<sub>2</sub> |
| | (6,6) | 6.557 | +0.187 | B<sub>2</sub> |
| | (8,8) | – | – | – |

### T1 {#t1}

TBE: B<sub>2</sub> 4.20 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | **(2,2)** | **4.212** | **+0.012** | B<sub>2</sub> |
| | (4,4) | 4.288 | +0.088 | B<sub>2</sub> |
| | (6,6) | 4.264 | +0.064 | B<sub>2</sub> |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | 4.395 | +0.195 | B<sub>2</sub> |
| | **(4,4)** | **4.229** | **+0.029** | B<sub>2</sub> |
| | (6,6) | 4.481 | +0.281 | B<sub>2</sub> |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | 4.382 | +0.182 | B<sub>2</sub> |
| | **(4,4)** | **4.359** | **+0.160** | B<sub>2</sub> |
| | (6,6) | 4.489 | +0.289 | B<sub>2</sub> |
| | (8,8) | – | – | – |

### T2 {#t2}

TBE: A<sub>1</sub> 5.46 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **5.404** | **−0.056** | A<sub>1</sub> |
| | (6,6) | 5.367 | −0.093 | A<sub>1</sub> |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | (4,4) | 5.587 | +0.127 | A<sub>1</sub> |
| | **(6,6)** | **5.545** | **+0.085** | A<sub>1</sub> |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 5.538 | +0.078 | A<sub>1</sub> |
| | **(6,6)** | **5.518** | **+0.058** | A<sub>1</sub> |
| | (8,8) | – | – | – |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (2,2)

(a, b)

![furan, BH\&HLYP (2,2), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/bh_22_19A.svg)**b** 19A · 0.000143\
−0.0868

![furan, BH\&HLYP (2,2), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/bh_22_18A.svg)**a** 18A · 1.999857\
−0.2878

BH\&HLYP, (4,4)

(a, d)

![furan, BH\&HLYP (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/bh_44_20A.svg)**d** 20A · 0.000000\
−0.0378

![furan, BH\&HLYP (4,4), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/bh_44_17A.svg)**a** 17A · 2.000000\
−0.3536

(b, c)

![furan, BH\&HLYP (4,4), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/bh_44_19A.svg)**c** 19A · 0.000115\
−0.0897

![furan, BH\&HLYP (4,4), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/bh_44_18A.svg)**b** 18A · 1.999885\
−0.2929

BH\&HLYP, (6,6)

(a, f)

![furan, BH\&HLYP (6,6), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/bh_66_21A.svg)**f** 21A · 0.000000\
−0.0478

![furan, BH\&HLYP (6,6), orbital 11A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/bh_66_11A.svg)**a** 11A · 2.000000\
−0.6689

(b, e)

![furan, BH\&HLYP (6,6), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/bh_66_20A.svg)**e** 20A · 0.000001\
−0.0712

![furan, BH\&HLYP (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/bh_66_17A.svg)**b** 17A · 1.999999\
−0.3854

(c, d)

![furan, BH\&HLYP (6,6), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/bh_66_19A.svg)**d** 19A · 0.000198\
−0.1143

![furan, BH\&HLYP (6,6), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/bh_66_18A.svg)**c** 18A · 1.999802\
−0.3186

M08-SO, (2,2)

(a, b)

![furan, M08-SO (2,2), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/m08_22_19A.svg)**b** 19A · 0.000026\
−0.1050

![furan, M08-SO (2,2), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/m08_22_18A.svg)**a** 18A · 1.999974\
−0.3016

M08-SO, (4,4)

(a, d)

![furan, M08-SO (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/m08_44_20A.svg)**d** 20A · 0.000000\
−0.0585

![furan, M08-SO (4,4), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/m08_44_17A.svg)**a** 17A · 2.000000\
−0.3648

(b, c)

![furan, M08-SO (4,4), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/m08_44_19A.svg)**c** 19A · 0.000016\
−0.1074

![furan, M08-SO (4,4), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/m08_44_18A.svg)**b** 18A · 1.999984\
−0.3073

M08-SO, (6,6)

(a, f)

![furan, M08-SO (6,6), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/m08_66_21A.svg)**f** 21A · 0.000000\
−0.0542

![furan, M08-SO (6,6), orbital 11A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/m08_66_11A.svg)**a** 11A · 2.000000\
−0.6713

(b, e)

![furan, M08-SO (6,6), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/m08_66_20A.svg)**e** 20A · 0.000000\
−0.0912

![furan, M08-SO (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/m08_66_17A.svg)**b** 17A · 2.000000\
−0.3973

(c, d)

![furan, M08-SO (6,6), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/m08_66_19A.svg)**d** 19A · 0.000028\
−0.1307

![furan, M08-SO (6,6), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/m08_66_18A.svg)**c** 18A · 1.999972\
−0.3325

ωB97X, (2,2)

(a, b)

![furan, ωB97X (2,2), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/wb_22_19A.svg)**b** 19A · 0.000067\
−0.1333

![furan, ωB97X (2,2), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/wb_22_18A.svg)**a** 18A · 1.999933\
−0.3378

ωB97X, (4,4)

(a, d)

![furan, ωB97X (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/wb_44_20A.svg)**d** 20A · 0.000000\
−0.0838

![furan, ωB97X (4,4), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/wb_44_17A.svg)**a** 17A · 2.000000\
−0.3965

(b, c)

![furan, ωB97X (4,4), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/wb_44_19A.svg)**c** 19A · 0.000042\
−0.1356

![furan, ωB97X (4,4), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/wb_44_18A.svg)**b** 18A · 1.999958\
−0.3407

ωB97X, (6,6)

(a, f)

![furan, ωB97X (6,6), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/wb_66_21A.svg)**f** 21A · 0.000000\
−0.0582

![furan, ωB97X (6,6), orbital 11A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/wb_66_11A.svg)**a** 11A · 2.000000\
−0.7013

(b, e)

![furan, ωB97X (6,6), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/wb_66_20A.svg)**e** 20A · 0.000000\
−0.1207

![furan, ωB97X (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/wb_66_17A.svg)**b** 17A · 2.000000\
−0.4322

(c, d)

![furan, ωB97X (6,6), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/wb_66_19A.svg)**d** 19A · 0.000063\
−0.1602

![furan, ωB97X (6,6), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_furan/wb_66_18A.svg)**c** 18A · 1.999937\
−0.3685

[← diacetylene](https://reksstudio.github.io/v2/main/results/quest/quest3-diacetylene/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-furan) · [glyoxal →](https://reksstudio.github.io/v2/main/results/quest/quest3-glyoxal/index.md)
