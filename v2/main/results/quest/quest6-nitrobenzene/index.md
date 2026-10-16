# nitrobenzene — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest6-nitrobenzene/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# nitrobenzene

QUEST6: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](https://reksstudio.github.io/v2/main/results/quest/quest6-nitrobenzene/index.md#s1) · [Orbitals](https://reksstudio.github.io/v2/main/results/quest/quest6-nitrobenzene/index.md#orbitals)

![nitrobenzene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest6_nitrobenzene.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: A<sub>1</sub> 5.41 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **5.345** | **−0.065** | A<sub>1</sub> |
| | (6,6) | 5.262 | −0.148 | A<sub>1</sub> |
| | (8,8) | 5.003 | −0.407 | A<sub>1</sub> |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **5.252** | **−0.158** | A<sub>1</sub> |
| | (6,6) | 5.079 | −0.331 | A<sub>1</sub> |
| | (8,8) | 4.882 | −0.528 | A<sub>1</sub> |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 5.457 | +0.047 | A<sub>1</sub> |
| | **(6,6)** | **5.402** | **−0.008** | A<sub>1</sub> |
| | (8,8) | 5.159 | −0.251 | A<sub>1</sub> |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (4,4)

(a, d)

![nitrobenzene, BH\&HLYP (4,4), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/bh_44m_33A.svg)**d** 33A · 0.000013\
−0.1670

![nitrobenzene, BH\&HLYP (4,4), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/bh_44m_31A.svg)**a** 31A · 1.999987\
−0.3494

(b, c)

![nitrobenzene, BH\&HLYP (4,4), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/bh_44m_34A.svg)**c** 34A · 0.000159\
−0.1322

![nitrobenzene, BH\&HLYP (4,4), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/bh_44m_32A.svg)**b** 32A · 1.999841\
−0.3438

BH\&HLYP, (6,6)

(a, f)

![nitrobenzene, BH\&HLYP (6,6), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/bh_66_33A.svg)**f** 33A · 0.000087\
−0.1693

![nitrobenzene, BH\&HLYP (6,6), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/bh_66_30A.svg)**a** 30A · 1.999913\
−0.3680

(b, e)

![nitrobenzene, BH\&HLYP (6,6), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/bh_66_35A.svg)**e** 35A · 0.000001\
−0.0844

![nitrobenzene, BH\&HLYP (6,6), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/bh_66_32A.svg)**b** 32A · 1.999999\
−0.3408

(c, d)

![nitrobenzene, BH\&HLYP (6,6), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/bh_66_34A.svg)**d** 34A · 0.000013\
−0.1063

![nitrobenzene, BH\&HLYP (6,6), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/bh_66_31A.svg)**c** 31A · 1.999987\
−0.3427

BH\&HLYP, (8,8)

(a, h)

![nitrobenzene, BH\&HLYP (8,8), orbital 39A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/bh_88_39A.svg)**h** 39A · 0.000000\
0.0215

![nitrobenzene, BH\&HLYP (8,8), orbital 26A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/bh_88_26A.svg)**a** 26A · 2.000000\
−0.4748

(b, g)

![nitrobenzene, BH\&HLYP (8,8), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/bh_88_33A.svg)**g** 33A · 0.000026\
−0.1698

![nitrobenzene, BH\&HLYP (8,8), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/bh_88_30A.svg)**b** 30A · 1.999974\
−0.3709

(c, f)

![nitrobenzene, BH\&HLYP (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/bh_88_35A.svg)**f** 35A · 0.000000\
−0.0981

![nitrobenzene, BH\&HLYP (8,8), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/bh_88_31A.svg)**c** 31A · 2.000000\
−0.3486

(d, e)

![nitrobenzene, BH\&HLYP (8,8), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/bh_88_34A.svg)**e** 34A · 0.000061\
−0.1433

![nitrobenzene, BH\&HLYP (8,8), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/bh_88_32A.svg)**d** 32A · 1.999939\
−0.3472

M08-SO, (4,4)

(a, d)

![nitrobenzene, M08-SO (4,4), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/m08_44m_33A.svg)**d** 33A · 0.000005\
−0.1828

![nitrobenzene, M08-SO (4,4), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/m08_44m_31A.svg)**a** 31A · 1.999995\
−0.3631

(b, c)

![nitrobenzene, M08-SO (4,4), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/m08_44m_34A.svg)**c** 34A · 0.000024\
−0.1515

![nitrobenzene, M08-SO (4,4), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/m08_44m_32A.svg)**b** 32A · 1.999976\
−0.3586

M08-SO, (6,6)

(a, f)

![nitrobenzene, M08-SO (6,6), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/m08_66_33A.svg)**f** 33A · 0.000029\
−0.1841

![nitrobenzene, M08-SO (6,6), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/m08_66_30A.svg)**a** 30A · 1.999971\
−0.3798

(b, e)

![nitrobenzene, M08-SO (6,6), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/m08_66_35A.svg)**e** 35A · 0.000000\
−0.1012

![nitrobenzene, M08-SO (6,6), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/m08_66_32A.svg)**b** 32A · 2.000000\
−0.3553

(c, d)

![nitrobenzene, M08-SO (6,6), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/m08_66_34A.svg)**d** 34A · 0.000002\
−0.1244

![nitrobenzene, M08-SO (6,6), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/m08_66_31A.svg)**c** 31A · 1.999998\
−0.3575

M08-SO, (8,8)

(a, h)

![nitrobenzene, M08-SO (8,8), orbital 42A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/m08_88_42A.svg)**h** 42A · 0.000000\
0.0047

![nitrobenzene, M08-SO (8,8), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/m08_88_25A.svg)**a** 25A · 2.000000\
−0.4869

(b, g)

![nitrobenzene, M08-SO (8,8), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/m08_88_33A.svg)**g** 33A · 0.000006\
−0.1843

![nitrobenzene, M08-SO (8,8), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/m08_88_30A.svg)**b** 30A · 1.999994\
−0.3811

(c, f)

![nitrobenzene, M08-SO (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/m08_88_35A.svg)**f** 35A · 0.000000\
−0.1133

![nitrobenzene, M08-SO (8,8), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/m08_88_31A.svg)**c** 31A · 2.000000\
−0.3611

(d, e)

![nitrobenzene, M08-SO (8,8), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/m08_88_34A.svg)**e** 34A · 0.000007\
−0.1579

![nitrobenzene, M08-SO (8,8), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/m08_88_32A.svg)**d** 32A · 1.999993\
−0.3606

ωB97X, (4,4)

(a, d)

![nitrobenzene, ωB97X (4,4), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/wb_44_33A.svg)**d** 33A · 0.000009\
−0.1932

![nitrobenzene, ωB97X (4,4), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/wb_44_30A.svg)**a** 30A · 1.999991\
−0.3974

(b, c)

![nitrobenzene, ωB97X (4,4), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/wb_44_34A.svg)**c** 34A · 0.000089\
−0.1762

![nitrobenzene, ωB97X (4,4), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/wb_44_31A.svg)**b** 31A · 1.999911\
−0.3942

ωB97X, (6,6)

(a, f)

![nitrobenzene, ωB97X (6,6), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/wb_66_33A.svg)**f** 33A · 0.000043\
−0.2112

![nitrobenzene, ωB97X (6,6), orbital 30A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/wb_66_30A.svg)**a** 30A · 1.999957\
−0.4072

(b, e)

![nitrobenzene, ωB97X (6,6), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/wb_66_35A.svg)**e** 35A · 0.000001\
−0.1219

![nitrobenzene, ωB97X (6,6), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/wb_66_31A.svg)**b** 31A · 1.999999\
−0.3898

(c, d)

![nitrobenzene, ωB97X (6,6), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/wb_66_34A.svg)**d** 34A · 0.000013\
−0.1515

![nitrobenzene, ωB97X (6,6), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/wb_66_32A.svg)**c** 32A · 1.999987\
−0.3898

ωB97X, (8,8)

(a, h)

![nitrobenzene, ωB97X (8,8), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/wb_88_36A.svg)**h** 36A · 0.000000\
−0.0111

![nitrobenzene, ωB97X (8,8), orbital 25A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/wb_88_25A.svg)**a** 25A · 2.000000\
−0.5242

(b, g)

![nitrobenzene, ωB97X (8,8), orbital 33A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/wb_88_33A.svg)**g** 33A · 0.000009\
−0.2098

![nitrobenzene, ωB97X (8,8), orbital 29A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/wb_88_29A.svg)**b** 29A · 1.999991\
−0.4067

(c, f)

![nitrobenzene, ωB97X (8,8), orbital 35A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/wb_88_35A.svg)**f** 35A · 0.000000\
−0.1324

![nitrobenzene, ωB97X (8,8), orbital 31A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/wb_88_31A.svg)**c** 31A · 2.000000\
−0.3945

(d, e)

![nitrobenzene, ωB97X (8,8), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/wb_88_34A.svg)**e** 34A · 0.000054\
−0.1839

![nitrobenzene, ωB97X (8,8), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_nitrobenzene/wb_88_32A.svg)**d** 32A · 1.999946\
−0.3931

[← nitroaniline](https://reksstudio.github.io/v2/main/results/quest/quest6-nitroaniline/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-nitrobenzene) · [nitrodimethylaniline →](https://reksstudio.github.io/v2/main/results/quest/quest6-nitrodimethylaniline/index.md)
