# `SA_REKS_WEIGHTS`

HTML: <https://reksstudio.github.io/v2/manual/setup/#sa_reks_weights>

Chapter: [8. SA Pool and SI Cassettes](https://reksstudio.github.io/v2/manual/setup/index.md#selecting)

Psi4 72ce4d58b, 2026-10-17: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

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
