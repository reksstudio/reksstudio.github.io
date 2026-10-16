# nitrodimethylaniline — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest6-nitrodimethylaniline/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# nitrodimethylaniline

QUEST6: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](https://reksstudio.github.io/v2/main/results/quest/quest6-nitrodimethylaniline/index.md#s1) · [Orbitals](https://reksstudio.github.io/v2/main/results/quest/quest6-nitrodimethylaniline/index.md#orbitals)

![nitrodimethylaniline: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest6_nitrodimethylaniline.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: A<sub>1</sub> 4.14 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 4.089 | −0.051 | A<sub>1</sub> |
| | **(4,4)** | **4.162** | **+0.021** | A<sub>1</sub> |
| | (6,6) | – | – | – |
| | (8,8) | 3.956 | −0.184 | A<sub>1</sub> |
| M08-SO | **(2,2)** | **4.149** | **+0.009** | A<sub>1</sub> |
| | (4,4) | 4.154 | +0.014 | A<sub>1</sub> |
| | (6,6) | – | – | – |
| | (8,8) | 4.019 | −0.120 | A<sub>1</sub> |
| ωB97X | (2,2) | 4.437 | +0.297 | A<sub>1</sub> |
| | (4,4) | 4.386 | +0.245 | A<sub>1</sub> |
| | (6,6) | – | – | – |
| | **(8,8)** | **4.180** | **+0.040** | A<sub>1</sub> |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (2,2)

(a, b)

![nitrodimethylaniline, BH\&HLYP (2,2), orbital 45A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/bh_22_45A.svg)**b** 45A · 0.000004\
−0.1194

![nitrodimethylaniline, BH\&HLYP (2,2), orbital 44A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/bh_22_44A.svg)**a** 44A · 1.999996\
−0.2768

BH\&HLYP, (4,4)

(a, d)

![nitrodimethylaniline, BH\&HLYP (4,4), orbital 46A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/bh_44m_46A.svg)**d** 46A · 0.000119\
−0.1150

![nitrodimethylaniline, BH\&HLYP (4,4), orbital 43A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/bh_44m_43A.svg)**a** 43A · 1.999881\
−0.3292

(b, c)

![nitrodimethylaniline, BH\&HLYP (4,4), orbital 45A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/bh_44m_45A.svg)**c** 45A · 0.000008\
−0.1248

![nitrodimethylaniline, BH\&HLYP (4,4), orbital 44A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/bh_44m_44A.svg)**b** 44A · 1.999992\
−0.2782

BH\&HLYP, (8,8)

(a, h)

![nitrodimethylaniline, BH\&HLYP (8,8), orbital 45A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/bh_88_45A.svg)**h** 45A · 0.000000\
−0.1328

![nitrodimethylaniline, BH\&HLYP (8,8), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/bh_88_39A.svg)**a** 39A · 2.000000\
−0.3835

(b, g)

![nitrodimethylaniline, BH\&HLYP (8,8), orbital 53A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/bh_88_53A.svg)**g** 53A · 0.000000\
0.0274

![nitrodimethylaniline, BH\&HLYP (8,8), orbital 42A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/bh_88_42A.svg)**b** 42A · 2.000000\
−0.3479

(c, f)

![nitrodimethylaniline, BH\&HLYP (8,8), orbital 46A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/bh_88_46A.svg)**f** 46A · 0.000000\
−0.0886

![nitrodimethylaniline, BH\&HLYP (8,8), orbital 43A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/bh_88_43A.svg)**c** 43A · 2.000000\
−0.3320

(d, e)

![nitrodimethylaniline, BH\&HLYP (8,8), orbital 47A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/bh_88_47A.svg)**e** 47A · 0.000000\
−0.0574

![nitrodimethylaniline, BH\&HLYP (8,8), orbital 44A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/bh_88_44A.svg)**d** 44A · 2.000000\
−0.2713

M08-SO, (2,2)

(a, b)

![nitrodimethylaniline, M08-SO (2,2), orbital 45A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/m08_22_45A.svg)**b** 45A · 0.000003\
−0.1332

![nitrodimethylaniline, M08-SO (2,2), orbital 44A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/m08_22_44A.svg)**a** 44A · 1.999997\
−0.2885

M08-SO, (4,4)

(a, d)

![nitrodimethylaniline, M08-SO (4,4), orbital 46A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/m08_44_46A.svg)**d** 46A · 0.000011\
−0.1113

![nitrodimethylaniline, M08-SO (4,4), orbital 43A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/m08_44_43A.svg)**a** 43A · 1.999989\
−0.3377

(b, c)

![nitrodimethylaniline, M08-SO (4,4), orbital 45A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/m08_44_45A.svg)**c** 45A · 0.000004\
−0.1326

![nitrodimethylaniline, M08-SO (4,4), orbital 44A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/m08_44_44A.svg)**b** 44A · 1.999996\
−0.2892

M08-SO, (8,8)

(a, h)

![nitrodimethylaniline, M08-SO (8,8), orbital 45A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/m08_88_45A.svg)**h** 45A · 0.000000\
−0.1477

![nitrodimethylaniline, M08-SO (8,8), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/m08_88_39A.svg)**a** 39A · 2.000000\
−0.3979

(b, g)

![nitrodimethylaniline, M08-SO (8,8), orbital 59A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/m08_88_59A.svg)**g** 59A · 0.000000\
0.0262

![nitrodimethylaniline, M08-SO (8,8), orbital 42A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/m08_88_42A.svg)**b** 42A · 2.000000\
−0.3615

(c, f)

![nitrodimethylaniline, M08-SO (8,8), orbital 46A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/m08_88_46A.svg)**f** 46A · 0.000000\
−0.1069

![nitrodimethylaniline, M08-SO (8,8), orbital 43A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/m08_88_43A.svg)**c** 43A · 2.000000\
−0.3465

(d, e)

![nitrodimethylaniline, M08-SO (8,8), orbital 47A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/m08_88_47A.svg)**e** 47A · 0.000000\
−0.0722

![nitrodimethylaniline, M08-SO (8,8), orbital 44A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/m08_88_44A.svg)**d** 44A · 2.000000\
−0.2832

ωB97X, (2,2)

(a, b)

![nitrodimethylaniline, ωB97X (2,2), orbital 45A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/wb_22_45A.svg)**b** 45A · 0.000004\
−0.1557

![nitrodimethylaniline, ωB97X (2,2), orbital 44A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/wb_22_44A.svg)**a** 44A · 1.999996\
−0.3191

ωB97X, (4,4)

(a, d)

![nitrodimethylaniline, ωB97X (4,4), orbital 46A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/wb_44_46A.svg)**d** 46A · 0.000051\
−0.1385

![nitrodimethylaniline, ωB97X (4,4), orbital 42A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/wb_44_42A.svg)**a** 42A · 1.999949\
−0.3719

(b, c)

![nitrodimethylaniline, ωB97X (4,4), orbital 45A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/wb_44_45A.svg)**c** 45A · 0.000009\
−0.1538

![nitrodimethylaniline, ωB97X (4,4), orbital 44A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/wb_44_44A.svg)**b** 44A · 1.999991\
−0.3199

ωB97X, (8,8)

(a, h)

![nitrodimethylaniline, ωB97X (8,8), orbital 45A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/wb_88_45A.svg)**h** 45A · 0.000000\
−0.1778

![nitrodimethylaniline, ωB97X (8,8), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/wb_88_39A.svg)**a** 39A · 2.000000\
−0.4324

(b, g)

![nitrodimethylaniline, ωB97X (8,8), orbital 47A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/wb_88_47A.svg)**g** 47A · 0.000000\
−0.1014

![nitrodimethylaniline, ωB97X (8,8), orbital 42A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/wb_88_42A.svg)**b** 42A · 2.000000\
−0.3938

(c, f)

![nitrodimethylaniline, ωB97X (8,8), orbital 46A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/wb_88_46A.svg)**f** 46A · 0.000000\
−0.1418

![nitrodimethylaniline, ωB97X (8,8), orbital 43A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/wb_88_43A.svg)**c** 43A · 2.000000\
−0.3788

(d, e)

![nitrodimethylaniline, ωB97X (8,8), orbital 48A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/wb_88_48A.svg)**e** 48A · 0.000000\
−0.0256

![nitrodimethylaniline, ωB97X (8,8), orbital 44A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrodimethylaniline/wb_88_44A.svg)**d** 44A · 2.000000\
−0.3153

[← nitrobenzene](https://reksstudio.github.io/v2/main/results/quest/quest6-nitrobenzene/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-nitrodimethylaniline) · [NPNO →](https://reksstudio.github.io/v2/main/results/quest/quest6-npno/index.md)
