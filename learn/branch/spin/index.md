# Spin manifolds and J — REKS Studio Learn

HTML: <https://reksstudio.github.io/learn/branch/spin/>

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/llms.txt>. Every page: `https://reksstudio.github.io/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/inputs/<file>.txt`.

[Learn](https://reksstudio.github.io/learn/index.md) › Spin manifolds and J

# Spin manifolds and J

## Spin manifolds and J {#branch-spin}

Every manifold of the catalog from one set of SA orbitals: [Spin manifold and run sector](https://reksstudio.github.io/learn/concepts/index.md#run-sector); input patterns and labels: [Spin manifolds (2S) and multi-manifold runs](https://reksstudio.github.io/learn/reference/index.md#spin-manifolds).

### Singlets and triplets of linear H₄ {#case-h4-singlet-triplet}

**How are the singlet and the triplet cassette set side by side?**

Input: [`reks44_h4_singlet_triplet.py`](https://reksstudio.github.io/inputs/reks44_h4_singlet_triplet.py.txt); charge 0, multiplicity 1; new file

Active space: catalog `reks44` = REKS(4,4); units `[2, 2]`: 2 × electron geminal (FON n); 2S = 0 (18 configurations), 2 (11 configurations), 4 (1 configuration)

SA: [`sa_reks_extra`](https://reksstudio.github.io/learn/reference/options/index.md#row-sa_reks_extra) `[[1, 1, 1, 1, 0, 0, 0, 0]]`

SI: [`si_reks_configs`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_configs) `[[["full"]], [["full"]]]`

```python
"""SI-SA-REKS(4,4) of linear H4 (R = 1.6 A), BH&HLYP/6-31G: default SA pool + all-alpha determinant,
one full SI cassette per manifold (2S = 0, 2)."""
import psi4

psi4.set_output_file("reks44_h4_singlet_triplet.out", False)
psi4.set_memory("1 GB")

psi4.geometry("""
0 1
H 0.0 0.0 0.0
H 0.0 0.0 1.6
H 0.0 0.0 3.2
H 0.0 0.0 4.8
symmetry c1
""")

psi4.set_options({
    "basis": "6-31g",
    "reference": "reks",
    "reks": [4, 4],
    "reks_use_trah": True,
    "e_convergence": 1e-8,
    "d_convergence": 1e-6,
    "sa_reks_extra": [[1, 1, 1, 1, 0, 0, 0, 0]],
    "si_reks_configs": [[["full"]], [["full"]]],
})

e_sa, wfn = psi4.energy("bhhlyp", return_wfn=True)
print(f"E(SA) = {e_sa:.10f}")
print("S states:", wfn.array_variable("SSR ENERGIES K=0").np.ravel()[:3])
print("T states:", wfn.array_variable("REKS SECTOR 1 SSR ENERGIES K=1").np.ravel()[:3])
print("J [Eh]  :", wfn.array_variable("REKS HEISENBERG J").np.ravel())
```

Look at: the two `Adiabatic states` blocks and `Spin-state energetics` ([Spin-state gaps and Heisenberg J](https://reksstudio.github.io/learn/reference/properties/index.md#spin-state-energetics))

Output: to be computed

Orbitals: orbitals will be shown

Check: cassette 0 on 2S = 0, cassette 1 on 2S = 2, both from one SCF

Try: replace [`si_reks_configs`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_configs) by [`"si_reks_2spin": [2]`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_2spin): triplet states only; replace the three prints by `print("T states:", wfn.array_variable("REKS SECTOR 1 SSR ENERGIES K=0").np.ravel()[:3])`, since J needs both manifolds ([Input patterns](https://reksstudio.github.io/learn/reference/index.md#input-patterns))

Why

Two SI groups without [`si_reks_2spin`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_2spin) take the ladder: group 0 → 2S = 0, group 1 → 2S = 2 ([Spin manifolds (2S) and multi-manifold runs](https://reksstudio.github.io/learn/reference/index.md#spin-manifolds)).

Branches from here: [Singlets, triplets and the quintet of linear H₄](#case-h4-heisenberg)

### Singlets, triplets and the quintet of linear H₄ {#case-h4-heisenberg}

**What does the quintet manifold add?**

Input: [`reks44_h4_heisenberg.dat`](https://reksstudio.github.io/inputs/reks44_h4_heisenberg.dat.txt); charge 0, multiplicity 1; new file

Active space: catalog `reks44` = REKS(4,4); units `[2, 2]`: 2 × electron geminal (FON n); 2S = 0 (18 configurations), 2 (11 configurations), 4 (1 configuration)

SA: [`sa_reks_extra`](https://reksstudio.github.io/learn/reference/options/index.md#row-sa_reks_extra) `[[1, 1, 1, 1, 0, 0, 0, 0]]`

SI: [`si_reks_configs`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_configs) `[[[full]], [[full]], [[full]]]`

```psithon
#! SI-SA-REKS(4,4) of linear H4 (R = 1.6 A), BH&HLYP/6-31G: default SA pool + all-alpha determinant,
#! full SI cassettes on 2S = 0, 2, 4. Prints the Spin-state energetics table (J for H = -2J S_A.S_B).

molecule h4 {
0 1
H 0.0 0.0 0.0
H 0.0 0.0 1.6
H 0.0 0.0 3.2
H 0.0 0.0 4.8
symmetry c1
}

set {
  basis            6-31g
  scf_type         pk
  reference        reks
  reks             [4, 4]
  reks_use_trah    true
  guess            sad
  maxiter          150
  e_convergence    1e-10
  d_convergence    1e-8
  sa_reks_extra    [[1, 1, 1, 1, 0, 0, 0, 0]]
  si_reks_configs  [[[full]], [[full]], [[full]]]
}

energy('bhhlyp')
```

Look at: `Spin-state energetics` ([Spin-state gaps and Heisenberg J](https://reksstudio.github.io/learn/reference/properties/index.md#spin-state-energetics))

Output: to be computed

Orbitals: orbitals will be shown

Check: three cassettes; the quintet cassette holds one configuration, TT_SPS_0 ([Input patterns](https://reksstudio.github.io/learn/reference/index.md#input-patterns))

Why

J is a coupling constant only for two states with the same open-shell orbitals ([Spin-state gaps and Heisenberg J](https://reksstudio.github.io/learn/reference/properties/index.md#spin-state-energetics)).

### Spin ladder of hexatriene, 2S = 0 to 6 {#case-hexatriene-ladder}

**Which states does one SCF of REKS(6,6) give on every manifold?**

Input: [`first_hexatriene.py`](https://reksstudio.github.io/inputs/first_hexatriene.py.txt), stage `reks`; charge 0, multiplicity 1

Active space: catalog `reks66` = REKS(6,6); units `[2, 2, 2]`: 3 × electron geminal (FON n); 2S = 0 (161 configurations), 2 (153 configurations), 4 (41 configurations), 6 (1 configuration)

SA: [`sa_reks_extra`](https://reksstudio.github.io/learn/reference/options/index.md#row-sa_reks_extra) `[[1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]]`

SI: [`si_reks_configs`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_configs) `[[["full"]], [["full"]], [["full"]], [["full"]]]`; [`si_reks_2spin`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_2spin) `[0, 2, 4, 6]`

```python
"""SI-SA-REKS(6,6) of all-trans-hexatriene, BH&HLYP/6-31G(d), pi window from RKS orbitals; singlet, triplet,  # changed
quintet and septet states from one SCF.  # changed
python first_hexatriene.py rks   -> RKS orbitals: first_hexatriene_rks.wfn.npy + Molden file to inspect
python first_hexatriene.py reks  -> REKS(6,6) with pairs (pi1, pi6) (pi2, pi5) (pi3, pi4); LUMO+2 is sigma*"""  # changed
import sys
import psi4

stage = sys.argv[1]
psi4.set_output_file(f"first_hexatriene_{stage}.out", False)
psi4.set_memory("4 GB")  # changed

psi4.geometry("""
0 1
C  0.60339339  0.29949761 0.0  # changed
C -0.60339339 -0.29949761 0.0  # changed
C  1.86027300 -0.41756279 0.0  # changed
C -1.86027300  0.41756279 0.0  # changed
C  3.06217998  0.17861930 0.0  # changed
C -3.06217998 -0.17861930 0.0  # changed
H  0.65325904  1.38424312 0.0  # changed
H -0.65325904 -1.38424312 0.0  # changed
H  1.80329639 -1.50000213 0.0  # changed
H -1.80329639  1.50000213 0.0  # changed
H  3.14885369  1.25746431 0.0  # changed
H -3.14885369 -1.25746431 0.0  # changed
H  3.97661154 -0.39587705 0.0  # changed
H -3.97661154  0.39587705 0.0  # changed
symmetry c1
""")
psi4.set_options({"basis": "6-31g(d)", "scf_type": "pk"})

if stage == "rks":
    psi4.set_options({"molden_write": True})
    e, wfn = psi4.energy("bhhlyp", return_wfn=True)
    wfn.to_file("first_hexatriene_rks.wfn")
    print(f"E(RKS) = {e:.10f}")
else:
    psi4.set_options({
        "reference": "reks",
        "reks": [6, 6],  # changed
        "guess_active_window": ["HOMO-2", "HOMO-1", "HOMO", "LUMO", "LUMO+1", "LUMO+3"],  # changed
        "sa_reks_extra": [[1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]],     # all-alpha determinant in SA  # changed
        "si_reks_configs": [[["full"]], [["full"]], [["full"]], [["full"]]],  # changed
        "si_reks_2spin": [0, 2, 4, 6],  # changed
    })
    e_sa, wfn = psi4.energy("bhhlyp", return_wfn=True, restart_file="first_hexatriene_rks.wfn.npy")
    print(f"E(SA) = {e_sa:.10f}")
```

Highlighted: changed from [Singlets, triplets and the quintet of butadiene](https://reksstudio.github.io/learn/path/p5/index.md#case-butadiene-spin); removed:

```python
"""SI-SA-REKS(4,4) of s-trans-butadiene, BH&HLYP/6-31G(d), pi window from RKS orbitals; SI on 2S = 0, 2, 4.
python first_butadiene_spin.py reks  -> REKS(4,4) with pairs (pi1, pi4) and (pi2, pi3)"""
psi4.set_memory("2 GB")
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
        "reks": [4, 4],
        "guess_active_window": ["HOMO-1", "HOMO", "LUMO", "LUMO+1"],
        "sa_reks_extra": [[1, 1, 1, 1, 0, 0, 0, 0]],                 # all-alpha determinant in SA, for SCF stability
        "si_reks_configs": [[["full"]], [["full"]], [["full"]]],
        "si_reks_2spin": [0, 2, 4],
    print("S states:", wfn.array_variable("SSR ENERGIES K=0").np.ravel()[:3])
    print("T states:", wfn.array_variable("REKS SECTOR 1 SSR ENERGIES K=1").np.ravel()[:3])
    print("Q states:", wfn.array_variable("REKS SECTOR 2 SSR ENERGIES K=2").np.ravel()[:3])
```

Look at: the `swaps` of the window, `State summary` and `Spin-state energetics`

Output: to be computed

Orbitals: orbitals will be shown

Check: the window swaps LUMO+3 (π₆<sup>\*</sup>) into the active space; four cassettes, 2S = 0, 2, 4, 6

Try: `LUMO+2` in place of `LUMO+3`: the SCF converges as well, with a σ orbital in the active space ([Inspect the orbitals](https://reksstudio.github.io/learn/procedure/index.md#inspect-orbitals))

Why

REKS(M,M) holds the manifolds 2S = 0, 2, …, M; a configuration of 2S = 2k carries k triplet geminals, prefixes T\_, TT\_, TTT\_ ([Spin manifold and run sector](https://reksstudio.github.io/learn/concepts/index.md#run-sector)).

Branches from here: [A triplet configuration in the SA ensemble](#case-hexatriene-sa-t1)

### A triplet configuration in the SA ensemble {#case-hexatriene-sa-t1}

**What changes when a triplet configuration enters the orbital optimization?**

Input: [`first_hexatriene_sa_t1.py`](https://reksstudio.github.io/inputs/first_hexatriene_sa_t1.py.txt), stage `reks`; charge 0, multiplicity 1

Active space: catalog `reks66` = REKS(6,6); units `[2, 2, 2]`: 3 × electron geminal (FON n); 2S = 0 (161 configurations), 2 (153 configurations), 4 (41 configurations), 6 (1 configuration)

SA: [`sa_reks_configs`](https://reksstudio.github.io/learn/reference/options/index.md#row-sa_reks_configs) `[["PPS1", "OSS1", "OSS2", "OSS3"], ["T_PPS3"]]`; [`sa_reks_2spin`](https://reksstudio.github.io/learn/reference/options/index.md#row-sa_reks_2spin) `[0, 2]`; [`sa_reks_extra`](https://reksstudio.github.io/learn/reference/options/index.md#row-sa_reks_extra) `[[1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]]`

SI: [`si_reks_configs`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_configs) `[[["full"]], [["full"]], [["full"]], [["full"]]]`; [`si_reks_2spin`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_2spin) `[0, 2, 4, 6]`

```python
"""SI-SA-REKS(6,6) of all-trans-hexatriene, BH&HLYP/6-31G(d), pi window from RKS orbitals; T_PPS3 (main  # changed
configuration of T1) added to the SA ensemble on 2S = 2.  # changed
python first_hexatriene_sa_t1.py rks   -> RKS orbitals: first_hexatriene_sa_t1_rks.wfn.npy + Molden file to inspect
python first_hexatriene_sa_t1.py reks  -> REKS(6,6) with pairs (pi1, pi6) (pi2, pi5) (pi3, pi4); LUMO+2 is sigma*"""
import sys

import psi4

stage = sys.argv[1]
psi4.set_output_file(f"first_hexatriene_sa_t1_{stage}.out", False)
psi4.set_memory("4 GB")

psi4.geometry("""
0 1
C  0.60339339  0.29949761 0.0
C -0.60339339 -0.29949761 0.0
C  1.86027300 -0.41756279 0.0
C -1.86027300  0.41756279 0.0
C  3.06217998  0.17861930 0.0
C -3.06217998 -0.17861930 0.0
H  0.65325904  1.38424312 0.0
H -0.65325904 -1.38424312 0.0
H  1.80329639 -1.50000213 0.0
H -1.80329639  1.50000213 0.0
H  3.14885369  1.25746431 0.0
H -3.14885369 -1.25746431 0.0
H  3.97661154 -0.39587705 0.0
H -3.97661154  0.39587705 0.0
symmetry c1
""")
psi4.set_options({"basis": "6-31g(d)", "scf_type": "pk"})

if stage == "rks":
    psi4.set_options({"molden_write": True})
    e, wfn = psi4.energy("bhhlyp", return_wfn=True)
    wfn.to_file("first_hexatriene_sa_t1_rks.wfn")
    print(f"E(RKS) = {e:.10f}")
else:
    psi4.set_options({
        "reference": "reks",
        "reks": [6, 6],
        "guess_active_window": ["HOMO-2", "HOMO-1", "HOMO", "LUMO", "LUMO+1", "LUMO+3"],
        "sa_reks_extra": [[1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]],     # all-alpha determinant in SA
        "sa_reks_configs": [["PPS1", "OSS1", "OSS2", "OSS3"], ["T_PPS3"]],  # changed
        "sa_reks_2spin": [0, 2],  # changed
        "si_reks_configs": [[["full"]], [["full"]], [["full"]], [["full"]]],
        "si_reks_2spin": [0, 2, 4, 6],
    })
    e_sa, wfn = psi4.energy("bhhlyp", return_wfn=True, restart_file="first_hexatriene_sa_t1_rks.wfn.npy")
    print(f"E(SA) = {e_sa:.10f}")
```

Highlighted: changed from [Spin ladder of hexatriene, 2S = 0 to 6](#case-hexatriene-ladder); removed:

```python
"""SI-SA-REKS(6,6) of all-trans-hexatriene, BH&HLYP/6-31G(d), pi window from RKS orbitals; singlet, triplet,
quintet and septet states from one SCF.
```

Look at: `SA pool` in the setup, then T1 and S0 in `State summary`

Output: to be computed

Orbitals: orbitals will be shown

Check: SA blocks on 2S = 0 and 2S = 2 in `SA pool`

Why

A configuration added to the SA ensemble enters the orbital optimization ([SA-REKS ensemble and weights](https://reksstudio.github.io/learn/concepts/index.md#sa-ensemble)); T_PPS3 is the main configuration of T1.

## Linked files

[inputs/reks44_h4_singlet_triplet.py](https://reksstudio.github.io/inputs/reks44_h4_singlet_triplet.py.txt)

[inputs/reks44_h4_heisenberg.dat](https://reksstudio.github.io/inputs/reks44_h4_heisenberg.dat.txt)

[inputs/first_hexatriene.py](https://reksstudio.github.io/inputs/first_hexatriene.py.txt)

[inputs/first_hexatriene_sa_t1.py](https://reksstudio.github.io/inputs/first_hexatriene_sa_t1.py.txt)
