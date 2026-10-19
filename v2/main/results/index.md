# Results — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/>

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

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

### B: model vs near-exact theory (FCI)

| System | Problem class | Active space | Reference | Number | Evidence |
| - | - | - | - | - | - |
| H<sub>2</sub> | Bond breaking | (2,2) | FCI, aug-cc-pVTZ | vs FCI, same basis | [page](https://reksstudio.github.io/v2/main/results/dissociation/index.md#h2) |
| H<sub>4</sub> | Bond breaking | (4,4) | FCI, aug-cc-pVTZ | vs FCI, same basis | [page](https://reksstudio.github.io/v2/main/results/dissociation/index.md#h4) |
| H<sub>6</sub> | Bond breaking | (6,6) | FCI, 6-31G(d) | vs FCI, same basis | [page](https://reksstudio.github.io/v2/main/results/dissociation/index.md#h6) |
| H<sub>8</sub> | Bond breaking | (8,8) | FCI, 6-31G(d) | vs FCI, same basis | [page](https://reksstudio.github.io/v2/main/results/dissociation/index.md#h8) |

### C: model vs benchmark set (TBE)

| System | Problem class | Active space | Reference | Number | Evidence |
| - | - | - | - | - | - |
| 62 molecules, QUEST3/5/6/7; S1, S2, T1, T2 | Excited states | (2,2)–(8,8), closest to TBE per state | TBE | MAE 0.212 / 0.230 / 0.220 eV (BH\&HLYP / M08-SO / ωB97X) | [page](https://reksstudio.github.io/v2/main/results/quest/index.md) |

### D: model vs experiment

| System | Problem class | Active space | Reference | Number | Evidence |
| - | - | - | - | - | - |
| C<sub>2</sub>H<sub>4</sub> | Bond breaking | (4,4) | experiment | R<sub>e</sub> 1.333 · exp. 1.3305 Å (rigid R<sub>CC</sub> scan) | [page](https://reksstudio.github.io/v2/main/results/dissociation/index.md#c2h4) |
| N<sub>2</sub> | Bond breaking | (6,6) | experiment | R<sub>e</sub> 1.096 · exp. 1.0977 Å | [page](https://reksstudio.github.io/v2/main/results/dissociation/index.md#n2) |
| C<sub>2</sub> | Bond breaking | (6,6) | experiment; near-exact reference points | D<sub>e</sub> 6.29 · exp. 6.32 ± 0.2 eV; R<sub>e</sub> 1.268 · exp. 1.2425 Å | [page](https://reksstudio.github.io/v2/main/results/dissociation/index.md#c2) |

## Part 2: beyond available references: trends and demonstrations

### trend without reference

| System | Problem class | Active space | Reference | Number | Evidence |
| - | - | - | - | - | - |
| C<sub>2</sub>H<sub>2</sub> | Bond breaking | (6,6) | none | R<sub>e</sub> 1.205 Å (rigid R<sub>CC</sub> scan) | [page](https://reksstudio.github.io/v2/main/results/dissociation/index.md#c2h2) |
| 7 PAHs of Hu et al. (2016), 20 geometries | Diradicals and magnetism | (2,2)–(10,10) | none | 98 calculations, 32–70 atoms, cc-pVTZ, (2,2)–(10,10) | [page](https://reksstudio.github.io/v2/main/results/zethrenes/index.md) |

### model, FCI out of reach at this size

| System | Problem class | Active space | Reference | Number | Evidence |
| - | - | - | - | - | - |
| H<sub>10</sub> | Bond breaking | (10,10) | FCI out of reach at this size | 83 points | [page](https://reksstudio.github.io/v2/main/results/dissociation/index.md#h10) |

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
