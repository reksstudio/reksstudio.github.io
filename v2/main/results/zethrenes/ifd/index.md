# IFD: Linearly fused indenofluorene dimer — Zethrenes — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/zethrenes/ifd/>

Psi4 builds of these outputs: b0c2d45a7, d40267fc2, 2424fb773 (kk/reks.v42), named on each run line. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# Linearly fused indenofluorene dimer (IFD)

C<sub>34</sub>H<sub>18</sub>, 52 atoms, 1272 basis functions (cc-pVTZ); compound 1e of Hu et al. (2016). Geometries: R<sub>cs</sub>, R<sub>os</sub>, R<sub>T</sub>.

[R<sub>cs</sub> (10,10) details](https://reksstudio.github.io/v2/main/results/zethrenes/ifd/index.md#cs-1010) · [R<sub>os</sub> (10,10) details](https://reksstudio.github.io/v2/main/results/zethrenes/ifd/index.md#os-1010) · [R<sub>T</sub> (10,10) details](https://reksstudio.github.io/v2/main/results/zethrenes/ifd/index.md#t-1010)

[Spin gaps](https://reksstudio.github.io/v2/main/results/zethrenes/ifd/index.md#gaps) · [Energies across geometries](https://reksstudio.github.io/v2/main/results/zethrenes/ifd/index.md#geometries) · [SI states](https://reksstudio.github.io/v2/main/results/zethrenes/ifd/index.md#states) · [Natural occupations](https://reksstudio.github.io/v2/main/results/zethrenes/ifd/index.md#occupations) · [vs experiment](https://reksstudio.github.io/v2/main/results/zethrenes/ifd/index.md#experiment) · [Calculations](https://reksstudio.github.io/v2/main/results/zethrenes/ifd/index.md#calculations)

![IFD: drawing of the R_cs geometry](https://reksstudio.github.io/v2/figures/zeth/mol/IFD.svg)

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
| (2,2) | +35.4 | +29.6 | +7.0 |
| (4,4) | +36.1 | +30.4 | +10.3 |
| (6,6) | +30.8 | +26.0 | +10.7 |
| (8,8) | +32.7 | +28.1 | +11.0 |
| (10,10) | +32.5 | +28.0 | +10.6 |

ΔE<sub>SQ</sub> / kcal mol<sup>−1</sup>

| Active space | R<sub>cs</sub> | R<sub>os</sub> | R<sub>T</sub> |
| - | - | - | - |
| (2,2) | n/a | n/a | n/a |
| (4,4) | +80.3 | +72.5 | +55.3 |
| (6,6) | +77.7 | +70.2 | +58.4 |
| (8,8) | +78.3 | +70.9 | +58.0 |
| (10,10) | +75.3 | +68.1 | +58.4 |

–: not computed; n/a: no 2S = 4 state in the SI space of this active space.

## Energies across geometries

ΔE<sub>geom</sub>(X, R) = E<sub>X</sub>(R) − E<sub>S0</sub>(R<sub>os</sub>)

Same active space; zero = E(S0) at R<sub>os</sub>; SI-SA-REKS electronic energies; positive: above the zero.

ΔE<sub>geom</sub> / kcal mol<sup>−1</sup>

| Active space | State | R<sub>cs</sub> | R<sub>os</sub> | R<sub>T</sub> |
| - | - | - | - | - |
| (2,2) | S0 | −1.1 | 0.0 | +13.1 |
| | T1 | +34.4 | +29.6 | +20.1 |
| | Q1 | n/a | n/a | n/a |
| (4,4) | S0 | −1.0 | 0.0 | +9.7 |
| | T1 | +35.1 | +30.4 | +20.0 |
| | Q1 | +79.3 | +72.5 | +65.0 |
| (6,6) | S0 | +0.1 | 0.0 | +8.8 |
| | T1 | +30.9 | +26.0 | +19.5 |
| | Q1 | +77.8 | +70.2 | +67.2 |
| (8,8) | S0 | +0.2 | 0.0 | +10.3 |
| | T1 | +32.9 | +28.1 | +21.3 |
| | Q1 | +78.5 | +70.9 | +68.3 |
| (10,10) | S0 | +0.2 | 0.0 | +11.0 |
| | T1 | +32.7 | +28.0 | +21.7 |
| | Q1 | +75.5 | +68.1 | +69.5 |

## SI states along the ladder

* 2S = 0: S0–S5
* 2S = 2: T1–T3
* 2S = 4: Q1

IFD R_cs: SI states per active space, E − E(S0) / eV, 0 to 4.5, joined across active spaces; numbers in the tables below

IFD R_os: SI states per active space, E − E(S0) / eV, 0 to 4.5, joined across active spaces; numbers in the tables below

IFD R_T: SI states per active space, E − E(S0) / eV, 0 to 4.5, joined across active spaces; numbers in the tables below

One column per active space and one level per SI state shown on this page at E − E(S0) / eV (same geometry and active space); colour = 2S; levels closer than about 0.08 eV sit side by side. A thin line joins a level to one level of the same 2S at the next computed active space when their leading excitation patterns agree (same dominant pattern, or pattern weights that overlap by at least one half) or their density changes ΔD differ by at most 0.15; the joins are one-to-one, as many as the rule allows. A level without a line has no such partner among the shown states. Patterns come from the leading configurations listed in the output (the three largest, then every further one above 5 %); at (8,8) and (10,10) these often carry a small share of the state, which the hover gives. ΔD: change of the active orbital occupations (diagonal of the active one-particle density) from S0. H−k … H, L … L+k: bonding and antibonding active orbitals in pair order, H and L the frontier pair; H→L moves one electron, H,H→L,L two. –: not computed, a dashed line spans it; Q1 at (2,2): n/a. Spin gaps on this page in kcal mol⁻¹, SI state energies in eV; the T1 level of each column is E(T1) − E(S0).

Table: threads per geometry

R<sub>cs</sub>: threads

| 2S | Active spaces | Threads |
| - | - | - |
| 0 | (2,2) → (4,4) | S0→S0, S1→S1, S2→S5 |
| | (4,4) → (6,6) | S0→S0, S1→S1, S2→S2, S4→S4, S5→S3 |
| | (6,6) → (8,8) | S0→S0, S1→S2, S2→S1, S4→S4, S5→S5 |
| | (8,8) → (10,10) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S4, S5→S5 |
| 2 | (2,2) → (4,4) | T1→T1 |
| | (4,4) → (6,6) | T1→T1, T2→T3 |
| | (6,6) → (8,8) | T1→T1, T2→T2, T3→T3 |
| | (8,8) → (10,10) | T1→T1, T2→T2, T3→T3 |
| 4 | (4,4) → (6,6) | none |
| | (6,6) → (8,8) | Q1→Q1 |
| | (8,8) → (10,10) | Q1→Q1 |

R<sub>os</sub>: threads

| 2S | Active spaces | Threads |
| - | - | - |
| 0 | (2,2) → (4,4) | S0→S0, S1→S1 |
| | (4,4) → (6,6) | S0→S0, S1→S1, S2→S3, S4→S4, S5→S2 |
| | (6,6) → (8,8) | S0→S0, S1→S3, S2→S2, S3→S1, S4→S4, S5→S5 |
| | (8,8) → (10,10) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S4, S5→S5 |
| 2 | (2,2) → (4,4) | T1→T1 |
| | (4,4) → (6,6) | T1→T1, T2→T3 |
| | (6,6) → (8,8) | T1→T1, T2→T2, T3→T3 |
| | (8,8) → (10,10) | T1→T1, T2→T2, T3→T3 |
| 4 | (4,4) → (6,6) | none |
| | (6,6) → (8,8) | Q1→Q1 |
| | (8,8) → (10,10) | Q1→Q1 |

R<sub>T</sub>: threads

| 2S | Active spaces | Threads |
| - | - | - |
| 0 | (2,2) → (4,4) | S0→S0, S1→S3 |
| | (4,4) → (6,6) | S0→S0, S1→S2, S3→S3, S4→S5, S5→S1 |
| | (6,6) → (8,8) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S5 |
| | (8,8) → (10,10) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S4 |
| 2 | (2,2) → (4,4) | T1→T1 |
| | (4,4) → (6,6) | T1→T1, T2→T3, T3→T2 |
| | (6,6) → (8,8) | T1→T1, T2→T2, T3→T3 |
| | (8,8) → (10,10) | T1→T1, T2→T2, T3→T3 |
| 4 | (4,4) → (6,6) | none |
| | (6,6) → (8,8) | Q1→Q1 |
| | (8,8) → (10,10) | Q1→Q1 |

## Natural occupations

R<sub>cs</sub>

IFD R_cs, S0: natural occupations per active space in the order printed, 0 to 2; y0, y1

IFD R_cs, T1: natural occupations per active space in the order printed, 0 to 2

IFD R_cs, Q1: natural occupations per active space in the order printed, 0 to 2

R<sub>os</sub>

IFD R_os, S0: natural occupations per active space in the order printed, 0 to 2; y0, y1

IFD R_os, T1: natural occupations per active space in the order printed, 0 to 2

IFD R_os, Q1: natural occupations per active space in the order printed, 0 to 2

R<sub>T</sub>

IFD R_T, S0: natural occupations per active space in the order printed, 0 to 2; y0, y1

IFD R_T, T1: natural occupations per active space in the order printed, 0 to 2

IFD R_T, Q1: natural occupations per active space in the order printed, 0 to 2

Natural occupations n<sub>i</sub> of the SI state (0 to 2, the cell is 2), the "occ" line of the output block "Natural orbitals of the active space" in the order printed, centred on the HOMO | LUMO divide (dashed), so an orbital keeps its column along the ladder; y<sub>0</sub> = n<sub>LUNO</sub>, y<sub>1</sub> = n<sub>LUNO+1</sub>, as the code prints them; y<sub>0</sub>, y<sub>1</sub> for S0 only (n/a for T1, Q1); otherwise n/a: no such state or orbital in the SI space of this active space.

## REKS vs experiment

Absorption maximum: Δ +0.71 eV, 1 molecule (1 core)

* experiment: substituted derivative; absorption maximum in solution
* REKS, parent hydrocarbon, isolated molecule (gas phase), one dot per active space, the larger at the last:
* (2,2)
* (4,4)
* (6,6)
* (8,8)
* (10,10)
* Δ = REKS(10,10) − experiment / eV

Absorption maximum / eV, experiment and REKS(10,10): 1 molecules; values in Table 2 of the details

(8,8) → (10,10): absorption −0.02 eV; every active space in the details.

Experiment. Absorption: band maximum in solution (Hu et al. 2016). Substituents: 3,5-bis(CF3)phenyl (CF3).

REKS. Parent hydrocarbon without substituents, isolated molecule (gas phase); SI-SA-REKS(10,10)/BH\&HLYP/cc-pVTZ at the UCAM-B3LYP/6-31G\* geometries of Hu et al. (2016), not reoptimized; electronic energies without zero-point energy; absorption as a vertical energy.

Tables, definitions and every active space

Absorption: E(Sn) − E(S0) at R<sub>os</sub>, vertical (no Sn geometry computed); Sn: the H→L-led singlet of largest f; experiment E = 1239.84 / λ(nm)

Δ = REKS − experiment, from energies in E<sub>h</sub>

Absorption maximum / eV; REKS at (10,10)

| Molecule | λ / nm | Exp. | REKS | Δ | Sn · f |
| - | - | - | - | - | - |
| IFD-CF3 | 722 | 1.717 | 2.429 | +0.71 | S3 · 1.43 |

Solvent: CH<sub>2</sub>Cl<sub>2</sub>: IFD-CF3.

The authors' TD-DFT (B3LYP/6-31G\*) assigns the band to HOMO→LUMO for IFD-CF3.

REKS along the active-space ladder / eV

| Core | | (2,2) | (4,4) | (6,6) | (8,8) | (10,10) | R<sub>cs</sub> |
| - | - | - | - | - | - | - | - |
| IFD | Sn | 1.969 | 1.898 | 2.189 | 2.446 | 2.429 | 2.547 |

Sn: S0 → Sn (H→L) at R<sub>os</sub>, Sn chosen per active space by the rule of Table 2.

R<sub>cs</sub>: the same quantity at (10,10) and R<sub>cs</sub>. –: not computed.

Sources: Hu et al. 2016, Table 2 (IFD-CF3), [doi:10.1021/jacs.5b12532](https://doi.org/10.1021/jacs.5b12532).

[All compounds](https://reksstudio.github.io/v2/main/results/zethrenes/index.md#experiment)

## Calculations

One entry per geometry and active space; the summary gives ΔE<sub>ST</sub>, ΔE<sub>SQ</sub> / kcal mol⁻¹ to 1 decimal. Inside: the run line, the SI states (f (length) of S0 → Sn; leading excitation patterns as a share of the listed configurations, given where these carry at least half of the state, else the listed share; ΔD entries with |ΔD| ≥ 0.15, as in the hover of the SI-state chart), the SA-REKS active orbitals and the input. Inputs as run; starting orbitals read from a seed file (RKS or ROHF orbitals; for HZ and HZD the orbitals of an earlier REKS(2,2) run), active pairs set per rung.

Orbitals: one column per active pair as the code pairs them, frontier pair first, antibonding orbital above, bonding below. Contours ±0.01, ±0.02, ±0.04 a.u. in a plane 0.6 Å above the molecular plane; blue + / copper −.

### R<sub>cs</sub> {#geom-cs}

R<sub>cs</sub> · (2,2) · 2 orbitals · ΔE<sub>ST</sub> **+35.4** kcal mol⁻¹ · ΔE<sub>SQ</sub> **n/a**

SI configurations 2S = 0: 3, 2S = 2: 1 · wall time 214 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [IFD_S_cs_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/IFD_S_cs_22.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +2.139 | 1.92718 | H→L 100 % | H −1.00, L +1.00 |
| S2 | +4.064 | 0.00000 | H,H→L,L 100 % | H −2.00, L +2.00 |
| S3 | n/a | | | |
| S4 | n/a | | | |
| S5 | n/a | | | |
| T1 | +1.535 | | H→L 100 % | H −1.00, L +1.00 |
| T2 | n/a | | | |
| T3 | n/a | | | |
| Q1 | n/a | | | |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(a, b)

![IFD R_cs (2,2), orbital 112A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_cs/22_112A.svg)**b** 112A · 0.0000\
−0.144832

![IFD R_cs (2,2), orbital 111A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_cs/22_111A.svg)**a** 111A · 2.0000\
−0.216180

R<sub>cs</sub> · (4,4) · 4 orbitals · ΔE<sub>ST</sub> **+36.1** · ΔE<sub>SQ</sub> **+80.3** kcal mol⁻¹

SI configurations 2S = 0: 18, 2S = 2: 11, 2S = 4: 1 · wall time 219 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [IFD_S_cs_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/IFD_S_cs_44.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +2.064 | 0.56096 | H→L 51 %, H−1→L 48 % | H−1 −0.49, H −0.52, L +1.00 |
| S2 | +2.483 | 2.40020 | H−1→L 50 %, H→L 49 %, H−1,H→L,L+1 1 % | H−1 −0.51, H −0.50, L +1.00 |
| S3 | +2.809 | 0.00000 | H→L+1 49 %, H−1→L+1 43 %, H,H→L,L 9 % | H−1 −0.44, H −0.66, L +0.19, L+1 +0.91 |
| S4 | +3.225 | 0.00000 | H−1→L+1 56 %, H→L+1 25 %, H,H→L,L 20 % | H−1 −0.53, H −0.69, L +0.37, L+1 +0.85 |
| S5 | +3.946 | 0.00000 | H,H→L,L 52 %, H→L+1 27 %, H−1,H−1→L,L 11 % | H−1 −0.27, H −1.44, L +1.20, L+1 +0.50 |
| T1 | +1.566 | | H→L 95 %, H−1→L 5 % | H −0.94, L +1.00 |
| T2 | +1.928 | | H−1→L 93 %, H→L 5 %, H−1,H→L,L+1 2 % | H−1 −0.95, L +1.00 |
| T3 | +2.390 | | H→L+1 97 %, H−1→L+1 3 % | H −0.97, L+1 +1.00 |
| Q1 | +3.482 | | H−1,H→L,L+1 100 % | H−1 −1.00, H −0.99, L +1.00, L+1 +1.00 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(b, c)

![IFD R_cs (4,4), orbital 112A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_cs/44_112A.svg)**c** 112A · 0.0001\
−0.157619

![IFD R_cs (4,4), orbital 111A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_cs/44_111A.svg)**b** 111A · 1.9999\
−0.217668

(a, d)

![IFD R_cs (4,4), orbital 113A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_cs/44_113A.svg)**d** 113A · 0.0000\
−0.132607

![IFD R_cs (4,4), orbital 110A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_cs/44_110A.svg)**a** 110A · 2.0000\
−0.231098

R<sub>cs</sub> · (6,6) · 6 orbitals · ΔE<sub>ST</sub> **+30.8** · ΔE<sub>SQ</sub> **+77.7** kcal mol⁻¹

SI configurations 2S = 0: 161, 2S = 2: 153, 2S = 4: 41, 2S = 6: 1 · wall time 396 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [IFD_S_cs_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/IFD_S_cs_66.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +2.334 | 1.07686 | H→L 84 %, H−1→L 16 % | H−1 −0.17, H −0.78, L +0.92 |
| S2 | +2.604 | 1.03393 | H−1→L 86 %, H→L 14 % | H−1 −0.84, L +0.92 |
| S3 | +2.643 | 0.00000 | H→L+1 40 %, H,H→L,L 29 %, H−2→L 24 % | H−2 −0.32, H −0.90, L +0.78, L+1 +0.53 |
| S4 | +3.246 | 0.00000 | H−1→L+1 95 %, H−2,H→L,L+1 5 % | H−1 −0.76, H −0.23, L +0.18, L+1 +0.91 |
| S5 | +3.384 | 0.00000 | H−2→L 57 %, H→L+1 43 % | H−2 −0.55, H −0.41, L +0.55, L+1 +0.45 |
| T1 | +1.337 | | H→L 83 %, H−2→L+1 17 % | H −0.75, L +0.79 |
| T2 | +1.689 | | H−2→L 52 %, H→L+1 48 % | H−2 −0.47, H −0.42, L +0.46, L+1 +0.48 |
| T3 | +2.156 | | H−1→L 96 %, H→L 4 % | H−1 −0.90, L +0.93 |
| Q1 | +3.368 | | H−2,H→L,L+1 81 %, H−2,H−1→L,L+1 19 % | H−2 −0.96, H−1 −0.19, H −0.76, L +0.93, L+1 +0.96 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(c, d)

![IFD R_cs (6,6), orbital 112A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_cs/66_112A.svg)**d** 112A · 0.0001\
−0.162745

![IFD R_cs (6,6), orbital 111A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_cs/66_111A.svg)**c** 111A · 1.9999\
−0.216233

(b, e)

![IFD R_cs (6,6), orbital 113A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_cs/66_113A.svg)**e** 113A · 0.0000\
−0.138974

![IFD R_cs (6,6), orbital 110A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_cs/66_110A.svg)**b** 110A · 2.0000\
−0.229783

(a, f)

![IFD R_cs (6,6), orbital 114A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_cs/66_114A.svg)**f** 114A · 0.0000\
−0.084375

![IFD R_cs (6,6), orbital 109A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_cs/66_109A.svg)**a** 109A · 2.0000\
−0.249198

R<sub>cs</sub> · (8,8) · 8 orbitals · ΔE<sub>ST</sub> **+32.7** · ΔE<sub>SQ</sub> **+78.3** kcal mol⁻¹

SI configurations 2S = 0: 1 934, 2S = 2: 2 524, 2S = 4: 1 172, 2S = 6: 199, 2S = 8: 1 · wall time 698 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [IFD_S_cs_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/IFD_S_cs_88.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 11.7 % of the state | |
| S1 | +2.297 | 0.24807 | H−1→L 61 %, H→L 39 % | H−1 −0.57, H −0.32, L +0.88 |
| S2 | +2.565 | 1.61168 | H→L 65 %, H−1→L 35 % | H−1 −0.34, H −0.55, L +0.86 |
| S3 | +2.653 | 0.00000 | listed configurations 12.3 % of the state | H−2 −0.27, H−1 −0.25, H −0.50, L +0.62, L+1 +0.50 |
| S4 | +2.949 | 0.00000 | listed configurations 13.5 % of the state | H−3 −0.23, H−1 −0.28, H −0.59, L +0.60, L+1 +0.60 |
| S5 | +3.285 | 0.00000 | H−2→L 59 %, H→L+1 41 % | H−2 −0.51, H −0.35, L +0.54, L+1 +0.39 |
| T1 | +1.417 | | H→L 100 % | H −0.77, L +0.78 |
| T2 | +1.738 | | H→L+1 50 %, H−2→L 50 % | H−2 −0.45, H −0.44, L +0.44, L+1 +0.48 |
| T3 | +2.036 | | H−1→L 100 % | H−1 −0.85, L +0.83 |
| Q1 | +3.396 | | H−2,H→L,L+1 100 % | H−2 −0.88, H −0.84, L +0.93, L+1 +0.94 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(d, e)

![IFD R_cs (8,8), orbital 112A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_cs/88_112A.svg)**e** 112A · 0.0001\
−0.165808

![IFD R_cs (8,8), orbital 111A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_cs/88_111A.svg)**d** 111A · 1.9999\
−0.215979

(c, f)

![IFD R_cs (8,8), orbital 113A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_cs/88_113A.svg)**f** 113A · 0.0000\
−0.142596

![IFD R_cs (8,8), orbital 110A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_cs/88_110A.svg)**c** 110A · 2.0000\
−0.229305

(b, g)

![IFD R_cs (8,8), orbital 114A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_cs/88_114A.svg)**g** 114A · 0.0000\
−0.096183

![IFD R_cs (8,8), orbital 109A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_cs/88_109A.svg)**b** 109A · 2.0000\
−0.248417

(a, h)

![IFD R_cs (8,8), orbital 115A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_cs/88_115A.svg)**h** 115A · 0.0000\
−0.061911

![IFD R_cs (8,8), orbital 108A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_cs/88_108A.svg)**a** 108A · 2.0000\
−0.263845

R<sub>cs</sub> · (10,10) · 10 orbitals · ΔE<sub>ST</sub> **+32.5** · ΔE<sub>SQ</sub> **+75.3** kcal mol⁻¹

SI configurations 2S = 0: 29 082, 2S = 2: 48 090, 2S = 4: 31 275, 2S = 6: 9 635, 2S = 8: 1 209, 2S = 10: 1 · wall time 2315 s, 8 threads · fenrir04, 2026-10-16 · Psi4 d40267fc2 · input [IFD_S_cs_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/IFD_S_cs_1010.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 2.4 % of the state | |
| S1 | +2.291 | 0.34564 | listed configurations 6.3 % of the state | H−1 −0.51, H −0.38, L +0.88 |
| S2 | +2.547 | 1.55709 | listed configurations 6.3 % of the state | H−1 −0.39, H −0.48, L +0.85 |
| S3 | +2.672 | 0.00000 | listed configurations 3.6 % of the state | H−2 −0.26, H−1 −0.29, H −0.41, L +0.57, L+1 +0.50 |
| S4 | +2.975 | 0.00000 | listed configurations 2.7 % of the state | H−3 −0.21, H−1 −0.23, H −0.68, L +0.62, L+1 +0.60 |
| S5 | +3.237 | 0.00000 | listed configurations 5.7 % of the state | H−2 −0.50, H −0.33, L +0.55, L+1 +0.36 |
| T1 | +1.410 | | listed configurations 9.9 % of the state | H −0.77, L +0.77 |
| T2 | +1.737 | | listed configurations 5.7 % of the state | H−2 −0.43, H −0.44, L +0.45, L+1 +0.47 |
| T3 | +2.053 | | listed configurations 10.5 % of the state | H−1 −0.85, L +0.82 |
| Q1 | +3.265 | | H−2,H→L,L+1 100 % | H−2 −0.80, H −0.87, L +0.93, L+1 +0.93 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(e, f)

![IFD R_cs (10,10), orbital 112A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_cs/1010_112A.svg)**f** 112A · 0.0001\
−0.168710

![IFD R_cs (10,10), orbital 111A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_cs/1010_111A.svg)**e** 111A · 1.9999\
−0.216023

(d, g)

![IFD R_cs (10,10), orbital 113A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_cs/1010_113A.svg)**g** 113A · 0.0000\
−0.146090

![IFD R_cs (10,10), orbital 110A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_cs/1010_110A.svg)**d** 110A · 2.0000\
−0.230138

(c, h)

![IFD R_cs (10,10), orbital 114A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_cs/1010_114A.svg)**h** 114A · 0.0000\
−0.097961

![IFD R_cs (10,10), orbital 109A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_cs/1010_109A.svg)**c** 109A · 2.0000\
−0.247438

(b, i)

![IFD R_cs (10,10), orbital 115A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_cs/1010_115A.svg)**i** 115A · 0.0000\
−0.067383

![IFD R_cs (10,10), orbital 108A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_cs/1010_108A.svg)**b** 108A · 2.0000\
−0.264324

(a, j)

![IFD R_cs (10,10), orbital 116A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_cs/1010_116A.svg)**j** 116A · 0.0000\
−0.022957

![IFD R_cs (10,10), orbital 105A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_cs/1010_105A.svg)**a** 105A · 2.0000\
−0.313854

### R<sub>os</sub> {#geom-os}

R<sub>os</sub> · (2,2) · 2 orbitals · ΔE<sub>ST</sub> **+29.6** kcal mol⁻¹ · ΔE<sub>SQ</sub> **n/a**

SI configurations 2S = 0: 3, 2S = 2: 1 · wall time 170 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [IFD_S_os_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/IFD_S_os_22.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +1.969 | 2.18982 | H→L 100 % | H −1.00, L +1.00 |
| S2 | +3.586 | 0.00000 | H,H→L,L 100 % | H −2.00, L +2.00 |
| S3 | n/a | | | |
| S4 | n/a | | | |
| S5 | n/a | | | |
| T1 | +1.284 | | H→L 100 % | H −1.00, L +1.00 |
| T2 | n/a | | | |
| T3 | n/a | | | |
| Q1 | n/a | | | |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(a, b)

![IFD R_os (2,2), orbital 112A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_os/22_112A.svg)**b** 112A · 0.0002\
−0.147265

![IFD R_os (2,2), orbital 111A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_os/22_111A.svg)**a** 111A · 1.9998\
−0.209895

R<sub>os</sub> · (4,4) · 4 orbitals · ΔE<sub>ST</sub> **+30.4** · ΔE<sub>SQ</sub> **+72.5** kcal mol⁻¹

SI configurations 2S = 0: 18, 2S = 2: 11, 2S = 4: 1 · wall time 225 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [IFD_S_os_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/IFD_S_os_44.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +1.898 | 0.74757 | H→L 54 %, H−1→L 45 %, H−1,H→L,L+1 1 % | H−1 −0.46, H −0.54, L +0.99 |
| S2 | +2.306 | 2.31737 | H−1→L 52 %, H→L 46 %, H−1,H→L,L+1 2 % | H−1 −0.54, H −0.47, L +0.99 |
| S3 | +2.573 | 0.00000 | H→L+1 55 %, H,H→L,L 24 %, H−1→L+1 21 % | H−1 −0.23, H −1.03, L +0.48, L+1 +0.78 |
| S4 | +3.003 | 0.00000 | H−1→L+1 75 %, H,H→L,L 20 %, H,H→L+1,L+1 6 % | H−1 −0.72, H −0.52, L +0.38, L+1 +0.86 |
| S5 | +3.724 | 0.00000 | H→L+1 44 %, H,H→L,L 42 %, H−1,H−1→L,L 8 % | H−1 −0.23, H −1.29, L +0.93, L+1 +0.59 |
| T1 | +1.320 | | H→L 97 %, H−1→L 2 % | H −0.97, L +0.99 |
| T2 | +1.772 | | H−1→L 96 %, H−1,H→L,L+1 2 %, H→L 2 % | H−1 −0.98, L +0.99 |
| T3 | +2.188 | | H→L+1 97 %, H−1→L+1 2 % | H −0.96, L+1 +0.99 |
| Q1 | +3.145 | | H−1,H→L,L+1 100 % | H−1 −1.00, H −0.99, L +0.99, L+1 +0.99 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(b, c)

![IFD R_os (4,4), orbital 112A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_os/44_112A.svg)**c** 112A · 0.0004\
−0.160312

![IFD R_os (4,4), orbital 111A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_os/44_111A.svg)**b** 111A · 1.9996\
−0.212688

(a, d)

![IFD R_os (4,4), orbital 113A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_os/44_113A.svg)**d** 113A · 0.0000\
−0.135619

![IFD R_os (4,4), orbital 110A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_os/44_110A.svg)**a** 110A · 2.0000\
−0.230328

R<sub>os</sub> · (6,6) · 6 orbitals · ΔE<sub>ST</sub> **+26.0** · ΔE<sub>SQ</sub> **+70.2** kcal mol⁻¹

SI configurations 2S = 0: 161, 2S = 2: 153, 2S = 4: 41, 2S = 6: 1 · wall time 396 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [IFD_S_os_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/IFD_S_os_66.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +2.189 | 1.25915 | H→L 87 %, H−1→L 13 % | H −0.79, L +0.90 |
| S2 | +2.293 | 0.00000 | H,H→L,L 37 %, H→L+1 34 %, H−2→L 22 % | H−2 −0.33, H −1.02, L +0.91, L+1 +0.48 |
| S3 | +2.507 | 0.88366 | H−1→L 87 %, H→L 13 % | H−1 −0.86, L +0.91 |
| S4 | +3.144 | 0.00000 | H−1→L+1 95 %, H−2,H→L,L+1 5 % | H−1 −0.85, L+1 +0.94 |
| S5 | +3.288 | 0.00000 | H−2→L 52 %, H→L+1 48 % | H−2 −0.53, H −0.45, L +0.51, L+1 +0.46 |
| T1 | +1.128 | | H→L 84 %, H−2→L+1 16 % | H −0.77, L +0.79 |
| T2 | +1.533 | | H−2→L 51 %, H→L+1 49 % | H−2 −0.46, H −0.43, L +0.44, L+1 +0.48 |
| T3 | +2.066 | | H−1→L 97 %, H→L 3 % | H−1 −0.92, L +0.90 |
| Q1 | +3.046 | | H−2,H→L,L+1 84 %, H−2,H−1→L,L+1 16 % | H−2 −0.95, H−1 −0.16, H −0.77, L +0.92, L+1 +0.95 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(c, d)

![IFD R_os (6,6), orbital 112A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_os/66_112A.svg)**d** 112A · 0.0003\
−0.165594

![IFD R_os (6,6), orbital 111A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_os/66_111A.svg)**c** 111A · 1.9997\
−0.211416

(b, e)

![IFD R_os (6,6), orbital 113A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_os/66_113A.svg)**e** 113A · 0.0000\
−0.142150

![IFD R_os (6,6), orbital 110A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_os/66_110A.svg)**b** 110A · 2.0000\
−0.229093

(a, f)

![IFD R_os (6,6), orbital 114A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_os/66_114A.svg)**f** 114A · 0.0000\
−0.085321

![IFD R_os (6,6), orbital 109A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_os/66_109A.svg)**a** 109A · 2.0000\
−0.247437

R<sub>os</sub> · (8,8) · 8 orbitals · ΔE<sub>ST</sub> **+28.1** · ΔE<sub>SQ</sub> **+70.9** kcal mol⁻¹

SI configurations 2S = 0: 1 934, 2S = 2: 2 524, 2S = 4: 1 172, 2S = 6: 199, 2S = 8: 1 · wall time 647 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [IFD_S_os_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/IFD_S_os_88.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 11.7 % of the state | |
| S1 | +2.179 | 0.39248 | H−1→L 55 %, H→L 45 % | H−1 −0.52, H −0.36, L +0.86 |
| S2 | +2.370 | 0.00000 | listed configurations 13.8 % of the state | H−2 −0.32, H −0.93, L +0.86, L+1 +0.48 |
| S3 | +2.446 | 1.51251 | H→L 58 %, H−1→L 42 % | H−1 −0.40, H −0.47, L +0.85 |
| S4 | +2.772 | 0.00000 | H−1→L+1 58 %, H−3→L 42 % | H−3 −0.34, H−1 −0.45, H −0.16, L +0.48, L+1 +0.54 |
| S5 | +3.166 | 0.00000 | H−2→L 53 %, H→L+1 47 % | H−2 −0.47, H −0.39, L +0.46, L+1 +0.44 |
| T1 | +1.217 | | H→L 100 % | H −0.77, L +0.78 |
| T2 | +1.585 | | H→L+1 51 %, H−2→L 49 % | H−2 −0.44, H −0.44, L +0.42, L+1 +0.48 |
| T3 | +1.947 | | H−1→L 100 % | H−1 −0.87, L +0.82 |
| Q1 | +3.075 | | H−2,H→L,L+1 100 % | H−2 −0.88, H −0.84, L +0.91, L+1 +0.93 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(d, e)

![IFD R_os (8,8), orbital 112A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_os/88_112A.svg)**e** 112A · 0.0003\
−0.168732

![IFD R_os (8,8), orbital 111A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_os/88_111A.svg)**d** 111A · 1.9997\
−0.211188

(c, f)

![IFD R_os (8,8), orbital 113A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_os/88_113A.svg)**f** 113A · 0.0000\
−0.145373

![IFD R_os (8,8), orbital 110A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_os/88_110A.svg)**c** 110A · 2.0000\
−0.228485

(b, g)

![IFD R_os (8,8), orbital 114A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_os/88_114A.svg)**g** 114A · 0.0000\
−0.097260

![IFD R_os (8,8), orbital 109A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_os/88_109A.svg)**b** 109A · 2.0000\
−0.246573

(a, h)

![IFD R_os (8,8), orbital 115A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_os/88_115A.svg)**h** 115A · 0.0000\
−0.062949

![IFD R_os (8,8), orbital 108A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_os/88_108A.svg)**a** 108A · 2.0000\
−0.263004

R<sub>os</sub> · (10,10) · 10 orbitals · ΔE<sub>ST</sub> **+28.0** · ΔE<sub>SQ</sub> **+68.1** kcal mol⁻¹

SI configurations 2S = 0: 29 082, 2S = 2: 48 090, 2S = 4: 31 275, 2S = 6: 9 635, 2S = 8: 1 209, 2S = 10: 1 · wall time 2489 s, 8 threads · fenrir04, 2026-10-16 · Psi4 d40267fc2 · input [IFD_S_os_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/IFD_S_os_1010.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 2.4 % of the state | |
| S1 | +2.173 | 0.52281 | listed configurations 6.0 % of the state | H−1 −0.45, H −0.43, L +0.86 |
| S2 | +2.419 | 0.00000 | listed configurations 3.3 % of the state | H−2 −0.32, H −0.88, L +0.82, L+1 +0.47 |
| S3 | +2.429 | 1.43126 | listed configurations 5.7 % of the state | H−1 −0.46, H −0.39, L +0.83 |
| S4 | +2.779 | 0.00000 | listed configurations 5.1 % of the state | H−3 −0.34, H−1 −0.42, H −0.21, L +0.51, L+1 +0.52 |
| S5 | +3.124 | 0.00000 | listed configurations 5.1 % of the state | H−2 −0.45, H −0.38, L +0.45, L+1 +0.43 |
| T1 | +1.215 | | listed configurations 9.9 % of the state | H −0.77, L +0.77 |
| T2 | +1.591 | | listed configurations 6.0 % of the state | H−2 −0.43, H −0.43, L +0.43, L+1 +0.47 |
| T3 | +1.967 | | listed configurations 10.5 % of the state | H−1 −0.86, L +0.81 |
| Q1 | +2.953 | | H−2,H→L,L+1 100 % | H−2 −0.80, H −0.86, L +0.91, L+1 +0.93 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(e, f)

![IFD R_os (10,10), orbital 112A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_os/1010_112A.svg)**f** 112A · 0.0003\
−0.171579

![IFD R_os (10,10), orbital 111A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_os/1010_111A.svg)**e** 111A · 1.9997\
−0.211183

(d, g)

![IFD R_os (10,10), orbital 113A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_os/1010_113A.svg)**g** 113A · 0.0000\
−0.148811

![IFD R_os (10,10), orbital 110A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_os/1010_110A.svg)**d** 110A · 2.0000\
−0.229326

(c, h)

![IFD R_os (10,10), orbital 114A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_os/1010_114A.svg)**h** 114A · 0.0000\
−0.099107

![IFD R_os (10,10), orbital 109A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_os/1010_109A.svg)**c** 109A · 2.0000\
−0.245640

(b, i)

![IFD R_os (10,10), orbital 115A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_os/1010_115A.svg)**i** 115A · 0.0000\
−0.068346

![IFD R_os (10,10), orbital 108A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_os/1010_108A.svg)**b** 108A · 2.0000\
−0.263414

(a, j)

![IFD R_os (10,10), orbital 116A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_os/1010_116A.svg)**j** 116A · 0.0000\
−0.022957

![IFD R_os (10,10), orbital 105A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_S_os/1010_105A.svg)**a** 105A · 2.0000\
−0.313521

### R<sub>T</sub> {#geom-t}

R<sub>T</sub> · (2,2) · 2 orbitals · ΔE<sub>ST</sub> **+7.0** kcal mol⁻¹ · ΔE<sub>SQ</sub> **n/a**

SI configurations 2S = 0: 3, 2S = 2: 1 · wall time 304 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [IFD_T_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/IFD_T_22.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +1.755 | 1.34589 | H→L 100 % | H −0.66, L +0.66 |
| S2 | +2.196 | 0.00102\* | H,H→L,L 100 % | H −1.33, L +1.33 |
| S3 | n/a | | | |
| S4 | n/a | | | |
| S5 | n/a | | | |
| T1 | +0.305 | | H→L 100 % | H −0.66, L +0.66 |
| T2 | n/a | | | |
| T3 | n/a | | | |
| Q1 | n/a | | | |

\* f (length) and f (velocity) differ by more than 3× (tested when f > 10<sup>−3</sup>).

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(a, b)

![IFD R_T (2,2), orbital 112A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_T/22_112A.svg)**b** 112A · 0.3362\
−0.161623

![IFD R_T (2,2), orbital 111A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_T/22_111A.svg)**a** 111A · 1.6638\
−0.191326

R<sub>T</sub> · (4,4) · 4 orbitals · ΔE<sub>ST</sub> **+10.3** · ΔE<sub>SQ</sub> **+55.3** kcal mol⁻¹

SI configurations 2S = 0: 18, 2S = 2: 11, 2S = 4: 1 · wall time 558 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [IFD_T_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/IFD_T_44.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 97 %, H→L+1 3 % | |
| S1 | +1.611 | 0.11030 | H−1→L 41 %, H,H→L,L 27 %, H→L+1 18 % | H−1 −0.46, H −0.34, L +0.50, L+1 +0.30 |
| S2 | +1.755 | 0.20611 | H−1→L 32 %, H,H→L,L 28 %, H→L 21 % | H−1 −0.35, H −0.44, L +0.50, L+1 +0.28 |
| S3 | +2.239 | 1.80726 | H→L 77 %, H−1→L 21 %, H−1,H→L,L+1 2 % | H−1 −0.24, H −0.39, L +0.61 |
| S4 | +2.874 | 0.01224\* | H−1→L+1 86 %, H,H→L,L 11 %, H→L+1 3 % | H−1 −0.85, L+1 +0.85 |
| S5 | +3.459 | 0.00859 | H→L+1 51 %, H,H→L,L 30 %, H−1→L+1 12 % | H −0.85, L +0.28, L+1 +0.71 |
| T1 | +0.446 | | H→L 98 %, H−1→L 1 %, H−1,H→L,L+1 1 % | H −0.57, L +0.61 |
| T2 | +1.524 | | H−1→L 86 %, H−1,H→L,L+1 12 %, H→L 2 % | H−1 −0.97, H +0.22, L +0.60, L+1 +0.15 |
| T3 | +2.127 | | H→L+1 85 %, H−1→L+1 14 %, H−1,H→L,L+1 1 % | H−1 −0.16, H −0.46, L −0.34, L+1 +0.96 |
| Q1 | +2.397 | | H−1,H→L,L+1 100 % | H−1 −1.00, H −0.58, L +0.61, L+1 +0.97 |

\* f (length) and f (velocity) differ by more than 3× (tested when f > 10<sup>−3</sup>).

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(b, c)

![IFD R_T (4,4), orbital 112A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_T/44_112A.svg)**c** 112A · 0.3678\
−0.175206

![IFD R_T (4,4), orbital 111A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_T/44_111A.svg)**b** 111A · 1.6322\
−0.198234

(a, d)

![IFD R_T (4,4), orbital 113A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_T/44_113A.svg)**d** 113A · 0.0000\
−0.137762

![IFD R_T (4,4), orbital 110A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_T/44_110A.svg)**a** 110A · 2.0000\
−0.232704

R<sub>T</sub> · (6,6) · 6 orbitals · ΔE<sub>ST</sub> **+10.7** · ΔE<sub>SQ</sub> **+58.4** kcal mol⁻¹

SI configurations 2S = 0: 161, 2S = 2: 153, 2S = 4: 41, 2S = 6: 1 · wall time 427 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [IFD_T_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/IFD_T_66.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +1.250 | 0.00000 | H→L+1 37 %, H,H→L,L 33 %, H−2→L 30 % | H−2 −0.36, H −0.50, L +0.43, L+1 +0.44 |
| S2 | +1.962 | 0.49381\* | H−1→L 51 %, H→L 41 %, H−1,H→L,L+1 8 % | H−1 −0.60, L +0.56 |
| S3 | +2.437 | 1.22750 | H→L 63 %, H−1→L 37 % | H−1 −0.41, H −0.23, L +0.55 |
| S4 | +2.804 | 0.00005 | H,H→L,L 62 %, H−2,H→L,L+1 23 %, H→L+1 15 % | H−2 −0.19, H −0.87, L +0.78, L+1 +0.29 |
| S5 | +3.081 | 0.00634 | H−1→L+1 74 %, H−2→L 13 %, H→L+1 12 % | H−2 −0.18, H−1 −0.69, L+1 +0.80 |
| T1 | +0.466 | | H→L 96 %, H−2→L+1 4 % | H −0.55, L +0.55 |
| T2 | +1.449 | | H→L+1 45 %, H−2→L 38 %, H−2,H→L,L+1 17 % | H−2 −0.51, H −0.22, L +0.16, L+1 +0.57 |
| T3 | +1.873 | | H−1→L 92 %, H−1,H→L,L+1 8 % | H−1 −0.96, H +0.24, L +0.56 |
| Q1 | +2.534 | | H−2,H→L,L+1 82 %, H−1,H→L,L+1 18 % | H−2 −0.75, H−1 −0.19, H −0.56, L +0.57, L+1 +0.93 |

\* f (length) and f (velocity) differ by more than 3× (tested when f > 10<sup>−3</sup>).

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(c, d)

![IFD R_T (6,6), orbital 112A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_T/66_112A.svg)**d** 112A · 0.3850\
−0.183368

![IFD R_T (6,6), orbital 111A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_T/66_111A.svg)**c** 111A · 1.6150\
−0.200288

(b, e)

![IFD R_T (6,6), orbital 113A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_T/66_113A.svg)**e** 113A · 0.0000\
−0.147213

![IFD R_T (6,6), orbital 110A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_T/66_110A.svg)**b** 110A · 2.0000\
−0.232016

(a, f)

![IFD R_T (6,6), orbital 114A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_T/66_114A.svg)**f** 114A · 0.0000\
−0.090168

![IFD R_T (6,6), orbital 109A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_T/66_109A.svg)**a** 109A · 2.0000\
−0.249138

R<sub>T</sub> · (8,8) · 8 orbitals · ΔE<sub>ST</sub> **+11.0** · ΔE<sub>SQ</sub> **+58.0** kcal mol⁻¹

SI configurations 2S = 0: 1 934, 2S = 2: 2 524, 2S = 4: 1 172, 2S = 6: 199, 2S = 8: 1 · wall time 776 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [IFD_T_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/IFD_T_88.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 36.0 % of the state | |
| S1 | +1.242 | 0.00005 | listed configurations 14.1 % of the state | H−2 −0.35, H −0.60, L +0.52, L+1 +0.44 |
| S2 | +1.862 | 0.19300\* | H−1→L 100 % | H−1 −0.76, L +0.60 |
| S3 | +2.400 | 1.43458\* | H→L 100 % | H−1 −0.21, H −0.41, L +0.57 |
| S4 | +2.702 | 0.00098 | H−3→L 59 %, H−1→L+1 41 % | H−3 −0.54, H−1 −0.39, H +0.21, L +0.32, L+1 +0.40 |
| S5 | +2.811 | 0.00046 | H,H→L,L 79 %, H−2,H→L,L+1 21 % | H−2 −0.17, H −0.87, L +0.75, L+1 +0.34 |
| T1 | +0.479 | | H→L 100 % | H −0.60, L +0.60 |
| T2 | +1.433 | | H→L+1 54 %, H−2→L 46 % | H−2 −0.50, H −0.27, L +0.21, L+1 +0.57 |
| T3 | +1.726 | | H−1→L 100 % | H−1 −0.92, H +0.23, L +0.59 |
| Q1 | +2.516 | | H−2,H→L,L+1 76 %, H−1,H→L,L+1 24 % | H−2 −0.69, H−1 −0.23, H −0.62, L +0.62, L+1 +0.93 |

\* f (length) and f (velocity) differ by more than 3× (tested when f > 10<sup>−3</sup>).

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(d, e)

![IFD R_T (8,8), orbital 112A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_T/88_112A.svg)**e** 112A · 0.4061\
−0.189581

![IFD R_T (8,8), orbital 111A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_T/88_111A.svg)**d** 111A · 1.5939\
−0.201690

(c, f)

![IFD R_T (8,8), orbital 113A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_T/88_113A.svg)**f** 113A · 0.0000\
−0.147505

![IFD R_T (8,8), orbital 110A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_T/88_110A.svg)**c** 110A · 2.0000\
−0.229939

(b, g)

![IFD R_T (8,8), orbital 114A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_T/88_114A.svg)**g** 114A · 0.0000\
−0.102232

![IFD R_T (8,8), orbital 109A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_T/88_109A.svg)**b** 109A · 2.0000\
−0.248198

(a, h)

![IFD R_T (8,8), orbital 115A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_T/88_115A.svg)**h** 115A · 0.0000\
−0.065600

![IFD R_T (8,8), orbital 108A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_T/88_108A.svg)**a** 108A · 2.0000\
−0.260041

R<sub>T</sub> · (10,10) · 10 orbitals · ΔE<sub>ST</sub> **+10.6** · ΔE<sub>SQ</sub> **+58.4** kcal mol⁻¹

SI configurations 2S = 0: 29 082, 2S = 2: 48 090, 2S = 4: 31 275, 2S = 6: 9 635, 2S = 8: 1 209, 2S = 10: 1 · wall time 1242 s, 96 threads · chawk02, 2026-10-16 · Psi4 2424fb773 · input [IFD_T_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/IFD_T_1010.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 3.9 % of the state | |
| S1 | +1.274 | 0.00009 | listed configurations 3.9 % of the state | H−2 −0.31, H −0.65, L +0.54, L+1 +0.43 |
| S2 | +1.806 | 0.26802\* | listed configurations 7.8 % of the state | H−1 −0.73, L +0.62 |
| S3 | +2.353 | 1.49010\* | listed configurations 8.4 % of the state | H−1 −0.23, H −0.41, L +0.60 |
| S4 | +2.682 | 0.00129 | listed configurations 7.2 % of the state | H−3 −0.46, H−1 −0.45, L +0.30, L+1 +0.44 |
| S5 | +2.747 | 0.00438\* | listed configurations 5.7 % of the state | H−2 −0.18, H −0.81, L +0.63, L+1 +0.44 |
| T1 | +0.461 | | listed configurations 11.4 % of the state | H −0.63, L +0.63 |
| T2 | +1.472 | | listed configurations 5.4 % of the state | H−2 −0.48, H −0.31, L +0.21, L+1 +0.59 |
| T3 | +1.689 | | listed configurations 9.9 % of the state | H−1 −0.91, H +0.19, L +0.62 |
| Q1 | +2.534 | | listed configurations 14.7 % of the state | H−2 −0.56, H−1 −0.37, H −0.64, L +0.65, L+1 +0.92 |

\* f (length) and f (velocity) differ by more than 3× (tested when f > 10<sup>−3</sup>).

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(e, f)

![IFD R_T (10,10), orbital 112A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_T/1010_112A.svg)**f** 112A · 0.4207\
−0.192717

![IFD R_T (10,10), orbital 111A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_T/1010_111A.svg)**e** 111A · 1.5793\
−0.200976

(d, g)

![IFD R_T (10,10), orbital 113A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_T/1010_113A.svg)**g** 113A · 0.0000\
−0.149531

![IFD R_T (10,10), orbital 110A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_T/1010_110A.svg)**d** 110A · 2.0000\
−0.229895

(c, h)

![IFD R_T (10,10), orbital 114A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_T/1010_114A.svg)**h** 114A · 0.0000\
−0.105453

![IFD R_T (10,10), orbital 109A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_T/1010_109A.svg)**c** 109A · 2.0000\
−0.246563

(b, i)

![IFD R_T (10,10), orbital 115A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_T/1010_115A.svg)**i** 115A · 0.0000\
−0.072388

![IFD R_T (10,10), orbital 108A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_T/1010_108A.svg)**b** 108A · 2.0000\
−0.259297

(a, j)

![IFD R_T (10,10), orbital 116A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_T/1010_116A.svg)**j** 116A · 0.0000\
−0.021680

![IFD R_T (10,10), orbital 107A](https://reksstudio.github.io/v2/figures/zeth/orb/IFD_T/1010_107A.svg)**a** 107A · 2.0000\
−0.295580

[← PIF](https://reksstudio.github.io/v2/main/results/zethrenes/pif/index.md) · [Back to the compounds](https://reksstudio.github.io/v2/main/results/zethrenes/index.md#c-ifd) · [PF →](https://reksstudio.github.io/v2/main/results/zethrenes/pf/index.md)

## Linked files

[inputs/zethrenes/IFD_S_cs_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/IFD_S_cs_22.py.txt)

[inputs/zethrenes/IFD_S_cs_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/IFD_S_cs_44.py.txt)

[inputs/zethrenes/IFD_S_cs_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/IFD_S_cs_66.py.txt)

[inputs/zethrenes/IFD_S_cs_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/IFD_S_cs_88.py.txt)

[inputs/zethrenes/IFD_S_cs_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/IFD_S_cs_1010.py.txt)

[inputs/zethrenes/IFD_S_os_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/IFD_S_os_22.py.txt)

[inputs/zethrenes/IFD_S_os_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/IFD_S_os_44.py.txt)

[inputs/zethrenes/IFD_S_os_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/IFD_S_os_66.py.txt)

[inputs/zethrenes/IFD_S_os_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/IFD_S_os_88.py.txt)

[inputs/zethrenes/IFD_S_os_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/IFD_S_os_1010.py.txt)

[inputs/zethrenes/IFD_T_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/IFD_T_22.py.txt)

[inputs/zethrenes/IFD_T_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/IFD_T_44.py.txt)

[inputs/zethrenes/IFD_T_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/IFD_T_66.py.txt)

[inputs/zethrenes/IFD_T_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/IFD_T_88.py.txt)

[inputs/zethrenes/IFD_T_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/IFD_T_1010.py.txt)
