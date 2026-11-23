# Procedure — REKS Studio Learn

HTML: <https://reksstudio.github.io/learn/procedure/>

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/llms.txt>. Every page: `https://reksstudio.github.io/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/inputs/<file>.txt`.

[Learn](https://reksstudio.github.io/learn/index.md) › Procedure

# Procedure

## Procedure {#procedure}

Choose the pairs → seed → window → start REKS → check. Without a seed, the active slots are the MOs (N<sub>core</sub>+1)A … (N<sub>core</sub>+M)A (1-based labels) of the guess Fock matrix in energy order. A cold start of 90° C₂H₄ converges to n = 2/0 ([P3. Seed orbitals](https://reksstudio.github.io/learn/path/p3/index.md#p3)), of s-trans-butadiene to a pair with a σ orbital ([Check the solution](#check-solution)).

### Which active space? {#which-active-space}

No rule fixes it for every molecule. REKS reduces it to whole pairs. In CASSCF, the active orbitals and electrons are chosen one by one, e.g., the full π system; a REKS active space is a set of pairs, each the bonding and antibonding orbital of one bond that breaks, twists or is excited, and it grows or shrinks by one pair.

### Choose the pairs {#choose-pairs}

Each pair of REKS(M,M) ([Pairing scheme](https://reksstudio.github.io/learn/concepts/index.md#pairing-scheme)) is a bonding orbital and its antibonding partner.

| Molecule | Active space | Pairs |
| - | - | - |
| C₂H₄, 90° twist | (2,2) | (π, π\*): in-phase and out-of-phase combination of the two C 2p orbitals of the twisted bond |
| s-trans-butadiene | (4,4) | (π₁, π₄\*) & (π₂, π₃\*) |
| all-trans-hexatriene | (6,6) | (π₁, π₆\*) & (π₂, π₅\*) & (π₃, π₄\*) |

Scheme 0 ([Pairing scheme](https://reksstudio.github.io/learn/concepts/index.md#pairing-scheme)) sets the token order of a window: the bonding orbitals first, their partners in reverse order:

$$
\left[\, \varphi_1, \dots, \varphi_P, \varphi_P^{*}, \dots, \varphi_1^{*} \,\right]
$$

REKS(4,4) of butadiene: tokens HOMO-1, HOMO, LUMO, LUMO+1 fill slots a, b, c, d; scheme 0 pairs a with d and b with c

Butadiene REKS(4,4): token k fills slot k; scheme 0 pairs (a,d) and (b,c).

### Slots of each unit kind {#unit-slots}

Token k of [`GUESS_ACTIVE_WINDOW`](https://reksstudio.github.io/learn/reference/run-control/index.md#guess_active_window) fills slot k ([Start REKS](#start-reks)); the window lists the orbitals in slot order a, b, c, …, not unit by unit. Units: [Unit](https://reksstudio.github.io/learn/concepts/index.md#unit).

| Unit | Token | Slot that fixes the unit | Default signs | First case |
| - | - | - | - | - |
| Electron geminal | `2` | anchor: first slot | (+, −) | [One electron pair: H₂, REKS(2,2)](https://reksstudio.github.io/learn/path/p1/index.md#case-h2-pair) |
| Wide electron geminal | `K`, K ≥ 3 | anchor: first slot | (+, −, …, −) | [Lone pair over three orbitals: BH, REKS(2,3) 3](https://reksstudio.github.io/learn/branch/units/index.md#case-wide-bh-23) |
| Hole geminal | `"hK"`, K ≥ 3 | anchor: last slot | (−, …, −, +) | [Hole geminal: REKS(4,3) h3](https://reksstudio.github.io/learn/branch/units/index.md#case-hole-43) |
| Electron doublet | `"dK"`, K ≥ 1 | aufbau: first slot | — | [Electron doublet over two orbitals: REKS(3,4) 2 d2](https://reksstudio.github.io/learn/branch/units/index.md#case-doublet-34) |
| Hole doublet | `"hdK"`, K ≥ 2 | aufbau: last slot | — | [Hole doublet: REKS(5,4) 2 hd2](https://reksstudio.github.io/learn/branch/units/index.md#case-hole-doublet-54) |
| Implicit SOMO | `d1`, not written | its one slot | — | [Implicit SOMO: REKS(3,3) 2 d1](https://reksstudio.github.io/learn/branch/units/index.md#case-odd-33) |

The units of every catalog: [Active space and catalog](https://reksstudio.github.io/learn/reference/index.md#catalog). The anchor of an electron geminal holds a doubly occupied orbital in a seed. Geminals of scheme 0 of the wide and odd-N catalogs, as `Pairing scheme 0` prints them in `Post-Iterations`:

| `reks` | [`reks_geminal_widths`](https://reksstudio.github.io/learn/reference/options/index.md#row-reks_geminal_widths) | Geminals of scheme 0 |
| - | - | - |
| `[2, 3]` | `[3]` | (a,b,c) |
| `[2, 4]` | `[4]` | (a,b,c,d) |
| `[4, 5]` | `[2, 3]` | (a,c,d) & (b,e) |
| `[4, 6]` | `[3, 3]` | (a,d,f) & (b,c,e) |
| `[3, 3]` | — | (a,c) & (b) |
| `[5, 5]` | — | (a,e) & (b,d) & (c) |
| `[3, 4]` | `[3]` | (a,c,d) & (b) |

For odd N the implicit SOMO slot sits between the bonding orbitals and their partners, in energy order.

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

Measured seeds of 90° C₂H₄, localized and spread: [Seeds and cold start, measured](https://reksstudio.github.io/learn/path/p3/index.md#seeds-measured).

The recipe above seeds electron geminals. Seed recipe of the other unit kinds ([Slots of each unit kind](#unit-slots)):

| Unit | Seed recipe |
| - | - |
| Hole geminal `"hK"` | to be added |
| Electron doublet `"dK"` | to be added |
| Hole doublet `"hdK"` | to be added |
| Implicit SOMO `d1` (odd N) | to be added |

### Inspect the orbitals {#inspect-orbitals}

Open the RKS Molden file in a viewer, name the M orbitals by character and note their 0-based columns: MO `kA` is column k − 1. Without a viewer, the population snippet above with the sum over the AO functions of one type (e.g. the p functions normal to a molecular plane for π) separates σ from π.

(a, d)

(b, c)

![s-trans-butadiene RKS orbital 17A, pi4\*](https://reksstudio.github.io/figures/bd_rks_17A.svg)**d** 17A LUMO+1 π₄\* · 0.1441

![s-trans-butadiene RKS orbital 16A, pi3\*](https://reksstudio.github.io/figures/bd_rks_16A.svg)**c** 16A LUMO π₃\* · 0.0268

![s-trans-butadiene RKS orbital 14A, pi1](https://reksstudio.github.io/figures/bd_rks_14A.svg)**a** 14A HOMO−1 π₁ · −0.3718

![s-trans-butadiene RKS orbital 15A, pi2](https://reksstudio.github.io/figures/bd_rks_15A.svg)**b** 15A HOMO π₂ · −0.2689

s-trans-butadiene, RKS BH\&HLYP/6-31G(d), slice 0.6 Å above the molecular plane, blue + / copper −. One column per pair of scheme 0: antibonding partner above, bonding orbital below; slot, MO, character, ε / E<sub>h</sub>. 13A HOMO−2 (−0.4075) is σ.

Diffuse basis: the valence antibonding orbital can lie far above the LUMO; give its column as an integer token. Butadiene, aug-cc-pVDZ: LUMO is π₃\*; LUMO+1 … LUMO+5 are σ, the largest π₄\* component is LUMO+6 (column 21); `["HOMO-1", "HOMO", "LUMO", 21]` prints `swaps [(16, 21)]`.

Degenerate orbitals: π of a linear molecule. The rotation within a degenerate RKS pair is arbitrary between runs, and the REKS result follows it. N₂ 1.60 Å, REKS(6,6), one window `['HOMO-2', 'HOMO-1', 'HOMO', 'LUMO+1', 'LUMO', 'LUMO+2']`, RKS seeds on 3, 1 and 4 threads: π FON 1.651544, 1.703717, 1.999994.

### Start REKS {#start-reks}

```python
psi4.set_options({"basis": "6-31g(d)", "scf_type": "pk",      # as in the seed run
                  "reference": "reks", "reks": [4, 4],
                  "guess_active_window": ["HOMO-1", "HOMO", "LUMO", "LUMO+1"],
                  "sa_reks_extra": [[1, 1, 1, 1, 0, 0, 0, 0]]})      # for SCF stability
e_sa, wfn = psi4.energy("bhhlyp", return_wfn=True, restart_file="first_butadiene_rks.wfn.npy")
```

The seed run above, for butadiene, writes `first_butadiene_rks.wfn` ([`first_butadiene.py`](https://reksstudio.github.io/inputs/first_butadiene.py.txt)).

Seed: `restart_file` sets `GUESS READ` ([Restart mechanism](https://reksstudio.github.io/learn/reference/run-control/index.md#restart)); an RKS restart file is reported as `SCF Guess: REKS orbitals restored from previous computation (REKS::guess override).`

Slots: token k = 0 … M−1 fills slot k, MO column N<sub>core</sub> + k (0-based, [Inspect the orbitals](#inspect-orbitals)); token order sets the pairs ([Choose the pairs](#choose-pairs)). Without a window, the slots are the read columns N<sub>core</sub> … N<sub>core</sub>+M−1 (C₂H₄ above: HOMO, LUMO).

Report: `MO columns` lists the active columns; `swaps [(c, j)]`: MO j moved into active column c ([`GUESS_ACTIVE_WINDOW`](https://reksstudio.github.io/learn/reference/run-control/index.md#guess_active_window)).

Butadiene with the π window and with a σ orbital in it: [Window, measured](https://reksstudio.github.io/learn/path/p4/index.md#window-measured).

### Check the solution {#check-solution}

Convergence: `Energy and wave function converged.` is necessary only: every wrong solution on this page converged. Otherwise [SCF hits MAXITER or continues unconverged](https://reksstudio.github.io/learn/diagnose/index.md#diag-maxiter).

Active set: every index of `Pairing scheme 0` in `Post-Iterations` ([Fractional occupation numbers of the SA-REKS ensemble](https://reksstudio.github.io/learn/reference/properties/index.md#sa-fons)) belongs to the inspected set, compared as a set: setup `8A(a), 9A(b)`, pair printed `(9A,8A)` (`Active MO indices` gives columns, `Pairing scheme` energy ranks). Otherwise [SCF converges instantly to a wrong energy after a restart](https://reksstudio.github.io/learn/diagnose/index.md#diag-wrong-window).

Symmetry: S0 has equal charges on symmetry-equivalent atoms ([Atomic charges of the states (unrelaxed)](https://reksstudio.github.io/learn/reference/properties/index.md#atomic-charges)) and a dipole allowed by the point group ([Permanent and difference dipole moments (unrelaxed)](https://reksstudio.github.io/learn/reference/properties/index.md#permanent-dipole)). Otherwise [FON 2.000000 / 0.000000 where 1 / 1 is expected, pinned at a bound](https://reksstudio.github.io/learn/diagnose/index.md#diag-fon-pinned).

FONs: a pair at n ≈ 2/0 is not by itself an error: the outer π pair of butadiene has n<sub>a</sub> = 1.999999.

E<sub>SA</sub> of different starts is not a criterion:

| Molecule | Intended solution | Other solution | E<sub>SA</sub>(intended) − E<sub>SA</sub>(other) |
| - | - | - | - |
| C₂H₄, 90° | RKS seed, n 1/1: −78.364394 | cold start, n 2/0: −78.353499 | −10.9 mE<sub>h</sub> |
| s-trans-butadiene | π window: −155.670331 | cold start, 13A in the pair of 17A: −155.671558 | +1.2 mE<sub>h</sub> |

### Scans {#first-scans}

Anchor: converge and check one point ([Check the solution](#check-solution)); every further point reads the REKS wavefunction of the previous one ([Restart mechanism](https://reksstudio.github.io/learn/reference/run-control/index.md#restart)). 90° C₂H₄ seeded by RKS at 60°, then 60° → 75° → 90°: n<sub>a</sub> 1.942502, 1.637928, 1.000000. Optimizations and trajectories chain the points in the same way ([Optimization and dynamics](https://reksstudio.github.io/learn/branch/dynamics/index.md#opt-dynamics)).

Basis: converge in the small basis, then read into the large one ([Small basis first: 6-31G(d) to cc-pVTZ](https://reksstudio.github.io/learn/branch/solvers/index.md#case-basis-c2h4)). `BASIS_GUESS` stops a REKS run: `BASIS_GUESS is not available with REKS. Converge REKS in the smaller basis and read its orbitals (GUESS READ / restart_file): they are projected onto the target basis pair by pair.` 90° C₂H₄, 6-31G(d) REKS file read into cc-pVTZ: `Computing basis projection from 6-31G(D) to CC-PVTZ`, n 1.000000 / 1.000000, E<sub>SA</sub> = −78.402409150180 E<sub>h</sub>.

### If the SCF does not converge {#no-convergence}

Inspect the window first ([Inspect the orbitals](#inspect-orbitals)), then [The three engines](https://reksstudio.github.io/learn/reference/run-control/index.md#engines), [SCF hits MAXITER or continues unconverged](https://reksstudio.github.io/learn/diagnose/index.md#diag-maxiter), [SCF oscillates or cycles](https://reksstudio.github.io/learn/diagnose/index.md#diag-oscillation).

## Linked files

[inputs/first_butadiene.py](https://reksstudio.github.io/inputs/first_butadiene.py.txt)
