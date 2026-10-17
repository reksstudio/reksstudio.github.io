# isobutene — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest3-isobutene/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# isobutene

QUEST3: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[T1](#t1) · [Orbitals](#orbitals)

![isobutene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_isobutene.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### T1 {#t1}

TBE: A<sub>1</sub> 4.53 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 4.476 | −0.054 | A<sub>1</sub> |
| | (4,4) | 4.696 | +0.166 | A<sub>1</sub> |
| | **(6,6)** | **4.539** | **+0.009** | A<sub>1</sub> |
| | (8,8) | 4.689 | +0.159 | A<sub>1</sub> |
| M08-SO | **(2,2)** | **4.575** | **+0.045** | A<sub>1</sub> |
| | (4,4) | 4.324 | −0.206 | –<sup>m</sup> |
| | (6,6) | 4.656 | +0.126 | A<sub>1</sub> |
| | (8,8) | 4.784 | +0.254 | A<sub>1</sub> |
| ωB97X | **(2,2)** | **4.565** | **+0.035** | A<sub>1</sub> |
| | (4,4) | 4.332 | −0.198 | –<sup>m</sup> |
| | (6,6) | 4.719 | +0.189 | A<sub>1</sub> |
| | (8,8) | 4.856 | +0.327 | A<sub>1</sub> |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (2,2)

(a, b)

![isobutene, BH\&HLYP (2,2), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/bh_22_17A.svg)**b** 17A · 0.000305\
−0.0888

![isobutene, BH\&HLYP (2,2), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/bh_22_16A.svg)**a** 16A · 1.999695\
−0.3111

BH\&HLYP, (4,4)

(a, d)

![isobutene, BH\&HLYP (4,4), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/bh_44_18A.svg)**d** 18A · 0.000000\
−0.0637

![isobutene, BH\&HLYP (4,4), orbital 6A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/bh_44_6A.svg)**a** 6A · 2.000000\
−0.8502

(b, c)

![isobutene, BH\&HLYP (4,4), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/bh_44_17A.svg)**c** 17A · 0.000243\
−0.0945

![isobutene, BH\&HLYP (4,4), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/bh_44_16A.svg)**b** 16A · 1.999757\
−0.3397

BH\&HLYP, (6,6)

(a, f)

![isobutene, BH\&HLYP (6,6), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/bh_66_18A.svg)**f** 18A · 0.000000\
−0.0726

![isobutene, BH\&HLYP (6,6), orbital 9A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/bh_66_9A.svg)**a** 9A · 2.000000\
−0.5938

(b, e)

![isobutene, BH\&HLYP (6,6), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/bh_66_19A.svg)**e** 19A · 0.000000\
−0.0513

![isobutene, BH\&HLYP (6,6), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/bh_66_10A.svg)**b** 10A · 2.000000\
−0.5799

(c, d)

![isobutene, BH\&HLYP (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/bh_66_17A.svg)**d** 17A · 0.000573\
−0.1144

![isobutene, BH\&HLYP (6,6), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/bh_66_16A.svg)**c** 16A · 1.999427\
−0.3547

BH\&HLYP, (8,8)

(a, h)

![isobutene, BH\&HLYP (8,8), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/bh_88_18A.svg)**h** 18A · 0.000000\
−0.0819

![isobutene, BH\&HLYP (8,8), orbital 7A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/bh_88_7A.svg)**a** 7A · 2.000000\
−0.8556

(b, g)

![isobutene, BH\&HLYP (8,8), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/bh_88_19A.svg)**g** 19A · 0.000000\
−0.0792

![isobutene, BH\&HLYP (8,8), orbital 9A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/bh_88_9A.svg)**b** 9A · 2.000000\
−0.5907

(c, f)

![isobutene, BH\&HLYP (8,8), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/bh_88_20A.svg)**f** 20A · 0.000000\
−0.0651

![isobutene, BH\&HLYP (8,8), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/bh_88_10A.svg)**c** 10A · 2.000000\
−0.5833

(d, e)

![isobutene, BH\&HLYP (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/bh_88_17A.svg)**e** 17A · 0.000399\
−0.1110

![isobutene, BH\&HLYP (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/bh_88_16A.svg)**d** 16A · 1.999601\
−0.3503

M08-SO, (2,2)

(a, b)

![isobutene, M08-SO (2,2), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/m08_22_17A.svg)**b** 17A · 0.000141\
−0.1057

![isobutene, M08-SO (2,2), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/m08_22_16A.svg)**a** 16A · 1.999859\
−0.3226

M08-SO, (4,4)

(a, d)

![isobutene, M08-SO (4,4), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/m08_44m_18A.svg)**d** 18A · 0.000000\
−0.1279

![isobutene, M08-SO (4,4), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/m08_44m_15A.svg)**a** 15A · 2.000000\
−0.4060

(b, c)

![isobutene, M08-SO (4,4), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/m08_44m_17A.svg)**c** 17A · 0.000000\
−0.1285

![isobutene, M08-SO (4,4), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/m08_44m_16A.svg)**b** 16A · 2.000000\
−0.4060

M08-SO, (6,6)

(a, f)

![isobutene, M08-SO (6,6), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/m08_66_18A.svg)**f** 18A · 0.000000\
−0.0812

![isobutene, M08-SO (6,6), orbital 9A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/m08_66_9A.svg)**a** 9A · 2.000000\
−0.5946

(b, e)

![isobutene, M08-SO (6,6), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/m08_66_19A.svg)**e** 19A · 0.000000\
−0.0606

![isobutene, M08-SO (6,6), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/m08_66_10A.svg)**b** 10A · 2.000000\
−0.5804

(c, d)

![isobutene, M08-SO (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/m08_66_17A.svg)**d** 17A · 0.000151\
−0.1271

![isobutene, M08-SO (6,6), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/m08_66_16A.svg)**c** 16A · 1.999849\
−0.3647

M08-SO, (8,8)

(a, h)

![isobutene, M08-SO (8,8), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/m08_88_19A.svg)**h** 19A · 0.000000\
−0.0907

![isobutene, M08-SO (8,8), orbital 7A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/m08_88_7A.svg)**a** 7A · 2.000000\
−0.8356

(b, g)

![isobutene, M08-SO (8,8), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/m08_88_18A.svg)**g** 18A · 0.000000\
−0.0915

![isobutene, M08-SO (8,8), orbital 9A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/m08_88_9A.svg)**b** 9A · 2.000000\
−0.6011

(c, f)

![isobutene, M08-SO (8,8), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/m08_88_20A.svg)**f** 20A · 0.000000\
−0.0783

![isobutene, M08-SO (8,8), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/m08_88_10A.svg)**c** 10A · 2.000000\
−0.5848

(d, e)

![isobutene, M08-SO (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/m08_88_17A.svg)**e** 17A · 0.000104\
−0.1277

![isobutene, M08-SO (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/m08_88_16A.svg)**d** 16A · 1.999896\
−0.3654

ωB97X, (2,2)

(a, b)

![isobutene, ωB97X (2,2), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/wb_22_17A.svg)**b** 17A · 0.000327\
−0.1340

![isobutene, ωB97X (2,2), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/wb_22_16A.svg)**a** 16A · 1.999673\
−0.3578

ωB97X, (4,4)

(a, d)

![isobutene, ωB97X (4,4), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/wb_44m_18A.svg)**d** 18A · 0.000000\
−0.1462

![isobutene, ωB97X (4,4), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/wb_44m_15A.svg)**a** 15A · 2.000000\
−0.4452

(b, c)

![isobutene, ωB97X (4,4), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/wb_44m_17A.svg)**c** 17A · 0.000000\
−0.1465

![isobutene, ωB97X (4,4), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/wb_44m_16A.svg)**b** 16A · 2.000000\
−0.4450

ωB97X, (6,6)

(a, f)

![isobutene, ωB97X (6,6), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/wb_66_18A.svg)**f** 18A · 0.000000\
−0.0874

![isobutene, ωB97X (6,6), orbital 9A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/wb_66_9A.svg)**a** 9A · 2.000000\
−0.6318

(b, e)

![isobutene, ωB97X (6,6), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/wb_66_19A.svg)**e** 19A · 0.000000\
−0.0680

![isobutene, ωB97X (6,6), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/wb_66_10A.svg)**b** 10A · 2.000000\
−0.6168

(c, d)

![isobutene, ωB97X (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/wb_66_17A.svg)**d** 17A · 0.000315\
−0.1560

![isobutene, ωB97X (6,6), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/wb_66_16A.svg)**c** 16A · 1.999685\
−0.4015

ωB97X, (8,8)

(a, h)

![isobutene, ωB97X (8,8), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/wb_88_18A.svg)**h** 18A · 0.000000\
−0.0997

![isobutene, ωB97X (8,8), orbital 7A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/wb_88_7A.svg)**a** 7A · 2.000000\
−0.8791

(b, g)

![isobutene, ωB97X (8,8), orbital 19A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/wb_88_19A.svg)**g** 19A · 0.000000\
−0.0962

![isobutene, ωB97X (8,8), orbital 9A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/wb_88_9A.svg)**b** 9A · 2.000000\
−0.6308

(c, f)

![isobutene, ωB97X (8,8), orbital 20A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/wb_88_20A.svg)**f** 20A · 0.000000\
−0.0888

![isobutene, ωB97X (8,8), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/wb_88_10A.svg)**c** 10A · 2.000000\
−0.6205

(d, e)

![isobutene, ωB97X (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/wb_88_17A.svg)**e** 17A · 0.000230\
−0.1540

![isobutene, ωB97X (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_isobutene/wb_88_16A.svg)**d** 16A · 1.999770\
−0.3995

[← imidazole](https://reksstudio.github.io/v2/main/results/quest/quest3-imidazole/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-isobutene) · [methylenecyclopropene →](https://reksstudio.github.io/v2/main/results/quest/quest3-methylenecyclopropene/index.md)
