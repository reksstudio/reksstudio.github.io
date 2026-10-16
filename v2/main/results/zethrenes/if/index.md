# IF: Indenofluorene — Zethrenes — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/zethrenes/if/>

Psi4 builds of these outputs: b0c2d45a7, d40267fc2, 2424fb773 (kk/reks.v42), named on each run line. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# Indenofluorene (IF)

C<sub>20</sub>H<sub>12</sub>, 32 atoms, 768 basis functions (cc-pVTZ); compound 1g of Hu et al. (2016). Geometries: R<sub>cs</sub>, R<sub>T</sub>. Hu et al. (2016) give no R<sub>os</sub> for IF.

[R<sub>cs</sub> (10,10) details](https://reksstudio.github.io/v2/main/results/zethrenes/if/index.md#cs-1010) · [R<sub>T</sub> (10,10) details](https://reksstudio.github.io/v2/main/results/zethrenes/if/index.md#t-1010)

[Spin gaps](https://reksstudio.github.io/v2/main/results/zethrenes/if/index.md#gaps) · [Energies across geometries](https://reksstudio.github.io/v2/main/results/zethrenes/if/index.md#geometries) · [SI states](https://reksstudio.github.io/v2/main/results/zethrenes/if/index.md#states) · [Natural occupations](https://reksstudio.github.io/v2/main/results/zethrenes/if/index.md#occupations) · [vs experiment](https://reksstudio.github.io/v2/main/results/zethrenes/if/index.md#experiment) · [Calculations](https://reksstudio.github.io/v2/main/results/zethrenes/if/index.md#calculations)

![IF: drawing of the R_cs geometry](https://reksstudio.github.io/v2/figures/zeth/mol/IF.svg)

R<sub>cs</sub> geometry, 16 px/Å: explicit hydrogens, no bond orders.

* C
* H

## Spin gaps

ΔE<sub>ST</sub> = E(T1) − E(S0), ΔE<sub>SQ</sub> = E(Q1) − E(S0)

Same geometry, same active space; S0, T1, Q1 = lowest state with 2S = 0, 2, 4; positive: T1 (Q1) above S0. Spin gaps and ΔE<sub>geom</sub> in kcal mol⁻¹ (1 decimal, with sign); SI state energies E − E(S0) in eV.

R<sub>cs</sub>, R<sub>os</sub>, R<sub>T</sub>: optima of the closed-shell singlet, the broken-symmetry open-shell singlet and the triplet (SI appendix blocks “Singlet Closed Shell”, “Singlet Biradical Open Shell”, “Triplet”; UCAM-B3LYP/6-31G\*, Hu et al. 2016, SI p. S16).

ΔE<sub>ST</sub> / kcal mol<sup>−1</sup>

| Active space | R<sub>cs</sub> | R<sub>T</sub> |
| - | - | - |
| (2,2) | +38.1 | +16.4 |
| (4,4) | +40.2 | +19.6 |
| (6,6) | – | +20.4 |
| (8,8) | +45.1 | +20.9 |
| (10,10) | +40.1 | +21.8 |

ΔE<sub>SQ</sub> / kcal mol<sup>−1</sup>

| Active space | R<sub>cs</sub> | R<sub>T</sub> |
| - | - | - |
| (2,2) | n/a | n/a |
| (4,4) | +117.7 | +95.8 |
| (6,6) | – | +99.4 |
| (8,8) | +119.5 | +95.9 |
| (10,10) | +116.4 | +98.1 |

–: not computed; n/a: no 2S = 4 state in the SI space of this active space.

## Energies across geometries

ΔE<sub>geom</sub>(X, R) = E<sub>X</sub>(R) − E<sub>S0</sub>(R<sub>cs</sub>)

Same active space; zero = E(S0) at R<sub>cs</sub>; SI-SA-REKS electronic energies; positive: above the zero. –: not computed.

ΔE<sub>geom</sub> / kcal mol<sup>−1</sup>

| Active space | State | R<sub>cs</sub> | R<sub>T</sub> |
| - | - | - | - |
| (2,2) | S0 | 0.0 | +9.1 |
| | T1 | +38.1 | +25.5 |
| | Q1 | n/a | n/a |
| (4,4) | S0 | 0.0 | +6.4 |
| | T1 | +40.2 | +26.0 |
| | Q1 | +117.7 | +102.2 |
| (6,6) | – | – | – |
| (8,8) | S0 | 0.0 | +8.0 |
| | T1 | +45.1 | +29.0 |
| | Q1 | +119.5 | +103.9 |
| (10,10) | S0 | 0.0 | +7.4 |
| | T1 | +40.1 | +29.2 |
| | Q1 | +116.4 | +105.5 |

## SI states along the ladder

* 2S = 0: S0–S5
* 2S = 2: T1–T3
* 2S = 4: Q1

IF R_cs: SI states per active space, E − E(S0) / eV, 0 to 5.5, joined across active spaces; numbers in the tables below

IF R_T: SI states per active space, E − E(S0) / eV, 0 to 5.5, joined across active spaces; numbers in the tables below

One column per active space and one level per SI state shown on this page at E − E(S0) / eV (same geometry and active space); colour = 2S; levels closer than about 0.08 eV sit side by side. A thin line joins a level to one level of the same 2S at the next computed active space when their leading excitation patterns agree (same dominant pattern, or pattern weights that overlap by at least one half) or their density changes ΔD differ by at most 0.15; the joins are one-to-one, as many as the rule allows. A level without a line has no such partner among the shown states. Patterns come from the leading configurations listed in the output (the three largest, then every further one above 5 %); at (8,8) and (10,10) these often carry a small share of the state, which the hover gives. ΔD: change of the active orbital occupations (diagonal of the active one-particle density) from S0. H−k … H, L … L+k: bonding and antibonding active orbitals in pair order, H and L the frontier pair; H→L moves one electron, H,H→L,L two. –: not computed, a dashed line spans it; Q1 at (2,2): n/a. Spin gaps on this page in kcal mol⁻¹, SI state energies in eV; the T1 level of each column is E(T1) − E(S0).

Table: threads per geometry

R<sub>cs</sub>: threads

| 2S | Active spaces | Threads |
| - | - | - |
| 0 | (2,2) → (4,4) | S0→S0, S1→S2, S2→S4 |
| | (4,4) → (8,8) | S0→S0, S1→S1, S2→S2, S3→S4 |
| | (8,8) → (10,10) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S4, S5→S5 |
| 2 | (2,2) → (4,4) | T1→T1 |
| | (4,4) → (8,8) | T1→T1, T2→T2 |
| | (8,8) → (10,10) | T1→T1, T2→T2, T3→T3 |
| 4 | (4,4) → (8,8) | Q1→Q1 |
| | (8,8) → (10,10) | Q1→Q1 |

R<sub>T</sub>: threads

| 2S | Active spaces | Threads |
| - | - | - |
| 0 | (2,2) → (4,4) | S0→S0, S1→S2, S2→S3 |
| | (4,4) → (6,6) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S4 |
| | (6,6) → (8,8) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S4 |
| | (8,8) → (10,10) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S4 |
| 2 | (2,2) → (4,4) | T1→T1 |
| | (4,4) → (6,6) | T1→T1, T2→T2 |
| | (6,6) → (8,8) | T1→T1, T2→T2 |
| | (8,8) → (10,10) | T1→T1, T2→T2, T3→T3 |
| 4 | (4,4) → (6,6) | Q1→Q1 |
| | (6,6) → (8,8) | Q1→Q1 |
| | (8,8) → (10,10) | Q1→Q1 |

## Natural occupations

R<sub>cs</sub>

IF R_cs, S0: natural occupations per active space in the order printed, 0 to 2; y0, y1

IF R_cs, T1: natural occupations per active space in the order printed, 0 to 2

IF R_cs, Q1: natural occupations per active space in the order printed, 0 to 2

R<sub>T</sub>

IF R_T, S0: natural occupations per active space in the order printed, 0 to 2; y0, y1

IF R_T, T1: natural occupations per active space in the order printed, 0 to 2

IF R_T, Q1: natural occupations per active space in the order printed, 0 to 2

Natural occupations n<sub>i</sub> of the SI state (0 to 2, the cell is 2), the "occ" line of the output block "Natural orbitals of the active space" in the order printed, centred on the HOMO | LUMO divide (dashed), so an orbital keeps its column along the ladder; y<sub>0</sub> = n<sub>LUNO</sub>, y<sub>1</sub> = n<sub>LUNO+1</sub>, as the code prints them; y<sub>0</sub>, y<sub>1</sub> for S0 only (n/a for T1, Q1); otherwise n/a: no such state or orbital in the SI space of this active space.

## REKS vs experiment

Absorption maximum: Δ +0.61 to +0.72 eV, 2 molecules (1 core)

* experiment: substituted derivative; absorption maximum in solution
* REKS, parent hydrocarbon, isolated molecule (gas phase), one dot per active space, the larger at the last:
* (2,2)
* (4,4)
* (6,6)
* (8,8)
* (10,10)
* Δ = REKS(10,10) − experiment / eV

Absorption maximum / eV, experiment and REKS(10,10): 2 molecules; values in Table 2 of the details

(8,8) → (10,10): absorption +0.07 eV; every active space in the details.

Experiment. Absorption: band maximum in solution (Hu et al. 2016). Substituents: mesityl (M), 3,5-bis(CF3)phenyl (CF3).

REKS. Parent hydrocarbon without substituents, isolated molecule (gas phase); SI-SA-REKS(10,10)/BH\&HLYP/cc-pVTZ at the UCAM-B3LYP/6-31G\* geometries of Hu et al. (2016), not reoptimized; electronic energies without zero-point energy; absorption as a vertical energy.

Tables, definitions and every active space

Absorption: E(Sn) − E(S0) at R<sub>cs</sub>, vertical (no Sn geometry computed); Sn: the H→L-led singlet of largest f; experiment E = 1239.84 / λ(nm)

Δ = REKS − experiment, from energies in E<sub>h</sub>

Absorption maximum / eV; REKS at (10,10)

| Molecule | λ / nm | Exp. | REKS | Δ | Sn · f |
| - | - | - | - | - | - |
| IF-M | 515 | 2.407 | 3.017 | +0.61 | S2 · 0.90 |
| IF-CF3 | 541 | 2.292 | 3.017 | +0.72 | S2 · 0.90 |

Solvent: CH<sub>2</sub>Cl<sub>2</sub>: IF-M; toluene: IF-CF3 (Hu et al. 2016, SI Fig. S12 caption).

Hu et al. 2016, p. 1068, on the one-photon spectra: “Their one-photon absorption spectra (OPA) in dichloromethane (DCM) are shown in Figure 2d and Figure S12”; the SI Fig. S12 caption names toluene.

The authors' TD-DFT (B3LYP/6-31G\*) assigns the band to HOMO→LUMO for IF-M. IF-CF3: the same band of the core, not assigned in the source.

REKS along the active-space ladder / eV

| Core | | (2,2) | (4,4) | (6,6) | (8,8) | (10,10) | R<sub>cs</sub> |
| - | - | - | - | - | - | - | - |
| IF | Sn | 2.996 | 2.905 | – | 2.949 | 3.017 | 3.017 |

Sn: S0 → Sn (H→L) at R<sub>cs</sub>, Sn chosen per active space by the rule of Table 2.

R<sub>cs</sub>: the same quantity at (10,10) and R<sub>cs</sub>. –: not computed.

Sources: Hu et al. 2016, Table 2 (IF-M, IF-CF3), [doi:10.1021/jacs.5b12532](https://doi.org/10.1021/jacs.5b12532).

[All compounds](https://reksstudio.github.io/v2/main/results/zethrenes/index.md#experiment)

## Calculations

One entry per geometry and active space; the summary gives ΔE<sub>ST</sub>, ΔE<sub>SQ</sub> / kcal mol⁻¹ to 1 decimal. Inside: the run line, the SI states (f (length) of S0 → Sn; leading excitation patterns as a share of the listed configurations, given where these carry at least half of the state, else the listed share; ΔD entries with |ΔD| ≥ 0.15, as in the hover of the SI-state chart), the SA-REKS active orbitals and the input. Inputs as run; starting orbitals read from a seed file (RKS or ROHF orbitals; for HZ and HZD the orbitals of an earlier REKS(2,2) run), active pairs set per rung.

Orbitals: one column per active pair as the code pairs them, frontier pair first, antibonding orbital above, bonding below. Contours ±0.01, ±0.02, ±0.04 a.u. in a plane 0.6 Å above the molecular plane; blue + / copper −.

### R<sub>cs</sub> {#geom-cs}

R<sub>cs</sub> · (2,2) · 2 orbitals · ΔE<sub>ST</sub> **+38.1** kcal mol⁻¹ · ΔE<sub>SQ</sub> **n/a**

SI configurations 2S = 0: 3, 2S = 2: 1 · wall time 46 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [IF_S_cs_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/IF_S_cs_22.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +2.996 | 1.67247 | H→L 100 % | H −1.00, L +1.00 |
| S2 | +4.851 | 0.00000 | H,H→L,L 100 % | H −1.99, L +1.99 |
| S3 | n/a | | | |
| S4 | n/a | | | |
| S5 | n/a | | | |
| T1 | +1.653 | | H→L 100 % | H −1.00, L +1.00 |
| T2 | n/a | | | |
| T3 | n/a | | | |
| Q1 | n/a | | | |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(a, b)

![IF R_cs (2,2), orbital 67A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_S_cs/22_67A.svg)**b** 67A · 0.0031\
−0.144182

![IF R_cs (2,2), orbital 66A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_S_cs/22_66A.svg)**a** 66A · 1.9969\
−0.231328

R<sub>cs</sub> · (4,4) · 4 orbitals · ΔE<sub>ST</sub> **+40.2** · ΔE<sub>SQ</sub> **+117.7** kcal mol⁻¹

SI configurations 2S = 0: 18, 2S = 2: 11, 2S = 4: 1 · wall time 171 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [IF_S_cs_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/IF_S_cs_44.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 99 %, H−1,H→L,L+1 1 % | |
| S1 | +2.606 | 0.00000 | H−1→L 95 %, H,H→L,L 3 %, H−1,H−1→L,L 2 % | H−1 −0.98, L +1.02 |
| S2 | +2.905 | 0.85791 | H→L 95 %, H−1→L+1 5 % | H −0.94, L +0.93 |
| S3 | +4.272 | 0.00000 | H→L+1 98 %, H−1,H→L,L+1 2 % | H −0.98, L+1 +0.99 |
| S4 | +4.727 | 0.00000 | H,H→L,L 86 %, H−1,H−1→L,L 8 %, H−1,H→L,L+1 5 % | H−1 −0.25, H −1.69, L +1.85 |
| S5 | +4.748 | 2.08864 | H−1→L+1 94 %, H→L 4 %, H−1,H,H→L,L,L+1 1 % | H−1 −0.95, L+1 +0.96 |
| T1 | +1.742 | | H→L 100 % | H −0.98, L +0.98 |
| T2 | +2.363 | | H−1→L 98 %, H→L+1 1 %, H−1,H→L,L+1 1 % | H−1 −0.99, L +0.97 |
| T3 | +3.990 | | H→L+1 97 %, H−1,H→L,L+1 2 %, H−1→L 1 % | H −0.97, L+1 +0.99 |
| Q1 | +5.103 | | H−1,H→L,L+1 100 % | H−1 −0.99, H −0.98, L +0.98, L+1 +0.99 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(b, c)

![IF R_cs (4,4), orbital 67A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_S_cs/44_67A.svg)**c** 67A · 0.0022\
−0.152660

![IF R_cs (4,4), orbital 66A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_S_cs/44_66A.svg)**b** 66A · 1.9978\
−0.233343

(a, d)

![IF R_cs (4,4), orbital 68A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_S_cs/44_68A.svg)**d** 68A · 0.0000\
−0.089876

![IF R_cs (4,4), orbital 65A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_S_cs/44_65A.svg)**a** 65A · 2.0000\
−0.244623

R<sub>cs</sub> · (6,6) · – (not computed)

R<sub>cs</sub> · (8,8) · 8 orbitals · ΔE<sub>ST</sub> **+45.1** · ΔE<sub>SQ</sub> **+119.5** kcal mol⁻¹

SI configurations 2S = 0: 1 934, 2S = 2: 2 524, 2S = 4: 1 172, 2S = 6: 199, 2S = 8: 1 · wall time 268 s, 8 threads · fenrir04, 2026-10-16 · Psi4 d40267fc2 · input [IF_S_cs_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/IF_S_cs_88.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 12.0 % of the state | |
| S1 | +2.645 | 0.00000 | H−1→L 100 % | H−1 −0.96, L +0.98 |
| S2 | +2.949 | 0.87070 | H→L 100 % | H −0.90, L +0.90 |
| S3 | +4.078 | 0.00000 | listed configurations 49.8 % of the state | H−3 −0.53, H −0.52, L +0.86, L+1 +0.20 |
| S4 | +4.436 | 0.00000 | H→L+1 100 % | H −0.99, L +0.34, L+1 +0.70 |
| S5 | +4.632 | 0.55105 | H−2→L 61 %, H−1→L+1 39 % | H−2 −0.58, H−1 −0.38, L +0.59, L+1 +0.37 |
| T1 | +1.957 | | H→L 100 % | H −0.94, L +0.95 |
| T2 | +2.355 | | H−1→L 100 % | H−1 −0.95, L +0.93 |
| T3 | +3.564 | | H−1→L+1 60 %, H−2→L 40 % | H−2 −0.40, H−1 −0.55, L +0.35, L+1 +0.55 |
| Q1 | +5.181 | | H−1,H→L,L+1 100 % | H−1 −0.91, H −0.93, L +0.94, L+1 +0.91 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(d, e)

![IF R_cs (8,8), orbital 67A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_S_cs/88_67A.svg)**e** 67A · 0.0004\
−0.160256

![IF R_cs (8,8), orbital 66A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_S_cs/88_66A.svg)**d** 66A · 1.9996\
−0.233506

(c, f)

![IF R_cs (8,8), orbital 68A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_S_cs/88_68A.svg)**f** 68A · 0.0000\
−0.107712

![IF R_cs (8,8), orbital 65A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_S_cs/88_65A.svg)**c** 65A · 2.0000\
−0.245361

(b, g)

![IF R_cs (8,8), orbital 69A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_S_cs/88_69A.svg)**g** 69A · 0.0000\
−0.066516

![IF R_cs (8,8), orbital 64A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_S_cs/88_64A.svg)**b** 64A · 2.0000\
−0.296863

(a, h)

![IF R_cs (8,8), orbital 70A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_S_cs/88_70A.svg)**h** 70A · 0.0000\
−0.055745

![IF R_cs (8,8), orbital 63A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_S_cs/88_63A.svg)**a** 63A · 2.0000\
−0.297318

R<sub>cs</sub> · (10,10) · 10 orbitals · ΔE<sub>ST</sub> **+40.1** · ΔE<sub>SQ</sub> **+116.4** kcal mol⁻¹

SI configurations 2S = 0: 29 082, 2S = 2: 48 090, 2S = 4: 31 275, 2S = 6: 9 635, 2S = 8: 1 209, 2S = 10: 1 · wall time 2010 s, 8 threads · fenrir04, 2026-10-16 · Psi4 d40267fc2 · input [IF_S_cs_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/IF_S_cs_1010.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 2.4 % of the state | |
| S1 | +2.813 | 0.00000 | listed configurations 10.8 % of the state | H−1 −0.95, L +0.94 |
| S2 | +3.017 | 0.89816 | listed configurations 11.1 % of the state | H −0.90, L +0.87 |
| S3 | +4.173 | 0.00000 | listed configurations 6.3 % of the state | H−3 −0.56, H −0.45, L +0.80, L+1 +0.20 |
| S4 | +4.499 | 0.00000 | listed configurations 8.4 % of the state | H −0.93, L +0.29, L+1 +0.72 |
| S5 | +4.693 | 0.40433 | listed configurations 6.0 % of the state | H−2 −0.52, H−1 −0.33, L +0.58, L+1 +0.31 |
| T1 | +1.739 | | listed configurations 10.5 % of the state | H −0.88, L +0.88 |
| T2 | +2.493 | | listed configurations 11.1 % of the state | H−1 −0.93, L +0.89 |
| T3 | +3.556 | | listed configurations 5.4 % of the state | H−2 −0.38, H−1 −0.50, L +0.37, L+1 +0.47 |
| Q1 | +5.048 | | H−1,H→L,L+1 100 % | H−1 −0.89, H −0.89, L +0.89, L+1 +0.88 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(e, f)

![IF R_cs (10,10), orbital 67A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_S_cs/1010_67A.svg)**f** 67A · 0.0002\
−0.171262

![IF R_cs (10,10), orbital 66A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_S_cs/1010_66A.svg)**e** 66A · 1.9998\
−0.235236

(d, g)

![IF R_cs (10,10), orbital 68A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_S_cs/1010_68A.svg)**g** 68A · 0.0000\
−0.114039

![IF R_cs (10,10), orbital 65A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_S_cs/1010_65A.svg)**d** 65A · 2.0000\
−0.247367

(c, h)

![IF R_cs (10,10), orbital 69A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_S_cs/1010_69A.svg)**h** 69A · 0.0000\
−0.071866

![IF R_cs (10,10), orbital 64A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_S_cs/1010_64A.svg)**c** 64A · 2.0000\
−0.297509

(b, i)

![IF R_cs (10,10), orbital 70A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_S_cs/1010_70A.svg)**i** 70A · 0.0000\
−0.068326

![IF R_cs (10,10), orbital 63A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_S_cs/1010_63A.svg)**b** 63A · 2.0000\
−0.297931

(a, j)

![IF R_cs (10,10), orbital 71A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_S_cs/1010_71A.svg)**j** 71A · 0.0000\
−0.027505

![IF R_cs (10,10), orbital 62A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_S_cs/1010_62A.svg)**a** 62A · 2.0000\
−0.328111

### R<sub>T</sub> {#geom-t}

R<sub>T</sub> · (2,2) · 2 orbitals · ΔE<sub>ST</sub> **+16.4** kcal mol⁻¹ · ΔE<sub>SQ</sub> **n/a**

SI configurations 2S = 0: 3, 2S = 2: 1 · wall time 42 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [IF_T_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/IF_T_22.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +2.641 | 0.90849 | H→L 100 % | H −0.77, L +0.77 |
| S2 | +3.494 | 0.00000 | H,H→L,L 100 % | H −1.53, L +1.53 |
| S3 | n/a | | | |
| S4 | n/a | | | |
| S5 | n/a | | | |
| T1 | +0.710 | | H→L 100 % | H −0.77, L +0.77 |
| T2 | n/a | | | |
| T3 | n/a | | | |
| Q1 | n/a | | | |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(a, b)

![IF R_T (2,2), orbital 67A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_T/22_67A.svg)**b** 67A · 0.2336\
−0.160966

![IF R_T (2,2), orbital 66A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_T/22_66A.svg)**a** 66A · 1.7664\
−0.215529

R<sub>T</sub> · (4,4) · 4 orbitals · ΔE<sub>ST</sub> **+19.6** · ΔE<sub>SQ</sub> **+95.8** kcal mol⁻¹

SI configurations 2S = 0: 18, 2S = 2: 11, 2S = 4: 1 · wall time 126 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [IF_T_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/IF_T_44.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +2.274 | 0.00000 | H−1→L 96 %, H,H→L,L 3 %, H−1,H−1→L,L 1 % | H−1 −0.98, L +0.84 |
| S2 | +2.651 | 0.61403 | H→L 94 %, H−1→L+1 4 %, H−1,H,H→L,L,L+1 3 % | H −0.76, L +0.76 |
| S3 | +3.380 | 0.00000 | H,H→L,L 90 %, H−1,H→L,L+1 6 %, ground (reference pairs) 4 % | H −1.49, L +1.48 |
| S4 | +3.998 | 0.00000 | H→L+1 96 %, H,H→L,L 4 % | H −0.84, L+1 +0.96 |
| S5 | +4.632 | 2.03944 | H−1→L+1 95 %, H→L 4 %, H−1,H−1,H→L,L+1,L+1 1 % | H−1 −0.96, L+1 +0.96 |
| T1 | +0.848 | | H→L 100 % | H −0.80, L +0.80 |
| T2 | +2.082 | | H−1→L 98 %, H−1,H→L,L+1 1 %, H→L+1 1 % | H−1 −0.99, H +0.17, L +0.80 |
| T3 | +3.727 | | H→L+1 98 %, H−1→L 1 %, H−1,H→L,L+1 1 % | H −0.80, L −0.17, L+1 +0.99 |
| Q1 | +4.154 | | H−1,H→L,L+1 100 % | H−1 −0.99, H −0.81, L +0.80, L+1 +0.99 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(b, c)

![IF R_T (4,4), orbital 67A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_T/44_67A.svg)**c** 67A · 0.2507\
−0.174385

![IF R_T (4,4), orbital 66A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_T/44_66A.svg)**b** 66A · 1.7493\
−0.221151

(a, d)

![IF R_T (4,4), orbital 68A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_T/44_68A.svg)**d** 68A · 0.0000\
−0.093807

![IF R_T (4,4), orbital 65A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_T/44_65A.svg)**a** 65A · 2.0000\
−0.241333

R<sub>T</sub> · (6,6) · 6 orbitals · ΔE<sub>ST</sub> **+20.4** · ΔE<sub>SQ</sub> **+99.4** kcal mol⁻¹

SI configurations 2S = 0: 161, 2S = 2: 153, 2S = 4: 41, 2S = 6: 1 · wall time 178 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [IF_T_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/IF_T_66.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +2.269 | 0.00000 | H−1→L 98 %, H,H→L,L 2 % | H−1 −0.95, L +0.85 |
| S2 | +2.546 | 0.83110 | H→L 98 %, H−1→L+1 2 % | H −0.77, L +0.77 |
| S3 | +3.134 | 0.00000 | H,H→L,L 85 %, H−2→L 15 % | H −1.27, L +1.39 |
| S4 | +3.919 | 0.00000 | H→L+1 97 %, H→L+2 3 % | H −0.84, L+1 +0.91 |
| S5 | +4.587 | 0.00000 | H−2→L 87 %, H,H→L,L 13 % | H−2 −0.78, H −0.18, L +0.93 |
| T1 | +0.884 | | H→L 100 % | H −0.82, L +0.82 |
| T2 | +2.097 | | H−1→L 99 %, H−1,H→L,L+1 1 % | H−1 −0.97, L +0.82 |
| T3 | +3.589 | | H−2→L 57 %, H→L+1 43 % | H−2 −0.53, H −0.31, L +0.39, L+1 +0.42 |
| Q1 | +4.310 | | H−1,H→L,L+1 99 %, H−1,H→L,L+2 1 % | H−1 −0.97, H −0.83, L +0.82, L+1 +0.97 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(c, d)

![IF R_T (6,6), orbital 67A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_T/66_67A.svg)**d** 67A · 0.2255\
−0.182307

![IF R_T (6,6), orbital 66A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_T/66_66A.svg)**c** 66A · 1.7745\
−0.220901

(b, e)

![IF R_T (6,6), orbital 68A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_T/66_68A.svg)**e** 68A · 0.0000\
−0.100116

![IF R_T (6,6), orbital 65A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_T/66_65A.svg)**b** 65A · 2.0000\
−0.243358

(a, f)

![IF R_T (6,6), orbital 69A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_T/66_69A.svg)**f** 69A · 0.0000\
−0.044936

![IF R_T (6,6), orbital 63A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_T/66_63A.svg)**a** 63A · 2.0000\
−0.299495

R<sub>T</sub> · (8,8) · 8 orbitals · ΔE<sub>ST</sub> **+20.9** · ΔE<sub>SQ</sub> **+95.9** kcal mol⁻¹

SI configurations 2S = 0: 1 934, 2S = 2: 2 524, 2S = 4: 1 172, 2S = 6: 199, 2S = 8: 1 · wall time 285 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [IF_T_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/IF_T_88.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 30.6 % of the state | |
| S1 | +2.231 | 0.00000 | H−1→L 100 % | H−1 −0.94, L +0.88 |
| S2 | +2.617 | 0.80589 | H→L 100 % | H −0.79, L +0.79 |
| S3 | +3.276 | 0.00000 | H,H→L,L 100 % | H−2 −0.17, H −1.24, L +1.40 |
| S4 | +3.920 | 0.00000 | H→L+1 100 % | H −0.86, L+1 +0.91 |
| S5 | +4.413 | 1.53660 | H−1→L+1 100 % | H−3 −0.20, H−1 −0.75, L +0.20, L+1 +0.74 |
| T1 | +0.908 | | H→L 100 % | H −0.85, L +0.85 |
| T2 | +2.097 | | H−1→L 100 % | H−1 −0.97, L +0.84 |
| T3 | +3.560 | | H−1→L+1 100 % | H−3 −0.17, H−1 −0.79, L+1 +0.81 |
| Q1 | +4.159 | | H−1,H→L,L+1 100 % | H−1 −0.91, H −0.84, L +0.84, L+1 +0.92 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(d, e)

![IF R_T (8,8), orbital 67A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_T/88_67A.svg)**e** 67A · 0.2344\
−0.189123

![IF R_T (8,8), orbital 66A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_T/88_66A.svg)**d** 66A · 1.7656\
−0.222657

(c, f)

![IF R_T (8,8), orbital 68A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_T/88_68A.svg)**f** 68A · 0.0000\
−0.113798

![IF R_T (8,8), orbital 65A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_T/88_65A.svg)**c** 65A · 2.0000\
−0.242867

(b, g)

![IF R_T (8,8), orbital 70A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_T/88_70A.svg)**g** 70A · 0.0000\
−0.054146

![IF R_T (8,8), orbital 64A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_T/88_64A.svg)**b** 64A · 2.0000\
−0.298753

(a, h)

![IF R_T (8,8), orbital 69A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_T/88_69A.svg)**h** 69A · 0.0000\
−0.064207

![IF R_T (8,8), orbital 63A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_T/88_63A.svg)**a** 63A · 2.0000\
−0.300744

R<sub>T</sub> · (10,10) · 10 orbitals · ΔE<sub>ST</sub> **+21.8** · ΔE<sub>SQ</sub> **+98.1** kcal mol⁻¹

SI configurations 2S = 0: 29 082, 2S = 2: 48 090, 2S = 4: 31 275, 2S = 6: 9 635, 2S = 8: 1 209, 2S = 10: 1 · wall time 1874 s, 8 threads · fenrir04, 2026-10-15 · Psi4 d40267fc2 · input [IF_T_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/IF_T_1010.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 3.3 % of the state | |
| S1 | +2.507 | 0.00000 | listed configurations 11.4 % of the state | H−1 −0.96, L +0.82 |
| S2 | +2.856 | 0.73629 | listed configurations 10.2 % of the state | H −0.71, L +0.75 |
| S3 | +3.763 | 0.00000 | listed configurations 6.0 % of the state | H−2 −0.19, H −1.07, L +1.08, L+1 +0.22 |
| S4 | +4.220 | 0.00000 | listed configurations 8.4 % of the state | H −0.93, L +0.23, L+1 +0.73 |
| S5 | +4.369 | 0.00000 | listed configurations 7.2 % of the state | H−2 −0.65, H −0.26, L +0.89 |
| T1 | +0.947 | | listed configurations 12.0 % of the state | H −0.83, L +0.82 |
| T2 | +2.301 | | listed configurations 11.1 % of the state | H−1 −0.95, L +0.79 |
| T3 | +3.562 | | listed configurations 9.9 % of the state | H−3 −0.24, H−1 −0.66, L +0.16, L+1 +0.66 |
| Q1 | +4.255 | | H−1,H→L,L+1 100 % | H−1 −0.88, H −0.82, L +0.83, L+1 +0.89 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(e, f)

![IF R_T (10,10), orbital 67A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_T/1010_67A.svg)**f** 67A · 0.2817\
−0.202262

![IF R_T (10,10), orbital 66A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_T/1010_66A.svg)**e** 66A · 1.7183\
−0.229151

(d, g)

![IF R_T (10,10), orbital 68A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_T/1010_68A.svg)**g** 68A · 0.0000\
−0.117046

![IF R_T (10,10), orbital 65A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_T/1010_65A.svg)**d** 65A · 2.0000\
−0.243188

(c, h)

![IF R_T (10,10), orbital 70A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_T/1010_70A.svg)**h** 70A · 0.0000\
−0.064417

![IF R_T (10,10), orbital 64A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_T/1010_64A.svg)**c** 64A · 2.0000\
−0.298645

(b, i)

![IF R_T (10,10), orbital 69A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_T/1010_69A.svg)**i** 69A · 0.0000\
−0.068644

![IF R_T (10,10), orbital 63A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_T/1010_63A.svg)**b** 63A · 2.0000\
−0.301064

(a, j)

![IF R_T (10,10), orbital 71A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_T/1010_71A.svg)**j** 71A · 0.0000\
−0.028809

![IF R_T (10,10), orbital 62A](https://reksstudio.github.io/v2/figures/zeth/orb/IF_T/1010_62A.svg)**a** 62A · 2.0000\
−0.325393

[← PF](https://reksstudio.github.io/v2/main/results/zethrenes/pf/index.md) · [Back to the compounds](https://reksstudio.github.io/v2/main/results/zethrenes/index.md#c-if)

## Linked files

[inputs/zethrenes/IF_S_cs_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/IF_S_cs_22.py.txt)

[inputs/zethrenes/IF_S_cs_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/IF_S_cs_44.py.txt)

[inputs/zethrenes/IF_S_cs_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/IF_S_cs_88.py.txt)

[inputs/zethrenes/IF_S_cs_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/IF_S_cs_1010.py.txt)

[inputs/zethrenes/IF_T_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/IF_T_22.py.txt)

[inputs/zethrenes/IF_T_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/IF_T_44.py.txt)

[inputs/zethrenes/IF_T_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/IF_T_66.py.txt)

[inputs/zethrenes/IF_T_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/IF_T_88.py.txt)

[inputs/zethrenes/IF_T_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/IF_T_1010.py.txt)
