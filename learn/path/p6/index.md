# P6. Forces — REKS Studio Learn

HTML: <https://reksstudio.github.io/learn/path/p6/>

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/llms.txt>. Every page: `https://reksstudio.github.io/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/inputs/<file>.txt`.

[Learn](https://reksstudio.github.io/learn/index.md) › P6. Forces

# P6. Forces

[`si_reks_grad`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_grad) and [`si_reks_nac`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_nac) take one list per SI cassette: `[[1]]` is root 1 of cassette 0, `[[[0, 1]]]` the pair (0, 1) of cassette 0. `Gradient request` marks the followed root with `*`.

## S1 gradient and S0/S1 coupling of twisted ethylene {#case-c2h4-gradient}

**What are the forces on the atoms in a state?**

Predict

`gradient()` returns one gradient. Which state does it belong to, and where is the coupling stored?

Input: [`first_c2h4_90_gradient.py`](https://reksstudio.github.io/inputs/first_c2h4_90_gradient.py.txt), stage `reks`; charge 0, multiplicity 1

```python
"""SSR(2,2) of 90-degree twisted ethylene, BH&HLYP/6-31G(d): S1 gradient and S0/S1 coupling, seeded from RKS orbitals.  # changed
python first_c2h4_90_gradient.py rks   -> RKS orbitals: first_c2h4_90_gradient_rks.wfn.npy  # changed
python first_c2h4_90_gradient.py reks  -> REKS(2,2) from them: gradient of S1, NAC of S0/S1"""  # changed
import sys

import psi4

stage = sys.argv[1]
psi4.set_output_file(f"first_c2h4_90_gradient_{stage}.out", False)
psi4.set_memory("2 GB")

psi4.geometry("""
0 1
C   0.000000   0.000000   0.665000
C   0.000000   0.000000  -0.665000
H   0.000000   0.920840   1.231300
H   0.000000  -0.920840   1.231300
H   0.920840   0.000000  -1.231300
H  -0.920840   0.000000  -1.231300
symmetry c1
""")
psi4.set_options({"basis": "6-31g(d)", "scf_type": "pk"})

if stage == "rks":
    psi4.set_options({"molden_write": True})
    e, wfn = psi4.energy("bhhlyp", return_wfn=True)
    wfn.to_file("first_c2h4_90_gradient_rks.wfn")
    print(f"E(RKS) = {e:.10f}")
else:
    psi4.set_options({"reference": "reks", "reks": [2, 2],  # changed
                      "si_reks_grad": [[1]],          # gradient of S1  # changed
                      "si_reks_nac": [[[0, 1]]]})     # coupling of S0 and S1  # changed
    g, wfn = psi4.gradient("bhhlyp", return_wfn=True, restart_file="first_c2h4_90_gradient_rks.wfn.npy")  # changed
    print("S1 gradient:\n", g.np)  # changed
    print("NAC S0/S1:\n", wfn.array_variable("SSR NAC 0 1 CASSETTE 0").np)  # changed
```

Highlighted: changed from [Twisted ethylene, REKS(2,2)](https://reksstudio.github.io/learn/path/p2/index.md#case-c2h4-90); removed:

```python
"""SSR(2,2) of 90-degree twisted ethylene, BH&HLYP/6-31G(d), seeded from RKS orbitals.
python first_c2h4_90.py rks   -> RKS orbitals: first_c2h4_90_rks.wfn.npy + Molden file to inspect
python first_c2h4_90.py reks  -> REKS(2,2) from them: first_c2h4_90_reks.wfn.npy"""
    psi4.set_options({"reference": "reks", "reks": [2, 2]})
    e_sa, wfn = psi4.energy("bhhlyp", return_wfn=True, restart_file="first_c2h4_90_rks.wfn.npy")
    wfn.to_file("first_c2h4_90_reks.wfn")
    print(f"E(SA) = {e_sa:.10f}")
    print("SSR states:", wfn.array_variable("SSR ENERGIES K=0").np.ravel()[:3])
```

Run settings

Active space: catalog `reks22` = REKS(2,2); units `[2]`: electron geminal (FON n); 2S = 0 (3 configurations), 2 (1 configuration)

SA, SI: defaults ([SA-REKS ensemble and weights](https://reksstudio.github.io/learn/concepts/index.md#sa-ensemble), [SI cassette](https://reksstudio.github.io/learn/concepts/index.md#si-cassette))

Look at: `Gradient request` and the CP-REKS block ([`REKS_CPREKS_CONV`](https://reksstudio.github.io/learn/reference/index.md#reks_cpreks_conv)), then `Gradient of` and `NAC` ([Nuclear gradients of SSR states](https://reksstudio.github.io/learn/reference/properties/index.md#state-gradient), [Nonadiabatic coupling vectors](https://reksstudio.github.io/learn/reference/properties/index.md#nac))

Output: to be computed

Orbitals: orbitals will be shown

Check: `S1 *` in `Gradient request`; `SSR ROOT 1 GRADIENT CASSETTE 0` and `SSR NAC 0 1 CASSETTE 0` on the wavefunction

Try: set [`si_reks_grad`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_grad) to `[[0]]`: the returned gradient becomes that of S0; the coupling stays the same up to its sign ([Rules for all entries](https://reksstudio.github.io/learn/reference/properties/index.md#property-rules)). In both runs the other root of the NAC pair is a gradient target as well, as the partner ([`SI_REKS_GRAD`](https://reksstudio.github.io/learn/reference/index.md#si_reks_grad))

Why

One CP-REKS (Z-vector) solve covers every gradient and coupling target; the first entry of [`si_reks_grad`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_grad) is the followed root, and its gradient is returned. Optimizations and trajectories chain such calls: [Optimization and dynamics](https://reksstudio.github.io/learn/branch/dynamics/index.md#opt-dynamics).

Next step: [Procedure](https://reksstudio.github.io/learn/procedure/index.md#procedure) — How do I start my own molecule?

Branches from here: [Dipoles, charges, NTOs, relaxed properties and EKT](https://reksstudio.github.io/learn/branch/properties/index.md#case-props-c2h4) · [Gradient and relaxed properties of a triplet](https://reksstudio.github.io/learn/branch/properties/index.md#case-props-h2-triplet) · [S0 minimum of ethylene with DL-FIND](https://reksstudio.github.io/learn/branch/dynamics/index.md#case-opt-c2h4)

## Linked files

[inputs/first_c2h4_90_gradient.py](https://reksstudio.github.io/inputs/first_c2h4_90_gradient.py.txt)
