# Results — REKS Studio

HTML: <https://reksstudio.github.io/main/results/>

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/llms.txt>. Every page: `https://reksstudio.github.io/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/inputs/<file>.txt`.

# Results

Ensemble DFT ([REKS](https://reksstudio.github.io/manual/concepts/index.md#ensemble-fons), [SSR states](https://reksstudio.github.io/manual/concepts/index.md#ssr-states)) for broken bonds, diradicals and excited states, checked four ways.

REKS: ensemble Kohn–Sham orbitals with fractional occupations. SSR (SI-SA-REKS): the adiabatic states built on these orbitals.

[Komarov et al., ChemRxiv 2026](https://doi.org/10.26434/chemrxiv.15008475/v1)

[(6,6) multireference excited states, 1260 basis functions, in less wall time than ORCA TDA and SF-TDA.](#run)

[Install, free](https://reksstudio.github.io/docs/index.md#install)

REKS(12,12) at 192 atoms; largest REKS before this work: (4,4)each dot opens its molecule or, where several share it, their list

REKS(12,12) at 192 atoms; largest REKS before this work: (4,4): atoms (log axis) against REKS active space; shaded rows: from the install, up to (6,6); each mark a link to its molecule or, where several share it, their list

1. [**1** Exact identities ≤ 10<sup>−10</sup> E<sub>h</sub> split of degenerate components 1.6·10<sup>−7</sup> E<sub>h</sub>; gradients vs FD ≤ 7.8·10<sup>−5</sup> E<sub>h</sub> a<sub>0</sub><sup>−1</sup> 9 checks](#exact)
2. [**2** Near-exact theory 140 FCI points S<sub>0</sub> of H<sub>2</sub>–H<sub>8</sub>: SSR (2,2)–(8,8) vs FCI in the SSR basis 46 SHCI points, C<sub>2</sub>, 4 states](#near-exact)
3. [**3** Benchmark (TBE) 0.21–0.23 eV MAE of vertical excitation energies, three functionals; per state the active space closest to the TBE, (2,2)–(8,8) 192 state pairs, 62 molecules](#tbe)
4. [**4** Experiment −0.015 to +0.025 Å Δ R<sub>e</sub>: C<sub>2</sub>H<sub>4</sub>, N<sub>2</sub>, C<sub>2</sub>. Δ T<sub>1</sub>, PAHs: −0.01 to +0.08 eV. Δ absorption, 4 bands assigned to H→L: +0.32 to +0.71 eV 3 gas-phase molecules, 7 derivatives of 5 PAHs](#experiment)

[Exactness](https://reksstudio.github.io/main/results/exactness/index.md)[Dissociation](https://reksstudio.github.io/main/results/dissociation/index.md)[QUEST](https://reksstudio.github.io/main/results/quest/index.md)[Large molecules](https://reksstudio.github.io/main/results/large-molecules/index.md)[Zethrenes](https://reksstudio.github.io/main/results/zethrenes/index.md)[C<sub>2</sub>H<sub>4</sub> photochemistry](https://reksstudio.github.io/main/results/c2h4-photochemistry/index.md)[Cost](#run)[62 molecules](#molecules-list)[Index](#index)

**1** Code vs exact results

## Identities and finite-difference checks {#exact-h}

Exact checks of the generated equations cover PPS up to (4,6) and SI couplings at (2,2).

### Energy identities / E<sub>h</sub>

Against exact limits, equalities and symmetry.

* [H<sub>2</sub>, GVB(2,2)–(2,4)GVB = CASSCF ≤ 9.9·10<sup>−12</sup>](https://reksstudio.github.io/main/results/exactness/index.md#identities)
* [BH, E(PPS1), (4,4)–(4,6)Hartree–Fock, δ → ∞: E(PPS1) = ⟨geminal product|H|geminal product⟩ ≤ 10<sup>−11</sup>](https://reksstudio.github.io/main/results/exactness/index.md#identities)
* [two different H<sub>2</sub>, 50 Å apart, (4,4)–(4,6)E(A + B) = E(A) + E(B) ≤ 9.3·10<sup>−11</sup>](https://reksstudio.github.io/main/results/exactness/index.md#identities)
* [BH, E(PPS1), REKS(2,3)Hartree–Fock, δ → ∞: one geminal = CASSCF(2,M) ≤ 10<sup>−10</sup>](https://reksstudio.github.io/main/results/exactness/index.md#identities)
* [BH, <sup>1</sup>Π and <sup>3</sup>Πthe two components of each stay degenerate 1.6·10<sup>−7</sup>](https://reksstudio.github.io/main/results/exactness/index.md#identities)
* [He–H–H, SI couplingsSI couplings = MO-integral evaluation agreement to 6 decimals](https://reksstudio.github.io/main/results/exactness/index.md#identities)

### Analytic gradients / E<sub>h</sub> a<sub>0</sub><sup>−1</sup>

Against five-point finite differences of the same energy.

* [C<sub>2</sub>H<sub>4</sub> 5.6·10<sup>−7</sup>](https://reksstudio.github.io/main/results/exactness/index.md#derivatives)
* [butadiene, (4,4)distorted in plane, 75°, 80° near-degenerate 8.0·10<sup>−6</sup> 3.2·10<sup>−6</sup> 7.1·10<sup>−5</sup>](https://reksstudio.github.io/main/results/exactness/index.md#derivatives)
* [BH, wide geminals, all rootsHartree–Fock, δ → ∞ 2.9·10<sup>−9</sup> to 7.8·10<sup>−5</sup>](https://reksstudio.github.io/main/results/exactness/index.md#derivatives)

[Exactness checks](https://reksstudio.github.io/main/results/exactness/index.md)[Manual: gradients and couplings against FD](https://reksstudio.github.io/manual/dynamics/index.md#grad-fd)

**2** Model vs near-exact theory

## Bond breaking {#near-exact-h}

SSR S<sub>0</sub> against FCI (H<sub>2</sub>–H<sub>8</sub>) and SHCI (C<sub>2</sub>). BH\&HLYP unless stated.

* [H<sub>2</sub>(2,2) · aug-cc-pVTZ H₂ S0 curve, SSR line, RKS dashed, FCI points; scale bar 50 mEh 46 FCI points](https://reksstudio.github.io/main/results/dissociation/h2/index.md)

* [H<sub>4</sub>(4,4) · aug-cc-pVTZ H₄ S0 curve, SSR line, RKS dashed, FCI points; scale bar 50 mEh 11 FCI points](https://reksstudio.github.io/main/results/dissociation/h4/index.md)

* [H<sub>6</sub>(6,6) · 6-31G H₆ S0 curve, SSR line, RKS dashed, FCI points; scale bar 50 mEh 40 FCI points †](https://reksstudio.github.io/main/results/dissociation/h6/index.md)

* [H<sub>8</sub>(8,8) · 6-31G H₈ S0 curve, SSR line, RKS dashed, FCI points; scale bar 50 mEh 43 FCI points †](https://reksstudio.github.io/main/results/dissociation/h8/index.md)

* [H<sub>10</sub>(10,10) · 6-31G H₁₀ S0 curve, SSR line, RKS dashed; scale bar 50 mEh no reference](https://reksstudio.github.io/main/results/dissociation/h10/index.md)

* [C<sub>2</sub>H<sub>4</sub>(4,4) · aug-cc-pVTZ C₂H₄ S0 curve, SSR line, RKS dashed; scale bar 50 mEh no reference](https://reksstudio.github.io/main/results/dissociation/c2h4/index.md)

* [N<sub>2</sub>(6,6) · aug-cc-pVTZ N₂ S0 curve, SSR line, RKS dashed; scale bar 50 mEh no reference](https://reksstudio.github.io/main/results/dissociation/n2/index.md)

* [C<sub>2</sub>H<sub>2</sub>(6,6) · aug-cc-pVTZ C₂H₂ S0 curve, SSR line, RKS dashed; scale bar 50 mEh no reference](https://reksstudio.github.io/main/results/dissociation/c2h2/index.md)

* [C<sub>2</sub>(6,6) · M08-SO · cc-pV5Z C₂ S0 curve, SSR line, SHCI points; scale bar 50 mEh X<sup>1</sup>Σ<sub>g</sub><sup>+</sup>: 12 of 46 SHCI points, shifted by −89.23 mE<sub>h</sub>](https://reksstudio.github.io/main/results/dissociation/c2/index.md)

* * **Solid line

    SSR S<sub>0</sub>

  * **Dashed line

    RKS, same functional

  * **Circle

    FCI: exact in the panel's basis. SHCI (C<sub>2</sub>): selected CI extrapolated to the frozen-core FCI limit

  * **Square

    FCI in a larger basis. H<sub>6</sub>: aug-cc-pVDZ, 1 point; H<sub>8</sub>: cc-pVDZ, 2 points

  * **Bar

    50 mE<sub>h</sub>, drawn to each panel's scale

  * †

    FCI above SSR: FCI with a small basis set cannot fully capture the correlation energy; DFT-based methods are less sensitive to basis set size.

[All dissociation curves](https://reksstudio.github.io/main/results/dissociation/index.md)

**3** Model vs benchmark

## Excited states against TBE {#tbe-h}

Vertical excitation energies against theoretical best estimates (TBE) of the QUEST database, sets QUEST3, 5, 6, 7.

0.21–0.23 eVmean absolute error by functional

Distribution of delta = E(SSR, closest active space) minus E(TBE) per state and functional, 0.1 eV bins on a common axis -1.4 to 1.4 eV; S1 BH\&HLYP: MAE 0.248, MSE +0.134 eV; S1 M08-SO: MAE 0.233, MSE +0.086 eV; S1 ωB97X: MAE 0.224, MSE +0.156 eV; S2 BH\&HLYP: MAE 0.271, MSE +0.113 eV; S2 M08-SO: MAE 0.296, MSE +0.043 eV; S2 ωB97X: MAE 0.289, MSE +0.133 eV; T1 BH\&HLYP: MAE 0.140, MSE +0.116 eV; T1 M08-SO: MAE 0.217, MSE +0.200 eV; T1 ωB97X: MAE 0.192, MSE +0.180 eV; T2 BH\&HLYP: MAE 0.190, MSE +0.041 eV; T2 M08-SO: MAE 0.180, MSE +0.139 eV; T2 ωB97X: MAE 0.178, MSE +0.121 eV

Δ = ΔE(SSR) − TBE, eV** mean signed error · bar height: count, common scale · number under each state: pairs

| eV | BH\&HLYP | M08-SO | ωB97X |
| - | - | - | - |
| Mean absolute (MAE) | 0.212 | 0.230 | 0.220 |
| Median absolute | 0.131 | 0.169 | 0.158 |
| Mean signed | +0.105 | +0.118 | +0.149 |
| Standard deviation | 0.280 | 0.294 | 0.267 |

* Set

  192 pairs of 62 molecules, aug-cc-pVTZ (one TBE: cc-pVTZ); 35 molecules with S<sub>1</sub>, S<sub>2</sub>, T<sub>1</sub> and T<sub>2</sub>

* States

  valence and charge-transfer, no Rydberg state among the pairs

* Active space

  per state and functional, the computed one of (2,2)–(8,8) closest to the TBE

* Pairing

  per functional, each SSR state with one TBE state of the same multiplicity

* Numbering

  S<sub>1</sub>…T<sub>2</sub>: order in the TBE list of the molecule or, where that state has no SSR partner, in SSR

[QUEST: errors by state](https://reksstudio.github.io/main/results/quest/index.md#errors)[By set](https://reksstudio.github.io/main/results/quest/index.md#sets)[Full table](https://reksstudio.github.io/main/results/quest/index.md#table)[All 62 molecules](#molecules-list)

**4** Model vs experiment

## Against experiment {#experiment-h}

Δ = SSR − experiment. Gas-phase molecules: BH\&HLYP/aug-cc-pVTZ unless noted. Each page states which state a value belongs to. Rulers: 0 at the black tick, ends ±0.03 Å, ±0.9 eV.

* ### [C<sub>2</sub>H<sub>4</sub>](https://reksstudio.github.io/main/results/dissociation/c2h4/index.md)

  ![C₂H₄](https://reksstudio.github.io/figures/dissociation/c2h4.svg)

  * Δ R<sub>e</sub> / Å

    * +0.002
    * SSR 1.3327 · exp. 1.3305

  rigid R<sub>CC</sub> scan

* ### [N<sub>2</sub>](https://reksstudio.github.io/main/results/dissociation/n2/index.md)

  ![N₂](https://reksstudio.github.io/figures/dissociation/n2.svg)

  * Δ R<sub>e</sub> / Å

    * −0.002
    * SSR 1.096 · exp. 1.0977

  R<sub>e</sub> from Fig. 3 of Komarov et al. 2026

* ### [C<sub>2</sub>](https://reksstudio.github.io/main/results/dissociation/c2/index.md)

  ![C₂](https://reksstudio.github.io/figures/dissociation/c2.svg)

  * Δ R<sub>e</sub> / Å

    * −0.015 to +0.025
    * 4 states

  * Δ T<sub>e</sub> / eV

    * −0.49 to −0.06
    * 3 states

  * D<sub>e</sub> / eV

    * 6.29 vs 6.32 ± 0.2
    * SSR vs exp., atoms SSR(4,4)

  M08-SO/cc-pV5Z; B<sup>1</sup>Δ<sub>g</sub>: lowest grid point

* ### [Zethrenes and related PAHs](https://reksstudio.github.io/main/results/zethrenes/index.md#experiment)

  ![heptazethrene (HZ)](https://reksstudio.github.io/figures/zeth/mol/HZ_skel.svg)

  * Δ T<sub>1</sub> / eV

    * −0.01 to +0.08
    * E(T<sub>1</sub>) at R<sub>T</sub> − E(S<sub>0</sub>) at R<sub>os</sub>, 4 derivatives of 2 parents
    * Δ vertical emission −0.25 to −0.22
    * T<sub>1</sub> change (8,8) → (10,10): HZ +0.07, PF +0.10

  * Δ absorption / eV

    * +0.32 to +0.71
    * 4 molecules, band assigned to H→L in the source

  * Δ 2J / kcal mol<sup>−1</sup>

    * −4.51
    * SSR FP −6.20
    * exp. FP-M −1.69

  Calculation: isolated parent PAH, SSR(10,10), BH\&HLYP/cc-pVTZ. Experiment: substituted derivatives; phosphorescence (T<sub>1</sub>), solution (absorption), SQUID on powder (2J).

* ### [TNS](https://reksstudio.github.io/main/results/large-molecules/tns/index.md)

  triangulene nanostar, 192 atoms, REKS(12,12)

  ![triangulene nanostar (TNS)](https://reksstudio.github.io/figures/scale/mol/TNS_skel.svg)

  * Measured on Au(111) / mV

    * ±14(1), ±42(2), ±80(2)
    * IETS steps; not compared: the calculation is the isolated molecule

* ### [TTR](https://reksstudio.github.io/main/results/large-molecules/ttr/index.md)

  tetra\[3]trianguleno\[3]rhombene, 152 atoms, REKS(10,10)

  ![Tetra\[3\]trianguleno\[3\]rhombene (TTR)](https://reksstudio.github.io/figures/scale/mol/TTR_skel.svg)

  * Measured on Au(111) / mV

    * ±9
    * IETS steps, metal tip; not compared: the calculation is the isolated molecule

Cost

## (6,6) multireference excited states, 1260 basis functions, in less wall time than ORCA TDA and SF-TDA. {#run-h}

One hot-start step of the tetracene dimer C<sub>36</sub>H<sub>24</sub>, no gradients: 10 states, BH\&HLYP, 36 cores. Bars: def2-TZVP; all tests: two geometries, two bases.

[Closed shell SI-SA-REKS(6,6)**132.53 sORCA TDA**259.81 s Open shell SI-SA-REKS(6,6)**185.17 sORCA SF-TDA**386.26 s](https://reksstudio.github.io/main/cost/index.md#md-time-resp)

* (2,2)–(6,6)SI-SA-REKS(2,2): 3 states

  Less time than ORCA TDA and SF-TDA on all four tests.

* (8,8)

  def2-TZVP: less on both geometries (closed shell †).6-31G(d): 66.69 s vs ORCA TDA 67.53 s (closed shell).6-31G(d): 87.74 s vs ORCA SF-TDA 75.44 s / TDA 88.12 s (open shell).

* (10,10)

  More time than ORCA on all four tests.

* [Largest run](https://reksstudio.github.io/main/cost/index.md#largest-run)

  Triangulene nanostar, 192 atoms, (12,12), def2-TZVP, BH\&HLYP.

† REKS at looser SCF thresholds.

[All tests](https://reksstudio.github.io/main/cost/index.md#md-time-resp)

[Install, free](https://reksstudio.github.io/docs/index.md#install) [Talk to the team about your molecule](mailto:reks.studio1@gmail.com?subject=REKS%20Studio%3A%20my%20molecule)

From the install: up to (6,6). Catalogues REKS(8,8), (10,10) and (12,12): on request.

[First calculation](https://reksstudio.github.io/manual/first-calculation/index.md#first-calculation)[Cite](https://reksstudio.github.io/docs/index.md#cite)

## Index {#index-h}

### Implementation {#index-implementation}

#### [Exactness](https://reksstudio.github.io/main/results/exactness/index.md) {#row-exactness}

* [Identities](https://reksstudio.github.io/main/results/exactness/index.md#identities)
* [Derivatives](https://reksstudio.github.io/main/results/exactness/index.md#derivatives)

### Bond breaking {#index-bond-breaking}

#### [Dissociation](https://reksstudio.github.io/main/results/dissociation/index.md) {#row-dissociation}

* [H<sub>2</sub>](https://reksstudio.github.io/main/results/dissociation/h2/index.md) [H<sub>4</sub>](https://reksstudio.github.io/main/results/dissociation/h4/index.md) [H<sub>6</sub>](https://reksstudio.github.io/main/results/dissociation/h6/index.md) [H<sub>8</sub>](https://reksstudio.github.io/main/results/dissociation/h8/index.md)

  curve vs FCI

* [H<sub>10</sub>](https://reksstudio.github.io/main/results/dissociation/h10/index.md) [C<sub>2</sub>H<sub>2</sub>](https://reksstudio.github.io/main/results/dissociation/c2h2/index.md)

  curve

* [C<sub>2</sub>H<sub>4</sub>](https://reksstudio.github.io/main/results/dissociation/c2h4/index.md) [N<sub>2</sub>](https://reksstudio.github.io/main/results/dissociation/n2/index.md)

  R<sub>e</sub> vs experiment

* [C<sub>2</sub>](https://reksstudio.github.io/main/results/dissociation/c2/index.md)

  curve vs SHCI points (shifted); R<sub>e</sub>, T<sub>e</sub>, D<sub>e</sub> vs experiment

### Diradicals and magnetism {#index-diradicals-and-magnetism}

#### [Large molecules](https://reksstudio.github.io/main/results/large-molecules/index.md) {#row-large-molecules}

[TNS](https://reksstudio.github.io/main/results/large-molecules/tns/index.md)

* [Spin gaps](https://reksstudio.github.io/main/results/large-molecules/tns/index.md#gaps)
* [Spin sectors](https://reksstudio.github.io/main/results/large-molecules/tns/index.md#spins)
* [Occupations](https://reksstudio.github.io/main/results/large-molecules/tns/index.md#occupations)
* [Experiment](https://reksstudio.github.io/main/results/large-molecules/tns/index.md#experiment)
* [Calculations](https://reksstudio.github.io/main/results/large-molecules/tns/index.md#calculations)

[TTR](https://reksstudio.github.io/main/results/large-molecules/ttr/index.md)

* [Spin gaps](https://reksstudio.github.io/main/results/large-molecules/ttr/index.md#gaps)
* [Spin sectors](https://reksstudio.github.io/main/results/large-molecules/ttr/index.md#spins)
* [Occupations](https://reksstudio.github.io/main/results/large-molecules/ttr/index.md#occupations)
* [Experiment](https://reksstudio.github.io/main/results/large-molecules/ttr/index.md#experiment)
* [Calculations](https://reksstudio.github.io/main/results/large-molecules/ttr/index.md#calculations)

#### [Zethrenes](https://reksstudio.github.io/main/results/zethrenes/index.md) {#row-zethrenes}

* [Ladder](https://reksstudio.github.io/main/results/zethrenes/index.md#ladder)
* [Occupations](https://reksstudio.github.io/main/results/zethrenes/index.md#occupations)
* [vs experiment](https://reksstudio.github.io/main/results/zethrenes/index.md#experiment)

pages[HZ](https://reksstudio.github.io/main/results/zethrenes/hz/index.md)[HZD](https://reksstudio.github.io/main/results/zethrenes/hzd/index.md)[FP](https://reksstudio.github.io/main/results/zethrenes/fp/index.md)[PIF](https://reksstudio.github.io/main/results/zethrenes/pif/index.md)[IFD](https://reksstudio.github.io/main/results/zethrenes/ifd/index.md)[PF](https://reksstudio.github.io/main/results/zethrenes/pf/index.md)[IF](https://reksstudio.github.io/main/results/zethrenes/if/index.md)inputs[HZ](https://reksstudio.github.io/main/results/zethrenes/hz/index.md#calculations)[HZD](https://reksstudio.github.io/main/results/zethrenes/hzd/index.md#calculations)[FP](https://reksstudio.github.io/main/results/zethrenes/fp/index.md#calculations)[PIF](https://reksstudio.github.io/main/results/zethrenes/pif/index.md#calculations)[IFD](https://reksstudio.github.io/main/results/zethrenes/ifd/index.md#calculations)[PF](https://reksstudio.github.io/main/results/zethrenes/pf/index.md#calculations)[IF](https://reksstudio.github.io/main/results/zethrenes/if/index.md#calculations)

### Photochemistry {#index-photochemistry}

#### [C<sub>2</sub>H<sub>4</sub> photochemistry](https://reksstudio.github.io/main/results/c2h4-photochemistry/index.md) {#row-c2h4-photochemistry}

* [MECI](https://reksstudio.github.io/main/results/c2h4-photochemistry/index.md#meci)
* [Torsion TS](https://reksstudio.github.io/main/results/c2h4-photochemistry/index.md#ts)
* [Trajectory](https://reksstudio.github.io/main/results/c2h4-photochemistry/index.md#trajectory)
* [Worked inputs (Manual: dynamics)](https://reksstudio.github.io/manual/dynamics/index.md#dynamics-inputs)

### Cost {#index-cost}

* [Wall time against ORCA and Q-Chem](https://reksstudio.github.io/main/cost/index.md#md-time-resp)
* [Inside Psi4](https://reksstudio.github.io/main/cost/index.md#psi4)
* [Configuration count](https://reksstudio.github.io/main/cost/index.md#count)
* [Catalogue](https://reksstudio.github.io/main/cost/index.md#catalogue)
* [Largest run](https://reksstudio.github.io/main/cost/index.md#largest-run)
* [One dynamics step](https://reksstudio.github.io/main/cost/index.md#dynamics-step)

### Excited states {#index-excited-states}

#### [QUEST](https://reksstudio.github.io/main/results/quest/index.md) {#row-quest}

* [Errors by state](https://reksstudio.github.io/main/results/quest/index.md#errors)
* [By set](https://reksstudio.github.io/main/results/quest/index.md#sets)
* [Full table](https://reksstudio.github.io/main/results/quest/index.md#table)

All 62 molecules

* [acetone](https://reksstudio.github.io/main/results/quest/quest3-acetone/index.md)
* [acrolein](https://reksstudio.github.io/main/results/quest/quest3-acrolein/index.md)
* [aminobenzonitrile](https://reksstudio.github.io/main/results/quest/quest6-aminobenzonitrile/index.md)
* [aniline](https://reksstudio.github.io/main/results/quest/quest6-aniline/index.md)
* [azanaphthalene](https://reksstudio.github.io/main/results/quest/quest5-azanaphthalene/index.md)
* [azulene](https://reksstudio.github.io/main/results/quest/quest6-azulene/index.md)
* [benzene](https://reksstudio.github.io/main/results/quest/quest3-benzene/index.md)
* [benzoquinone](https://reksstudio.github.io/main/results/quest/quest5-benzoquinone/index.md)
* [benzothiadiazole](https://reksstudio.github.io/main/results/quest/quest6-benzothiadiazole/index.md)
* [benzoxadiazole](https://reksstudio.github.io/main/results/quest/quest7-benzoxadiazole/index.md)
* [butadiene](https://reksstudio.github.io/main/results/quest/quest3-butadiene/index.md)
* [cyanoacetylene](https://reksstudio.github.io/main/results/quest/quest3-cyanoacetylene/index.md)
* [cyanoformaldehyde](https://reksstudio.github.io/main/results/quest/quest3-cyanoformaldehyde/index.md)
* [cyanogen](https://reksstudio.github.io/main/results/quest/quest3-cyanogen/index.md)
* [cyclopentadiene](https://reksstudio.github.io/main/results/quest/quest3-cyclopentadiene/index.md)
* [cyclopentadienethione](https://reksstudio.github.io/main/results/quest/quest5-cyclopentadienethione/index.md)
* [cyclopentadienone](https://reksstudio.github.io/main/results/quest/quest5-cyclopentadienone/index.md)
* [cyclopropenethione](https://reksstudio.github.io/main/results/quest/quest3-cyclopropenethione/index.md)
* [cyclopropenone](https://reksstudio.github.io/main/results/quest/quest3-cyclopropenone/index.md)
* [diacetylene](https://reksstudio.github.io/main/results/quest/quest3-diacetylene/index.md)
* [diazirine](https://reksstudio.github.io/main/results/quest/quest5-diazirine/index.md)
* [diketopyrrolopyrrole](https://reksstudio.github.io/main/results/quest/quest7-diketopyrrolopyrrole/index.md)
* [dimethylaniline](https://reksstudio.github.io/main/results/quest/quest6-dimethylaniline/index.md)
* [dipeptide](https://reksstudio.github.io/main/results/quest/quest6-dipeptide/index.md)
* [DMABN](https://reksstudio.github.io/main/results/quest/quest6-dmabn/index.md)
* [furan](https://reksstudio.github.io/main/results/quest/quest3-furan/index.md)
* [furofuran](https://reksstudio.github.io/main/results/quest/quest7-furofuran/index.md)
* [glyoxal](https://reksstudio.github.io/main/results/quest/quest3-glyoxal/index.md)
* [hexatriene](https://reksstudio.github.io/main/results/quest/quest5-hexatriene/index.md)
* [imidazole](https://reksstudio.github.io/main/results/quest/quest3-imidazole/index.md)
* [isobutene](https://reksstudio.github.io/main/results/quest/quest3-isobutene/index.md)
* [maleimide](https://reksstudio.github.io/main/results/quest/quest5-maleimide/index.md)
* [methylenecyclopropene](https://reksstudio.github.io/main/results/quest/quest3-methylenecyclopropene/index.md)
* [N-phenylpyrrole](https://reksstudio.github.io/main/results/quest/quest6-n-phenylpyrrole/index.md)
* [naphthalene](https://reksstudio.github.io/main/results/quest/quest5-naphthalene/index.md)
* [nitroaniline](https://reksstudio.github.io/main/results/quest/quest6-nitroaniline/index.md)
* [nitrobenzene](https://reksstudio.github.io/main/results/quest/quest6-nitrobenzene/index.md)
* [nitrodimethylaniline](https://reksstudio.github.io/main/results/quest/quest6-nitrodimethylaniline/index.md)
* [nitroxyl](https://reksstudio.github.io/main/results/quest/quest5-nitroxyl/index.md)
* [NPNO](https://reksstudio.github.io/main/results/quest/quest6-npno/index.md)
* [octatetraene](https://reksstudio.github.io/main/results/quest/quest5-octatetraene/index.md)
* [phthalazine](https://reksstudio.github.io/main/results/quest/quest6-phthalazine/index.md)
* [propynal](https://reksstudio.github.io/main/results/quest/quest3-propynal/index.md)
* [pyrazine](https://reksstudio.github.io/main/results/quest/quest3-pyrazine/index.md)
* [pyridazine](https://reksstudio.github.io/main/results/quest/quest3-pyridazine/index.md)
* [pyridine](https://reksstudio.github.io/main/results/quest/quest3-pyridine/index.md)
* [pyrimidine](https://reksstudio.github.io/main/results/quest/quest3-pyrimidine/index.md)
* [pyrrole](https://reksstudio.github.io/main/results/quest/quest3-pyrrole/index.md)
* [pyrrolopyrrole](https://reksstudio.github.io/main/results/quest/quest7-pyrrolopyrrole/index.md)
* [quinoxaline](https://reksstudio.github.io/main/results/quest/quest6-quinoxaline/index.md)
* [streptocyanine-C3](https://reksstudio.github.io/main/results/quest/quest5-strepto-c3/index.md)
* [streptocyanine-C5](https://reksstudio.github.io/main/results/quest/quest5-strepto-c5/index.md)
* [tetrazine](https://reksstudio.github.io/main/results/quest/quest3-tetrazine/index.md)
* [thienothiophene](https://reksstudio.github.io/main/results/quest/quest7-thienothiophene/index.md)
* [thioacetone](https://reksstudio.github.io/main/results/quest/quest3-thioacetone/index.md)
* [thioacrolein](https://reksstudio.github.io/main/results/quest/quest5-thioacrolein/index.md)
* [thiophene](https://reksstudio.github.io/main/results/quest/quest3-thiophene/index.md)
* [thiopropynal](https://reksstudio.github.io/main/results/quest/quest3-thiopropynal/index.md)
* [triazine](https://reksstudio.github.io/main/results/quest/quest3-triazine/index.md)
* [TTF](https://reksstudio.github.io/main/results/quest/quest7-ttf/index.md)
* [twisted DMABN](https://reksstudio.github.io/main/results/quest/quest6-tdmabn/index.md)
* [twisted N-phenylpyrrole](https://reksstudio.github.io/main/results/quest/quest6-twisted-n-phenylpyrrole/index.md)

[Manual: hexatriene, 6-31G(d) against the TBE](https://reksstudio.github.io/manual/first-calculation/index.md#first-spin)
