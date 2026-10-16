---
title: Diagnose
---

## 17\. Diagnose {#diagnose}

Each entry names what the output prints, then what to do. A converged SCF can still show several of them. A problem not in this list: [Documentation, Contact](../../docs/#contact).

#### SCF converges instantly to a wrong energy after a restart {#diag-wrong-window}

The active-window orbitals of the loaded `.wfn.npy` landed in the wrong columns. Observed (linear H₄, BH&HLYP/6-31G, restart from a run with E = −1.88445354755929 E<sub>h</sub>): the window `['HOMO-1', 'HOMO', 'LUMO+1', 'LUMO+2']` puts 5A into the active space and leaves 3A virtual; the setup lists `Active MO indices` 1A–4A, the FONs sit at 2 and 0, and the energy is 0.32 E<sub>h</sub> higher:

@@fragment window-swap@@

Check the active set (§check-solution), also after a cold start (s-trans-butadiene REKS(4,4), cold SAD: setup 14A–17A, pairs `(13A,17A) & (15A,16A)`); for a REKS source, compare the final energy with that of the run that wrote the orbitals. Inspect the Molden file, then fix the window with §guess_active_window.

#### SCF hits `MAXITER` or continues unconverged {#diag-maxiter}

`MAXITER` defaults to 100 SCF iterations. With the default `FAIL_ON_MAXITER` true the run stops with `Failed to converge.` and an `SCFConvergenceError`. With `FAIL_ON_MAXITER` false the trace ends as below (H₄, `maxiter` 2); SI, properties and files follow on the unconverged orbitals, and the wavefunction is returned.

@@fragment maxiter@@

Save it with `wfn.to_file(...)` and restart from it rather than starting over (§restart). Raise `MAXITER`, or raise `REKS_REPORT_LEVEL` to 4 to see which GVB-DIIS monitor (verdict rewind, cycle detection, basin guard) fires repeatedly (§scf-engines).

#### SCF oscillates or cycles {#diag-oscillation}

The GVB-DIIS monitors (§scf-engines) catch and restart such runs. If that stays unproductive, use the §reks_use_trah warm-up, or switch §reks_diis_formulation between `"ORBITAL"` and `"CFM"`.

#### FONs of a geminal invert {#diag-fon-inverted}

`Post-Iterations` prints n<sub>p</sub> < n<sub>q</sub> for a geminal of generation ≥ 1 (generation 0, also under TRAH: §fons). Set a floor of `1.0` on its generation (§reks_l_fon).

#### FON pinned at a bound, symmetry-broken charges {#diag-fon-pinned}

`Post-Iterations` prints `n_a = 2.000000`, `n_b = 0.000000`, `gradient()` prints `[GRAD-FON] … pinned`, and equivalent atoms carry different charges. Example: 90° C₂H₄ from a cold SAD start; the RKS seed gives n 1/1 (§check-solution). From a cold start (a separate BH&HLYP/6-31G run; §check-solution uses 6-31G(d)) the `gradient()` centre lands on n<sub>a</sub> = 2, 1.84 or 1 from run to run. On each of these solutions the analytic S1 gradient agrees with a 5-point finite difference read from the centre to ≤ 2·10<sup>−7</sup> E<sub>h</sub>/a<sub>0</sub>; a 2-point difference from cold starts at ±h deviates by 1.0–2.3·10<sup>−2</sup> because those points converge to another solution.

Seed from an RKS run at the same geometry (§seed-orbitals) or from a neighbouring geometry (§restart) and compare the FON columns between runs; geminals entering only SI configurations can also lie at the bound (§si-fons). Optimizations: §check-optimization.

#### Active orbitals localize on one fragment {#diag-localized}

Each orbital of a geminal pair sits on one centre, as from the localized seed of 90° C₂H₄ (n<sub>a</sub> = 2, E<sub>SA</sub> 10.8 mE<sub>h</sub> above the delocalized solution). Set §reks_geminal_deloc: `REKS Geminal Delocalization` lists the pairs rotated to their IPR minimum and whether the SCF from them is kept (lower E<sub>SA</sub>).

#### Unknown configuration name or type {#diag-unknown-token}

The error lists every valid type and name of the manifold the block is bound to, here `REKS(4,4)`, 2S = 0; it is generated from the same catalog (§catalog):

@@fragment err-token@@

#### Active space fails to load {#diag-catalog}

No catalog file exists for that active space; the error lists the installed ones (§catalog):

@@fragment err-catalog@@

#### Ghost states and a collapsed SI spectrum {#diag-ghost-states}

Compare `Independent states` (on the Davidson path r of `Computed states k of r`) with `Configurations` and the null modes, and E(S0) with `@REKS Final Energy` (§si-matrices).

In large active spaces the SI configurations can be nearly linearly dependent. An overlap direction just above the cutoff σ = c · s<sub>max</sub> (c = §si_reks_overlap_cutoff) may then give a spurious lowest root, most often with several FONs at the bound (n ≈ 2 / 0). Signs, all in the output:

1. The lowest root lies tens to thousands of E<sub>h</sub> below E<sub>SA</sub> (`@REKS Final Energy`); in the runs of this manual it lies 0.03–0.51 E<sub>h</sub> below.
2. A `Ghost states` line next to the lowest root, and `Computed states k of r` with k below the count requested by §si_reks_store_states / §si_reks_print_states: the physical roots lie more than 100 E<sub>h</sub> above the spurious one and are removed as ghost roots.
3. The lowest root is led by one or two configurations, or by pairs with overlap 1.00 in the table below it.

Sign 1 can occur alone: the physical roots then follow above the spurious one.

Remedy: raise the cutoff, e.g. `"si_reks_overlap_cutoff": 1e-4`. Check: the lowest physical roots with and without the raised cutoff agree within a few 10<sup>−4</sup> E<sub>h</sub>. The rank r in `span r dimensions` drops and caps the number of roots. In the hexatriene REKS(6,6) cassettes of this manual 1e-4 removes no further mode and changes no root (≤ 10<sup>−12</sup> E<sub>h</sub>). The cutoff is relative to s<sub>max</sub>; no single value is shown to suit every active space.

#### Quasi-degenerate roots {#diag-quasi-degenerate}

`SI_REKS_GRAD` follows a root by index. The gap of the followed pair is printed in the `NAC` header (§nac) and in the CI-topography header when it is below `REKS_CI_TOPOGRAPHY_GAP` (§ci-topography); compare the leading configurations of the followed root in `Adiabatic states` between runs.
