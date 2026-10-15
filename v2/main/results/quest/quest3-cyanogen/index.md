# cyanogen — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest3-cyanogen/>

Psi4 bd0fb43ef, 2026-10-15: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# cyanogen

QUEST3: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](https://reksstudio.github.io/v2/main/results/quest/quest3-cyanogen/index.md#s1) · [S2](https://reksstudio.github.io/v2/main/results/quest/quest3-cyanogen/index.md#s2) · [T1](https://reksstudio.github.io/v2/main/results/quest/quest3-cyanogen/index.md#t1) · [Orbitals](https://reksstudio.github.io/v2/main/results/quest/quest3-cyanogen/index.md#orbitals)

![cyanogen: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_cyanogen.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: Σ<sub>u</sub><sup>−</sup> 6.39 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | (4,4) | 5.967 | −0.423 | A<sub>u</sub><sup>a</sup> |
| | **(6,6)** | **6.180** | **−0.210** | A<sub>u</sub><sup>a</sup> |
| | (8,8) | 5.819 | −0.571 | A<sub>u</sub><sup>a</sup> |
| M08-SO | (2,2) | – | – | – |
| | (4,4) | 6.304 | −0.086 | A<sub>u</sub><sup>a</sup> |
| | **(6,6)** | **6.474** | **+0.084** | A<sub>u</sub><sup>a</sup> |
| | (8,8) | 6.117 | −0.273 | A<sub>u</sub><sup>a</sup> |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 6.204 | −0.186 | A<sub>u</sub><sup>a</sup> |
| | **(6,6)** | **6.391** | **+0.001** | A<sub>u</sub><sup>a</sup> |
| | (8,8) | 5.999 | −0.391 | A<sub>u</sub><sup>a</sup> |

### S2 {#s2}

TBE: Δ<sub>u</sub> 6.66 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | (4,4) | 5.972 | −0.688 | B<sub>1u</sub><sup>a</sup> |
| | **(6,6)** | **6.153** | **−0.507** | B<sub>1u</sub><sup>a</sup> |
| | (8,8) | 5.801 | −0.859 | B<sub>1u</sub><sup>a</sup> |
| M08-SO | (2,2) | – | – | – |
| | (4,4) | 5.616 | −1.044 | B<sub>1u</sub><sup>a</sup> |
| | **(6,6)** | **5.791** | **−0.869** | B<sub>1u</sub><sup>a</sup> |
| | (8,8) | 5.369 | −1.291 | B<sub>1u</sub><sup>a</sup> |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 5.716 | −0.944 | B<sub>1u</sub><sup>a</sup> |
| | **(6,6)** | **5.915** | **−0.745** | B<sub>1u</sub><sup>a</sup> |
| | (8,8) | 5.478 | −1.182 | B<sub>1u</sub><sup>a</sup> |

### T1 {#t1}

TBE: Σ<sub>u</sub><sup>+</sup> 4.91 eV

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | (4,4) | 5.024 | +0.114 | B<sub>1u</sub><sup>a</sup> |
| | (6,6) | 5.272 | +0.362 | B<sub>1u</sub><sup>a</sup> |
| | **(8,8)** | **4.839** | **−0.071** | B<sub>1u</sub><sup>a</sup> |
| M08-SO | (2,2) | – | – | – |
| | (4,4) | 5.416 | +0.506 | B<sub>1u</sub><sup>a</sup> |
| | (6,6) | 5.622 | +0.713 | B<sub>1u</sub><sup>a</sup> |
| | **(8,8)** | **5.150** | **+0.240** | B<sub>1u</sub><sup>a</sup> |
| ωB97X | (2,2) | – | – | – |
| | (4,4) | 5.270 | +0.360 | B<sub>1u</sub><sup>a</sup> |
| | (6,6) | 5.489 | +0.579 | B<sub>1u</sub><sup>a</sup> |
| | **(8,8)** | **4.976** | **+0.066** | B<sub>1u</sub><sup>a</sup> |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, linear molecule: slice in a plane through the axis, turned per orbital to its largest lobe; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (4,4)

(a, d)

(b, c)

![cyanogen, BH\&HLYP (4,4), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/bh_44m_15A.svg)**d** 15A · 0.000000\
−0.2325

![cyanogen, BH\&HLYP (4,4), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/bh_44m_14A.svg)**c** 14A · 0.000000\
−0.2326

![cyanogen, BH\&HLYP (4,4), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/bh_44m_13A.svg)**a** 13A · 2.000000\
−0.4542

![cyanogen, BH\&HLYP (4,4), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/bh_44m_12A.svg)**b** 12A · 2.000000\
−0.4542

BH\&HLYP, (6,6)

(a, f)

(b, e)

(c, d)

![cyanogen, BH\&HLYP (6,6), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/bh_66_16A.svg)**f** 16A · 0.000000\
−0.0745

![cyanogen, BH\&HLYP (6,6), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/bh_66_15A.svg)**e** 15A · 0.000332\
−0.2243

![cyanogen, BH\&HLYP (6,6), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/bh_66_14A.svg)**d** 14A · 0.000391\
−0.2381

![cyanogen, BH\&HLYP (6,6), orbital 7A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/bh_66_7A.svg)**a** 7A · 2.000000\
−0.8734

![cyanogen, BH\&HLYP (6,6), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/bh_66_12A.svg)**b** 12A · 1.999668\
−0.4628

![cyanogen, BH\&HLYP (6,6), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/bh_66_13A.svg)**c** 13A · 1.999609\
−0.4607

BH\&HLYP, (8,8)

(a, h)

(b, g)

(c, f)

(d, e)

![cyanogen, BH\&HLYP (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/bh_88_16A.svg)**h** 16A · 0.000000\
−0.0341

![cyanogen, BH\&HLYP (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/bh_88_17A.svg)**g** 17A · 0.000000\
−0.0235

![cyanogen, BH\&HLYP (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/bh_88_15A.svg)**f** 15A · 0.000287\
−0.2167

![cyanogen, BH\&HLYP (8,8), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/bh_88_14A.svg)**e** 14A · 0.000396\
−0.2536

![cyanogen, BH\&HLYP (8,8), orbital 9A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/bh_88_9A.svg)**a** 9A · 2.000000\
−0.5395

![cyanogen, BH\&HLYP (8,8), orbital 10A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/bh_88_10A.svg)**b** 10A · 2.000000\
−0.5333

![cyanogen, BH\&HLYP (8,8), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/bh_88_12A.svg)**c** 12A · 1.999713\
−0.4550

![cyanogen, BH\&HLYP (8,8), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/bh_88_13A.svg)**d** 13A · 1.999604\
−0.4501

M08-SO, (4,4)

(a, d)

(b, c)

![cyanogen, M08-SO (4,4), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/m08_44m_15A.svg)**d** 15A · 0.000000\
−0.2346

![cyanogen, M08-SO (4,4), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/m08_44m_14A.svg)**c** 14A · 0.000000\
−0.2346

![cyanogen, M08-SO (4,4), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/m08_44m_13A.svg)**a** 13A · 2.000000\
−0.4614

![cyanogen, M08-SO (4,4), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/m08_44m_12A.svg)**b** 12A · 2.000000\
−0.4614

M08-SO, (6,6)

(a, f)

(b, e)

(c, d)

![cyanogen, M08-SO (6,6), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/m08_66_16A.svg)**f** 16A · 0.000000\
−0.0846

![cyanogen, M08-SO (6,6), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/m08_66_15A.svg)**e** 15A · 0.000067\
−0.2326

![cyanogen, M08-SO (6,6), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/m08_66_14A.svg)**d** 14A · 0.000077\
−0.2500

![cyanogen, M08-SO (6,6), orbital 7A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/m08_66_7A.svg)**a** 7A · 2.000000\
−0.8535

![cyanogen, M08-SO (6,6), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/m08_66_12A.svg)**b** 12A · 1.999933\
−0.4734

![cyanogen, M08-SO (6,6), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/m08_66_13A.svg)**c** 13A · 1.999923\
−0.4716

M08-SO, (8,8)

(a, h)

(b, g)

(c, f)

(d, e)

![cyanogen, M08-SO (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/m08_88_16A.svg)**h** 16A · 0.000000\
−0.0491

![cyanogen, M08-SO (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/m08_88_17A.svg)**g** 17A · 0.000000\
−0.0403

![cyanogen, M08-SO (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/m08_88_15A.svg)**f** 15A · 0.000058\
−0.2244

![cyanogen, M08-SO (8,8), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/m08_88_14A.svg)**e** 14A · 0.000075\
−0.2615

![cyanogen, M08-SO (8,8), orbital 8A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/m08_88_8A.svg)**a** 8A · 2.000000\
−0.5480

![cyanogen, M08-SO (8,8), orbital 9A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/m08_88_9A.svg)**b** 9A · 2.000000\
−0.5419

![cyanogen, M08-SO (8,8), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/m08_88_12A.svg)**c** 12A · 1.999942\
−0.4627

![cyanogen, M08-SO (8,8), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/m08_88_13A.svg)**d** 13A · 1.999925\
−0.4587

ωB97X, (4,4)

(a, d)

(b, c)

![cyanogen, ωB97X (4,4), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/wb_44m_15A.svg)**d** 15A · 0.000000\
−0.2702

![cyanogen, ωB97X (4,4), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/wb_44m_14A.svg)**c** 14A · 0.000000\
−0.2702

![cyanogen, ωB97X (4,4), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/wb_44m_13A.svg)**a** 13A · 2.000000\
−0.4958

![cyanogen, ωB97X (4,4), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/wb_44m_12A.svg)**b** 12A · 2.000000\
−0.4958

ωB97X, (6,6)

(a, f)

(b, e)

(c, d)

![cyanogen, ωB97X (6,6), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/wb_66_16A.svg)**f** 16A · 0.000000\
−0.1080

![cyanogen, ωB97X (6,6), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/wb_66_15A.svg)**e** 15A · 0.000120\
−0.2647

![cyanogen, ωB97X (6,6), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/wb_66_14A.svg)**d** 14A · 0.000148\
−0.2769

![cyanogen, ωB97X (6,6), orbital 7A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/wb_66_7A.svg)**a** 7A · 2.000000\
−0.8903

![cyanogen, ωB97X (6,6), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/wb_66_12A.svg)**b** 12A · 1.999880\
−0.5024

![cyanogen, ωB97X (6,6), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/wb_66_13A.svg)**c** 13A · 1.999852\
−0.5022

ωB97X, (8,8)

(a, h)

(b, g)

(c, f)

(d, e)

![cyanogen, ωB97X (8,8), orbital 16A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/wb_88_16A.svg)**h** 16A · 0.000000\
−0.0691

![cyanogen, ωB97X (8,8), orbital 17A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/wb_88_17A.svg)**g** 17A · 0.000000\
−0.0585

![cyanogen, ωB97X (8,8), orbital 15A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/wb_88_15A.svg)**f** 15A · 0.000101\
−0.2574

![cyanogen, ωB97X (8,8), orbital 14A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/wb_88_14A.svg)**e** 14A · 0.000137\
−0.2853

![cyanogen, ωB97X (8,8), orbital 8A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/wb_88_8A.svg)**a** 8A · 2.000000\
−0.5780

![cyanogen, ωB97X (8,8), orbital 9A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/wb_88_9A.svg)**b** 9A · 2.000000\
−0.5746

![cyanogen, ωB97X (8,8), orbital 12A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/wb_88_12A.svg)**c** 12A · 1.999899\
−0.4902

![cyanogen, ωB97X (8,8), orbital 13A](https://reksstudio.github.io/v2/figures/quest/orb/quest3_cyanogen/wb_88_13A.svg)**d** 13A · 1.999863\
−0.4875

[← cyanoformaldehyde](https://reksstudio.github.io/v2/main/results/quest/quest3-cyanoformaldehyde/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-cyanogen) · [cyclopentadiene →](https://reksstudio.github.io/v2/main/results/quest/quest3-cyclopentadiene/index.md)
