---
title: First Calculation
---

## 3\. First Calculation

Without a seed the active slots are the MOs N<sub>core</sub>+1 … N<sub>core</sub>+M of the guess Fock matrix in energy order. A cold start of 90° C₂H₄ converges to n = 2/0, of s-trans-butadiene to a pair with a σ orbital (§check-solution). Procedure: choose the pairs → seed → inspect → start REKS → check.

### Which active space? {#which-active-space}

A rhetorical question: no rule fixes it for every molecule. REKS reduces it to whole pairs. In CASSCF the active orbitals and electrons are chosen one by one, e.g. the full π system; a REKS active space is a set of pairs, each the bonding and antibonding orbital of one bond that breaks, twists or is excited, and it grows or shrinks by one pair.

### Choose the pairs {#choose-pairs}

REKS(M,M) holds $P = M/2$ pairs; each pair is a bonding orbital and its antibonding partner (§pairing-scheme).

| Molecule | Active space | Pairs |
| --- | --- | --- |
| C₂H₄, 90° twist | (2,2) | (π, π\*): in-phase and out-of-phase combination of the two C 2p orbitals of the twisted bond |
| s-trans-butadiene | (4,4) | (π₁, π₄\*) & (π₂, π₃\*) |

Scheme 0 (§pairing-scheme) sets the token order of a window: the bonding orbitals first, their partners in reverse order:

$$
[\,\varphi_1, \dots, \varphi_P,\ \varphi_P^{*}, \dots, \varphi_1^{*}\,]
$$

<figure class="scheme">
<svg viewBox="0 0 360 132" width="360" role="img" aria-label="REKS(4,4) of butadiene: tokens HOMO-1, HOMO, LUMO, LUMO+1 fill slots a, b, c, d; scheme 0 pairs a with d and b with c" font-family="IBM Plex Sans, Helvetica, Arial, sans-serif" text-anchor="middle">
<g font-size="12" style="fill:var(--ink-faint)"><text x="60" y="16">a</text><text x="140" y="16">b</text><text x="220" y="16">c</text><text x="300" y="16">d</text></g>
<g font-size="11" font-family="IBM Plex Mono, SF Mono, Consolas, monospace" style="fill:var(--ink-soft)"><text x="60" y="36">HOMO-1</text><text x="140" y="36">HOMO</text><text x="220" y="36">LUMO</text><text x="300" y="36">LUMO+1</text></g>
<g font-size="13"><text x="60" y="58" style="fill:var(--blue)">14A π₁</text><text x="140" y="58" style="fill:var(--blue)">15A π₂</text><text x="220" y="58" style="fill:var(--copper)">16A π₃*</text><text x="300" y="58" style="fill:var(--copper)">17A π₄*</text></g>
<g fill="none" stroke-width="1.4" style="stroke:var(--ink-soft)"><path d="M60 68 C60 128 300 128 300 68"/><path d="M140 68 C140 98 220 98 220 68"/></g>
</svg>
<figcaption>Butadiene REKS(4,4): token k fills slot k; scheme 0 pairs (a,d) and (b,c).</figcaption>
</figure>

### Seed orbitals {#seed-orbitals}

A closed-shell RKS run with the functional and basis of the REKS run, `scf_type` stated, writes the seed and a Molden file:

```python
psi4.set_options({"basis": "6-31g(d)", "scf_type": "pk", "molden_write": True})
e, wfn = psi4.energy("bhhlyp", return_wfn=True)
wfn.to_file("first_c2h4_90_rks.wfn")          # first_c2h4_90_rks.wfn.npy
```

Check the seed: the frontier orbitals are spread equally over symmetry-equivalent atoms. Mulliken population of MO i on atom A, $q_A^{(i)} = \sum_{\mu \in A} C_{\mu i}\,(\mathbf{S}\mathbf{C})_{\mu i}$:

```python
C, S, bs = wfn.Ca().np, wfn.S().np, wfn.basisset()
i = wfn.nalpha() - 1                                   # HOMO; i + 1 is LUMO
q = C[:, i] * (S @ C[:, i])
print([q[[mu for mu in range(bs.nbf()) if bs.function_to_center(mu) == A]].sum() for A in (0, 1)])
```

90° C₂H₄, BH&HLYP/6-31G(d), one geometry, HOMO population on each carbon:

| RKS run | E(RKS) / E<sub>h</sub> | HOMO on C1 / C2 | REKS(2,2) from it: n<sub>a</sub> / n<sub>b</sub> |
| --- | --- | --- | --- |
| `scf_type df`, SAD start | −78.31818108 | 0.859 / 0.026 | 2.000000 / 0.000000 |
| `scf_type df`, read from the `pk` solution | −78.36248878 | 0.440 / 0.440 | 1.000000 / 1.000000 |
| `scf_type pk`, SAD start | −78.36248359 | 0.440 / 0.440 | 1.000000 / 1.000000 |

The seeds on this page use `scf_type pk`. A localized seed is replaced by an RKS run with `scf_type pk` or by a seed from a smaller torsion, carried to the target geometry (§first-scans). An ROHF triplet seed of 90° C₂H₄ gives the cold-start solution (n 2.000000 / 0.000000, E<sub>SA</sub> −78.353499 E<sub>h</sub>).

### Inspect the orbitals {#inspect-orbitals}

Open the RKS Molden file in a viewer, name the M orbitals by character and note their 0-based columns: MO `kA` is column k − 1. Without a viewer, the population snippet above with the sum over the AO functions of one type (e.g. the p functions normal to a molecular plane for π) separates σ from π.

<figure>
<img src="../../figures/bd_rks_pi.svg" alt="s-trans-butadiene RKS orbitals 14A to 17A, contour slices above the molecular plane" loading="lazy" decoding="async" width="691" height="120">

<figcaption>s-trans-butadiene, RKS BH&amp;HLYP/6-31G(d), slice 0.6 Å above the molecular plane, blue + / copper −. Left to right: 14A HOMO−1 π₁ (ε −0.3718 E<sub>h</sub>), 15A HOMO π₂ (−0.2689), 16A LUMO π₃* (0.0268), 17A LUMO+1 π₄* (0.1441). 13A HOMO−2 (−0.4075) is σ.</figcaption>
</figure>

-   **Diffuse basis:** the valence antibonding orbital can lie far above LUMO; give its column as an integer token. Butadiene, aug-cc-pVDZ: LUMO is π₃*, LUMO+1 … LUMO+5 are σ, the largest π₄* component is LUMO+6 (column 21); `["HOMO-1", "HOMO", "LUMO", 21]` prints `swaps [(16, 21)]`.
-   **Degenerate orbitals:** π of a linear molecule. The rotation within a degenerate RKS pair is arbitrary between runs, and the REKS result follows it. N₂ 1.60 Å, REKS(6,6), one window `['HOMO-2', 'HOMO-1', 'HOMO', 'LUMO+1', 'LUMO', 'LUMO+2']`, three RKS seeds: π FON 1.651544, 1.703717, 1.999994.

### Start REKS {#start-reks}

```python
psi4.set_options({"basis": "6-31g(d)", "scf_type": "pk",      # as in the seed run
                  "reference": "reks", "reks": [4, 4],
                  "guess_active_window": ["HOMO-1", "HOMO", "LUMO", "LUMO+1"]})
e_sa, wfn = psi4.energy("bhhlyp", return_wfn=True, restart_file="first_butadiene_rks.wfn.npy")
```

-   **Seed:** `restart_file` sets `GUESS READ` (§restart); an RKS source is reported as `SCF Guess: REKS orbitals restored from previous computation (REKS::guess override).`
-   **Slots:** token k = 0 … M−1 fills active column N<sub>core</sub> + k; token order sets the pairs (§choose-pairs). Without a window the slots are the read columns N<sub>core</sub> … N<sub>core</sub>+M−1 (C₂H₄ above: HOMO, LUMO).
-   **Report:** `MO columns` lists the active columns; `swaps [(c, j)]`: MO j moved into active column c (§guess_active_window).

Butadiene with the π window:

@@fragment first-bd-window@@

The same seed with `HOMO-2` (13A, σ) in place of `HOMO-1` converges as well; 13A sits in the pair of 17A at n = 2, and E<sub>SA</sub> equals that of the cold SAD start to 2·10<sup>−11</sup> E<sub>h</sub>:

@@fragment first-bd-wrong-window@@

### Check the solution {#check-solution}

-   **Convergence:** `Energy and wave function converged.` is necessary only: every wrong solution on this page converged. Otherwise §diag-maxiter.
-   **Active set:** every index of `Pairing scheme 0` in `Post-Iterations` (§sa-fons) belongs to the inspected set, compared as a set: setup `8A(a), 9A(b)`, pair printed `(9A,8A)`. Otherwise §diag-wrong-window.
-   **Symmetry:** S0 has equal charges on symmetry-equivalent atoms (§atomic-charges) and a dipole allowed by the point group (§permanent-dipole). Otherwise §diag-fon-pinned.
-   **FONs:** a pair at n ≈ 2/0 is not by itself an error: the outer π pair of butadiene has n<sub>a</sub> = 1.999999.

E<sub>SA</sub> of different starts is not a criterion:

| Molecule | Intended solution | Other solution | E<sub>SA</sub>(intended) − E<sub>SA</sub>(other) |
| --- | --- | --- | --- |
| C₂H₄, 90° | RKS seed, n 1/1: −78.364394 | cold SAD, n 2/0: −78.353499 | −10.9 mE<sub>h</sub> |
| s-trans-butadiene | π window: −155.670331 | cold SAD, 13A in the pair of 17A: −155.671558 | +1.2 mE<sub>h</sub> |

90° C₂H₄ from the RKS seed:

@@fragment first-c2h4-seeded@@

S0 of this solution: C1 = −0.358361, C2 = −0.358355 (Mulliken), |μ| = 0.000034 e a<sub>0</sub>. Cold SAD start: C1 = −0.148908, C2 = −0.561394, |μ| = 0.263524 e a<sub>0</sub>.

<figure class="pair">
<img src="../../figures/c2h4_90_rks.svg" alt="90-degree ethylene REKS active orbitals 8A and 9A from the RKS seed" loading="lazy" decoding="async" width="346" height="139">
<img src="../../figures/c2h4_90_sad.svg" alt="90-degree ethylene REKS active orbitals 8A and 9A from a cold SAD start" loading="lazy" decoding="async" width="346" height="139">

<figcaption>90° C₂H₄, REKS(2,2) active orbitals 8A (left) and 9A (right), slice through the C–C axis and the bisector of the two CH₂ planes. Top: RKS seed, n 1.000000 / 1.000000. Bottom: cold SAD start, 8A n 0.000000, 9A n 2.000000.</figcaption>
</figure>

### Worked inputs {#first-inputs}

Each file runs in two stages: `python file.py rks`, then `python file.py reks`.

| File | Calculation | Result |
| --- | --- | --- |
| [`first_c2h4_90.py`](../../inputs/first_c2h4_90.py) | SI-SA-REKS(2,2), C₂H₄ 90°, BH&HLYP/6-31G(d), RKS seed, no window | E<sub>SA</sub> = −78.364394265090 E<sub>h</sub>; n 1.000000 / 1.000000 |
| [`first_butadiene.py`](../../inputs/first_butadiene.py) | SI-SA-REKS(4,4), s-trans-butadiene, BH&HLYP/6-31G(d), RKS seed, π window | E<sub>SA</sub> = −155.670331327491 E<sub>h</sub>; n 1.999999 / 1.999138 / 0.000862 / 0.000001 |

### Scans {#first-scans}

-   **Anchor:** converge and check one point (§check-solution); every further point reads the REKS wavefunction of the previous one (§restart). 90° C₂H₄ seeded by RKS at 60°, then 60° → 75° → 90°: n<sub>a</sub> 1.942502, 1.637928, 1.000000.
-   **Basis:** converge in the small basis, then read into the large one. `BASIS_GUESS` stops a REKS run: `BASIS_GUESS is not available with REKS. Converge REKS in the smaller basis and read its orbitals (GUESS READ / restart_file): they are projected onto the target basis pair by pair.` 90° C₂H₄, 6-31G(d) REKS file read into cc-pVTZ: `Computing basis projection from 6-31G(D) to CC-PVTZ`, n 1.000000 / 1.000000, E<sub>SA</sub> = −78.402409150180 E<sub>h</sub>.

### If the SCF does not converge {#no-convergence}

Inspect the window first (§inspect-orbitals), then §engines, §diag-maxiter, §diag-oscillation.
