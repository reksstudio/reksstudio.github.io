# Large molecules, up to 192 atoms and REKS(12,12) — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/large-molecules/>

Psi4 builds of these outputs: 0b7a4f5b4, 1b68aa1f5, 2acf2c145, 4c3025f7c, 5a77936fa, 72ce4d58b, 8c95db042, a5ccb08fa, d40267fc2, d5586d10a, e95c2d234, f31cf1f94 (kk/reks.v42), named on each run line. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# Large molecules, up to 192 atoms and REKS(12,12)

SA-REKS and SI-SA-REKS (SSR) of the triangulene nanostar (TNS) at REKS(12,12) and of tetra\[3]trianguleno\[3]rhombene (TTR) along the active-space ladder REKS(4,4)–(10,10), every spin sector and every printed root of each set; the zethrenes on their own page.

Reference class: TNS, TTR: reference on a different object (experiment on a surface, calculation in the gas phase); zethrenes: trend without reference

9 molecules · up to 192 atoms · 4452 basis functions · REKS(12,12)

[Reach](#map) · [Run sheet](#time) · [Definitions](#definitions) · [Systems](#systems) · [Setup](#setup)

## Atoms and active space of every published run

Atoms against active space for every published REKS Studio run, one dot per dataset and distinct pair, each a link to its calculation; dashed line: largest REKS active space reported before this work, (4,4)

* Dissociation
* QUEST
* Zethrenes
* TNS
* TTR

One dot per dataset and distinct (atoms, active space) over the dissociation, QUEST, zethrene and large-molecule calculations of this site, coloured by dataset; each dot links to its calculation (to the dataset page where several systems share the dot); the largest run is the larger dot. Dashed: the largest REKS active space reported before this work, (4,4) ([History](https://reksstudio.github.io/v2/main/history/index.md)).

## Run sheet

| Molecule | Basis (n<sub>bf</sub>), functional | Active spaces | Spins finished | SI configurations per 2S | Jobs |
| - | - | - | - | - | - |
| [Triangulene nanostar (TNS)](https://reksstudio.github.io/v2/main/results/large-molecules/tns/index.md) C<sub>132</sub>H<sub>60</sub> 192 atoms![TNS: carbon skeleton](https://reksstudio.github.io/v2/figures/scale/mol/TNS_skel.svg) | 6-31G(d) (2100) BH\&HLYP | REKS(12,12) | 2S = 0–12 | 2S = 0: 55 4282S = 2: 150 2492S = 4: 167 3152S = 6: 92 9542S = 8: 23 0942S = 10: 2032S = 12: 1 | SCF · 22 min · PC-1\* × 96 · 175 GiBSI 2S = 0 · 1 h 43 min · PC-1\* × 96 · 261 GiBSI 2S = 2 · 1 h 11 min · PC-1\* × 96 · 339 GiBSI 2S = 4 · 4 h 57 min · PC-2\* × 18 · 388 GiBSI 2S = 6–12 · 6 h 6 min · PC-2\* × 18 · 384 GiB |
| | 6-31G(d) (2100) HF | REKS(12,12) | 2S = 0–12 | | SCF · 44 min · PC-1\* × 96 · 168 GiBSI 2S = 0 · 38 min · PC-1\* × 96 · 236 GiBSI 2S = 2 · 30 min · PC-1\* × 96 · 322 GiBSI 2S = 4 · 58 min · PC-2\* × 18 · 507 GiBSI 2S = 6–12 · 2 h 21 min · PC-2\* × 18 · 376 GiB |
| | def2-TZVP (4452) BH\&HLYP | REKS(12,12) | 2S = 0–12 | | SCF · 2 h 12 min · PC-1\* × 96 · 325 GiBSI 2S = 0 · 48 min · PC-1\* × 96 · 350 GiBSI 2S = 2 · 3 h 9 min · PC-2\* × 36 · 385 GiBSI 2S = 4 · 2 h 53 min · PC-2\* × 36 · 494 GiBSI 2S = 6–12 · 2 h 2 min · PC-2\* × 36 · 501 GiB |
| | def2-TZVP (4452) HF | REKS(12,12) | 2S = 0–12 | | SCF · 1 h 46 min · PC-1\* × 96 · 313 GiBSI 2S = 0 · 31 min · PC-1\* × 96 · 336 GiBSI 2S = 2 · 1 h 27 min · PC-2\* × 36 · 374 GiBSI 2S = 4 · 1 h 46 min · PC-2\* × 36 · 483 GiBSI 2S = 6–12 · 1 h 6 min · PC-2\* × 36 · 488 GiB |
| [Tetra\[3\]trianguleno\[3\]rhombene (TTR)](https://reksstudio.github.io/v2/main/results/large-molecules/ttr/index.md) C<sub>118</sub>H<sub>34</sub> 152 atoms![TTR: carbon skeleton](https://reksstudio.github.io/v2/figures/scale/mol/TTR_skel.svg) | cc-pVTZ (4016) BH\&HLYP | REKS(4,4), (6,6), (8,8), (10,10) | 2S = 0–10 | 2S = 0: 29 0822S = 2: 48 0902S = 4: 31 2752S = 6: 9 6352S = 8: 1 2092S = 10: 1 | SCF+SI 2S = 0–10 · 1 h 43 min · PC-1\* × 96 · 198 GiB |
| | def2-TZVP (3862) BH\&HLYP | REKS(4,4), (6,6), (8,8), (10,10) | 2S = 0–10 | | SCF+SI 2S = 0–10 · 2 h 47 min · PC-1\* × 96 · 201 GiB |
| [Zethrenes](https://reksstudio.github.io/v2/main/results/zethrenes/index.md), 7 compounds 32–70 atoms![HZD: carbon skeleton](https://reksstudio.github.io/v2/figures/zeth/mol/HZD_skel.svg) | cc-pVTZ (up to 1716) BH\&HLYP | REKS(2,2)–(10,10) | per calculation, on the compound pages | up to 29 082 (2S = 0) | 98 calculations, one job eachlongest 1 h 18 min · PC-2\* × 8 |

\* PC-1: 2 × 48-core AMD EPYC 9475F (Zen 5), 96 cores, 384 GB; PC-2: 2 × 18-core Intel Xeon Gold 6240 (Cascade Lake), 36 cores, 754 GB

Jobs of the largest active space of each set: role, wall time, machine × cores, peak resident memory (GiB = 2<sup>30</sup> bytes). SCF: SA-REKS orbitals and FONs; SI: state interaction of the listed spin sectors in the converged SA-REKS orbitals; SCF + SI: both in one job. Carbon skeletons at half the scale of the cards below.

Build: Psi4 branch kk/reks.v42, the commit of each job on its run line; PC-1: conda-forge GCC 15.2, Intel MKL, -march=native; PC-2: Intel MKL.

## Definitions

[Configuration](https://reksstudio.github.io/v2/manual/concepts/index.md#configuration-energy): one antisymmetrized product of the core and one geminal per active electron pair; the SI of a spin sector diagonalizes the Hamiltonian over all configurations of its catalogue. SI configurations per 2S: the number the output prints for each spin sector of the job.

## Systems

* ![TNS: carbon skeleton](https://reksstudio.github.io/v2/figures/scale/mol/TNS_skel.svg)

  [TNS](https://reksstudio.github.io/v2/main/results/large-molecules/tns/index.md "Triangulene nanostar") C<sub>132</sub>H<sub>60</sub>

  | meV | ΔE<sub>ST</sub> | ΔE<sub>SQ</sub> |
  | - | - | - |
  | 6-31G(d) · BH\&HLYP | −28.9 | −0.8 |
  | 6-31G(d) · HF | −77.0 | −93.0 |
  | def2-TZVP · BH\&HLYP | −51.4 | −23.8 |
  | def2-TZVP · HF | −85.4 | −101.6 |

* ![TTR: carbon skeleton](https://reksstudio.github.io/v2/figures/scale/mol/TTR_skel.svg)

  [TTR](https://reksstudio.github.io/v2/main/results/large-molecules/ttr/index.md "Tetra[3]trianguleno[3]rhombene") C<sub>118</sub>H<sub>34</sub>

  | meV | ΔE<sub>ST</sub> | ΔE<sub>SQ</sub> |
  | - | - | - |
  | cc-pVTZ · BH\&HLYP | +35.2 | +80.2 |
  | def2-TZVP · BH\&HLYP | +35.0 | +79.9 |

Carbon skeletons at the scale of the zethrene cards. ΔE<sub>ST</sub> = E(T1) − E(S0), ΔE<sub>SQ</sub> = E(Q1) − E(S0) / meV at the largest computed active space of each set: TNS SSR(12,12), TTR SSR(10,10). Each page: SI states (joined across active spaces by excitation pattern where a set has several), natural occupations, active orbitals where drawn and the jobs of every calculation. The [zethrenes](https://reksstudio.github.io/v2/main/results/zethrenes/index.md) on their own page.

## Setup and provenance

### Setup

Method: SA-REKS(M,M), ensemble PPS + OSSs + all-α determinant; SI-SA-REKS over the full catalogue of each spin sector the input lists; every root the output prints

Sets: TNS: 6-31G(d) · BH\&HLYP REKS(12,12); 6-31G(d) · HF REKS(12,12); def2-TZVP · BH\&HLYP REKS(12,12); def2-TZVP · HF REKS(12,12). TTR: cc-pVTZ · BH\&HLYP REKS(4,4), (6,6), (8,8), (10,10); def2-TZVP · BH\&HLYP REKS(4,4), (6,6), (8,8), (10,10)

Starting orbitals: TNS REKS(12,12), 6-31G(d): ROHF 2S + 1 = 13 orbitals, each paired with its Coulson–Rushbrooke partner; TNS def2-TZVP: the converged 6-31G(d) orbitals projected to the larger basis; TTR: a converged run of the same or a neighbouring active space, in the search order of the input

Geometries: TNS: triangulene-nanostar_idealized.xyz ([Hieulle et al. 2021](https://reksstudio.github.io/v2/manual/reference/index.md#hieulle2021-nanostar)); TTR: butterfly_nanographene.xyz ([Song et al. 2024](https://reksstudio.github.io/v2/manual/reference/index.md#song2024-butterfly)); both planar

Code: Psi4 branch kk/reks.v42, the commit of each job on its run line; PC-1: conda-forge GCC 15.2, Intel MKL, -march=native; PC-2: Intel MKL

### Reference

Experiment and models: [Hieulle et al. 2021](https://reksstudio.github.io/v2/manual/reference/index.md#hieulle2021-nanostar); [Song et al. 2024](https://reksstudio.github.io/v2/manual/reference/index.md#song2024-butterfly).

**Scope:** Calculated values: these calculations, gas phase. Experiment: values as printed in the cited papers, measured on Au(111).

## Run, ask, cite

* Catalogues REKS(8,8), (10,10) and (12,12) are not in the install. Ask via [Contact](https://reksstudio.github.io/v2/docs/index.md#contact).
* [Manual: Start](https://reksstudio.github.io/v2/manual/index.md#overview) · [Install](https://reksstudio.github.io/v2/docs/index.md#install) · [Cite](https://reksstudio.github.io/v2/docs/index.md#cite) · [Contact](https://reksstudio.github.io/v2/docs/index.md#contact)
* [Back to the Results index](https://reksstudio.github.io/v2/main/results/index.md#row-large-molecules)

Other results: [Exactness](https://reksstudio.github.io/v2/main/results/exactness/index.md) · [Dissociation](https://reksstudio.github.io/v2/main/results/dissociation/index.md) · [QUEST](https://reksstudio.github.io/v2/main/results/quest/index.md) · [Zethrenes](https://reksstudio.github.io/v2/main/results/zethrenes/index.md) · [C<sub>2</sub>H<sub>4</sub> photochemistry](https://reksstudio.github.io/v2/main/results/c2h4-photochemistry/index.md)
