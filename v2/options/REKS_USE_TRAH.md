# `REKS_USE_TRAH`

HTML: <https://reksstudio.github.io/v2/manual/run-control/#reks_use_trah>

Chapter: [13. SCF Convergence Engines](https://reksstudio.github.io/v2/manual/run-control/index.md#scf-engines)

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

Trust-region Newton (TRAH) step on the active–active rotations and FONs: warm-up before GVB-DIIS, or the whole SCF without it.

Type: bool

Default: `false`

```python
"reks_use_trah": True,
```

* Trust-region Newton solver (trace tag `TRAH/SHIFT`) for the stationary point of the SA energy in the active–active orbital rotations and the FONs: a box-constrained damped Newton step from the eigendecomposition of the analytic active–active Hessian, a bisection on the damping until the step norm matches the trust radius, and eigenvector following along the inter-pair modes ([Nocedal and Wright, Numerical Optimization 2006](https://reksstudio.github.io/v2/manual/reference/index.md#nocedal2006-numerical-optimization), Ch. 4 and 11; [Baker, J. Comput. Chem. 1986, 7, 385](https://reksstudio.github.io/v2/manual/reference/index.md#baker1986-eigenvector-following); [Cerjan and Miller, J. Chem. Phys. 1981, 75, 2800](https://reksstudio.github.io/v2/manual/reference/index.md#cerjan1981-transition-states); [Helmich-Paris, J. Chem. Phys. 2021, 154, 164104](https://reksstudio.github.io/v2/manual/reference/index.md#helmich-paris2021-trah-scf)).
* The intra-geminal rotations and the FONs are minimized; their Hessian block enters the step with |λ| of its eigenvalues. When that block has a negative eigenvalue λ (eigenvector v) and ½ |λ| Δ<sup>2</sup> > `E_CONVERGENCE` (Δ the trust radius), the step s is extended along v to the trust radius, s → s + σ τ v with τ = (Δ<sup>2</sup> − ‖s‖<sup>2</sup>)<sup>½</sup> cut back to the variable bounds and σ = −sign(g · v); such a point is left, not reported as converged. After this step the trust radius follows the energy ratio ρ = ΔE / ΔE<sub>model</sub>.
* TRAH steps move the FONs without reordering the orbitals of a geminal ([§12](https://reksstudio.github.io/v2/manual/run-control/index.md#fons)).
* Warm-up or whole SCF: [The three engines](https://reksstudio.github.io/v2/manual/run-control/index.md#engines).
