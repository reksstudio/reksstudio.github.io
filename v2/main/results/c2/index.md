# Carbon dimer C2 — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/c2/>

Psi4 bd0fb43ef, 2026-10-15: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# Carbon dimer C<sub>2</sub>

Four lowest states of C<sub>2</sub> along the C–C distance; spectroscopic constants against experiment.

Reference class: model vs experiment

X: R<sub>e</sub> 1.268 Å (exp. 1.243), D<sub>e</sub> 6.28 eV (exp. 6.32 ± 0.2); B<sup>1</sup>Δ<sub>g</sub>: T<sub>e</sub> 1.02 eV (exp. 1.50).

![C2: potential energy curves of four states, active orbitals, occupations along R_CC, table of Re, Te, De](https://reksstudio.github.io/v2/figures/main/c2.webp)

(A) PECs of X, a, A, B with the KS curve for contrast; (B) active orbitals; (C) occupations of X along R<sub>CC</sub>; (D) constants, computed / experiment.

| State | R<sub>e</sub> / Å | R<sub>e</sub> exp. | T<sub>e</sub> / eV | T<sub>e</sub> exp. | D<sub>e</sub> / eV | D<sub>e</sub> exp. |
| - | - | - | - | - | - | - |
| X<sup>1</sup>Σ<sub>g</sub><sup>+</sup> | 1.268 | 1.243 | 0.0 | 0.0 | 6.28 | 6.32 ± 0.2 |
| a<sup>3</sup>Π<sub>u</sub> | 1.315 | 1.312 | 0.03 | 0.09 | | |
| A<sup>1</sup>Π<sub>u</sub> | 1.303 | 1.318 | 0.92 | 1.04 | | |
| B<sup>1</sup>Δ<sub>g</sub> | 1.373 | 1.385 | 1.02 | 1.50 | | |

### Setup

Method: SSR(6,6), SA 9 states, singlet and triplet SI

Functional: M08-SO (all other results: BH\&HLYP)

Basis: cc-pV5Z

Dissociation asymptote: two carbon atoms, SSR(4,4); 0.08 eV from ROKS

### Reference

Experiment (Martin 1992; Huber–Herzberg), citations to be added.

Near-exact curves: SHCI (Holmes et al. 2017, ref. 50 of v1, there called FCI); comparison number to be added (deferred item 12).

**Provenance:** Paper v1, Fig. 4; SI p91.

**Scope:** Not shown: deviation from SHCI along R.

## Run, ask, cite

* Input: to be added.
* [Manual: Start](https://reksstudio.github.io/v2/manual/index.md#overview) · [Install](https://reksstudio.github.io/v2/docs/index.md#install) · [Cite](https://reksstudio.github.io/v2/docs/index.md#cite) · [Contact](https://reksstudio.github.io/v2/docs/index.md#contact)
* [Back to the Results index](https://reksstudio.github.io/v2/main/results/index.md#row-c2)

Other results: [Exactness](https://reksstudio.github.io/v2/main/results/exactness/index.md) · [H chains](https://reksstudio.github.io/v2/main/results/h-chains/index.md) · [Bond breaking](https://reksstudio.github.io/v2/main/results/bond-breaking/index.md) · [QUEST](https://reksstudio.github.io/v2/main/results/quest/index.md) · [TTR](https://reksstudio.github.io/v2/main/results/ttr/index.md) · [Zethrenes](https://reksstudio.github.io/v2/main/results/zethrenes/index.md) · [C<sub>2</sub>H<sub>4</sub> photochemistry](https://reksstudio.github.io/v2/main/results/c2h4-photochemistry/index.md)
