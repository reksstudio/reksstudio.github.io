# Results — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/>

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# Results

Ensemble DFT (REKS, SSR states) for broken bonds, diradicals and excited states, checked against exact identities of the equations, near-exact theory, benchmark estimates and experiment.

[Index by problem: every molecule, curve and table](#index)

[Implementation](#index-implementation) · [Bond breaking](#index-bond-breaking) · [Excited states](#index-excited-states) · [Diradicals and magnetism](#index-diradicals-and-magnetism) · [Photochemistry](#index-photochemistry) · [Cost and history](#index-cost-and-history)

1. [exact identities, finite differences](#exact) identities ≤ 10<sup>−10</sup> E<sub>h</sub>, degeneracy 1.6·10<sup>−7</sup> E<sub>h</sub>; gradients vs five-point FD ≤ 7.8·10<sup>−5</sup> E<sub>h</sub> a<sub>0</sub><sup>−1</sup>; up to (4,6) PPS and (2,2) SI couplings 9 checks
2. [near-exact theory](#near-exact) H<sub>2</sub>–H<sub>8</sub>, SSR (2,2)–(8,8): S0 vs FCI in the same basis; H<sub>6</sub>, H<sub>8</sub>: FCI 6-31G(d) above SSR; C<sub>2</sub> vs SHCI, shifted −89.23 mE<sub>h</sub> 140 FCI points · 46 SHCI points
3. [benchmark (TBE)](#tbe) MAE 0.21–0.23 eV, MSE +0.105 to +0.149 eV, three functionals; per state the closest active space of (2,2)–(8,8) 192 state pairs
4. [experiment](#experiment) Δ R<sub>e</sub> −0.015 to +0.025 Å (C<sub>2</sub>H<sub>4</sub>, N<sub>2</sub>, C<sub>2</sub>); C<sub>2</sub> T<sub>e</sub> −0.49 to −0.06 eV; zethrene absorption +0.27 to +0.81 eV (4 of 9 author-assigned); FP-M 2J −4.51 kcal mol<sup>−1</sup> 3 gas-phase molecules · 10 zethrene-family molecules (5 cores)

Runs of the dissociation, QUEST, zethrene and large-molecule pages

Runs of the dissociation, QUEST, zethrene and large-molecule pages: atoms (log axis) against REKS active space; each mark a link to its calculation, every calculation also listed in the index

implementation vs exact identities and finite differences

## Identities and finite-difference checks {#exact-h}

Energy identities / E<sub>h</sub>

a limit, equality or symmetry the equations fix exactly

* BH · E(PPS1), REKS(2,3)

  * one geminal = CASSCF(2,M) · vs CASSCF(2,3)
  * ≤ 10<sup>−10</sup> E<sub>h</sub>

* E(PPS1), (4,4), (4,5), (4,6)

  * HF, δ → ∞: E(PPS1) = ⟨geminal product|H|geminal product⟩ · vs geminal product
  * ≤ 10<sup>−11</sup> E<sub>h</sub>

* H<sub>2</sub> · GVB(2,2)–(2,4)

  * GVB = CASSCF · vs CASSCF
  * ≤ 9.9·10<sup>−12</sup> E<sub>h</sub>

* two H<sub>2</sub> at 50 Å · total energy

  * E(2 H<sub>2</sub>) = 2 E(H<sub>2</sub>) · vs two separate runs
  * 9.3·10<sup>−11</sup> E<sub>h</sub>

* BH · ¹Π / ³Π pairs

  * degenerate states stay degenerate · vs symmetry
  * 1.6·10<sup>−7</sup> E<sub>h</sub>

- He–H–H · SI couplings

  * SI couplings = MO-integral evaluation · vs MO-integral oracle
  * agreement to 6 decimals

Analytic gradients vs five-point finite differences / E<sub>h</sub> a<sub>0</sub><sup>−1</sup>

finite differences of the same energy

* C<sub>2</sub>H<sub>4</sub> · analytic gradients

  * analytic = derivative of E · vs FD5
  * 5.6·10<sup>−7</sup> E<sub>h</sub> a<sub>0</sub><sup>−1</sup>

* butadiene, (4,4) · analytic gradients

  * analytic = derivative of E · vs FD5
  * 8.0·10<sup>−6</sup> / 3.2·10<sup>−6</sup> / 7.1·10<sup>−5</sup> E<sub>h</sub> a<sub>0</sub><sup>−1</sup>(80° near-degenerate case)

* BH, wide geminals · analytic gradients, all roots

  * analytic = derivative of E · vs FD5
  * 2.9·10<sup>−9</sup> … 7.8·10<sup>−5</sup> E<sub>h</sub> a<sub>0</sub><sup>−1</sup>

Exact checks of the generated equations reach (4,6) PPS and (2,2) SI couplings.

[Exactness checks](https://reksstudio.github.io/v2/main/results/exactness/index.md)[Identities](https://reksstudio.github.io/v2/main/results/exactness/index.md#identities) · [Derivatives](https://reksstudio.github.io/v2/main/results/exactness/index.md#derivatives) · Manual [Gradients and couplings against FD](https://reksstudio.github.io/v2/manual/dynamics/index.md#grad-fd)

model vs near-exact theory

## Bond breaking {#near-exact-h}

FCI: exact in the given basis. SHCI: selected CI extrapolated to the FCI limit.

H₈ S0 dissociation curve, (8,8) BH\&HLYP/6-31G(d): SSR as a line, FCI 6-31G(d), above SSR as circles, FCI cc-pVDZ, 2 points as squares; vertical extent 528 mEh; scale bar 50 mEh

H<sub>2</sub>

H₂ S0 curve, SSR line, FCI points; extent 179 mEh; scale bar 50 mEh

extent 179 mE<sub>h</sub>

H<sub>4</sub>

H₄ S0 curve, SSR line, FCI points; extent 434 mEh; scale bar 50 mEh

extent 434 mE<sub>h</sub>

H<sub>6</sub>

H₆ S0 curve, SSR line, FCI points; extent 399 mEh; scale bar 50 mEh

extent 399 mE<sub>h</sub>

H<sub>10</sub>

H₁₀ S0 curve, SSR line; extent 631 mEh; scale bar 50 mEh

extent 631 mE<sub>h</sub>

C<sub>2</sub>H<sub>2</sub>

C₂H₂ S0 curve, SSR line; extent 757 mEh; scale bar 50 mEh

extent 757 mE<sub>h</sub>

C<sub>2</sub>

C₂ S0 curve, SSR line, SHCI points, SHCI shifted −89.23 mEh; extent 378 mEh; scale bar 50 mEh

extent 378 mE<sub>h</sub> · SHCI shifted −89.23 mE<sub>h</sub>

Extent: vertical range of each panel. Bars: 50 mE<sub>h</sub> in the scale of each panel. Lines: SSR S0; points: reference.

H<sub>2</sub>–H<sub>8</sub>, SSR (2,2)–(8,8): S0 against FCI in the same basis; C<sub>2</sub> X<sup>1</sup>Σ<sub>g</sub><sup>+</sup> against SHCI points

* [H<sub>8</sub> curves](https://reksstudio.github.io/v2/main/results/dissociation/h8/index.md) (8,8) · BH\&HLYP · 6-31G(d) (on H: 6-31G) · R 0.7–4.925 Å · 43 FCI pointsFCI lies above SSR in this basis: FCI with a small basis set cannot fully capture the correlation energy; FCI cc-pVDZ (2 points) on the page
* [H<sub>2</sub> curves](https://reksstudio.github.io/v2/main/results/dissociation/h2/index.md) (2,2) · BH\&HLYP · aug-cc-pVTZ · R 0.5–5 Å · 46 FCI points
* [H<sub>4</sub> curves](https://reksstudio.github.io/v2/main/results/dissociation/h4/index.md) (4,4) · BH\&HLYP · aug-cc-pVTZ · R 0.5–5 Å · 11 FCI points
* [H<sub>6</sub> curves](https://reksstudio.github.io/v2/main/results/dissociation/h6/index.md) (6,6) · BH\&HLYP · 6-31G(d) (on H: 6-31G) · R 0.7–4.65 Å · 40 FCI pointsFCI lies above SSR in this basis: FCI with a small basis set cannot fully capture the correlation energy; FCI aug-cc-pVDZ (1 point) on the page
* [H<sub>10</sub> curves](https://reksstudio.github.io/v2/main/results/dissociation/h10/index.md) (10,10) · BH\&HLYP · 6-31G(d) (on H: 6-31G) · R 0.7–4.8 Å · 83 SSR points
* [C<sub>2</sub>H<sub>2</sub> curves](https://reksstudio.github.io/v2/main/results/dissociation/c2h2/index.md) (6,6) · BH\&HLYP · aug-cc-pVTZ · R 0.8–5 Å · 85 SSR points
* [C<sub>2</sub> curves and constants](https://reksstudio.github.io/v2/main/results/dissociation/c2/index.md) (6,6) · M08-SO · cc-pV5Z · R 0.9–2.55 Å · 46 SHCI pointsSHCI extrapolated to the FCI limit, frozen core, cc-pV5Z; shifted by −89.23 mE<sub>h</sub>

[All dissociation curves](https://reksstudio.github.io/v2/main/results/dissociation/index.md)

model vs benchmark set (TBE)

## Excited states against TBE {#tbe-h}

TBE: theoretical best estimates of the QUEST database, sets QUEST3, 5, 6, 7

Distribution of delta = E(SSR, closest active space) minus E(TBE) per state and functional, 0.1 eV bins on a common axis -1.4 to 1.4 eV; S1 BH\&HLYP: MAE 0.248, MSE +0.134 eV; S1 M08-SO: MAE 0.233, MSE +0.086 eV; S1 ωB97X: MAE 0.224, MSE +0.156 eV; S2 BH\&HLYP: MAE 0.271, MSE +0.113 eV; S2 M08-SO: MAE 0.296, MSE +0.043 eV; S2 ωB97X: MAE 0.289, MSE +0.133 eV; T1 BH\&HLYP: MAE 0.140, MSE +0.116 eV; T1 M08-SO: MAE 0.217, MSE +0.200 eV; T1 ωB97X: MAE 0.192, MSE +0.180 eV; T2 BH\&HLYP: MAE 0.190, MSE +0.041 eV; T2 M08-SO: MAE 0.180, MSE +0.139 eV; T2 ωB97X: MAE 0.178, MSE +0.121 eV

Δ = E(SSR, closest active space) − E(TBE) / eV; tick: MSE; bar height: count, common scale.

0.21–0.23 eV MAE, per state the closest of (2,2)–(8,8) to the TBE; BH\&HLYP, M08-SO, ωB97X

| eV | BH\&HLYP | M08-SO | ωB97X |
| - | - | - | - |
| MAE | 0.212 | 0.230 | 0.220 |
| MedAE | 0.131 | 0.169 | 0.158 |
| MSE | +0.105 | +0.118 | +0.149 |
| SDE | 0.280 | 0.294 | 0.267 |

N = 192 pairs of 62 molecules (59 / 41 / 50 / 42 S<sub>1</sub>/S<sub>2</sub>/T<sub>1</sub>/T<sub>2</sub>); aug-cc-pVTZ

Per state and functional, the active space of (2,2)–(8,8) closest to the TBE among those computed; each SSR state paired with one TBE state of the same multiplicity.

35 of 62 molecules with all four states; valence and charge-transfer states, no Rydberg state among the pairs.

[QUEST: errors by state](https://reksstudio.github.io/v2/main/results/quest/index.md#errors)[By QUEST set](https://reksstudio.github.io/v2/main/results/quest/index.md#sets) · [Full table](https://reksstudio.github.io/v2/main/results/quest/index.md#table) · [All 62 molecules](#index-excited-states)

model vs experiment

## Against experiment {#experiment-h}

measured values the result pages compare; how each value is assigned to a state is stated on its page

SSR − experiment; BH\&HLYP/aug-cc-pVTZ unless stated

* ![C₂H₄](https://reksstudio.github.io/v2/figures/dissociation/c2h4.svg)

  ### C<sub>2</sub>H<sub>4</sub>

  * R<sub>e</sub>

    * Δ +0.002 Å
    * SSR 1.3327 · exp. 1.3305 Å

  rigid R<sub>CC</sub> scan

  [C<sub>2</sub>H<sub>4</sub> numbers](https://reksstudio.github.io/v2/main/results/dissociation/c2h4/index.md#numbers)

  Photochemistry[MECI](https://reksstudio.github.io/v2/main/results/c2h4-photochemistry/index.md#meci)[Torsion TS](https://reksstudio.github.io/v2/main/results/c2h4-photochemistry/index.md#ts)[Trajectory](https://reksstudio.github.io/v2/main/results/c2h4-photochemistry/index.md#trajectory)[Worked inputs (Manual: dynamics)](https://reksstudio.github.io/v2/manual/dynamics/index.md#dynamics-inputs)

* ![N₂](https://reksstudio.github.io/v2/figures/dissociation/n2.svg)

  ### N<sub>2</sub>

  * R<sub>e</sub>

    * Δ −0.002 Å
    * SSR 1.096 · exp. 1.0977 Å

  R<sub>e</sub> from Fig. 3 of Komarov et al. 2026

  [N<sub>2</sub> numbers](https://reksstudio.github.io/v2/main/results/dissociation/n2/index.md#numbers)

* ![C₂](https://reksstudio.github.io/v2/figures/dissociation/c2.svg)

  ### C<sub>2</sub>

  * R<sub>e</sub>

    * Δ −0.015 to +0.025 Å
    * 4 states

  * T<sub>e</sub>

    * Δ −0.49 to −0.06 eV
    * 3 states

  * D<sub>e</sub>

    * 6.29 vs 6.32 ± 0.2 eV
    * SSR vs exp.

  M08-SO/cc-pV5Z; B<sup>1</sup>Δ<sub>g</sub>: lowest grid point

  [C<sub>2</sub> numbers](https://reksstudio.github.io/v2/main/results/dissociation/c2/index.md#numbers)

* ![heptazethrene (HZ)](https://reksstudio.github.io/v2/figures/zeth/mol/HZ_skel.svg)

  ### Zethrene family

  * T<sub>1</sub>

    * Δ −0.01 to +0.08 eV
    * 4 molecules
    * (8,8) → (10,10): +0.07 / +0.10 eV (HZ / PF)

  * Absorption

    * Δ +0.27 to +0.81 eV
    * 9 molecules, 4 assigned by the authors

  * FP-M 2J

    * −6.20 vs −1.69 kcal mol<sup>−1</sup>
    * REKS vs exp.

  * Ladder

    7 compounds · (2,2)–(10,10)

  REKS(10,10) on the parent core vs substituted derivatives

  [Zethrenes vs experiment](https://reksstudio.github.io/v2/main/results/zethrenes/index.md#experiment)[Ladder](https://reksstudio.github.io/v2/main/results/zethrenes/index.md#ladder)[Occupations](https://reksstudio.github.io/v2/main/results/zethrenes/index.md#occupations)

* ![triangulene nanostar (TNS)](https://reksstudio.github.io/v2/figures/scale/mol/TNS_skel.svg)![Tetra\[3\]trianguleno\[3\]rhombene (TTR)](https://reksstudio.github.io/v2/figures/scale/mol/TTR_skel.svg)

  ### TNS · TTR

  * Size

    up to 192 atoms · REKS(12,12)

  IETS steps on Au(111), as read in the papers

  [TNS](https://reksstudio.github.io/v2/main/results/large-molecules/tns/index.md#experiment)[TTR](https://reksstudio.github.io/v2/main/results/large-molecules/ttr/index.md#experiment)[Run sheet](https://reksstudio.github.io/v2/main/results/large-molecules/index.md)

## Run it {#run-h}

[Wall time against ORCA and Q-Chem](https://reksstudio.github.io/v2/main/cost/index.md#md-time-resp): one hot-start step of the tetracene dimer C<sub>36</sub>H<sub>24</sub>, 2 geometries (open and closed shell) × 2 bases (6-31G(d), def2-TZVP); SI-SA-REKS 10 states, ORCA and Q-Chem TDA 10 roots.

* (2,2)–(6,6) (SI-SA-REKS(2,2): 3 states)

  less time than ORCA TDA and SF-TDA on all four tests.

* (8,8)

  less in def2-TZVP on both systems (closed shell †); in 6-31G(d) 66.69 s vs ORCA TDA 67.53 s (closed shell), 87.74 s vs ORCA SF-TDA 75.44 s / TDA 88.12 s (open shell).

* (10,10)

  more, shown as is.

† TC (10,10), TC def2-TZVP (8,8), (10,10): e 1e-7, d 1e-6; every other row e 1e-8, d 1e-7.

[Install, free](https://reksstudio.github.io/v2/docs/index.md#install) [Talk to the team about your molecule](mailto:reks.studio1@gmail.com)

[Manual: Start](https://reksstudio.github.io/v2/manual/index.md#overview) · [Install](https://reksstudio.github.io/v2/docs/index.md#install) · [Cite](https://reksstudio.github.io/v2/docs/index.md#cite) · [Contact](https://reksstudio.github.io/v2/docs/index.md#contact)

## Index {#index-h}

### Implementation {#index-implementation}

[vs exact identities and FD ↑](#exact)

#### [Exactness](https://reksstudio.github.io/v2/main/results/exactness/index.md) {#row-exactness}

* [Identities](https://reksstudio.github.io/v2/main/results/exactness/index.md#identities)
* [Derivatives](https://reksstudio.github.io/v2/main/results/exactness/index.md#derivatives)

### Bond breaking {#index-bond-breaking}

[vs FCI and SHCI ↑](#near-exact) · [vs experiment ↑](#experiment)

#### [Dissociation](https://reksstudio.github.io/v2/main/results/dissociation/index.md) {#row-dissociation}

* [H<sub>2</sub>](https://reksstudio.github.io/v2/main/results/dissociation/h2/index.md) curve vs FCI
* [H<sub>4</sub>](https://reksstudio.github.io/v2/main/results/dissociation/h4/index.md) curve vs FCI
* [H<sub>6</sub>](https://reksstudio.github.io/v2/main/results/dissociation/h6/index.md) curve vs FCI
* [H<sub>8</sub>](https://reksstudio.github.io/v2/main/results/dissociation/h8/index.md) curve vs FCI
* [H<sub>10</sub>](https://reksstudio.github.io/v2/main/results/dissociation/h10/index.md)
* [C<sub>2</sub>H<sub>4</sub>](https://reksstudio.github.io/v2/main/results/dissociation/c2h4/index.md) R<sub>e</sub> vs experiment
* [N<sub>2</sub>](https://reksstudio.github.io/v2/main/results/dissociation/n2/index.md) R<sub>e</sub> vs experiment
* [C<sub>2</sub>H<sub>2</sub>](https://reksstudio.github.io/v2/main/results/dissociation/c2h2/index.md)
* [C<sub>2</sub>](https://reksstudio.github.io/v2/main/results/dissociation/c2/index.md) curve vs SHCI points (shifted); R<sub>e</sub>, T<sub>e</sub>, D<sub>e</sub> vs experiment

### Excited states {#index-excited-states}

[vs TBE ↑](#tbe)

#### [QUEST](https://reksstudio.github.io/v2/main/results/quest/index.md) {#row-quest}

* [Errors by state](https://reksstudio.github.io/v2/main/results/quest/index.md#errors)
* [By set](https://reksstudio.github.io/v2/main/results/quest/index.md#sets)
* [Full table](https://reksstudio.github.io/v2/main/results/quest/index.md#table)

- [acetone](https://reksstudio.github.io/v2/main/results/quest/quest3-acetone/index.md)
- [acrolein](https://reksstudio.github.io/v2/main/results/quest/quest3-acrolein/index.md)
- [aminobenzonitrile](https://reksstudio.github.io/v2/main/results/quest/quest6-aminobenzonitrile/index.md)
- [aniline](https://reksstudio.github.io/v2/main/results/quest/quest6-aniline/index.md)
- [azanaphthalene](https://reksstudio.github.io/v2/main/results/quest/quest5-azanaphthalene/index.md)
- [azulene](https://reksstudio.github.io/v2/main/results/quest/quest6-azulene/index.md)
- [benzene](https://reksstudio.github.io/v2/main/results/quest/quest3-benzene/index.md)
- [benzoquinone](https://reksstudio.github.io/v2/main/results/quest/quest5-benzoquinone/index.md)
- [benzothiadiazole](https://reksstudio.github.io/v2/main/results/quest/quest6-benzothiadiazole/index.md)
- [benzoxadiazole](https://reksstudio.github.io/v2/main/results/quest/quest7-benzoxadiazole/index.md)
- [butadiene](https://reksstudio.github.io/v2/main/results/quest/quest3-butadiene/index.md)
- [cyanoacetylene](https://reksstudio.github.io/v2/main/results/quest/quest3-cyanoacetylene/index.md)
- [cyanoformaldehyde](https://reksstudio.github.io/v2/main/results/quest/quest3-cyanoformaldehyde/index.md)
- [cyanogen](https://reksstudio.github.io/v2/main/results/quest/quest3-cyanogen/index.md)
- [cyclopentadiene](https://reksstudio.github.io/v2/main/results/quest/quest3-cyclopentadiene/index.md)
- [cyclopentadienethione](https://reksstudio.github.io/v2/main/results/quest/quest5-cyclopentadienethione/index.md)
- [cyclopentadienone](https://reksstudio.github.io/v2/main/results/quest/quest5-cyclopentadienone/index.md)
- [cyclopropenethione](https://reksstudio.github.io/v2/main/results/quest/quest3-cyclopropenethione/index.md)
- [cyclopropenone](https://reksstudio.github.io/v2/main/results/quest/quest3-cyclopropenone/index.md)
- [diacetylene](https://reksstudio.github.io/v2/main/results/quest/quest3-diacetylene/index.md)
- [diazirine](https://reksstudio.github.io/v2/main/results/quest/quest5-diazirine/index.md)
- [diketopyrrolopyrrole](https://reksstudio.github.io/v2/main/results/quest/quest7-diketopyrrolopyrrole/index.md)
- [dimethylaniline](https://reksstudio.github.io/v2/main/results/quest/quest6-dimethylaniline/index.md)
- [dipeptide](https://reksstudio.github.io/v2/main/results/quest/quest6-dipeptide/index.md)
- [DMABN](https://reksstudio.github.io/v2/main/results/quest/quest6-dmabn/index.md)
- [furan](https://reksstudio.github.io/v2/main/results/quest/quest3-furan/index.md)
- [furofuran](https://reksstudio.github.io/v2/main/results/quest/quest7-furofuran/index.md)
- [glyoxal](https://reksstudio.github.io/v2/main/results/quest/quest3-glyoxal/index.md)
- [hexatriene](https://reksstudio.github.io/v2/main/results/quest/quest5-hexatriene/index.md)
- [imidazole](https://reksstudio.github.io/v2/main/results/quest/quest3-imidazole/index.md)
- [isobutene](https://reksstudio.github.io/v2/main/results/quest/quest3-isobutene/index.md)
- [maleimide](https://reksstudio.github.io/v2/main/results/quest/quest5-maleimide/index.md)
- [methylenecyclopropene](https://reksstudio.github.io/v2/main/results/quest/quest3-methylenecyclopropene/index.md)
- [N-phenylpyrrole](https://reksstudio.github.io/v2/main/results/quest/quest6-n-phenylpyrrole/index.md)
- [naphthalene](https://reksstudio.github.io/v2/main/results/quest/quest5-naphthalene/index.md)
- [nitroaniline](https://reksstudio.github.io/v2/main/results/quest/quest6-nitroaniline/index.md)
- [nitrobenzene](https://reksstudio.github.io/v2/main/results/quest/quest6-nitrobenzene/index.md)
- [nitrodimethylaniline](https://reksstudio.github.io/v2/main/results/quest/quest6-nitrodimethylaniline/index.md)
- [nitroxyl](https://reksstudio.github.io/v2/main/results/quest/quest5-nitroxyl/index.md)
- [NPNO](https://reksstudio.github.io/v2/main/results/quest/quest6-npno/index.md)
- [octatetraene](https://reksstudio.github.io/v2/main/results/quest/quest5-octatetraene/index.md)
- [phthalazine](https://reksstudio.github.io/v2/main/results/quest/quest6-phthalazine/index.md)
- [propynal](https://reksstudio.github.io/v2/main/results/quest/quest3-propynal/index.md)
- [pyrazine](https://reksstudio.github.io/v2/main/results/quest/quest3-pyrazine/index.md)
- [pyridazine](https://reksstudio.github.io/v2/main/results/quest/quest3-pyridazine/index.md)
- [pyridine](https://reksstudio.github.io/v2/main/results/quest/quest3-pyridine/index.md)
- [pyrimidine](https://reksstudio.github.io/v2/main/results/quest/quest3-pyrimidine/index.md)
- [pyrrole](https://reksstudio.github.io/v2/main/results/quest/quest3-pyrrole/index.md)
- [pyrrolopyrrole](https://reksstudio.github.io/v2/main/results/quest/quest7-pyrrolopyrrole/index.md)
- [quinoxaline](https://reksstudio.github.io/v2/main/results/quest/quest6-quinoxaline/index.md)
- [streptocyanine-C3](https://reksstudio.github.io/v2/main/results/quest/quest5-strepto-c3/index.md)
- [streptocyanine-C5](https://reksstudio.github.io/v2/main/results/quest/quest5-strepto-c5/index.md)
- [tetrazine](https://reksstudio.github.io/v2/main/results/quest/quest3-tetrazine/index.md)
- [thienothiophene](https://reksstudio.github.io/v2/main/results/quest/quest7-thienothiophene/index.md)
- [thioacetone](https://reksstudio.github.io/v2/main/results/quest/quest3-thioacetone/index.md)
- [thioacrolein](https://reksstudio.github.io/v2/main/results/quest/quest5-thioacrolein/index.md)
- [thiophene](https://reksstudio.github.io/v2/main/results/quest/quest3-thiophene/index.md)
- [thiopropynal](https://reksstudio.github.io/v2/main/results/quest/quest3-thiopropynal/index.md)
- [triazine](https://reksstudio.github.io/v2/main/results/quest/quest3-triazine/index.md)
- [TTF](https://reksstudio.github.io/v2/main/results/quest/quest7-ttf/index.md)
- [twisted DMABN](https://reksstudio.github.io/v2/main/results/quest/quest6-tdmabn/index.md)
- [twisted N-phenylpyrrole](https://reksstudio.github.io/v2/main/results/quest/quest6-twisted-n-phenylpyrrole/index.md)

#### Hexatriene, Manual {#row-hexatriene}

* [Hexatriene (Manual example, TBE in another basis)](https://reksstudio.github.io/v2/manual/first-calculation/index.md#first-spin)

### Diradicals and magnetism {#index-diradicals-and-magnetism}

[vs measurements on related molecules ↑](#experiment)

#### [Large molecules](https://reksstudio.github.io/v2/main/results/large-molecules/index.md) {#row-large-molecules}

* [TNS](https://reksstudio.github.io/v2/main/results/large-molecules/tns/index.md)
* [Spin gaps](https://reksstudio.github.io/v2/main/results/large-molecules/tns/index.md#gaps)
* [Spin sectors](https://reksstudio.github.io/v2/main/results/large-molecules/tns/index.md#spins)
* [Occupations](https://reksstudio.github.io/v2/main/results/large-molecules/tns/index.md#occupations)
* [Experiment](https://reksstudio.github.io/v2/main/results/large-molecules/tns/index.md#experiment)
* [Calculations](https://reksstudio.github.io/v2/main/results/large-molecules/tns/index.md#calculations)

- [TTR](https://reksstudio.github.io/v2/main/results/large-molecules/ttr/index.md)
- [Spin gaps](https://reksstudio.github.io/v2/main/results/large-molecules/ttr/index.md#gaps)
- [Spin sectors](https://reksstudio.github.io/v2/main/results/large-molecules/ttr/index.md#spins)
- [Occupations](https://reksstudio.github.io/v2/main/results/large-molecules/ttr/index.md#occupations)
- [Experiment](https://reksstudio.github.io/v2/main/results/large-molecules/ttr/index.md#experiment)
- [Calculations](https://reksstudio.github.io/v2/main/results/large-molecules/ttr/index.md#calculations)

#### [Zethrenes](https://reksstudio.github.io/v2/main/results/zethrenes/index.md) {#row-zethrenes}

* [Ladder](https://reksstudio.github.io/v2/main/results/zethrenes/index.md#ladder)
* [Occupations](https://reksstudio.github.io/v2/main/results/zethrenes/index.md#occupations)
* [vs experiment](https://reksstudio.github.io/v2/main/results/zethrenes/index.md#experiment)

- [HZ](https://reksstudio.github.io/v2/main/results/zethrenes/hz/index.md) · [inputs](https://reksstudio.github.io/v2/main/results/zethrenes/hz/index.md#calculations)
- [HZD](https://reksstudio.github.io/v2/main/results/zethrenes/hzd/index.md) · [inputs](https://reksstudio.github.io/v2/main/results/zethrenes/hzd/index.md#calculations)
- [FP](https://reksstudio.github.io/v2/main/results/zethrenes/fp/index.md) · [inputs](https://reksstudio.github.io/v2/main/results/zethrenes/fp/index.md#calculations)
- [PIF](https://reksstudio.github.io/v2/main/results/zethrenes/pif/index.md) · [inputs](https://reksstudio.github.io/v2/main/results/zethrenes/pif/index.md#calculations)
- [IFD](https://reksstudio.github.io/v2/main/results/zethrenes/ifd/index.md) · [inputs](https://reksstudio.github.io/v2/main/results/zethrenes/ifd/index.md#calculations)
- [PF](https://reksstudio.github.io/v2/main/results/zethrenes/pf/index.md) · [inputs](https://reksstudio.github.io/v2/main/results/zethrenes/pf/index.md#calculations)
- [IF](https://reksstudio.github.io/v2/main/results/zethrenes/if/index.md) · [inputs](https://reksstudio.github.io/v2/main/results/zethrenes/if/index.md#calculations)

### Photochemistry {#index-photochemistry}

#### [C<sub>2</sub>H<sub>4</sub> photochemistry](https://reksstudio.github.io/v2/main/results/c2h4-photochemistry/index.md) {#row-c2h4-photochemistry}

* [MECI](https://reksstudio.github.io/v2/main/results/c2h4-photochemistry/index.md#meci)
* [Torsion TS](https://reksstudio.github.io/v2/main/results/c2h4-photochemistry/index.md#ts)
* [Trajectory](https://reksstudio.github.io/v2/main/results/c2h4-photochemistry/index.md#trajectory)
* [Worked inputs (Manual: dynamics)](https://reksstudio.github.io/v2/manual/dynamics/index.md#dynamics-inputs)

### Cost and history {#index-cost-and-history}

#### [Cost](https://reksstudio.github.io/v2/main/cost/index.md)

* [Wall time against ORCA and Q-Chem](https://reksstudio.github.io/v2/main/cost/index.md#md-time-resp)
* [Inside Psi4](https://reksstudio.github.io/v2/main/cost/index.md#psi4)
* [Configuration count](https://reksstudio.github.io/v2/main/cost/index.md#count)
* [Catalogue](https://reksstudio.github.io/v2/main/cost/index.md#catalogue)
* [Largest run](https://reksstudio.github.io/v2/main/cost/index.md#largest-run)
* [One dynamics step](https://reksstudio.github.io/v2/main/cost/index.md#dynamics-step)

#### [History](https://reksstudio.github.io/v2/main/history/index.md)
