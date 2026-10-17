# NPNO — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest6-npno/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# NPNO

QUEST6: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](#s1) · [Orbitals](#orbitals)

![NPNO: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest6_npno.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: A<sub>1</sub> 4.10 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 3.873 | −0.227 | A<sub>1</sub> |
| | **(4,4)** | **3.964** | **−0.136** | A<sub>1</sub> |
| | (6,6) | 3.892 | −0.208 | A<sub>1</sub> |
| | (8,8) | 3.762 | −0.338 | A<sub>1</sub> |
| M08-SO | (2,2) | 3.922 | −0.178 | A<sub>1</sub> |
| | **(4,4)** | **4.008** | **−0.092** | A<sub>1</sub> |
| | (6,6) | 3.854 | −0.246 | A<sub>1</sub> |
| | (8,8) | 3.752 | −0.348 | A<sub>1</sub> |
| ωB97X | (2,2) | 4.156 | +0.056 | A<sub>1</sub> |
| | (4,4) | 4.196 | +0.096 | A<sub>1</sub> |
| | **(6,6)** | **4.087** | **−0.013** | A<sub>1</sub> |
| | (8,8) | 3.967 | −0.133 | A<sub>1</sub> |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (2,2)

(a, b)

![NPNO, BH\&HLYP (2,2), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/bh_22_37A.svg)**b** 37A · 0.000373\
−0.1793

![NPNO, BH\&HLYP (2,2), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/bh_22_36A.svg)**a** 36A · 1.999627\
−0.3221

BH\&HLYP, (4,4)

(a, d)

![NPNO, BH\&HLYP (4,4), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/bh_44_38A.svg)**d** 38A · 0.000093\
−0.1325

![NPNO, BH\&HLYP (4,4), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/bh_44_35A.svg)**a** 35A · 1.999907\
−0.3696

(b, c)

![NPNO, BH\&HLYP (4,4), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/bh_44_37A.svg)**c** 37A · 0.000690\
−0.1760

![NPNO, BH\&HLYP (4,4), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/bh_44_36A.svg)**b** 36A · 1.999310\
−0.3172

BH\&HLYP, (6,6)

(a, f)

![NPNO, BH\&HLYP (6,6), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/bh_66_39A.svg)**f** 39A · 0.000000\
−0.1152

![NPNO, BH\&HLYP (6,6), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/bh_66_33A.svg)**a** 33A · 2.000000\
−0.3888

(b, e)

![NPNO, BH\&HLYP (6,6), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/bh_66_38A.svg)**e** 38A · 0.000000\
−0.1196

![NPNO, BH\&HLYP (6,6), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/bh_66_35A.svg)**b** 35A · 2.000000\
−0.3744

(c, d)

![NPNO, BH\&HLYP (6,6), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/bh_66_37A.svg)**d** 37A · 0.000065\
−0.1848

![NPNO, BH\&HLYP (6,6), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/bh_66_36A.svg)**c** 36A · 1.999935\
−0.3081

BH\&HLYP, (8,8)

(a, h)

![NPNO, BH\&HLYP (8,8), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/bh_88_40A.svg)**h** 40A · 0.000000\
−0.0567

![NPNO, BH\&HLYP (8,8), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/bh_88_30A.svg)**a** 30A · 2.000000\
−0.4550

(b, g)

![NPNO, BH\&HLYP (8,8), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/bh_88_39A.svg)**g** 39A · 0.000000\
−0.1370

![NPNO, BH\&HLYP (8,8), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/bh_88_34A.svg)**b** 34A · 2.000000\
−0.4014

(c, f)

![NPNO, BH\&HLYP (8,8), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/bh_88_38A.svg)**f** 38A · 0.000001\
−0.1443

![NPNO, BH\&HLYP (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/bh_88_35A.svg)**c** 35A · 1.999999\
−0.3874

(d, e)

![NPNO, BH\&HLYP (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/bh_88_37A.svg)**e** 37A · 0.000093\
−0.1934

![NPNO, BH\&HLYP (8,8), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/bh_88_36A.svg)**d** 36A · 1.999907\
−0.3282

M08-SO, (2,2)

(a, b)

![NPNO, M08-SO (2,2), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/m08_22_37A.svg)**b** 37A · 0.000308\
−0.1919

![NPNO, M08-SO (2,2), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/m08_22_36A.svg)**a** 36A · 1.999692\
−0.3319

M08-SO, (4,4)

(a, d)

![NPNO, M08-SO (4,4), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/m08_44_38A.svg)**d** 38A · 0.000013\
−0.1505

![NPNO, M08-SO (4,4), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/m08_44_35A.svg)**a** 35A · 1.999987\
−0.3835

(b, c)

![NPNO, M08-SO (4,4), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/m08_44_37A.svg)**c** 37A · 0.000340\
−0.1893

![NPNO, M08-SO (4,4), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/m08_44_36A.svg)**b** 36A · 1.999660\
−0.3295

M08-SO, (6,6)

(a, f)

![NPNO, M08-SO (6,6), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/m08_66_39A.svg)**f** 39A · 0.000000\
−0.1284

![NPNO, M08-SO (6,6), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/m08_66_33A.svg)**a** 33A · 2.000000\
−0.4008

(b, e)

![NPNO, M08-SO (6,6), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/m08_66_38A.svg)**e** 38A · 0.000000\
−0.1360

![NPNO, M08-SO (6,6), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/m08_66_35A.svg)**b** 35A · 2.000000\
−0.3870

(c, d)

![NPNO, M08-SO (6,6), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/m08_66_37A.svg)**d** 37A · 0.000029\
−0.1977

![NPNO, M08-SO (6,6), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/m08_66_36A.svg)**c** 36A · 1.999971\
−0.3208

M08-SO, (8,8)

(a, h)

![NPNO, M08-SO (8,8), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/m08_88_40A.svg)**h** 40A · 0.000000\
−0.0743

![NPNO, M08-SO (8,8), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/m08_88_30A.svg)**a** 30A · 2.000000\
−0.4681

(b, g)

![NPNO, M08-SO (8,8), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/m08_88_39A.svg)**g** 39A · 0.000000\
−0.1494

![NPNO, M08-SO (8,8), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/m08_88_33A.svg)**b** 33A · 2.000000\
−0.4137

(c, f)

![NPNO, M08-SO (8,8), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/m08_88_38A.svg)**f** 38A · 0.000000\
−0.1607

![NPNO, M08-SO (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/m08_88_35A.svg)**c** 35A · 2.000000\
−0.4005

(d, e)

![NPNO, M08-SO (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/m08_88_37A.svg)**e** 37A · 0.000041\
−0.2062

![NPNO, M08-SO (8,8), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/m08_88_36A.svg)**d** 36A · 1.999959\
−0.3408

ωB97X, (2,2)

(a, b)

![NPNO, ωB97X (2,2), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/wb_22_37A.svg)**b** 37A · 0.000447\
−0.2162

![NPNO, ωB97X (2,2), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/wb_22_36A.svg)**a** 36A · 1.999553\
−0.3592

ωB97X, (4,4)

(a, d)

![NPNO, ωB97X (4,4), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/wb_44_38A.svg)**d** 38A · 0.000058\
−0.1791

![NPNO, ωB97X (4,4), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/wb_44_34A.svg)**a** 34A · 1.999942\
−0.4181

(b, c)

![NPNO, ωB97X (4,4), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/wb_44_37A.svg)**c** 37A · 0.000547\
−0.2112

![NPNO, ωB97X (4,4), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/wb_44_36A.svg)**b** 36A · 1.999453\
−0.3578

ωB97X, (6,6)

(a, f)

![NPNO, ωB97X (6,6), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/wb_66_39A.svg)**f** 39A · 0.000000\
−0.1498

![NPNO, ωB97X (6,6), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/wb_66_33A.svg)**a** 33A · 2.000000\
−0.4307

(b, e)

![NPNO, ωB97X (6,6), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/wb_66_38A.svg)**e** 38A · 0.000000\
−0.1643

![NPNO, ωB97X (6,6), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/wb_66_34A.svg)**b** 34A · 2.000000\
−0.4180

(c, d)

![NPNO, ωB97X (6,6), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/wb_66_37A.svg)**d** 37A · 0.000026\
−0.2224

![NPNO, ωB97X (6,6), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/wb_66_36A.svg)**c** 36A · 1.999974\
−0.3490

ωB97X, (8,8)

(a, h)

![NPNO, ωB97X (8,8), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/wb_88_40A.svg)**h** 40A · 0.000000\
−0.0743

![NPNO, ωB97X (8,8), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/wb_88_30A.svg)**a** 30A · 2.000000\
−0.5005

(b, g)

![NPNO, ωB97X (8,8), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/wb_88_39A.svg)**g** 39A · 0.000000\
−0.1729

![NPNO, ωB97X (8,8), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/wb_88_33A.svg)**b** 33A · 2.000000\
−0.4436

(c, f)

![NPNO, ωB97X (8,8), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/wb_88_38A.svg)**f** 38A · 0.000000\
−0.1891

![NPNO, ωB97X (8,8), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/wb_88_34A.svg)**c** 34A · 2.000000\
−0.4313

(d, e)

![NPNO, ωB97X (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/wb_88_37A.svg)**e** 37A · 0.000070\
−0.2317

![NPNO, ωB97X (8,8), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_npno/wb_88_36A.svg)**d** 36A · 1.999930\
−0.3680

[← nitrodimethylaniline](https://reksstudio.github.io/v2/main/results/quest/quest6-nitrodimethylaniline/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-npno) · [phthalazine →](https://reksstudio.github.io/v2/main/results/quest/quest6-phthalazine/index.md)
