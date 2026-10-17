# streptocyanine-C5 — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest5-strepto-c5/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# streptocyanine-C5

QUEST5: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](#s1) · [T1](#t1) · [Orbitals](#orbitals)

![streptocyanine-C5: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest5_strepto-c5.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: B<sub>2</sub> 3.64 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | **(2,2)** | **3.853** | **+0.213** | B<sub>2</sub> |
| | (4,4) | 3.907 | +0.267 | B<sub>2</sub> |
| | (6,6) | 3.919 | +0.279 | B<sub>2</sub> |
| | (8,8) | 4.028 | +0.388 | B<sub>2</sub> |
| M08-SO | **(2,2)** | **3.970** | **+0.330** | B<sub>2</sub> |
| | (4,4) | 4.023 | +0.383 | B<sub>2</sub> |
| | (6,6) | 4.069 | +0.429 | B<sub>2</sub> |
| | (8,8) | 4.151 | +0.511 | B<sub>2</sub> |
| ωB97X | **(2,2)** | **4.135** | **+0.495** | B<sub>2</sub> |
| | (4,4) | 4.217 | +0.577 | B<sub>2</sub> |
| | (6,6) | 4.254 | +0.614 | B<sub>2</sub> |
| | (8,8) | 4.363 | +0.723 | B<sub>2</sub> |

### T1 {#t1}

TBE: B<sub>2</sub> 2.47 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 2.341 | −0.129 | B<sub>2</sub> |
| | **(4,4)** | **2.467** | **−0.003** | B<sub>2</sub> |
| | (6,6) | 2.461 | −0.009 | B<sub>2</sub> |
| | (8,8) | 2.499 | +0.029 | B<sub>2</sub> |
| M08-SO | (2,2) | 2.394 | −0.076 | B<sub>2</sub> |
| | **(4,4)** | **2.499** | **+0.029** | B<sub>2</sub> |
| | (6,6) | 2.523 | +0.053 | B<sub>2</sub> |
| | (8,8) | 2.561 | +0.091 | B<sub>2</sub> |
| ωB97X | (2,2) | 2.401 | −0.069 | B<sub>2</sub> |
| | **(4,4)** | **2.486** | **+0.016** | B<sub>2</sub> |
| | (6,6) | 2.536 | +0.066 | B<sub>2</sub> |
| | (8,8) | 2.566 | +0.096 | B<sub>2</sub> |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (2,2)

(a, b)

![streptocyanine-C5, BH\&HLYP (2,2), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/bh_22_27A.svg)**b** 27A · 0.000223\
−0.2865

![streptocyanine-C5, BH\&HLYP (2,2), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/bh_22_26A.svg)**a** 26A · 1.999777\
−0.4147

BH\&HLYP, (4,4)

(a, d)

![streptocyanine-C5, BH\&HLYP (4,4), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/bh_44m_28A.svg)**d** 28A · 0.000000\
−0.2070

![streptocyanine-C5, BH\&HLYP (4,4), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/bh_44m_25A.svg)**a** 25A · 2.000000\
−0.5256

(b, c)

![streptocyanine-C5, BH\&HLYP (4,4), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/bh_44m_27A.svg)**c** 27A · 0.000132\
−0.3099

![streptocyanine-C5, BH\&HLYP (4,4), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/bh_44m_26A.svg)**b** 26A · 1.999868\
−0.4184

BH\&HLYP, (6,6)

(a, f)

![streptocyanine-C5, BH\&HLYP (6,6), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/bh_66_28A.svg)**f** 28A · 0.000000\
−0.2019

![streptocyanine-C5, BH\&HLYP (6,6), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/bh_66_23A.svg)**a** 23A · 2.000000\
−0.6047

(b, e)

![streptocyanine-C5, BH\&HLYP (6,6), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/bh_66_27A.svg)**e** 27A · 0.000013\
−0.2940

![streptocyanine-C5, BH\&HLYP (6,6), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/bh_66_25A.svg)**b** 25A · 1.999987\
−0.5160

(c, d)

![streptocyanine-C5, BH\&HLYP (6,6), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/bh_66_29A.svg)**d** 29A · 0.000000\
−0.1873

![streptocyanine-C5, BH\&HLYP (6,6), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/bh_66_26A.svg)**c** 26A · 2.000000\
−0.4176

BH\&HLYP, (8,8)

(a, h)

![streptocyanine-C5, BH\&HLYP (8,8), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/bh_88_30A.svg)**h** 30A · 0.000000\
−0.1657

![streptocyanine-C5, BH\&HLYP (8,8), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/bh_88_19A.svg)**a** 19A · 2.000000\
−0.6750

(b, g)

![streptocyanine-C5, BH\&HLYP (8,8), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/bh_88_28A.svg)**g** 28A · 0.000000\
−0.2221

![streptocyanine-C5, BH\&HLYP (8,8), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/bh_88_23A.svg)**b** 23A · 2.000000\
−0.6174

(c, f)

![streptocyanine-C5, BH\&HLYP (8,8), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/bh_88_27A.svg)**f** 27A · 0.000012\
−0.3068

![streptocyanine-C5, BH\&HLYP (8,8), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/bh_88_25A.svg)**c** 25A · 1.999988\
−0.5299

(d, e)

![streptocyanine-C5, BH\&HLYP (8,8), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/bh_88_29A.svg)**e** 29A · 0.000000\
−0.2166

![streptocyanine-C5, BH\&HLYP (8,8), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/bh_88_26A.svg)**d** 26A · 2.000000\
−0.4269

M08-SO, (2,2)

(a, b)

![streptocyanine-C5, M08-SO (2,2), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/m08_22_27A.svg)**b** 27A · 0.000326\
−0.2972

![streptocyanine-C5, M08-SO (2,2), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/m08_22_26A.svg)**a** 26A · 1.999674\
−0.4263

M08-SO, (4,4)

(a, d)

![streptocyanine-C5, M08-SO (4,4), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/m08_44m_28A.svg)**d** 28A · 0.000000\
−0.2224

![streptocyanine-C5, M08-SO (4,4), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/m08_44m_25A.svg)**a** 25A · 2.000000\
−0.5396

(b, c)

![streptocyanine-C5, M08-SO (4,4), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/m08_44m_27A.svg)**c** 27A · 0.000213\
−0.3198

![streptocyanine-C5, M08-SO (4,4), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/m08_44m_26A.svg)**b** 26A · 1.999787\
−0.4304

M08-SO, (6,6)

(a, f)

![streptocyanine-C5, M08-SO (6,6), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/m08_66_28A.svg)**f** 28A · 0.000000\
−0.2204

![streptocyanine-C5, M08-SO (6,6), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/m08_66_23A.svg)**a** 23A · 2.000000\
−0.6184

(b, e)

![streptocyanine-C5, M08-SO (6,6), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/m08_66_27A.svg)**e** 27A · 0.000008\
−0.3095

![streptocyanine-C5, M08-SO (6,6), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/m08_66_25A.svg)**b** 25A · 1.999992\
−0.5302

(c, d)

![streptocyanine-C5, M08-SO (6,6), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/m08_66_29A.svg)**d** 29A · 0.000000\
−0.2063

![streptocyanine-C5, M08-SO (6,6), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/m08_66_26A.svg)**c** 26A · 2.000000\
−0.4305

M08-SO, (8,8)

(a, h)

![streptocyanine-C5, M08-SO (8,8), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/m08_88_30A.svg)**h** 30A · 0.000000\
−0.1755

![streptocyanine-C5, M08-SO (8,8), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/m08_88_19A.svg)**a** 19A · 2.000000\
−0.6753

(b, g)

![streptocyanine-C5, M08-SO (8,8), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/m08_88_28A.svg)**g** 28A · 0.000000\
−0.2403

![streptocyanine-C5, M08-SO (8,8), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/m08_88_23A.svg)**b** 23A · 2.000000\
−0.6309

(c, f)

![streptocyanine-C5, M08-SO (8,8), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/m08_88_27A.svg)**f** 27A · 0.000007\
−0.3219

![streptocyanine-C5, M08-SO (8,8), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/m08_88_25A.svg)**c** 25A · 1.999993\
−0.5439

(d, e)

![streptocyanine-C5, M08-SO (8,8), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/m08_88_29A.svg)**e** 29A · 0.000000\
−0.2352

![streptocyanine-C5, M08-SO (8,8), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/m08_88_26A.svg)**d** 26A · 2.000000\
−0.4396

ωB97X, (2,2)

(a, b)

![streptocyanine-C5, ωB97X (2,2), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/wb_22_27A.svg)**b** 27A · 0.000417\
−0.3230

![streptocyanine-C5, ωB97X (2,2), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/wb_22_26A.svg)**a** 26A · 1.999583\
−0.4583

ωB97X, (4,4)

(a, d)

![streptocyanine-C5, ωB97X (4,4), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/wb_44_27A.svg)**d** 27A · 0.000008\
−0.3372

![streptocyanine-C5, ωB97X (4,4), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/wb_44_25A.svg)**a** 25A · 1.999992\
−0.5690

(b, c)

![streptocyanine-C5, ωB97X (4,4), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/wb_44_28A.svg)**c** 28A · 0.000003\
−0.2365

![streptocyanine-C5, ωB97X (4,4), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/wb_44_26A.svg)**b** 26A · 1.999997\
−0.4587

ωB97X, (6,6)

(a, f)

![streptocyanine-C5, ωB97X (6,6), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/wb_66_28A.svg)**f** 28A · 0.000000\
−0.2404

![streptocyanine-C5, ωB97X (6,6), orbital 22A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/wb_66_22A.svg)**a** 22A · 2.000000\
−0.6517

(b, e)

![streptocyanine-C5, ωB97X (6,6), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/wb_66_27A.svg)**e** 27A · 0.000008\
−0.3364

![streptocyanine-C5, ωB97X (6,6), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/wb_66_25A.svg)**b** 25A · 1.999992\
−0.5633

(c, d)

![streptocyanine-C5, ωB97X (6,6), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/wb_66_29A.svg)**d** 29A · 0.000000\
−0.2275

![streptocyanine-C5, ωB97X (6,6), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/wb_66_26A.svg)**c** 26A · 2.000000\
−0.4589

ωB97X, (8,8)

(a, h)

![streptocyanine-C5, ωB97X (8,8), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/wb_88_30A.svg)**h** 30A · 0.000000\
−0.1744

![streptocyanine-C5, ωB97X (8,8), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/wb_88_19A.svg)**a** 19A · 2.000000\
−0.7100

(b, g)

![streptocyanine-C5, ωB97X (8,8), orbital 28A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/wb_88_28A.svg)**g** 28A · 0.000000\
−0.2619

![streptocyanine-C5, ωB97X (8,8), orbital 23A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/wb_88_23A.svg)**b** 23A · 2.000000\
−0.6653

(c, f)

![streptocyanine-C5, ωB97X (8,8), orbital 27A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/wb_88_27A.svg)**f** 27A · 0.000007\
−0.3487

![streptocyanine-C5, ωB97X (8,8), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/wb_88_25A.svg)**c** 25A · 1.999993\
−0.5781

(d, e)

![streptocyanine-C5, ωB97X (8,8), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/wb_88_29A.svg)**e** 29A · 0.000000\
−0.2601

![streptocyanine-C5, ωB97X (8,8), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest5_strepto-c5/wb_88_26A.svg)**d** 26A · 2.000000\
−0.4692

[← streptocyanine-C3](https://reksstudio.github.io/v2/main/results/quest/quest5-strepto-c3/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-strepto-c5) · [thioacrolein →](https://reksstudio.github.io/v2/main/results/quest/quest5-thioacrolein/index.md)
