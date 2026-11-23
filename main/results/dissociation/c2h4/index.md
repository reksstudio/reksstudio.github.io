# C₂H₄: SSR(4,4) dissociation — REKS Studio

HTML: <https://reksstudio.github.io/main/results/dissociation/c2h4/>

Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/llms.txt>. Every page: `https://reksstudio.github.io/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/inputs/<file>.txt`.

# C<sub>2</sub>H<sub>4</sub>: SSR(4,4) dissociation

The ground-state PEC smoothly correlates the equilibrium geometry with the asymptotic energy of two isolated <sup>3</sup>B<sub>1</sub> methylene fragments, confirming accurate ground-state double-bond dissociation; near equilibrium, SSR(4,4) matches KS DFT, but KS DFT fails qualitatively at extended bond lengths, diverging unphysically upward.

BH\&HLYP/aug-cc-pVTZ · 18SI-4SA-REKS(4,4) · R 0.80–5.00 Å · 43 points

[Curves](#curves) · [Numbers](#numbers) · [Active orbitals](#orbitals) · [Twist](#twist) · [Calculations](#calculations)

![C₂H₄: drawing at R_e of S0](https://reksstudio.github.io/figures/dissociation/c2h4.svg)

Geometry at R<sub>e</sub> of S0.

* C
* H

## Curves

C₂H₄ SSR(4,4): S0 energy along R(C–C) from 0.8 to 5 Å, states A¹B2g, B¹B1u, C¹Ag, D¹Ag; natural occupations below

C₂H₄ SSR(4,4): S0 energy along R(C–C) from 0.8 to 5 Å, states A¹B2g, B¹B1u, C¹Ag, D¹Ag; natural occupations below

CH<sub>2</sub> limits: <sup>3</sup>B<sub>1</sub> ROKS −78.278 · <sup>1</sup>A<sub>1</sub> SSR(2,2) −78.236 · <sup>1</sup>B<sub>1</sub> SSR(2,2) −78.189 E<sub>h</sub>

SSR(4,4) potential energy curves (PECs) of singlet states of C<sub>2</sub>H<sub>4</sub> under C=C bond stretch with fixed experimental geometry \[[Craig et al. 2006](https://reksstudio.github.io/manual/reference/index.md#craig2006-ethylene)]. Symmetries: <sup>1</sup>A<sub>g</sub> (blue), <sup>1</sup>B<sub>1u</sub> (red), and <sup>1</sup>B<sub>2g</sub> (green) for the named states; KS DFT (dashed grey). Short dashed lines show asymptotic energies of two CH<sub>2</sub> fragments (<sup>3</sup>B<sub>1</sub>, <sup>1</sup>A<sub>1</sub>, <sup>1</sup>B<sub>1</sub>). Gray arrow: vertical B<sup>1</sup>B<sub>1u</sub> ← X<sup>1</sup>A<sub>g</sub> transition compared with the theoretical best estimate (TBE) \[[Véril et al. 2021](https://reksstudio.github.io/manual/reference/index.md#veril2021-questdb)].

At equilibrium, SSR(4,4) predicts the vertical excitation energy to B<sup>1</sup>B<sub>1u</sub> at 7.85 eV, close to the TBE value of 7.93 eV \[[Véril et al. 2021](https://reksstudio.github.io/manual/reference/index.md#veril2021-questdb)]. This state dissociates into two <sup>1</sup>B<sub>1</sub> methylenes; since two such states form two distinct linear combinations, a second excited state (D<sup>1</sup>A<sub>g</sub>) converges to the same asymptote, splitting by only 0.14 eV at 4.0 Å from in-phase/out-of-phase coupling. The A<sup>1</sup>B<sub>2g</sub> and C<sup>1</sup>A<sub>g</sub> states converge to the (<sup>1</sup>A<sub>1</sub>)CH<sub>2</sub> + (<sup>1</sup>A<sub>1</sub>)CH<sub>2</sub> limit; near equilibrium, A<sup>1</sup>B<sub>2g</sub> shows initial Rydberg character before an avoided crossing with a valence state of the same symmetry. All five singlet-state asymptotic energies map consistently onto the isolated-fragment energies, with minor discrepancies from differing state-averaging conditions. Overall, SSR(4,4) gives a quantitatively reliable, balanced description of multiple-bond dissociation across the full surface.

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

E(A<sup>1</sup>B<sub>2g</sub>), E(B<sup>1</sup>B<sub>1u</sub>), E(C<sup>1</sup>A<sub>g</sub>) and E(D<sup>1</sup>A<sub>g</sub>) columns from Fig. 3 \[[Komarov et al. 2026](https://reksstudio.github.io/manual/reference/index.md#komarov2026-reks-studio)]; n<sub>i</sub> computed.

## Active orbitals

Active orbitals and fractional occupations of C<sub>2</sub>H<sub>4</sub> at 4.000 Å.

One column per GVB pair, weakly occupied above strongly occupied; under each orbital its SA-REKS FON and orbital energy / E<sub>h</sub>. Contours ±0.03, ±0.06, ±0.12 a.u. in a plane 0.6 Å above the molecular plane; blue +, copper −.

R = 4.000 Å

(a, d)

![C₂H₄ R 4.000 Å, orbital d](https://reksstudio.github.io/figures/dissociation/orb/c2h4/R4.000_8A.svg)**d** · 0.8189\
−0.307122

![C₂H₄ R 4.000 Å, orbital a](https://reksstudio.github.io/figures/dissociation/orb/c2h4/R4.000_7A.svg)**a** · 1.1811\
−0.320778

(b, c)

![C₂H₄ R 4.000 Å, orbital c](https://reksstudio.github.io/figures/dissociation/orb/c2h4/R4.000_10A.svg)**c** · 0.9592\
−0.247037

![C₂H₄ R 4.000 Å, orbital b](https://reksstudio.github.io/figures/dissociation/orb/c2h4/R4.000_9A.svg)**b** · 1.0408\
−0.250236

## Twist

One CH<sub>2</sub> turns rigidly about the C–C axis. States: N π<sup>2</sup> (S0 above), T <sup>3</sup>ππ\*, V <sup>1</sup>ππ\* (B<sup>1</sup>B<sub>1u</sub> above), Z π\*<sup>2</sup>. At 90° π and π\* become degenerate, and N and Z reach one electron in each, the occupation T and V keep at every angle.

BH\&HLYP/def2-TZVP · 18SI/11SI-4SA-REKS(4,4) · θ 0–90° · 30 points

C₂H₄ rigid twist, θ 0–90°: SSR(4,4) energies of N, T, V, Z from N at 0° with MRCI+Q points and the KS DFT ground state; orbital energies of b (π) and c (π\*); occupations of b and c in N with MRCI natural occupations. Values in the table below.

Twist angle

\[x] 0° \[ ] \[ ] \[ ] 15° \[ ] \[ ] \[ ] 30° \[ ] \[ ] \[ ] 45° \[ ] \[ ] \[ ] 60° \[ ] \[ ] \[ ] 75° \[ ] \[ ] \[ ] 90°

Lines SSR(4,4); circles MRCI+Q, squares EOM-SF-CCSD: energies and natural occupations of N; energies from each method's N at 0°. Up to 45° the SSR occupations of N stay nearer 2 and 0 than MRCI (0°: 1.98/0.02 against 1.91/0.07): dynamic correlation enters SSR through the functional, not the occupations.

orbitals: φ 0

Isosurface ±0.05 a.u., blue +, copper −; grey H: the CH<sub>2</sub> that turns. The φ slider turns only the pictures. Bars: b from below, c from above, as SA-REKS FON and in N, T, V, Z; dashed: one electron in each. σ and σ\* stay within 0.01 of 2 and 0. [ε](https://reksstudio.github.io/manual/concepts/index.md#orbitals-scf): SA-REKS orbital energy.

Barrier E<sub>N</sub>(90°) − E<sub>N</sub>(0°): SSR(4,4) 71.3 · MRCI+Q 74.7 · EOM-SF-CCSD 74.8 · KS DFT 102.0 kcal/mol

SSR(4,4) − MRCI+Q at the MRCI+Q angles (circles), mean/max |Δ|: N 0.08/0.17 · T 0.22/0.31 · V 0.24/0.52 · Z 0.13/0.23 eV

| Method | Program | Time / s | Time / RKS |
| - | - | - | - |
| KS DFT (RKS) | Psi4 | 3.4 | 1.00 |
| SSR(4,4), energies | Psi4 | 4.1 | 1.19 |
| MRCI+Q, CAS(2,2) reference | ORCA 6.0.0 | 24.3 | 7.06 |
| EOM-SF-CCSD, 10 roots | Q-Chem 6.4 | 188.2 | 54.68 |

Wall time per geometry, def2-TZVP, median at θ = 60° and 85°; one machine, the same number of cores. Mean over the full turn, 149 angles: SSR(4,4) 5.0 s, KS DFT 3.5 s, ratio 1.45. One small molecule: the ratios do not carry over to larger systems.

Table: energies, FON, orbital energies and occupations at every angle

| θ / ° | SSR N / eV | SSR T / eV | SSR V / eV | SSR Z / eV | MRCI+Q N / eV | MRCI+Q T / eV | MRCI+Q V / eV | MRCI+Q Z / eV | EOM-SF-CCSD N / eV | EOM-SF-CCSD T / eV | EOM-SF-CCSD V / eV | EOM-SF-CCSD Z / eV | KS DFT / eV | FON b | ε<sub>b</sub> / eV | ε<sub>c</sub> / eV | n<sub>b</sub> (N) | n<sub>c</sub> (N) | MRCI HONO (N) | MRCI LUNO (N) | EOM-SF HONO (N) | EOM-SF LUNO (N) |
| - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - | - |
| 0 | 0.000 | 4.235 | 7.866 | 12.788 | 0.000 | 4.549 | 8.384 | | 0.000 | 4.596 | 8.398 | | 0.000 | 1.995 | −10.271 | −3.999 | 1.982 | 0.018 | 1.908 | 0.075 | 1.910 | 0.075 |
| 5 | 0.014 | 4.250 | 7.814 | 12.712 | | | | | | | | | 0.014 | 1.996 | −10.250 | −4.020 | 1.982 | 0.018 | | | | |
| 10 | 0.056 | 4.272 | 7.677 | 12.501 | | | | | | | | | 0.056 | 1.997 | −10.187 | −4.078 | 1.984 | 0.016 | | | | |
| 15 | 0.123 | 4.265 | 7.494 | 12.189 | 0.121 | 4.444 | 7.958 | 12.365 | 0.123 | 4.489 | 7.927 | | 0.127 | 1.997 | −10.084 | −4.166 | 1.985 | 0.015 | 1.906 | 0.076 | 1.908 | 0.078 |
| 20 | 0.216 | 4.222 | 7.290 | 11.799 | | | | | | | | | 0.226 | 1.997 | −9.950 | −4.278 | 1.986 | 0.014 | | | | |
| 25 | 0.336 | 4.146 | 7.079 | 11.352 | | | | | | | | | 0.352 | 1.997 | −9.790 | −4.410 | 1.986 | 0.015 | | | | |
| 30 | 0.482 | 4.048 | 6.869 | 10.863 | 0.481 | 4.172 | 7.241 | 10.904 | 0.485 | 4.218 | 7.321 | | 0.507 | 1.997 | −9.612 | −4.560 | 1.985 | 0.015 | 1.900 | 0.083 | 1.900 | 0.086 |
| 35 | 0.654 | 3.937 | 6.666 | 10.344 | | | | | | | | | 0.690 | 1.996 | −9.421 | −4.728 | 1.983 | 0.017 | | | | |
| 36 | 0.691 | 3.913 | 6.626 | 10.238 | | | | | | | | | 0.730 | 1.996 | −9.382 | −4.763 | 1.982 | 0.018 | | | | |
| 37 | 0.729 | 3.890 | 6.587 | 10.131 | | | | | | | | | 0.771 | 1.995 | −9.342 | −4.799 | 1.981 | 0.019 | | | | |
| 38 | 0.769 | 3.866 | 6.549 | 10.023 | | | | | | | | | 0.813 | 1.995 | −9.302 | −4.836 | 1.981 | 0.019 | | | | |
| 39 | 0.809 | 3.842 | 6.511 | 9.915 | | | | | | | | | 0.856 | 1.994 | −9.262 | −4.873 | 1.980 | 0.020 | | | | |
| 40 | 0.850 | 3.818 | 6.474 | 9.806 | | | | | | | | | 0.900 | 1.994 | −9.221 | −4.911 | 1.979 | 0.021 | | | | |
| 41 | 0.891 | 3.793 | 6.437 | 9.697 | | | | | | | | | 0.945 | 1.993 | −9.180 | −4.950 | 1.978 | 0.022 | | | | |
| 42 | 0.934 | 3.769 | 6.401 | 9.587 | | | | | | | | | 0.992 | 1.992 | −9.139 | −4.990 | 1.977 | 0.023 | | | | |
| 43 | 0.977 | 3.745 | 6.365 | 9.477 | | | | | | | | | 1.039 | 1.991 | −9.098 | −5.030 | 1.976 | 0.024 | | | | |
| 44 | 1.021 | 3.720 | 6.331 | 9.366 | | | | | | | | | 1.088 | 1.990 | −9.057 | −5.071 | 1.974 | 0.026 | | | | |
| 45 | 1.066 | 3.696 | 6.297 | 9.256 | 1.066 | 3.834 | 6.621 | 9.351 | 1.073 | 3.886 | 6.741 | 9.373 | 1.138 | 1.988 | −9.016 | −5.114 | 1.973 | 0.028 | 1.882 | 0.102 | 1.882 | 0.105 |
| 50 | 1.294 | 3.572 | 6.143 | 8.693 | | | | | | | | | 1.402 | 1.973 | −8.814 | −5.346 | 1.958 | 0.042 | | | | |
| 55 | 1.520 | 3.440 | 6.032 | 8.112 | | | | | | | | | 1.693 | 1.927 | −8.634 | −5.650 | 1.925 | 0.075 | | | | |
| 60 | 1.755 | 3.313 | 5.963 | 7.564 | 1.847 | 3.531 | 6.157 | 7.796 | 1.854 | 3.587 | 6.284 | 7.867 | 2.010 | 1.855 | −8.477 | −6.024 | 1.877 | 0.123 | 1.832 | 0.152 | 1.835 | 0.153 |
| 65 | 2.012 | 3.210 | 5.902 | 7.087 | | | | | | | | | 2.352 | 1.779 | −8.321 | −6.373 | 1.820 | 0.180 | | | | |
| 70 | 2.282 | 3.128 | 5.851 | 6.679 | | | | | | | | | 2.720 | 1.697 | −8.164 | −6.690 | 1.749 | 0.251 | | | | |
| 75 | 2.552 | 3.064 | 5.811 | 6.347 | 2.724 | 3.327 | 5.871 | 6.419 | 2.728 | 3.385 | 5.997 | 6.501 | 3.111 | 1.600 | −8.006 | −6.979 | 1.653 | 0.347 | 1.656 | 0.327 | 1.672 | 0.317 |
| 80 | 2.806 | 3.018 | 5.785 | 6.097 | | | | | | | | | 3.526 | 1.477 | −7.854 | −7.238 | 1.515 | 0.485 | | | | |
| 85 | 3.010 | 2.988 | 5.772 | 5.938 | 3.172 | 3.263 | 5.785 | 5.815 | 3.172 | 3.322 | 5.911 | 5.905 | 3.964 | 1.298 | −7.714 | −7.455 | 1.309 | 0.691 | 1.287 | 0.697 | 1.307 | 0.682 |
| 87 | 3.064 | 2.981 | 5.771 | 5.901 | | | | | | | | | 4.145 | 1.196 | −7.666 | −7.524 | 1.198 | 0.802 | | | | |
| 88 | 3.081 | 2.979 | 5.770 | 5.887 | | | | | | | | | 4.237 | 1.136 | −7.644 | −7.553 | 1.135 | 0.865 | | | | |
| 89 | 3.091 | 2.978 | 5.770 | 5.879 | | | | | | | | | 4.330 | 1.070 | −7.622 | −7.579 | 1.068 | 0.932 | | | | |
| 90 | 3.094 | 2.978 | 5.770 | 5.876 | 3.239 | 3.255 | 5.766 | 5.708 | 3.243 | 3.314 | 5.900 | 5.814 | 4.424 | 1.000 | −7.601 | −7.601 | 0.998 | 1.003 | 0.992 | 0.992 | 0.995 | 0.995 |

## Calculations

### Stretch

For ethylene, SA-REKS(4,4) orbital optimization utilized a four-state ensemble comprising the PPS1, OSS1, and OSS2 singlet configurations alongside a high-spin (HS) quintet electronic configuration. Incorporating the high-spin quintet state accelerates SCF convergence and minimizes the total iteration count. The subsequent SI step included 18 configurations to comprehensively span all physical configurations arising from the two coupling schemes within the (4,4) active space. For the dissociation fragments, singlet state energies of CH<sub>2</sub> were computed using SSR(2,2) calculations restricted to the PPS1 and OSS1 configurations, whereas the ground triplet state was modelled via the spin-restricted open-shell Kohn-Sham (ROKS) method. All electronic structure calculations were performed using the BH\&HLYP density functional paired with the aug-cc-pVTZ basis set. The initial guess orbitals were obtained in a standard KS DFT calculation with the same density functional and basis set. The potential energy curves were scanned at an increment of 0.1 Å.

Method: SI-SA-REKS(4,4) = SSR(4,4); 18SI-4SA-REKS(4,4)

SA pool: PPS1 0.250000, OSS1 0.250000, OSS2 0.250000, all-α determinant 0.250000

SI: catalogue configuration set full; 2S = 0: 18 configurations

Functional, basis: BH\&HLYP/aug-cc-pVTZ

SCF: DF, energy/density thresholds 1.00e-07/1.00e-05, grid 75 × 302

Coordinate: R(C–C); planar D<sub>2h</sub>, CH<sub>2</sub> fixed at r(C–H) 1.0805 Å, ∠HCH 117.1° \[[Craig et al. 2006](https://reksstudio.github.io/manual/reference/index.md#craig2006-ethylene)]

R window: R 0.800–5.000 Å, 43 points

### Twist

Method: SI-SA-REKS(4,4) = SSR(4,4); 18SI-4SA-REKS(4,4) (N, V, Z); 11SI-4SA-REKS(4,4) (T)

SA pool: PPS1 0.250000, OSS1 0.250000, OSS2 0.250000, all-α determinant 0.250000

SI: catalogue configuration set full; 2S = 0: 18 configurations; 2S = 2: 11 configurations; 2S = 4: 1 configuration

Functional, basis: BH\&HLYP/def2-TZVP

SCF: DF, energy/density thresholds 1.00e-10/1.00e-08, grid SG1

Orbital solver: GVB-DIIS

Coordinate: θ, rigid twist of one CH<sub>2</sub> about C–C; r(C–C) 1.3305 Å, r(C–H) 1.0805 Å, ∠HCH 117.1° \[[Craig et al. 2006](https://reksstudio.github.io/manual/reference/index.md#craig2006-ethylene)]

Angles: θ 0–90°, 30 points

Reference: MRCI+Q/def2-TZVP, ORCA 6.0.0; SA-CASSCF(2,2) reference, Davidson correction · EOM-SF-CCSD/def2-TZVP, Q-Chem 6.4; ROHF triplet reference · C 1s frozen in both

Psi4: a5ccb08fa8

[← H<sub>10</sub>](https://reksstudio.github.io/main/results/dissociation/h10/index.md) · [Back to the curves](https://reksstudio.github.io/main/results/dissociation/index.md#c2h4) · [N<sub>2</sub> →](https://reksstudio.github.io/main/results/dissociation/n2/index.md)

[Install](https://reksstudio.github.io/docs/index.md#install) · [Manual: first calculation](https://reksstudio.github.io/manual/first-calculation/index.md#first-calculation) · [Contact](https://reksstudio.github.io/docs/index.md#contact)
