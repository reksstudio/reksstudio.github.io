# H₄: SSR(4,4) dissociation — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/dissociation/h4/>

Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# H<sub>4</sub>: SSR(4,4) dissociation

For simple hydrogen chains, in which two to eight hydrogen atoms are pulled apart simultaneously, our method's dissociation curves closely track near-exact reference calculations across all chain lengths tested.

BH\&HLYP/aug-cc-pVTZ · 18SI-4SA-REKS(4,4) · R 0.50–5.00 Å · 92 points · FCI 11

[Curves](#curves) · [Numbers](#numbers) · [Calculations](#calculations)

![H₄: drawing at R_e of S0](https://reksstudio.github.io/v2/figures/dissociation/h4.svg)

Geometry at R<sub>e</sub> of S0.

* H

## Curves

H₄ SSR(4,4): S0 energy along R(H–H) from 0.5 to 5 Å with FCI in the same basis; natural occupations below

H₄ SSR(4,4): S0 energy along R(H–H) from 0.5 to 5 Å with FCI in the same basis; natural occupations below

PECs for H<sub>4</sub> from SSR(4,4)/BH\&HLYP compared with FCI (circles); KS-DFT (dashed grey); thin curves denote excited states, and the short dashed segment marks the energy of isolated atoms. H<sub>4</sub> uses the aug-cc-pVTZ basis set for both SSR and FCI. Lower panel: natural occupations n<sub>i</sub> of S0; dotted: R<sub>e</sub> of S0.

H4: active orbitals along the dissociation

Active SA-REKS orbitals φ(z) on the chain axis along the bond coordinate (z in units of R); bars: n of S0 of the natural orbital each orbital dominates.

## Numbers

Table: S0, reference and n<sub>i</sub> of S0 at every R

| R / Å | E(S0) / E<sub>h</sub> | E(FCI) / E<sub>h</sub> | n<sub>1</sub> | n<sub>2</sub> | n<sub>3</sub> | n<sub>4</sub> |
| - | - | - | - | - | - | - |
| 0.500 | -1.84443009 | | 1.99993 | 1.99981 | 0.00020 | 0.00006 |
| 0.550 | -1.99051187 | | 1.99989 | 1.99974 | 0.00032 | 0.00004 |
| 0.600 | -2.09298117 | | 1.99984 | 1.99958 | 0.00053 | 0.00004 |
| 0.650 | -2.16368719 | | 1.99977 | 1.99918 | 0.00103 | 0.00003 |
| 0.700 | -2.21197019 | | 1.99966 | 1.99871 | 0.00161 | 0.00002 |
| 0.750 | -2.24294542 | | 1.99953 | 1.99797 | 0.00248 | 0.00002 |
| 0.800 | -2.26119102 | -2.26919117 | 1.99939 | 1.99707 | 0.00351 | 0.00002 |
| 0.840 | -2.26881990 | | 1.99927 | 1.99628 | 0.00442 | 0.00002 |
| 0.850 | -2.26993101 | -2.27736857 | 1.99924 | 1.99608 | 0.00465 | 0.00002 |
| 0.900 | -2.27158042 | -2.27885476 | 1.99910 | 1.99501 | 0.00586 | 0.00003 |
| 0.950 | -2.26796498 | -2.27540186 | 1.99894 | 1.99387 | 0.00714 | 0.00005 |
| 1.000 | -2.26049132 | -2.26832351 | 1.99878 | 1.99263 | 0.00851 | 0.00008 |
| 1.050 | -2.25022223 | | 1.99859 | 1.99124 | 0.01002 | 0.00014 |
| 1.100 | -2.23799794 | | 1.99834 | 1.98958 | 0.01178 | 0.00030 |
| 1.150 | -2.22449268 | | 1.99795 | 1.98747 | 0.01396 | 0.00063 |
| 1.200 | -2.21021686 | -2.22062000 | 1.99730 | 1.98459 | 0.01685 | 0.00127 |
| 1.250 | -2.19555453 | | 1.99623 | 1.98055 | 0.02085 | 0.00237 |
| 1.300 | -2.18085705 | | 1.99452 | 1.97482 | 0.02650 | 0.00416 |
| 1.350 | -2.16642603 | | 1.99200 | 1.96683 | 0.03442 | 0.00676 |
| 1.400 | -2.15258553 | | 1.98847 | 1.95573 | 0.04547 | 0.01033 |
| 1.450 | -2.13958746 | | 1.98373 | 1.94057 | 0.06064 | 0.01506 |
| 1.500 | -2.12745477 | -2.13809343 | 1.97749 | 1.92118 | 0.08014 | 0.02119 |
| 1.550 | -2.11599163 | | 1.96971 | 1.89881 | 0.10272 | 0.02875 |
| 1.600 | -2.10512281 | | 1.96034 | 1.87455 | 0.12730 | 0.03781 |
| 1.650 | -2.09484111 | | 1.94932 | 1.84899 | 0.15329 | 0.04840 |
| 1.700 | -2.08515077 | | 1.93660 | 1.82251 | 0.18034 | 0.06055 |
| 1.750 | -2.07604755 | | 1.92211 | 1.79547 | 0.20814 | 0.07428 |
| 1.800 | -2.06752481 | | 1.90576 | 1.76822 | 0.23643 | 0.08958 |
| 1.850 | -2.05956101 | | 1.88747 | 1.74122 | 0.26487 | 0.10644 |
| 1.900 | -2.05215225 | | 1.86713 | 1.71479 | 0.29324 | 0.12485 |
| 1.950 | -2.04532012 | | 1.84486 | 1.68898 | 0.32131 | 0.14485 |
| 2.000 | -2.03910482 | -2.04579571 | 1.82105 | 1.66353 | 0.34875 | 0.16667 |
| 2.050 | -2.03354996 | | 1.79610 | 1.63810 | 0.37509 | 0.19071 |
| 2.100 | -2.02874236 | | 1.76988 | 1.61180 | 0.40094 | 0.21738 |
| 2.150 | -2.02482261 | | 1.74129 | 1.58323 | 0.42832 | 0.24716 |
| 2.200 | -2.02182435 | | 1.70883 | 1.55199 | 0.45826 | 0.28092 |
| 2.250 | -2.01944378 | | 1.67251 | 1.51941 | 0.48964 | 0.31844 |
| 2.300 | -2.01731107 | | 1.63461 | 1.48702 | 0.52096 | 0.35741 |
| 2.350 | -2.01532276 | | 1.59691 | 1.45532 | 0.55172 | 0.39605 |
| 2.400 | -2.01349289 | | 1.56008 | 1.42438 | 0.58182 | 0.43372 |
| 2.450 | -2.01183805 | | 1.52436 | 1.39429 | 0.61116 | 0.47020 |
| 2.500 | -2.01036858 | | 1.48981 | 1.36513 | 0.63965 | 0.50541 |
| 2.550 | -2.00906261 | | 1.45666 | 1.33715 | 0.66702 | 0.53917 |
| 2.600 | -2.00792339 | | 1.42484 | 1.31034 | 0.69328 | 0.57154 |
| 2.650 | -2.00692889 | | 1.39455 | 1.28491 | 0.71821 | 0.60232 |
| 2.700 | -2.00605933 | | 1.36590 | 1.26099 | 0.74168 | 0.63142 |
| 2.750 | -2.00529775 | | 1.33894 | 1.23861 | 0.76365 | 0.65880 |
| 2.800 | -2.00462878 | | 1.31364 | 1.21776 | 0.78414 | 0.68446 |
| 2.850 | -2.00403953 | | 1.29001 | 1.19843 | 0.80313 | 0.70842 |
| 2.900 | -2.00351871 | | 1.26806 | 1.18063 | 0.82064 | 0.73068 |
| 2.950 | -2.00303575 | | 1.24801 | 1.16454 | 0.83645 | 0.75099 |
| 3.000 | -2.00264726 | -2.00218857 | 1.22868 | 1.14914 | 0.85161 | 0.77057 |
| 3.050 | -2.00228664 | | 1.21104 | 1.13528 | 0.86526 | 0.78842 |
| 3.100 | -2.00196436 | | 1.19468 | 1.12257 | 0.87777 | 0.80497 |
| 3.150 | -2.00167468 | | 1.17951 | 1.11095 | 0.88923 | 0.82031 |
| 3.200 | -2.00141044 | | 1.16537 | 1.10028 | 0.89976 | 0.83459 |
| 3.250 | -2.00117168 | | 1.15221 | 1.09052 | 0.90939 | 0.84787 |
| 3.300 | -2.00095292 | | 1.13988 | 1.08154 | 0.91827 | 0.86031 |
| 3.350 | -2.00082473 | | 1.13045 | 1.07472 | 0.92501 | 0.86982 |
| 3.400 | -2.00058239 | | 1.11741 | 1.06568 | 0.93397 | 0.88294 |
| 3.450 | -2.00047991 | | 1.10965 | 1.06026 | 0.93934 | 0.89075 |
| 3.500 | -2.00030543 | | 1.09752 | 1.05236 | 0.94719 | 0.90294 |
| 3.550 | -2.00022811 | | 1.09109 | 1.04801 | 0.95149 | 0.90941 |
| 3.600 | -2.00012851 | | 1.07984 | 1.04126 | 0.95822 | 0.92067 |
| 3.650 | -2.00007155 | | 1.07450 | 1.03778 | 0.96169 | 0.92604 |
| 3.700 | -2.00004639 | | 1.06432 | 1.03231 | 0.96716 | 0.93622 |
| 3.750 | -2.00000172 | | 1.05992 | 1.02951 | 0.96995 | 0.94062 |
| 3.800 | -1.99995258 | | 1.05572 | 1.02693 | 0.97256 | 0.94479 |
| 3.850 | -2.00006540 | | 1.04554 | 1.02282 | 0.97668 | 0.95495 |
| 3.900 | -2.00002894 | | 1.04226 | 1.02075 | 0.97877 | 0.95822 |
| 3.950 | -1.99998447 | | 1.03926 | 1.01886 | 0.98067 | 0.96120 |
| 4.000 | -2.00023010 | -1.99950525 | 1.03185 | 1.01718 | 0.98240 | 0.96857 |
| 4.050 | -2.00020914 | | 1.02934 | 1.01557 | 0.98403 | 0.97105 |
| 4.100 | -2.00017620 | | 1.02711 | 1.01408 | 0.98554 | 0.97327 |
| 4.150 | -2.00014125 | | 1.02506 | 1.01270 | 0.98693 | 0.97531 |
| 4.200 | -2.00062802 | | 1.01988 | 1.01311 | 0.98661 | 0.98040 |
| 4.250 | -2.00061549 | | 1.01825 | 1.01188 | 0.98784 | 0.98203 |
| 4.300 | -2.00059902 | | 1.01674 | 1.01073 | 0.98900 | 0.98352 |
| 4.350 | -2.00058092 | | 1.01535 | 1.00967 | 0.99008 | 0.98491 |
| 4.400 | -2.00056179 | | 1.01406 | 1.00866 | 0.99109 | 0.98619 |
| 4.450 | -2.00054158 | | 1.01286 | 1.00773 | 0.99203 | 0.98738 |
| 4.500 | -2.00133202 | | 1.01032 | 1.00918 | 0.99067 | 0.98983 |
| 4.550 | -2.00132749 | | 1.00942 | 1.00836 | 0.99150 | 0.99072 |
| 4.600 | -2.00131892 | | 1.00859 | 1.00758 | 0.99228 | 0.99155 |
| 4.650 | -2.00130737 | | 1.00782 | 1.00686 | 0.99300 | 0.99231 |
| 4.700 | -2.00129395 | | 1.00710 | 1.00619 | 0.99369 | 0.99302 |
| 4.750 | -2.00127904 | | 1.00644 | 1.00555 | 0.99432 | 0.99369 |
| 4.800 | -2.00126228 | | 1.00581 | 1.00495 | 0.99492 | 0.99431 |
| 4.850 | -2.00124337 | | 1.00523 | 1.00439 | 0.99549 | 0.99489 |
| 4.900 | -2.00122257 | | 1.00469 | 1.00387 | 0.99601 | 0.99543 |
| 4.950 | -2.00120035 | | 1.00418 | 1.00338 | 0.99651 | 0.99594 |
| 5.000 | -2.00117730 | -1.99932145 | 1.00370 | 1.00292 | 0.99697 | 0.99641 |

## Calculations

The REKS/SSR calculations for the hydrogen chains were executed using a state-averaged ensemble that included the PPS1 configuration and all OSSx configurations generated within the same GVB orbital pairing scheme. To ensure stable SCF convergence, a high-spin determinant was incorporated into the ensembles. All density functional calculations utilized the BH\&HLYP functional. For the REKS/SSR calculations, initial guess orbitals were generated via standard KS-DFT calculations using the identical density functional and basis set. Potential energy curves were scanned at increments of 0.01–0.05 Å. Additionally, reference full configuration interaction calculations were carried out using the Psi4 package.

Method: SI-SA-REKS(4,4) = SSR(4,4); 18SI-4SA-REKS(4,4)

SA pool: PPS1 0.250000, OSS1 0.250000, OSS2 0.250000, all-α determinant 0.250000

SI: catalogue configuration set full; 2S = 0: 18 configurations

Functional, basis: BH\&HLYP/aug-cc-pVTZ

SCF: DF, energy/density thresholds 1.00e-07/1.00e-05, grid 75 × 302

Orbital solver: GVB-DIIS

Coordinate: R(H–H); linear H chain, equal spacing R(H–H)

R window: R 0.500–5.000 Å, 92 points

[← H<sub>2</sub>](https://reksstudio.github.io/v2/main/results/dissociation/h2/index.md) · [Back to the curves](https://reksstudio.github.io/v2/main/results/dissociation/index.md#h4) · [H<sub>6</sub> →](https://reksstudio.github.io/v2/main/results/dissociation/h6/index.md)

[Install](https://reksstudio.github.io/v2/docs/index.md#install) · [Manual: first calculation](https://reksstudio.github.io/v2/manual/first-calculation/index.md#first-calculation) · [Contact](https://reksstudio.github.io/v2/docs/index.md#contact)
