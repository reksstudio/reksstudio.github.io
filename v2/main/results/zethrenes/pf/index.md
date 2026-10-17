# PF: Phenalenofluorene — Zethrenes — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/zethrenes/pf/>

Psi4 builds of these outputs: b0c2d45a7, d40267fc2, 2424fb773 (kk/reks.v42), named on each run line. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# Phenalenofluorene (PF)

C<sub>24</sub>H<sub>14</sub>, 38 atoms, 916 basis functions (cc-pVTZ); compound 1f of Hu et al. (2016). Geometries: R<sub>cs</sub>, R<sub>os</sub>, R<sub>T</sub>.

[R<sub>cs</sub> (10,10) details](#cs-1010) · [R<sub>os</sub> (10,10) details](#os-1010) · [R<sub>T</sub> (10,10) details](#t-1010)

[Spin gaps](#gaps) · [Energies across geometries](#geometries) · [SI states](#states) · [Natural occupations](#occupations) · [vs experiment](#experiment) · [Calculations](#calculations)

![PF: drawing of the R_cs geometry](https://reksstudio.github.io/v2/figures/zeth/mol/PF.svg)

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
| (2,2) | +30.3 | +24.3 | +11.0 |
| (4,4) | +32.2 | +26.4 | +14.2 |
| (6,6) | +33.7 | +28.2 | +15.4 |
| (8,8) | +35.0 | +29.4 | +15.9 |
| (10,10) | +34.8 | +29.6 | +16.4 |

ΔE<sub>SQ</sub> / kcal mol<sup>−1</sup>

| Active space | R<sub>cs</sub> | R<sub>os</sub> | R<sub>T</sub> |
| - | - | - | - |
| (2,2) | n/a | n/a | n/a |
| (4,4) | +113.7 | +106.9 | +92.9 |
| (6,6) | +115.0 | +108.9 | +94.6 |
| (8,8) | +116.5 | +109.9 | +95.0 |
| (10,10) | +115.4 | +109.0 | +95.9 |

–: not computed; n/a: no 2S = 4 state in the SI space of this active space.

## Energies across geometries

ΔE<sub>geom</sub>(X, R) = E<sub>X</sub>(R) − E<sub>S0</sub>(R<sub>os</sub>)

Same active space; zero = E(S0) at R<sub>os</sub>; SI-SA-REKS electronic energies; positive: above the zero.

ΔE<sub>geom</sub> / kcal mol<sup>−1</sup>

| Active space | State | R<sub>cs</sub> | R<sub>os</sub> | R<sub>T</sub> |
| - | - | - | - | - |
| (2,2) | S0 | −1.1 | 0.0 | +7.3 |
| | T1 | +29.2 | +24.3 | +18.4 |
| | Q1 | n/a | n/a | n/a |
| (4,4) | S0 | −0.4 | 0.0 | +5.4 |
| | T1 | +31.8 | +26.4 | +19.6 |
| | Q1 | +113.2 | +106.9 | +98.3 |
| (6,6) | S0 | −0.3 | 0.0 | +5.2 |
| | T1 | +33.5 | +28.2 | +20.6 |
| | Q1 | +114.8 | +108.9 | +99.9 |
| (8,8) | S0 | −0.2 | 0.0 | +5.2 |
| | T1 | +34.7 | +29.4 | +21.1 |
| | Q1 | +116.3 | +109.9 | +100.2 |
| (10,10) | S0 | −0.1 | 0.0 | +7.0 |
| | T1 | +34.7 | +29.6 | +23.4 |
| | Q1 | +115.3 | +109.0 | +102.9 |

## SI states along the ladder

* 2S = 0: S0–S5
* 2S = 2: T1–T3
* 2S = 4: Q1

PF R_cs: SI states per active space, E − E(S0) / eV, 0 to 5.5, joined across active spaces; numbers in the tables below

PF R_os: SI states per active space, E − E(S0) / eV, 0 to 5.5, joined across active spaces; numbers in the tables below

PF R_T: SI states per active space, E − E(S0) / eV, 0 to 5.5, joined across active spaces; numbers in the tables below

One column per active space and one level per SI state shown on this page at E − E(S0) / eV (same geometry and active space); colour = 2S; levels closer than about 0.08 eV sit side by side. A thin line joins a level to one level of the same 2S at the next computed active space when their leading excitation patterns agree (same dominant pattern, or pattern weights that overlap by at least one half) or their density changes ΔD differ by at most 0.15; the joins are one-to-one, as many as the rule allows. A level without a line has no such partner among the shown states. Patterns come from the leading configurations listed in the output (the three largest, then every further one above 5 %); at (8,8) and (10,10) these often carry a small share of the state, which the hover gives. ΔD: change of the active orbital occupations (diagonal of the active one-particle density) from S0. H−k … H, L … L+k: bonding and antibonding active orbitals in pair order, H and L the frontier pair; H→L moves one electron, H,H→L,L two. –: not computed, a dashed line spans it; Q1 at (2,2): n/a. Spin gaps on this page in kcal mol⁻¹, SI state energies in eV; the T1 level of each column is E(T1) − E(S0).

Table: threads per geometry

R<sub>cs</sub>: threads

| 2S | Active spaces | Threads |
| - | - | - |
| 0 | (2,2) → (4,4) | S0→S0, S1→S1, S2→S4 |
| | (4,4) → (6,6) | S0→S0, S1→S1, S2→S3, S3→S4, S4→S2 |
| | (6,6) → (8,8) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S4 |
| | (8,8) → (10,10) | S0→S0, S1→S1, S3→S3, S4→S4, S5→S5 |
| 2 | (2,2) → (4,4) | T1→T1 |
| | (4,4) → (6,6) | T1→T1, T2→T2 |
| | (6,6) → (8,8) | T1→T1, T2→T2, T3→T3 |
| | (8,8) → (10,10) | T1→T1, T2→T2 |
| 4 | (4,4) → (6,6) | Q1→Q1 |
| | (6,6) → (8,8) | Q1→Q1 |
| | (8,8) → (10,10) | Q1→Q1 |

R<sub>os</sub>: threads

| 2S | Active spaces | Threads |
| - | - | - |
| 0 | (2,2) → (4,4) | S0→S0, S1→S1, S2→S4 |
| | (4,4) → (6,6) | S0→S0, S1→S1, S2→S3, S3→S4, S4→S2 |
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
| 0 | (2,2) → (4,4) | S0→S0, S1→S1, S2→S2 |
| | (4,4) → (6,6) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S4 |
| | (6,6) → (8,8) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S4, S5→S5 |
| | (8,8) → (10,10) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S4, S5→S5 |
| 2 | (2,2) → (4,4) | T1→T1 |
| | (4,4) → (6,6) | T1→T1, T2→T2, T3→T3 |
| | (6,6) → (8,8) | T1→T1, T2→T2, T3→T3 |
| | (8,8) → (10,10) | T1→T1, T2→T2, T3→T3 |
| 4 | (4,4) → (6,6) | Q1→Q1 |
| | (6,6) → (8,8) | Q1→Q1 |
| | (8,8) → (10,10) | Q1→Q1 |

## Natural occupations

R<sub>cs</sub>

PF R_cs, S0: natural occupations per active space in the order printed, 0 to 2; y0, y1

PF R_cs, T1: natural occupations per active space in the order printed, 0 to 2

PF R_cs, Q1: natural occupations per active space in the order printed, 0 to 2

R<sub>os</sub>

PF R_os, S0: natural occupations per active space in the order printed, 0 to 2; y0, y1

PF R_os, T1: natural occupations per active space in the order printed, 0 to 2

PF R_os, Q1: natural occupations per active space in the order printed, 0 to 2

R<sub>T</sub>

PF R_T, S0: natural occupations per active space in the order printed, 0 to 2; y0, y1

PF R_T, T1: natural occupations per active space in the order printed, 0 to 2

PF R_T, Q1: natural occupations per active space in the order printed, 0 to 2

Natural occupations n<sub>i</sub> of the SI state (0 to 2, the cell is 2), the "occ" line of the output block "Natural occupation numbers and natural orbitals of the active space" in the order printed, centred on the HOMO | LUMO divide (dashed), so an orbital keeps its column along the ladder; y<sub>0</sub> = n<sub>LUNO</sub>, y<sub>1</sub> = n<sub>LUNO+1</sub>, as the code prints them; y<sub>0</sub>, y<sub>1</sub> for S0 only (n/a for T1, Q1); otherwise n/a: no such state or orbital in the SI space of this active space.

## REKS vs experiment

T1 = E(T1) at R<sub>T</sub> − E(S0) at R<sub>os</sub>: Δ +0.08 eV, 1 molecule (1 core); vertical emission: Δ −0.22 eV · Absorption maximum: Δ +0.32 eV, 1 molecule (1 core)

* experiment: substituted derivative; T1 in polystyrene, absorption maximum in solution
* REKS, parent hydrocarbon, isolated molecule (gas phase), one dot per active space, the larger at the last:
* (2,2)
* (4,4)
* (6,6)
* (8,8)
* (10,10)
* Δ = REKS(10,10) − experiment / eV

E(T1) − E(S0) / eV, experiment and REKS(10,10): 1 molecules; values in Table 1 of the details

S0 → Sn vertical at R<sub>os</sub>, Sn the H→L-led singlet of largest f; experiment E = 1239.84 / λ(nm)

Absorption maximum / eV, experiment and REKS(10,10): 1 molecules; values in Table 2 of the details

(8,8) → (10,10): T1 +0.10 eV (PF), absorption +0.04 eV; every active space in the details.

Experiment. T1: Pt-porphyrin-sensitized phosphorescence (Lukman et al. 2017). Absorption: band maximum in solution (Hu et al. 2016). Substituents: mesityl (M), pentafluorophenyl (F).

REKS. Parent hydrocarbon without substituents, isolated molecule (gas phase); SI-SA-REKS(10,10)/BH\&HLYP/cc-pVTZ at the UCAM-B3LYP/6-31G\* geometries of Hu et al. (2016), not reoptimized; electronic energies without zero-point energy; absorption as a vertical energy.

Tables, definitions and every active space · further measurements: E(S1) absorption (Lukman et al. 2017), PF-F 627 nm, PF-M 436 nm

T1: E(T1) at R<sub>T</sub> − E(S0) at R<sub>os</sub>, each state at its own geometry; vertical emission: E(T1) − E(S0) at R<sub>T</sub>

Absorption: E(Sn) − E(S0) at R<sub>os</sub>, vertical (no Sn geometry computed); Sn: the H→L-led singlet of largest f; experiment E = 1239.84 / λ(nm)

Δ = REKS − experiment, from energies in E<sub>h</sub>

E(T1) − E(S0) / eV; REKS at (10,10)

| Molecule | Exp. PS | REKS | Δ | Exp. film | Vert. | Δ vert. |
| - | - | - | - | - | - | - |
| PF-M | 0.93 | 1.01 | +0.08 | 0.92 | 0.71 | −0.22 |

Exp.: Lukman et al. (2017), Table 1, Pt-porphyrin-sensitized phosphorescence after triplet energy transfer from Pt-octaethylporphyrin (PtOEP). PS: column “sol”, read as the polystyrene sample of the Methods (molecule:PtOEP:polystyrene 1:5:94 wt %, drop-cast, for isolated chromophores); derived from the Methods, not stated by the authors. Film: column “film”, molecule:PtOEP 95:5 to 98:2 wt %. Vert.: REKS vertical emission.

E(T1) at R<sub>T</sub> − E(S0) at R<sub>os</sub> corresponds to the 0-0 band without zero-point energy, the vertical emission to the band maximum; Lukman et al. (2017) do not state which one Table 1 gives (Supplementary Fig. 1, not archived).

Absorption maximum / eV; REKS at (10,10)

| Molecule | λ / nm | Exp. | REKS | Δ | Sn · f |
| - | - | - | - | - | - |
| PF-M | 627 | 1.977 | 2.293 | +0.32 | S1 · 0.83 |

Solvent: CH<sub>2</sub>Cl<sub>2</sub>: PF-M.

Hu et al. 2016, p. 1068, on the one-photon spectra: “Their one-photon absorption spectra (OPA) in dichloromethane (DCM) are shown in Figure 2d and Figure S12”; the SI Fig. S12 caption names toluene.

The authors' TD-DFT (B3LYP/6-31G\*) assigns the band to HOMO→LUMO for PF-M.

REKS along the active-space ladder / eV

| Core | | (2,2) | (4,4) | (6,6) | (8,8) | (10,10) | R<sub>cs</sub> |
| - | - | - | - | - | - | - | - |
| PF | T1 | 0.796 | 0.850 | 0.893 | 0.915 | 1.014 | – |
| | T1 kcal | 18.36 | 19.61 | 20.59 | 21.10 | 23.39 | – |
| | vert. | 0.479 | 0.615 | 0.666 | 0.688 | 0.712 | – |
| | min | 0.842 | 0.869 | 0.905 | 0.924 | 1.020 | – |
| | Sn | 2.100 | 2.208 | 2.226 | 2.255 | 2.293 | 2.477 |

T1: E(T1) at R<sub>T</sub> − E(S0) at R<sub>os</sub>, in eV and in kcal mol⁻¹; vert.: vertical emission at R<sub>T</sub>; min: lowest T1 − lowest S0 over the computed geometries of the same active space (lowest at R<sub>T</sub> and R<sub>os</sub> except S0 at R<sub>cs</sub>: PF (2,2), (4,4), (6,6), (8,8), (10,10)).

Sn: S0 → Sn (H→L) at R<sub>os</sub>, Sn chosen per active space by the rule of Table 2.

R<sub>cs</sub>: the same quantity at (10,10) and R<sub>cs</sub>. –: not computed.

Further measurements of the same molecules / eV; REKS at (10,10)

| Molecule | Exp. | Exp. film | REKS | Δ | Sn · f |
| - | - | - | - | - | - |
| PF-M | 1.85 | 1.81 | 2.293 | +0.44 | S1 · 0.83 |
| PF-F | 1.977 | – | 2.293 | +0.32 | S1 · 0.83 |

PF-M: E(S1) abs of Lukman et al. 2017, Table 1, in CHCl<sub>3</sub>, 0.1 mM (Methods), peak or onset not stated; film: thin film; Δ for the solution value.

PF-F: absorption maximum 627 nm, Hu et al. 2016, Table 2, in toluene (SI Fig. S12 caption); λ<sub>abs</sub>, ε<sub>max</sub> and τ printed as for PF-M.

Other measured quantities; REKS at (10,10)

| Molecule | Quantity | Exp. | REKS | Δ | Unit |
| - | - | - | - | - | - |
| PF-M | 436 nm | 2.844 | 3.436 | +0.59 | eV |

PF-M 436 nm: absorption band assigned by the authors to H−1→L (Hu et al. 2016, Table 2); REKS: S3 (H−1→L), f 0.35, at R<sub>os</sub>.

Sources: Lukman et al. 2017, Table 1 (PF-M), [doi:10.1021/jacs.7b10762](https://doi.org/10.1021/jacs.7b10762); Hu et al. 2016, Table 2 (PF-M, PF-F), [doi:10.1021/jacs.5b12532](https://doi.org/10.1021/jacs.5b12532).

[All compounds](https://reksstudio.github.io/v2/main/results/zethrenes/index.md#experiment)

## Calculations

One entry per geometry and active space; the summary gives ΔE<sub>ST</sub>, ΔE<sub>SQ</sub> / kcal mol⁻¹ to 1 decimal. Inside: the run line, the SI states (f (length) of S0 → Sn; leading excitation patterns as a share of the listed configurations, given where these carry at least half of the state, else the listed share; ΔD entries with |ΔD| ≥ 0.15, as in the hover of the SI-state chart), the SA-REKS active orbitals and the input. Inputs as run; starting orbitals read from a seed file (RKS or ROHF orbitals; for HZ and HZD the orbitals of an earlier REKS(2,2) run), active pairs set per rung.

Orbitals: one column per active pair as the code pairs them, frontier pair first, antibonding orbital above, bonding below. Contours ±0.01, ±0.02, ±0.04 a.u. in a plane 0.6 Å above the molecular plane; blue + / copper −.

### R<sub>cs</sub> {#geom-cs}

R<sub>cs</sub> · (2,2) · 2 orbitals · ΔE<sub>ST</sub> **+30.3** kcal mol⁻¹ · ΔE<sub>SQ</sub> **n/a**

SI configurations 2S = 0: 3, 2S = 2: 1 · wall time 89 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [PF_S_cs_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/PF_S_cs_22.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 99 %, H→L 1 % | |
| S1 | +2.322 | 1.45020 | H→L 94 %, H,H→L,L 5 %, ground (reference pairs) 1 % | H −1.02, L +1.02 |
| S2 | +4.273 | 0.27395\* | H,H→L,L 95 %, H→L 5 % | H −1.94, L +1.94 |
| S3 | n/a | | | |
| S4 | n/a | | | |
| S5 | n/a | | | |
| T1 | +1.314 | | H→L 100 % | H −0.99, L +0.99 |
| T2 | n/a | | | |
| T3 | n/a | | | |
| Q1 | n/a | | | |

\* f (length) and f (velocity) differ by more than 3× (tested when f > 10<sup>−3</sup>).

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(a, b)

![PF R_cs (2,2), orbital 80A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_cs/22_80A.svg)**b** 80A · 0.0019\
−0.136923

![PF R_cs (2,2), orbital 79A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_cs/22_79A.svg)**a** 79A · 1.9981\
−0.208774

R<sub>cs</sub> · (4,4) · 4 orbitals · ΔE<sub>ST</sub> **+32.2** · ΔE<sub>SQ</sub> **+113.7** kcal mol⁻¹

SI configurations 2S = 0: 18, 2S = 2: 11, 2S = 4: 1 · wall time 153 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [PF_S_cs_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/PF_S_cs_44.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +2.400 | 0.93582 | H→L 93 %, H,H→L,L 4 %, H−1→L 3 % | H −0.97, L +1.00 |
| S2 | +3.564 | 0.86664 | H−1→L 88 %, H−1→L+1 8 %, H→L 4 % | H−1 −0.95, L +0.90 |
| S3 | +3.912 | 0.01558 | H→L+1 90 %, H,H→L,L 9 %, H−1→L+1 1 % | H −1.04, L +0.16, L+1 +0.91 |
| S4 | +4.201 | 0.12669 | H,H→L,L 87 %, H→L+1 8 %, H→L 4 % | H −1.81, L +1.72 |
| S5 | +5.033 | 1.06683 | H−1→L+1 88 %, H−1→L 8 %, H−1,H→L,L+1 3 % | H−1 −0.98, L+1 +0.91 |
| T1 | +1.396 | | H→L 99 %, H−1→L+1 1 %, H−1→L 1 % | H −0.97, L +0.97 |
| T2 | +2.852 | | H−1→L 72 %, H−1→L+1 26 %, H→L+1 2 % | H−1 −0.97, L +0.71, L+1 +0.29 |
| T3 | +3.622 | | H→L+1 96 %, H−1→L+1 4 % | H −0.94, L+1 +1.00 |
| Q1 | +4.928 | | H−1,H→L,L+1 100 % | H−1 −1.00, H −0.98, L +0.98, L+1 +1.00 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(b, c)

![PF R_cs (4,4), orbital 80A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_cs/44_80A.svg)**c** 80A · 0.0031\
−0.142692

![PF R_cs (4,4), orbital 79A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_cs/44_79A.svg)**b** 79A · 1.9969\
−0.209691

(a, d)

![PF R_cs (4,4), orbital 81A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_cs/44_81A.svg)**d** 81A · 0.0000\
−0.100509

![PF R_cs (4,4), orbital 78A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_cs/44_78A.svg)**a** 78A · 2.0000\
−0.260350

R<sub>cs</sub> · (6,6) · 6 orbitals · ΔE<sub>ST</sub> **+33.7** · ΔE<sub>SQ</sub> **+115.0** kcal mol⁻¹

SI configurations 2S = 0: 161, 2S = 2: 153, 2S = 4: 41, 2S = 6: 1 · wall time 247 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [PF_S_cs_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/PF_S_cs_66.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +2.425 | 1.00038 | H→L 98 %, H,H→L,L 2 % | H −0.89, L +0.93 |
| S2 | +3.440 | 0.25879 | H,H→L,L 64 %, H−2→L 36 % | H−2 −0.27, H −1.05, L +1.20 |
| S3 | +3.600 | 0.54584 | H−1→L 64 %, H→L+1 23 %, H−1→L+1 13 % | H−1 −0.66, H −0.30, L +0.59, L+1 +0.33 |
| S4 | +3.767 | 0.10632 | H→L+1 68 %, H−1→L 32 % | H−2 −0.19, H−1 −0.25, H −0.59, L +0.43, L+1 +0.59 |
| S5 | +4.529 | 0.05042 | H−2→L 66 %, H,H→L,L 34 % | H−2 −0.55, H −0.61, L +1.09 |
| T1 | +1.463 | | H→L 99 %, H−2→L+2 1 % | H −0.92, L +0.92 |
| T2 | +2.899 | | H−1→L 74 %, H−1→L+1 26 % | H−1 −0.82, L +0.61, L+1 +0.32 |
| T3 | +2.981 | | H−2→L 43 %, H→L+1 29 %, H→L+2 16 % | H−2 −0.42, H−1 −0.16, H −0.38, L +0.48, L+1 +0.33 |
| Q1 | +4.988 | | H−1,H→L,L+1 95 %, H−2,H→L,L+1 5 % | H−1 −0.88, H −0.93, L +0.93, L+1 +0.96 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(c, d)

![PF R_cs (6,6), orbital 80A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_cs/66_80A.svg)**d** 80A · 0.0013\
−0.151530

![PF R_cs (6,6), orbital 79A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_cs/66_79A.svg)**c** 79A · 1.9987\
−0.210717

(b, e)

![PF R_cs (6,6), orbital 81A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_cs/66_81A.svg)**e** 81A · 0.0000\
−0.106329

![PF R_cs (6,6), orbital 78A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_cs/66_78A.svg)**b** 78A · 2.0000\
−0.261014

(a, f)

![PF R_cs (6,6), orbital 82A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_cs/66_82A.svg)**f** 82A · 0.0000\
−0.057578

![PF R_cs (6,6), orbital 77A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_cs/66_77A.svg)**a** 77A · 2.0000\
−0.277582

R<sub>cs</sub> · (8,8) · 8 orbitals · ΔE<sub>ST</sub> **+35.0** · ΔE<sub>SQ</sub> **+116.5** kcal mol⁻¹

SI configurations 2S = 0: 1 934, 2S = 2: 2 524, 2S = 4: 1 172, 2S = 6: 199, 2S = 8: 1 · wall time 401 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [PF_S_cs_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/PF_S_cs_88.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 12.0 % of the state | |
| S1 | +2.444 | 0.88474 | H→L 100 % | H −0.90, L +0.95 |
| S2 | +3.512 | 0.30759 | listed configurations 33.0 % of the state | H−2 −0.25, H−1 −0.16, H −0.87, L +1.12 |
| S3 | +3.629 | 0.35298 | H−1→L 100 % | H−1 −0.69, H −0.33, L +0.74, L+1 +0.23 |
| S4 | +3.785 | 0.04711 | H→L+1 100 % | H−2 −0.21, H −0.69, L +0.32, L+1 +0.68 |
| S5 | +4.415 | 0.00987 | H→L+3 56 %, H−3→L 44 % | H−3 −0.41, H −0.41, L +0.36, L+3 +0.48 |
| T1 | +1.516 | | H→L 100 % | H −0.91, L +0.91 |
| T2 | +2.942 | | H−1→L 100 % | H−1 −0.93, L +0.68, L+1 +0.26 |
| T3 | +3.076 | | H−2→L 56 %, H→L+1 44 % | H−2 −0.46, H −0.44, L +0.44, L+1 +0.39 |
| Q1 | +5.052 | | H−1,H→L,L+1 100 % | H−1 −0.89, H −0.92, L +0.92, L+1 +0.96 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(d, e)

![PF R_cs (8,8), orbital 80A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_cs/88_80A.svg)**e** 80A · 0.0012\
−0.154563

![PF R_cs (8,8), orbital 79A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_cs/88_79A.svg)**d** 79A · 1.9988\
−0.210819

(c, f)

![PF R_cs (8,8), orbital 81A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_cs/88_81A.svg)**f** 81A · 0.0000\
−0.105826

![PF R_cs (8,8), orbital 78A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_cs/88_78A.svg)**c** 78A · 2.0000\
−0.260236

(b, g)

![PF R_cs (8,8), orbital 83A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_cs/88_83A.svg)**g** 83A · 0.0000\
−0.059079

![PF R_cs (8,8), orbital 77A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_cs/88_77A.svg)**b** 77A · 2.0000\
−0.278138

(a, h)

![PF R_cs (8,8), orbital 82A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_cs/88_82A.svg)**h** 82A · 0.0000\
−0.087247

![PF R_cs (8,8), orbital 76A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_cs/88_76A.svg)**a** 76A · 2.0000\
−0.296179

R<sub>cs</sub> · (10,10) · 10 orbitals · ΔE<sub>ST</sub> **+34.8** · ΔE<sub>SQ</sub> **+115.4** kcal mol⁻¹

SI configurations 2S = 0: 29 082, 2S = 2: 48 090, 2S = 4: 31 275, 2S = 6: 9 635, 2S = 8: 1 209, 2S = 10: 1 · wall time 1981 s, 8 threads · fenrir04, 2026-10-15 · Psi4 d40267fc2 · input [PF_S_cs_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/PF_S_cs_1010.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 2.4 % of the state | |
| S1 | +2.477 | 0.90444 | listed configurations 10.2 % of the state | H −0.89, L +0.91 |
| S2 | +3.463 | 0.27388 | listed configurations 3.6 % of the state | H−2 −0.16, H−1 −0.34, H −0.68, L +0.96, L+1 +0.18 |
| S3 | +3.564 | 0.20792 | listed configurations 5.7 % of the state | H−1 −0.56, H −0.43, L +0.76, L+1 +0.23 |
| S4 | +3.724 | 0.07653 | listed configurations 6.0 % of the state | H−2 −0.25, H −0.72, L +0.41, L+1 +0.56 |
| S5 | +4.344 | 0.02625 | listed configurations 4.8 % of the state | H−3 −0.33, H −0.45, L +0.38, L+3 +0.47 |
| T1 | +1.511 | | listed configurations 11.4 % of the state | H −0.90, L +0.90 |
| T2 | +2.933 | | listed configurations 8.4 % of the state | H−1 −0.87, L +0.68, L+1 +0.23 |
| T3 | +3.033 | | listed configurations 4.8 % of the state | H−2 −0.37, H −0.48, L +0.38, L+1 +0.43 |
| Q1 | +5.004 | | H−1,H→L,L+1 100 % | H−1 −0.82, H −0.91, L +0.91, L+1 +0.91 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(e, f)

![PF R_cs (10,10), orbital 80A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_cs/1010_80A.svg)**f** 80A · 0.0011\
−0.158021

![PF R_cs (10,10), orbital 79A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_cs/1010_79A.svg)**e** 79A · 1.9989\
−0.211144

(d, g)

![PF R_cs (10,10), orbital 81A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_cs/1010_81A.svg)**g** 81A · 0.0000\
−0.116913

![PF R_cs (10,10), orbital 78A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_cs/1010_78A.svg)**d** 78A · 2.0000\
−0.261478

(c, h)

![PF R_cs (10,10), orbital 83A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_cs/1010_83A.svg)**h** 83A · 0.0000\
−0.066273

![PF R_cs (10,10), orbital 77A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_cs/1010_77A.svg)**c** 77A · 2.0000\
−0.278874

(b, i)

![PF R_cs (10,10), orbital 82A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_cs/1010_82A.svg)**i** 82A · 0.0000\
−0.085856

![PF R_cs (10,10), orbital 76A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_cs/1010_76A.svg)**b** 76A · 2.0000\
−0.295496

(a, j)

![PF R_cs (10,10), orbital 84A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_cs/1010_84A.svg)**j** 84A · 0.0000\
−0.050318

![PF R_cs (10,10), orbital 75A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_cs/1010_75A.svg)**a** 75A · 2.0000\
−0.313782

### R<sub>os</sub> {#geom-os}

R<sub>os</sub> · (2,2) · 2 orbitals · ΔE<sub>ST</sub> **+24.3** kcal mol⁻¹ · ΔE<sub>SQ</sub> **n/a**

SI configurations 2S = 0: 3, 2S = 2: 1 · wall time 84 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [PF_S_os_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/PF_S_os_22.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 98 %, H→L 2 % | |
| S1 | +2.100 | 1.26680 | H→L 90 %, H,H→L,L 8 %, ground (reference pairs) 2 % | H −1.02, L +1.02 |
| S2 | +3.938 | 0.40239\* | H,H→L,L 92 %, H→L 8 % | H −1.88, L +1.88 |
| S3 | n/a | | | |
| S4 | n/a | | | |
| S5 | n/a | | | |
| T1 | +1.052 | | H→L 100 % | H −0.97, L +0.97 |
| T2 | n/a | | | |
| T3 | n/a | | | |
| Q1 | n/a | | | |

\* f (length) and f (velocity) differ by more than 3× (tested when f > 10<sup>−3</sup>).

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(a, b)

![PF R_os (2,2), orbital 80A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_os/22_80A.svg)**b** 80A · 0.0076\
−0.140051

![PF R_os (2,2), orbital 79A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_os/22_79A.svg)**a** 79A · 1.9924\
−0.203665

R<sub>os</sub> · (4,4) · 4 orbitals · ΔE<sub>ST</sub> **+26.4** · ΔE<sub>SQ</sub> **+106.9** kcal mol⁻¹

SI configurations 2S = 0: 18, 2S = 2: 11, 2S = 4: 1 · wall time 164 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [PF_S_os_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/PF_S_os_44.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +2.208 | 0.85314 | H→L 90 %, H,H→L,L 7 %, H−1→L 2 % | H −0.98, L +1.00 |
| S2 | +3.448 | 0.78663 | H−1→L 92 %, H−1→L+1 5 %, H→L 4 % | H−1 −0.95, L +0.90 |
| S3 | +3.704 | 0.00284 | H→L+1 62 %, H,H→L,L 37 %, H→L 2 % | H −1.29, L +0.70, L+1 +0.61 |
| S4 | +3.859 | 0.22106 | H,H→L,L 55 %, H→L+1 39 %, H→L 6 % | H −1.49, L +1.10, L+1 +0.42 |
| S5 | +4.997 | 1.14375 | H−1→L+1 91 %, H−1→L 5 %, H−1,H→L,L+1 4 % | H−1 −0.98, L+1 +0.94 |
| T1 | +1.143 | | H→L 99 %, H−1→L 1 %, H−1→L+1 1 % | H −0.95, L +0.95 |
| T2 | +2.756 | | H−1→L 77 %, H−1→L+1 19 %, H→L+1 3 % | H−1 −0.95, L +0.74, L+1 +0.23 |
| T3 | +3.451 | | H→L+1 95 %, H−1→L+1 4 %, H−1→L 1 % | H −0.91, L+1 +0.99 |
| Q1 | +4.635 | | H−1,H→L,L+1 100 % | H−1 −0.99, H −0.96, L +0.96, L+1 +0.99 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(b, c)

![PF R_os (4,4), orbital 80A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_os/44_80A.svg)**c** 80A · 0.0168\
−0.146880

![PF R_os (4,4), orbital 79A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_os/44_79A.svg)**b** 79A · 1.9832\
−0.204879

(a, d)

![PF R_os (4,4), orbital 81A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_os/44_81A.svg)**d** 81A · 0.0000\
−0.100963

![PF R_os (4,4), orbital 78A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_os/44_78A.svg)**a** 78A · 2.0000\
−0.259391

R<sub>os</sub> · (6,6) · 6 orbitals · ΔE<sub>ST</sub> **+28.2** · ΔE<sub>SQ</sub> **+108.9** kcal mol⁻¹

SI configurations 2S = 0: 161, 2S = 2: 153, 2S = 4: 41, 2S = 6: 1 · wall time 234 s, 8 threads · fenrir04, 2026-10-15 · Psi4 d40267fc2 · input [PF_S_os_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/PF_S_os_66.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +2.226 | 0.89873 | H→L 96 %, H,H→L,L 4 % | H −0.89, L +0.94 |
| S2 | +3.186 | 0.21762 | H,H→L,L 63 %, H−2→L 23 %, H→L 14 % | H−2 −0.22, H −1.21, L +1.27 |
| S3 | +3.492 | 0.69369 | H−1→L 94 %, H→L+1 6 % | H−1 −0.81, L +0.74, L+1 +0.19 |
| S4 | +3.619 | 0.09224 | H→L+1 82 %, H−1→L 18 % | H−1 −0.16, H −0.71, L +0.23, L+1 +0.75 |
| S5 | +4.357 | 0.04366 | H−2→L 73 %, H,H→L,L 27 % | H−2 −0.65, H −0.47, L +1.10 |
| T1 | +1.224 | | H→L 99 %, H−2→L+2 1 % | H −0.90, L +0.91 |
| T2 | +2.810 | | H−1→L 80 %, H−1→L+1 20 % | H−1 −0.81, L +0.64, L+1 +0.28 |
| T3 | +2.918 | | H−2→L 44 %, H→L+1 30 %, H→L+2 14 % | H−2 −0.41, H−1 −0.17, H −0.36, L +0.47, L+1 +0.33 |
| Q1 | +4.722 | | H−1,H→L,L+1 95 %, H−2,H→L,L+1 5 % | H−1 −0.88, H −0.91, L +0.91, L+1 +0.96 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(c, d)

![PF R_os (6,6), orbital 80A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_os/66_80A.svg)**d** 80A · 0.0063\
−0.155194

![PF R_os (6,6), orbital 79A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_os/66_79A.svg)**c** 79A · 1.9937\
−0.205893

(b, e)

![PF R_os (6,6), orbital 81A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_os/66_81A.svg)**e** 81A · 0.0000\
−0.106618

![PF R_os (6,6), orbital 78A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_os/66_78A.svg)**b** 78A · 2.0000\
−0.260145

(a, f)

![PF R_os (6,6), orbital 82A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_os/66_82A.svg)**f** 82A · 0.0000\
−0.056971

![PF R_os (6,6), orbital 77A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_os/66_77A.svg)**a** 77A · 2.0000\
−0.277596

R<sub>os</sub> · (8,8) · 8 orbitals · ΔE<sub>ST</sub> **+29.4** · ΔE<sub>SQ</sub> **+109.9** kcal mol⁻¹

SI configurations 2S = 0: 1 934, 2S = 2: 2 524, 2S = 4: 1 172, 2S = 6: 199, 2S = 8: 1 · wall time 375 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [PF_S_os_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/PF_S_os_88.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 12.3 % of the state | |
| S1 | +2.255 | 0.80803 | H→L 100 % | H −0.90, L +0.95 |
| S2 | +3.287 | 0.17378 | listed configurations 46.2 % of the state | H−2 −0.23, H −1.16, L +1.21 |
| S3 | +3.506 | 0.50364 | H−1→L 100 % | H−1 −0.89, L +0.83 |
| S4 | +3.646 | 0.10126 | H→L+1 100 % | H −0.78, L+1 +0.82 |
| S5 | +4.351 | 0.04148 | listed configurations 36.0 % of the state | H−3 −0.16, H−2 −0.40, H −0.42, L +0.69, L+3 +0.24 |
| T1 | +1.276 | | H→L 100 % | H −0.89, L +0.90 |
| T2 | +2.850 | | H−1→L 100 % | H−1 −0.88, L +0.68, L+1 +0.24 |
| T3 | +3.008 | | H−2→L 55 %, H→L+1 45 % | H−2 −0.43, H −0.41, L +0.43, L+1 +0.39 |
| Q1 | +4.764 | | H−1,H→L,L+1 100 % | H−1 −0.89, H −0.90, L +0.90, L+1 +0.96 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(d, e)

![PF R_os (8,8), orbital 80A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_os/88_80A.svg)**e** 80A · 0.0063\
−0.158551

![PF R_os (8,8), orbital 79A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_os/88_79A.svg)**d** 79A · 1.9937\
−0.206506

(c, f)

![PF R_os (8,8), orbital 81A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_os/88_81A.svg)**f** 81A · 0.0000\
−0.107169

![PF R_os (8,8), orbital 78A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_os/88_78A.svg)**c** 78A · 2.0000\
−0.260003

(b, g)

![PF R_os (8,8), orbital 83A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_os/88_83A.svg)**g** 83A · 0.0000\
−0.059294

![PF R_os (8,8), orbital 77A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_os/88_77A.svg)**b** 77A · 2.0000\
−0.278462

(a, h)

![PF R_os (8,8), orbital 82A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_os/88_82A.svg)**h** 82A · 0.0000\
−0.086747

![PF R_os (8,8), orbital 76A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_os/88_76A.svg)**a** 76A · 2.0000\
−0.297016

R<sub>os</sub> · (10,10) · 10 orbitals · ΔE<sub>ST</sub> **+29.6** · ΔE<sub>SQ</sub> **+109.0** kcal mol⁻¹

SI configurations 2S = 0: 29 082, 2S = 2: 48 090, 2S = 4: 31 275, 2S = 6: 9 635, 2S = 8: 1 209, 2S = 10: 1 · wall time 1868 s, 8 threads · fenrir04, 2026-10-15 · Psi4 d40267fc2 · input [PF_S_os_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/PF_S_os_1010.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 2.4 % of the state | |
| S1 | +2.293 | 0.83447 | listed configurations 9.9 % of the state | H −0.89, L +0.91 |
| S2 | +3.252 | 0.14683 | listed configurations 5.1 % of the state | H−2 −0.20, H −1.09, L +1.09, L+1 +0.17 |
| S3 | +3.436 | 0.35098 | listed configurations 9.6 % of the state | H−1 −0.87, L +0.84 |
| S4 | +3.601 | 0.14963 | listed configurations 7.8 % of the state | H −0.81, L +0.22, L+1 +0.71 |
| S5 | +4.272 | 0.05955 | listed configurations 4.2 % of the state | H−2 −0.38, H −0.44, L +0.66, L+3 +0.24 |
| T1 | +1.282 | | listed configurations 11.4 % of the state | H −0.88, L +0.88 |
| T2 | +2.843 | | listed configurations 8.4 % of the state | H−1 −0.81, L +0.68, L+1 +0.22 |
| T3 | +2.971 | | listed configurations 4.8 % of the state | H−2 −0.35, H −0.44, L +0.36, L+1 +0.44 |
| Q1 | +4.725 | | H−1,H→L,L+1 100 % | H−1 −0.80, H −0.89, L +0.89, L+1 +0.91 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(e, f)

![PF R_os (10,10), orbital 80A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_os/1010_80A.svg)**f** 80A · 0.0056\
−0.161570

![PF R_os (10,10), orbital 79A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_os/1010_79A.svg)**e** 79A · 1.9944\
−0.206350

(d, g)

![PF R_os (10,10), orbital 81A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_os/1010_81A.svg)**g** 81A · 0.0000\
−0.117507

![PF R_os (10,10), orbital 78A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_os/1010_78A.svg)**d** 78A · 2.0000\
−0.260541

(c, h)

![PF R_os (10,10), orbital 83A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_os/1010_83A.svg)**h** 83A · 0.0000\
−0.065481

![PF R_os (10,10), orbital 77A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_os/1010_77A.svg)**c** 77A · 2.0000\
−0.278790

(b, i)

![PF R_os (10,10), orbital 82A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_os/1010_82A.svg)**i** 82A · 0.0000\
−0.085666

![PF R_os (10,10), orbital 76A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_os/1010_76A.svg)**b** 76A · 2.0000\
−0.296551

(a, j)

![PF R_os (10,10), orbital 84A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_os/1010_84A.svg)**j** 84A · 0.0000\
−0.050583

![PF R_os (10,10), orbital 75A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_S_os/1010_75A.svg)**a** 75A · 2.0000\
−0.313259

### R<sub>T</sub> {#geom-t}

R<sub>T</sub> · (2,2) · 2 orbitals · ΔE<sub>ST</sub> **+11.0** kcal mol⁻¹ · ΔE<sub>SQ</sub> **n/a**

SI configurations 2S = 0: 3, 2S = 2: 1 · wall time 82 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [PF_T_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/PF_T_22.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 98 %, H→L 2 % | |
| S1 | +1.810 | 0.53363 | H→L 79 %, H,H→L,L 20 %, ground (reference pairs) 2 % | H −0.79, L +0.79 |
| S2 | +3.095 | 0.29276 | H,H→L,L 80 %, H→L 20 % | H −1.37, L +1.37 |
| S3 | n/a | | | |
| S4 | n/a | | | |
| S5 | n/a | | | |
| T1 | +0.479 | | H→L 100 % | H −0.72, L +0.72 |
| T2 | n/a | | | |
| T3 | n/a | | | |
| Q1 | n/a | | | |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(a, b)

![PF R_T (2,2), orbital 80A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_T/22_80A.svg)**b** 80A · 0.2358\
−0.151663

![PF R_T (2,2), orbital 79A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_T/22_79A.svg)**a** 79A · 1.7642\
−0.193840

R<sub>T</sub> · (4,4) · 4 orbitals · ΔE<sub>ST</sub> **+14.2** · ΔE<sub>SQ</sub> **+92.9** kcal mol⁻¹

SI configurations 2S = 0: 18, 2S = 2: 11, 2S = 4: 1 · wall time 163 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [PF_T_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/PF_T_44.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +1.930 | 0.44107 | H→L 76 %, H,H→L,L 20 %, H−1→L 4 % | H −0.86, L +0.90 |
| S2 | +2.983 | 0.03970 | H,H→L,L 73 %, H→L 14 %, H−1→L 13 % | H−1 −0.16, H −1.21, L +1.31 |
| S3 | +3.347 | 0.57221 | H−1→L 78 %, H→L+1 13 %, H→L 9 % | H−1 −0.75, L +0.68 |
| S4 | +3.524 | 0.40659 | H→L+1 88 %, H−1→L 7 %, H→L 5 % | H −0.72, L+1 +0.87 |
| S5 | +4.877 | 1.17622 | H−1→L+1 90 %, H−1,H→L,L+1 8 %, H−1→L 2 % | H−1 −0.97, L+1 +0.97 |
| T1 | +0.615 | | H→L 99 % | H −0.77, L +0.77 |
| T2 | +2.670 | | H−1→L 85 %, H−1→L+1 11 %, H→L+1 5 % | H−1 −0.95, H +0.15, L +0.64, L+1 +0.16 |
| T3 | +3.163 | | H→L+1 90 %, H−1→L+1 9 %, H−1→L 1 % | H −0.70, L −0.18, L+1 +0.98 |
| Q1 | +4.027 | | H−1,H→L,L+1 100 % | H−1 −0.99, H −0.77, L +0.77, L+1 +0.99 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(b, c)

![PF R_T (4,4), orbital 80A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_T/44_80A.svg)**c** 80A · 0.2800\
−0.164172

![PF R_T (4,4), orbital 79A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_T/44_79A.svg)**b** 79A · 1.7200\
−0.197785

(a, d)

![PF R_T (4,4), orbital 81A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_T/44_81A.svg)**d** 81A · 0.0000\
−0.102880

![PF R_T (4,4), orbital 78A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_T/44_78A.svg)**a** 78A · 2.0000\
−0.257606

R<sub>T</sub> · (6,6) · 6 orbitals · ΔE<sub>ST</sub> **+15.4** · ΔE<sub>SQ</sub> **+94.6** kcal mol⁻¹

SI configurations 2S = 0: 161, 2S = 2: 153, 2S = 4: 41, 2S = 6: 1 · wall time 244 s, 8 threads · fenrir04, 2026-10-15 · Psi4 d40267fc2 · input [PF_T_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/PF_T_66.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +1.928 | 0.45129 | H→L 76 %, H,H→L,L 24 % | H −0.80, L +0.88 |
| S2 | +2.773 | 0.17937 | H,H→L,L 71 %, H→L 29 % | H −1.08, L +1.15 |
| S3 | +3.340 | 0.48362 | H−1→L 95 %, H→L 5 % | H−1 −0.84, L +0.72 |
| S4 | +3.427 | 0.44991 | H→L+1 97 %, H→L 3 % | H −0.72, L+1 +0.90 |
| S5 | +4.142 | 0.04796 | H−2→L 86 %, H,H→L,L 14 % | H−2 −0.75, L +0.83 |
| T1 | +0.666 | | H→L 99 %, H−2→L+2 1 % | H −0.76, L +0.77 |
| T2 | +2.729 | | H−1→L 95 %, H−1→L+1 5 % | H−1 −0.91, L +0.63, L+1 +0.16 |
| T3 | +2.914 | | H→L+1 57 %, H−2→L 43 % | H−2 −0.36, H −0.34, L +0.19, L+1 +0.52 |
| Q1 | +4.104 | | H−1,H→L,L+1 97 %, H−2,H→L,L+1 3 % | H−1 −0.91, H −0.77, L +0.77, L+1 +0.97 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(c, d)

![PF R_T (6,6), orbital 80A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_T/66_80A.svg)**d** 80A · 0.2739\
−0.173182

![PF R_T (6,6), orbital 79A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_T/66_79A.svg)**c** 79A · 1.7261\
−0.200131

(b, e)

![PF R_T (6,6), orbital 81A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_T/66_81A.svg)**e** 81A · 0.0000\
−0.108316

![PF R_T (6,6), orbital 78A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_T/66_78A.svg)**b** 78A · 2.0000\
−0.258011

(a, f)

![PF R_T (6,6), orbital 82A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_T/66_82A.svg)**f** 82A · 0.0000\
−0.056669

![PF R_T (6,6), orbital 77A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_T/66_77A.svg)**a** 77A · 2.0000\
−0.278410

R<sub>T</sub> · (8,8) · 8 orbitals · ΔE<sub>ST</sub> **+15.9** · ΔE<sub>SQ</sub> **+95.0** kcal mol⁻¹

SI configurations 2S = 0: 1 934, 2S = 2: 2 524, 2S = 4: 1 172, 2S = 6: 199, 2S = 8: 1 · wall time 460 s, 8 threads · fenrir06, 2026-10-15 · Psi4 d40267fc2 · input [PF_T_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/PF_T_88.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 32.4 % of the state | |
| S1 | +2.009 | 0.44011 | H→L 100 % | H −0.82, L +0.90 |
| S2 | +3.132 | 0.09627 | H,H→L,L 100 % | H −1.08, L +1.24 |
| S3 | +3.359 | 0.36402 | H−1→L 100 % | H−1 −0.76, L +0.75 |
| S4 | +3.512 | 0.43095 | H→L+1 100 % | H −0.75, L+1 +0.90 |
| S5 | +4.300 | 0.06388 | H−2→L 100 % | H−2 −0.76, L +0.77 |
| T1 | +0.688 | | H→L 100 % | H −0.79, L +0.79 |
| T2 | +2.785 | | H−1→L 100 % | H−1 −0.89, L +0.68 |
| T3 | +3.050 | | listed configurations 48.0 % of the state | H−2 −0.25, H−1 −0.16, H −0.41, L+1 +0.60 |
| Q1 | +4.118 | | H−1,H→L,L+1 100 % | H−1 −0.93, H −0.79, L +0.79, L+1 +0.97 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(d, e)

![PF R_T (8,8), orbital 80A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_T/88_80A.svg)**e** 80A · 0.2939\
−0.179954

![PF R_T (8,8), orbital 79A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_T/88_79A.svg)**d** 79A · 1.7061\
−0.203134

(c, f)

![PF R_T (8,8), orbital 81A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_T/88_81A.svg)**f** 81A · 0.0000\
−0.107131

![PF R_T (8,8), orbital 78A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_T/88_78A.svg)**c** 78A · 2.0000\
−0.257328

(b, g)

![PF R_T (8,8), orbital 83A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_T/88_83A.svg)**g** 83A · 0.0000\
−0.064407

![PF R_T (8,8), orbital 77A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_T/88_77A.svg)**b** 77A · 2.0000\
−0.280636

(a, h)

![PF R_T (8,8), orbital 82A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_T/88_82A.svg)**h** 82A · 0.0000\
−0.084888

![PF R_T (8,8), orbital 76A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_T/88_76A.svg)**a** 76A · 2.0000\
−0.296984

R<sub>T</sub> · (10,10) · 10 orbitals · ΔE<sub>ST</sub> **+16.4** · ΔE<sub>SQ</sub> **+95.9** kcal mol⁻¹

SI configurations 2S = 0: 29 082, 2S = 2: 48 090, 2S = 4: 31 275, 2S = 6: 9 635, 2S = 8: 1 209, 2S = 10: 1 · wall time 2247 s, 8 threads · fenrir04, 2026-10-15 · Psi4 d40267fc2 · input [PF_T_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/PF_T_1010.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 3.3 % of the state | |
| S1 | +2.014 | 0.50730 | listed configurations 7.8 % of the state | H −0.82, L +0.90 |
| S2 | +3.074 | 0.10687 | listed configurations 6.3 % of the state | H −1.10, L +1.21 |
| S3 | +3.374 | 0.25021 | listed configurations 9.6 % of the state | H−1 −0.80, L +0.73 |
| S4 | +3.484 | 0.47890 | listed configurations 9.9 % of the state | H −0.74, L+1 +0.87 |
| S5 | +4.169 | 0.02003 | listed configurations 8.7 % of the state | H−2 −0.75, L +0.83 |
| T1 | +0.712 | | listed configurations 12.0 % of the state | H −0.79, L +0.79 |
| T2 | +2.764 | | listed configurations 9.3 % of the state | H−1 −0.79, L +0.63, L+1 +0.15 |
| T3 | +3.002 | | listed configurations 5.4 % of the state | H−2 −0.24, H−1 −0.24, H −0.34, L +0.19, L+1 +0.57 |
| Q1 | +4.160 | | H−1,H→L,L+1 100 % | H−1 −0.82, H −0.80, L +0.80, L+1 +0.92 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(e, f)

![PF R_T (10,10), orbital 80A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_T/1010_80A.svg)**f** 80A · 0.2960\
−0.185914

![PF R_T (10,10), orbital 79A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_T/1010_79A.svg)**e** 79A · 1.7040\
−0.204231

(d, g)

![PF R_T (10,10), orbital 81A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_T/1010_81A.svg)**g** 81A · 0.0000\
−0.116209

![PF R_T (10,10), orbital 78A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_T/1010_78A.svg)**d** 78A · 2.0000\
−0.258184

(c, h)

![PF R_T (10,10), orbital 83A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_T/1010_83A.svg)**h** 83A · 0.0000\
−0.065229

![PF R_T (10,10), orbital 77A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_T/1010_77A.svg)**c** 77A · 2.0000\
−0.279325

(b, i)

![PF R_T (10,10), orbital 82A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_T/1010_82A.svg)**i** 82A · 0.0000\
−0.087668

![PF R_T (10,10), orbital 76A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_T/1010_76A.svg)**b** 76A · 2.0000\
−0.297962

(a, j)

![PF R_T (10,10), orbital 84A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_T/1010_84A.svg)**j** 84A · 0.0000\
−0.044098

![PF R_T (10,10), orbital 75A](https://reksstudio.github.io/v2/figures/zeth/orb/PF_T/1010_75A.svg)**a** 75A · 2.0000\
−0.312746

[← IFD](https://reksstudio.github.io/v2/main/results/zethrenes/ifd/index.md) · [Back to the compounds](https://reksstudio.github.io/v2/main/results/zethrenes/index.md#c-pf) · [IF →](https://reksstudio.github.io/v2/main/results/zethrenes/if/index.md)

## Linked files

[inputs/zethrenes/PF_S_cs_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/PF_S_cs_22.py.txt)

[inputs/zethrenes/PF_S_cs_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/PF_S_cs_44.py.txt)

[inputs/zethrenes/PF_S_cs_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/PF_S_cs_66.py.txt)

[inputs/zethrenes/PF_S_cs_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/PF_S_cs_88.py.txt)

[inputs/zethrenes/PF_S_cs_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/PF_S_cs_1010.py.txt)

[inputs/zethrenes/PF_S_os_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/PF_S_os_22.py.txt)

[inputs/zethrenes/PF_S_os_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/PF_S_os_44.py.txt)

[inputs/zethrenes/PF_S_os_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/PF_S_os_66.py.txt)

[inputs/zethrenes/PF_S_os_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/PF_S_os_88.py.txt)

[inputs/zethrenes/PF_S_os_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/PF_S_os_1010.py.txt)

[inputs/zethrenes/PF_T_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/PF_T_22.py.txt)

[inputs/zethrenes/PF_T_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/PF_T_44.py.txt)

[inputs/zethrenes/PF_T_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/PF_T_66.py.txt)

[inputs/zethrenes/PF_T_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/PF_T_88.py.txt)

[inputs/zethrenes/PF_T_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/PF_T_1010.py.txt)
