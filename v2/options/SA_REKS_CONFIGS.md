# `SA_REKS_CONFIGS`

HTML: <https://reksstudio.github.io/v2/manual/setup/#sa_reks_configs>

Chapter: [8. SA Pool and SI Cassettes](https://reksstudio.github.io/v2/manual/setup/index.md#selecting)

Psi4 d40267fc2, 2026-10-13: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

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
