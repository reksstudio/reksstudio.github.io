# H₆: SSR(6,6) dissociation — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/dissociation/h6/>

Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# H<sub>6</sub>: SSR(6,6) dissociation

For simple hydrogen chains, in which two to eight hydrogen atoms are pulled apart simultaneously, our method's dissociation curves closely track near-exact reference calculations across all chain lengths tested.

BH\&HLYP/6-31G(d) · 161SI-5SA-REKS(6,6) · R 0.70–4.65 Å · 80 points · FCI 40

[Curves](#curves) · [Numbers](#numbers) · [Calculations](#calculations)

![H₆: drawing at R_e of S0](https://reksstudio.github.io/v2/figures/dissociation/h6.svg)

Geometry at R<sub>e</sub> of S0.

* H

## Curves

H₆ SSR(6,6): S0 energy along R(H–H) from 0.7 to 4.65 Å with FCI in the same basis; natural occupations below

H₆ SSR(6,6): S0 energy along R(H–H) from 0.7 to 4.65 Å with FCI in the same basis; natural occupations below

PECs for H<sub>6</sub> from SSR(6,6)/BH\&HLYP compared with FCI (circles); KS-DFT (dashed grey); thin curves denote excited states, and the short dashed segment marks the energy of isolated atoms. H<sub>6</sub> uses 6-31G\*, a smaller basis set required because FCI becomes computationally intractable for larger ones. The triangle denotes a single-point FCI reference computed with a larger basis set: aug-cc-pVDZ. Since FCI with a small basis set cannot fully capture the correlation energy, the FCI curve lies somewhat above the corresponding SSR curve. DFT-based methods are less sensitive to basis set size than FCI \[[Goerigk and Grimme 2011](https://reksstudio.github.io/v2/manual/reference/index.md#goerigk2011-benchmark)] \[[Bursch et al. 2022](https://reksstudio.github.io/v2/manual/reference/index.md#bursch2022-protocols)], so the depth of the SSR minimum at the equilibrium geometry agrees better with the FCI single-point value obtained at the larger basis set. Lower panel: natural occupations n<sub>i</sub> of S0; dotted: R<sub>e</sub> of S0.

H6: active orbitals along the dissociation

Active SA-REKS orbitals φ(z) on the chain axis along the bond coordinate (z in units of R); bars: n of S0 of the natural orbital each orbital dominates.

## Numbers

Table: S0, reference and n<sub>i</sub> of S0 at every R

| R / Å | E(S0) / E<sub>h</sub> | E(FCI) / E<sub>h</sub> | n<sub>1</sub> | n<sub>2</sub> | n<sub>3</sub> | n<sub>4</sub> | n<sub>5</sub> | n<sub>6</sub> |
| - | - | - | - | - | - | - | - | - |
| 0.700 | -3.25889949 | -3.19429272 | 1.99943 | 1.99840 | 1.99027 | 0.01042 | 0.00087 | 0.00061 |
| 0.750 | -3.31923817 | | 1.99928 | 1.99814 | 1.98870 | 0.01226 | 0.00107 | 0.00054 |
| 0.800 | -3.35734154 | -3.29582162 | 1.99912 | 1.99784 | 1.98689 | 0.01426 | 0.00137 | 0.00053 |
| 0.850 | -3.37891788 | | 1.99893 | 1.99747 | 1.98476 | 0.01651 | 0.00177 | 0.00056 |
| 0.900 | -3.38814424 | -3.32975591 | 1.99874 | 1.99698 | 1.98214 | 0.01918 | 0.00231 | 0.00065 |
| 0.950 | -3.38811828 | | 1.99852 | 1.99629 | 1.97886 | 0.02249 | 0.00302 | 0.00081 |
| 1.000 | -3.38119090 | -3.32655137 | 1.99828 | 1.99529 | 1.97472 | 0.02667 | 0.00402 | 0.00102 |
| 1.050 | -3.36917671 | | 1.99800 | 1.99381 | 1.96954 | 0.03193 | 0.00543 | 0.00129 |
| 1.100 | -3.35351592 | -3.30353160 | 1.99764 | 1.99174 | 1.96311 | 0.03851 | 0.00738 | 0.00163 |
| 1.150 | -3.33536965 | | 1.99713 | 1.98892 | 1.95516 | 0.04669 | 0.01002 | 0.00208 |
| 1.200 | -3.31563793 | -3.27085617 | 1.99634 | 1.98524 | 1.94531 | 0.05688 | 0.01349 | 0.00275 |
| 1.250 | -3.29506915 | | 1.99510 | 1.98051 | 1.93310 | 0.06951 | 0.01798 | 0.00379 |
| 1.300 | -3.27425943 | -3.23455011 | 1.99317 | 1.97457 | 1.91799 | 0.08512 | 0.02370 | 0.00544 |
| 1.350 | -3.25366707 | | 1.99029 | 1.96718 | 1.89946 | 0.10416 | 0.03090 | 0.00801 |
| 1.400 | -3.23362522 | -3.19816066 | 1.98617 | 1.95807 | 1.87714 | 0.12695 | 0.03987 | 0.01180 |
| 1.450 | -3.21431899 | | 1.98052 | 1.94696 | 1.85098 | 0.15349 | 0.05092 | 0.01713 |
| 1.500 | -3.19587214 | -3.16373382 | 1.97312 | 1.93362 | 1.82128 | 0.18345 | 0.06427 | 0.02426 |
| 1.550 | -3.17835177 | | 1.96381 | 1.91787 | 1.78853 | 0.21633 | 0.08010 | 0.03336 |
| 1.600 | -3.16179454 | -3.13240775 | 1.95248 | 1.89962 | 1.75332 | 0.25154 | 0.09848 | 0.04455 |
| 1.650 | -3.14619778 | | 1.93907 | 1.87883 | 1.71635 | 0.28840 | 0.11946 | 0.05789 |
| 1.700 | -3.13155653 | -3.10476161 | 1.92358 | 1.85552 | 1.67831 | 0.32623 | 0.14298 | 0.07338 |
| 1.750 | -3.11786222 | | 1.90600 | 1.82976 | 1.63994 | 0.36433 | 0.16897 | 0.09100 |
| 1.800 | -3.10510450 | -3.08100774 | 1.88639 | 1.80166 | 1.60192 | 0.40205 | 0.19729 | 0.11069 |
| 1.850 | -3.09327311 | | 1.86481 | 1.77143 | 1.56479 | 0.43885 | 0.22774 | 0.13237 |
| 1.900 | -3.08233852 | -3.06109765 | 1.84142 | 1.73926 | 1.52911 | 0.47424 | 0.26009 | 0.15589 |
| 1.950 | -3.07229973 | | 1.81636 | 1.70551 | 1.49516 | 0.50789 | 0.29399 | 0.18108 |
| 2.000 | -3.06315048 | -3.04479176 | 1.78975 | 1.67069 | 1.46317 | 0.53960 | 0.32893 | 0.20786 |
| 2.050 | -3.05495012 | | 1.76150 | 1.63563 | 1.43316 | 0.56931 | 0.36408 | 0.23632 |
| 2.100 | -3.04775000 | -3.03171959 | 1.73169 | 1.60108 | 1.40524 | 0.59696 | 0.39868 | 0.26635 |
| 2.150 | -3.04153883 | | 1.70071 | 1.56742 | 1.37963 | 0.62232 | 0.43237 | 0.29755 |
| 2.200 | -3.03620957 | -3.02143777 | 1.66900 | 1.53471 | 1.35664 | 0.64515 | 0.46509 | 0.32942 |
| 2.250 | -3.03157559 | | 1.63687 | 1.50307 | 1.33617 | 0.66558 | 0.49672 | 0.36161 |
| 2.300 | -3.02749450 | -3.01348251 | 1.60465 | 1.47282 | 1.31780 | 0.68400 | 0.52696 | 0.39378 |
| 2.350 | -3.02396142 | | 1.57284 | 1.44416 | 1.30112 | 0.70082 | 0.55564 | 0.42543 |
| 2.400 | -3.02106882 | -3.00741072 | 1.54220 | 1.41703 | 1.28562 | 0.71652 | 0.58280 | 0.45584 |
| 2.450 | -3.01887342 | | 1.51303 | 1.39145 | 1.27090 | 0.73135 | 0.60843 | 0.48483 |
| 2.500 | -3.01722349 | -3.00282650 | 1.48492 | 1.36737 | 1.25680 | 0.74542 | 0.63257 | 0.51292 |
| 2.550 | -3.01588497 | | 1.45767 | 1.34483 | 1.24342 | 0.75865 | 0.65516 | 0.54027 |
| 2.600 | -3.01474000 | -2.99939377 | 1.43148 | 1.32365 | 1.23075 | 0.77113 | 0.67639 | 0.56660 |
| 2.650 | -3.01375845 | | 1.40655 | 1.30373 | 1.21880 | 0.78290 | 0.69635 | 0.59167 |
| 2.700 | -3.01293507 | -2.99683817 | 1.38294 | 1.28501 | 1.20755 | 0.79397 | 0.71511 | 0.61542 |
| 2.750 | -3.01225696 | | 1.36066 | 1.26741 | 1.19699 | 0.80437 | 0.73275 | 0.63783 |
| 2.800 | -3.01171592 | -2.99494234 | 1.33965 | 1.25085 | 1.18706 | 0.81415 | 0.74933 | 0.65895 |
| 2.850 | -3.01129982 | | 1.31986 | 1.23527 | 1.17772 | 0.82335 | 0.76494 | 0.67886 |
| 2.900 | -3.01100284 | -2.99353797 | 1.30120 | 1.22057 | 1.16892 | 0.83204 | 0.77965 | 0.69762 |
| 2.950 | -3.01081732 | | 1.28360 | 1.20670 | 1.16060 | 0.84025 | 0.79354 | 0.71531 |
| 3.000 | -3.01073452 | -2.99249707 | 1.26699 | 1.19360 | 1.15271 | 0.84804 | 0.80664 | 0.73201 |
| 3.050 | -3.01074913 | | 1.25129 | 1.18123 | 1.14522 | 0.85544 | 0.81902 | 0.74780 |
| 3.100 | -3.01085184 | -2.99172374 | 1.23643 | 1.16952 | 1.13807 | 0.86251 | 0.83074 | 0.76273 |
| 3.150 | -3.01103415 | | 1.22236 | 1.15844 | 1.13124 | 0.86927 | 0.84181 | 0.77687 |
| 3.200 | -3.01128550 | -2.99114694 | 1.20903 | 1.14797 | 1.12470 | 0.87574 | 0.85228 | 0.79028 |
| 3.250 | -3.01159693 | | 1.19637 | 1.13806 | 1.11841 | 0.88197 | 0.86219 | 0.80300 |
| 3.300 | -3.01195723 | -2.99071463 | 1.18435 | 1.12869 | 1.11235 | 0.88799 | 0.87155 | 0.81507 |
| 3.350 | -3.01236822 | | 1.17292 | 1.11981 | 1.10650 | 0.89379 | 0.88042 | 0.82657 |
| 3.400 | -3.01281121 | -2.99038892 | 1.16203 | 1.11141 | 1.10085 | 0.89941 | 0.88880 | 0.83749 |
| 3.450 | -3.01329098 | | 1.15165 | 1.10345 | 1.09537 | 0.90486 | 0.89675 | 0.84792 |
| 3.500 | -3.01379377 | -2.99014237 | 1.14176 | 1.09592 | 1.09005 | 0.91014 | 0.90427 | 0.85785 |
| 3.550 | -3.01433953 | | 1.13236 | 1.08882 | 1.08492 | 0.91525 | 0.91136 | 0.86729 |
| 3.600 | -3.01488921 | -2.98995509 | 1.12338 | 1.08209 | 1.07993 | 0.92022 | 0.91807 | 0.87631 |
| 3.650 | -3.01542933 | | 1.11485 | 1.07577 | 1.07513 | 0.92501 | 0.92438 | 0.88487 |
| 3.700 | -3.01598473 | -2.98981267 | 1.10680 | 1.07053 | 1.06987 | 0.93027 | 0.92958 | 0.89294 |
| 3.750 | -3.01652316 | | 1.09919 | 1.06613 | 1.06435 | 0.93578 | 0.93398 | 0.90058 |
| 3.800 | -3.01704483 | -2.98970444 | 1.09198 | 1.06190 | 1.05915 | 0.94096 | 0.93818 | 0.90782 |
| 3.850 | -3.01753356 | | 1.08522 | 1.05790 | 1.05434 | 0.94576 | 0.94217 | 0.91461 |
| 3.900 | -3.01799873 | -2.98962248 | 1.07886 | 1.05409 | 1.04986 | 0.95023 | 0.94595 | 0.92100 |
| 3.950 | -3.01844309 | | 1.07292 | 1.05052 | 1.04573 | 0.95435 | 0.94952 | 0.92696 |
| 4.000 | -3.01884364 | -2.98956063 | 1.06738 | 1.04714 | 1.04191 | 0.95816 | 0.95287 | 0.93254 |
| 4.050 | -3.01922355 | | 1.06222 | 1.04399 | 1.03840 | 0.96167 | 0.95600 | 0.93772 |
| 4.100 | -3.01956983 | -2.98951459 | 1.05745 | 1.04106 | 1.03518 | 0.96488 | 0.95891 | 0.94252 |
| 4.150 | -3.01988721 | | 1.05304 | 1.03833 | 1.03225 | 0.96781 | 0.96161 | 0.94696 |
| 4.200 | -3.02018214 | -2.98948054 | 1.04897 | 1.03581 | 1.02957 | 0.97048 | 0.96411 | 0.95106 |
| 4.250 | -3.02045393 | | 1.04523 | 1.03347 | 1.02713 | 0.97291 | 0.96642 | 0.95484 |
| 4.300 | -3.02070072 | -2.98945565 | 1.04179 | 1.03134 | 1.02493 | 0.97511 | 0.96854 | 0.95830 |
| 4.350 | -3.02092634 | | 1.03866 | 1.02937 | 1.02294 | 0.97710 | 0.97047 | 0.96147 |
| 4.400 | -3.02112656 | -2.98943720 | 1.03579 | 1.02757 | 1.02113 | 0.97890 | 0.97225 | 0.96437 |
| 4.450 | -3.02130717 | | 1.03319 | 1.02592 | 1.01952 | 0.98050 | 0.97386 | 0.96701 |
| 4.500 | -3.02145938 | -2.98942456 | 1.03082 | 1.02442 | 1.01808 | 0.98195 | 0.97533 | 0.96940 |
| 4.550 | -3.02159512 | | 1.02864 | 1.02309 | 1.01678 | 0.98324 | 0.97669 | 0.97156 |
| 4.600 | -3.02171265 | -2.98941568 | 1.02669 | 1.02185 | 1.01562 | 0.98440 | 0.97790 | 0.97353 |
| 4.650 | -3.02177748 | | 1.02489 | 1.02079 | 1.01461 | 0.98542 | 0.97901 | 0.97530 |

## Calculations

The REKS/SSR calculations for the hydrogen chains were executed using a state-averaged ensemble that included the PPS1 configuration and all OSSx configurations generated within the same GVB orbital pairing scheme. To ensure stable SCF convergence, a high-spin determinant was incorporated into the ensembles. All density functional calculations utilized the BH\&HLYP functional. For the REKS/SSR calculations, initial guess orbitals were generated via standard KS-DFT calculations using the identical density functional and basis set. Potential energy curves were scanned at an increment of 0.05 Å. Additionally, reference full configuration interaction calculations were carried out using the Psi4 package.

Method: SI-SA-REKS(6,6) = SSR(6,6); 161SI-5SA-REKS(6,6)

SA pool: PPS1 0.200000, OSS1 0.200000, OSS2 0.200000, OSS3 0.200000, all-α determinant 0.200000

SI: catalogue configuration set full; 2S = 0: 161 configurations

Functional, basis: BH\&HLYP/6-31G(d)

SCF: DF, energy/density thresholds 1.00e-07/1.00e-05, grid 75 × 302

Orbital solver: TRAH

Coordinate: R(H–H); linear H chain, equal spacing R(H–H)

R window: R 0.700–4.650 Å, 80 points

[← H<sub>4</sub>](https://reksstudio.github.io/v2/main/results/dissociation/h4/index.md) · [Back to the curves](https://reksstudio.github.io/v2/main/results/dissociation/index.md#h6) · [H<sub>8</sub> →](https://reksstudio.github.io/v2/main/results/dissociation/h8/index.md)

[Install](https://reksstudio.github.io/v2/docs/index.md#install) · [Manual: first calculation](https://reksstudio.github.io/v2/manual/first-calculation/index.md#first-calculation) · [Contact](https://reksstudio.github.io/v2/docs/index.md#contact)
