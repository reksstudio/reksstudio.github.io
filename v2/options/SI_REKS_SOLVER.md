# `SI_REKS_SOLVER`

HTML: <https://reksstudio.github.io/v2/manual/setup/#si_reks_solver>

Chapter: [8. SA Pool and SI Cassettes](https://reksstudio.github.io/v2/manual/setup/index.md#selecting)

Psi4 bd0fb43ef, 2026-10-15: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

Eigensolver of each SI cassette: LAPACK on every root, or Davidson on the lowest roots.

Type: `AUTO`|`DIRECT`|`DAVIDSON`

Default: `AUTO`

```python
"si_reks_solver": "DAVIDSON",
```

```log
==> SI Davidson solver (cassette 0) <==

    Roots                 14 (10 requested + 4 margin) of 115
    Convergence           1.000e-12

    Iter      Mean |R|       Max |R|   Remain   Applications   Time [s]
    -------------------------------------------------------------------
       1     8.987e-16     1.513e-15        0            116       0.01
    -------------------------------------------------------------------
    14 roots converged in 1 iterations, 144 operator applications.
[...]
    Computed states       14 of 115 (lowest roots, Davidson)
```

* `DIRECT`: every root, LAPACK on the dense Hamiltonian of the cassette. `DAVIDSON`: the lowest roots, block Davidson on the sparse Hamiltonian; how many: [SI eigensolver](https://reksstudio.github.io/v2/manual/concepts/index.md#si-solver). `AUTO`: per cassette, `DIRECT` up to 4000 configurations, `DAVIDSON` above; the catalogs shipped with Psi4 stay below.
* On a Davidson cassette `SSR ENERGIES K=e` holds the computed roots, and a count `-1` in `SI_REKS_PRINT_STATES`, `SI_REKS_STORE_STATES`, `SI_REKS_GRAD` or `SI_REKS_PROPERTY_FOR` stands for the 50 lowest roots.
