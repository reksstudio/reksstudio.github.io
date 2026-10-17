# HZD: Fused heptazethrene dimer — Zethrenes — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/zethrenes/hzd/>

Psi4 builds of these outputs: b0c2d45a7, d40267fc2, 2424fb773 (kk/reks.v42), named on each run line. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# Fused heptazethrene dimer (HZD)

C<sub>46</sub>H<sub>24</sub>, 70 atoms, 1716 basis functions (cc-pVTZ); compound 1b of Hu et al. (2016). Geometries: R<sub>cs</sub>, R<sub>os</sub>, R<sub>T</sub>.

[R<sub>cs</sub> (10,10) details](#cs-1010) · [R<sub>os</sub> (10,10) details](#os-1010) · [R<sub>T</sub> (10,10) details](#t-1010)

[Spin gaps](#gaps) · [Energies across geometries](#geometries) · [SI states](#states) · [Natural occupations](#occupations) · [Calculations](#calculations)

![HZD: drawing of the R_cs geometry](https://reksstudio.github.io/v2/figures/zeth/mol/HZD.svg)

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
| (2,2) | +14.5 | +2.9 | +1.8 |
| (4,4) | +16.0 | +6.1 | +4.4 |
| (6,6) | +16.3 | +4.8 | +3.3 |
| (8,8) | +17.1 | +5.4 | +3.8 |
| (10,10) | +16.8 | +5.3 | +3.8 |

ΔE<sub>SQ</sub> / kcal mol<sup>−1</sup>

| Active space | R<sub>cs</sub> | R<sub>os</sub> | R<sub>T</sub> |
| - | - | - | - |
| (2,2) | n/a | n/a | n/a |
| (4,4) | +60.6 | +51.5 | +52.1 |
| (6,6) | +58.6 | +49.5 | +50.1 |
| (8,8) | +58.1 | +48.4 | +49.0 |
| (10,10) | +57.0 | +47.0 | +47.5 |

–: not computed; n/a: no 2S = 4 state in the SI space of this active space.

## Energies across geometries

ΔE<sub>geom</sub>(X, R) = E<sub>X</sub>(R) − E<sub>S0</sub>(R<sub>os</sub>)

Same active space; zero = E(S0) at R<sub>os</sub>; SI-SA-REKS electronic energies; positive: above the zero.

ΔE<sub>geom</sub> / kcal mol<sup>−1</sup>

| Active space | State | R<sub>cs</sub> | R<sub>os</sub> | R<sub>T</sub> |
| - | - | - | - | - |
| (2,2) | S0 | +1.7 | 0.0 | 0.0 |
| | T1 | +16.1 | +2.9 | +1.8 |
| | Q1 | n/a | n/a | n/a |
| (4,4) | S0 | +2.3 | 0.0 | +0.9 |
| | T1 | +18.2 | +6.1 | +5.4 |
| | Q1 | +62.9 | +51.5 | +53.0 |
| (6,6) | S0 | +1.1 | 0.0 | +0.9 |
| | T1 | +17.4 | +4.8 | +4.1 |
| | Q1 | +59.7 | +49.5 | +50.9 |
| (8,8) | S0 | +0.6 | 0.0 | +1.1 |
| | T1 | +17.7 | +5.4 | +4.9 |
| | Q1 | +58.8 | +48.4 | +50.0 |
| (10,10) | S0 | +0.8 | 0.0 | +1.0 |
| | T1 | +17.6 | +5.3 | +4.9 |
| | Q1 | +57.8 | +47.0 | +48.6 |

## SI states along the ladder

* 2S = 0: S0–S5
* 2S = 2: T1–T3
* 2S = 4: Q1

HZD R_cs: SI states per active space, E − E(S0) / eV, 0 to 4, joined across active spaces; numbers in the tables below

HZD R_os: SI states per active space, E − E(S0) / eV, 0 to 4, joined across active spaces; numbers in the tables below

HZD R_T: SI states per active space, E − E(S0) / eV, 0 to 4, joined across active spaces; numbers in the tables below

One column per active space and one level per SI state shown on this page at E − E(S0) / eV (same geometry and active space); colour = 2S; levels closer than about 0.08 eV sit side by side. A thin line joins a level to one level of the same 2S at the next computed active space when their leading excitation patterns agree (same dominant pattern, or pattern weights that overlap by at least one half) or their density changes ΔD differ by at most 0.15; the joins are one-to-one, as many as the rule allows. A level without a line has no such partner among the shown states. Patterns come from the leading configurations listed in the output (the three largest, then every further one above 5 %); at (8,8) and (10,10) these often carry a small share of the state, which the hover gives. ΔD: change of the active orbital occupations (diagonal of the active one-particle density) from S0. H−k … H, L … L+k: bonding and antibonding active orbitals in pair order, H and L the frontier pair; H→L moves one electron, H,H→L,L two. –: not computed, a dashed line spans it; Q1 at (2,2): n/a. Spin gaps on this page in kcal mol⁻¹, SI state energies in eV; the T1 level of each column is E(T1) − E(S0).

Table: threads per geometry

R<sub>cs</sub>: threads

| 2S | Active spaces | Threads |
| - | - | - |
| 0 | (2,2) → (4,4) | S0→S0, S1→S2, S2→S1 |
| | (4,4) → (6,6) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S4, S5→S5 |
| | (6,6) → (8,8) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S4, S5→S5 |
| | (8,8) → (10,10) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S4, S5→S5 |
| 2 | (2,2) → (4,4) | T1→T1 |
| | (4,4) → (6,6) | T1→T1, T2→T2 |
| | (6,6) → (8,8) | T1→T1, T2→T2, T3→T3 |
| | (8,8) → (10,10) | T1→T1, T2→T2, T3→T3 |
| 4 | (4,4) → (6,6) | Q1→Q1 |
| | (6,6) → (8,8) | Q1→Q1 |
| | (8,8) → (10,10) | Q1→Q1 |

R<sub>os</sub>: threads

| 2S | Active spaces | Threads |
| - | - | - |
| 0 | (2,2) → (4,4) | S0→S0, S1→S2, S2→S3 |
| | (4,4) → (6,6) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S4, S5→S5 |
| | (6,6) → (8,8) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S4, S5→S5 |
| | (8,8) → (10,10) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S4, S5→S5 |
| 2 | (2,2) → (4,4) | T1→T1 |
| | (4,4) → (6,6) | T1→T1, T2→T2 |
| | (6,6) → (8,8) | T1→T1, T2→T2, T3→T3 |
| | (8,8) → (10,10) | T1→T1, T2→T2, T3→T3 |
| 4 | (4,4) → (6,6) | Q1→Q1 |
| | (6,6) → (8,8) | Q1→Q1 |
| | (8,8) → (10,10) | Q1→Q1 |

R<sub>T</sub>: threads

| 2S | Active spaces | Threads |
| - | - | - |
| 0 | (2,2) → (4,4) | S0→S0, S1→S2, S2→S3 |
| | (4,4) → (6,6) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S4, S5→S5 |
| | (6,6) → (8,8) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S4, S5→S5 |
| | (8,8) → (10,10) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S4, S5→S5 |
| 2 | (2,2) → (4,4) | T1→T1 |
| | (4,4) → (6,6) | T1→T1, T2→T2 |
| | (6,6) → (8,8) | T1→T1, T2→T2, T3→T3 |
| | (8,8) → (10,10) | T1→T1, T2→T2, T3→T3 |
| 4 | (4,4) → (6,6) | Q1→Q1 |
| | (6,6) → (8,8) | Q1→Q1 |
| | (8,8) → (10,10) | Q1→Q1 |

## Natural occupations

R<sub>cs</sub>

HZD R_cs, S0: natural occupations per active space in the order printed, 0 to 2; y0, y1

HZD R_cs, T1: natural occupations per active space in the order printed, 0 to 2

HZD R_cs, Q1: natural occupations per active space in the order printed, 0 to 2

R<sub>os</sub>

HZD R_os, S0: natural occupations per active space in the order printed, 0 to 2; y0, y1

HZD R_os, T1: natural occupations per active space in the order printed, 0 to 2

HZD R_os, Q1: natural occupations per active space in the order printed, 0 to 2

R<sub>T</sub>

HZD R_T, S0: natural occupations per active space in the order printed, 0 to 2; y0, y1

HZD R_T, T1: natural occupations per active space in the order printed, 0 to 2

HZD R_T, Q1: natural occupations per active space in the order printed, 0 to 2

Natural occupations n<sub>i</sub> of the SI state (0 to 2, the cell is 2), the "occ" line of the output block "Natural occupation numbers and natural orbitals of the active space" in the order printed, centred on the HOMO | LUMO divide (dashed), so an orbital keeps its column along the ladder; y<sub>0</sub> = n<sub>LUNO</sub>, y<sub>1</sub> = n<sub>LUNO+1</sub>, as the code prints them; y<sub>0</sub>, y<sub>1</sub> for S0 only (n/a for T1, Q1); otherwise n/a: no such state or orbital in the SI space of this active space.

## Calculations

One entry per geometry and active space; the summary gives ΔE<sub>ST</sub>, ΔE<sub>SQ</sub> / kcal mol⁻¹ to 1 decimal. Inside: the run line, the SI states (f (length) of S0 → Sn; leading excitation patterns as a share of the listed configurations, given where these carry at least half of the state, else the listed share; ΔD entries with |ΔD| ≥ 0.15, as in the hover of the SI-state chart), the SA-REKS active orbitals and the input. Inputs as run; starting orbitals read from a seed file (RKS or ROHF orbitals; for HZ and HZD the orbitals of an earlier REKS(2,2) run), active pairs set per rung.

Orbitals: one column per active pair as the code pairs them, frontier pair first, antibonding orbital above, bonding below. Contours ±0.01, ±0.02, ±0.04 a.u. in a plane 0.6 Å above the molecular plane; blue + / copper −.

### R<sub>cs</sub> {#geom-cs}

R<sub>cs</sub> · (2,2) · 2 orbitals · ΔE<sub>ST</sub> **+14.5** kcal mol⁻¹ · ΔE<sub>SQ</sub> **n/a**

SI configurations 2S = 0: 3, 2S = 2: 1 · wall time 412 s, 8 threads · fenrir04, 2026-10-13 · Psi4 d40267fc2 · input [HZD_S_cs_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZD_S_cs_22.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +1.606 | 2.49520 | H→L 100 % | H −0.90, L +0.90 |
| S2 | +2.275 | 0.00000 | H,H→L,L 100 % | H −1.79, L +1.79 |
| S3 | n/a | | | |
| S4 | n/a | | | |
| S5 | n/a | | | |
| T1 | +0.628 | | H→L 100 % | H −0.90, L +0.90 |
| T2 | n/a | | | |
| T3 | n/a | | | |
| Q1 | n/a | | | |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(a, b)

![HZD R_cs (2,2), orbital 151A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_cs/22_151A.svg)**b** 151A · 0.1035\
−0.136789

![HZD R_cs (2,2), orbital 150A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_cs/22_150A.svg)**a** 150A · 1.8965\
−0.176439

R<sub>cs</sub> · (4,4) · 4 orbitals · ΔE<sub>ST</sub> **+16.0** · ΔE<sub>SQ</sub> **+60.6** kcal mol⁻¹

SI configurations 2S = 0: 18, 2S = 2: 11, 2S = 4: 1 · wall time 1251 s, 8 threads · fenrir04, 2026-10-13 · Psi4 d40267fc2 · input [HZD_S_cs_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZD_S_cs_44.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 97 %, H−1,H→L,L+1 3 % | |
| S1 | +1.635 | 0.00000 | H,H→L,L 58 %, H−1→L 21 %, H→L+1 21 % | H−1 −0.29, H −1.04, L +1.06, L+1 +0.28 |
| S2 | +1.756 | 3.26040 | H→L 99 %, H−1→L+1 1 % | H −0.84, L +0.84 |
| S3 | +2.618 | 0.00000 | H→L+1 56 %, H−1→L 42 %, H−1,H−1,H→L,L,L+1 2 % | H−1 −0.44, H −0.46, L +0.34, L+1 +0.57 |
| S4 | +2.769 | 0.00000 | H,H→L,L 38 %, H−1→L 29 %, H→L+1 18 % | H−1 −0.42, H −0.91, L +1.02, L+1 +0.31 |
| S5 | +3.533 | 0.48804 | H−1→L+1 99 %, H→L 1 % | H−1 −0.95, L+1 +0.95 |
| T1 | +0.692 | | H→L 91 %, H−1→L+1 9 %, H−1,H−1,H→L,L+1,L+1 1 % | H −0.79, L +0.79 |
| T2 | +1.412 | | H→L+1 50 %, H−1→L 49 %, H−1,H−1,H→L,L,L+1 1 % | H−1 −0.48, H −0.37, L +0.37, L+1 +0.48 |
| T3 | +2.483 | | H−1→L 46 %, H→L+1 46 %, H−1,H→L,L+1 8 % | H−1 −0.50, H −0.39, L +0.40, L+1 +0.50 |
| Q1 | +2.629 | | H−1,H→L,L+1 100 % | H−1 −0.96, H −0.85, L +0.85, L+1 +0.96 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(b, c)

![HZD R_cs (4,4), orbital 151A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_cs/44_151A.svg)**c** 151A · 0.0411\
−0.145943

![HZD R_cs (4,4), orbital 150A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_cs/44_150A.svg)**b** 150A · 1.9589\
−0.177964

(a, d)

![HZD R_cs (4,4), orbital 152A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_cs/44_152A.svg)**d** 152A · 0.0000\
−0.111316

![HZD R_cs (4,4), orbital 149A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_cs/44_149A.svg)**a** 149A · 2.0000\
−0.213721

R<sub>cs</sub> · (6,6) · 6 orbitals · ΔE<sub>ST</sub> **+16.3** · ΔE<sub>SQ</sub> **+58.6** kcal mol⁻¹

SI configurations 2S = 0: 161, 2S = 2: 153, 2S = 4: 41, 2S = 6: 1 · wall time 2415 s, 8 threads · fenrir04, 2026-10-13 · Psi4 d40267fc2 · input [HZD_S_cs_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZD_S_cs_66.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +1.780 | 0.00000 | H,H→L,L 56 %, H→L+1 19 %, H−1→L 19 % | H−1 −0.24, H −1.07, L +1.07, L+1 +0.24 |
| S2 | +1.807 | 2.97576 | H→L 99 %, H−1,H→L,L+2 1 % | H −0.83, L +0.83 |
| S3 | +2.742 | 0.00000 | H→L+1 79 %, H−1→L 21 % | H−1 −0.21, H −0.67, L +0.16, L+1 +0.71 |
| S4 | +2.823 | 0.00000 | H−1→L 69 %, H,H→L,L 31 % | H−1 −0.62, H −0.49, L +1.00 |
| S5 | +3.253 | 0.47584 | H−1→L+1 63 %, H→L+2 37 % | H−1 −0.57, H −0.26, L+1 +0.58, L+2 +0.37 |
| T1 | +0.706 | | H→L 96 %, H−1→L+1 4 % | H −0.78, L +0.78 |
| T2 | +1.510 | | H→L+1 51 %, H−1→L 49 % | H−1 −0.45, H −0.31, L +0.29, L+1 +0.47 |
| T3 | +2.192 | | H−1→L+1 49 %, H→L+2 28 %, H−2→L 22 % | H−2 −0.23, H−1 −0.43, H −0.17, L+1 +0.43, L+2 +0.29 |
| Q1 | +2.541 | | H−1,H→L,L+1 98 %, H−1,H→L+1,L+2 2 % | H−1 −0.92, H −0.77, L +0.77, L+1 +0.91 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(c, d)

![HZD R_cs (6,6), orbital 151A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_cs/66_151A.svg)**d** 151A · 0.0713\
−0.151515

![HZD R_cs (6,6), orbital 150A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_cs/66_150A.svg)**c** 150A · 1.9287\
−0.178725

(b, e)

![HZD R_cs (6,6), orbital 152A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_cs/66_152A.svg)**e** 152A · 0.0000\
−0.119177

![HZD R_cs (6,6), orbital 149A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_cs/66_149A.svg)**b** 149A · 2.0000\
−0.213290

(a, f)

![HZD R_cs (6,6), orbital 153A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_cs/66_153A.svg)**f** 153A · 0.0000\
−0.084051

![HZD R_cs (6,6), orbital 148A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_cs/66_148A.svg)**a** 148A · 2.0000\
−0.253736

R<sub>cs</sub> · (8,8) · 8 orbitals · ΔE<sub>ST</sub> **+17.1** · ΔE<sub>SQ</sub> **+58.1** kcal mol⁻¹

SI configurations 2S = 0: 1 934, 2S = 2: 2 524, 2S = 4: 1 172, 2S = 6: 199, 2S = 8: 1 · wall time 3842 s, 8 threads · fenrir04, 2026-10-13 · Psi4 d40267fc2 · input [HZD_S_cs_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZD_S_cs_88.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 13.5 % of the state | |
| S1 | +1.769 | 0.00000 | listed configurations 49.8 % of the state | H−1 −0.20, H −1.03, L +1.03, L+1 +0.20 |
| S2 | +1.909 | 2.81654 | H→L 100 % | H −0.79, L +0.79 |
| S3 | +2.697 | 0.00000 | H→L+1 100 % | H −0.74, L+1 +0.70 |
| S4 | +2.770 | 0.00000 | H−1→L 100 % | H−1 −0.69, H −0.24, L +0.91 |
| S5 | +3.276 | 0.62348 | H−1→L+1 66 %, H→L+2 34 % | H−1 −0.60, H −0.20, L+1 +0.56, L+2 +0.33 |
| T1 | +0.739 | | H→L 100 % | H −0.74, L +0.74 |
| T2 | +1.548 | | H→L+1 51 %, H−1→L 49 % | H−1 −0.44, H −0.28, L +0.27, L+1 +0.45 |
| T3 | +2.278 | | listed configurations 46.2 % of the state | H−2 −0.22, H−1 −0.45, L+1 +0.44, L+2 +0.27 |
| Q1 | +2.521 | | H−1,H→L,L+1 100 % | H−1 −0.90, H −0.74, L +0.73, L+1 +0.90 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(d, e)

![HZD R_cs (8,8), orbital 151A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_cs/88_151A.svg)**e** 151A · 0.0914\
−0.158691

![HZD R_cs (8,8), orbital 150A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_cs/88_150A.svg)**d** 150A · 1.9086\
−0.179391

(c, f)

![HZD R_cs (8,8), orbital 152A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_cs/88_152A.svg)**f** 152A · 0.0000\
−0.120476

![HZD R_cs (8,8), orbital 149A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_cs/88_149A.svg)**c** 149A · 2.0000\
−0.213627

(b, g)

![HZD R_cs (8,8), orbital 153A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_cs/88_153A.svg)**g** 153A · 0.0000\
−0.090316

![HZD R_cs (8,8), orbital 148A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_cs/88_148A.svg)**b** 148A · 2.0000\
−0.254228

(a, h)

![HZD R_cs (8,8), orbital 154A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_cs/88_154A.svg)**h** 154A · 0.0000\
−0.081025

![HZD R_cs (8,8), orbital 147A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_cs/88_147A.svg)**a** 147A · 2.0000\
−0.272846

R<sub>cs</sub> · (10,10) · 10 orbitals · ΔE<sub>ST</sub> **+16.8** · ΔE<sub>SQ</sub> **+57.0** kcal mol⁻¹

SI configurations 2S = 0: 29 082, 2S = 2: 48 090, 2S = 4: 31 275, 2S = 6: 9 635, 2S = 8: 1 209, 2S = 10: 1 · wall time 3343 s, 8 threads · fenrir03, 2026-10-14 · Psi4 d40267fc2 · input [HZD_S_cs_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZD_S_cs_1010.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 2.7 % of the state | |
| S1 | +1.797 | 0.00000 | listed configurations 6.0 % of the state | H−1 −0.20, H −1.01, L +1.01, L+1 +0.20 |
| S2 | +1.897 | 2.70117 | listed configurations 11.7 % of the state | H −0.77, L +0.77 |
| S3 | +2.656 | 0.00000 | listed configurations 7.2 % of the state | H −0.89, L +0.25, L+1 +0.61 |
| S4 | +2.713 | 0.00000 | listed configurations 8.4 % of the state | H−1 −0.70, L +0.70 |
| S5 | +3.228 | 0.74427 | listed configurations 9.0 % of the state | H−1 −0.65, L+1 +0.61, L+2 +0.26 |
| T1 | +0.727 | | listed configurations 10.8 % of the state | H −0.73, L +0.73 |
| T2 | +1.565 | | listed configurations 5.4 % of the state | H−1 −0.43, H −0.28, L +0.27, L+1 +0.44 |
| T3 | +2.273 | | listed configurations 6.6 % of the state | H−2 −0.22, H−1 −0.45, L+1 +0.45, L+2 +0.26 |
| Q1 | +2.471 | | H−1,H→L,L+1 100 % | H−1 −0.88, H −0.74, L +0.74, L+1 +0.88 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(e, f)

![HZD R_cs (10,10), orbital 151A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_cs/1010_151A.svg)**f** 151A · 0.0975\
−0.162831

![HZD R_cs (10,10), orbital 150A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_cs/1010_150A.svg)**e** 150A · 1.9025\
−0.179705

(d, g)

![HZD R_cs (10,10), orbital 152A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_cs/1010_152A.svg)**g** 152A · 0.0000\
−0.126294

![HZD R_cs (10,10), orbital 149A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_cs/1010_149A.svg)**d** 149A · 2.0000\
−0.213824

(c, h)

![HZD R_cs (10,10), orbital 153A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_cs/1010_153A.svg)**h** 153A · 0.0000\
−0.095105

![HZD R_cs (10,10), orbital 148A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_cs/1010_148A.svg)**c** 148A · 2.0000\
−0.254177

(b, i)

![HZD R_cs (10,10), orbital 154A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_cs/1010_154A.svg)**i** 154A · 0.0000\
−0.082493

![HZD R_cs (10,10), orbital 147A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_cs/1010_147A.svg)**b** 147A · 2.0000\
−0.273132

(a, j)

![HZD R_cs (10,10), orbital 155A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_cs/1010_155A.svg)**j** 155A · 0.0000\
−0.044157

![HZD R_cs (10,10), orbital 146A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_cs/1010_146A.svg)**a** 146A · 2.0000\
−0.287823

### R<sub>os</sub> {#geom-os}

R<sub>os</sub> · (2,2) · 2 orbitals · ΔE<sub>ST</sub> **+2.9** kcal mol⁻¹ · ΔE<sub>SQ</sub> **n/a**

SI configurations 2S = 0: 3, 2S = 2: 1 · wall time 337 s, 8 threads · fenrir01, 2026-10-13 · Psi4 d40267fc2 · input [HZD_S_os_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZD_S_os_22.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +1.865 | 1.14982 | H→L 100 % | H −0.44, L +0.44 |
| S2 | +2.007 | 0.00000 | H,H→L,L 100 % | H −0.89, L +0.89 |
| S3 | n/a | | | |
| S4 | n/a | | | |
| S5 | n/a | | | |
| T1 | +0.128 | | H→L 100 % | H −0.44, L +0.44 |
| T2 | n/a | | | |
| T3 | n/a | | | |
| Q1 | n/a | | | |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(a, b)

![HZD R_os (2,2), orbital 151A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_os/22_151A.svg)**b** 151A · 0.5574\
−0.149030

![HZD R_os (2,2), orbital 150A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_os/22_150A.svg)**a** 150A · 1.4426\
−0.165716

R<sub>os</sub> · (4,4) · 4 orbitals · ΔE<sub>ST</sub> **+6.1** · ΔE<sub>SQ</sub> **+51.5** kcal mol⁻¹

SI configurations 2S = 0: 18, 2S = 2: 11, 2S = 4: 1 · wall time 1021 s, 8 threads · fenrir01, 2026-10-13 · Psi4 d40267fc2 · input [HZD_S_os_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZD_S_os_44.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 97 %, H−1,H→L,L+1 3 % | |
| S1 | +1.485 | 0.00000 | H,H→L,L 31 %, H−1→L 27 %, H→L+1 26 % | H−1 −0.38, H −0.16, L +0.17, L+1 +0.37 |
| S2 | +2.082 | 1.54646 | H→L 100 % | H −0.36, L +0.36 |
| S3 | +2.416 | 0.00000 | H,H→L,L 53 %, H−1,H→L,L+1 17 %, H→L+1 11 % | H−1 −0.25, H −0.53, L +0.50, L+1 +0.27 |
| S4 | +2.770 | 0.00000 | H−1→L 48 %, H→L+1 48 %, H−1,H−1→L,L 4 % | H−1 −0.51, L+1 +0.50 |
| S5 | +3.338 | 0.37677 | H−1→L+1 100 % | H−1 −0.96, H +0.16, L −0.16, L+1 +0.95 |
| T1 | +0.267 | | H→L 96 %, H−1→L+1 3 %, H−1,H−1,H→L,L+1,L+1 1 % | H −0.35, L +0.36 |
| T2 | +1.585 | | H→L+1 42 %, H−1→L 40 %, H−1,H→L,L+1 18 % | H−1 −0.57, L+1 +0.58 |
| T3 | +2.473 | | H−1→L 47 %, H→L+1 46 %, H−1,H→L,L+1 6 % | H−1 −0.52, L+1 +0.51 |
| Q1 | +2.234 | | H−1,H→L,L+1 100 % | H−1 −0.96, H −0.36, L +0.36, L+1 +0.95 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(b, c)

![HZD R_os (4,4), orbital 151A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_os/44_151A.svg)**c** 151A · 0.5541\
−0.159226

![HZD R_os (4,4), orbital 150A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_os/44_150A.svg)**b** 150A · 1.4459\
−0.170861

(a, d)

![HZD R_os (4,4), orbital 152A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_os/44_152A.svg)**d** 152A · 0.0000\
−0.114996

![HZD R_os (4,4), orbital 149A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_os/44_149A.svg)**a** 149A · 2.0000\
−0.213031

R<sub>os</sub> · (6,6) · 6 orbitals · ΔE<sub>ST</sub> **+4.8** · ΔE<sub>SQ</sub> **+49.5** kcal mol⁻¹

SI configurations 2S = 0: 161, 2S = 2: 153, 2S = 4: 41, 2S = 6: 1 · wall time 2005 s, 8 threads · fenrir01, 2026-10-13 · Psi4 d40267fc2 · input [HZD_S_os_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZD_S_os_66.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +1.669 | 0.00000 | H,H→L,L 40 %, H→L+1 30 %, H−1→L 30 % | H−1 −0.30, H −0.30, L +0.30, L+1 +0.30 |
| S2 | +2.171 | 1.58346\* | H→L 100 % | H −0.39, L +0.39 |
| S3 | +2.500 | 0.00000 | H,H→L,L 48 %, H−1,H→L,L+1 22 %, H→L+1 17 % | H−1 −0.28, H −0.42, L +0.38, L+1 +0.32 |
| S4 | +2.902 | 0.00000 | H−1→L 51 %, H→L+1 49 % | H−1 −0.50, L+1 +0.47 |
| S5 | +3.181 | 0.37433 | H−1→L+1 97 %, H→L+2 3 % | H−1 −0.84, L −0.20, L+1 +0.86 |
| T1 | +0.210 | | H→L 98 %, H−1→L+1 2 % | H −0.39, L +0.39 |
| T2 | +1.689 | | H→L+1 43 %, H−1→L 39 %, H−1,H→L,L+1 18 % | H−1 −0.53, L+1 +0.57 |
| T3 | +2.227 | | H−1→L+1 85 %, H→L+2 15 % | H−2 −0.17, H−1 −0.65, L+1 +0.65, L+2 +0.20 |
| Q1 | +2.145 | | H−1,H→L,L+1 96 %, H−2,H→L,L+2 4 % | H−1 −0.88, H −0.38, L +0.38, L+1 +0.88 |

\* f (length) and f (velocity) differ by more than 3× (tested when f > 10<sup>−3</sup>).

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(c, d)

![HZD R_os (6,6), orbital 151A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_os/66_151A.svg)**d** 151A · 0.5834\
−0.166486

![HZD R_os (6,6), orbital 150A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_os/66_150A.svg)**c** 150A · 1.4166\
−0.173573

(b, e)

![HZD R_os (6,6), orbital 152A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_os/66_152A.svg)**e** 152A · 0.0000\
−0.123640

![HZD R_os (6,6), orbital 149A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_os/66_149A.svg)**b** 149A · 2.0000\
−0.212625

(a, f)

![HZD R_os (6,6), orbital 153A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_os/66_153A.svg)**f** 153A · 0.0000\
−0.086009

![HZD R_os (6,6), orbital 148A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_os/66_148A.svg)**a** 148A · 2.0000\
−0.253199

R<sub>os</sub> · (8,8) · 8 orbitals · ΔE<sub>ST</sub> **+5.4** · ΔE<sub>SQ</sub> **+48.4** kcal mol⁻¹

SI configurations 2S = 0: 1 934, 2S = 2: 2 524, 2S = 4: 1 172, 2S = 6: 199, 2S = 8: 1 · wall time 3129 s, 8 threads · fenrir01, 2026-10-13 · Psi4 d40267fc2 · input [HZD_S_os_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZD_S_os_88.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 43.8 % of the state | |
| S1 | +1.465 | 0.00000 | listed configurations 14.4 % of the state | H−1 −0.29, H −0.32, L +0.32, L+1 +0.29 |
| S2 | +2.163 | 1.30120\* | H→L 100 % | H −0.38, L +0.38 |
| S3 | +2.354 | 0.00000 | listed configurations 47.6 % of the state | H−1 −0.27, H −0.36, L +0.29, L+1 +0.33 |
| S4 | +2.646 | 0.00000 | H−1→L 52 %, H→L+1 48 % | H−1 −0.43, L+1 +0.39 |
| S5 | +3.205 | 0.47528 | H−1→L+1 100 % | H−1 −0.84, L+1 +0.83 |
| T1 | +0.234 | | H→L 100 % | H −0.39, L +0.39 |
| T2 | +1.597 | | H→L+1 52 %, H−1→L 48 % | H−1 −0.53, L+1 +0.56 |
| T3 | +2.265 | | H−1→L+1 100 % | H−2 −0.15, H−1 −0.68, L+1 +0.67, L+2 +0.17 |
| Q1 | +2.098 | | H−1,H→L,L+1 100 % | H−1 −0.89, H −0.38, L +0.38, L+1 +0.89 |

\* f (length) and f (velocity) differ by more than 3× (tested when f > 10<sup>−3</sup>).

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(d, e)

![HZD R_os (8,8), orbital 151A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_os/88_151A.svg)**e** 151A · 0.6044\
−0.172221

![HZD R_os (8,8), orbital 150A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_os/88_150A.svg)**d** 150A · 1.3956\
−0.175705

(c, f)

![HZD R_os (8,8), orbital 152A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_os/88_152A.svg)**f** 152A · 0.0000\
−0.124916

![HZD R_os (8,8), orbital 149A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_os/88_149A.svg)**c** 149A · 2.0000\
−0.212959

(b, g)

![HZD R_os (8,8), orbital 153A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_os/88_153A.svg)**g** 153A · 0.0000\
−0.091102

![HZD R_os (8,8), orbital 148A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_os/88_148A.svg)**b** 148A · 2.0000\
−0.253428

(a, h)

![HZD R_os (8,8), orbital 154A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_os/88_154A.svg)**h** 154A · 0.0000\
−0.083576

![HZD R_os (8,8), orbital 147A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_os/88_147A.svg)**a** 147A · 2.0000\
−0.265969

R<sub>os</sub> · (10,10) · 10 orbitals · ΔE<sub>ST</sub> **+5.3** · ΔE<sub>SQ</sub> **+47.0** kcal mol⁻¹

SI configurations 2S = 0: 29 082, 2S = 2: 48 090, 2S = 4: 31 275, 2S = 6: 9 635, 2S = 8: 1 209, 2S = 10: 1 · wall time 4684 s, 8 threads · fenrir02, 2026-10-14 · Psi4 d40267fc2 · input [HZD_S_os_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZD_S_os_1010.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 4.8 % of the state | |
| S1 | +1.470 | 0.00000 | listed configurations 3.3 % of the state | H−1 −0.31, H −0.32, L +0.32, L+1 +0.31 |
| S2 | +2.151 | 1.29974\* | listed configurations 11.4 % of the state | H −0.38, L +0.38 |
| S3 | +2.288 | 0.00000 | listed configurations 8.7 % of the state | H−1 −0.28, H −0.36, L +0.34, L+1 +0.30 |
| S4 | +2.636 | 0.00000 | listed configurations 4.8 % of the state | H−1 −0.39, L+1 +0.40 |
| S5 | +3.140 | 0.49292 | listed configurations 37.8 % of the state | H−1 −0.86, L+1 +0.84 |
| T1 | +0.231 | | listed configurations 11.4 % of the state | H −0.39, L +0.39 |
| T2 | +1.589 | | listed configurations 4.8 % of the state | H−1 −0.54, L+1 +0.56 |
| T3 | +2.240 | | listed configurations 30.6 % of the state | H−1 −0.70, L+1 +0.69, L+2 +0.15 |
| Q1 | +2.037 | | H−1,H→L,L+1 100 % | H−1 −0.88, H −0.39, L +0.38, L+1 +0.87 |

\* f (length) and f (velocity) differ by more than 3× (tested when f > 10<sup>−3</sup>).

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(e, f)

![HZD R_os (10,10), orbital 151A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_os/1010_151A.svg)**f** 151A · 0.6085\
−0.176292

![HZD R_os (10,10), orbital 150A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_os/1010_150A.svg)**e** 150A · 1.3915\
−0.177308

(d, g)

![HZD R_os (10,10), orbital 152A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_os/1010_152A.svg)**g** 152A · 0.0000\
−0.130012

![HZD R_os (10,10), orbital 149A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_os/1010_149A.svg)**d** 149A · 2.0000\
−0.213055

(c, h)

![HZD R_os (10,10), orbital 153A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_os/1010_153A.svg)**h** 153A · 0.0000\
−0.096447

![HZD R_os (10,10), orbital 148A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_os/1010_148A.svg)**c** 148A · 2.0000\
−0.253505

(b, i)

![HZD R_os (10,10), orbital 154A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_os/1010_154A.svg)**i** 154A · 0.0000\
−0.085103

![HZD R_os (10,10), orbital 147A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_os/1010_147A.svg)**b** 147A · 2.0000\
−0.266335

(a, j)

![HZD R_os (10,10), orbital 155A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_os/1010_155A.svg)**j** 155A · 0.0000\
−0.045514

![HZD R_os (10,10), orbital 146A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_S_os/1010_146A.svg)**a** 146A · 2.0000\
−0.286118

### R<sub>T</sub> {#geom-t}

R<sub>T</sub> · (2,2) · 2 orbitals · ΔE<sub>ST</sub> **+1.8** kcal mol⁻¹ · ΔE<sub>SQ</sub> **n/a**

SI configurations 2S = 0: 3, 2S = 2: 1 · wall time 362 s, 8 threads · fenrir04, 2026-10-12 · Psi4 b0c2d45a7 · input [HZD_T_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZD_T_22.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +2.001 | 0.89696 | H→L 100 % | H −0.36, L +0.36 |
| S2 | +2.090 | 0.00000 | H,H→L,L 100 % | H −0.71, L +0.71 |
| S3 | n/a | | | |
| S4 | n/a | | | |
| S5 | n/a | | | |
| T1 | +0.080 | | H→L 100 % | H −0.36, L +0.36 |
| T2 | n/a | | | |
| T3 | n/a | | | |
| Q1 | n/a | | | |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(a, b)

![HZD R_T (2,2), orbital 151A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_T/22_151A.svg)**b** 151A · 0.6427\
−0.150941

![HZD R_T (2,2), orbital 150A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_T/22_150A.svg)**a** 150A · 1.3573\
−0.164003

R<sub>T</sub> · (4,4) · 4 orbitals · ΔE<sub>ST</sub> **+4.4** · ΔE<sub>SQ</sub> **+52.1** kcal mol⁻¹

SI configurations 2S = 0: 18, 2S = 2: 11, 2S = 4: 1 · wall time 1091 s, 8 threads · fenrir04, 2026-10-12 · Psi4 b0c2d45a7 · input [HZD_T_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZD_T_44.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 98 %, H−1,H→L,L+1 2 % | |
| S1 | +1.589 | 0.00000 | H−1→L 27 %, H→L+1 26 %, H,H→L,L 25 % | H−1 −0.43, L+1 +0.42 |
| S2 | +2.194 | 1.16655\* | H→L 100 % | H −0.29, L +0.29 |
| S3 | +2.439 | 0.00000 | H,H→L,L 57 %, H−1,H→L,L+1 17 %, ground (reference pairs) 12 % | H−1 −0.23, H −0.44, L +0.43, L+1 +0.24 |
| S4 | +2.887 | 0.00000 | H→L+1 49 %, H−1→L 48 %, H−1,H−1→L,L 4 % | H−1 −0.50, H +0.16, L −0.17, L+1 +0.51 |
| S5 | +3.332 | 0.38207 | H−1→L+1 100 % | H−1 −0.96, L+1 +0.96 |
| T1 | +0.192 | | H→L 97 %, H−1→L+1 2 % | H −0.29, L +0.29 |
| T2 | +1.708 | | H→L+1 38 %, H−1→L 36 %, H−1,H→L,L+1 26 % | H−1 −0.61, L+1 +0.63 |
| T3 | +2.548 | | H−1→L 42 %, H→L+1 42 %, H−1,H→L,L+1 16 % | H−1 −0.55, L+1 +0.55 |
| Q1 | +2.259 | | H−1,H→L,L+1 100 % | H−1 −0.96, H −0.29, L +0.29, L+1 +0.96 |

\* f (length) and f (velocity) differ by more than 3× (tested when f > 10<sup>−3</sup>).

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(b, c)

![HZD R_T (4,4), orbital 151A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_T/44_151A.svg)**c** 151A · 0.6451\
−0.160992

![HZD R_T (4,4), orbital 150A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_T/44_150A.svg)**b** 150A · 1.3549\
−0.169865

(a, d)

![HZD R_T (4,4), orbital 152A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_T/44_152A.svg)**d** 152A · 0.0000\
−0.114536

![HZD R_T (4,4), orbital 149A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_T/44_149A.svg)**a** 149A · 2.0000\
−0.214553

R<sub>T</sub> · (6,6) · 6 orbitals · ΔE<sub>ST</sub> **+3.3** · ΔE<sub>SQ</sub> **+50.1** kcal mol⁻¹

SI configurations 2S = 0: 161, 2S = 2: 153, 2S = 4: 41, 2S = 6: 1 · wall time 2557 s, 8 threads · fenrir04, 2026-10-12 · Psi4 b0c2d45a7 · input [HZD_T_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZD_T_66.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +1.777 | 0.00000 | H,H→L,L 32 %, H→L+1 30 %, H−1→L 29 % | H−1 −0.35, H −0.18, L +0.17, L+1 +0.36 |
| S2 | +2.285 | 1.12978\* | H→L 100 % | H −0.31, L +0.31 |
| S3 | +2.520 | 0.00000 | H,H→L,L 69 %, H−1,H→L,L+1 31 % | H−1 −0.27, H −0.33, L +0.31, L+1 +0.29 |
| S4 | +3.008 | 0.00000 | H→L+1 51 %, H−1→L 49 % | H−1 −0.48, H +0.16, L −0.17, L+1 +0.49 |
| S5 | +3.212 | 0.38293 | H−1→L+1 98 %, H−2,H→L,L+1 2 % | H−1 −0.88, L −0.18, L+1 +0.90 |
| T1 | +0.142 | | H→L 99 %, H−1→L+1 1 % | H −0.30, L +0.30 |
| T2 | +1.812 | | H→L+1 39 %, H−1→L 35 %, H−1,H→L,L+1 26 % | H−1 −0.57, L+1 +0.61 |
| T3 | +2.277 | | H−1→L+1 94 %, H−2→L+2 6 % | H−2 −0.16, H−1 −0.71, L+1 +0.70, L+2 +0.18 |
| Q1 | +2.172 | | H−1,H→L,L+1 96 %, H−2,H→L,L+2 4 % | H−1 −0.88, H −0.30, L +0.30, L+1 +0.88 |

\* f (length) and f (velocity) differ by more than 3× (tested when f > 10<sup>−3</sup>).

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(c, d)

![HZD R_T (6,6), orbital 151A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_T/66_151A.svg)**d** 151A · 0.6693\
−0.168351

![HZD R_T (6,6), orbital 150A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_T/66_150A.svg)**c** 150A · 1.3307\
−0.173231

(b, e)

![HZD R_T (6,6), orbital 152A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_T/66_152A.svg)**e** 152A · 0.0000\
−0.123268

![HZD R_T (6,6), orbital 149A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_T/66_149A.svg)**b** 149A · 2.0000\
−0.214016

(a, f)

![HZD R_T (6,6), orbital 153A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_T/66_153A.svg)**f** 153A · 0.0000\
−0.085842

![HZD R_T (6,6), orbital 148A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_T/66_148A.svg)**a** 148A · 2.0000\
−0.253326

R<sub>T</sub> · (8,8) · 8 orbitals · ΔE<sub>ST</sub> **+3.8** · ΔE<sub>SQ</sub> **+49.0** kcal mol⁻¹

SI configurations 2S = 0: 1 934, 2S = 2: 2 524, 2S = 4: 1 172, 2S = 6: 199, 2S = 8: 1 · wall time 4602 s, 8 threads · fenrir04, 2026-10-12 · Psi4 b0c2d45a7 · input [HZD_T_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZD_T_88.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 47.4 % of the state | |
| S1 | +1.535 | 0.00000 | listed configurations 12.6 % of the state | H−1 −0.33, H −0.19, L +0.19, L+1 +0.34 |
| S2 | +2.238 | 0.88538\* | H→L 100 % | H −0.30, L +0.30 |
| S3 | +2.362 | 0.00000 | H,H→L,L 65 %, H−1,H→L,L+1 35 % | H−1 −0.27, H −0.26, L +0.21, L+1 +0.31 |
| S4 | +2.705 | 0.00000 | H−1→L 50 %, H→L+1 50 % | H−1 −0.42, L −0.15, L+1 +0.40 |
| S5 | +3.228 | 0.43508 | H−1→L+1 100 % | H−1 −0.88, L+1 +0.87 |
| T1 | +0.167 | | H→L 100 % | H −0.30, L +0.30 |
| T2 | +1.698 | | H→L+1 38 %, H−1→L 35 %, H−1,H→L,L+1 27 % | H−1 −0.57, L+1 +0.60 |
| T3 | +2.302 | | H−1→L+1 100 % | H−1 −0.73, L+1 +0.72, L+2 +0.16 |
| Q1 | +2.124 | | H−1,H→L,L+1 100 % | H−1 −0.89, H −0.30, L +0.30, L+1 +0.89 |

\* f (length) and f (velocity) differ by more than 3× (tested when f > 10<sup>−3</sup>).

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(d, e)

![HZD R_T (8,8), orbital 151A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_T/88_151A.svg)**e** 151A · 0.6869\
−0.173708

![HZD R_T (8,8), orbital 150A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_T/88_150A.svg)**d** 150A · 1.3131\
−0.175705

(c, f)

![HZD R_T (8,8), orbital 152A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_T/88_152A.svg)**f** 152A · 0.0000\
−0.124640

![HZD R_T (8,8), orbital 149A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_T/88_149A.svg)**c** 149A · 2.0000\
−0.214362

(b, g)

![HZD R_T (8,8), orbital 153A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_T/88_153A.svg)**g** 153A · 0.0000\
−0.090629

![HZD R_T (8,8), orbital 148A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_T/88_148A.svg)**b** 148A · 2.0000\
−0.253564

(a, h)

![HZD R_T (8,8), orbital 154A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_T/88_154A.svg)**h** 154A · 0.0000\
−0.083505

![HZD R_T (8,8), orbital 147A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_T/88_147A.svg)**a** 147A · 2.0000\
−0.265010

R<sub>T</sub> · (10,10) · 10 orbitals · ΔE<sub>ST</sub> **+3.8** · ΔE<sub>SQ</sub> **+47.5** kcal mol⁻¹

SI configurations 2S = 0: 29 082, 2S = 2: 48 090, 2S = 4: 31 275, 2S = 6: 9 635, 2S = 8: 1 209, 2S = 10: 1 · wall time 4012 s, 18 threads · fenrir03, 2026-10-13 · Psi4 d40267fc2 · input [HZD_T_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZD_T_1010.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 5.4 % of the state | |
| S1 | +1.536 | 0.00000 | listed configurations 5.1 % of the state | H−1 −0.35, H −0.19, L +0.19, L+1 +0.36 |
| S2 | +2.233 | 0.87940\* | listed configurations 11.4 % of the state | H −0.29, L +0.30 |
| S3 | +2.303 | 0.00000 | listed configurations 9.3 % of the state | H−1 −0.27, H −0.26, L +0.24, L+1 +0.28 |
| S4 | +2.695 | 0.00000 | listed configurations 4.5 % of the state | H−1 −0.38, L −0.17, L+1 +0.42 |
| S5 | +3.161 | 0.44504 | listed configurations 41.4 % of the state | H−1 −0.88, L+1 +0.86 |
| T1 | +0.167 | | listed configurations 11.7 % of the state | H −0.30, L +0.30 |
| T2 | +1.683 | | listed configurations 6.6 % of the state | H−1 −0.57, L+1 +0.60 |
| T3 | +2.269 | | listed configurations 34.8 % of the state | H−1 −0.74, L+1 +0.74 |
| Q1 | +2.061 | | H−1,H→L,L+1 100 % | H−1 −0.88, H −0.30, L +0.30, L+1 +0.88 |

\* f (length) and f (velocity) differ by more than 3× (tested when f > 10<sup>−3</sup>).

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(e, f)

![HZD R_T (10,10), orbital 150A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_T/1010_150A.svg)**f** 150A · 0.6911\
−0.177713

![HZD R_T (10,10), orbital 151A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_T/1010_151A.svg)**e** 151A · 1.3089\
−0.177620

(d, g)

![HZD R_T (10,10), orbital 152A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_T/1010_152A.svg)**g** 152A · 0.0000\
−0.129655

![HZD R_T (10,10), orbital 149A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_T/1010_149A.svg)**d** 149A · 2.0000\
−0.214499

(c, h)

![HZD R_T (10,10), orbital 153A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_T/1010_153A.svg)**h** 153A · 0.0000\
−0.096175

![HZD R_T (10,10), orbital 148A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_T/1010_148A.svg)**c** 148A · 2.0000\
−0.253687

(b, i)

![HZD R_T (10,10), orbital 154A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_T/1010_154A.svg)**i** 154A · 0.0000\
−0.085073

![HZD R_T (10,10), orbital 147A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_T/1010_147A.svg)**b** 147A · 2.0000\
−0.265400

(a, j)

![HZD R_T (10,10), orbital 155A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_T/1010_155A.svg)**j** 155A · 0.0000\
−0.045765

![HZD R_T (10,10), orbital 146A](https://reksstudio.github.io/v2/figures/zeth/orb/HZD_T/1010_146A.svg)**a** 146A · 2.0000\
−0.285960

[← HZ](https://reksstudio.github.io/v2/main/results/zethrenes/hz/index.md) · [Back to the compounds](https://reksstudio.github.io/v2/main/results/zethrenes/index.md#c-hzd) · [FP →](https://reksstudio.github.io/v2/main/results/zethrenes/fp/index.md)

## Linked files

[inputs/zethrenes/HZD_S_cs_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZD_S_cs_22.py.txt)

[inputs/zethrenes/HZD_S_cs_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZD_S_cs_44.py.txt)

[inputs/zethrenes/HZD_S_cs_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZD_S_cs_66.py.txt)

[inputs/zethrenes/HZD_S_cs_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZD_S_cs_88.py.txt)

[inputs/zethrenes/HZD_S_cs_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZD_S_cs_1010.py.txt)

[inputs/zethrenes/HZD_S_os_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZD_S_os_22.py.txt)

[inputs/zethrenes/HZD_S_os_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZD_S_os_44.py.txt)

[inputs/zethrenes/HZD_S_os_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZD_S_os_66.py.txt)

[inputs/zethrenes/HZD_S_os_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZD_S_os_88.py.txt)

[inputs/zethrenes/HZD_S_os_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZD_S_os_1010.py.txt)

[inputs/zethrenes/HZD_T_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZD_T_22.py.txt)

[inputs/zethrenes/HZD_T_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZD_T_44.py.txt)

[inputs/zethrenes/HZD_T_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZD_T_66.py.txt)

[inputs/zethrenes/HZD_T_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZD_T_88.py.txt)

[inputs/zethrenes/HZD_T_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZD_T_1010.py.txt)
