# thiopropynal — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest3-thiopropynal/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# thiopropynal

QUEST3: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](https://reksstudio.github.io/v2/main/results/quest/quest3-thiopropynal/index.md#s1) · [T1](https://reksstudio.github.io/v2/main/results/quest/quest3-thiopropynal/index.md#t1) · [Orbitals](https://reksstudio.github.io/v2/main/results/quest/quest3-thiopropynal/index.md#orbitals)

![thiopropynal: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_thiopropynal.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: A′′ 2.03 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **2.218** | **+0.188** | A′′ |
| | (6,6) | 4.904 | +2.874 | A′′ |
| | (8,8) | 4.695 | +2.665 | A′′ |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **2.457** | **+0.426** | A′′ |
| | (6,6) | – | – | – |
| | (8,8) | 4.939 | +2.909 | A′′ |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **2.267** | **+0.237** | A′′ |
| | (6,6) | – | – | – |
| | (8,8) | 4.812 | +2.782 | A′′ |

### T1 {#t1}

TBE: A′′ 1.80 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **1.843** | **+0.043** | A′′ |
| | (6,6) | 4.713 | +2.913 | A′′ |
| | (8,8) | 4.510 | +2.710 | A′′ |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **2.075** | **+0.275** | A′′ |
| | (6,6) | – | – | – |
| | (8,8) | 4.618 | +2.818 | A′′ |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **1.893** | **+0.093** | A′′ |
| | (6,6) | – | – | – |
| | (8,8) | 4.583 | +2.783 | A′′ |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (4,4)

(a, d)

![thiopropynal, BH\&HLYP (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/bh_44m_20A.svg)**d** 20A · 0.000000\
−0.1058

![thiopropynal, BH\&HLYP (4,4), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/bh_44m_17A.svg)**a** 17A · 2.000000\
−0.3534

(b, c)

![thiopropynal, BH\&HLYP (4,4), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/bh_44m_19A.svg)**c** 19A · 0.000000\
−0.2375

![thiopropynal, BH\&HLYP (4,4), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/bh_44m_18A.svg)**b** 18A · 2.000000\
−0.3253

BH\&HLYP, (6,6)

(a, f)

![thiopropynal, BH\&HLYP (6,6), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/bh_66_21A.svg)**f** 21A · 0.000000\
−0.0689

![thiopropynal, BH\&HLYP (6,6), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/bh_66_15A.svg)**a** 15A · 2.000000\
−0.4358

(b, e)

![thiopropynal, BH\&HLYP (6,6), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/bh_66_20A.svg)**e** 20A · 0.000123\
−0.1086

![thiopropynal, BH\&HLYP (6,6), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/bh_66_16A.svg)**b** 16A · 1.999877\
−0.3827

(c, d)

![thiopropynal, BH\&HLYP (6,6), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/bh_66_19A.svg)**d** 19A · 0.000734\
−0.1987

![thiopropynal, BH\&HLYP (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/bh_66_17A.svg)**c** 17A · 1.999266\
−0.3553

BH\&HLYP, (8,8)

(a, h)

![thiopropynal, BH\&HLYP (8,8), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/bh_88_21A.svg)**h** 21A · 0.000000\
−0.1208

![thiopropynal, BH\&HLYP (8,8), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/bh_88_13A.svg)**a** 13A · 2.000000\
−0.5403

(b, g)

![thiopropynal, BH\&HLYP (8,8), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/bh_88_22A.svg)**g** 22A · 0.000000\
−0.0790

![thiopropynal, BH\&HLYP (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/bh_88_16A.svg)**b** 16A · 2.000000\
−0.4489

(c, f)

![thiopropynal, BH\&HLYP (8,8), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/bh_88_20A.svg)**f** 20A · 0.000000\
−0.1276

![thiopropynal, BH\&HLYP (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/bh_88_15A.svg)**c** 15A · 2.000000\
−0.4608

(d, e)

![thiopropynal, BH\&HLYP (8,8), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/bh_88_19A.svg)**e** 19A · 0.000844\
−0.2199

![thiopropynal, BH\&HLYP (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/bh_88_17A.svg)**d** 17A · 1.999156\
−0.3600

M08-SO, (4,4)

(a, d)

![thiopropynal, M08-SO (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/m08_44m_20A.svg)**d** 20A · 0.000000\
−0.1143

![thiopropynal, M08-SO (4,4), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/m08_44m_17A.svg)**a** 17A · 2.000000\
−0.3596

(b, c)

![thiopropynal, M08-SO (4,4), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/m08_44m_19A.svg)**c** 19A · 0.000000\
−0.2438

![thiopropynal, M08-SO (4,4), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/m08_44m_18A.svg)**b** 18A · 2.000000\
−0.3343

M08-SO, (8,8)

(a, h)

![thiopropynal, M08-SO (8,8), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/m08_88_21A.svg)**h** 21A · 0.000000\
−0.1321

![thiopropynal, M08-SO (8,8), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/m08_88_13A.svg)**a** 13A · 2.000000\
−0.5424

(b, g)

![thiopropynal, M08-SO (8,8), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/m08_88_22A.svg)**g** 22A · 0.000000\
−0.0965

![thiopropynal, M08-SO (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/m08_88_16A.svg)**b** 16A · 2.000000\
−0.4601

(c, f)

![thiopropynal, M08-SO (8,8), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/m08_88_20A.svg)**f** 20A · 0.000000\
−0.1389

![thiopropynal, M08-SO (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/m08_88_15A.svg)**c** 15A · 2.000000\
−0.4611

(d, e)

![thiopropynal, M08-SO (8,8), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/m08_88_19A.svg)**e** 19A · 0.000245\
−0.2291

![thiopropynal, M08-SO (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/m08_88_17A.svg)**d** 17A · 1.999755\
−0.3677

ωB97X, (4,4)

(a, d)

![thiopropynal, ωB97X (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/wb_44m_20A.svg)**d** 20A · 0.000000\
−0.1466

![thiopropynal, ωB97X (4,4), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/wb_44m_17A.svg)**a** 17A · 2.000000\
−0.4016

(b, c)

![thiopropynal, ωB97X (4,4), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/wb_44m_19A.svg)**c** 19A · 0.000000\
−0.2807

![thiopropynal, ωB97X (4,4), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/wb_44m_18A.svg)**b** 18A · 2.000000\
−0.3708

ωB97X, (8,8)

(a, h)

![thiopropynal, ωB97X (8,8), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/wb_88_20A.svg)**h** 20A · 0.000000\
−0.1567

![thiopropynal, ωB97X (8,8), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/wb_88_13A.svg)**a** 13A · 2.000000\
−0.5823

(b, g)

![thiopropynal, ωB97X (8,8), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/wb_88_22A.svg)**g** 22A · 0.000000\
−0.1202

![thiopropynal, ωB97X (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/wb_88_15A.svg)**b** 15A · 2.000000\
−0.5006

(c, f)

![thiopropynal, ωB97X (8,8), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/wb_88_21A.svg)**f** 21A · 0.000000\
−0.1566

![thiopropynal, ωB97X (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/wb_88_16A.svg)**c** 16A · 2.000000\
−0.4962

(d, e)

![thiopropynal, ωB97X (8,8), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/wb_88_19A.svg)**e** 19A · 0.000654\
−0.2641

![thiopropynal, ωB97X (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiopropynal/wb_88_17A.svg)**d** 17A · 1.999346\
−0.4063

[← thiophene](https://reksstudio.github.io/v2/main/results/quest/quest3-thiophene/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-thiopropynal) · [triazine →](https://reksstudio.github.io/v2/main/results/quest/quest3-triazine/index.md)
