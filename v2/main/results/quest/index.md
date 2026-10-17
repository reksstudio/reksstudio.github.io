# QUEST vertical excitations — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/quest/>

Psi4 commit of these outputs: ddc2f581c (kk/reks.v42). Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# QUEST vertical excitations

S1, S2, T1 and T2 vertical excitation energies of 62 molecules from QUEST3/5/6/7 against theoretical best estimates (TBE): 192 state pairs (100 singlet, 92 triplet); SSR with BH\&HLYP, M08-SO and ωB97X, aug-cc-pVTZ.

Reference class: model vs benchmark set (TBE)

MAE 0.212 / 0.230 / 0.220 eV (BH\&HLYP / M08-SO / ωB97X); median absolute error 0.131 / 0.169 / 0.158 eV.

Per state, the value of the active space (2,2)–(8,8) closest to the TBE.

[Errors by state](#errors) · [By QUEST set](#sets) · [SSR against TBE](#parity) · [Molecules](#molecules) · [Full table](#table) · [Setup and reference](#setup)

## Errors by state

Δ = E<sub>SSR</sub> − E<sub>TBE</sub>. MSE: mean signed error; SDE: standard deviation of Δ; MedAE: median absolute error.

S1, N = 59: Δ = E(SSR) − E(TBE) per state pair; BH\&HLYP MAE 0.248 eV, MSE +0.134 eV; M08-SO MAE 0.233 eV, MSE +0.086 eV; ωB97X MAE 0.224 eV, MSE +0.156 eV

S2, N = 41: Δ = E(SSR) − E(TBE) per state pair; BH\&HLYP MAE 0.271 eV, MSE +0.113 eV; M08-SO MAE 0.296 eV, MSE +0.043 eV; ωB97X MAE 0.289 eV, MSE +0.133 eV

T1, N = 50: Δ = E(SSR) − E(TBE) per state pair; BH\&HLYP MAE 0.140 eV, MSE +0.116 eV; M08-SO MAE 0.217 eV, MSE +0.200 eV; ωB97X MAE 0.192 eV, MSE +0.180 eV

T2, N = 42: Δ = E(SSR) − E(TBE) per state pair; BH\&HLYP MAE 0.190 eV, MSE +0.041 eV; M08-SO MAE 0.180 eV, MSE +0.139 eV; ωB97X MAE 0.178 eV, MSE +0.121 eV

Δ / eV, common axis for all panels. One dot per state pair, linked to its molecule page; vertical bar: mean signed error (MSE); right: MAE / eV. Blue: singlets, orange: triplets.

All sets, per state

| States | Functional | N | MAE / eV | MSE / eV | SDE / eV | MedAE / eV |
| - | - | - | - | - | - | - |
| S1 | BH\&HLYP | 59 | 0.248 | +0.134 | 0.287 | 0.221 |
| | M08-SO | 59 | 0.233 | +0.086 | 0.289 | 0.202 |
| | ωB97X | 59 | 0.224 | +0.156 | 0.262 | 0.148 |
| S2 | BH\&HLYP | 41 | 0.271 | +0.113 | 0.365 | 0.159 |
| | M08-SO | 41 | 0.296 | +0.043 | 0.422 | 0.202 |
| | ωB97X | 41 | 0.289 | +0.133 | 0.386 | 0.254 |
| T1 | BH\&HLYP | 50 | 0.140 | +0.116 | 0.189 | 0.072 |
| | M08-SO | 50 | 0.217 | +0.200 | 0.178 | 0.195 |
| | ωB97X | 50 | 0.192 | +0.180 | 0.171 | 0.165 |
| T2 | BH\&HLYP | 42 | 0.190 | +0.041 | 0.267 | 0.121 |
| | M08-SO | 42 | 0.180 | +0.139 | 0.236 | 0.094 |
| | ωB97X | 42 | 0.178 | +0.121 | 0.226 | 0.093 |
| S1 + S2 | BH\&HLYP | 100 | 0.258 | +0.126 | 0.319 | 0.211 |
| | M08-SO | 100 | 0.259 | +0.068 | 0.348 | 0.202 |
| | ωB97X | 100 | 0.251 | +0.147 | 0.317 | 0.160 |
| T1 + T2 | BH\&HLYP | 92 | 0.163 | +0.082 | 0.230 | 0.109 |
| | M08-SO | 92 | 0.200 | +0.172 | 0.208 | 0.158 |
| | ωB97X | 92 | 0.186 | +0.153 | 0.199 | 0.155 |
| all | BH\&HLYP | 192 | 0.212 | +0.105 | 0.280 | 0.131 |
| | M08-SO | 192 | 0.230 | +0.118 | 0.294 | 0.169 |
| | ωB97X | 192 | 0.220 | +0.149 | 0.267 | 0.158 |

## By QUEST set

Per QUEST set, all states

| Set | Functional | N | MAE / eV | MSE / eV | SDE / eV | MedAE / eV |
| - | - | - | - | - | - | - |
| QUEST3 | BH\&HLYP | 97 | 0.224 | +0.094 | 0.295 | 0.144 |
| | M08-SO | 97 | 0.256 | +0.119 | 0.324 | 0.212 |
| | ωB97X | 97 | 0.210 | +0.109 | 0.271 | 0.153 |
| QUEST5 | BH\&HLYP | 43 | 0.199 | +0.092 | 0.259 | 0.121 |
| | M08-SO | 43 | 0.216 | +0.106 | 0.262 | 0.162 |
| | ωB97X | 43 | 0.221 | +0.160 | 0.265 | 0.127 |
| QUEST6 | BH\&HLYP | 32 | 0.241 | +0.144 | 0.325 | 0.133 |
| | M08-SO | 32 | 0.225 | +0.136 | 0.307 | 0.164 |
| | ωB97X | 32 | 0.235 | +0.201 | 0.288 | 0.146 |
| QUEST7 | BH\&HLYP | 20 | 0.139 | +0.118 | 0.157 | 0.104 |
| | M08-SO | 20 | 0.147 | +0.114 | 0.168 | 0.107 |
| | ωB97X | 20 | 0.240 | +0.239 | 0.178 | 0.215 |
| All QUEST | BH\&HLYP | 192 | 0.212 | +0.105 | 0.280 | 0.131 |
| | M08-SO | 192 | 0.230 | +0.118 | 0.294 | 0.169 |
| | ωB97X | 192 | 0.220 | +0.149 | 0.267 | 0.158 |

Singlets and triplets per set

Per QUEST set, singlets and triplets

| Set, states | Functional | N | MAE / eV | MSE / eV | SDE / eV | MedAE / eV |
| - | - | - | - | - | - | - |
| QUEST3, S1 + S2 | BH\&HLYP | 46 | 0.297 | +0.119 | 0.357 | 0.265 |
| | M08-SO | 46 | 0.327 | +0.059 | 0.425 | 0.296 |
| | ωB97X | 46 | 0.277 | +0.098 | 0.353 | 0.252 |
| QUEST3, T1 + T2 | BH\&HLYP | 51 | 0.159 | +0.072 | 0.226 | 0.108 |
| | M08-SO | 51 | 0.192 | +0.172 | 0.183 | 0.159 |
| | ωB97X | 51 | 0.150 | +0.120 | 0.169 | 0.108 |
| QUEST5, S1 + S2 | BH\&HLYP | 21 | 0.235 | +0.131 | 0.282 | 0.213 |
| | M08-SO | 21 | 0.257 | +0.086 | 0.313 | 0.232 |
| | ωB97X | 21 | 0.238 | +0.186 | 0.295 | 0.109 |
| QUEST5, T1 + T2 | BH\&HLYP | 22 | 0.165 | +0.054 | 0.236 | 0.097 |
| | M08-SO | 22 | 0.177 | +0.124 | 0.208 | 0.110 |
| | ωB97X | 22 | 0.205 | +0.136 | 0.238 | 0.173 |
| QUEST6, S1 + S2 | BH\&HLYP | 24 | 0.242 | +0.123 | 0.338 | 0.151 |
| | M08-SO | 24 | 0.182 | +0.075 | 0.274 | 0.089 |
| | ωB97X | 24 | 0.218 | +0.172 | 0.306 | 0.108 |
| QUEST6, T1 + T2 | BH\&HLYP | 8 | 0.238 | +0.206 | 0.295 | 0.126 |
| | M08-SO | 8 | 0.354 | +0.318 | 0.348 | 0.201 |
| | ωB97X | 8 | 0.286 | +0.286 | 0.223 | 0.182 |
| QUEST7, S1 + S2 | BH\&HLYP | 9 | 0.155 | +0.152 | 0.125 | 0.114 |
| | M08-SO | 9 | 0.117 | +0.056 | 0.158 | 0.098 |
| | ωB97X | 9 | 0.239 | +0.236 | 0.176 | 0.254 |
| QUEST7, T1 + T2 | BH\&HLYP | 11 | 0.126 | +0.091 | 0.181 | 0.097 |
| | M08-SO | 11 | 0.171 | +0.162 | 0.168 | 0.156 |
| | ωB97X | 11 | 0.242 | +0.242 | 0.189 | 0.190 |

## SSR against TBE

BH\&HLYP: SSR against TBE excitation energy, 192 state pairs, TBE 0.88–8.15 eV; MAE 0.212 eV

M08-SO: SSR against TBE excitation energy, 192 state pairs, TBE 0.88–8.15 eV; MAE 0.230 eV

ωB97X: SSR against TBE excitation energy, 192 state pairs, TBE 0.88–8.15 eV; MAE 0.220 eV

* S1 (dot), S2 (ring)
* T1 (dot), T2 (ring)
* dashed: SSR = TBE

## Molecules

Drawings of the computed geometries: explicit hydrogens, no bond orders, one scale for all molecules. Δ / eV per state and functional; –: no pair for this state. A card opens the molecule page: every active space per state.

* C
* H
* N
* O
* S

### QUEST3: 27 molecules {#quest3}

* ![acetone: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_acetone.svg)

  [acetone](https://reksstudio.github.io/v2/main/results/quest/quest3-acetone/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.146 | +0.137 | +0.201 |
  | S2 | – | – | – |
  | T1 | +0.016 | +0.118 | +0.068 |
  | T2 | −0.258 | +0.105 | −0.035 |

* ![acrolein: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_acrolein.svg)

  [acrolein](https://reksstudio.github.io/v2/main/results/quest/quest3-acrolein/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.296 | +0.388 | +0.137 |
  | S2 | −0.142 | +0.219 | −0.029 |
  | T1 | +0.165 | +0.393 | +0.029 |
  | T2 | +0.008 | +0.048 | +0.006 |

* ![benzene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_benzene.svg)

  [benzene](https://reksstudio.github.io/v2/main/results/quest/quest3-benzene/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.353 | +0.310 | +0.437 |
  | S2 | −0.144 | −0.607 | −0.269 |
  | T1 | +0.075 | +0.212 | +0.154 |
  | T2 | −0.013 | +0.166 | +0.108 |

* ![butadiene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_butadiene.svg)

  [butadiene](https://reksstudio.github.io/v2/main/results/quest/quest3-butadiene/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | −0.143 | −0.448 | +0.028 |
  | S2 | −0.159 | −0.226 | −0.288 |
  | T1 | −0.004 | +0.153 | +0.153 |
  | T2 | −0.113 | −0.041 | +0.036 |

* ![cyanoacetylene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_cyanoacetylene.svg)

  [cyanoacetylene](https://reksstudio.github.io/v2/main/results/quest/quest3-cyanoacetylene/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | −0.354 | −0.097 | −0.161 |
  | S2 | −0.620 | −1.014 | −0.714 |
  | T1 | +0.131 | +0.403 | +0.291 |
  | T2 | −0.240 | −0.029 | −0.086 |

* ![cyanoformaldehyde: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_cyanoformaldehyde.svg)

  [cyanoformaldehyde](https://reksstudio.github.io/v2/main/results/quest/quest3-cyanoformaldehyde/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.144 | +0.278 | +0.293 |
  | S2 | – | – | – |
  | T1 | +0.011 | +0.292 | +0.171 |
  | T2 | −0.121 | +0.021 | −0.093 |

* ![cyanogen: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_cyanogen.svg)

  [cyanogen](https://reksstudio.github.io/v2/main/results/quest/quest3-cyanogen/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | −0.210 | +0.084 | +0.001 |
  | S2 | −0.507 | −0.869 | −0.745 |
  | T1 | −0.071 | +0.240 | +0.066 |
  | T2 | – | – | – |

* ![cyclopentadiene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_cyclopentadiene.svg)

  [cyclopentadiene](https://reksstudio.github.io/v2/main/results/quest/quest3-cyclopentadiene/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | −0.035 | −0.378 | −0.132 |
  | S2 | −0.305 | −0.349 | −0.342 |
  | T1 | −0.041 | +0.142 | +0.101 |
  | T2 | −0.108 | +0.000 | −0.039 |

* ![cyclopropenethione: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_cyclopropenethione.svg)

  [cyclopropenethione](https://reksstudio.github.io/v2/main/results/quest/quest3-cyclopropenethione/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.289 | +0.425 | +0.348 |
  | S2 | −0.118 | −0.019 | −0.078 |
  | T1 | +0.196 | +0.263 | +0.228 |
  | T2 | −0.122 | −0.050 | −0.092 |

* ![cyclopropenone: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_cyclopropenone.svg)

  [cyclopropenone](https://reksstudio.github.io/v2/main/results/quest/quest3-cyclopropenone/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.051 | +0.121 | +0.013 |
  | S2 | +0.792 | +0.853 | +0.845 |
  | T1 | +0.064 | +0.081 | +0.008 |
  | T2 | −0.121 | +0.005 | −0.004 |

* ![diacetylene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_diacetylene.svg)

  [diacetylene](https://reksstudio.github.io/v2/main/results/quest/quest3-diacetylene/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | −0.267 | −0.034 | −0.058 |
  | S2 | −0.588 | −0.970 | −0.518 |
  | T1 | +0.115 | +0.340 | +0.251 |
  | T2 | −0.150 | −0.045 | −0.006 |

* ![furan: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_furan.svg)

  [furan](https://reksstudio.github.io/v2/main/results/quest/quest3-furan/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | −0.221 | −0.311 | −0.266 |
  | S2 | +0.086 | −0.089 | +0.100 |
  | T1 | +0.012 | +0.029 | +0.160 |
  | T2 | −0.056 | +0.085 | +0.058 |

* ![glyoxal: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_glyoxal.svg)

  [glyoxal](https://reksstudio.github.io/v2/main/results/quest/quest3-glyoxal/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.651 | +0.685 | +0.794 |
  | S2 | – | – | – |
  | T1 | +0.550 | +0.788 | +0.699 |
  | T2 | −0.312 | −0.179 | −0.261 |

* ![imidazole: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_imidazole.svg)

  [imidazole](https://reksstudio.github.io/v2/main/results/quest/quest3-imidazole/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.412 | −0.311 | −0.096 |
  | S2 | −0.006 | −0.015 | +0.004 |
  | T1 | −0.002 | +0.159 | +0.110 |
  | T2 | −0.054 | +0.155 | +0.094 |

* ![isobutene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_isobutene.svg)

  [isobutene](https://reksstudio.github.io/v2/main/results/quest/quest3-isobutene/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | – | – | – |
  | S2 | – | – | – |
  | T1 | +0.009 | +0.045 | +0.035 |
  | T2 | – | – | – |

* ![methylenecyclopropene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_methylenecyclopropene.svg)

  [methylenecyclopropene](https://reksstudio.github.io/v2/main/results/quest/quest3-methylenecyclopropene/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | −0.024 | −0.012 | +0.065 |
  | S2 | +0.050 | −0.018 | +0.288 |
  | T1 | −0.066 | −0.028 | +0.021 |
  | T2 | −0.256 | −0.121 | −0.088 |

* ![propynal: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_propynal.svg)

  [propynal](https://reksstudio.github.io/v2/main/results/quest/quest3-propynal/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.166 | −0.009 | +0.091 |
  | S2 | – | – | – |
  | T1 | +0.073 | +0.099 | +0.021 |
  | T2 | +0.028 | +0.013 | +0.027 |

* ![pyrazine: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_pyrazine.svg)

  [pyrazine](https://reksstudio.github.io/v2/main/results/quest/quest3-pyrazine/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.149 | +0.012 | −0.013 |
  | S2 | −0.026 | +0.659 | −0.071 |
  | T1 | +0.246 | +0.212 | +0.124 |
  | T2 | +0.081 | +0.292 | +0.156 |

* ![pyridazine: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_pyridazine.svg)

  [pyridazine](https://reksstudio.github.io/v2/main/results/quest/quest3-pyridazine/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.315 | +0.157 | +0.148 |
  | S2 | +0.414 | +0.284 | +0.304 |
  | T1 | +0.265 | +0.213 | +0.168 |
  | T2 | +0.504 | +0.381 | +0.380 |

* ![pyridine: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_pyridine.svg)

  [pyridine](https://reksstudio.github.io/v2/main/results/quest/quest3-pyridine/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | −0.124 | −0.169 | −0.213 |
  | S2 | +0.462 | +0.387 | +0.476 |
  | T1 | −0.025 | +0.026 | −0.069 |
  | T2 | +0.042 | +0.142 | +0.057 |

* ![pyrimidine: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_pyrimidine.svg)

  [pyrimidine](https://reksstudio.github.io/v2/main/results/quest/quest3-pyrimidine/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.553 | +0.394 | +0.434 |
  | S2 | +0.876 | +0.747 | +0.778 |
  | T1 | +0.594 | +0.517 | +0.483 |
  | T2 | +0.236 | +0.394 | +0.236 |

* ![pyrrole: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_pyrrole.svg)

  [pyrrole](https://reksstudio.github.io/v2/main/results/quest/quest3-pyrrole/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | −0.082 | −0.087 | −0.101 |
  | S2 | +0.276 | +0.083 | +0.387 |
  | T1 | +0.052 | +0.043 | +0.167 |
  | T2 | +0.003 | +0.194 | +0.166 |

* ![tetrazine: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_tetrazine.svg)

  [tetrazine](https://reksstudio.github.io/v2/main/results/quest/quest3-tetrazine/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.291 | +0.121 | +0.084 |
  | S2 | +0.676 | +0.432 | +0.413 |
  | T1 | +0.412 | +0.312 | +0.245 |
  | T2 | +0.692 | +0.453 | +0.425 |

* ![thioacetone: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_thioacetone.svg)

  [thioacetone](https://reksstudio.github.io/v2/main/results/quest/quest3-thioacetone/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.263 | +0.412 | +0.334 |
  | S2 | – | – | – |
  | T1 | +0.119 | +0.267 | +0.191 |
  | T2 | −0.069 | +0.001 | +0.005 |

* ![thiophene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_thiophene.svg)

  [thiophene](https://reksstudio.github.io/v2/main/results/quest/quest3-thiophene/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.322 | +0.272 | +0.358 |
  | S2 | +0.062 | −0.134 | −0.022 |
  | T1 | −0.013 | +0.189 | +0.113 |
  | T2 | +0.130 | +0.256 | +0.234 |

* ![thiopropynal: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_thiopropynal.svg)

  [thiopropynal](https://reksstudio.github.io/v2/main/results/quest/quest3-thiopropynal/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.188 | +0.426 | +0.237 |
  | S2 | – | – | – |
  | T1 | +0.043 | +0.275 | +0.093 |
  | T2 | – | – | – |

* ![triazine: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest3_triazine.svg)

  [triazine](https://reksstudio.github.io/v2/main/results/quest/quest3-triazine/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.816 | +0.688 | +0.679 |
  | S2 | +0.472 | +0.308 | +0.346 |
  | T1 | +0.580 | +0.424 | +0.430 |
  | T2 | +0.425 | +0.333 | +0.313 |

### QUEST5: 13 molecules {#quest5}

* ![azanaphthalene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest5_azanaphthalene.svg)

  [azanaphthalene](https://reksstudio.github.io/v2/main/results/quest/quest5-azanaphthalene/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.448 | +0.232 | +0.291 |
  | S2 | +0.452 | +0.504 | +0.746 |
  | T1 | +0.102 | +0.400 | +0.424 |
  | T2 | +0.135 | −0.060 | −0.067 |

* ![benzoquinone: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest5_benzoquinone.svg)

  [benzoquinone](https://reksstudio.github.io/v2/main/results/quest/quest5-benzoquinone/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.547 | +0.280 | +0.465 |
  | S2 | −0.051 | +0.087 | +0.069 |
  | T1 | +0.502 | +0.409 | +0.436 |
  | T2 | −0.085 | +0.025 | +0.062 |

* ![cyclopentadienethione: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest5_cyclopentadienethione.svg)

  [cyclopentadienethione](https://reksstudio.github.io/v2/main/results/quest/quest5-cyclopentadienethione/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | −0.116 | −0.039 | −0.127 |
  | S2 | +0.020 | +0.068 | −0.070 |
  | T1 | −0.232 | −0.157 | −0.247 |
  | T2 | +0.091 | +0.062 | +0.025 |

* ![cyclopentadienone: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest5_cyclopentadienone.svg)

  [cyclopentadienone](https://reksstudio.github.io/v2/main/results/quest/quest5-cyclopentadienone/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | −0.255 | −0.341 | −0.330 |
  | S2 | +0.043 | −0.049 | +0.015 |
  | T1 | −0.026 | −0.082 | +0.085 |
  | T2 | −0.335 | −0.288 | −0.405 |

* ![diazirine: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest5_diazirine.svg)

  [diazirine](https://reksstudio.github.io/v2/main/results/quest/quest5-diazirine/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.031 | +0.146 | +0.088 |
  | S2 | – | – | – |
  | T1 | −0.064 | +0.073 | +0.043 |
  | T2 | – | – | – |

* ![hexatriene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest5_hexatriene.svg)

  [hexatriene](https://reksstudio.github.io/v2/main/results/quest/quest5-hexatriene/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | −0.283 | −0.524 | +0.031 |
  | S2 | +0.071 | +0.025 | +0.006 |
  | T1 | +0.015 | +0.137 | +0.203 |
  | T2 | −0.058 | +0.054 | +0.193 |

* ![maleimide: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest5_maleimide.svg)

  [maleimide](https://reksstudio.github.io/v2/main/results/quest/quest5-maleimide/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.674 | +0.538 | +0.632 |
  | S2 | +0.075 | −0.044 | +0.092 |
  | T1 | +0.624 | +0.610 | +0.585 |
  | T2 | −0.010 | +0.046 | +0.009 |

* ![naphthalene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest5_naphthalene.svg)

  [naphthalene](https://reksstudio.github.io/v2/main/results/quest/quest5-naphthalene/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.484 | +0.488 | +0.814 |
  | S2 | −0.014 | −0.258 | +0.000 |
  | T1 | +0.151 | +0.220 | +0.234 |
  | T2 | +0.311 | +0.365 | +0.460 |

* ![nitroxyl: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest5_nitroxyl.svg)

  [nitroxyl](https://reksstudio.github.io/v2/main/results/quest/quest5-nitroxyl/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.345 | +0.162 | +0.109 |
  | S2 | – | – | – |
  | T1 | +0.290 | +0.232 | +0.110 |
  | T2 | −0.389 | +0.031 | −0.040 |

* ![octatetraene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest5_octatetraene.svg)

  [octatetraene](https://reksstudio.github.io/v2/main/results/quest/quest5-octatetraene/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | −0.365 | −0.533 | −0.017 |
  | S2 | +0.057 | +0.034 | +0.088 |
  | T1 | +0.059 | +0.166 | +0.231 |
  | T2 | −0.012 | +0.053 | +0.445 |

* ![streptocyanine-C3: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest5_strepto-c3.svg)

  [streptocyanine-C3](https://reksstudio.github.io/v2/main/results/quest/quest5-strepto-c3/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.121 | +0.220 | +0.229 |
  | S2 | – | – | – |
  | T1 | −0.002 | +0.044 | +0.029 |
  | T2 | – | – | – |

* ![streptocyanine-C5: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest5_strepto-c5.svg)

  [streptocyanine-C5](https://reksstudio.github.io/v2/main/results/quest/quest5-strepto-c5/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.213 | +0.330 | +0.495 |
  | S2 | – | – | – |
  | T1 | −0.003 | +0.029 | +0.016 |
  | T2 | – | – | – |

* ![thioacrolein: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest5_thioacrolein.svg)

  [thioacrolein](https://reksstudio.github.io/v2/main/results/quest/quest5-thioacrolein/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.260 | +0.487 | +0.276 |
  | S2 | – | – | – |
  | T1 | +0.133 | +0.357 | +0.153 |
  | T2 | – | – | – |

### QUEST6: 16 molecules {#quest6}

* ![aminobenzonitrile: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest6_aminobenzonitrile.svg)

  [aminobenzonitrile](https://reksstudio.github.io/v2/main/results/quest/quest6-aminobenzonitrile/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.037 | +0.078 | +0.074 |
  | S2 | – | – | – |
  | T1 | – | – | – |
  | T2 | – | – | – |

* ![aniline: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest6_aniline.svg)

  [aniline](https://reksstudio.github.io/v2/main/results/quest/quest6-aniline/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.014 | −0.074 | +0.082 |
  | S2 | – | – | – |
  | T1 | – | – | – |
  | T2 | – | – | – |

* ![azulene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest6_azulene.svg)

  [azulene](https://reksstudio.github.io/v2/main/results/quest/quest6-azulene/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.264 | +0.337 | +0.261 |
  | S2 | −0.050 | −0.214 | +0.067 |
  | T1 | +0.122 | −0.145 | +0.170 |
  | T2 | +0.362 | +0.460 | +0.420 |

* ![benzothiadiazole: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest6_benzothiadiazole.svg)

  [benzothiadiazole](https://reksstudio.github.io/v2/main/results/quest/quest6-benzothiadiazole/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.043 | −0.058 | +0.136 |
  | S2 | +0.165 | +0.202 | +0.408 |
  | T1 | +0.000 | +0.201 | +0.162 |
  | T2 | −0.130 | +0.042 | +0.026 |

* ![dimethylaniline: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest6_dimethylaniline.svg)

  [dimethylaniline](https://reksstudio.github.io/v2/main/results/quest/quest6-dimethylaniline/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.321 | +0.209 | +0.372 |
  | S2 | −0.013 | −0.043 | +0.052 |
  | T1 | – | – | – |
  | T2 | – | – | – |

* ![dipeptide: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest6_dipeptide.svg)

  [dipeptide](https://reksstudio.github.io/v2/main/results/quest/quest6-dipeptide/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | −0.237 | −0.319 | +0.059 |
  | S2 | – | – | – |
  | T1 | – | – | – |
  | T2 | – | – | – |

* ![DMABN: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest6_dmabn.svg)

  [DMABN](https://reksstudio.github.io/v2/main/results/quest/quest6-dmabn/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | −0.007 | +0.009 | +0.110 |
  | S2 | – | – | – |
  | T1 | – | – | – |
  | T2 | – | – | – |

* ![N-phenylpyrrole: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest6_n-phenylpyrrole.svg)

  [N-phenylpyrrole](https://reksstudio.github.io/v2/main/results/quest/quest6-n-phenylpyrrole/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.053 | −0.016 | +0.184 |
  | S2 | −0.486 | −0.024 | −0.063 |
  | T1 | – | – | – |
  | T2 | – | – | – |

* ![nitroaniline: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest6_nitroaniline.svg)

  [nitroaniline](https://reksstudio.github.io/v2/main/results/quest/quest6-nitroaniline/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | −0.005 | −0.003 | +0.002 |
  | S2 | – | – | – |
  | T1 | – | – | – |
  | T2 | – | – | – |

* ![nitrobenzene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest6_nitrobenzene.svg)

  [nitrobenzene](https://reksstudio.github.io/v2/main/results/quest/quest6-nitrobenzene/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | −0.065 | −0.158 | −0.008 |
  | S2 | – | – | – |
  | T1 | – | – | – |
  | T2 | – | – | – |

* ![nitrodimethylaniline: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest6_nitrodimethylaniline.svg)

  [nitrodimethylaniline](https://reksstudio.github.io/v2/main/results/quest/quest6-nitrodimethylaniline/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.021 | +0.009 | +0.040 |
  | S2 | – | – | – |
  | T1 | – | – | – |
  | T2 | – | – | – |

* ![NPNO: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest6_npno.svg)

  [NPNO](https://reksstudio.github.io/v2/main/results/quest/quest6-npno/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | −0.136 | −0.092 | −0.013 |
  | S2 | – | – | – |
  | T1 | – | – | – |
  | T2 | – | – | – |

* ![phthalazine: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest6_phthalazine.svg)

  [phthalazine](https://reksstudio.github.io/v2/main/results/quest/quest6-phthalazine/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.774 | +0.595 | +0.652 |
  | S2 | +0.315 | +0.087 | +0.156 |
  | T1 | +0.103 | +0.180 | +0.179 |
  | T2 | +0.841 | +0.714 | +0.729 |

* ![quinoxaline: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest6_quinoxaline.svg)

  [quinoxaline](https://reksstudio.github.io/v2/main/results/quest/quest6-quinoxaline/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.076 | −0.001 | +0.113 |
  | S2 | +0.435 | +0.460 | +0.778 |
  | T1 | +0.114 | +0.200 | +0.185 |
  | T2 | +0.233 | +0.894 | +0.416 |

* ![twisted DMABN: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest6_tdmabn.svg)

  [twisted DMABN](https://reksstudio.github.io/v2/main/results/quest/quest6-tdmabn/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | −0.423 | −0.278 | −0.355 |
  | S2 | +1.021 | +0.885 | +1.090 |
  | T1 | – | – | – |
  | T2 | – | – | – |

* ![twisted N-phenylpyrrole: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest6_twisted-n-phenylpyrrole.svg)

  [twisted N-phenylpyrrole](https://reksstudio.github.io/v2/main/results/quest/quest6-twisted-n-phenylpyrrole/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.479 | +0.169 | −0.107 |
  | S2 | +0.359 | +0.051 | +0.040 |
  | T1 | – | – | – |
  | T2 | – | – | – |

### QUEST7: 6 molecules {#quest7}

* ![benzoxadiazole: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest7_benzoxadiazole.svg)

  [benzoxadiazole](https://reksstudio.github.io/v2/main/results/quest/quest7-benzoxadiazole/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.114 | −0.024 | −0.014 |
  | S2 | +0.044 | +0.111 | +0.163 |
  | T1 | −0.015 | +0.183 | +0.159 |
  | T2 | +0.110 | +0.226 | +0.257 |

* ![diketopyrrolopyrrole: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest7_diketopyrrolopyrrole.svg)

  [diketopyrrolopyrrole](https://reksstudio.github.io/v2/main/results/quest/quest7-diketopyrrolopyrrole/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.057 | −0.011 | +0.159 |
  | S2 | +0.289 | +0.364 | +0.254 |
  | T1 | +0.004 | +0.033 | +0.036 |
  | T2 | +0.015 | −0.015 | +0.016 |

* ![furofuran: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest7_furofuran.svg)

  [furofuran](https://reksstudio.github.io/v2/main/results/quest/quest7-furofuran/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | – | – | – |
  | S2 | +0.064 | −0.170 | +0.015 |
  | T1 | −0.051 | +0.088 | +0.190 |
  | T2 | −0.127 | −0.034 | +0.146 |

* ![pyrrolopyrrole: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest7_pyrrolopyrrole.svg)

  [pyrrolopyrrole](https://reksstudio.github.io/v2/main/results/quest/quest7-pyrrolopyrrole/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | – | – | – |
  | S2 | – | – | – |
  | T1 | +0.024 | +0.156 | +0.240 |
  | T2 | – | – | – |

* ![thienothiophene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest7_thienothiophene.svg)

  [thienothiophene](https://reksstudio.github.io/v2/main/results/quest/quest7-thienothiophene/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.201 | +0.007 | +0.336 |
  | S2 | +0.306 | +0.098 | +0.372 |
  | T1 | +0.116 | +0.211 | +0.280 |
  | T2 | +0.097 | +0.103 | +0.166 |

* ![TTF: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/quest/mol/quest7_ttf.svg)

  [TTF](https://reksstudio.github.io/v2/main/results/quest/quest7-ttf/index.md)

  | Δ | BH\&HLYP | M08-SO | ωB97X |
  | - | - | - | - |
  | S1 | +0.303 | +0.202 | +0.541 |
  | S2 | −0.013 | −0.069 | +0.295 |
  | T1 | +0.308 | +0.253 | +0.562 |
  | T2 | +0.517 | +0.575 | +0.608 |

## Full table

Functional

\[x] BH\&HLYP \[ ] M08-SO \[ ] ωB97X

BH\&HLYP

| Molecule | State | TBE / eV | SSR / eV | Δ / eV | Active space | TBE irrep | SSR irrep |
| - | - | - | - | - | - | - | - |
| [acetone](#m-acetone) | S1 | 4.47 | 4.616 | +0.146 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| | T1 | 4.13 | 4.146 | +0.016 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| | T2 | 6.25 | 5.992 | −0.258 | (2,2) | A<sub>1</sub> | A<sub>1</sub> |
| [acrolein](#m-acrolein) | S1 | 3.78 | 4.076 | +0.296 | (4,4) | A′′ | A′′ |
| | S2 | 6.69 | 6.548 | −0.142 | (2,2) | A′ | A′ |
| | T1 | 3.51 | 3.675 | +0.165 | (4,4) | A′′ | A′′ |
| | T2 | 3.94 | 3.948 | +0.008 | (4,4) | A′ | A′ |
| [benzene](#m-benzene) | S1 | 5.06 | 5.413 | +0.353 | (6,6) | B<sub>2u</sub> | B<sub>3u</sub><sup>a</sup> |
| | S2 | 6.45 | 6.306 | −0.144 | (8,8) | B<sub>1u</sub> | B<sub>2u</sub><sup>a</sup> |
| | T1 | 4.16 | 4.235 | +0.075 | (6,6) | B<sub>1u</sub> | B<sub>2u</sub><sup>a</sup> |
| | T2 | 4.85 | 4.837 | −0.013 | (6,6) | E<sub>1u</sub> | B<sub>2u</sub><sup>a</sup> |
| [butadiene](#m-butadiene) | S1 | 6.22 | 6.077 | −0.143 | (6,6) | B<sub>u</sub> | B<sub>u</sub> |
| | S2 | 6.50 | 6.341 | −0.159 | (6,6) | A<sub>g</sub> | A<sub>g</sub> |
| | T1 | 3.36 | 3.356 | −0.004 | (4,4) | B<sub>u</sub> | B<sub>u</sub> |
| | T2 | 5.20 | 5.087 | −0.113 | (4,4) | A<sub>g</sub> | A<sub>g</sub> |
| [cyanoacetylene](#m-cyanoacetylene) | S1 | 5.80 | 5.446 | −0.354 | (4,4) | Σ<sup>−</sup> | A<sub>2</sub><sup>a</sup> |
| | S2 | 6.07 | 5.450 | −0.620 | (4,4) | Δ | A<sub>1</sub><sup>a</sup> |
| | T1 | 4.44 | 4.571 | +0.131 | (8,8) | Σ<sup>+</sup> | A<sub>1</sub><sup>a</sup> |
| | T2 | 5.21 | 4.970 | −0.240 | (8,8) | Δ | A<sub>1</sub><sup>a</sup> |
| [cyanoformaldehyde](#m-cyanoformaldehyde) | S1 | 3.81 | 3.954 | +0.144 | (4,4) | A′′ | A′′ |
| | T1 | 3.44 | 3.451 | +0.011 | (4,4) | A′′ | A′′ |
| | T2 | 5.01 | 4.889 | −0.121 | (2,2) | A′ | A′ |
| [cyanogen](#m-cyanogen) | S1 | 6.39 | 6.180 | −0.210 | (6,6) | Σ<sub>u</sub><sup>−</sup> | A<sub>u</sub><sup>a</sup> |
| | S2 | 6.66 | 6.153 | −0.507 | (6,6) | Δ<sub>u</sub> | B<sub>1u</sub><sup>a</sup> |
| | T1 | 4.91 | 4.839 | −0.071 | (8,8) | Σ<sub>u</sub><sup>+</sup> | B<sub>1u</sub><sup>a</sup> |
| [cyclopentadiene](#m-cyclopentadiene) | S1 | 5.54 | 5.505 | −0.035 | (6,6) | B<sub>2</sub> | B<sub>2</sub> |
| | S2 | 6.52 | 6.215 | −0.305 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| | T1 | 3.31 | 3.269 | −0.041 | (6,6) | B<sub>2</sub> | B<sub>2</sub> |
| | T2 | 5.11 | 5.002 | −0.108 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| [cyclopropenethione](#m-cyclopropenethione) | S1 | 3.41 | 3.700 | +0.289 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| | S2 | 3.45 | 3.332 | −0.118 | (4,4) | B<sub>1</sub> | B<sub>1</sub> |
| | T1 | 3.28 | 3.475 | +0.196 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| | T2 | 3.32 | 3.198 | −0.122 | (4,4) | B<sub>1</sub> | B<sub>1</sub> |
| [cyclopropenone](#m-cyclopropenone) | S1 | 4.26 | 4.311 | +0.051 | (6,6) | B<sub>1</sub> | B<sub>1</sub> |
| | S2 | 5.55 | 6.342 | +0.792 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| | T1 | 3.93 | 3.994 | +0.064 | (6,6) | B<sub>1</sub> | B<sub>1</sub> |
| | T2 | 4.88 | 4.759 | −0.121 | (2,2) | B<sub>2</sub> | B<sub>2</sub> |
| [diacetylene](#m-diacetylene) | S1 | 5.33 | 5.063 | −0.267 | (6,6) | Σ<sub>u</sub><sup>−</sup> | A<sub>u</sub><sup>a</sup> |
| | S2 | 5.61 | 5.022 | −0.588 | (6,6) | Δ<sub>u</sub> | B<sub>1u</sub><sup>a</sup> |
| | T1 | 4.10 | 4.215 | +0.115 | (8,8) | Σ<sub>u</sub><sup>+</sup> | B<sub>1u</sub><sup>a</sup> |
| | T2 | 4.78 | 4.630 | −0.150 | (6,6) | Δ<sub>u</sub> | B<sub>1u</sub><sup>a</sup> |
| [furan](#m-furan) | S1 | 6.56 | 6.339 | −0.221 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| | S2 | 6.37 | 6.456 | +0.086 | (4,4) | B<sub>2</sub> | B<sub>2</sub> |
| | T1 | 4.20 | 4.212 | +0.012 | (2,2) | B<sub>2</sub> | B<sub>2</sub> |
| | T2 | 5.46 | 5.404 | −0.056 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| [glyoxal](#m-glyoxal) | S1 | 2.88 | 3.531 | +0.651 | (4,4) | A<sub>u</sub> | A<sub>u</sub> |
| | T1 | 2.49 | 3.040 | +0.550 | (4,4) | A<sub>u</sub> | A<sub>u</sub> |
| | T2 | 6.30 | 5.988 | −0.312 | (4,4) | A<sub>g</sub> | A<sub>g</sub> |
| [imidazole](#m-imidazole) | S1 | 6.50 | 6.912 | +0.412 | (4,4) | A′′ | A′′ |
| | S2 | 6.41 | 6.404 | −0.006 | (4,4) | A′ | A′ |
| | T1 | 4.73 | 4.729 | −0.002 | (2,2) | A′ | A′ |
| | T2 | 6.31 | 6.256 | −0.054 | (4,4) | A′′ | A′′ |
| [isobutene](#m-isobutene) | T1 | 4.53 | 4.539 | +0.009 | (6,6) | A<sub>1</sub> | A<sub>1</sub> |
| [methylenecyclopropene](#m-methylenecyclopropene) | S1 | 4.28 | 4.256 | −0.024 | (6,6) | B<sub>2</sub> | B<sub>2</sub> |
| | S2 | 6.12 | 6.170 | +0.050 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| | T1 | 3.49 | 3.424 | −0.066 | (4,4) | B<sub>2</sub> | B<sub>2</sub> |
| | T2 | 4.74 | 4.484 | −0.256 | (8,8) | A<sub>1</sub> | A<sub>1</sub> |
| [propynal](#m-propynal) | S1 | 3.80 | 3.966 | +0.166 | (8,8) | A′′ | A′′ |
| | T1 | 3.47 | 3.543 | +0.073 | (4,4) | A′′ | A′′ |
| | T2 | 4.47 | 4.498 | +0.028 | (8,8) | A′ | A′ |
| [pyrazine](#m-pyrazine) | S1 | 4.15 | 4.299 | +0.149 | (4,4) | B<sub>3u</sub> | –<sup>m</sup> |
| | S2 | 6.88 | 6.854 | −0.026 | (8,8) | B<sub>1u</sub> | B<sub>1u</sub> |
| | T1 | 3.59 | 3.836 | +0.246 | (4,4) | B<sub>3u</sub> | –<sup>m</sup> |
| | T2 | 4.35 | 4.431 | +0.081 | (8,8) | B<sub>1u</sub> | B<sub>1u</sub> |
| [pyridazine](#m-pyridazine) | S1 | 3.83 | 4.145 | +0.315 | (4,4) | B<sub>1</sub> | B<sub>1</sub> |
| | S2 | 4.37 | 4.784 | +0.414 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| | T1 | 3.19 | 3.455 | +0.265 | (4,4) | B<sub>1</sub> | B<sub>1</sub> |
| | T2 | 4.11 | 4.614 | +0.504 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| [pyridine](#m-pyridine) | S1 | 4.95 | 4.826 | −0.124 | (4,4) | B<sub>1</sub> | –<sup>m</sup> |
| | S2 | 5.14 | 5.602 | +0.462 | (8,8) | B<sub>2</sub> | B<sub>2</sub> |
| | T1 | 4.30 | 4.275 | −0.025 | (4,4) | A<sub>1</sub> | –<sup>m</sup> |
| | T2 | 4.46 | 4.502 | +0.042 | (4,4) | B<sub>1</sub> | –<sup>m</sup> |
| [pyrimidine](#m-pyrimidine) | S1 | 4.44 | 4.993 | +0.553 | (4,4) | B<sub>1</sub> | B<sub>1</sub> |
| | S2 | 4.85 | 5.726 | +0.876 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| | T1 | 4.09 | 4.684 | +0.594 | (4,4) | B<sub>1</sub> | B<sub>1</sub> |
| | T2 | 4.51 | 4.746 | +0.236 | (6,6) | A<sub>1</sub> | A<sub>1</sub> |
| [pyrrole](#m-pyrrole) | S1 | 6.30 | 6.218 | −0.082 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| | S2 | 6.26 | 6.536 | +0.276 | (4,4) | B<sub>2</sub> | B<sub>2</sub> |
| | T1 | 4.51 | 4.562 | +0.052 | (2,2) | B<sub>2</sub> | B<sub>2</sub> |
| | T2 | 5.45 | 5.453 | +0.003 | (8,8) | A<sub>1</sub> | A<sub>1</sub> |
| [tetrazine](#m-tetrazine) | S1 | 2.47 | 2.761 | +0.291 | (4,4) | B<sub>3u</sub> | B<sub>3u</sub> |
| | S2 | 3.69 | 4.366 | +0.676 | (4,4) | A<sub>u</sub> | A<sub>u</sub> |
| | T1 | 1.85 | 2.262 | +0.412 | (4,4) | B<sub>3u</sub> | B<sub>3u</sub> |
| | T2 | 3.45 | 4.142 | +0.692 | (4,4) | A<sub>u</sub> | A<sub>u</sub> |
| [thioacetone](#m-thioacetone) | S1 | 2.53 | 2.793 | +0.263 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| | T1 | 2.33 | 2.449 | +0.119 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| | T2 | 3.45 | 3.381 | −0.069 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| [thiophene](#m-thiophene) | S1 | 5.64 | 5.962 | +0.322 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| | S2 | 5.98 | 6.042 | +0.062 | (2,2) | B<sub>2</sub> | B<sub>2</sub> |
| | T1 | 3.97 | 3.957 | −0.013 | (2,2) | B<sub>2</sub> | B<sub>2</sub> |
| | T2 | 4.76 | 4.890 | +0.130 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| [thiopropynal](#m-thiopropynal) | S1 | 2.03 | 2.218 | +0.188 | (4,4) | A′′ | A′′ |
| | T1 | 1.80 | 1.843 | +0.043 | (4,4) | A′′ | A′′ |
| [triazine](#m-triazine) | S1 | 4.72 | 5.536 | +0.816 | (4,4) | A<sub>1</sub>′′ | A<sub>2</sub><sup>a</sup> |
| | S2 | 4.75 | 5.222 | +0.472 | (4,4) | A<sub>2</sub>′′ | B<sub>1</sub><sup>a</sup> |
| | T1 | 4.33 | 4.910 | +0.580 | (4,4) | A<sub>2</sub>′′ | B<sub>1</sub><sup>a</sup> |
| | T2 | 4.51 | 4.935 | +0.425 | (4,4) | E′′ | B<sub>1</sub><sup>a</sup> |
| [azanaphthalene](#m-azanaphthalene) | S1 | 3.14 | 3.588 | +0.448 | (4,4) | B<sub>3g</sub> | –<sup>m</sup> |
| | S2 | 4.28 | 4.731 | +0.452 | (2,2) | B<sub>2u</sub> | B<sub>2u</sub> |
| | T1 | 3.75 | 3.852 | +0.102 | (8,8) | B<sub>3u</sub> | B<sub>3u</sub> |
| | T2 | 3.67 | 3.805 | +0.135 | (4,4) | B<sub>2u</sub> | B<sub>2u</sub> |
| [benzoquinone](#m-benzoquinone) | S1 | 2.82 | 3.368 | +0.547 | (4,4) | B<sub>1g</sub> | B<sub>1g</sub> |
| | S2 | 5.62 | 5.569 | −0.051 | (6,6) | B<sub>1u</sub> | B<sub>1u</sub> |
| | T1 | 2.58 | 3.082 | +0.502 | (4,4) | B<sub>1g</sub> | B<sub>1g</sub> |
| | T2 | 3.46 | 3.375 | −0.085 | (4,4) | B<sub>3g</sub> | B<sub>3g</sub> |
| [cyclopentadienethione](#m-cyclopentadienethione) | S1 | 1.70 | 1.585 | −0.116 | (4,4) | A<sub>2</sub> | –<sup>m</sup> |
| | S2 | 2.63 | 2.650 | +0.020 | (4,4) | B<sub>2</sub> | –<sup>m</sup> |
| | T1 | 1.47 | 1.238 | −0.232 | (4,4) | A<sub>2</sub> | –<sup>m</sup> |
| | T2 | 1.88 | 1.971 | +0.091 | (6,6) | B<sub>2</sub> | B<sub>2</sub> |
| [cyclopentadienone](#m-cyclopentadienone) | S1 | 2.94 | 2.686 | −0.255 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| | S2 | 3.58 | 3.623 | +0.043 | (4,4) | B<sub>2</sub> | B<sub>2</sub> |
| | T1 | 2.29 | 2.264 | −0.026 | (4,4) | B<sub>2</sub> | B<sub>2</sub> |
| | T2 | 2.65 | 2.315 | −0.335 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| [diazirine](#m-diazirine) | S1 | 4.09 | 4.121 | +0.031 | (4,4) | B<sub>1</sub> | B<sub>1</sub> |
| | T1 | 3.49 | 3.426 | −0.064 | (4,4) | B<sub>1</sub> | B<sub>1</sub> |
| [hexatriene](#m-hexatriene) | S1 | 5.37 | 5.087 | −0.283 | (8,8) | B<sub>u</sub> | B<sub>u</sub> |
| | S2 | 5.62 | 5.691 | +0.071 | (4,4) | A<sub>g</sub> | A<sub>g</sub> |
| | T1 | 2.73 | 2.745 | +0.015 | (6,6) | B<sub>u</sub> | B<sub>u</sub> |
| | T2 | 4.36 | 4.302 | −0.058 | (4,4) | A<sub>g</sub> | A<sub>g</sub> |
| [maleimide](#m-maleimide) | S1 | 3.80 | 4.474 | +0.674 | (4,4) | B<sub>1</sub> | B<sub>1</sub> |
| | S2 | 6.21 | 6.285 | +0.075 | (6,6) | B<sub>2</sub> | B<sub>2</sub> |
| | T1 | 3.57 | 4.194 | +0.624 | (4,4) | B<sub>1</sub> | B<sub>1</sub> |
| | T2 | 3.74 | 3.730 | −0.010 | (4,4) | B<sub>2</sub> | B<sub>2</sub> |
| [naphthalene](#m-naphthalene) | S1 | 4.27 | 4.754 | +0.484 | (8,8) | B<sub>3u</sub> | B<sub>3u</sub> |
| | S2 | 4.90 | 4.886 | −0.014 | (2,2) | B<sub>2u</sub> | B<sub>2u</sub> |
| | T1 | 3.17 | 3.321 | +0.151 | (8,8) | B<sub>2u</sub> | B<sub>2u</sub> |
| | T2 | 4.16 | 4.471 | +0.311 | (8,8) | B<sub>3u</sub> | B<sub>3u</sub> |
| [nitroxyl](#m-nitroxyl) | S1 | 1.74 | 2.085 | +0.345 | (4,4) | A′′ | A′′ |
| | T1 | 0.88 | 1.170 | +0.290 | (4,4) | A′′ | A′′ |
| | T2 | 5.61 | 5.221 | −0.389 | (4,4) | A′ | A′ |
| [octatetraene](#m-octatetraene) | S1 | 4.78 | 4.415 | −0.365 | (8,8) | B<sub>u</sub> | B<sub>u</sub> |
| | S2 | 4.90 | 4.957 | +0.057 | (6,6) | A<sub>g</sub> | A<sub>g</sub> |
| | T1 | 2.36 | 2.419 | +0.059 | (8,8) | B<sub>u</sub> | B<sub>u</sub> |
| | T2 | 3.73 | 3.718 | −0.012 | (8,8) | A<sub>g</sub> | A<sub>g</sub> |
| [streptocyanine-C3](#m-strepto-c3) | S1 | 4.82 | 4.941 | +0.121 | (2,2) | B<sub>2</sub> | B<sub>2</sub> |
| | T1 | 3.44 | 3.438 | −0.002 | (4,4) | B<sub>2</sub> | B<sub>2</sub> |
| [streptocyanine-C5](#m-strepto-c5) | S1 | 3.64 | 3.853 | +0.213 | (2,2) | B<sub>2</sub> | B<sub>2</sub> |
| | T1 | 2.47 | 2.467 | −0.003 | (4,4) | B<sub>2</sub> | B<sub>2</sub> |
| [thioacrolein](#m-thioacrolein) | S1 | 2.11 | 2.370 | +0.260 | (4,4) | A′′ | A′′ |
| | T1 | 1.91 | 2.042 | +0.133 | (4,4) | A′′ | A′′ |
| [aminobenzonitrile](#m-aminobenzonitrile) | S1 | 5.09 | 5.127 | +0.037 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| [aniline](#m-aniline) | S1 | 5.50 | 5.514 | +0.014 | (6,6) | A<sub>1</sub> | A<sub>1</sub> |
| [azulene](#m-azulene) | S1 | 2.161 | 2.425 | +0.264 | (2,2) | B<sub>2</sub> | B<sub>2</sub> |
| | S2 | 3.849 | 3.799 | −0.050 | (6,6) | A<sub>1</sub> | A<sub>1</sub> |
| | T1 | 2.180 | 2.302 | +0.122 | (4,4) | B<sub>2</sub> | B<sub>2</sub> |
| | T2 | 2.460 | 2.822 | +0.362 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| [benzothiadiazole](#m-benzothiadiazole) | S1 | 4.291 | 4.335 | +0.043 | (2,2) | B<sub>2</sub> | B<sub>2</sub> |
| | S2 | 4.371 | 4.536 | +0.165 | (8,8) | A<sub>1</sub> | A<sub>1</sub> |
| | T1 | 2.820 | 2.820 | +0.000 | (2,2) | B<sub>2</sub> | B<sub>2</sub> |
| | T2 | 3.485 | 3.355 | −0.130 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| [dimethylaniline](#m-dimethylaniline) | S1 | 4.39 | 4.711 | +0.321 | (6,6) | B<sub>2</sub> | B<sub>2</sub> |
| | S2 | 5.40 | 5.387 | −0.013 | (6,6) | A<sub>1</sub> | A<sub>1</sub> |
| [dipeptide](#m-dipeptide) | S1 | 8.15 | 7.913 | −0.237 | (4,4) | A′′ | A′′ |
| [DMABN](#m-dmabn) | S1 | 4.86 | 4.853 | −0.007 | (6,6) | A<sub>1</sub> | A<sub>1</sub> |
| [N-phenylpyrrole](#m-n-phenylpyrrole) | S1 | 5.32 | 5.373 | +0.053 | (4,4) | B<sub>2</sub> | B<sub>2</sub> |
| | S2 | 5.85 | 5.364 | −0.486 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| [nitroaniline](#m-nitroaniline) | S1 | 4.40 | 4.395 | −0.005 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| [nitrobenzene](#m-nitrobenzene) | S1 | 5.41 | 5.345 | −0.065 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| [nitrodimethylaniline](#m-nitrodimethylaniline) | S1 | 4.14 | 4.162 | +0.021 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| [NPNO](#m-npno) | S1 | 4.10 | 3.964 | −0.136 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| [phthalazine](#m-phthalazine) | S1 | 3.898 | 4.672 | +0.774 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| | S2 | 4.302 | 4.617 | +0.315 | (4,4) | B<sub>1</sub> | B<sub>1</sub> |
| | T1 | 3.430 | 3.533 | +0.103 | (8,8) | B<sub>2</sub> | B<sub>2</sub> |
| | T2 | 3.626 | 4.467 | +0.841 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| [quinoxaline](#m-quinoxaline) | S1 | 4.641 | 4.717 | +0.076 | (2,2) | B<sub>2</sub> | B<sub>2</sub> |
| | S2 | 4.248 | 4.683 | +0.435 | (8,8) | A<sub>1</sub> | A<sub>1</sub> |
| | T1 | 3.255 | 3.369 | +0.114 | (8,8) | B<sub>2</sub> | B<sub>2</sub> |
| | T2 | 3.352 | 3.585 | +0.233 | (4,4) | B<sub>1</sub> | –<sup>m</sup> |
| [twisted DMABN](#m-tdmabn) | S1 | 4.11 | 3.687 | −0.423 | (2,2) | A<sub>2</sub> | A<sub>2</sub> |
| | S2 | 4.74 | 5.761 | +1.021 | (8,8) | B<sub>1</sub> | B<sub>1</sub> |
| [twisted N-phenylpyrrole](#m-twisted-n-phenylpyrrole) | S1 | 5.58 | 6.059 | +0.479 | (8,8) | B<sub>2</sub> | B<sub>2</sub> |
| | S2 | 5.64 | 6.000 | +0.359 | (8,8) | A<sub>1</sub> | A<sub>1</sub> |
| [benzoxadiazole](#m-benzoxadiazole) | S1 | 4.606 | 4.720 | +0.114 | (6,6) | B<sub>2</sub> | B<sub>2</sub> |
| | S2 | 4.911 | 4.955 | +0.044 | (8,8) | A<sub>1</sub> | A<sub>1</sub> |
| | T1 | 2.739 | 2.724 | −0.015 | (6,6) | B<sub>2</sub> | B<sub>2</sub> |
| | T2 | 4.084 | 4.194 | +0.110 | (8,8) | A<sub>1</sub> | A<sub>1</sub> |
| [diketopyrrolopyrrole](#m-diketopyrrolopyrrole) | S1 | 3.568 | 3.625 | +0.057 | (4,4) | B<sub>u</sub> | B<sub>u</sub> |
| | S2 | 3.960 | 4.249 | +0.289 | (8,8) | A<sub>g</sub> | A<sub>g</sub> |
| | T1 | 1.927 | 1.931 | +0.004 | (4,4) | B<sub>u</sub> | B<sub>u</sub> |
| | T2 | 3.743 | 3.757 | +0.015 | (4,4) | A<sub>g</sub> | A<sub>g</sub> |
| [furofuran](#m-furofuran) | S2 | 5.489 | 5.553 | +0.064 | (6,6) | B<sub>u</sub> | B<sub>u</sub> |
| | T1 | 3.578 | 3.526 | −0.051 | (8,8) | B<sub>u</sub> | B<sub>u</sub> |
| | T2 | 4.869 | 4.742 | −0.127 | (6,6) | A<sub>g</sub> | A<sub>g</sub> |
| [pyrrolopyrrole](#m-pyrrolopyrrole) | T1 | 3.841 | 3.865 | +0.024 | (4,4) | B<sub>u</sub> | B<sub>u</sub> |
| [thienothiophene](#m-thienothiophene) | S1 | 4.965 | 5.166 | +0.201 | (8,8) | B<sub>u</sub> | B<sub>u</sub> |
| | S2 | 5.243 | 5.549 | +0.306 | (6,6) | B<sub>u</sub> | B<sub>u</sub> |
| | T1 | 3.465 | 3.581 | +0.116 | (6,6) | B<sub>u</sub> | B<sub>u</sub> |
| | T2 | 4.261 | 4.358 | +0.097 | (6,6) | B<sub>u</sub> | B<sub>u</sub> |
| [TTF](#m-ttf) | S1 | 2.800 | 3.103 | +0.303 | (4,4) | B<sub>3u</sub> | B<sub>3u</sub> |
| | S2 | 3.773 | 3.760 | −0.013 | (4,4) | B<sub>2u</sub> | B<sub>2u</sub> |
| | T1 | 2.652 | 2.960 | +0.308 | (4,4) | B<sub>3u</sub> | B<sub>3u</sub> |
| | T2 | 2.993 | 3.510 | +0.517 | (6,6) | B<sub>1u</sub> | B<sub>1u</sub> |

M08-SO

| Molecule | State | TBE / eV | SSR / eV | Δ / eV | Active space | TBE irrep | SSR irrep |
| - | - | - | - | - | - | - | - |
| [acetone](#m-acetone) | S1 | 4.47 | 4.607 | +0.137 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| | T1 | 4.13 | 4.248 | +0.118 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| | T2 | 6.25 | 6.355 | +0.105 | (2,2) | A<sub>1</sub> | A<sub>1</sub> |
| [acrolein](#m-acrolein) | S1 | 3.78 | 4.168 | +0.388 | (4,4) | A′′ | A′′ |
| | S2 | 6.69 | 6.909 | +0.219 | (4,4) | A′ | A′ |
| | T1 | 3.51 | 3.902 | +0.393 | (4,4) | A′′ | A′′ |
| | T2 | 3.94 | 3.988 | +0.048 | (2,2) | A′ | A′ |
| [benzene](#m-benzene) | S1 | 5.06 | 5.370 | +0.310 | (6,6) | B<sub>2u</sub> | B<sub>3u</sub><sup>a</sup> |
| | S2 | 6.45 | 5.843 | −0.607 | (4,4) | B<sub>1u</sub> | B<sub>2u</sub><sup>a</sup> |
| | T1 | 4.16 | 4.372 | +0.212 | (8,8) | B<sub>1u</sub> | B<sub>2u</sub><sup>a</sup> |
| | T2 | 4.85 | 5.016 | +0.166 | (6,6) | E<sub>1u</sub> | B<sub>2u</sub><sup>a</sup> |
| [butadiene](#m-butadiene) | S1 | 6.22 | 5.772 | −0.448 | (6,6) | B<sub>u</sub> | B<sub>u</sub> |
| | S2 | 6.50 | 6.274 | −0.226 | (6,6) | A<sub>g</sub> | A<sub>g</sub> |
| | T1 | 3.36 | 3.513 | +0.153 | (4,4) | B<sub>u</sub> | B<sub>u</sub> |
| | T2 | 5.20 | 5.159 | −0.041 | (4,4) | A<sub>g</sub> | A<sub>g</sub> |
| [cyanoacetylene](#m-cyanoacetylene) | S1 | 5.80 | 5.703 | −0.097 | (4,4) | Σ<sup>−</sup> | A<sub>2</sub><sup>a</sup> |
| | S2 | 6.07 | 5.056 | −1.014 | (4,4) | Δ | A<sub>1</sub><sup>a</sup> |
| | T1 | 4.44 | 4.843 | +0.403 | (8,8) | Σ<sup>+</sup> | A<sub>1</sub><sup>a</sup> |
| | T2 | 5.21 | 5.181 | −0.029 | (8,8) | Δ | A<sub>1</sub><sup>a</sup> |
| [cyanoformaldehyde](#m-cyanoformaldehyde) | S1 | 3.81 | 4.088 | +0.278 | (4,4) | A′′ | A′′ |
| | T1 | 3.44 | 3.732 | +0.292 | (4,4) | A′′ | A′′ |
| | T2 | 5.01 | 5.031 | +0.021 | (6,6) | A′ | A′ |
| [cyanogen](#m-cyanogen) | S1 | 6.39 | 6.474 | +0.084 | (6,6) | Σ<sub>u</sub><sup>−</sup> | A<sub>u</sub><sup>a</sup> |
| | S2 | 6.66 | 5.791 | −0.869 | (6,6) | Δ<sub>u</sub> | B<sub>1u</sub><sup>a</sup> |
| | T1 | 4.91 | 5.150 | +0.240 | (8,8) | Σ<sub>u</sub><sup>+</sup> | B<sub>1u</sub><sup>a</sup> |
| [cyclopentadiene](#m-cyclopentadiene) | S1 | 5.54 | 5.162 | −0.378 | (6,6) | B<sub>2</sub> | B<sub>2</sub> |
| | S2 | 6.52 | 6.171 | −0.349 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| | T1 | 3.31 | 3.452 | +0.142 | (6,6) | B<sub>2</sub> | B<sub>2</sub> |
| | T2 | 5.11 | 5.110 | +0.000 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| [cyclopropenethione](#m-cyclopropenethione) | S1 | 3.41 | 3.835 | +0.425 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| | S2 | 3.45 | 3.431 | −0.019 | (4,4) | B<sub>1</sub> | B<sub>1</sub> |
| | T1 | 3.28 | 3.543 | +0.263 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| | T2 | 3.32 | 3.270 | −0.050 | (4,4) | B<sub>1</sub> | B<sub>1</sub> |
| [cyclopropenone](#m-cyclopropenone) | S1 | 4.26 | 4.381 | +0.121 | (6,6) | B<sub>1</sub> | B<sub>1</sub> |
| | S2 | 5.55 | 6.403 | +0.853 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| | T1 | 3.93 | 4.011 | +0.081 | (6,6) | B<sub>1</sub> | B<sub>1</sub> |
| | T2 | 4.88 | 4.885 | +0.005 | (4,4) | B<sub>2</sub> | B<sub>2</sub> |
| [diacetylene](#m-diacetylene) | S1 | 5.33 | 5.296 | −0.034 | (6,6) | Σ<sub>u</sub><sup>−</sup> | A<sub>u</sub><sup>a</sup> |
| | S2 | 5.61 | 4.640 | −0.970 | (6,6) | Δ<sub>u</sub> | B<sub>1u</sub><sup>a</sup> |
| | T1 | 4.10 | 4.440 | +0.340 | (8,8) | Σ<sub>u</sub><sup>+</sup> | B<sub>1u</sub><sup>a</sup> |
| | T2 | 4.78 | 4.735 | −0.045 | (8,8) | Δ<sub>u</sub> | B<sub>1u</sub><sup>a</sup> |
| [furan](#m-furan) | S1 | 6.56 | 6.249 | −0.311 | (6,6) | A<sub>1</sub> | A<sub>1</sub> |
| | S2 | 6.37 | 6.280 | −0.089 | (6,6) | B<sub>2</sub> | B<sub>2</sub> |
| | T1 | 4.20 | 4.229 | +0.029 | (4,4) | B<sub>2</sub> | B<sub>2</sub> |
| | T2 | 5.46 | 5.545 | +0.085 | (6,6) | A<sub>1</sub> | A<sub>1</sub> |
| [glyoxal](#m-glyoxal) | S1 | 2.88 | 3.565 | +0.685 | (4,4) | A<sub>u</sub> | A<sub>u</sub> |
| | T1 | 2.49 | 3.278 | +0.788 | (4,4) | A<sub>u</sub> | A<sub>u</sub> |
| | T2 | 6.30 | 6.121 | −0.179 | (4,4) | A<sub>g</sub> | A<sub>g</sub> |
| [imidazole](#m-imidazole) | S1 | 6.50 | 6.189 | −0.311 | (8,8) | A′′ | A′′ |
| | S2 | 6.41 | 6.395 | −0.015 | (2,2) | A′ | A′ |
| | T1 | 4.73 | 4.889 | +0.159 | (2,2) | A′ | A′ |
| | T2 | 6.31 | 6.465 | +0.155 | (4,4) | A′′ | A′′ |
| [isobutene](#m-isobutene) | T1 | 4.53 | 4.575 | +0.045 | (2,2) | A<sub>1</sub> | A<sub>1</sub> |
| [methylenecyclopropene](#m-methylenecyclopropene) | S1 | 4.28 | 4.268 | −0.012 | (2,2) | B<sub>2</sub> | B<sub>2</sub> |
| | S2 | 6.12 | 6.102 | −0.018 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| | T1 | 3.49 | 3.462 | −0.028 | (6,6) | B<sub>2</sub> | B<sub>2</sub> |
| | T2 | 4.74 | 4.619 | −0.121 | (8,8) | A<sub>1</sub> | A<sub>1</sub> |
| [propynal](#m-propynal) | S1 | 3.80 | 3.791 | −0.009 | (8,8) | A′′ | A′′ |
| | T1 | 3.47 | 3.569 | +0.099 | (8,8) | A′′ | A′′ |
| | T2 | 4.47 | 4.483 | +0.013 | (2,2) | A′ | A′ |
| [pyrazine](#m-pyrazine) | S1 | 4.15 | 4.162 | +0.012 | (4,4) | B<sub>3u</sub> | B<sub>3u</sub> |
| | S2 | 4.98 | 5.639 | +0.659 | (4,4) | A<sub>u</sub> | A<sub>u</sub> |
| | T1 | 3.59 | 3.802 | +0.212 | (4,4) | B<sub>3u</sub> | B<sub>3u</sub> |
| | T2 | 4.35 | 4.642 | +0.292 | (8,8) | B<sub>1u</sub> | B<sub>1u</sub> |
| [pyridazine](#m-pyridazine) | S1 | 3.83 | 3.987 | +0.157 | (4,4) | B<sub>1</sub> | B<sub>1</sub> |
| | S2 | 4.37 | 4.654 | +0.284 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| | T1 | 3.19 | 3.403 | +0.213 | (4,4) | B<sub>1</sub> | B<sub>1</sub> |
| | T2 | 4.11 | 4.490 | +0.381 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| [pyridine](#m-pyridine) | S1 | 4.95 | 4.781 | −0.169 | (4,4) | B<sub>1</sub> | –<sup>m</sup> |
| | S2 | 5.14 | 5.527 | +0.387 | (8,8) | B<sub>2</sub> | B<sub>2</sub> |
| | T1 | 4.30 | 4.326 | +0.026 | (4,4) | A<sub>1</sub> | –<sup>m</sup> |
| | T2 | 4.46 | 4.602 | +0.142 | (4,4) | B<sub>1</sub> | –<sup>m</sup> |
| [pyrimidine](#m-pyrimidine) | S1 | 4.44 | 4.834 | +0.394 | (4,4) | B<sub>1</sub> | B<sub>1</sub> |
| | S2 | 4.85 | 5.597 | +0.747 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| | T1 | 4.09 | 4.607 | +0.517 | (4,4) | B<sub>1</sub> | B<sub>1</sub> |
| | T2 | 4.51 | 4.904 | +0.394 | (6,6) | A<sub>1</sub> | A<sub>1</sub> |
| [pyrrole](#m-pyrrole) | S1 | 6.30 | 6.213 | −0.087 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| | S2 | 6.26 | 6.343 | +0.083 | (4,4) | B<sub>2</sub> | B<sub>2</sub> |
| | T1 | 4.51 | 4.553 | +0.043 | (4,4) | B<sub>2</sub> | B<sub>2</sub> |
| | T2 | 5.45 | 5.644 | +0.194 | (6,6) | A<sub>1</sub> | A<sub>1</sub> |
| [tetrazine](#m-tetrazine) | S1 | 2.47 | 2.591 | +0.121 | (4,4) | B<sub>3u</sub> | B<sub>3u</sub> |
| | S2 | 3.69 | 4.122 | +0.432 | (4,4) | A<sub>u</sub> | A<sub>u</sub> |
| | T1 | 1.85 | 2.163 | +0.312 | (4,4) | B<sub>3u</sub> | B<sub>3u</sub> |
| | T2 | 3.45 | 3.903 | +0.453 | (4,4) | A<sub>u</sub> | A<sub>u</sub> |
| [thioacetone](#m-thioacetone) | S1 | 2.53 | 2.942 | +0.412 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| | T1 | 2.33 | 2.597 | +0.267 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| | T2 | 3.45 | 3.451 | +0.001 | (2,2) | A<sub>1</sub> | A<sub>1</sub> |
| [thiophene](#m-thiophene) | S1 | 5.64 | 5.912 | +0.272 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| | S2 | 5.98 | 5.846 | −0.134 | (4,4) | B<sub>2</sub> | B<sub>2</sub> |
| | T1 | 3.97 | 4.159 | +0.189 | (2,2) | B<sub>2</sub> | B<sub>2</sub> |
| | T2 | 4.76 | 5.016 | +0.256 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| [thiopropynal](#m-thiopropynal) | S1 | 2.03 | 2.457 | +0.426 | (4,4) | A′′ | A′′ |
| | T1 | 1.80 | 2.075 | +0.275 | (4,4) | A′′ | A′′ |
| [triazine](#m-triazine) | S1 | 4.72 | 5.408 | +0.688 | (4,4) | A<sub>1</sub>′′ | A<sub>2</sub><sup>a</sup> |
| | S2 | 4.75 | 5.058 | +0.308 | (4,4) | A<sub>2</sub>′′ | B<sub>1</sub><sup>a</sup> |
| | T1 | 4.33 | 4.754 | +0.424 | (4,4) | A<sub>2</sub>′′ | B<sub>1</sub><sup>a</sup> |
| | T2 | 4.51 | 4.843 | +0.333 | (4,4) | E′′ | B<sub>1</sub><sup>a</sup> |
| [azanaphthalene](#m-azanaphthalene) | S1 | 3.14 | 3.372 | +0.232 | (4,4) | B<sub>3g</sub> | –<sup>m</sup> |
| | S2 | 4.28 | 4.784 | +0.504 | (2,2) | B<sub>2u</sub> | B<sub>2u</sub> |
| | T1 | 2.82 | 3.220 | +0.400 | (4,4) | B<sub>3g</sub> | –<sup>m</sup> |
| | T2 | 3.67 | 3.610 | −0.060 | (2,2) | B<sub>2u</sub> | B<sub>2u</sub> |
| [benzoquinone](#m-benzoquinone) | S1 | 2.82 | 3.100 | +0.280 | (4,4) | B<sub>1g</sub> | B<sub>1g</sub> |
| | S2 | 5.62 | 5.707 | +0.087 | (8,8) | B<sub>1u</sub> | B<sub>1u</sub> |
| | T1 | 2.58 | 2.989 | +0.409 | (4,4) | B<sub>1g</sub> | B<sub>1g</sub> |
| | T2 | 3.46 | 3.485 | +0.025 | (4,4) | B<sub>3g</sub> | B<sub>3g</sub> |
| [cyclopentadienethione](#m-cyclopentadienethione) | S1 | 1.70 | 1.661 | −0.039 | (4,4) | A<sub>2</sub> | –<sup>m</sup> |
| | S2 | 2.63 | 2.698 | +0.068 | (4,4) | B<sub>2</sub> | B<sub>2</sub> |
| | T1 | 1.47 | 1.313 | −0.157 | (4,4) | A<sub>2</sub> | –<sup>m</sup> |
| | T2 | 1.88 | 1.942 | +0.062 | (4,4) | B<sub>2</sub> | –<sup>m</sup> |
| [cyclopentadienone](#m-cyclopentadienone) | S1 | 2.94 | 2.599 | −0.341 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| | S2 | 3.58 | 3.531 | −0.049 | (4,4) | B<sub>2</sub> | B<sub>2</sub> |
| | T1 | 2.29 | 2.208 | −0.082 | (2,2) | B<sub>2</sub> | B<sub>2</sub> |
| | T2 | 2.65 | 2.362 | −0.288 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| [diazirine](#m-diazirine) | S1 | 4.09 | 4.236 | +0.146 | (4,4) | B<sub>1</sub> | B<sub>1</sub> |
| | T1 | 3.49 | 3.563 | +0.073 | (4,4) | B<sub>1</sub> | B<sub>1</sub> |
| [hexatriene](#m-hexatriene) | S1 | 5.37 | 4.846 | −0.524 | (8,8) | B<sub>u</sub> | B<sub>u</sub> |
| | S2 | 5.62 | 5.645 | +0.025 | (4,4) | A<sub>g</sub> | A<sub>g</sub> |
| | T1 | 2.73 | 2.867 | +0.137 | (8,8) | B<sub>u</sub> | B<sub>u</sub> |
| | T2 | 4.36 | 4.414 | +0.054 | (4,4) | A<sub>g</sub> | A<sub>g</sub> |
| [maleimide](#m-maleimide) | S1 | 3.80 | 4.338 | +0.538 | (4,4) | B<sub>1</sub> | B<sub>1</sub> |
| | S2 | 6.21 | 6.166 | −0.044 | (4,4) | B<sub>2</sub> | B<sub>2</sub> |
| | T1 | 3.57 | 4.180 | +0.610 | (4,4) | B<sub>1</sub> | B<sub>1</sub> |
| | T2 | 3.74 | 3.786 | +0.046 | (4,4) | B<sub>2</sub> | B<sub>2</sub> |
| [naphthalene](#m-naphthalene) | S1 | 4.27 | 4.758 | +0.488 | (8,8) | B<sub>3u</sub> | B<sub>3u</sub> |
| | S2 | 4.90 | 4.642 | −0.258 | (2,2) | B<sub>2u</sub> | B<sub>2u</sub> |
| | T1 | 3.17 | 3.389 | +0.220 | (8,8) | B<sub>2u</sub> | B<sub>2u</sub> |
| | T2 | 4.16 | 4.525 | +0.365 | (8,8) | B<sub>3u</sub> | B<sub>3u</sub> |
| [nitroxyl](#m-nitroxyl) | S1 | 1.74 | 1.902 | +0.162 | (4,4) | A′′ | A′′ |
| | T1 | 0.88 | 1.112 | +0.232 | (4,4) | A′′ | A′′ |
| | T2 | 5.61 | 5.641 | +0.031 | (2,2) | A′ | A′ |
| [octatetraene](#m-octatetraene) | S1 | 4.78 | 4.247 | −0.533 | (8,8) | B<sub>u</sub> | B<sub>u</sub> |
| | S2 | 4.90 | 4.934 | +0.034 | (6,6) | A<sub>g</sub> | A<sub>g</sub> |
| | T1 | 2.36 | 2.526 | +0.166 | (8,8) | B<sub>u</sub> | B<sub>u</sub> |
| | T2 | 3.73 | 3.783 | +0.053 | (8,8) | A<sub>g</sub> | A<sub>g</sub> |
| [streptocyanine-C3](#m-strepto-c3) | S1 | 4.82 | 5.040 | +0.220 | (2,2) | B<sub>2</sub> | B<sub>2</sub> |
| | T1 | 3.44 | 3.484 | +0.044 | (4,4) | B<sub>2</sub> | B<sub>2</sub> |
| [streptocyanine-C5](#m-strepto-c5) | S1 | 3.64 | 3.970 | +0.330 | (2,2) | B<sub>2</sub> | B<sub>2</sub> |
| | T1 | 2.47 | 2.499 | +0.029 | (4,4) | B<sub>2</sub> | B<sub>2</sub> |
| [thioacrolein](#m-thioacrolein) | S1 | 2.11 | 2.597 | +0.487 | (4,4) | A′′ | A′′ |
| | T1 | 1.91 | 2.267 | +0.357 | (4,4) | A′′ | A′′ |
| [aminobenzonitrile](#m-aminobenzonitrile) | S1 | 5.09 | 5.168 | +0.078 | (2,2) | A<sub>1</sub> | A<sub>1</sub> |
| [aniline](#m-aniline) | S1 | 5.50 | 5.426 | −0.074 | (8,8) | A<sub>1</sub> | A<sub>1</sub> |
| [azulene](#m-azulene) | S1 | 2.161 | 2.498 | +0.337 | (2,2) | B<sub>2</sub> | B<sub>2</sub> |
| | S2 | 3.849 | 3.635 | −0.214 | (8,8) | A<sub>1</sub> | A<sub>1</sub> |
| | T1 | 2.180 | 2.035 | −0.145 | (2,2) | B<sub>2</sub> | B<sub>2</sub> |
| | T2 | 2.460 | 2.920 | +0.460 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| [benzothiadiazole](#m-benzothiadiazole) | S1 | 4.291 | 4.233 | −0.058 | (2,2) | B<sub>2</sub> | B<sub>2</sub> |
| | S2 | 4.371 | 4.573 | +0.202 | (8,8) | A<sub>1</sub> | A<sub>1</sub> |
| | T1 | 2.820 | 3.021 | +0.201 | (2,2) | B<sub>2</sub> | B<sub>2</sub> |
| | T2 | 3.485 | 3.527 | +0.042 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| [dimethylaniline](#m-dimethylaniline) | S1 | 4.39 | 4.599 | +0.209 | (6,6) | B<sub>2</sub> | B<sub>2</sub> |
| | S2 | 5.40 | 5.356 | −0.043 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| [dipeptide](#m-dipeptide) | S1 | 8.15 | 7.831 | −0.319 | (4,4) | A′′ | A′′ |
| [DMABN](#m-dmabn) | S1 | 4.86 | 4.869 | +0.009 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| [N-phenylpyrrole](#m-n-phenylpyrrole) | S1 | 5.32 | 5.304 | −0.016 | (4,4) | B<sub>2</sub> | B<sub>2</sub> |
| | S2 | 5.85 | 5.826 | −0.024 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| [nitroaniline](#m-nitroaniline) | S1 | 4.40 | 4.397 | −0.003 | (2,2) | A<sub>1</sub> | A<sub>1</sub> |
| [nitrobenzene](#m-nitrobenzene) | S1 | 5.41 | 5.252 | −0.158 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| [nitrodimethylaniline](#m-nitrodimethylaniline) | S1 | 4.14 | 4.149 | +0.009 | (2,2) | A<sub>1</sub> | A<sub>1</sub> |
| [NPNO](#m-npno) | S1 | 4.10 | 4.008 | −0.092 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| [phthalazine](#m-phthalazine) | S1 | 3.898 | 4.493 | +0.595 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| | S2 | 4.302 | 4.389 | +0.087 | (4,4) | B<sub>1</sub> | B<sub>1</sub> |
| | T1 | 3.430 | 3.610 | +0.180 | (8,8) | B<sub>2</sub> | B<sub>2</sub> |
| | T2 | 3.626 | 4.340 | +0.714 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| [quinoxaline](#m-quinoxaline) | S1 | 4.641 | 4.640 | −0.001 | (2,2) | B<sub>2</sub> | B<sub>2</sub> |
| | S2 | 4.248 | 4.707 | +0.460 | (8,8) | A<sub>1</sub> | A<sub>1</sub> |
| | T1 | 3.255 | 3.455 | +0.200 | (8,8) | B<sub>2</sub> | B<sub>2</sub> |
| | T2 | 3.352 | 4.246 | +0.894 | (4,4) | B<sub>1</sub> | –<sup>m</sup> |
| [twisted DMABN](#m-tdmabn) | S1 | 4.11 | 3.832 | −0.278 | (2,2) | A<sub>2</sub> | A<sub>2</sub> |
| | S2 | 4.74 | 5.625 | +0.885 | (8,8) | B<sub>1</sub> | B<sub>1</sub> |
| [twisted N-phenylpyrrole](#m-twisted-n-phenylpyrrole) | S1 | 5.58 | 5.749 | +0.169 | (8,8) | B<sub>2</sub> | B<sub>2</sub> |
| | S2 | 5.64 | 5.691 | +0.051 | (8,8) | A<sub>1</sub> | A<sub>1</sub> |
| [benzoxadiazole](#m-benzoxadiazole) | S1 | 4.606 | 4.582 | −0.024 | (4,4) | B<sub>2</sub> | B<sub>2</sub> |
| | S2 | 4.911 | 5.022 | +0.111 | (8,8) | A<sub>1</sub> | A<sub>1</sub> |
| | T1 | 2.739 | 2.922 | +0.183 | (6,6) | B<sub>2</sub> | B<sub>2</sub> |
| | T2 | 4.084 | 4.310 | +0.226 | (8,8) | A<sub>1</sub> | A<sub>1</sub> |
| [diketopyrrolopyrrole](#m-diketopyrrolopyrrole) | S1 | 3.568 | 3.557 | −0.011 | (2,2) | B<sub>u</sub> | B<sub>u</sub> |
| | S2 | 3.960 | 4.324 | +0.364 | (4,4) | A<sub>g</sub> | A<sub>g</sub> |
| | T1 | 1.927 | 1.960 | +0.033 | (4,4) | B<sub>u</sub> | B<sub>u</sub> |
| | T2 | 3.743 | 3.728 | −0.015 | (4,4) | A<sub>g</sub> | A<sub>g</sub> |
| [furofuran](#m-furofuran) | S2 | 5.489 | 5.319 | −0.170 | (6,6) | B<sub>u</sub> | B<sub>u</sub> |
| | T1 | 3.578 | 3.666 | +0.088 | (8,8) | B<sub>u</sub> | B<sub>u</sub> |
| | T2 | 4.869 | 4.835 | −0.034 | (6,6) | A<sub>g</sub> | A<sub>g</sub> |
| [pyrrolopyrrole](#m-pyrrolopyrrole) | T1 | 3.841 | 3.997 | +0.156 | (6,6) | B<sub>u</sub> | B<sub>u</sub> |
| [thienothiophene](#m-thienothiophene) | S1 | 4.965 | 4.972 | +0.007 | (2,2) | B<sub>u</sub> | B<sub>u</sub> |
| | S2 | 5.243 | 5.341 | +0.098 | (6,6) | B<sub>u</sub> | B<sub>u</sub> |
| | T1 | 3.465 | 3.676 | +0.211 | (6,6) | B<sub>u</sub> | B<sub>u</sub> |
| | T2 | 4.261 | 4.364 | +0.103 | (4,4) | B<sub>u</sub> | B<sub>u</sub> |
| [TTF](#m-ttf) | S1 | 2.800 | 3.002 | +0.202 | (4,4) | B<sub>3u</sub> | B<sub>3u</sub> |
| | S2 | 3.773 | 3.704 | −0.069 | (8,8) | B<sub>2u</sub> | B<sub>2u</sub> |
| | T1 | 2.652 | 2.905 | +0.253 | (4,4) | B<sub>3u</sub> | B<sub>3u</sub> |
| | T2 | 2.993 | 3.568 | +0.575 | (6,6) | B<sub>1u</sub> | B<sub>1u</sub> |

ωB97X

| Molecule | State | TBE / eV | SSR / eV | Δ / eV | Active space | TBE irrep | SSR irrep |
| - | - | - | - | - | - | - | - |
| [acetone](#m-acetone) | S1 | 4.47 | 4.671 | +0.201 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| | T1 | 4.13 | 4.198 | +0.068 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| | T2 | 6.25 | 6.215 | −0.035 | (2,2) | A<sub>1</sub> | A<sub>1</sub> |
| [acrolein](#m-acrolein) | S1 | 3.78 | 3.917 | +0.137 | (8,8) | A′′ | A′′ |
| | S2 | 6.69 | 6.662 | −0.029 | (8,8) | A′ | A′ |
| | T1 | 3.51 | 3.539 | +0.029 | (8,8) | A′′ | A′′ |
| | T2 | 3.94 | 3.946 | +0.006 | (8,8) | A′ | A′ |
| [benzene](#m-benzene) | S1 | 5.06 | 5.497 | +0.437 | (6,6) | B<sub>2u</sub> | B<sub>3u</sub><sup>a</sup> |
| | S2 | 6.45 | 6.181 | −0.269 | (8,8) | B<sub>1u</sub> | B<sub>2u</sub><sup>a</sup> |
| | T1 | 4.16 | 4.314 | +0.154 | (6,6) | B<sub>1u</sub> | B<sub>2u</sub><sup>a</sup> |
| | T2 | 4.85 | 4.958 | +0.108 | (6,6) | E<sub>1u</sub> | B<sub>2u</sub><sup>a</sup> |
| [butadiene](#m-butadiene) | S1 | 6.22 | 6.248 | +0.028 | (6,6) | B<sub>u</sub> | B<sub>u</sub> |
| | S2 | 6.50 | 6.212 | −0.288 | (4,4) | A<sub>g</sub> | A<sub>g</sub> |
| | T1 | 3.36 | 3.513 | +0.153 | (4,4) | B<sub>u</sub> | B<sub>u</sub> |
| | T2 | 5.20 | 5.236 | +0.036 | (6,6) | A<sub>g</sub> | A<sub>g</sub> |
| [cyanoacetylene](#m-cyanoacetylene) | S1 | 5.80 | 5.639 | −0.161 | (4,4) | Σ<sup>−</sup> | A<sub>2</sub><sup>a</sup> |
| | S2 | 6.07 | 5.356 | −0.714 | (4,4) | Δ | A<sub>1</sub><sup>a</sup> |
| | T1 | 4.44 | 4.731 | +0.291 | (8,8) | Σ<sup>+</sup> | A<sub>1</sub><sup>a</sup> |
| | T2 | 5.21 | 5.124 | −0.086 | (8,8) | Δ | A<sub>1</sub><sup>a</sup> |
| [cyanoformaldehyde](#m-cyanoformaldehyde) | S1 | 3.81 | 4.103 | +0.293 | (4,4) | A′′ | A′′ |
| | T1 | 3.44 | 3.611 | +0.171 | (4,4) | A′′ | A′′ |
| | T2 | 5.01 | 4.917 | −0.093 | (8,8) | A′ | A′ |
| [cyanogen](#m-cyanogen) | S1 | 6.39 | 6.391 | +0.001 | (6,6) | Σ<sub>u</sub><sup>−</sup> | A<sub>u</sub><sup>a</sup> |
| | S2 | 6.66 | 5.915 | −0.745 | (6,6) | Δ<sub>u</sub> | B<sub>1u</sub><sup>a</sup> |
| | T1 | 4.91 | 4.976 | +0.066 | (8,8) | Σ<sub>u</sub><sup>+</sup> | B<sub>1u</sub><sup>a</sup> |
| [cyclopentadiene](#m-cyclopentadiene) | S1 | 5.54 | 5.408 | −0.132 | (6,6) | B<sub>2</sub> | B<sub>2</sub> |
| | S2 | 6.52 | 6.178 | −0.342 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| | T1 | 3.31 | 3.411 | +0.101 | (4,4) | B<sub>2</sub> | B<sub>2</sub> |
| | T2 | 5.11 | 5.071 | −0.039 | (6,6) | A<sub>1</sub> | A<sub>1</sub> |
| [cyclopropenethione](#m-cyclopropenethione) | S1 | 3.41 | 3.758 | +0.348 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| | S2 | 3.45 | 3.372 | −0.078 | (4,4) | B<sub>1</sub> | B<sub>1</sub> |
| | T1 | 3.28 | 3.508 | +0.228 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| | T2 | 3.32 | 3.228 | −0.092 | (4,4) | B<sub>1</sub> | B<sub>1</sub> |
| [cyclopropenone](#m-cyclopropenone) | S1 | 4.26 | 4.272 | +0.013 | (6,6) | B<sub>1</sub> | B<sub>1</sub> |
| | S2 | 5.55 | 6.395 | +0.845 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| | T1 | 3.93 | 3.938 | +0.008 | (6,6) | B<sub>1</sub> | B<sub>1</sub> |
| | T2 | 4.88 | 4.876 | −0.004 | (2,2) | B<sub>2</sub> | B<sub>2</sub> |
| [diacetylene](#m-diacetylene) | S1 | 5.33 | 5.272 | −0.058 | (6,6) | Σ<sub>u</sub><sup>−</sup> | A<sub>u</sub><sup>a</sup> |
| | S2 | 5.61 | 5.092 | −0.518 | (6,6) | Δ<sub>u</sub> | B<sub>1u</sub><sup>a</sup> |
| | T1 | 4.10 | 4.351 | +0.251 | (8,8) | Σ<sub>u</sub><sup>+</sup> | B<sub>1u</sub><sup>a</sup> |
| | T2 | 4.78 | 4.774 | −0.006 | (4,4) | Δ<sub>u</sub> | B<sub>1u</sub><sup>a</sup> |
| [furan](#m-furan) | S1 | 6.56 | 6.294 | −0.266 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| | S2 | 6.37 | 6.470 | +0.100 | (4,4) | B<sub>2</sub> | B<sub>2</sub> |
| | T1 | 4.20 | 4.359 | +0.160 | (4,4) | B<sub>2</sub> | B<sub>2</sub> |
| | T2 | 5.46 | 5.518 | +0.058 | (6,6) | A<sub>1</sub> | A<sub>1</sub> |
| [glyoxal](#m-glyoxal) | S1 | 2.88 | 3.674 | +0.794 | (4,4) | A<sub>u</sub> | A<sub>u</sub> |
| | T1 | 2.49 | 3.189 | +0.699 | (4,4) | A<sub>u</sub> | A<sub>u</sub> |
| | T2 | 6.30 | 6.039 | −0.261 | (4,4) | A<sub>g</sub> | A<sub>g</sub> |
| [imidazole](#m-imidazole) | S1 | 6.50 | 6.404 | −0.096 | (8,8) | A′′ | A′′ |
| | S2 | 6.41 | 6.413 | +0.004 | (6,6) | A′ | A′ |
| | T1 | 4.73 | 4.840 | +0.110 | (2,2) | A′ | A′ |
| | T2 | 6.31 | 6.404 | +0.094 | (4,4) | A′′ | A′′ |
| [isobutene](#m-isobutene) | T1 | 4.53 | 4.565 | +0.035 | (2,2) | A<sub>1</sub> | A<sub>1</sub> |
| [methylenecyclopropene](#m-methylenecyclopropene) | S1 | 4.28 | 4.345 | +0.065 | (2,2) | B<sub>2</sub> | B<sub>2</sub> |
| | S2 | 6.12 | 6.408 | +0.288 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| | T1 | 3.49 | 3.511 | +0.021 | (8,8) | B<sub>2</sub> | B<sub>2</sub> |
| | T2 | 4.74 | 4.652 | −0.088 | (8,8) | A<sub>1</sub> | A<sub>1</sub> |
| [propynal](#m-propynal) | S1 | 3.80 | 3.891 | +0.091 | (8,8) | A′′ | A′′ |
| | T1 | 3.47 | 3.491 | +0.021 | (8,8) | A′′ | A′′ |
| | T2 | 4.47 | 4.497 | +0.027 | (6,6) | A′ | A′ |
| [pyrazine](#m-pyrazine) | S1 | 4.15 | 4.137 | −0.013 | (4,4) | B<sub>3u</sub> | B<sub>3u</sub> |
| | S2 | 5.71 | 5.639 | −0.071 | (4,4) | B<sub>2g</sub> | –<sup>m</sup> |
| | T1 | 3.59 | 3.714 | +0.124 | (4,4) | B<sub>3u</sub> | B<sub>3u</sub> |
| | T2 | 4.35 | 4.506 | +0.156 | (8,8) | B<sub>1u</sub> | B<sub>1u</sub> |
| [pyridazine](#m-pyridazine) | S1 | 3.83 | 3.978 | +0.148 | (4,4) | B<sub>1</sub> | B<sub>1</sub> |
| | S2 | 4.37 | 4.674 | +0.304 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| | T1 | 3.19 | 3.358 | +0.168 | (4,4) | B<sub>1</sub> | B<sub>1</sub> |
| | T2 | 4.11 | 4.490 | +0.380 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| [pyridine](#m-pyridine) | S1 | 4.95 | 4.737 | −0.213 | (4,4) | B<sub>1</sub> | –<sup>m</sup> |
| | S2 | 5.14 | 5.616 | +0.476 | (8,8) | B<sub>2</sub> | B<sub>2</sub> |
| | T1 | 4.30 | 4.231 | −0.069 | (4,4) | A<sub>1</sub> | –<sup>m</sup> |
| | T2 | 4.46 | 4.517 | +0.057 | (4,4) | B<sub>1</sub> | –<sup>m</sup> |
| [pyrimidine](#m-pyrimidine) | S1 | 4.44 | 4.874 | +0.434 | (4,4) | B<sub>1</sub> | B<sub>1</sub> |
| | S2 | 4.85 | 5.628 | +0.778 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| | T1 | 4.09 | 4.573 | +0.483 | (4,4) | B<sub>1</sub> | B<sub>1</sub> |
| | T2 | 4.51 | 4.746 | +0.236 | (6,6) | A<sub>1</sub> | A<sub>1</sub> |
| [pyrrole](#m-pyrrole) | S1 | 6.30 | 6.199 | −0.101 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| | S2 | 6.26 | 6.647 | +0.387 | (4,4) | B<sub>2</sub> | B<sub>2</sub> |
| | T1 | 4.51 | 4.677 | +0.167 | (2,2) | B<sub>2</sub> | B<sub>2</sub> |
| | T2 | 5.45 | 5.616 | +0.166 | (6,6) | A<sub>1</sub> | A<sub>1</sub> |
| [tetrazine](#m-tetrazine) | S1 | 2.47 | 2.554 | +0.084 | (4,4) | B<sub>3u</sub> | B<sub>3u</sub> |
| | S2 | 3.69 | 4.103 | +0.413 | (4,4) | A<sub>u</sub> | A<sub>u</sub> |
| | T1 | 1.85 | 2.095 | +0.245 | (4,4) | B<sub>3u</sub> | B<sub>3u</sub> |
| | T2 | 3.45 | 3.875 | +0.425 | (4,4) | A<sub>u</sub> | A<sub>u</sub> |
| [thioacetone](#m-thioacetone) | S1 | 2.53 | 2.864 | +0.334 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| | T1 | 2.33 | 2.521 | +0.191 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| | T2 | 3.45 | 3.455 | +0.005 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| [thiophene](#m-thiophene) | S1 | 5.64 | 5.998 | +0.358 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| | S2 | 5.98 | 5.958 | −0.022 | (2,2) | B<sub>2</sub> | B<sub>2</sub> |
| | T1 | 3.97 | 4.083 | +0.113 | (2,2) | B<sub>2</sub> | B<sub>2</sub> |
| | T2 | 4.76 | 4.994 | +0.234 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| [thiopropynal](#m-thiopropynal) | S1 | 2.03 | 2.267 | +0.237 | (4,4) | A′′ | A′′ |
| | T1 | 1.80 | 1.893 | +0.093 | (4,4) | A′′ | A′′ |
| [triazine](#m-triazine) | S1 | 4.72 | 5.399 | +0.679 | (4,4) | A<sub>1</sub>′′ | A<sub>2</sub><sup>a</sup> |
| | S2 | 4.75 | 5.096 | +0.346 | (4,4) | A<sub>2</sub>′′ | B<sub>1</sub><sup>a</sup> |
| | T1 | 4.33 | 4.760 | +0.430 | (4,4) | A<sub>2</sub>′′ | B<sub>1</sub><sup>a</sup> |
| | T2 | 4.51 | 4.823 | +0.313 | (4,4) | E′′ | B<sub>1</sub><sup>a</sup> |
| [azanaphthalene](#m-azanaphthalene) | S1 | 3.14 | 3.431 | +0.291 | (4,4) | B<sub>3g</sub> | B<sub>3g</sub> |
| | S2 | 4.28 | 5.026 | +0.746 | (2,2) | B<sub>2u</sub> | B<sub>2u</sub> |
| | T1 | 2.82 | 3.244 | +0.424 | (4,4) | B<sub>3g</sub> | –<sup>m</sup> |
| | T2 | 3.67 | 3.603 | −0.067 | (2,2) | B<sub>2u</sub> | B<sub>2u</sub> |
| [benzoquinone](#m-benzoquinone) | S1 | 2.82 | 3.285 | +0.465 | (4,4) | B<sub>1g</sub> | B<sub>1g</sub> |
| | S2 | 5.62 | 5.689 | +0.069 | (4,4) | B<sub>1u</sub> | B<sub>1u</sub> |
| | T1 | 2.58 | 3.016 | +0.436 | (4,4) | B<sub>1g</sub> | B<sub>1g</sub> |
| | T2 | 3.46 | 3.522 | +0.062 | (4,4) | B<sub>3g</sub> | B<sub>3g</sub> |
| [cyclopentadienethione](#m-cyclopentadienethione) | S1 | 1.70 | 1.573 | −0.127 | (4,4) | A<sub>2</sub> | –<sup>m</sup> |
| | S2 | 2.63 | 2.560 | −0.070 | (4,4) | B<sub>2</sub> | –<sup>m</sup> |
| | T1 | 1.47 | 1.223 | −0.247 | (4,4) | A<sub>2</sub> | –<sup>m</sup> |
| | T2 | 1.88 | 1.905 | +0.025 | (4,4) | B<sub>2</sub> | –<sup>m</sup> |
| [cyclopentadienone](#m-cyclopentadienone) | S1 | 2.94 | 2.610 | −0.330 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| | S2 | 3.58 | 3.595 | +0.015 | (4,4) | B<sub>2</sub> | B<sub>2</sub> |
| | T1 | 2.29 | 2.375 | +0.085 | (4,4) | B<sub>2</sub> | B<sub>2</sub> |
| | T2 | 2.65 | 2.245 | −0.405 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| [diazirine](#m-diazirine) | S1 | 4.09 | 4.178 | +0.088 | (4,4) | B<sub>1</sub> | B<sub>1</sub> |
| | T1 | 3.49 | 3.533 | +0.043 | (4,4) | B<sub>1</sub> | B<sub>1</sub> |
| [hexatriene](#m-hexatriene) | S1 | 5.37 | 5.401 | +0.031 | (8,8) | B<sub>u</sub> | B<sub>u</sub> |
| | S2 | 5.62 | 5.626 | +0.006 | (4,4) | A<sub>g</sub> | A<sub>g</sub> |
| | T1 | 2.73 | 2.933 | +0.203 | (6,6) | B<sub>u</sub> | B<sub>u</sub> |
| | T2 | 4.36 | 4.553 | +0.193 | (8,8) | A<sub>g</sub> | A<sub>g</sub> |
| [maleimide](#m-maleimide) | S1 | 3.80 | 4.432 | +0.632 | (4,4) | B<sub>1</sub> | B<sub>1</sub> |
| | S2 | 6.21 | 6.303 | +0.092 | (6,6) | B<sub>2</sub> | B<sub>2</sub> |
| | T1 | 3.57 | 4.155 | +0.585 | (4,4) | B<sub>1</sub> | B<sub>1</sub> |
| | T2 | 3.74 | 3.749 | +0.009 | (4,4) | B<sub>2</sub> | B<sub>2</sub> |
| [naphthalene](#m-naphthalene) | S1 | 4.27 | 5.084 | +0.814 | (8,8) | B<sub>3u</sub> | B<sub>3u</sub> |
| | S2 | 4.90 | 4.900 | +0.000 | (4,4) | B<sub>2u</sub> | B<sub>2u</sub> |
| | T1 | 3.17 | 3.404 | +0.234 | (8,8) | B<sub>2u</sub> | B<sub>2u</sub> |
| | T2 | 4.16 | 4.620 | +0.460 | (8,8) | B<sub>3u</sub> | B<sub>3u</sub> |
| [nitroxyl](#m-nitroxyl) | S1 | 1.74 | 1.849 | +0.109 | (4,4) | A′′ | A′′ |
| | T1 | 0.88 | 0.990 | +0.110 | (4,4) | A′′ | A′′ |
| | T2 | 5.61 | 5.570 | −0.040 | (4,4) | A′ | A′ |
| [octatetraene](#m-octatetraene) | S1 | 4.78 | 4.763 | −0.017 | (8,8) | B<sub>u</sub> | B<sub>u</sub> |
| | S2 | 4.90 | 4.988 | +0.088 | (4,4) | A<sub>g</sub> | A<sub>g</sub> |
| | T1 | 2.36 | 2.591 | +0.231 | (8,8) | B<sub>u</sub> | B<sub>u</sub> |
| | T2 | 3.73 | 4.175 | +0.445 | (8,8) | A<sub>g</sub> | A<sub>g</sub> |
| [streptocyanine-C3](#m-strepto-c3) | S1 | 4.82 | 5.049 | +0.229 | (2,2) | B<sub>2</sub> | B<sub>2</sub> |
| | T1 | 3.44 | 3.469 | +0.029 | (4,4) | B<sub>2</sub> | B<sub>2</sub> |
| [streptocyanine-C5](#m-strepto-c5) | S1 | 3.64 | 4.135 | +0.495 | (2,2) | B<sub>2</sub> | B<sub>2</sub> |
| | T1 | 2.47 | 2.486 | +0.016 | (4,4) | B<sub>2</sub> | B<sub>2</sub> |
| [thioacrolein](#m-thioacrolein) | S1 | 2.11 | 2.386 | +0.276 | (4,4) | A′′ | A′′ |
| | T1 | 1.91 | 2.063 | +0.153 | (4,4) | A′′ | A′′ |
| [aminobenzonitrile](#m-aminobenzonitrile) | S1 | 5.09 | 5.164 | +0.074 | (8,8) | A<sub>1</sub> | A<sub>1</sub> |
| [aniline](#m-aniline) | S1 | 5.50 | 5.582 | +0.082 | (6,6) | A<sub>1</sub> | A<sub>1</sub> |
| [azulene](#m-azulene) | S1 | 2.161 | 2.422 | +0.261 | (2,2) | B<sub>2</sub> | B<sub>2</sub> |
| | S2 | 3.849 | 3.916 | +0.067 | (8,8) | A<sub>1</sub> | A<sub>1</sub> |
| | T1 | 2.180 | 2.350 | +0.170 | (4,4) | B<sub>2</sub> | B<sub>2</sub> |
| | T2 | 2.460 | 2.880 | +0.420 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| [benzothiadiazole](#m-benzothiadiazole) | S1 | 4.291 | 4.427 | +0.136 | (2,2) | B<sub>2</sub> | B<sub>2</sub> |
| | S2 | 4.371 | 4.779 | +0.408 | (8,8) | A<sub>1</sub> | A<sub>1</sub> |
| | T1 | 2.820 | 2.982 | +0.162 | (2,2) | B<sub>2</sub> | B<sub>2</sub> |
| | T2 | 3.485 | 3.511 | +0.026 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| [dimethylaniline](#m-dimethylaniline) | S1 | 4.39 | 4.763 | +0.372 | (6,6) | B<sub>2</sub> | B<sub>2</sub> |
| | S2 | 5.40 | 5.452 | +0.052 | (6,6) | A<sub>1</sub> | A<sub>1</sub> |
| [dipeptide](#m-dipeptide) | S1 | 8.15 | 8.209 | +0.059 | (4,4) | A′′ | A′′ |
| [DMABN](#m-dmabn) | S1 | 4.86 | 4.970 | +0.110 | (8,8) | A<sub>1</sub> | A<sub>1</sub> |
| [N-phenylpyrrole](#m-n-phenylpyrrole) | S1 | 5.32 | 5.504 | +0.184 | (4,4) | B<sub>2</sub> | B<sub>2</sub> |
| | S2 | 5.85 | 5.787 | −0.063 | (4,4) | A<sub>1</sub> | A<sub>1</sub> |
| [nitroaniline](#m-nitroaniline) | S1 | 4.40 | 4.402 | +0.002 | (8,8) | A<sub>1</sub> | A<sub>1</sub> |
| [nitrobenzene](#m-nitrobenzene) | S1 | 5.41 | 5.402 | −0.008 | (6,6) | A<sub>1</sub> | A<sub>1</sub> |
| [nitrodimethylaniline](#m-nitrodimethylaniline) | S1 | 4.14 | 4.180 | +0.040 | (8,8) | A<sub>1</sub> | A<sub>1</sub> |
| [NPNO](#m-npno) | S1 | 4.10 | 4.087 | −0.013 | (6,6) | A<sub>1</sub> | A<sub>1</sub> |
| [phthalazine](#m-phthalazine) | S1 | 3.898 | 4.550 | +0.652 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| | S2 | 4.302 | 4.458 | +0.156 | (4,4) | B<sub>1</sub> | B<sub>1</sub> |
| | T1 | 3.430 | 3.609 | +0.179 | (8,8) | B<sub>2</sub> | B<sub>2</sub> |
| | T2 | 3.626 | 4.355 | +0.729 | (4,4) | A<sub>2</sub> | A<sub>2</sub> |
| [quinoxaline](#m-quinoxaline) | S1 | 4.641 | 4.754 | +0.113 | (8,8) | B<sub>2</sub> | B<sub>2</sub> |
| | S2 | 4.248 | 5.026 | +0.778 | (8,8) | A<sub>1</sub> | A<sub>1</sub> |
| | T1 | 3.255 | 3.440 | +0.185 | (8,8) | B<sub>2</sub> | B<sub>2</sub> |
| | T2 | 3.352 | 3.768 | +0.416 | (4,4) | B<sub>1</sub> | –<sup>m</sup> |
| [twisted DMABN](#m-tdmabn) | S1 | 4.11 | 3.755 | −0.355 | (2,2) | A<sub>2</sub> | A<sub>2</sub> |
| | S2 | 4.74 | 5.830 | +1.090 | (8,8) | B<sub>1</sub> | B<sub>1</sub> |
| [twisted N-phenylpyrrole](#m-twisted-n-phenylpyrrole) | S1 | 5.58 | 5.473 | −0.107 | (4,4) | B<sub>2</sub> | –<sup>m</sup> |
| | S2 | 5.64 | 5.680 | +0.040 | (4,4) | A<sub>1</sub> | –<sup>m</sup> |
| [benzoxadiazole](#m-benzoxadiazole) | S1 | 4.606 | 4.592 | −0.014 | (2,2) | B<sub>2</sub> | B<sub>2</sub> |
| | S2 | 4.911 | 5.074 | +0.163 | (8,8) | A<sub>1</sub> | A<sub>1</sub> |
| | T1 | 2.739 | 2.898 | +0.159 | (6,6) | B<sub>2</sub> | B<sub>2</sub> |
| | T2 | 4.084 | 4.341 | +0.257 | (8,8) | A<sub>1</sub> | A<sub>1</sub> |
| [diketopyrrolopyrrole](#m-diketopyrrolopyrrole) | S1 | 3.568 | 3.727 | +0.159 | (4,4) | B<sub>u</sub> | B<sub>u</sub> |
| | S2 | 3.960 | 4.214 | +0.254 | (8,8) | A<sub>g</sub> | A<sub>g</sub> |
| | T1 | 1.927 | 1.963 | +0.036 | (4,4) | B<sub>u</sub> | B<sub>u</sub> |
| | T2 | 3.743 | 3.759 | +0.016 | (4,4) | A<sub>g</sub> | A<sub>g</sub> |
| [furofuran](#m-furofuran) | S2 | 5.489 | 5.505 | +0.015 | (2,2) | B<sub>u</sub> | B<sub>u</sub> |
| | T1 | 3.578 | 3.768 | +0.190 | (8,8) | B<sub>u</sub> | B<sub>u</sub> |
| | T2 | 4.869 | 5.015 | +0.146 | (8,8) | A<sub>g</sub> | A<sub>g</sub> |
| [pyrrolopyrrole](#m-pyrrolopyrrole) | T1 | 3.841 | 4.081 | +0.240 | (6,6) | B<sub>u</sub> | B<sub>u</sub> |
| [thienothiophene](#m-thienothiophene) | S1 | 4.965 | 5.301 | +0.336 | (8,8) | B<sub>u</sub> | B<sub>u</sub> |
| | S2 | 5.243 | 5.615 | +0.372 | (6,6) | B<sub>u</sub> | B<sub>u</sub> |
| | T1 | 3.465 | 3.745 | +0.280 | (6,6) | B<sub>u</sub> | B<sub>u</sub> |
| | T2 | 4.261 | 4.427 | +0.166 | (6,6) | B<sub>u</sub> | B<sub>u</sub> |
| [TTF](#m-ttf) | S1 | 2.800 | 3.341 | +0.541 | (4,4) | B<sub>3u</sub> | B<sub>3u</sub> |
| | S2 | 3.773 | 4.068 | +0.295 | (4,4) | B<sub>2u</sub> | B<sub>2u</sub> |
| | T1 | 2.652 | 3.214 | +0.562 | (4,4) | B<sub>3u</sub> | B<sub>3u</sub> |
| | T2 | 2.993 | 3.601 | +0.608 | (6,6) | B<sub>1u</sub> | B<sub>1u</sub> |

Irreps: TBE in the molecular point group, SSR in an abelian subgroup (the calculations run without symmetry, C<sub>1</sub>). <sup>a</sup> SSR irrep differs from the TBE irrep; the two are consistent with the correlation tables D<sub>6h</sub> → D<sub>2h</sub>, D<sub>3h</sub> → C<sub>2v</sub>, C<sub>∞v</sub> → C<sub>2v</sub>, D<sub>∞h</sub> → D<sub>2h</sub>. <sup>m</sup> no irrep assigned to the SSR state (–).

## Setup and reference

### Setup

Method: SSR, active spaces (2,2), (4,4), (6,6), (8,8)

Functionals: BH\&HLYP, M08-SO, ωB97X

Basis: aug-cc-pVTZ

Symmetry: none in the calculation (C<sub>1</sub>); SSR irreps assigned in an abelian subgroup afterwards

Value per state: the active space closest to the TBE; the active space of each value is in the full table

Pairs: each SSR state paired with one TBE row of the same multiplicity; TBE state, both irreps and the active space on the molecule pages

Code: Psi4 commit ddc2f581c

### Reference

Theoretical best estimates of QUEST3, 5, 6, 7 as listed in QUESTDB: Véril, M. et al. WIREs Comput. Mol. Sci. 2021, 11, e1517.

**Scope:** S1, S2, T1, T2 of each molecule where a pair exists: N = 59 / 41 / 50 / 42 (S1 / S2 / T1 / T2); 35 molecules have all four. Every paired TBE state is of valence or charge-transfer type (kind V or CT in the TBE data); no Rydberg state is among the pairs. QUEST6 benzonitrile: no pair, not shown.

## Run, ask, cite

* Manual: [worked inputs and checks](https://reksstudio.github.io/v2/manual/first-calculation/index.md#first-calculation)
* [Manual: Start](https://reksstudio.github.io/v2/manual/index.md#overview) · [Install](https://reksstudio.github.io/v2/docs/index.md#install) · [Cite](https://reksstudio.github.io/v2/docs/index.md#cite) · [Contact](https://reksstudio.github.io/v2/docs/index.md#contact)
* [Back to the Results index](https://reksstudio.github.io/v2/main/results/index.md#row-quest)

Other results: [Exactness](https://reksstudio.github.io/v2/main/results/exactness/index.md) · [H chains](https://reksstudio.github.io/v2/main/results/h-chains/index.md) · [Bond breaking](https://reksstudio.github.io/v2/main/results/bond-breaking/index.md) · [C<sub>2</sub>](https://reksstudio.github.io/v2/main/results/c2/index.md) · [TTR](https://reksstudio.github.io/v2/main/results/ttr/index.md) · [Zethrenes](https://reksstudio.github.io/v2/main/results/zethrenes/index.md) · [C<sub>2</sub>H<sub>4</sub> photochemistry](https://reksstudio.github.io/v2/main/results/c2h4-photochemistry/index.md)
