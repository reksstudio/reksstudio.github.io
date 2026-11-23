# P2. Broken π bond — REKS Studio Learn

HTML: <https://reksstudio.github.io/learn/path/p2/>

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/llms.txt>. Every page: `https://reksstudio.github.io/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/inputs/<file>.txt`.

[Learn](https://reksstudio.github.io/learn/index.md) › P2. Broken π bond

# P2. Broken π bond

Check the seed ([Seed orbitals](https://reksstudio.github.io/learn/procedure/index.md#seed-orbitals)); this case uses `scf_type pk`.

## Twisted ethylene, REKS(2,2) {#case-c2h4-90}

**Can a bond break without stretching?**

Predict

At 90° the two π orbitals no longer overlap. How many electrons does each of them hold?

Input: [`first_c2h4_90.py`](https://reksstudio.github.io/inputs/first_c2h4_90.py.txt), stage `reks`; charge 0, multiplicity 1

```python
"""SSR(2,2) of 90-degree twisted ethylene, BH&HLYP/6-31G(d), seeded from RKS orbitals.
python first_c2h4_90.py rks   -> RKS orbitals: first_c2h4_90_rks.wfn.npy + Molden file to inspect
python first_c2h4_90.py reks  -> REKS(2,2) from them: first_c2h4_90_reks.wfn.npy"""
import sys
import psi4

stage = sys.argv[1]
psi4.set_output_file(f"first_c2h4_90_{stage}.out", False)
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
    wfn.to_file("first_c2h4_90_rks.wfn")
    print(f"E(RKS) = {e:.10f}")
else:
    psi4.set_options({"reference": "reks", "reks": [2, 2]})
    e_sa, wfn = psi4.energy("bhhlyp", return_wfn=True, restart_file="first_c2h4_90_rks.wfn.npy")
    wfn.to_file("first_c2h4_90_reks.wfn")
    print(f"E(SA) = {e_sa:.10f}")
    print("SSR states:", wfn.array_variable("SSR ENERGIES K=0").np.ravel()[:3])
```

Run settings

Active space: catalog `reks22` = REKS(2,2); units `[2]`: electron geminal (FON n); 2S = 0 (3 configurations), 2 (1 configuration)

SA, SI: defaults ([SA-REKS ensemble and weights](https://reksstudio.github.io/learn/concepts/index.md#sa-ensemble), [SI cassette](https://reksstudio.github.io/learn/concepts/index.md#si-cassette))

Look at: the FON line of the π pair ([Fractional occupation numbers of the SA-REKS ensemble](https://reksstudio.github.io/learn/reference/properties/index.md#sa-fons)), then the S0, S1, S2 rows of the state table of the default SI cassette: their eV column is the energy above S0 ([SSR state energies](https://reksstudio.github.io/learn/reference/properties/index.md#ssr-energies))

Output: to be computed

Orbitals: orbitals will be shown

Check: both π FONs equal: one electron per orbital

Figure: the [ethylene twist](https://reksstudio.github.io/main/results/dissociation/c2h4/index.md#twist), the states along the torsion; this step is its 90° point

Try: replace the last line by `e = wfn.array_variable("SSR ENERGIES K=0").np.ravel(); print("S1 - S0 / eV:", (e[1] - e[0]) * psi4.constants.hartree2ev)` and compare with the eV column of S1

Why

`energy()` returns E<sub>SA</sub>, the ensemble energy ([SA-REKS ensemble and weights](https://reksstudio.github.io/learn/concepts/index.md#sa-ensemble)); the state energies are `SSR ENERGIES K=0`, K = 0 the first SI cassette ([SSR state energies](https://reksstudio.github.io/learn/reference/properties/index.md#ssr-energies)). The states S0, S1, S2 are the roots of the default SI cassette on 2S = 0 ([SI cassette](https://reksstudio.github.io/learn/concepts/index.md#si-cassette)), built in the SA orbitals. The stage `rks` supplies the orbitals: [P3. Seed orbitals](https://reksstudio.github.io/learn/path/p3/index.md#p3).

Next step: [P3. Seed orbitals](https://reksstudio.github.io/learn/path/p3/index.md#p3) — Where did the two orbitals come from?

Branches from here: [Small basis first: 6-31G(d) to cc-pVTZ](https://reksstudio.github.io/learn/branch/solvers/index.md#case-basis-c2h4) · [Integral engines: DF, CD, COSX, DIRECT](https://reksstudio.github.io/learn/branch/environment/index.md#case-env-integrals) · [Ghost atoms](https://reksstudio.github.io/learn/branch/environment/index.md#case-env-ghost)

## Linked files

[inputs/first_c2h4_90.py](https://reksstudio.github.io/inputs/first_c2h4_90.py.txt)
