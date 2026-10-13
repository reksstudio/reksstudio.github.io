# `SI_REKS_OVERLAP_CUTOFF`

HTML: <https://reksstudio.github.io/v2/manual/setup/#si_reks_overlap_cutoff>

Chapter: [8. SA Pool and SI Cassettes](https://reksstudio.github.io/v2/manual/setup/index.md#selecting)

Psi4 d40267fc2, 2026-10-13: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

Overlap eigenvalues <code>s ≤ cutoff · s<sub>max</sub></code> of the SI basis are treated as null space and dropped.

Type: double

Default: `1e-10`

```python
"si_reks_overlap_cutoff": 1e-8,
```

* Eigenvectors of the SI overlap with s ≤ cutoff · s<sub>max</sub> form the null space and are removed before diagonalization ([SI Hamiltonian and overlap](https://reksstudio.github.io/v2/manual/properties/index.md#si-matrices)).
* Ghost roots (configurations with s just above the cutoff): [Adiabatic (SSR) states](https://reksstudio.github.io/v2/manual/concepts/index.md#ssr-states).
