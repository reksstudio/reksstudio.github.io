# butadiene — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest3-butadiene/>

Psi4 bd0fb43ef, 2026-10-15: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# butadiene

QUEST3: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](https://reksstudio.github.io/v2/main/results/quest/quest3-butadiene/index.md#s1) · [S2](https://reksstudio.github.io/v2/main/results/quest/quest3-butadiene/index.md#s2) · [T1](https://reksstudio.github.io/v2/main/results/quest/quest3-butadiene/index.md#t1) · [T2](https://reksstudio.github.io/v2/main/results/quest/quest3-butadiene/index.md#t2) · [Orbitals](https://reksstudio.github.io/v2/main/results/quest/quest3-butadiene/index.md#orbitals)

![butadiene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_butadiene.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: B<sub>u</sub> 6.22 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 5.776 | −0.444 | B<sub>u</sub> |
| | (4,4) | 5.916 | −0.304 | B<sub>u</sub> |
| | **(6,6)** | **6.077** | **−0.143** | B<sub>u</sub> |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | 5.529 | −0.691 | B<sub>u</sub> |
| | (4,4) | 5.677 | −0.543 | B<sub>u</sub> |
| | **(6,6)** | **5.772** | **−0.448** | B<sub>u</sub> |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | 5.954 | −0.267 | B<sub>u</sub> |
| | (4,4) | 6.085 | −0.135 | B<sub>u</sub> |
| | **(6,6)** | **6.248** | **+0.028** | B<sub>u</sub> |
| | (8,8) | – | – | – |

### S2 {#s2}

TBE: A<sub>g</sub> 6.50 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | (4,4) | 6.321 | −0.179 | A<sub>g</sub> |
| | **(6,6)** | **6.341** | **−0.159** | A<sub>g</sub> |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | (4,4) | 6.262 | −0.238 | A<sub>g</sub> |
| | **(6,6)** | **6.274** | **−0.226** | A<sub>g</sub> |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **6.212** | **−0.288** | A<sub>g</sub> |
| | (6,6) | 6.230 | −0.270 | A<sub>g</sub> |
| | (8,8) | – | – | – |

### T1 {#t1}

TBE: B<sub>u</sub> 3.36 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | 3.534 | +0.174 | B<sub>u</sub> |
| | **(4,4)** | **3.356** | **−0.004** | B<sub>u</sub> |
| | (6,6) | 3.394 | +0.034 | B<sub>u</sub> |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | 3.710 | +0.350 | B<sub>u</sub> |
| | **(4,4)** | **3.513** | **+0.153** | B<sub>u</sub> |
| | (6,6) | 3.551 | +0.192 | B<sub>u</sub> |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | 3.707 | +0.347 | B<sub>u</sub> |
| | **(4,4)** | **3.513** | **+0.153** | B<sub>u</sub> |
| | (6,6) | 3.558 | +0.198 | B<sub>u</sub> |
| | (8,8) | – | – | – |

### T2 {#t2}

TBE: A<sub>g</sub> 5.20 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **5.087** | **−0.113** | A<sub>g</sub> |
| | (6,6) | 5.045 | −0.155 | A<sub>g</sub> |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **5.159** | **−0.041** | A<sub>g</sub> |
| | (6,6) | 5.143 | −0.057 | A<sub>g</sub> |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 5.245 | +0.044 | A<sub>g</sub> |
| | **(6,6)** | **5.236** | **+0.036** | A<sub>g</sub> |
| | (8,8) | – | – | – |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (2,2)

(a, b)

![butadiene, BH\&HLYP (2,2), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/bh_22_16A.svg)**b** 16A · 0.000790\
−0.1121

![butadiene, BH\&HLYP (2,2), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/bh_22_15A.svg)**a** 15A · 1.999210\
−0.2875

BH\&HLYP, (4,4)

(a, d)

(b, c)

![butadiene, BH\&HLYP (4,4), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/bh_44_17A.svg)**d** 17A · 0.000000\
−0.0560

![butadiene, BH\&HLYP (4,4), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/bh_44_16A.svg)**c** 16A · 0.000815\
−0.1235

![butadiene, BH\&HLYP (4,4), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/bh_44_14A.svg)**a** 14A · 2.000000\
−0.3993

![butadiene, BH\&HLYP (4,4), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/bh_44_15A.svg)**b** 15A · 1.999185\
−0.3000

BH\&HLYP, (6,6)

(a, f)

(b, e)

(c, d)

![butadiene, BH\&HLYP (6,6), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/bh_66_18A.svg)**f** 18A · 0.000000\
−0.0744

![butadiene, BH\&HLYP (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/bh_66_17A.svg)**e** 17A · 0.000000\
−0.0781

![butadiene, BH\&HLYP (6,6), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/bh_66_16A.svg)**d** 16A · 0.001148\
−0.1410

![butadiene, BH\&HLYP (6,6), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/bh_66_13A.svg)**a** 13A · 2.000000\
−0.4483

![butadiene, BH\&HLYP (6,6), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/bh_66_14A.svg)**b** 14A · 2.000000\
−0.4192

![butadiene, BH\&HLYP (6,6), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/bh_66_15A.svg)**c** 15A · 1.998852\
−0.3141

M08-SO, (2,2)

(a, b)

![butadiene, M08-SO (2,2), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/m08_22_16A.svg)**b** 16A · 0.000206\
−0.1298

![butadiene, M08-SO (2,2), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/m08_22_15A.svg)**a** 15A · 1.999794\
−0.3024

M08-SO, (4,4)

(a, d)

(b, c)

![butadiene, M08-SO (4,4), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/m08_44_17A.svg)**d** 17A · 0.000000\
−0.0739

![butadiene, M08-SO (4,4), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/m08_44_16A.svg)**c** 16A · 0.000167\
−0.1432

![butadiene, M08-SO (4,4), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/m08_44_14A.svg)**a** 14A · 2.000000\
−0.4113

![butadiene, M08-SO (4,4), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/m08_44_15A.svg)**b** 15A · 1.999833\
−0.3139

M08-SO, (6,6)

(a, f)

(b, e)

(c, d)

![butadiene, M08-SO (6,6), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/m08_66_18A.svg)**f** 18A · 0.000000\
−0.0834

![butadiene, M08-SO (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/m08_66_17A.svg)**e** 17A · 0.000000\
−0.0971

![butadiene, M08-SO (6,6), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/m08_66_16A.svg)**d** 16A · 0.000243\
−0.1577

![butadiene, M08-SO (6,6), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/m08_66_13A.svg)**a** 13A · 2.000000\
−0.4481

![butadiene, M08-SO (6,6), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/m08_66_14A.svg)**b** 14A · 2.000000\
−0.4314

![butadiene, M08-SO (6,6), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/m08_66_15A.svg)**c** 15A · 1.999757\
−0.3280

ωB97X, (2,2)

(a, b)

![butadiene, ωB97X (2,2), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/wb_22_16A.svg)**b** 16A · 0.000649\
−0.1563

![butadiene, ωB97X (2,2), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/wb_22_15A.svg)**a** 15A · 1.999351\
−0.3376

ωB97X, (4,4)

(a, d)

(b, c)

![butadiene, ωB97X (4,4), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/wb_44_17A.svg)**d** 17A · 0.000000\
−0.0950

![butadiene, ωB97X (4,4), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/wb_44_16A.svg)**c** 16A · 0.000552\
−0.1719

![butadiene, ωB97X (4,4), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/wb_44_14A.svg)**a** 14A · 2.000000\
−0.4480

![butadiene, ωB97X (4,4), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/wb_44_15A.svg)**b** 15A · 1.999448\
−0.3465

ωB97X, (6,6)

(a, f)

(b, e)

(c, d)

![butadiene, ωB97X (6,6), orbital 18A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/wb_66_18A.svg)**f** 18A · 0.000000\
−0.0927

![butadiene, ωB97X (6,6), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/wb_66_17A.svg)**e** 17A · 0.000000\
−0.1213

![butadiene, ωB97X (6,6), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/wb_66_16A.svg)**d** 16A · 0.000775\
−0.1882

![butadiene, ωB97X (6,6), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/wb_66_13A.svg)**a** 13A · 2.000000\
−0.4830

![butadiene, ωB97X (6,6), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/wb_66_14A.svg)**b** 14A · 2.000000\
−0.4713

![butadiene, ωB97X (6,6), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_butadiene/wb_66_15A.svg)**c** 15A · 1.999225\
−0.3628

[← benzene](https://reksstudio.github.io/v2/main/results/quest/quest3-benzene/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-butadiene) · [cyanoacetylene →](https://reksstudio.github.io/v2/main/results/quest/quest3-cyanoacetylene/index.md)
