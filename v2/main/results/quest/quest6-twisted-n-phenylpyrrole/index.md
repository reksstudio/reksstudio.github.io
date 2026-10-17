# twisted N-phenylpyrrole — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest6-twisted-n-phenylpyrrole/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# twisted N-phenylpyrrole

QUEST6: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](#s1) · [S2](#s2) · [Orbitals](#orbitals)

![twisted N-phenylpyrrole: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest6_twisted-n-phenylpyrrole.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: B<sub>2</sub> 5.58 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | (4,4) | 6.566 | +0.986 | –<sup>m</sup> |
| | (6,6) | – | – | – |
| | **(8,8)** | **6.059** | **+0.479** | B<sub>2</sub> |
| M08-SO | (2,2) | – | – | – |
| | (4,4) | 6.533 | +0.953 | B<sub>2</sub> |
| | (6,6) | – | – | – |
| | **(8,8)** | **5.749** | **+0.169** | B<sub>2</sub> |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **5.473** | **−0.107** | –<sup>m</sup> |
| | (6,6) | – | – | – |
| | (8,8) | 6.403 | +0.823 | B<sub>2</sub> |

### S2 {#s2}

TBE: A<sub>1</sub> 5.64 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | (4,4) | 6.339 | +0.699 | –<sup>m</sup> |
| | (6,6) | – | – | – |
| | **(8,8)** | **6.000** | **+0.359** | A<sub>1</sub> |
| M08-SO | (2,2) | – | – | – |
| | (4,4) | 5.447 | −0.193 | A<sub>1</sub> |
| | (6,6) | – | – | – |
| | **(8,8)** | **5.691** | **+0.051** | A<sub>1</sub> |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **5.680** | **+0.040** | –<sup>m</sup> |
| | (6,6) | – | – | – |
| | (8,8) | 6.077 | +0.437 | A<sub>1</sub> |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, non-planar molecule: slice 0.6 Å above the best plane of the heavy atoms; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (4,4)

(a, d)

![twisted N-phenylpyrrole, BH\&HLYP (4,4), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/bh_44m_40A.svg)**d** 40A · 0.000000\
−0.0691

![twisted N-phenylpyrrole, BH\&HLYP (4,4), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/bh_44m_35A.svg)**a** 35A · 2.000000\
−0.3086

(b, c)

![twisted N-phenylpyrrole, BH\&HLYP (4,4), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/bh_44m_39A.svg)**c** 39A · 0.000000\
−0.0698

![twisted N-phenylpyrrole, BH\&HLYP (4,4), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/bh_44m_36A.svg)**b** 36A · 2.000000\
−0.3080

BH\&HLYP, (8,8)

(a, h)

![twisted N-phenylpyrrole, BH\&HLYP (8,8), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/bh_88_39A.svg)**h** 39A · 0.000094\
−0.0894

![twisted N-phenylpyrrole, BH\&HLYP (8,8), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/bh_88_36A.svg)**a** 36A · 1.999906\
−0.3003

(b, g)

![twisted N-phenylpyrrole, BH\&HLYP (8,8), orbital 41A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/bh_88_41A.svg)**g** 41A · 0.000015\
−0.0725

![twisted N-phenylpyrrole, BH\&HLYP (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/bh_88_37A.svg)**b** 37A · 1.999985\
−0.2985

(c, f)

![twisted N-phenylpyrrole, BH\&HLYP (8,8), orbital 42A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/bh_88_42A.svg)**f** 42A · 0.000000\
−0.0148

![twisted N-phenylpyrrole, BH\&HLYP (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/bh_88_35A.svg)**c** 35A · 2.000000\
−0.3130

(d, e)

![twisted N-phenylpyrrole, BH\&HLYP (8,8), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/bh_88_40A.svg)**e** 40A · 0.000009\
−0.0744

![twisted N-phenylpyrrole, BH\&HLYP (8,8), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/bh_88_38A.svg)**d** 38A · 1.999991\
−0.2821

M08-SO, (4,4)

(a, d)

![twisted N-phenylpyrrole, M08-SO (4,4), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/m08_44_40A.svg)**d** 40A · 0.000000\
−0.0858

![twisted N-phenylpyrrole, M08-SO (4,4), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/m08_44_35A.svg)**a** 35A · 2.000000\
−0.3413

(b, c)

![twisted N-phenylpyrrole, M08-SO (4,4), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/m08_44_39A.svg)**c** 39A · 0.000002\
−0.0868

![twisted N-phenylpyrrole, M08-SO (4,4), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/m08_44_38A.svg)**b** 38A · 1.999998\
−0.3030

M08-SO, (8,8)

(a, h)

![twisted N-phenylpyrrole, M08-SO (8,8), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/m08_88_39A.svg)**h** 39A · 0.000017\
−0.1077

![twisted N-phenylpyrrole, M08-SO (8,8), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/m08_88_36A.svg)**a** 36A · 1.999983\
−0.3167

(b, g)

![twisted N-phenylpyrrole, M08-SO (8,8), orbital 41A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/m08_88_41A.svg)**g** 41A · 0.000002\
−0.0910

![twisted N-phenylpyrrole, M08-SO (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/m08_88_37A.svg)**b** 37A · 1.999998\
−0.3149

(c, f)

![twisted N-phenylpyrrole, M08-SO (8,8), orbital 42A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/m08_88_42A.svg)**f** 42A · 0.000000\
−0.0363

![twisted N-phenylpyrrole, M08-SO (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/m08_88_35A.svg)**c** 35A · 2.000000\
−0.3259

(d, e)

![twisted N-phenylpyrrole, M08-SO (8,8), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/m08_88_40A.svg)**e** 40A · 0.000001\
−0.0914

![twisted N-phenylpyrrole, M08-SO (8,8), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/m08_88_38A.svg)**d** 38A · 1.999999\
−0.2974

ωB97X, (4,4)

(a, d)

![twisted N-phenylpyrrole, ωB97X (4,4), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/wb_44m_40A.svg)**d** 40A · 0.000000\
−0.1001

![twisted N-phenylpyrrole, ωB97X (4,4), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/wb_44m_36A.svg)**a** 36A · 2.000000\
−0.3440

(b, c)

![twisted N-phenylpyrrole, ωB97X (4,4), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/wb_44m_39A.svg)**c** 39A · 0.000000\
−0.1020

![twisted N-phenylpyrrole, ωB97X (4,4), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/wb_44m_38A.svg)**b** 38A · 2.000000\
−0.3338

ωB97X, (8,8)

(a, h)

![twisted N-phenylpyrrole, ωB97X (8,8), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/wb_88_39A.svg)**h** 39A · 0.000053\
−0.1348

![twisted N-phenylpyrrole, ωB97X (8,8), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/wb_88_36A.svg)**a** 36A · 1.999947\
−0.3470

(b, g)

![twisted N-phenylpyrrole, ωB97X (8,8), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/wb_88_40A.svg)**g** 40A · 0.000042\
−0.1170

![twisted N-phenylpyrrole, ωB97X (8,8), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/wb_88_37A.svg)**b** 37A · 1.999958\
−0.3453

(c, f)

![twisted N-phenylpyrrole, ωB97X (8,8), orbital 42A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/wb_88_42A.svg)**f** 42A · 0.000000\
−0.0486

![twisted N-phenylpyrrole, ωB97X (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/wb_88_35A.svg)**c** 35A · 2.000000\
−0.3639

(d, e)

![twisted N-phenylpyrrole, ωB97X (8,8), orbital 41A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/wb_88_41A.svg)**e** 41A · 0.000018\
−0.1135

![twisted N-phenylpyrrole, ωB97X (8,8), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_twisted-n-phenylpyrrole/wb_88_38A.svg)**d** 38A · 1.999982\
−0.3338

[← twisted DMABN](https://reksstudio.github.io/v2/main/results/quest/quest6-tdmabn/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-twisted-n-phenylpyrrole) · [benzoxadiazole →](https://reksstudio.github.io/v2/main/results/quest/quest7-benzoxadiazole/index.md)
