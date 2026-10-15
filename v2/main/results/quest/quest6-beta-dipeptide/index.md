# β-dipeptide — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest6-beta-dipeptide/>

Psi4 bd0fb43ef, 2026-10-15: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# β-dipeptide

QUEST6: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](https://reksstudio.github.io/v2/main/results/quest/quest6-beta-dipeptide/index.md#s1) · [Orbitals](https://reksstudio.github.io/v2/main/results/quest/quest6-beta-dipeptide/index.md#orbitals)

![β-dipeptide: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest6_beta-dipeptide.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: A′ 8.51 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 7.223 | −1.287 | A′ |
| | **(4,4)** | **7.572** | **−0.938** | A′ |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | **(2,2)** | **7.125** | **−1.385** | A′ |
| | (4,4) | 6.714 | −1.796 | A′ |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | **(2,2)** | **7.635** | **−0.875** | A′ |
| | (4,4) | 7.498 | −1.012 | A′ |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (2,2)

(a, b)

![β-dipeptide, BH\&HLYP (2,2), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_beta-dipeptide/bh_22_40A.svg)**b** 40A · 0.000000\
−0.0602

![β-dipeptide, BH\&HLYP (2,2), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_beta-dipeptide/bh_22_38A.svg)**a** 38A · 2.000000\
−0.3450

BH\&HLYP, (4,4)

(a, d)

(b, c)

![β-dipeptide, BH\&HLYP (4,4), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_beta-dipeptide/bh_44m_40A.svg)**d** 40A · 0.000000\
−0.1099

![β-dipeptide, BH\&HLYP (4,4), orbital 41A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_beta-dipeptide/bh_44m_41A.svg)**c** 41A · 0.000005\
−0.0743

![β-dipeptide, BH\&HLYP (4,4), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_beta-dipeptide/bh_44m_36A.svg)**a** 36A · 2.000000\
−0.3442

![β-dipeptide, BH\&HLYP (4,4), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_beta-dipeptide/bh_44m_38A.svg)**b** 38A · 1.999995\
−0.3381

M08-SO, (2,2)

(a, b)

![β-dipeptide, M08-SO (2,2), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_beta-dipeptide/m08_22_40A.svg)**b** 40A · 0.000000\
−0.0717

![β-dipeptide, M08-SO (2,2), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_beta-dipeptide/m08_22_38A.svg)**a** 38A · 2.000000\
−0.3517

M08-SO, (4,4)

(a, d)

(b, c)

![β-dipeptide, M08-SO (4,4), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_beta-dipeptide/m08_44_40A.svg)**d** 40A · 0.000000\
−0.0803

![β-dipeptide, M08-SO (4,4), orbital 41A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_beta-dipeptide/m08_44_41A.svg)**c** 41A · 0.000000\
−0.0693

![β-dipeptide, M08-SO (4,4), orbital 38A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_beta-dipeptide/m08_44_38A.svg)**a** 38A · 2.000000\
−0.3535

![β-dipeptide, M08-SO (4,4), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_beta-dipeptide/m08_44_39A.svg)**b** 39A · 2.000000\
−0.3509

ωB97X, (2,2)

(a, b)

![β-dipeptide, ωB97X (2,2), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_beta-dipeptide/wb_22_40A.svg)**b** 40A · 0.000000\
−0.0810

![β-dipeptide, ωB97X (2,2), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_beta-dipeptide/wb_22_37A.svg)**a** 37A · 2.000000\
−0.3814

ωB97X, (4,4)

(a, d)

(b, c)

![β-dipeptide, ωB97X (4,4), orbital 40A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_beta-dipeptide/wb_44m_40A.svg)**d** 40A · 0.000000\
−0.1471

![β-dipeptide, ωB97X (4,4), orbital 41A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_beta-dipeptide/wb_44m_41A.svg)**c** 41A · 0.000004\
−0.1194

![β-dipeptide, ωB97X (4,4), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_beta-dipeptide/wb_44m_37A.svg)**a** 37A · 2.000000\
−0.3737

![β-dipeptide, ωB97X (4,4), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_beta-dipeptide/wb_44m_36A.svg)**b** 36A · 1.999996\
−0.3774

[← benzothiadiazole](https://reksstudio.github.io/v2/main/results/quest/quest6-benzothiadiazole/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-beta-dipeptide) · [dimethylaniline →](https://reksstudio.github.io/v2/main/results/quest/quest6-dimethylaniline/index.md)
