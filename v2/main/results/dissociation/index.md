# Bond dissociation: H2–H10, C2H4, N2, C2H2, C2 — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/dissociation/>

Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# Bond dissociation: H<sub>2</sub>–H<sub>10</sub>, C<sub>2</sub>H<sub>4</sub>, N<sub>2</sub>, C<sub>2</sub>H<sub>2</sub>, C<sub>2</sub>

SSR states along the bond coordinate against FCI in the same basis (H<sub>2</sub>–H<sub>8</sub>), near-exact reference points (C<sub>2</sub>) and experiment (C<sub>2</sub>H<sub>4</sub>, N<sub>2</sub>, C<sub>2</sub>), with their natural occupations.

Reference class: model vs near-exact theory (FCI); secondary: model vs experiment

9 systems · SSR(2,2)–(10,10) · 814 computed points along R

[Result](#result) · [Systems](#systems) · [Hydrogen chains](#h-chains) · [H<sub>10</sub>](#far-chains) · [Molecules](#molecules) · [Setup and reference](#setup)

## Result

We next tested chemical bond breaking, which forces a smooth transition from a single dominant electronic configuration around equilibrium geometry to a multiconfigurational structure at dissociation, which has been a long-standing stress test for computational methods. For simple hydrogen chains, in which two to eight hydrogen atoms are pulled apart simultaneously, our method's dissociation curves closely track near-exact reference calculations across all chain lengths tested.

Extending to real multi-bond chemistry, our method also correctly separates ethylene's carbon-carbon double bond, nitrogen's triple bond, and acetylene's triple bond into their correct fragments \[[Kuchitsu 1998](https://reksstudio.github.io/v2/manual/reference/index.md#kuchitsu1998-structures)] \[[Huber and Herzberg 1979](https://reksstudio.github.io/v2/manual/reference/index.md#huber1979-diatomic)], capturing subtleties such as an avoided crossing between two dissociation pathways in acetylene that a less complete treatment could miss \[[Siegbahn 1981](https://reksstudio.github.io/v2/manual/reference/index.md#siegbahn1981-acetylene)].

The most demanding case is the carbon dimer, C<sub>2</sub>, whose quadruple bond has remained a long-standing challenge in electronic structure theory \[[Shaik et al. 2013](https://reksstudio.github.io/v2/manual/reference/index.md#shaik2013-c2)]. Our calculations reproduce near-exact benchmark energies \[[Holmes et al. 2017](https://reksstudio.github.io/v2/manual/reference/index.md#holmes2017-shci)] and match the experimentally measured bond length and binding energy \[[Martin 1992](https://reksstudio.github.io/v2/manual/reference/index.md#martin1992-c2)] \[[Huber and Herzberg 1979](https://reksstudio.github.io/v2/manual/reference/index.md#huber1979-diatomic)]. Across all of these cases, spanning one to four breaking bonds, the method requires no case-by-case adjustment.

## Systems

* [![H₂: drawing at R_e of S0](https://reksstudio.github.io/v2/figures/dissociation/h2.svg)](#h2)

  [H<sub>2</sub>](https://reksstudio.github.io/v2/main/results/dissociation/h2/index.md) SSR(2,2)

  H₂: SSR S0 and FCI in the same basis along R

  SSR vs FCI, same basis

* [![H₄: drawing at R_e of S0](https://reksstudio.github.io/v2/figures/dissociation/h4.svg)](#h4)

  [H<sub>4</sub>](https://reksstudio.github.io/v2/main/results/dissociation/h4/index.md) SSR(4,4)

  H₄: SSR S0 and FCI in the same basis along R

  SSR vs FCI, same basis

* [![H₆: drawing at R_e of S0](https://reksstudio.github.io/v2/figures/dissociation/h6.svg)](#h6)

  [H<sub>6</sub>](https://reksstudio.github.io/v2/main/results/dissociation/h6/index.md) SSR(6,6)

  H₆: SSR S0 and FCI in the same basis along R

  SSR vs FCI, same basis

* [![H₈: drawing at R_e of S0](https://reksstudio.github.io/v2/figures/dissociation/h8.svg)](#h8)

  [H<sub>8</sub>](https://reksstudio.github.io/v2/main/results/dissociation/h8/index.md) SSR(8,8)

  H₈: SSR S0 and FCI in the same basis along R

  SSR vs FCI, same basis

* [![H₁₀: drawing at R_e of S0](https://reksstudio.github.io/v2/figures/dissociation/h10.svg)](#h10)

  [H<sub>10</sub>](https://reksstudio.github.io/v2/main/results/dissociation/h10/index.md) SSR(10,10)

  H₁₀: SSR S0 along R

  SSR; FCI out of reach

* [![C₂H₄: drawing at R_e of S0](https://reksstudio.github.io/v2/figures/dissociation/c2h4.svg)](#c2h4)

  [C<sub>2</sub>H<sub>4</sub>](https://reksstudio.github.io/v2/main/results/dissociation/c2h4/index.md) SSR(4,4)

  | | SSR | exp. |
  | - | - | - |
  | R<sub>e</sub> Å | 1.333 | 1.3305 |

* [![N₂: drawing at R_e of S0](https://reksstudio.github.io/v2/figures/dissociation/n2.svg)](#n2)

  [N<sub>2</sub>](https://reksstudio.github.io/v2/main/results/dissociation/n2/index.md) SSR(6,6)

  | | SSR | exp. |
  | - | - | - |
  | R<sub>e</sub> Å | 1.096 | 1.0977 |

* [![C₂H₂: drawing at R_e of S0](https://reksstudio.github.io/v2/figures/dissociation/c2h2.svg)](#c2h2)

  [C<sub>2</sub>H<sub>2</sub>](https://reksstudio.github.io/v2/main/results/dissociation/c2h2/index.md) SSR(6,6)

  | | SSR |
  | - | - |
  | R<sub>e</sub> Å | 1.205 |

* [![C₂: drawing at R_e of S0](https://reksstudio.github.io/v2/figures/dissociation/c2.svg)](#c2)

  [C<sub>2</sub>](https://reksstudio.github.io/v2/main/results/dissociation/c2/index.md) SSR(6,6)

  | | SSR | exp. |
  | - | - | - |
  | R<sub>e</sub> Å | 1.268 | 1.2425 |
  | D<sub>e</sub> eV | 6.29 | 6.32 ± 0.2 |

- C
- N
- H

Each card leads to its curve; each system page holds the stored SI states and the per-point data.

## Hydrogen chains against FCI in the same basis

H2: active orbitals along the dissociation

H<sub>2</sub>: both active orbitals

H8: active orbitals along the dissociation

H<sub>8</sub>: frontier pair (d, e)

Active SA-REKS orbitals along the bond coordinate, R = 1.0–4.5 Å: contour slices through the chain axis (±0.03, ±0.06, ±0.12 a.u.; blue +, copper −); right: n of S0 of the natural orbital each orbital dominates.

[H₂ SSR(2,2): S0 energy along R(H–H) from 0.5 to 5 Å with FCI in the same basis; natural occupations below; numbers in the setup line and on the system page](https://reksstudio.github.io/v2/main/results/dissociation/h2/index.md)

BH\&HLYP/aug-cc-pVTZ · 3SA-REKS(2,2) · R 0.50–5.00 Å · 91 points · FCI 46

[H<sub>2</sub>: 1 of 3 SI states and the per-point data →](https://reksstudio.github.io/v2/main/results/dissociation/h2/index.md)

[H₄ SSR(4,4): S0 energy along R(H–H) from 0.5 to 5 Å with FCI in the same basis; natural occupations below; numbers in the setup line and on the system page](https://reksstudio.github.io/v2/main/results/dissociation/h4/index.md)

BH\&HLYP/aug-cc-pVTZ · 18SI-4SA-REKS(4,4) · R 0.50–5.00 Å · 92 points · FCI 11

[H<sub>4</sub>: 3 of 16 SI states and the per-point data →](https://reksstudio.github.io/v2/main/results/dissociation/h4/index.md)

[H₆ SSR(6,6): S0 energy along R(H–H) from 0.7 to 4.65 Å with FCI in the same basis; natural occupations below; numbers in the setup line and on the system page](https://reksstudio.github.io/v2/main/results/dissociation/h6/index.md)

BH\&HLYP/6-31G(d) · 161SI-5SA-REKS(6,6) · R 0.70–4.65 Å · 80 points · FCI 40

[H<sub>6</sub>: 6 of 100 SI states and the per-point data →](https://reksstudio.github.io/v2/main/results/dissociation/h6/index.md)

[H₈ SSR(8,8): S0 energy along R(H–H) from 0.7 to 4.925 Å with FCI in the same basis; natural occupations below; numbers in the setup line and on the system page](https://reksstudio.github.io/v2/main/results/dissociation/h8/index.md)

BH\&HLYP/6-31G(d) · 1934SI-6SA-REKS(8,8) · R 0.70–4.925 Å · 171 points · FCI 43

[H<sub>8</sub>: 26 of 100 SI states and the per-point data →](https://reksstudio.github.io/v2/main/results/dissociation/h8/index.md)

SSR(n,n) description of concerted dissociation of H–H bonds in hydrogen chains H<sub>n</sub>. Potential energy curves (PECs) for H<sub>2</sub> from SSR(2,2)/BH\&HLYP/aug-cc-pVTZ (solid line), KS-DFT (dashed grey), and full configuration interaction (FCI; circles); the short dashed segment marks the energy of isolated atoms. PECs for H<sub>4</sub>, H<sub>6</sub> and H<sub>8</sub> from SSR(n,n)/BH\&HLYP compared with FCI. H<sub>4</sub> uses the aug-cc-pVTZ basis set for both SSR and FCI; H<sub>6</sub> and H<sub>8</sub> use 6-31G\*, a smaller basis set required because FCI becomes computationally intractable for larger ones. Triangles denote single-point FCI references computed with larger basis sets: aug-cc-pVDZ (H<sub>6</sub>) and cc-pVDZ (H<sub>8</sub>). Since FCI with a small basis set cannot fully capture the correlation energy, the FCI curves of H<sub>6</sub> and H<sub>8</sub> lie somewhat above the corresponding SSR curves. DFT-based methods are less sensitive to basis set size than FCI \[[Goerigk and Grimme 2011](https://reksstudio.github.io/v2/manual/reference/index.md#goerigk2011-benchmark)] \[[Bursch et al. 2022](https://reksstudio.github.io/v2/manual/reference/index.md#bursch2022-protocols)], so the depth of the SSR minima at equilibrium geometries agrees better with the FCI single-point values obtained at the larger basis sets. Lower panels: natural occupations n<sub>i</sub> of S0; dotted: R<sub>e</sub> of S0.

## H<sub>10</sub>: FCI out of reach at this size

[H₁₀ SSR(10,10): S0 energy along R(H–H) from 0.7 to 4.8 Å; natural occupations below; numbers in the setup line and on the system page](https://reksstudio.github.io/v2/main/results/dissociation/h10/index.md)

BH\&HLYP/6-31G(d) · 29082SI-7SA-REKS(10,10) · R 0.70–4.80 Å · 83 points · FCI out of reach at this size

[H<sub>10</sub>: 81 of 150 SI states and the per-point data →](https://reksstudio.github.io/v2/main/results/dissociation/h10/index.md)

## Molecules

[C₂H₄ SSR(4,4): S0 energy along R(C–C) from 0.8 to 5 Å, states A¹B2g, B¹B1u, C¹Ag, D¹Ag; natural occupations below; numbers in the setup line and on the system page](https://reksstudio.github.io/v2/main/results/dissociation/c2h4/index.md)

R<sub>e</sub> 1.333 Å (rigid R<sub>CC</sub> scan) · exp. 1.3305 Å (r<sub>e</sub>)

BH\&HLYP/aug-cc-pVTZ · 18SI-4SA-REKS(4,4) · R 0.80–5.00 Å · 43 points

CH<sub>2</sub> limits: <sup>3</sup>B<sub>1</sub> ROKS −78.278 · <sup>1</sup>A<sub>1</sub> SSR(2,2) −78.236 · <sup>1</sup>B<sub>1</sub> SSR(2,2) −78.189 E<sub>h</sub>

SSR(4,4) potential energy curves (PECs) of singlet states of C<sub>2</sub>H<sub>4</sub> under C=C bond stretch with fixed experimental geometry \[[Craig et al. 2006](https://reksstudio.github.io/v2/manual/reference/index.md#craig2006-ethylene)]. Symmetries: <sup>1</sup>A<sub>g</sub> (blue), <sup>1</sup>B<sub>1u</sub> (red), and <sup>1</sup>B<sub>2g</sub> (green) for the named states; KS DFT (dashed grey). Short dashed lines show asymptotic energies of two CH<sub>2</sub> fragments (<sup>3</sup>B<sub>1</sub>, <sup>1</sup>A<sub>1</sub>, <sup>1</sup>B<sub>1</sub>). Gray arrow: vertical B<sup>1</sup>B<sub>1u</sub> ← X<sup>1</sup>A<sub>g</sub> transition compared with the theoretical best estimate (TBE) \[[Véril et al. 2021](https://reksstudio.github.io/v2/manual/reference/index.md#veril2021-questdb)].

[C<sub>2</sub>H<sub>4</sub>: 7 of 16 SI states and the per-point data →](https://reksstudio.github.io/v2/main/results/dissociation/c2h4/index.md)

[N₂ SSR(6,6): S0 energy along R(N–N) from 0.8 to 4 Å; natural occupations below; numbers in the setup line and on the system page](https://reksstudio.github.io/v2/main/results/dissociation/n2/index.md)

R<sub>e</sub> 1.096 Å (Fig. 3) · exp. 1.0977 Å (r<sub>e</sub>)

BH\&HLYP/aug-cc-pVTZ · 161SI-5SA-REKS(6,6) · R 0.80–4.00 Å · curves: Fig. 3 \[[Komarov et al. 2026](https://reksstudio.github.io/v2/manual/reference/index.md#komarov2026-reks-studio)]

SSR(6,6) PECs of singlet states of N<sub>2</sub>: ground X<sup>1</sup>Σ<sub>g</sub><sup>+</sup> (solid), unclassified excited states (thin), and KS DFT (dashed grey). Short dashed: asymptotic energy of two ground-state (<sup>4</sup>S) N atoms. Gray arrow: lowest vertical excitation vs. TBE \[[Véril et al. 2021](https://reksstudio.github.io/v2/manual/reference/index.md#veril2021-questdb)]. Equilibrium N≡N bond lengths compared with experiment \[[Huber and Herzberg 1979](https://reksstudio.github.io/v2/manual/reference/index.md#huber1979-diatomic)].

[N<sub>2</sub>: S0, excited states and the per-point data →](https://reksstudio.github.io/v2/main/results/dissociation/n2/index.md)

[C₂H₂ SSR(6,6): S0 energy along R(C–C) from 0.8 to 5 Å, states S1; natural occupations below; numbers in the setup line and on the system page](https://reksstudio.github.io/v2/main/results/dissociation/c2h2/index.md)

R<sub>e</sub> 1.205 Å (rigid R<sub>CC</sub> scan)

BH\&HLYP/aug-cc-pVTZ · 161SI-5SA-REKS(6,6) · R 0.80–5.00 Å · 85 points

Singlet PECs of acetylene under C≡C stretch with fixed experimental C–H bonds \[[Kuchitsu 1998](https://reksstudio.github.io/v2/manual/reference/index.md#kuchitsu1998-structures)]. Short dashed lines: asymptotic energies of two C–H fragments in ground (<sup>2</sup>Π) and lowest excited (<sup>4</sup>Σ<sup>−</sup>) states. Lower panel: natural occupations of S0 (solid) and S1 (dashed). Thin vertical lines: S0 changes state; dashed ticks: S1.

[C<sub>2</sub>H<sub>2</sub>: 48 of 256 SI states and the per-point data →](https://reksstudio.github.io/v2/main/results/dissociation/c2h2/index.md)

### C<sub>2</sub>

* S0 (X<sup>1</sup>Σ<sub>g</sub><sup>+</sup> at R<sub>e</sub>)
* a<sup>3</sup>Π<sub>u</sub>
* A<sup>1</sup>Π<sub>u</sub>
* B<sup>1</sup>Δ<sub>g</sub>
* ○ △ reference points
* ◇ experiment

[C₂ SSR(6,6): S0 energy along R(C–C) from 0.8 to 5 Å with near-exact reference points, states a³Πu, A¹Πu, B¹Δg; natural occupations below; numbers in the setup line and on the system page](https://reksstudio.github.io/v2/main/results/dissociation/c2/index.md)

| Quantity | SSR | Experiment |
| - | - | - |
| R<sub>e</sub> X<sup>1</sup>Σ<sub>g</sub><sup>+</sup> / Å | 1.268 | 1.2425 |
| R<sub>e</sub> a<sup>3</sup>Π<sub>u</sub> / Å | 1.314 | 1.3119 |
| R<sub>e</sub> A<sup>1</sup>Π<sub>u</sub> / Å | 1.303 | 1.3184 |
| R<sub>e</sub> B<sup>1</sup>Δ<sub>g</sub> / Å | 1.375 | 1.3855 |
| T<sub>e</sub> a<sup>3</sup>Π<sub>u</sub> / eV | 0.03 | 0.09 |
| T<sub>e</sub> A<sup>1</sup>Π<sub>u</sub> / eV | 0.92 | 1.04 |
| T<sub>e</sub> B<sup>1</sup>Δ<sub>g</sub> / eV | 1.01 | 1.50 |
| D<sub>e</sub> X<sup>1</sup>Σ<sub>g</sub><sup>+</sup> / eV | 6.29 | 6.32 ± 0.2 |

M08-SO/cc-pV5Z · 161SI-9SA-REKS(6,6) · R 0.80–5.00 Å · 169 points · reference points 46

[C<sub>2</sub>: 13 of 256 SI states and the per-point data →](https://reksstudio.github.io/v2/main/results/dissociation/c2/index.md)

Calculated potential energy curves of the singlet and lowest-lying triplet electronic states of C<sub>2</sub> obtained by the SSR(6,6) method. The ground X<sup>1</sup>Σ<sub>g</sub><sup>+</sup> state (bold curve) is plotted alongside the a<sup>3</sup>Π<sub>u</sub> triplet (magenta), A<sup>1</sup>Π<sub>u</sub> (red), and B<sup>1</sup>Δ<sub>g</sub> (green) singlet excited states, with unclassified higher-energy singlet excited states indicated by thin curves. Lower panel: natural occupation numbers of the active orbitals mapped along the bond dissociation coordinate of the ground state S0. The calculated equilibrium bond length (R<sub>e</sub>) is indicated by the vertical dotted line. Table: quantitative comparison of calculated equilibrium bond lengths (R<sub>e</sub>) and adiabatic excitation energies (T<sub>e</sub>) against experimental values \[[Martin 1992](https://reksstudio.github.io/v2/manual/reference/index.md#martin1992-c2)]. Ground-state electronic dissociation energy (D<sub>e</sub>) benchmarks are taken from standard reference \[[Huber and Herzberg 1979](https://reksstudio.github.io/v2/manual/reference/index.md#huber1979-diatomic)]. Reference points: SHCI extrapolated to the FCI limit, frozen core, cc-pV5Z \[[Holmes et al. 2017](https://reksstudio.github.io/v2/manual/reference/index.md#holmes2017-shci)], shifted by −89.23 mE<sub>h</sub>.

## Setup and reference

### Definitions

R<sub>e</sub>, E<sub>min</sub>: minimum of the quartic through the 5 grid points around the lowest one; B<sup>1</sup>Δ<sub>g</sub> of C<sub>2</sub>: the lowest grid point.

T<sub>e</sub> = E<sub>min</sub>(state) − E<sub>min</sub>(S0)

D<sub>e</sub>(C<sub>2</sub>) = 2 E(C <sup>3</sup>P) − E<sub>min</sub>(S0)

E(C <sup>3</sup>P): SSR(4,4)/M08-SO/cc-pV5Z, 2 E(C) = −75.6661374 E<sub>h</sub> \[[Komarov et al. 2026](https://reksstudio.github.io/v2/manual/reference/index.md#komarov2026-reks-studio), SI].

Separated fragments n E(H): the high-spin ROKS chain at R<sub>max</sub>; molecules: fragments at each segment; methods in the setup line.

n<sub>i</sub>: natural occupations of the SSR state (eigenvalues of its active one-particle density, unrelaxed; [Manual, natural orbitals](https://reksstudio.github.io/v2/manual/properties/index.md#natural-orbitals)), summing to the number of active electrons. FON: fractional occupation of an SA-REKS orbital; n<sub>i</sub> above is a property of the SSR state. Energies in E<sub>h</sub>, T<sub>e</sub> and D<sub>e</sub> in eV, R in Å.

### Setup

Functional/basis: BH\&HLYP/aug-cc-pVTZ: H<sub>2</sub>, H<sub>4</sub>, C<sub>2</sub>H<sub>4</sub>, N<sub>2</sub>, C<sub>2</sub>H<sub>2</sub>; BH\&HLYP/6-31G(d) (on H: 6-31G): H<sub>6</sub>, H<sub>8</sub>, H<sub>10</sub>; M08-SO/cc-pV5Z: C<sub>2</sub>

SA pool: PPS1 + OSS1…OSS(M/2) + all-α determinant, equal weights: H<sub>2</sub>, H<sub>4</sub>, H<sub>6</sub>, H<sub>8</sub>, H<sub>10</sub>, C<sub>2</sub>H<sub>4</sub>, N<sub>2</sub>, C<sub>2</sub>H<sub>2</sub>; C<sub>2</sub>: PPS1, OSS1, OSS2, OSS3, T_PPS8, T_PPS14, T_PPS12, T_PPS18, all-α determinant; 9 states, 0.111111 each

SI: H<sub>2</sub> 3SA-REKS(2,2), H<sub>4</sub> 18SI-4SA-REKS(4,4), H<sub>6</sub> 161SI-5SA-REKS(6,6), H<sub>8</sub> 1934SI-6SA-REKS(8,8), H<sub>10</sub> 29082SI-7SA-REKS(10,10), C<sub>2</sub>H<sub>4</sub> 18SI-4SA-REKS(4,4), N<sub>2</sub> 161SI-5SA-REKS(6,6), C<sub>2</sub>H<sub>2</sub> 161SI-5SA-REKS(6,6), C<sub>2</sub> 161SI-9SA-REKS(6,6); C<sub>2</sub>H<sub>2</sub>, C<sub>2</sub>: 2S = 0, 2, 4, 6 with 161 / 153 / 41 / 1 configurations

### Reference

FCI (detci, all MOs, num_roots 1) in the basis of each chain: aug-cc-pVTZ: H<sub>2</sub>, H<sub>4</sub>; 6-31G(d): H<sub>6</sub>, H<sub>8</sub>.

FCI single points: aug-cc-pVDZ (H<sub>6</sub>, R 0.95 Å), cc-pVDZ (H<sub>8</sub>, R 0.80, 1.00 Å); detci, all MOs.

C<sub>2</sub>: Reference points: SHCI extrapolated to the FCI limit, frozen core, cc-pV5Z \[[Holmes et al. 2017](https://reksstudio.github.io/v2/manual/reference/index.md#holmes2017-shci)], shifted by −89.23 mE<sub>h</sub>.

Experiment: C<sub>2</sub>H<sub>4</sub> R<sub>e</sub> \[[Craig et al. 2006](https://reksstudio.github.io/v2/manual/reference/index.md#craig2006-ethylene)]; N<sub>2</sub> R<sub>e</sub>, C<sub>2</sub> D<sub>e</sub> \[[Huber and Herzberg 1979](https://reksstudio.github.io/v2/manual/reference/index.md#huber1979-diatomic)]; C<sub>2</sub> R<sub>e</sub>, T<sub>e</sub> \[[Martin 1992](https://reksstudio.github.io/v2/manual/reference/index.md#martin1992-c2)].

Vertical excitation, TBE: C<sub>2</sub>H<sub>4</sub> <sup>1</sup>B<sub>1u</sub> 7.93 eV, N<sub>2</sub> <sup>1</sup>Σ<sub>u</sub><sup>−</sup> 9.88 eV \[[Véril et al. 2021](https://reksstudio.github.io/v2/manual/reference/index.md#veril2021-questdb)]. C<sub>2</sub>H<sub>4</sub> named states, KS DFT, arrow and CH<sub>2</sub> limits; N<sub>2</sub> curves: Fig. 3 \[[Komarov et al. 2026](https://reksstudio.github.io/v2/manual/reference/index.md#komarov2026-reks-studio)].

## Run, ask, cite

* (8,8) and (10,10) catalogues are not installed; their inputs run on request. Ask via [Contact](https://reksstudio.github.io/v2/docs/index.md#contact).
* [Manual: Start](https://reksstudio.github.io/v2/manual/index.md#overview) · [Install](https://reksstudio.github.io/v2/docs/index.md#install) · [Cite](https://reksstudio.github.io/v2/docs/index.md#cite) · [Contact](https://reksstudio.github.io/v2/docs/index.md#contact)
* [Back to the Results index](https://reksstudio.github.io/v2/main/results/index.md#row-dissociation)

Other results: [Exactness](https://reksstudio.github.io/v2/main/results/exactness/index.md) · [QUEST](https://reksstudio.github.io/v2/main/results/quest/index.md) · [TTR](https://reksstudio.github.io/v2/main/results/ttr/index.md) · [Zethrenes](https://reksstudio.github.io/v2/main/results/zethrenes/index.md) · [C<sub>2</sub>H<sub>4</sub> photochemistry](https://reksstudio.github.io/v2/main/results/c2h4-photochemistry/index.md)
