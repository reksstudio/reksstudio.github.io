# REKS Studio — Ensemble DFT for strongly correlated systems

HTML: <https://reksstudio.github.io/v2/>

Psi4 bd0fb43ef, 2026-10-15: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

Ensemble DFT, generated not derived

# Strongly correlated chemistry, at DFT cost

REKS Studio automatically derives and compiles the working equations of ensemble density functional theory for any active space - turning a twenty-year manual bottleneck into a binary catalogue.

[Explore the method](https://reksstudio.github.io/v2/index.md#architecture) [Source ↗](https://github.com/ConstLike/psi4/tree/kk/reks.studio)

The bottleneck

## Two electrons, two orbitals - for twenty years

REKS and its extensions, SA-REKS and SSR, treat strong electron correlation by letting orbitals take fractional occupations across an ensemble of electronic configurations - an accurate, low-cost alternative to expensive wavefunction methods.

But every larger active space needs its own working equations, derived by hand from scratch. The number of configurations and orbital-pairing schemes grows combinatorially with active-space size, so the derivation quickly becomes unmanageable. In practice, that has confined the method to its smallest case: two electrons in two orbitals.

Configurations to derive by hand, schematic - not to scale.

Why it's fast

## One set of integrals, many electronic configurations

The expensive parts of any electronic structure calculation are the two-electron integrals and the DFT quadrature grid. A naive implementation recomputes both for every configuration in the ensemble - which is exactly what makes it unfeasible.

REKS Studio computes them once per calculation and reuses them across every microstate, assembling each configuration's Fock matrix by weighted addition rather than running an independent KS-DFT calculation for it. That reuse, not any single algorithmic trick, is what brings a fully multiconfigurational treatment down to a cost comparable to ordinary DFT.

Making that reuse work for an arbitrary active space still requires the right working equations for each case. Those are generated automatically by a symbolic-algebra engine rather than derived by hand - necessary groundwork, but the speed comes from what happens with the equations afterward.

### Integrals & grids

Computed once per calculation, regardless of how many configurations the active space produces.

→

### Shared across microstates

Every configuration in the ensemble draws on the same integrals and grid, never recomputing them.

→

### Weighted Fock assembly

Configuration energies combine by weighted addition instead of separate SCF calculations.

→

### Ensemble energy

Multiconfigurational accuracy at a cost that tracks ordinary Kohn–Sham DFT.

Validated at scale

## Active spaces up to ten electrons in ten orbitals

67

molecules from the QUEST benchmark set, checked against theoretical best estimates

10e,10o

largest active space computed — previously inaccessible to routine calculation

≈ KS-DFT

computational cost, by sharing integrals and grids across all microstates

H₂ · H₄ · H₆ · H₈

Sequential bond dissociation benchmarked directly against full configuration interaction.

C₂H₄ · N₂ · C₂H₂

Single, double, and triple bond breaking along full potential energy curves.

C₂ (carbon dimer)

Benchmarked against near-exact (SHCI) energies and experimental spectroscopic constants.

Zethrene series

Open-shell diradical character tracked across increasing active-space size.

Tetra\[3]trianguleno\[3]rhombene

A synthesized magnetic quantum material — see below.

Real material, real spectrum

## Reproducing the magnetic ladder of a synthesized quantum material

Tetra\[3]trianguleno\[3]rhombene is an open-shell nanographene whose magnetic energy levels have been mapped experimentally by scanning tunneling microscopy — but only partly explained by earlier calculations. Pushing the active space from four to ten electrons resolves the same magnetic ladder seen in the experiment, something smaller active spaces couldn't capture.

![Computed S0, T1, Q1, and H1 state energies for active spaces (4,4) to (10,10)](https://reksstudio.github.io/v2/assets/BFN_energies.CnEe--ft.svg)

Computed ground (S0) and low-lying triplet, quintet, and heptet (T1, Q1, H1) state energies, in kcal/mol, for the active spaces (4,4), (6,6), (8,8) and (10,10) — the same widening that resolves the magnetic ladder against experiment.

Get started

## Build from source, then run any Psi4 input

REKS Studio is a development branch of Psi4, built from source: [build instructions](https://reksstudio.github.io/v2/docs/index.md#install). A complete input:

```text
#! SA-REKS(2,2) and SI-SA-REKS(2,2) of H2, BH&HLYP/cc-pVDZ, default SA and SI pools.

molecule h2 {
0 1
H 0.0 0.0 0.0
H 0.0 0.0 0.74
symmetry c1
}

set {
  basis      cc-pvdz
  reference  reks
  reks       [2, 2]
}

energy('bhhlyp')
```

[reks22_h2.dat and its result](https://reksstudio.github.io/v2/manual/index.md#worked-inputs)

Selected literature

## Key papers behind the REKS/SSR method

REKS Studio automates and scales a method built up over two decades, largely by Michael Filatov and collaborators. The papers below trace it from its restricted-ensemble formulation through the multi-pair extensions and analytic derivatives REKS Studio generalizes.

1999

Filatov, M.; Shaik, S. A spin-restricted ensemble-referenced Kohn–Sham method and its application to diradicaloid situations. *Chem. Phys. Lett.* **1999**, *304*, 429–437.

[doi.org/10.1016/S0009-2614(99)00336-X ↗](https://doi.org/10.1016/S0009-2614\(99\)00336-X)

2000

Filatov, M.; Shaik, S. Artificial symmetry breaking in radicals is avoided by the use of the Ensemble-Referenced Kohn–Sham (REKS) method. *Chem. Phys. Lett.* **2000**, *332*, 409–419.

[doi.org/10.1016/S0009-2614(00)01257-4 ↗](https://doi.org/10.1016/S0009-2614\(00\)01257-4)

2007

Moreira, I. de P. R.; Costa, R.; Filatov, M.; Illas, F. Restricted ensemble-referenced Kohn–Sham versus broken symmetry approaches in density functional theory: Magnetic coupling in Cu binuclear complexes. *J. Chem. Theory Comput.* **2007**, *3*, 764–774.

[doi.org/10.1021/ct7000057 ↗](https://doi.org/10.1021/ct7000057)

2013

Filatov, M. Assessment of density functional methods for obtaining geometries at conical intersections in organic molecules. *J. Chem. Theory Comput.* **2013**, *9*, 4526–4541.

[doi.org/10.1021/ct400598b ↗](https://doi.org/10.1021/ct400598b)

2015

Filatov, M. Spin-restricted ensemble-referenced Kohn–Sham method: basic principles and application to strongly correlated ground and excited states of molecules. *WIREs Comput. Mol. Sci.* **2015**, *5*, 146–167.

[doi.org/10.1002/wcms.1209 ↗](https://doi.org/10.1002/wcms.1209)

2016

Filatov, M. Ensemble DFT approach to excited states of strongly correlated molecular systems. In *Density-Functional Methods for Excited States*; Ferré, N.; Filatov, M.; Huix-Rotllant, M., Eds.; Top. Curr. Chem., Vol. 368; Springer International Publishing: Cham, 2016; pp 97–124.

[doi.org/10.1007/128_2015_630 ↗](https://doi.org/10.1007/128_2015_630)

2016

Filatov, M.; Martínez, T. J.; Kim, K. S. Using the GVB Ansatz to develop ensemble DFT method for describing multiple strongly correlated electron pairs. *Phys. Chem. Chem. Phys.* **2016**, *18*, 21040–21050.

[doi.org/10.1039/C6CP00236F ↗](https://doi.org/10.1039/C6CP00236F)

2016

Filatov, M.; Liu, F.; Kim, K. S.; Martínez, T. J. Self-consistent implementation of ensemble density functional theory method for multiple strongly correlated electron pairs. *J. Chem. Phys.* **2016**, *145*, 244104.

[doi.org/10.1063/1.4972174 ↗](https://doi.org/10.1063/1.4972174)

2017

Filatov, M.; Martínez, T. J.; Kim, K. S. Description of ground and excited electronic states by ensemble density functional method with extended active space. *J. Chem. Phys.* **2017**, *147*, 064104.

[doi.org/10.1063/1.4996873 ↗](https://doi.org/10.1063/1.4996873)

2017

Filatov, M.; Liu, F.; Martínez, T. J. Analytical derivatives of the individual state energies in ensemble density functional theory method. I. General formalism. *J. Chem. Phys.* **2017**, *147*, 034113.

[doi.org/10.1063/1.4994542 ↗](https://doi.org/10.1063/1.4994542)

2020

Filatov, M.; Lee, S.; Choi, C. H. Computation of molecular ionization energies using an ensemble density functional theory method. *J. Chem. Theory Comput.* **2020**, *16*, 4489–4504.

[doi.org/10.1021/acs.jctc.0c00218 ↗](https://doi.org/10.1021/acs.jctc.0c00218)

2020

Filatov, M.; Lee, S.; Nakata, H.; Choi, C. H. Computation of molecular electron affinities using an ensemble density functional theory method. *J. Phys. Chem. A* **2020**, *124*, 7795–7804.

[doi.org/10.1021/acs.jpca.0c06976 ↗](https://doi.org/10.1021/acs.jpca.0c06976)

2021

Liu, F.; Filatov, M.; Martínez, T. J. Analytical derivatives of the individual state energies in ensemble density functional theory. II. Implementation on graphical processing units (GPUs). *J. Chem. Phys.* **2021**, *154*, 104108.

[doi.org/10.1063/5.0041389 ↗](https://doi.org/10.1063/5.0041389)

2021

Filatov, M.; Lee, S.; Choi, C. H. Description of sudden polarization in the excited electronic states with an ensemble density functional theory method. *J. Chem. Theory Comput.* **2021**, *17*, 5123–5139.

[doi.org/10.1021/acs.jctc.1c00479 ↗](https://doi.org/10.1021/acs.jctc.1c00479)

2026

Komarov, K.; Filatov, M.; Min, S. K. Automated Symbolic Derivation Enables Scalable Ensemble DFT for Strongly Correlated Molecules and Materials. *ChemRxiv* **2026**.

[doi.org/10.26434/chemrxiv.15008475/v1 ↗](https://doi.org/10.26434/chemrxiv.15008475/v1)
