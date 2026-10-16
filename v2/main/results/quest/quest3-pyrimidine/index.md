# pyrimidine — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest3-pyrimidine/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# pyrimidine

QUEST3: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](https://reksstudio.github.io/v2/main/results/quest/quest3-pyrimidine/index.md#s1) · [S2](https://reksstudio.github.io/v2/main/results/quest/quest3-pyrimidine/index.md#s2) · [T1](https://reksstudio.github.io/v2/main/results/quest/quest3-pyrimidine/index.md#t1) · [T2](https://reksstudio.github.io/v2/main/results/quest/quest3-pyrimidine/index.md#t2) · [Orbitals](https://reksstudio.github.io/v2/main/results/quest/quest3-pyrimidine/index.md#orbitals)

![pyrimidine: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_pyrimidine.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: B<sub>1</sub> 4.44 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **4.993** | **+0.553** | B<sub>1</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **4.834** | **+0.394** | B<sub>1</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **4.874** | **+0.434** | B<sub>1</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

### S2 {#s2}

TBE: A<sub>2</sub> 4.85 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **5.726** | **+0.876** | A<sub>2</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **5.597** | **+0.747** | A<sub>2</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **5.628** | **+0.778** | A<sub>2</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

### T1 {#t1}

TBE: B<sub>1</sub> 4.09 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **4.684** | **+0.594** | B<sub>1</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **4.607** | **+0.517** | B<sub>1</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **4.573** | **+0.483** | B<sub>1</sub> |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

### T2 {#t2}

TBE: A<sub>1</sub> 4.51 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | (4,4) | 4.853 | +0.343 | A<sub>1</sub> |
| | **(6,6)** | **4.746** | **+0.236** | A<sub>1</sub> |
| | (8,8) | 4.754 | +0.244 | A<sub>1</sub> |
| M08-SO | (2,2) | – | – | – |
| | (4,4) | 5.062 | +0.552 | A<sub>1</sub> |
| | **(6,6)** | **4.904** | **+0.394** | A<sub>1</sub> |
| | (8,8) | 4.920 | +0.410 | A<sub>1</sub> |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 4.947 | +0.437 | A<sub>1</sub> |
| | **(6,6)** | **4.746** | **+0.236** | A<sub>1</sub> |
| | (8,8) | 4.766 | +0.256 | A<sub>1</sub> |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (4,4)

(a, d)

![pyrimidine, BH\&HLYP (4,4), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/bh_44m_23A.svg)**d** 23A · 0.000056\
−0.1236

![pyrimidine, BH\&HLYP (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/bh_44m_20A.svg)**a** 20A · 1.999944\
−0.3471

(b, c)

![pyrimidine, BH\&HLYP (4,4), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/bh_44m_22A.svg)**c** 22A · 0.000000\
−0.1643

![pyrimidine, BH\&HLYP (4,4), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/bh_44m_21A.svg)**b** 21A · 2.000000\
−0.3433

BH\&HLYP, (6,6)

(a, f)

![pyrimidine, BH\&HLYP (6,6), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/bh_66_24A.svg)**f** 24A · 0.000000\
−0.0200

![pyrimidine, BH\&HLYP (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/bh_66_17A.svg)**a** 17A · 2.000000\
−0.5163

(b, e)

![pyrimidine, BH\&HLYP (6,6), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/bh_66_23A.svg)**e** 23A · 0.000096\
−0.1447

![pyrimidine, BH\&HLYP (6,6), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/bh_66_19A.svg)**b** 19A · 1.999904\
−0.3999

(c, d)

![pyrimidine, BH\&HLYP (6,6), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/bh_66_22A.svg)**d** 22A · 0.000090\
−0.1762

![pyrimidine, BH\&HLYP (6,6), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/bh_66_20A.svg)**c** 20A · 1.999910\
−0.3688

BH\&HLYP, (8,8)

(a, h)

![pyrimidine, BH\&HLYP (8,8), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/bh_88_24A.svg)**h** 24A · 0.000000\
−0.0700

![pyrimidine, BH\&HLYP (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/bh_88_15A.svg)**a** 15A · 2.000000\
−0.5371

(b, g)

![pyrimidine, BH\&HLYP (8,8), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/bh_88_25A.svg)**g** 25A · 0.000000\
−0.0628

![pyrimidine, BH\&HLYP (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/bh_88_16A.svg)**b** 16A · 2.000000\
−0.5361

(c, f)

![pyrimidine, BH\&HLYP (8,8), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/bh_88_23A.svg)**f** 23A · 0.000110\
−0.1644

![pyrimidine, BH\&HLYP (8,8), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/bh_88_19A.svg)**c** 19A · 1.999890\
−0.4135

(d, e)

![pyrimidine, BH\&HLYP (8,8), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/bh_88_22A.svg)**e** 22A · 0.000149\
−0.2285

![pyrimidine, BH\&HLYP (8,8), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/bh_88_20A.svg)**d** 20A · 1.999851\
−0.3797

M08-SO, (4,4)

(a, d)

![pyrimidine, M08-SO (4,4), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/m08_44m_23A.svg)**d** 23A · 0.000014\
−0.1434

![pyrimidine, M08-SO (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/m08_44m_20A.svg)**a** 20A · 1.999986\
−0.3624

(b, c)

![pyrimidine, M08-SO (4,4), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/m08_44m_22A.svg)**c** 22A · 0.000000\
−0.1754

![pyrimidine, M08-SO (4,4), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/m08_44m_21A.svg)**b** 21A · 2.000000\
−0.3477

M08-SO, (6,6)

(a, f)

![pyrimidine, M08-SO (6,6), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/m08_66_25A.svg)**f** 25A · 0.000000\
−0.0336

![pyrimidine, M08-SO (6,6), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/m08_66_15A.svg)**a** 15A · 2.000000\
−0.5272

(b, e)

![pyrimidine, M08-SO (6,6), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/m08_66_23A.svg)**e** 23A · 0.000012\
−0.1622

![pyrimidine, M08-SO (6,6), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/m08_66_19A.svg)**b** 19A · 1.999988\
−0.4113

(c, d)

![pyrimidine, M08-SO (6,6), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/m08_66_22A.svg)**d** 22A · 0.000015\
−0.1894

![pyrimidine, M08-SO (6,6), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/m08_66_20A.svg)**c** 20A · 1.999985\
−0.3815

M08-SO, (8,8)

(a, h)

![pyrimidine, M08-SO (8,8), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/m08_88_25A.svg)**h** 25A · 0.000000\
−0.0784

![pyrimidine, M08-SO (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/m08_88_16A.svg)**a** 16A · 2.000000\
−0.5381

(b, g)

![pyrimidine, M08-SO (8,8), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/m08_88_24A.svg)**g** 24A · 0.000000\
−0.0811

![pyrimidine, M08-SO (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/m08_88_15A.svg)**b** 15A · 2.000000\
−0.5505

(c, f)

![pyrimidine, M08-SO (8,8), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/m08_88_23A.svg)**f** 23A · 0.000013\
−0.1818

![pyrimidine, M08-SO (8,8), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/m08_88_19A.svg)**c** 19A · 1.999987\
−0.4297

(d, e)

![pyrimidine, M08-SO (8,8), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/m08_88_22A.svg)**e** 22A · 0.000016\
−0.2496

![pyrimidine, M08-SO (8,8), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/m08_88_20A.svg)**d** 20A · 1.999984\
−0.3963

ωB97X, (4,4)

(a, d)

![pyrimidine, ωB97X (4,4), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/wb_44m_23A.svg)**d** 23A · 0.000035\
−0.1732

![pyrimidine, ωB97X (4,4), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/wb_44m_20A.svg)**a** 20A · 1.999965\
−0.3982

(b, c)

![pyrimidine, ωB97X (4,4), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/wb_44m_22A.svg)**c** 22A · 0.000000\
−0.2073

![pyrimidine, ωB97X (4,4), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/wb_44m_21A.svg)**b** 21A · 2.000000\
−0.3774

ωB97X, (6,6)

(a, f)

![pyrimidine, ωB97X (6,6), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/wb_66_24A.svg)**f** 24A · 0.000000\
−0.0448

![pyrimidine, ωB97X (6,6), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/wb_66_15A.svg)**a** 15A · 2.000000\
−0.5591

(b, e)

![pyrimidine, ωB97X (6,6), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/wb_66_23A.svg)**e** 23A · 0.000041\
−0.1930

![pyrimidine, ωB97X (6,6), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/wb_66_18A.svg)**b** 18A · 1.999959\
−0.4386

(c, d)

![pyrimidine, ωB97X (6,6), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/wb_66_22A.svg)**d** 22A · 0.000042\
−0.2160

![pyrimidine, ωB97X (6,6), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/wb_66_20A.svg)**c** 20A · 1.999958\
−0.4107

ωB97X, (8,8)

(a, h)

![pyrimidine, ωB97X (8,8), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/wb_88_25A.svg)**h** 25A · 0.000000\
−0.0863

![pyrimidine, ωB97X (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/wb_88_16A.svg)**a** 16A · 2.000000\
−0.5679

(b, g)

![pyrimidine, ωB97X (8,8), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/wb_88_24A.svg)**g** 24A · 0.000000\
−0.0946

![pyrimidine, ωB97X (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/wb_88_15A.svg)**b** 15A · 2.000000\
−0.5858

(c, f)

![pyrimidine, ωB97X (8,8), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/wb_88_23A.svg)**f** 23A · 0.000042\
−0.2145

![pyrimidine, ωB97X (8,8), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/wb_88_18A.svg)**c** 18A · 1.999958\
−0.4611

(d, e)

![pyrimidine, ωB97X (8,8), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/wb_88_22A.svg)**e** 22A · 0.000026\
−0.2738

![pyrimidine, ωB97X (8,8), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_pyrimidine/wb_88_20A.svg)**d** 20A · 1.999974\
−0.4299

[← pyridine](https://reksstudio.github.io/v2/main/results/quest/quest3-pyridine/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-pyrimidine) · [pyrrole →](https://reksstudio.github.io/v2/main/results/quest/quest3-pyrrole/index.md)
