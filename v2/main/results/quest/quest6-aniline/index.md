# aniline — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest6-aniline/>

Psi4 bd0fb43ef, 2026-10-15: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# aniline

QUEST6: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](https://reksstudio.github.io/v2/main/results/quest/quest6-aniline/index.md#s1) · [Orbitals](https://reksstudio.github.io/v2/main/results/quest/quest6-aniline/index.md#orbitals)

![aniline: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest6_aniline.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: A<sub>1</sub> 5.50 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | (4,4) | 5.598 | +0.098 | A<sub>1</sub> |
| | **(6,6)** | **5.514** | **+0.014** | A<sub>1</sub> |
| | (8,8) | 5.625 | +0.125 | A<sub>1</sub> |
| M08-SO | (2,2) | – | – | – |
| | (4,4) | 5.366 | −0.134 | A<sub>1</sub> |
| | (6,6) | 5.279 | −0.221 | A<sub>1</sub> |
| | **(8,8)** | **5.426** | **−0.074** | A<sub>1</sub> |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 5.640 | +0.140 | A<sub>1</sub> |
| | **(6,6)** | **5.582** | **+0.082** | A<sub>1</sub> |
| | (8,8) | 5.690 | +0.190 | A<sub>1</sub> |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (4,4)

(a, d)

(b, c)

![aniline, BH\&HLYP (4,4), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/bh_44_26A.svg)**d** 26A · 0.000091\
−0.0758

![aniline, BH\&HLYP (4,4), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/bh_44_27A.svg)**c** 27A · 0.000032\
−0.0658

![aniline, BH\&HLYP (4,4), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/bh_44_24A.svg)**a** 24A · 1.999909\
−0.2958

![aniline, BH\&HLYP (4,4), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/bh_44_25A.svg)**b** 25A · 1.999968\
−0.2537

BH\&HLYP, (6,6)

(a, f)

(b, e)

(c, d)

![aniline, BH\&HLYP (6,6), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/bh_66_28A.svg)**f** 28A · 0.000000\
−0.0297

![aniline, BH\&HLYP (6,6), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/bh_66_27A.svg)**e** 27A · 0.000100\
−0.0828

![aniline, BH\&HLYP (6,6), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/bh_66_26A.svg)**d** 26A · 0.000055\
−0.1033

![aniline, BH\&HLYP (6,6), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/bh_66_23A.svg)**a** 23A · 2.000000\
−0.3960

![aniline, BH\&HLYP (6,6), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/bh_66_24A.svg)**b** 24A · 1.999900\
−0.3115

![aniline, BH\&HLYP (6,6), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/bh_66_25A.svg)**c** 25A · 1.999945\
−0.2715

BH\&HLYP, (8,8)

(a, h)

(b, g)

(c, f)

(d, e)

![aniline, BH\&HLYP (8,8), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/bh_88_27A.svg)**h** 27A · 0.000000\
−0.0963

![aniline, BH\&HLYP (8,8), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/bh_88_32A.svg)**g** 32A · 0.000000\
0.0326

![aniline, BH\&HLYP (8,8), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/bh_88_28A.svg)**f** 28A · 0.000094\
−0.0848

![aniline, BH\&HLYP (8,8), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/bh_88_26A.svg)**e** 26A · 0.000050\
−0.1324

![aniline, BH\&HLYP (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/bh_88_15A.svg)**a** 15A · 2.000000\
−0.6408

![aniline, BH\&HLYP (8,8), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/bh_88_23A.svg)**b** 23A · 2.000000\
−0.4026

![aniline, BH\&HLYP (8,8), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/bh_88_24A.svg)**c** 24A · 1.999906\
−0.3125

![aniline, BH\&HLYP (8,8), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/bh_88_25A.svg)**d** 25A · 1.999950\
−0.2769

M08-SO, (4,4)

(a, d)

(b, c)

![aniline, M08-SO (4,4), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/m08_44m_26A.svg)**d** 26A · 0.000019\
−0.1110

![aniline, M08-SO (4,4), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/m08_44m_27A.svg)**c** 27A · 0.000010\
−0.0840

![aniline, M08-SO (4,4), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/m08_44m_24A.svg)**a** 24A · 1.999981\
−0.3161

![aniline, M08-SO (4,4), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/m08_44m_25A.svg)**b** 25A · 1.999990\
−0.2702

M08-SO, (6,6)

(a, f)

(b, e)

(c, d)

![aniline, M08-SO (6,6), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/m08_66_28A.svg)**f** 28A · 0.000000\
−0.0452

![aniline, M08-SO (6,6), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/m08_66_27A.svg)**e** 27A · 0.000015\
−0.1031

![aniline, M08-SO (6,6), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/m08_66_26A.svg)**d** 26A · 0.000022\
−0.1214

![aniline, M08-SO (6,6), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/m08_66_23A.svg)**a** 23A · 2.000000\
−0.4097

![aniline, M08-SO (6,6), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/m08_66_24A.svg)**b** 24A · 1.999985\
−0.3286

![aniline, M08-SO (6,6), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/m08_66_25A.svg)**c** 25A · 1.999978\
−0.2873

M08-SO, (8,8)

(a, h)

(b, g)

(c, f)

(d, e)

![aniline, M08-SO (8,8), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/m08_88_28A.svg)**h** 28A · 0.000000\
−0.0714

![aniline, M08-SO (8,8), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/m08_88_32A.svg)**g** 32A · 0.000000\
−0.0033

![aniline, M08-SO (8,8), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/m08_88_27A.svg)**f** 27A · 0.000017\
−0.1148

![aniline, M08-SO (8,8), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/m08_88_26A.svg)**e** 26A · 0.000017\
−0.1551

![aniline, M08-SO (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/m08_88_16A.svg)**a** 16A · 2.000000\
−0.5827

![aniline, M08-SO (8,8), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/m08_88_23A.svg)**b** 23A · 2.000000\
−0.4135

![aniline, M08-SO (8,8), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/m08_88_24A.svg)**c** 24A · 1.999983\
−0.3302

![aniline, M08-SO (8,8), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/m08_88_25A.svg)**d** 25A · 1.999983\
−0.2859

ωB97X, (4,4)

(a, d)

(b, c)

![aniline, ωB97X (4,4), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/wb_44_26A.svg)**d** 26A · 0.000061\
−0.1216

![aniline, ωB97X (4,4), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/wb_44_27A.svg)**c** 27A · 0.000029\
−0.1078

![aniline, ωB97X (4,4), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/wb_44_24A.svg)**a** 24A · 1.999939\
−0.3456

![aniline, ωB97X (4,4), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/wb_44_25A.svg)**b** 25A · 1.999971\
−0.3006

ωB97X, (6,6)

(a, f)

(b, e)

(c, d)

![aniline, ωB97X (6,6), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/wb_66_28A.svg)**f** 28A · 0.000000\
−0.0505

![aniline, ωB97X (6,6), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/wb_66_27A.svg)**e** 27A · 0.000066\
−0.1301

![aniline, ωB97X (6,6), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/wb_66_26A.svg)**d** 26A · 0.000044\
−0.1473

![aniline, ωB97X (6,6), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/wb_66_23A.svg)**a** 23A · 2.000000\
−0.4440

![aniline, ωB97X (6,6), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/wb_66_24A.svg)**b** 24A · 1.999934\
−0.3623

![aniline, ωB97X (6,6), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/wb_66_25A.svg)**c** 25A · 1.999956\
−0.3177

ωB97X, (8,8)

(a, h)

(b, g)

(c, f)

(d, e)

![aniline, ωB97X (8,8), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/wb_88_28A.svg)**h** 28A · 0.000000\
−0.1052

![aniline, ωB97X (8,8), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/wb_88_29A.svg)**g** 29A · 0.000000\
−0.0645

![aniline, ωB97X (8,8), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/wb_88_27A.svg)**f** 27A · 0.000072\
−0.1441

![aniline, ωB97X (8,8), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/wb_88_26A.svg)**e** 26A · 0.000028\
−0.1954

![aniline, ωB97X (8,8), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/wb_88_22A.svg)**a** 22A · 2.000000\
−0.4691

![aniline, ωB97X (8,8), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/wb_88_23A.svg)**b** 23A · 2.000000\
−0.4520

![aniline, ωB97X (8,8), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/wb_88_24A.svg)**c** 24A · 1.999928\
−0.3727

![aniline, ωB97X (8,8), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_aniline/wb_88_25A.svg)**d** 25A · 1.999972\
−0.3246

[← aminobenzonitrile](https://reksstudio.github.io/v2/main/results/quest/quest6-aminobenzonitrile/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-aniline) · [azulene →](https://reksstudio.github.io/v2/main/results/quest/quest6-azulene/index.md)
