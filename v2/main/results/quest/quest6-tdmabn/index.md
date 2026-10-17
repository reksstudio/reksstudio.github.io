# twisted DMABN — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest6-tdmabn/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# twisted DMABN

QUEST6: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](#s1) · [S2](#s2) · [Orbitals](#orbitals)

![twisted DMABN: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest6_tdmabn.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: A<sub>2</sub> 4.11 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | **(2,2)** | **3.687** | **−0.423** | A<sub>2</sub> |
| | (4,4) | – | – | – |
| | (6,6) | 4.659 | +0.549 | A<sub>2</sub> |
| | (8,8) | 4.871 | +0.761 | A<sub>2</sub> |
| M08-SO | **(2,2)** | **3.832** | **−0.278** | A<sub>2</sub> |
| | (4,4) | – | – | – |
| | (6,6) | 4.680 | +0.570 | A<sub>2</sub> |
| | (8,8) | 4.791 | +0.681 | A<sub>2</sub> |
| ωB97X | **(2,2)** | **3.755** | **−0.355** | A<sub>2</sub> |
| | (4,4) | – | – | – |
| | (6,6) | 4.609 | +0.499 | A<sub>2</sub> |
| | (8,8) | 4.721 | +0.611 | A<sub>2</sub> |

### S2 {#s2}

TBE: B<sub>1</sub> 4.74 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | (4,4) | 6.634 | +1.894 | B<sub>1</sub> |
| | (6,6) | 5.902 | +1.162 | B<sub>1</sub> |
| | **(8,8)** | **5.761** | **+1.021** | B<sub>1</sub> |
| M08-SO | (2,2) | – | – | – |
| | (4,4) | 6.524 | +1.784 | B<sub>1</sub> |
| | (6,6) | 5.772 | +1.032 | B<sub>1</sub> |
| | **(8,8)** | **5.625** | **+0.885** | B<sub>1</sub> |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 6.718 | +1.978 | B<sub>1</sub> |
| | (6,6) | 5.931 | +1.191 | B<sub>1</sub> |
| | **(8,8)** | **5.830** | **+1.090** | B<sub>1</sub> |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, non-planar molecule: slice 0.6 Å above the best plane of the heavy atoms; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (2,2)

(a, b)

![twisted DMABN, BH\&HLYP (2,2), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/bh_22_40A.svg)**b** 40A · 0.000000\
−0.1081

![twisted DMABN, BH\&HLYP (2,2), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/bh_22_37A.svg)**a** 37A · 2.000000\
−0.3237

BH\&HLYP, (4,4)

(a, d)

![twisted DMABN, BH\&HLYP (4,4), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/bh_44m_40A.svg)**d** 40A · 0.000073\
−0.1149

![twisted DMABN, BH\&HLYP (4,4), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/bh_44m_38A.svg)**a** 38A · 1.999927\
−0.3042

(b, c)

![twisted DMABN, BH\&HLYP (4,4), orbital 41A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/bh_44m_41A.svg)**c** 41A · 0.000000\
−0.0791

![twisted DMABN, BH\&HLYP (4,4), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/bh_44m_39A.svg)**b** 39A · 2.000000\
−0.3034

BH\&HLYP, (6,6)

(a, f)

![twisted DMABN, BH\&HLYP (6,6), orbital 41A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/bh_66_41A.svg)**f** 41A · 0.000113\
−0.1107

![twisted DMABN, BH\&HLYP (6,6), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/bh_66_37A.svg)**a** 37A · 1.999887\
−0.3177

(b, e)

![twisted DMABN, BH\&HLYP (6,6), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/bh_66_40A.svg)**e** 40A · 0.000083\
−0.1241

![twisted DMABN, BH\&HLYP (6,6), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/bh_66_38A.svg)**b** 38A · 1.999917\
−0.3100

(c, d)

![twisted DMABN, BH\&HLYP (6,6), orbital 42A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/bh_66_42A.svg)**d** 42A · 0.000000\
−0.0399

![twisted DMABN, BH\&HLYP (6,6), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/bh_66_39A.svg)**c** 39A · 2.000000\
−0.3026

BH\&HLYP, (8,8)

(a, h)

![twisted DMABN, BH\&HLYP (8,8), orbital 42A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/bh_88_42A.svg)**h** 42A · 0.000000\
−0.0550

![twisted DMABN, BH\&HLYP (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/bh_88_35A.svg)**a** 35A · 2.000000\
−0.4024

(b, g)

![twisted DMABN, BH\&HLYP (8,8), orbital 41A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/bh_88_41A.svg)**g** 41A · 0.000130\
−0.1283

![twisted DMABN, BH\&HLYP (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/bh_88_37A.svg)**b** 37A · 1.999870\
−0.3289

(c, f)

![twisted DMABN, BH\&HLYP (8,8), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/bh_88_40A.svg)**f** 40A · 0.000008\
−0.1308

![twisted DMABN, BH\&HLYP (8,8), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/bh_88_38A.svg)**c** 38A · 1.999992\
−0.3284

(d, e)

![twisted DMABN, BH\&HLYP (8,8), orbital 43A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/bh_88_43A.svg)**e** 43A · 0.000000\
−0.0500

![twisted DMABN, BH\&HLYP (8,8), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/bh_88_39A.svg)**d** 39A · 2.000000\
−0.3061

M08-SO, (2,2)

(a, b)

![twisted DMABN, M08-SO (2,2), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/m08_22_40A.svg)**b** 40A · 0.000000\
−0.1222

![twisted DMABN, M08-SO (2,2), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/m08_22_37A.svg)**a** 37A · 2.000000\
−0.3253

M08-SO, (4,4)

(a, d)

![twisted DMABN, M08-SO (4,4), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/m08_44m_40A.svg)**d** 40A · 0.000018\
−0.1344

![twisted DMABN, M08-SO (4,4), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/m08_44m_38A.svg)**a** 38A · 1.999982\
−0.3202

(b, c)

![twisted DMABN, M08-SO (4,4), orbital 41A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/m08_44m_41A.svg)**c** 41A · 0.000000\
−0.0969

![twisted DMABN, M08-SO (4,4), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/m08_44m_39A.svg)**b** 39A · 2.000000\
−0.3128

M08-SO, (6,6)

(a, f)

![twisted DMABN, M08-SO (6,6), orbital 41A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/m08_66_41A.svg)**f** 41A · 0.000016\
−0.1300

![twisted DMABN, M08-SO (6,6), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/m08_66_37A.svg)**a** 37A · 1.999984\
−0.3339

(b, e)

![twisted DMABN, M08-SO (6,6), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/m08_66_40A.svg)**e** 40A · 0.000018\
−0.1415

![twisted DMABN, M08-SO (6,6), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/m08_66_38A.svg)**b** 38A · 1.999982\
−0.3254

(c, d)

![twisted DMABN, M08-SO (6,6), orbital 42A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/m08_66_42A.svg)**d** 42A · 0.000000\
−0.0514

![twisted DMABN, M08-SO (6,6), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/m08_66_39A.svg)**c** 39A · 2.000000\
−0.3101

M08-SO, (8,8)

(a, h)

![twisted DMABN, M08-SO (8,8), orbital 42A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/m08_88_42A.svg)**h** 42A · 0.000000\
−0.0700

![twisted DMABN, M08-SO (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/m08_88_35A.svg)**a** 35A · 2.000000\
−0.4100

(b, g)

![twisted DMABN, M08-SO (8,8), orbital 41A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/m08_88_41A.svg)**g** 41A · 0.000019\
−0.1399

![twisted DMABN, M08-SO (8,8), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/m08_88_38A.svg)**b** 38A · 1.999981\
−0.3440

(c, f)

![twisted DMABN, M08-SO (8,8), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/m08_88_40A.svg)**f** 40A · 0.000001\
−0.1449

![twisted DMABN, M08-SO (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/m08_88_37A.svg)**c** 37A · 1.999999\
−0.3456

(d, e)

![twisted DMABN, M08-SO (8,8), orbital 43A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/m08_88_43A.svg)**e** 43A · 0.000000\
−0.0627

![twisted DMABN, M08-SO (8,8), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/m08_88_39A.svg)**d** 39A · 2.000000\
−0.3157

ωB97X, (2,2)

(a, b)

![twisted DMABN, ωB97X (2,2), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/wb_22_40A.svg)**b** 40A · 0.000000\
−0.1504

![twisted DMABN, ωB97X (2,2), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/wb_22_37A.svg)**a** 37A · 2.000000\
−0.3573

ωB97X, (4,4)

(a, d)

![twisted DMABN, ωB97X (4,4), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/wb_44m_40A.svg)**d** 40A · 0.000062\
−0.1595

![twisted DMABN, ωB97X (4,4), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/wb_44m_38A.svg)**a** 38A · 1.999938\
−0.3536

(b, c)

![twisted DMABN, ωB97X (4,4), orbital 41A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/wb_44m_41A.svg)**c** 41A · 0.000000\
−0.1242

![twisted DMABN, ωB97X (4,4), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/wb_44m_39A.svg)**b** 39A · 2.000000\
−0.3419

ωB97X, (6,6)

(a, f)

![twisted DMABN, ωB97X (6,6), orbital 41A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/wb_66_41A.svg)**f** 41A · 0.000069\
−0.1558

![twisted DMABN, ωB97X (6,6), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/wb_66_37A.svg)**a** 37A · 1.999931\
−0.3665

(b, e)

![twisted DMABN, ωB97X (6,6), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/wb_66_40A.svg)**e** 40A · 0.000064\
−0.1664

![twisted DMABN, ωB97X (6,6), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/wb_66_38A.svg)**b** 38A · 1.999936\
−0.3571

(c, d)

![twisted DMABN, ωB97X (6,6), orbital 42A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/wb_66_42A.svg)**d** 42A · 0.000000\
−0.0561

![twisted DMABN, ωB97X (6,6), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/wb_66_39A.svg)**c** 39A · 2.000000\
−0.3396

ωB97X, (8,8)

(a, h)

![twisted DMABN, ωB97X (8,8), orbital 42A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/wb_88_42A.svg)**h** 42A · 0.000000\
−0.0722

![twisted DMABN, ωB97X (8,8), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/wb_88_36A.svg)**a** 36A · 2.000000\
−0.4230

(b, g)

![twisted DMABN, ωB97X (8,8), orbital 41A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/wb_88_41A.svg)**g** 41A · 0.000075\
−0.1700

![twisted DMABN, ωB97X (8,8), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/wb_88_38A.svg)**b** 38A · 1.999925\
−0.3765

(c, f)

![twisted DMABN, ωB97X (8,8), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/wb_88_40A.svg)**f** 40A · 0.000001\
−0.1704

![twisted DMABN, ωB97X (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/wb_88_37A.svg)**c** 37A · 1.999999\
−0.3939

(d, e)

![twisted DMABN, ωB97X (8,8), orbital 43A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/wb_88_43A.svg)**e** 43A · 0.000000\
−0.0502

![twisted DMABN, ωB97X (8,8), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_tdmabn/wb_88_39A.svg)**d** 39A · 2.000000\
−0.3450

[← quinoxaline](https://reksstudio.github.io/v2/main/results/quest/quest6-quinoxaline/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-tdmabn) · [twisted N-phenylpyrrole →](https://reksstudio.github.io/v2/main/results/quest/quest6-twisted-n-phenylpyrrole/index.md)
