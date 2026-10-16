# DMABN — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest6-dmabn/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# DMABN

QUEST6: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](https://reksstudio.github.io/v2/main/results/quest/quest6-dmabn/index.md#s1) · [Orbitals](https://reksstudio.github.io/v2/main/results/quest/quest6-dmabn/index.md#orbitals)

![DMABN: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest6_dmabn.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: A<sub>1</sub> 4.86 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 5.123 | +0.264 | A<sub>1</sub> |
| | (4,4) | 4.978 | +0.118 | A<sub>1</sub> |
| | **(6,6)** | **4.853** | **−0.007** | A<sub>1</sub> |
| | (8,8) | 4.784 | −0.076 | A<sub>1</sub> |
| M08-SO | (2,2) | 4.989 | +0.129 | A<sub>1</sub> |
| | **(4,4)** | **4.869** | **+0.009** | A<sub>1</sub> |
| | (6,6) | 4.739 | −0.121 | A<sub>1</sub> |
| | (8,8) | 4.700 | −0.160 | A<sub>1</sub> |
| ωB97X | (2,2) | 5.293 | +0.433 | A<sub>1</sub> |
| | (4,4) | 5.107 | +0.247 | A<sub>1</sub> |
| | (6,6) | 4.983 | +0.123 | A<sub>1</sub> |
| | **(8,8)** | **4.970** | **+0.110** | A<sub>1</sub> |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (2,2)

(a, b)

![DMABN, BH\&HLYP (2,2), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/bh_22_40A.svg)**b** 40A · 0.000033\
−0.0903

![DMABN, BH\&HLYP (2,2), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/bh_22_39A.svg)**a** 39A · 1.999967\
−0.2607

BH\&HLYP, (4,4)

(a, d)

![DMABN, BH\&HLYP (4,4), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/bh_44m_40A.svg)**d** 40A · 0.000120\
−0.1086

![DMABN, BH\&HLYP (4,4), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/bh_44m_38A.svg)**a** 38A · 1.999880\
−0.3220

(b, c)

![DMABN, BH\&HLYP (4,4), orbital 41A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/bh_44m_41A.svg)**c** 41A · 0.000027\
−0.0981

![DMABN, BH\&HLYP (4,4), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/bh_44m_39A.svg)**b** 39A · 1.999973\
−0.2655

BH\&HLYP, (6,6)

(a, f)

![DMABN, BH\&HLYP (6,6), orbital 41A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/bh_66_41A.svg)**f** 41A · 0.000000\
−0.0966

![DMABN, BH\&HLYP (6,6), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/bh_66_37A.svg)**a** 37A · 2.000000\
−0.3596

(b, e)

![DMABN, BH\&HLYP (6,6), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/bh_66_40A.svg)**e** 40A · 0.000095\
−0.0985

![DMABN, BH\&HLYP (6,6), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/bh_66_38A.svg)**b** 38A · 1.999905\
−0.3193

(c, d)

![DMABN, BH\&HLYP (6,6), orbital 44A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/bh_66_44A.svg)**d** 44A · 0.000000\
0.0039

![DMABN, BH\&HLYP (6,6), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/bh_66_39A.svg)**c** 39A · 2.000000\
−0.2634

BH\&HLYP, (8,8)

(a, h)

![DMABN, BH\&HLYP (8,8), orbital 44A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/bh_88_44A.svg)**h** 44A · 0.000000\
0.0031

![DMABN, BH\&HLYP (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/bh_88_35A.svg)**a** 35A · 2.000000\
−0.4127

(b, g)

![DMABN, BH\&HLYP (8,8), orbital 41A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/bh_88_41A.svg)**g** 41A · 0.000000\
−0.0965

![DMABN, BH\&HLYP (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/bh_88_37A.svg)**b** 37A · 2.000000\
−0.3609

(c, f)

![DMABN, BH\&HLYP (8,8), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/bh_88_40A.svg)**f** 40A · 0.000094\
−0.1007

![DMABN, BH\&HLYP (8,8), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/bh_88_38A.svg)**c** 38A · 1.999906\
−0.3183

(d, e)

![DMABN, BH\&HLYP (8,8), orbital 54A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/bh_88_54A.svg)**e** 54A · 0.000000\
0.0618

![DMABN, BH\&HLYP (8,8), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/bh_88_39A.svg)**d** 39A · 2.000000\
−0.2637

M08-SO, (2,2)

(a, b)

![DMABN, M08-SO (2,2), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/m08_22_40A.svg)**b** 40A · 0.000015\
−0.1061

![DMABN, M08-SO (2,2), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/m08_22_39A.svg)**a** 39A · 1.999985\
−0.2741

M08-SO, (4,4)

(a, d)

![DMABN, M08-SO (4,4), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/m08_44_40A.svg)**d** 40A · 0.000013\
−0.1084

![DMABN, M08-SO (4,4), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/m08_44_38A.svg)**a** 38A · 1.999987\
−0.3317

(b, c)

![DMABN, M08-SO (4,4), orbital 41A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/m08_44_41A.svg)**c** 41A · 0.000015\
−0.1083

![DMABN, M08-SO (4,4), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/m08_44_39A.svg)**b** 39A · 1.999985\
−0.2773

M08-SO, (6,6)

(a, f)

![DMABN, M08-SO (6,6), orbital 41A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/m08_66_41A.svg)**f** 41A · 0.000000\
−0.1142

![DMABN, M08-SO (6,6), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/m08_66_37A.svg)**a** 37A · 2.000000\
−0.3740

(b, e)

![DMABN, M08-SO (6,6), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/m08_66_40A.svg)**e** 40A · 0.000014\
−0.1191

![DMABN, M08-SO (6,6), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/m08_66_38A.svg)**b** 38A · 1.999986\
−0.3353

(c, d)

![DMABN, M08-SO (6,6), orbital 46A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/m08_66_46A.svg)**d** 46A · 0.000000\
−0.0147

![DMABN, M08-SO (6,6), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/m08_66_39A.svg)**c** 39A · 2.000000\
−0.2776

M08-SO, (8,8)

(a, h)

![DMABN, M08-SO (8,8), orbital 44A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/m08_88_44A.svg)**h** 44A · 0.000000\
−0.0291

![DMABN, M08-SO (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/m08_88_35A.svg)**a** 35A · 2.000000\
−0.4276

(b, g)

![DMABN, M08-SO (8,8), orbital 41A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/m08_88_41A.svg)**g** 41A · 0.000000\
−0.1157

![DMABN, M08-SO (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/m08_88_37A.svg)**b** 37A · 2.000000\
−0.3756

(c, f)

![DMABN, M08-SO (8,8), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/m08_88_40A.svg)**f** 40A · 0.000014\
−0.1224

![DMABN, M08-SO (8,8), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/m08_88_38A.svg)**c** 38A · 1.999986\
−0.3351

(d, e)

![DMABN, M08-SO (8,8), orbital 48A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/m08_88_48A.svg)**e** 48A · 0.000000\
−0.0078

![DMABN, M08-SO (8,8), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/m08_88_39A.svg)**d** 39A · 2.000000\
−0.2793

ωB97X, (2,2)

(a, b)

![DMABN, ωB97X (2,2), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/wb_22_40A.svg)**b** 40A · 0.000040\
−0.1316

![DMABN, ωB97X (2,2), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/wb_22_39A.svg)**a** 39A · 1.999960\
−0.3049

ωB97X, (4,4)

(a, d)

![DMABN, ωB97X (4,4), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/wb_44_40A.svg)**d** 40A · 0.000057\
−0.1357

![DMABN, ωB97X (4,4), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/wb_44_38A.svg)**a** 38A · 1.999943\
−0.3667

(b, c)

![DMABN, ωB97X (4,4), orbital 41A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/wb_44_41A.svg)**c** 41A · 0.000040\
−0.1322

![DMABN, ωB97X (4,4), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/wb_44_39A.svg)**b** 39A · 1.999960\
−0.3083

ωB97X, (6,6)

(a, f)

![DMABN, ωB97X (6,6), orbital 41A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/wb_66_41A.svg)**f** 41A · 0.000000\
−0.1381

![DMABN, ωB97X (6,6), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/wb_66_37A.svg)**a** 37A · 2.000000\
−0.4053

(b, e)

![DMABN, ωB97X (6,6), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/wb_66_40A.svg)**e** 40A · 0.000058\
−0.1432

![DMABN, ωB97X (6,6), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/wb_66_38A.svg)**b** 38A · 1.999942\
−0.3675

(c, d)

![DMABN, ωB97X (6,6), orbital 42A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/wb_66_42A.svg)**d** 42A · 0.000000\
−0.0226

![DMABN, ωB97X (6,6), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/wb_66_39A.svg)**c** 39A · 2.000000\
−0.3063

ωB97X, (8,8)

(a, h)

![DMABN, ωB97X (8,8), orbital 42A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/wb_88_42A.svg)**h** 42A · 0.000000\
−0.0497

![DMABN, ωB97X (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/wb_88_35A.svg)**a** 35A · 2.000000\
−0.4632

(b, g)

![DMABN, ωB97X (8,8), orbital 41A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/wb_88_41A.svg)**g** 41A · 0.000000\
−0.1424

![DMABN, ωB97X (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/wb_88_37A.svg)**b** 37A · 2.000000\
−0.4098

(c, f)

![DMABN, ωB97X (8,8), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/wb_88_40A.svg)**f** 40A · 0.000057\
−0.1513

![DMABN, ωB97X (8,8), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/wb_88_38A.svg)**c** 38A · 1.999943\
−0.3717

(d, e)

![DMABN, ωB97X (8,8), orbital 43A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/wb_88_43A.svg)**e** 43A · 0.000000\
−0.0301

![DMABN, ωB97X (8,8), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dmabn/wb_88_39A.svg)**d** 39A · 2.000000\
−0.3106

[← dipeptide](https://reksstudio.github.io/v2/main/results/quest/quest6-dipeptide/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-dmabn) · [N-phenylpyrrole →](https://reksstudio.github.io/v2/main/results/quest/quest6-n-phenylpyrrole/index.md)
