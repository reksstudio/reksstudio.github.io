# Diagnose — REKS Studio Manual

HTML: <https://reksstudio.github.io/v2/manual/diagnose/>

Psi4 f31cf1f94, 2026-10-15: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

[Manual](https://reksstudio.github.io/v2/manual/index.md) › Diagnose

# Diagnose

Chapter 17 of the REKS Studio user manual

## 17. Diagnose {#diagnose}

Each entry names what the output prints, then what to do. A converged SCF can still show several of them. A problem not in this list: [Documentation, Contact](https://reksstudio.github.io/v2/docs/index.md#contact).

#### SCF converges instantly to a wrong energy after a restart {#diag-wrong-window}

The active-window orbitals of the loaded `.wfn.npy` landed in the wrong columns. Observed (linear H₄, BH\&HLYP/6-31G, restart from a run with E = −1.88445354755929 E<sub>h</sub>): the window `['HOMO-1', 'HOMO', 'LUMO+1', 'LUMO+2']` puts 5A into the active space and leaves 3A virtual; the setup lists `Active MO indices` 1A–4A, the FONs sit at 2 and 0, and the energy is 0.32 E<sub>h</sub> higher:

```log
GUESS READ: active window ['HOMO-1', 'HOMO', 'LUMO+1', 'LUMO+2'] -> MO columns [0, 1, 2, 3] (swaps [(2, 3), (3, 4)])
[...]
      Pairing scheme 0: (a,d) & (b,c) = (1A,5A) & (2A,4A)

       1A     -0.403994  (a)    n_a =  2.000000    m_a =  2.000000
       2A     -0.317491  (b)    n_b =  1.999750    m_b =  1.999273
       4A     -0.019252  (c)    n_c =  0.000250    m_c =  0.000727
       5A      0.753419  (d)    n_d =  0.000000    m_d =  0.000000

    Virtual (4):
[...]
       3A     -0.109676     6A      0.863522     7A      0.915720
[...]
@REKS Final Energy:    -1.56168292643458
```

Check the active set ([Check the solution](https://reksstudio.github.io/v2/manual/first-calculation/index.md#check-solution)), also after a cold start (s-trans-butadiene REKS(4,4), cold SAD: setup 14A–17A, pairs `(13A,17A) & (15A,16A)`); for a REKS source, compare the final energy with that of the run that wrote the orbitals. Inspect the Molden file, then fix the window with [`GUESS_ACTIVE_WINDOW`](https://reksstudio.github.io/v2/options/GUESS_ACTIVE_WINDOW.md).

#### SCF hits `MAXITER` or continues unconverged {#diag-maxiter}

`MAXITER` defaults to 100 SCF iterations. With the default `FAIL_ON_MAXITER` true the run stops with `Failed to converge.` and an `SCFConvergenceError`. With `FAIL_ON_MAXITER` false the trace ends as below (H₄, `maxiter` 2); SI, properties and files follow on the unconverged orbitals, and the wavefunction is returned.

```log
 @REKS iter   2:    -1.88215688187835   -9.95203e-02   4.33488e-03 SHIFT
[...]
Energy and/or wave function did not converge, but proceeding anyway.
```

Save it with `wfn.to_file(...)` and restart from it rather than starting over ([Restart mechanism](https://reksstudio.github.io/v2/manual/run-control/index.md#restart)). Raise `MAXITER`, or raise `REKS_REPORT_LEVEL` to 4 to see which GVB-DIIS monitor (verdict rewind, cycle detection, basin guard) fires repeatedly ([§13](https://reksstudio.github.io/v2/manual/run-control/index.md#scf-engines)).

#### SCF oscillates or cycles {#diag-oscillation}

The GVB-DIIS monitors ([§13](https://reksstudio.github.io/v2/manual/run-control/index.md#scf-engines)) catch and restart such runs. If that stays unproductive, use the [`REKS_USE_TRAH`](https://reksstudio.github.io/v2/options/REKS_USE_TRAH.md) warm-up, or switch [`REKS_DIIS_FORMULATION`](https://reksstudio.github.io/v2/options/REKS_DIIS_FORMULATION.md) between `"ORBITAL"` and `"CFM"`.

#### FONs of a geminal invert {#diag-fon-inverted}

`Post-Iterations` prints n<sub>p</sub> \< n<sub>q</sub> for a geminal of generation ≥ 1 (generation 0, also under TRAH: [§12](https://reksstudio.github.io/v2/manual/run-control/index.md#fons)). Set a floor of `1.0` on its generation ([`REKS_<L>_FON`](https://reksstudio.github.io/v2/options/REKS_N_FON.md)).

#### FON pinned at a bound, symmetry-broken charges {#diag-fon-pinned}

`Post-Iterations` prints `n_a = 2.000000`, `n_b = 0.000000`, `gradient()` prints `[GRAD-FON] … pinned`, and equivalent atoms carry different charges. Example: 90° C₂H₄ from a cold SAD start; the RKS seed gives n 1/1 ([Check the solution](https://reksstudio.github.io/v2/manual/first-calculation/index.md#check-solution)). From a cold start (a separate BH\&HLYP/6-31G run; [Check the solution](https://reksstudio.github.io/v2/manual/first-calculation/index.md#check-solution) uses 6-31G(d)) the `gradient()` centre lands on n<sub>a</sub> = 2, 1.84 or 1 from run to run. On each of these solutions the analytic S1 gradient agrees with a 5-point finite difference read from the centre to ≤ 2·10<sup>−7</sup> E<sub>h</sub>/a<sub>0</sub>; a 2-point difference from cold starts at ±h deviates by 1–2·10<sup>−2</sup> because those points converge to another solution.

Seed from an RKS run at the same geometry ([Seed orbitals](https://reksstudio.github.io/v2/manual/first-calculation/index.md#seed-orbitals)) or from a neighbouring geometry ([Restart mechanism](https://reksstudio.github.io/v2/manual/run-control/index.md#restart)) and compare the FON columns between runs; geminals entering only SI configurations can also lie at the bound ([FONs of the SI-only geminals](https://reksstudio.github.io/v2/manual/properties/index.md#si-fons)). Optimizations: [Check the optimization](https://reksstudio.github.io/v2/manual/dynamics/index.md#check-optimization).

#### Active orbitals localize on one fragment {#diag-localized}

Each orbital of a geminal pair sits on one centre, as from the localized seed of 90° C₂H₄ (n<sub>a</sub> = 2, E<sub>SA</sub> 10.8 mE<sub>h</sub> above the delocalized solution). Set [`REKS_GEMINAL_DELOC`](https://reksstudio.github.io/v2/options/REKS_GEMINAL_DELOC.md): `REKS Geminal Delocalization` lists the pairs rotated to their IPR minimum and whether the SCF from them is kept (lower E<sub>SA</sub>).

#### Unknown configuration name or type {#diag-unknown-token}

The error lists every valid type and name of the manifold the block is bound to, here `REKS(4,4)`, 2S = 0; it is generated from the same catalog ([§6](https://reksstudio.github.io/v2/manual/setup/index.md#catalog)):

```log
Unknown REKS config token 'BOGUS'. Use the keyword 'full', 'sps', 'single-scheme[:N]', 'mixed-scheme[:N]', a name pattern with '*' or '?', a config type (PPS, OSS, DES, OSS_DES, DDES, DOSS_SPS), or a config name (PPS1, OSS1, OSS2, PPS2, OSS3, OSS4, DES1, DES2, DES3, DES4, OSS_DES1, OSS_DES2, OSS_DES3, OSS_DES4, DDES1, DDES2, DOSS_SPS_0, DOSS_SPS_1).
```

#### Active space fails to load {#diag-catalog}

No catalog file exists for that active space; the error lists the installed ones ([§6](https://reksstudio.github.io/v2/manual/setup/index.md#catalog)):

```log
REKS active space [N=8, M=8] is not installed. Installed [N,M] active spaces: [2,2], [2,3](u=3), [2,4](u=4), [4,4], [4,5](u=23), [4,6](u=33), [6,6] (catalog directory …/share/psi4/reks_catalog; PSI4_REKS_CATALOG overrides it).
```

#### Ghost states and a collapsed SI spectrum {#diag-ghost-states}

Compare `Independent states` (on the Davidson path r of `Computed states k of r`) with `Configurations` and the null modes, and E(S0) with `@REKS Final Energy` ([SI Hamiltonian and overlap](https://reksstudio.github.io/v2/manual/properties/index.md#si-matrices)).

#### Quasi-degenerate roots {#diag-quasi-degenerate}

`SI_REKS_GRAD` follows a root by index. The gap of the followed pair is printed in the `NAC` header ([Nonadiabatic coupling vectors](https://reksstudio.github.io/v2/manual/properties/index.md#nac)) and in the CI-topography header when it is below `REKS_CI_TOPOGRAPHY_GAP` ([Conical-intersection topography](https://reksstudio.github.io/v2/manual/properties/index.md#ci-topography)); compare the leading configurations of the followed root in `Adiabatic states` between runs.
