# Find — REKS Studio Learn

HTML: <https://reksstudio.github.io/learn/find/>

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/llms.txt>. Every page: `https://reksstudio.github.io/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/inputs/<file>.txt`.

[Learn](https://reksstudio.github.io/learn/index.md) › Find

# Find

Steps, tasks, concepts, cases, options, units, catalogs, printed blocks, stored variables and input errors of this book, one row each, by type. Type words in any order, or paste an error line.

## Step {#find-step}

* [P1. One pair](https://reksstudio.github.io/learn/path/p1/index.md#p1)
* [P2. Broken π bond](https://reksstudio.github.io/learn/path/p2/index.md#p2)
* [P3. Seed orbitals](https://reksstudio.github.io/learn/path/p3/index.md#p3)
* [P4. Two pairs](https://reksstudio.github.io/learn/path/p4/index.md#p4)
* [P5. Spin states](https://reksstudio.github.io/learn/path/p5/index.md#p5)
* [P6. Forces](https://reksstudio.github.io/learn/path/p6/index.md#p6)

## Task {#find-task}

* broken symmetry, UKS, diradical, biradical one broken pair: REKS(2,2) [P2. Broken π bond](https://reksstudio.github.io/learn/path/p2/index.md#p2)
* CASSCF, CAS, CASCI a product of geminals is GVB, not CAS [Unit](https://reksstudio.github.io/learn/concepts/index.md#unit)
* CI conical intersection or configuration interaction [Conical-intersection topography](https://reksstudio.github.io/learn/reference/properties/index.md#ci-topography)[SI Hamiltonian and overlap](https://reksstudio.github.io/learn/concepts/index.md#si-hamiltonian)
* cost, memory, timing cost of REKS runs; memory of the SI solvers [SI eigensolver](https://reksstudio.github.io/learn/concepts/index.md#si-solver)[Cost](https://reksstudio.github.io/main/cost/index.md)
* excitation energy, vertical excitation the state table of each cassette [SSR state energies](https://reksstudio.github.io/learn/reference/properties/index.md#ssr-energies)
* FSSH, surface hopping, nonadiabatic dynamics PyUNIxMD trajectories [Surface hopping](https://reksstudio.github.io/learn/branch/dynamics/index.md#surface-hopping)
* MECI, minimum-energy conical intersection, crossing point S0/S1 MECI with DL-FIND [S0/S1 MECI of ethylene with DL-FIND](https://reksstudio.github.io/learn/branch/dynamics/index.md#case-meci-c2h4)
* odd N, radical, doublet, SOMO implicit SOMO d1; doublet units d2, hd2, hd3 [Odd N: SOMO and doublets](https://reksstudio.github.io/learn/branch/units/index.md#units-odd)
* PCM, solvent, solvation, continuum PCM, DDX and PE are rejected; point charges are available [Required and rejected settings](https://reksstudio.github.io/learn/reference/index.md#required-settings)[Point charges](https://reksstudio.github.io/learn/branch/environment/index.md#case-env-point-charges)
* TDDFT, nroots, roots, excited states states come from the SI cassette [SI cassette](https://reksstudio.github.io/learn/concepts/index.md#si-cassette)[SI cassettes](https://reksstudio.github.io/learn/reference/index.md#si-cassettes)
* transition state, TS, saddle point the S0 torsion TS of ethylene on the results page; optimize() searches minima [Check the optimization](https://reksstudio.github.io/learn/branch/dynamics/index.md#check-optimization)[Ethylene photochemistry](https://reksstudio.github.io/main/results/c2h4-photochemistry/index.md#ts)

## Concept {#find-concept}

* [Active space, core, virtual](https://reksstudio.github.io/learn/concepts/index.md#active-core-virtual)
* [Adiabatic (SSR) states](https://reksstudio.github.io/learn/concepts/index.md#ssr-states)
* [all-alpha, all-α determinant, high-spin determinant](https://reksstudio.github.io/learn/reference/index.md#sa_reks_extra)
* BH\&HLYP, functional, which functional the functional of the examples; rejected functionals [P1. One pair](https://reksstudio.github.io/learn/path/p1/index.md#p1)[Required and rejected settings](https://reksstudio.github.io/learn/reference/index.md#required-settings)
* [branching plane, g h vectors](https://reksstudio.github.io/learn/reference/properties/index.md#ci-topography) g and h of the CI topography
* [Chirgwin–Coulson weights](https://reksstudio.github.io/learn/concepts/index.md#cc-weights)
* [choose active space, how many orbitals](https://reksstudio.github.io/learn/procedure/index.md#which-active-space)
* [Concepts](https://reksstudio.github.io/learn/concepts/index.md#concepts)
* [Configuration and its energy](https://reksstudio.github.io/learn/concepts/index.md#configuration-energy)
* [Coupling damping below 100 % exact exchange](https://reksstudio.github.io/learn/concepts/index.md#coupling-damping)
* [Coupling Δ and factor f](https://reksstudio.github.io/learn/concepts/index.md#coupling)
* [derivative coupling, nonadiabatic coupling](https://reksstudio.github.io/learn/reference/properties/index.md#nac) NAC vector d_IJ
* [Ensemble Kohn–Sham reference and FONs](https://reksstudio.github.io/learn/concepts/index.md#ensemble-fons)
* [ESA, E_SA, ensemble energy](https://reksstudio.github.io/learn/concepts/index.md#sa-ensemble)
* [FON set and generation](https://reksstudio.github.io/learn/concepts/index.md#fon-generation)
* [Geminals](https://reksstudio.github.io/learn/concepts/index.md#geminals)
* K=0, cassette index K K numbers the SI cassettes of a run from 0, in ascending 2S [Cassette order](https://reksstudio.github.io/learn/reference/index.md#cassette-order)[P2. Broken π bond](https://reksstudio.github.io/learn/path/p2/index.md#p2)
* [Microstate](https://reksstudio.github.io/learn/concepts/index.md#microstate)
* [Orbitals, orbital energies, SCF convergence](https://reksstudio.github.io/learn/concepts/index.md#orbitals-scf)
* [Pairing scheme](https://reksstudio.github.io/learn/concepts/index.md#pairing-scheme)
* [References](https://reksstudio.github.io/learn/concepts/index.md#references)
* [SA-REKS ensemble and weights](https://reksstudio.github.io/learn/concepts/index.md#sa-ensemble)
* [scheme 0, pairing scheme](https://reksstudio.github.io/learn/concepts/index.md#pairing-scheme) which orbitals pair
* [SI cassette](https://reksstudio.github.io/learn/concepts/index.md#si-cassette)
* [SI eigensolver](https://reksstudio.github.io/learn/concepts/index.md#si-solver)
* [SI-only FONs](https://reksstudio.github.io/learn/concepts/index.md#si-only-fons)
* [Spin manifold and run sector](https://reksstudio.github.io/learn/concepts/index.md#run-sector)
* [Spin-polarized configurations](https://reksstudio.github.io/learn/concepts/index.md#sps-configurations)
* [Unit](https://reksstudio.github.io/learn/concepts/index.md#unit)
* [Unrelaxed and relaxed densities](https://reksstudio.github.io/learn/concepts/index.md#densities)
* [Width ≥ 3, holes, doublets](https://reksstudio.github.io/learn/concepts/index.md#unit-kinds)
* Z-vector, CP-REKS, response one CP-REKS solve for every gradient and coupling target [REKS_CPREKS_CONV](https://reksstudio.github.io/learn/reference/index.md#reks_cpreks_conv)[Unrelaxed and relaxed densities](https://reksstudio.github.io/learn/concepts/index.md#densities)

## Case {#find-case}

* [A triplet configuration in the SA ensemble](https://reksstudio.github.io/learn/branch/spin/index.md#case-hexatriene-sa-t1) What changes when a triplet configuration enters the orbital optimization? · reks66
* [Bond and lone pair: BH, REKS(4,5) 2 3](https://reksstudio.github.io/learn/branch/units/index.md#case-wide-bh-45) How is a wide geminal seeded next to a pair? · reks45_u23
* [Delocalizing localized active orbitals](https://reksstudio.github.io/learn/branch/solvers/index.md#case-deloc) How are active orbitals that sit on one centre each rotated back?
* [Dipoles, charges, NTOs, relaxed properties and EKT](https://reksstudio.github.io/learn/branch/properties/index.md#case-props-c2h4) What does one SCF give besides energies? · reks22
* [Dispersion correction (D3)](https://reksstudio.github.io/learn/branch/environment/index.md#case-env-dispersion) How is a dispersion correction added to the REKS energies and gradients?
* [Electron doublet over two orbitals: REKS(3,4) 2 d2](https://reksstudio.github.io/learn/branch/units/index.md#case-doublet-34) Can the odd electron spread over two orbitals? · reks34_u2d2
* [Four SI cassettes from one SCF](https://reksstudio.github.io/learn/branch/solvers/index.md#case-cassettes-h4) How much does the choice of cassette change the states? · reks44
* [Fragment couplings](https://reksstudio.github.io/learn/branch/environment/index.md#case-env-fragments) How strongly are the states of two fragments coupled?
* [Geminal over four orbitals: REKS(2,4) 4](https://reksstudio.github.io/learn/branch/units/index.md#case-wide-24) What does a geminal of width 4 hold? · reks24_u4
* [Ghost atoms](https://reksstudio.github.io/learn/branch/environment/index.md#case-env-ghost) How are basis functions without nuclei placed in a REKS run?
* [Gradient and relaxed properties of a triplet](https://reksstudio.github.io/learn/branch/properties/index.md#case-props-h2-triplet) How is a triplet state followed? · reks22
* [Hole doublet: REKS(5,4) 2 hd2](https://reksstudio.github.io/learn/branch/units/index.md#case-hole-doublet-54) Can the odd hole spread over two orbitals? · reks54_u2hd2
* [Hole geminal and pair: REKS(6,5) h3 2](https://reksstudio.github.io/learn/branch/units/index.md#case-hole-pair-65) Can a hole geminal and an electron pair share one active space? · reks65_uh32
* [Hole geminal and SOMO: REKS(5,4) h3 d1](https://reksstudio.github.io/learn/branch/units/index.md#case-hole-54) Where does the odd electron go next to a hole geminal? · reks54_uh3
* [Hole geminal: REKS(4,3) h3](https://reksstudio.github.io/learn/branch/units/index.md#case-hole-43) What if two holes, not two electrons, are shared over three orbitals? · reks43_uh3
* [Implicit SOMO: REKS(3,3) 2 d1](https://reksstudio.github.io/learn/branch/units/index.md#case-odd-33) How does REKS treat an odd electron? · reks33
* [Integral engines: DF, CD, COSX, DIRECT](https://reksstudio.github.io/learn/branch/environment/index.md#case-env-integrals) Which integral engine runs a REKS calculation?
* [Lone pair over three orbitals: BH, REKS(2,3) 3](https://reksstudio.github.io/learn/branch/units/index.md#case-wide-bh-23) Can one pair spread over more than two orbitals? · reks23_u3
* [Lower bound on the FONs of a generation](https://reksstudio.github.io/learn/branch/solvers/index.md#case-fon-bound) How is an inverting FON held?
* [Lowest roots of a large cassette: Davidson](https://reksstudio.github.io/learn/branch/solvers/index.md#case-davidson) How are the lowest roots of a large cassette found without the dense matrix?
* [Molden, cube and wavefunction files](https://reksstudio.github.io/learn/branch/environment/index.md#case-env-files) Which files does a run leave for viewers and later runs?
* [One electron pair: H₂, REKS(2,2)](https://reksstudio.github.io/learn/path/p1/index.md#case-h2-pair) What happens to one electron pair when a bond stretches? · reks22
* [Point charges](https://reksstudio.github.io/learn/branch/environment/index.md#case-env-point-charges) How do external point charges enter the states and their gradients?
* [S0 minimum of ethylene with DL-FIND](https://reksstudio.github.io/learn/branch/dynamics/index.md#case-opt-c2h4) How is a state optimized? · reks22
* [S0/S1 MECI of ethylene with DL-FIND](https://reksstudio.github.io/learn/branch/dynamics/index.md#case-meci-c2h4) Where do S0 and S1 meet at the lowest energy? · reks22
* [S1 gradient and S0/S1 coupling of twisted ethylene](https://reksstudio.github.io/learn/path/p6/index.md#case-c2h4-gradient) What are the forces on the atoms in a state? · reks22
* [Scan with restarts: linear H₄](https://reksstudio.github.io/learn/branch/solvers/index.md#case-scan-h4) How does one point seed the next? · reks44
* [Singlets and triplets of linear H₄](https://reksstudio.github.io/learn/branch/spin/index.md#case-h4-singlet-triplet) How are the singlet and the triplet cassette set side by side? · reks44
* [Singlets, triplets and the quintet of butadiene](https://reksstudio.github.io/learn/path/p5/index.md#case-butadiene-spin) Where is the triplet? · reks44
* [Singlets, triplets and the quintet of linear H₄](https://reksstudio.github.io/learn/branch/spin/index.md#case-h4-heisenberg) What does the quintet manifold add? · reks44
* [Small basis first: 6-31G(d) to cc-pVTZ](https://reksstudio.github.io/learn/branch/solvers/index.md#case-basis-c2h4) How is a converged solution carried into a larger basis? · reks22
* [Spin ladder of hexatriene, 2S = 0 to 6](https://reksstudio.github.io/learn/branch/spin/index.md#case-hexatriene-ladder) Which states does one SCF of REKS(6,6) give on every manifold? · reks66
* [Surface hopping of ethylene on S1](https://reksstudio.github.io/learn/branch/dynamics/index.md#case-md-c2h4) How does a trajectory move between states? · reks22
* [Surface hopping of hexatriene on T1](https://reksstudio.github.io/learn/branch/dynamics/index.md#case-md-hexatriene) How does a trajectory run on a triplet manifold? · reks66
* [T1 minimum of hexatriene](https://reksstudio.github.io/learn/branch/dynamics/index.md#case-opt-hexatriene) How is a triplet state optimized? · reks66
* [Topography of a conical intersection](https://reksstudio.github.io/learn/branch/dynamics/index.md#case-ci-topography) What does the S0/S1 surface pair look like at a crossing?
* [TRAH for the whole SCF: states of BH](https://reksstudio.github.io/learn/branch/solvers/index.md#case-trah-bh) How is the trust-region engine switched on? · reks23_u3
* [Twisted ethylene without a seed](https://reksstudio.github.io/learn/path/p3/index.md#case-c2h4-90-cold) Where did the two orbitals come from? · reks22
* [Twisted ethylene, REKS(2,2)](https://reksstudio.github.io/learn/path/p2/index.md#case-c2h4-90) Can a bond break without stretching? · reks22
* [Two hole geminals: REKS(8,6) h3 h3](https://reksstudio.github.io/learn/branch/units/index.md#case-holes-86) What do two hole geminals give? · reks86_uh3h3
* [Two pairs and a SOMO: REKS(5,5) 2 2 d1](https://reksstudio.github.io/learn/branch/units/index.md#case-odd-55) What do two pairs next to an odd electron give? · reks55
* [Two pairs: butadiene, REKS(4,4)](https://reksstudio.github.io/learn/path/p4/index.md#case-butadiene-44) With two bonds, which orbitals pair? · reks44
* [Two wide geminals: BH, REKS(4,6) 3 3](https://reksstudio.github.io/learn/branch/units/index.md#case-wide-bh-46) What does one more orbital in the bond geminal add? · reks46_u33
* [Wide geminal and hole doublet: REKS(7,6) 3 hd3](https://reksstudio.github.io/learn/branch/units/index.md#case-doublet-76) Can a wide geminal and a wide hole doublet share one active space? · reks76_u3hd3
* [Wide geminal and SOMO: REKS(3,4) 3 d1](https://reksstudio.github.io/learn/branch/units/index.md#case-odd-34-u3) Can the pair next to an odd electron be wide? · reks34_u3

## Heading {#find-heading}

* [A lower ensemble energy from another start](https://reksstudio.github.io/learn/diagnose/index.md#diag-lower-esa)
* [Active orbitals localize on one fragment](https://reksstudio.github.io/learn/diagnose/index.md#diag-localized)
* Active space [Input reference](https://reksstudio.github.io/learn/reference/index.md#active-space)[Option table](https://reksstudio.github.io/learn/reference/options/index.md#active-space)
* [Active space and catalog](https://reksstudio.github.io/learn/reference/index.md#catalog)
* [Active space fails to load](https://reksstudio.github.io/learn/diagnose/index.md#diag-catalog)
* [Bulk tokens and pattern syntax](https://reksstudio.github.io/learn/reference/index.md#bulk-tokens)
* [Cassette order](https://reksstudio.github.io/learn/reference/index.md#cassette-order)
* [Catalog](https://reksstudio.github.io/learn/reference/options/index.md#catalog)
* [Check the optimization](https://reksstudio.github.io/learn/branch/dynamics/index.md#check-optimization)
* [Check the solution](https://reksstudio.github.io/learn/procedure/index.md#check-solution)
* [Check the trajectory](https://reksstudio.github.io/learn/branch/dynamics/index.md#check-trajectory)
* [Choose the pairs](https://reksstudio.github.io/learn/procedure/index.md#choose-pairs)
* [Conical intersections](https://reksstudio.github.io/learn/branch/dynamics/index.md#dyn-ci)
* [Convergence engines](https://reksstudio.github.io/learn/reference/options/index.md#convergence-engines)
* [Delocalization options](https://reksstudio.github.io/learn/reference/run-control/index.md#geminal-deloc-options)
* [Diagnose](https://reksstudio.github.io/learn/diagnose/index.md#diagnose)
* [Environment, engines and files](https://reksstudio.github.io/learn/branch/environment/index.md#branch-environment)
* [Every active space you can run today](https://reksstudio.github.io/learn/index.md#reks-table)
* [Expert stabilizers](https://reksstudio.github.io/learn/reference/run-control/index.md#expert-stabilizers)
* [Explicit SA pool and SI cassettes](https://reksstudio.github.io/learn/reference/index.md#explicit-input)
* [Files](https://reksstudio.github.io/learn/reference/output/index.md#files)
* [FON 2.000000 / 0.000000 where 1 / 1 is expected, pinned at a bound](https://reksstudio.github.io/learn/diagnose/index.md#diag-fon-pinned)
* FON micro-solver [Run-control reference](https://reksstudio.github.io/learn/reference/run-control/index.md#fon-micro)[Option table](https://reksstudio.github.io/learn/reference/options/index.md#fon-micro-solver)
* [FON options](https://reksstudio.github.io/learn/reference/run-control/index.md#fon-options)
* [FON sets](https://reksstudio.github.io/learn/reference/index.md#fon-sets)
* [FONs](https://reksstudio.github.io/learn/reference/options/index.md#fons)
* [FONs of a geminal invert](https://reksstudio.github.io/learn/diagnose/index.md#diag-fon-inverted)
* [Fractional occupation numbers (FONs)](https://reksstudio.github.io/learn/reference/run-control/index.md#fons)
* Geminal delocalization [Run-control reference](https://reksstudio.github.io/learn/reference/run-control/index.md#geminal-deloc)[Option table](https://reksstudio.github.io/learn/reference/options/index.md#geminal-delocalization)
* [Geometry optimization](https://reksstudio.github.io/learn/branch/dynamics/index.md#geometry-optimization)
* [Ghost states and a collapsed SI spectrum](https://reksstudio.github.io/learn/diagnose/index.md#diag-ghost-states)
* Gradients and couplings [Input reference](https://reksstudio.github.io/learn/reference/index.md#gradients-couplings)[Option table](https://reksstudio.github.io/learn/reference/options/index.md#gradients-and-couplings)
* [Gradients, NAC, conical intersections](https://reksstudio.github.io/learn/reference/properties/index.md#gradients-nac-conical-intersections)
* [Guess](https://reksstudio.github.io/learn/reference/options/index.md#guess)
* [Guesses and restarts](https://reksstudio.github.io/learn/reference/run-control/index.md#guesses)
* GVB-DIIS conditioning chain (expert) [Run-control reference](https://reksstudio.github.io/learn/reference/run-control/index.md#diis-conditioning)[Option table](https://reksstudio.github.io/learn/reference/options/index.md#gvb-diis-conditioning-chain-expert)
* GVB-DIIS monitors / verdicts (expert) [Run-control reference](https://reksstudio.github.io/learn/reference/run-control/index.md#diis-monitors)[Option table](https://reksstudio.github.io/learn/reference/options/index.md#gvb-diis-monitors-verdicts-expert)
* [Hole geminals](https://reksstudio.github.io/learn/branch/units/index.md#units-hole)
* [I want to…](https://reksstudio.github.io/learn/index.md#tasks)
* [If the SCF does not converge](https://reksstudio.github.io/learn/procedure/index.md#no-convergence)
* [Input](https://reksstudio.github.io/learn/reference/index.md#input)
* [Input patterns](https://reksstudio.github.io/learn/reference/index.md#input-patterns)
* [Inspect the orbitals](https://reksstudio.github.io/learn/procedure/index.md#inspect-orbitals)
* [Learn](https://reksstudio.github.io/learn/index.md#learn)
* Level shift [Run-control reference](https://reksstudio.github.io/learn/reference/run-control/index.md#level-shift)[Option table](https://reksstudio.github.io/learn/reference/options/index.md#level-shift)
* [Look up](https://reksstudio.github.io/learn/index.md#look-up)
* [Minimal input](https://reksstudio.github.io/learn/reference/index.md#minimal-input)
* [Naming convention](https://reksstudio.github.io/learn/reference/index.md#naming-convention)
* [Odd N: SOMO and doublets](https://reksstudio.github.io/learn/branch/units/index.md#units-odd)
* [One pair at n ≈ 2 / 0 in a larger active space](https://reksstudio.github.io/learn/diagnose/index.md#diag-one-pair-closed)
* [Optimization and dynamics](https://reksstudio.github.io/learn/branch/dynamics/index.md#opt-dynamics)
* [Option table](https://reksstudio.github.io/learn/reference/options/index.md#option-table)
* [Output](https://reksstudio.github.io/learn/reference/index.md#output)
* [Pairing schemes](https://reksstudio.github.io/learn/reference/index.md#pairing-schemes)
* [Print order](https://reksstudio.github.io/learn/reference/output/index.md#print-order)
* [Procedure](https://reksstudio.github.io/learn/procedure/index.md#procedure)
* [Properties](https://reksstudio.github.io/learn/reference/properties/index.md#properties)
* [Properties, gradients, couplings](https://reksstudio.github.io/learn/reference/index.md#response)
* [Quasi-degenerate roots](https://reksstudio.github.io/learn/diagnose/index.md#diag-quasi-degenerate)
* [Reading the output](https://reksstudio.github.io/learn/reference/output/index.md#reading-output)
* [REKS\_\<L>\_FON](https://reksstudio.github.io/learn/reference/run-control/index.md#reks_l_fon)
* [Relaxed properties and EKT](https://reksstudio.github.io/learn/reference/properties/index.md#relaxed-properties-and-ekt)
* [Report level](https://reksstudio.github.io/learn/reference/output/index.md#report-level)
* [Reporting](https://reksstudio.github.io/learn/reference/options/index.md#reporting)
* [Required and rejected settings](https://reksstudio.github.io/learn/reference/index.md#required-settings)
* [Requirements](https://reksstudio.github.io/learn/branch/dynamics/index.md#dyn-requirements)
* [Restart mechanism](https://reksstudio.github.io/learn/reference/run-control/index.md#restart)
* [Rules for all entries](https://reksstudio.github.io/learn/reference/properties/index.md#property-rules)
* [Run it now](https://reksstudio.github.io/learn/index.md#run-now)
* [Run report](https://reksstudio.github.io/learn/reference/output/index.md#run-report)
* [SA pool and SI cassettes](https://reksstudio.github.io/learn/reference/index.md#selecting)
* [Scans](https://reksstudio.github.io/learn/procedure/index.md#first-scans)
* [SCF](https://reksstudio.github.io/learn/reference/properties/index.md#scf)
* [SCF convergence engines](https://reksstudio.github.io/learn/reference/run-control/index.md#scf-engines)
* [SCF converges instantly to a wrong energy after a restart](https://reksstudio.github.io/learn/diagnose/index.md#diag-wrong-window)
* [SCF hits MAXITER or continues unconverged](https://reksstudio.github.io/learn/diagnose/index.md#diag-maxiter)
* [SCF oscillates or cycles](https://reksstudio.github.io/learn/diagnose/index.md#diag-oscillation)
* [Seed orbitals](https://reksstudio.github.io/learn/procedure/index.md#seed-orbitals)
* [Seeds and cold start, measured](https://reksstudio.github.io/learn/path/p3/index.md#seeds-measured)
* SI cassettes [Input reference](https://reksstudio.github.io/learn/reference/index.md#si-cassettes)[Option table](https://reksstudio.github.io/learn/reference/options/index.md#si-cassettes)
* [Slots of each unit kind](https://reksstudio.github.io/learn/procedure/index.md#unit-slots)
* [Solvers and control](https://reksstudio.github.io/learn/branch/solvers/index.md#branch-solvers)
* [Spin energetics](https://reksstudio.github.io/learn/reference/properties/index.md#spin-energetics)
* [Spin manifolds](https://reksstudio.github.io/learn/reference/options/index.md#spin-manifolds)
* [Spin manifolds (2S) and multi-manifold runs](https://reksstudio.github.io/learn/reference/index.md#spin-manifolds)
* [Spin manifolds and J](https://reksstudio.github.io/learn/branch/spin/index.md#branch-spin)
* [Spin-manifold options](https://reksstudio.github.io/learn/reference/index.md#spin-options)
* [SSR states](https://reksstudio.github.io/learn/reference/properties/index.md#si-states)
* [Start REKS](https://reksstudio.github.io/learn/procedure/index.md#start-reks)
* [State labels](https://reksstudio.github.io/learn/reference/index.md#state-labels)
* State properties [State properties](https://reksstudio.github.io/learn/branch/properties/index.md#branch-properties)[Input reference](https://reksstudio.github.io/learn/reference/index.md#state-properties)[Option table](https://reksstudio.github.io/learn/reference/options/index.md#state-properties)
* [Summary](https://reksstudio.github.io/learn/reference/properties/index.md#summary)
* [Surface hopping](https://reksstudio.github.io/learn/branch/dynamics/index.md#surface-hopping)
* [The three engines](https://reksstudio.github.io/learn/reference/run-control/index.md#engines)
* [Unknown configuration name or type](https://reksstudio.github.io/learn/diagnose/index.md#diag-unknown-token)
* [Unrelaxed state and transition properties](https://reksstudio.github.io/learn/reference/properties/index.md#unrelaxed-state-and-transition-properties)
* [Variable names](https://reksstudio.github.io/learn/reference/output/index.md#variable-names)
* [Which active space?](https://reksstudio.github.io/learn/procedure/index.md#which-active-space)
* [Wide electron geminals](https://reksstudio.github.io/learn/branch/units/index.md#units-wide)
* [Wide, hole and doublet units](https://reksstudio.github.io/learn/branch/units/index.md#branch-units)
* [Window, measured](https://reksstudio.github.io/learn/path/p4/index.md#window-measured)
* [Worked inputs](https://reksstudio.github.io/learn/reference/index.md#worked-inputs)

## Unit {#find-unit}

* [`2`](https://reksstudio.github.io/learn/concepts/index.md#unit) electron geminal, FON n
* [`3`](https://reksstudio.github.io/learn/concepts/index.md#unit) electron geminal, FON n
* [`4`](https://reksstudio.github.io/learn/concepts/index.md#unit) electron geminal, FON n
* [`d1`](https://reksstudio.github.io/learn/concepts/index.md#unit) electron doublet
* [`d2`](https://reksstudio.github.io/learn/concepts/index.md#unit) electron doublet
* [`h3`](https://reksstudio.github.io/learn/concepts/index.md#unit) hole geminal, FON h
* [`hd2`](https://reksstudio.github.io/learn/concepts/index.md#unit) hole doublet
* [`hd3`](https://reksstudio.github.io/learn/concepts/index.md#unit) hole doublet

## Catalog {#find-catalog}

* `reks22` REKS(2,2), units 2 [Active space and catalog](https://reksstudio.github.io/learn/reference/index.md#catalog)[One electron pair: H₂, REKS(2,2)](https://reksstudio.github.io/learn/path/p1/index.md#case-h2-pair)
* `reks23_u3` REKS(2,3), units 3 [Active space and catalog](https://reksstudio.github.io/learn/reference/index.md#catalog)[Lone pair over three orbitals: BH, REKS(2,3) 3](https://reksstudio.github.io/learn/branch/units/index.md#case-wide-bh-23)
* `reks24_u4` REKS(2,4), units 4 [Active space and catalog](https://reksstudio.github.io/learn/reference/index.md#catalog)[Geminal over four orbitals: REKS(2,4) 4](https://reksstudio.github.io/learn/branch/units/index.md#case-wide-24)
* `reks33` REKS(3,3), units 2 d1 [Active space and catalog](https://reksstudio.github.io/learn/reference/index.md#catalog)[Implicit SOMO: REKS(3,3) 2 d1](https://reksstudio.github.io/learn/branch/units/index.md#case-odd-33)
* `reks34_u2d2` REKS(3,4), units 2 d2 [Active space and catalog](https://reksstudio.github.io/learn/reference/index.md#catalog)[Electron doublet over two orbitals: REKS(3,4) 2 d2](https://reksstudio.github.io/learn/branch/units/index.md#case-doublet-34)
* `reks34_u3` REKS(3,4), units 3 d1 [Active space and catalog](https://reksstudio.github.io/learn/reference/index.md#catalog)[Wide geminal and SOMO: REKS(3,4) 3 d1](https://reksstudio.github.io/learn/branch/units/index.md#case-odd-34-u3)
* `reks43_uh3` REKS(4,3), units h3 [Active space and catalog](https://reksstudio.github.io/learn/reference/index.md#catalog)[Hole geminal: REKS(4,3) h3](https://reksstudio.github.io/learn/branch/units/index.md#case-hole-43)
* `reks44` REKS(4,4), units 2 2 [Active space and catalog](https://reksstudio.github.io/learn/reference/index.md#catalog)[Two pairs: butadiene, REKS(4,4)](https://reksstudio.github.io/learn/path/p4/index.md#case-butadiene-44)
* `reks45_u23` REKS(4,5), units 2 3 [Active space and catalog](https://reksstudio.github.io/learn/reference/index.md#catalog)[Bond and lone pair: BH, REKS(4,5) 2 3](https://reksstudio.github.io/learn/branch/units/index.md#case-wide-bh-45)
* `reks46_u33` REKS(4,6), units 3 3 [Active space and catalog](https://reksstudio.github.io/learn/reference/index.md#catalog)[Two wide geminals: BH, REKS(4,6) 3 3](https://reksstudio.github.io/learn/branch/units/index.md#case-wide-bh-46)
* `reks54_u2hd2` REKS(5,4), units 2 hd2 [Active space and catalog](https://reksstudio.github.io/learn/reference/index.md#catalog)[Hole doublet: REKS(5,4) 2 hd2](https://reksstudio.github.io/learn/branch/units/index.md#case-hole-doublet-54)
* `reks54_uh3` REKS(5,4), units h3 d1 [Active space and catalog](https://reksstudio.github.io/learn/reference/index.md#catalog)[Hole geminal and SOMO: REKS(5,4) h3 d1](https://reksstudio.github.io/learn/branch/units/index.md#case-hole-54)
* `reks55` REKS(5,5), units 2 2 d1 [Active space and catalog](https://reksstudio.github.io/learn/reference/index.md#catalog)[Two pairs and a SOMO: REKS(5,5) 2 2 d1](https://reksstudio.github.io/learn/branch/units/index.md#case-odd-55)
* `reks65_uh32` REKS(6,5), units h3 2 [Active space and catalog](https://reksstudio.github.io/learn/reference/index.md#catalog)[Hole geminal and pair: REKS(6,5) h3 2](https://reksstudio.github.io/learn/branch/units/index.md#case-hole-pair-65)
* `reks66` REKS(6,6), units 2 2 2 [Active space and catalog](https://reksstudio.github.io/learn/reference/index.md#catalog)[Spin ladder of hexatriene, 2S = 0 to 6](https://reksstudio.github.io/learn/branch/spin/index.md#case-hexatriene-ladder)
* `reks76_u3hd3` REKS(7,6), units 3 hd3 [Active space and catalog](https://reksstudio.github.io/learn/reference/index.md#catalog)[Wide geminal and hole doublet: REKS(7,6) 3 hd3](https://reksstudio.github.io/learn/branch/units/index.md#case-doublet-76)
* `reks86_uh3h3` REKS(8,6), units h3 h3 [Active space and catalog](https://reksstudio.github.io/learn/reference/index.md#catalog)[Two hole geminals: REKS(8,6) h3 h3](https://reksstudio.github.io/learn/branch/units/index.md#case-holes-86)

## Config type {#find-config-type}

* `DDES` [Naming convention](https://reksstudio.github.io/learn/reference/index.md#naming-convention)[FON sets](https://reksstudio.github.io/learn/reference/index.md#fon-sets)
* `DES` [Naming convention](https://reksstudio.github.io/learn/reference/index.md#naming-convention)[FON sets](https://reksstudio.github.io/learn/reference/index.md#fon-sets)
* [`DESa_OSSb`](https://reksstudio.github.io/learn/reference/index.md#naming-convention)
* [`DESb`](https://reksstudio.github.io/learn/reference/index.md#naming-convention)
* `DOSS` [Naming convention](https://reksstudio.github.io/learn/reference/index.md#naming-convention)[FON sets](https://reksstudio.github.io/learn/reference/index.md#fon-sets)
* `DOSS_DES` [Naming convention](https://reksstudio.github.io/learn/reference/index.md#naming-convention)[FON sets](https://reksstudio.github.io/learn/reference/index.md#fon-sets)
* [`DOSS_SPS`](https://reksstudio.github.io/learn/reference/index.md#naming-convention)
* `OSS` [Naming convention](https://reksstudio.github.io/learn/reference/index.md#naming-convention)[FON sets](https://reksstudio.github.io/learn/reference/index.md#fon-sets)
* `OSS_DDES` [Naming convention](https://reksstudio.github.io/learn/reference/index.md#naming-convention)[FON sets](https://reksstudio.github.io/learn/reference/index.md#fon-sets)
* `OSS_DES` [Naming convention](https://reksstudio.github.io/learn/reference/index.md#naming-convention)[FON sets](https://reksstudio.github.io/learn/reference/index.md#fon-sets)
* [`OSSa`](https://reksstudio.github.io/learn/reference/index.md#naming-convention)
* `PPS` [Naming convention](https://reksstudio.github.io/learn/reference/index.md#naming-convention)[FON sets](https://reksstudio.github.io/learn/reference/index.md#fon-sets)
* [`PPS_Da`](https://reksstudio.github.io/learn/reference/index.md#naming-convention)
* [`SPS`](https://reksstudio.github.io/learn/reference/index.md#naming-convention)
* [`T`](https://reksstudio.github.io/learn/reference/index.md#naming-convention)
* [`T_DDES`](https://reksstudio.github.io/learn/reference/index.md#fon-sets)
* [`T_DES`](https://reksstudio.github.io/learn/reference/index.md#fon-sets)
* [`T_OSS`](https://reksstudio.github.io/learn/reference/index.md#fon-sets)
* [`T_OSS_DES`](https://reksstudio.github.io/learn/reference/index.md#fon-sets)
* [`T_PPS`](https://reksstudio.github.io/learn/reference/index.md#fon-sets)
* [`T_PPSd`](https://reksstudio.github.io/learn/reference/index.md#naming-convention)
* [`Ta`](https://reksstudio.github.io/learn/reference/index.md#naming-convention)
* [`TaTb_SPS`](https://reksstudio.github.io/learn/reference/index.md#naming-convention)
* `TDES` [Naming convention](https://reksstudio.github.io/learn/reference/index.md#naming-convention)[FON sets](https://reksstudio.github.io/learn/reference/index.md#fon-sets)
* [`TOSS`](https://reksstudio.github.io/learn/reference/index.md#naming-convention)
* [`TOSS_SPS`](https://reksstudio.github.io/learn/reference/index.md#naming-convention)
* [`TT_DES`](https://reksstudio.github.io/learn/reference/index.md#fon-sets)
* [`TT_PPS`](https://reksstudio.github.io/learn/reference/index.md#fon-sets)

## Option {#find-option}

* [`GUESS_ACTIVE_WINDOW`](https://reksstudio.github.io/learn/reference/run-control/index.md#guess_active_window)
* [`LEVEL_SHIFT_ADAPT`](https://reksstudio.github.io/learn/reference/run-control/index.md#level_shift_adapt)
* [`REKS`](https://reksstudio.github.io/learn/reference/index.md#reks)
* [`REKS_CI_TOPOGRAPHY_GAP`](https://reksstudio.github.io/learn/reference/index.md#reks_ci_topography_gap)
* [`REKS_CPREKS_CONV`](https://reksstudio.github.io/learn/reference/index.md#reks_cpreks_conv)
* [`REKS_CPREKS_MAXITER`](https://reksstudio.github.io/learn/reference/index.md#reks_cpreks_maxiter)
* [`REKS_DIIS_ACTIVATION`](https://reksstudio.github.io/learn/reference/run-control/index.md#reks_diis_activation)
* [`REKS_DIIS_CFM_ACTIVATION_GORB`](https://reksstudio.github.io/learn/reference/run-control/index.md#reks_diis_cfm_activation_gorb)
* [`REKS_DIIS_COND_ANGLE_CUTOFF`](https://reksstudio.github.io/learn/reference/run-control/index.md#diis-conditioning)
* [`REKS_DIIS_COND_ANGLE_FILTER`](https://reksstudio.github.io/learn/reference/run-control/index.md#diis-conditioning)
* [`REKS_DIIS_COND_COEFF_NORM_MAX`](https://reksstudio.github.io/learn/reference/run-control/index.md#diis-conditioning)
* [`REKS_DIIS_COND_KAPPA_BYPASS`](https://reksstudio.github.io/learn/reference/run-control/index.md#diis-conditioning)
* [`REKS_DIIS_COND_STALE_DELTA`](https://reksstudio.github.io/learn/reference/run-control/index.md#diis-conditioning)
* [`REKS_DIIS_COND_SVD_RCOND`](https://reksstudio.github.io/learn/reference/run-control/index.md#diis-conditioning)
* [`REKS_DIIS_COND_TIKHONOV`](https://reksstudio.github.io/learn/reference/run-control/index.md#diis-conditioning)
* [`REKS_DIIS_COND_TIKHONOV_SCALE`](https://reksstudio.github.io/learn/reference/run-control/index.md#diis-conditioning)
* [`REKS_DIIS_FON_BRANCH_CUTOFF`](https://reksstudio.github.io/learn/reference/run-control/index.md#diis-monitors)
* [`REKS_DIIS_FORMULATION`](https://reksstudio.github.io/learn/reference/run-control/index.md#reks_diis_formulation)
* [`REKS_DIIS_GUARD_LANDING_TOLERANCE`](https://reksstudio.github.io/learn/reference/run-control/index.md#diis-monitors)
* [`REKS_DIIS_GUARD_LATCH_GRACE`](https://reksstudio.github.io/learn/reference/run-control/index.md#diis-monitors)
* [`REKS_DIIS_MON_CYCLE`](https://reksstudio.github.io/learn/reference/run-control/index.md#diis-monitors)
* [`REKS_DIIS_MON_CYCLE_CAP_STREAK`](https://reksstudio.github.io/learn/reference/run-control/index.md#diis-monitors)
* [`REKS_DIIS_MON_CYCLE_WINDOW`](https://reksstudio.github.io/learn/reference/run-control/index.md#diis-monitors)
* [`REKS_DIIS_MON_NONMONOTONE_M`](https://reksstudio.github.io/learn/reference/run-control/index.md#diis-monitors)
* [`REKS_DIIS_MON_PROGRESS_EPS`](https://reksstudio.github.io/learn/reference/run-control/index.md#diis-monitors)
* [`REKS_DIIS_MON_SUPPRESS_WINDOW`](https://reksstudio.github.io/learn/reference/run-control/index.md#diis-monitors)
* [`REKS_DIIS_MON_VERDICT_RHO`](https://reksstudio.github.io/learn/reference/run-control/index.md#diis-monitors)
* [`REKS_DIIS_MON_VERDICT_STREAK`](https://reksstudio.github.io/learn/reference/run-control/index.md#diis-monitors)
* [`REKS_DIIS_ORB_BASE_MAP_DAMP`](https://reksstudio.github.io/learn/reference/run-control/index.md#diis-monitors)
* [`REKS_DIIS_RESTART_BUDGET`](https://reksstudio.github.io/learn/reference/run-control/index.md#diis-monitors)
* [`REKS_EKT`](https://reksstudio.github.io/learn/reference/index.md#reks_ekt)
* [`REKS_EKT_OCC_TOL`](https://reksstudio.github.io/learn/reference/index.md#reks_ekt_occ_tol)
* [`REKS_FON_INTERP_DELTA`](https://reksstudio.github.io/learn/reference/run-control/index.md#reks_fon_interp_delta)
* [`REKS_FON_MICRO_BOUND_MARGIN`](https://reksstudio.github.io/learn/reference/run-control/index.md#fon-micro)
* [`REKS_FON_MICRO_BOUNDARY_SKIN`](https://reksstudio.github.io/learn/reference/run-control/index.md#fon-micro)
* [`REKS_FON_MICRO_CONVERGENCE`](https://reksstudio.github.io/learn/reference/run-control/index.md#fon-micro)
* [`REKS_FON_MICRO_LS_MAXITER`](https://reksstudio.github.io/learn/reference/run-control/index.md#fon-micro)
* [`REKS_FON_MICRO_MIN_EIGENVALUE`](https://reksstudio.github.io/learn/reference/run-control/index.md#fon-micro)
* [`REKS_FON_MICRO_NR_MAXITER`](https://reksstudio.github.io/learn/reference/run-control/index.md#fon-micro)
* [`REKS_GEMINAL_DELOC`](https://reksstudio.github.io/learn/reference/run-control/index.md#reks_geminal_deloc)
* [`REKS_GEMINAL_WIDTHS`](https://reksstudio.github.io/learn/reference/index.md#reks_geminal_widths)
* [`REKS_GRAD_DEGEN_TOL`](https://reksstudio.github.io/learn/reference/index.md#reks_grad_degen_tol)
* [`REKS_GVB_DIIS`](https://reksstudio.github.io/learn/reference/run-control/index.md#reks_gvb_diis)
* [`REKS_GVB_DIIS_START`](https://reksstudio.github.io/learn/reference/run-control/index.md#reks_gvb_diis_start)
* [`REKS_GVB_GATE_STREAK`](https://reksstudio.github.io/learn/reference/run-control/index.md#diis-monitors)
* [`REKS_GVB_LEVEL_SHIFT`](https://reksstudio.github.io/learn/reference/run-control/index.md#reks_gvb_level_shift)
* [`REKS_GVB_ROBUST_VERDICT`](https://reksstudio.github.io/learn/reference/run-control/index.md#reks_gvb_robust_verdict)
* [`REKS_N_FON`](https://reksstudio.github.io/learn/reference/run-control/index.md#reks_l_fon)
* [`REKS_REPORT_LEVEL`](https://reksstudio.github.io/learn/reference/output/index.md#reks_report_level)
* [`REKS_SA_2SPIN`](https://reksstudio.github.io/learn/reference/index.md#sa_reks_2spin)
* [`REKS_SA_CONFIGS`](https://reksstudio.github.io/learn/reference/index.md#sa_reks_configs)
* [`REKS_SA_EXTRA`](https://reksstudio.github.io/learn/reference/index.md#sa_reks_extra)
* [`REKS_SA_WEIGHTS`](https://reksstudio.github.io/learn/reference/index.md#sa_reks_weights)
* [`REKS_SI_2SPIN`](https://reksstudio.github.io/learn/reference/index.md#si_reks_2spin)
* [`REKS_SI_CONFIGS`](https://reksstudio.github.io/learn/reference/index.md#si_reks_configs)
* [`REKS_SI_STORE_STATES`](https://reksstudio.github.io/learn/reference/index.md#si_reks_store_states)
* [`REKS_USE_TRAH`](https://reksstudio.github.io/learn/reference/run-control/index.md#reks_use_trah)
* [`SA_REKS_2SPIN`](https://reksstudio.github.io/learn/reference/index.md#sa_reks_2spin)
* [`SA_REKS_CONFIGS`](https://reksstudio.github.io/learn/reference/index.md#sa_reks_configs)
* [`SA_REKS_EXTRA`](https://reksstudio.github.io/learn/reference/index.md#sa_reks_extra)
* [`SA_REKS_WEIGHTS`](https://reksstudio.github.io/learn/reference/index.md#sa_reks_weights)
* [`SI_REKS_2SPIN`](https://reksstudio.github.io/learn/reference/index.md#si_reks_2spin)
* [`SI_REKS_ANALYSIS`](https://reksstudio.github.io/learn/reference/index.md#si_reks_analysis)
* [`SI_REKS_ANALYSIS_CHANGE_MIN`](https://reksstudio.github.io/learn/reference/index.md#si_reks_analysis_change_min)
* [`SI_REKS_CONFIGS`](https://reksstudio.github.io/learn/reference/index.md#si_reks_configs)
* [`SI_REKS_DAVIDSON_R_CONVERGENCE`](https://reksstudio.github.io/learn/reference/index.md#si_reks_davidson_r_convergence)
* [`SI_REKS_FON_BOUND_MARGIN`](https://reksstudio.github.io/learn/reference/run-control/index.md#fon-micro)
* [`SI_REKS_GRAD`](https://reksstudio.github.io/learn/reference/index.md#si_reks_grad)
* [`SI_REKS_NAC`](https://reksstudio.github.io/learn/reference/index.md#si_reks_nac)
* [`SI_REKS_OVERLAP_CUTOFF`](https://reksstudio.github.io/learn/reference/index.md#si_reks_overlap_cutoff)
* [`SI_REKS_PRINT_STATES`](https://reksstudio.github.io/learn/reference/index.md#si_reks_print_states)
* [`SI_REKS_PROPERTY_FOR`](https://reksstudio.github.io/learn/reference/index.md#si_reks_property_for)
* [`SI_REKS_SOLVER`](https://reksstudio.github.io/learn/reference/index.md#si_reks_solver)
* [`SI_REKS_STORE_STATES`](https://reksstudio.github.io/learn/reference/index.md#si_reks_store_states)

## Bulk token {#find-bulk-token}

* [`exclude:X`](https://reksstudio.github.io/learn/reference/index.md#bulk-tokens)
* [`full`](https://reksstudio.github.io/learn/reference/index.md#bulk-tokens)
* [`mixed-scheme:N`](https://reksstudio.github.io/learn/reference/index.md#bulk-tokens)
* [`single-scheme:N`](https://reksstudio.github.io/learn/reference/index.md#bulk-tokens)
* [`sps`](https://reksstudio.github.io/learn/reference/index.md#bulk-tokens)

## Output block {#find-output-block}

* [`Adiabatic states`](https://reksstudio.github.io/learn/reference/properties/index.md#ssr-energies)
* [`Alternative configuration lists`](https://reksstudio.github.io/learn/reference/index.md#si_reks_configs)
* [`Atomic charges (relaxed density matrix P^r)`](https://reksstudio.github.io/learn/reference/properties/index.md#relaxed-properties)
* [`Atomic charges (unrelaxed state density matrix) [MULLIKEN_CHARGES, LOWDIN_CHARGES]`](https://reksstudio.github.io/learn/reference/properties/index.md#atomic-charges)
* [`Atomic spin populations (unrelaxed state spin density, M_S = S) [MULLIKEN_SPINS, LOWDIN_SPINS]`](https://reksstudio.github.io/learn/reference/properties/index.md#atomic-spins)
* [`Bond indices (unrelaxed state density matrix) [MAYER_INDICES, WIBERG_LOWDIN_INDICES]`](https://reksstudio.github.io/learn/reference/properties/index.md#bond-indices)
* [`Conical-intersection (CI) topography S1/S2`](https://reksstudio.github.io/learn/reference/properties/index.md#ci-topography)
* [`Coupled-perturbed REKS (CP-REKS, Z-vector) solver`](https://reksstudio.github.io/learn/reference/index.md#reks_cpreks_conv)
* [`Dipole moment (relaxed density matrix P^r)`](https://reksstudio.github.io/learn/reference/properties/index.md#relaxed-properties)
* [`Dipole moment (unrelaxed state density matrix) [DIPOLE]`](https://reksstudio.github.io/learn/reference/properties/index.md#permanent-dipole)
* [`Energetics`](https://reksstudio.github.io/learn/reference/properties/index.md#sa-energy)
* [`Exciton descriptors [EXCITON]`](https://reksstudio.github.io/learn/reference/properties/index.md#exciton)
* [`FON optimization after the SCF`](https://reksstudio.github.io/learn/reference/properties/index.md#si-fons)
* [`Fragment diabatic couplings F1 - F2 [FRAGMENT_COUPLINGS]`](https://reksstudio.github.io/learn/reference/properties/index.md#fragment-couplings)
* [`Fragments: charge-transfer descriptors [EXCITON]`](https://reksstudio.github.io/learn/reference/properties/index.md#fragment-ct)
* [`Fragments: hole and electron populations [EXCITON]`](https://reksstudio.github.io/learn/reference/properties/index.md#fragment-ct)
* [`Gradient of S1`](https://reksstudio.github.io/learn/reference/properties/index.md#state-gradient)
* [`Gradient request`](https://reksstudio.github.io/learn/reference/index.md#si_reks_grad)
* [`Hole and electron populations [EXCITON]`](https://reksstudio.github.io/learn/reference/properties/index.md#exciton)
* [`Ionization energies (EKT) and Dyson orbitals [REKS_EKT]`](https://reksstudio.github.io/learn/reference/properties/index.md#ekt-states)
* [`Iterations`](https://reksstudio.github.io/learn/reference/run-control/index.md#engines)
* [`NAC S1/S2`](https://reksstudio.github.io/learn/reference/properties/index.md#nac)
* [`Natural occupation numbers and natural orbitals of the active space [NO_OCCUPATIONS]`](https://reksstudio.github.io/learn/reference/properties/index.md#natural-orbitals)
* [`Natural transition orbitals (NTO): weights and participation ratios [NTO]`](https://reksstudio.github.io/learn/reference/properties/index.md#nto)
* [`Pairing schemes (geminal orbitals)`](https://reksstudio.github.io/learn/reference/index.md#pairing-schemes)
* [`Post-Iterations`](https://reksstudio.github.io/learn/reference/properties/index.md#sa-fons)
* [`Pre-Iterations`](https://reksstudio.github.io/learn/reference/run-control/index.md#restart)
* [`Quadrupole moment (relaxed density matrix P^r)`](https://reksstudio.github.io/learn/reference/properties/index.md#relaxed-properties)
* [`Quadrupole moment (unrelaxed state density matrix) [QUADRUPOLE]`](https://reksstudio.github.io/learn/reference/properties/index.md#quadrupole)
* [`Radical character [RADICAL]`](https://reksstudio.github.io/learn/reference/properties/index.md#radical-character)
* [`REKS Geminal Delocalization`](https://reksstudio.github.io/learn/reference/run-control/index.md#reks_geminal_deloc)
* [`REKS Studio`](https://reksstudio.github.io/learn/reference/output/index.md#run-report)
* [`REKS Studio setup`](https://reksstudio.github.io/learn/reference/output/index.md#run-report)
* [`Relaxed properties [SI_REKS_PROPERTY_FOR]`](https://reksstudio.github.io/learn/reference/properties/index.md#relaxed-properties)
* [`Returned gradient`](https://reksstudio.github.io/learn/reference/properties/index.md#state-gradient)
* [`SA pool`](https://reksstudio.github.io/learn/reference/index.md#sa_reks_configs)
* [`SA-REKS energy decomposition`](https://reksstudio.github.io/learn/reference/properties/index.md#sa-energy)
* [`SI Davidson solver`](https://reksstudio.github.io/learn/reference/properties/index.md#si-davidson)
* [`SI Hamiltonian: dimension, matrix elements and eigenproblem`](https://reksstudio.github.io/learn/reference/properties/index.md#si-matrices)
* [`SI pools`](https://reksstudio.github.io/learn/reference/index.md#si_reks_configs)
* [`SI-SA-REKS analytic gradient: targets`](https://reksstudio.github.io/learn/reference/properties/index.md#state-gradient)
* [`Spin-state energetics`](https://reksstudio.github.io/learn/reference/properties/index.md#spin-state-energetics)
* [`State analysis [PROPERTIES]`](https://reksstudio.github.io/learn/reference/index.md#si_reks_analysis)
* [`State and transition multipole moments of order 3 (unrelaxed state density matrix) [MULTIPOLE(3)]`](https://reksstudio.github.io/learn/reference/properties/index.md#multipoles)
* [`State interaction`](https://reksstudio.github.io/learn/reference/index.md#si_reks_configs)
* [`State interaction: setup over the union of the SI cassettes`](https://reksstudio.github.io/learn/reference/index.md#si_reks_configs)
* [`State summary [SUMMARY]`](https://reksstudio.github.io/learn/reference/properties/index.md#ssr-energies)
* [`Summary of the energy phase`](https://reksstudio.github.io/learn/reference/output/index.md#files)
* [`Transition charges [TRANSITION_CHARGES]`](https://reksstudio.github.io/learn/reference/properties/index.md#transition-charges)
* [`Transition dipole moments and oscillator strengths [TRANSITION_DIPOLE]`](https://reksstudio.github.io/learn/reference/properties/index.md#transition-dipole)
* [`Transition second moments [TRANSITION_QUADRUPOLE]`](https://reksstudio.github.io/learn/reference/properties/index.md#transition-second-moments)
* [`Velocity-form and magnetic transition moments, rotatory strengths [E_TDM_VEL, M_TDM]`](https://reksstudio.github.io/learn/reference/properties/index.md#transition-velocity)

## Output line {#find-output-line}

* `[GRAD-FON] … pinned` [FON 2.000000 / 0.000000 where 1 / 1 is expected, pinned at a bound](https://reksstudio.github.io/learn/diagnose/index.md#diag-fon-pinned)[Check the optimization](https://reksstudio.github.io/learn/branch/dynamics/index.md#check-optimization)
* [`@REKS Final Energy`](https://reksstudio.github.io/learn/diagnose/index.md#diag-ghost-states)
* [`Active MO indices`](https://reksstudio.github.io/learn/diagnose/index.md#diag-wrong-window)
* [`Computed states k of r`](https://reksstudio.github.io/learn/diagnose/index.md#diag-ghost-states)
* [`Energy and/or wave function did not converge, but proceeding anyway.`](https://reksstudio.github.io/learn/branch/dynamics/index.md#surface-hopping)
* [`Failed to converge.`](https://reksstudio.github.io/learn/diagnose/index.md#diag-maxiter)
* [`Ghost states`](https://reksstudio.github.io/learn/diagnose/index.md#diag-ghost-states)
* [`Independent states`](https://reksstudio.github.io/learn/diagnose/index.md#diag-ghost-states)
* [`Optimisation converged`](https://reksstudio.github.io/learn/branch/dynamics/index.md#check-optimization)
* [`Pairing scheme 0`](https://reksstudio.github.io/learn/diagnose/index.md#diag-one-pair-closed)
* [`REKS active space [N=…, M=…] is not installed. Installed catalogs: …`](https://reksstudio.github.io/learn/diagnose/index.md#diag-catalog)
* [`SCFConvergenceError`](https://reksstudio.github.io/learn/diagnose/index.md#diag-maxiter)

## Psivar {#find-psivar}

* [`CURRENT DIPOLE`](https://reksstudio.github.io/learn/reference/properties/index.md#relaxed-properties)
* `CURRENT ENERGY` [SA-REKS ensemble energy and configuration energies](https://reksstudio.github.io/learn/reference/properties/index.md#sa-energy)[Nuclear gradients of SSR states](https://reksstudio.github.io/learn/reference/properties/index.md#state-gradient)
* `CURRENT GRADIENT` [Nuclear gradients of SSR states](https://reksstudio.github.io/learn/reference/properties/index.md#state-gradient)[Nuclear gradient of the SA-REKS ensemble](https://reksstudio.github.io/learn/reference/properties/index.md#sa-gradient)
* [`CURRENT REFERENCE ENERGY`](https://reksstudio.github.io/learn/reference/properties/index.md#sa-energy)
* [`DFT XC ENERGY`](https://reksstudio.github.io/learn/reference/properties/index.md#sa-energy)
* [`NUCLEAR REPULSION ENERGY`](https://reksstudio.github.io/learn/reference/properties/index.md#sa-energy)
* [`ONE-ELECTRON ENERGY`](https://reksstudio.github.io/learn/reference/properties/index.md#sa-energy)
* [`REKS <L>_FON`](https://reksstudio.github.io/learn/reference/properties/index.md#sa-fons)
* [`REKS <L>_FON K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#si-fons)
* [`REKS <L>_FON META`](https://reksstudio.github.io/learn/reference/properties/index.md#sa-fons)
* [`REKS <L>_FON META K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#si-fons)
* `REKS <L>_ROOT SIGNS` [Fractional occupation numbers of the SA-REKS ensemble](https://reksstudio.github.io/learn/reference/properties/index.md#sa-fons)[Unit](https://reksstudio.github.io/learn/concepts/index.md#unit)
* `REKS <L>_ROOT SIGNS K=<e>` [FONs of the SI-only geminals](https://reksstudio.github.io/learn/reference/properties/index.md#si-fons)[Unit](https://reksstudio.github.io/learn/concepts/index.md#unit)
* [`REKS C PATH B K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#si-orbitals)
* [`REKS DYSON ORBITALS AO`](https://reksstudio.github.io/learn/reference/properties/index.md#ekt-ensemble)
* [`REKS DYSON ORBITALS MO`](https://reksstudio.github.io/learn/reference/properties/index.md#ekt-ensemble)
* [`REKS EKT IONIZATION ENERGIES`](https://reksstudio.github.io/learn/reference/properties/index.md#ekt-ensemble)
* [`REKS EKT NATURAL OCCUPATIONS`](https://reksstudio.github.io/learn/reference/properties/index.md#ekt-ensemble)
* [`REKS EKT POLE STRENGTHS`](https://reksstudio.github.io/learn/reference/properties/index.md#ekt-ensemble)
* [`REKS FON`](https://reksstudio.github.io/learn/reference/properties/index.md#sa-fons)
* [`REKS FON K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#si-fons)
* [`REKS FON META`](https://reksstudio.github.io/learn/reference/properties/index.md#sa-fons)
* [`REKS FON META K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#si-fons)
* [`REKS G`](https://reksstudio.github.io/learn/reference/properties/index.md#sa-fons)
* [`REKS GATE RMS`](https://reksstudio.github.io/learn/reference/properties/index.md#convergence-quality)
* [`REKS GORB FRO`](https://reksstudio.github.io/learn/reference/properties/index.md#convergence-quality)
* [`REKS HEISENBERG J`](https://reksstudio.github.io/learn/reference/properties/index.md#spin-state-energetics)
* [`REKS HEISENBERG J SPINS`](https://reksstudio.github.io/learn/reference/properties/index.md#spin-state-energetics)
* [`REKS N ACTIVE ELECTRONS`](https://reksstudio.github.io/learn/reference/properties/index.md#sa-fons)
* [`REKS N ACTIVE ORBITALS`](https://reksstudio.github.io/learn/reference/properties/index.md#sa-fons)
* [`REKS N SECTORS`](https://reksstudio.github.io/learn/reference/properties/index.md#sa-fons)
* [`REKS NCORE K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#si-orbitals)
* [`REKS QUALITY BASIN FIRES`](https://reksstudio.github.io/learn/reference/properties/index.md#convergence-quality)
* [`REKS QUALITY GORB FRO`](https://reksstudio.github.io/learn/reference/properties/index.md#convergence-quality)
* [`REKS QUALITY GORB RMS`](https://reksstudio.github.io/learn/reference/properties/index.md#convergence-quality)
* [`REKS QUALITY GRAZING`](https://reksstudio.github.io/learn/reference/properties/index.md#convergence-quality)
* [`REKS QUALITY LANDINGS`](https://reksstudio.github.io/learn/reference/properties/index.md#convergence-quality)
* [`REKS QUALITY MAX RUNG`](https://reksstudio.github.io/learn/reference/properties/index.md#convergence-quality)
* [`REKS QUALITY VERDICT TRIPS`](https://reksstudio.github.io/learn/reference/properties/index.md#convergence-quality)
* `REKS ROOT SIGNS` [Fractional occupation numbers of the SA-REKS ensemble](https://reksstudio.github.io/learn/reference/properties/index.md#sa-fons)[Unit](https://reksstudio.github.io/learn/concepts/index.md#unit)
* `REKS ROOT SIGNS K=<e>` [FONs of the SI-only geminals](https://reksstudio.github.io/learn/reference/properties/index.md#si-fons)[Unit](https://reksstudio.github.io/learn/concepts/index.md#unit)
* [`REKS SA_WEIGHTS`](https://reksstudio.github.io/learn/reference/properties/index.md#sa-energy)
* [`REKS SECTOR <s> …`](https://reksstudio.github.io/learn/reference/properties/index.md#si-fons)
* [`REKS SECTOR <s> EKT ...`](https://reksstudio.github.io/learn/reference/properties/index.md#ekt-ensemble)
* [`REKS TARGET STATE ENERGY`](https://reksstudio.github.io/learn/reference/properties/index.md#state-gradient)
* [`REKS W_PPS`](https://reksstudio.github.io/learn/reference/properties/index.md#sa-energy)
* [`SCF ITERATIONS`](https://reksstudio.github.io/learn/reference/properties/index.md#convergence-quality)
* [`SCF TOTAL ENERGY`](https://reksstudio.github.io/learn/reference/properties/index.md#sa-energy)
* `SCF TOTAL GRADIENT` [Nuclear gradients of SSR states](https://reksstudio.github.io/learn/reference/properties/index.md#state-gradient)[Nuclear gradient of the SA-REKS ensemble](https://reksstudio.github.io/learn/reference/properties/index.md#sa-gradient)
* [`SSR 1-RDM ACTIVE STATE=<k> K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#active-rdm)
* [`SSR 1-RDM ADIABATIC K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#active-rdm)
* [`SSR 1-RDM DIABATIC SPARSE K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#active-rdm)
* [`SSR ACTIVE ORBITALS K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#ssr-energies)
* [`SSR CASSETTE 2S K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#ssr-energies)
* [`SSR CASSETTE SECTOR K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#ssr-energies)
* [`SSR CI G <I> <J> CASSETTE <e>`](https://reksstudio.github.io/learn/reference/properties/index.md#ci-topography)
* [`SSR CI H <I> <J> CASSETTE <e>`](https://reksstudio.github.io/learn/reference/properties/index.md#ci-topography)
* [`SSR CI TOPOGRAPHY <I> <J> CASSETTE <e>`](https://reksstudio.github.io/learn/reference/properties/index.md#ci-topography)
* [`SSR COEFFICIENTS K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#ssr-composition)
* [`SSR CT FRAGMENT DESCRIPTORS K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#fragment-ct)
* [`SSR CT FRAGMENT HOLE POPULATIONS K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#fragment-ct)
* [`SSR CT FRAGMENT PARTICLE POPULATIONS K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#fragment-ct)
* [`SSR CT OMEGA ATOMS K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#exciton)
* [`SSR DIFFERENCE DENSITY EIGENVALUES K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#exciton)
* [`SSR DIFFERENCE DIPOLES K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#permanent-dipole)
* [`SSR DYSON ORBITALS AO ROOT <r> CASSETTE <e>`](https://reksstudio.github.io/learn/reference/properties/index.md#ekt-states)
* [`SSR DYSON ORBITALS MO ROOT <r> CASSETTE <e>`](https://reksstudio.github.io/learn/reference/properties/index.md#ekt-states)
* [`SSR EKT IONIZATION ENERGIES ROOT <r> CASSETTE <e>`](https://reksstudio.github.io/learn/reference/properties/index.md#ekt-states)
* [`SSR EKT NATURAL OCCUPATIONS ROOT <r> CASSETTE <e>`](https://reksstudio.github.io/learn/reference/properties/index.md#ekt-states)
* [`SSR EKT POLE STRENGTHS ROOT <r> CASSETTE <e>`](https://reksstudio.github.io/learn/reference/properties/index.md#ekt-states)
* [`SSR ENERGIES K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#ssr-energies)
* [`SSR EXCITON DESCRIPTORS K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#exciton)
* [`SSR EXCITON HOLE POPULATIONS K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#exciton)
* [`SSR EXCITON PARTICLE POPULATIONS K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#exciton)
* [`SSR FCD LOWDIN COUPLINGS <F> <G> K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#fragment-couplings)
* [`SSR FCD MULLIKEN COUPLINGS <F> <G> K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#fragment-couplings)
* [`SSR FED COUPLINGS <F> <G> K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#fragment-couplings)
* [`SSR FSD COUPLINGS <F> <G> K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#fragment-couplings)
* [`SSR HAMILTONIAN K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#si-matrices)
* [`SSR LOWDIN CHARGES K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#atomic-charges)
* [`SSR LOWDIN SPINS K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#atomic-spins)
* [`SSR MAGNETIC TRANSITION DIPOLES K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#transition-magnetic)
* [`SSR MAYER INDICES K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#bond-indices)
* [`SSR MULLIKEN CHARGES K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#atomic-charges)
* [`SSR MULLIKEN SPINS K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#atomic-spins)
* [`SSR MULTIPOLES L=<l> K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#multipoles)
* [`SSR NAC <I> <J> CASSETTE <e>`](https://reksstudio.github.io/learn/reference/properties/index.md#nac)
* [`SSR NAC MODEL <I> <J> CASSETTE <e>`](https://reksstudio.github.io/learn/reference/properties/index.md#nac)
* [`SSR NAC RESIDUAL <I> <J> CASSETTE <e>`](https://reksstudio.github.io/learn/reference/properties/index.md#nac)
* [`SSR NATURAL OCCUPATIONS K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#natural-orbitals)
* [`SSR NATURAL ORBITALS ACTIVE STATE=<k> K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#natural-orbitals)
* [`SSR NATURAL ORBITALS AO STATE=<k> K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#natural-orbitals)
* [`SSR NDO AO ROOT <I> -> ROOT <J> K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#exciton)
* [`SSR NTO HOLES AO ROOT <I> -> ROOT <J> K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#nto)
* [`SSR NTO PARTICLES AO ROOT <I> -> ROOT <J> K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#nto)
* [`SSR NTO WEIGHTS K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#nto)
* [`SSR OSCILLATOR STRENGTHS K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#transition-dipole)
* [`SSR OSCILLATOR STRENGTHS VELOCITY K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#transition-velocity)
* [`SSR OVERLAP SPARSE K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#si-matrices)
* [`SSR PERMANENT DIPOLES K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#permanent-dipole)
* [`SSR QUADRUPOLES K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#quadrupole)
* [`SSR RADICAL INDICES K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#radical-character)
* [`SSR ROOT <r> RELAXED DENSITY CASSETTE <e>`](https://reksstudio.github.io/learn/reference/properties/index.md#relaxed-properties)
* [`SSR ROOT <r> RELAXED DIPOLE CASSETTE <e>`](https://reksstudio.github.io/learn/reference/properties/index.md#relaxed-properties)
* [`SSR ROOT <r> RELAXED LOWDIN CHARGES CASSETTE <e>`](https://reksstudio.github.io/learn/reference/properties/index.md#relaxed-properties)
* [`SSR ROOT <r> RELAXED MAYER INDICES CASSETTE <e>`](https://reksstudio.github.io/learn/reference/properties/index.md#relaxed-bond-indices)
* [`SSR ROOT <r> RELAXED MULLIKEN CHARGES CASSETTE <e>`](https://reksstudio.github.io/learn/reference/properties/index.md#relaxed-properties)
* [`SSR ROOT <r> RELAXED QUADRUPOLES CASSETTE <e>`](https://reksstudio.github.io/learn/reference/properties/index.md#relaxed-properties)
* [`SSR ROOT <r> RELAXED WIBERG LOWDIN INDICES CASSETTE <e>`](https://reksstudio.github.io/learn/reference/properties/index.md#relaxed-bond-indices)
* `SSR ROOT <r>/<I>/<J> GRADIENT CASSETTE <e>` [Nuclear gradients of SSR states](https://reksstudio.github.io/learn/reference/properties/index.md#state-gradient)[Nonadiabatic coupling vectors](https://reksstudio.github.io/learn/reference/properties/index.md#nac)
* [`SSR ROTATORY STRENGTHS K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#transition-magnetic)
* [`SSR SI LIST`](https://reksstudio.github.io/learn/reference/properties/index.md#ssr-energies)
* [`SSR SPIN 1-RDM ACTIVE STATE=<k> K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#active-rdm)
* [`SSR STORED STATES K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#ssr-energies)
* [`SSR TRACELESS QUADRUPOLES K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#quadrupole)
* [`SSR TRANSITION DIPOLES K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#transition-dipole)
* [`SSR TRANSITION LOWDIN CHARGES K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#transition-charges)
* [`SSR TRANSITION MULLIKEN CHARGES K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#transition-charges)
* [`SSR TRANSITION MULTIPOLES L=<l> K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#multipoles)
* [`SSR TRANSITION QUADRUPOLES K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#transition-second-moments)
* [`SSR UNPAIRED ATOMIC POPULATIONS K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#radical-character)
* [`SSR VELOCITY TRANSITION DIPOLES K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#transition-velocity)
* [`SSR WIBERG LOWDIN INDICES K=<e>`](https://reksstudio.github.io/learn/reference/properties/index.md#bond-indices)
* [`TWO-ELECTRON ENERGY`](https://reksstudio.github.io/learn/reference/properties/index.md#sa-energy)

## Property {#find-property}

* [Active one-particle density matrices](https://reksstudio.github.io/learn/reference/properties/index.md#active-rdm)
* [Atomic charges of the states (unrelaxed)](https://reksstudio.github.io/learn/reference/properties/index.md#atomic-charges)
* [Atomic spin populations of the states (2S > 0)](https://reksstudio.github.io/learn/reference/properties/index.md#atomic-spins)
* [Bond indices of the relaxed density](https://reksstudio.github.io/learn/reference/properties/index.md#relaxed-bond-indices)
* [Bond indices of the states (unrelaxed)](https://reksstudio.github.io/learn/reference/properties/index.md#bond-indices)
* [Cartesian multipole moments of order l ≥ 3](https://reksstudio.github.io/learn/reference/properties/index.md#multipoles)
* [Conical-intersection topography](https://reksstudio.github.io/learn/reference/properties/index.md#ci-topography)
* [EKT ionization energies of the SA-REKS ensemble](https://reksstudio.github.io/learn/reference/properties/index.md#ekt-ensemble)
* [EKT ionization energies, pole strengths and Dyson orbitals of SI states](https://reksstudio.github.io/learn/reference/properties/index.md#ekt-states)
* [Exciton descriptors, hole and electron populations, natural difference orbitals](https://reksstudio.github.io/learn/reference/properties/index.md#exciton)
* [FONs of the SI-only geminals](https://reksstudio.github.io/learn/reference/properties/index.md#si-fons)
* [Fractional occupation numbers of the SA-REKS ensemble](https://reksstudio.github.io/learn/reference/properties/index.md#sa-fons)
* [Fragment charge-transfer descriptors](https://reksstudio.github.io/learn/reference/properties/index.md#fragment-ct)
* [Fragment couplings (FCD, FED, FSD)](https://reksstudio.github.io/learn/reference/properties/index.md#fragment-couplings)
* [GVB-DIIS convergence quality](https://reksstudio.github.io/learn/reference/properties/index.md#convergence-quality)
* [Magnetic transition moments and rotatory strengths](https://reksstudio.github.io/learn/reference/properties/index.md#transition-magnetic)
* [Natural orbitals and occupations of the active space](https://reksstudio.github.io/learn/reference/properties/index.md#natural-orbitals)
* [Natural transition orbitals](https://reksstudio.github.io/learn/reference/properties/index.md#nto)
* [Nonadiabatic coupling vectors](https://reksstudio.github.io/learn/reference/properties/index.md#nac)
* [Nuclear gradient of the SA-REKS ensemble](https://reksstudio.github.io/learn/reference/properties/index.md#sa-gradient)
* [Nuclear gradients of SSR states](https://reksstudio.github.io/learn/reference/properties/index.md#state-gradient)
* [Orbitals of the SI step](https://reksstudio.github.io/learn/reference/properties/index.md#si-orbitals)
* [Permanent and difference dipole moments (unrelaxed)](https://reksstudio.github.io/learn/reference/properties/index.md#permanent-dipole)
* [Quadrupole moments of the states (unrelaxed)](https://reksstudio.github.io/learn/reference/properties/index.md#quadrupole)
* [Radical character](https://reksstudio.github.io/learn/reference/properties/index.md#radical-character)
* [Relaxed dipole, quadrupole and atomic charges](https://reksstudio.github.io/learn/reference/properties/index.md#relaxed-properties)
* [SA-REKS ensemble energy and configuration energies](https://reksstudio.github.io/learn/reference/properties/index.md#sa-energy)
* [SI Davidson solver](https://reksstudio.github.io/learn/reference/properties/index.md#si-davidson)
* [SI Hamiltonian and overlap](https://reksstudio.github.io/learn/reference/properties/index.md#si-matrices)
* [Spin-state gaps and Heisenberg J](https://reksstudio.github.io/learn/reference/properties/index.md#spin-state-energetics)
* [SSR eigenvectors and Chirgwin–Coulson weights](https://reksstudio.github.io/learn/reference/properties/index.md#ssr-composition)
* [SSR state energies](https://reksstudio.github.io/learn/reference/properties/index.md#ssr-energies)
* [Transition charges](https://reksstudio.github.io/learn/reference/properties/index.md#transition-charges)
* [Transition dipole moments and length-form oscillator strengths](https://reksstudio.github.io/learn/reference/properties/index.md#transition-dipole)
* [Transition second moments](https://reksstudio.github.io/learn/reference/properties/index.md#transition-second-moments)
* [Velocity-form transition moments and oscillator strengths](https://reksstudio.github.io/learn/reference/properties/index.md#transition-velocity)

## Error {#find-error}

* `at least one geminal unit (K or hK) is required; got none`
* `at most one doublet unit (dK or hdK, d1 = the SOMO); got`
* [`but its SI cassette has dimension`](https://reksstudio.github.io/learn/reference/index.md#si_reks_store_states)
* `d1' is the SOMO, which needs odd N; got N=`
* `DFT_GRAC_SHIFT is not available with REKS: the asymptotic correction enters no microstate XC potential`
* `Do not set the multiplicity to 2S+1; keep the canonical value and pick spin manifolds via SA_REKS_2SPIN / SI_REKS_2SPIN` [SA_REKS_2SPIN](https://reksstudio.github.io/learn/reference/index.md#sa_reks_2spin)[SI_REKS_2SPIN](https://reksstudio.github.io/learn/reference/index.md#si_reks_2spin)
* `does not name a state of a`
* [`each config at most once per block`](https://reksstudio.github.io/learn/reference/index.md#sa_reks_configs)
* [`each value is a state count, 0 = none, -1 = all`](https://reksstudio.github.io/learn/reference/index.md#si_reks_store_states)
* [`electrons but the active space holds N=`](https://reksstudio.github.io/learn/reference/index.md#sa_reks_extra)
* `element(s); a state pair is [I, J`
* `empty range`
* `entries are 2S >= 0; got`
* `entries must be pairwise distinct; 2S=`
* `FRAC_START is not available with REKS: fractional occupations are the ensemble's own FONs`
* [`give the number of states to print, 0 = none, -1 = all`](https://reksstudio.github.io/learn/reference/index.md#si_reks_print_states)
* [`GUESS_ACTIVE_WINDOW bad token`](https://reksstudio.github.io/learn/reference/run-control/index.md#guess_active_window)
* [`GUESS_ACTIVE_WINDOW names MO`](https://reksstudio.github.io/learn/reference/run-control/index.md#guess_active_window)
* [`GUESS_ACTIVE_WINDOW reorders the orbitals taken from the READ guess and needs GUESS READ; this REKS run guesses with`](https://reksstudio.github.io/learn/reference/run-control/index.md#guess_active_window)
* [`GUESS_ACTIVE_WINDOW: active columns reach`](https://reksstudio.github.io/learn/reference/run-control/index.md#guess_active_window)
* [`is neither a list of [I, J] state pairs nor ALL`](https://reksstudio.github.io/learn/reference/index.md#si_reks_nac)
* `is neither a state index nor a state label`
* `is nested too deeply (depth`
* [`is not a list; SI_REKS_GRAD lists the roots of each SI cassette, [[k`](https://reksstudio.github.io/learn/reference/index.md#si_reks_grad)
* [`is not a list; SI_REKS_PROPERTY_FOR lists the states of each SI cassette, [["S1`](https://reksstudio.github.io/learn/reference/index.md#si_reks_property_for)
* [`is not allowed in an SA block, whose weights follow the typed order; list the configs the block keeps instead`](https://reksstudio.github.io/learn/reference/index.md#sa_reks_configs)
* `is not an [I, J] state pair`
* [`is not an integer width; a unit is a token K, hK, dK or hdK`](https://reksstudio.github.io/learn/reference/index.md#reks_geminal_widths)
* `is not available with REKS: no per-microstate VV10 energy or potential; choose a functional without the -V/NL term`
* `is not available with REKS: the reaction-field potential enters no microstate Fock and its energy would read the aufbau density`
* [`is not installed. Installed catalogs`](https://reksstudio.github.io/learn/diagnose/index.md#diag-catalog)
* `is not K, hK, dK or hdK (K an orbital count`
* `is not supported by psi4: the density Laplacian is not computed; choose a functional without it`
* `is odd, so the closed core cannot be doubly occupied. Check N in 'reks`
* [`it must be positive (relative cutoff on the SI overlap eigenvalues, default 1e-10`](https://reksstudio.github.io/learn/reference/index.md#si_reks_overlap_cutoff)
* [`it must be positive (residual norm in Eh, default 1e-12`](https://reksstudio.github.io/learn/reference/index.md#si_reks_davidson_r_convergence)
* `K and hK hold 2 and 2K-2, dK and hdK 1 and 2K-1`
* `labels (one per SI group), which requires the 3-level SI_REKS_CONFIGS form [[[...]], ...] (one group of cassettes per label); got a 2-level list of cassettes` [SI_REKS_2SPIN](https://reksstudio.github.io/learn/reference/index.md#si_reks_2spin)[SI_REKS_CONFIGS](https://reksstudio.github.io/learn/reference/index.md#si_reks_configs)
* `labels but SA_REKS_CONFIGS is absent (one synthesized default block); only sa_reks_2spin [0] takes the default SA pool` [SA_REKS_2SPIN](https://reksstudio.github.io/learn/reference/index.md#sa_reks_2spin)[SA_REKS_CONFIGS](https://reksstudio.github.io/learn/reference/index.md#sa_reks_configs)
* `labels but SI_REKS_CONFIGS is absent (one default cassette); a single label [x] puts the default SI cassette on manifold x` [SI_REKS_2SPIN](https://reksstudio.github.io/learn/reference/index.md#si_reks_2spin)[SI_REKS_CONFIGS](https://reksstudio.github.io/learn/reference/index.md#si_reks_configs)
* `mixed nesting depth: element`
* `molecular orbitals available. Enlarge the basis or shrink the active space`
* `MOM_START is not available with REKS: the ensemble has no single-determinant occupation to follow`
* `no analytic gradient catalog is registered for this REKS variant; the CP-REKS response it needs is unavailable` [SI_REKS_NAC](https://reksstudio.github.io/learn/reference/index.md#si_reks_nac)[SI_REKS_PROPERTY_FOR](https://reksstudio.github.io/learn/reference/index.md#si_reks_property_for)
* [`occupation entries [alpha(M)|beta(M)] for the M=`](https://reksstudio.github.io/learn/reference/index.md#sa_reks_extra)
* [`occupations must be 0 or 1`](https://reksstudio.github.io/learn/reference/index.md#sa_reks_extra)
* `or type the SA blocks with their manifolds in SA_REKS_CONFIGS` [SA_REKS_2SPIN](https://reksstudio.github.io/learn/reference/index.md#sa_reks_2spin)[SA_REKS_CONFIGS](https://reksstudio.github.io/learn/reference/index.md#sa_reks_configs)[SI_REKS_2SPIN](https://reksstudio.github.io/learn/reference/index.md#si_reks_2spin)
* [`orbitals but the active space holds`](https://reksstudio.github.io/learn/reference/run-control/index.md#guess_active_window)
* [`orbitals of the guess wavefunction`](https://reksstudio.github.io/learn/reference/run-control/index.md#guess_active_window)
* [`order list(s) for`](https://reksstudio.github.io/learn/reference/index.md#si_reks_grad)
* `reads only the .npy file written by wfn.to_file(); binary checkpoints are read by energy() alone`
* `REKS active space mismatch: active electrons N=`
* `REKS active space not specified: set the 'reks' option to [N, M`
* `REKS requires C1 symmetry, but the molecule has`
* [`REKS_FON_INTERP_DELTA must be >= 0`](https://reksstudio.github.io/learn/reference/run-control/index.md#reks_fon_interp_delta)
* [`REKS_FON_MICRO_BOUND_MARGIN must lie in (0, 1`](https://reksstudio.github.io/learn/reference/run-control/index.md#fon-micro)
* [`REKS_GVB_GATE_STREAK must be >= 1`](https://reksstudio.github.io/learn/reference/run-control/index.md#diis-monitors)
* [`REKS_REPORT_LEVEL must be`](https://reksstudio.github.io/learn/reference/output/index.md#reks_report_level)
* `REKS: the 'reks' option must have exactly 2 elements [N, M], got`
* `REKS: the spin element was removed; 'reks' is [N, M] (2 elements). Select spin manifolds with SA_REKS_2SPIN / SI_REKS_2SPIN (e.g. the triplet states on the default SA ensemble: si_reks_2spin [2` [SA_REKS_2SPIN](https://reksstudio.github.io/learn/reference/index.md#sa_reks_2spin)[SI_REKS_2SPIN](https://reksstudio.github.io/learn/reference/index.md#si_reks_2spin)
* `restart_file takes the path of a .npy orbital file written by wfn.to_file(), e.g. restart_file='orbitals.npy`
* [`s entry must be a list of SI cassettes ([[...], ...]); each cassette is itself a list of config indices or names`](https://reksstudio.github.io/learn/reference/index.md#si_reks_configs)
* `SA blocks. Ladder mode maps block i to the i-th available manifold` [SA_REKS_CONFIGS](https://reksstudio.github.io/learn/reference/index.md#sa_reks_configs)[SA_REKS_2SPIN](https://reksstudio.github.io/learn/reference/index.md#sa_reks_2spin)
* [`SA_REKS_CONFIGS: config index (local`](https://reksstudio.github.io/learn/reference/index.md#sa_reks_configs)
* `SA_REKS_WEIGHTS: expected` [SA_REKS_WEIGHTS](https://reksstudio.github.io/learn/reference/index.md#sa_reks_weights)[SA_REKS_CONFIGS](https://reksstudio.github.io/learn/reference/index.md#sa_reks_configs)[SA_REKS_EXTRA](https://reksstudio.github.io/learn/reference/index.md#sa_reks_extra)
* `set but empty; omit it or list one 2S value per block/group`
* [`SI cassette(s`](https://reksstudio.github.io/learn/reference/index.md#si_reks_nac)
* [`SI cassette(s); list exactly one per cassette`](https://reksstudio.github.io/learn/reference/index.md#si_reks_store_states)
* `SI groups. Ladder mode maps group i to the i-th available manifold` [SI_REKS_CONFIGS](https://reksstudio.github.io/learn/reference/index.md#si_reks_configs)[SI_REKS_2SPIN](https://reksstudio.github.io/learn/reference/index.md#si_reks_2spin)
* [`SI_REKS_ANALYSIS: unknown task`](https://reksstudio.github.io/learn/reference/index.md#si_reks_analysis)
* [`SI_REKS_CONFIGS: config index (local`](https://reksstudio.github.io/learn/reference/index.md#si_reks_configs)
* [`SI_REKS_CONFIGS: scalar elements are not a cassette form; use a list of cassettes [[...], ...] (2-level) or cassette groups [[[...]], ...] (3-level`](https://reksstudio.github.io/learn/reference/index.md#si_reks_configs)
* [`SI_REKS_FON_BOUND_MARGIN must lie in [0, 1`](https://reksstudio.github.io/learn/reference/run-control/index.md#fon-micro)
* [`SI_REKS_NAC: unknown entry`](https://reksstudio.github.io/learn/reference/index.md#si_reks_nac)
* [`SI_REKS_PROPERTY_FOR`](https://reksstudio.github.io/learn/reference/index.md#si_reks_property_for)
* [`SI_REKS_STORE_STATES: set but empty; omit it or list one value per SI cassette`](https://reksstudio.github.io/learn/reference/index.md#si_reks_store_states)
* [`SI_REKS_STORE_STATES: set but the run has no SI cassettes`](https://reksstudio.github.io/learn/reference/index.md#si_reks_store_states)
* `Specify only one of`
* `spin manifold (available 2S`
* `states count from`
* `the file was written with the other PUREAM setting. Use the PUREAM of the source calculation`
* [`the multipole order is >= 1`](https://reksstudio.github.io/learn/reference/index.md#si_reks_analysis)
* `The REKS SA ensemble is empty: SA_REKS_CONFIGS selected no configurations and SA_REKS_EXTRA supplied no microstates. The SA ensemble needs at least one` [SA_REKS_CONFIGS](https://reksstudio.github.io/learn/reference/index.md#sa_reks_configs)[SA_REKS_EXTRA](https://reksstudio.github.io/learn/reference/index.md#sa_reks_extra)
* `the unit widths sum to`
* `unit token`
* [`Use the keyword 'full', 'sps', 'single-scheme[:N]', 'mixed-scheme[:N]', a name pattern with '*' or '?', a config type`](https://reksstudio.github.io/learn/diagnose/index.md#diag-unknown-token)
* [`weights must be non-negative`](https://reksstudio.github.io/learn/reference/index.md#sa_reks_weights)
* [`which differs from 1.0 by more than 1e-8`](https://reksstudio.github.io/learn/reference/index.md#sa_reks_weights)
