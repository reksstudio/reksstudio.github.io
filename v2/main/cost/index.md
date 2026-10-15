# Cost — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/cost/>

Psi4 d40267fc2, 2026-10-13: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# Cost and scale

Measured time and memory of SA-REKS and SSR against single-determinant references on the same molecules, per active space and functional.

Whole SCF, SA-REKS / RKS, median: 0.86 at (2,2) to 10.47 at (8,8) with BH\&HLYP; 0.80 to 2.25 with HF.

## Mechanism

### Integrals and grid

Two-electron integrals and the DFT quadrature grid, evaluated once.

### Shared by configurations

Every configuration of the ensemble reads the same integrals and grid.

### Weighted Fock assembly

The Fock matrices of the configurations combine by weighted addition.

### Ensemble energy

Energy and gradient of the ensemble from the assembled matrices.

## Ground state: whole SCF

Median ratio of the complete SCF wall time, SA-REKS over the single-determinant reference (RKS for BH\&HLYP, RHF for HF), with the median iteration counts behind it.

| Functional | (2,2) | (4,4) | (6,6) | (8,8) |
| - | - | - | - | - |
| BH\&HLYP, SA-REKS / RKS | 0.86 | 1.53 | 3.33 | 10.47 |
| HF, SA-REKS / RHF | 0.80 | 1.03 | 2.14 | 2.25 |
| Iterations, BH\&HLYP (reference 20.5) | 12.5 | 17.5 | 25 | 40.5 |

Guess of the timed runs: not stated in v1. Iteration medians are stated for BH\&HLYP only.

Figure to be added: whole-SCF and Fock-build ratios redrawn from the SI Fig. 6 data

**Provenance:** paper v1, SI S59–S62, SI Fig. 6.

## One Fock build

Median ratio per Fock build over the six largest molecules.

| Functional | (2,2) | (4,4) | (6,6) | (8,8) |
| - | - | - | - | - |
| HF | 1.30 | 1.65 | 1.95 | 2.29 |
| BH\&HLYP | 1.57 | 2.06 | 2.96 | 5.59 |

Fitted exponents of the Fock build: to be added, with v1's sentence that the drop reflects the cache, not an improvement in scaling.

## Excited states

Complete SSR calculation over the complete 20-state TDA calculation, median ratio; (8,8)/BH\&HLYP lies above parity on 14 of 16 molecules.

| Functional | (2,2) | (4,4) | (6,6) | (8,8) |
| - | - | - | - | - |
| HF, SSR / CIS | 0.13 | 0.18 | 0.38 | 0.81 |
| BH\&HLYP, SSR / TDDFT-TDA | 0.14 | 0.24 | 0.57 | 2.65 |

Secondary, SI step alone vs TDA (v1: not the same kind of object): to be added.

![SSR against 20-state TDA: step and complete-calculation time ratios and peak memory against the number of basis functions](https://reksstudio.github.io/v2/figures/main/cost_excited.webp)

SSR against the 20-state TDA reference (CIS for HF, TDDFT-TDA for BH\&HLYP), and peak memory, against the number of basis functions. Source: paper v1, SI Fig. 7.

## Memory

Peak SCF memory, SA-REKS over the reference: median 1.01 × over the six largest molecules (0.93–1.02).

## Hardware and test set

Hardware: Intel Xeon E5-2697 v3, one exclusive node, 28 threads

Test set: 16 molecules, 322–1868 basis functions (nine aug-cc-pVTZ, seven cc-pVTZ)

## Configuration count

Singlet configurations generated for P electron pairs, (2P,2P): n<sub>SI</sub> = 3<sup>P</sup> P! − (P! − C<sub>P</sub>), C<sub>P</sub> the Catalan number.

### Configurations generated per active space and spin

Linearly independent configurations per spin sector S and active space, log scale: (2,2) S=0 3, S=1 1; (4,4) S=0 18, S=1 11, S=2 1; (6,6) S=0 161, S=1 153, S=2 41, S=3 1; (8,8) S=0 1 934, S=1 2 524, S=2 1 172, S=3 199, S=4 1; (10,10) S=0 29 082, S=1 48 090, S=2 31 275, S=3 9 635, S=4 1 209, S=5 1; (12,12) S=0 524 292, S=1 1 045 737, S=2 864 275, S=3 374 554, S=4 86 454, S=5 8 651, S=6 1; (14,14) S=0 11 017 869, S=1 25 684 841, S=2 25 614 281, S=3 14 112 637, S=4 4 586 673, S=5 846 797, S=6 70 573, S=7 1

* S = 0
* S = 1
* S = 2
* S = 3
* S = 4
* S = 5
* S = 6
* S = 7

### Equations, determinants and SCF configurations {#equations}

| REKS | 2S | Configurations | Equations | Determinants | in SCF |
| - | - | - | - | - | - |
| (2,2) | 0 | 3 | 5 | 4 | 4 |
| | 2 | 1 | 1 | 1 | 1 |
| (4,4) | 0 | 18 | 167 | 37 | 18 |
| | 2 | 11 | 66 | 23 | 10 |
| | 4 | 1 | 1 | 7 | 7 |
| (6,6) | 0 | 161 | 12 271 | 435 | 68 |
| | 2 | 153 | 10 829 | 343 | 48 |
| | 4 | 41 | 861 | 151 | 67 |
| | 6 | 1 | 1 | 25 | 25 |
| (8,8) | 0 | 1 934 | 1 524 753 | 5 537 | 224 |
| | 2 | 2 524 | 2 231 806 | 4 987 | 176 |
| | 4 | 1 172 | 489 890 | 3 003 | 368 |
| | 6 | 199 | 19 900 | 891 | 288 |
| | 8 | 1 | 1 | 91 | 91 |
| (10,10) | 0 | 29 082 | 263 423 495 | 73 078 | 672 |
| | 2 | 48 090 | 522 771 815 | 70 026 | 560 |
| | 4 | 31 275 | 195 551 410 | 52 526 | 1 560 |
| | 6 | 9 635 | 25 109 526 | 23 526 | 1 880 |
| | 8 | 1 209 | 731 445 | 4 886 | 1 246 |
| | 10 | 1 | 1 | 336 | 336 |
| (12,12) | 0 | 524 292 | 59 351 892 458 | 986 534 | 1 888 |
| | 2 | 1 045 737 | 143 099 611 285 | 970 490 | 1 632 |
| | 4 | 864 275 | 73 057 039 358 | 834 746 | 5 680 |
| | 6 | 374 554 | 16 693 280 767 | 499 496 | 9 280 |
| | 8 | 86 454 | 1 579 846 605 | 168 456 | 9 492 |
| | 10 | 8 651 | 37 424 226 | 25 446 | 5 276 |
| | 12 | 1 | 1 | 1 254 | 1 254 |
| (14,14) | 0 | 11 017 869 | 16 918 238 601 779 | 13 544 877 | 5 056 |
| | 2 | 25 684 841 | 46 584 198 237 597 | 13 463 829 | 4 480 |
| | 4 | 25 614 281 | 29 041 519 627 069 | 12 508 917 | 18 704 |
| | 6 | 14 112 637 | 9 288 669 797 107 | 9 158 493 | 38 640 |
| | 8 | 4 586 673 | 1 607 467 057 929 | 4 339 343 | 53 704 |
| | 10 | 846 797 | 122 286 938 043 | 1 122 003 | 45 640 |
| | 12 | 70 573 | 2 490 309 451 | 127 611 | 22 275 |
| | 14 | 1 | 1 | 4 719 | 4 719 |

Enumeration check of the formula to (8,8): to be added.

## Catalogue

| Active space | Catalogue size | Emission time, memory |
| - | - | - |
| (2,2) | 1.7 KB | to be added |
| (4,4) | 27.5 KB | to be added |
| (6,6) | 1.99 MB | to be added |
| (8,8), mixed-scheme | 11.9 MB | to be added |
| (8,8), full | 284 MB | 62.4 s, 804 MB |

Symbolic contraction of the full (12,12) ensemble: 40.47 h, 83 GB.

**Provenance:** paper v1, SI Tables 3 and 6.

## Largest run

The (10,10) run on TTR: [Results, TTR, run size](https://reksstudio.github.io/v2/main/results/ttr/index.md#run).

## One dynamics step

C<sub>2</sub>H<sub>4</sub> twisted 90°, SSR(2,2)/6-31G(d), 4 threads; wall time per step in seconds.

| Step | Time / s |
| - | - |
| one-state gradient | 1.74 |
| three states | 1.87 |
| gradient + 3 NACs | 2.78 |

**Provenance:** site run, Psi4 43c226c04; to be added: rerun at a recorded version.
