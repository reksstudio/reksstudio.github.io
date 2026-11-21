# Learn — REKS Studio Learn

HTML: <https://reksstudio.github.io/v2/learn/>

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

Learn REKS

# REKS Studio — Learn

## Run it now {#run-now}

1. Install REKS Studio: [Documentation, Install](https://reksstudio.github.io/v2/docs/index.md#install).
2. Download [`first_c2h4_90.py`](https://reksstudio.github.io/v2/inputs/first_c2h4_90.py.txt), twisted ethylene, and run its two stages:

```bash
python first_c2h4_90.py rks    # seed orbitals
python first_c2h4_90.py reks   # REKS(2,2) from them
```

3. What it computed: [P2. Broken π bond](https://reksstudio.github.io/v2/learn/path/p2/index.md#p2).

## Learn {#learn}

The path, one new idea per step:

| Step | Question | New idea |
| - | - | - |
| [P1. One pair](https://reksstudio.github.io/v2/learn/path/p1/index.md#p1) | What happens to one electron pair when a bond stretches? | FONs; the pair as a unit |
| [P2. Broken π bond](https://reksstudio.github.io/v2/learn/path/p2/index.md#p2) | Can a bond break without stretching? | SA ensemble and SSR states |
| [P3. Seed orbitals](https://reksstudio.github.io/v2/learn/path/p3/index.md#p3) | Where did the two orbitals come from? | seed orbitals and the solution checks |
| [P4. Two pairs](https://reksstudio.github.io/v2/learn/path/p4/index.md#p4) | With two bonds, which orbitals pair? | pairing schemes and the window |
| [P5. Spin states](https://reksstudio.github.io/v2/learn/path/p5/index.md#p5) | Where is the triplet? | spin manifolds from one SCF |
| [P6. Forces](https://reksstudio.github.io/v2/learn/path/p6/index.md#p6) | What are the forces on the atoms in a state? | gradients and couplings |

Branches: [Wide, hole and doublet units](https://reksstudio.github.io/v2/learn/branch/units/index.md#branch-units) · [Spin manifolds and J](https://reksstudio.github.io/v2/learn/branch/spin/index.md#branch-spin) · [State properties](https://reksstudio.github.io/v2/learn/branch/properties/index.md#branch-properties) · [Optimization and dynamics](https://reksstudio.github.io/v2/learn/branch/dynamics/index.md#opt-dynamics) · [Solvers and control](https://reksstudio.github.io/v2/learn/branch/solvers/index.md#branch-solvers) · [Environment, engines and files](https://reksstudio.github.io/v2/learn/branch/environment/index.md#branch-environment).

## I want to… {#tasks}

| Task | How |
| - | - |
| odd N, radical, doublet, SOMO | implicit SOMO d1; doublet units d2, hd2, hd3 — [Odd N: SOMO and doublets](https://reksstudio.github.io/v2/learn/branch/units/index.md#units-odd) |
| TDDFT, nroots, roots, excited states | states come from the SI cassette — [SI cassette](https://reksstudio.github.io/v2/learn/concepts/index.md#si-cassette) · [SI cassettes](https://reksstudio.github.io/v2/learn/reference/index.md#si-cassettes) |
| excitation energy, vertical excitation | the state table of each cassette — [SSR state energies](https://reksstudio.github.io/v2/learn/reference/properties/index.md#ssr-energies) |
| broken symmetry, UKS, diradical, biradical | one broken pair: REKS(2,2) — [P2. Broken π bond](https://reksstudio.github.io/v2/learn/path/p2/index.md#p2) |
| CI | conical intersection or configuration interaction — [Conical-intersection topography](https://reksstudio.github.io/v2/learn/reference/properties/index.md#ci-topography) · [SI Hamiltonian and overlap](https://reksstudio.github.io/v2/learn/concepts/index.md#si-hamiltonian) |
| CASSCF, CAS, CASCI | a product of geminals is GVB, not CAS — [Unit](https://reksstudio.github.io/v2/learn/concepts/index.md#unit) |
| MECI, minimum-energy conical intersection, crossing point | S0/S1 MECI with DL-FIND — [S0/S1 MECI of ethylene with DL-FIND](https://reksstudio.github.io/v2/learn/branch/dynamics/index.md#case-meci-c2h4) |
| FSSH, surface hopping, nonadiabatic dynamics | PyUNIxMD trajectories — [Surface hopping](https://reksstudio.github.io/v2/learn/branch/dynamics/index.md#surface-hopping) |
| transition state, TS, saddle point | the S0 torsion TS of ethylene on the results page; optimize() searches minima — [Check the optimization](https://reksstudio.github.io/v2/learn/branch/dynamics/index.md#check-optimization) · [Ethylene photochemistry](https://reksstudio.github.io/v2/main/results/c2h4-photochemistry/index.md#ts) |
| PCM, solvent, solvation, continuum | PCM, DDX and PE are rejected; point charges are available — [Required and rejected settings](https://reksstudio.github.io/v2/learn/reference/index.md#required-settings) · [Point charges](https://reksstudio.github.io/v2/learn/branch/environment/index.md#case-env-point-charges) |
| cost, memory, timing | cost of REKS runs; memory of the SI solvers — [SI eigensolver](https://reksstudio.github.io/v2/learn/concepts/index.md#si-solver) · [Cost](https://reksstudio.github.io/v2/main/cost/index.md) |

### Every active space you can run today {#reks-table}

Installed active spaces [`reks [N, M]`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-reks), each by its units ([Unit](https://reksstudio.github.io/v2/learn/concepts/index.md#unit)): electron geminal, hole geminal, electron doublet, hole doublet. Rows: N electrons; columns: M orbitals; cells with N > 2M are empty by Pauli. Each links its first case.

| N \ M | 2 | 3 | 4 | 5 | 6 |
| - | - | - | - | - | - |
| 2 | [2](https://reksstudio.github.io/v2/learn/path/p1/index.md#case-h2-pair "REKS(2,2) 2: One electron pair: H₂, REKS(2,2)") | [3](https://reksstudio.github.io/v2/learn/branch/units/index.md#case-wide-bh-23 "REKS(2,3) 3: Lone pair over three orbitals: BH, REKS(2,3) 3") | [4](https://reksstudio.github.io/v2/learn/branch/units/index.md#case-wide-24 "REKS(2,4) 4: Geminal over four orbitals: REKS(2,4) 4") | | |
| 3 | | [2 d1](https://reksstudio.github.io/v2/learn/branch/units/index.md#case-odd-33 "REKS(3,3) 2 d1: Implicit SOMO: REKS(3,3) 2 d1") | [2 d2](https://reksstudio.github.io/v2/learn/branch/units/index.md#case-doublet-34 "REKS(3,4) 2 d2: Electron doublet over two orbitals: REKS(3,4) 2 d2")[3 d1](https://reksstudio.github.io/v2/learn/branch/units/index.md#case-odd-34-u3 "REKS(3,4) 3 d1: Wide geminal and SOMO: REKS(3,4) 3 d1") | | |
| 4 | | [h3](https://reksstudio.github.io/v2/learn/branch/units/index.md#case-hole-43 "REKS(4,3) h3: Hole geminal: REKS(4,3) h3") | [2 2](https://reksstudio.github.io/v2/learn/path/p4/index.md#case-butadiene-44 "REKS(4,4) 2 2: Two pairs: butadiene, REKS(4,4)") | [2 3](https://reksstudio.github.io/v2/learn/branch/units/index.md#case-wide-bh-45 "REKS(4,5) 2 3: Bond and lone pair: BH, REKS(4,5) 2 3") | [3 3](https://reksstudio.github.io/v2/learn/branch/units/index.md#case-wide-bh-46 "REKS(4,6) 3 3: Two wide geminals: BH, REKS(4,6) 3 3") |
| 5 | | | [2 hd2](https://reksstudio.github.io/v2/learn/branch/units/index.md#case-hole-doublet-54 "REKS(5,4) 2 hd2: Hole doublet: REKS(5,4) 2 hd2")[h3 d1](https://reksstudio.github.io/v2/learn/branch/units/index.md#case-hole-54 "REKS(5,4) h3 d1: Hole geminal and SOMO: REKS(5,4) h3 d1") | [2 2 d1](https://reksstudio.github.io/v2/learn/branch/units/index.md#case-odd-55 "REKS(5,5) 2 2 d1: Two pairs and a SOMO: REKS(5,5) 2 2 d1") | |
| 6 | | | | [h3 2](https://reksstudio.github.io/v2/learn/branch/units/index.md#case-hole-pair-65 "REKS(6,5) h3 2: Hole geminal and pair: REKS(6,5) h3 2") | [2 2 2](https://reksstudio.github.io/v2/learn/branch/spin/index.md#case-hexatriene-ladder "REKS(6,6) 2 2 2: Spin ladder of hexatriene, 2S = 0 to 6") |
| 7 | | | | | [3 hd3](https://reksstudio.github.io/v2/learn/branch/units/index.md#case-doublet-76 "REKS(7,6) 3 hd3: Wide geminal and hole doublet: REKS(7,6) 3 hd3") |
| 8 | | | | | [h3 h3](https://reksstudio.github.io/v2/learn/branch/units/index.md#case-holes-86 "REKS(8,6) h3 h3: Two hole geminals: REKS(8,6) h3 h3") |

## Look up {#look-up}

* [Find](https://reksstudio.github.io/v2/learn/find/index.md#find): options, input errors, printed blocks, stored variables, cases, concepts
* [Procedure](https://reksstudio.github.io/v2/learn/procedure/index.md#procedure): choose pairs → seed → window → start → check
* [Input](https://reksstudio.github.io/v2/learn/reference/index.md#input), [Guesses and restarts](https://reksstudio.github.io/v2/learn/reference/run-control/index.md#guesses), [Reading the output](https://reksstudio.github.io/v2/learn/reference/output/index.md#reading-output), [Properties](https://reksstudio.github.io/v2/learn/reference/properties/index.md#properties), [Option table](https://reksstudio.github.io/v2/learn/reference/options/index.md#option-table): every option, printed block, stored variable and property
* [Diagnose](https://reksstudio.github.io/v2/learn/diagnose/index.md#diagnose): symptoms by the printed line or the observed value, and what to do
* [Concepts](https://reksstudio.github.io/v2/learn/concepts/index.md#concepts): the theory, every equation

## Linked files

[inputs/first_c2h4_90.py](https://reksstudio.github.io/v2/inputs/first_c2h4_90.py.txt)
