# First Calculation — REKS Studio Manual

HTML: <https://reksstudio.github.io/v2/manual/first-calculation/>

Psi4 d40267fc2, 2026-10-13: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

[Manual](https://reksstudio.github.io/v2/manual/index.md) › First Calculation

# First Calculation

Chapter 3 of the REKS Studio user manual

## 3. First Calculation {#first-calculation}

Without a seed the active slots are the MOs (N<sub>core</sub>+1)A … (N<sub>core</sub>+M)A (1-based labels) of the guess Fock matrix in energy order. A cold start of 90° C₂H₄ converges to n = 2/0, of s-trans-butadiene to a pair with a σ orbital ([Check the solution](https://reksstudio.github.io/v2/manual/first-calculation/index.md#check-solution)). Procedure: choose the pairs → seed → inspect → start REKS → check.

### Which active space? {#which-active-space}

A rhetorical question: no rule fixes it for every molecule. REKS reduces it to whole pairs. In CASSCF the active orbitals and electrons are chosen one by one, e.g. the full π system; a REKS active space is a set of pairs, each the bonding and antibonding orbital of one bond that breaks, twists or is excited, and it grows or shrinks by one pair.

### Choose the pairs {#choose-pairs}

Each pair of REKS(M,M) ([Pairing scheme](https://reksstudio.github.io/v2/manual/concepts/index.md#pairing-scheme)) is a bonding orbital and its antibonding partner.

| Molecule | Active space | Pairs |
| - | - | - |
| C₂H₄, 90° twist | (2,2) | (π, π\*): in-phase and out-of-phase combination of the two C 2p orbitals of the twisted bond |
| s-trans-butadiene | (4,4) | (π₁, π₄\*) & (π₂, π₃\*) |
| all-trans-hexatriene | (6,6) | (π₁, π₆\*) & (π₂, π₅\*) & (π₃, π₄\*) |

Scheme 0 ([Pairing scheme](https://reksstudio.github.io/v2/manual/concepts/index.md#pairing-scheme)) sets the token order of a window: the bonding orbitals first, their partners in reverse order:

$$
[\,\varphi_1, \dots, \varphi_P,\ \varphi_P^{*}, \dots, \varphi_1^{*}\,]
$$

REKS(4,4) of butadiene: tokens HOMO-1, HOMO, LUMO, LUMO+1 fill slots a, b, c, d; scheme 0 pairs a with d and b with c

Butadiene REKS(4,4): token k fills slot k; scheme 0 pairs (a,d) and (b,c).

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

90° C₂H₄, BH\&HLYP/6-31G(d), the geometry of `first_c2h4_90.py` ([Worked inputs](https://reksstudio.github.io/v2/manual/first-calculation/index.md#first-inputs)), HOMO population on each carbon:

| RKS run | E(RKS) / E<sub>h</sub> | HOMO on C1 / C2 | REKS(2,2) from it: n<sub>a</sub> / n<sub>b</sub> |
| - | - | - | - |
| `scf_type df`, SAD start | −78.31842739 | 0.026 / 0.858 | 2.000000 / 0.000000 |
| `scf_type df`, read from the `pk` solution | −78.36265006 | 0.440 / 0.440 | 1.000000 / 1.000000 |
| `scf_type pk`, SAD start | −78.36264503 | 0.440 / 0.440 | 1.000000 / 1.000000 |

The seeds on this page use `scf_type pk`. A localized seed is replaced by an RKS run with `scf_type pk` or by a seed from a smaller torsion, carried to the target geometry ([Scans](https://reksstudio.github.io/v2/manual/first-calculation/index.md#first-scans)). An ROHF triplet seed of 90° C₂H₄ gives the cold-start solution (n 2.000000 / 0.000000, E<sub>SA</sub> −78.353499 E<sub>h</sub>).

### Inspect the orbitals {#inspect-orbitals}

Open the RKS Molden file in a viewer, name the M orbitals by character and note their 0-based columns: MO `kA` is column k − 1. Without a viewer, the population snippet above with the sum over the AO functions of one type (e.g. the p functions normal to a molecular plane for π) separates σ from π.

(a, d)

(b, c)

![s-trans-butadiene RKS orbital 17A, pi4\*](https://reksstudio.github.io/v2/figures/bd_rks_17A.svg)**d** 17A LUMO+1 π₄\* · 0.1441

![s-trans-butadiene RKS orbital 16A, pi3\*](https://reksstudio.github.io/v2/figures/bd_rks_16A.svg)**c** 16A LUMO π₃\* · 0.0268

![s-trans-butadiene RKS orbital 14A, pi1](https://reksstudio.github.io/v2/figures/bd_rks_14A.svg)**a** 14A HOMO−1 π₁ · −0.3718

![s-trans-butadiene RKS orbital 15A, pi2](https://reksstudio.github.io/v2/figures/bd_rks_15A.svg)**b** 15A HOMO π₂ · −0.2689

s-trans-butadiene, RKS BH\&HLYP/6-31G(d), slice 0.6 Å above the molecular plane, blue + / copper −. One column per pair of scheme 0: antibonding partner above, bonding orbital below; slot, MO, character, ε / E<sub>h</sub>. 13A HOMO−2 (−0.4075) is σ.

Diffuse basis: the valence antibonding orbital can lie far above LUMO; give its column as an integer token. Butadiene, aug-cc-pVDZ: LUMO is π₃\*, LUMO+1 … LUMO+5 are σ, the largest π₄\* component is LUMO+6 (column 21); `["HOMO-1", "HOMO", "LUMO", 21]` prints `swaps [(16, 21)]`.

Degenerate orbitals: π of a linear molecule. The rotation within a degenerate RKS pair is arbitrary between runs, and the REKS result follows it. N₂ 1.60 Å, REKS(6,6), one window `['HOMO-2', 'HOMO-1', 'HOMO', 'LUMO+1', 'LUMO', 'LUMO+2']`, RKS seeds on 3, 1 and 4 threads: π FON 1.651544, 1.703717, 1.999994.

### Start REKS {#start-reks}

```python
psi4.set_options({"basis": "6-31g(d)", "scf_type": "pk",      # as in the seed run
                  "reference": "reks", "reks": [4, 4],
                  "guess_active_window": ["HOMO-1", "HOMO", "LUMO", "LUMO+1"]})
e_sa, wfn = psi4.energy("bhhlyp", return_wfn=True, restart_file="first_butadiene_rks.wfn.npy")
```

The seed run above, for butadiene, writes `first_butadiene_rks.wfn` ([Worked inputs](https://reksstudio.github.io/v2/manual/first-calculation/index.md#first-inputs)).

Seed: `restart_file` sets `GUESS READ` ([Restart mechanism](https://reksstudio.github.io/v2/manual/run-control/index.md#restart)); an RKS source is reported as `SCF Guess: REKS orbitals restored from previous computation (REKS::guess override).`

Slots: token k = 0 … M−1 fills active column N<sub>core</sub> + k (0-based columns, [Inspect the orbitals](https://reksstudio.github.io/v2/manual/first-calculation/index.md#inspect-orbitals)); token order sets the pairs ([Choose the pairs](https://reksstudio.github.io/v2/manual/first-calculation/index.md#choose-pairs)). Without a window the slots are the read columns N<sub>core</sub> … N<sub>core</sub>+M−1 (C₂H₄ above: HOMO, LUMO).

Report: `MO columns` lists the active columns; `swaps [(c, j)]`: MO j moved into active column c ([`GUESS_ACTIVE_WINDOW`](https://reksstudio.github.io/v2/options/GUESS_ACTIVE_WINDOW.md)).

Butadiene with the π window:

```log
GUESS READ: active window ['HOMO-1', 'HOMO', 'LUMO', 'LUMO+1'] -> MO columns [13, 14, 15, 16] (swaps [])
[...]
      Pairing scheme 0: (a,d) & (b,c) = (14A,17A) & (15A,16A)

      14A     -0.363513  (a)    n_a =  1.999999    m_a =  1.999999
      15A     -0.263077  (b)    n_b =  1.999138    m_b =  1.998295
      16A     -0.049633  (c)    n_c =  0.000862    m_c =  0.001705
      17A      0.034326  (d)    n_d =  0.000001    m_d =  0.000001
[...]
@REKS Final Energy:  -155.67033132749052
```

The same seed with `HOMO-2` (13A, σ) in place of `HOMO-1` converges as well; 13A sits in the pair of 17A at n = 2, and E<sub>SA</sub> equals that of the cold SAD start to 2·10<sup>−11</sup> E<sub>h</sub>:

```log
GUESS READ: active window ['HOMO-2', 'HOMO', 'LUMO', 'LUMO+1'] -> MO columns [13, 14, 15, 16] (swaps [(13, 12)])
[...]
      Pairing scheme 0: (a,d) & (b,c) = (13A,17A) & (15A,16A)

      13A     -0.416025  (a)    n_a =  2.000000    m_a =  2.000000
      15A     -0.262249  (b)    n_b =  1.998861    m_b =  1.998188
      16A     -0.049148  (c)    n_c =  0.001139    m_c =  0.001812
      17A     -0.006608  (d)    n_d =  0.000000    m_d =  0.000000
[...]
@REKS Final Energy:  -155.67155759813016
```

### Check the solution {#check-solution}

Convergence: `Energy and wave function converged.` is necessary only: every wrong solution on this page converged. Otherwise [SCF hits MAXITER or continues unconverged](https://reksstudio.github.io/v2/manual/diagnose/index.md#diag-maxiter).

Active set: every index of `Pairing scheme 0` in `Post-Iterations` ([Fractional occupation numbers of the SA-REKS ensemble](https://reksstudio.github.io/v2/manual/properties/index.md#sa-fons)) belongs to the inspected set, compared as a set: setup `8A(a), 9A(b)`, pair printed `(9A,8A)` (generation-0 reordering, [§12](https://reksstudio.github.io/v2/manual/run-control/index.md#fons)). Otherwise [SCF converges instantly to a wrong energy after a restart](https://reksstudio.github.io/v2/manual/diagnose/index.md#diag-wrong-window).

Symmetry: S0 has equal charges on symmetry-equivalent atoms ([Atomic charges of the states (unrelaxed)](https://reksstudio.github.io/v2/manual/properties/index.md#atomic-charges)) and a dipole allowed by the point group ([Permanent and difference dipole moments (unrelaxed)](https://reksstudio.github.io/v2/manual/properties/index.md#permanent-dipole)). Otherwise [FON pinned at a bound, symmetry-broken charges](https://reksstudio.github.io/v2/manual/diagnose/index.md#diag-fon-pinned).

FONs: a pair at n ≈ 2/0 is not by itself an error: the outer π pair of butadiene has n<sub>a</sub> = 1.999999.

E<sub>SA</sub> of different starts is not a criterion:

| Molecule | Intended solution | Other solution | E<sub>SA</sub>(intended) − E<sub>SA</sub>(other) |
| - | - | - | - |
| C₂H₄, 90° | RKS seed, n 1/1: −78.364394 | cold SAD, n 2/0: −78.353499 | −10.9 mE<sub>h</sub> |
| s-trans-butadiene | π window: −155.670331 | cold SAD, 13A in the pair of 17A: −155.671558 | +1.2 mE<sub>h</sub> |

90° C₂H₄ from the RKS seed:

```log
SCF Guess: REKS orbitals restored from previous computation (REKS::guess override).
[...]
Energy and wave function converged.
[...]
      Pairing scheme 0: (a,b) = (9A,8A)

       9A     -0.202302  (a)    n_a =  1.000000
       8A     -0.202302  (b)    n_b =  1.000000
[...]
@REKS Final Energy:   -78.36439426526262
```

S0 of this solution: C1 = C2 = −0.358359 (Mulliken), |μ| = 0.000000 e a<sub>0</sub>. Cold SAD start: C1 = −0.148907, C2 = −0.561394, |μ| = 0.263525 e a<sub>0</sub>.

RKS seed

cold SAD start

![90-degree ethylene REKS active orbital b (8A) from the RKS seed](https://reksstudio.github.io/v2/figures/c2h4_90_rks_b.svg)**b** 8A · n 1.000000 · −0.2023

![90-degree ethylene REKS active orbital b (8A) from a cold SAD start](https://reksstudio.github.io/v2/figures/c2h4_90_sad_b.svg)**b** 8A · n 0.000000 · −0.2260

![90-degree ethylene REKS active orbital a (9A) from the RKS seed](https://reksstudio.github.io/v2/figures/c2h4_90_rks_a.svg)**a** 9A · n 1.000000 · −0.2023

![90-degree ethylene REKS active orbital a (9A) from a cold SAD start](https://reksstudio.github.io/v2/figures/c2h4_90_sad_a.svg)**a** 9A · n 2.000000 · −0.1784

90° C₂H₄, REKS(2,2) active pair (a, b), slice through the C–C axis and the bisector of the two CH₂ planes, blue + / copper −; slot, MO, FON, ε / E<sub>h</sub>.

### Higher spin states {#first-spin}

A state of spin S > 0 needs no SCF of its own: it is a root of an SI cassette on manifold 2S, built in the converged SA orbitals ([Spin manifold and run sector](https://reksstudio.github.io/v2/manual/concepts/index.md#run-sector)). REKS(M,M) holds the manifolds 2S = 0, 2, …, M; a configuration of 2S = 2k carries k triplet geminals, prefixes `T_`, `TT_`, `TTT_`. One full cassette per manifold:

```python
"si_reks_configs": [[["full"]], [["full"]], [["full"]], [["full"]]],
"si_reks_2spin": [0, 2, 4, 6],
```

All-trans-hexatriene, REKS(6,6) over the π system ([Choose the pairs](https://reksstudio.github.io/v2/manual/first-calculation/index.md#choose-pairs)). In the RKS seed 25A (LUMO+2, ε 0.148 E<sub>h</sub>) is σ\*, π₆\* is 26A (LUMO+3, ε 0.162 E<sub>h</sub>); the window names LUMO+3 and the report prints the swap:

```log
GUESS READ: active window ['HOMO-2', 'HOMO-1', 'HOMO', 'LUMO', 'LUMO+1', 'LUMO+3'] -> MO columns [19, 20, 21, 22, 23, 24] (swaps [(24, 25)])
[...]
      Pairing scheme 0: (a,f) & (b,e) & (c,d) = (20A,25A) & (21A,24A) & (22A,23A)

      20A     -0.395994  (a)    n_a =  1.999999    m_a =  1.999999
      21A     -0.336589  (b)    n_b =  1.999998    m_b =  1.999997
      22A     -0.253874  (c)    n_c =  1.999583    m_c =  1.999225
      23A     -0.136199  (d)    n_d =  0.000417    m_d =  0.000775
      24A     -0.049274  (e)    n_e =  0.000002    m_e =  0.000003
      25A     -0.009474  (f)    n_f =  0.000001    m_f =  0.000001
```

With LUMO+2 in place of LUMO+3 the SCF converges as well; 25A stays σ in the solution and E<sub>SA</sub> is 17.4 mE<sub>h</sub> higher.

(a, f)

(b, e)

(c, d)

![hexatriene RKS orbital 26A, pi6\*](https://reksstudio.github.io/v2/figures/hx_rks_26A.svg)**f** 26A π₆\* · 0.1620

![hexatriene RKS orbital 24A, pi5\*](https://reksstudio.github.io/v2/figures/hx_rks_24A.svg)**e** 24A π₅\* · 0.1041

![hexatriene RKS orbital 23A, pi4\*](https://reksstudio.github.io/v2/figures/hx_rks_23A.svg)**d** 23A π₄\* · 0.0013

![hexatriene RKS orbital 20A, pi1](https://reksstudio.github.io/v2/figures/hx_rks_20A.svg)**a** 20A π₁ · −0.3931

![hexatriene RKS orbital 21A, pi2](https://reksstudio.github.io/v2/figures/hx_rks_21A.svg)**b** 21A π₂ · −0.3331

![hexatriene RKS orbital 22A, pi3](https://reksstudio.github.io/v2/figures/hx_rks_22A.svg)**c** 22A π₃ · −0.2446

All-trans-hexatriene, RKS BH\&HLYP/6-31G(d), slice 0.6 Å above the molecular plane, blue + / copper −. One column per pair of scheme 0: antibonding partner above, bonding orbital below; slot, MO, character, ε / E<sub>h</sub>. 25A (LUMO+2, σ\*, ε 0.1482) is outside the window.

SA pool: the default `[PPS1, OSS1, OSS2, OSS3]` ([`SA_REKS_CONFIGS`](https://reksstudio.github.io/v2/options/SA_REKS_CONFIGS.md)). The input adds the all-α determinant to the SA ensemble for SCF stability ([`SA_REKS_EXTRA`](https://reksstudio.github.io/v2/options/SA_REKS_EXTRA.md)). The four cassettes are diagonalized after the SCF:

```log
=> SI pools <=

   Cassette  Spin          Configs  Method               Wfn storage
   ---------------------------------------------------------------------
          0  2S=0 (singlet)    161  161SI-5SA-REKS(6,6)  first 10 states
          1  2S=2 (triplet)    153  153SI-5SA-REKS(6,6)  first 10 states
          2  2S=4 (quintet)     41  41SI-5SA-REKS(6,6)   first 10 states
          3  2S=6 (septet)       1  1SI-5SA-REKS(6,6)    all states
   ---------------------------------------------------------------------
   kSI-lSA-REKS = SSR over k configurations in the orbitals of the l-configuration SA ensemble;
   Wfn storage = states stored on the wavefunction, written to *.npy by wfn.to_file (SI_REKS_STORE_STATES).
```

The state summary lists the printed roots of all manifolds by energy (labels: [§9](https://reksstudio.github.io/v2/manual/setup/index.md#spin-manifolds)):

```log
==> State summary <==

    State             E [Eh]  E-E(S0) [eV]  E-E(S0) [kcal/mol]  lambda [nm]    f_len     Main configurations (w_j in %)
    --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    S0     -233.257191838391         0.000                0.00            -        -     PPS1(16.0)
    T1     -233.156651584658         2.736               63.09            -        -     T_PPS3(42.0) 22A(c)->23A(d); T_PPS9(41.9) 22A(c)->23A(d)
    T2     -233.108425331554         4.048               93.35            -        -     T_PPS5(26.2) 21A(b)->23A(d); T_PPS11(26.2) 21A(b)->23A(d)
    T3     -233.064202576971         5.252              121.10            -        -     T_PPS16(18.9) 20A(a)->23A(d)
    S1     -233.060446497939         5.354              123.46        231.6  1.54293     OSS3(47.8) 22A(c)->23A(d); OSS9(47.8) 22A(c)->23A(d)
    S2     -233.051642956940         5.593              128.98        221.7  0.00000     DES3(17.5) 22A(c),22A(c)->23A(d),23A(d)
    T4     -232.986261652404         7.372              170.01            -        -     T_PPS6(24.8) 22A(c)->24A(e)
    S3     -232.972245916928         7.754              178.81        159.9  0.00000     OSS6(24.6) 22A(c)->24A(e)
    Q1     -232.966755681972         7.903              182.25            -        -     TT_PPS1(43.6) 21A(b)->24A(e), 22A(c)->23A(d); TT_PPS4(43.6) 21A(b)->23A(d), 22A(c)->24A(e)
[...]
    Sp1    -232.680857311443        15.683              361.66            -        -     TTT_SPS_0(100.0) 20A(a)->25A(f), 21A(b)->24A(e), 22A(c)->23A(d)
    --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    Printed states of the first cassette of each spin multiplicity, ordered by energy.
    lambda, f_len: - for a spin multiplicity other than S0's (no spin-orbit coupling).
    Main configurations: the largest |w_j| (>= 0.1 %), then every further |w_j| >= 25 %.
```

| State | Main configurations | Content | ΔE / eV | QUEST TBE / eV |
| - | - | - | - | - |
| T1 | `T_PPS3`, `T_PPS9`: c→d | one triplet geminal on (c,d) ([Spin manifold and run sector](https://reksstudio.github.io/v2/manual/concepts/index.md#run-sector)) | 2.736 | 2.73 (³B<sub>u</sub>) |
| T2 | `T_PPS5`, `T_PPS11`: b→d | one triplet geminal on (b,d) | 4.048 | 4.36 (³A<sub>g</sub>) |
| S1 | `OSS3`, `OSS9`: c→d | open-shell singlet on (c,d); f<sub>len</sub> 1.54 | 5.354 | 5.37 (¹B<sub>u</sub>) |
| S2 | `DES3`: c,c→d,d | both electrons of c in d; f<sub>len</sub> 0 | 5.593 | 5.62 (¹A<sub>g</sub>, not safe) |
| Q1 | `TT_PPS1`, `TT_PPS4`: b→e, c→d | two triplet geminals coupled to S = 2 | 7.903 | – |
| Sp1 | `TTT_SPS_0`: a→f, b→e, c→d | the single 2S = 6 configuration, all three pairs triplet | 15.683 | – |

λ and f<sub>len</sub> are printed only for the multiplicity of S0. QUEST TBE: aug-cc-pVTZ, QUESTDB Table 2 ([Véril et al., WIREs Comput. Mol. Sci. 2021, 11, e1517](https://reksstudio.github.io/v2/manual/reference/index.md#veril2021-questdb)); QUEST lists excited states only: its ¹A<sub>g</sub> is the lowest excited ¹A<sub>g</sub> (2¹A<sub>g</sub> counting S0). Irreps from the inversion parity of the REKS active orbitals: a, c a<sub>u</sub>; b, d b<sub>g</sub>; c→d B<sub>u</sub>, b→d A<sub>g</sub>, c,c→d,d A<sub>g</sub>.

[Spin-state gaps and Heisenberg J](https://reksstudio.github.io/v2/manual/properties/index.md#spin-state-energetics) compares the lowest states of adjacent manifolds:

```log
==> Spin-state energetics <==

    Spins  Low-spin state    High-spin state     E(low spin) [Eh]   E(high spin) [Eh]    Gap [eV]        J [Eh]   J [cm^-1]  Lowering(lo) [eV]  Lowering(hi) [eV]
    -------------------------------------------------------------------------------------------------------------------------------------------------------------
    S/T    S0 (cassette 0)   T1 (cassette 1)    -233.257191838391   -233.156651584658       2.736     -0.050270   -11033.02              0.522              1.115
    T/Q    T1 (cassette 1)   Q1 (cassette 2)    -233.156651584658   -232.966755681972       5.167     -0.047474   -10419.33              1.115              0.939
    Q/Sp   Q1 (cassette 2)   Sp1 (cassette 3)   -232.966755681972   -232.680857311443       7.780     -0.047650   -10457.91              0.939              0.000
    -------------------------------------------------------------------------------------------------------------------------------------------------------------
    J(T/Q) / J(S/T) = 0.94, J(Q/Sp) / J(S/T) = 0.95: ratio 1 = one J for all spin pairs (Lande interval rule).

    Spins = the two spin multiplicities compared (S/T = singlet/triplet). Low-/high-spin state = lowest state of each multiplicity over all cassettes.
    Gap = E(high spin) - E(low spin). Lowering(lo/hi) = SI lowering of that state, min_i H_ii - E.
    J = -Gap/(2 S_high), for H = -2J S_A.S_B. J is a spin-coupling constant only if
    the two states have the same open-shell orbitals and similar SI lowering.
    Q = quintet (not quartet), Sp = septet.
```

J is a coupling constant only for two states with the same open-shell orbitals; T1 (c,d) and Q1 (b,e)(c,d) differ.

A configuration added to the SA ensemble enters the orbital optimization. `T_PPS3`, the main configuration of T1, on 2S = 2, the rest of the input unchanged:

```python
"sa_reks_configs": [["PPS1", "OSS1", "OSS2", "OSS3"], ["T_PPS3"]],
"sa_reks_2spin": [0, 2],
```

T1 −233.156652 → −233.160794 E<sub>h</sub> (2.736 → 2.614 eV above S0), S0 −233.257192 → −233.256867 E<sub>h</sub>.

### Worked inputs {#first-inputs}

Each file runs in two stages: `python file.py rks`, then `python file.py reks`.

| File | Calculation | Result |
| - | - | - |
| [`first_c2h4_90.py`](https://reksstudio.github.io/v2/inputs/first_c2h4_90.py.txt) | SI-SA-REKS(2,2), C₂H₄ 90°, BH\&HLYP/6-31G(d), RKS seed, no window | E<sub>SA</sub> = −78.364394265263 E<sub>h</sub>; n 1.000000 / 1.000000 |
| [`first_butadiene.py`](https://reksstudio.github.io/v2/inputs/first_butadiene.py.txt) | SI-SA-REKS(4,4), s-trans-butadiene, BH\&HLYP/6-31G(d), RKS seed, π window | E<sub>SA</sub> = −155.670331327491 E<sub>h</sub>; n 1.999999 / 1.999138 / 0.000862 / 0.000001 |
| [`first_hexatriene.py`](https://reksstudio.github.io/v2/inputs/first_hexatriene.py.txt) | SI-SA-REKS(6,6), all-trans-hexatriene (QUEST geometry), BH\&HLYP/6-31G(d), RKS seed, π window with LUMO+3; default SA pool, all-α determinant in SA; SI on 2S = 0, 2, 4, 6 | E<sub>SA</sub> = −232.925571833108 E<sub>h</sub>; S0 −233.257191838391, T1 −233.156651584658, Q1 −232.966755681972, Sp1 −232.680857311443 E<sub>h</sub> |

### Scans {#first-scans}

Anchor: converge and check one point ([Check the solution](https://reksstudio.github.io/v2/manual/first-calculation/index.md#check-solution)); every further point reads the REKS wavefunction of the previous one ([Restart mechanism](https://reksstudio.github.io/v2/manual/run-control/index.md#restart)). 90° C₂H₄ seeded by RKS at 60°, then 60° → 75° → 90°: n<sub>a</sub> 1.942502, 1.637928, 1.000000. Optimizations and trajectories chain the points in the same way ([§5](https://reksstudio.github.io/v2/manual/dynamics/index.md#opt-dynamics)).

Basis: converge in the small basis, then read into the large one. `BASIS_GUESS` stops a REKS run: `BASIS_GUESS is not available with REKS. Converge REKS in the smaller basis and read its orbitals (GUESS READ / restart_file): they are projected onto the target basis pair by pair.` 90° C₂H₄, 6-31G(d) REKS file read into cc-pVTZ: `Computing basis projection from 6-31G(D) to CC-PVTZ`, n 1.000000 / 1.000000, E<sub>SA</sub> = −78.402409150180 E<sub>h</sub>.

### If the SCF does not converge {#no-convergence}

Inspect the window first ([Inspect the orbitals](https://reksstudio.github.io/v2/manual/first-calculation/index.md#inspect-orbitals)), then [The three engines](https://reksstudio.github.io/v2/manual/run-control/index.md#engines), [SCF hits MAXITER or continues unconverged](https://reksstudio.github.io/v2/manual/diagnose/index.md#diag-maxiter), [SCF oscillates or cycles](https://reksstudio.github.io/v2/manual/diagnose/index.md#diag-oscillation).

## Linked files

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

[inputs/first_butadiene.py](https://reksstudio.github.io/v2/inputs/first_butadiene.py.txt)

```python
"""SI-SA-REKS(4,4) of s-trans-butadiene, BH&HLYP/6-31G(d), pi window from RKS orbitals.
python first_butadiene.py rks   -> RKS orbitals: first_butadiene_rks.wfn.npy + Molden file to inspect
python first_butadiene.py reks  -> REKS(4,4) with pairs (pi1, pi4) and (pi2, pi3)"""
import sys
import psi4

stage = sys.argv[1]
psi4.set_output_file(f"first_butadiene_{stage}.out", False)
psi4.set_memory("2 GB")

psi4.geometry("""
0 1
C
C 1 1.34
C 2 1.46 1 124.0
C 3 1.34 2 124.0 1 180.0
H 1 1.08 2 121.0 3 0.0
H 1 1.08 2 121.0 3 180.0
H 2 1.09 1 119.0 3 180.0
H 3 1.09 4 119.0 2 180.0
H 4 1.08 3 121.0 2 0.0
H 4 1.08 3 121.0 2 180.0
symmetry c1
""")
psi4.set_options({"basis": "6-31g(d)", "scf_type": "pk"})

if stage == "rks":
    psi4.set_options({"molden_write": True})
    e, wfn = psi4.energy("bhhlyp", return_wfn=True)
    wfn.to_file("first_butadiene_rks.wfn")
    print(f"E(RKS) = {e:.10f}")
else:
    psi4.set_options({
        "reference": "reks",
        "reks": [4, 4],
        "guess_active_window": ["HOMO-1", "HOMO", "LUMO", "LUMO+1"],
    })
    e_sa, wfn = psi4.energy("bhhlyp", return_wfn=True, restart_file="first_butadiene_rks.wfn.npy")
    print(f"E(SA) = {e_sa:.10f}")
    print("SSR states:", wfn.array_variable("SSR ENERGIES K=0").np.ravel()[:3])
```

[inputs/first_hexatriene.py](https://reksstudio.github.io/v2/inputs/first_hexatriene.py.txt)

```python
"""SI-SA-REKS(6,6) of all-trans-hexatriene, BH&HLYP/6-31G(d), pi window from RKS orbitals; singlet, triplet,
quintet and septet states from one SCF.
python first_hexatriene.py rks   -> RKS orbitals: first_hexatriene_rks.wfn.npy + Molden file to inspect
python first_hexatriene.py reks  -> REKS(6,6) with pairs (pi1, pi6) (pi2, pi5) (pi3, pi4); LUMO+2 is sigma*"""
import sys
import psi4

stage = sys.argv[1]
psi4.set_output_file(f"first_hexatriene_{stage}.out", False)
psi4.set_memory("4 GB")

psi4.geometry("""
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
""")
psi4.set_options({"basis": "6-31g(d)", "scf_type": "pk"})

if stage == "rks":
    psi4.set_options({"molden_write": True})
    e, wfn = psi4.energy("bhhlyp", return_wfn=True)
    wfn.to_file("first_hexatriene_rks.wfn")
    print(f"E(RKS) = {e:.10f}")
else:
    psi4.set_options({
        "reference": "reks",
        "reks": [6, 6],
        "guess_active_window": ["HOMO-2", "HOMO-1", "HOMO", "LUMO", "LUMO+1", "LUMO+3"],
        "sa_reks_extra": [[1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]],     # all-alpha determinant in SA
        "si_reks_configs": [[["full"]], [["full"]], [["full"]], [["full"]]],
        "si_reks_2spin": [0, 2, 4, 6],
    })
    e_sa, wfn = psi4.energy("bhhlyp", return_wfn=True, restart_file="first_hexatriene_rks.wfn.npy")
    print(f"E(SA) = {e_sa:.10f}")
```
