# `SI_REKS_CONFIGS`

HTML: <https://reksstudio.github.io/v2/manual/setup/#si_reks_configs>

Chapter: [8. SA Pool and SI Cassettes](https://reksstudio.github.io/v2/manual/setup/index.md#selecting)

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

SI-SA-REKS cassettes: the configuration sets whose secular equations give the states, in groups per spin manifold.

Type: array

Default: one full-block cassette, lowest manifold

Alias: `REKS_SI_CONFIGS`

```python
"si_reks_configs": [[["PPS1", "PPS2", "OSS1", "OSS2"], ["single-scheme"], ["mixed-scheme"], ["full"]]],
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
   -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   S0[1]  -2.140622335856        -0.418               -9.63                 0.000  S0 (99 %)                              0.000   PPS1(98.9)
   S1[1]  -1.578546559161        14.877              343.08                15.295  S1 (100 %)                             0.326   OSS2(99.5) 2A(b)->3A(c)
   S2[1]  -1.311136456214        22.154              510.88                22.571  -                                          -   DES2(94.3) 2A(b),2A(b)->3A(c),3A(c); DOSS_SPS_1(5.0) 1A(a)->3A(c), 2A(b)->4A(d)
   S3[1]  -0.759700282426        37.159              856.91                37.577  S2 (99 %)                              0.269   OSS1(99.0) 1A(a)->4A(d)
   S4[1]  -0.316996802406        49.206             1134.71                49.623  -                                          -   DOSS_SPS_0(68.2) 1A(a)->4A(d), 2A(b)->3A(c); DOSS_SPS_1(27.9) 1A(a)->3A(c), 2A(b)->4A(d); DES1(2.1) 1A(a),1A(a)->4A(d),4A(d)
   S0[2]  -2.143592670888        -0.499              -11.50                 0.000  S0 (98 %)                              0.000   PPS1(98.5)
   S1[2]  -1.575184105930        14.969              345.19                15.467  S1 (100 %)                             0.499   OSS2(99.7) 2A(b)->3A(c)
   S2[2]  -1.475834553802        17.672              407.53                18.171  -                                          -   OSS3(53.3) 1A(a)->3A(c); DES2(39.0) 2A(b),2A(b)->3A(c),3A(c); OSS4(5.3) 2A(b)->4A(d)
   S3[2]  -1.222179421667        24.574              566.70                25.073  -                                          -   DES2(50.3) 2A(b),2A(b)->3A(c),3A(c); OSS3(43.3) 1A(a)->3A(c); DOSS_SPS_1(3.7) 1A(a)->3A(c), 2A(b)->4A(d)
   S4[2]  -0.949704282395        31.989              737.68                32.487  -                                          -   OSS4(89.2) 2A(b)->4A(d); DES2(4.9) 2A(b),2A(b)->3A(c),3A(c); DOSS_SPS_0(2.7) 1A(a)->4A(d), 2A(b)->3A(c)
   S0[3]  -2.157804217606        -0.885              -20.41                 0.000  S0 (97 %)                              0.000   PPS1(49.1); PPS2(48.3); DOSS_SPS_1(1.1) 1A(a)->3A(c), 2A(b)->4A(d)
   S1[3]  -1.578546559161        14.877              343.08                15.762  S1 (100 %)                             0.794   OSS2(99.5) 2A(b)->3A(c)
   S2[3]  -1.556892128760        15.466              356.66                16.352  -                                          -   OSS3(46.2) 1A(a)->3A(c); DES2(35.6) 2A(b),2A(b)->3A(c),3A(c); DES3(7.7) 1A(a),1A(a)->3A(c),3A(c)
   S3[3]  -1.243261461583        24.001              553.47                24.886  -                                          -   OSS3(45.4) 1A(a)->3A(c); DES2(44.7) 2A(b),2A(b)->3A(c),3A(c); OSS4(4.7) 2A(b)->4A(d)
   S4[3]  -0.994944258185        30.758              709.29                31.643  -                                          -   OSS4(77.0) 2A(b)->4A(d); DES2(10.4) 2A(b),2A(b)->3A(c),3A(c); DOSS_SPS_0(4.9) 1A(a)->4A(d), 2A(b)->3A(c)
   -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   Closest = state of the first list of largest weight overlap sum_j min(w_j(A), w_j(B)) >= 50 %
   (configurations of |S| >= 0.95 merged); dE_exc = E-E(own lowest).
```

* 3-level `[[[...], ...], [[...], ...], ...]`: one group of cassettes per outer entry, each group mapped to a spin manifold like the SA blocks (ladder position or `SI_REKS_2SPIN`). The call above is one group of four cassettes, each with its own states (third fragment; energies: [Explicit SA pool and SI cassettes](https://reksstudio.github.io/v2/manual/index.md#explicit-input)). A cassette is a set of names, indices or bulk tokens ([§7](https://reksstudio.github.io/v2/manual/setup/index.md#bulk-tokens)); a repeated selection is kept at its first position. First two fragments: `[[["full"]], [["full"]]]` with `SI_REKS_2SPIN` `[0, 2]`.
* 2-level `[[...], [...], ...]`: the cassettes of a single group on the run's lowest manifold (or the one `SI_REKS_2SPIN` names); legal only when `SI_REKS_2SPIN` is absent or has length 1. The 3-level form without `SI_REKS_2SPIN` maps group 0 to ladder position 0, the catalog's first spin sector; the two forms coincide when that is the run's lowest manifold, as in the call above.
* Absent: one cassette spanning the whole configuration block of the run's lowest (or `SI_REKS_2SPIN`-chosen) manifold. `[[]]` runs no SI step and sets no `SSR` arrays.
* A flat list of names (`["PPS1", "OSS1"]`) is an input error: `SI_REKS_CONFIGS: scalar elements are not a cassette form; use a list of cassettes [[...], ...] (2-level) or cassette groups [[[...]], ...] (3-level).`
* `Wfn storage` `none` in `SI pools` means no per-state `SSR … K=e` analysis arrays and no natural-orbital, NTO or NDO Molden files for that cassette ([`SI_REKS_STORE_STATES`](https://reksstudio.github.io/v2/options/SI_REKS_STORE_STATES.md)).
* Each cassette opens with a `State interaction: cassette e` header; its 2S tag appears when the run has more than one spin manifold.
* Two or more cassettes of one 2S add `Alternative configuration lists` after `State summary` (third fragment): the states of the later cassettes with energies relative to S0 and to their own lowest state, the closest state of the first list by weight overlap, and the main configurations.

See: [SI cassette](https://reksstudio.github.io/v2/manual/concepts/index.md#si-cassette), [`SI_REKS_2SPIN`](https://reksstudio.github.io/v2/options/SI_REKS_2SPIN.md), [SSR state energies](https://reksstudio.github.io/v2/manual/properties/index.md#ssr-energies)
