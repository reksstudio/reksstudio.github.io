---
title: Input
---

## 6\. Active Space and Catalog {#catalog}

Configurations come from binary catalogs, one per `(N,M)` and geminal-width set, in `<PSIDATADIR>/reks_catalog` (a non-empty environment variable `PSI4_REKS_CATALOG` replaces the directory). A catalog lists every spin-inequivalent configuration of every spin manifold, each with a **name** and a **type**. Installed:

| `reks` | `reks_geminal_widths` | Catalog | 2S |
| --- | --- | --- | --- |
| `[2, 2]` | — | `reks22` | 0, 2 |
| `[2, 3]` | `[3]` | `reks23_u3` | 0, 2 |
| `[2, 4]` | `[4]` | `reks24_u4` | 0, 2 |
| `[4, 4]` | — | `reks44` | 0, 2, 4 |
| `[4, 5]` | `[2, 3]` | `reks45_u23` | 0, 2, 4 |
| `[4, 6]` | `[3, 3]` | `reks46_u33` | 0, 2, 4 |
| `[6, 6]` | — | `reks66` | 0, 2, 4, 6 |

Any other `(N,M)`, or `(4,5)`/`(4,6)` without `REKS_GEMINAL_WIDTHS`, stops the run at catalog load (§diag-catalog). Slots, seeds and checks of the wide catalogs: §wide-geminals.

### Active space {#active-space}

@@options active-space@@

@@options catalog@@

### Naming convention

Every configuration has a name of the form `<TYPE><index>`, e.g. `PPS1`, `OSS2`, `T_PPS3`; a member of a spin-polarized set is named `<TYPE>_<k>`, e.g. `DOSS_SPS_0`, `TT_SPS_0`. A type is a `_`-separated sequence of words; a multiplier letter in front of `OSS` or `DES` counts the geminals (none = 1, `D` = 2, `T` = 3; the generator naming continues with `Q`, `Qu`, `S`, `Sp`, `O`, `N` for 4–9, which no installed catalog uses).

| Prefix family | Meaning |
| --- | --- |
| `PPS` | The **perfectly-paired singlet**: every geminal Φ<sub>0</sub>. Every `(N,M)` catalog has at least one `PPS` configuration. |
| `OSS`, `DOSS`, `TOSS` | 1, 2, 3 open-shell-singlet (Φ<sub>1</sub>) geminals. Installed: `OSS` in every catalog, `DOSS` in `(6,6)`, as `DOSS_SPS` in `(4,4)` and `(4,5)`, `TOSS` only as `TOSS_SPS` in `(6,6)`. |
| `DES`, `DDES`, `TDES` | 1, 2, 3 doubly-excited (Φ<sub>2</sub>) geminals. `TDES` exists in `(6,6)` only. |
| Compound types (`OSS_DES`, `DOSS_DES`, `OSS_DDES`) | Both kinds of geminals in one configuration. |
| A first word of k letters `T` (`T_PPS3`, `TT_SPS_0`, `TTT_SPS_0`) | k triplet-coupled geminals (a `T` glued to `OSS` or `DES`, as in `TOSS`, is the multiplier 3); manifold 2S = 2k (coupling: §run-sector). In `(2,2)` the single 2S = 2 configuration is named `T1`. |
| `SPS` (as in `DOSS_SPS_0`) | A **spin-polarized** configuration; member `k` of the set is orthogonalized to members 0 … k − 1. |
| Lettered types (`OSSa`, `DESb`, `Ta`, `DESa_OSSb`, `TaTb_SPS`) | Generalized-geminal catalogs (`REKS_GEMINAL_WIDTHS`). |

Bulk tokens (§bulk-tokens) select configurations without listing names; an unknown token lists every valid type and name of the block's manifold (§diag-unknown-token).

### FON sets {#fon-sets}

The FON set of a configuration (column `FON set` of the SI pool tables) follows its generation, the number of open pairs (§fon-generation). Option: the lower bound of the free FON of that generation (§reks_l_fon).

| Set | Generation (open pairs) | Configuration types | Option |
| --- | --- | --- | --- |
| `n` | 0 | `PPS`, `DES`, `DDES`, `TDES` | `REKS_N_FON` |
| `m` | 1 | `OSS`, `OSS_DES`, `OSS_DDES`; `T_PPS`, `T_DES`, `T_DDES` | `REKS_M_FON` |
| `u` | 2 | `DOSS`, `DOSS_DES`; `T_OSS`, `T_OSS_DES`, `TT_PPS`, `TT_DES` | `REKS_U_FON` |
| `v`, `w`, `x`, `y`, `z` | 3–7 | — | `REKS_V_FON`, `REKS_W_FON`, `REKS_X_FON`, `REKS_Y_FON`, `REKS_Z_FON` |

The label is the set letter, the pairing-scheme digit (`n0`, `n1`), and `tK` for run sector K > 0 (`m0t1`, §run-sector); `FON optimization after the SCF` prints the scheme in its own column (`n`, `mt1`). Spin-polarized configurations, whose pairs are all open, have no FON and show `-`.

### Pairing schemes {#pairing-schemes}

No option selects a pairing scheme (§pairing-scheme); the configurations of the SA pool do (`single-scheme:N`, `mixed-scheme:N`, §bulk-tokens). The setup report prints the schemes:

@@fragment pairing-schemes@@

## 7\. Bulk Tokens and Pattern Syntax {#bulk-tokens}

Accepted wherever a configuration name is (SA blocks, SI cassettes, `exclude:`):

| Token | Expands to |
| --- | --- |
| `"full"` | The entire configuration block of that manifold. |
| A configuration **type** name, e.g. `"PPS"`, `"OSS"`, `"DOSS"` | Every configuration of that type in the manifold, lettered types (`OSSa`, `Ta`) included. |
| `"single-scheme:N"` (PSithon: `"single-scheme-N"` or `"single-scheme_N"`) | Every configuration of pairing scheme `N` (0 if `:N` is omitted), plus the spin-polarized base configurations, which all schemes share. |
| `"mixed-scheme:N"` | The SSR state set on scheme `N`: that scheme's configurations with at most one excited geminal (Φ<sub>1</sub> or Φ<sub>2</sub>) *plus every open-shell-singlet configuration of the manifold* plus the spin-polarized base configurations. For `REKS(4,4)`, `mixed-scheme:0` = `PPS1, OSS1, OSS2, OSS3, OSS4, DES1, DES2, DOSS_SPS_0, DOSS_SPS_1`. |
| `"sps"` | The spin-polarized base configurations. |
| A pattern with `*` or `?` | Every configuration name it glob-matches. |
| `"exclude:X"` (also `exclude-X` / `exclude_X`) | **SI cassettes only.** Removes what `X` (any form above) selects from the cassette, wherever it stands in the list, e.g. `["full", "exclude:sps"]` = the whole manifold minus the spin-polarized base. |

A scheme token may union several indices: `"single-scheme-1-2-3"`, or `"single-scheme:1,2,3"` in the Python API; a literal `:` cannot be used inside a PSithon `.dat` array element, since the PSithon array parser splits on `:`. The separators `:`, `-`, `_` and `,` are equivalent; a scheme reached twice is an input error. Tokens are case-insensitive. Besides indices, a scheme token accepts scheme classes, defined for two-orbital geminals relative to scheme 0 by the permutation of antibonding partners: `T` (one transposition), `D<k>` (`k` disjoint transpositions, `k ≥ 2`), `C<l>[X<l>…]` (cycles of the listed lengths, each `≥ 2`), e.g. `"single-scheme-T"`.

|  | SA block | SI cassette |
| --- | --- | --- |
| Kind | weighted list | set |
| Same configuration twice (directly or by overlapping tokens) | input error; combine overlapping selections into one multi-index token | kept once, at its first position |
| `exclude:` | not accepted | subtracts |

## 8\. SA Pool and SI Cassettes {#selecting}

### SA pool {#sa-pool}

@@options sa-pool@@

### SI cassettes {#si-cassettes}

@@options si-cassettes@@

## 9\. Spin Manifolds (2S) and Multi-Sector Runs {#spin-manifolds}

All sectors of a run (§run-sector) share one SCF. Without `SA_REKS_CONFIGS` the SA ensemble is the default pool (§sa_reks_configs).

| Mode | When | Block or group i | Empty block `[]` |
| --- | --- | --- | --- |
| Ladder | `SA_REKS_2SPIN` / `SI_REKS_2SPIN` absent | the i-th manifold of the catalog, ascending 2S (0-based, order typed) | skips that rung |
| Explicit | `SA_REKS_2SPIN` / `SI_REKS_2SPIN` given | the manifold named by entry i | declares the manifold: it participates with no configurations |

@@options spin@@

### Input patterns {#input-patterns}

Recommended SA ensemble for states on several spin manifolds: the default 2S = 0 pool (PPS and every OSS); the T_PPS configurations that lead T1/T2 may be added, nothing of higher spin. The all-α determinant is added for SCF stability (§sa_reks_extra).

Linear H₄ (R = 1.6 Å), BH&HLYP/6-31G. In all three the SA ensemble is the default 2S = 0 pool of REKS(4,4), `PPS1`, `OSS1`, `OSS2`. The input adds the all-α determinant (`sa_reks_extra`): four SA members, weights 1/4 each; one SCF, E<sub>SA</sub> = −1.8826103083 E<sub>h</sub> in every case.

**Triplet states only**

```python
"reks": [4, 4],
"sa_reks_extra": [[1, 1, 1, 1, 0, 0, 0, 0]],   # all-alpha determinant in SA
"si_reks_2spin": [2],
```

`SI_REKS_CONFIGS` is absent, so the single SI cassette is the whole 2S = 2 block: 11 configurations (`T_PPS1`–`4`, `T_DES1`–`4`, `T_OSS_SPS_0`–`2`), 11 triplet roots, printed as cassette 0. No singlet SI states are computed.

**Singlet and triplet states**

```python
"reks": [4, 4],
"sa_reks_extra": [[1, 1, 1, 1, 0, 0, 0, 0]],
"si_reks_configs": [[["full"]], [["full"]]],   # 2S = 0, 2S = 2
```

Two SI groups without `SI_REKS_2SPIN` take the ladder: group 0 → 2S = 0, group 1 → 2S = 2. Cassette 0: 18 singlet configurations, 16 roots (2 overlap null modes); cassette 1: the 11 triplet configurations, the same 11 roots as above. Adding `"si_reks_2spin": [0, 2]` gives the identical run; `SI_REKS_2SPIN` is needed only to skip a manifold or to change the cassette order (§cassette-order).

**Singlet, triplet and quintet states**

```python
"reks": [4, 4],
"sa_reks_extra": [[1, 1, 1, 1, 0, 0, 0, 0]],
"si_reks_configs": [[["full"]], [["full"]], [["full"]]],   # 2S = 0, 2, 4
```

The third group of the ladder is 2S = 4: one configuration, `TT_SPS_0`, one quintet root. The singlet and triplet cassettes are those of the previous pattern, with the same roots.

### State labels

| 2S | 0 | 2 | 4 | 6 | 8 | 10 | 12 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Root 0, 1, … | `S0`, `S1`, … | `T1`, `T2`, … | `Q1` | `Sp1` | `N1` | `U1` | `Tr1` |

`SI_REKS_PROPERTY_FOR` accepts these labels; Molden and cube file names use them.

### Output

With SI states on two or more manifolds the report prints §spin-state-energetics. Per-sector arrays carry a sector prefix for s > 0 (§variable-names).

### Cassette order {#cassette-order}

`SI_REKS_2SPIN` sets the order of the SI cassettes: spin groups as listed, the cassettes of a group in the order of its `SI_REKS_CONFIGS` block. The per-cassette lists `SI_REKS_GRAD`, `SI_REKS_NAC`, `SI_REKS_PROPERTY_FOR` and `SI_REKS_STORE_STATES` take one entry per cassette in this order. The cassette blocks are printed in this order, and state energies are given relative to the lowest state of its first cassette. The cassette index K in headers and in the `K=e` and `CASSETTE e` names runs in ascending 2S. Without `SI_REKS_2SPIN` (ladder) both orders are ascending 2S.

```python
"si_reks_2spin":        [2, 0],
"si_reks_configs":      [[[0]], [[0, 1]]],   # triplet, singlet
"si_reks_grad":         [[0], []],           # T1: printed as cassette 1, SSR ROOT 0 GRADIENT CASSETTE 1
"si_reks_store_states": [1, 0],              # 1 triplet state stored, no singlet
```

H₂ REKS(2,2): with `[2, 0]` the gradient and the stored state go to the triplet (K = 1), the triplet block is printed first and energies are given as `E-E(T1)`; with `[0, 2]` the same lists select the singlet (K = 0).

## 10\. Properties, Gradients, Couplings {#response}

Relaxed properties, gradients and couplings are computed from one coupled-perturbed REKS (CP-REKS, Z-vector) solve. List-of-lists options mirror `SI_REKS_CONFIGS`: inner list `t` refers to the t-th cassette in the order of §cassette-order; roots as in §ssr-states.

### State properties {#state-properties}

`SI_REKS_ANALYSIS` selects the property blocks of the SSR states (unrelaxed densities), `SI_REKS_PROPERTY_FOR` the states that also get relaxed properties, `REKS_EKT` ionization energies of those states. `State analysis` in the setup block lists every block; struck-through names are not computed.

```python
psi4.set_options({
    # + TRANSITION_DIPOLE, NO_OCCUPATIONS (always on)
    "si_reks_analysis": ["DIPOLE", "RADICAL", "NTO", "MULTIPOLE(3)"],
    # relaxed properties and EKT of S0, S1 of cassette 0
    "si_reks_property_for": [["S0..1"], []],
    "reks_ekt": True,
})
```

@@options state-properties@@

### Gradients and couplings {#gradients-couplings}

Worked call, optimization and dynamics: §opt-dynamics.

@@options response@@
