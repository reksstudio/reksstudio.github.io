# FP: Bis-fluoreno-pyrene — Zethrenes — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/zethrenes/fp/>

Psi4 builds of these outputs: b0c2d45a7, d40267fc2, 2424fb773 (kk/reks.v42), named on each run line. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# Bis-fluoreno-pyrene (FP)

C<sub>38</sub>H<sub>20</sub>, 58 atoms, 1420 basis functions (cc-pVTZ); compound 1c of Hu et al. (2016). Geometries: R<sub>cs</sub>, R<sub>os</sub>, R<sub>T</sub>.

[R<sub>cs</sub> (10,10) details](#cs-1010) · [R<sub>os</sub> (10,10) details](#os-1010) · [R<sub>T</sub> (10,10) details](#t-1010)

[Spin gaps](#gaps) · [Energies across geometries](#geometries) · [SI states](#states) · [Natural occupations](#occupations) · [vs experiment](#experiment) · [Calculations](#calculations)

![FP: drawing of the R_cs geometry](https://reksstudio.github.io/v2/figures/zeth/mol/FP.svg)

R<sub>cs</sub> geometry, 16 px/Å: explicit hydrogens, no bond orders.

* C
* H

## Spin gaps

ΔE<sub>ST</sub> = E(T1) − E(S0), ΔE<sub>SQ</sub> = E(Q1) − E(S0)

Same geometry, same active space; S0, T1, Q1 = lowest state with 2S = 0, 2, 4; positive: T1 (Q1) above S0. Spin gaps and ΔE<sub>geom</sub> in kcal mol⁻¹ (1 decimal, with sign); SI state energies E − E(S0) in eV.

R<sub>cs</sub>, R<sub>os</sub>, R<sub>T</sub>: optima of the closed-shell singlet, the broken-symmetry open-shell singlet and the triplet (SI appendix blocks “Singlet Closed Shell”, “Singlet Biradical Open Shell”, “Triplet”; UCAM-B3LYP/6-31G\*, Hu et al. 2016, SI p. S16).

ΔE<sub>ST</sub> / kcal mol<sup>−1</sup>

| Active space | R<sub>cs</sub> | R<sub>os</sub> | R<sub>T</sub> |
| - | - | - | - |
| (2,2) | +17.1 | +4.1 | +2.5 |
| (4,4) | +18.4 | +8.3 | +6.2 |
| (6,6) | +18.8 | +6.9 | +4.4 |
| (8,8) | +20.4 | +6.9 | +4.8 |
| (10,10) | +20.6 | +6.8 | +4.5 |

ΔE<sub>SQ</sub> / kcal mol<sup>−1</sup>

| Active space | R<sub>cs</sub> | R<sub>os</sub> | R<sub>T</sub> |
| - | - | - | - |
| (2,2) | n/a | n/a | n/a |
| (4,4) | +74.5 | +64.8 | +64.3 |
| (6,6) | +75.2 | +65.1 | +63.3 |
| (8,8) | +75.9 | +63.6 | +62.5 |
| (10,10) | +74.7 | +63.0 | +61.6 |

–: not computed; n/a: no 2S = 4 state in the SI space of this active space.

## Energies across geometries

ΔE<sub>geom</sub>(X, R) = E<sub>X</sub>(R) − E<sub>S0</sub>(R<sub>os</sub>)

Same active space; zero = E(S0) at R<sub>os</sub>; SI-SA-REKS electronic energies; positive: above the zero.

ΔE<sub>geom</sub> / kcal mol<sup>−1</sup>

| Active space | State | R<sub>cs</sub> | R<sub>os</sub> | R<sub>T</sub> |
| - | - | - | - | - |
| (2,2) | S0 | +0.9 | 0.0 | +0.4 |
| | T1 | +18.1 | +4.1 | +3.0 |
| | Q1 | n/a | n/a | n/a |
| (4,4) | S0 | +3.2 | 0.0 | +1.1 |
| | T1 | +21.7 | +8.3 | +7.3 |
| | Q1 | +77.7 | +64.8 | +65.4 |
| (6,6) | S0 | +2.0 | 0.0 | +3.4 |
| | T1 | +20.9 | +6.9 | +7.9 |
| | Q1 | +77.2 | +65.1 | +66.7 |
| (8,8) | S0 | +1.1 | 0.0 | +1.3 |
| | T1 | +21.5 | +6.9 | +6.1 |
| | Q1 | +77.0 | +63.6 | +63.8 |
| (10,10) | S0 | +1.1 | 0.0 | +1.7 |
| | T1 | +21.7 | +6.8 | +6.2 |
| | Q1 | +75.7 | +63.0 | +63.3 |

## SI states along the ladder

* 2S = 0: S0–S5
* 2S = 2: T1–T3
* 2S = 4: Q1

FP R_cs: SI states per active space, E − E(S0) / eV, 0 to 4.5, joined across active spaces; numbers in the tables below

FP R_os: SI states per active space, E − E(S0) / eV, 0 to 4.5, joined across active spaces; numbers in the tables below

FP R_T: SI states per active space, E − E(S0) / eV, 0 to 4.5, joined across active spaces; numbers in the tables below

One column per active space and one level per SI state shown on this page at E − E(S0) / eV (same geometry and active space); colour = 2S; levels closer than about 0.08 eV sit side by side. A thin line joins a level to one level of the same 2S at the next computed active space when their leading excitation patterns agree (same dominant pattern, or pattern weights that overlap by at least one half) or their density changes ΔD differ by at most 0.15; the joins are one-to-one, as many as the rule allows. A level without a line has no such partner among the shown states. Patterns come from the leading configurations listed in the output (the three largest, then every further one above 5 %); at (8,8) and (10,10) these often carry a small share of the state, which the hover gives. ΔD: change of the active orbital occupations (diagonal of the active one-particle density) from S0. H−k … H, L … L+k: bonding and antibonding active orbitals in pair order, H and L the frontier pair; H→L moves one electron, H,H→L,L two. –: not computed, a dashed line spans it; Q1 at (2,2): n/a. Spin gaps on this page in kcal mol⁻¹, SI state energies in eV; the T1 level of each column is E(T1) − E(S0).

Table: threads per geometry

R<sub>cs</sub>: threads

| 2S | Active spaces | Threads |
| - | - | - |
| 0 | (2,2) → (4,4) | S0→S0, S1→S2, S2→S1 |
| | (4,4) → (6,6) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S5 |
| | (6,6) → (8,8) | S0→S0, S1→S1, S2→S2, S3→S4, S4→S3, S5→S5 |
| | (8,8) → (10,10) | S0→S0, S1→S2, S2→S1, S3→S4, S4→S3, S5→S5 |
| 2 | (2,2) → (4,4) | T1→T1 |
| | (4,4) → (6,6) | T1→T1, T2→T3, T3→T2 |
| | (6,6) → (8,8) | T1→T1, T2→T2, T3→T3 |
| | (8,8) → (10,10) | T1→T1, T2→T2, T3→T3 |
| 4 | (4,4) → (6,6) | Q1→Q1 |
| | (6,6) → (8,8) | Q1→Q1 |
| | (8,8) → (10,10) | Q1→Q1 |

R<sub>os</sub>: threads

| 2S | Active spaces | Threads |
| - | - | - |
| 0 | (2,2) → (4,4) | S0→S0, S1→S2, S2→S1 |
| | (4,4) → (6,6) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S5 |
| | (6,6) → (8,8) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S4, S5→S5 |
| | (8,8) → (10,10) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S4, S5→S5 |
| 2 | (2,2) → (4,4) | T1→T1 |
| | (4,4) → (6,6) | T1→T1, T2→T2, T3→T3 |
| | (6,6) → (8,8) | T1→T1, T2→T2, T3→T3 |
| | (8,8) → (10,10) | T1→T1, T2→T2, T3→T3 |
| 4 | (4,4) → (6,6) | Q1→Q1 |
| | (6,6) → (8,8) | Q1→Q1 |
| | (8,8) → (10,10) | Q1→Q1 |

R<sub>T</sub>: threads

| 2S | Active spaces | Threads |
| - | - | - |
| 0 | (2,2) → (4,4) | S0→S0, S1→S2, S2→S1 |
| | (4,4) → (6,6) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S5 |
| | (6,6) → (8,8) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S4, S5→S5 |
| | (8,8) → (10,10) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S4, S5→S5 |
| 2 | (2,2) → (4,4) | T1→T1 |
| | (4,4) → (6,6) | T1→T1, T2→T2, T3→T3 |
| | (6,6) → (8,8) | T1→T1, T2→T2 |
| | (8,8) → (10,10) | T1→T1, T2→T2, T3→T3 |
| 4 | (4,4) → (6,6) | Q1→Q1 |
| | (6,6) → (8,8) | Q1→Q1 |
| | (8,8) → (10,10) | Q1→Q1 |

## Natural occupations

R<sub>cs</sub>

FP R_cs, S0: natural occupations per active space in the order printed, 0 to 2; y0, y1

FP R_cs, T1: natural occupations per active space in the order printed, 0 to 2

FP R_cs, Q1: natural occupations per active space in the order printed, 0 to 2

R<sub>os</sub>

FP R_os, S0: natural occupations per active space in the order printed, 0 to 2; y0, y1

FP R_os, T1: natural occupations per active space in the order printed, 0 to 2

FP R_os, Q1: natural occupations per active space in the order printed, 0 to 2

R<sub>T</sub>

FP R_T, S0: natural occupations per active space in the order printed, 0 to 2; y0, y1

FP R_T, T1: natural occupations per active space in the order printed, 0 to 2

FP R_T, Q1: natural occupations per active space in the order printed, 0 to 2

Natural occupations n<sub>i</sub> of the SI state (0 to 2, the cell is 2), the "occ" line of the output block "Natural occupation numbers and natural orbitals of the active space" in the order printed, centred on the HOMO | LUMO divide (dashed), so an orbital keeps its column along the ladder; y<sub>0</sub> = n<sub>LUNO</sub>, y<sub>1</sub> = n<sub>LUNO+1</sub>, as the code prints them; y<sub>0</sub>, y<sub>1</sub> for S0 only (n/a for T1, Q1); otherwise n/a: no such state or orbital in the SI space of this active space.

## REKS vs experiment

Absorption maximum: Δ +0.81 eV, 1 molecule (1 core)

* experiment: substituted derivative; absorption maximum in solution
* REKS, parent hydrocarbon, isolated molecule (gas phase), one dot per active space, the larger at the last:
* (2,2)
* (4,4)
* (6,6)
* (8,8)
* (10,10)
* Δ = REKS(10,10) − experiment / eV

Absorption maximum / eV, experiment and REKS(10,10): 1 molecules; values in Table 2 of the details

(8,8) → (10,10): absorption +0.04 eV; every active space in the details.

Experiment. Absorption: band maximum in solution (Hu et al. 2016). Substituents: mesityl (M).

REKS. Parent hydrocarbon without substituents, isolated molecule (gas phase); SI-SA-REKS(10,10)/BH\&HLYP/cc-pVTZ at the UCAM-B3LYP/6-31G\* geometries of Hu et al. (2016), not reoptimized; electronic energies without zero-point energy; absorption as a vertical energy.

Tables, definitions and every active space · further measurements: FP-M SQUID 2J, FP-M 1096 nm

Absorption: E(Sn) − E(S0) at R<sub>os</sub>, vertical (no Sn geometry computed); Sn: the H→L-led singlet of largest f; experiment E = 1239.84 / λ(nm)

Δ = REKS − experiment, from energies in E<sub>h</sub>

Absorption maximum / eV; REKS at (10,10)

| Molecule | λ / nm | Exp. | REKS | Δ | Sn · f |
| - | - | - | - | - | - |
| FP-M | 836 | 1.483 | 2.294 | +0.81 | S2 · 1.08 |

Solvent: CH<sub>2</sub>Cl<sub>2</sub>: FP-M.

FP-M: the band of largest ε<sub>max</sub>, not assigned in the source; its H→L pairing is ours.

REKS along the active-space ladder / eV

| Core | | (2,2) | (4,4) | (6,6) | (8,8) | (10,10) | R<sub>cs</sub> |
| - | - | - | - | - | - | - | - |
| FP | Sn | 2.004 | 2.343 | 2.201 | 2.254 | 2.294 | 1.931 |

Sn: S0 → Sn (H→L) at R<sub>os</sub>, Sn chosen per active space by the rule of Table 2.

R<sub>cs</sub>: the same quantity at (10,10) and R<sub>cs</sub>. –: not computed.

Other measured quantities; REKS at (10,10)

| Molecule | Quantity | Exp. | REKS | Δ | Unit |
| - | - | - | - | - | - |
| FP-M | 2J | −1.69 | −6.20 | −4.51 | kcal mol<sup>−1</sup> |
| FP-M | 1096 nm | 1.131 | 1.537 | +0.41 | eV |

FP-M 2J: 2J/k<sub>B</sub> = ΔE<sub>S−T</sub> = −852.6 K (Hu et al. 2016, p. 1069), SQUID, powder, Bleaney-Bowers fit; REKS: E(S0) at R<sub>os</sub> − E(T1) at R<sub>T</sub>.

FP-M 1096 nm: absorption band assigned by the authors to H,H→L,L (Hu et al. 2016, Table 2); REKS: S1 (H,H→L,L), f 0.00, at R<sub>os</sub>.

Sources: Hu et al. 2016, Table 2, p. 1069 (FP-M), [doi:10.1021/jacs.5b12532](https://doi.org/10.1021/jacs.5b12532).

[All compounds](https://reksstudio.github.io/v2/main/results/zethrenes/index.md#experiment)

## Calculations

One entry per geometry and active space; the summary gives ΔE<sub>ST</sub>, ΔE<sub>SQ</sub> / kcal mol⁻¹ to 1 decimal. Inside: the run line, the SI states (f (length) of S0 → Sn; leading excitation patterns as a share of the listed configurations, given where these carry at least half of the state, else the listed share; ΔD entries with |ΔD| ≥ 0.15, as in the hover of the SI-state chart), the SA-REKS active orbitals and the input. Inputs as run; starting orbitals read from a seed file (RKS or ROHF orbitals; for HZ and HZD the orbitals of an earlier REKS(2,2) run), active pairs set per rung.

Orbitals: one column per active pair as the code pairs them, frontier pair first, antibonding orbital above, bonding below. Contours ±0.01, ±0.02, ±0.04 a.u. in a plane 0.6 Å above the molecular plane; blue + / copper −.

### R<sub>cs</sub> {#geom-cs}

R<sub>cs</sub> · (2,2) · 2 orbitals · ΔE<sub>ST</sub> **+17.1** kcal mol⁻¹ · ΔE<sub>SQ</sub> **n/a**

SI configurations 2S = 0: 3, 2S = 2: 1 · wall time 262 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [FP_S_cs_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/FP_S_cs_22.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +1.782 | 2.33500 | H→L 100 % | H −0.94, L +0.94 |
| S2 | +2.638 | 0.00000 | H,H→L,L 100 % | H −1.88, L +1.88 |
| S3 | n/a | | | |
| S4 | n/a | | | |
| S5 | n/a | | | |
| T1 | +0.743 | | H→L 100 % | H −0.94, L +0.94 |
| T2 | n/a | | | |
| T3 | n/a | | | |
| Q1 | n/a | | | |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(a, b)

![FP R_cs (2,2), orbital 125A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_cs/22_125A.svg)**b** 125A · 0.0621\
−0.146523

![FP R_cs (2,2), orbital 124A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_cs/22_124A.svg)**a** 124A · 1.9379\
−0.192996

R<sub>cs</sub> · (4,4) · 4 orbitals · ΔE<sub>ST</sub> **+18.4** · ΔE<sub>SQ</sub> **+74.5** kcal mol⁻¹

SI configurations 2S = 0: 18, 2S = 2: 11, 2S = 4: 1 · wall time 434 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [FP_S_cs_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/FP_S_cs_44.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 98 %, H−1,H→L,L+1 2 % | |
| S1 | +1.848 | 0.00000 | H,H→L,L 59 %, H−1→L 21 %, H→L+1 20 % | H−1 −0.27, H −1.10, L +1.11, L+1 +0.25 |
| S2 | +1.914 | 2.87828 | H→L 99 %, H−1→L+1 1 % | H −0.87, L +0.85 |
| S3 | +2.733 | 0.00000 | H→L+1 79 %, H−1→L 12 %, H,H→L,L 9 % | H−1 −0.19, H −0.85, L +0.24, L+1 +0.80 |
| S4 | +3.464 | 0.00000 | H−1→L 66 %, H,H→L,L 30 %, H−1,H→L,L+1 4 % | H−1 −0.66, H −0.54, L +1.14 |
| S5 | +4.155 | 0.28073 | H−1→L+1 99 %, H→L 1 % | H−1 −0.94, L+1 +0.96 |
| T1 | +0.799 | | H→L 93 %, H−1→L+1 6 % | H −0.83, L +0.81 |
| T2 | +1.677 | | H−1→L 50 %, H→L+1 49 %, H−1,H−1,H→L,L,L+1 1 % | H−1 −0.48, H −0.38, L +0.38, L+1 +0.48 |
| T3 | +2.749 | | H−1→L 46 %, H→L+1 44 %, H−1,H→L,L+1 9 % | H−1 −0.52, H −0.42, L +0.43, L+1 +0.52 |
| Q1 | +3.230 | | H−1,H→L,L+1 100 % | H−1 −0.95, H −0.88, L +0.86, L+1 +0.97 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(b, c)

![FP R_cs (4,4), orbital 125A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_cs/44_125A.svg)**c** 125A · 0.0269\
−0.155977

![FP R_cs (4,4), orbital 124A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_cs/44_124A.svg)**b** 124A · 1.9731\
−0.193462

(a, d)

![FP R_cs (4,4), orbital 126A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_cs/44_126A.svg)**d** 126A · 0.0000\
−0.110569

![FP R_cs (4,4), orbital 123A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_cs/44_123A.svg)**a** 123A · 2.0000\
−0.238756

R<sub>cs</sub> · (6,6) · 6 orbitals · ΔE<sub>ST</sub> **+18.8** · ΔE<sub>SQ</sub> **+75.2** kcal mol⁻¹

SI configurations 2S = 0: 161, 2S = 2: 153, 2S = 4: 41, 2S = 6: 1 · wall time 221 s, 16 threads · chawk01, 2026-10-16 · Psi4 2424fb773 · input [FP_S_cs_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/FP_S_cs_66.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +1.905 | 0.00000 | H,H→L,L 61 %, H−1→L 26 %, H→L+1 13 % | H−1 −0.30, H −1.03, L +1.16, L+1 +0.15 |
| S2 | +1.928 | 2.24776 | H→L 99 %, H−2→L+1 1 % | H −0.82, L +0.81 |
| S3 | +2.795 | 0.00000 | H→L+1 80 %, H−2→L 13 %, H−1,H→L,L+1 7 % | H −0.75, L +0.16, L+1 +0.76 |
| S4 | +2.963 | 0.00000 | H−2→L 95 %, H→L+1 5 % | H−2 −0.86, L +0.76 |
| S5 | +3.366 | 0.00000 | H−1→L 70 %, H,H→L,L 30 % | H−1 −0.67, H −0.49, L +1.11 |
| T1 | +0.817 | | H→L 97 %, H−1→L+1 3 % | H −0.81, L +0.80 |
| T2 | +1.778 | | H−1→L 59 %, H→L+1 41 % | H−1 −0.54, H −0.30, L +0.43, L+1 +0.38 |
| T3 | +2.701 | | H−2→L 46 %, H→L+1 35 %, H−1→L 19 % | H−2 −0.43, H−1 −0.18, H −0.28, L +0.50, L+1 +0.36 |
| Q1 | +3.261 | | H−1,H→L,L+1 95 %, H−1,H→L,L+2 5 % | H−1 −0.93, H −0.85, L +0.84, L+1 +0.88 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(c, d)

![FP R_cs (6,6), orbital 125A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_cs/66_125A.svg)**d** 125A · 0.0433\
−0.162359

![FP R_cs (6,6), orbital 124A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_cs/66_124A.svg)**c** 124A · 1.9567\
−0.194421

(b, e)

![FP R_cs (6,6), orbital 126A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_cs/66_126A.svg)**e** 126A · 0.0000\
−0.113179

![FP R_cs (6,6), orbital 123A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_cs/66_123A.svg)**b** 123A · 2.0000\
−0.240401

(a, f)

![FP R_cs (6,6), orbital 127A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_cs/66_127A.svg)**f** 127A · 0.0000\
−0.068438

![FP R_cs (6,6), orbital 122A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_cs/66_122A.svg)**a** 122A · 2.0000\
−0.252136

R<sub>cs</sub> · (8,8) · 8 orbitals · ΔE<sub>ST</sub> **+20.4** · ΔE<sub>SQ</sub> **+75.9** kcal mol⁻¹

SI configurations 2S = 0: 1 934, 2S = 2: 2 524, 2S = 4: 1 172, 2S = 6: 199, 2S = 8: 1 · wall time 299 s, 16 threads · chawk01, 2026-10-16 · Psi4 2424fb773 · input [FP_S_cs_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/FP_S_cs_88.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 13.2 % of the state | |
| S1 | +1.967 | 0.00000 | listed configurations 49.2 % of the state | H−1 −0.32, H −1.00, L +1.19 |
| S2 | +1.973 | 2.09818 | H→L 100 % | H −0.82, L +0.82 |
| S3 | +2.765 | 0.00000 | H−2→L 62 %, H→L+1 38 % | H−2 −0.54, H −0.24, L +0.47, L+1 +0.40 |
| S4 | +2.918 | 0.00000 | H→L+1 56 %, H−2→L 44 % | H−2 −0.37, H −0.51, L +0.38, L+1 +0.48 |
| S5 | +3.334 | 0.00000 | H−1→L 100 % | H−1 −0.60, H −0.51, L +1.07 |
| T1 | +0.885 | | H→L 100 % | H −0.82, L +0.81 |
| T2 | +1.837 | | H−1→L 61 %, H→L+1 39 % | H−1 −0.55, H −0.29, L +0.45, L+1 +0.36 |
| T3 | +2.562 | | H−2→L 100 % | H−2 −0.73, L +0.65, L+1 +0.17 |
| Q1 | +3.291 | | H−1,H→L,L+1 100 % | H−1 −0.85, H −0.85, L +0.83, L+1 +0.88 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(d, e)

![FP R_cs (8,8), orbital 125A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_cs/88_125A.svg)**e** 125A · 0.0495\
−0.164711

![FP R_cs (8,8), orbital 124A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_cs/88_124A.svg)**d** 124A · 1.9505\
−0.194970

(c, f)

![FP R_cs (8,8), orbital 126A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_cs/88_126A.svg)**f** 126A · 0.0000\
−0.121913

![FP R_cs (8,8), orbital 123A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_cs/88_123A.svg)**c** 123A · 2.0000\
−0.240164

(b, g)

![FP R_cs (8,8), orbital 128A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_cs/88_128A.svg)**g** 128A · 0.0000\
−0.073883

![FP R_cs (8,8), orbital 122A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_cs/88_122A.svg)**b** 122A · 2.0000\
−0.249344

(a, h)

![FP R_cs (8,8), orbital 127A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_cs/88_127A.svg)**h** 127A · 0.0000\
−0.082645

![FP R_cs (8,8), orbital 121A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_cs/88_121A.svg)**a** 121A · 2.0000\
−0.266902

R<sub>cs</sub> · (10,10) · 10 orbitals · ΔE<sub>ST</sub> **+20.6** · ΔE<sub>SQ</sub> **+74.7** kcal mol⁻¹

SI configurations 2S = 0: 29 082, 2S = 2: 48 090, 2S = 4: 31 275, 2S = 6: 9 635, 2S = 8: 1 209, 2S = 10: 1 · wall time 955 s, 96 threads · chawk07, 2026-10-16 · Psi4 2424fb773 · input [FP_S_cs_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/FP_S_cs_1010.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 2.7 % of the state | |
| S1 | +1.931 | 2.18868 | listed configurations 11.4 % of the state | H −0.82, L +0.81 |
| S2 | +1.965 | 0.00000 | listed configurations 6.0 % of the state | H−1 −0.30, H −1.01, L +1.16 |
| S3 | +2.600 | 0.00000 | listed configurations 8.4 % of the state | H −0.75, L+1 +0.78 |
| S4 | +2.884 | 0.00000 | listed configurations 9.9 % of the state | H−2 −0.83, L +0.79 |
| S5 | +3.310 | 0.00000 | listed configurations 7.2 % of the state | H−1 −0.60, H −0.43, L +1.03 |
| T1 | +0.892 | | listed configurations 11.4 % of the state | H −0.82, L +0.81 |
| T2 | +1.800 | | listed configurations 6.3 % of the state | H−1 −0.50, H −0.33, L +0.40, L+1 +0.42 |
| T3 | +2.542 | | listed configurations 5.1 % of the state | H−2 −0.43, H−1 −0.19, H −0.22, L +0.51, L+1 +0.29 |
| Q1 | +3.237 | | H−1,H→L,L+1 100 % | H−1 −0.89, H −0.83, L +0.82, L+1 +0.91 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(e, f)

![FP R_cs (10,10), orbital 125A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_cs/1010_125A.svg)**f** 125A · 0.0440\
−0.167977

![FP R_cs (10,10), orbital 124A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_cs/1010_124A.svg)**e** 124A · 1.9560\
−0.193986

(d, g)

![FP R_cs (10,10), orbital 126A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_cs/1010_126A.svg)**g** 126A · 0.0000\
−0.124818

![FP R_cs (10,10), orbital 123A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_cs/1010_123A.svg)**d** 123A · 2.0000\
−0.239167

(c, h)

![FP R_cs (10,10), orbital 128A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_cs/1010_128A.svg)**h** 128A · 0.0000\
−0.077143

![FP R_cs (10,10), orbital 122A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_cs/1010_122A.svg)**c** 122A · 2.0000\
−0.250394

(b, i)

![FP R_cs (10,10), orbital 127A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_cs/1010_127A.svg)**i** 127A · 0.0000\
−0.088232

![FP R_cs (10,10), orbital 121A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_cs/1010_121A.svg)**b** 121A · 2.0000\
−0.267758

(a, j)

![FP R_cs (10,10), orbital 129A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_cs/1010_129A.svg)**j** 129A · 0.0000\
−0.034256

![FP R_cs (10,10), orbital 120A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_cs/1010_120A.svg)**a** 120A · 2.0000\
−0.286034

### R<sub>os</sub> {#geom-os}

R<sub>os</sub> · (2,2) · 2 orbitals · ΔE<sub>ST</sub> **+4.1** kcal mol⁻¹ · ΔE<sub>SQ</sub> **n/a**

SI configurations 2S = 0: 3, 2S = 2: 1 · wall time 298 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [FP_S_os_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/FP_S_os_22.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +2.004 | 1.12951 | H→L 100 % | H −0.51, L +0.51 |
| S2 | +2.245 | 0.00000 | H,H→L,L 100 % | H −1.02, L +1.02 |
| S3 | n/a | | | |
| S4 | n/a | | | |
| S5 | n/a | | | |
| T1 | +0.178 | | H→L 100 % | H −0.51, L +0.51 |
| T2 | n/a | | | |
| T3 | n/a | | | |
| Q1 | n/a | | | |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(a, b)

![FP R_os (2,2), orbital 125A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_os/22_125A.svg)**b** 125A · 0.4919\
−0.160180

![FP R_os (2,2), orbital 124A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_os/22_124A.svg)**a** 124A · 1.5081\
−0.182450

R<sub>os</sub> · (4,4) · 4 orbitals · ΔE<sub>ST</sub> **+8.3** · ΔE<sub>SQ</sub> **+64.8** kcal mol⁻¹

SI configurations 2S = 0: 18, 2S = 2: 11, 2S = 4: 1 · wall time 465 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [FP_S_os_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/FP_S_os_44.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 97 %, H−1→L 3 % | |
| S1 | +1.708 | 0.00000 | H,H→L,L 39 %, H→L+1 28 %, H−1→L 22 % | H−1 −0.30, H −0.24, L +0.20, L+1 +0.34 |
| S2 | +2.343 | 1.48017 | H→L 100 % | H −0.41, L +0.38 |
| S3 | +2.598 | 0.00000 | H→L+1 50 %, H,H→L,L 29 %, H−1,H→L,L+1 15 % | H−1 −0.18, H −0.47, L+1 +0.64 |
| S4 | +3.397 | 0.00000 | H−1→L 63 %, H,H→L,L 23 %, H−1,H−1→L,L 7 % | H−1 −0.71, L +0.57 |
| S5 | +4.022 | 0.42918 | H−1→L+1 100 % | H−1 −0.94, H +0.17, L −0.20, L+1 +0.97 |
| T1 | +0.358 | | H→L 97 %, H−1→L+1 2 % | H −0.40, L +0.37 |
| T2 | +1.888 | | H→L+1 53 %, H−1→L 32 %, H−1,H→L,L+1 15 % | H−1 −0.44, L+1 +0.67 |
| T3 | +2.755 | | H−1→L 65 %, H→L+1 29 %, H−1,H→L,L+1 6 % | H−1 −0.67, H +0.23, L+1 +0.34 |
| Q1 | +2.811 | | H−1,H→L,L+1 100 % | H−1 −0.94, H −0.41, L +0.38, L+1 +0.97 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(b, c)

![FP R_os (4,4), orbital 125A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_os/44_125A.svg)**c** 125A · 0.5058\
−0.172298

![FP R_os (4,4), orbital 124A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_os/44_124A.svg)**b** 124A · 1.4942\
−0.186763

(a, d)

![FP R_os (4,4), orbital 126A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_os/44_126A.svg)**d** 126A · 0.0000\
−0.111992

![FP R_os (4,4), orbital 123A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_os/44_123A.svg)**a** 123A · 2.0000\
−0.236075

R<sub>os</sub> · (6,6) · 6 orbitals · ΔE<sub>ST</sub> **+6.9** · ΔE<sub>SQ</sub> **+65.1** kcal mol⁻¹

SI configurations 2S = 0: 161, 2S = 2: 153, 2S = 4: 41, 2S = 6: 1 · wall time 598 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [FP_S_os_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/FP_S_os_66.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +1.587 | 0.00000 | H,H→L,L 48 %, H−1→L 31 %, H→L+1 21 % | H−1 −0.33, H −0.32, L +0.41, L+1 +0.21 |
| S2 | +2.201 | 1.12640\* | H→L 97 %, H−2,H,H→L,L,L+1 3 % | H −0.41, L +0.40 |
| S3 | +2.512 | 0.00000 | H→L+1 60 %, H,H→L,L 22 %, H−1,H→L,L+1 18 % | H−1 −0.19, H −0.51, L+1 +0.70 |
| S4 | +2.855 | 0.00000 | H−2→L 96 %, H−1→L 4 % | H−2 −0.89, H +0.43, L +0.43 |
| S5 | +3.174 | 0.00000 | H−1→L 65 %, H,H→L,L 35 % | H−1 −0.48, H −0.16, L +0.46, L+2 +0.17 |
| T1 | +0.299 | | H→L 99 %, H−1→L+1 1 % | H −0.44, L +0.42 |
| T2 | +1.888 | | H→L+1 42 %, H−1→L 41 %, H−1,H→L,L+1 17 % | H−1 −0.55, L+1 +0.55 |
| T3 | +2.581 | | H−2→L 34 %, H→L+1 34 %, H−1→L 32 % | H−2 −0.30, H−1 −0.33, L+1 +0.34 |
| Q1 | +2.822 | | H−1,H→L,L+1 97 %, H−1,H→L,L+2 3 % | H−1 −0.95, H −0.45, L +0.43, L+1 +0.91 |

\* f (length) and f (velocity) differ by more than 3× (tested when f > 10<sup>−3</sup>).

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(c, d)

![FP R_os (6,6), orbital 125A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_os/66_125A.svg)**d** 125A · 0.5353\
−0.181641

![FP R_os (6,6), orbital 124A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_os/66_124A.svg)**c** 124A · 1.4647\
−0.190819

(b, e)

![FP R_os (6,6), orbital 126A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_os/66_126A.svg)**e** 126A · 0.0000\
−0.114117

![FP R_os (6,6), orbital 123A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_os/66_123A.svg)**b** 123A · 2.0000\
−0.236943

(a, f)

![FP R_os (6,6), orbital 127A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_os/66_127A.svg)**f** 127A · 0.0000\
−0.073375

![FP R_os (6,6), orbital 122A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_os/66_122A.svg)**a** 122A · 2.0000\
−0.248797

R<sub>os</sub> · (8,8) · 8 orbitals · ΔE<sub>ST</sub> **+6.9** · ΔE<sub>SQ</sub> **+63.6** kcal mol⁻¹

SI configurations 2S = 0: 1 934, 2S = 2: 2 524, 2S = 4: 1 172, 2S = 6: 199, 2S = 8: 1 · wall time 799 s, 8 threads · fenrir04, 2026-10-15 · Psi4 d40267fc2 · input [FP_S_os_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/FP_S_os_88.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 42.6 % of the state | |
| S1 | +1.532 | 0.00000 | listed configurations 32.4 % of the state | H−1 −0.37, H −0.38, L +0.52, L+1 +0.20 |
| S2 | +2.254 | 1.09399\* | H→L 100 % | H −0.44, L +0.43 |
| S3 | +2.544 | 0.00000 | H→L+1 78 %, H−1,H→L,L+1 22 % | H−1 −0.19, H −0.52, L+1 +0.71 |
| S4 | +2.736 | 0.00000 | H−2→L 100 % | H−2 −0.93, H +0.42, L +0.48 |
| S5 | +3.133 | 0.00000 | listed configurations 39.6 % of the state | H−1 −0.51, H −0.20, L +0.53 |
| T1 | +0.298 | | H→L 100 % | H −0.48, L +0.48 |
| T2 | +1.836 | | H−1→L 54 %, H→L+1 46 % | H−1 −0.59, L+1 +0.51 |
| T3 | +2.528 | | listed configurations 36.6 % of the state | H−2 −0.41, H−1 −0.25, L +0.17, L+1 +0.31 |
| Q1 | +2.758 | | H−1,H→L,L+1 100 % | H−1 −0.90, H −0.48, L +0.48, L+1 +0.89 |

\* f (length) and f (velocity) differ by more than 3× (tested when f > 10<sup>−3</sup>).

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(d, e)

![FP R_os (8,8), orbital 125A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_os/88_125A.svg)**e** 125A · 0.5527\
−0.188131

![FP R_os (8,8), orbital 124A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_os/88_124A.svg)**d** 124A · 1.4473\
−0.193330

(c, f)

![FP R_os (8,8), orbital 126A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_os/88_126A.svg)**f** 126A · 0.0000\
−0.123038

![FP R_os (8,8), orbital 123A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_os/88_123A.svg)**c** 123A · 2.0000\
−0.235999

(b, g)

![FP R_os (8,8), orbital 128A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_os/88_128A.svg)**g** 128A · 0.0000\
−0.078267

![FP R_os (8,8), orbital 122A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_os/88_122A.svg)**b** 122A · 2.0000\
−0.245989

(a, h)

![FP R_os (8,8), orbital 127A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_os/88_127A.svg)**h** 127A · 0.0000\
−0.083227

![FP R_os (8,8), orbital 121A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_os/88_121A.svg)**a** 121A · 2.0000\
−0.268687

R<sub>os</sub> · (10,10) · 10 orbitals · ΔE<sub>ST</sub> **+6.8** · ΔE<sub>SQ</sub> **+63.0** kcal mol⁻¹

SI configurations 2S = 0: 29 082, 2S = 2: 48 090, 2S = 4: 31 275, 2S = 6: 9 635, 2S = 8: 1 209, 2S = 10: 1 · wall time 3694 s, 8 threads · fenrir04, 2026-10-15 · Psi4 d40267fc2 · input [FP_S_os_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/FP_S_os_1010.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 4.8 % of the state | |
| S1 | +1.537 | 0.00000 | listed configurations 3.6 % of the state | H−1 −0.39, H −0.38, L +0.52, L+1 +0.22 |
| S2 | +2.294 | 1.08207\* | listed configurations 11.1 % of the state | H −0.44, L +0.44 |
| S3 | +2.536 | 0.00000 | listed configurations 7.8 % of the state | H−1 −0.19, H −0.54, L+1 +0.68 |
| S4 | +2.779 | 0.00000 | listed configurations 10.5 % of the state | H−2 −0.92, H +0.41, L +0.49 |
| S5 | +3.158 | 0.00000 | listed configurations 4.2 % of the state | H−1 −0.46, H −0.26, L +0.51, L+1 +0.16 |
| T1 | +0.293 | | listed configurations 12.0 % of the state | H −0.49, L +0.49 |
| T2 | +1.832 | | listed configurations 4.8 % of the state | H−1 −0.58, L+1 +0.52 |
| T3 | +2.563 | | listed configurations 4.5 % of the state | H−2 −0.39, H−1 −0.25, L +0.17, L+1 +0.30 |
| Q1 | +2.730 | | H−1,H→L,L+1 100 % | H−1 −0.88, H −0.49, L +0.49, L+1 +0.86 |

\* f (length) and f (velocity) differ by more than 3× (tested when f > 10<sup>−3</sup>).

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(e, f)

![FP R_os (10,10), orbital 125A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_os/1010_125A.svg)**f** 125A · 0.5583\
−0.191250

![FP R_os (10,10), orbital 124A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_os/1010_124A.svg)**e** 124A · 1.4417\
−0.194021

(d, g)

![FP R_os (10,10), orbital 126A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_os/1010_126A.svg)**g** 126A · 0.0000\
−0.127401

![FP R_os (10,10), orbital 123A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_os/1010_123A.svg)**d** 123A · 2.0000\
−0.235906

(c, h)

![FP R_os (10,10), orbital 127A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_os/1010_127A.svg)**h** 127A · 0.0000\
−0.083039

![FP R_os (10,10), orbital 122A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_os/1010_122A.svg)**c** 122A · 2.0000\
−0.246818

(b, i)

![FP R_os (10,10), orbital 128A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_os/1010_128A.svg)**i** 128A · 0.0000\
−0.083010

![FP R_os (10,10), orbital 121A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_os/1010_121A.svg)**b** 121A · 2.0000\
−0.268548

(a, j)

![FP R_os (10,10), orbital 129A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_os/1010_129A.svg)**j** 129A · 0.0000\
−0.082994

![FP R_os (10,10), orbital 118A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_S_os/1010_118A.svg)**a** 118A · 2.0000\
−0.306655

### R<sub>T</sub> {#geom-t}

R<sub>T</sub> · (2,2) · 2 orbitals · ΔE<sub>ST</sub> **+2.5** kcal mol⁻¹ · ΔE<sub>SQ</sub> **n/a**

SI configurations 2S = 0: 3, 2S = 2: 1 · wall time 301 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [FP_T_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/FP_T_22.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +2.152 | 0.93030 | H→L 100 % | H −0.42, L +0.42 |
| S2 | +2.314 | 0.00000 | H,H→L,L 100 % | H −0.84, L +0.84 |
| S3 | n/a | | | |
| S4 | n/a | | | |
| S5 | n/a | | | |
| T1 | +0.110 | | H→L 100 % | H −0.42, L +0.42 |
| T2 | n/a | | | |
| T3 | n/a | | | |
| Q1 | n/a | | | |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(a, b)

![FP R_T (2,2), orbital 125A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_T/22_125A.svg)**b** 125A · 0.5813\
−0.162643

![FP R_T (2,2), orbital 124A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_T/22_124A.svg)**a** 124A · 1.4187\
−0.180331

R<sub>T</sub> · (4,4) · 4 orbitals · ΔE<sub>ST</sub> **+6.2** · ΔE<sub>SQ</sub> **+64.3** kcal mol⁻¹

SI configurations 2S = 0: 18, 2S = 2: 11, 2S = 4: 1 · wall time 595 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [FP_T_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/FP_T_44.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 96 %, H−1→L 4 % | |
| S1 | +1.811 | 0.00000 | H,H→L,L 30 %, H→L+1 30 %, H−1→L 20 % | H−1 −0.34, L+1 +0.41 |
| S2 | +2.487 | 1.14885\* | H→L 100 % | H −0.33, L +0.30 |
| S3 | +2.606 | 0.00000 | H→L+1 41 %, H,H→L,L 34 %, H−1,H→L,L+1 17 % | H−1 −0.21, H −0.36, L+1 +0.56 |
| S4 | +3.452 | 0.00000 | H−1→L 62 %, H,H→L,L 23 %, H−1,H−1→L,L 8 % | H−1 −0.70, L +0.48 |
| S5 | +3.985 | 0.44810 | H−1→L+1 100 % | H−1 −0.95, L −0.17, L+1 +0.98 |
| T1 | +0.271 | | H→L 98 %, H−1→L+1 1 % | H −0.33, L +0.29 |
| T2 | +1.998 | | H→L+1 54 %, H−1→L 24 %, H−1,H→L,L+1 22 % | H−1 −0.45, L −0.21, L+1 +0.76 |
| T3 | +2.829 | | H−1→L 71 %, H→L+1 22 %, H−1,H→L,L+1 8 % | H−1 −0.74, H +0.37, L+1 +0.29 |
| Q1 | +2.789 | | H−1,H→L,L+1 100 % | H−1 −0.95, H −0.33, L +0.30, L+1 +0.98 |

\* f (length) and f (velocity) differ by more than 3× (tested when f > 10<sup>−3</sup>).

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(b, c)

![FP R_T (4,4), orbital 125A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_T/44_125A.svg)**c** 125A · 0.5983\
−0.174934

![FP R_T (4,4), orbital 124A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_T/44_124A.svg)**b** 124A · 1.4017\
−0.185638

(a, d)

![FP R_T (4,4), orbital 126A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_T/44_126A.svg)**d** 126A · 0.0000\
−0.111555

![FP R_T (4,4), orbital 123A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_T/44_123A.svg)**a** 123A · 2.0000\
−0.236045

R<sub>T</sub> · (6,6) · 6 orbitals · ΔE<sub>ST</sub> **+4.4** · ΔE<sub>SQ</sub> **+63.3** kcal mol⁻¹

SI configurations 2S = 0: 161, 2S = 2: 153, 2S = 4: 41, 2S = 6: 1 · wall time 290 s, 16 threads · chawk01, 2026-10-16 · Psi4 2424fb773 · input [FP_T_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/FP_T_66.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +1.709 | 0.00000 | H,H→L,L 40 %, H→L+1 27 %, H−1→L 26 % | H−1 −0.32, H −0.23, L +0.27, L+1 +0.31 |
| S2 | +2.304 | 0.84213\* | H→L 96 %, H−2,H,H→L,L,L+1 4 % | H −0.34, L +0.33 |
| S3 | +2.421 | 0.00000 | H→L+1 54 %, H,H→L,L 25 %, H−1,H→L,L+1 21 % | H−1 −0.23, H −0.41, L+1 +0.68 |
| S4 | +2.910 | 0.00000 | H−2→L 97 %, H−1→L 3 % | H−2 −0.93, H +0.58, L +0.37 |
| S5 | +3.340 | 0.00000 | H−1→L 71 %, H,H→L,L 22 %, H−2,H→L,L+1 7 % | H−1 −0.63, L +0.46 |
| T1 | +0.193 | | H→L 99 %, H−1→L+1 1 % | H −0.37, L +0.36 |
| T2 | +1.948 | | H→L+1 57 %, H−1,H→L,L+1 23 %, H−1→L 20 % | H−1 −0.42, H −0.18, L −0.18, L+1 +0.79 |
| T3 | +2.586 | | H−1→L 53 %, H−2→L 33 %, H→L+1 15 % | H−2 −0.32, H−1 −0.53, H +0.41, L +0.23, L+1 +0.20 |
| Q1 | +2.743 | | H−1,H→L,L+1 100 % | H−1 −0.97, H −0.38, L +0.35, L+1 +0.98 |

\* f (length) and f (velocity) differ by more than 3× (tested when f > 10<sup>−3</sup>).

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(c, d)

![FP R_T (6,6), orbital 125A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_T/66_125A.svg)**d** 125A · 0.6274\
−0.183958

![FP R_T (6,6), orbital 124A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_T/66_124A.svg)**c** 124A · 1.3726\
−0.189685

(b, e)

![FP R_T (6,6), orbital 126A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_T/66_126A.svg)**e** 126A · 0.0000\
−0.121418

![FP R_T (6,6), orbital 123A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_T/66_123A.svg)**b** 123A · 2.0000\
−0.236418

(a, f)

![FP R_T (6,6), orbital 127A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_T/66_127A.svg)**f** 127A · 0.0000\
−0.074870

![FP R_T (6,6), orbital 122A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_T/66_122A.svg)**a** 122A · 2.0000\
−0.246087

R<sub>T</sub> · (8,8) · 8 orbitals · ΔE<sub>ST</sub> **+4.8** · ΔE<sub>SQ</sub> **+62.5** kcal mol⁻¹

SI configurations 2S = 0: 1 934, 2S = 2: 2 524, 2S = 4: 1 172, 2S = 6: 199, 2S = 8: 1 · wall time 1075 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [FP_T_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/FP_T_88.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 46.2 % of the state | |
| S1 | +1.590 | 0.00000 | listed configurations 14.1 % of the state | H−1 −0.39, H −0.22, L +0.34, L+1 +0.24 |
| S2 | +2.356 | 0.76786\* | H→L 100 % | H −0.33, L +0.33 |
| S3 | +2.532 | 0.00000 | H→L+1 70 %, H−1,H→L,L+1 30 % | H−1 −0.23, H −0.40, L+1 +0.67 |
| S4 | +2.760 | 0.00000 | H−2→L 100 % | H−2 −0.90, H +0.52, L +0.38 |
| S5 | +3.175 | 0.00000 | listed configurations 36.0 % of the state | H−1 −0.48, L +0.39, L+1 +0.16 |
| T1 | +0.210 | | H→L 100 % | H −0.38, L +0.37 |
| T2 | +1.920 | | H→L+1 39 %, H−1→L 38 %, H−1,H→L,L+1 23 % | H−1 −0.59, L+1 +0.57 |
| T3 | +2.593 | | listed configurations 14.1 % of the state | H−2 −0.32, H−1 −0.35, H +0.17, L+1 +0.34 |
| Q1 | +2.712 | | H−1,H→L,L+1 100 % | H−1 −0.91, H −0.38, L +0.37, L+1 +0.89 |

\* f (length) and f (velocity) differ by more than 3× (tested when f > 10<sup>−3</sup>).

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(d, e)

![FP R_T (8,8), orbital 125A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_T/88_125A.svg)**e** 125A · 0.6406\
−0.191071

![FP R_T (8,8), orbital 124A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_T/88_124A.svg)**d** 124A · 1.3594\
−0.193693

(c, f)

![FP R_T (8,8), orbital 126A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_T/88_126A.svg)**f** 126A · 0.0000\
−0.123345

![FP R_T (8,8), orbital 123A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_T/88_123A.svg)**c** 123A · 2.0000\
−0.235405

(b, g)

![FP R_T (8,8), orbital 127A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_T/88_127A.svg)**g** 127A · 0.0000\
−0.083923

![FP R_T (8,8), orbital 122A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_T/88_122A.svg)**b** 122A · 2.0000\
−0.244709

(a, h)

![FP R_T (8,8), orbital 128A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_T/88_128A.svg)**h** 128A · 0.0000\
−0.074501

![FP R_T (8,8), orbital 121A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_T/88_121A.svg)**a** 121A · 2.0000\
−0.268729

R<sub>T</sub> · (10,10) · 10 orbitals · ΔE<sub>ST</sub> **+4.5** · ΔE<sub>SQ</sub> **+61.6** kcal mol⁻¹

SI configurations 2S = 0: 29 082, 2S = 2: 48 090, 2S = 4: 31 275, 2S = 6: 9 635, 2S = 8: 1 209, 2S = 10: 1 · wall time 683 s, 96 threads · chawk07, 2026-10-16 · Psi4 2424fb773 · input [FP_T_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/FP_T_1010.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 5.4 % of the state | |
| S1 | +1.586 | 0.00000 | listed configurations 4.2 % of the state | H−1 −0.42, H −0.22, L +0.34, L+1 +0.27 |
| S2 | +2.411 | 0.72422\* | listed configurations 11.0 % of the state | H −0.33, L +0.33 |
| S3 | +2.519 | 0.00000 | listed configurations 9.9 % of the state | H−1 −0.24, H −0.40, L+1 +0.63 |
| S4 | +2.791 | 0.00000 | listed configurations 10.2 % of the state | H−2 −0.90, H +0.51, L +0.39 |
| S5 | +3.204 | 0.00000 | listed configurations 3.9 % of the state | H−1 −0.43, H −0.15, L +0.35, L+1 +0.16, L+3 +0.15 |
| T1 | +0.195 | | listed configurations 12.0 % of the state | H −0.38, L +0.38 |
| T2 | +1.907 | | listed configurations 6.3 % of the state | H−1 −0.59, L+1 +0.59 |
| T3 | +2.629 | | listed configurations 3.3 % of the state | H−2 −0.31, H−1 −0.35, L+1 +0.34 |
| Q1 | +2.670 | | H−1,H→L,L+1 100 % | H−1 −0.89, H −0.38, L +0.38, L+1 +0.86 |

\* f (length) and f (velocity) differ by more than 3× (tested when f > 10<sup>−3</sup>).

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(e, f)

![FP R_T (10,10), orbital 125A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_T/1010_125A.svg)**f** 125A · 0.6508\
−0.193885

![FP R_T (10,10), orbital 124A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_T/1010_124A.svg)**e** 124A · 1.3492\
−0.194126

(d, g)

![FP R_T (10,10), orbital 126A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_T/1010_126A.svg)**g** 126A · 0.0000\
−0.128363

![FP R_T (10,10), orbital 123A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_T/1010_123A.svg)**d** 123A · 2.0000\
−0.235794

(c, h)

![FP R_T (10,10), orbital 127A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_T/1010_127A.svg)**h** 127A · 0.0000\
−0.084107

![FP R_T (10,10), orbital 122A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_T/1010_122A.svg)**c** 122A · 2.0000\
−0.245279

(b, i)

![FP R_T (10,10), orbital 129A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_T/1010_129A.svg)**i** 129A · 0.0000\
−0.080142

![FP R_T (10,10), orbital 121A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_T/1010_121A.svg)**b** 121A · 2.0000\
−0.269310

(a, j)

![FP R_T (10,10), orbital 128A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_T/1010_128A.svg)**j** 128A · 0.0000\
−0.080463

![FP R_T (10,10), orbital 118A](https://reksstudio.github.io/v2/figures/zeth/orb/FP_T/1010_118A.svg)**a** 118A · 2.0000\
−0.308356

[← HZD](https://reksstudio.github.io/v2/main/results/zethrenes/hzd/index.md) · [Back to the compounds](https://reksstudio.github.io/v2/main/results/zethrenes/index.md#c-fp) · [PIF →](https://reksstudio.github.io/v2/main/results/zethrenes/pif/index.md)

## Linked files

[inputs/zethrenes/FP_S_cs_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/FP_S_cs_22.py.txt)

[inputs/zethrenes/FP_S_cs_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/FP_S_cs_44.py.txt)

[inputs/zethrenes/FP_S_cs_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/FP_S_cs_66.py.txt)

[inputs/zethrenes/FP_S_cs_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/FP_S_cs_88.py.txt)

[inputs/zethrenes/FP_S_cs_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/FP_S_cs_1010.py.txt)

[inputs/zethrenes/FP_S_os_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/FP_S_os_22.py.txt)

[inputs/zethrenes/FP_S_os_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/FP_S_os_44.py.txt)

[inputs/zethrenes/FP_S_os_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/FP_S_os_66.py.txt)

[inputs/zethrenes/FP_S_os_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/FP_S_os_88.py.txt)

[inputs/zethrenes/FP_S_os_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/FP_S_os_1010.py.txt)

[inputs/zethrenes/FP_T_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/FP_T_22.py.txt)

[inputs/zethrenes/FP_T_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/FP_T_44.py.txt)

[inputs/zethrenes/FP_T_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/FP_T_66.py.txt)

[inputs/zethrenes/FP_T_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/FP_T_88.py.txt)

[inputs/zethrenes/FP_T_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/FP_T_1010.py.txt)
