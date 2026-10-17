# nitroaniline — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest6-nitroaniline/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# nitroaniline

QUEST6: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](#s1) · [Orbitals](#orbitals)

![nitroaniline: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest6_nitroaniline.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: A<sub>1</sub> 4.40 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 4.343 | −0.057 | A<sub>1</sub> |
| | **(4,4)** | **4.395** | **−0.005** | A<sub>1</sub> |
| | (6,6) | 4.340 | −0.060 | A<sub>1</sub> |
| | (8,8) | 4.219 | −0.181 | A<sub>1</sub> |
| M08-SO | **(2,2)** | **4.397** | **−0.003** | A<sub>1</sub> |
| | (4,4) | 4.375 | −0.025 | A<sub>1</sub> |
| | (6,6) | 4.289 | −0.111 | A<sub>1</sub> |
| | (8,8) | 4.185 | −0.215 | A<sub>1</sub> |
| ωB97X | (2,2) | 4.661 | +0.261 | A<sub>1</sub> |
| | (4,4) | 4.603 | +0.203 | A<sub>1</sub> |
| | (6,6) | 4.551 | +0.151 | A<sub>1</sub> |
| | **(8,8)** | **4.402** | **+0.002** | A<sub>1</sub> |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (2,2)

(a, b)

![nitroaniline, BH\&HLYP (2,2), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/bh_22_37A.svg)**b** 37A · 0.000007\
−0.1290

![nitroaniline, BH\&HLYP (2,2), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/bh_22_36A.svg)**a** 36A · 1.999993\
−0.2918

BH\&HLYP, (4,4)

(a, d)

![nitroaniline, BH\&HLYP (4,4), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/bh_44m_38A.svg)**d** 38A · 0.000123\
−0.1230

![nitroaniline, BH\&HLYP (4,4), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/bh_44m_35A.svg)**a** 35A · 1.999877\
−0.3366

(b, c)

![nitroaniline, BH\&HLYP (4,4), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/bh_44m_37A.svg)**c** 37A · 0.000011\
−0.1343

![nitroaniline, BH\&HLYP (4,4), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/bh_44m_36A.svg)**b** 36A · 1.999989\
−0.2925

BH\&HLYP, (6,6)

(a, f)

![nitroaniline, BH\&HLYP (6,6), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/bh_66_37A.svg)**f** 37A · 0.000035\
−0.1430

![nitroaniline, BH\&HLYP (6,6), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/bh_66_34A.svg)**a** 34A · 1.999965\
−0.3572

(b, e)

![nitroaniline, BH\&HLYP (6,6), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/bh_66_38A.svg)**e** 38A · 0.000003\
−0.0898

![nitroaniline, BH\&HLYP (6,6), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/bh_66_35A.svg)**b** 35A · 1.999997\
−0.3354

(c, d)

![nitroaniline, BH\&HLYP (6,6), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/bh_66_39A.svg)**d** 39A · 0.000000\
−0.0756

![nitroaniline, BH\&HLYP (6,6), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/bh_66_36A.svg)**c** 36A · 2.000000\
−0.2843

BH\&HLYP, (8,8)

(a, h)

![nitroaniline, BH\&HLYP (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/bh_88_37A.svg)**h** 37A · 0.000000\
−0.1479

![nitroaniline, BH\&HLYP (8,8), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/bh_88_31A.svg)**a** 31A · 2.000000\
−0.4186

(b, g)

![nitroaniline, BH\&HLYP (8,8), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/bh_88_39A.svg)**g** 39A · 0.000000\
−0.0730

![nitroaniline, BH\&HLYP (8,8), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/bh_88_34A.svg)**b** 34A · 2.000000\
−0.3607

(c, f)

![nitroaniline, BH\&HLYP (8,8), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/bh_88_38A.svg)**f** 38A · 0.000000\
−0.1113

![nitroaniline, BH\&HLYP (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/bh_88_35A.svg)**c** 35A · 2.000000\
−0.3445

(d, e)

![nitroaniline, BH\&HLYP (8,8), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/bh_88_40A.svg)**e** 40A · 0.000000\
−0.0570

![nitroaniline, BH\&HLYP (8,8), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/bh_88_36A.svg)**d** 36A · 2.000000\
−0.2879

M08-SO, (2,2)

(a, b)

![nitroaniline, M08-SO (2,2), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/m08_22_37A.svg)**b** 37A · 0.000004\
−0.1428

![nitroaniline, M08-SO (2,2), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/m08_22_36A.svg)**a** 36A · 1.999996\
−0.3034

M08-SO, (4,4)

(a, d)

![nitroaniline, M08-SO (4,4), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/m08_44_38A.svg)**d** 38A · 0.000012\
−0.1196

![nitroaniline, M08-SO (4,4), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/m08_44_35A.svg)**a** 35A · 1.999988\
−0.3456

(b, c)

![nitroaniline, M08-SO (4,4), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/m08_44_37A.svg)**c** 37A · 0.000006\
−0.1400

![nitroaniline, M08-SO (4,4), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/m08_44_36A.svg)**b** 36A · 1.999994\
−0.3038

M08-SO, (6,6)

(a, f)

![nitroaniline, M08-SO (6,6), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/m08_66_37A.svg)**f** 37A · 0.000013\
−0.1573

![nitroaniline, M08-SO (6,6), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/m08_66_34A.svg)**a** 34A · 1.999987\
−0.3695

(b, e)

![nitroaniline, M08-SO (6,6), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/m08_66_38A.svg)**e** 38A · 0.000000\
−0.1070

![nitroaniline, M08-SO (6,6), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/m08_66_35A.svg)**b** 35A · 2.000000\
−0.3491

(c, d)

![nitroaniline, M08-SO (6,6), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/m08_66_39A.svg)**d** 39A · 0.000000\
−0.0910

![nitroaniline, M08-SO (6,6), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/m08_66_36A.svg)**c** 36A · 2.000000\
−0.2977

M08-SO, (8,8)

(a, h)

![nitroaniline, M08-SO (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/m08_88_37A.svg)**h** 37A · 0.000000\
−0.1629

![nitroaniline, M08-SO (8,8), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/m08_88_31A.svg)**a** 31A · 2.000000\
−0.4322

(b, g)

![nitroaniline, M08-SO (8,8), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/m08_88_39A.svg)**g** 39A · 0.000000\
−0.0913

![nitroaniline, M08-SO (8,8), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/m08_88_34A.svg)**b** 34A · 2.000000\
−0.3741

(c, f)

![nitroaniline, M08-SO (8,8), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/m08_88_38A.svg)**f** 38A · 0.000000\
−0.1285

![nitroaniline, M08-SO (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/m08_88_35A.svg)**c** 35A · 2.000000\
−0.3582

(d, e)

![nitroaniline, M08-SO (8,8), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/m08_88_40A.svg)**e** 40A · 0.000000\
−0.0710

![nitroaniline, M08-SO (8,8), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/m08_88_36A.svg)**d** 36A · 2.000000\
−0.3012

ωB97X, (2,2)

(a, b)

![nitroaniline, ωB97X (2,2), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/wb_22_37A.svg)**b** 37A · 0.000007\
−0.1655

![nitroaniline, ωB97X (2,2), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/wb_22_36A.svg)**a** 36A · 1.999993\
−0.3352

ωB97X, (4,4)

(a, d)

![nitroaniline, ωB97X (4,4), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/wb_44_38A.svg)**d** 38A · 0.000052\
−0.1470

![nitroaniline, ωB97X (4,4), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/wb_44_34A.svg)**a** 34A · 1.999948\
−0.3798

(b, c)

![nitroaniline, ωB97X (4,4), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/wb_44_37A.svg)**c** 37A · 0.000013\
−0.1616

![nitroaniline, ωB97X (4,4), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/wb_44_36A.svg)**b** 36A · 1.999987\
−0.3354

ωB97X, (6,6)

(a, f)

![nitroaniline, ωB97X (6,6), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/wb_66_37A.svg)**f** 37A · 0.000020\
−0.1829

![nitroaniline, ωB97X (6,6), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/wb_66_33A.svg)**a** 33A · 1.999980\
−0.3975

(b, e)

![nitroaniline, ωB97X (6,6), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/wb_66_38A.svg)**e** 38A · 0.000003\
−0.1325

![nitroaniline, ωB97X (6,6), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/wb_66_35A.svg)**b** 35A · 1.999997\
−0.3804

(c, d)

![nitroaniline, ωB97X (6,6), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/wb_66_39A.svg)**d** 39A · 0.000000\
−0.1073

![nitroaniline, ωB97X (6,6), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/wb_66_36A.svg)**c** 36A · 2.000000\
−0.3293

ωB97X, (8,8)

(a, h)

![nitroaniline, ωB97X (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/wb_88_37A.svg)**h** 37A · 0.000000\
−0.1886

![nitroaniline, ωB97X (8,8), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/wb_88_31A.svg)**a** 31A · 2.000000\
−0.4667

(b, g)

![nitroaniline, ωB97X (8,8), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/wb_88_39A.svg)**g** 39A · 0.000000\
−0.1210

![nitroaniline, ωB97X (8,8), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/wb_88_34A.svg)**b** 34A · 2.000000\
−0.4039

(c, f)

![nitroaniline, ωB97X (8,8), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/wb_88_38A.svg)**f** 38A · 0.000000\
−0.1555

![nitroaniline, ωB97X (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/wb_88_35A.svg)**c** 35A · 2.000000\
−0.3893

(d, e)

![nitroaniline, ωB97X (8,8), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/wb_88_40A.svg)**e** 40A · 0.000000\
−0.0677

![nitroaniline, ωB97X (8,8), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitroaniline/wb_88_36A.svg)**d** 36A · 2.000000\
−0.3319

[← N-phenylpyrrole](https://reksstudio.github.io/v2/main/results/quest/quest6-n-phenylpyrrole/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-nitroaniline) · [nitrobenzene →](https://reksstudio.github.io/v2/main/results/quest/quest6-nitrobenzene/index.md)
