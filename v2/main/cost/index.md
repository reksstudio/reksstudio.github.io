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

| REKS | Configurations, S = 0 | Equations | Determinants | in SCF |
| - | - | - | - | - |
| (2,2) | 3 | 5 | 4 | 4 |
| (4,4) | 18 | 159 | 37 | 18 |
| (6,6) | 161 | 12 121 | 435 | 68 |
| (8,8) | 1 934 | 1 521 969 | 5 537 | 224 |
| (10,10) | 29 082 | 263 364 575 | 73 078 | 672 |
| (12,12) | 524 292 | 59 350 445 258 | 986 534 | 1 888 |
| (14,14) | 11 017 869 | 16 918 197 671 939 | 13 544 877 | 5 056 |

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
