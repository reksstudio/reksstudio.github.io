# streptocyanine-C3 — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest5-strepto-c3/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# streptocyanine-C3

QUEST5: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](https://reksstudio.github.io/v2/main/results/quest/quest5-strepto-c3/index.md#s1) · [T1](https://reksstudio.github.io/v2/main/results/quest/quest5-strepto-c3/index.md#t1) · [Orbitals](https://reksstudio.github.io/v2/main/results/quest/quest5-strepto-c3/index.md#orbitals)

![streptocyanine-C3: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest5_strepto-c3.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: B<sub>2</sub> 4.82 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | **(2,2)** | **4.941** | **+0.121** | B<sub>2</sub> |
| | (4,4) | 5.145 | +0.325 | B<sub>2</sub> |
| | (6,6) | 5.396 | +0.576 | B<sub>2</sub> |
| | (8,8) | 5.563 | +0.743 | B<sub>2</sub> |
| M08-SO | **(2,2)** | **5.040** | **+0.220** | B<sub>2</sub> |
| | (4,4) | 5.253 | +0.433 | B<sub>2</sub> |
| | (6,6) | 5.467 | +0.647 | B<sub>2</sub> |
| | (8,8) | 5.594 | +0.774 | B<sub>2</sub> |
| ωB97X | **(2,2)** | **5.049** | **+0.229** | B<sub>2</sub> |
| | (4,4) | 5.289 | +0.469 | B<sub>2</sub> |
| | (6,6) | 5.529 | +0.709 | B<sub>2</sub> |
| | (8,8) | 5.682 | +0.862 | B<sub>2</sub> |

### T1 {#t1}

TBE: B<sub>2</sub> 3.44 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 3.166 | −0.274 | B<sub>2</sub> |
| | **(4,4)** | **3.438** | **−0.002** | B<sub>2</sub> |
| | (6,6) | 3.457 | +0.017 | B<sub>2</sub> |
| | (8,8) | 3.571 | +0.131 | B<sub>2</sub> |
| M08-SO | (2,2) | 3.227 | −0.213 | B<sub>2</sub> |
| | **(4,4)** | **3.484** | **+0.044** | B<sub>2</sub> |
| | (6,6) | 3.510 | +0.070 | B<sub>2</sub> |
| | (8,8) | 3.613 | +0.173 | B<sub>2</sub> |
| ωB97X | (2,2) | 3.196 | −0.244 | B<sub>2</sub> |
| | **(4,4)** | **3.469** | **+0.029** | B<sub>2</sub> |
| | (6,6) | 3.500 | +0.060 | B<sub>2</sub> |
| | (8,8) | 3.620 | +0.180 | B<sub>2</sub> |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (2,2)

(a, b)

![streptocyanine-C3, BH\&HLYP (2,2), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/bh_22_20A.svg)**b** 20A · 0.000088\
−0.3062

![streptocyanine-C3, BH\&HLYP (2,2), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/bh_22_19A.svg)**a** 19A · 1.999912\
−0.4768

BH\&HLYP, (4,4)

(a, d)

![streptocyanine-C3, BH\&HLYP (4,4), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/bh_44m_21A.svg)**d** 21A · 0.000000\
−0.2202

![streptocyanine-C3, BH\&HLYP (4,4), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/bh_44m_18A.svg)**a** 18A · 2.000000\
−0.6258

(b, c)

![streptocyanine-C3, BH\&HLYP (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/bh_44m_20A.svg)**c** 20A · 0.000093\
−0.3277

![streptocyanine-C3, BH\&HLYP (4,4), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/bh_44m_19A.svg)**b** 19A · 1.999907\
−0.4762

BH\&HLYP, (6,6)

(a, f)

![streptocyanine-C3, BH\&HLYP (6,6), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/bh_66_22A.svg)**f** 22A · 0.000000\
−0.1504

![streptocyanine-C3, BH\&HLYP (6,6), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/bh_66_15A.svg)**a** 15A · 2.000000\
−0.7055

(b, e)

![streptocyanine-C3, BH\&HLYP (6,6), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/bh_66_20A.svg)**e** 20A · 0.000004\
−0.3318

![streptocyanine-C3, BH\&HLYP (6,6), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/bh_66_18A.svg)**b** 18A · 1.999996\
−0.6404

(c, d)

![streptocyanine-C3, BH\&HLYP (6,6), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/bh_66_21A.svg)**d** 21A · 0.000004\
−0.2698

![streptocyanine-C3, BH\&HLYP (6,6), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/bh_66_19A.svg)**c** 19A · 1.999996\
−0.5011

BH\&HLYP, (8,8)

(a, h)

![streptocyanine-C3, BH\&HLYP (8,8), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/bh_88_22A.svg)**h** 22A · 0.000000\
−0.1982

![streptocyanine-C3, BH\&HLYP (8,8), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/bh_88_14A.svg)**a** 14A · 2.000000\
−0.7728

(b, g)

![streptocyanine-C3, BH\&HLYP (8,8), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/bh_88_23A.svg)**g** 23A · 0.000000\
−0.1602

![streptocyanine-C3, BH\&HLYP (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/bh_88_15A.svg)**b** 15A · 2.000000\
−0.7134

(c, f)

![streptocyanine-C3, BH\&HLYP (8,8), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/bh_88_20A.svg)**f** 20A · 0.000005\
−0.3469

![streptocyanine-C3, BH\&HLYP (8,8), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/bh_88_18A.svg)**c** 18A · 1.999995\
−0.6451

(d, e)

![streptocyanine-C3, BH\&HLYP (8,8), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/bh_88_21A.svg)**e** 21A · 0.000006\
−0.3092

![streptocyanine-C3, BH\&HLYP (8,8), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/bh_88_19A.svg)**d** 19A · 1.999994\
−0.5060

M08-SO, (2,2)

(a, b)

![streptocyanine-C3, M08-SO (2,2), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/m08_22_20A.svg)**b** 20A · 0.000114\
−0.3162

![streptocyanine-C3, M08-SO (2,2), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/m08_22_19A.svg)**a** 19A · 1.999886\
−0.4868

M08-SO, (4,4)

(a, d)

![streptocyanine-C3, M08-SO (4,4), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/m08_44m_21A.svg)**d** 21A · 0.000000\
−0.2378

![streptocyanine-C3, M08-SO (4,4), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/m08_44m_18A.svg)**a** 18A · 2.000000\
−0.6366

(b, c)

![streptocyanine-C3, M08-SO (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/m08_44m_20A.svg)**c** 20A · 0.000116\
−0.3372

![streptocyanine-C3, M08-SO (4,4), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/m08_44m_19A.svg)**b** 19A · 1.999884\
−0.4868

M08-SO, (6,6)

(a, f)

![streptocyanine-C3, M08-SO (6,6), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/m08_66_23A.svg)**f** 23A · 0.000000\
−0.1612

![streptocyanine-C3, M08-SO (6,6), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/m08_66_15A.svg)**a** 15A · 2.000000\
−0.7044

(b, e)

![streptocyanine-C3, M08-SO (6,6), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/m08_66_20A.svg)**e** 20A · 0.000001\
−0.3445

![streptocyanine-C3, M08-SO (6,6), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/m08_66_18A.svg)**b** 18A · 1.999999\
−0.6528

(c, d)

![streptocyanine-C3, M08-SO (6,6), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/m08_66_21A.svg)**d** 21A · 0.000001\
−0.2868

![streptocyanine-C3, M08-SO (6,6), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/m08_66_19A.svg)**c** 19A · 1.999999\
−0.5108

M08-SO, (8,8)

(a, h)

![streptocyanine-C3, M08-SO (8,8), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/m08_88_22A.svg)**h** 22A · 0.000000\
−0.2097

![streptocyanine-C3, M08-SO (8,8), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/m08_88_14A.svg)**a** 14A · 2.000000\
−0.7679

(b, g)

![streptocyanine-C3, M08-SO (8,8), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/m08_88_23A.svg)**g** 23A · 0.000000\
−0.1710

![streptocyanine-C3, M08-SO (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/m08_88_15A.svg)**b** 15A · 2.000000\
−0.7125

(c, f)

![streptocyanine-C3, M08-SO (8,8), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/m08_88_20A.svg)**f** 20A · 0.000001\
−0.3588

![streptocyanine-C3, M08-SO (8,8), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/m08_88_18A.svg)**c** 18A · 1.999999\
−0.6569

(d, e)

![streptocyanine-C3, M08-SO (8,8), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/m08_88_21A.svg)**e** 21A · 0.000002\
−0.3253

![streptocyanine-C3, M08-SO (8,8), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/m08_88_19A.svg)**d** 19A · 1.999998\
−0.5158

ωB97X, (2,2)

(a, b)

![streptocyanine-C3, ωB97X (2,2), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/wb_22_20A.svg)**b** 20A · 0.000108\
−0.3471

![streptocyanine-C3, ωB97X (2,2), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/wb_22_19A.svg)**a** 19A · 1.999892\
−0.5208

ωB97X, (4,4)

(a, d)

![streptocyanine-C3, ωB97X (4,4), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/wb_44m_21A.svg)**d** 21A · 0.000000\
−0.2636

![streptocyanine-C3, ωB97X (4,4), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/wb_44m_18A.svg)**a** 18A · 2.000000\
−0.6674

(b, c)

![streptocyanine-C3, ωB97X (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/wb_44m_20A.svg)**c** 20A · 0.000103\
−0.3676

![streptocyanine-C3, ωB97X (4,4), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/wb_44m_19A.svg)**b** 19A · 1.999897\
−0.5170

ωB97X, (6,6)

(a, f)

![streptocyanine-C3, ωB97X (6,6), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/wb_66_22A.svg)**f** 22A · 0.000000\
−0.1630

![streptocyanine-C3, ωB97X (6,6), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/wb_66_15A.svg)**a** 15A · 2.000000\
−0.7391

(b, e)

![streptocyanine-C3, ωB97X (6,6), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/wb_66_20A.svg)**e** 20A · 0.000001\
−0.3758

![streptocyanine-C3, ωB97X (6,6), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/wb_66_18A.svg)**b** 18A · 1.999999\
−0.6848

(c, d)

![streptocyanine-C3, ωB97X (6,6), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/wb_66_21A.svg)**d** 21A · 0.000002\
−0.3174

![streptocyanine-C3, ωB97X (6,6), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/wb_66_19A.svg)**c** 19A · 1.999998\
−0.5452

ωB97X, (8,8)

(a, h)

![streptocyanine-C3, ωB97X (8,8), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/wb_88_22A.svg)**h** 22A · 0.000000\
−0.2189

![streptocyanine-C3, ωB97X (8,8), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/wb_88_14A.svg)**a** 14A · 2.000000\
−0.8033

(b, g)

![streptocyanine-C3, ωB97X (8,8), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/wb_88_23A.svg)**g** 23A · 0.000000\
−0.1750

![streptocyanine-C3, ωB97X (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/wb_88_15A.svg)**b** 15A · 2.000000\
−0.7466

(c, f)

![streptocyanine-C3, ωB97X (8,8), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/wb_88_20A.svg)**f** 20A · 0.000001\
−0.3896

![streptocyanine-C3, ωB97X (8,8), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/wb_88_18A.svg)**c** 18A · 1.999999\
−0.6884

(d, e)

![streptocyanine-C3, ωB97X (8,8), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/wb_88_21A.svg)**e** 21A · 0.000002\
−0.3565

![streptocyanine-C3, ωB97X (8,8), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c3/wb_88_19A.svg)**d** 19A · 1.999998\
−0.5493

[← octatetraene](https://reksstudio.github.io/v2/main/results/quest/quest5-octatetraene/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-strepto-c3) · [streptocyanine-C5 →](https://reksstudio.github.io/v2/main/results/quest/quest5-strepto-c5/index.md)
