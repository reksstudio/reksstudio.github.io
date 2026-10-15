# Results — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/>

Psi4 f31cf1f94, 2026-10-15: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# Results

Every result shown with REKS Studio, one row per system and question, each one click from its evidence.

## Part 1: against a reference

### A: implementation vs exact oracle

| System | Problem class | Active space | Reference | Number | Evidence |
| - | - | - | - | - | - |
| BH, H<sub>2</sub> | Implementation | (2,2)–(4,6) | CASSCF, same basis | ≤ 10<sup>−10</sup> E<sub>h</sub> (model identities) | [page](https://reksstudio.github.io/v2/main/results/exactness/index.md#identities) |
| two H<sub>2</sub> at 50 Å | Implementation | (2,2) | 2 × E(H<sub>2</sub>) | 9.3·10<sup>−11</sup> E<sub>h</sub> (size consistency) | [page](https://reksstudio.github.io/v2/main/results/exactness/index.md#identities) |
| C<sub>2</sub>H<sub>4</sub>, butadiene, BH | Implementation | (2,2)–(4,6) | five-point finite differences | ≤ 7.8·10<sup>−5</sup> E<sub>h</sub> a<sub>0</sub><sup>−1</sup> (gradients) | [page](https://reksstudio.github.io/v2/main/results/exactness/index.md#derivatives) |

### B: model vs near-exact theory (FCI/SHCI)

| System | Problem class | Active space | Reference | Number | Evidence |
| - | - | - | - | - | - |
| H<sub>2</sub> | Bond breaking | (2,2) | FCI, same basis | to be added | [page](https://reksstudio.github.io/v2/main/results/h-chains/index.md#h2) |
| H<sub>4</sub> | Bond breaking | (4,4) | FCI, same basis | to be added | [page](https://reksstudio.github.io/v2/main/results/h-chains/index.md#h4) |
| H<sub>6</sub> | Bond breaking | (6,6) | FCI, same basis | to be added | [page](https://reksstudio.github.io/v2/main/results/h-chains/index.md#h6) |
| H<sub>8</sub> | Bond breaking | (8,8) | FCI, same basis | to be added | [page](https://reksstudio.github.io/v2/main/results/h-chains/index.md#h8) |

### C: model vs benchmark set (TBE)

| System | Problem class | Active space | Reference | Number | Evidence |
| - | - | - | - | - | - |
| C<sub>2</sub>H<sub>4</sub> | Bond breaking | (4,4) | TBE (vertical); experiment (R<sub>e</sub>) | B<sup>1</sup>B<sub>1u</sub> 7.85 eV (TBE 7.93); R<sub>e</sub> 1.335 Å (exp. 1.339) | [page](https://reksstudio.github.io/v2/main/results/bond-breaking/index.md#c2h4) |
| N<sub>2</sub> | Bond breaking | (6,6) | TBE (vertical); experiment (R<sub>e</sub>) | vertical 9.49 eV (TBE 9.88); R<sub>e</sub> 1.096 Å (exp. 1.098) | [page](https://reksstudio.github.io/v2/main/results/bond-breaking/index.md#n2) |
| C<sub>2</sub>H<sub>2</sub> | Bond breaking | (6,6) | TBE (vertical); experiment (R<sub>e</sub>) | vertical 6.66 eV (TBE 7.10); R<sub>e</sub> 1.201 Å (exp. 1.203) | [page](https://reksstudio.github.io/v2/main/results/bond-breaking/index.md#c2h2) |
| 67 molecules, QUEST3/5/6/7 | Excited states | (4,4); (6,6) benzene, triazine | TBE (aug-cc-pVTZ) | MAD 0.36 / RMSD 0.37 eV | [page](https://reksstudio.github.io/v2/main/results/quest/index.md) |

### D: model vs experiment

| System | Problem class | Active space | Reference | Number | Evidence |
| - | - | - | - | - | - |
| C<sub>2</sub> | Bond breaking | (6,6) | experiment (SHCI comparison to be added) | D<sub>e</sub> 6.28 vs 6.32 ± 0.2 eV; R<sub>e</sub> 1.268 vs 1.243 Å | [page](https://reksstudio.github.io/v2/main/results/c2/index.md) |

## Part 2: beyond available references: trends and demonstrations

### trend without reference

| System | Problem class | Active space | Reference | Number | Evidence |
| - | - | - | - | - | - |
| SHZ, SOZ, SNZ | Diradicals and magnetism | (2,2)–(8,8) | none (broken-symmetry DFT qualitative only) | S–T at (8,8): 4.23 / 3.24 / 3.05 kcal/mol | [page](https://reksstudio.github.io/v2/main/results/zethrenes/index.md) |

### reference on a different object

| System | Problem class | Active space | Reference | Number | Evidence |
| - | - | - | - | - | - |
| TTR, 152 atoms | Diradicals and magnetism | (4,4)–(10,10) | experiment, STM on Au(111) (different object) | S–T 0.31–0.99 vs 0.21 kcal/mol | [page](https://reksstudio.github.io/v2/main/results/ttr/index.md) |

### reference in a different basis

| System | Problem class | Active space | Reference | Number | Evidence |
| - | - | - | - | - | - |
| hexatriene | Excited states | (6,6) | QUEST TBE (aug-cc-pVTZ); SSR in 6-31G(d) | T1 2.736 / 2.73, S1 5.354 / 5.37 eV; deviations 0.006–0.31 eV | [Manual](https://reksstudio.github.io/v2/manual/first-calculation/index.md#first-spin) |

### workflow demonstration

| System | Problem class | Active space | Reference | Number | Evidence |
| - | - | - | - | - | - |
| C<sub>2</sub>H<sub>4</sub> | Photochemistry | (2,2) | none (no reference MECI compared) | MECI gap 1.49·10<sup>−4</sup> E<sub>h</sub>; barrier 2.908 eV | [page](https://reksstudio.github.io/v2/main/results/c2h4-photochemistry/index.md) |
