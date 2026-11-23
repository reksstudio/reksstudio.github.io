# Solvers and control — REKS Studio Learn

HTML: <https://reksstudio.github.io/learn/branch/solvers/>

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/llms.txt>. Every page: `https://reksstudio.github.io/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/inputs/<file>.txt`.

[Learn](https://reksstudio.github.io/learn/index.md) › Solvers and control

# Solvers and control

## Solvers and control {#branch-solvers}

SCF engines ([SCF convergence engines](https://reksstudio.github.io/learn/reference/run-control/index.md#scf-engines)), FON bounds ([Fractional occupation numbers (FONs)](https://reksstudio.github.io/learn/reference/run-control/index.md#fons)), geminal delocalization ([Geminal delocalization](https://reksstudio.github.io/learn/reference/run-control/index.md#geminal-deloc)), the SI eigensolver ([SI eigensolver](https://reksstudio.github.io/learn/concepts/index.md#si-solver)), SA pools and cassettes ([SA pool and SI cassettes](https://reksstudio.github.io/learn/reference/index.md#selecting)), restarts and projection ([Guesses and restarts](https://reksstudio.github.io/learn/reference/run-control/index.md#guesses)).

### TRAH for the whole SCF: states of BH {#case-trah-bh}

**How is the trust-region engine switched on?**

Input: [`wide_bh_states.py`](https://reksstudio.github.io/inputs/wide_bh_states.py.txt), stage `sa23`; charge 0, multiplicity 1; new file

Active space: catalog `reks23_u3` = REKS(2,3); units `[3]`: electron geminal (FON n); 2S = 0 (7 configurations), 2 (3 configurations)

SA: [`sa_reks_extra`](https://reksstudio.github.io/learn/reference/options/index.md#row-sa_reks_extra) set in the script

SI: [`si_reks_configs`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_configs) `[[["full"]], [["full"]]]`; [`si_reks_2spin`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_2spin) `[0, 2]`

```python
"""BH states from SI-SA-REKS(2,3) over the lone pair and both pi orbitals, BH&HLYP/cc-pVDZ, RKS seed.
python wide_bh_states.py rks      -> RKS seed wide_bh_rks.wfn.npy
python wide_bh_states.py sa23     -> SA: default pool + all-alpha |ab|, |ac|, |bc|; SI on 2S = 0 and 2S = 2
python wide_bh_states.py sa23_ab  -> the same with |ab| only"""
import sys
import psi4

stage = sys.argv[1]
psi4.set_output_file(f"wide_bh_states_{stage}.out", False)
psi4.set_memory("2 GB")

psi4.geometry("""
0 1
B   0.0   0.0   0.0
H   0.0   0.0   1.2324
symmetry c1
""")
psi4.set_options({"basis": "cc-pvdz", "scf_type": "pk", "e_convergence": 1e-10, "d_convergence": 1e-8})

if stage == "rks":
    e, wfn = psi4.energy("bhhlyp", return_wfn=True)
    wfn.to_file("wide_bh_rks.wfn")
    print(f"E(RKS) = {e:.10f}")
    sys.exit()

# all-alpha determinants: alpha occupations of a, b, c, then beta occupations
extra = [[1, 1, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0]]
psi4.set_options({"reference": "reks", "reks": [2, 3], "reks_geminal_widths": [3],
                  "sa_reks_extra": extra if stage == "sa23" else extra[:1],
                  "si_reks_configs": [[["full"]], [["full"]]], "si_reks_2spin": [0, 2],
                  "reks_use_trah": True, "reks_gvb_diis": False, "maxiter": 200})
e_sa, wfn = psi4.energy("bhhlyp", return_wfn=True, restart_file="wide_bh_rks.wfn.npy")
print(f"E(SA) = {e_sa:.10f}")
```

Look at: the trace tag of every line of `Iterations` ([The three engines](https://reksstudio.github.io/learn/reference/run-control/index.md#engines))

Output: to be computed

Orbitals: orbitals will be shown

Check: every iteration tagged `TRAH`

Try: stage `sa23_ab`: the all-α determinant |ab| alone in the SA ensemble

Why

[`reks_use_trah`](https://reksstudio.github.io/learn/reference/options/index.md#row-reks_use_trah) true with [`reks_gvb_diis`](https://reksstudio.github.io/learn/reference/options/index.md#row-reks_gvb_diis) false runs TRAH for the entire SCF ([The three engines](https://reksstudio.github.io/learn/reference/run-control/index.md#engines)). The three all-α determinants of the geminal are added to the SA ensemble for the orbital shape: with |ab| alone the ensemble favours one π ([`SA_REKS_EXTRA`](https://reksstudio.github.io/learn/reference/index.md#sa_reks_extra)).

### Four SI cassettes from one SCF {#case-cassettes-h4}

**How much does the choice of cassette change the states?**

Input: [`reks44_h4_cassettes.py`](https://reksstudio.github.io/inputs/reks44_h4_cassettes.py.txt); charge 0, multiplicity 1; new file

Active space: catalog `reks44` = REKS(4,4); units `[2, 2]`: 2 × electron geminal (FON n); 2S = 0 (18 configurations), 2 (11 configurations), 4 (1 configuration)

SA: [`sa_reks_configs`](https://reksstudio.github.io/learn/reference/options/index.md#row-sa_reks_configs) `["PPS1", "OSS1", "OSS2"]`; [`sa_reks_weights`](https://reksstudio.github.io/learn/reference/options/index.md#row-sa_reks_weights) `[0.5, 0.25, 0.25]`

SI: [`si_reks_configs`](https://reksstudio.github.io/learn/reference/options/index.md#row-si_reks_configs) `[[["PPS1", "PPS2", "OSS1", "OSS2"], ["single-scheme"], ["mixed-scheme"], ["full"]]]`

```python
"""SI-SA-REKS(4,4) of linear H4 (H-H 0.9 A), HF/STO-3G: explicit SA pool and weights, four SI cassettes."""
import psi4

psi4.set_output_file("reks44_h4_cassettes.out", False)
psi4.set_memory("1 GB")

r = 0.9
psi4.geometry(f"""
0 1
H 0 0 0
H 0 0 {r}
H 0 0 {2 * r}
H 0 0 {3 * r}
symmetry c1
""")

psi4.set_options({
    "basis":           "sto-3g",
    "reference":       "reks",
    "reks":            [4, 4],
    "sa_reks_configs": ["PPS1", "OSS1", "OSS2"],
    "sa_reks_weights": [0.5, 0.25, 0.25],
    "si_reks_configs": [[["PPS1", "PPS2", "OSS1", "OSS2"], ["single-scheme"], ["mixed-scheme"], ["full"]]],
})
e_sa, wfn = psi4.energy("scf", return_wfn=True)
print(f"E(SA) = {e_sa:.10f}")
for k in range(4):
    print(f"cassette {k}:", wfn.array_variable(f"SSR ENERGIES K={k}").np.ravel()[:3])
```

Look at: the four `Adiabatic states` blocks and `Alternative configuration lists`

Output: to be computed

Orbitals: orbitals will be shown

Check: one E<sub>SA</sub>; one `Adiabatic states` block per cassette; S0 of each later cassette matched to the first in `Alternative configuration lists`

Why

Each cassette is its own eigenproblem in the same SA orbitals ([SI cassette](https://reksstudio.github.io/learn/concepts/index.md#si-cassette)); `single-scheme` and `mixed-scheme` are bulk tokens ([Bulk tokens and pattern syntax](https://reksstudio.github.io/learn/reference/index.md#bulk-tokens)). The run is described in [Explicit SA pool and SI cassettes](https://reksstudio.github.io/learn/reference/index.md#explicit-input).

### Scan with restarts: linear H₄ {#case-scan-h4}

**How does one point seed the next?**

Input: [`reks44_h4_scan.py`](https://reksstudio.github.io/inputs/reks44_h4_scan.py.txt); new file

Active space: catalog `reks44` = REKS(4,4); units `[2, 2]`: 2 × electron geminal (FON n); 2S = 0 (18 configurations), 2 (11 configurations), 4 (1 configuration)

SA, SI: defaults ([SA-REKS ensemble and weights](https://reksstudio.github.io/learn/concepts/index.md#sa-ensemble), [SI cassette](https://reksstudio.github.io/learn/concepts/index.md#si-cassette))

```python
"""REKS(4,4) scan of linear H4, BH&HLYP/6-31G: the first point reads an RKS seed at its geometry, each further point
the REKS orbitals of the previous one."""
import psi4

psi4.set_output_file("reks44_h4_scan.out", False)
psi4.set_memory("1 GB")


def h4(r):
    return psi4.geometry(f"H 0 0 0\nH 0 0 {r}\nH 0 0 {2 * r}\nH 0 0 {3 * r}\nsymmetry c1")


psi4.set_options({"basis": "6-31g", "scf_type": "pk"})
h4(1.4)
e, wfn = psi4.energy("bhhlyp", return_wfn=True)                     # RKS seed of the first point
wfn.to_file("h4_rks.wfn")
psi4.core.clean()

psi4.set_options({"reference": "reks", "reks": [4, 4]})
restart = {"restart_file": "h4_rks.wfn.npy"}
for r in (1.4, 1.5, 1.6):
    h4(r)
    e, wfn = psi4.energy("bhhlyp", return_wfn=True, **restart)
    wfn.to_file(f"h4_{r}.wfn")
    restart = {"restart_file": f"h4_{r}.wfn.npy"}
    psi4.core.clean()
    print(f"R = {r}  E(SA) = {e:.10f}")
```

Look at: `Reading orbitals from file` at every point, and `FON sets restored from the saved wavefunction:` in `Pre-Iterations` at every point after the first ([Restart mechanism](https://reksstudio.github.io/learn/reference/run-control/index.md#restart))

Output: to be computed

Orbitals: orbitals will be shown

Check: the first point reads the RKS seed at its geometry; every further point reads the REKS orbitals and FON sets of the previous one

Why

`restart_file` sets `GUESS READ`; a REKS restart file restores the orbitals and the FON sets of the run that wrote it ([Restart mechanism](https://reksstudio.github.io/learn/reference/run-control/index.md#restart)). The first point is seeded like any first calculation ([Seed orbitals](https://reksstudio.github.io/learn/procedure/index.md#seed-orbitals)).

### Small basis first: 6-31G(d) to cc-pVTZ {#case-basis-c2h4}

**How is a converged solution carried into a larger basis?**

Input: [`first_c2h4_90_basis.py`](https://reksstudio.github.io/inputs/first_c2h4_90_basis.py.txt); charge 0, multiplicity 1

Active space: catalog `reks22` = REKS(2,2); units `[2]`: electron geminal (FON n); 2S = 0 (3 configurations), 2 (1 configuration)

SA, SI: defaults ([SA-REKS ensemble and weights](https://reksstudio.github.io/learn/concepts/index.md#sa-ensemble), [SI cassette](https://reksstudio.github.io/learn/concepts/index.md#si-cassette))

```python
"""SSR(2,2) of 90-degree twisted ethylene, BH&HLYP/cc-pVTZ, read from the 6-31G(d) REKS orbitals.  # changed
python first_c2h4_90.py rks; python first_c2h4_90.py reks   -> first_c2h4_90_reks.wfn.npy  # changed
python first_c2h4_90_basis.py                              -> REKS(2,2) in cc-pVTZ, projected from 6-31G(d)"""  # changed
import psi4

psi4.set_output_file("first_c2h4_90_basis.out", False)  # changed
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
psi4.set_options({"basis": "cc-pvtz", "scf_type": "pk"})  # changed

psi4.set_options({"reference": "reks", "reks": [2, 2]})
e_sa, wfn = psi4.energy("bhhlyp", return_wfn=True, restart_file="first_c2h4_90_reks.wfn.npy")  # changed
print(f"E(SA) = {e_sa:.10f}")
```

Highlighted: changed from [Twisted ethylene, REKS(2,2)](https://reksstudio.github.io/learn/path/p2/index.md#case-c2h4-90); removed:

```python
"""SSR(2,2) of 90-degree twisted ethylene, BH&HLYP/6-31G(d), seeded from RKS orbitals.
python first_c2h4_90.py rks   -> RKS orbitals: first_c2h4_90_rks.wfn.npy + Molden file to inspect
python first_c2h4_90.py reks  -> REKS(2,2) from them: first_c2h4_90_reks.wfn.npy"""
import sys
stage = sys.argv[1]
psi4.set_output_file(f"first_c2h4_90_{stage}.out", False)
psi4.set_options({"basis": "6-31g(d)", "scf_type": "pk"})
if stage == "rks":
    psi4.set_options({"molden_write": True})
    e, wfn = psi4.energy("bhhlyp", return_wfn=True)
    wfn.to_file("first_c2h4_90_rks.wfn")
    print(f"E(RKS) = {e:.10f}")
else:
    e_sa, wfn = psi4.energy("bhhlyp", return_wfn=True, restart_file="first_c2h4_90_rks.wfn.npy")
    wfn.to_file("first_c2h4_90_reks.wfn")
    print("SSR states:", wfn.array_variable("SSR ENERGIES K=0").np.ravel()[:3])
```

Look at: the projection line of `Pre-Iterations` and the FON line

Output: to be computed

Orbitals: orbitals will be shown

Check: `Computing basis projection from 6-31G(D) to CC-PVTZ`; FONs 1/1 as in 6-31G(d)

Why

`BASIS_GUESS` stops a REKS run; the REKS orbitals read with `restart_file` are projected onto the target basis pair by pair ([Scans](https://reksstudio.github.io/learn/procedure/index.md#first-scans)).

### Lower bound on the FONs of a generation {#case-fon-bound}

**How is an inverting FON held?**

* **Input:** input will be added

* **System:** system to be chosen

* **Output:** to be computed

* **Orbitals:** orbitals will be shown

* **Check:** `Post-Iterations` prints the free FON at or above the bound ([Fractional occupation numbers (FONs)](https://reksstudio.github.io/learn/reference/run-control/index.md#fons))

Why

Each generation has its own lower bound on its free FON ([`REKS_<L>_FON`](https://reksstudio.github.io/learn/reference/run-control/index.md#reks_l_fon)); an inverted pair: [FONs of a geminal invert](https://reksstudio.github.io/learn/diagnose/index.md#diag-fon-inverted).

### Delocalizing localized active orbitals {#case-deloc}

**How are active orbitals that sit on one centre each rotated back?**

* **Input:** input will be added

* **System:** system to be chosen

* **Output:** to be computed

* **Orbitals:** orbitals will be shown

* **Check:** `REKS Geminal Delocalization` lists the rotated pairs and whether the SCF from them is kept ([`REKS_GEMINAL_DELOC`](https://reksstudio.github.io/learn/reference/run-control/index.md#reks_geminal_deloc))

Why

Symptom and remedy: [Active orbitals localize on one fragment](https://reksstudio.github.io/learn/diagnose/index.md#diag-localized).

### Lowest roots of a large cassette: Davidson {#case-davidson}

**How are the lowest roots of a large cassette found without the dense matrix?**

* **Input:** input will be added

* **System:** system to be chosen

* **Output:** to be computed

* **Orbitals:** orbitals will be shown

* **Check:** the `SI Davidson solver` block and `Computed states k of r` ([SI Davidson solver](https://reksstudio.github.io/learn/reference/properties/index.md#si-davidson))

Why

Solvers, root count and convergence: [SI eigensolver](https://reksstudio.github.io/learn/concepts/index.md#si-solver).

## Linked files

[inputs/wide_bh_states.py](https://reksstudio.github.io/inputs/wide_bh_states.py.txt)

[inputs/reks44_h4_cassettes.py](https://reksstudio.github.io/inputs/reks44_h4_cassettes.py.txt)

[inputs/reks44_h4_scan.py](https://reksstudio.github.io/inputs/reks44_h4_scan.py.txt)

[inputs/first_c2h4_90_basis.py](https://reksstudio.github.io/inputs/first_c2h4_90_basis.py.txt)
