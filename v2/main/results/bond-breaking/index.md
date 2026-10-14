# Single, double and triple bonds: C2H4, N2, C2H2 — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/bond-breaking/>

Psi4 d40267fc2, 2026-10-13: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# Single, double and triple bonds: C<sub>2</sub>H<sub>4</sub>, N<sub>2</sub>, C<sub>2</sub>H<sub>2</sub>

Potential energy curves along the multiple bond with SSR; vertical excitations against TBE, bond lengths against experiment.

Reference class: model vs benchmark set (TBE); secondary: model vs experiment

Lowest vertical excitation vs TBE: 7.85 / 7.93, 9.49 / 9.88, 6.66 / 7.10 eV; R<sub>e</sub> within 0.004 Å of experiment.

[C<sub>2</sub>H<sub>4</sub>](https://reksstudio.github.io/v2/main/results/bond-breaking/index.md#c2h4) · [N<sub>2</sub>](https://reksstudio.github.io/v2/main/results/bond-breaking/index.md#n2) · [C<sub>2</sub>H<sub>2</sub>](https://reksstudio.github.io/v2/main/results/bond-breaking/index.md#c2h2)

## C<sub>2</sub>H<sub>4</sub>

B<sup>1</sup>B<sub>1u</sub> vertical 7.85 eV (TBE 7.93 eV); R<sub>e</sub> 1.335 Å (experiment 1.339 Å).

![C2H4 potential energy curves along R_CC, SSR(4,4), and active orbitals with occupations at 4.000 Å](https://reksstudio.github.io/v2/figures/main/c2h4.webp)

PECs as computed (no reference curve in v1); active orbitals and occupations at 4.000 Å.

| Quantity | SSR | Reference | Class |
| - | - | - | - |
| B<sup>1</sup>B<sub>1u</sub> vertical / eV | 7.85 | 7.93 (TBE) | C |
| R<sub>e</sub> / Å | 1.335 | 1.339 (experiment) | D |

### Setup

Method: SSR(4,4), BH\&HLYP; SA PPS1 + OSS1 + OSS2 + HS; SI 18 configurations

Basis: aug-cc-pVTZ

Scan: R<sub>CC</sub>, step 0.05 Å, other coordinates fixed at experiment

How the equilibrium distance was obtained: not stated in v1

Geometry of the vertical: not stated in v1

### Reference

Vertical: QUEST TBE.

R<sub>e</sub>: experiment.

**Provenance:** Paper v1, Fig. 3A,B; SI p90 (from the paper-scout digest, to be re-checked).

## N<sub>2</sub>

Vertical 9.49 eV (TBE 9.88 eV), state label to be added; R<sub>e</sub> 1.096 Å (experiment 1.098 Å).

![N2 potential energy curves along R_NN, SSR(6,6), KS curve, and active orbitals](https://reksstudio.github.io/v2/figures/main/n2.webp)

PECs as computed, KS curve for contrast; active orbitals and occupations at 1.096 and 4.000 Å.

| Quantity | SSR | Reference | Class |
| - | - | - | - |
| vertical / eV (state to be added) | 9.49 | 9.88 (TBE) | C |
| R<sub>e</sub> / Å | 1.096 | 1.098 (experiment, Huber–Herzberg) | D |

### Setup

Method: SSR(6,6), BH\&HLYP

Basis: to be added

Scan: not stated in v1

How the equilibrium distance was obtained: not stated in v1

### Reference

Vertical: QUEST TBE.

R<sub>e</sub>: experiment (Huber–Herzberg).

**Provenance:** Paper v1, Fig. 3C,D.

## C<sub>2</sub>H<sub>2</sub>

Vertical 6.66 eV (TBE 7.10 eV), state label to be added; R<sub>e</sub> 1.201 Å (experiment 1.203 Å); avoided crossing along R<sub>CC</sub>.

![C2H2 potential energy curves along R_CC, SSR(6,6), with the avoided crossing, and active orbitals](https://reksstudio.github.io/v2/figures/main/c2h2.webp)

PECs as computed with the avoided crossing; active orbitals and occupations at 1.201, 2.500 and 4.000 Å.

| Quantity | SSR | Reference | Class |
| - | - | - | - |
| vertical / eV (state to be added) | 6.66 | 7.10 (TBE) | C |
| R<sub>e</sub> / Å | 1.201 | 1.203 (experiment) | D |

### Setup

Method: SSR(6,6), BH\&HLYP

Basis: to be added

Scan: not stated in v1

How the equilibrium distance was obtained: not stated in v1

### Reference

Vertical: QUEST TBE.

R<sub>e</sub>: experiment; avoided crossing: Siegbahn 1981 (citation to be added).

**Provenance:** Paper v1, Fig. 3E,F.

**Scope:** Not shown: reference curves along R (v1 has none); other states against TBE.

## Run, ask, cite

* Input: to be added.
* [Manual: Start](https://reksstudio.github.io/v2/manual/index.md#overview) · [Install](https://reksstudio.github.io/v2/docs/index.md#install) · [Cite](https://reksstudio.github.io/v2/docs/index.md#cite) · [Contact](https://reksstudio.github.io/v2/docs/index.md#contact)
* [Back to the Results index](https://reksstudio.github.io/v2/main/results/index.md#row-bond-breaking)

Other results: [Exactness](https://reksstudio.github.io/v2/main/results/exactness/index.md) · [H chains](https://reksstudio.github.io/v2/main/results/h-chains/index.md) · [C<sub>2</sub>](https://reksstudio.github.io/v2/main/results/c2/index.md) · [QUEST](https://reksstudio.github.io/v2/main/results/quest/index.md) · [TTR](https://reksstudio.github.io/v2/main/results/ttr/index.md) · [Zethrenes](https://reksstudio.github.io/v2/main/results/zethrenes/index.md) · [C<sub>2</sub>H<sub>4</sub> photochemistry](https://reksstudio.github.io/v2/main/results/c2h4-photochemistry/index.md)
