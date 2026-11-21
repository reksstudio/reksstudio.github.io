# P5. Spin states — REKS Studio Learn

HTML: <https://reksstudio.github.io/v2/learn/path/p5/>

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

[Learn](https://reksstudio.github.io/v2/learn/index.md) › P5. Spin states

# P5. Spin states

The input of [P4. Two pairs](https://reksstudio.github.io/v2/learn/path/p4/index.md#p4) with SI cassettes on 2S = 0, 2 and 4.

## Singlets, triplets and the quintet of butadiene {#case-butadiene-spin}

**Where is the triplet?**

Predict

One SCF, three spin manifolds. Which configurations hold the lowest triplet, and does it lie below S1?

Input: [`first_butadiene_spin.py`](https://reksstudio.github.io/v2/inputs/first_butadiene_spin.py.txt), stage `reks`; charge 0, multiplicity 1

```python
"""SI-SA-REKS(4,4) of s-trans-butadiene, BH&HLYP/6-31G(d), pi window from RKS orbitals; SI on 2S = 0, 2, 4.  # changed
python first_butadiene_spin.py rks   -> RKS orbitals: first_butadiene_spin_rks.wfn.npy + Molden file to inspect
python first_butadiene_spin.py reks  -> REKS(4,4) with pairs (pi1, pi4) and (pi2, pi3)"""
import sys

import psi4

stage = sys.argv[1]
psi4.set_output_file(f"first_butadiene_spin_{stage}.out", False)
psi4.set_memory("2 GB")

psi4.geometry("""
0 1
C
C 1 1.34
C 2 1.46 1 124.0
C 3 1.34 2 124.0 1 180.0
H 1 1.08 2 121.0 3 0.0
H 1 1.08 2 121.0 3 180.0
H 2 1.09 1 119.0 3 180.0
H 3 1.09 4 119.0 2 180.0
H 4 1.08 3 121.0 2 0.0
H 4 1.08 3 121.0 2 180.0
symmetry c1
""")
psi4.set_options({"basis": "6-31g(d)", "scf_type": "pk"})

if stage == "rks":
    psi4.set_options({"molden_write": True})
    e, wfn = psi4.energy("bhhlyp", return_wfn=True)
    wfn.to_file("first_butadiene_spin_rks.wfn")
    print(f"E(RKS) = {e:.10f}")
else:
    psi4.set_options({
        "reference": "reks",
        "reks": [4, 4],
        "guess_active_window": ["HOMO-1", "HOMO", "LUMO", "LUMO+1"],
        "sa_reks_extra": [[1, 1, 1, 1, 0, 0, 0, 0]],                 # all-alpha determinant in SA, for SCF stability
        "si_reks_configs": [[["full"]], [["full"]], [["full"]]],  # changed
        "si_reks_2spin": [0, 2, 4],  # changed
    })
    e_sa, wfn = psi4.energy("bhhlyp", return_wfn=True, restart_file="first_butadiene_spin_rks.wfn.npy")
    print(f"E(SA) = {e_sa:.10f}")
    print("S states:", wfn.array_variable("SSR ENERGIES K=0").np.ravel()[:3])
    print("T states:", wfn.array_variable("REKS SECTOR 1 SSR ENERGIES K=1").np.ravel()[:3])  # changed
    print("Q states:", wfn.array_variable("REKS SECTOR 2 SSR ENERGIES K=2").np.ravel()[:3])  # changed
```

Highlighted: changed from [Two pairs: butadiene, REKS(4,4)](https://reksstudio.github.io/v2/learn/path/p4/index.md#case-butadiene-44); removed:

```python
"""SI-SA-REKS(4,4) of s-trans-butadiene, BH&HLYP/6-31G(d), pi window from RKS orbitals.
```

Run settings

Active space: catalog `reks44` = REKS(4,4); units `[2, 2]`: 2 × electron geminal (FON n); 2S = 0 (18 configurations), 2 (11 configurations), 4 (1 configuration)

SA: [`sa_reks_extra`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-sa_reks_extra) `[[1, 1, 1, 1, 0, 0, 0, 0]]`

SI: [`si_reks_configs`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-si_reks_configs) `[[["full"]], [["full"]], [["full"]]]`; [`si_reks_2spin`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-si_reks_2spin) `[0, 2, 4]`

Look at: `State summary`, all printed roots by energy, and `Spin-state energetics` ([Spin-state gaps and Heisenberg J](https://reksstudio.github.io/v2/learn/reference/properties/index.md#spin-state-energetics))

Output: to be computed

Orbitals: orbitals will be shown

Check: one SCF; three cassettes, 2S = 0, 2, 4; roots labelled S, T, Q ([Adiabatic (SSR) states](https://reksstudio.github.io/v2/learn/concepts/index.md#ssr-states))

Try: type [`si_reks_2spin`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-si_reks_2spin) as `[2, 0, 4]`: the triplet block is printed first and the energies refer to T1, while the index K stays in ascending 2S ([Cassette order](https://reksstudio.github.io/v2/learn/reference/index.md#cassette-order))

Why

A state of spin S > 0 needs no SCF of its own: it is a root of an SI cassette on manifold 2S, built in the converged SA orbitals ([Spin manifold and run sector](https://reksstudio.github.io/v2/learn/concepts/index.md#run-sector)). REKS(4,4) holds 2S = 0, 2, 4; the states of manifold 2S are stored under its run sector and cassette K ([SSR state energies](https://reksstudio.github.io/v2/learn/reference/properties/index.md#ssr-energies)).

Next step: [P6. Forces](https://reksstudio.github.io/v2/learn/path/p6/index.md#p6) — What are the forces on the atoms in a state?

Branches from here: [Implicit SOMO: REKS(3,3) 2 d1](https://reksstudio.github.io/v2/learn/branch/units/index.md#case-odd-33) · [Singlets and triplets of linear H₄](https://reksstudio.github.io/v2/learn/branch/spin/index.md#case-h4-singlet-triplet) · [Spin ladder of hexatriene, 2S = 0 to 6](https://reksstudio.github.io/v2/learn/branch/spin/index.md#case-hexatriene-ladder)

## Linked files

[inputs/first_butadiene_spin.py](https://reksstudio.github.io/v2/inputs/first_butadiene_spin.py.txt)
