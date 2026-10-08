---
title: Start
---

## 1\. Start {#overview}

REKS Studio is the REKS solver of this Psi4 branch, selected with `reference reks`. It gives:

-   **REKS(N,M)**: ensemble DFT with `N` active electrons in `M` active orbitals, distributed over GVB-like geminal (paired-orbital) configurations whose fractional occupation numbers (FONs) are optimized self-consistently together with the orbitals.
-   **SA-REKS**: an ensemble of such configurations averaged with fixed weights; its energy is what the SCF optimizes.
-   **SI-SA-REKS** (SSR): a post-SCF eigenproblem in a basis of catalog configurations (a cassette, chosen independently of the SA ensemble) that gives adiabatic state energies, densities and transition properties, gradients and couplings, from one SCF.

A functional, a basis and an SCF type are chosen as for any Psi4 reference, and `psi4.energy("<functional>")` is called as usual, e.g. `psi4.energy("bhhlyp")`; the functional builds the Kohn–Sham matrices of every microstate (§microstate). `psi4.energy("scf")` runs REKS with Hartree–Fock exchange and no functional; its setup block then has no `XC evaluation` line.

### Tasks

| Task | Input | Output |
| --- | --- | --- |
| First calculation of a new molecule | RKS seed, `restart_file`, §guess_active_window (§first-calculation) | §check-solution |
| Energies of several states | default cassette, or §si_reks_configs | §ssr-energies |
| S1 gradient and S1/S2 coupling | `"si_reks_grad": [[1]]`, `"si_reks_nac": [[[1, 2]]]`, `psi4.gradient(...)` | §state-gradient, §nac |
| Transition dipoles, oscillator strengths | default §si_reks_analysis | §transition-dipole |
| Dipoles, charges, bond indices, NTOs, relaxed properties, EKT | §state-properties | §print-order |
| Triplet states | `"si_reks_2spin": [2]` (§input-patterns) | §ssr-energies |
| Singlet–triplet gaps | §si_reks_2spin with two manifolds | §spin-state-energetics |
| Scan with restarts | §restart, §guess_active_window | §first-scans |
| Look up an option | §option-table, [Index](reference/#index) | — |
| Identify a printed block | — | §print-order |
| A problem in the output | — | §diagnose |

### Minimal input {#minimal-input}

```psithon
set {
    reference  reks
    reks       [ 2, 2 ]
}
energy('bhhlyp')
```

Only `reference reks` and `reks [N, M]` are required. Absent `sa_reks_configs`: the catalog's default SA pool (§sa_reks_configs). Absent `sa_reks_weights`: uniform weights. Absent `si_reks_configs`: one cassette spanning the full configuration block of the run's lowest manifold (§si_reks_configs). For `reks [2, 2]` the defaults are SA = PPS1, OSS1 (weights 0.5) and the cassette PPS1, OSS1, DES1, printed as `3SI-2SA-REKS(2,2)`. A new molecule starts from seeded and checked active orbitals (§first-calculation).

### Explicit SA pool and SI cassettes {#explicit-input}

SI-SA-REKS(4,4) with an explicit SA pool, weights and two SI cassettes; `PPS2` and `OSS3` belong to pairing scheme 1 (`SI pools` prints the definition of every name, §pairing-scheme):

```python
psi4.set_options({
    'reference':       'reks',
    'reks':            [4, 4],
    'sa_reks_configs': ['PPS1', 'OSS1', 'OSS2'],
    'sa_reks_weights': [0.5, 0.25, 0.25],
    'si_reks_configs': [['PPS1', 'OSS1'], ['PPS2', 'OSS3']],
})
psi4.energy('scf')
```

or as PSithon (`.dat`) input:

```psithon
set {
    reference        reks
    reks             [ 4, 4 ]
    sa_reks_configs  [ PPS1, OSS1, OSS2 ]
    sa_reks_weights  [ 0.5, 0.25, 0.25 ]
    si_reks_configs  [ [PPS1, OSS1], [PPS2, OSS3] ]
}
energy('scf')
```

For linear H₄ (sto-3g, H–H 0.9 Å, `symmetry c1`) the first cassette prints:

@@fragment start-adiabatic@@

Without `si_reks_grad` and `si_reks_nac`, as in both inputs above, `energy()` returns E<sub>SA</sub> (`CURRENT ENERGY` = `SCF TOTAL ENERGY`), not an SSR state energy: −1.643432513968 E<sub>h</sub> for this H₄ run, against S0 = −2.122159772781 E<sub>h</sub>. With a followed state: §si_reks_grad. Energies in the output and their variables:

| Quantity | Printed in | Variable |
| --- | --- | --- |
| SA-REKS ensemble energy E<sub>SA</sub>, plus E<sub>pen</sub> with §reks_deloc_ipr_penalty | `@REKS Final Energy` (`@DF-REKS` with density fitting), `Energetics` | `SCF TOTAL ENERGY` |
| SA configuration energies (PPS, OSS, …), not states | `SA-REKS energy decomposition` | — |
| SSR states S0, S1, … of cassette e | `Adiabatic states` | `SSR ENERGIES K=e` |
| Followed state, gradient | `Gradient request` (`*`), `Returned gradient` | `CURRENT ENERGY`, `CURRENT GRADIENT` |

From Python:

```python
e, wfn = psi4.energy("bhhlyp", return_wfn=True)
ssr = wfn.array_variable("SSR ENERGIES K=0").np.ravel()   # S0, S1, ... of cassette 0
e_sa = psi4.variable("SCF TOTAL ENERGY")
```

### Required and rejected settings

| Setting | Rule |
| --- | --- |
| Molecule symmetry | C1; any other point group is an input error (below). |
| Molecule multiplicity | The canonical value (§reks). |
| `DIIS`, `SOSCF` | Switched off by REKS. |
| `LEVEL_SHIFT`, `LEVEL_SHIFT_CUTOFF` | Unset: REKS defaults (§level-shift). |
| `PCM`, `DDX`, `PE`, `MOM_START`, `FRAC_START` | Rejected with an input error. |

H₂ without `symmetry c1`:

@@fragment err-c1@@

### Worked inputs {#worked-inputs}

Complete inputs, each run with this build. Run a `.dat` file with `psi4 file.dat`, a `.py` file with `python file.py`. Seeded first calculations: §first-inputs.

| File | Calculation | Result |
| --- | --- | --- |
| [`reks22_h2.dat`](../inputs/reks22_h2.dat) | SI-SA-REKS(2,2), H₂ (0.74 Å), BH&HLYP/cc-pVDZ, default pools | S0 = −1.159238310496 Eh |
| [`reks44_h4_singlet_triplet.py`](../inputs/reks44_h4_singlet_triplet.py) | SI-SA-REKS(4,4), linear H₄ (1.6 Å), BH&HLYP/6-31G; SA `[PPS1, OSS1]` + `[T_PPS1]`, full SI cassette on 2S = 0 and 2S = 2 | S0 = −2.101236072673, T1 = −2.049371220444 Eh |
| [`reks44_h4_heisenberg.dat`](../inputs/reks44_h4_heisenberg.dat) | SI-SA-REKS(4,4), linear H₄ (1.6 Å), BH&HLYP/6-31G; sectors 2S = 0, 2, 4; §spin-state-energetics | S0 = −2.072348700793, T1 = −2.045831290236, Q1 = −1.888567571356 Eh |
| [`reks22_h2_triplet_gradient.dat`](../inputs/reks22_h2_triplet_gradient.dat) | SI-SA-REKS(2,2), H₂ (1.6 Å), BH&HLYP/6-31G(d); analytic gradient and relaxed properties of T1 (§si_reks_grad) | T1 = −0.959546621300 Eh; dE/dz(H1) = 0.041765470832 Eh/bohr |
