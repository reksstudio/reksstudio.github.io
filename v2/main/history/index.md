# History — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/history/>

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# History

Molecules with near-degenerate electronic configurations (breaking bonds, diradicals, excited-state crossings) are described poorly by single-determinant Kohn–Sham DFT.

REKS describes them inside DFT by an ensemble of configurations with fractional orbital occupations.

Each active space needs its own working equations, derived by hand; the largest REKS active space reported before this work is (4,4).

REKS Studio generates the equations symbolically for an arbitrary active space and runs them in Psi4.

## Largest active space reported, by year

Largest active space reported per paper, by year: 1999 (2,2), 2016 (4,4), 2026 (10,10) applied; 2026 (12,12) generated (separate marker)

Reported per paper; 2026: (10,10) applied to one system, (12,12) generated.

## Before REKS

| Year | Capability | Authors | Paper | Implementation |
| - | - | - | - | - |
| 1979, 1988 | Ensemble DFT foundations | A. K. Theophilou, E. K. U. Gross, L. N. Oliveira, W. Kohn | [Theophilou, J. Phys. C: Solid State Phys. 1979, 12, 5419](https://doi.org/10.1088/0022-3719/12/24/013); [Gross et al., Phys. Rev. A 1988, 37, 2805](https://doi.org/10.1103/PhysRevA.37.2805); [Gross et al., Phys. Rev. A 1988, 37, 2809](https://doi.org/10.1103/PhysRevA.37.2809) | |
| 1972–1977 | GVB perfect pairing | W. J. Hunt, P. J. Hay, W. A. Goddard; F. W. Bobrowicz | Hunt, Hay, Goddard 1972; Goddard et al. 1973; Bobrowicz, Goddard 1977 (citations to be added) | |

## REKS, SA-REKS, SSR

| Year | Capability | Authors | Paper | Implementation |
| - | - | - | - | - |
| 1999 | REKS(2,2) | M. Filatov, S. Shaik | [Filatov and Shaik, Chem. Phys. Lett. 1999, 304, 429](https://doi.org/10.1016/S0009-2614\(99\)00336-X); J. Phys. Chem. A 2000, 104, 6628 (citation to be added) | CADPAC5 (1999–2000) |
| 2000 | REKS(3,3) for doublet triradicals | M. Filatov, S. Shaik | [Filatov and Shaik, Chem. Phys. Lett. 2000, 332, 409](https://doi.org/10.1016/S0009-2614\(00\)01257-4) | |
| 2007 | Damped interpolation f(n<sub>a</sub>, n<sub>b</sub>), δ = 0.4, introduced in a magnetic-coupling study; attribution per WIREs 2015, Eq. 9 | I. d. P. R. Moreira, R. Costa, M. Filatov, F. Illas | [Moreira et al., J. Chem. Theory Comput. 2007, 3, 764](https://doi.org/10.1021/ct7000057); [Filatov, WIREs Comput. Mol. Sci. 2015, 5, 146](https://doi.org/10.1002/wcms.1209) | |
| 2008 | SA-REKS | Kazaryan, Heuver, Filatov | J. Phys. Chem. A 2008, 112, 12980 (citation to be added) | |
| 2013 | SI-SA-REKS (two papers, no order claim) | M. Huix-Rotllant, M. Filatov, S. Gozem, I. Schapiro, M. Olivucci, N. Ferré | [Huix-Rotllant et al., J. Chem. Theory Comput. 2013, 9, 3917](https://doi.org/10.1021/ct4003465); [Filatov, J. Chem. Theory Comput. 2013, 9, 4526](https://doi.org/10.1021/ct400598b) | |
| to be added | The name SSR: source and year to be checked (TCC 368, 97, online 2015, or JCP 141, 124123, 2014) | M. Filatov | [Filatov, Top. Curr. Chem. 2016, 368, 97](https://doi.org/10.1007/128_2015_630) | |
| 2015 | Multi-state ensembles | M. Filatov, M. Huix-Rotllant, I. Burghardt | [Filatov et al., J. Chem. Phys. 2015, 142, 184104](https://doi.org/10.1063/1.4919773) | |
| 2016 | REKS(4,4) in GVB-PP(2/4) two-pair form | M. Filatov, T. J. Martínez, K. S. Kim, F. Liu | [Filatov et al., Phys. Chem. Chem. Phys. 2016, 18, 21040](https://doi.org/10.1039/C6CP00236F); [Filatov et al., J. Chem. Phys. 2016, 145, 244104](https://doi.org/10.1063/1.4972174) | TeraChem development version (2016–2017) |
| 2017 | SI-SA-REKS(4,4); analytic gradient formalism | M. Filatov, T. J. Martínez, K. S. Kim, F. Liu | [Filatov et al., J. Chem. Phys. 2017, 147, 064104](https://doi.org/10.1063/1.4996873); [Filatov et al., J. Chem. Phys. 2017, 147, 034113](https://doi.org/10.1063/1.4994542) | |
| 2018 | Nonadiabatic dynamics | M. Filatov, S. K. Min, K. S. Kim | [Filatov et al., J. Chem. Theory Comput. 2018, 14, 4499](https://doi.org/10.1021/acs.jctc.8b00217) | |
| 2019 | DFTB/SSR | I. S. Lee, Filatov, Min | J. Chem. Theory Comput. 2019, 15, 3021 (citation to be added) | DFTB+ development version |
| 2020 | Extended Koopmans' theorem, electron affinities | M. Filatov, S. Lee, C. H. Choi, H. Nakata | [Filatov et al., J. Chem. Theory Comput. 2020, 16, 4489](https://doi.org/10.1021/acs.jctc.0c00218); [Filatov et al., J. Phys. Chem. A 2020, 124, 7795](https://doi.org/10.1021/acs.jpca.0c06976) | |
| 2021 | Analytic gradients implemented on GPUs; sudden polarization | F. Liu, M. Filatov, T. J. Martínez, S. Lee, C. H. Choi | [Liu et al., J. Chem. Phys. 2021, 154, 104108](https://doi.org/10.1063/5.0041389); [Filatov et al., J. Chem. Theory Comput. 2021, 17, 5123](https://doi.org/10.1021/acs.jctc.1c00479) | to be added |
| 2026 | REKS Studio: equations generated symbolically for an arbitrary active space; (10,10) applied; (12,12) generated; in Psi4 | K. Komarov, M. Filatov, S. K. Min | [Komarov et al., ChemRxiv 2026](https://doi.org/10.26434/chemrxiv.15008475/v1); [Smith et al., J. Chem. Phys. 2020, 152, 184108](https://doi.org/10.1063/5.0006002) | |

Version history of the code: [Changes](https://reksstudio.github.io/v2/docs/changes/index.md).
