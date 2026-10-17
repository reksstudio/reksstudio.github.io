# dipeptide — QUEST — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/quest6-dipeptide/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# dipeptide

QUEST6: SSR vertical excitation energies of every active space against the TBE; BH\&HLYP / M08-SO / ωB97X; aug-cc-pVTZ.

[S1](#s1) · [Orbitals](#orbitals)

![dipeptide: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest6_dipeptide.svg)

Computed geometry: explicit hydrogens, no bond orders.

* C
* H
* N
* O
* S

## States by active space

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. Bold: the value used on the QUEST page. –: the state is not matched at this active space.

### S1 {#s1}

TBE: A′′ 8.15 eV

S1 is the CT state: S3 in the REKS output. SA-REKS(4,4) ensemble: PPS + OSS1 + OSS2 + OSS3 + OSS4 + HS (cross OSS configurations), weights 1/6.

| Functional | Active space | SSR / eV | Δ / eV | SSR irrep |
| - | - | - | - | - |
| BH\&HLYP | (2,2) | – | – | – |
| | **(4,4)** | **7.913** | **−0.237** | A′′ |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| M08-SO | (2,2) | – | – | – |
| | **(4,4)** | **7.831** | **−0.319** | A′′ |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |
| ωB97X | (2,2) | – | – | – |
| | **(4,4)** | **8.209** | **+0.059** | A′′ |
| | (6,6) | – | – | – |
| | (8,8) | – | – | – |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Active orbitals

SA-REKS orbitals of the calculations in the table, slice 0.6 Å above the molecular plane; blue + / copper −. One column per pair of pairing scheme 0: antibonding orbital above, bonding orbital below; slot, MO, FON, ε / E<sub>h</sub>.

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP, (4,4)

(a, d)

![dipeptide, BH\&HLYP (4,4), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dipeptide/bh_44_37A.svg)**d** 37A · 0.000000\
−0.0793

![dipeptide, BH\&HLYP (4,4), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dipeptide/bh_44_32A.svg)**a** 32A · 2.000000\
−0.3601

(b, c)

![dipeptide, BH\&HLYP (4,4), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dipeptide/bh_44_36A.svg)**c** 36A · 0.000000\
−0.0910

![dipeptide, BH\&HLYP (4,4), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dipeptide/bh_44_34A.svg)**b** 34A · 2.000000\
−0.3487

M08-SO, (4,4)

(a, d)

![dipeptide, M08-SO (4,4), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dipeptide/m08_44_37A.svg)**d** 37A · 0.000000\
−0.0929

![dipeptide, M08-SO (4,4), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dipeptide/m08_44_32A.svg)**a** 32A · 2.000000\
−0.3679

(b, c)

![dipeptide, M08-SO (4,4), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dipeptide/m08_44_36A.svg)**c** 36A · 0.000000\
−0.1047

![dipeptide, M08-SO (4,4), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dipeptide/m08_44_34A.svg)**b** 34A · 2.000000\
−0.3564

ωB97X, (4,4)

(a, d)

![dipeptide, ωB97X (4,4), orbital 37A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dipeptide/wb_44_37A.svg)**d** 37A · 0.000000\
−0.1145

![dipeptide, ωB97X (4,4), orbital 32A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dipeptide/wb_44_32A.svg)**a** 32A · 2.000000\
−0.3908

(b, c)

![dipeptide, ωB97X (4,4), orbital 36A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dipeptide/wb_44_36A.svg)**c** 36A · 0.000000\
−0.1265

![dipeptide, ωB97X (4,4), orbital 34A](https://reksstudio.github.io/v2/figures/quest/orb/quest6_dipeptide/wb_44_34A.svg)**b** 34A · 2.000000\
−0.3780

[← dimethylaniline](https://reksstudio.github.io/v2/main/results/quest/quest6-dimethylaniline/index.md) · [Back to the gallery](https://reksstudio.github.io/v2/main/results/quest/index.md#m-dipeptide) · [DMABN →](https://reksstudio.github.io/v2/main/results/quest/quest6-dmabn/index.md)
