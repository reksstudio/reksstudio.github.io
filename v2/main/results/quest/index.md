# QUEST vertical excitations — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/>

Psi4 d40267fc2, 2026-10-13: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# QUEST vertical excitations

Lowest singlet vertical excitation energy of 67 molecules with mono-configurational ground states (QUEST3/5/6/7), against theoretical best estimates.

Reference class: model vs benchmark set (TBE)

MAD 0.36 eV, RMSD 0.37 eV, mean signed error +0.22 eV over 67 molecules.

![QUEST: SSR vertical excitation energies against TBE, and the error distribution](https://reksstudio.github.io/v2/figures/main/quest.webp)

(A) SSR against TBE; (B) error distribution with a Gaussian fit at the mean error.

Error statistics

| Set | MAD / eV | RMSD / eV | Mean signed / eV |
| - | - | - | - |
| 67 molecules, this work | 0.36 | 0.37 | +0.22 |

Comparator, shown apart (different set): Liang et al. 2022, their own set

| Method | MAD / eV | RMSD / eV |
| - | - | - |
| TDDFT BH\&HLYP | 0.30 | 0.38 |
| TDDFT B3LYP | 0.37 | 0.45 |

Full table

| Molecule | State | SSR / eV | TBE / eV |
| - | - | - | - |
| to be added | | | |

### Setup

Method: SSR(4,4); SSR(6,6) for benzene and triazine; full SI pool

Functional, basis: BH\&HLYP/aug-cc-pVTZ

Geometries: to be added

### Reference

QUEST theoretical best estimates (QUESTDB).

**Provenance:** Paper v1, pp 8–9; SI Note 4, SI Fig. 8–9.

**Scope:** Lowest singlet only; molecules with mono-configurational ground states; no same-set TDDFT comparison.

## Run, ask, cite

* Input: to be added.
* [Manual: Start](https://reksstudio.github.io/v2/manual/index.md#overview) · [Install](https://reksstudio.github.io/v2/docs/index.md#install) · [Cite](https://reksstudio.github.io/v2/docs/index.md#cite) · [Contact](https://reksstudio.github.io/v2/docs/index.md#contact)
* [Back to the Results index](https://reksstudio.github.io/v2/main/results/index.md#row-quest)

Other results: [Exactness](https://reksstudio.github.io/v2/main/results/exactness/index.md) · [H chains](https://reksstudio.github.io/v2/main/results/h-chains/index.md) · [Bond breaking](https://reksstudio.github.io/v2/main/results/bond-breaking/index.md) · [C<sub>2</sub>](https://reksstudio.github.io/v2/main/results/c2/index.md) · [TTR](https://reksstudio.github.io/v2/main/results/ttr/index.md) · [Zethrenes](https://reksstudio.github.io/v2/main/results/zethrenes/index.md) · [C<sub>2</sub>H<sub>4</sub> photochemistry](https://reksstudio.github.io/v2/main/results/c2h4-photochemistry/index.md)
