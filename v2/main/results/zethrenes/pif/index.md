# PIF: Bis-phenaleno-indenofluorene — Zethrenes — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/zethrenes/pif/>

Psi4 builds of these outputs: b0c2d45a7, d40267fc2, 2424fb773 (kk/reks.v42), named on each run line. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# Bis-phenaleno-indenofluorene (PIF)

C<sub>42</sub>H<sub>22</sub>, 64 atoms, 1568 basis functions (cc-pVTZ); compound 1d of Hu et al. (2016). Geometries: R<sub>cs</sub>, R<sub>os</sub>, R<sub>T</sub>.

[R<sub>cs</sub> (10,10) details](https://reksstudio.github.io/v2/main/results/zethrenes/pif/index.md#cs-1010) · [R<sub>os</sub> (10,10) details](https://reksstudio.github.io/v2/main/results/zethrenes/pif/index.md#os-1010) · [R<sub>T</sub> (8,8) details](https://reksstudio.github.io/v2/main/results/zethrenes/pif/index.md#t-88)

[Spin gaps](https://reksstudio.github.io/v2/main/results/zethrenes/pif/index.md#gaps) · [Energies across geometries](https://reksstudio.github.io/v2/main/results/zethrenes/pif/index.md#geometries) · [SI states](https://reksstudio.github.io/v2/main/results/zethrenes/pif/index.md#states) · [Natural occupations](https://reksstudio.github.io/v2/main/results/zethrenes/pif/index.md#occupations) · [Calculations](https://reksstudio.github.io/v2/main/results/zethrenes/pif/index.md#calculations)

![PIF: drawing of the R_cs geometry](https://reksstudio.github.io/v2/figures/zeth/mol/PIF.svg)

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
| (2,2) | +27.7 | +11.7 | +1.7 |
| (4,4) | +22.5 | +12.5 | +7.9 |
| (6,6) | +24.1 | +13.7 | +5.7 |
| (8,8) | +26.4 | +15.8 | +4.6 |
| (10,10) | +25.6 | +15.4 | – |

ΔE<sub>SQ</sub> / kcal mol<sup>−1</sup>

| Active space | R<sub>cs</sub> | R<sub>os</sub> | R<sub>T</sub> |
| - | - | - | - |
| (2,2) | n/a | n/a | n/a |
| (4,4) | +65.7 | +49.9 | +50.3 |
| (6,6) | +66.3 | +50.9 | +50.0 |
| (8,8) | +67.4 | +51.6 | +51.5 |
| (10,10) | +64.0 | +48.7 | – |

–: not computed; n/a: no 2S = 4 state in the SI space of this active space.

## Energies across geometries

ΔE<sub>geom</sub>(X, R) = E<sub>X</sub>(R) − E<sub>S0</sub>(R<sub>os</sub>)

Same active space; zero = E(S0) at R<sub>os</sub>; SI-SA-REKS electronic energies; positive: above the zero. –: not computed.

ΔE<sub>geom</sub> / kcal mol<sup>−1</sup>

| Active space | State | R<sub>cs</sub> | R<sub>os</sub> | R<sub>T</sub> |
| - | - | - | - | - |
| (2,2) | S0 | −6.1 | 0.0 | +3.3 |
| | T1 | +21.6 | +11.7 | +5.0 |
| | Q1 | n/a | n/a | n/a |
| (4,4) | S0 | −2.2 | 0.0 | +2.7 |
| | T1 | +20.3 | +12.5 | +10.6 |
| | Q1 | +63.5 | +49.9 | +53.0 |
| (6,6) | S0 | −2.3 | 0.0 | +5.0 |
| | T1 | +21.8 | +13.7 | +10.7 |
| | Q1 | +64.0 | +50.9 | +55.0 |
| (8,8) | S0 | −2.4 | 0.0 | +7.9 |
| | T1 | +24.0 | +15.8 | +12.5 |
| | Q1 | +65.0 | +51.6 | +59.3 |
| (10,10) | S0 | −1.9 | 0.0 | – |
| | T1 | +23.6 | +15.4 | – |
| | Q1 | +62.1 | +48.7 | – |

## SI states along the ladder

* 2S = 0: S0–S5
* 2S = 2: T1–T3
* 2S = 4: Q1

PIF R_cs: SI states per active space, E − E(S0) / eV, 0 to 4, joined across active spaces; numbers in the tables below

PIF R_os: SI states per active space, E − E(S0) / eV, 0 to 4, joined across active spaces; numbers in the tables below

PIF R_T: SI states per active space, E − E(S0) / eV, 0 to 4, joined across active spaces; numbers in the tables below

One column per active space and one level per SI state shown on this page at E − E(S0) / eV (same geometry and active space); colour = 2S; levels closer than about 0.08 eV sit side by side. A thin line joins a level to one level of the same 2S at the next computed active space when their leading excitation patterns agree (same dominant pattern, or pattern weights that overlap by at least one half) or their density changes ΔD differ by at most 0.15; the joins are one-to-one, as many as the rule allows. A level without a line has no such partner among the shown states. Patterns come from the leading configurations listed in the output (the three largest, then every further one above 5 %); at (8,8) and (10,10) these often carry a small share of the state, which the hover gives. ΔD: change of the active orbital occupations (diagonal of the active one-particle density) from S0. H−k … H, L … L+k: bonding and antibonding active orbitals in pair order, H and L the frontier pair; H→L moves one electron, H,H→L,L two. –: not computed, a dashed line spans it; Q1 at (2,2): n/a. Spin gaps on this page in kcal mol⁻¹, SI state energies in eV; the T1 level of each column is E(T1) − E(S0).

Table: threads per geometry

R<sub>cs</sub>: threads

| 2S | Active spaces | Threads |
| - | - | - |
| 0 | (2,2) → (4,4) | S0→S0, S1→S1, S2→S4 |
| | (4,4) → (6,6) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S4 |
| | (6,6) → (8,8) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S5, S5→S4 |
| | (8,8) → (10,10) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S5, S5→S4 |
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
| 0 | (2,2) → (4,4) | S0→S0, S1→S2, S2→S1 |
| | (4,4) → (6,6) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S4 |
| | (6,6) → (8,8) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S4, S5→S5 |
| | (8,8) → (10,10) | S0→S0, S1→S1, S2→S2, S4→S4, S5→S5 |
| 2 | (2,2) → (4,4) | T1→T1 |
| | (4,4) → (6,6) | T1→T1, T2→T2, T3→T3 |
| | (6,6) → (8,8) | T1→T1, T2→T2 |
| | (8,8) → (10,10) | T1→T1, T2→T2, T3→T3 |
| 4 | (4,4) → (6,6) | Q1→Q1 |
| | (6,6) → (8,8) | Q1→Q1 |
| | (8,8) → (10,10) | Q1→Q1 |

R<sub>T</sub>: threads

| 2S | Active spaces | Threads |
| - | - | - |
| 0 | (2,2) → (4,4) | S0→S0, S1→S2, S2→S3 |
| | (4,4) → (6,6) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S4 |
| | (6,6) → (8,8) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S4 |
| 2 | (2,2) → (4,4) | T1→T1 |
| | (4,4) → (6,6) | T1→T1, T2→T2 |
| | (6,6) → (8,8) | T1→T1, T2→T2 |
| 4 | (4,4) → (6,6) | Q1→Q1 |
| | (6,6) → (8,8) | Q1→Q1 |

## Natural occupations

R<sub>cs</sub>

PIF R_cs, S0: natural occupations per active space in the order printed, 0 to 2; y0, y1

PIF R_cs, T1: natural occupations per active space in the order printed, 0 to 2

PIF R_cs, Q1: natural occupations per active space in the order printed, 0 to 2

R<sub>os</sub>

PIF R_os, S0: natural occupations per active space in the order printed, 0 to 2; y0, y1

PIF R_os, T1: natural occupations per active space in the order printed, 0 to 2

PIF R_os, Q1: natural occupations per active space in the order printed, 0 to 2

R<sub>T</sub>

PIF R_T, S0: natural occupations per active space in the order printed, 0 to 2; y0, y1

PIF R_T, T1: natural occupations per active space in the order printed, 0 to 2

PIF R_T, Q1: natural occupations per active space in the order printed, 0 to 2

Natural occupations n<sub>i</sub> of the SI state (0 to 2, the cell is 2), the "occ" line of the output block "Natural orbitals of the active space" in the order printed, centred on the HOMO | LUMO divide (dashed), so an orbital keeps its column along the ladder; y<sub>0</sub> = n<sub>LUNO</sub>, y<sub>1</sub> = n<sub>LUNO+1</sub>, as the code prints them; y<sub>0</sub>, y<sub>1</sub> for S0 only (n/a for T1, Q1); otherwise n/a: no such state or orbital in the SI space of this active space.

## Calculations

One entry per geometry and active space; the summary gives ΔE<sub>ST</sub>, ΔE<sub>SQ</sub> / kcal mol⁻¹ to 1 decimal. Inside: the run line, the SI states (f (length) of S0 → Sn; leading excitation patterns as a share of the listed configurations, given where these carry at least half of the state, else the listed share; ΔD entries with |ΔD| ≥ 0.15, as in the hover of the SI-state chart), the SA-REKS active orbitals and the input. Inputs as run; starting orbitals read from a seed file (RKS or ROHF orbitals; for HZ and HZD the orbitals of an earlier REKS(2,2) run), active pairs set per rung.

Orbitals: one column per active pair as the code pairs them, frontier pair first, antibonding orbital above, bonding below. Contours ±0.01, ±0.02, ±0.04 a.u. in a plane 0.6 Å above the molecular plane; blue + / copper −.

### R<sub>cs</sub> {#geom-cs}

R<sub>cs</sub> · (2,2) · 2 orbitals · ΔE<sub>ST</sub> **+27.7** kcal mol⁻¹ · ΔE<sub>SQ</sub> **n/a**

SI configurations 2S = 0: 3, 2S = 2: 1 · wall time 368 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [PIF_S_cs_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/PIF_S_cs_22.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +1.728 | 2.43321 | H→L 100 % | H −1.00, L +1.00 |
| S2 | +3.303 | 0.00000 | H,H→L,L 100 % | H −2.00, L +2.00 |
| S3 | n/a | | | |
| S4 | n/a | | | |
| S5 | n/a | | | |
| T1 | +1.201 | | H→L 100 % | H −1.00, L +1.00 |
| T2 | n/a | | | |
| T3 | n/a | | | |
| Q1 | n/a | | | |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(a, b)

![PIF R_cs (2,2), orbital 138A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_cs/22_138A.svg)**b** 138A · 0.0001\
−0.131811

![PIF R_cs (2,2), orbital 137A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_cs/22_137A.svg)**a** 137A · 1.9999\
−0.189147

R<sub>cs</sub> · (4,4) · 4 orbitals · ΔE<sub>ST</sub> **+22.5** · ΔE<sub>SQ</sub> **+65.7** kcal mol⁻¹

SI configurations 2S = 0: 18, 2S = 2: 11, 2S = 4: 1 · wall time 628 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [PIF_S_cs_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/PIF_S_cs_44.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 97 %, H−1,H→L,L+1 3 % | |
| S1 | +1.883 | 2.80016 | H→L 96 %, H−1→L+1 4 % | H −0.90, L +0.91 |
| S2 | +2.078 | 0.00000 | H,H→L,L 38 %, H→L+1 26 %, H−1,H→L,L+1 13 % | H−1 −0.34, H −1.19, L +1.02, L+1 +0.51 |
| S3 | +2.725 | 0.00000 | H−1→L 56 %, H→L+1 41 %, H−1,H→L,L+1 3 % | H−1 −0.62, H −0.43, L +0.61, L+1 +0.44 |
| S4 | +3.152 | 0.00000 | H,H→L,L 40 %, H→L+1 35 %, H−1→L 19 % | H−1 −0.28, H −1.13, L +0.97, L+1 +0.43 |
| S5 | +3.648 | 0.00000 | H,H→L+1,L+1 38 %, H−1,H→L,L+1 34 %, H−1→L 16 % | H−1 −0.67, H −1.07, L +0.73, L+1 +1.01 |
| T1 | +0.977 | | H→L 82 %, H−1→L+1 17 %, H−1,H,H→L,L,L+1 1 % | H−1 −0.16, H −0.79, L +0.80 |
| T2 | +1.298 | | H→L+1 58 %, H−1→L 41 %, H−1,H,H→L,L+1,L+1 1 % | H−1 −0.40, H −0.54, L +0.38, L+1 +0.56 |
| T3 | +2.808 | | H−1→L 52 %, H→L+1 37 %, H−1,H→L,L+1 11 % | H−1 −0.61, H −0.45, L +0.59, L+1 +0.46 |
| Q1 | +2.851 | | H−1,H→L,L+1 100 % | H−1 −0.96, H −0.94, L +0.95, L+1 +0.95 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(b, c)

![PIF R_cs (4,4), orbital 138A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_cs/44_138A.svg)**c** 138A · 0.0001\
−0.144829

![PIF R_cs (4,4), orbital 137A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_cs/44_137A.svg)**b** 137A · 1.9999\
−0.189975

(a, d)

![PIF R_cs (4,4), orbital 139A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_cs/44_139A.svg)**d** 139A · 0.0000\
−0.119089

![PIF R_cs (4,4), orbital 136A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_cs/44_136A.svg)**a** 136A · 2.0000\
−0.222323

R<sub>cs</sub> · (6,6) · 6 orbitals · ΔE<sub>ST</sub> **+24.1** · ΔE<sub>SQ</sub> **+66.3** kcal mol⁻¹

SI configurations 2S = 0: 161, 2S = 2: 153, 2S = 4: 41, 2S = 6: 1 · wall time 632 s, 8 threads · fenrir04, 2026-10-15 · Psi4 d40267fc2 · input [PIF_S_cs_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/PIF_S_cs_66.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +1.921 | 2.22790 | H→L 99 %, H−1→L+1 1 % | H −0.89, L +0.90 |
| S2 | +2.130 | 0.00000 | H,H→L,L 40 %, H→L+1 38 %, H−1→L 13 % | H−1 −0.31, H −1.13, L +0.91, L+1 +0.54 |
| S3 | +2.781 | 0.00000 | H−1→L 56 %, H→L+1 44 % | H−1 −0.57, H −0.43, L +0.57, L+1 +0.46 |
| S4 | +3.159 | 0.00000 | H,H→L,L 45 %, H−1→L 28 %, H→L+1 28 % | H−1 −0.32, H −1.06, L +1.03, L+1 +0.35 |
| S5 | +3.202 | 0.67526 | H−2→L 95 %, H→L+2 5 % | H−2 −0.90, L +0.81 |
| T1 | +1.047 | | H→L 84 %, H−1→L+1 16 % | H −0.78, L +0.79 |
| T2 | +1.354 | | H→L+1 59 %, H−1→L 41 % | H−1 −0.38, H −0.54, L +0.36, L+1 +0.55 |
| T3 | +2.630 | | H−2→L 81 %, H−2→L+2 19 % | H−2 −0.89, L +0.69, L+2 +0.21 |
| Q1 | +2.873 | | H−1,H→L,L+1 98 %, H−2,H−1→L,L+1 2 % | H−1 −0.95, H −0.89, L +0.93, L+1 +0.94 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(c, d)

![PIF R_cs (6,6), orbital 138A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_cs/66_138A.svg)**d** 138A · 0.0001\
−0.148865

![PIF R_cs (6,6), orbital 137A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_cs/66_137A.svg)**c** 137A · 1.9999\
−0.190227

(b, e)

![PIF R_cs (6,6), orbital 139A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_cs/66_139A.svg)**e** 139A · 0.0000\
−0.123205

![PIF R_cs (6,6), orbital 136A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_cs/66_136A.svg)**b** 136A · 2.0000\
−0.221852

(a, f)

![PIF R_cs (6,6), orbital 140A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_cs/66_140A.svg)**f** 140A · 0.0000\
−0.098118

![PIF R_cs (6,6), orbital 135A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_cs/66_135A.svg)**a** 135A · 2.0000\
−0.240696

R<sub>cs</sub> · (8,8) · 8 orbitals · ΔE<sub>ST</sub> **+26.4** · ΔE<sub>SQ</sub> **+67.4** kcal mol⁻¹

SI configurations 2S = 0: 1 934, 2S = 2: 2 524, 2S = 4: 1 172, 2S = 6: 199, 2S = 8: 1 · wall time 1114 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [PIF_S_cs_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/PIF_S_cs_88.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 11.7 % of the state | |
| S1 | +2.036 | 2.12861 | H→L 100 % | H −0.87, L +0.88 |
| S2 | +2.234 | 0.00000 | H→L+1 53 %, H,H→L,L 47 % | H−1 −0.26, H −1.15, L +0.85, L+1 +0.57 |
| S3 | +2.734 | 0.00000 | H−1→L 61 %, H→L+1 39 % | H−1 −0.58, H −0.39, L +0.60, L+1 +0.40 |
| S4 | +3.212 | 0.67341 | H−2→L 100 % | H−2 −0.80, L +0.72, L+2 +0.17 |
| S5 | +3.214 | 0.00034 | listed configurations 36.0 % of the state | H−1 −0.33, H −1.03, L +1.05, L+1 +0.34 |
| T1 | +1.144 | | H→L 100 % | H −0.75, L +0.76 |
| T2 | +1.416 | | H→L+1 59 %, H−1→L 41 % | H−1 −0.37, H −0.52, L +0.36, L+1 +0.54 |
| T3 | +2.514 | | H−2→L 100 % | H−2 −0.85, L +0.67, L+2 +0.17 |
| Q1 | +2.925 | | H−1,H→L,L+1 100 % | H−1 −0.90, H −0.86, L +0.91, L+1 +0.91 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(d, e)

![PIF R_cs (8,8), orbital 138A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_cs/88_138A.svg)**e** 138A · 0.0001\
−0.153906

![PIF R_cs (8,8), orbital 137A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_cs/88_137A.svg)**d** 137A · 1.9999\
−0.190865

(c, f)

![PIF R_cs (8,8), orbital 139A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_cs/88_139A.svg)**f** 139A · 0.0000\
−0.128787

![PIF R_cs (8,8), orbital 136A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_cs/88_136A.svg)**c** 136A · 2.0000\
−0.222417

(b, g)

![PIF R_cs (8,8), orbital 140A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_cs/88_140A.svg)**g** 140A · 0.0000\
−0.112211

![PIF R_cs (8,8), orbital 135A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_cs/88_135A.svg)**b** 135A · 2.0000\
−0.242736

(a, h)

![PIF R_cs (8,8), orbital 141A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_cs/88_141A.svg)**h** 141A · 0.0000\
−0.069784

![PIF R_cs (8,8), orbital 133A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_cs/88_133A.svg)**a** 133A · 2.0000\
−0.284204

R<sub>cs</sub> · (10,10) · 10 orbitals · ΔE<sub>ST</sub> **+25.6** · ΔE<sub>SQ</sub> **+64.0** kcal mol⁻¹

SI configurations 2S = 0: 29 082, 2S = 2: 48 090, 2S = 4: 31 275, 2S = 6: 9 635, 2S = 8: 1 209, 2S = 10: 1 · wall time 3209 s, 8 threads · fenrir04, 2026-10-16 · Psi4 d40267fc2 · input [PIF_S_cs_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/PIF_S_cs_1010.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 2.4 % of the state | |
| S1 | +2.011 | 1.99416 | listed configurations 11.4 % of the state | H −0.85, L +0.86 |
| S2 | +2.252 | 0.00000 | listed configurations 4.5 % of the state | H−1 −0.22, H −1.15, L +0.82, L+1 +0.57 |
| S3 | +2.723 | 0.00000 | listed configurations 6.6 % of the state | H−1 −0.62, H −0.33, L +0.65, L+1 +0.35 |
| S4 | +3.127 | 0.00000 | listed configurations 4.5 % of the state | H−1 −0.27, H −1.07, L +0.99, L+1 +0.37 |
| S5 | +3.143 | 0.83495 | listed configurations 9.9 % of the state | H−2 −0.85, L +0.77 |
| T1 | +1.108 | | listed configurations 9.6 % of the state | H −0.74, L +0.75 |
| T2 | +1.414 | | listed configurations 6.9 % of the state | H−1 −0.36, H −0.51, L +0.35, L+1 +0.52 |
| T3 | +2.546 | | listed configurations 9.3 % of the state | H−2 −0.87, L +0.71 |
| Q1 | +2.775 | | H−1,H→L,L+1 100 % | H−1 −0.88, H −0.87, L +0.90, L+1 +0.88 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(e, f)

![PIF R_cs (10,10), orbital 138A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_cs/1010_138A.svg)**f** 138A · 0.0001\
−0.158990

![PIF R_cs (10,10), orbital 137A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_cs/1010_137A.svg)**e** 137A · 1.9999\
−0.191205

(d, g)

![PIF R_cs (10,10), orbital 139A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_cs/1010_139A.svg)**g** 139A · 0.0000\
−0.133625

![PIF R_cs (10,10), orbital 136A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_cs/1010_136A.svg)**d** 136A · 2.0000\
−0.222341

(c, h)

![PIF R_cs (10,10), orbital 140A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_cs/1010_140A.svg)**h** 140A · 0.0000\
−0.112800

![PIF R_cs (10,10), orbital 135A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_cs/1010_135A.svg)**c** 135A · 2.0000\
−0.242369

(b, i)

![PIF R_cs (10,10), orbital 141A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_cs/1010_141A.svg)**i** 141A · 0.0000\
−0.070057

![PIF R_cs (10,10), orbital 133A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_cs/1010_133A.svg)**b** 133A · 2.0000\
−0.284188

(a, j)

![PIF R_cs (10,10), orbital 142A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_cs/1010_142A.svg)**j** 142A · 0.0000\
−0.023625

![PIF R_cs (10,10), orbital 130A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_cs/1010_130A.svg)**a** 130A · 2.0000\
−0.303697

### R<sub>os</sub> {#geom-os}

R<sub>os</sub> · (2,2) · 2 orbitals · ΔE<sub>ST</sub> **+11.7** kcal mol⁻¹ · ΔE<sub>SQ</sub> **n/a**

SI configurations 2S = 0: 3, 2S = 2: 1 · wall time 348 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [PIF_S_os_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/PIF_S_os_22.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +1.286 | 2.42306 | H→L 100 % | H −0.96, L +0.96 |
| S2 | +2.101 | 0.00000 | H,H→L,L 100 % | H −1.92, L +1.92 |
| S3 | n/a | | | |
| S4 | n/a | | | |
| S5 | n/a | | | |
| T1 | +0.509 | | H→L 100 % | H −0.96, L +0.96 |
| T2 | n/a | | | |
| T3 | n/a | | | |
| Q1 | n/a | | | |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(a, b)

![PIF R_os (2,2), orbital 138A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_os/22_138A.svg)**b** 138A · 0.0376\
−0.138263

![PIF R_os (2,2), orbital 137A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_os/22_137A.svg)**a** 137A · 1.9624\
−0.173516

R<sub>os</sub> · (4,4) · 4 orbitals · ΔE<sub>ST</sub> **+12.5** · ΔE<sub>SQ</sub> **+49.9** kcal mol⁻¹

SI configurations 2S = 0: 18, 2S = 2: 11, 2S = 4: 1 · wall time 603 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [PIF_S_os_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/PIF_S_os_44.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 94 %, H−1,H→L,L+1 6 % | |
| S1 | +1.268 | 0.00000 | H,H→L,L 41 %, H→L+1 17 %, H,H→L+1,L+1 12 % | H−1 −0.27, H −0.98, L +0.85, L+1 +0.41 |
| S2 | +1.600 | 2.78352 | H→L 98 %, H−1→L+1 2 % | H −0.76, L +0.78 |
| S3 | +2.414 | 0.00000 | H−1→L 53 %, H,H→L,L 22 %, H−1,H→L,L+1 18 % | H−1 −0.77, H −0.45, L +1.04, L+1 +0.19 |
| S4 | +2.610 | 0.00000 | H→L+1 69 %, H,H→L,L 23 %, H−1→L 9 % | H −0.95, L +0.38, L+1 +0.68 |
| S5 | +3.454 | 0.00000 | H,H→L+1,L+1 43 %, H−1→L 22 %, H−1,H→L,L+1 18 % | H−1 −0.42, H −0.91, L +0.28, L+1 +1.05 |
| T1 | +0.542 | | H→L 86 %, H−1→L+1 13 %, H−1,H−1,H→L,L+1,L+1 1 % | H −0.68, L +0.71 |
| T2 | +1.038 | | H→L+1 61 %, H−1→L 38 %, H−1,H−1,H→L,L,L+1 1 % | H−1 −0.34, H −0.42, L +0.21, L+1 +0.55 |
| T3 | +2.441 | | H−1→L 52 %, H→L+1 36 %, H−1,H→L,L+1 13 % | H−1 −0.60, H −0.31, L +0.47, L+1 +0.44 |
| Q1 | +2.166 | | H−1,H→L,L+1 100 % | H−1 −0.93, H −0.77, L +0.80, L+1 +0.90 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(b, c)

![PIF R_os (4,4), orbital 138A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_os/44_138A.svg)**c** 138A · 0.0220\
−0.152066

![PIF R_os (4,4), orbital 137A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_os/44_137A.svg)**b** 137A · 1.9780\
−0.177121

(a, d)

![PIF R_os (4,4), orbital 139A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_os/44_139A.svg)**d** 139A · 0.0000\
−0.124235

![PIF R_os (4,4), orbital 136A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_os/44_136A.svg)**a** 136A · 2.0000\
−0.219621

R<sub>os</sub> · (6,6) · 6 orbitals · ΔE<sub>ST</sub> **+13.7** · ΔE<sub>SQ</sub> **+50.9** kcal mol⁻¹

SI configurations 2S = 0: 161, 2S = 2: 153, 2S = 4: 41, 2S = 6: 1 · wall time 715 s, 8 threads · fenrir04, 2026-10-15 · Psi4 d40267fc2 · input [PIF_S_os_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/PIF_S_os_66.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +1.302 | 0.00000 | H,H→L,L 43 %, H→L+1 23 %, H−1→L 14 % | H−1 −0.28, H −1.00, L +0.84, L+1 +0.44 |
| S2 | +1.605 | 2.26595 | H→L 99 %, H−1→L+1 1 % | H −0.77, L +0.78 |
| S3 | +2.474 | 0.00000 | H−1→L 58 %, H,H→L,L 27 %, H−1,H→L,L+1 15 % | H−1 −0.72, H −0.48, L +1.04, L+1 +0.16 |
| S4 | +2.604 | 0.00000 | H→L+1 75 %, H,H→L,L 25 % | H −0.92, L +0.41, L+1 +0.65 |
| S5 | +3.038 | 0.31277 | H−2→L 78 %, H→L+2 22 % | H−2 −0.76, L +0.59, L+2 +0.22 |
| T1 | +0.595 | | H→L 88 %, H−1→L+1 12 % | H −0.71, L +0.72 |
| T2 | +1.091 | | H→L+1 62 %, H−1→L 38 % | H−1 −0.34, H −0.45, L +0.24, L+1 +0.55 |
| T3 | +2.451 | | H−1→L 52 %, H→L+1 36 %, H−1,H→L,L+1 11 % | H−1 −0.55, H −0.29, L +0.45, L+1 +0.40 |
| Q1 | +2.205 | | H−1,H→L,L+1 98 %, H−2,H−1→L,L+1 2 % | H−1 −0.92, H −0.76, L +0.81, L+1 +0.90 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(c, d)

![PIF R_os (6,6), orbital 138A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_os/66_138A.svg)**d** 138A · 0.0207\
−0.155512

![PIF R_os (6,6), orbital 137A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_os/66_137A.svg)**c** 137A · 1.9793\
−0.177512

(b, e)

![PIF R_os (6,6), orbital 139A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_os/66_139A.svg)**e** 139A · 0.0000\
−0.129272

![PIF R_os (6,6), orbital 136A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_os/66_136A.svg)**b** 136A · 2.0000\
−0.219817

(a, f)

![PIF R_os (6,6), orbital 140A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_os/66_140A.svg)**f** 140A · 0.0000\
−0.100341

![PIF R_os (6,6), orbital 135A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_os/66_135A.svg)**a** 135A · 2.0000\
−0.242993

R<sub>os</sub> · (8,8) · 8 orbitals · ΔE<sub>ST</sub> **+15.8** · ΔE<sub>SQ</sub> **+51.6** kcal mol⁻¹

SI configurations 2S = 0: 1 934, 2S = 2: 2 524, 2S = 4: 1 172, 2S = 6: 199, 2S = 8: 1 · wall time 853 s, 8 threads · fenrir04, 2026-10-15 · Psi4 d40267fc2 · input [PIF_S_os_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/PIF_S_os_88.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 12.0 % of the state | |
| S1 | +1.381 | 0.00000 | listed configurations 36.0 % of the state | H−1 −0.25, H −1.05, L +0.86, L+1 +0.45 |
| S2 | +1.715 | 2.23156 | H→L 100 % | H −0.77, L +0.79 |
| S3 | +2.462 | 0.00000 | H−1→L 100 % | H−1 −0.75, H −0.25, L +0.76, L+1 +0.26 |
| S4 | +2.581 | 0.00000 | H→L+1 55 %, H,H→L,L 45 % | H −1.10, L +0.68, L+1 +0.53 |
| S5 | +3.043 | 0.29638 | H−2→L 100 % | H−2 −0.63, H −0.18, L +0.49, L+2 +0.30 |
| T1 | +0.683 | | H→L 100 % | H −0.72, L +0.73 |
| T2 | +1.144 | | H→L+1 62 %, H−1→L 38 % | H−1 −0.34, H −0.45, L +0.25, L+1 +0.55 |
| T3 | +2.436 | | H−2→L 100 % | H−2 −0.85, L +0.63 |
| Q1 | +2.238 | | H−1,H→L,L+1 100 % | H−1 −0.88, H −0.77, L +0.81, L+1 +0.89 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(d, e)

![PIF R_os (8,8), orbital 138A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_os/88_138A.svg)**e** 138A · 0.0209\
−0.159976

![PIF R_os (8,8), orbital 137A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_os/88_137A.svg)**d** 137A · 1.9791\
−0.176857

(c, f)

![PIF R_os (8,8), orbital 139A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_os/88_139A.svg)**f** 139A · 0.0000\
−0.133051

![PIF R_os (8,8), orbital 136A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_os/88_136A.svg)**c** 136A · 2.0000\
−0.218990

(b, g)

![PIF R_os (8,8), orbital 140A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_os/88_140A.svg)**g** 140A · 0.0000\
−0.110941

![PIF R_os (8,8), orbital 135A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_os/88_135A.svg)**b** 135A · 2.0000\
−0.241481

(a, h)

![PIF R_os (8,8), orbital 141A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_os/88_141A.svg)**h** 141A · 0.0000\
−0.071291

![PIF R_os (8,8), orbital 133A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_os/88_133A.svg)**a** 133A · 2.0000\
−0.279009

R<sub>os</sub> · (10,10) · 10 orbitals · ΔE<sub>ST</sub> **+15.4** · ΔE<sub>SQ</sub> **+48.7** kcal mol⁻¹

SI configurations 2S = 0: 29 082, 2S = 2: 48 090, 2S = 4: 31 275, 2S = 6: 9 635, 2S = 8: 1 209, 2S = 10: 1 · wall time 3208 s, 8 threads · fenrir04, 2026-10-16 · Psi4 d40267fc2 · input [PIF_S_os_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/PIF_S_os_1010.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 2.4 % of the state | |
| S1 | +1.445 | 0.00000 | listed configurations 4.5 % of the state | H−1 −0.23, H −1.04, L +0.85, L+1 +0.43 |
| S2 | +1.707 | 2.07038 | listed configurations 11.4 % of the state | H −0.75, L +0.77 |
| S3 | +2.409 | 0.00000 | listed configurations 6.3 % of the state | H−1 −0.71, H −0.34, L +0.88, L+1 +0.21 |
| S4 | +2.578 | 0.00000 | listed configurations 6.3 % of the state | H −0.94, L +0.47, L+1 +0.57 |
| S5 | +3.018 | 0.43474 | listed configurations 8.7 % of the state | H−2 −0.75, L +0.58, L+2 +0.18 |
| T1 | +0.669 | | listed configurations 10.2 % of the state | H −0.70, L +0.71 |
| T2 | +1.161 | | listed configurations 7.2 % of the state | H−1 −0.33, H −0.44, L +0.23, L+1 +0.53 |
| T3 | +2.469 | | listed configurations 9.3 % of the state | H−2 −0.85, L +0.63 |
| Q1 | +2.111 | | H−1,H→L,L+1 100 % | H−1 −0.85, H −0.76, L +0.80, L+1 +0.85 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(e, f)

![PIF R_os (10,10), orbital 138A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_os/1010_138A.svg)**f** 138A · 0.0227\
−0.164457

![PIF R_os (10,10), orbital 137A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_os/1010_137A.svg)**e** 137A · 1.9773\
−0.177590

(d, g)

![PIF R_os (10,10), orbital 139A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_os/1010_139A.svg)**g** 139A · 0.0000\
−0.138164

![PIF R_os (10,10), orbital 136A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_os/1010_136A.svg)**d** 136A · 2.0000\
−0.219381

(c, h)

![PIF R_os (10,10), orbital 140A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_os/1010_140A.svg)**h** 140A · 0.0000\
−0.114123

![PIF R_os (10,10), orbital 135A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_os/1010_135A.svg)**c** 135A · 2.0000\
−0.243079

(b, i)

![PIF R_os (10,10), orbital 141A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_os/1010_141A.svg)**i** 141A · 0.0000\
−0.073341

![PIF R_os (10,10), orbital 133A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_os/1010_133A.svg)**b** 133A · 2.0000\
−0.280740

(a, j)

![PIF R_os (10,10), orbital 142A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_os/1010_142A.svg)**j** 142A · 0.0000\
−0.023950

![PIF R_os (10,10), orbital 130A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_S_os/1010_130A.svg)**a** 130A · 2.0000\
−0.301669

### R<sub>T</sub> {#geom-t}

R<sub>T</sub> · (2,2) · 2 orbitals · ΔE<sub>ST</sub> **+1.7** kcal mol⁻¹ · ΔE<sub>SQ</sub> **n/a**

SI configurations 2S = 0: 3, 2S = 2: 1 · wall time 377 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [PIF_T_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/PIF_T_22.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +1.659 | 1.08714 | H→L 99 %, H,H→L,L 1 % | H −0.46, L +0.46 |
| S2 | +1.854 | 0.01888 | H,H→L,L 99 %, H→L 1 % | H −0.90, L +0.90 |
| S3 | n/a | | | |
| S4 | n/a | | | |
| S5 | n/a | | | |
| T1 | +0.075 | | H→L 100 % | H −0.45, L +0.45 |
| T2 | n/a | | | |
| T3 | n/a | | | |
| Q1 | n/a | | | |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(a, b)

![PIF R_T (2,2), orbital 138A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_T/22_138A.svg)**b** 138A · 0.5453\
−0.147503

![PIF R_T (2,2), orbital 137A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_T/22_137A.svg)**a** 137A · 1.4547\
−0.162858

R<sub>T</sub> · (4,4) · 4 orbitals · ΔE<sub>ST</sub> **+7.9** · ΔE<sub>SQ</sub> **+50.3** kcal mol⁻¹

SI configurations 2S = 0: 18, 2S = 2: 11, 2S = 4: 1 · wall time 563 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [PIF_T_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/PIF_T_44.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 94 %, H→L+1 6 % | |
| S1 | +1.192 | 0.00011 | H→L+1 27 %, H,H→L,L 24 %, H−1→L 18 % | H−1 −0.31, L+1 +0.46 |
| S2 | +1.874 | 1.44946\* | H→L 98 %, H−1,H,H→L,L,L+1 1 %, H−1→L+1 1 % | H −0.28, L +0.32 |
| S3 | +2.220 | 0.00998\* | H,H→L,L 61 %, H−1,H→L,L+1 20 %, H−1→L 10 % | H−1 −0.26, H −0.51, L +0.60, L+1 +0.17 |
| S4 | +2.762 | 0.02797\* | H→L+1 46 %, H−1→L 46 %, H,H→L+1,L+1 8 % | H−1 −0.48, L+1 +0.52 |
| S5 | +3.826 | 1.02441 | H−1→L+1 99 %, H→L 1 % | H−1 −0.93, H +0.28, L −0.24, L+1 +0.89 |
| T1 | +0.341 | | H→L 93 %, H−1→L+1 6 %, H−1,H−1,H→L,L+1,L+1 1 % | H −0.28, L +0.32 |
| T2 | +1.357 | | H→L+1 52 %, H−1→L 30 %, H−1,H→L,L+1 19 % | H−1 −0.45, L+1 +0.63 |
| T3 | +2.618 | | H−1→L 46 %, H→L+1 45 %, H−1,H→L,L+1 9 % | H−1 −0.50, L+1 +0.49 |
| Q1 | +2.181 | | H−1,H→L,L+1 100 % | H−1 −0.93, H −0.30, L +0.33, L+1 +0.90 |

\* f (length) and f (velocity) differ by more than 3× (tested when f > 10<sup>−3</sup>).

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(b, c)

![PIF R_T (4,4), orbital 138A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_T/44_138A.svg)**c** 138A · 0.5042\
−0.158076

![PIF R_T (4,4), orbital 137A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_T/44_137A.svg)**b** 137A · 1.4958\
−0.169911

(a, d)

![PIF R_T (4,4), orbital 139A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_T/44_139A.svg)**d** 139A · 0.0001\
−0.124716

![PIF R_T (4,4), orbital 136A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_T/44_136A.svg)**a** 136A · 1.9999\
−0.226696

R<sub>T</sub> · (6,6) · 6 orbitals · ΔE<sub>ST</sub> **+5.7** · ΔE<sub>SQ</sub> **+50.0** kcal mol⁻¹

SI configurations 2S = 0: 161, 2S = 2: 153, 2S = 4: 41, 2S = 6: 1 · wall time 823 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [PIF_T_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/PIF_T_66.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +1.072 | 0.00004 | H→L+1 37 %, H,H→L,L 23 %, H−1→L 23 % | H−1 −0.35, H −0.20, L+1 +0.53 |
| S2 | +1.782 | 1.04063\* | H→L 98 %, H−2→L 2 % | H −0.29, L +0.35 |
| S3 | +2.186 | 0.00263\* | H,H→L,L 75 %, H−1,H→L,L+1 25 % | H−1 −0.22, H −0.60, L +0.64, L+1 +0.18 |
| S4 | +2.727 | 0.03108\* | H−1→L 47 %, H→L+1 45 %, H−2→L+1 8 % | H−1 −0.45, L+1 +0.54 |
| S5 | +2.825 | 0.12518\* | H−2→L 46 %, H−2,H→L,L+1 27 %, H→L+2 21 % | H−2 −0.70, L +0.18, L+1 +0.25, L+2 +0.26 |
| T1 | +0.248 | | H→L 98 %, H−1→L+1 2 % | H −0.34, L +0.37 |
| T2 | +1.334 | | H→L+1 46 %, H−1,H→L,L+1 28 %, H−1→L 26 % | H−1 −0.51, L+1 +0.68 |
| T3 | +2.515 | | H−2→L 45 %, H−1→L 22 %, H→L+1 20 % | H−2 −0.55, H−1 −0.24, H +0.15, L +0.17, L+1 +0.41 |
| Q1 | +2.166 | | H−1,H→L,L+1 100 % | H−1 −0.94, H −0.35, L +0.38, L+1 +0.92 |

\* f (length) and f (velocity) differ by more than 3× (tested when f > 10<sup>−3</sup>).

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(c, d)

![PIF R_T (6,6), orbital 138A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_T/66_138A.svg)**d** 138A · 0.5535\
−0.164053

![PIF R_T (6,6), orbital 137A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_T/66_137A.svg)**c** 137A · 1.4465\
−0.172272

(b, e)

![PIF R_T (6,6), orbital 139A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_T/66_139A.svg)**e** 139A · 0.0001\
−0.131520

![PIF R_T (6,6), orbital 136A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_T/66_136A.svg)**b** 136A · 1.9999\
−0.228061

(a, f)

![PIF R_T (6,6), orbital 140A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_T/66_140A.svg)**f** 140A · 0.0000\
−0.100991

![PIF R_T (6,6), orbital 135A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_T/66_135A.svg)**a** 135A · 2.0000\
−0.246567

R<sub>T</sub> · (8,8) · 8 orbitals · ΔE<sub>ST</sub> **+4.6** · ΔE<sub>SQ</sub> **+51.5** kcal mol⁻¹

SI configurations 2S = 0: 1 934, 2S = 2: 2 524, 2S = 4: 1 172, 2S = 6: 199, 2S = 8: 1 · wall time 891 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [PIF_T_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/PIF_T_88.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 44.4 % of the state | |
| S1 | +1.046 | 0.00006 | listed configurations 43.8 % of the state | H−1 −0.31, H −0.29, L+1 +0.54 |
| S2 | +1.776 | 0.93710\* | H→L 100 % | H −0.30, L +0.35 |
| S3 | +2.199 | 0.00029 | H,H→L,L 81 %, H−1,H→L,L+1 19 % | H−1 −0.22, H −0.65, L +0.60, L+1 +0.27 |
| S4 | +2.623 | 0.01628\* | listed configurations 46.2 % of the state | H−1 −0.54, L+1 +0.44 |
| S5 | +2.703 | 0.08732 | H→L+2 77 %, H−2,H→L,L+1 23 % | H−2 −0.35, H −0.21, L+2 +0.62 |
| T1 | +0.199 | | H→L 100 % | H −0.38, L +0.40 |
| T2 | +1.349 | | H→L+1 67 %, H−1,H→L,L+1 33 % | H−1 −0.44, H −0.18, L+1 +0.74 |
| T3 | +2.284 | | listed configurations 45.0 % of the state | H−1 −0.55, L+1 +0.49 |
| Q1 | +2.232 | | H−1,H→L,L+1 100 % | H−1 −0.95, H −0.38, L +0.40, L+1 +0.93 |

\* f (length) and f (velocity) differ by more than 3× (tested when f > 10<sup>−3</sup>).

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(d, e)

![PIF R_T (8,8), orbital 138A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_T/88_138A.svg)**e** 138A · 0.5890\
−0.168954

![PIF R_T (8,8), orbital 137A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_T/88_137A.svg)**d** 137A · 1.4110\
−0.173470

(c, f)

![PIF R_T (8,8), orbital 139A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_T/88_139A.svg)**f** 139A · 0.0001\
−0.132977

![PIF R_T (8,8), orbital 136A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_T/88_136A.svg)**c** 136A · 1.9999\
−0.227501

(b, g)

![PIF R_T (8,8), orbital 140A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_T/88_140A.svg)**g** 140A · 0.0000\
−0.110904

![PIF R_T (8,8), orbital 135A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_T/88_135A.svg)**b** 135A · 2.0000\
−0.247111

(a, h)

![PIF R_T (8,8), orbital 141A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_T/88_141A.svg)**h** 141A · 0.0000\
−0.070147

![PIF R_T (8,8), orbital 134A](https://reksstudio.github.io/v2/figures/zeth/orb/PIF_T/88_134A.svg)**a** 134A · 2.0000\
−0.272179

R<sub>T</sub> · (10,10) · – (not computed)

[← FP](https://reksstudio.github.io/v2/main/results/zethrenes/fp/index.md) · [Back to the compounds](https://reksstudio.github.io/v2/main/results/zethrenes/index.md#c-pif) · [IFD →](https://reksstudio.github.io/v2/main/results/zethrenes/ifd/index.md)

## Linked files

[inputs/zethrenes/PIF_S_cs_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/PIF_S_cs_22.py.txt)

[inputs/zethrenes/PIF_S_cs_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/PIF_S_cs_44.py.txt)

[inputs/zethrenes/PIF_S_cs_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/PIF_S_cs_66.py.txt)

[inputs/zethrenes/PIF_S_cs_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/PIF_S_cs_88.py.txt)

[inputs/zethrenes/PIF_S_cs_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/PIF_S_cs_1010.py.txt)

[inputs/zethrenes/PIF_S_os_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/PIF_S_os_22.py.txt)

[inputs/zethrenes/PIF_S_os_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/PIF_S_os_44.py.txt)

[inputs/zethrenes/PIF_S_os_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/PIF_S_os_66.py.txt)

[inputs/zethrenes/PIF_S_os_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/PIF_S_os_88.py.txt)

[inputs/zethrenes/PIF_S_os_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/PIF_S_os_1010.py.txt)

[inputs/zethrenes/PIF_T_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/PIF_T_22.py.txt)

[inputs/zethrenes/PIF_T_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/PIF_T_44.py.txt)

[inputs/zethrenes/PIF_T_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/PIF_T_66.py.txt)

[inputs/zethrenes/PIF_T_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/PIF_T_88.py.txt)
