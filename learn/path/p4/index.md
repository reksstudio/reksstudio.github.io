# P4. Two pairs — REKS Studio Learn

HTML: <https://reksstudio.github.io/learn/path/p4/>

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/llms.txt>. Every page: `https://reksstudio.github.io/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/inputs/<file>.txt`.

[Learn](https://reksstudio.github.io/learn/index.md) › P4. Two pairs

# P4. Two pairs

The π window and the pairs: [Choose the pairs](https://reksstudio.github.io/learn/procedure/index.md#choose-pairs), [Inspect the orbitals](https://reksstudio.github.io/learn/procedure/index.md#inspect-orbitals). The REKS(4,4) steps (here and [P5. Spin states](https://reksstudio.github.io/learn/path/p5/index.md#p5)) add the all-α determinant to the SA ensemble, for SCF stability ([`SA_REKS_EXTRA`](https://reksstudio.github.io/learn/reference/index.md#sa_reks_extra)).

## Two pairs: butadiene, REKS(4,4) {#case-butadiene-44}

**With two bonds, which orbitals pair?**

Predict

Butadiene has four π orbitals. In scheme 0, which bonding orbital is paired with which antibonding one?

Input: [`first_butadiene_pairs.py`](https://reksstudio.github.io/inputs/first_butadiene_pairs.py.txt), stage `reks`; charge 0, multiplicity 1

```python
"""SI-SA-REKS(4,4) of s-trans-butadiene, BH&HLYP/6-31G(d), pi window from RKS orbitals.  # changed
python first_butadiene_pairs.py rks   -> RKS orbitals: first_butadiene_pairs_rks.wfn.npy + Molden file to inspect
python first_butadiene_pairs.py reks  -> REKS(4,4) with pairs (pi1, pi4) and (pi2, pi3)"""  # changed
import sys

import psi4

stage = sys.argv[1]
psi4.set_output_file(f"first_butadiene_pairs_{stage}.out", False)
psi4.set_memory("2 GB")

psi4.geometry("""
0 1
C  # changed
C 1 1.34  # changed
C 2 1.46 1 124.0  # changed
C 3 1.34 2 124.0 1 180.0  # changed
H 1 1.08 2 121.0 3 0.0  # changed
H 1 1.08 2 121.0 3 180.0  # changed
H 2 1.09 1 119.0 3 180.0  # changed
H 3 1.09 4 119.0 2 180.0  # changed
H 4 1.08 3 121.0 2 0.0  # changed
H 4 1.08 3 121.0 2 180.0  # changed
symmetry c1
""")
psi4.set_options({"basis": "6-31g(d)", "scf_type": "pk"})

if stage == "rks":
    psi4.set_options({"molden_write": True})
    e, wfn = psi4.energy("bhhlyp", return_wfn=True)
    wfn.to_file("first_butadiene_pairs_rks.wfn")
    print(f"E(RKS) = {e:.10f}")
else:
    psi4.set_options({  # changed
        "reference": "reks",  # changed
        "reks": [4, 4],  # changed
        "guess_active_window": ["HOMO-1", "HOMO", "LUMO", "LUMO+1"],  # changed
        "sa_reks_extra": [[1, 1, 1, 1, 0, 0, 0, 0]],                 # all-alpha determinant in SA, for SCF stability  # changed
    })  # changed
    e_sa, wfn = psi4.energy("bhhlyp", return_wfn=True, restart_file="first_butadiene_pairs_rks.wfn.npy")
    print(f"E(SA) = {e_sa:.10f}")
    print("S states:", wfn.array_variable("SSR ENERGIES K=0").np.ravel()[:3])  # changed
```

Highlighted: changed from [Twisted ethylene, REKS(2,2)](https://reksstudio.github.io/learn/path/p2/index.md#case-c2h4-90); removed:

```python
"""SSR(2,2) of 90-degree twisted ethylene, BH&HLYP/6-31G(d), seeded from RKS orbitals.
python first_c2h4_90.py reks  -> REKS(2,2) from them: first_c2h4_90_reks.wfn.npy"""
C   0.000000   0.000000   0.665000
C   0.000000   0.000000  -0.665000
H   0.000000   0.920840   1.231300
H   0.000000  -0.920840   1.231300
H   0.920840   0.000000  -1.231300
H  -0.920840   0.000000  -1.231300
    psi4.set_options({"reference": "reks", "reks": [2, 2]})
    wfn.to_file("first_c2h4_90_reks.wfn")
    print("SSR states:", wfn.array_variable("SSR ENERGIES K=0").np.ravel()[:3])
```

Run settings

Active space: catalog `reks44` = REKS(4,4); units `[2, 2]`: 2 × electron geminal (FON n); 2S = 0 (18 configurations), 2 (11 configurations), 4 (1 configuration)

SA: [`sa_reks_extra`](https://reksstudio.github.io/learn/reference/options/index.md#row-sa_reks_extra) `[[1, 1, 1, 1, 0, 0, 0, 0]]`

SI: default ([SI cassette](https://reksstudio.github.io/learn/concepts/index.md#si-cassette))

Look at: `MO columns` and `swaps` of the setup ([`GUESS_ACTIVE_WINDOW`](https://reksstudio.github.io/learn/reference/run-control/index.md#guess_active_window)), then `Pairing scheme 0` in `Post-Iterations`

Output: to be computed

Orbitals: orbitals will be shown

Check: every index of `Pairing scheme 0` belongs to the π set: pairs (π₁, π₄<sup>\*</sup>) and (π₂, π₃<sup>\*</sup>)

Try: replace `HOMO-1` by `HOMO-2` in the window: the SCF converges with the σ orbital 13A in a pair and E<sub>SA</sub> lower, by 1.2 mE<sub>h</sub> (runs without [`sa_reks_extra`](https://reksstudio.github.io/learn/reference/options/index.md#row-sa_reks_extra), below); the lower E<sub>SA</sub> is not the criterion ([Check the solution](https://reksstudio.github.io/learn/procedure/index.md#check-solution), [SCF converges instantly to a wrong energy after a restart](https://reksstudio.github.io/learn/diagnose/index.md#diag-wrong-window))

Why

Two pairs give two pairing schemes ([Pairing scheme](https://reksstudio.github.io/learn/concepts/index.md#pairing-scheme)); the window sets the token order, bonding orbitals first, their partners in reverse ([Choose the pairs](https://reksstudio.github.io/learn/procedure/index.md#choose-pairs)). Configurations of different schemes overlap: [SI Hamiltonian and overlap](https://reksstudio.github.io/learn/concepts/index.md#si-hamiltonian).

### Window, measured {#window-measured}

Runs of [`first_butadiene.py`](https://reksstudio.github.io/inputs/first_butadiene.py.txt), the same input without the [`sa_reks_extra`](https://reksstudio.github.io/learn/reference/options/index.md#row-sa_reks_extra) line. Butadiene with the π window:

```log
GUESS READ: active window ['HOMO-1', 'HOMO', 'LUMO', 'LUMO+1'] -> MO columns [13, 14, 15, 16] (swaps [])
[...]
      Pairing scheme 0: (a,d) & (b,c) = (14A,17A) & (15A,16A)

      14A     -0.363513  (a)    n_a =  1.999999    m_a =  1.999999
      15A     -0.263077  (b)    n_b =  1.999138    m_b =  1.998295
      16A     -0.049633  (c)    n_c =  0.000862    m_c =  0.001705
      17A      0.034326  (d)    n_d =  0.000001    m_d =  0.000001
[...]
@REKS Final Energy:  -155.67033132749052
```

The same seed with `HOMO-2` (13A, σ) in place of `HOMO-1` converges as well; 13A sits in the pair of 17A at n = 2, and E<sub>SA</sub> equals that of the cold start to 2·10<sup>−11</sup> E<sub>h</sub>:

```log
GUESS READ: active window ['HOMO-2', 'HOMO', 'LUMO', 'LUMO+1'] -> MO columns [13, 14, 15, 16] (swaps [(13, 12)])
[...]
      Pairing scheme 0: (a,d) & (b,c) = (13A,17A) & (15A,16A)

      13A     -0.416025  (a)    n_a =  2.000000    m_a =  2.000000
      15A     -0.262249  (b)    n_b =  1.998861    m_b =  1.998188
      16A     -0.049148  (c)    n_c =  0.001139    m_c =  0.001812
      17A     -0.006608  (d)    n_d =  0.000000    m_d =  0.000000
[...]
@REKS Final Energy:  -155.67155759813028
```

Next step: [P5. Spin states](https://reksstudio.github.io/learn/path/p5/index.md#p5) — Where is the triplet?

Branches from here: [Bond and lone pair: BH, REKS(4,5) 2 3](https://reksstudio.github.io/learn/branch/units/index.md#case-wide-bh-45) · [Hole geminal and pair: REKS(6,5) h3 2](https://reksstudio.github.io/learn/branch/units/index.md#case-hole-pair-65) · [TRAH for the whole SCF: states of BH](https://reksstudio.github.io/learn/branch/solvers/index.md#case-trah-bh)

## Linked files

[inputs/first_butadiene_pairs.py](https://reksstudio.github.io/inputs/first_butadiene_pairs.py.txt)

[inputs/first_butadiene.py](https://reksstudio.github.io/inputs/first_butadiene.py.txt)
