# Wide Geminals — REKS Studio Manual

HTML: <https://reksstudio.github.io/v2/manual/wide-geminals/>

Psi4 f31cf1f94, 2026-10-15: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

[Manual](https://reksstudio.github.io/v2/manual/index.md) › Wide Geminals

# Wide Geminals

Chapter 4 of the REKS Studio user manual

## 4. Wide Geminals {#wide-geminals}

A geminal of width w holds two electrons in w orbitals ([`REKS_GEMINAL_WIDTHS`](https://reksstudio.github.io/v2/options/REKS_GEMINAL_WIDTHS.md)). Example: BH. The boron lone pair correlates with both π orbitals, REKS(2,3); the B–H bond pair is added in REKS(4,5) and REKS(4,6). Procedure as in [§3](https://reksstudio.github.io/v2/manual/first-calculation/index.md#first-calculation): seed → slots → start → check. The orbital part of this page runs HF with `reks_fon_interp_delta` 10<sup>10</sup>: then f(x) = √x ([Coupling Δ and factor f](https://reksstudio.github.io/v2/manual/concepts/index.md#coupling)) and E(PPS1) is the energy of a product of geminals, which is checked exactly ([Check the solution](https://reksstudio.github.io/v2/manual/wide-geminals/index.md#wide-check)).

### Geminal of width w {#wide-pps}

The PPS geminal over the slots p<sub>1</sub>, …, p<sub>w</sub> of one geminal:

$$
\Phi_0 = \sum_{k=1}^{w} s_k \sqrt{\tfrac{n_{p_k}}{2}}\;|p_k\bar p_k|, \qquad \sum_{k=1}^{w} n_{p_k} = 2, \qquad s = (+, -, \dots, -).
$$

For w = 2 this is Φ<sub>0</sub> of [Geminals](https://reksstudio.github.io/v2/manual/concepts/index.md#geminals). The first slot of each geminal carries the + sign; in a seed it holds a doubly occupied orbital. Geminals of scheme 0, as `Pairing scheme 0` prints them in `Post-Iterations`:

| `reks` | `reks_geminal_widths` | Geminals of scheme 0 |
| - | - | - |
| `[2, 3]` | `[3]` | (a,b,c) |
| `[2, 4]` | `[4]` | (a,b,c,d) |
| `[4, 5]` | `[2, 3]` | (a,c,d) & (b,e) |
| `[4, 6]` | `[3, 3]` | (a,d,f) & (b,c,e) |

Token k of [`GUESS_ACTIVE_WINDOW`](https://reksstudio.github.io/v2/options/GUESS_ACTIVE_WINDOW.md) fills slot k ([Start REKS](https://reksstudio.github.io/v2/manual/first-calculation/index.md#start-reks)); the window lists the orbitals in slot order a, b, c, …, not geminal by geminal.

### Lone pair: REKS(2,3) {#wide-lone-pair}

BH, r = 1.2324 Å, cc-pVDZ. RHF seed (`wide_bh_23.py rhf`, [Worked inputs](https://reksstudio.github.io/v2/manual/wide-geminals/index.md#wide-inputs)): 1A B 1s, 2A σ (−0.6469), 3A σ, HOMO (−0.3449), 4A and 5A π, LUMO and LUMO+1 (0.0587), 6A σ\*, LUMO+2 (0.2563). The core holds 1A and 2A; the default window (HOMO, LUMO, LUMO+1) is the lone pair and both π.

```python
psi4.set_options({"basis": "cc-pvdz", "scf_type": "pk",
                  "reference": "reks", "reks": [2, 3], "reks_geminal_widths": [3],
                  "sa_reks_configs": ["PPS1"], "si_reks_configs": [[]],
                  "reks_fon_interp_delta": 1e10,
                  "e_convergence": 1e-10, "d_convergence": 1e-8})
e, wfn = psi4.energy("hf", return_wfn=True, restart_file="wide_bh_rhf.wfn.npy")
```

| Run | Slots | E(PPS1) / E<sub>h</sub> | Iterations | n<sub>a</sub> / n<sub>b</sub> / n<sub>c</sub> |
| - | - | - | - | - |
| REKS(2,2) | HOMO, LUMO (no window) | −25.1469095837 | 14 | 1.903418 / 0.096582 |
| REKS(2,3) | HOMO, LUMO, LUMO+1 (no window) | −25.1640880605 | 17 | 1.853892 / 0.073054 / 0.073054 |
| REKS(2,3) | window HOMO, LUMO, LUMO+2 | −25.1492681987 | 88 | 1.903045 / 0.093332 / 0.003622 |
| CASSCF(2,3), same core | — | −25.1640880604 | — | — |

REKS(2,2): one π in the geminal (n 0.096582), the other π outside it; 17.2 mE<sub>h</sub> above REKS(2,3).

REKS(2,3): both π, equal FONs; E(PPS1) = CASSCF(2,3) to 10<sup>−10</sup> E<sub>h</sub>.

LUMO+2 in the window: slot c starts from σ\* and converges to a σ orbital at n 0.003622; the second π stays outside the geminal; 14.8 mE<sub>h</sub> above REKS(2,3).

REKS(2,2), then REKS(2,3):

```log
Pairing scheme 0: (a,b) = (4A,2A)

 4A     -0.409242  (a)    n_a =  1.903418
 2A     -0.613175  (b)    n_b =  0.096582
```

```log
Pairing scheme 0: (a,b,c) = (5A,3A,2A)

 5A     -0.430420  (a)    n_a =  1.853892
 3A     -0.641561  (b)    n_b =  0.073054
 2A     -0.641561  (c)    n_c =  0.073054
```

The window with LUMO+2:

```log
GUESS READ: active window ['HOMO', 'LUMO', 'LUMO+2'] -> MO columns [2, 3, 4] (swaps [(4, 5)])
[...]
      Pairing scheme 0: (a,b,c) = (5A,3A,2A)

       5A     -0.409420  (a)    n_a =  1.903045
       3A     -0.612360  (b)    n_b =  0.093332
       2A     -1.109615  (c)    n_c =  0.003622
```

a

b

c

![BH REKS(2,2) slot a, lone pair](https://reksstudio.github.io/v2/figures/wide_bh22_a.svg)**a** REKS(2,2) · n 1.903418

![BH REKS(2,2) slot b, one pi orbital](https://reksstudio.github.io/v2/figures/wide_bh22_b.svg)**b** π · n 0.096582

![BH REKS(2,3) slot a, lone pair](https://reksstudio.github.io/v2/figures/wide_bh23_a.svg)**a** REKS(2,3) · n 1.853892

![BH REKS(2,3) slot b, pi orbital](https://reksstudio.github.io/v2/figures/wide_bh23_b.svg)**b** π · n 0.073054

![BH REKS(2,3) slot c, second pi orbital](https://reksstudio.github.io/v2/figures/wide_bh23_c.svg)**c** π · n 0.073054

![BH REKS(2,3) with sigma\* window, slot a](https://reksstudio.github.io/v2/figures/wide_bhsig_a.svg)**a** σ\* window · n 1.903045

![BH REKS(2,3) with sigma\* window, slot b, pi](https://reksstudio.github.io/v2/figures/wide_bhsig_b.svg)**b** π · n 0.093332

![BH REKS(2,3) with sigma\* window, slot c, sigma](https://reksstudio.github.io/v2/figures/wide_bhsig_c.svg)**c** σ · n 0.003622

BH, HF/cc-pVDZ, δ = 10<sup>10</sup>, converged active orbitals; B left, H right. Slice through the B–H axis, turned for each orbital to the plane of its largest amplitude (a π orbital in the plane of its lobes); blue + / copper −; slot, run, FON.

### Bond and lone pair: REKS(4,5), REKS(4,6) {#wide-two-pairs}

REKS(4,5) with widths \[2, 3] puts the lone pair and both π in (a,c,d), the B–H bond and σ\* in (b,e). Straight from the RHF seed the SCF does not reach it: slot a takes the RHF MO 2A, slot b the RHF MO 3A, and after `MAXITER` (100) E lies above REKS(4,4) (the stage sets `"fail_on_maxiter": False` to finish; the `kA` labels below number the orbitals of the run by ε):

```log
   @REKS iter 100:   -25.14326318602926    0.00000e+00   2.88730e-05 ORB-GVB-DIIS

PsiException: Could not converge SCF iterations in 100 iterations.

  Energy and/or wave function did not converge, but proceeding anyway.
[...]
        Pairing scheme 0: (a,c,d) & (b,e) = (5A,3A,2A) & (6A,4A)

         5A     -0.663019  (a)    n_a =  1.978974
         6A     -0.349407  (b)    n_b =  1.993823
         3A     -1.354157  (c)    n_c =  0.010513
         2A     -1.354160  (d)    n_d =  0.010513
         4A     -0.956531  (e)    n_e =  0.006177
```

Each wider space reads the orbitals of the previous one ([Restart mechanism](https://reksstudio.github.io/v2/manual/run-control/index.md#restart)). A file written by REKS stores the core, then the active orbitals in slot order a, b, …, then the virtuals; the `kA` labels of `Post-Iterations` number the orbitals by ε and are not columns. Integer tokens of the window are 0-based columns of the read file; `python wide_bh_45.py columns <file>` prints the Mulliken population of columns 0–7 on B and H and their share of p<sub>x</sub>, p<sub>y</sub> functions (π). The REKS(2,3) file, then the REKS(4,5) file:

```log
column 0:  B  1.00  H  0.00  pi 0.00
column 1:  B  0.43  H  0.57  pi 0.00
column 2:  B  1.03  H -0.03  pi 0.00
column 3:  B  1.00  H  0.00  pi 0.95
column 4:  B  1.00  H  0.00  pi 0.95
column 5:  B  0.29  H  0.71  pi 0.00
column 6:  B  0.97  H  0.03  pi 0.00
column 7:  B  1.00  H  0.00  pi 0.99
```

```log
column 0:  B  1.00  H  0.00  pi 0.00
column 1:  B  1.04  H -0.04  pi 0.00
column 2:  B  0.43  H  0.57  pi 0.00
column 3:  B  1.00  H  0.00  pi 0.95
column 4:  B  1.00  H  0.00  pi 0.95
column 5:  B  0.47  H  0.53  pi 0.00
column 6:  B  1.03  H -0.03  pi 0.00
column 7:  B  1.00  H -0.00  pi 0.99
```

| Run | Seed | Columns of the seed | Window | E(PPS1) / E<sub>h</sub> | Iterations |
| - | - | - | - | - | - |
| REKS(4,4) | RHF | — | default | −25.1540332485 | 24 |
| REKS(4,5) \[2,3] | RHF | — | default | −25.1432631860, not converged | 100 |
| REKS(2,3) \[3] | RHF | — | default | −25.1640880605 | 17 |
| REKS(4,5) \[2,3] | REKS(2,3) | 1 bond, 2 lone pair, 3 4 π, 5 σ\* | `[2, 1, 3, 4, 5]` | −25.1775062082 | 25 |
| REKS(4,6) \[3,3] | REKS(4,5) | 1 lone pair, 2 bond, 3 4 π, 5 σ\*, 6 σ | `[1, 2, 5, 3, 6, 4]` | −25.1828261871 | 42 |

B–H bond: H 0.57; lone pair: on B, π 0.00; π: 0.95; σ\* (column 5): H 0.71 and 0.53; column 6: on B, π 0.00. The report prints the swaps that bring the columns into the slots. A file of another active space restores the orbitals only: `REKS READ: active space mismatch (2,3) -> (4,5); FON not restored, falling back to default`.

```log
GUESS READ: active window [2, 1, 3, 4, 5] -> MO columns [1, 2, 3, 4, 5] (swaps [(1, 2)])
[...]
      Pairing scheme 0: (a,c,d) & (b,e) = (6A,4A,3A) & (5A,2A)

       6A     -0.439228  (a)    n_a =  1.859782
       5A     -0.591954  (b)    n_b =  1.983272
       4A     -0.658725  (c)    n_c =  0.070109
       3A     -0.658725  (d)    n_d =  0.070109
       2A     -1.394101  (e)    n_e =  0.016728
```

```log
GUESS READ: active window [1, 2, 5, 3, 6, 4] -> MO columns [1, 2, 3, 4, 5, 6] (swaps [(3, 5), (4, 5), (5, 6)])
[...]
      Pairing scheme 0: (a,d,f) & (b,c,e) = (7A,5A,4A) & (6A,3A,2A)

       7A     -0.443634  (a)    n_a =  1.860529
       6A     -0.595291  (b)    n_b =  1.978075
       3A     -1.378234  (c)    n_c =  0.016410
       5A     -0.664304  (d)    n_d =  0.069735
       2A     -1.655411  (e)    n_e =  0.005515
       4A     -0.664304  (f)    n_f =  0.069735
```

(a, d, f)

(b, c, e)

![BH REKS(4,6) slot a, lone pair](https://reksstudio.github.io/v2/figures/wide_bh46_a.svg)**a** lone pair · n 1.860529

![BH REKS(4,6) slot b, B-H bond](https://reksstudio.github.io/v2/figures/wide_bh46_b.svg)**b** B–H bond · n 1.978075

![BH REKS(4,6) slot d, pi](https://reksstudio.github.io/v2/figures/wide_bh46_d.svg)**d** π · n 0.069735

![BH REKS(4,6) slot c, sigma\*](https://reksstudio.github.io/v2/figures/wide_bh46_c.svg)**c** σ\* · n 0.016410

![BH REKS(4,6) slot f, second pi](https://reksstudio.github.io/v2/figures/wide_bh46_f.svg)**f** π · n 0.069735

![BH REKS(4,6) slot e, second correlating sigma](https://reksstudio.github.io/v2/figures/wide_bh46_e.svg)**e** σ · n 0.005515

BH REKS(4,6) \[3,3], HF/cc-pVDZ, δ = 10<sup>10</sup>, converged active orbitals; one column per geminal of scheme 0; slices as in the REKS(2,3) figure; slot, character, FON.

### Check the solution {#wide-check}

Exact energy: with HF and δ = 10<sup>10</sup>, E(PPS1) equals ⟨Ψ|H|Ψ⟩ of the product Ψ of the geminals Φ<sub>0</sub> ([Geminal of width w](https://reksstudio.github.io/v2/manual/wide-geminals/index.md#wide-pps)) in the converged orbitals, with n<sub>p</sub> from `Post-Iterations`; H is the Hamiltonian of the active space with the core frozen. Minimizing ⟨Ψ|H|Ψ⟩ over the coefficients at fixed orbitals lowers nothing:

```log
wide_bh_23_reks23    (a,b,c)            E(PPS1) -25.1640880605  E(product) - E(PPS1) -5.7e-12  min over coefficients -5.8e-12  CASCI -25.1640880605
wide_bh_45_reks44    (a,d) & (b,c)      E(PPS1) -25.1540332485  E(product) - E(PPS1) -4.3e-12  min over coefficients -5.7e-12  CASCI -25.1543465599
wide_bh_45_reks45    (a,c,d) & (b,e)    E(PPS1) -25.1775062082  E(product) - E(PPS1) -9.7e-12  min over coefficients -1.0e-11  CASCI -25.1786807010
wide_bh_45_reks46    (a,d,f) & (b,c,e)  E(PPS1) -25.1828261871  E(product) - E(PPS1) -8.2e-12  min over coefficients -1.3e-11  CASCI -25.1846729240
```

* **CASCI** in the same orbitals is lower for two geminals (0.31 mE<sub>h</sub> for REKS(4,4), 1.2 for REKS(4,5), 1.8 for REKS(4,6)): a product of geminals has no correlation between the geminals. For one geminal CASCI = E(PPS1).
* **Equal FONs** of the two π are the cylindrical symmetry of BH. With one π in the geminal (REKS(2,2), LUMO+2 in the window) the other π stays empty ([Lone pair: REKS(2,3)](https://reksstudio.github.io/v2/manual/wide-geminals/index.md#wide-lone-pair)).

### Gradients {#wide-gradients}

All roots of the SI cassette in one `gradient()` ([Gradients and couplings against finite differences](https://reksstudio.github.io/v2/manual/dynamics/index.md#grad-fd)), from the converged file of each active space: REKS(2,3) the full cassette, REKS(4,5) and REKS(4,6) every configuration of scheme 0:

```python
psi4.set_options({"si_reks_configs": [[["single-scheme:0"]]],
                  "si_reks_grad": [list(range(25))]})
g, wfn = psi4.gradient("hf", return_wfn=True, restart_file="wide_bh_reks45.wfn.npy")
```

Analytic against a 5-point central finite difference of the same roots (h = 0.005 a<sub>0</sub>, all six Cartesians, each displaced point read from the same file), HF, δ = 10<sup>10</sup>:

```log
REKS(2, 3) [3], SI ['full']: S0-S5, 36 components, max|an - FD5| 2.9e-09 Eh/a0
  S18/S19: gap 4.4e-03 Eh, max|g_i - g_j| 0.55 -> sum
REKS(4, 5) [2, 3], SI ['single-scheme:0']: S0-S24, 150 components, max|an - FD5| 1.5e-05 Eh/a0
  S23/S24: gap 5.8e-04 Eh, max|g_i - g_j| 0.36 -> sum
REKS(4, 6) [3, 3], SI ['single-scheme:0']: S0-S56, 342 components, max|an - FD5| 7.8e-05 Eh/a0
```

![BH: analytic against finite-difference gradient components of all SI roots of REKS(2,3), REKS(4,5) and REKS(4,6); absolute difference against the size of the component](https://reksstudio.github.io/v2/figures/wide_grad_fd.svg)

(a) Analytic against FD gradient components of BH, all roots: REKS(2,3) S0–S5, REKS(4,5) \[2,3] S0–S24, REKS(4,6) \[3,3] S0–S56. (b) |analytic − FD| against |FD|. S18/S19 of REKS(4,5) and S23/S24 of REKS(4,6), 4.4 and 0.58 mE<sub>h</sub> apart, enter as their sums.

### States: SI-SA-REKS(2,3) {#wide-states}

BH\&HLYP/cc-pVDZ, RKS seed, the lone-pair geminal of [Lone pair: REKS(2,3)](https://reksstudio.github.io/v2/manual/wide-geminals/index.md#wide-lone-pair), default `reks_fon_interp_delta`; the lone pair is nearly closed (n<sub>a</sub> 1.998932). SA: the default pool `[PPS1, OSSc1, OSSb1, OSSa1]` and the three all-α determinants of the geminal ([`SA_REKS_EXTRA`](https://reksstudio.github.io/v2/options/SA_REKS_EXTRA.md)); SI on 2S = 0 and 2S = 2 ([`SI_REKS_2SPIN`](https://reksstudio.github.io/v2/options/SI_REKS_2SPIN.md)); TRAH ([§13](https://reksstudio.github.io/v2/manual/run-control/index.md#scf-engines)) to `d_convergence` 10<sup>−8</sup>:

```python
"sa_reks_extra": [[1, 1, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0]],   # |ab|, |ac|, |bc|
"si_reks_configs": [[["full"]], [["full"]]],
"si_reks_2spin": [0, 2],
"reks_use_trah": True, "reks_gvb_diis": False,
```

```log
==> State summary <==

    State            E [Eh]  E-E(S0) [eV]  E-E(S0) [kcal/mol]  lambda [nm]    f_len     Main configurations (w_j in %)
    ------------------------------------------------------------------------------------------------------------------
    S0     -25.273256917916         0.000                0.00            -        -     PPS1(100.0)
    T1     -25.232772182224         1.102               25.40            -        -     Ta1(50.0); Tb1(50.0)
    T2     -25.232772017879         1.102               25.40            -        -     Tb1(50.0); Ta1(50.0)
    S1     -25.185054284422         2.400               55.35        516.6  0.05168     OSSb1(50.0); OSSa1(50.0)
    S2     -25.185054120077         2.400               55.35        516.6  0.05168     OSSa1(50.0); OSSb1(50.0)
    T3     -25.102149516894         4.656              107.37            -        -     Tc1(100.0)
    S3     -25.080575672772         5.243              120.91        236.5  0.00000     OSSc1(100.0)
    S4     -25.066507826428         5.626              129.74        220.4  0.00000     DESb1(50.0); DESa1(50.0)
```

S1/S2 (¹Π) and T1/T2 (³Π) are degenerate pairs, each split by 1.6·10<sup>−7</sup> E<sub>h</sub>. With `|ab|` alone the SA ensemble favours one π: S1/S2 2.360 / 2.391 eV, T1/T2 1.131 / 1.151 eV.

### Worked inputs {#wide-inputs}

Each file runs in stages: `python file.py <stage>`, the stages in the order listed in the file.

| File | Calculation | Result |
| - | - | - |
| [`wide_bh_23.py`](https://reksstudio.github.io/v2/inputs/wide_bh_23.py.txt) | BH lone pair, HF/cc-pVDZ, δ = 10<sup>10</sup>: RHF seed; REKS(2,2); REKS(2,3); REKS(2,3) with σ\* in the window; CASSCF(2,3) | E(PPS1) = −25.1640880605 E<sub>h</sub>; CASSCF −25.1640880604 E<sub>h</sub> |
| [`wide_bh_45.py`](https://reksstudio.github.io/v2/inputs/wide_bh_45.py.txt) | BH bond + lone pair, HF/cc-pVDZ, δ = 10<sup>10</sup>: REKS(4,4); REKS(4,5) from RHF; seed chain REKS(2,3) → REKS(4,5) → REKS(4,6) | E(PPS1) = −25.1775062082 (4,5), −25.1828261871 (4,6) E<sub>h</sub> |
| [`wide_bh_states.py`](https://reksstudio.github.io/v2/inputs/wide_bh_states.py.txt) | SI-SA-REKS(2,3), BH\&HLYP/cc-pVDZ, RKS seed; SA default pool + all-α \|ab\|, \|ac\|, \|bc\|; SI on 2S = 0, 2; TRAH | E<sub>SA</sub> = −25.184519244590 E<sub>h</sub>; S0 −25.273256917916, T1 −25.232772136476, S1 −25.185054403019 E<sub>h</sub> |

## Linked files

[inputs/wide_bh_23.py](https://reksstudio.github.io/v2/inputs/wide_bh_23.py.txt)

```python
"""BH lone pair: REKS(2,3), one geminal over the boron lone pair and both pi orbitals. HF with
REKS_FON_INTERP_DELTA 1e10 (f = sqrt(x)): E(PPS1) is the exact GVB energy, compared with CASSCF(2,3).
python wide_bh_23.py rhf      -> RHF seed wide_bh_rhf.wfn.npy + Molden file
python wide_bh_23.py reks22   -> REKS(2,2): lone pair + one pi
python wide_bh_23.py reks23   -> REKS(2,3): lone pair + both pi
python wide_bh_23.py sigma    -> REKS(2,3) with sigma* in place of the second pi
python wide_bh_23.py casscf   -> CASSCF(2,3): 1s and B-H bond doubly occupied, active lone pair + both pi"""
import sys
import psi4

stage = sys.argv[1]
psi4.set_output_file(f"wide_bh_23_{stage}.out", False)
psi4.set_memory("2 GB")

psi4.geometry("""
0 1
B   0.0   0.0   0.0
H   0.0   0.0   1.2324
symmetry c1
""")
psi4.set_options({"basis": "cc-pvdz", "scf_type": "pk"})

gvb = {"reference": "reks", "sa_reks_configs": ["PPS1"], "si_reks_configs": [[]],
       "reks_fon_interp_delta": 1e10, "e_convergence": 1e-10, "d_convergence": 1e-8}

if stage == "rhf":
    psi4.set_options({"molden_write": True})
    e, wfn = psi4.energy("hf", return_wfn=True)
    wfn.to_file("wide_bh_rhf.wfn")
    print(f"E(RHF) = {e:.10f}")
elif stage == "casscf":
    psi4.set_options({"restricted_docc": [2], "active": [3]})
    print(f"E(CASSCF(2,3)) = {psi4.energy('casscf'):.10f}")
else:
    if stage == "reks22":
        psi4.set_options({**gvb, "reks": [2, 2]})
    elif stage == "reks23":
        psi4.set_options({**gvb, "reks": [2, 3], "reks_geminal_widths": [3]})
    elif stage == "sigma":
        psi4.set_options({**gvb, "reks": [2, 3], "reks_geminal_widths": [3],
                          "guess_active_window": ["HOMO", "LUMO", "LUMO+2"]})
    e, wfn = psi4.energy("hf", return_wfn=True, restart_file="wide_bh_rhf.wfn.npy")
    wfn.to_file(f"wide_bh_{stage}.wfn")
    print(f"E(PPS1) = {e:.10f}")
```

[inputs/wide_bh_45.py](https://reksstudio.github.io/v2/inputs/wide_bh_45.py.txt)

```python
"""BH bond pair + lone pair: REKS(4,5) with geminal widths [2, 3], then REKS(4,6) with [3, 3]. HF with
REKS_FON_INTERP_DELTA 1e10 (f = sqrt(x)): E(PPS1) is the exact energy of the geminal product.
python wide_bh_45.py rhf        -> RHF seed wide_bh_rhf.wfn.npy
python wide_bh_45.py reks44     -> REKS(4,4) from RHF
python wide_bh_45.py reks45_rhf -> REKS(4,5) straight from RHF (does not converge in MAXITER)
python wide_bh_45.py reks23     -> REKS(2,3) of the lone pair from RHF
python wide_bh_45.py reks45     -> REKS(4,5) from the REKS(2,3) orbitals
python wide_bh_45.py reks46     -> REKS(4,6) from the REKS(4,5) orbitals
python wide_bh_45.py columns wide_bh_reks23.wfn.npy -> character of columns 0..7 of a saved file"""
import sys
import psi4

stage = sys.argv[1]
psi4.set_output_file(f"wide_bh_45_{stage}.out", False)
psi4.set_memory("2 GB")

if stage == "columns":
    # Mulliken population of each column on B and H; pi = share of the p functions px, py (m != 0)
    wfn = psi4.core.Wavefunction.from_file(sys.argv[2])
    C, S, bs = wfn.Ca().np, wfn.S().np, wfn.basisset()
    for i in range(8):
        q = C[:, i] * (S @ C[:, i])
        on_b = sum(q[mu] for mu in range(bs.nbf()) if bs.function_to_center(mu) == 0)
        pi = 0.0
        for mu in range(bs.nbf()):
            shell = bs.shell(bs.function_to_shell(mu))
            if shell.am == 1 and mu > shell.function_index:
                pi += q[mu]
        print(f"column {i}:  B {on_b:5.2f}  H {1 - on_b:5.2f}  pi {pi:4.2f}")
    sys.exit()

psi4.geometry("""
0 1
B   0.0   0.0   0.0
H   0.0   0.0   1.2324
symmetry c1
""")
psi4.set_options({"basis": "cc-pvdz", "scf_type": "pk"})

gvb = {"reference": "reks", "sa_reks_configs": ["PPS1"], "si_reks_configs": [[]],
       "reks_fon_interp_delta": 1e10, "e_convergence": 1e-10, "d_convergence": 1e-8}
seed = "wide_bh_rhf.wfn.npy"

if stage == "rhf":
    e, wfn = psi4.energy("hf", return_wfn=True)
    wfn.to_file("wide_bh_rhf.wfn")
    print(f"E(RHF) = {e:.10f}")
    sys.exit()
if stage == "reks44":
    psi4.set_options({**gvb, "reks": [4, 4]})
elif stage == "reks45_rhf":
    psi4.set_options({**gvb, "reks": [4, 5], "reks_geminal_widths": [2, 3], "fail_on_maxiter": False})
elif stage == "reks23":
    psi4.set_options({**gvb, "reks": [2, 3], "reks_geminal_widths": [3]})
elif stage == "reks45":
    # columns of the REKS(2,3) file: 1 B-H bond, 2 lone pair, 3 4 pi, 5 sigma*
    # slots (a,c,d) & (b,e): a lone pair, b bond, c d pi, e sigma*
    psi4.set_options({**gvb, "reks": [4, 5], "reks_geminal_widths": [2, 3],
                      "guess_active_window": [2, 1, 3, 4, 5]})
    seed = "wide_bh_reks23.wfn.npy"
elif stage == "reks46":
    # columns of the REKS(4,5) file: 1 lone pair, 2 bond, 3 4 pi, 5 sigma*, 6 next sigma
    # slots (a,d,f) & (b,c,e): a lone pair, d f pi, b bond, c sigma*, e next sigma
    psi4.set_options({**gvb, "reks": [4, 6], "reks_geminal_widths": [3, 3],
                      "guess_active_window": [1, 2, 5, 3, 6, 4]})
    seed = "wide_bh_reks45.wfn.npy"
e, wfn = psi4.energy("hf", return_wfn=True, restart_file=seed)
wfn.to_file(f"wide_bh_{stage}.wfn")
print(f"E(PPS1) = {e:.10f}")
```

[inputs/wide_bh_states.py](https://reksstudio.github.io/v2/inputs/wide_bh_states.py.txt)

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
