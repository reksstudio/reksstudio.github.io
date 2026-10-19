# N₂: SSR(6,6) dissociation — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/dissociation/n2/>

Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# N<sub>2</sub>: SSR(6,6) dissociation

Using SSR(6,6)/BH\&HLYP, the N<sub>2</sub> ground-state PEC evolves smoothly from equilibrium (calc.: 1.096 Å; exp.: 1.0977 Å \[[Huber and Herzberg 1979](https://reksstudio.github.io/v2/manual/reference/index.md#huber1979-diatomic)]) to two isolated ground-state (<sup>4</sup>S) nitrogen atoms. We did not classify excited states by symmetry or rigorously benchmark vertical excitation energies, since these depend on functional choice; nevertheless, SSR(6,6)/BH\&HLYP reasonably reproduces the lowest vertical excitation and captures triple-bond dissociation with conceptual fidelity, free of unphysical artifacts or symmetry-breaking discontinuities.

BH\&HLYP/aug-cc-pVTZ · 161SI-5SA-REKS(6,6) · R 0.80–4.00 Å · curves: Fig. 3 \[[Komarov et al. 2026](https://reksstudio.github.io/v2/manual/reference/index.md#komarov2026-reks-studio)]

[Curves](#curves) · [Numbers](#numbers) · [Calculations](#calculations)

![N₂: drawing at R_e of S0](https://reksstudio.github.io/v2/figures/dissociation/n2.svg)

Geometry at R<sub>e</sub> of S0.

* N

## Curves

N₂ SSR(6,6): S0 energy along R(N–N) from 0.8 to 4 Å; natural occupations below

N₂ SSR(6,6): S0 energy along R(N–N) from 0.8 to 4 Å; natural occupations below

SSR(6,6) PECs of singlet states of N<sub>2</sub>: ground X<sup>1</sup>Σ<sub>g</sub><sup>+</sup> (solid), unclassified excited states (thin), and KS DFT (dashed grey). Short dashed: asymptotic energy of two ground-state (<sup>4</sup>S) N atoms. Gray arrow: lowest vertical excitation vs. TBE \[[Véril et al. 2021](https://reksstudio.github.io/v2/manual/reference/index.md#veril2021-questdb)]. Equilibrium N≡N bond lengths compared with experiment \[[Huber and Herzberg 1979](https://reksstudio.github.io/v2/manual/reference/index.md#huber1979-diatomic)].

## Numbers

R<sub>e</sub> 1.096 Å (Fig. 3) · exp. 1.0977 Å (r<sub>e</sub>)

Table: S0 and n<sub>i</sub> of S0 at every R

| R / Å | E(S0) / E<sub>h</sub> | n<sub>1</sub> | n<sub>2</sub> | n<sub>3</sub> | n<sub>4</sub> | n<sub>5</sub> | n<sub>6</sub> |
| - | - | - | - | - | - | - | - |
| 0.800 | -109.000 | | | | | | |
| 0.850 | -109.210 | | | | | | |
| 0.900 | -109.350 | | | | | | |
| 0.950 | -109.439 | | | | | | |
| 1.000 | -109.490 | | | | | | |
| 1.050 | -109.515 | | | | | | |
| 1.100 | -109.520 | | | | | | |
| 1.150 | -109.513 | | | | | | |
| 1.200 | -109.496 | | | | | | |
| 1.250 | -109.475 | | | | | | |
| 1.300 | -109.450 | 1.99701 | 1.94257 | 1.94257 | 0.05885 | 0.05885 | 0.00016 |
| 1.350 | -109.425 | 1.99683 | 1.92941 | 1.92941 | 0.07193 | 0.07193 | 0.00049 |
| 1.400 | -109.398 | 1.99616 | 1.91491 | 1.91491 | 0.08633 | 0.08633 | 0.00136 |
| 1.450 | -109.372 | 1.99464 | 1.89865 | 1.89865 | 0.10246 | 0.10246 | 0.00315 |
| 1.500 | -109.347 | 1.99205 | 1.88035 | 1.88035 | 0.12061 | 0.12061 | 0.00602 |
| 1.550 | -109.324 | 1.98853 | 1.85988 | 1.85988 | 0.14095 | 0.14095 | 0.00980 |
| 1.600 | -109.302 | 1.98430 | 1.83696 | 1.83696 | 0.16377 | 0.16377 | 0.01424 |
| 1.650 | -109.282 | | | | | | |
| 1.700 | -109.264 | 1.97309 | 1.78207 | 1.78207 | 0.21850 | 0.21850 | 0.02577 |
| 1.750 | -109.248 | | | | | | |
| 1.800 | -109.234 | 1.95083 | 1.71813 | 1.71813 | 0.28227 | 0.28227 | 0.04838 |
| 1.850 | -109.223 | | | | | | |
| 1.900 | -109.213 | 1.89455 | 1.63709 | 1.63709 | 0.36310 | 0.36310 | 0.10507 |
| 1.950 | -109.204 | | | | | | |
| 2.000 | -109.197 | 1.82503 | 1.52141 | 1.51734 | 0.48262 | 0.47876 | 0.17484 |
| 2.050 | -109.191 | | | | | | |
| 2.100 | -109.185 | 1.74226 | 1.40539 | 1.40134 | 0.59883 | 0.59480 | 0.25738 |
| 2.150 | -109.181 | | | | | | |
| 2.200 | -109.178 | 1.63858 | 1.31214 | 1.31135 | 0.69474 | 0.69398 | 0.34920 |
| 2.250 | -109.175 | | | | | | |
| 2.300 | -109.173 | 1.52124 | 1.23653 | 1.23515 | 0.78265 | 0.78124 | 0.44318 |
| 2.350 | -109.172 | | | | | | |
| 2.400 | -109.171 | 1.41528 | 1.17870 | 1.17609 | 0.85125 | 0.84863 | 0.53005 |
| 2.450 | -109.170 | | | | | | |
| 2.500 | -109.169 | 1.35139 | 1.13805 | 1.13503 | 0.89042 | 0.88739 | 0.59772 |
| 2.550 | -109.169 | | | | | | |
| 2.600 | -109.168 | 1.30076 | 1.10843 | 1.10528 | 0.91752 | 0.91437 | 0.65364 |
| 2.650 | -109.167 | | | | | | |
| 2.700 | -109.167 | 1.25885 | 1.08556 | 1.08268 | 0.93699 | 0.93412 | 0.70179 |
| 2.750 | -109.166 | | | | | | |
| 2.800 | -109.166 | 1.22359 | 1.06822 | 1.06567 | 0.95132 | 0.94877 | 0.74242 |
| 2.850 | -109.165 | | | | | | |
| 2.900 | -109.165 | 1.19316 | 1.05582 | 1.05372 | 0.96214 | 0.96004 | 0.77511 |
| 2.950 | -109.164 | | | | | | |
| 3.000 | -109.164 | 1.16698 | 1.04350 | 1.04175 | 0.97021 | 0.96845 | 0.80911 |
| 3.050 | -109.164 | | | | | | |
| 3.100 | -109.163 | 1.14438 | 1.03364 | 1.03213 | 0.97657 | 0.97505 | 0.83823 |
| 3.150 | -109.163 | | | | | | |
| 3.200 | -109.163 | 1.12502 | 1.02613 | 1.02492 | 0.98147 | 0.98026 | 0.86220 |
| 3.250 | -109.162 | | | | | | |
| 3.300 | -109.162 | 1.10842 | 1.01997 | 1.01856 | 0.98536 | 0.98395 | 0.88374 |
| 3.350 | -109.162 | | | | | | |
| 3.400 | -109.162 | 1.09407 | 1.01551 | 1.01455 | 0.98826 | 0.98730 | 0.90032 |
| 3.450 | -109.161 | | | | | | |
| 3.500 | -109.161 | 1.08188 | 1.01242 | 1.01168 | 0.99064 | 0.98986 | 0.91353 |
| 3.550 | -109.161 | | | | | | |
| 3.600 | -109.161 | | | | | | |
| 3.650 | -109.160 | | | | | | |
| 3.700 | -109.160 | | | | | | |
| 3.750 | -109.160 | | | | | | |
| 3.800 | -109.160 | | | | | | |
| 3.850 | -109.160 | | | | | | |
| 3.900 | -109.159 | | | | | | |
| 3.950 | -109.159 | | | | | | |
| 4.000 | -109.159 | | | | | | |

E(S0) column from Fig. 3 \[[Komarov et al. 2026](https://reksstudio.github.io/v2/manual/reference/index.md#komarov2026-reks-studio)]; n<sub>i</sub> computed.

## Calculations

The SSR(6,6) calculations for N<sub>2</sub> and C<sub>2</sub>H<sub>2</sub> were performed using a five-state ensemble – comprising PPS1, OSS1, OSS2, OSS3, and HS – for orbital optimization, combined with a complete set of configurations for the state-interaction stage. Dissociation fragments were computed via the ROKS high-spin method. All simulations utilized the BH\&HLYP density functional alongside the aug-cc-pVTZ basis set.

Method: SI-SA-REKS(6,6) = SSR(6,6); 161SI-5SA-REKS(6,6)

SA pool: PPS1 0.200000, OSS1 0.200000, OSS2 0.200000, OSS3 0.200000, all-α determinant 0.200000

SI: catalogue configuration set full; 2S = 0: 161 configurations

Functional, basis: BH\&HLYP/aug-cc-pVTZ

SCF: DF, energy/density thresholds 1.00e-07/1.00e-05, grid 75 × 302

Coordinate: R(N–N); N–N distance

R window: R 0.800–4.000 Å, 65 points

Curves: Fig. 3 \[[Komarov et al. 2026](https://reksstudio.github.io/v2/manual/reference/index.md#komarov2026-reks-studio)], aug-cc-pVTZ

[← C<sub>2</sub>H<sub>4</sub>](https://reksstudio.github.io/v2/main/results/dissociation/c2h4/index.md) · [Back to the curves](https://reksstudio.github.io/v2/main/results/dissociation/index.md#n2) · [C<sub>2</sub>H<sub>2</sub> →](https://reksstudio.github.io/v2/main/results/dissociation/c2h2/index.md)

[Install](https://reksstudio.github.io/v2/docs/index.md#install) · [Manual: first calculation](https://reksstudio.github.io/v2/manual/first-calculation/index.md#first-calculation) · [Contact](https://reksstudio.github.io/v2/docs/index.md#contact)
