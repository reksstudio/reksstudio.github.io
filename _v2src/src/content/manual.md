## 1\. What REKS Studio Is

**REKS Studio** is the code name (printed in the output banner) for a from-scratch, heavily engineered rewrite of the REKS (Restricted Ensemble-referenced Kohn-Sham) solver inside this Psi4 branch, living almost entirely under `psi4/src/psi4/libscf_solver/reks*`. It implements:

-   **REKS(N,M)** — the ensemble DFT method of Filatov and co-workers, in which `N` active electrons are distributed over `M` active orbitals as a set of GVB-like geminal (paired-orbital) configurations, each with its own fractional occupation numbers (FONs), optimized self-consistently together with the orbitals.
-   **SA-REKS** (State-Averaged REKS) — an ensemble of several such configurations, averaged with fixed or optimized weights, used as the SCF reference (this is what actually gets optimized every SCF iteration).
-   **SI-SA-REKS** (State-Interaction SA-REKS) — a post-SCF step that diagonalizes an effective Hamiltonian in the basis of the SA configurations (or a user-chosen subset — a *cassette*) to obtain adiabatic (physical) state energies, densities and transition properties — this is how REKS delivers more than one electronic state (e.g. ground and excited states, conical intersections) from a single SCF.

Architecturally, `REKS` is a C++ class (`psi::scf::REKS`) that derives from Psi4's ordinary `HF` class and plugs into the normal `psi4.energy(...)` / `scf_type` / DFT-functional machinery — it reuses `libmints` (integrals, basis sets), `libfock` (JK builds, DFT quadrature/functionals via `libfock/v.h`), and `libqt` (BLAS/LAPACK wrappers, DIIS/linear-algebra primitives) exactly as RHF/UHF/ROHF do. What is unique to REKS Studio lives in `libscf_solver`:

| File(s) | Role |
| --- | --- |
| `reks.cc` / `reks.h` | The `REKS` SCF class itself: option parsing, the SCF driver loop, energy/gradient assembly. |
| `reks_arch.cc/.h` | The **catalog** ABI: a versioned, memory-mapped binary format (`reksNM.bin`) that enumerates every symmetry-inequivalent configuration for a given `(N,M)` and spin manifold, generated offline (this is why `(N,M)` can't be arbitrary — see §4). |
| `reks_cassette.cc/.h` | A **Cassette**: a chosen subset/ordering of catalog configurations — the SA pool, or one SI group — with the bookkeeping to map local indices to global ones. |
| `reks_reel.cc/.h` | Runtime storage: per-microstate Fock matrices, energies, Lagrangians, FONs. |
| `reks_fon_solver.h`, `reks_fon_relax.cc/.h` | The 1-D Newton-Raphson / golden-section solver that optimizes FONs for each geminal each SCF iteration. |
| `reks_gvb_diis.h`, `reks_orbital_diis.h`, `reks_diis_*.h` | Two alternative DIIS convergence accelerators for the orbital optimization (see §10). |
| `reks_trah_solver.h`, `reks_gradient_engine.h`, `reks_minres.h` | A Trust-Region Augmented-Hessian (TRAH) solver usable as a warm-up or standalone optimizer. |
| `reks_si.cc/.h`, `reks_si_types.h` | The SI Hamiltonian build, generalized eigenproblem, and adiabatic-state properties. |
| `reks_rdm.cc/.h`, `reks_naturals.cc/.h` | Reduced density matrices and natural orbitals/occupations per state. |
| `reks_report.cc/.h` | All formatted output (the banner, setup tables, SCF trace, state/microstate energy tables). |
| `reks_objectives.cc/.h`, `reks_math.h` | Shared energy/gradient objective functions and math kernels. |
| `reks_catalog/` | The pre-generated catalog binaries (`reks22.bin`, `reks44.bin`, `reks66.bin`, …) plus `reks_layout.json` describing the binary ABI. |

Because REKS is registered as `"REFERENCE": "REKS"` alongside `RHF/ROHF/UHF/CUHF/RKS/UKS`, it is driven through the ordinary DFT/HF machinery: you still choose a functional (e.g. `bhhlyp`), a basis, an SCF type, etc. — REKS only changes how the electronic wavefunction is parametrized and optimized once those are set.

## 2\. Minimal Working Example

This is the built-in "how do I even start" example that REKS Studio itself prints whenever it hits a fatal input error (`reks_report.cc`, `input_usage_examples()`):

```python
psi4.set_options({
    'reference':       'reks',
    'reks':            [4, 4],
    'sa_reks_configs': ['PPS1', 'OSS1', 'OSS2'],
    'sa_reks_weights': [0.5, 0.25, 0.25],
    'si_reks_configs': [['PPS1', 'OSS1'], ['PPS2', 'OSS3']],
})
psi4.energy('scf')
```

or as PSithon (`.dat`) input:

```
set {
    reference        reks
    reks             [ 4, 4 ]
    sa_reks_configs  [ PPS1, OSS1, OSS2 ]
    sa_reks_weights  [ 0.5, 0.25, 0.25 ]
    si_reks_configs  [ [PPS1, OSS1], [PPS2, OSS3] ]
}
energy('scf')
```

`sa_reks_configs`, `sa_reks_weights` and `si_reks_configs` are all optional: absent, they default to the `(N,M)` variant's built-in pool (see §5) and a uniform weight distribution. The only options you must always supply are `reference reks` and `reks [N, M]`.

## 3\. Anatomy of a REKS Studio Input

A REKS Studio input is an ordinary Psi4 input with three parts:

1.  **Molecule** (`psi4.geometry(...)`) — nothing REKS-specific here. Both example scripts use `symmetry c1`; REKS Studio always treats the active space as `C1` internally regardless of the molecule's true point group (the setup table prints active MO irreps as `"A"` for this reason — see §15).
    
2.  **Standard SCF/DFT options** (`psi4.set_options({...})`) — basis, `scf_type`, convergence thresholds, level shift, `guess`, `molden_write`, DFT grid, etc. These behave exactly as for any other DFT reference.
    
3.  **REKS-specific options**, all documented in this manual, split into: - **what the active space is and which configurations participate** (`reks`, `sa_reks_configs`, `si_reks_configs`, …, §5–§7), - **how to seed/restart the orbitals** (`guess read`, `guess_active_window`, restart files, §8), - **how the FONs are optimized/constrained** (`reks_*_fon`, §9), - **which convergence engine and how aggressively it runs** (`reks_use_trah`, `reks_gvb_diis`, `reks_diis_formulation`, …, §10), - **how much REKS Studio prints** (`reks_report_level`, §12).
    

The energy call itself is unchanged: `psi4.energy("<functional>", ...)`. The functional name (`"bhhlyp"` in both provided examples) selects the DFT exchange-correlation functional used to build the Fock/Kohn-Sham matrices for each configuration — REKS is compatible with (and was designed around) hybrid functionals like BHandHLYP, not just HF-like references.

## 4\. The Configuration Catalog and Naming Convention

For a chosen active space `(N,M)`, the number of physically distinct GVB-paired configurations grows combinatorially. Rather than enumerate them at run time, REKS Studio ships **pre-generated binary catalogs** (`reks_catalog/reks22.bin`, `reks44.bin`, `reks66.bin`, …) — one per `(N,M)` — built by an offline generator and loaded read-only at run time (`reks_arch.cc`/`.h`). Each catalog lists every symmetry/spin-inequivalent configuration for that active space, across every spin manifold (singlet, triplet, …), tagged with a **name** and a **type**.

**Practical consequence:** you can only run the `(N,M)` combinations for which a catalog file has been generated and shipped (`reks22`, `reks44`, `reks66` are present in this checkout). Requesting an ungenerated `(N,M)` fails at catalog load time.

### Naming convention

Every configuration in the catalog has a name of the form `<TYPE><index>`, e.g. `PPS1`, `OSS2`, `DOSS_SPS1_0`, `T_PPS3`. The type prefix encodes, per the code's own naming-convention comment (`reks_arch.cc`):

| Prefix family | Meaning |
| --- | --- |
| `PPS` | The **perfectly-paired singlet** — the closed-shell-like reference configuration (all geminals in generation 0, the "n" openness order). Every `(N,M)` catalog has at least one `PPS` config. |
| `OSS`, `DOSS`, `TOSS`, `QOSS`, `QUOSS`, `SOSS`, `SPOSS`, `OOSS`, `NOSS` | Configurations with **1, 2, 3, 4, 5, 6, 7, 8, 9** open-shell-singlet (Ψ₁) geminals, respectively (`O`\=1, `D`\=2, `T`\=3, `Q`\=4, `QU`\=5, `S`\=6, `SP`\=7, `O`\=8, `N`\=9 — the code calls these "geminal-multiplicity markers"). These correspond to generation-1 ("m") openness. |
| `DES`, `DDES`, `TDES`, `QDES`, `QUDES`, `SDES`, `SPDES`, `ODES`, `NDES` | The same multiplicity ladder (1…9), but for **doubly-excited closed-shell (Ψ₂) geminals** rather than open-shell-singlet ones — generation-2 ("u") openness and beyond. |
| A leading run of `T` (e.g. `T_PPS3`) | Marks the configuration as belonging to the sector's **triplet background** rather than the singlet manifold. |
| `SPS` (as in `DOSS_SPS1_0`) | A **spin-projected** tag: the configuration is a spin-projected combination built from one parent expansion (a spin-projected config carries no Ψ₂/generation-2 count by construction). |
| Compound names (e.g. `DOSS_SPS1_0`) | Combine the above markers with `_`\-separated parts (e.g. 2 open-shell geminals, spin-projected, sub-index `1`, member `0`). |

You are not expected to memorize the full catalog for a given `(N,M)` — see §6 for bulk selection tokens (`full`, a type name, `single-scheme:N`, name patterns) that avoid spelling out every name, and note that REKS Studio's own error messages print the full, valid name/type list for the active `(N,M)` whenever an unknown token is used (`config_names_csv`, `config_types_csv` in `reks_arch.cc`).

### Geminal-pairing "schemes"

For a fixed `(N,M)`, there can be more than one way to pair up the `M` active orbitals into geminals — the catalog calls these **schemes** (numbered from 0). The scheme actually optimized in the SCF is *not* a separate option: it is selected implicitly by which configs your `sa_reks_configs` pool draws from (see the `single-scheme:N` / `mixed-scheme:N` bulk tokens, §6). REKS Studio prints the schemes available for the run's active space under "**Pairing schemes (GVB(2,2) geminal pairs)**" in the setup report (§15).

## 5\. Selecting Configurations: `SA_REKS_CONFIGS` and `SI_REKS_CONFIGS`

### `REKS` — the active space (required)

```python
"reks": [N, M]   # N = active electrons, M = active orbitals
```

Exactly two integers. The molecule's overall multiplicity is **not** set through `psi4.geometry`'s charge/multiplicity line for REKS purposes — it is always the canonical symmetric-Mₛ value (even `N` → singlet-type Mₛ=0 setup, odd `N` → doublet-type). Which **spin manifold** (2S) actually runs is chosen separately, via `SA_REKS_2SPIN` / `SI_REKS_2SPIN` or the ladder position of your config blocks (§7) — never via the molecule's multiplicity line.

### `SA_REKS_CONFIGS` (alias `REKS_SA_CONFIGS`) — the SCF (state-averaged) pool

This is the set of configurations whose ensemble average is actually optimized by the SCF. Two input forms:

-   **Flat list** = one block on one spin manifold, e.g. `["PPS1", "OSS1", "OSS2"]` or by local index `[0, 1, 2]`. Elements may be config names, local integer indices, or **bulk tokens** (§6). A config may not repeat within a block (that's an input error — an SA block is a *weighted list*, so a duplicate has no well-defined weight).
-   **Nested list-of-lists** = one block per spin manifold, e.g. `[["PPS1","OSS1"], ["T_PPS1"]]` (first block = lowest 2S available, second = next, in *ladder mode* — i.e. when `SA_REKS_2SPIN` is absent). An empty inner block `[]` simply skips that rung. If `SA_REKS_2SPIN` **is** given, block `i` belongs to the manifold named by the `i`\-th entry of `SA_REKS_2SPIN` instead, and an explicit empty block `[]` there *declares* that manifold as participating (SA-empty) rather than skipping it.

If omitted entirely, REKS Studio falls back to the catalog's built-in `sa_default` pool for the run's lowest (or explicitly chosen) manifold — for example `REKS(4,4)` defaults to `[PPS1, OSS1, OSS2]`, `REKS(6,6)` to `[PPS1, OSS1, OSS2, OSS3]`.

### `SA_REKS_WEIGHTS` (alias `REKS_SA_WEIGHTS`)

One non-negative weight per SA pool entry, **in the order you typed them** (concatenated block order, plus any `SA_REKS_EXTRA` determinants appended at the end), summing to 1.0 (tolerance `1e-8`). Omitted → uniform `1/n`. Note that if `SA_REKS_2SPIN` lists manifolds out of ascending-2S order, configs *and* their weights are jointly re-sorted internally into ascending-2S order — but you still type them (and match a weight to a config) in your own, as-written order.

### `SA_REKS_EXTRA` (alias `REKS_SA_EXTRA`) — raw extra determinants

A list of hand-specified Slater determinants, each an occupation vector `[alpha(M) | beta(M)]` of length `2M` (0/1 entries summing to `N`). Each such determinant is folded into the SA ensemble with its own fixed weight (from the tail of `SA_REKS_WEIGHTS`) — it is optimized alongside the catalog configs — but it is **not** a catalog config, so it never appears in the SI Hamiltonian; it only affects the orbital-averaging SCF. Use this when you need to bias the SCF ensemble toward a specific determinant the catalog doesn't name. The catalog itself is unmodified.

Example (from `cu2cl6mm_reks66.py`, commented out but illustrative):

```python
"sa_reks_extra": [[1,1,1,1,0,0,0,0]],   # one extra determinant, REKS(4,4)-sized vector
```

### `SI_REKS_CONFIGS` (alias `REKS_SI_CONFIGS`) — the SI (post-SCF) cassette(s)

Defines the subspace(s) diagonalized after SCF to get adiabatic state energies. Two input forms:

-   **2-level** `[[...], [...], ...]` — a list of **cassettes** forming ONE group (one spin manifold). Each cassette is itself a list of config names/indices/bulk-tokens (§6), unioned within the cassette (unlike an SA block, a repeated/overlapping selection inside one cassette is fine — it's a *set*, kept at its first-seen position).
-   **3-level** `[[[...]], [[...]], ...]` — one **group of cassettes per outer entry**, each group mapping to a spin manifold exactly like SA blocks do (ladder mode by position, or explicit via `SI_REKS_2SPIN`). The 2-level form is only legal when `SI_REKS_2SPIN` is absent or has length 1.

If omitted, REKS Studio defaults to **one cassette spanning the whole config block** of the run's lowest (or `SI_REKS_2SPIN`\-chosen) manifold.

Example — two separate SI cassettes on the same manifold, each giving its own set of adiabatic states:

```python
"si_reks_configs": [["PPS1", "OSS1"], ["PPS2", "OSS3"]],
```

### `SI_REKS_2SPIN` / `SA_REKS_2SPIN` (aliases `REKS_SI_2SPIN` / `REKS_SA_2SPIN`)

One integer 2S per SA block / SI group, telling REKS Studio explicitly which spin manifold that block/group belongs to (rather than relying on ladder position). Pairwise distinct entries; any order (internally re-sorted ascending). An **explicitly labeled empty block/group `[]`** here *declares* that manifold as participating (with no configs) — this is different from an empty block in plain ladder mode, which just skips a rung and declares nothing.

### `SI_REKS_REPORT_STATES` (alias `REKS_SI_REPORT_STATES`)

One positive integer per SI cassette (ascending spin-manifold cassette order, labeled `K=0,1,2,...` in the output — not necessarily your typed order), capping how many adiabatic states are *reported* (and how many get natural orbitals, dipoles, oscillator strengths, per-state RDMs, and wfn-file entries computed). The SI eigenproblem itself is always solved at full cassette dimension with every root found — the cap only trims what is computed/printed *downstream* of the eigensolve, for speed/memory. An entry cannot exceed its own cassette's dimension, and is silently clamped to the number of physical (non-null-space) states if the overlap is rank-deficient.

## 6\. Bulk Tokens and Pattern Syntax

Instead of spelling out config names one by one, any position that accepts a config name (in `SA_REKS_CONFIGS`, `SI_REKS_CONFIGS`, or the exclude clause below) also accepts these tokens:

| Token | Expands to |
| --- | --- |
| `"full"` | The entire config block of that manifold. |
| A config **type** name, e.g. `"PPS"`, `"OSS"`, `"DOSS"` | Every config of that type in the manifold. |
| `"single-scheme:N"` (PSithon: `"single-scheme-N"` or `"single-scheme_N"`) | Every config belonging to geminal-pairing scheme `N` (defaults to scheme 0 if `:N` omitted). The spin-projected base configs are shared across schemes and ride along regardless of which scheme you pick — so a one-scheme selection is the same size whichever scheme is named. |
| `"mixed-scheme:N"` | The SSR state set on scheme `N`: that scheme's single-excitation configs *plus every open-shell-singlet config of the manifold* (this differs from `single-scheme`, which stays within one scheme). |
| `"sps"` | Just the spin-projected base configs. |
| A pattern with `*` or `?` | Every config name it glob-matches. |
| `"exclude:X"` (also `exclude-X` / `exclude_X`) | **SI cassettes only.** Subtracts whatever `X` names (any of the forms above) from everything else the cassette has already added, regardless of order — e.g. `["full", "exclude:sps"]` = the whole manifold minus the spin-projected base. SA blocks do not accept `exclude:`. |

A scheme token may union several indices in one go: `"single-scheme-1-2-3"` (or `"single-scheme:1,2,3"` in the Python API — a literal `:` cannot be used inside a PSithon `.dat` array element, since PSithon's array parser itself splits on `:`).

**Important asymmetry between SA and SI:** an SA block is a *weighted list* — naming the same config twice (directly, or via two overlapping tokens) is an input error, so overlapping selections must be combined into one multi-index token. An SI cassette is a *set* — overlapping tokens simply compose by union, and `exclude:` is only meaningful there.

## 7\. Spin Manifolds (2S) and Multi-Sector Runs

A REKS Studio run's **sectors** are the union of every spin manifold (2S) touched by any SA block or SI group — ordered internally by ascending 2S, regardless of the order you typed them in. Two ways to address a manifold:

-   **Ladder mode** (no `SA_REKS_2SPIN`/`SI_REKS_2SPIN` given): block/group `i` (0-based, in the order you wrote it) maps to the `i`\-th manifold available in the `(N,M)` catalog, in ascending 2S. An empty block `[]` here just skips that rung.
-   **Explicit mode** (`SA_REKS_2SPIN`/`SI_REKS_2SPIN` given): block/group `i` belongs to whichever manifold its `i`\-th entry names. An explicit empty block `[]` here *declares* that manifold (it participates with no configs), which is different from ladder mode's "skip".

This lets you, for instance, run a singlet SA-REKS pool and a triplet SA-REKS pool in the *same* calculation (both sectors optimized jointly by the shared SCF), each with its own SI cassette — the "Pairing schemes" and "SA pool" / "SI pool" sections of the printed report are per-sector (§15).

## 8\. Guesses, Restarts, and Checkpointing

REKS calculations converge much faster — and much more reliably — from a good starting guess, so both example scripts are built entirely around a **restart workflow**. This is standard Psi4 machinery combined with two REKS-specific guess options.

### The restart mechanism (standard Psi4)

```python
old_wfn = psi4.core.Wavefunction.from_file("name.wfn.npy")   # load a checkpoint...
...
psi4.set_options({"guess": "read", ...})                      # ...tell SCF to use it...
E, wfn = psi4.energy("bhhlyp", restart_file="name.wfn.npy", return_wfn=True)
wfn.to_file("name.wfn")                                        # ...and save a new one
```

-   `Wavefunction.from_file(...)` / `restart_file=...` load a previously serialized `Wavefunction` (a NumPy-backed `.wfn.npy` file, Psi4's native checkpoint format) and stage it so the SCF guess routine can read it.
-   `"guess": "read"` (with `"df_scf_guess": False`, as in both examples — this disables the density-fitted "quick and dirty" SCF pre-guess that would otherwise run first and override the read guess) tells the SCF to actually use those loaded orbitals rather than a SAD/core guess.
-   `wfn.to_file("name.wfn")` at the end serializes the *converged* wavefunction for the next restart (note: this call uses a plain `.wfn` name in both examples, while the file that gets re-loaded next time is `.wfn.npy` — make sure your restart chain is internally consistent about which suffix you read back with `from_file`/`restart_file`).

This pattern is essential for REKS because production active-space DFT runs (large basis sets, `aug-cc-pVTZ` / `def2-TZVP`, big active spaces) are typically restarted many times — from a previous point on a geometry scan, a lower-level pre-optimization, or simply to extend a run that hit `maxiter` (note both examples set `"fail_on_maxiter": False`, so a non-converged SCF returns its best iterate rather than throwing, specifically so you *can* restart from it).

### REKS-specific guess refinements

-   **`GUESS_ACTIVE_WINDOW`** — REKS-only: fills *just the active-space MO columns* from the read guess, one token per active orbital, in active-column order. This is the more targeted tool when only the active window is misplaced, e.g. for `reks [4,4]`: `python "guess_active_window": ["HOMO-1", "HOMO", "LUMO", "LUMO+1"]` Requires `reference reks` and `guess read`. Both examples leave this commented out, meaning they trust the restart file's own active-orbital placement — reach for it when a restart lands the wrong orbitals in the active window (a common symptom: SCF converges instantly to the *wrong* state/energy).
-   **`MOLDEN_WRITE`** — both examples turn on Molden output (`molden_write: True`, i.e. write molden file at the end) purely so the orbitals can be visually inspected — useful for diagnosing exactly the kind of active-window mis-assignment `GUESS_ACTIVE_WINDOW` exists to fix.

## 9\. Fractional Occupation Numbers (FONs)

Each geminal pair in a REKS configuration carries a pair of FONs `(n_p, n_q)` with `n_p + n_q = 2`, interpolated between the closed-shell (`n_p=2, n_q=0`) and fully-open (`n_p=n_q=1`) limits by

```
f(x) = x^(1 - (x+δ)/(2(1+δ))),   x = n_p·n_q ∈ [0,1]
```

controlled by `REKS_FON_INTERP_DELTA` (default `0.4`, must be ≥ 0). FONs are optimized every SCF iteration by a dedicated 1-D Newton-Raphson / golden-ratio line-search micro-solver (`reks_fon_solver.h`), one geminal block at a time, generation by generation.

**Generations.** Geminals are grouped by "openness order": generation 0 (`n`, the PPS/perfectly-paired geminals), generation 1 (`m`, OSS-type), generation 2 (`u`, DOSS-type), up through generation 7 (`z`) — `kMaxGen = 8`, enough for active spaces up to `REKS(16,16)`. Each generation has its own **lower FON bound** option, all sharing the semantics of the first:

| Option | Generation | Default |
| --- | --- | --- |
| `REKS_N_FON` | 0 (PPS) | `-1.0` (disabled) |
| `REKS_M_FON` | 1 (OSS) | `-1.0` (disabled) |
| `REKS_U_FON` | 2 (DOSS) | `-1.0` (disabled) |
| `REKS_V_FON` | 3 | `-1.0` (disabled) |
| `REKS_W_FON` | 4 | `-1.0` (disabled) |
| `REKS_X_FON` | 5 | `-1.0` (disabled) |
| `REKS_Y_FON` | 6 | `-1.0` (disabled) |
| `REKS_Z_FON` | 7 | `-1.0` (disabled) |

A non-negative value sets a **lower bound** on every active FON of that generation, which is then free to vary anywhere in `[value, 2 − REKS_FON_MICRO_BOUND_MARGIN]` (the upper end is clamped to `2 − 1e-8` with a warning if you push it further) — it is a floor, not a pin to a single value. Negative (the default) disables the bound entirely. `azln_reks44.py` sets `"reks_m_fon": 1.00000000`, so every generation-1 (OSS) geminal FON is restricted to `[1.0, 2 − 1e-8]` — i.e. it is kept on the *open-shell side* of the interpolation (never allowed to relax back toward the closed-shell limit `n_p=2, n_q=0`) but is still optimized within that range, not fixed at `n_p=n_q=1`; `cu2cl6mm_reks66.py` sets the same option identically. This is a common way to prevent an OSS-type configuration from SCF-collapsing back toward closed-shell during a difficult convergence, without freezing its FON outright.

Remaining FON micro-solver knobs (defaults are usually fine; touch these only if the FON sub-iterations themselves are the convergence bottleneck, visible at `REKS_REPORT_LEVEL >= 4`):

| Option | Default | Meaning |
| --- | --- | --- |
| `REKS_FON_MICRO_MAX_NR_ITER` | 20 | Newton-Raphson iteration cap per geminal block per SCF iteration. |
| `REKS_FON_MICRO_MAX_LS_ITER` | 20 | Golden-ratio line-search cap inside one Newton step. |
| `REKS_FON_MICRO_CONV_TOL` | `1e-12` | Step-norm convergence threshold. |
| `REKS_FON_MICRO_MIN_EIGENVALUE` | `1e-8` | Hessian eigenvalue floor in line-search mode (below which modes are lifted). |
| `REKS_FON_MICRO_BOUND_MARGIN` | `1e-8` | Interior margin: FONs are optimized over `[margin, 2-margin]`, not the closed `[0,2]`; a generation floor (`REKS_*_FON`) overrides the lower end. |
| `REKS_FON_MICRO_BOUNDARY_SKIN` | `0.05` | A generation-0 multi-start seed landing within this distance of 0 or 2 counts as "boundary-trapped" and loses to an interior minimum. |

## 10\. The SCF Convergence Engines

REKS's orbital optimization is materially harder than ordinary HF/DFT: it must jointly optimize orbitals *and* FONs for an ensemble of configurations, so REKS Studio ships three cooperating engines, all tunable but with sensible defaults — **most users should not need to touch anything in this section beyond `LEVEL_SHIFT` and (occasionally) `REKS_USE_TRAH`.**

### The three engines, in the order they can run

1.  **Plain `F_reks` burn-in** — the first `REKS_GVB_DIIS_START` iterations (default 3) with no accelerator, just a level-shifted effective Fock build, if neither TRAH nor GVB-DIIS is active yet.
2.  **TRAH** (`REKS_USE_TRAH`, default `false`) — a Trust-Region Augmented-Hessian solver (`reks_trah_solver.h`) that jointly optimizes orbital rotations and FONs by a box-constrained trust-region Newton step, eigendecomposing the (approximate) Hessian and bisecting on a level shift until the step norm matches the trust radius (Nocedal & Wright Ch. 4; Moré & Sorensen 1983; Helmich-Paris 2021/2022). If `REKS_GVB_DIIS` is also on (the default), TRAH is only the **warm-up**: the SCF switches to GVB-DIIS once `REKS_GVB_DIIS_START` is reached and the active formulation's activation gate is satisfied. With `REKS_GVB_DIIS` off, TRAH runs the *entire* SCF alone.
3.  **GVB-DIIS** (`REKS_GVB_DIIS`, default `true`) — the default accelerator, implementing the multishell-Fock DIIS extrapolation of Muller et al. (*J. Chem. Phys.* 1994, 100, 1226), where every active orbital is its own "shell" (core = 1 shell, virtual = 1 shell). Selected by **`REKS_DIIS_FORMULATION`** (`"CFM"` or `"ORBITAL"`, default `"ORBITAL"`): - `CFM` extrapolates the composite multishell Fock matrix itself (closer to the original GVB-DIIS paper); gated on by `REKS_DIIS_CFM_ACTIVATION_GORB` (default `1e-3`, the orbital-gradient norm below which CFM engages once `REKS_GVB_DIIS_START` is reached — inert without `REKS_USE_TRAH`). - `ORBITAL` (the default) instead extrapolates skew-symmetric rotation generators κ directly in the MO basis and bypasses Fock diagonalization each step (Ionova & Carter 1995; the "r-GDIIS" variant of Sethio et al. 2024). Both examples' commented-out line `#"reks_diis_formulation": "CFM"` shows the alternative was tried.

A **miniTRAH episode** can also be triggered *inside* GVB-DIIS (`REKS_GVB_NK`, default `true`): a short, bounded Newton-Krylov solve of the reduced orbital-gradient equations, entered when GVB-DIIS shows a genuine stall signature (flat step, non-flat gradient, unmet D-convergence gate for `REKS_GVB_NK_TRIGGER` consecutive iterations, default 4) and exited once `||g_orb||` falls below `REKS_GVB_NK_EXIT_FACTOR × D_CONVERGENCE` or a resource budget (`REKS_GVB_NK_MAX_GRAD`/`_MAX_MACRO`/`_MAX_INNER`) is spent.

### Level shift

REKS reuses Psi4's standard `LEVEL_SHIFT` / `LEVEL_SHIFT_CUTOFF` machinery (both examples: `level_shift: 0.5`, `level_shift_cutoff: 0.0` — i.e. never auto-disable), but layers an **adaptive "staircase" shift** (`reks_convergence.h`'s `OrbitalGuard`) on top, controlled by `LEVEL_SHIFT_ADAPT` (default `true`, as both examples confirm via `level_shift_adapt: True`): the pair-aware staircase shift decays toward a floor when orbital mixing is small, and grows back toward your `LEVEL_SHIFT` when GVB-pair inversion/scrambling is detected in the pre-diagonalization Fock. Setting `LEVEL_SHIFT_ADAPT: False` freezes the staircase at your literal `LEVEL_SHIFT` for every iteration instead. `REKS_GVB_LEVEL_SHIFT` (default `1.0`) is a *separate*, artificial shell-gap parameter used only inside the CFM multishell Fock construction — irrelevant when `REKS_DIIS_FORMULATION=ORBITAL` (the default, and what both examples use).

### The rest of the GVB-DIIS conditioning/monitoring stack

The remaining ~35 `REKS_DIIS_*`/`REKS_GVB_*` options (angle filtering, SVD-on-F conditioning, Tikhonov ridging, "verdict" rewind/restart monitors, cycle detection, basin-transition guards) are **expert-level stabilizers** around GVB-DIIS that fire automatically on ill-conditioned or non-monotone steps; their defaults were tuned by the developers and are not meant to be routinely edited. Consult §17 for the full list with defaults if a specific pathology (oscillation, cycling, a stalled non-monotone SCF) needs to be worked around, and consider raising `REKS_REPORT_LEVEL` to 4 first to see which monitor is actually firing before changing anything.

## 11\. Delocalization (IPR) Penalty

`REKS_DELOC_IPR_PENALTY` (default `0.0`, i.e. off) adds a penalty term

```
E_pen = λ · Σᵢ Σ_A p_A(i)²
```

to the SA energy, where `p_A(i)` is the atomic population of active MO `i` on atom `A` (an inverse-participation-ratio-style measure) —a positive `λ` (in Hartree) discourages active orbitals from delocalizing over many atoms, which can help steer SCF toward a physically localized diradical/pair solution. Population analysis is chosen by `REKS_DELOC_IPR_METHOD` (`LOWDIN`, using an S^½ transform, or `MULLIKEN`; default `LOWDIN`). A basin guard (`REKS_DELOC_IPR_GUARD_STREAK_LIMIT`, default 10) self-disables the penalty for the rest of the SCF if it fires repeatedly without reducing IPR.

## 12\. Reporting and Output Verbosity

`REKS_REPORT_LEVEL` (default `2`) controls everything REKS Studio prints:

| Level | Content |
| --- | --- |
| 1 | Fatal diagnostics only. |
| **2 (default)** | The run report: setup, pools, SCF trace, adiabatic states, properties, and the 15 lowest microstate energies. |
| 3 | \+ full microstate list, and config-axis wavefunction arrays (SSR coefficients/Hamiltonian/overlap/1-RDM — quadratic in cassette dimension). |
| 4 | \+ per-iteration traces, pool maps, solver internals, and SI matrices wider than 150 configs. |
| 5 | \+ matrices over the config, microstate *and* orbital axes. |

Levels 4–5 can produce very large output for big active spaces/cassettes — reserve them for debugging a specific run.

## 13\. Worked Example 1 — Annotated: `azln_reks44.py`

```python
import os, shutil, subprocess
from pathlib import Path
import numpy as np
import psi4

procs = os.cpu_count()
psi4.set_num_threads(int(procs/2))        # half the logical cores
psi4.set_memory("8 GB")

psi4.core.set_output_file("azln_reks44.out", False)

old_wfn = psi4.core.Wavefunction.from_file("azln_reks44.wfn.npy")   # stage restart (§8)

mol = psi4.geometry("""
0 1
... 18-atom acene/azaacene-like C10H8 skeleton in Bohr, C1 symmetry ...
units bohr
symmetry c1
""")

psi4.set_options({
    "basis": "aug-cc-pvtz",
    "scf_type": "mem_df", "scf_subtype": "incore",
    "maxiter": 150, "e_convergence": 7, "d_convergence": 5,
    "df_scf_guess": False, "guess": "read",             # §8: use the restart, skip the DF pre-guess
    "diis": False, "soscf": False,                       # ordinary SCF DIIS/SOSCF are off; REKS's own
                                                            # GVB-DIIS (§10) handles convergence instead
    "level_shift": 0.5, "level_shift_cutoff": 0.0, "level_shift_adapt": True,   # §10
    "molden_write": True,    # visualize final orbitals
    "dft_grid_name": "SG1",                                # coarser standard grid
    "reks_gvb_diis": True, "reks_diis_formulation": "ORBITAL",   # §10, both defaults made explicit
    "reks_use_trah": False,
    "fail_on_maxiter": False,                              # §8: don't throw on non-convergence
    "reks_m_fon": 1.00000000,                              # §9: floor OSS geminal FONs at 1.0 (open-shell side)
    "reference": "reks",
    "reks": [4, 4],                                        # 4 active electrons, 4 active orbitals
    "sa_reks_configs": ["PPS1", "OSS1", "OSS2"],           # the (4,4) default pool, written explicitly
    "sa_reks_extra": [[1,1,1,1,0,0,0,0]],                  # §5: one extra fixed-weight determinant
})

E_sa, wfn = psi4.energy("bhhlyp", restart_file="azln_reks44.wfn.npy", return_wfn=True)
wfn.to_file("azln_reks44.wfn")
print(f"SA energy = {E_sa:.10f}")
```

**What this run does:** an SA-REKS(4,4) calculation with the standard 3-configuration pool (`PPS1, OSS1, OSS2`) plus one hand-picked extra determinant riding along in the ensemble at a fixed weight, on a polyaromatic-hydrocarbon-like molecule, using BHandHLYP/aug-cc-pVTZ, with the OSS geminal FONs floored at 1.0 (kept on the open-shell side, though still free to vary up to `2 − 1e-8`) and restarted from a previous converged wavefunction. No `sa_reks_weights` is given, so all four ensemble members (3 catalog configs + 1 extra determinant) share equal weight `0.25` by default. Since no `si_reks_configs` is given either, REKS Studio will still run its default single SI cassette (the full `(4,4)` config block on the lowest manifold) after SCF and report adiabatic states from it — the script just doesn't print/use those states beyond the default report.

## 14\. Worked Example 2 — Annotated: `cu2cl6mm_reks66.py`

```python
template_options = {
    "basis": "def2-TZVP",
    "scf_type": "mem_df", "scf_subtype": "incore",
    "maxiter": 150, "e_convergence": 7, "d_convergence": 5,
    "df_scf_guess": False, "guess": "read",
    "diis": False, "soscf": False,
    "level_shift": 0.5, "level_shift_cutoff": 0.0, "level_shift_adapt": True,
    "molden_write": True,
    "dft_radial_points": 99, "dft_spherical_points": 590, "dft_pruning_scheme": "robust",  # finer/pruned grid
    "reks_gvb_diis": True, "reks_diis_formulation": "ORBITAL",
    "reks_use_trah": False,
    "fail_on_maxiter": False,
    "reks_m_fon": 1.00000000,
    "reference": "reks",
    "reks": [6, 6],                                          # larger active space than Example 1
    "sa_reks_configs": [["PPS1","PPS3"], ["T_PPS3","T_PPS9"]],  # §7: TWO manifolds, ladder mode
    "si_reks_2spin": [0, 2],                                  # §7: explicit SI manifolds, singlet + triplet
    "si_reks_configs": [[["full"]], [["full"]]],              # §5/§7: one full-manifold SI cassette per group
}

template_geom = """
-2 1
Cu Cl Cl Cu Cl Cl Cl Cl      (planar Cu2Cl6 dimer skeleton)
symmetry c1
"""

mol = psi4.geometry(template_geom)
psi4.set_options(template_options)
old_wfn = psi4.core.Wavefunction.from_file("cu2cl6mm_reks66.wfn.npy")
energy, wfn = psi4.energy("bhhlyp", restart_file="cu2cl6mm_reks66.wfn.npy", return_wfn=True)
wfn.to_file("cu2cl6mm_reks66.wfn")
psi4.core.clean()
```

**What this run does:** a larger REKS(6,6) active space on a di-μ-chloro-bridged dicopper(II) hexachloride dianion (`Cu2Cl6²⁻`, a classic antiferromagnetically-coupled binuclear transition-metal system — hence the `-2 1` charge/multiplicity line and the interest in *both* spin states). Unlike Example 1, this run explicitly declares **two spin manifolds**:

-   The `SA_REKS_CONFIGS` nested list `[["PPS1","PPS3"], ["T_PPS3","T_PPS9"]]` is in **ladder mode** (no `SA_REKS_2SPIN`), so block 0 (`PPS1, PPS3`) is the run's lowest manifold (singlet, 2S=0) and block 1 (`T_PPS3, T_PPS9`, note the triplet-background `T_` prefix) is its next-lowest manifold (triplet, 2S=2) — both optimized *jointly* in one SA-SCF.
-   `SI_REKS_2SPIN: [0, 2]` then explicitly assigns the two `SI_REKS_CONFIGS` groups to manifolds 2S=0 and 2S=2 respectively, each with one SI cassette built from the `"full"` bulk token (the entire config block of that manifold) — so this run reports adiabatic singlet states *and* adiabatic triplet states from the same SCF, useful for e.g. singlet-triplet gaps in the exchange-coupled dimer.
-   The finer, explicitly pruned DFT grid (`dft_radial_points`/ `dft_spherical_points`/`dft_pruning_scheme`, vs. the coarser `SG1` preset in Example 1) reflects the greater sensitivity of transition-metal exchange couplings to integration-grid quality.
-   The commented-out `#a_values = np.linspace(...)` / loop at the bottom shows this script began life as (or is intended to become) a **relaxed/rigid scan** template — looping over a geometric parameter `**A**` substituted into `template_geom`, re-running `psi4.geometry`/`set_options`/`energy` at each point, and presumably chaining `.wfn.npy` restarts between points for smooth convergence along the scan (the pattern used throughout this manual's restart discussion, §8).
-   `psi4.core.clean()` at the end clears Psi4's scratch files — good practice when this script is one point of a longer scan/restart chain.

## 15\. Reading REKS Studio Output

With the default `REKS_REPORT_LEVEL = 2`, a run's `.out` file contains, in order:

1.  **Banner** — the "REKS Studio" title block (§ front matter of this manual).
2.  **`REKS Studio Setup`** — the resolved variant (`REKS(N,M) scheme S spin s`), active space size, core-orbital count, and the 1-based active MO indices (always printed with irrep label `"A"`, since REKS forces `C1` internally regardless of the molecule's actual symmetry).
3.  **`REKS Sector Map`** — one line per participating spin manifold (2S), its SA config count (or "SA-empty"), SI cassette count, and generation count — this is where you confirm a multi-manifold run like Example 2 actually declared the sectors you intended.
4.  **`Pairing schemes (GVB(2,2) geminal pairs)`** — the geminal-pairing scheme(s) available for the active space (§4), needed to interpret `single-scheme:N`/`mixed-scheme:N` tokens.
5.  **`SA pool`** — the resolved list of SA configurations (names, weights) actually entering the SCF, per sector.
6.  **SCF iteration trace** (as for any Psi4 SCF).
7.  **`SI pool`** — the resolved SI cassette(s): which configs each contains.
8.  **`SA-REKS Energy Decomposition`** — total energy plus, when active, the IPR penalty energy (§11) and/or VV10 nonlocal correlation energy contributions, each on its own labeled line.
9.  **`Adiabatic State Energies`** — the SI-diagonalized state energies, labeled `SSR State S0, S1, ...`, one block per SI cassette (with a note if `SI_REKS_REPORT_STATES` truncated the list, §5).
10.  **`Microstate Energies (sorted by energy)`** — the individual configuration/microstate energies that fed the SA ensemble, truncated to the 15 lowest at `REKS_REPORT_LEVEL 2` (raise to 3 for the full list).

At `REKS_REPORT_LEVEL >= 3–5`, additional tables appear: the full microstate list; SSR (state-specific/response) coefficient, Hamiltonian, overlap and 1-RDM matrices over the config axis; a `Lagrangian eps_pq and ERI (pq|st)` table used to build the SSR Hamiltonian; and, at level 4+ for cassettes wider than 150 configs, block-tiled printouts of the SI matrices themselves (18 columns per block, per `kSIBlockColumns`).

## 16\. Troubleshooting and Convergence Tips

-   **SCF converges instantly to a suspiciously wrong energy after a restart.** The active-window orbitals from the loaded `.wfn.npy` likely landed in the wrong columns. Inspect the Molden file, then fix with `GUESS_ACTIVE_WINDOW` — §8.
-   **SCF hits `MAXITER` without converging.** With `fail_on_maxiter: False` (as both examples set), you still get a wavefunction back — save it with `wfn.to_file(...)` and restart from it rather than starting over; REKS SCF convergence is iterative-refinement-friendly across restarts. Consider raising `MAXITER`, or temporarily raising `REKS_REPORT_LEVEL` to 4 to see which GVB-DIIS monitor (verdict rewind, cycle detection, basin guard) is repeatedly firing.
-   **SCF oscillates or cycles without converging.** This is exactly what the GVB-DIIS monitoring stack (§10) is designed to catch and restart from — but if it's still unproductive, try `REKS_USE_TRAH: True` as a more robust (if slower) warm-up/fallback, or switch `REKS_DIIS_FORMULATION` between `"ORBITAL"` and `"CFM"`.
-   **A geminal keeps collapsing back to closed-shell (or won't leave a boundary FON).** Floor its generation's FON with the matching `REKS_*_FON` option (§9) — this keeps it on the open-shell side of the interpolation without fixing it to a single value — as both example scripts do for OSS geminals via `reks_m_fon: 1.0`.
-   **Active orbitals delocalize across the whole molecule instead of localizing on the intended fragment/bond.** Try a positive `REKS_DELOC_IPR_PENALTY` (§11).
-   **Unknown config name/type error.** REKS Studio's own error message lists every valid name and type for your `(N,M)` and manifold — read it; it is generated from the same catalog this manual describes (§4).
-   **Requested `(N,M)` immediately fails to load.** No catalog file exists for that active space in `reks_catalog/`; only the shipped ones (`(2,2)`, `(4,4)`, `(6,6)` in this checkout) are available without generating a new catalog offline.

## 17\. Full Option Quick-Reference

All options below are read in `psi4/src/read_options.cc` under `SUBSECTION REKS`. Every array-valued option in the first table has an `REKS_`\-prefixed alias (e.g. `SA_REKS_CONFIGS` ↔ `REKS_SA_CONFIGS`); setting both simultaneously is an error.

### Active space & configuration selection

| Option | Type | Default | See |
| --- | --- | --- | --- |
| `REKS` | `[N, M]` | — (required) | §5 |
| `SA_REKS_CONFIGS` | array | catalog `sa_default` | §5 |
| `SA_REKS_2SPIN` | array | ladder, lowest manifold | §5, §7 |
| `SA_REKS_WEIGHTS` | array | uniform `1/n` | §5 |
| `SA_REKS_EXTRA` | array of arrays | none | §5 |
| `SI_REKS_CONFIGS` | array | one full-block cassette, lowest manifold | §5 |
| `SI_REKS_2SPIN` | array | ladder, lowest manifold | §5, §7 |
| `SI_REKS_REPORT_STATES` | array of int | all states | §5 |

### Guess

| Option | Type | Default | See |
| --- | --- | --- | --- |
| string | `""` (off) | §8 |
| `GUESS_ACTIVE_WINDOW` | array | `[]` (off) | §8 |

### FONs

| Option | Type | Default | See |
| --- | --- | --- | --- |
| `REKS_FON_INTERP_DELTA` | double | `0.4` | §9 |
| `REKS_N_FON` … `REKS_Z_FON` (8 options) | double | `-1.0` each | §9 |
| `REKS_FON_MICRO_MAX_NR_ITER` | int | `20` | §9 |
| `REKS_FON_MICRO_MAX_LS_ITER` | int | `20` | §9 |
| `REKS_FON_MICRO_CONV_TOL` | double | `1e-12` | §9 |
| `REKS_FON_MICRO_MIN_EIGENVALUE` | double | `1e-8` | §9 |
| `REKS_FON_MICRO_BOUND_MARGIN` | double | `1e-8` | §9 |
| `REKS_FON_MICRO_BOUNDARY_SKIN` | double | `0.05` | §9 |

### Delocalization penalty

| Option | Type | Default | See |
| --- | --- | --- | --- |
| `REKS_DELOC_IPR_PENALTY` | double | `0.0` (off) | §11 |
| `REKS_DELOC_IPR_METHOD` | `LOWDIN`\|`MULLIKEN` | `LOWDIN` | §11 |
| `REKS_DELOC_IPR_GUARD_STREAK_LIMIT` | int | `10` | §11 |

### Reporting

| Option | Type | Default | See |
| --- | --- | --- | --- |
| `REKS_REPORT_LEVEL` | int (1–5) | `2` | §12 |

### Convergence engines — top level

| Option | Type | Default | See |
| --- | --- | --- | --- |
| `REKS_USE_TRAH` | bool | `false` | §10 |
| `REKS_GVB_DIIS` | bool | `true` | §10 |
| `REKS_DIIS_FORMULATION` | `CFM`\|`ORBITAL` | `ORBITAL` | §10 |
| `REKS_GVB_DIIS_START` | int | `3` | §10 |
| `REKS_GVB_LEVEL_SHIFT` | double | `1.0` (CFM only) | §10 |
| `LEVEL_SHIFT_ADAPT` | bool | `true` | §10 |
| `REKS_DIIS_CFM_ACTIVATION_GORB` | double | `1e-3` (CFM only) | §10 |
| `REKS_GVB_ROBUST_VERDICT` | bool | `true` | §10 |

### GVB-DIIS conditioning chain (expert)

| Option | Default |
| --- | --- |
| `REKS_DIIS_COND_ANGLE_FILTER` | `true` |
| `REKS_DIIS_COND_ANGLE_TOL` | `0.1` |
| `REKS_DIIS_COND_STALE_DELTA` | `1e-4` |
| `REKS_DIIS_COND_KAPPA_BYPASS` | `1e9` |
| `REKS_DIIS_COND_SVD_RCOND` | `1e-8` |
| `REKS_DIIS_COND_COEFF_NORM_MAX` | `1e3` |
| `REKS_DIIS_COND_TIKHONOV` | `true` |
| `REKS_DIIS_COND_TIKHONOV_SCALE` | `0.0` |

### GVB-DIIS monitors / verdicts (expert)

| Option | Default |
| --- | --- |
| `REKS_DIIS_MON_VERDICT_RHO` | `1.5` |
| `REKS_DIIS_MON_VERDICT_STREAK` | `3` |
| `REKS_DIIS_MON_SUPPRESS_WINDOW` | `3` |
| `REKS_DIIS_MON_NONMONOTONE_M` | `3` |
| `REKS_GVB_GATE_STREAK` | `2` |
| `REKS_DIIS_GUARD_LATCH_GRACE` | `3` |
| `REKS_DIIS_GUARD_BAND_B` | `0.1` |
| `REKS_DIIS_GUARD_LANDING_RTOL` | `1e-12` |
| `REKS_DIIS_MON_PROGRESS_EPS` | `1e-2` |
| `REKS_DIIS_FON_BRANCH_TOL` | `0.1` |
| `REKS_DIIS_RESTART_BUDGET` | `2` |
| `REKS_DIIS_MON_CYCLE` | `true` |
| `REKS_DIIS_MON_CYCLE_WINDOW` | `12` |
| `REKS_DIIS_MON_CYCLE_CAP_STREAK` | `3` |
| `REKS_DIIS_ORB_BASE_MAP_DAMP` | `0.6` |

### miniTRAH episode inside GVB-DIIS (expert)

| Option | Default |
| --- | --- |
| `REKS_GVB_NK` | `true` |
| `REKS_GVB_NK_TRIGGER` | `4` |
| `REKS_GVB_NK_MIN_LANDINGS` | `3` |
| `REKS_GVB_NK_MAX_REJECT` | `1` |
| `REKS_GVB_NK_FON_MICRO` | `1` |
| `REKS_GVB_NK_REQUIRE_ACTIVE_FON` | `false` |
| `REKS_GVB_NK_MAX_GRAD` | `150` |
| `REKS_GVB_NK_MAX_MACRO` | `10` |
| `REKS_GVB_NK_MAX_INNER` | `20` |
| `REKS_GVB_NK_FD_H` | `0.0` (auto) |
| `REKS_GVB_NK_EXIT_FACTOR` | `0.5` |

*(All defaults and semantics above are transcribed directly from the docstrings in `psi4/src/read_options.cc`; consult that file — or the `input_usage_examples()` text REKS Studio itself prints on an input error — for the canonical, always-current wording.)*

## 18\. References

-   REKS Studio banner authorship: Konstantin Komarov, Michael Filatov, Seung Kyu Min — Ulsan National Institute of Science and Technology (UNIST), South Korea (`reks_report.cc`).
-   GVB-DIIS multishell Fock extrapolation: Muller, R. P. et al. *J. Chem. Phys.* **1994**, *100*, 1226.
-   Orbital-rotation DIIS: Ionova, I. V.; Carter, E. A. *J. Chem. Phys.* **1995**, *102*, 1251; r-GDIIS extension: Sethio, D. et al. *J. Phys. Chem. A* **2024**, *128*, 2472.
-   Trust-region subproblem algorithm: Nocedal, J.; Wright, S. J. *Numerical Optimization*, 2nd ed.; Springer: New York, 2006, Ch. 4; Moré, J. J.; Sorensen, D. C. *SIAM J. Sci. Stat. Comput.* **1983**, *4*, 553; Helmich-Paris, B. *J. Chem. Phys.* **2021**, *154*, 164104 and **2022**, *156*, 204104.
-   The underlying REKS/SA-REKS/SI-REKS methodology itself (ensemble DFT, geminal-paired active spaces, state-interaction) is due to the long-running program of Filatov and co-workers; this manual documents the *Psi4 implementation* (REKS Studio) rather than re-deriving the theory — consult the primary REKS/SI-REKS literature for the underlying formalism.

*This manual reflects the state of the `kk/reks.studio` branch of `ConstLike/psi4` at the time of writing. Because this is an active development branch, option names, defaults, and behavior may change — the most current source of truth is always `psi4/src/read_options.cc` and the `input_usage_examples()` text printed by REKS Studio itself.*
