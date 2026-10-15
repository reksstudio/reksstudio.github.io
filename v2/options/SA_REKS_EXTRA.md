# `SA_REKS_EXTRA`

HTML: <https://reksstudio.github.io/v2/manual/setup/#sa_reks_extra>

Chapter: [8. SA Pool and SI Cassettes](https://reksstudio.github.io/v2/manual/setup/index.md#selecting)

Psi4 f31cf1f94, 2026-10-15: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

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
