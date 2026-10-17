# cyanoformaldehyde — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest3-cyanoformaldehyde/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# cyanoformaldehyde

QUEST3: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](#s1) · [T1](#t1) · [T2](#t2) · [Orbitals](#orbitals)

![cyanoformaldehyde: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_cyanoformaldehyde.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: A′′ 3.81 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **3.954** | **+0.144** | A′′ |
| | (6,6) | 6.624 | +2.814 | A′′ |
| | (8,8) | 6.772 | +2.962 | A′′ |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **4.088** | **+0.278** | A′′ |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **4.103** | **+0.293** | A′′ |
| | (6,6) | 6.782 | +2.972 | A′′ |
| | (8,8) | – | – | – |

### T1 {#t1}

TBE: A′′ 3.44 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **3.451** | **+0.011** | A′′ |
| | (6,6) | 6.227 | +2.787 | A′′ |
| | (8,8) | 6.351 | +2.911 | A′′ |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **3.732** | **+0.292** | A′′ |
| | (6,6) | 6.348 | +2.908 | A′′ |
| | (8,8) | 6.424 | +2.984 | A′′ |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **3.611** | **+0.171** | A′′ |
| | (6,6) | 6.303 | +2.863 | A′′ |
| | (8,8) | – | – | – |

### T2 {#t2}

TBE: A′ 5.01 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | **(2,2)** | **4.889** | **−0.121** | A′ |
| | (4,4) | 4.815 | −0.195 | A′ |
| | (6,6) | 4.781 | −0.229 | A′ |
| | (8,8) | 4.805 | −0.205 | A′ |
| M08-SO | (2,2) | 5.264 | +0.254 | A′ |
| | (4,4) | 5.067 | +0.057 | A′ |
| | **(6,6)** | **5.031** | **+0.021** | A′ |
| | (8,8) | 5.079 | +0.069 | A′ |
| ωB97X | (2,2) | 5.131 | +0.121 | A′ |
| | (4,4) | 4.897 | −0.113 | A′ |
| | (6,6) | 4.892 | −0.118 | A′ |
| | **(8,8)** | **4.917** | **−0.093** | A′ |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (2,2)

(a, b)

![cyanoformaldehyde, BH\&HLYP (2,2), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/bh_22_15A.svg)**b** 15A · 0.000105\
−0.2055

![cyanoformaldehyde, BH\&HLYP (2,2), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/bh_22_13A.svg)**a** 13A · 1.999895\
−0.4526

BH\&HLYP, (4,4)

(a, d)

![cyanoformaldehyde, BH\&HLYP (4,4), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/bh_44m_15A.svg)**d** 15A · 0.000000\
−0.2782

![cyanoformaldehyde, BH\&HLYP (4,4), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/bh_44m_14A.svg)**a** 14A · 2.000000\
−0.4262

(b, c)

![cyanoformaldehyde, BH\&HLYP (4,4), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/bh_44m_16A.svg)**c** 16A · 0.000000\
−0.1649

![cyanoformaldehyde, BH\&HLYP (4,4), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/bh_44m_12A.svg)**b** 12A · 2.000000\
−0.4517

BH\&HLYP, (6,6)

(a, f)

![cyanoformaldehyde, BH\&HLYP (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/bh_66_17A.svg)**f** 17A · 0.000000\
−0.0657

![cyanoformaldehyde, BH\&HLYP (6,6), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/bh_66_10A.svg)**a** 10A · 2.000000\
−0.5274

(b, e)

![cyanoformaldehyde, BH\&HLYP (6,6), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/bh_66_16A.svg)**e** 16A · 0.000400\
−0.1415

![cyanoformaldehyde, BH\&HLYP (6,6), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/bh_66_12A.svg)**b** 12A · 1.999600\
−0.4600

(c, d)

![cyanoformaldehyde, BH\&HLYP (6,6), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/bh_66_15A.svg)**d** 15A · 0.000301\
−0.2138

![cyanoformaldehyde, BH\&HLYP (6,6), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/bh_66_13A.svg)**c** 13A · 1.999699\
−0.4570

BH\&HLYP, (8,8)

(a, h)

![cyanoformaldehyde, BH\&HLYP (8,8), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/bh_88_18A.svg)**h** 18A · 0.000000\
−0.0760

![cyanoformaldehyde, BH\&HLYP (8,8), orbital 8A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/bh_88_8A.svg)**a** 8A · 2.000000\
−0.6860

(b, g)

![cyanoformaldehyde, BH\&HLYP (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/bh_88_17A.svg)**g** 17A · 0.000000\
−0.0875

![cyanoformaldehyde, BH\&HLYP (8,8), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/bh_88_10A.svg)**b** 10A · 2.000000\
−0.5504

(c, f)

![cyanoformaldehyde, BH\&HLYP (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/bh_88_16A.svg)**f** 16A · 0.000395\
−0.1693

![cyanoformaldehyde, BH\&HLYP (8,8), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/bh_88_12A.svg)**c** 12A · 1.999605\
−0.4758

(d, e)

![cyanoformaldehyde, BH\&HLYP (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/bh_88_15A.svg)**e** 15A · 0.000192\
−0.2437

![cyanoformaldehyde, BH\&HLYP (8,8), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/bh_88_13A.svg)**d** 13A · 1.999808\
−0.4706

M08-SO, (2,2)

(a, b)

![cyanoformaldehyde, M08-SO (2,2), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/m08_22_15A.svg)**b** 15A · 0.000031\
−0.2176

![cyanoformaldehyde, M08-SO (2,2), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/m08_22_13A.svg)**a** 13A · 1.999969\
−0.4611

M08-SO, (4,4)

(a, d)

![cyanoformaldehyde, M08-SO (4,4), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/m08_44m_15A.svg)**d** 15A · 0.000000\
−0.2808

![cyanoformaldehyde, M08-SO (4,4), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/m08_44m_14A.svg)**a** 14A · 2.000000\
−0.4285

(b, c)

![cyanoformaldehyde, M08-SO (4,4), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/m08_44m_16A.svg)**c** 16A · 0.000000\
−0.1710

![cyanoformaldehyde, M08-SO (4,4), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/m08_44m_12A.svg)**b** 12A · 2.000000\
−0.4590

M08-SO, (6,6)

(a, f)

![cyanoformaldehyde, M08-SO (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/m08_66_17A.svg)**f** 17A · 0.000000\
−0.0840

![cyanoformaldehyde, M08-SO (6,6), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/m08_66_10A.svg)**a** 10A · 2.000000\
−0.5386

(b, e)

![cyanoformaldehyde, M08-SO (6,6), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/m08_66_16A.svg)**e** 16A · 0.000069\
−0.1534

![cyanoformaldehyde, M08-SO (6,6), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/m08_66_12A.svg)**b** 12A · 1.999931\
−0.4674

(c, d)

![cyanoformaldehyde, M08-SO (6,6), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/m08_66_15A.svg)**d** 15A · 0.000056\
−0.2263

![cyanoformaldehyde, M08-SO (6,6), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/m08_66_13A.svg)**c** 13A · 1.999944\
−0.4665

M08-SO, (8,8)

(a, h)

![cyanoformaldehyde, M08-SO (8,8), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/m08_88_18A.svg)**h** 18A · 0.000000\
−0.0872

![cyanoformaldehyde, M08-SO (8,8), orbital 8A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/m08_88_8A.svg)**a** 8A · 2.000000\
−0.6813

(b, g)

![cyanoformaldehyde, M08-SO (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/m08_88_17A.svg)**g** 17A · 0.000000\
−0.1063

![cyanoformaldehyde, M08-SO (8,8), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/m08_88_10A.svg)**b** 10A · 2.000000\
−0.5605

(c, f)

![cyanoformaldehyde, M08-SO (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/m08_88_16A.svg)**f** 16A · 0.000069\
−0.1794

![cyanoformaldehyde, M08-SO (8,8), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/m08_88_12A.svg)**c** 12A · 1.999931\
−0.4838

(d, e)

![cyanoformaldehyde, M08-SO (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/m08_88_15A.svg)**e** 15A · 0.000042\
−0.2530

![cyanoformaldehyde, M08-SO (8,8), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/m08_88_13A.svg)**d** 13A · 1.999958\
−0.4795

ωB97X, (2,2)

(a, b)

![cyanoformaldehyde, ωB97X (2,2), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/wb_22_15A.svg)**b** 15A · 0.000041\
−0.2535

![cyanoformaldehyde, ωB97X (2,2), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/wb_22_13A.svg)**a** 13A · 1.999959\
−0.4965

ωB97X, (4,4)

(a, d)

![cyanoformaldehyde, ωB97X (4,4), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/wb_44m_15A.svg)**d** 15A · 0.000000\
−0.3131

![cyanoformaldehyde, ωB97X (4,4), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/wb_44m_14A.svg)**a** 14A · 2.000000\
−0.4517

(b, c)

![cyanoformaldehyde, ωB97X (4,4), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/wb_44m_16A.svg)**c** 16A · 0.000000\
−0.2027

![cyanoformaldehyde, ωB97X (4,4), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/wb_44m_12A.svg)**b** 12A · 2.000000\
−0.4970

ωB97X, (6,6)

(a, f)

![cyanoformaldehyde, ωB97X (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/wb_66_17A.svg)**f** 17A · 0.000000\
−0.1125

![cyanoformaldehyde, ωB97X (6,6), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/wb_66_10A.svg)**a** 10A · 2.000000\
−0.5718

(b, e)

![cyanoformaldehyde, ωB97X (6,6), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/wb_66_16A.svg)**e** 16A · 0.000121\
−0.1834

![cyanoformaldehyde, ωB97X (6,6), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/wb_66_12A.svg)**b** 12A · 1.999879\
−0.4992

(c, d)

![cyanoformaldehyde, ωB97X (6,6), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/wb_66_15A.svg)**d** 15A · 0.000094\
−0.2611

![cyanoformaldehyde, ωB97X (6,6), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/wb_66_13A.svg)**c** 13A · 1.999906\
−0.4977

ωB97X, (8,8)

(a, h)

![cyanoformaldehyde, ωB97X (8,8), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/wb_88_18A.svg)**h** 18A · 0.000000\
−0.1079

![cyanoformaldehyde, ωB97X (8,8), orbital 8A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/wb_88_8A.svg)**a** 8A · 2.000000\
−0.6890

(b, g)

![cyanoformaldehyde, ωB97X (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/wb_88_17A.svg)**g** 17A · 0.000000\
−0.1379

![cyanoformaldehyde, ωB97X (8,8), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/wb_88_10A.svg)**b** 10A · 2.000000\
−0.5999

(c, f)

![cyanoformaldehyde, ωB97X (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/wb_88_16A.svg)**f** 16A · 0.000051\
−0.2064

![cyanoformaldehyde, ωB97X (8,8), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/wb_88_13A.svg)**c** 13A · 1.999949\
−0.5166

(d, e)

![cyanoformaldehyde, ωB97X (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/wb_88_15A.svg)**e** 15A · 0.000072\
−0.2931

![cyanoformaldehyde, ωB97X (8,8), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanoformaldehyde/wb_88_12A.svg)**d** 12A · 1.999928\
−0.5197

[← cyanoacetylene](https://reksstudio.github.io/v2/main/results/quest/quest3-cyanoacetylene/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-cyanoformaldehyde) · [cyanogen →](https://reksstudio.github.io/v2/main/results/quest/quest3-cyanogen/index.md)
