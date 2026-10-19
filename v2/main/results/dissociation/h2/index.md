# H₂: SSR(2,2) dissociation — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/dissociation/h2/>

Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# H<sub>2</sub>: SSR(2,2) dissociation

For simple hydrogen chains, in which two to eight hydrogen atoms are pulled apart simultaneously, our method's dissociation curves closely track near-exact reference calculations across all chain lengths tested.

BH\&HLYP/aug-cc-pVTZ · 3SA-REKS(2,2) · R 0.50–5.00 Å · 91 points · FCI 46

[Curves](#curves) · [Numbers](#numbers) · [Calculations](#calculations)

![H₂: drawing at R_e of S0](https://reksstudio.github.io/v2/figures/dissociation/h2.svg)

Geometry at R<sub>e</sub> of S0.

* H

## Curves

H₂ SSR(2,2): S0 energy along R(H–H) from 0.5 to 5 Å with FCI in the same basis; natural occupations below

H₂ SSR(2,2): S0 energy along R(H–H) from 0.5 to 5 Å with FCI in the same basis; natural occupations below

PECs for H<sub>2</sub> from SSR(2,2)/BH\&HLYP/aug-cc-pVTZ (solid line), KS-DFT (dashed grey), and full configuration interaction (FCI; circles); the short dashed segment marks the energy of isolated atoms. Lower panel: natural occupations n<sub>i</sub> of S0; dotted: R<sub>e</sub> of S0.

H2: active orbitals along the dissociation

Active SA-REKS orbitals φ(z) on the chain axis along the bond coordinate (z in units of R); bars: n of S0 of the natural orbital each orbital dominates.

## Numbers

Table: S0, reference and n<sub>i</sub> of S0 at every R

| R / Å | E(S0) / E<sub>h</sub> | E(FCI) / E<sub>h</sub> | n<sub>1</sub> | n<sub>2</sub> |
| - | - | - | - | - |
| 0.500 | -1.08551836 | -1.10111155 | 2.00000 | 0.00000 |
| 0.550 | -1.11867458 | | 2.00000 | 0.00000 |
| 0.600 | -1.13982868 | -1.15376196 | 2.00000 | 0.00000 |
| 0.650 | -1.15243549 | | 2.00000 | 0.00000 |
| 0.700 | -1.15888225 | -1.17129465 | 2.00000 | 0.00000 |
| 0.750 | -1.16084963 | | 2.00000 | 0.00000 |
| 0.800 | -1.15954049 | -1.17073612 | 2.00000 | 0.00000 |
| 0.850 | -1.15582820 | | 2.00000 | 0.00000 |
| 0.900 | -1.15035527 | -1.16082136 | 2.00000 | 0.00000 |
| 0.950 | -1.14360068 | | 1.99999 | 0.00001 |
| 1.000 | -1.13592613 | -1.14626647 | 1.99998 | 0.00002 |
| 1.050 | -1.12760842 | | 1.99994 | 0.00006 |
| 1.100 | -1.11886211 | -1.12973297 | 1.99985 | 0.00015 |
| 1.150 | -1.10985570 | | 1.99965 | 0.00035 |
| 1.200 | -1.10072436 | -1.11278952 | 1.99920 | 0.00081 |
| 1.250 | -1.09158078 | | 1.99819 | 0.00181 |
| 1.300 | -1.08252665 | -1.09638057 | 1.99594 | 0.00406 |
| 1.350 | -1.07367346 | | 1.99064 | 0.00936 |
| 1.400 | -1.06519384 | -1.08107346 | 1.97723 | 0.02277 |
| 1.450 | -1.05740591 | | 1.94697 | 0.05303 |
| 1.500 | -1.05055486 | -1.06719376 | 1.90527 | 0.09473 |
| 1.550 | -1.04453955 | | 1.86448 | 0.13552 |
| 1.600 | -1.03920115 | -1.05490343 | 1.82711 | 0.17289 |
| 1.650 | -1.03442306 | | 1.79274 | 0.20726 |
| 1.700 | -1.03012634 | -1.04424953 | 1.76070 | 0.23930 |
| 1.750 | -1.02624784 | | 1.73055 | 0.26945 |
| 1.800 | -1.02274170 | -1.03519651 | 1.70189 | 0.29811 |
| 1.850 | -1.01956766 | | 1.67450 | 0.32550 |
| 1.900 | -1.01669264 | -1.02764885 | 1.64817 | 0.35183 |
| 1.950 | -1.01409022 | | 1.62276 | 0.37724 |
| 2.000 | -1.01173275 | -1.02146891 | 1.59817 | 0.40183 |
| 2.050 | -1.00960184 | | 1.57430 | 0.42570 |
| 2.100 | -1.00767524 | -1.01649314 | 1.55110 | 0.44890 |
| 2.150 | -1.00593578 | | 1.52853 | 0.47147 |
| 2.200 | -1.00436894 | -1.01254727 | 1.50652 | 0.49348 |
| 2.250 | -1.00295721 | | 1.48508 | 0.51492 |
| 2.300 | -1.00168909 | -1.00945949 | 1.46416 | 0.53584 |
| 2.350 | -1.00055183 | | 1.44376 | 0.55624 |
| 2.400 | -0.99953252 | -1.00707050 | 1.42388 | 0.57612 |
| 2.450 | -0.99862213 | | 1.40449 | 0.59551 |
| 2.500 | -0.99781019 | -1.00523955 | 1.38561 | 0.61439 |
| 2.550 | -0.99708697 | | 1.36725 | 0.63275 |
| 2.600 | -0.99644507 | -1.00384708 | 1.34939 | 0.65061 |
| 2.650 | -0.99587633 | | 1.33205 | 0.66795 |
| 2.700 | -0.99537302 | -1.00279456 | 1.31524 | 0.68476 |
| 2.750 | -0.99492940 | | 1.29897 | 0.70103 |
| 2.800 | -0.99453901 | -1.00200282 | 1.28324 | 0.71676 |
| 2.850 | -0.99419595 | | 1.26806 | 0.73194 |
| 2.900 | -0.99389586 | -1.00140942 | 1.25345 | 0.74655 |
| 2.950 | -0.99363354 | | 1.23939 | 0.76061 |
| 3.000 | -0.99340489 | -1.00096586 | 1.22590 | 0.77410 |
| 3.050 | -0.99320610 | | 1.21299 | 0.78701 |
| 3.100 | -0.99303403 | -1.00063490 | 1.20065 | 0.79935 |
| 3.150 | -0.99288491 | | 1.18886 | 0.81114 |
| 3.200 | -0.99275632 | -1.00038821 | 1.17764 | 0.82236 |
| 3.250 | -0.99264583 | | 1.16697 | 0.83303 |
| 3.300 | -0.99255120 | -1.00020436 | 1.15685 | 0.84315 |
| 3.350 | -0.99247001 | | 1.14724 | 0.85276 |
| 3.400 | -0.99240110 | -1.00006728 | 1.13807 | 0.86193 |
| 3.450 | -0.99234214 | | 1.12956 | 0.87044 |
| 3.500 | -0.99229204 | -0.99996494 | 1.12137 | 0.87863 |
| 3.550 | -0.99225059 | | 1.11381 | 0.88619 |
| 3.600 | -0.99221532 | -0.99988837 | 1.10653 | 0.89347 |
| 3.650 | -0.99218585 | | 1.09981 | 0.90019 |
| 3.700 | -0.99216164 | -0.99983095 | 1.09338 | 0.90662 |
| 3.750 | -0.99214131 | | 1.08744 | 0.91256 |
| 3.800 | -0.99212492 | -0.99978776 | 1.08177 | 0.91823 |
| 3.850 | -0.99211120 | | 1.07653 | 0.92347 |
| 3.900 | -0.99210050 | -0.99975519 | 1.07154 | 0.92846 |
| 3.950 | -0.99209182 | | 1.06693 | 0.93307 |
| 4.000 | -0.99208505 | -0.99973054 | 1.06255 | 0.93745 |
| 4.050 | -0.99208018 | | 1.05846 | 0.94154 |
| 4.100 | -0.99207614 | -0.99971184 | 1.05467 | 0.94533 |
| 4.150 | -0.99207305 | | 1.05109 | 0.94891 |
| 4.200 | -0.99207094 | -0.99969760 | 1.04773 | 0.95227 |
| 4.250 | -0.99207059 | | 1.04461 | 0.95539 |
| 4.300 | -0.99206943 | -0.99968671 | 1.04168 | 0.95832 |
| 4.350 | -0.99206879 | | 1.03894 | 0.96106 |
| 4.400 | -0.99207055 | -0.99967835 | 1.03637 | 0.96363 |
| 4.450 | -0.99207033 | | 1.03398 | 0.96601 |
| 4.500 | -0.99207034 | -0.99967188 | 1.03175 | 0.96825 |
| 4.550 | -0.99207068 | | 1.02966 | 0.97034 |
| 4.600 | -0.99207440 | -0.99966684 | 1.02768 | 0.97232 |
| 4.650 | -0.99207455 | | 1.02586 | 0.97414 |
| 4.700 | -0.99207478 | -0.99966286 | 1.02416 | 0.97584 |
| 4.750 | -0.99207516 | | 1.02257 | 0.97743 |
| 4.800 | -0.99207977 | -0.99965969 | 1.02105 | 0.97895 |
| 4.850 | -0.99208000 | | 1.01967 | 0.98033 |
| 4.900 | -0.99208020 | -0.99965713 | 1.01838 | 0.98162 |
| 4.950 | -0.99208045 | | 1.01717 | 0.98283 |
| 5.000 | -0.99208484 | -0.99965503 | 1.01599 | 0.98401 |

## Calculations

The REKS/SSR calculations for the hydrogen chains were executed using a state-averaged ensemble that included the PPS1 configuration and all OSSx configurations generated within the same GVB orbital pairing scheme. To ensure stable SCF convergence, a high-spin determinant was incorporated into the ensembles. All density functional calculations utilized the BH\&HLYP functional. For the REKS/SSR calculations, initial guess orbitals were generated via standard KS-DFT calculations using the identical density functional and basis set. Potential energy curves were scanned at an increment of 0.05 Å. Additionally, reference full configuration interaction calculations were carried out using the Psi4 package.

Method: SI-SA-REKS(2,2) = SSR(2,2); 3SA-REKS(2,2)

SA pool: PPS1 0.333333, OSS1 0.333333, all-α determinant 0.333333

SI: catalogue configuration set full; 2S = 0: 3 configurations

Functional, basis: BH\&HLYP/aug-cc-pVTZ

SCF: DF, energy/density thresholds 1.00e-07/1.00e-05, grid 75 × 302

Orbital solver: GVB-DIIS

Coordinate: R(H–H); linear H chain, equal spacing R(H–H)

R window: R 0.500–5.000 Å, 91 points

[Back to the curves](https://reksstudio.github.io/v2/main/results/dissociation/index.md#h2) · [H<sub>4</sub> →](https://reksstudio.github.io/v2/main/results/dissociation/h4/index.md)

[Install](https://reksstudio.github.io/v2/docs/index.md#install) · [Manual: first calculation](https://reksstudio.github.io/v2/manual/first-calculation/index.md#first-calculation) · [Contact](https://reksstudio.github.io/v2/docs/index.md#contact)
