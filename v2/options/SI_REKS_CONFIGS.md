# `SI_REKS_CONFIGS`

HTML: <https://reksstudio.github.io/v2/manual/setup/#si_reks_configs>

Psi4 b275f4294, 2026-10-11: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `<page>/index.md` (markdown). Option cards: `options/<NAME>.md`. Raw files: `<file>.txt` (text/plain).

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
   S0[1]  -2.128686999214        -0.178               -4.10                 0.000  -                                          -   PPS2(99.1)
   S1[1]  -1.329219012360        21.577              497.58                21.755  -                                          -   OSS3(99.1) 1A(a)->3A(c)
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
