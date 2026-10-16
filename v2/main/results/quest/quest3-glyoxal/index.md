# glyoxal — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest3-glyoxal/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# glyoxal

QUEST3: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](https://reksstudio.github.io/v2/main/results/quest/quest3-glyoxal/index.md#s1) · [T1](https://reksstudio.github.io/v2/main/results/quest/quest3-glyoxal/index.md#t1) · [T2](https://reksstudio.github.io/v2/main/results/quest/quest3-glyoxal/index.md#t2) · [Orbitals](https://reksstudio.github.io/v2/main/results/quest/quest3-glyoxal/index.md#orbitals)

![glyoxal: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_glyoxal.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: A<sub>u</sub> 2.88 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **3.531** | **+0.651** | A<sub>u</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **3.565** | **+0.685** | A<sub>u</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **3.674** | **+0.794** | A<sub>u</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

### T1 {#t1}

TBE: A<sub>u</sub> 2.49 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **3.040** | **+0.550** | A<sub>u</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **3.278** | **+0.788** | A<sub>u</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **3.189** | **+0.699** | A<sub>u</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

### T2 {#t2}

TBE: A<sub>g</sub> 6.30 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **5.988** | **−0.312** | A<sub>g</sub> |
| | (6,6) | 5.949 | −0.351 | A<sub>g</sub> |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **6.121** | **−0.179** | A<sub>g</sub> |
| | (6,6) | 6.107 | −0.193 | A<sub>g</sub> |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **6.039** | **−0.261** | A<sub>g</sub> |
| | (6,6) | 6.025 | −0.275 | A<sub>g</sub> |
| | (8,8) | – | – | – |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (4,4)

(a, d)

![glyoxal, BH\&HLYP (4,4), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_glyoxal/bh_44m_16A.svg)**d** 16A · 0.000000\
−0.2172

![glyoxal, BH\&HLYP (4,4), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_glyoxal/bh_44m_14A.svg)**a** 14A · 2.000000\
−0.4025

(b, c)

![glyoxal, BH\&HLYP (4,4), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_glyoxal/bh_44m_17A.svg)**c** 17A · 0.000000\
−0.2172

![glyoxal, BH\&HLYP (4,4), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_glyoxal/bh_44m_15A.svg)**b** 15A · 2.000000\
−0.4025

BH\&HLYP, (6,6)

(a, f)

![glyoxal, BH\&HLYP (6,6), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_glyoxal/bh_66_18A.svg)**f** 18A · 0.000000\
−0.0653

![glyoxal, BH\&HLYP (6,6), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_glyoxal/bh_66_10A.svg)**a** 10A · 2.000000\
−0.6323

(b, e)

![glyoxal, BH\&HLYP (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_glyoxal/bh_66_17A.svg)**e** 17A · 0.000000\
−0.1329

![glyoxal, BH\&HLYP (6,6), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_glyoxal/bh_66_12A.svg)**b** 12A · 2.000000\
−0.5578

(c, d)

![glyoxal, BH\&HLYP (6,6), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_glyoxal/bh_66_16A.svg)**d** 16A · 0.000235\
−0.2501

![glyoxal, BH\&HLYP (6,6), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_glyoxal/bh_66_13A.svg)**c** 13A · 1.999765\
−0.5034

M08-SO, (4,4)

(a, d)

![glyoxal, M08-SO (4,4), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_glyoxal/m08_44m_17A.svg)**d** 17A · 0.000000\
−0.2226

![glyoxal, M08-SO (4,4), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_glyoxal/m08_44m_14A.svg)**a** 14A · 2.000000\
−0.4075

(b, c)

![glyoxal, M08-SO (4,4), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_glyoxal/m08_44m_16A.svg)**c** 16A · 0.000000\
−0.2226

![glyoxal, M08-SO (4,4), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_glyoxal/m08_44m_15A.svg)**b** 15A · 2.000000\
−0.4075

M08-SO, (6,6)

(a, f)

![glyoxal, M08-SO (6,6), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_glyoxal/m08_66_18A.svg)**f** 18A · 0.000000\
−0.0750

![glyoxal, M08-SO (6,6), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_glyoxal/m08_66_10A.svg)**a** 10A · 2.000000\
−0.6339

(b, e)

![glyoxal, M08-SO (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_glyoxal/m08_66_17A.svg)**e** 17A · 0.000000\
−0.1513

![glyoxal, M08-SO (6,6), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_glyoxal/m08_66_12A.svg)**b** 12A · 2.000000\
−0.5702

(c, d)

![glyoxal, M08-SO (6,6), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_glyoxal/m08_66_16A.svg)**d** 16A · 0.000048\
−0.2634

![glyoxal, M08-SO (6,6), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_glyoxal/m08_66_13A.svg)**c** 13A · 1.999952\
−0.5141

ωB97X, (4,4)

(a, d)

![glyoxal, ωB97X (4,4), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_glyoxal/wb_44m_17A.svg)**d** 17A · 0.000000\
−0.2524

![glyoxal, ωB97X (4,4), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_glyoxal/wb_44m_14A.svg)**a** 14A · 2.000000\
−0.4306

(b, c)

![glyoxal, ωB97X (4,4), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_glyoxal/wb_44m_16A.svg)**c** 16A · 0.000000\
−0.2524

![glyoxal, ωB97X (4,4), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_glyoxal/wb_44m_15A.svg)**b** 15A · 2.000000\
−0.4305

ωB97X, (6,6)

(a, f)

![glyoxal, ωB97X (6,6), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_glyoxal/wb_66_18A.svg)**f** 18A · 0.000000\
−0.0852

![glyoxal, ωB97X (6,6), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_glyoxal/wb_66_10A.svg)**a** 10A · 2.000000\
−0.6577

(b, e)

![glyoxal, ωB97X (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_glyoxal/wb_66_17A.svg)**e** 17A · 0.000000\
−0.1851

![glyoxal, ωB97X (6,6), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_glyoxal/wb_66_12A.svg)**b** 12A · 2.000000\
−0.6036

(c, d)

![glyoxal, ωB97X (6,6), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_glyoxal/wb_66_16A.svg)**d** 16A · 0.000063\
−0.3004

![glyoxal, ωB97X (6,6), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_glyoxal/wb_66_13A.svg)**c** 13A · 1.999937\
−0.5445

[← furan](https://reksstudio.github.io/v2/main/results/quest/quest3-furan/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-glyoxal) · [imidazole →](https://reksstudio.github.io/v2/main/results/quest/quest3-imidazole/index.md)
