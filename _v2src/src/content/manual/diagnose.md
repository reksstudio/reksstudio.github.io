---
title: Diagnose
---

## 16\. Diagnose {#diagnose}

Each entry names what the output prints, then what to do. A converged SCF can still show several of them.

#### SCF converges instantly to a wrong energy after a restart {#diag-wrong-window}

The active-window orbitals of the loaded `.wfn.npy` landed in the wrong columns. Observed (linear H₄, BH&HLYP/6-31G, restart from a run with E = −1.88445354755929 E<sub>h</sub>): the window `['HOMO-1', 'HOMO', 'LUMO+1', 'LUMO+2']` puts 5A into the active space and leaves 3A virtual; the setup lists `Active MO indices` 1A–4A, the FONs sit at 2 and 0, and the energy is 0.32 E<sub>h</sub> higher:

@@fragment window-swap@@

Check the active set (§check-solution), also after a cold start (s-trans-butadiene REKS(4,4), cold SAD: setup 14A–17A, pairs `(13A,17A) & (15A,16A)`); for a REKS source, compare the final energy with that of the run that wrote the orbitals. Inspect the Molden file, then fix the window with §guess_active_window.

#### SCF hits `MAXITER` or continues unconverged {#diag-maxiter}

With the default `FAIL_ON_MAXITER` true the run stops with `Failed to converge.` and an `SCFConvergenceError`. With `FAIL_ON_MAXITER` false the trace ends as below (H₄, `maxiter` 2); SI, properties and files follow on the unconverged orbitals, and the wavefunction is returned.

@@fragment maxiter@@

Save it with `wfn.to_file(...)` and restart from it rather than starting over (§restart). Raise `MAXITER`, or raise `REKS_REPORT_LEVEL` to 4 to see which GVB-DIIS monitor (verdict rewind, cycle detection, basin guard) fires repeatedly (§scf-engines).

#### SCF oscillates or cycles {#diag-oscillation}

The GVB-DIIS monitors (§scf-engines) catch and restart such runs. If that stays unproductive, use the §reks_use_trah warm-up, or switch §reks_diis_formulation between `"ORBITAL"` and `"CFM"`.

#### FONs of a geminal invert {#diag-fon-inverted}

`Post-Iterations` prints n<sub>p</sub> < n<sub>q</sub> for a geminal of generation ≥ 1 (generation-0 pairs are swapped, §fons). Set a floor of `1.0` on its generation (§reks_l_fon).

#### FON pinned at a bound, symmetry-broken charges {#diag-fon-pinned}

`Post-Iterations` prints `n_a = 2.000000`, `n_b = 0.000000`, `gradient()` prints `[GRAD-FON] … pinned`, and equivalent atoms carry different charges. Example: 90° C₂H₄ from a cold SAD start; the RKS seed gives n 1/1 (§check-solution). On the cold branch (a separate BH&HLYP/6-31G run; §check-solution uses 6-31G(d)) the analytic S1 gradient agrees with a 5-point finite difference to 9·10<sup>−8</sup> E<sub>h</sub>/a<sub>0</sub>; a 2-point difference deviates by 2.3·10<sup>−2</sup> because its −h point converges to the other solution.

Seed from an RKS run at the same geometry (§seed-orbitals) or from a neighbouring geometry (§restart) and compare the FON columns between runs; geminals entering only SI configurations can also lie at the bound (§si-fons). Optimizations: §check-optimization.

#### Active orbitals localize on one fragment {#diag-localized}

Set a positive §reks_deloc_ipr_penalty; the report then ends with `=== REKS IPR Penalty Final ===` and the basin verdict.

#### Unknown configuration name or type {#diag-unknown-token}

The error lists every valid type and name of the manifold the block is bound to, here `REKS(4,4)`, 2S = 0; it is generated from the same catalog (§catalog):

@@fragment err-token@@

#### Active space fails to load {#diag-catalog}

No catalog file exists for that active space; the error lists the installed ones (§catalog):

@@fragment err-catalog@@

#### Ghost states and a collapsed SI spectrum {#diag-ghost-states}

Observed (REKS(4,6)[3,3], H₄): `Ghost states` reports 159 removed roots, `Independent states` is 1, and S0 = −10358357.624062862247 E<sub>h</sub> against `E[SA-REKS]` = −1.266834523295 E<sub>h</sub>. Compare `Independent states` with `Configurations` and the null modes, and E(S0) with `@REKS Final Energy` (§si-matrices).

#### Quasi-degenerate roots {#diag-quasi-degenerate}

`SI_REKS_GRAD` follows a root by index. The gap of the followed pair is printed in the `NAC` header (§nac) and in the CI-topography header when it is below `REKS_CI_TOPOGRAPHY_GAP` (§ci-topography); compare the leading configurations of the followed root in `Adiabatic states` between runs.
