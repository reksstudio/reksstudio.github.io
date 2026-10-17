# thiophene — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest3-thiophene/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# thiophene

QUEST3: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](#s1) · [S2](#s2) · [T1](#t1) · [T2](#t2) · [Orbitals](#orbitals)

![thiophene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_thiophene.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: A<sub>1</sub> 5.64 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **5.962** | **+0.322** | A<sub>1</sub> |
| | (6,6) | 6.015 | +0.375 | A<sub>1</sub> |
| | (8,8) | 6.096 | +0.456 | A<sub>1</sub> |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **5.912** | **+0.272** | A<sub>1</sub> |
| | (6,6) | 5.933 | +0.293 | A<sub>1</sub> |
| | (8,8) | 5.992 | +0.352 | A<sub>1</sub> |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **5.998** | **+0.358** | A<sub>1</sub> |
| | (6,6) | 6.045 | +0.405 | A<sub>1</sub> |
| | (8,8) | 6.136 | +0.496 | A<sub>1</sub> |

### S2 {#s2}

TBE: B<sub>2</sub> 5.98 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | **(2,2)** | **6.042** | **+0.062** | B<sub>2</sub> |
| | (4,4) | 6.146 | +0.166 | B<sub>2</sub> |
| | (6,6) | 6.198 | +0.218 | B<sub>2</sub> |
| | (8,8) | 6.207 | +0.227 | B<sub>2</sub> |
| M08-SO | (2,2) | 5.710 | −0.270 | B<sub>2</sub> |
| | **(4,4)** | **5.846** | **−0.134** | B<sub>2</sub> |
| | (6,6) | 5.822 | −0.158 | B<sub>2</sub> |
| | (8,8) | 5.804 | −0.175 | B<sub>2</sub> |
| ωB97X | **(2,2)** | **5.958** | **−0.022** | B<sub>2</sub> |
| | (4,4) | 6.056 | +0.076 | B<sub>2</sub> |
| | (6,6) | 6.101 | +0.121 | B<sub>2</sub> |
| | (8,8) | 6.090 | +0.110 | B<sub>2</sub> |

### T1 {#t1}

TBE: B<sub>2</sub> 3.97 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | **(2,2)** | **3.957** | **−0.013** | B<sub>2</sub> |
| | (4,4) | 4.093 | +0.123 | B<sub>2</sub> |
| | (6,6) | 4.124 | +0.154 | B<sub>2</sub> |
| | (8,8) | 4.087 | +0.117 | B<sub>2</sub> |
| M08-SO | **(2,2)** | **4.159** | **+0.189** | B<sub>2</sub> |
| | (4,4) | 4.282 | +0.312 | B<sub>2</sub> |
| | (6,6) | 4.320 | +0.350 | B<sub>2</sub> |
| | (8,8) | 4.273 | +0.303 | B<sub>2</sub> |
| ωB97X | **(2,2)** | **4.083** | **+0.113** | B<sub>2</sub> |
| | (4,4) | 4.232 | +0.262 | B<sub>2</sub> |
| | (6,6) | 4.266 | +0.296 | B<sub>2</sub> |
| | (8,8) | 4.240 | +0.270 | B<sub>2</sub> |

### T2 {#t2}

TBE: A<sub>1</sub> 4.76 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **4.890** | **+0.130** | A<sub>1</sub> |
| | (6,6) | 4.985 | +0.225 | A<sub>1</sub> |
| | (8,8) | 5.103 | +0.343 | A<sub>1</sub> |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **5.016** | **+0.256** | A<sub>1</sub> |
| | (6,6) | 5.096 | +0.337 | A<sub>1</sub> |
| | (8,8) | 5.218 | +0.458 | A<sub>1</sub> |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **4.994** | **+0.234** | A<sub>1</sub> |
| | (6,6) | 5.083 | +0.323 | A<sub>1</sub> |
| | (8,8) | 5.215 | +0.455 | A<sub>1</sub> |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (2,2)

(a, b)

![thiophene, BH\&HLYP (2,2), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/bh_22_23A.svg)**b** 23A · 0.000235\
−0.1002

![thiophene, BH\&HLYP (2,2), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/bh_22_22A.svg)**a** 22A · 1.999765\
−0.2917

BH\&HLYP, (4,4)

(a, d)

![thiophene, BH\&HLYP (4,4), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/bh_44_24A.svg)**d** 24A · 0.000000\
−0.0366

![thiophene, BH\&HLYP (4,4), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/bh_44_21A.svg)**a** 21A · 2.000000\
−0.3130

(b, c)

![thiophene, BH\&HLYP (4,4), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/bh_44_23A.svg)**c** 23A · 0.000185\
−0.0999

![thiophene, BH\&HLYP (4,4), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/bh_44_22A.svg)**b** 22A · 1.999815\
−0.2935

BH\&HLYP, (6,6)

(a, f)

![thiophene, BH\&HLYP (6,6), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/bh_66_25A.svg)**f** 25A · 0.000000\
−0.0405

![thiophene, BH\&HLYP (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/bh_66_17A.svg)**a** 17A · 2.000000\
−0.4973

(b, e)

![thiophene, BH\&HLYP (6,6), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/bh_66_24A.svg)**e** 24A · 0.000001\
−0.0679

![thiophene, BH\&HLYP (6,6), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/bh_66_21A.svg)**b** 21A · 1.999999\
−0.3410

(c, d)

![thiophene, BH\&HLYP (6,6), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/bh_66_23A.svg)**d** 23A · 0.000263\
−0.1237

![thiophene, BH\&HLYP (6,6), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/bh_66_22A.svg)**c** 22A · 1.999737\
−0.3196

BH\&HLYP, (8,8)

(a, h)

![thiophene, BH\&HLYP (8,8), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/bh_88_25A.svg)**h** 25A · 0.000000\
−0.0705

![thiophene, BH\&HLYP (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/bh_88_16A.svg)**a** 16A · 2.000000\
−0.5305

(b, g)

![thiophene, BH\&HLYP (8,8), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/bh_88_26A.svg)**g** 26A · 0.000000\
−0.0526

![thiophene, BH\&HLYP (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/bh_88_17A.svg)**b** 17A · 2.000000\
−0.5111

(c, f)

![thiophene, BH\&HLYP (8,8), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/bh_88_24A.svg)**f** 24A · 0.000001\
−0.1001

![thiophene, BH\&HLYP (8,8), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/bh_88_21A.svg)**c** 21A · 1.999999\
−0.3459

(d, e)

![thiophene, BH\&HLYP (8,8), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/bh_88_23A.svg)**e** 23A · 0.000344\
−0.1366

![thiophene, BH\&HLYP (8,8), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/bh_88_22A.svg)**d** 22A · 1.999656\
−0.3297

M08-SO, (2,2)

(a, b)

![thiophene, M08-SO (2,2), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/m08_22_23A.svg)**b** 23A · 0.000035\
−0.1190

![thiophene, M08-SO (2,2), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/m08_22_22A.svg)**a** 22A · 1.999965\
−0.3059

M08-SO, (4,4)

(a, d)

![thiophene, M08-SO (4,4), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/m08_44_24A.svg)**d** 24A · 0.000000\
−0.0560

![thiophene, M08-SO (4,4), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/m08_44_21A.svg)**a** 21A · 2.000000\
−0.3249

(b, c)

![thiophene, M08-SO (4,4), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/m08_44_23A.svg)**c** 23A · 0.000022\
−0.1186

![thiophene, M08-SO (4,4), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/m08_44_22A.svg)**b** 22A · 1.999978\
−0.3082

M08-SO, (6,6)

(a, f)

![thiophene, M08-SO (6,6), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/m08_66_25A.svg)**f** 25A · 0.000000\
−0.0499

![thiophene, M08-SO (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/m08_66_17A.svg)**a** 17A · 2.000000\
−0.4984

(b, e)

![thiophene, M08-SO (6,6), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/m08_66_24A.svg)**e** 24A · 0.000000\
−0.0876

![thiophene, M08-SO (6,6), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/m08_66_21A.svg)**b** 21A · 2.000000\
−0.3533

(c, d)

![thiophene, M08-SO (6,6), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/m08_66_23A.svg)**d** 23A · 0.000034\
−0.1403

![thiophene, M08-SO (6,6), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/m08_66_22A.svg)**c** 22A · 1.999966\
−0.3342

M08-SO, (8,8)

(a, h)

![thiophene, M08-SO (8,8), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/m08_88_25A.svg)**h** 25A · 0.000000\
−0.0797

![thiophene, M08-SO (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/m08_88_16A.svg)**a** 16A · 2.000000\
−0.5294

(b, g)

![thiophene, M08-SO (8,8), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/m08_88_26A.svg)**g** 26A · 0.000000\
−0.0612

![thiophene, M08-SO (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/m08_88_17A.svg)**b** 17A · 2.000000\
−0.5121

(c, f)

![thiophene, M08-SO (8,8), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/m08_88_24A.svg)**f** 24A · 0.000000\
−0.1178

![thiophene, M08-SO (8,8), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/m08_88_21A.svg)**c** 21A · 2.000000\
−0.3568

(d, e)

![thiophene, M08-SO (8,8), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/m08_88_23A.svg)**e** 23A · 0.000045\
−0.1511

![thiophene, M08-SO (8,8), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/m08_88_22A.svg)**d** 22A · 1.999955\
−0.3426

ωB97X, (2,2)

(a, b)

![thiophene, ωB97X (2,2), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/wb_22_23A.svg)**b** 23A · 0.000112\
−0.1505

![thiophene, ωB97X (2,2), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/wb_22_22A.svg)**a** 22A · 1.999888\
−0.3425

ωB97X, (4,4)

(a, d)

![thiophene, ωB97X (4,4), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/wb_44_24A.svg)**d** 24A · 0.000000\
−0.0810

![thiophene, ωB97X (4,4), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/wb_44_21A.svg)**a** 21A · 2.000000\
−0.3599

(b, c)

![thiophene, ωB97X (4,4), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/wb_44_23A.svg)**c** 23A · 0.000076\
−0.1472

![thiophene, ωB97X (4,4), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/wb_44_22A.svg)**b** 22A · 1.999924\
−0.3425

ωB97X, (6,6)

(a, f)

![thiophene, ωB97X (6,6), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/wb_66_25A.svg)**f** 25A · 0.000000\
−0.0518

![thiophene, ωB97X (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/wb_66_17A.svg)**a** 17A · 2.000000\
−0.5328

(b, e)

![thiophene, ωB97X (6,6), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/wb_66_24A.svg)**e** 24A · 0.000000\
−0.1162

![thiophene, ωB97X (6,6), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/wb_66_21A.svg)**b** 21A · 2.000000\
−0.3917

(c, d)

![thiophene, ωB97X (6,6), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/wb_66_23A.svg)**d** 23A · 0.000105\
−0.1715

![thiophene, ωB97X (6,6), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/wb_66_22A.svg)**c** 22A · 1.999895\
−0.3710

ωB97X, (8,8)

(a, h)

![thiophene, ωB97X (8,8), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/wb_88_25A.svg)**h** 25A · 0.000000\
−0.0868

![thiophene, ωB97X (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/wb_88_16A.svg)**a** 16A · 2.000000\
−0.5633

(b, g)

![thiophene, ωB97X (8,8), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/wb_88_26A.svg)**g** 26A · 0.000000\
−0.0664

![thiophene, ωB97X (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/wb_88_17A.svg)**b** 17A · 2.000000\
−0.5446

(c, f)

![thiophene, ωB97X (8,8), orbital 24A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/wb_88_24A.svg)**f** 24A · 0.000000\
−0.1472

![thiophene, ωB97X (8,8), orbital 21A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/wb_88_21A.svg)**c** 21A · 2.000000\
−0.3931

(d, e)

![thiophene, ωB97X (8,8), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/wb_88_23A.svg)**e** 23A · 0.000133\
−0.1816

![thiophene, ωB97X (8,8), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_thiophene/wb_88_22A.svg)**d** 22A · 1.999867\
−0.3785

[← thioacetone](https://reksstudio.github.io/v2/main/results/quest/quest3-thioacetone/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-thiophene) · [thiopropynal →](https://reksstudio.github.io/v2/main/results/quest/quest3-thiopropynal/index.md)
