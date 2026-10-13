---
title: Wide Geminals
---

## 4\. Wide Geminals {#wide-geminals}

A geminal of width w holds two electrons in w orbitals (§reks_geminal_widths). Example: BH. The boron lone pair correlates with both π orbitals, REKS(2,3); the B–H bond pair is added in REKS(4,5) and REKS(4,6). Procedure as in §first-calculation: seed → slots → start → check. The orbital part of this page runs HF with `reks_fon_interp_delta` 10<sup>10</sup>: then f(x) = √x (§coupling) and E(PPS1) is the energy of a product of geminals, which is checked exactly (§wide-check).

### Geminal of width w {#wide-pps}

The PPS geminal over the slots p<sub>1</sub>, …, p<sub>w</sub> of one geminal:

$$
\Phi_0 = \sum_{k=1}^{w} s_k \sqrt{\tfrac{n_{p_k}}{2}}\;|p_k\bar p_k|, \qquad \sum_{k=1}^{w} n_{p_k} = 2, \qquad s = (+, -, \dots, -).
$$

For w = 2 this is Φ<sub>0</sub> of §geminals. The first slot of each geminal carries the + sign; in a seed it holds a doubly occupied orbital. Geminals of scheme 0, as `Pairing scheme 0` prints them in `Post-Iterations`:

| `reks` | `reks_geminal_widths` | Geminals of scheme 0 |
| --- | --- | --- |
| `[2, 3]` | `[3]` | (a,b,c) |
| `[2, 4]` | `[4]` | (a,b,c,d) |
| `[4, 5]` | `[2, 3]` | (a,c,d) & (b,e) |
| `[4, 6]` | `[3, 3]` | (a,d,f) & (b,c,e) |

Token k of §guess_active_window fills slot k (§start-reks); the window lists the orbitals in slot order a, b, c, …, not geminal by geminal.

### Lone pair: REKS(2,3) {#wide-lone-pair}

BH, r = 1.2324 Å, cc-pVDZ. RHF seed (`wide_bh_23.py rhf`, §wide-inputs): 1A B 1s, 2A σ (−0.6469), 3A σ, HOMO (−0.3449), 4A and 5A π, LUMO and LUMO+1 (0.0587), 6A σ\*, LUMO+2 (0.2563). The core holds 1A and 2A; the default window (HOMO, LUMO, LUMO+1) is the lone pair and both π.

```python
psi4.set_options({"basis": "cc-pvdz", "scf_type": "pk",
                  "reference": "reks", "reks": [2, 3], "reks_geminal_widths": [3],
                  "sa_reks_configs": ["PPS1"], "si_reks_configs": [[]],
                  "reks_fon_interp_delta": 1e10,
                  "e_convergence": 1e-10, "d_convergence": 1e-8})
e, wfn = psi4.energy("hf", return_wfn=True, restart_file="wide_bh_rhf.wfn.npy")
```

| Run | Slots | E(PPS1) / E<sub>h</sub> | Iterations | n<sub>a</sub> / n<sub>b</sub> / n<sub>c</sub> |
| --- | --- | --- | --- | --- |
| REKS(2,2) | HOMO, LUMO (no window) | −25.1469095837 | 14 | 1.903418 / 0.096582 |
| REKS(2,3) | HOMO, LUMO, LUMO+1 (no window) | −25.1640880605 | 17 | 1.853892 / 0.073054 / 0.073054 |
| REKS(2,3) | window HOMO, LUMO, LUMO+2 | −25.1492681987 | 88 | 1.903045 / 0.093332 / 0.003622 |
| CASSCF(2,3), same core | — | −25.1640880604 | — | — |

-   **REKS(2,2):** one π in the geminal (n 0.096582), the other π outside it; 17.2 mE<sub>h</sub> above REKS(2,3).
-   **REKS(2,3):** both π, equal FONs; E(PPS1) = CASSCF(2,3) to 10<sup>−10</sup> E<sub>h</sub>.
-   **LUMO+2 in the window:** slot c starts from σ\* and converges to a σ orbital at n 0.003622; the second π stays outside the geminal; 14.8 mE<sub>h</sub> above REKS(2,3).

REKS(2,2), then REKS(2,3):

@@fragment wide-22-fons@@

@@fragment wide-23-fons@@

The window with LUMO+2:

@@fragment wide-23-sigma@@

<figure class="mo">
<div class="g n3">
<div class="h">a</div><div class="h">b</div><div class="h">c</div>
<div><img src="../../figures/wide_bh22_a.svg" alt="BH REKS(2,2) slot a, lone pair" loading="lazy" decoding="async" width="173" height="134"><span><b>a</b> REKS(2,2) · n 1.903418</span></div>
<div><img src="../../figures/wide_bh22_b.svg" alt="BH REKS(2,2) slot b, one pi orbital" loading="lazy" decoding="async" width="173" height="134"><span><b>b</b> π · n 0.096582</span></div>
<div></div>
<div><img src="../../figures/wide_bh23_a.svg" alt="BH REKS(2,3) slot a, lone pair" loading="lazy" decoding="async" width="173" height="134"><span><b>a</b> REKS(2,3) · n 1.853892</span></div>
<div><img src="../../figures/wide_bh23_b.svg" alt="BH REKS(2,3) slot b, pi orbital" loading="lazy" decoding="async" width="173" height="134"><span><b>b</b> π · n 0.073054</span></div>
<div><img src="../../figures/wide_bh23_c.svg" alt="BH REKS(2,3) slot c, second pi orbital" loading="lazy" decoding="async" width="173" height="134"><span><b>c</b> π · n 0.073054</span></div>
<div><img src="../../figures/wide_bhsig_a.svg" alt="BH REKS(2,3) with sigma* window, slot a" loading="lazy" decoding="async" width="173" height="134"><span><b>a</b> σ* window · n 1.903045</span></div>
<div><img src="../../figures/wide_bhsig_b.svg" alt="BH REKS(2,3) with sigma* window, slot b, pi" loading="lazy" decoding="async" width="173" height="134"><span><b>b</b> π · n 0.093332</span></div>
<div><img src="../../figures/wide_bhsig_c.svg" alt="BH REKS(2,3) with sigma* window, slot c, sigma" loading="lazy" decoding="async" width="173" height="134"><span><b>c</b> σ · n 0.003622</span></div>
</div>
<figcaption>BH, HF/cc-pVDZ, δ = 10<sup>10</sup>, converged active orbitals; B left, H right. Slice through the B–H axis, turned for each orbital to the plane of its largest amplitude (a π orbital in the plane of its lobes); blue + / copper −; slot, run, FON.</figcaption>
</figure>

### Bond and lone pair: REKS(4,5), REKS(4,6) {#wide-two-pairs}

REKS(4,5) with widths [2, 3] puts the lone pair and both π in (a,c,d), the B–H bond and σ\* in (b,e). Straight from the RHF seed the SCF does not reach it: slot a takes the RHF MO 2A, slot b the RHF MO 3A, and after `MAXITER` (100) E lies above REKS(4,4) (the stage sets `"fail_on_maxiter": False` to finish; the `kA` labels below number the orbitals of the run by ε):

@@fragment wide-45-rhf@@

Each wider space reads the orbitals of the previous one (§restart). A file written by REKS stores the core, then the active orbitals in slot order a, b, …, then the virtuals; the `kA` labels of `Post-Iterations` number the orbitals by ε and are not columns. Integer tokens of the window are 0-based columns of the read file; `python wide_bh_45.py columns <file>` prints the Mulliken population of columns 0–7 on B and H and their share of p<sub>x</sub>, p<sub>y</sub> functions (π). The REKS(2,3) file, then the REKS(4,5) file:

@@fragment wide-columns23@@

@@fragment wide-columns45@@

| Run | Seed | Columns of the seed | Window | E(PPS1) / E<sub>h</sub> | Iterations |
| --- | --- | --- | --- | --- | --- |
| REKS(4,4) | RHF | — | default | −25.1540332485 | 24 |
| REKS(4,5) [2,3] | RHF | — | default | −25.1432631860, not converged | 100 |
| REKS(2,3) [3] | RHF | — | default | −25.1640880605 | 17 |
| REKS(4,5) [2,3] | REKS(2,3) | 1 bond, 2 lone pair, 3 4 π, 5 σ\* | `[2, 1, 3, 4, 5]` | −25.1775062082 | 25 |
| REKS(4,6) [3,3] | REKS(4,5) | 1 lone pair, 2 bond, 3 4 π, 5 σ\*, 6 σ | `[1, 2, 5, 3, 6, 4]` | −25.1828261871 | 42 |

B–H bond: H 0.57; lone pair: on B, π 0.00; π: 0.95; σ\* (column 5): H 0.71 and 0.53; column 6: on B, π 0.00. The report prints the swaps that bring the columns into the slots. A file of another active space restores the orbitals only: `REKS READ: active space mismatch (2,3) -> (4,5); FON not restored, falling back to default`.

@@fragment wide-45-seeded@@

@@fragment wide-46-seeded@@

<figure class="mo">
<div class="g n2">
<div class="h">(a, d, f)</div><div class="h">(b, c, e)</div>
<div><img src="../../figures/wide_bh46_a.svg" alt="BH REKS(4,6) slot a, lone pair" loading="lazy" decoding="async" width="173" height="134"><span><b>a</b> lone pair · n 1.860529</span></div>
<div><img src="../../figures/wide_bh46_b.svg" alt="BH REKS(4,6) slot b, B-H bond" loading="lazy" decoding="async" width="173" height="134"><span><b>b</b> B–H bond · n 1.978075</span></div>
<div><img src="../../figures/wide_bh46_d.svg" alt="BH REKS(4,6) slot d, pi" loading="lazy" decoding="async" width="173" height="134"><span><b>d</b> π · n 0.069735</span></div>
<div><img src="../../figures/wide_bh46_c.svg" alt="BH REKS(4,6) slot c, sigma*" loading="lazy" decoding="async" width="173" height="134"><span><b>c</b> σ* · n 0.016410</span></div>
<div><img src="../../figures/wide_bh46_f.svg" alt="BH REKS(4,6) slot f, second pi" loading="lazy" decoding="async" width="173" height="134"><span><b>f</b> π · n 0.069735</span></div>
<div><img src="../../figures/wide_bh46_e.svg" alt="BH REKS(4,6) slot e, second correlating sigma" loading="lazy" decoding="async" width="173" height="134"><span><b>e</b> σ · n 0.005515</span></div>
</div>
<figcaption>BH REKS(4,6) [3,3], HF/cc-pVDZ, δ = 10<sup>10</sup>, converged active orbitals; one column per geminal of scheme 0; slices as in the REKS(2,3) figure; slot, character, FON.</figcaption>
</figure>

### Check the solution {#wide-check}

-   **Exact energy:** with HF and δ = 10<sup>10</sup>, E(PPS1) equals ⟨Ψ|H|Ψ⟩ of the product Ψ of the geminals Φ<sub>0</sub> (§wide-pps) in the converged orbitals, with n<sub>p</sub> from `Post-Iterations`; H is the Hamiltonian of the active space with the core frozen. Minimizing ⟨Ψ|H|Ψ⟩ over the coefficients at fixed orbitals lowers nothing:

@@fragment wide-check@@

-   **CASCI** in the same orbitals is lower for two geminals (0.31 mE<sub>h</sub> for REKS(4,4), 1.2 for REKS(4,5), 1.8 for REKS(4,6)): a product of geminals has no correlation between the geminals. For one geminal CASCI = E(PPS1).
-   **Equal FONs** of the two π are the cylindrical symmetry of BH. With one π in the geminal (REKS(2,2), LUMO+2 in the window) the other π stays empty (§wide-lone-pair).

### Gradients {#wide-gradients}

All roots of the SI cassette in one `gradient()` (§grad-fd), from the converged file of each active space: REKS(2,3) the full cassette, REKS(4,5) and REKS(4,6) every configuration of scheme 0:

```python
psi4.set_options({"si_reks_configs": [[["single-scheme:0"]]],
                  "si_reks_grad": [list(range(25))]})
g, wfn = psi4.gradient("hf", return_wfn=True, restart_file="wide_bh_reks45.wfn.npy")
```

Analytic against a 5-point central finite difference of the same roots (h = 0.005 a<sub>0</sub>, all six Cartesians, each displaced point read from the same file), HF, δ = 10<sup>10</sup>:

@@fragment wide-gradient@@

<figure>
<img src="../../figures/wide_grad_fd.svg" alt="BH: analytic against finite-difference gradient components of all SI roots of REKS(2,3), REKS(4,5) and REKS(4,6); absolute difference against the size of the component" loading="lazy" decoding="async" width="710" height="371">
<figcaption>(a) Analytic against FD gradient components of BH, all roots: REKS(2,3) S0–S5, REKS(4,5) [2,3] S0–S24, REKS(4,6) [3,3] S0–S56. (b) |analytic − FD| against |FD|. S18/S19 of REKS(4,5) and S23/S24 of REKS(4,6), 4.4 and 0.58 mE<sub>h</sub> apart, enter as their sums.</figcaption>
</figure>

### States: SI-SA-REKS(2,3) {#wide-states}

BH&HLYP/cc-pVDZ, RKS seed, the lone-pair geminal of §wide-lone-pair, default `reks_fon_interp_delta`; the lone pair is nearly closed (n<sub>a</sub> 1.998932). SA: the default pool `[PPS1, OSSc1, OSSb1, OSSa1]` and the three all-α determinants of the geminal (§sa_reks_extra); SI on 2S = 0 and 2S = 2 (§si_reks_2spin); TRAH (§scf-engines) to `d_convergence` 10<sup>−8</sup>:

```python
"sa_reks_extra": [[1, 1, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0]],   # |ab|, |ac|, |bc|
"si_reks_configs": [[["full"]], [["full"]]],
"si_reks_2spin": [0, 2],
"reks_use_trah": True, "reks_gvb_diis": False,
```

@@fragment wide-states@@

S1/S2 (¹Π) and T1/T2 (³Π) are degenerate pairs, each split by 1.6·10<sup>−7</sup> E<sub>h</sub>. With `|ab|` alone the SA ensemble favours one π: S1/S2 2.360 / 2.391 eV, T1/T2 1.131 / 1.151 eV.

### Worked inputs {#wide-inputs}

Each file runs in stages: `python file.py <stage>`, the stages in the order listed in the file.

| File | Calculation | Result |
| --- | --- | --- |
| [`wide_bh_23.py`](../../inputs/wide_bh_23.py) | BH lone pair, HF/cc-pVDZ, δ = 10<sup>10</sup>: RHF seed; REKS(2,2); REKS(2,3); REKS(2,3) with σ\* in the window; CASSCF(2,3) | E(PPS1) = −25.1640880605 E<sub>h</sub>; CASSCF −25.1640880604 E<sub>h</sub> |
| [`wide_bh_45.py`](../../inputs/wide_bh_45.py) | BH bond + lone pair, HF/cc-pVDZ, δ = 10<sup>10</sup>: REKS(4,4); REKS(4,5) from RHF; seed chain REKS(2,3) → REKS(4,5) → REKS(4,6) | E(PPS1) = −25.1775062082 (4,5), −25.1828261871 (4,6) E<sub>h</sub> |
| [`wide_bh_states.py`](../../inputs/wide_bh_states.py) | SI-SA-REKS(2,3), BH&HLYP/cc-pVDZ, RKS seed; SA default pool + all-α \|ab\|, \|ac\|, \|bc\|; SI on 2S = 0, 2; TRAH | E<sub>SA</sub> = −25.184519244590 E<sub>h</sub>; S0 −25.273256917916, T1 −25.232772136476, S1 −25.185054403019 E<sub>h</sub> |
