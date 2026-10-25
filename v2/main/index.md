# Overview — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/>

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# Where ordinary DFT breaks, REKS Studio gets it right.

H2 dissociation energy against H–H distance, 0.5 to 3.5 Å: ordinary DFT (RKS) rises to -0.8828 Eh at 3.5 Å, exact FCI and REKS Studio (SSR) level off near -1.0000 and -0.9923 Eh. H2 dissociation: SSR(2,2) and RKS, BH\&HLYP; FCI; all aug-cc-pVTZ.

[H<sub>2</sub> dissociation: SSR(2,2) and RKS, BH\&HLYP; FCI; all aug-cc-pVTZ →](https://reksstudio.github.io/v2/main/results/dissociation/index.md#h2)

[See the evidence ↓](#evidence) [Install, free](https://reksstudio.github.io/v2/docs/index.md#install)

Ensemble DFT (REKS/SSR) in Psi4 for breaking bonds, diradicals, magnetic molecules and excited states. Its equations are generated, not derived by hand; (2,2)–(6,6) run from the install.

[Free and open source](https://reksstudio.github.io/v2/docs/index.md#licence) · [ChemRxiv 2026](https://doi.org/10.26434/chemrxiv.15008475/v1) · UNIST · IBS

[Beyond H<sub>2</sub> ↓](#evidence)

## Checked against exact theory and benchmarks, then run at scale

Against exact theory and experiment [Bonds broken, single to quadruple](https://reksstudio.github.io/v2/main/results/dissociation/index.md)

Potential energy curves of H2, H4, H6, H8, H10, C2H4, N2, C2H2, C2: SSR; FCI for H2–H8

6.29 eV vs experiment, C<sub>2</sub> D<sub>e</sub> 6.32 ± 0.2 eV H<sub>2</sub>–H<sub>8</sub> vs FCI in the same basis; the others to their fragments · SSR(2,2)–(10,10) 9 molecules →

Against a benchmark [Excited states of 62 molecules](https://reksstudio.github.io/v2/main/results/quest/index.md)

Histogram of SSR minus TBE for 192 state pairs, BH\&HLYP; MAE 0.212 / 0.230 / 0.220 eV for BH\&HLYP / M08-SO / ωB97X

0.21–0.23 eV MAE vs theoretical best estimates (TBE), QUEST S<sub>1</sub> S<sub>2</sub> T<sub>1</sub> T<sub>2</sub> · BH\&HLYP / M08-SO / ωB97X · per state the active space (2,2)–(8,8) closest to the TBE 192 state pairs →

At scale [Active spaces up to REKS(12,12) on large molecules](https://reksstudio.github.io/v2/main/results/large-molecules/index.md)

Atoms against active space for every published REKS Studio run, coloured by dataset; largest: 192 atoms, REKS(12,12); largest REKS before this work: (4,4)

192 atoms REKS(12,12) · def2-TZVP, 4452 basis functions Triangulene nanostar C<sub>132</sub>H<sub>60</sub>, TTR C<sub>118</sub>H<sub>34</sub>; 7 zethrenes up to 70 atoms 9 molecules →

[All results →](https://reksstudio.github.io/v2/main/results/index.md)

[Multireference accuracy is usually expensive. What does it cost here? ↓](#cost)

## Excited states (2,2)–(6,6) in less wall time than ORCA TDA, on all four tests. {#cost}

Tetracene dimer C<sub>36</sub>H<sub>24</sub>, 60 atoms, BH\&HLYP, 36 cores, one hot-start step; SI‑SA‑REKS(2,2): 3 states. Shown: open shell, 6-31G(d), 552 basis functions.

[Ground state, wall time SCF of one hot-start step; white line: ORCA RKS (2,2) **42.51 s** (4,4) **46.48 s** (6,6) **57.53 s** (8,8) **77.45 s** (10,10) **143.17 s** ORCA RKS **50.12 s** UKS (T) **43.38 s** ROKS (T) **43.05 s** Q-Chem RKS **76.44 s** UKS (T) **119.47 s** ROKS (T) **299.80 s** ](https://reksstudio.github.io/v2/main/cost/index.md#md-time)[Excited states, wall time SCF + states in one run; white line: ORCA TDA (2,2) **42.98 s** (4,4) **45.48 s** (6,6) **58.14 s** (8,8) **87.74 s** (10,10) **345.95 s** ORCA TDA **88.12 s** SF-TDA **75.44 s** Q-Chem TDA **1545.28 s** SF-TDA **1476.85 s** MRSF-TDA **5681.09 s**](https://reksstudio.github.io/v2/main/cost/index.md#md-time-resp)

From the install: up to (6,6). (T): triplet reference. Fastest converged of 3 repeats (Q-Chem: one run).

[Install, free](https://reksstudio.github.io/v2/docs/index.md#install) [Talk to the team about your molecule](mailto:reks.studio1@gmail.com)

[Full cost data](https://reksstudio.github.io/v2/main/cost/index.md#md) · [Measurement notes](https://reksstudio.github.io/v2/main/cost/index.md#md-notes) · [Read the paper](https://doi.org/10.26434/chemrxiv.15008475/v1)

Free and open source. No licence fee, no seat count, runs on your cluster.

## This is the whole input

```text
#! SA-REKS(2,2) and SI-SA-REKS(2,2) of H2, BH&HLYP/cc-pVDZ, default SA and SI pools.

molecule h2 {
0 1
H 0.0 0.0 0.0
H 0.0 0.0 0.74
symmetry c1
}

set {
  basis      cc-pvdz
  reference  reks
  reks       [2, 2]
}

energy('bhhlyp')
```

You get

```
State           E [Eh]  E-E(S0) [eV]
S0     -1.159238310496         0.000
S1     -0.681521680456        12.999
```

Change `[2, 2]` to `[4, 4]` and the molecule; that is all.

Install from source ([build guide](https://reksstudio.github.io/v2/docs/index.md#install)):

```bash
# clone the branch
git clone --branch kk/reks.studio https://github.com/ConstLike/psi4.git
cd psi4

# set up build dependencies
conda env create -f environment.yml -n p4env311
conda activate p4env311

# configure and build
cmake -S. -Bobjdir -DCMAKE_INSTALL_PREFIX=/path/to/install
cmake --build objdir --target install -j$(nproc)
```

[Choosing the active space →](https://reksstudio.github.io/v2/manual/setup/index.md#active-space)

## Equations no one derives by hand. Ours are generated.

H<sub>KK′</sub> ≠ 0, K ≤ K′

One equation: one nonzero Hamiltonian matrix element between configurations K and K′ of one spin sector (each pair once), an algebraic expression the engine writes.

One of them, as the engine writes it

REKS(2,2), S = 0: the perfectly paired singlet (PPS), diagonal element

$$
\begin{aligned} &H_{\mathrm{PPS1},\mathrm{PPS1}} = \\ &\quad \tfrac{1}{2}\,n_a\,E[|a\bar{a}|] - f(n_a, n_b)\,E[|a\bar{b}|] \\ &\quad + f(n_a, n_b)\,E[|ab|] + \tfrac{1}{2}\,n_b\,E[|b\bar{b}|] \end{aligned}
$$

* $E[|\ldots|]$

  Kohn–Sham energy of one microstate; a bar marks β spin

* $n_a + n_b = 2$

  fractional occupations of the pair

* $f(n_a, n_b) = (n_a n_b)^{1 - \frac{1}{2}(n_a n_b + \delta)/(1+\delta)},\ \delta = 0.4$

  damping of the closed-shell mixing

| REKS | Equations, all spin sectors |
| - | - |
| (2,2) | 6 |
| (4,4) [largest REKS before this work](https://reksstudio.github.io/v2/main/history/index.md) | 234 |
| (6,6) [in your install](https://reksstudio.github.io/v2/docs/index.md#install) | 23 962 |
| (8,8) | 4 266 350 |
| (10,10) [applied, TTR](https://reksstudio.github.io/v2/main/results/large-molecules/index.md) | 1 007 587 692 |
| (12,12) | 293 819 094 700 |
| (14,14) [counted](https://reksstudio.github.io/v2/main/cost/index.md#count) | 103 564 870 568 976 |

Exact limits reproduced to 10<sup>−10</sup> E<sub>h</sub> against CASSCF: H<sub>2</sub> and BH, (2,2)–(4,6).

Counts: (2,2)–(8,8) equal generator runs; larger spaces from exact counting rules that reproduce every run.

[Configurations, determinants and every spin sector →](https://reksstudio.github.io/v2/main/cost/index.md#count)

## Capabilities

* [SI states and spin manifolds](https://reksstudio.github.io/v2/manual/setup/index.md#spin-manifolds)
* [analytic gradients](https://reksstudio.github.io/v2/manual/properties/index.md#state-gradient)
* [NACs](https://reksstudio.github.io/v2/manual/properties/index.md#nac)
* [MECI (DL-FIND)](https://reksstudio.github.io/v2/manual/dynamics/index.md#geometry-optimization)
* [surface hopping (PyUNIxMD)](https://reksstudio.github.io/v2/manual/dynamics/index.md#surface-hopping)

Gradients, couplings, MECI and dynamics in one code.

Preprint: [ChemRxiv v1, 8 Sep 2026, preprint, doi:10.26434/chemrxiv.15008475/v1](https://doi.org/10.26434/chemrxiv.15008475/v1) · [Komarov, Filatov, Min](https://reksstudio.github.io/v2/team/index.md); UNIST; IBS Center for Multidimensional Carbon Materials · [Licence](https://reksstudio.github.io/v2/docs/index.md#licence) · Psi4 [`e95c2d234`](https://reksstudio.github.io/v2/docs/index.md#changes), 2026-10-19
