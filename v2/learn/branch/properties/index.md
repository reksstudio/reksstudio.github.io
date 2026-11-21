# State properties — REKS Studio Learn

HTML: <https://reksstudio.github.io/v2/learn/branch/properties/>

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

[Learn](https://reksstudio.github.io/v2/learn/index.md) › State properties

# State properties

## State properties {#branch-properties}

Unrelaxed properties of the SSR states, relaxed properties from CP-REKS, EKT. Every property entry: [Properties](https://reksstudio.github.io/v2/learn/reference/properties/index.md#properties).

### Dipoles, charges, NTOs, relaxed properties and EKT {#case-props-c2h4}

**What does one SCF give besides energies?**

Input: [`first_c2h4_90_properties.py`](https://reksstudio.github.io/v2/inputs/first_c2h4_90_properties.py.txt), stage `reks`; charge 0, multiplicity 1

Active space: catalog `reks22` = REKS(2,2); units `[2]`: electron geminal (FON n); 2S = 0 (3 configurations), 2 (1 configuration)

SA, SI: defaults ([SA-REKS ensemble and weights](https://reksstudio.github.io/v2/learn/concepts/index.md#sa-ensemble), [SI cassette](https://reksstudio.github.io/v2/learn/concepts/index.md#si-cassette))

```python
"""SSR(2,2) of 90-degree twisted ethylene, BH&HLYP/6-31G(d): state properties, relaxed properties and EKT.  # changed
python first_c2h4_90_properties.py rks   -> RKS orbitals: first_c2h4_90_properties_rks.wfn.npy
python first_c2h4_90_properties.py reks  -> REKS(2,2) from them with the property blocks below"""  # changed
import sys

import psi4

stage = sys.argv[1]
psi4.set_output_file(f"first_c2h4_90_properties_{stage}.out", False)
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
    wfn.to_file("first_c2h4_90_properties_rks.wfn")
    print(f"E(RKS) = {e:.10f}")
else:
    psi4.set_options({"reference": "reks", "reks": [2, 2],
                      # + TRANSITION_DIPOLE, NO_OCCUPATIONS (always on)  # changed
                      "si_reks_analysis": ["DIPOLE", "RADICAL", "NTO", "MULTIPOLE(3)"],  # changed
                      # relaxed properties and EKT of S0, S1  # changed
                      "si_reks_property_for": [["S0..1"]],  # changed
                      "reks_ekt": True,  # changed
                      "molden_write": True})  # changed
    e_sa, wfn = psi4.energy("bhhlyp", return_wfn=True, restart_file="first_c2h4_90_properties_rks.wfn.npy")  # changed
    print(f"E(SA) = {e_sa:.10f}")  # changed
```

Highlighted: changed from [S1 gradient and S0/S1 coupling of twisted ethylene](https://reksstudio.github.io/v2/learn/path/p6/index.md#case-c2h4-gradient); removed:

```python
"""SSR(2,2) of 90-degree twisted ethylene, BH&HLYP/6-31G(d): S1 gradient and S0/S1 coupling, seeded from RKS orbitals.
python first_c2h4_90_gradient.py reks  -> REKS(2,2) from them: gradient of S1, NAC of S0/S1"""
                      "si_reks_grad": [[1]],          # gradient of S1
                      "si_reks_nac": [[[0, 1]]]})     # coupling of S0 and S1
    g, wfn = psi4.gradient("bhhlyp", return_wfn=True, restart_file="first_c2h4_90_gradient_rks.wfn.npy")
    print("S1 gradient:\n", g.np)
    print("NAC S0/S1:\n", wfn.array_variable("SSR NAC 0 1 CASSETTE 0").np)
```

Look at: `State analysis` in the setup block ([`SI_REKS_ANALYSIS`](https://reksstudio.github.io/v2/learn/reference/index.md#si_reks_analysis)), then the property blocks of the cassette ([Print order](https://reksstudio.github.io/v2/learn/reference/output/index.md#print-order))

Output: to be computed

Orbitals: orbitals will be shown

Check: S0 has equal charges on the two carbons in `Atomic charges (relaxed density matrix P^r)` and a dipole allowed by the point group ([Relaxed dipole, quadrupole and atomic charges](https://reksstudio.github.io/v2/learn/reference/properties/index.md#relaxed-properties), [Permanent and difference dipole moments (unrelaxed)](https://reksstudio.github.io/v2/learn/reference/properties/index.md#permanent-dipole))

Why

Unrelaxed properties use the state densities in the SA orbitals; relaxed properties add the orbital and FON response of CP-REKS ([Unrelaxed and relaxed densities](https://reksstudio.github.io/v2/learn/concepts/index.md#densities)).

Branches from here: [Fragment couplings](https://reksstudio.github.io/v2/learn/branch/environment/index.md#case-env-fragments)

### Gradient and relaxed properties of a triplet {#case-props-h2-triplet}

**How is a triplet state followed?**

Input: [`reks22_h2_triplet_gradient.dat`](https://reksstudio.github.io/v2/inputs/reks22_h2_triplet_gradient.dat.txt); charge 0, multiplicity 1; new file

Active space: catalog `reks22` = REKS(2,2); units `[2]`: electron geminal (FON n); 2S = 0 (3 configurations), 2 (1 configuration)

SA: [`sa_reks_configs`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-sa_reks_configs) `[[0, 1], [0]]`; [`sa_reks_weights`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-sa_reks_weights) `[0.3333333333333333, 0.3333333333333333, 0.3333333333333334]`

SI: [`si_reks_configs`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-si_reks_configs) `[[[0, 1]], [[0]]]`

```psithon
#! SI-SA-REKS(2,2) of H2 (R = 1.6 A), BH&HLYP/6-31G(d): singlet SA pool plus a triplet sector.
#! Analytic gradient of T1 (cassette 1) and its relaxed properties.

molecule h2 {
0 1
H 0.0 0.0 0.0
H 0.0 0.0 1.6
symmetry c1
no_reorient
no_com
}

set {
  basis                 6-31g(d)
  scf_type              pk
  reference             reks
  reks                  [2, 2]
  e_convergence         1e-10
  d_convergence         1e-8
  sa_reks_configs       [[0, 1], [0]]
  sa_reks_weights       [0.3333333333333333, 0.3333333333333333, 0.3333333333333334]
  si_reks_configs       [[[0, 1]], [[0]]]
  si_reks_grad          [[], [0]]
  si_reks_property_for  [[], ["T1"]]
}

grad, wfn = gradient('bhhlyp', return_wfn=True)
```

Look at: `Gradient request` and `Relaxed properties` ([Relaxed dipole, quadrupole and atomic charges](https://reksstudio.github.io/v2/learn/reference/properties/index.md#relaxed-properties))

Output: to be computed

Orbitals: orbitals will be shown

Check: `T1 *` in `Gradient request`

Why

[`si_reks_grad`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-si_reks_grad) `[[], [0]]` follows root 0 of the second cassette, 2S = 2 ([Cassette order](https://reksstudio.github.io/v2/learn/reference/index.md#cassette-order)).

## Linked files

[inputs/first_c2h4_90_properties.py](https://reksstudio.github.io/v2/inputs/first_c2h4_90_properties.py.txt)

[inputs/reks22_h2_triplet_gradient.dat](https://reksstudio.github.io/v2/inputs/reks22_h2_triplet_gradient.dat.txt)
