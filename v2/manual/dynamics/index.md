# Optimization and Dynamics — REKS Studio Manual

HTML: <https://reksstudio.github.io/v2/manual/dynamics/>

Psi4 d40267fc2, 2026-10-13: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

[Manual](https://reksstudio.github.io/v2/manual/index.md) › Optimization and Dynamics

# Optimization and Dynamics

Chapter 5 of the REKS Studio user manual

## 5. Optimization and Dynamics {#opt-dynamics}

After the solution check ([Check the solution](https://reksstudio.github.io/v2/manual/first-calculation/index.md#check-solution)), the nuclear gradients of the SSR states and their nonadiabatic coupling vectors (NAC, $\mathbf d_{IJ} = \langle I|\partial J/\partial\mathbf R\rangle$, [Nonadiabatic coupling vectors](https://reksstudio.github.io/v2/manual/properties/index.md#nac)) drive a geometry optimization with DL-FIND or a trajectory with PyUNIxMD, where each point corresponds to a single `psi4.gradient()` call. Procedure: one `gradient()` → optimization → check → dynamics → check.

Start: every run on this page starts from orbitals checked as in [Check the solution](https://reksstudio.github.io/v2/manual/first-calculation/index.md#check-solution); each further point reads the REKS orbitals of the previous one ([Scans](https://reksstudio.github.io/v2/manual/first-calculation/index.md#first-scans)).

Integrals: `scf_type df` for optimizations and trajectories (all runs on this page); `pk` (exact integrals) for an estimate of the DF error at single points.

### Requirements {#dyn-requirements}

| Package | Install | Used by |
| - | - | - |
| DL-FIND (`libdlfind` 0.0.3) | `pip install libdlfind` (builds with gfortran) | [`reks_dlfind.py`](https://reksstudio.github.io/v2/inputs/reks_dlfind.py.txt) |
| PyUNIxMD (commit 47cd61a) | `git clone https://github.com/skmin-lab/unixmd`, Cython libraries built as in its README; `export PYTHONPATH=<unixmd>/src:<unixmd>:$PYTHONPATH` | [`reks_unixmd.py`](https://reksstudio.github.io/v2/inputs/reks_unixmd.py.txt) |

### One gradient() call {#one-gradient}

90° C₂H₄ from the RKS orbitals of `first_c2h4_90.py` ([Worked inputs](https://reksstudio.github.io/v2/manual/first-calculation/index.md#first-inputs)), S1 as the target root and the NAC of all pairs of S0, S1, S2:

```python
psi4.set_options({"scf_type": "df", "reference": "reks", "reks": [2, 2],
                  "si_reks_grad": [[1]],
                  "si_reks_nac": [[[0, 1], [0, 2], [1, 2]]]})
g, wfn = psi4.gradient("bhhlyp", return_wfn=True, restart_file="first_c2h4_90_rks.wfn.npy")
```

```log
=> Gradient request <=

   Cassette  States  NAC pairs
   -------------------------------------
          0  S1 *    S0/S1, S0/S2, S1/S2
   -------------------------------------
   States = SI states whose nuclear gradient is computed. * = followed state, returned by gradient().
   S0 (cassette 0) added to the gradient targets (NAC partner).
   S2 (cassette 0) added to the gradient targets (NAC partner).
[...]
   Returned gradient of S1 (cassette 0).
```

```log
==> Coupled-perturbed REKS (CP-REKS, Z-vector) solver <==

    For                   gradients of S1 (cassette 0);
                          NAC S0/S1, S0/S2, S1/S2 (cassette 0)
    States                S0, S1, S2 (cassette 0)
    Equations             9: 3 states + 6 for NAC S0/S1 (cassette 0), S0/S2 (cassette 0), S1/S2 (cassette 0)
[...]
    Z-vectors converged in 9 iterations.
```

One CP-REKS solve covers every target ([`REKS_CPREKS_CONV`](https://reksstudio.github.io/v2/options/REKS_CPREKS_CONV.md)). Wall time of the whole call (SCF included, 4 threads, Apple M1 Pro; two runs agree to 0.07 s):

| `si_reks_grad` | `si_reks_nac` | Equations | Wall / s | Returned |
| - | - | - | - | - |
| `[[1]]` | — | 1 | 1.2 | S1 |
| `[[1, 0]]` | — | 2 | 1.2 | S1 |
| `[[1, 0, 2]]` | — | 3 | 1.3 | S1 |
| `[[1]]` | three pairs | 9 | 1.7 | S1 |

Target root: the first entry of `si_reks_grad`, marked `*` in the output ([`SI_REKS_GRAD`](https://reksstudio.github.io/v2/options/SI_REKS_GRAD.md)); `[[1, 0]]` prints `S1 *, S0`.

Arrays: the wavefunction holds `SSR ROOT r GRADIENT CASSETTE 0` for every target ([Nuclear gradients of SSR states](https://reksstudio.github.io/v2/manual/properties/index.md#state-gradient)) and `SSR NAC I J CASSETTE 0` for every pair ([Nonadiabatic coupling vectors](https://reksstudio.github.io/v2/manual/properties/index.md#nac)).

### Gradients and couplings against finite differences {#grad-fd}

One `gradient()` with `si_reks_grad` listing every state and `si_reks_nac` listing every pair gives all analytic gradients and NAC vectors; one loop of energies at displaced geometries gives the finite-difference (FD) gradients of all states from the same `SSR ENERGIES K=0` arrays and, from the same points, the FD couplings

$$
d_{IJ} \approx \frac{\langle\Psi_I(\mathbf R - h)|\Psi_J(\mathbf R + h)\rangle - \langle\Psi_J(\mathbf R - h)|\Psi_I(\mathbf R + h)\rangle}{4h},
$$

with the SSR states written in their PPS, OSS and DES determinants (SSR(2,2)). For SI-SA-REKS(4,4) the FD covers the part of the coupling from the mixing of the configurations in the SI states,

$$
d_{IJ}^{\text{model}} = \frac{\mathbf a_I^{\mathsf T}\,(\partial\mathbf H - E_J\,\partial\mathbf S)\,\mathbf a_J}{E_J - E_I},
$$

from the FD of `SSR HAMILTONIAN K=0` and `SSR OVERLAP SPARSE K=0`, against `SSR NAC MODEL I J`. Gradients and model part: five-point central differences; NAC of C₂H₄: the central formula above; h = 0.005 a₀; every displaced point reads the same REKS file; state phases of the `gradient()` run are aligned with the FD centre. BH\&HLYP/6-31G(d), DF:

| Molecule | n<sub>min</sub> | Quantity | Components | max \|analytic − FD\| | Calls |
| - | - | - | - | - | - |
| C₂H₄, 60° twist, C1; SSR(2,2) | 1.93 | gradients S0–S2 | 54 | 5.6 · 10⁻⁷ E<sub>h</sub> a₀⁻¹ | 1 `gradient()`, 72 energies |
| s-trans-butadiene, distorted in plane; SI-SA-REKS(4,4), full 2S = 0 cassette | 2.00 | gradients S0–S9 | 200 | 8.0 · 10⁻⁶ E<sub>h</sub> a₀⁻¹ | 1 `gradient()`, 80 energies |
| butadiene, both CH₂ twisted 75°, C1; as above | 1.48 | gradients S0–S9 | 300 | 3.2 · 10⁻⁶ E<sub>h</sub> a₀⁻¹ | 1 `gradient()`, 120 energies |
| butadiene, both CH₂ twisted 80°, C1; as above | 1.37 | gradients S0–S9 | 300 | 7.1 · 10⁻⁵ E<sub>h</sub> a₀⁻¹ (S8, S9: 2.0 mE<sub>h</sub> apart, \|FD5 − FD3\| 6–7 · 10⁻⁴) | 1 `gradient()`, 120 energies |
| C₂H₄, as above | 1.93 | NAC S0/S1, S0/S2, S1/S2 | 18 each | 4.3 · 10⁻², 2.9 · 10⁻³, 2.9 · 10⁻² a₀⁻¹ | same run as the gradients |
| butadiene, 75° | 1.48 | model part, 45 pairs of S0–S9 | 1350 | 4.5 · 10⁻⁴ a₀⁻¹ (median 1.3 · 10⁻⁶) | same run as the gradients |
| butadiene, 80° | 1.37 | model part, 45 pairs of S0–S9 | 1350 | 9.7 · 10⁻⁴ a₀⁻¹ (median 2.3 · 10⁻⁶) | same run as the gradients |

n<sub>min</sub>: smallest n<sub>a</sub> (FON of the occupied member) over the SA pairs at the FD centre.

![Analytic against finite-difference gradient components of C2H4 and of planar and twisted butadiene, NAC components of C2H4 and model-part couplings of twisted butadiene; absolute difference against the size of the component](https://reksstudio.github.io/v2/figures/grad_fd.svg)

(a) Analytic against FD gradient components: C₂H₄ 60° (S0–S2), butadiene planar, 75°, 80° (S0–S9). (b) |analytic − FD| against |FD| for the same. (c), (d) The same for the NAC vectors of C₂H₄ (3 pairs) and the model part of butadiene 75° and 80° (45 pairs each).

Grid: the gradient difference falls with the DFT grid. Planar butadiene, C1 x, all ten states: 7.8 · 10⁻⁶ on the default grid, 6.5 · 10⁻⁷ with `dft_radial_points 99`, `dft_spherical_points 590`.

Planar molecule: the out-of-plane components of planar butadiene vanish by symmetry (analytic ≤ 2.8 · 10⁻¹³) and are not displaced.

NAC of C₂H₄: the difference sits in the residual part. C1 z: `SSR NAC MODEL I J` agrees with the model formula above (S = I) from the FD of `SSR HAMILTONIAN K=0` to 4 · 10⁻⁵; `SSR NAC RESIDUAL I J` / residual from the FD = 0.870 (S0/S1), 1.001 (S0/S2), 0.870 (S1/S2). Largest NAC component: 0.12 (S0/S1), 1.22 (S0/S2), 0.52 a₀⁻¹ (S1/S2).

Twisted butadiene: both CH₂ twisted by 85° (n<sub>min</sub> 1.28) or more: the FD is not an estimate of the derivative (85°: |FD5 − FD3| up to 1.6 · 10⁻² E<sub>h</sub> a₀⁻¹; 87°, C2 x: second difference of E(S0) 0.17 mE<sub>h</sub> around −h, 1.37 mE<sub>h</sub> around +h; n<sub>min</sub> 1.2563 at the centre, 1.2626 at +2h).

### Geometry optimization {#geometry-optimization}

S0 of C₂H₄ from a 30° twist; `optimize()` searches for a minimum of the energy of the target root and stops at a stationary point:

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

# optimize S0: the first entry of si_reks_grad is the target root
psi4.set_options({"reference": "reks", "reks": [2, 2], "si_reks_grad": [[0]]})
e, wfn = optimize("bhhlyp", mol, restart_file="opt_c2h4_rks.wfn.npy")

print(f"E(S0) = {e:.10f}")
mol.save_xyz_file("opt_c2h4.xyz", True)
wfn.to_file("opt_c2h4_reks.wfn")
```

```bash
python opt_c2h4.py
```

DL-FIND prints its cycles to the terminal; the last one:

```log
Testing convergence  in cycle    8
    Energy  2.6938E-07 Target: 1.0000E-06 converged?  yes
  Max step  1.2441E-03 Target: 1.8000E-03 converged?  yes component     7
  RMS step  4.8905E-04 Target: 1.2000E-03 converged?  yes
  Max grad  9.0958E-06 Target: 4.5000E-04 converged?  yes component    12
  RMS grad  3.4729E-06 Target: 3.0000E-04 converged?  yes
Convergence reached

 Optimisation converged
 ----------------------
 Final converged energy:     -78.528630422651
[...]
E(S0) = -78.5286304227
```

`opt_c2h4.out`, last point:

```log
gradient: seeding orbital guess from dlfind_orbitals.wfn.npy (GUESS set to READ).
[...]
 => Gradient request <=

    Cassette  States
    ----------------
           0  S0 *
[...]
       8A     -0.299767  (a)    n_a =  1.997742
       9A     -0.018589  (b)    n_b =  0.002258
```

Start point: `restart_file` seeds the first point; each later point reads the orbitals of the previous one.

Frame: `no_com`, `no_reorient`: DL-FIND and PyUNIxMD move the atoms in the input frame.

T1 of all-trans-hexatriene, SI-SA-REKS(6,6) with the π window of [Higher spin states](https://reksstudio.github.io/v2/manual/first-calculation/index.md#first-spin) and the SI cassette on 2S = 2 (root 0 = T1). The window places the RKS orbitals at the first REKS point and is then switched off, since it moves the columns of any read guess ([`GUESS_ACTIVE_WINDOW`](https://reksstudio.github.io/v2/options/GUESS_ACTIVE_WINDOW.md)). From [`opt_hexatriene.py`](https://reksstudio.github.io/v2/inputs/opt_hexatriene.py.txt):

```python
# REKS(6,6) at the start geometry: pi window from the RKS orbitals (LUMO+2 is sigma*), triplet SI cassette
psi4.set_options({"reference": "reks", "reks": [6, 6],
                  "guess_active_window": ["HOMO-2", "HOMO-1", "HOMO", "LUMO", "LUMO+1", "LUMO+3"],
                  "sa_reks_extra": [[1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]],
                  "si_reks_2spin": [2]})
e, wfn = psi4.energy("bhhlyp", return_wfn=True, restart_file="opt_hexatriene_rks.wfn.npy")
wfn.to_file("opt_hexatriene_start.wfn")

# optimize T1: later points read the REKS orbitals of the previous point; the window is off
psi4.set_options({"guess_active_window": [], "si_reks_grad": [[0]]})
e, wfn = optimize("bhhlyp", mol, restart_file="opt_hexatriene_start.wfn.npy")
```

| Geometry | C3–C4 / Å | C1–C3, C2–C4 / Å | C3–C5, C4–C6 / Å | E(T1) / E<sub>h</sub> | T2 − T1, T3 − T1 / eV |
| - | - | - | - | - | - |
| start (`first_hexatriene.py`) | 1.347 | 1.447 | 1.342 | — | — |
| T1 minimum, 10 gradients, 5.5 min on 8 threads | 1.480 | 1.366 | 1.409 | −233.17880483 | 2.282, 3.424 |

The minimum is planar (|z| \< 10⁻⁷ Å).

### Check the optimization {#check-optimization}

Converged: all five criteria were `yes` in the last cycle and `Optimisation converged`. Necessary, not sufficient: the endpoint is a stationary point, and the gradient criteria cannot distinguish a minimum from a saddle point.

Solution: n<sub>a</sub> of the active pair at every point, `grep "n_a =" opt_c2h4.out`: here 1.999484 → 1.997742, and no `[GRAD-FON] … pinned` line ([FON pinned at a bound, symmetry-broken charges](https://reksstudio.github.io/v2/manual/diagnose/index.md#diag-fon-pinned)).

Target root: `S0 *` (`T1 *` for hexatriene) in every `Gradient request`.

Errors: an SCF that fails prints `reks_dlfind: SCFConvergenceError; stopping DL-FIND`; DL-FIND then ends with `Optimisation converged`, which does not count, and the script stops with Psi4's error.

### Surface hopping {#surface-hopping}

C₂H₄ on S1 from the S0 geometry of `opt_c2h4.py`, three SSR states, 400 steps of 0.25 fs:

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

```bash
python md_c2h4.py
```

States: `nstates` lowest roots of cassette 0 ([Adiabatic (SSR) states](https://reksstudio.github.io/v2/manual/concepts/index.md#ssr-states)); the default SSR(2,2) cassette (PPS, OSS, DES) has three singlet roots, S0, S1, S2.

One call per step: `REKS` sets `si_reks_grad` to the running state of PyUNIxMD alone (the target root) and `si_reks_nac` to all state pairs; the pairs make every state a CP-REKS target ([One gradient() call](https://reksstudio.github.io/v2/manual/dynamics/index.md#one-gradient)), so one `gradient()` returns the energies and gradients of all states and the NAC vectors of all pairs. Step 0 in `md_c2h4.out`:

```log
gradient: seeding orbital guess from .../opt_c2h4_reks.wfn.npy (GUESS set to READ).
[...]
    Cassette  States  NAC pairs
    -------------------------------------
           0  S1 *    S0/S1, S0/S2, S1/S2
[...]
    Equations             9: 3 states + 6 for NAC S0/S1 (cassette 0), S0/S2 (cassette 0), S1/S2 (cassette 0)
```

Start: `molecule()` reads the geometry and draws one set of velocities from the Maxwell–Boltzmann distribution at 300 K (`seed=1`); the instantaneous temperature of this draw, printed at step 0, is 93.6 K. PyUNIxMD counts 3N − 6 = 12 degrees of freedom; over 10 000 draws (`seed` 1–10 000) the printed value has mean 376 K and standard deviation 136 K. Another `seed` gives another draw. One demonstration trajectory: a study samples initial conditions (e.g., Wigner) and runs an ensemble.

Hopping: fewest-switches surface hopping without decoherence correction (`mqc.SH` default; option `dec_correction`); NAC phases are aligned between steps (`l_adj_nac`, default on).

Terminal: one line per step:

```log
#INFO    STEP  State    Kinetic(H)   Potential(H)     Total(H)   Temperature(K)   Norm.
INFO        0    1      0.00177932   -78.22228694   -78.22050762    93.643953    1.00000
INFO        1    1      0.00185966   -78.22236670   -78.22050704    97.872225    1.00000
INFO        2    1      0.00224594   -78.22275321   -78.22050727   118.201999    1.00000
[...]
INFO      399    1      0.05534507   -78.27607921   -78.22073415  2912.761511    1.00000
INFO      400    1      0.05326362   -78.27397518   -78.22071156  2803.216934    1.00000
```

Files: `md/MDENERGY` energies per step, `md/SHSTATE` running state, `md/SHPROB` hopping probabilities, `md/MOVIE.xyz` geometries and velocities.

Hexatriene on T1 from the minimum of `opt_hexatriene.py`, the three lowest triplet roots: with `si_reks_2spin [2]` cassette 0 is the triplet cassette, and `REKS` reads the roots of cassette 0 whatever its 2S. From [`md_hexatriene.py`](https://reksstudio.github.io/v2/inputs/md_hexatriene.py.txt):

```python
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

One step (T1, T2, T3 gradients and three NAC vectors) takes 39 s on 8 threads (31–52 s over 50 steps).

Convergence: `fail_on_maxiter False`: an SCF that reaches `maxiter` prints `Energy and/or wave function did not converge, but proceeding anyway.` and the step continues; `grep -c "did not converge" md_*.out` counts such steps.

Hexatriene thresholds: `d_convergence 1e-6`, `reks_cpreks_conv 1e-8`. With the defaults (1e-8, 1e-9), the same 50 steps also converge at every step; CP-REKS in 12–15 iterations; E<sub>tot</sub> drift +0.026, range 0.071 kcal mol⁻¹. n<sub>a</sub> of pair (a, f) stays 2.000000 along the run.

To 50 fs: the same runs continued to 50 fs (dt 0.5 fs, 100 steps; dt 0.25 fs, 200 steps) converge at every step and stay on T1; E<sub>tot</sub> drift +0.23 and +0.37, range 0.31 and 0.40, largest step 0.11 kcal mol⁻¹ in both.

### Check the trajectory {#check-trajectory}

Total energy (column Total of `md/MDENERGY`), for the runs above and for reruns from the same start with the other time step (C₂H₄ `dt=0.5`, `nsteps=200`; hexatriene `dt=0.25`, `nsteps=100`):

| Molecule | dt / fs | Steps | Drift / kcal mol⁻¹ | Range / kcal mol⁻¹ | Largest step / kcal mol⁻¹ | Span of E<sub>pot</sub> / kcal mol⁻¹ |
| - | - | - | - | - | - | - |
| C₂H₄ | 0.25 | 400 | −0.13 | 0.18 | 0.032 | 58.8 |
| C₂H₄ | 0.5 | 200 | −10.4 | 10.6 | 4.97 | 111.1 |
| hexatriene | 0.5 | 50 | +0.13 | 0.18 | 0.049 | 7.2 |
| hexatriene | 0.25 | 100 | +0.11 | 0.16 | 0.051 | 7.2 |

![Kinetic, potential and total energy along the C2H4 and hexatriene trajectories; total energy for time steps 0.5 and 0.25 fs](https://reksstudio.github.io/v2/figures/md_energy.svg)

Left: C₂H₄ on S1; right: hexatriene on T1. Top: E<sub>kin</sub>, E<sub>pot</sub> − E<sub>pot</sub>(0), E<sub>tot</sub> − E<sub>tot</sub>(0), dt 0.25 fs (C₂H₄) and 0.5 fs (hexatriene). Bottom: E<sub>tot</sub> − E<sub>tot</sub>(0) for dt 0.5 and 0.25 fs.

Energy: C₂H₄ exchanges 59 kcal mol⁻¹ between kinetic and potential energy, hexatriene 7 kcal mol⁻¹. At dt 0.5 fs, the C₂H₄ E<sub>tot</sub> drops by 2.95 kcal mol⁻¹ at 62.0 fs, 1.96 at 84.0 fs, and 4.97 at 94.5 fs: at 62.0 and 94.5 fs the SCF solution changes (Solution), at 84.0 fs a hop rescales the velocities uniformly (State). For hexatriene, the range of E<sub>tot</sub> is 0.18 kcal mol⁻¹ at dt 0.5 fs and 0.16 kcal mol⁻¹ at 0.25 fs.

Solution: n<sub>a</sub> of the active pair per step, `grep "n_a =" md_c2h4.out`. The orbital labelled (a) carries n<sub>a</sub> ≥ 1 at every step (generation-0 ordering, [§12](https://reksstudio.github.io/v2/manual/run-control/index.md#fons)). dt 0.25 fs: (a) is 8A at all 401 steps, n<sub>a</sub> ≥ 1.010412, continuous. dt 0.5 fs: n<sub>a</sub> jumps from 1.760221 to 1.998407 between steps 123 and 124, and from 1.999810 to 1.368579 between steps 188 and 189, after (a) is 9A at steps 185–188; E<sub>tot</sub> drops at the same steps. If n<sub>a</sub> and the Total column jump together between two steps, the solution has changed. Steps with an unconverged SCF: [SCF hits MAXITER or continues unconverged](https://reksstudio.github.io/v2/manual/diagnose/index.md#diag-maxiter).

State: `md/SHSTATE`. C₂H₄, dt 0.25 fs: S1 → S2 at 37.75 and 80.25 fs, back at 39.25 and 87.25 fs; at 37.75 and 80.25 fs the velocities are rescaled uniformly (`no solution to find rescale factor, but velocity is simply rescaled`). C₂H₄, dt 0.5 fs: S1 → S0 at 83.5 and 90.5 fs, S0 → S1 at 84.0 fs (rescaled uniformly). Hexatriene: T1 throughout. The target root is an energy index, not a state character ([Quasi-degenerate roots](https://reksstudio.github.io/v2/manual/diagnose/index.md#diag-quasi-degenerate)).

### Worked inputs {#dynamics-inputs}

Scripts in run order, in one directory with `reks_dlfind.py` and `reks_unixmd.py` (imported, not run).

| File | Calculation | Result |
| - | - | - |
| [`reks_dlfind.py`](https://reksstudio.github.io/v2/inputs/reks_dlfind.py.txt) | `optimize(method, molecule, restart_file, tolerance=4.5e-4, maxcycle=100)`: DL-FIND L-BFGS in delocalized internal coordinates on the target root; `tolerance`: largest gradient component in those coordinates, atomic units | — |
| [`reks_unixmd.py`](https://reksstudio.github.io/v2/inputs/reks_unixmd.py.txt) | `molecule(xyz_file, nstates, temperature, charge=0, seed=1)`, `REKS(molecule, method, restart_file)`: PyUNIxMD QM interface, roots of cassette 0 | — |
| [`first_c2h4_90.py`](https://reksstudio.github.io/v2/inputs/first_c2h4_90.py.txt) | [Worked inputs](https://reksstudio.github.io/v2/manual/first-calculation/index.md#first-inputs); `python first_c2h4_90.py rks` writes `first_c2h4_90_rks.wfn.npy`, read by [One gradient() call](https://reksstudio.github.io/v2/manual/dynamics/index.md#one-gradient) | — |
| [`opt_c2h4.py`](https://reksstudio.github.io/v2/inputs/opt_c2h4.py.txt) | S0 of C₂H₄, SSR(2,2) BH\&HLYP/6-31G(d), DF, RKS seed, DL-FIND | E(S0) = −78.52863042 E<sub>h</sub>, 8 gradients |
| [`md_c2h4.py`](https://reksstudio.github.io/v2/inputs/md_c2h4.py.txt) | surface hopping on S1 from the `opt_c2h4.py` geometry, 3 states, 400 × 0.25 fs | hops S1 → S2 at 37.75 and 80.25 fs, back at 39.25 and 87.25 fs; E<sub>tot</sub> drift −0.13 kcal mol⁻¹, range 0.18 kcal mol⁻¹ |
| [`opt_hexatriene.py`](https://reksstudio.github.io/v2/inputs/opt_hexatriene.py.txt) | T1 of all-trans-hexatriene, SI-SA-REKS(6,6) BH\&HLYP/6-31G(d), DF, π window, DL-FIND | E(T1) = −233.17880483 E<sub>h</sub>, 10 gradients, 5.5 min on 8 threads |
| [`md_hexatriene.py`](https://reksstudio.github.io/v2/inputs/md_hexatriene.py.txt) | surface hopping on T1 from the `opt_hexatriene.py` geometry, 3 triplet states, 50 × 0.5 fs | T1 throughout; E<sub>tot</sub> drift +0.13 kcal mol⁻¹, range 0.18 kcal mol⁻¹; 39 s per step on 8 threads |

## Linked files

[inputs/reks_dlfind.py](https://reksstudio.github.io/v2/inputs/reks_dlfind.py.txt)

```python
"""Geometry optimization of a REKS state with DL-FIND.   pip install libdlfind"""
import numpy as np
import psi4
from libdlfind import dl_find
from libdlfind.callback import dlf_get_gradient_wrapper, dlf_put_coords_wrapper, make_dlf_get_params


def optimize(method, molecule, restart_file, tolerance=4.5e-4, maxcycle=100):
    """Minimize the state that si_reks_grad follows (tolerance: largest gradient component, a.u.).
    Returns its energy and wavefunction; molecule ends at the optimized geometry."""
    molecule.fix_com(True)
    molecule.fix_orientation(True)
    molecule.update_geometry()
    x0 = molecule.geometry().np
    natom = molecule.natom()
    last = {"restart_file": restart_file, "energy": 0.0}
    errors = []

    @dlf_get_gradient_wrapper
    def gradient(x, iimage, kiter):
        if errors:
            return last["energy"], np.zeros_like(x)
        try:
            molecule.set_geometry(psi4.core.Matrix.from_array(np.array(x)))
            g, wfn = psi4.gradient(method, molecule=molecule, return_wfn=True,
                                   restart_file=last["restart_file"])
        except Exception as error:
            # DL-FIND cannot be interrupted from here: a zero gradient ends it, then the error is raised
            print(f"reks_dlfind: {type(error).__name__}; stopping DL-FIND", flush=True)
            errors.append(error)
            return last["energy"], np.zeros_like(x)
        wfn.to_file("dlfind_orbitals.wfn")
        last.update(restart_file="dlfind_orbitals.wfn.npy", energy=psi4.variable("CURRENT ENERGY"),
                    x=np.array(x), wfn=wfn)
        return last["energy"], g.np

    # DL-FIND: L-BFGS (iopt 3) in delocalized internal coordinates (icoord 3); all atoms active,
    # nuclear charges for the internal coordinates
    spec = np.concatenate([np.ones(natom, dtype=int),
                           [round(molecule.Z(i)) for i in range(natom)],
                           np.zeros(natom, dtype=int)])
    params = make_dlf_get_params(coords=x0, spec=spec, nz=natom, icoord=3, iopt=3, tolerance=tolerance,
                                 tolerance_e=tolerance / 450, maxcycle=maxcycle, printl=2)
    dl_find(nvarin=x0.size, nspec=spec.size, dlf_get_gradient=gradient, dlf_get_params=params,
            dlf_put_coords=dlf_put_coords_wrapper(lambda *args: None))
    if errors:
        raise errors[0]
    molecule.set_geometry(psi4.core.Matrix.from_array(last["x"]))
    return last["energy"], last["wfn"]
```

[inputs/reks_unixmd.py](https://reksstudio.github.io/v2/inputs/reks_unixmd.py.txt)

```python
"""PyUNIxMD interface to Psi4 REKS: SSR energies, gradients and NACs from one gradient() per step."""
import os
import random
import numpy as np
import psi4
from molecule import Molecule
from qm.qm_calculator import QM_calculator


def molecule(xyz_file, nstates, temperature, charge=0, seed=1):
    """PyUNIxMD molecule from an xyz file (Angstrom); velocities: one Maxwell-Boltzmann draw at temperature (K)."""
    atoms = [line for line in open(xyz_file).read().split("\n")[2:] if line.strip()]
    mol = Molecule(geometry=f"{len(atoms)}\n\n" + "\n".join(a + " 0 0 0" for a in atoms),
                   nstates=nstates, unit_pos="angs", charge=charge)
    rng = np.random.default_rng(seed)
    random.seed(seed)
    kT = temperature / 315775.02                 # Eh; masses and velocities in atomic units
    v = rng.normal(size=mol.pos.shape) * np.sqrt(kT / mol.mass)[:, None]
    mol.vel = v - (mol.mass[:, None] * v).sum(axis=0) / mol.mass.sum()
    return mol


class REKS(QM_calculator):

    def __init__(self, molecule, method, restart_file):
        super().__init__()
        self.qm_prog, self.qm_method = "psi4", "REKS"
        self.method = method
        self.restart_file = os.path.abspath(restart_file)
        # every state's gradient and the NAC vectors come from the same call
        self.re_calc = False
        molecule.l_nacme = False

    def get_data(self, molecule, base_dir, bo_list, dt, istep, calc_force_only, traj=None):
        atoms = "\n".join(f"{s} {x} {y} {z}" for s, (x, y, z) in zip(molecule.symbols, molecule.pos))
        mol = psi4.geometry(f"{int(molecule.charge)} 1\n{atoms}\nunits bohr\nsymmetry c1\nno_com\nno_reorient")
        n = molecule.nst
        # running state first: its gradient is the one gradient() returns; NAC pairs add the other states
        psi4.set_options({"si_reks_grad": [[bo_list[0]]],
                          "si_reks_nac": [[[i, j] for i in range(n) for j in range(i + 1, n)]]})
        g, wfn = psi4.gradient(self.method, molecule=mol, return_wfn=True, restart_file=self.restart_file)
        self.restart_file = os.path.join(base_dir, "md_orbitals.wfn.npy")
        wfn.to_file(self.restart_file)

        # roots of cassette 0; a 2S > 0 cassette carries a sector prefix (REKS SECTOR s SSR ENERGIES K=0)
        key = next(k for k in wfn.array_variables() if k.endswith("SSR ENERGIES K=0"))
        energies = wfn.array_variable(key).np.ravel()
        for i in range(n):
            molecule.states[i].energy = energies[i]
            molecule.states[i].force = -wfn.array_variable(f"SSR ROOT {i} GRADIENT CASSETTE 0").np
            for j in range(i + 1, n):
                d = wfn.array_variable(f"SSR NAC {i} {j} CASSETTE 0").np
                molecule.nac[i, j], molecule.nac[j, i] = d, -d
```

[inputs/opt_hexatriene.py](https://reksstudio.github.io/v2/inputs/opt_hexatriene.py.txt)

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

[inputs/md_hexatriene.py](https://reksstudio.github.io/v2/inputs/md_hexatriene.py.txt)

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

[inputs/first_c2h4_90.py](https://reksstudio.github.io/v2/inputs/first_c2h4_90.py.txt)

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

[inputs/opt_c2h4.py](https://reksstudio.github.io/v2/inputs/opt_c2h4.py.txt)

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

[inputs/md_c2h4.py](https://reksstudio.github.io/v2/inputs/md_c2h4.py.txt)

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
