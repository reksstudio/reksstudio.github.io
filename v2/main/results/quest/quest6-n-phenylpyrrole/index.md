# N-phenylpyrrole — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest6-n-phenylpyrrole/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# N-phenylpyrrole

QUEST6: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](https://reksstudio.github.io/v2/main/results/quest/quest6-n-phenylpyrrole/index.md#s1) · [S2](https://reksstudio.github.io/v2/main/results/quest/quest6-n-phenylpyrrole/index.md#s2) · [Orbitals](https://reksstudio.github.io/v2/main/results/quest/quest6-n-phenylpyrrole/index.md#orbitals)

![N-phenylpyrrole: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest6_n-phenylpyrrole.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: B<sub>2</sub> 5.32 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **5.373** | **+0.053** | B<sub>2</sub> |
| | (6,6) | 5.508 | +0.188 | B<sub>2</sub> |
| | (8,8) | 5.378 | +0.059 | B<sub>2</sub> |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **5.304** | **−0.016** | B<sub>2</sub> |
| | (6,6) | 5.378 | +0.058 | B<sub>2</sub> |
| | (8,8) | 5.255 | −0.065 | B<sub>2</sub> |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **5.504** | **+0.184** | B<sub>2</sub> |
| | (6,6) | 5.641 | +0.321 | B<sub>2</sub> |
| | (8,8) | 5.554 | +0.234 | B<sub>2</sub> |

### S2 {#s2}

TBE: A<sub>1</sub> 5.85 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **5.364** | **−0.486** | A<sub>1</sub> |
| | (6,6) | 5.282 | −0.568 | A<sub>1</sub> |
| | (8,8) | 5.198 | −0.652 | A<sub>1</sub> |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **5.826** | **−0.024** | A<sub>1</sub> |
| | (6,6) | 5.087 | −0.763 | A<sub>1</sub> |
| | (8,8) | 5.060 | −0.790 | A<sub>1</sub> |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **5.787** | **−0.063** | A<sub>1</sub> |
| | (6,6) | 5.511 | −0.339 | A<sub>1</sub> |
| | (8,8) | 5.437 | −0.413 | A<sub>1</sub> |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (4,4)

(a, d)

![N-phenylpyrrole, BH\&HLYP (4,4), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/bh_44_40A.svg)**d** 40A · 0.000000\
−0.0653

![N-phenylpyrrole, BH\&HLYP (4,4), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/bh_44_37A.svg)**a** 37A · 2.000000\
−0.2875

(b, c)

![N-phenylpyrrole, BH\&HLYP (4,4), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/bh_44_39A.svg)**c** 39A · 0.000003\
−0.0860

![N-phenylpyrrole, BH\&HLYP (4,4), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/bh_44_38A.svg)**b** 38A · 1.999997\
−0.2679

BH\&HLYP, (6,6)

(a, f)

![N-phenylpyrrole, BH\&HLYP (6,6), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/bh_66_40A.svg)**f** 40A · 0.000077\
−0.0815

![N-phenylpyrrole, BH\&HLYP (6,6), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/bh_66_36A.svg)**a** 36A · 1.999923\
−0.3058

(b, e)

![N-phenylpyrrole, BH\&HLYP (6,6), orbital 41A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/bh_66_41A.svg)**e** 41A · 0.000000\
−0.0427

![N-phenylpyrrole, BH\&HLYP (6,6), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/bh_66_37A.svg)**b** 37A · 2.000000\
−0.2742

(c, d)

![N-phenylpyrrole, BH\&HLYP (6,6), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/bh_66_39A.svg)**d** 39A · 0.000004\
−0.0865

![N-phenylpyrrole, BH\&HLYP (6,6), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/bh_66_38A.svg)**c** 38A · 1.999996\
−0.2709

BH\&HLYP, (8,8)

(a, h)

![N-phenylpyrrole, BH\&HLYP (8,8), orbital 42A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/bh_88_42A.svg)**h** 42A · 0.000000\
−0.0121

![N-phenylpyrrole, BH\&HLYP (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/bh_88_35A.svg)**a** 35A · 2.000000\
−0.3491

(b, g)

![N-phenylpyrrole, BH\&HLYP (8,8), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/bh_88_40A.svg)**g** 40A · 0.000107\
−0.0841

![N-phenylpyrrole, BH\&HLYP (8,8), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/bh_88_36A.svg)**b** 36A · 1.999893\
−0.3114

(c, f)

![N-phenylpyrrole, BH\&HLYP (8,8), orbital 41A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/bh_88_41A.svg)**f** 41A · 0.000000\
−0.0470

![N-phenylpyrrole, BH\&HLYP (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/bh_88_37A.svg)**c** 37A · 2.000000\
−0.2731

(d, e)

![N-phenylpyrrole, BH\&HLYP (8,8), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/bh_88_39A.svg)**e** 39A · 0.000002\
−0.0878

![N-phenylpyrrole, BH\&HLYP (8,8), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/bh_88_38A.svg)**d** 38A · 1.999998\
−0.2709

M08-SO, (4,4)

(a, d)

![N-phenylpyrrole, M08-SO (4,4), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/m08_44m_39A.svg)**d** 39A · 0.000000\
−0.1052

![N-phenylpyrrole, M08-SO (4,4), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/m08_44m_37A.svg)**a** 37A · 2.000000\
−0.2936

(b, c)

![N-phenylpyrrole, M08-SO (4,4), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/m08_44m_40A.svg)**c** 40A · 0.000000\
−0.1038

![N-phenylpyrrole, M08-SO (4,4), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/m08_44m_38A.svg)**b** 38A · 2.000000\
−0.2933

M08-SO, (6,6)

(a, f)

![N-phenylpyrrole, M08-SO (6,6), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/m08_66_40A.svg)**f** 40A · 0.000011\
−0.1015

![N-phenylpyrrole, M08-SO (6,6), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/m08_66_36A.svg)**a** 36A · 1.999989\
−0.3219

(b, e)

![N-phenylpyrrole, M08-SO (6,6), orbital 41A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/m08_66_41A.svg)**e** 41A · 0.000000\
−0.0588

![N-phenylpyrrole, M08-SO (6,6), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/m08_66_37A.svg)**b** 37A · 2.000000\
−0.2884

(c, d)

![N-phenylpyrrole, M08-SO (6,6), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/m08_66_39A.svg)**d** 39A · 0.000001\
−0.1055

![N-phenylpyrrole, M08-SO (6,6), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/m08_66_38A.svg)**c** 38A · 1.999999\
−0.2867

M08-SO, (8,8)

(a, h)

![N-phenylpyrrole, M08-SO (8,8), orbital 43A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/m08_88_43A.svg)**h** 43A · 0.000000\
−0.0311

![N-phenylpyrrole, M08-SO (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/m08_88_35A.svg)**a** 35A · 2.000000\
−0.3647

(b, g)

![N-phenylpyrrole, M08-SO (8,8), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/m08_88_40A.svg)**g** 40A · 0.000015\
−0.1032

![N-phenylpyrrole, M08-SO (8,8), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/m08_88_36A.svg)**b** 36A · 1.999985\
−0.3278

(c, f)

![N-phenylpyrrole, M08-SO (8,8), orbital 41A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/m08_88_41A.svg)**f** 41A · 0.000000\
−0.0646

![N-phenylpyrrole, M08-SO (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/m08_88_37A.svg)**c** 37A · 2.000000\
−0.2884

(d, e)

![N-phenylpyrrole, M08-SO (8,8), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/m08_88_39A.svg)**e** 39A · 0.000001\
−0.1068

![N-phenylpyrrole, M08-SO (8,8), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/m08_88_38A.svg)**d** 38A · 1.999999\
−0.2866

ωB97X, (4,4)

(a, d)

![N-phenylpyrrole, ωB97X (4,4), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/wb_44m_39A.svg)**d** 39A · 0.000000\
−0.1295

![N-phenylpyrrole, ωB97X (4,4), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/wb_44m_37A.svg)**a** 37A · 2.000000\
−0.3283

(b, c)

![N-phenylpyrrole, ωB97X (4,4), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/wb_44m_40A.svg)**c** 40A · 0.000000\
−0.1278

![N-phenylpyrrole, ωB97X (4,4), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/wb_44m_38A.svg)**b** 38A · 2.000000\
−0.3276

ωB97X, (6,6)

(a, f)

![N-phenylpyrrole, ωB97X (6,6), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/wb_66_39A.svg)**f** 39A · 0.000054\
−0.1262

![N-phenylpyrrole, ωB97X (6,6), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/wb_66_36A.svg)**a** 36A · 1.999946\
−0.3556

(b, e)

![N-phenylpyrrole, ωB97X (6,6), orbital 41A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/wb_66_41A.svg)**e** 41A · 0.000000\
−0.0732

![N-phenylpyrrole, ωB97X (6,6), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/wb_66_37A.svg)**b** 37A · 2.000000\
−0.3239

(c, d)

![N-phenylpyrrole, ωB97X (6,6), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/wb_66_40A.svg)**d** 40A · 0.000005\
−0.1250

![N-phenylpyrrole, ωB97X (6,6), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/wb_66_38A.svg)**c** 38A · 1.999995\
−0.3176

ωB97X, (8,8)

(a, h)

![N-phenylpyrrole, ωB97X (8,8), orbital 42A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/wb_88_42A.svg)**h** 42A · 0.000000\
−0.0474

![N-phenylpyrrole, ωB97X (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/wb_88_35A.svg)**a** 35A · 2.000000\
−0.3978

(b, g)

![N-phenylpyrrole, ωB97X (8,8), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/wb_88_39A.svg)**g** 39A · 0.000065\
−0.1293

![N-phenylpyrrole, ωB97X (8,8), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/wb_88_36A.svg)**b** 36A · 1.999935\
−0.3621

(c, f)

![N-phenylpyrrole, ωB97X (8,8), orbital 41A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/wb_88_41A.svg)**f** 41A · 0.000000\
−0.0773

![N-phenylpyrrole, ωB97X (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/wb_88_37A.svg)**c** 37A · 2.000000\
−0.3210

(d, e)

![N-phenylpyrrole, ωB97X (8,8), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/wb_88_40A.svg)**e** 40A · 0.000002\
−0.1263

![N-phenylpyrrole, ωB97X (8,8), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_n-phenylpyrrole/wb_88_38A.svg)**d** 38A · 1.999998\
−0.3154

[← DMABN](https://reksstudio.github.io/v2/main/results/quest/quest6-dmabn/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-n-phenylpyrrole) · [nitroaniline →](https://reksstudio.github.io/v2/main/results/quest/quest6-nitroaniline/index.md)
