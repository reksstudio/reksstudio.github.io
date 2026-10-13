# Input — REKS Studio Manual

HTML: <https://reksstudio.github.io/v2/manual/setup/>

Psi4 d40267fc2, 2026-10-13: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

[Manual](https://reksstudio.github.io/v2/manual/index.md) › Input

# Input

Chapters 6–10 of the REKS Studio user manual

## 6. Active Space and Catalog {#catalog}

Configurations come from binary catalogs, one per `(N,M)` and geminal-width set, in `<PSIDATADIR>/reks_catalog` (a non-empty environment variable `PSI4_REKS_CATALOG` replaces the directory). A catalog lists every spin-inequivalent configuration of every spin manifold, each with a **name** and a **type**. Installed:

| `reks` | `reks_geminal_widths` | Catalog | 2S |
| - | - | - | - |
| `[2, 2]` | — | `reks22` | 0, 2 |
| `[2, 3]` | `[3]` | `reks23_u3` | 0, 2 |
| `[2, 4]` | `[4]` | `reks24_u4` | 0, 2 |
| `[4, 4]` | — | `reks44` | 0, 2, 4 |
| `[4, 5]` | `[2, 3]` | `reks45_u23` | 0, 2, 4 |
| `[4, 6]` | `[3, 3]` | `reks46_u33` | 0, 2, 4 |
| `[6, 6]` | — | `reks66` | 0, 2, 4, 6 |

Any other `(N,M)`, or `(4,5)`/`(4,6)` without `REKS_GEMINAL_WIDTHS`, stops the run at catalog load ([Active space fails to load](https://reksstudio.github.io/v2/manual/diagnose/index.md#diag-catalog)). Slots, seeds and checks of the wide catalogs: [§4](https://reksstudio.github.io/v2/manual/wide-geminals/index.md#wide-geminals).

### Active space {#active-space}

#### `REKS` {#reks}

Active space `[N, M]`: N active electrons in M active orbitals; selects the catalog.

Type: `[N, M]`

Default: — (required)

```python
"reks": [4, 4],
```

```log
REKS requires the canonical symmetric-Ms reference: N=2 implies molecule multiplicity 1 (even N -> 1, odd N -> 2), but the molecule multiplicity is 3. Do not set the multiplicity to 2S+1; keep the canonical value and pick spin manifolds via SA_REKS_2SPIN / SI_REKS_2SPIN.
```

* N active electrons in M active orbitals, exactly two integers; a third element is an input error. Only installed catalogs run ([§6](https://reksstudio.github.io/v2/manual/setup/index.md#catalog)).
* Molecule multiplicity: 1 for even N, 2 for odd N (no installed catalog has odd N); any other value is the error above. The spin manifolds are chosen by [`SA_REKS_2SPIN`](https://reksstudio.github.io/v2/options/SA_REKS_2SPIN.md) / [`SI_REKS_2SPIN`](https://reksstudio.github.io/v2/options/SI_REKS_2SPIN.md) or the ladder ([§9](https://reksstudio.github.io/v2/manual/setup/index.md#spin-manifolds)).

#### `REKS_GEMINAL_WIDTHS` {#reks_geminal_widths}

Width (orbital count) of each geminal, N/2 integers summing to M; selects the catalog `reks{N}{M}_u{w0}{w1}…`.

Type: array

Default: `[]` (all 2)

```python
"reks": [4, 5],
"reks_geminal_widths": [2, 3],
```

* Orbital count of each two-electron geminal: N/2 integers, each in \[2, 8], summing to M. Empty (default): every geminal spans 2 orbitals.
* A width-w geminal holds 2 electrons in w orbitals; its configurations carry orbital-letter suffixes (`OSSa1`, `DESb1`).
* Selects the catalog `reks{N}{M}_u{w0}{w1}…`; the installed ones are listed above.

### Naming convention {#naming-convention}

Every configuration has a name of the form `<TYPE><index>`, e.g. `PPS1`, `OSS2`, `T_PPS3`; a member of a spin-polarized set is named `<TYPE>_<k>`, e.g. `DOSS_SPS_0`, `TT_SPS_0`. A type is a `_`-separated sequence of words; a multiplier letter in front of `OSS` or `DES` counts the geminals (none = 1, `D` = 2, `T` = 3; the generator naming continues with `Q`, `Qu`, `S`, `Sp`, `O`, `N` for 4–9, which no installed catalog uses).

| Prefix family | Meaning |
| - | - |
| `PPS` | The **perfectly-paired singlet**: every geminal Φ<sub>0</sub>. Every `(N,M)` catalog has at least one `PPS` configuration. |
| `OSS`, `DOSS`, `TOSS` | 1, 2, 3 open-shell-singlet (Φ<sub>1</sub>) geminals. Installed: `OSS` in every catalog, `DOSS` in `(6,6)`, as `DOSS_SPS` in `(4,4)` and `(4,5)`, `TOSS` only as `TOSS_SPS` in `(6,6)`. |
| `DES`, `DDES`, `TDES` | 1, 2, 3 doubly-excited (Φ<sub>2</sub>) geminals. `TDES` exists in `(6,6)` only. |
| Compound types (`OSS_DES`, `DOSS_DES`, `OSS_DDES`) | Both kinds of geminals in one configuration. |
| A first word of k letters `T` (`T_PPS3`, `TT_SPS_0`, `TTT_SPS_0`) | k triplet-coupled geminals (a `T` glued to `OSS` or `DES`, as in `TOSS`, is the multiplier 3); manifold 2S = 2k (coupling: [Spin manifold and run sector](https://reksstudio.github.io/v2/manual/concepts/index.md#run-sector)). In `(2,2)` the single 2S = 2 configuration is named `T1`. |
| `SPS` (as in `DOSS_SPS_0`) | A **spin-polarized** configuration; member `k` of the set is orthogonalized to members 0 … k − 1. |
| Lettered types (`OSSa`, `DESb`, `Ta`, `DESa_OSSb`, `TaTb_SPS`) | Generalized-geminal catalogs (`REKS_GEMINAL_WIDTHS`). |

Bulk tokens ([§7](https://reksstudio.github.io/v2/manual/setup/index.md#bulk-tokens)) select configurations without listing names; an unknown token lists every valid type and name of the block's manifold ([Unknown configuration name or type](https://reksstudio.github.io/v2/manual/diagnose/index.md#diag-unknown-token)).

### FON sets {#fon-sets}

The FON set of a configuration (column `FON set` of the SI pool tables) follows its generation, the number of open pairs ([FON set and generation](https://reksstudio.github.io/v2/manual/concepts/index.md#fon-generation)). Option: the lower bound of the free FON of that generation ([`REKS_<L>_FON`](https://reksstudio.github.io/v2/options/REKS_N_FON.md)).

| Set | Generation (open pairs) | Configuration types | Option |
| - | - | - | - |
| `n` | 0 | `PPS`, `DES`, `DDES`, `TDES` | `REKS_N_FON` |
| `m` | 1 | `OSS`, `OSS_DES`, `OSS_DDES`; `T_PPS`, `T_DES`, `T_DDES` | `REKS_M_FON` |
| `u` | 2 | `DOSS`, `DOSS_DES`; `T_OSS`, `T_OSS_DES`, `TT_PPS`, `TT_DES` | `REKS_U_FON` |
| `v`, `w`, `x`, `y`, `z` | 3–7 | — | `REKS_V_FON`, `REKS_W_FON`, `REKS_X_FON`, `REKS_Y_FON`, `REKS_Z_FON` |

The label is the set letter, the pairing-scheme digit (`n0`, `n1`), and `tK` for run sector K > 0 (`m0t1`, [Spin manifold and run sector](https://reksstudio.github.io/v2/manual/concepts/index.md#run-sector)); `FON optimization after the SCF` prints the scheme in its own column (`n`, `mt1`). Spin-polarized configurations, whose pairs are all open, have no FON and show `-`.

### Pairing schemes {#pairing-schemes}

No option selects a pairing scheme ([Pairing scheme](https://reksstudio.github.io/v2/manual/concepts/index.md#pairing-scheme)); the configurations of the SA pool do (`single-scheme:N`, `mixed-scheme:N`, [§7](https://reksstudio.github.io/v2/manual/setup/index.md#bulk-tokens)). The setup report prints the schemes:

```log
=> Pairing schemes (geminal orbitals) <=

   Scheme 0: (a,d) & (b,c)
   Scheme 1: (a,c) & (b,d)

[...]
   FON = fractional occupation number n_p of an active orbital (0..2); the FONs of a geminal sum to 2.
```

## 7. Bulk Tokens and Pattern Syntax {#bulk-tokens}

Accepted wherever a configuration name is (SA blocks, SI cassettes, `exclude:`):

| Token | Expands to |
| - | - |
| `"full"` | The entire configuration block of that manifold. |
| A configuration **type** name, e.g. `"PPS"`, `"OSS"`, `"DOSS"` | Every configuration of that type in the manifold, lettered types (`OSSa`, `Ta`) included. |
| `"single-scheme:N"` (PSithon: `"single-scheme-N"` or `"single-scheme_N"`) | Every configuration of pairing scheme `N` (0 if `:N` is omitted), plus the spin-polarized base configurations, which all schemes share. |
| `"mixed-scheme:N"` | The SSR state set on scheme `N`: that scheme's configurations with at most one excited geminal (Φ<sub>1</sub> or Φ<sub>2</sub>) *plus every open-shell-singlet configuration of the manifold* plus the spin-polarized base configurations. For `REKS(4,4)`, `mixed-scheme:0` = `PPS1, OSS1, OSS2, OSS3, OSS4, DES1, DES2, DOSS_SPS_0, DOSS_SPS_1`. |
| `"sps"` | The spin-polarized base configurations. |
| A pattern with `*` or `?` | Every configuration name it glob-matches. |
| `"exclude:X"` (also `exclude-X` / `exclude_X`) | **SI cassettes only.** Removes what `X` (any form above) selects from the cassette, wherever it stands in the list, e.g. `["full", "exclude:sps"]` = the whole manifold minus the spin-polarized base. |

A scheme token may union several indices: `"single-scheme-1-2-3"`, or `"single-scheme:1,2,3"` in the Python API; a literal `:` cannot be used inside a PSithon `.dat` array element, since the PSithon array parser splits on `:`. The separators `:`, `-`, `_` and `,` are equivalent; a scheme reached twice is an input error. Tokens are case-insensitive. Besides indices, a scheme token accepts scheme classes, defined for two-orbital geminals relative to scheme 0 by the permutation of antibonding partners: `T` (one transposition), `D<k>` (`k` disjoint transpositions, `k ≥ 2`), `C<l>[X<l>…]` (cycles of the listed lengths, each `≥ 2`), e.g. `"single-scheme-T"`.

| | SA block | SI cassette |
| - | - | - |
| Kind | weighted list | set |
| Same configuration twice (directly or by overlapping tokens) | input error; combine overlapping selections into one multi-index token | kept once, at its first position |
| `exclude:` | not accepted | subtracts |

## 8. SA Pool and SI Cassettes {#selecting}

### SA pool {#sa-pool}

#### `SA_REKS_CONFIGS` {#sa_reks_configs}

SA-REKS configuration pool: one block (flat list) or one block per spin manifold (nested list) of names, indices or bulk tokens.

Type: array

Default: catalog `sa_default` pool on 2S = 0

Alias: `REKS_SA_CONFIGS`

```python
"sa_reks_configs": ["PPS1", "OSS1", "OSS2"],
```

```log
=> SA pool <=

    Cat  Config       SA weight  Definition
   ---------------------------------------------------------------
      0  PPS1          0.333333  A[(core) Phi_0(a,d) * Phi_0(b,c)]
      1  OSS1          0.333333  A[(core) Phi_1(a,d) * Phi_0(b,c)]
      2  OSS2          0.333333  A[(core) Phi_0(a,d) * Phi_1(b,c)]
   ---------------------------------------------------------------
                 sum = 1.000000

   E[SA-REKS] = 0.333333 * E(PPS1)
              + 0.333333 * E(OSS1)
              + 0.333333 * E(OSS2)

   Cat = catalog index of the configuration. A[...] = antisymmetrized product
   of the geminals (pairing schemes above) and the doubly occupied core orbitals (core).
```

* Flat list = one block on one spin manifold, e.g. `["PPS1", "OSS1", "OSS2"]` or by local index `[0, 1, 2]`. Elements: configuration names, local integer indices, or bulk tokens ([§7](https://reksstudio.github.io/v2/manual/setup/index.md#bulk-tokens)).
* A configuration may not repeat within a block: an SA block is a weighted list ([§7](https://reksstudio.github.io/v2/manual/setup/index.md#bulk-tokens)).
* Nested list = one block per spin manifold, e.g. `[["PPS1", "OSS1"], ["T_PPS1"]]`, mapped to manifolds by ladder position or by `SA_REKS_2SPIN` ([§9](https://reksstudio.github.io/v2/manual/setup/index.md#spin-manifolds)).
* Absent: the catalog's `sa_default` pool on 2S = 0. Defaults: `REKS(2,2)` `[PPS1, OSS1]`, `REKS(4,4)` `[PPS1, OSS1, OSS2]`, `REKS(6,6)` `[PPS1, OSS1, OSS2, OSS3]`.
* Check `sum = 1.000000` and that every `SA_REKS_EXTRA` determinant of the input is listed (`Extra1`, …).

See: [`SA_REKS_WEIGHTS`](https://reksstudio.github.io/v2/options/SA_REKS_WEIGHTS.md), [`SA_REKS_EXTRA`](https://reksstudio.github.io/v2/options/SA_REKS_EXTRA.md), [SA-REKS ensemble and weights](https://reksstudio.github.io/v2/manual/concepts/index.md#sa-ensemble)

#### `SA_REKS_WEIGHTS` {#sa_reks_weights}

Weights of the SA pool entries, configurations first, then the `sa_reks_extra` determinants; non-negative, summing to 1.

Type: array

Default: uniform `1/n`

Alias: `REKS_SA_WEIGHTS`

```python
"sa_reks_weights": [0.5, 0.25, 0.25],
```

* One non-negative weight per SA pool entry, in the order typed (concatenated block order, then the `SA_REKS_EXTRA` determinants), summing to 1.0 (tolerance 10<sup>-8</sup>). Omitted: uniform 1/n.
* A configuration or extra determinant with weight 0 leaves the SA ensemble; a zero-weight configuration that is also an SI member has its SI-only geminals' FONs optimized after the SCF.
* If `SA_REKS_2SPIN` lists manifolds out of ascending-2S order, configurations and weights are re-sorted jointly into ascending 2S; a weight still matches the configuration in the order typed.

#### `SA_REKS_EXTRA` {#sa_reks_extra}

Extra Slater determinants of the SA ensemble, as occupation vectors; each has its own weight, carries no FON and enters no SI cassette.

Type: array of arrays

Default: none

Alias: `REKS_SA_EXTRA`

```python
"sa_reks_extra": [[1, 1, 1, 1, 0, 0, 0, 0]],
```

```log
=> SA pool <=

    Cat  Config       SA weight  Definition
   --------------------------------------------------------
      0  PPS1          0.250000  A[Phi_0(a,d) * Phi_0(b,c)]
      1  OSS1          0.250000  A[Phi_1(a,d) * Phi_0(b,c)]
      2  OSS2          0.250000  A[Phi_0(a,d) * Phi_1(b,c)]
         Extra1        0.250000  A[|a,b,c,d|]
   --------------------------------------------------------
                 sum = 1.000000
```

* Each element is a Slater determinant given as an occupation vector `[alpha(M) | beta(M)]` of length 2M, 0/1 entries summing to N; the call above is the all-α determinant of REKS(4,4).
* Each determinant joins the SA ensemble with a fixed weight from the tail of `SA_REKS_WEIGHTS`, adds its Kohn–Sham energy to E<sub>SA</sub>, carries no FON, and changes the SA orbitals and with them every SI state. It never enters an SI cassette.
* Recommended: the all-α determinant in every SA-REKS ensemble, for SCF stability and the shape of the orbitals. The code does not add it by default.

### SI cassettes {#si-cassettes}

#### `SI_REKS_CONFIGS` {#si_reks_configs}

SI-SA-REKS cassettes: the configuration sets whose secular equations give the states, in groups per spin manifold.

Type: array

Default: one full-block cassette, lowest manifold

Alias: `REKS_SI_CONFIGS`

```python
"si_reks_configs": [[["PPS1", "OSS1"], ["PPS2", "OSS3"]]],
```

```log
=> SI pools <=

   Cassette  Spin          Configs  Method              Wfn storage
   ----------------------------------------------------------------
          0  2S=0 (singlet)     18  18SI-3SA-REKS(4,4)  none
          1  2S=2 (triplet)     11  11SI-3SA-REKS(4,4)  none
   ----------------------------------------------------------------
   kSI-lSA-REKS = SSR over k configurations in the orbitals of the l-configuration SA ensemble;
   Wfn storage = states stored on the wavefunction, written to *.npy by wfn.to_file (SI_REKS_STORE_STATES).
[...]
   Cassette 0, 2S=0 (singlet)
    Cat  Config       FON set  Definition
   -------------------------------------------------------------------------------------------------------
      0  PPS1         n0       A[(core) Phi_0(a,d) * Phi_0(b,c)]
      1  OSS1         m0       A[(core) Phi_1(a,d) * Phi_0(b,c)]
      2  OSS2         m0       A[(core) Phi_0(a,d) * Phi_1(b,c)]
```

```log
==> State interaction: setup over the union of the SI cassettes <==

    Microstates                   37: 18 in the SA ensemble, 19 SI-only
    Spin-string densities         14: 12 from the SCF, 2 built
    Fock matrices, energies       19 SI-only microstates
    FON optimization              3 FON sets, table below
    Active-MO ERIs (pq|rs)        6 active MO pairs pq
    Spin-string densities = densities of the microstate occupation bitmasks.
[...]
==> State interaction: cassette 0, 18SI-3SA-REKS(4,4), 2S=0 (singlet) <==
```

```log
=> Alternative configuration lists <=

   State           E [Eh]  E-E(S0) [eV]  E-E(S0) [kcal/mol]  E-E(own lowest) [eV]  Closest in cassette 0  dE_exc - closest [eV]   Main configurations (w_j in %)
   -------------------------------------------------------------------------------------------------------------------------------------------------------------
   S0[1]  -2.123574938693        -0.039               -0.89                 0.000  -                                          -   PPS2(99.8)
   S1[1]  -1.334331072881        21.438              494.37                21.476  -                                          -   OSS3(99.8) 1A(a)->3A(c)
   -------------------------------------------------------------------------------------------------------------------------------------------------------------
   Closest = state of the first list of largest weight overlap sum_j min(w_j(A), w_j(B)) >= 50 %
   (configurations of |S| >= 0.95 merged); dE_exc = E-E(own lowest).
```

* 3-level `[[[...], ...], [[...], ...], ...]`: one group of cassettes per outer entry, each group mapped to a spin manifold like the SA blocks (ladder position or `SI_REKS_2SPIN`). The call above is one group of two cassettes, each with its own states (third fragment). A cassette is a set of names, indices or bulk tokens ([§7](https://reksstudio.github.io/v2/manual/setup/index.md#bulk-tokens)); a repeated selection is kept at its first position. First two fragments: `[[["full"]], [["full"]]]` with `SI_REKS_2SPIN` `[0, 2]`.
* 2-level `[[...], [...], ...]`: the cassettes of a single group on the run's lowest manifold (or the one `SI_REKS_2SPIN` names); legal only when `SI_REKS_2SPIN` is absent or has length 1. The 3-level form without `SI_REKS_2SPIN` maps group 0 to ladder position 0, the catalog's first spin sector; the two forms coincide when that is the run's lowest manifold, as in the call above.
* Absent: one cassette spanning the whole configuration block of the run's lowest (or `SI_REKS_2SPIN`-chosen) manifold. `[[]]` runs no SI step and sets no `SSR` arrays.
* A flat list of names (`["PPS1", "OSS1"]`) is an input error: `SI_REKS_CONFIGS: scalar elements are not a cassette form; use a list of cassettes [[...], ...] (2-level) or cassette groups [[[...]], ...] (3-level).`
* `Wfn storage` `none` in `SI pools` means no per-state `SSR … K=e` analysis arrays and no natural-orbital, NTO or NDO Molden files for that cassette ([`SI_REKS_STORE_STATES`](https://reksstudio.github.io/v2/options/SI_REKS_STORE_STATES.md)).
* Each cassette opens with a `State interaction: cassette e` header; its 2S tag appears when the run has more than one spin manifold.
* Two or more cassettes of one 2S add `Alternative configuration lists` after `State summary` (third fragment): the states of the later cassettes with energies relative to S0 and to their own lowest state, the closest state of the first list by weight overlap, and the main configurations.

See: [SI cassette](https://reksstudio.github.io/v2/manual/concepts/index.md#si-cassette), [`SI_REKS_2SPIN`](https://reksstudio.github.io/v2/options/SI_REKS_2SPIN.md), [SSR state energies](https://reksstudio.github.io/v2/manual/properties/index.md#ssr-energies)

#### `SI_REKS_PRINT_STATES` {#si_reks_print_states}

States per cassette whose per-state and pair tables are printed; 0 = none, -1 = all.

Type: int

Default: `5`

```python
"si_reks_print_states": -1,
```

* States per cassette listed in the per-state and pair tables; `0` = none, `-1` = all. The SI eigenproblem is always solved in full.
* Properties are computed for max(print, store) states ([`SI_REKS_STORE_STATES`](https://reksstudio.github.io/v2/options/SI_REKS_STORE_STATES.md)). Counts are clamped to the number of physical states.

#### `SI_REKS_STORE_STATES` {#si_reks_store_states}

States per cassette whose properties are stored on the wavefunction (arrays, Molden and cube files); 0 = none, -1 = all.

Type: array of int

Default: all; the first 10 if `M ≥ 6` and > 10 configurations

Alias: `REKS_SI_STORE_STATES`

```python
"si_reks_store_states": [-1, 0],
```

* One integer per cassette, in cassette order K = 0, 1, … (ascending 2S): states whose properties are stored on the wavefunction (array variables, Molden and cube files); `0` = none, `-1` = all.
* Roots requested in `SI_REKS_GRAD`, `SI_REKS_NAC`, `SI_REKS_PROPERTY_FOR` keep their eigenvectors regardless.

#### `SI_REKS_OVERLAP_CUTOFF` {#si_reks_overlap_cutoff}

Overlap eigenvalues <code>s ≤ cutoff · s<sub>max</sub></code> of the SI basis are treated as null space and dropped.

Type: double

Default: `1e-10`

```python
"si_reks_overlap_cutoff": 1e-8,
```

* Eigenvectors of the SI overlap with s ≤ cutoff · s<sub>max</sub> form the null space and are removed before diagonalization ([SI Hamiltonian and overlap](https://reksstudio.github.io/v2/manual/properties/index.md#si-matrices)).
* Ghost roots (configurations with s just above the cutoff): [Adiabatic (SSR) states](https://reksstudio.github.io/v2/manual/concepts/index.md#ssr-states).

## 9. Spin Manifolds (2S) and Multi-Sector Runs {#spin-manifolds}

All sectors of a run ([Spin manifold and run sector](https://reksstudio.github.io/v2/manual/concepts/index.md#run-sector)) share one SCF. Without `SA_REKS_CONFIGS` the SA ensemble is the default pool ([`SA_REKS_CONFIGS`](https://reksstudio.github.io/v2/options/SA_REKS_CONFIGS.md)).

| Mode | When | Block or group i | Empty block `[]` |
| - | - | - | - |
| Ladder | `SA_REKS_2SPIN` / `SI_REKS_2SPIN` absent | the i-th manifold of the catalog, ascending 2S (0-based, order typed) | skips that rung |
| Explicit | `SA_REKS_2SPIN` / `SI_REKS_2SPIN` given | the manifold named by entry i | declares the manifold: it participates with no configurations |

#### `SA_REKS_2SPIN` {#sa_reks_2spin}

Spin manifold 2S of each SA block, one integer per block.

Type: array

Default: ladder, lowest manifold

Alias: `REKS_SA_2SPIN`

```python
"sa_reks_2spin": [0, 2],
```

* One integer 2S per SA block (explicit mode, [§9](https://reksstudio.github.io/v2/manual/setup/index.md#spin-manifolds)). Entries are pairwise distinct, in any order (re-sorted ascending).
* Without `SA_REKS_CONFIGS` only `[0]` is accepted; any other value is an input error. States of 2S > 0 on the default ensemble: [`SI_REKS_2SPIN`](https://reksstudio.github.io/v2/options/SI_REKS_2SPIN.md).

#### `SI_REKS_2SPIN` {#si_reks_2spin}

2S of each SI group; more than one entry requires the 3-level `si_reks_configs` form.

Type: array

Default: ladder, lowest manifold

Alias: `REKS_SI_2SPIN`

```python
"si_reks_2spin": [0, 2],
```

* One integer 2S per SI group (explicit mode, [§9](https://reksstudio.github.io/v2/manual/setup/index.md#spin-manifolds)), pairwise distinct, in any order; more than one entry requires the 3-level `si_reks_configs` form.
* `[x]` alone: the default SA ensemble on 2S = 0 and the default SI cassette on 2S = x ([Input patterns](https://reksstudio.github.io/v2/manual/setup/index.md#input-patterns)).

### Input patterns {#input-patterns}

```python
# triplet states: SA = default 2S=0 pool, SI cassette on 2S=2
"reks": [4, 4],
"si_reks_2spin": [2],
"sa_reks_extra": [[1, 1, 1, 1, 0, 0, 0, 0]],          # all-alpha determinant in SA

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

### State labels {#state-labels}

| 2S | 0 | 2 | 4 | 6 | 8 | 10 | 12 |
| - | - | - | - | - | - | - | - |
| Root 0, 1, … | `S0`, `S1`, … | `T1`, `T2`, … | `Q1` | `Sp1` | `N1` | `U1` | `Tr1` |

`SI_REKS_PROPERTY_FOR` accepts these labels; Molden and cube file names use them.

### Output {#output}

With SI states on two or more manifolds the report prints [Spin-state gaps and Heisenberg J](https://reksstudio.github.io/v2/manual/properties/index.md#spin-state-energetics). Per-sector arrays carry a sector prefix for s > 0 ([Variable names](https://reksstudio.github.io/v2/manual/properties/index.md#variable-names)).

## 10. Properties, Gradients, Couplings {#response}

Relaxed properties, gradients and couplings are computed from one coupled-perturbed REKS (CP-REKS, Z-vector) solve. List-of-lists options mirror `SI_REKS_CONFIGS`: inner list `e` refers to cassette `e`; roots as in [Adiabatic (SSR) states](https://reksstudio.github.io/v2/manual/concepts/index.md#ssr-states).

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

#### `SI_REKS_ANALYSIS` {#si_reks_analysis}

State-property blocks of the SI states to compute, print and store (moments, charges, bond indices, NTO, exciton, …).

Type: array

Default: all blocks except multipoles > 2

```python
"si_reks_analysis": ["all"],
```

```log
=> State analysis <=

   DIPOLE                  permanent and difference dipoles of the states
   QUADRUPOLE              quadrupoles of the states, raw and traceless
   TRANSITION_DIPOLE       transition dipoles, oscillator strengths f_len
   TRANSITION_QUADRUPOLE   transition quadrupoles
   E_TDM_VEL               velocity transition moments, oscillator strengths f_vel
   M_TDM                   magnetic transition moments, rotatory strengths
[...]
   M̶U̶L̶T̶I̶P̶O̶L̶E̶(̶n̶)̶            multipoles of order 3..n of the states and transitions
   SI_REKS_PROPERTY_FOR    relaxed dipole, quadrupole and atomic charges (density P^r) of the states below
   REKS_EKT                ionization energies and Dyson orbitals (EKT) of the states below

   Cassette  States
   ----------------
          0  S1, S2
   ----------------
```

* Property blocks to compute, print and store. Unset: every block except multipoles above order 2. `[]`: `TRANSITION_DIPOLE` and `NO_OCCUPATIONS`. A list: these two plus the listed names.
* Names: `DIPOLE`, `QUADRUPOLE`, `MULTIPOLE(n)`, `TRANSITION_DIPOLE`, `TRANSITION_QUADRUPOLE`, `E_TDM_VEL`, `M_TDM`, `MULLIKEN_CHARGES`, `LOWDIN_CHARGES`, `MULLIKEN_SPINS`, `LOWDIN_SPINS`, `TRANSITION_CHARGES`, `MAYER_INDICES`, `WIBERG_LOWDIN_INDICES`, `NO_OCCUPATIONS`, `DENSITIES`, `RADICAL`, `NTO`, `EXCITON`, `FRAGMENT_COUPLINGS`, `ALL`, case-insensitive; each property entry names its switch ([§16](https://reksstudio.github.io/v2/manual/properties/index.md#properties)). `MULLIKEN_SPINS`, `LOWDIN_SPINS` act on 2S > 0 cassettes ([Atomic spin populations of the states (2S > 0)](https://reksstudio.github.io/v2/manual/properties/index.md#atomic-spins)).
* A block another listed block needs is computed without being printed or stored: `RADICAL` needs `NO_OCCUPATIONS`, `FRAGMENT_COUPLINGS` the state and transition charges and, in a 2S > 0 cassette, the Löwdin spins.
* `MULTIPOLE(n)` adds `DIPOLE` and `TRANSITION_DIPOLE`, for n ≥ 2 `QUADRUPOLE` and `TRANSITION_QUADRUPOLE`, for n ≥ 3 the multipoles of order 3..n. `ALL` switches on every name except `MULTIPOLE(n)`: `["ALL", "MULTIPOLE(4)"]` adds both.
* `State analysis` lists every name with a description, names not run struck through; with `SI_REKS_PROPERTY_FOR` it adds the states of each cassette that receive relaxed properties (and EKT when `REKS_EKT` is true).

#### `SI_REKS_ANALYSIS_CHANGE_MIN` {#si_reks_analysis_change_min}

Smallest state-to-state change of a charge or bond index that is printed.

Type: double

Default: `0.1`

```python
"si_reks_analysis_change_min": 0.05,
```

* Smallest state-to-state change of a charge, spin population or bond index that is printed ([Atomic charges of the states (unrelaxed)](https://reksstudio.github.io/v2/manual/properties/index.md#atomic-charges), [Atomic spin populations of the states (2S > 0)](https://reksstudio.github.io/v2/manual/properties/index.md#atomic-spins)).

#### `SI_REKS_PROPERTY_FOR` {#si_reks_property_for}

States, per cassette, whose dipole, quadrupole, charges and bond indices are evaluated with the relaxed (CP-REKS) density.

Type: array of arrays

Default: `[]`

```python
"si_reks_property_for": [["S1,S2"], []],
```

* States evaluated with the relaxed density: dipole, quadrupole, Mulliken/Löwdin charges, Mayer/Wiberg indices ([Relaxed dipole, quadrupole and atomic charges](https://reksstudio.github.io/v2/manual/properties/index.md#relaxed-properties), [Bond indices of the relaxed density](https://reksstudio.github.io/v2/manual/properties/index.md#relaxed-bond-indices)).
* Entries: indices or labels, ranges, lists (`"S0..5"`, `"T1"`), inside the per-cassette inner lists (`[["S0..1"]]`); a flat list is rejected.

#### `REKS_EKT` {#reks_ekt}

Enables EKT: ionization energies, pole strengths and Dyson orbitals of the `si_reks_property_for` states or of the SA ensemble.

Type: bool

Default: `false`

```python
"reks_ekt": True,
```

* Extended Koopmans ionization energies, pole strengths and Dyson orbitals for the `SI_REKS_PROPERTY_FOR` states ([EKT ionization energies, pole strengths and Dyson orbitals of SI states](https://reksstudio.github.io/v2/manual/properties/index.md#ekt-states)), otherwise for the SA ensemble ([EKT ionization energies of the SA-REKS ensemble](https://reksstudio.github.io/v2/manual/properties/index.md#ekt-ensemble)).

#### `REKS_EKT_OCC_TOL` {#reks_ekt_occ_tol}

Cutoff on the density eigenvalues: those at or below it are dropped from the EKT metric.

Type: double

Default: `1e-6`

```python
"reks_ekt_occ_tol": 1e-8,
```

* Density eigenvalues at or below this are dropped from the EKT metric.

### Gradients and couplings {#gradients-couplings}

Worked call, optimization and dynamics: [§5](https://reksstudio.github.io/v2/manual/dynamics/index.md#opt-dynamics).

#### `SI_REKS_GRAD` {#si_reks_grad}

Roots whose analytic gradients are computed, per cassette; the first listed root is followed (`CURRENT ENERGY`, returned gradient).

Type: array of arrays

Default: `[]` (SA ensemble)

```python
"si_reks_grad": [[1, 2]],
```

```log
=> Gradient request <=

   Cassette  States    NAC pairs
   -----------------------------
          0  S1 *, S2  S1/S2
   -----------------------------
   States = SI states whose nuclear gradient is computed. * = followed state, returned by gradient().
```

* Roots whose gradients are computed, one inner list per cassette (inner list e = cassette e); roots as in [Adiabatic (SSR) states](https://reksstudio.github.io/v2/manual/concepts/index.md#ssr-states). Inner list `[-1]` = all roots of that cassette (`[[-1]]`); a flat `[-1]` is an input error. More inner lists than SI cassettes stop the run before the SCF: `REKS input error: SI_REKS_GRAD: 2 order list(s) for 1 SI cassette(s).`
* The followed root, marked `*` in `Gradient request`, is the first entry of the first non-empty inner list (`-1` → root 0). Without `SI_REKS_GRAD` it is the lowest root index in the pairs of the first non-empty `SI_REKS_NAC` list.
* With a followed root, `CURRENT ENERGY` is its energy, also stored as `REKS TARGET STATE ENERGY`, in `energy()` and `gradient()`; `gradient()` returns its gradient ([Nuclear gradients of SSR states](https://reksstudio.github.io/v2/manual/properties/index.md#state-gradient)). Without a followed root: [Explicit SA pool and SI cassettes](https://reksstudio.github.io/v2/manual/index.md#explicit-input).
* `CURRENT DIPOLE` is the relaxed dipole of the followed root when `SI_REKS_PROPERTY_FOR` lists that root, and is unset otherwise.
* Triplet gradient of `reks [2, 2]`: the triplet-gradient worked input ([Worked inputs](https://reksstudio.github.io/v2/manual/index.md#worked-inputs)), with `si_reks_grad` `[[], [0]]` following T1 of cassette 1.

#### `SI_REKS_NAC` {#si_reks_nac}

Root pairs `[I, J]` per cassette whose nonadiabatic couplings and conical-intersection topography are computed.

Type: array

Default: `[]`

```python
"si_reks_nac": [[[1, 2]]],
```

* Pairs `[I, J]` per SI cassette, `[[[I, J], ...], ...]`, or `ALL`; the call above couples S1 and S2 of cassette 0. Computed in `gradient()`; the roots of each pair join the gradient targets.
* Publishes `SSR NAC I J CASSETTE e` (1/bohr, [Nonadiabatic coupling vectors](https://reksstudio.github.io/v2/manual/properties/index.md#nac)) and the conical-intersection topography `SSR CI TOPOGRAPHY I J CASSETTE e` ([Conical-intersection topography](https://reksstudio.github.io/v2/manual/properties/index.md#ci-topography)).
* Without `SI_REKS_GRAD` the followed root: [`SI_REKS_GRAD`](https://reksstudio.github.io/v2/options/SI_REKS_GRAD.md).

#### `REKS_CPREKS_CONV` {#reks_cpreks_conv}

Residual threshold of the CP-REKS (Z-vector) solver. `reks_cpreks_maxiter` (200) bounds its rounds.

Type: double

Default: `1e-9`

```python
"reks_cpreks_conv": 1e-10,
```

```log
==> Coupled-perturbed REKS (CP-REKS, Z-vector) solver <==

    For                   relaxed properties of S1, S2 (cassette 0);
                          gradients of S1, S2 (cassette 0);
                          NAC S1/S2 (cassette 0)
    Equations             4: 2 states + 2 for NAC S1/S2 (cassette 0)
    Maxiter               200
    Convergence           1.000e-09
    Orbital rotations     310

    Iter      Mean |R|       Max |R|   Remain   Time [s]
    ----------------------------------------------------
       1     2.988e-01     9.691e-01        4       0.01
       2     1.648e-01     5.702e-01        4       0.02
[...]
      12     1.091e-08     1.091e-08        1       0.12
      13     5.914e-10     5.914e-10        0       0.13
    ----------------------------------------------------
    Z-vectors converged in 13 iterations.
```

* CP-REKS (Z-vector) residual threshold, relative to max(1, ‖b‖). One solve serves the relaxed properties, gradients and NACs of the run.
* The solver block is printed when `SI_REKS_PROPERTY_FOR` names states, or in `gradient()` with `SI_REKS_GRAD` or `SI_REKS_NAC`, at `REKS_REPORT_LEVEL` ≥ 2 and Psi4 `PRINT` ≥ 1 (defaults).
* Converged: `Remain` reaches 0 and the block ends with `Z-vectors converged in N iterations.`. Non-convergence ends the run with `no convergence in N rounds`.
* A target t closes at max(threshold, 10 ε ‖A‖ ‖Z<sub>t</sub>‖), ε the machine epsilon, ‖A‖ = max(max<sub>i</sub> |A<sub>ii</sub>|, max ‖A d‖ over the unit search directions d): below that the residual is roundoff of the operator. Targets closed at this floor are counted after the converged line (`N target(s) closed at the roundoff floor 10 eps |A| |Z|`). When the explicit residual of a target exceeds this bound, every open target continues from its explicit residual in a new search space.

#### `REKS_CPREKS_MAXITER` {#reks_cpreks_maxiter}

Maximum number of rounds of the CP-REKS (Z-vector) solver; exceeding it stops the run with the residual reached.

Type: int

Default: `200`

```python
"reks_cpreks_maxiter": 400,
```

* CP-REKS rounds before an error is raised.

#### `REKS_GRAD_DEGEN_TOL` {#reks_grad_degen_tol}

Gap below which a requested root is flagged as quasi-degenerate.

Type: double

Default: `1e-6`

```python
"reks_grad_degen_tol": 1e-5,
```

* Gap (E<sub>h</sub>) below which a requested root is computed with a quasi-degeneracy warning.

#### `REKS_CI_TOPOGRAPHY_GAP` {#reks_ci_topography_gap}

Largest gap at which the topography table of a NAC pair is printed.

Type: double

Default: `5e-3`

```python
"reks_ci_topography_gap": 1e-2,
```

* Largest pair gap (E<sub>h</sub>) at which the topography table of a NAC pair is printed ([Conical-intersection topography](https://reksstudio.github.io/v2/manual/properties/index.md#ci-topography)).
