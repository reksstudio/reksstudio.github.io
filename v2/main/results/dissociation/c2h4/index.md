# C₂H₄: SSR(4,4) dissociation — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/dissociation/c2h4/>

Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# C<sub>2</sub>H<sub>4</sub>: SSR(4,4) dissociation

The ground-state PEC smoothly correlates the equilibrium geometry with the asymptotic energy of two isolated <sup>3</sup>B<sub>1</sub> methylene fragments, confirming accurate ground-state double-bond dissociation; near equilibrium, SSR(4,4) matches KS DFT, but KS DFT fails qualitatively at extended bond lengths, diverging unphysically upward.

BH\&HLYP/aug-cc-pVTZ · 18SI-4SA-REKS(4,4) · R 0.80–5.00 Å · 43 points

[Curves](#curves) · [Numbers](#numbers) · [Active orbitals](#orbitals) · [Calculations](#calculations)

![C₂H₄: drawing at R_e of S0](https://reksstudio.github.io/v2/figures/dissociation/c2h4.svg)

Geometry at R<sub>e</sub> of S0.

* C
* H

## Curves

C₂H₄ SSR(4,4): S0 energy along R(C–C) from 0.8 to 5 Å, states A¹B2g, B¹B1u, C¹Ag, D¹Ag; natural occupations below

C₂H₄ SSR(4,4): S0 energy along R(C–C) from 0.8 to 5 Å, states A¹B2g, B¹B1u, C¹Ag, D¹Ag; natural occupations below

CH<sub>2</sub> limits: <sup>3</sup>B<sub>1</sub> ROKS −78.278 · <sup>1</sup>A<sub>1</sub> SSR(2,2) −78.236 · <sup>1</sup>B<sub>1</sub> SSR(2,2) −78.189 E<sub>h</sub>

SSR(4,4) potential energy curves (PECs) of singlet states of C<sub>2</sub>H<sub>4</sub> under C=C bond stretch with fixed experimental geometry \[[Craig et al. 2006](https://reksstudio.github.io/v2/manual/reference/index.md#craig2006-ethylene)]. Symmetries: <sup>1</sup>A<sub>g</sub> (blue), <sup>1</sup>B<sub>1u</sub> (red), and <sup>1</sup>B<sub>2g</sub> (green) for the named states; KS DFT (dashed grey). Short dashed lines show asymptotic energies of two CH<sub>2</sub> fragments (<sup>3</sup>B<sub>1</sub>, <sup>1</sup>A<sub>1</sub>, <sup>1</sup>B<sub>1</sub>). Gray arrow: vertical B<sup>1</sup>B<sub>1u</sub> ← X<sup>1</sup>A<sub>g</sub> transition compared with the theoretical best estimate (TBE) \[[Véril et al. 2021](https://reksstudio.github.io/v2/manual/reference/index.md#veril2021-questdb)].

At equilibrium, SSR(4,4) predicts the vertical excitation energy to B<sup>1</sup>B<sub>1u</sub> at 7.85 eV, close to the TBE value of 7.93 eV \[[Véril et al. 2021](https://reksstudio.github.io/v2/manual/reference/index.md#veril2021-questdb)]. This state dissociates into two <sup>1</sup>B<sub>1</sub> methylenes; since two such states form two distinct linear combinations, a second excited state (D<sup>1</sup>A<sub>g</sub>) converges to the same asymptote, splitting by only 0.14 eV at 4.0 Å from in-phase/out-of-phase coupling. The A<sup>1</sup>B<sub>2g</sub> and C<sup>1</sup>A<sub>g</sub> states converge to the (<sup>1</sup>A<sub>1</sub>)CH<sub>2</sub> + (<sup>1</sup>A<sub>1</sub>)CH<sub>2</sub> limit; near equilibrium, A<sup>1</sup>B<sub>2g</sub> shows initial Rydberg character before an avoided crossing with a valence state of the same symmetry. All five singlet-state asymptotic energies map consistently onto the isolated-fragment energies, with minor discrepancies from differing state-averaging conditions. Overall, SSR(4,4) gives a quantitatively reliable, balanced description of multiple-bond dissociation across the full surface.

## Numbers

R<sub>e</sub> 1.333 Å (rigid R<sub>CC</sub> scan) · exp. 1.3305 Å (r<sub>e</sub>)

Table: S0, named states and n<sub>i</sub> of S0 at every R

| R / Å | E(S0) / E<sub>h</sub> | E(A<sup>1</sup>B<sub>2g</sub>) / E<sub>h</sub> | E(B<sup>1</sup>B<sub>1u</sub>) / E<sub>h</sub> | E(C<sup>1</sup>A<sub>g</sub>) / E<sub>h</sub> | E(D<sup>1</sup>A<sub>g</sub>) / E<sub>h</sub> | n<sub>1</sub> | n<sub>2</sub> | n<sub>3</sub> | n<sub>4</sub> |
| - | - | - | - | - | - | - | - | - | - |
| 0.800 | -77.54459900 | | | | | 1.99997 | 1.99958 | 0.00045 | 0.00001 |
| 0.900 | -78.03698088 | | | | | 1.99995 | 1.99901 | 0.00103 | 0.00000 |
| 1.000 | -78.31338701 | -77.960 | -77.915 | | | 1.99995 | 1.99801 | 0.00203 | 0.00000 |
| 1.100 | -78.46016138 | -78.134 | -78.098 | -77.794 | -77.671 | 1.99994 | 1.99642 | 0.00363 | 0.00001 |
| 1.200 | -78.52931725 | -78.225 | -78.201 | -77.959 | -77.807 | 1.99995 | 1.99398 | 0.00606 | 0.00001 |
| 1.300 | -78.55248482 | -78.267 | -78.254 | -78.062 | -77.890 | 1.99996 | 1.99006 | 0.00998 | 0.00001 |
| 1.400 | -78.54976515 | -78.279 | -78.276 | -78.126 | -77.940 | 1.99997 | 1.98183 | 0.01819 | 0.00001 |
| 1.500 | -78.53466692 | -78.273 | -78.279 | -78.166 | -77.972 | 1.99993 | 1.95786 | 0.04214 | 0.00007 |
| 1.600 | -78.51219475 | -78.257 | -78.272 | -78.189 | -77.992 | 1.99966 | 1.92650 | 0.07349 | 0.00035 |
| 1.700 | -78.48649466 | -78.239 | -78.267 | -78.205 | -78.011 | 1.99870 | 1.89697 | 0.10302 | 0.00132 |
| 1.800 | -78.45981116 | -78.227 | -78.264 | -78.218 | -78.035 | 1.99639 | 1.86900 | 0.13097 | 0.00364 |
| 1.900 | -78.43298921 | -78.225 | -78.260 | -78.227 | -78.064 | 1.99225 | 1.84112 | 0.15884 | 0.00780 |
| 2.000 | -78.40715304 | -78.226 | -78.253 | -78.231 | -78.092 | 1.98613 | 1.81213 | 0.18781 | 0.01393 |
| 2.100 | -78.38325360 | -78.228 | -78.244 | -78.231 | -78.116 | 1.97754 | 1.78118 | 0.21874 | 0.02254 |
| 2.200 | -78.36209655 | -78.230 | -78.233 | -78.229 | -78.135 | 1.96291 | 1.74664 | 0.25328 | 0.03716 |
| 2.300 | -78.34481352 | -78.231 | -78.224 | -78.223 | -78.151 | 1.92113 | 1.70514 | 0.29473 | 0.07899 |
| 2.400 | -78.33005936 | -78.231 | -78.219 | -78.218 | -78.163 | 1.85660 | 1.65669 | 0.34206 | 0.14466 |
| 2.500 | -78.31734397 | -78.230 | -78.215 | -78.218 | -78.171 | 1.79233 | 1.57843 | 0.39402 | 0.23522 |
| 2.600 | -78.30734923 | -78.230 | -78.210 | -78.219 | -78.177 | 1.72596 | 1.47046 | 0.45281 | 0.35078 |
| 2.700 | -78.29975749 | -78.229 | -78.206 | -78.220 | -78.181 | 1.65816 | 1.35874 | 0.51397 | 0.46912 |
| 2.800 | -78.29475819 | -78.228 | -78.202 | -78.218 | -78.182 | 1.59739 | 1.31879 | 0.56625 | 0.51758 |
| 2.900 | -78.29091895 | -78.227 | -78.199 | -78.216 | -78.183 | 1.53941 | 1.28266 | 0.61521 | 0.56272 |
| 3.000 | -78.28793495 | -78.227 | -78.196 | -78.214 | -78.184 | 1.48516 | 1.24958 | 0.65995 | 0.60531 |
| 3.100 | -78.28562174 | -78.227 | -78.194 | -78.213 | -78.185 | 1.43541 | 1.22002 | 0.69986 | 0.64470 |
| 3.200 | -78.28382523 | -78.227 | -78.193 | -78.212 | -78.185 | 1.39033 | 1.19399 | 0.73495 | 0.68072 |
| 3.300 | -78.28245434 | -78.227 | -78.192 | -78.211 | -78.185 | 1.34977 | 1.17127 | 0.76553 | 0.71343 |
| 3.400 | -78.28141056 | -78.227 | -78.191 | -78.210 | -78.186 | 1.31340 | 1.15156 | 0.79205 | 0.74300 |
| 3.500 | -78.28061175 | -78.227 | -78.190 | -78.209 | -78.186 | 1.28084 | 1.13448 | 0.81500 | 0.76967 |
| 3.600 | -78.28000082 | -78.227 | -78.190 | -78.209 | -78.186 | 1.25179 | 1.11972 | 0.83484 | 0.79365 |
| 3.700 | -78.27953635 | -78.227 | -78.190 | -78.208 | -78.186 | 1.22585 | 1.10694 | 0.85203 | 0.81517 |
| 3.800 | -78.27918993 | -78.228 | -78.191 | -78.208 | -78.186 | 1.20270 | 1.09583 | 0.86697 | 0.83449 |
| 3.900 | -78.27893375 | -78.228 | -78.191 | -78.208 | -78.186 | 1.18211 | 1.08620 | 0.87994 | 0.85174 |
| 4.000 | -78.27874506 | | | | | 1.16384 | 1.07785 | 0.89120 | 0.86711 |
| 4.100 | -78.27860856 | | | | | 1.14764 | 1.07058 | 0.90100 | 0.88077 |
| 4.200 | -78.27851261 | | | | | 1.13332 | 1.06426 | 0.90954 | 0.89288 |
| 4.300 | -78.27844426 | | | | | 1.12074 | 1.05879 | 0.91695 | 0.90353 |
| 4.400 | -78.27841088 | | | | | 1.10963 | 1.05400 | 0.92342 | 0.91295 |
| 4.500 | -78.27839546 | | | | | 1.09988 | 1.04984 | 0.92906 | 0.92122 |
| 4.600 | -78.27838925 | | | | | 1.09134 | 1.04621 | 0.93398 | 0.92847 |
| 4.700 | -78.27839118 | | | | | 1.08389 | 1.04307 | 0.93825 | 0.93480 |
| 4.800 | -78.27840132 | | | | | 1.07738 | 1.04033 | 0.94196 | 0.94033 |
| 4.900 | -78.27841895 | | | | | 1.07166 | 1.03794 | 0.94522 | 0.94519 |
| 5.000 | -78.27844219 | | | | | 1.06665 | 1.03585 | 0.94806 | 0.94944 |

E(A<sup>1</sup>B<sub>2g</sub>), E(B<sup>1</sup>B<sub>1u</sub>), E(C<sup>1</sup>A<sub>g</sub>) and E(D<sup>1</sup>A<sub>g</sub>) columns from Fig. 3 \[[Komarov et al. 2026](https://reksstudio.github.io/v2/manual/reference/index.md#komarov2026-reks-studio)]; n<sub>i</sub> computed.

## Active orbitals

Active orbitals and fractional occupations of C<sub>2</sub>H<sub>4</sub> at 4.000 Å.

One column per GVB pair, weakly occupied above strongly occupied; under each orbital its SA-REKS FON and orbital energy / E<sub>h</sub>. Contours ±0.03, ±0.06, ±0.12 a.u. in a plane 0.6 Å above the molecular plane; blue +, copper −.

R = 4.000 Å

(a, d)

![C₂H₄ R 4.000 Å, orbital d](https://reksstudio.github.io/v2/figures/dissociation/orb/c2h4/R4.000_8A.svg)**d** · 0.8189\
−0.307122

![C₂H₄ R 4.000 Å, orbital a](https://reksstudio.github.io/v2/figures/dissociation/orb/c2h4/R4.000_7A.svg)**a** · 1.1811\
−0.320778

(b, c)

![C₂H₄ R 4.000 Å, orbital c](https://reksstudio.github.io/v2/figures/dissociation/orb/c2h4/R4.000_10A.svg)**c** · 0.9592\
−0.247037

![C₂H₄ R 4.000 Å, orbital b](https://reksstudio.github.io/v2/figures/dissociation/orb/c2h4/R4.000_9A.svg)**b** · 1.0408\
−0.250236

## Calculations

For ethylene, SA-REKS(4,4) orbital optimization utilized a four-state ensemble comprising the PPS1, OSS1, and OSS2 singlet configurations alongside a high-spin (HS) quintet electronic configuration. Incorporating the high-spin quintet state accelerates SCF convergence and minimizes the total iteration count. The subsequent SI step included 18 configurations to comprehensively span all physical configurations arising from the two coupling schemes within the (4,4) active space. For the dissociation fragments, singlet state energies of CH<sub>2</sub> were computed using SSR(2,2) calculations restricted to the PPS1 and OSS1 configurations, whereas the ground triplet state was modelled via the spin-restricted open-shell Kohn-Sham (ROKS) method. All electronic structure calculations were performed using the BH\&HLYP density functional paired with the aug-cc-pVTZ basis set. The initial guess orbitals were obtained in a standard KS DFT calculation with the same density functional and basis set. The potential energy curves were scanned at an increment of 0.1 Å.

Method: SI-SA-REKS(4,4) = SSR(4,4); 18SI-4SA-REKS(4,4)

SA pool: PPS1 0.250000, OSS1 0.250000, OSS2 0.250000, all-α determinant 0.250000

SI: catalogue configuration set full; 2S = 0: 18 configurations

Functional, basis: BH\&HLYP/aug-cc-pVTZ

SCF: DF, energy/density thresholds 1.00e-07/1.00e-05, grid 75 × 302

Coordinate: R(C–C); planar D<sub>2h</sub>, CH<sub>2</sub> fixed at r(C–H) 1.0805 Å, ∠HCH 117.1° \[[Craig et al. 2006](https://reksstudio.github.io/v2/manual/reference/index.md#craig2006-ethylene)]

R window: R 0.800–5.000 Å, 43 points

[← H<sub>10</sub>](https://reksstudio.github.io/v2/main/results/dissociation/h10/index.md) · [Back to the curves](https://reksstudio.github.io/v2/main/results/dissociation/index.md#c2h4) · [N<sub>2</sub> →](https://reksstudio.github.io/v2/main/results/dissociation/n2/index.md)

[Install](https://reksstudio.github.io/v2/docs/index.md#install) · [Manual: first calculation](https://reksstudio.github.io/v2/manual/first-calculation/index.md#first-calculation) · [Contact](https://reksstudio.github.io/v2/docs/index.md#contact)
