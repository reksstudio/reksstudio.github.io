---
title: Input
---

## 3\. Configuration Catalog

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

Any other `(N,M)`, or `(4,5)`/`(4,6)` without `REKS_GEMINAL_WIDTHS`, stops the run at catalog load (§diag-catalog).

@@options catalog@@

### Naming convention

Every configuration has a name of the form `<TYPE><index>`, e.g. `PPS1`, `OSS2`, `T_PPS3`; a member of a spin-polarized set is named `<TYPE>_<k>`, e.g. `DOSS_SPS_0`, `TT_SPS_0`. A type is a `_`-separated sequence of words; a multiplier letter in front of `OSS` or `DES` counts the geminals (none = 1, `D` = 2, `T` = 3; the generator naming continues with `Q`, `Qu`, `S`, `Sp`, `O`, `N` for 4–9, which no installed catalog uses).

| Prefix family | Meaning |
| --- | --- |
| `PPS` | The **perfectly-paired singlet**: every geminal Φ<sub>0</sub>. Every `(N,M)` catalog has at least one `PPS` configuration. |
| `OSS`, `DOSS`, `TOSS` | 1, 2, 3 open-shell-singlet (Φ<sub>1</sub>) geminals. Installed: `OSS` in every catalog, `DOSS` in `(6,6)`, `TOSS` only as `TOSS_SPS` in `(6,6)`. |
| `DES`, `DDES`, `TDES` | 1, 2, 3 doubly-excited (Φ<sub>2</sub>) geminals. `TDES` exists in `(6,6)` only. |
| Compound types (`OSS_DES`, `DOSS_DES`, `OSS_DDES`) | Both kinds of geminals in one configuration. |
| `k` leading `T` (`T_PPS3`, `TT_SPS_0`, `TTT_SPS_0`) | k triplet-coupled geminals; manifold 2S = 2k (coupling: §2). In `(2,2)` the single 2S = 2 configuration is named `T1`. |
| `SPS` (as in `DOSS_SPS_0`) | A **spin-polarized** configuration; member `k` of the set is orthogonalized to members 0 … k − 1. |
| Lettered types (`OSSa`, `DESb`, `Ta`, `DESa_OSSb`, `TaTb_SPS`) | Generalized-geminal catalogs (`REKS_GEMINAL_WIDTHS`). |

Bulk tokens (§5) select configurations without listing names; an unknown token lists every valid type and name of the block's manifold (§diag-unknown-token).

### FON sets

The FON set of a configuration (column `FON set` of the SI pool tables) follows its generation, the number of open pairs (§2).

| Set | Generation (open pairs) | Configuration types |
| --- | --- | --- |
| `n` | 0 | `PPS`, `DES`, `DDES`, `TDES` |
| `m` | 1 | `OSS`, `OSS_DES`, `OSS_DDES` |
| `u` | 2 | `DOSS`, `DOSS_DES` |
| `v`, `w`, `x`, `y`, `z` | 3–7 | — |

The label is the set letter, the pairing-scheme digit (`n0`, `n1`), and `tK` for run sector K > 0 (`m0t1`), sector 0 being the lowest 2S of the run. Spin-polarized configurations, whose pairs are all open, have no FON and show `-`.

### Pairing schemes {#pairing-schemes}

A scheme (numbered from 0) is one pairing of the `M` active orbitals into geminals (§2). No option selects it; the configurations of the SA pool do (`single-scheme:N`, `mixed-scheme:N`, §5). The setup report prints the schemes:

@@fragment pairing-schemes@@

## 4\. Selecting Configurations

### Active space

@@options active-space@@

### SA pool

@@options sa-pool@@

### SI cassettes

@@options si-cassettes@@

### Gradients, couplings, relaxed properties

Computed from one coupled-perturbed REKS (CP-REKS, Z-vector) solve. List-of-lists options mirror `SI_REKS_CONFIGS`: inner list `e` refers to cassette `e`; roots are 0-based and sorted by energy.

@@options response@@

## 5\. Bulk Tokens and Pattern Syntax

Accepted wherever a configuration name is (SA blocks, SI cassettes, `exclude:`):

| Token | Expands to |
| --- | --- |
| `"full"` | The entire configuration block of that manifold. |
| A configuration **type** name, e.g. `"PPS"`, `"OSS"`, `"DOSS"` | Every configuration of that type in the manifold, lettered types (`OSSa`, `Ta`) included. |
| `"single-scheme:N"` (PSithon: `"single-scheme-N"` or `"single-scheme_N"`) | Every configuration of pairing scheme `N` (0 if `:N` is omitted), plus the spin-polarized base configurations, which all schemes share. |
| `"mixed-scheme:N"` | The SSR state set on scheme `N`: that scheme's single-excitation configurations (at most one Φ<sub>1</sub> or Φ<sub>2</sub> geminal) *plus every open-shell-singlet configuration of the manifold* plus the spin-polarized base configurations. For `REKS(4,4)`, `mixed-scheme:0` = `PPS1, OSS1, OSS2, OSS3, OSS4, DES1, DES2, DOSS_SPS_0, DOSS_SPS_1`. |
| `"sps"` | The spin-polarized base configurations. |
| A pattern with `*` or `?` | Every configuration name it glob-matches. |
| `"exclude:X"` (also `exclude-X` / `exclude_X`) | **SI cassettes only.** Removes what `X` (any form above) selects from the cassette, wherever it stands in the list, e.g. `["full", "exclude:sps"]` = the whole manifold minus the spin-polarized base. |

A scheme token may union several indices: `"single-scheme-1-2-3"`, or `"single-scheme:1,2,3"` in the Python API; a literal `:` cannot be used inside a PSithon `.dat` array element, since the PSithon array parser splits on `:`. The separators `:`, `-`, `_` and `,` are equivalent; a scheme reached twice is an input error. Tokens are case-insensitive. Besides indices, a scheme token accepts scheme classes, defined for two-orbital geminals relative to scheme 0 by the permutation of antibonding partners: `T` (one transposition), `D<k>` (`k` disjoint transpositions, `k ≥ 2`), `C<l>[X<l>…]` (cycles of the listed lengths, each `≥ 2`), e.g. `"single-scheme-T"`.

|  | SA block | SI cassette |
| --- | --- | --- |
| Kind | weighted list | set |
| Same configuration twice (directly or by overlapping tokens) | input error; combine overlapping selections into one multi-index token | kept once, at its first position |
| `exclude:` | not accepted | subtracts |

## 6\. Spin Manifolds (2S) and Multi-Sector Runs

The sectors of a run are the spin manifolds (2S) used by any SA block or SI group, in ascending 2S. All sectors share one SCF. Without `SA_REKS_CONFIGS` the SA ensemble is the default 2S = 0 pool, which has no high-spin configuration; patterns below add the all-α determinant with `SA_REKS_EXTRA`.

| Mode | When | Block or group i | Empty block `[]` |
| --- | --- | --- | --- |
| Ladder | `SA_REKS_2SPIN` / `SI_REKS_2SPIN` absent | the i-th manifold of the catalog, ascending 2S (0-based, order typed) | skips that rung |
| Explicit | `SA_REKS_2SPIN` / `SI_REKS_2SPIN` given | the manifold named by entry i | declares the manifold: it participates with no configurations |

@@options spin@@

### Input patterns {#input-patterns}

```python
# triplet states on the default 2S=0 SA ensemble plus the all-alpha determinant, SI cassette on 2S=2
"reks": [4, 4],
"sa_reks_extra": [[1, 1, 1, 1, 0, 0, 0, 0]],
"si_reks_2spin": [2],

# singlet + triplet, joint SA, one SI cassette per manifold
"reks": [4, 4],
"sa_reks_configs": [["PPS1", "OSS1"], ["T_PPS1"]],   # ladder: 2S = 0, 2
"si_reks_configs": [[["full"]], [["full"]]],
"si_reks_2spin": [0, 2],

# singlet, triplet, quintet
"sa_reks_2spin":   [0, 2, 4],
"sa_reks_configs": [[0, 1, 2], [0, 1], [0]],
"si_reks_configs": [[[0, 1, 2]], [[0, 1]], [[0]]],
"si_reks_2spin":   [0, 2, 4],
```

### State labels

| 2S | 0 | 2 | 4 | 6 | 8 | 10 | 12 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Root 0, 1, … | `S0`, `S1`, … | `T1`, `T2`, … | `Q1` | `Sp1` | `N1` | `U1` | `Tr1` |

`SI_REKS_PROPERTY_FOR` accepts these labels; Molden and cube file names use them.

### Output

With SI states on two or more manifolds the report prints §spin-state-energetics. Per-sector arrays carry a sector prefix for s > 0 (§13).
