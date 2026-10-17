# Tetra[3]trianguleno[3]rhombene (TTR) — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/ttr/>

Psi4 72ce4d58b, 2026-10-17: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# Tetra\[3]trianguleno\[3]rhombene (TTR)

Magnetic gap ladder of a 152-atom open-shell nanographene for active spaces (4,4) to (10,10); the experiment was measured on a surface, the calculation is gas phase.

Reference class: reference on a different object

S–T gap 0.31 kcal/mol at (4,4) to 0.99 kcal/mol at (10,10); experiment 0.21 kcal/mol (STM on Au(111)).

![TTR: S0, T1, Q1, H1 energies and FONs for active spaces (4,4) to (10,10)](https://reksstudio.github.io/v2/figures/main/ttr.webp)

(A) Energies of S0, T1, Q1, H1 per active space, gaps in kcal/mol; (B) FONs of S0 per active space.

Vertical gaps from S0 / kcal mol<sup>−1</sup>

| Gap | (4,4) | (6,6) | (8,8) | (10,10) | Experiment |
| - | - | - | - | - | - |
| S–T | 0.31 | 0.51 | 0.77 | 0.99 | 0.21 |
| S–Q | 0.53 | 1.63 | 2.37 | 2.14 | |
| S–H | | 34.24 | 33.09 | 31.01 | |

Paper's own reading: (4,4) is closest to experiment, larger active spaces open the gap; the comparison is to be viewed cautiously (gas phase, fixed geometry vs STM on Au(111)).

### Setup

Functional, basis: BH\&HLYP/cc-pVTZ, 4016 basis functions

SA pool: not stated in v1

Geometry source: not stated in v1

Convergence: not stated in v1

### Reference

Experiment: spin-polarized STM on Au(111), Song et al. 2024 (citation and credit to be added).

**Provenance:** Paper v1, Fig. 1A,B; p6; methods p17.

## Run size

152 atoms, 4016 basis functions, SI over 29 082 configurations; 25 iterations, about 4 h on one 64-core node, hot start from a converged smaller-basis seed.

**Provenance:** Paper v1, SI p88.

**Scope:** Not shown: the same active space with another method; geometry relaxation; surface effects.

## Run, ask, cite

* Paper result; catalogue (10,10) not installed. Ask via [Contact](https://reksstudio.github.io/v2/docs/index.md#contact).
* [Manual: Start](https://reksstudio.github.io/v2/manual/index.md#overview) · [Install](https://reksstudio.github.io/v2/docs/index.md#install) · [Cite](https://reksstudio.github.io/v2/docs/index.md#cite) · [Contact](https://reksstudio.github.io/v2/docs/index.md#contact)
* [Back to the Results index](https://reksstudio.github.io/v2/main/results/index.md#row-ttr)

Other results: [Exactness](https://reksstudio.github.io/v2/main/results/exactness/index.md) · [H chains](https://reksstudio.github.io/v2/main/results/h-chains/index.md) · [Bond breaking](https://reksstudio.github.io/v2/main/results/bond-breaking/index.md) · [C<sub>2</sub>](https://reksstudio.github.io/v2/main/results/c2/index.md) · [QUEST](https://reksstudio.github.io/v2/main/results/quest/index.md) · [Zethrenes](https://reksstudio.github.io/v2/main/results/zethrenes/index.md) · [C<sub>2</sub>H<sub>4</sub> photochemistry](https://reksstudio.github.io/v2/main/results/c2h4-photochemistry/index.md)
