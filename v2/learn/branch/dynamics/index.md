# Optimization and dynamics — REKS Studio Learn

HTML: <https://reksstudio.github.io/v2/learn/branch/dynamics/>

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

[Learn](https://reksstudio.github.io/v2/learn/index.md) › Optimization and dynamics

# Optimization and dynamics

## Optimization and dynamics {#opt-dynamics}

After the solution check ([Check the solution](https://reksstudio.github.io/v2/learn/procedure/index.md#check-solution)), the nuclear gradients of the SSR states and their nonadiabatic coupling vectors (NAC, $\mathbf d_{IJ} = \langle I|\partial J/\partial\mathbf R\rangle$, [Nonadiabatic coupling vectors](https://reksstudio.github.io/v2/learn/reference/properties/index.md#nac)) drive a geometry optimization, a conical-intersection search with DL-FIND or a trajectory with PyUNIxMD; each point is one `psi4.gradient()` call ([P6. Forces](https://reksstudio.github.io/v2/learn/path/p6/index.md#p6)), seeded as in [Scans](https://reksstudio.github.io/v2/learn/procedure/index.md#first-scans). `scf_type df` for optimizations and trajectories, `pk` (exact integrals) for an estimate of the DF error at single points.

### Requirements {#dyn-requirements}

| Package | Install | Used by |
| - | - | - |
| DL-FIND (`libdlfind` 0.0.3) | `pip install libdlfind` (builds with gfortran) | [`reks_dlfind.py`](https://reksstudio.github.io/v2/inputs/reks_dlfind.py.txt): `optimize(method, molecule, restart_file, tolerance=4.5e-4, maxcycle=100)`, L-BFGS in delocalized internal coordinates on the target root; `tolerance`: largest gradient component, a.u.; [`reks_meci.py`](https://reksstudio.github.io/v2/inputs/reks_meci.py.txt): `meci(method, molecule, restart_file, states=(0, 1), tolerance=4.5e-4, maxstep=0.15, maxcycle=150)`, gradient projection with the coupling vector |
| PyUNIxMD (commit 47cd61a) | `git clone https://github.com/skmin-lab/unixmd`, Cython libraries built as in its README; `export PYTHONPATH=<unixmd>/src:<unixmd>:$PYTHONPATH` | [`reks_unixmd.py`](https://reksstudio.github.io/v2/inputs/reks_unixmd.py.txt): `molecule(xyz_file, nstates, temperature, charge=0, seed=1)`, `REKS(molecule, method, restart_file)`, roots of cassette 0 |

The scripts of the cases run in one directory with `reks_dlfind.py`, `reks_meci.py` and `reks_unixmd.py` (imported, not run). `no_com`, `no_reorient`: DL-FIND and PyUNIxMD move the atoms in the input frame.

## Geometry optimization {#geometry-optimization}

`optimize()` searches for a minimum of the energy of the target root and stops at a stationary point.

### S0 minimum of ethylene with DL-FIND {#case-opt-c2h4}

**How is a state optimized?**

Input: [`opt_c2h4.py`](https://reksstudio.github.io/v2/inputs/opt_c2h4.py.txt); charge 0, multiplicity 1; new file

Active space: catalog `reks22` = REKS(2,2); units `[2]`: electron geminal (FON n); 2S = 0 (3 configurations), 2 (1 configuration)

SA, SI: defaults ([SA-REKS ensemble and weights](https://reksstudio.github.io/v2/learn/concepts/index.md#sa-ensemble), [SI cassette](https://reksstudio.github.io/v2/learn/concepts/index.md#si-cassette))

```python
"""S0 of C2H4, SSR(2,2) BH&HLYP/6-31G(d), DF, optimized with DL-FIND.
python opt_c2h4.py  ->  opt_c2h4.xyz, opt_c2h4_reks.wfn.npy, opt_c2h4.out"""
import psi4
from reks_dlfind import optimize

psi4.set_output_file("opt_c2h4.out", False)
psi4.set_memory("2 GB")
psi4.set_num_threads(4)

mol = psi4.geometry("""
0 1
C    0.310000    0.170000    0.895000
C    0.310000    0.170000   -0.435000
H    0.310000    1.090840    1.461300
H    0.310000   -0.750840    1.461300
H   -0.150420    0.967471   -1.001300
H    0.770420   -0.627471   -1.001300
symmetry c1
no_com
no_reorient
""")

# seed orbitals: RKS with the same functional and basis
psi4.set_options({"basis": "6-31g(d)", "scf_type": "df"})
e, wfn = psi4.energy("bhhlyp", return_wfn=True)
wfn.to_file("opt_c2h4_rks.wfn")

# optimize S0: the first entry of si_reks_grad is the followed root
psi4.set_options({"reference": "reks", "reks": [2, 2], "si_reks_grad": [[0]]})
e, wfn = optimize("bhhlyp", mol, restart_file="opt_c2h4_rks.wfn.npy")

print(f"E(S0) = {e:.10f}")
mol.save_xyz_file("opt_c2h4.xyz", True)
wfn.to_file("opt_c2h4_reks.wfn")
```

Look at: the last DL-FIND cycle in the terminal and the last point of `opt_c2h4.out`

Output: to be computed

Orbitals: orbitals will be shown

Check: all five criteria `yes` in the last cycle and `Optimisation converged`; `S0 *` in every `Gradient request`; no `[GRAD-FON] … pinned` line ([Check the optimization](#check-optimization))

Why

Every point is one `gradient()` of the target root; `restart_file` seeds the first point, each later point reads the orbitals of the previous one.

Branches from here: [T1 minimum of hexatriene](#case-opt-hexatriene) · [Surface hopping of ethylene on S1](#case-md-c2h4) · [S0/S1 MECI of ethylene with DL-FIND](#case-meci-c2h4)

### T1 minimum of hexatriene {#case-opt-hexatriene}

**How is a triplet state optimized?**

Input: [`opt_hexatriene.py`](https://reksstudio.github.io/v2/inputs/opt_hexatriene.py.txt); charge 0, multiplicity 1; new file

Active space: catalog `reks66` = REKS(6,6); units `[2, 2, 2]`: 3 × electron geminal (FON n); 2S = 0 (161 configurations), 2 (153 configurations), 4 (41 configurations), 6 (1 configuration)

SA: [`sa_reks_extra`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-sa_reks_extra) `[[1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]]`

SI: [`si_reks_2spin`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-si_reks_2spin) `[2]`

```python
"""T1 of all-trans-hexatriene, SI-SA-REKS(6,6) BH&HLYP/6-31G(d), DF, optimized with DL-FIND.
python opt_hexatriene.py  ->  opt_hexatriene.xyz, opt_hexatriene_reks.wfn.npy, opt_hexatriene.out"""
import psi4
from reks_dlfind import optimize

psi4.set_output_file("opt_hexatriene.out", False)
psi4.set_memory("8 GB")
psi4.set_num_threads(8)

mol = psi4.geometry("""
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
no_com
no_reorient
""")

# seed orbitals: RKS with the same functional and basis
psi4.set_options({"basis": "6-31g(d)", "scf_type": "df"})
e, wfn = psi4.energy("bhhlyp", return_wfn=True)
wfn.to_file("opt_hexatriene_rks.wfn")

# REKS(6,6) at the start geometry: pi window from the RKS orbitals (LUMO+2 is sigma*), triplet SI cassette
psi4.set_options({"reference": "reks", "reks": [6, 6],
                  "guess_active_window": ["HOMO-2", "HOMO-1", "HOMO", "LUMO", "LUMO+1", "LUMO+3"],
                  "sa_reks_extra": [[1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]],
                  "si_reks_2spin": [2]})
e, wfn = psi4.energy("bhhlyp", return_wfn=True, restart_file="opt_hexatriene_rks.wfn.npy")
wfn.to_file("opt_hexatriene_start.wfn")

# optimize T1: later points read the REKS orbitals of the previous point, the window is off
psi4.set_options({"guess_active_window": [], "si_reks_grad": [[0]]})
e, wfn = optimize("bhhlyp", mol, restart_file="opt_hexatriene_start.wfn.npy")

print(f"E(T1) = {e:.10f}")
mol.save_xyz_file("opt_hexatriene.xyz", True)
wfn.to_file("opt_hexatriene_reks.wfn")
```

Output: to be computed

Orbitals: orbitals will be shown

Check: `T1 *` in every `Gradient request`; `Optimisation converged` ([Check the optimization](#check-optimization))

Why

The window places the RKS orbitals at the first REKS point and is then switched off, since it moves the columns of any read guess ([`GUESS_ACTIVE_WINDOW`](https://reksstudio.github.io/v2/learn/reference/run-control/index.md#guess_active_window)); with [`si_reks_2spin`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-si_reks_2spin) `[2]` root 0 is T1.

Branches from here: [Surface hopping of hexatriene on T1](#case-md-hexatriene)

### Check the optimization {#check-optimization}

Converged: all five criteria `yes` in the last cycle and `Optimisation converged`. Necessary, not sufficient: the endpoint is a stationary point, and the gradient criteria cannot distinguish a minimum from a saddle point.

Solution: n<sub>a</sub> of the active pair at every point, `grep "n_a =" opt_c2h4.out`, and no `[GRAD-FON] … pinned` line ([FON 2.000000 / 0.000000 where 1 / 1 is expected, pinned at a bound](https://reksstudio.github.io/v2/learn/diagnose/index.md#diag-fon-pinned)).

Target root: `S0 *` (`T1 *` for hexatriene) in every `Gradient request`.

Errors: an SCF that fails prints `reks_dlfind: SCFConvergenceError; stopping DL-FIND`; DL-FIND then ends with `Optimisation converged`, which does not count, and the script stops with Psi4's error.

## Surface hopping {#surface-hopping}

* **States:** `nstates` lowest roots of cassette 0 ([Adiabatic (SSR) states](https://reksstudio.github.io/v2/learn/concepts/index.md#ssr-states)).
* **One call per step:** `REKS` sets [`si_reks_grad`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-si_reks_grad) to the running state of PyUNIxMD alone (the target root) and [`si_reks_nac`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-si_reks_nac) to all state pairs; the pairs make every state a CP-REKS target, so one `gradient()` returns the energies and gradients of all states and the NAC vectors of all pairs.
* **Start:** `molecule()` draws one set of velocities from the Maxwell–Boltzmann distribution at the given temperature (`seed=1`); another `seed` gives another draw. One demonstration trajectory: a study samples initial conditions (e.g., Wigner) and runs an ensemble.
* **Hopping:** fewest-switches surface hopping without decoherence correction (`mqc.SH` default; option `dec_correction`); NAC phases are aligned between steps (`l_adj_nac`, default on), since the NAC sign is arbitrary between runs ([Rules for all entries](https://reksstudio.github.io/v2/learn/reference/properties/index.md#property-rules)).
* **Velocities at a hop** (`mqc.SH` defaults): `hop_rescale="augment"` rescales the velocities along the NAC after an accepted hop, uniformly when no solution along it exists; `hop_reject="reverse"` reverses the velocity along the NAC after a frustrated hop.
* **Files:** `md/MDENERGY` energies per step, `md/SHSTATE` running state, `md/SHPROB` hopping probabilities, `md/MOVIE.xyz` geometries and velocities.
* **Convergence:** `fail_on_maxiter False`: an SCF that reaches `maxiter` prints `Energy and/or wave function did not converge, but proceeding anyway.` and the step continues; `grep -c "did not converge" md_*.out` counts such steps.

### Surface hopping of ethylene on S1 {#case-md-c2h4}

**How does a trajectory move between states?**

Input: [`md_c2h4.py`](https://reksstudio.github.io/v2/inputs/md_c2h4.py.txt); new file

Active space: catalog `reks22` = REKS(2,2); units `[2]`: electron geminal (FON n); 2S = 0 (3 configurations), 2 (1 configuration)

SA, SI: defaults ([SA-REKS ensemble and weights](https://reksstudio.github.io/v2/learn/concepts/index.md#sa-ensemble), [SI cassette](https://reksstudio.github.io/v2/learn/concepts/index.md#si-cassette))

```python
"""Surface hopping of C2H4 on S1 from opt_c2h4.py, SSR(2,2) BH&HLYP/6-31G(d), DF, PyUNIxMD.
export PYTHONPATH=/path/to/unixmd/src:/path/to/unixmd:$PYTHONPATH
python md_c2h4.py  ->  md/MDENERGY, md/SHSTATE, md/MOVIE.xyz, md_c2h4.out"""
import psi4
import mqc
from reks_unixmd import REKS, molecule

psi4.set_output_file("md_c2h4.out", False)
psi4.set_memory("2 GB")
psi4.set_num_threads(4)
psi4.set_options({"basis": "6-31g(d)", "scf_type": "df",
                  "reference": "reks", "reks": [2, 2], "fail_on_maxiter": False})

mol = molecule("opt_c2h4.xyz", nstates=3, temperature=300)
qm = REKS(mol, "bhhlyp", restart_file="opt_c2h4_reks.wfn.npy")

md = mqc.SH(molecule=mol, istate=1, dt=0.25, nsteps=400, unit_dt="fs")
md.run(qm=qm)
```

Look at: the column Total of `md/MDENERGY`, the running state in `md/SHSTATE`, `grep "n_a =" md_c2h4.out`

Output: to be computed

Orbitals: orbitals will be shown

Check: no jump of the total energy together with a jump of n<sub>a</sub> between two steps ([Check the trajectory](#check-trajectory))

### Surface hopping of hexatriene on T1 {#case-md-hexatriene}

**How does a trajectory run on a triplet manifold?**

Input: [`md_hexatriene.py`](https://reksstudio.github.io/v2/inputs/md_hexatriene.py.txt); new file

Active space: catalog `reks66` = REKS(6,6); units `[2, 2, 2]`: 3 × electron geminal (FON n); 2S = 0 (161 configurations), 2 (153 configurations), 4 (41 configurations), 6 (1 configuration)

SA: [`sa_reks_extra`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-sa_reks_extra) `[[1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]]`

SI: [`si_reks_2spin`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-si_reks_2spin) `[2]`

```python
"""Surface hopping of all-trans-hexatriene on T1 from opt_hexatriene.py, SI-SA-REKS(6,6) BH&HLYP/6-31G(d), DF,
three triplet states, PyUNIxMD.
export PYTHONPATH=/path/to/unixmd/src:/path/to/unixmd:$PYTHONPATH
python md_hexatriene.py  ->  md/MDENERGY, md/SHSTATE, md/MOVIE.xyz, md_hexatriene.out"""
import psi4
import mqc
from reks_unixmd import REKS, molecule

psi4.set_output_file("md_hexatriene.out", False)
psi4.set_memory("8 GB")
psi4.set_num_threads(8)
psi4.set_options({"basis": "6-31g(d)", "scf_type": "df",
                  "reference": "reks", "reks": [6, 6],
                  "sa_reks_extra": [[1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]],
                  "si_reks_2spin": [2],
                  "d_convergence": 1e-6, "reks_cpreks_conv": 1e-8,
                  "fail_on_maxiter": False})

mol = molecule("opt_hexatriene.xyz", nstates=3, temperature=300)
qm = REKS(mol, "bhhlyp", restart_file="opt_hexatriene_reks.wfn.npy")

md = mqc.SH(molecule=mol, istate=0, dt=0.5, nsteps=50, unit_dt="fs")
md.run(qm=qm)
```

Output: to be computed

Orbitals: orbitals will be shown

Check: `grep -c "did not converge" md_hexatriene.out` counts the steps with an unconverged SCF; the total energy without jumps ([Check the trajectory](#check-trajectory))

Why

With [`si_reks_2spin`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-si_reks_2spin) `[2]` cassette 0 is the triplet cassette, and the interface reads the roots of cassette 0 whatever its 2S.

### Check the trajectory {#check-trajectory}

Energy: the total energy, column Total of `md/MDENERGY`; rerun with `dt` halved: the Total column of both runs must agree.

Solution: n<sub>a</sub> of the active pair per step, `grep "n_a =" md_c2h4.out`. A pair keeps its orbitals in their slots, so n<sub>a</sub> may fall below 1 ([Fractional occupation numbers (FONs)](https://reksstudio.github.io/v2/learn/reference/run-control/index.md#fons)). If n<sub>a</sub> and the Total column jump together between two steps, the solution has changed. Steps with an unconverged SCF: [SCF hits MAXITER or continues unconverged](https://reksstudio.github.io/v2/learn/diagnose/index.md#diag-maxiter).

State: `md/SHSTATE`. The target root is an energy index, not a state character ([Quasi-degenerate roots](https://reksstudio.github.io/v2/learn/diagnose/index.md#diag-quasi-degenerate)).

## Conical intersections {#dyn-ci}

### S0/S1 MECI of ethylene with DL-FIND {#case-meci-c2h4}

**Where do S0 and S1 meet at the lowest energy?**

Input: [`meci_c2h4.py`](https://reksstudio.github.io/v2/inputs/meci_c2h4.py.txt); charge 0, multiplicity 1

Active space: catalog `reks22` = REKS(2,2); units `[2]`: electron geminal (FON n); 2S = 0 (3 configurations), 2 (1 configuration)

SA, SI: defaults ([SA-REKS ensemble and weights](https://reksstudio.github.io/v2/learn/concepts/index.md#sa-ensemble), [SI cassette](https://reksstudio.github.io/v2/learn/concepts/index.md#si-cassette))

```python
"""S0/S1 minimum-energy conical intersection of C2H4, SSR(2,2) BH&HLYP/6-31G(d), with DL-FIND.  # changed
python meci_c2h4.py  ->  meci_c2h4.xyz, meci_c2h4_reks.wfn.npy, meci_c2h4.out  # changed
Seed: first_c2h4_90_reks.wfn.npy of first_c2h4_90.py (90-degree twist) in this directory."""  # changed
import psi4
from reks_meci import meci  # changed

psi4.set_output_file("meci_c2h4.out", False)
psi4.set_memory("2 GB")
psi4.set_num_threads(4)

# start: 90-degree twist, the two H of the second C shifted 0.35 A (pyramidalized)  # changed
mol = psi4.geometry("""
0 1
C    0.310000    0.170000    0.765000  # changed
C    0.310000    0.170000   -0.565000  # changed
H    0.310000    1.090840    1.331300  # changed
H    0.310000   -0.750840    1.331300  # changed
H    1.230840    0.520000   -1.131300  # changed
H   -0.610840    0.520000   -1.131300  # changed
symmetry c1
no_com
no_reorient
""")

psi4.set_options({"basis": "6-31g(d)", "scf_type": "pk", "maxiter": 300, "reference": "reks", "reks": [2, 2]})  # changed
(e0, e1), wfn = meci("bhhlyp", mol, restart_file="first_c2h4_90_reks.wfn.npy", states=(0, 1))  # changed

print(f"E(S0) = {e0:.10f}  E(S1) = {e1:.10f}  gap = {e1 - e0:.3e}")  # changed
mol.save_xyz_file("meci_c2h4.xyz", True)
wfn.to_file("meci_c2h4_reks.wfn")
```

Highlighted: changed from [S0 minimum of ethylene with DL-FIND](#case-opt-c2h4); removed:

```python
"""S0 of C2H4, SSR(2,2) BH&HLYP/6-31G(d), DF, optimized with DL-FIND.
python opt_c2h4.py  ->  opt_c2h4.xyz, opt_c2h4_reks.wfn.npy, opt_c2h4.out"""
from reks_dlfind import optimize
C    0.310000    0.170000    0.895000
C    0.310000    0.170000   -0.435000
H    0.310000    1.090840    1.461300
H    0.310000   -0.750840    1.461300
H   -0.150420    0.967471   -1.001300
H    0.770420   -0.627471   -1.001300
# seed orbitals: RKS with the same functional and basis
psi4.set_options({"basis": "6-31g(d)", "scf_type": "df"})
e, wfn = psi4.energy("bhhlyp", return_wfn=True)
wfn.to_file("opt_c2h4_rks.wfn")
# optimize S0: the first entry of si_reks_grad is the followed root
psi4.set_options({"reference": "reks", "reks": [2, 2], "si_reks_grad": [[0]]})
e, wfn = optimize("bhhlyp", mol, restart_file="opt_c2h4_rks.wfn.npy")
print(f"E(S0) = {e:.10f}")
```

Look at: the last DL-FIND cycle in the terminal, the S0–S1 gap printed at the end and n<sub>a</sub> at every point of `meci_c2h4.out`

Output: to be computed

Orbitals: orbitals will be shown

Check: `Optimisation converged`; `S1 *` in every `Gradient request`; no `[GRAD-FON] … pinned` line ([Check the optimization](#check-optimization))

Figure: the computed [S0/S1 MECI](https://reksstudio.github.io/v2/main/results/c2h4-photochemistry/index.md#meci) of ethylene

Why

Each point is one `gradient()` with both roots as gradient targets and their NAC; gradient projection closes the gap along the gradient difference and lowers the energy orthogonal to the branching plane of that difference and the coupling h = (E<sub>1</sub> − E<sub>0</sub>) d<sub>01</sub>.

Branches from here: [Topography of a conical intersection](#case-ci-topography)

### Topography of a conical intersection {#case-ci-topography}

**What does the S0/S1 surface pair look like at a crossing?**

* **Input:** input will be added

* **System:** system to be chosen

* **Output:** to be computed

* **Orbitals:** orbitals will be shown

* **Check:** the CI-topography block is printed when the gap of the coupled pair is below [`REKS_CI_TOPOGRAPHY_GAP`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-reks_ci_topography_gap) ([Conical-intersection topography](https://reksstudio.github.io/v2/learn/reference/properties/index.md#ci-topography))

Why

The topography parameters assume a first-order cone, g and h linear in the displacement; at the default gap of 5 mE<sub>h</sub> (0.14 eV) a typical point lies a few hundredths of a bohr from the seam ([`REKS_CI_TOPOGRAPHY_GAP`](https://reksstudio.github.io/v2/learn/reference/index.md#reks_ci_topography_gap)).

## Linked files

[inputs/reks_dlfind.py](https://reksstudio.github.io/v2/inputs/reks_dlfind.py.txt)

[inputs/reks_meci.py](https://reksstudio.github.io/v2/inputs/reks_meci.py.txt)

[inputs/reks_unixmd.py](https://reksstudio.github.io/v2/inputs/reks_unixmd.py.txt)

[inputs/opt_c2h4.py](https://reksstudio.github.io/v2/inputs/opt_c2h4.py.txt)

[inputs/opt_hexatriene.py](https://reksstudio.github.io/v2/inputs/opt_hexatriene.py.txt)

[inputs/md_c2h4.py](https://reksstudio.github.io/v2/inputs/md_c2h4.py.txt)

[inputs/md_hexatriene.py](https://reksstudio.github.io/v2/inputs/md_hexatriene.py.txt)

[inputs/meci_c2h4.py](https://reksstudio.github.io/v2/inputs/meci_c2h4.py.txt)
