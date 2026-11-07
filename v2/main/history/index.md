# History — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/history/>

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# What REKS is

An intact bond holds two electrons in one orbital. As it breaks, they spread over two orbitals, one each. Ordinary DFT (RKS) keeps them in one and fails. REKS, a density functional method, follows the change: 2 and 0 become 1 and 1.

REKS: spin-restricted ensemble-referenced Kohn–Sham. SSR, the curve here, is its state-interaction form. Also for diradicals, excited states and their crossings.

[Manual: start](https://reksstudio.github.io/v2/manual/index.md) [Theory](https://reksstudio.github.io/v2/manual/concepts/index.md#concepts) [Install, free](https://reksstudio.github.io/v2/docs/index.md#install)

[The ROKS objection](#roks) · [Equations](#reach) · [86 papers](#papers) · [Results](https://reksstudio.github.io/v2/main/results/index.md) · [Cost](https://reksstudio.github.io/v2/main/cost/index.md)

H2 energy against H–H distance, 0.5 to 5 Å: ordinary DFT (RKS) rises to −0.8590 Eh at 5 Å, exact FCI and SSR(2,2) level off near −0.9997 and −0.9921 Eh. H2 dissociation: SSR(2,2) and RKS, BH\&HLYP; FCI; all aug-cc-pVTZ.

[H<sub>2</sub> dissociation: SSR(2,2) and RKS, BH\&HLYP; FCI; all aug-cc-pVTZ →](https://reksstudio.github.io/v2/main/results/dissociation/h2/index.md)

## From one determinant to REKS

1. 1928–30

   ### One determinant

   Hartree–Fock places each electron in the average field of the others. Restricted orbitals hold 0, 1 or 2 electrons, in one determinant.

   [Hartree 1928](https://doi.org/10.1017/S0305004100011919); [Slater 1929](https://doi.org/10.1103/PhysRev.34.1293); [Fock 1930](https://doi.org/10.1007/BF01340294)

2. 1964–65

   ### Density functional theory

   The ground-state energy follows from the electron density. Kohn–Sham DFT builds that density from one determinant; a functional adds exchange and correlation. Cheap, it became the everyday method.

   [Hohenberg and Kohn 1964](https://doi.org/10.1103/PhysRev.136.B864); [Kohn and Sham 1965](https://doi.org/10.1103/PhysRev.140.A1133)

3. ### Where one configuration fails

   Stretch a bond, twist a double bond or follow an excited molecule to a crossing, and two configurations matter alike. Ordinary DFT (RKS) has only one: H<sub>2</sub> at 5 Å lies 8.5 eV above its minimum, exact FCI 4.7 eV.

4. 1972–73

   ### Electron pairs

   Generalized valence bond theory (GVB) spreads each electron pair over two orbitals: a σ bond breaks correctly at about the cost of Hartree–Fock. With no functional, correlation outside the pairs is missing.

   [Hunt et al. 1972](https://doi.org/10.1063/1.1678308); [Goddard et al. 1973](https://doi.org/10.1021/ar50071a002)

5. 1977–98

   ### Sums of determinants

   The sum method, later ROKS: determinant energies from an ordinary functional are summed with the weights of a pure-spin state, some of them negative.

   [Ziegler et al. 1977](https://doi.org/10.1007/BF00551551); [Frank et al. 1998](https://doi.org/10.1063/1.475804); [Filatov and Shaik 1998](https://doi.org/10.1016/S0009-2614\(98\)00364-9)

6. 1982–98

   ### Ensembles

   For some molecules, such as C<sub>2</sub>, no single configuration reproduces the density in Kohn–Sham theory. A weighted average of several does: of densities and energies, not a superposition. An orbital then holds a fractional number of electrons on average.

   [Levy 1982](https://doi.org/10.1103/PhysRevA.26.1200); [Lieb 1983](https://doi.org/10.1002/qua.560240302); [Schipper et al. 1998](https://doi.org/10.1007/s002140050343)

7. 1999

   ### REKS

   Filatov and Shaik join the two. Density and energy are weighted sums over a few determinants, the ordinary functional acts on each, and orbitals and occupations are optimized together. The weights follow a two-configuration model, damped so that at occupations 2 and 0 ground-state REKS returns to Kohn–Sham DFT.

   $$
   \begin{aligned} E &= \sum_L C_L\, E[\rho_L^{\alpha}, \rho_L^{\beta}] \\ \rho &= \sum_L C_L\, \rho_L, \quad \sum_L C_L = 1 \end{aligned}
   $$

   [Filatov and Shaik 1999](https://doi.org/10.1016/S0009-2614\(99\)00336-X); [Filatov 2015](https://doi.org/10.1002/wcms.1209)

## The ROKS objection

> “Spin-restricted open shell formalisms (ROKS) should be avoided.”
>
> [Pople, Gill and Handy, 1995](https://doi.org/10.1002/qua.560560414)

Taken literally it rules out REKS, which keeps one orbital set, and REKS leaves that unanswered. Its measurable ground, negative spin density, defeats one determinant; several configurations meet it in part, inside the active space.

REKS is spin-restricted: one orbital set for both spins. The paper says Kohn–Sham theory of open shells “should be developed only in the spin-unrestricted formalism”. Its arguments concern a radical or triplet with more α (spin-up) than β (spin-down) electrons. Its test was the isotropic hyperfine constant of the CH<sub>3</sub> proton, which lies in the nodal plane of the unpaired orbital: one restricted determinant gives zero, while experiment, corrected to planar CH<sub>3</sub>, gives −25 G. The table repeats the test on NH, whose proton lies in the nodal planes of both open orbitals, and adds a carbon of m-xylylene on a Hückel node. The paper gives three grounds.

### α and β feel different potentials

Each determinant of the REKS energy has its own α and β potentials, and all act on one orbital set. That set is the restriction the paper rejects. Like ROKS, REKS minimizes the energy over one orbital set and builds no multiplicative Kohn–Sham potential. This ground stands, unanswered.

[Filatov and Shaik 1999](https://doi.org/10.1016/S0009-2614\(99\)00336-X); [Filatov and Shaik 2000](https://doi.org/10.1016/S0009-2614\(00\)01257-4)

### Spin density can go negative

One restricted determinant cannot show this. SSR can: after the ensemble step, state interaction mixes in configurations in which a closed pair opens and couples to the unpaired electrons, as first done for singlets. REKS Studio builds every state at M<sub>S</sub> = 0, where spin density vanishes. It scales with M<sub>S</sub>, so the table gives the M<sub>S</sub> = S value: an expectation value over configurations, not a Kohn–Sham spin density.

[Filatov et al. 2017](https://doi.org/10.1063/1.4996873)

### A determinant without contamination is wrong

The authors’ reason: the Kohn–Sham determinant is not the wave function, so contamination is allowed. REKS makes the opposite choice: every configuration is coupled to pure spin. Beyond the REKS(2,2) triplet its energy is a sum of determinant energies, some with negative weights. This ground stands as a difference of approach.

[Filatov 2015](https://doi.org/10.1002/wcms.1209); [Filatov and Shaik 1999](https://doi.org/10.1016/S0009-2614\(99\)00336-X)

| | NH, proton isotropic hyperfine constant, MHz | m-xylylene T<sub>1</sub>, spin on ring carbon C1, e |
| - | - | - |
| ROKS determinant | 0 | +0.008 |
| REKS(2,2) triplet | 0 | +0.011 |
| SSR(4,4) | −1 to −20 | −0.006 to −0.072 |
| SSR(6,6) | −36 | −0.086 |
| CASCI(6,6), same orbitals | — | −0.133 |
| UKS | −60 | −0.418 |
| FCI, cc-pVDZ | −64 | — |
| Experiment | −66 | — |

BH\&HLYP, M<sub>S</sub> = S, Psi4 a5ccb08fa. The REKS(2,2) triplet is the ROKS determinant in ensemble orbitals. SSR(M,M) has M electrons in M active orbitals, the orbitals whose occupation differs between configurations.

NH X <sup>3</sup>Σ<sup>−</sup>, cc-pVTZ. SSR(4,4): three choices of σ pair. SSR(6,6), all valence electrons active: −44 in cc-pVDZ, −23 in aug-cc-pVTZ, where the active orbitals change character. Orbitals optimized for the triplet alone give −46 to −48 at (4,4) and −37 at (6,6).

m-xylylene, 6-31G(d). Mulliken population; C1 is a Hückel node of both open orbitals. SSR(4,4): two choices of π pair. UKS includes σ polarization; its π part is −0.249.

NH experiment: [Engels and Peyerimhoff 1989](https://doi.org/10.1080/00268978900101301)

### Where it stands

* The objection holds in full for the REKS(2,2) triplet, which has the energy of one high-spin determinant.
* Spin reaches only active orbitals: a proton in the nodal plane of a π active space gets none at the nucleus. In NH, SSR(6,6) has all valence electrons active and gives 54% of the experimental value, UKS 90%.
* In 2002 REKS with BLYP put the open-shell singlet of α,3-didehydrotoluene 0.9 kcal/mol above the triplet and unrestricted BLYP 0.5 below it; experiment places it up to 5 kcal/mol below. The authors conclude that REKS fails here because it “cannot describe spin-polarization correctly”.
* REKS Studio runs even electron numbers only, so doublet radicals stay outside it; REKS(3,3) treated them in 2000.
* Strictly, negative weights are not allowed in ensemble Kohn–Sham; Filatov and Shaik keep the energy finite by building all determinants from one orbital set.

[Gräfenstein et al. 2002](https://doi.org/10.3390/i3040360); [Filatov and Shaik 2000](https://doi.org/10.1016/S0009-2614\(00\)01257-4); [Filatov and Shaik 1999](https://doi.org/10.1016/S0009-2614\(99\)00336-X)

## What grew from REKS

8. 2008–14

   ### Excited states

   Molecules in vision and molecular motors return from an excited state to the ground state at crossings between states, without emitting light. State-averaged REKS (SA-REKS) shares one orbital set among states; state interaction (SI-SA-REKS, from 2014 SSR) gives the crossings their conical shape.

   [Gross et al. 1988](https://doi.org/10.1103/PhysRevA.37.2805); [Kazaryan et al. 2008](https://doi.org/10.1021/jp8033837); [Huix-Rotllant et al. 2013](https://doi.org/10.1021/ct4003465); [Filatov 2013](https://doi.org/10.1021/ct400598b); [Nikiforov et al. 2014](https://doi.org/10.1063/1.4896372)

9. 2016

   ### Two pairs

   REKS(2,2) reads as one GVB pair in ensemble DFT. Perfect pairing extends it to two: (4,4), four electrons in four orbitals.

   [Filatov et al., Phys. Chem. Chem. Phys. 2016](https://doi.org/10.1039/C6CP00236F); [Filatov et al., J. Chem. Phys. 2016](https://doi.org/10.1063/1.4972174)

10. 2017–19

    ### Forces and dynamics

    Analytic gradients of excited states open nonadiabatic dynamics; tight binding (DFTB/SSR) reaches large molecules.

    [Filatov et al. 2017](https://doi.org/10.1063/1.4994542); [Filatov et al. 2018](https://doi.org/10.1021/acs.jctc.8b00217); [Lee et al. 2019](https://doi.org/10.1021/acs.jctc.9b00132)

11. 2026

    ### REKS Studio

    Working equations outgrow hand derivation; (4,4) was the largest reported. REKS Studio generates them and runs them in Psi4.

    [Komarov et al. 2026](https://doi.org/10.26434/chemrxiv.15008475/v1)

One equation: one nonzero Hamiltonian matrix element between configurations K and K′ of one spin sector (each pair once), an algebraic expression the engine writes.

| REKS | Equations, all spin sectors |
| - | - |
| (2,2) | 6 |
| (4,4) [largest REKS before this work](https://reksstudio.github.io/v2/main/history/index.md) | 234 |
| (6,6) [in your install](https://reksstudio.github.io/v2/docs/index.md#install) | 23 962 |
| (8,8) | 4 266 350 |
| (10,10) [applied, TTR](https://reksstudio.github.io/v2/main/results/large-molecules/index.md) | 1 007 587 692 |
| (12,12) | 293 819 094 700 |
| (14,14) [counted](https://reksstudio.github.io/v2/main/cost/index.md#count) | 103 564 870 568 976 |

The hand-derived (4,4) method spans 9 of the 18 singlet configurations of the full catalogue.

## 86 papers, 1999–2026

Working on a multireference problem, or want to connect a method to REKS? We welcome collaborations: [reks.studio1@gmail.com](mailto:reks.studio1@gmail.com).

Topic

\[x] All 86 \[ ] Method and software 30 \[ ] Diradicals and radicals 9 \[ ] Magnetic coupling 5 \[ ] Motors and switches 20 \[ ] Retinal and rhodopsins 12 \[ ] Photochemistry 14 \[ ] Charge transfer and excitons 6 \[ ] Machine learning 3

13 papers sit under two topics.

| Year | System | Studied | Method, code | Paper |
| - | - | - | - | - |
| 1999 | ethylene, H<sub>2</sub>, substituted trimethylene diradicals | REKS introduced: rotation, dissociation, singlet–triplet gaps | REKS(2,2) · CADPAC | [Filatov and Shaik, Chem. Phys. Lett. 304, 429](https://doi.org/10.1016/s0009-2614\(99\)00336-x) |
| 1999 | tetramethyleneethane | Singlet ground state, metastable triplet | REKS | [Filatov and Shaik, J. Phys. Chem. A 103, 8885](https://doi.org/10.1021/jp9920489) |
| 2000 | substituted cyclobutenes | Substituent effect on T1 → S0 decay | REKS | [Filatov et al., Chem. Phys. Lett. 316, 135](https://doi.org/10.1016/s0009-2614\(99\)00965-3) |
| 2000 | ethylene radical cation, methyl and hydroperoxo radicals, a triradical | REKS(3,3): doublets without symmetry breaking | REKS(3,3) · CADPAC | [Filatov and Shaik, Chem. Phys. Lett. 332, 409](https://doi.org/10.1016/s0009-2614\(00\)01257-4) |
| 2000 | model diradicaloids | Avoided crossings, bond breaking, diradical structure | REKS | [Filatov and Shaik, J. Phys. Chem. A 104, 6628](https://doi.org/10.1021/jp0002289) |
| 2000 | *o*-, *m*-, *p*-benzyne | Singlet–triplet gaps | REKS | [de Visser et al., Phys. Chem. Chem. Phys. 2, 5046](https://doi.org/10.1039/b006786p) |
| 2001 | *m*-benzyne, bicyclo\[3.1.0]hexatriene | Relative stability of the two isomers | REKS(2,2) | [Kraka et al., Chem. Phys. Lett. 348, 115](https://doi.org/10.1016/s0009-2614\(01\)01049-1) |
| 2001 | hepta-1,2,4-trien-6-yne | Myers–Saito and Schmittel cyclizations | REKS | [de Visser et al., Phys. Chem. Chem. Phys. 3, 1242](https://doi.org/10.1039/b009965l) |
| 2002 | methylene, α,3-didehydrotoluene, *p*-benzyne | Singlet and triplet energies of diradicals | REKS | [Gräfenstein et al., Int. J. Mol. Sci. 3, 360](https://doi.org/10.3390/i3040360) |
| 2002 | *m*- and *p*-benzyne, trimethylene, three more diradicals | Hybrid functionals and double counting | REKS(2,2) · COLOGNE | [Cremer et al., Int. J. Mol. Sci. 3, 604](https://doi.org/10.3390/i3060604) |
| 2003 | cubane diradicals, *p*-benzyne | Singlet–triplet gaps | REKS | [de Visser et al., Eur. J. Org. Chem. 2003, 4199](https://doi.org/10.1002/ejoc.200300201) |
| 2003 | ClOO and BrOO radicals | *X*–OO bonding, dissociation energies | REKS · COLOGNE | [Filatov and Cremer, Phys. Chem. Chem. Phys. 5, 2320](https://doi.org/10.1039/b301627g) |
| 2004 | organic diradicals, molecular magnets, solid models | Spin-constrained DFT of magnetic systems | REKS | [Illas et al., Phys. Rev. B 70, 132414](https://doi.org/10.1103/physrevb.70.132414) |
| 2006 | organic diradicals, molecular magnets, solid models | Magnetic coupling with imposed spin symmetry | REKS | [Illas et al., Theor. Chem. Acc. 116, 587](https://doi.org/10.1007/s00214-006-0104-6) |
| 2007 | Cu(II) binuclear complexes | Magnetic coupling, interpolation function *f* | REKS | [Moreira et al., J. Chem. Theory Comput. 3, 764](https://doi.org/10.1021/ct7000057) |
| 2008 | stretched H<sub>2</sub>, twisted ethylene, twisted hexatriene | SA-REKS introduced: excitation energies | SA-REKS | [Kazaryan et al., J. Phys. Chem. A 112, 12980](https://doi.org/10.1021/jp8033837) |
| 2009 | overcrowded-alkene motor (biphenanthrylidene) | S0 and S1 profiles along the C=C twist | SA-REKS | [Kazaryan and Filatov, J. Phys. Chem. A 113, 11630](https://doi.org/10.1021/jp902389j) |
| 2010 | fluorene motor | Excited-state lifetime, quantum efficiency | SA-REKS | [Kazaryan et al., J. Phys. Chem. A 114, 5058](https://doi.org/10.1021/jp100609m) |
| 2011 | bis-thiaxanthylidene switch | S0 and S1 surfaces, conical intersection | SA-REKS | [Filatov, ChemPhysChem 12, 3348](https://doi.org/10.1002/cphc.201100444) |
| 2011 | fluorene motor | Conical intersections; dynamics on OM2/MRCI | REKS | [Kazaryan et al., J. Chem. Theory Comput. 7, 2189](https://doi.org/10.1021/ct200199w) |
| 2011 | TTF–CA crystal, embedded cluster | Exchange integrals of the ionic phase | REKS | [Filatov, Phys. Chem. Chem. Phys. 13, 144](https://doi.org/10.1039/c0cp01310b) |
| 2011 | (EDO-TTF)<sub>2</sub>PF<sub>6</sub> crystal, embedded cluster | Exchange integrals of high- and low-temperature phases | REKS | [Filatov, Phys. Chem. Chem. Phys. 13, 12328](https://doi.org/10.1039/c0cp02450c) |
| 2012 | cyclopentadienyl cations C<sub>5</sub>*X*<sub>5</sub><sup>+</sup> | Jahn–Teller effects; the <sup>1</sup>E<sub>2</sub> state | REKS(2,2) · COLOGNE | [Zou et al., Int. J. Quantum Chem. 112, 3277](https://doi.org/10.1002/qua.24116) |
| 2013 | PSB3 | Interaction of charge-transfer and diradical states | REKS(2,2), SA-REKS, SSR · COLOGNE | [Huix-Rotllant et al., J. Chem. Theory Comput. 9, 3917](https://doi.org/10.1021/ct4003465) |
| 2013 | ethylene, methyliminium, styrene, stilbene, PSB3, anionic HBI | Functionals for geometries at conical intersections | REKS(2,2), SA-REKS, SSR · COLOGNE | [Filatov, J. Chem. Theory Comput. 9, 4526](https://doi.org/10.1021/ct400598b) |
| 2014 | cyanines, acenes | Lowest excitations | REKS(2,2), SSR · COLOGNE | [Filatov and Huix-Rotllant, J. Chem. Phys. 141, 024112](https://doi.org/10.1063/1.4887087) |
| 2014 | 12 intersections in organic molecules and chromophore models | Geometries and branching planes | SSR | [Nikiforov et al., J. Chem. Phys. 141, 124122](https://doi.org/10.1063/1.4896372) |
| 2014 | TTF–TCNQ, Ar–TCNE | Field-driven electron transfer in S0 and S1 | SSR · COLOGNE | [Filatov, J. Chem. Phys. 141, 124123](https://doi.org/10.1063/1.4896455) |
| 2014 | PSB3 | Conical vs linear crossing | SSR · COLOGNE | [Gozem et al., J. Chem. Theory Comput. 10, 3074](https://doi.org/10.1021/ct500154k) |
| 2014 | ethylene, styrene, PSB3, fluorene and Schiff-base motors | Heteroatom effect on motor intersections | REKS(2,2), SA-REKS, SSR · COLOGNE | [Filatov and Olivucci, J. Org. Chem. 79, 3587](https://doi.org/10.1021/jo5004289) |
| 2015 | H<sub>2</sub>, DMABN, bithiophene–perylenediimide | Larger ensembles: double excitation, LE/CT crossing | SA-REKS, SSR | [Filatov et al., J. Chem. Phys. 142, 184104](https://doi.org/10.1063/1.4919773) |
| 2015 | review | Principles and applications | REKS, SA-REKS, SSR | [Filatov, WIREs Comput. Mol. Sci. 5, 146](https://doi.org/10.1002/wcms.1209) |
| 2016 | GFP chromophore mimic (anionic *p*-HBDI-like switch) | Synthesis, transient spectroscopy, S0 and S1 surfaces | SSR · COLOGNE | [Paolino et al., J. Am. Chem. Soc. 138, 9807](https://doi.org/10.1021/jacs.5b10812) |
| 2016 | H<sub>4</sub>, ethylene, two tetraradicals | Self-consistent orbitals and occupations | REKS(4,4) · TeraChem | [Filatov et al., J. Chem. Phys. 145, 244104](https://doi.org/10.1063/1.4972174) |
| 2016 | NAIBP motors | S0 and S1 profiles of designed motors | REKS, SSR | [Nikiforov et al., J. Phys. Chem. Lett. 7, 105](https://doi.org/10.1021/acs.jpclett.5b02575) |
| 2016 | H<sub>4</sub>, ethylene, water | REKS(4,4) from GVB: bond dissociation | REKS(4,4) | [Filatov et al., Phys. Chem. Chem. Phys. 18, 21040](https://doi.org/10.1039/c6cp00236f) |
| 2016 | review | Excited states of strongly correlated molecules | REKS, SA-REKS, SSR | [Filatov, Top. Curr. Chem. 368, 97](https://doi.org/10.1007/128_2015_630) |
| 2016 | review | Conical intersections with density functional methods | SSR | [Huix-Rotllant et al., Top. Curr. Chem. 368, 445](https://doi.org/10.1007/128_2015_631) |
| 2017 | method | Analytic gradients of state energies | SA-REKS, SSR | [Filatov et al., J. Chem. Phys. 147, 034113](https://doi.org/10.1063/1.4994542) |
| 2017 | ethylene, acenes, ethylene and tetracene dimers | Bond cleavage, excitonic π-dimers | SSR(4,4) · TeraChem | [Filatov et al., J. Chem. Phys. 147, 064104](https://doi.org/10.1063/1.4996873) |
| 2017 | F-NAIBP motor | QTAIM of SSR densities along trajectories | SSR · COLOGNE | [Wang et al., J. Phys. Chem. A 121, 4778](https://doi.org/10.1021/acs.jpca.7b02347) |
| 2018 | fulvene | Bond-path framework sets of S0 and S1 | SSR · TeraChem | [Huang et al., Int. J. Quantum Chem. 118, e25768](https://doi.org/10.1002/qua.25768) |
| 2018 | PSB3 | Surface hopping on SSR: S1 lifetime | SSR | [Filatov et al., J. Chem. Theory Comput. 14, 4499](https://doi.org/10.1021/acs.jctc.8b00217) |
| 2018 | fulgide motor | Computational design of a fulgide motor | SSR | [Filatov et al., J. Phys. Chem. Lett. 9, 4995](https://doi.org/10.1021/acs.jpclett.8b02268) |
| 2019 | two-stroke motors | Isomerization dynamics, 200–300 fs | SSR | [Filatov et al., Chem. Commun. 55, 5247](https://doi.org/10.1039/c9cc01955c) |
| 2019 | 1,3-cyclohexadiene | QTAIM of the ring opening | SSR · TeraChem | [Tian et al., Int. J. Quantum Chem. 119, e25862](https://doi.org/10.1002/qua.25862) |
| 2019 | retinal in bacteriorhodopsin | Fluorescent I state | SSR | [Yu et al., J. Am. Chem. Soc. 141, 18193](https://doi.org/10.1021/jacs.9b08941) |
| 2019 | ethylene, styrene, PSB3, stilbene and others | SSR in tight binding: excitations, intersections | DFTB/SSR · DFTB+ | [Lee et al., J. Chem. Theory Comput. 15, 3021](https://doi.org/10.1021/acs.jctc.9b00132) |
| 2019 | retinal in channelrhodopsin 2 | Photoisomerization mechanism | SSR | [Liang et al., J. Phys. Chem. Lett. 10, 2862](https://doi.org/10.1021/acs.jpclett.9b00701) |
| 2019 | 1,3-cyclohexadiene | S1 decay, product branching | SSR | [Filatov et al., Mol. Phys. 117, 1128](https://doi.org/10.1080/00268976.2018.1519200) |
| 2019 | cyclopropanone | S1 decay, dissociation yield | SSR | [Filatov et al., Phys. Chem. Chem. Phys. 21, 2489](https://doi.org/10.1039/c8cp07104g) |
| 2020 | rotary motor | Stress tensor at S1/S0 intersections | SSR | [Wang et al., Int. J. Quantum Chem. 120, e26062](https://doi.org/10.1002/qua.26062) |
| 2020 | method | REKS and SSR in DFTB+ | DFTB/SSR(2,2) · DFTB+ | [Hourahine et al., J. Chem. Phys. 152, 124101](https://doi.org/10.1063/1.5143190) |
| 2020 | method | GFN-xTB with REKS in TeraChem | REKS-xTB · TeraChem | [Seritan et al., J. Chem. Phys. 152, 224110](https://doi.org/10.1063/5.0007615) |
| 2020 | ozone, dissociating bonds, conical intersections | Ionization energies, Dyson orbitals | EKT-SSR | [Filatov et al., J. Chem. Theory Comput. 16, 4489](https://doi.org/10.1021/acs.jctc.0c00218) |
| 2020 | closed-shell molecules, diradicals | Electron affinities, Dyson orbitals | EKT-SSR | [Filatov et al., J. Phys. Chem. A 124, 7795](https://doi.org/10.1021/acs.jpca.0c06976) |
| 2020 | 1,3-cyclohexadiene | Time-resolved photoelectron spectrum of the ring opening | EKT-SSR · GAMESS-US | [Filatov et al., Phys. Chem. Chem. Phys. 22, 17567](https://doi.org/10.1039/d0cp02963g) |
| 2021 | furan | Time-resolved photoelectron spectrum | SSR(2,2) · GAMESS-US | [Filatov et al., Int. J. Mol. Sci. 22, 4276](https://doi.org/10.3390/ijms22084276) |
| 2021 | retinal in channelrhodopsin 2, wild type and E123T | Slower photoisomerization in E123T | SSR(2,2) · TeraChem | [Liang et al., J. Am. Chem. Soc. 143, 5425](https://doi.org/10.1021/jacs.1c00058) |
| 2021 | PSB3 with up to 186 water molecules | GPU gradients and couplings | SSR(2,2) · TeraChem | [Liu et al., J. Chem. Phys. 154, 104108](https://doi.org/10.1063/5.0041389) |
| 2021 | PSB3 | Machine-learned diabatic Hamiltonian | SSR | [Ha et al., J. Chem. Theory Comput. 17, 694](https://doi.org/10.1021/acs.jctc.0c01261) |
| 2021 | ethylene, a diradical, a donor–acceptor dyad | SSR(3,2) gradients, sudden polarization | SSR(3,2) · GAMESS-US | [Filatov et al., J. Chem. Theory Comput. 17, 5123](https://doi.org/10.1021/acs.jctc.1c00479) |
| 2021 | rotary motor | PyUNIxMD dynamics package | DFTB/SSR · TeraChem, DFTB+ | [Lee et al., J. Comput. Chem. 42, 1755](https://doi.org/10.1002/jcc.26711) |
| 2021 | *s-trans*-butadiene | 1<sup>1</sup>B<sub>u</sub>/2<sup>1</sup>A<sub>g</sub> crossing along bond alternation | SSR(4,4) | [Park et al., J. Phys. Chem. Lett. 12, 9720](https://doi.org/10.1021/acs.jpclett.1c02707) |
| 2021 | method | REKS features of TeraChem | REKS, REKS(4,4), SA-REKS, SSR · TeraChem | [Seritan et al., WIREs Comput. Mol. Sci. 11, e1494](https://doi.org/10.1002/wcms.1494) |
| 2022 | review | Ensemble DFT and linear response | REKS | [Lee et al., Bull. Korean Chem. Soc. 43, 17](https://doi.org/10.1002/bkcs.12429) |
| 2022 | rotary motor | Onsite correction in DFTB/SSR | DFTB/SSR | [Lee and Min, J. Chem. Theory Comput. 18, 3391](https://doi.org/10.1021/acs.jctc.2c00037) |
| 2022 | MTDP motor | Two-stroke cycle, measured quantum efficiency 25 % | SSR · GAMESS-US | [Filatov et al., Nat. Commun. 13, 6433](https://doi.org/10.1038/s41467-022-33695-x) |
| 2023 | four phenylazoindole switches | Thermal inversion vs rotation | REKS | [Hegedüsová et al., Int. J. Quantum Chem. 123, e27120](https://doi.org/10.1002/qua.27120) |
| 2023 | anthracene, tetracene, anthracene crystal | Exciton couplings | DFTB/SSR(4,4) | [Kim et al., J. Chem. Phys. 158, 044106](https://doi.org/10.1063/5.0132361) |
| 2023 | method | GFN1-xTB with REKS | REKS-xTB · TeraChem | [Bannwarth and Martínez, J. Chem. Phys. 158, 074109](https://doi.org/10.1063/5.0132776) |
| 2023 | MTDP motor in solution | OpenMolcas–GAMESS-US/Tinker interface | SSR(2,2) · GAMESS-US | [Li Manni et al., J. Chem. Theory Comput. 19, 6933](https://doi.org/10.1021/acs.jctc.3c00182) |
| 2023 | PSB3, PSB4, bovine rhodopsin | Surface-hopping trajectories of retinal models and rhodopsin | SSR(2,2), SSR(3,2) · GAMESS-US | [Barneschi et al., J. Chem. Theory Comput. 19, 8189](https://doi.org/10.1021/acs.jctc.3c00879) |
| 2023 | cyclopropanone | Dynamics vs electronic-structure method | SSR(2,2) · TeraChem | [Janoš and Slavíček, J. Chem. Theory Comput. 19, 8273](https://doi.org/10.1021/acs.jctc.3c00908) |
| 2024 | MTDP and MMTDP motors in gas phase and methanol | Yield lowered by methanol hydrogen bonds | SSR · GAMESS-US | [Filatov et al., Commun. Phys. 7, 219](https://doi.org/10.1038/s42005-024-01716-4) |
| 2024 | PSB3 | Transition-dipole gradients, polaritonic dynamics | SSR | [Lee et al., J. Chem. Phys. 160, 154103](https://doi.org/10.1063/5.0202095) |
| 2024 | *o*-, *m*-, *p*-DAPA fluorophores | Stokes shifts, dark *m*-DAPA | SSR(3,2) · GAMESS-US | [Filatov et al., J. Comput. Chem. 45, 1033](https://doi.org/10.1002/jcc.27304) |
| 2025 | PSB3 | Phaseless coupling training | SSR(2,2) | [Moon et al., J. Chem. Theory Comput. 21, 1521](https://doi.org/10.1021/acs.jctc.4c01475) |
| 2025 | MTDP motor in methanol | Transient binding, synchronized ring inversion | SSR(2,2) · GAMESS-US | [Blanco-Gonzalez et al., J. Chem. Theory Comput. 21, 7503](https://doi.org/10.1021/acs.jctc.5c00639) |
| 2025 | method | Onsite correction and (4,4) in DFTB+ | DFTB/SSR(4,4) · DFTB+ | [Hourahine et al., J. Phys. Chem. A 129, 5373](https://doi.org/10.1021/acs.jpca.5c01146) |
| 2025 | fluorene motor in a cavity | Rotation slowed by cavity coupling | DFTB/SSR(2,2) · DFTB+ | [Lee et al., Nat. Commun. 16, 4554](https://doi.org/10.1038/s41467-025-59607-3) |
| 2026 | review | REKS with exact-factorization dynamics | REKS | [Kim et al., Bull. Korean Chem. Soc. 2026](https://doi.org/10.1002/bkcs.70222) |
| 2026 | method | Automated equations; active spaces to (10,10) | REKS, SSR · Psi4 | [Komarov et al., ChemRxiv 2026](https://doi.org/10.26434/chemrxiv.15008475/v1) |
| 2026 | azobenzene | TDDFT/SSR hybrid: isomerization yields | TDDFT/SSR | [Filatov Gulak et al., J. Chem. Theory Comput. 22, 4641](https://doi.org/10.1021/acs.jctc.6c00330) |
| 2026 | fluorinated motor 2-F | Simulated unidirectional rotation, quantum efficiency about 50 % | SSR · GAMESS-US | [Filatov Gulak et al., Nat. Commun. 17, 6008](https://doi.org/10.1038/s41467-026-72484-8) |
| 2026 | PSB3 | Equivariant potential trained on SSR data | SSR(2,2) | [Willow et al., npj Comput. Mater. 2026](https://doi.org/10.1038/s41524-026-02258-9) |

Version history of the code: [Changes](https://reksstudio.github.io/v2/docs/changes/index.md).
