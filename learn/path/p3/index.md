# P3. Seed orbitals — REKS Studio Learn

HTML: <https://reksstudio.github.io/learn/path/p3/>

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/llms.txt>. Every page: `https://reksstudio.github.io/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/inputs/<file>.txt`.

[Learn](https://reksstudio.github.io/learn/index.md) › P3. Seed orbitals

# P3. Seed orbitals

## Twisted ethylene without a seed {#case-c2h4-90-cold}

**Where did the two orbitals come from?**

Predict

Without the seed the active slots are the HOMO and LUMO of the default guess. Will the π pair still split one electron per orbital?

Input: [`first_c2h4_90_cold.py`](https://reksstudio.github.io/inputs/first_c2h4_90_cold.py.txt); charge 0, multiplicity 1

```python
"""SSR(2,2) of 90-degree twisted ethylene, BH&HLYP/6-31G(d), cold start: no seed orbitals.  # changed
python first_c2h4_90_cold.py  -> REKS(2,2) from the default guess"""  # changed
import psi4

psi4.set_output_file("first_c2h4_90_cold.out", False)  # changed
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

psi4.set_options({"reference": "reks", "reks": [2, 2]})
e_sa, wfn = psi4.energy("bhhlyp", return_wfn=True)  # changed
print(f"E(SA) = {e_sa:.10f}")
print("SSR states:", wfn.array_variable("SSR ENERGIES K=0").np.ravel()[:3])
```

Highlighted: changed from [Twisted ethylene, REKS(2,2)](https://reksstudio.github.io/learn/path/p2/index.md#case-c2h4-90); removed:

```python
"""SSR(2,2) of 90-degree twisted ethylene, BH&HLYP/6-31G(d), seeded from RKS orbitals.
python first_c2h4_90.py rks   -> RKS orbitals: first_c2h4_90_rks.wfn.npy + Molden file to inspect
python first_c2h4_90.py reks  -> REKS(2,2) from them: first_c2h4_90_reks.wfn.npy"""
import sys
stage = sys.argv[1]
psi4.set_output_file(f"first_c2h4_90_{stage}.out", False)
if stage == "rks":
    psi4.set_options({"molden_write": True})
    e, wfn = psi4.energy("bhhlyp", return_wfn=True)
    wfn.to_file("first_c2h4_90_rks.wfn")
    print(f"E(RKS) = {e:.10f}")
else:
    e_sa, wfn = psi4.energy("bhhlyp", return_wfn=True, restart_file="first_c2h4_90_rks.wfn.npy")
    wfn.to_file("first_c2h4_90_reks.wfn")
```

Run settings

Active space: catalog `reks22` = REKS(2,2); units `[2]`: electron geminal (FON n); 2S = 0 (3 configurations), 2 (1 configuration)

SA, SI: defaults ([SA-REKS ensemble and weights](https://reksstudio.github.io/learn/concepts/index.md#sa-ensemble), [SI cassette](https://reksstudio.github.io/learn/concepts/index.md#si-cassette))

Look at: the FON line, and the atomic charges of S0 on the two carbons ([Atomic charges of the states (unrelaxed)](https://reksstudio.github.io/learn/reference/properties/index.md#atomic-charges))

Output: to be computed

Orbitals: [Seeds and cold start, measured](#seeds-measured)

Check: FONs 1/1 and equal charges on the two carbons; a pair at 2/0 with unequal charges is the cold-start solution ([FON 2.000000 / 0.000000 where 1 / 1 is expected, pinned at a bound](https://reksstudio.github.io/learn/diagnose/index.md#diag-fon-pinned))

Try: in `first_c2h4_90.py` set `scf_type` to `df` and run both stages: a seed from SAD with `scf_type df` has its HOMO on one carbon ([Seeds and cold start, measured](#seeds-measured))

Why

Without a seed the active slots are the guess MOs in energy order; a cold start of 90° C₂H₄ converges to n = 2/0, the closed-shell answer of ordinary DFT. The seed decides: the `scf_type df` RKS run from SAD converged 44 mE<sub>h</sub> above the `pk` run from SAD (−78.3184 against −78.3626 E<sub>h</sub>), with its HOMO on one carbon, and leads REKS to 2/0; `scf_type df` read from the `pk` solution gives the spread seed and 1/1 ([Seeds and cold start, measured](#seeds-measured)). The RKS seed and the checks: [Procedure](https://reksstudio.github.io/learn/procedure/index.md#procedure).

### Seeds and cold start, measured {#seeds-measured}

90° C₂H₄, BH\&HLYP/6-31G(d), the geometry of [`first_c2h4_90.py`](https://reksstudio.github.io/inputs/first_c2h4_90.py.txt), HOMO population on each carbon ([Seed orbitals](https://reksstudio.github.io/learn/procedure/index.md#seed-orbitals)):

| RKS run | E(RKS) / E<sub>h</sub> | HOMO on C1 / C2 | REKS(2,2) from it: n<sub>a</sub> / n<sub>b</sub> |
| - | - | - | - |
| `scf_type df`, SAD start | −78.31842739 | 0.026 / 0.858 | 2.000000 / 0.000000 |
| `scf_type df`, read from the `pk` solution | −78.36265006 | 0.440 / 0.440 | 1.000000 / 1.000000 |
| `scf_type pk`, SAD start | −78.36264503 | 0.440 / 0.440 | 1.000000 / 1.000000 |

The `scf_type df` run from SAD stops 44 mE<sub>h</sub> above the other two with its HOMO on one carbon; read from the `pk` solution, `scf_type df` reaches the spread seed. A localized seed is replaced by an RKS run that reaches the spread solution or by a seed from a smaller torsion, carried to the target geometry ([Scans](https://reksstudio.github.io/learn/procedure/index.md#first-scans)). An ROHF triplet seed of 90° C₂H₄ gives the cold-start solution (n<sub>a</sub> 0.000000, n<sub>b</sub> 2.000000, E<sub>SA</sub> −78.353499 E<sub>h</sub>).

90° C₂H₄ from the RKS seed:

```log
SCF Guess: REKS orbitals restored from previous computation (REKS::guess override).
[...]
Energy and wave function converged.
[...]
      Pairing scheme 0: (a,b) = (9A,8A)

       9A     -0.202302  (a)    n_a =  1.000000
       8A     -0.202302  (b)    n_b =  1.000000
[...]
@REKS Final Energy:   -78.36439426527214
```

S0 of this solution: C1 = C2 = −0.358359 (Mulliken), |μ| = 0.000000 e a<sub>0</sub>. Cold start: C1 = −0.148907, C2 = −0.561394, |μ| = 0.263525 e a<sub>0</sub>.

RKS seed

cold start

![90-degree ethylene REKS active orbital b (8A) from the RKS seed](https://reksstudio.github.io/figures/c2h4_90_rks_b.svg)**b** 8A · n 1.000000 · −0.2023

![90-degree ethylene REKS active orbital b (8A) from a cold start](https://reksstudio.github.io/figures/c2h4_90_sad_b.svg)**b** 8A · n 0.000000 · −0.2260

![90-degree ethylene REKS active orbital a (9A) from the RKS seed](https://reksstudio.github.io/figures/c2h4_90_rks_a.svg)**a** 9A · n 1.000000 · −0.2023

![90-degree ethylene REKS active orbital a (9A) from a cold start](https://reksstudio.github.io/figures/c2h4_90_sad_a.svg)**a** 9A · n 2.000000 · −0.1784

90° C₂H₄, REKS(2,2) active pair (a, b), slice through the C–C axis and the bisector of the two CH₂ planes, blue + / copper −; slot, MO, FON, ε / E<sub>h</sub>.

Next step: [P4. Two pairs](https://reksstudio.github.io/learn/path/p4/index.md#p4) — With two bonds, which orbitals pair?

Branches from here: [Delocalizing localized active orbitals](https://reksstudio.github.io/learn/branch/solvers/index.md#case-deloc)

## Linked files

[inputs/first_c2h4_90_cold.py](https://reksstudio.github.io/inputs/first_c2h4_90_cold.py.txt)

[inputs/first_c2h4_90.py](https://reksstudio.github.io/inputs/first_c2h4_90.py.txt)
