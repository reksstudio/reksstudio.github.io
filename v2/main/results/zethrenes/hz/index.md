# HZ: Heptazethrene — Zethrenes — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/zethrenes/hz/>

Psi4 builds of these outputs: b0c2d45a7, d40267fc2, 2424fb773 (kk/reks.v42), named on each run line. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# Heptazethrene (HZ)

C<sub>28</sub>H<sub>16</sub>, 44 atoms, 1064 basis functions (cc-pVTZ); compound 1a of Hu et al. (2016). Geometries: R<sub>cs</sub>, R<sub>os</sub>, R<sub>T</sub>.

[R<sub>cs</sub> (10,10) details](https://reksstudio.github.io/v2/main/results/zethrenes/hz/index.md#cs-1010) · [R<sub>os</sub> (10,10) details](https://reksstudio.github.io/v2/main/results/zethrenes/hz/index.md#os-1010) · [R<sub>T</sub> (10,10) details](https://reksstudio.github.io/v2/main/results/zethrenes/hz/index.md#t-1010)

[Spin gaps](https://reksstudio.github.io/v2/main/results/zethrenes/hz/index.md#gaps) · [Energies across geometries](https://reksstudio.github.io/v2/main/results/zethrenes/hz/index.md#geometries) · [SI states](https://reksstudio.github.io/v2/main/results/zethrenes/hz/index.md#states) · [Natural occupations](https://reksstudio.github.io/v2/main/results/zethrenes/hz/index.md#occupations) · [vs experiment](https://reksstudio.github.io/v2/main/results/zethrenes/hz/index.md#experiment) · [Calculations](https://reksstudio.github.io/v2/main/results/zethrenes/hz/index.md#calculations)

![HZ: drawing of the R_cs geometry](https://reksstudio.github.io/v2/figures/zeth/mol/HZ.svg)

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
| (2,2) | +26.4 | +17.3 | +10.4 |
| (4,4) | +27.0 | +19.4 | +12.7 |
| (6,6) | +28.1 | +20.3 | +13.5 |
| (8,8) | +27.4 | +20.1 | +13.7 |
| (10,10) | +27.7 | +20.6 | +14.0 |

ΔE<sub>SQ</sub> / kcal mol<sup>−1</sup>

| Active space | R<sub>cs</sub> | R<sub>os</sub> | R<sub>T</sub> |
| - | - | - | - |
| (2,2) | n/a | n/a | n/a |
| (4,4) | +100.3 | +90.5 | +83.1 |
| (6,6) | +104.1 | +94.1 | +86.4 |
| (8,8) | +101.7 | +92.1 | +85.0 |
| (10,10) | +96.7 | +88.0 | +85.1 |

–: not computed; n/a: no 2S = 4 state in the SI space of this active space.

## Energies across geometries

ΔE<sub>geom</sub>(X, R) = E<sub>X</sub>(R) − E<sub>S0</sub>(R<sub>os</sub>)

Same active space; zero = E(S0) at R<sub>os</sub>; SI-SA-REKS electronic energies; positive: above the zero.

ΔE<sub>geom</sub> / kcal mol<sup>−1</sup>

| Active space | State | R<sub>cs</sub> | R<sub>os</sub> | R<sub>T</sub> |
| - | - | - | - | - |
| (2,2) | S0 | −1.8 | 0.0 | +4.3 |
| | T1 | +24.6 | +17.3 | +14.7 |
| | Q1 | n/a | n/a | n/a |
| (4,4) | S0 | −0.1 | 0.0 | +4.2 |
| | T1 | +27.0 | +19.4 | +16.9 |
| | Q1 | +100.2 | +90.5 | +87.3 |
| (6,6) | S0 | +0.1 | 0.0 | +4.0 |
| | T1 | +28.2 | +20.3 | +17.5 |
| | Q1 | +104.2 | +94.1 | +90.4 |
| (8,8) | S0 | +0.2 | 0.0 | +4.2 |
| | T1 | +27.6 | +20.1 | +17.9 |
| | Q1 | +101.9 | +92.1 | +89.2 |
| (10,10) | S0 | +0.3 | 0.0 | +5.6 |
| | T1 | +28.0 | +20.6 | +19.6 |
| | Q1 | +97.1 | +88.0 | +90.7 |

## SI states along the ladder

* 2S = 0: S0–S5
* 2S = 2: T1–T3
* 2S = 4: Q1

HZ R_cs: SI states per active space, E − E(S0) / eV, 0 to 5, joined across active spaces; numbers in the tables below

HZ R_os: SI states per active space, E − E(S0) / eV, 0 to 5, joined across active spaces; numbers in the tables below

HZ R_T: SI states per active space, E − E(S0) / eV, 0 to 5, joined across active spaces; numbers in the tables below

One column per active space and one level per SI state shown on this page at E − E(S0) / eV (same geometry and active space); colour = 2S; levels closer than about 0.08 eV sit side by side. A thin line joins a level to one level of the same 2S at the next computed active space when their leading excitation patterns agree (same dominant pattern, or pattern weights that overlap by at least one half) or their density changes ΔD differ by at most 0.15; the joins are one-to-one, as many as the rule allows. A level without a line has no such partner among the shown states. Patterns come from the leading configurations listed in the output (the three largest, then every further one above 5 %); at (8,8) and (10,10) these often carry a small share of the state, which the hover gives. ΔD: change of the active orbital occupations (diagonal of the active one-particle density) from S0. H−k … H, L … L+k: bonding and antibonding active orbitals in pair order, H and L the frontier pair; H→L moves one electron, H,H→L,L two. –: not computed, a dashed line spans it; Q1 at (2,2): n/a. Spin gaps on this page in kcal mol⁻¹, SI state energies in eV; the T1 level of each column is E(T1) − E(S0).

Table: threads per geometry

R<sub>cs</sub>: threads

| 2S | Active spaces | Threads |
| - | - | - |
| 0 | (2,2) → (4,4) | S0→S0, S1→S1, S2→S2 |
| | (4,4) → (6,6) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S4 |
| | (6,6) → (8,8) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S4, S5→S5 |
| | (8,8) → (10,10) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S4, S5→S5 |
| 2 | (2,2) → (4,4) | T1→T1 |
| | (4,4) → (6,6) | T1→T1, T2→T2, T3→T3 |
| | (6,6) → (8,8) | T1→T1, T2→T2, T3→T3 |
| | (8,8) → (10,10) | T1→T1, T2→T2 |
| 4 | (4,4) → (6,6) | Q1→Q1 |
| | (6,6) → (8,8) | Q1→Q1 |
| | (8,8) → (10,10) | Q1→Q1 |

R<sub>os</sub>: threads

| 2S | Active spaces | Threads |
| - | - | - |
| 0 | (2,2) → (4,4) | S0→S0, S1→S1, S2→S2 |
| | (4,4) → (6,6) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S4 |
| | (6,6) → (8,8) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S4, S5→S5 |
| | (8,8) → (10,10) | S0→S0, S1→S1, S2→S2, S3→S3, S4→S4, S5→S5 |
| 2 | (2,2) → (4,4) | T1→T1 |
| | (4,4) → (6,6) | T1→T1, T2→T2, T3→T3 |
| | (6,6) → (8,8) | T1→T1, T2→T2, T3→T3 |
| | (8,8) → (10,10) | T1→T1, T2→T2 |
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

HZ R_cs, S0: natural occupations per active space in the order printed, 0 to 2; y0, y1

HZ R_cs, T1: natural occupations per active space in the order printed, 0 to 2

HZ R_cs, Q1: natural occupations per active space in the order printed, 0 to 2

R<sub>os</sub>

HZ R_os, S0: natural occupations per active space in the order printed, 0 to 2; y0, y1

HZ R_os, T1: natural occupations per active space in the order printed, 0 to 2

HZ R_os, Q1: natural occupations per active space in the order printed, 0 to 2

R<sub>T</sub>

HZ R_T, S0: natural occupations per active space in the order printed, 0 to 2; y0, y1

HZ R_T, T1: natural occupations per active space in the order printed, 0 to 2

HZ R_T, Q1: natural occupations per active space in the order printed, 0 to 2

Natural occupations n<sub>i</sub> of the SI state (0 to 2, the cell is 2), the "occ" line of the output block "Natural orbitals of the active space" in the order printed, centred on the HOMO | LUMO divide (dashed), so an orbital keeps its column along the ladder; y<sub>0</sub> = n<sub>LUNO</sub>, y<sub>1</sub> = n<sub>LUNO+1</sub>, as the code prints them; y<sub>0</sub>, y<sub>1</sub> for S0 only (n/a for T1, Q1); otherwise n/a: no such state or orbital in the SI space of this active space.

## REKS vs experiment

T1 = E(T1) at R<sub>T</sub> − E(S0) at R<sub>os</sub>: Δ −0.01 to +0.02 eV, 3 molecules (1 core); vertical emission: Δ −0.25 to −0.22 eV · Absorption maximum: Δ +0.27 to +0.43 eV, 4 molecules (1 core)

* experiment: substituted derivative (dashed: parent HZ, secondary source ‡); T1 in polystyrene, absorption maximum in solution
* REKS, parent hydrocarbon, isolated molecule (gas phase), one dot per active space, the larger at the last:
* (2,2)
* (4,4)
* (6,6)
* (8,8)
* (10,10)
* Δ = REKS(10,10) − experiment / eV

E(T1) − E(S0) / eV, experiment and REKS(10,10): 3 molecules; values in Table 1 of the details

S0 → Sn vertical at R<sub>os</sub>, Sn the H→L-led singlet of largest f; experiment E = 1239.84 / λ(nm)

Absorption maximum / eV, experiment and REKS(10,10): 4 molecules; values in Table 2 of the details

(8,8) → (10,10): T1 +0.07 eV (HZ), absorption +0.10 eV; every active space in the details.

Experiment. T1: Pt-porphyrin-sensitized phosphorescence (Lukman et al. 2017). Absorption: band maximum in solution (Hu et al. 2016, Li et al. 2012; ‡ Hu and Wu 2017, review). Substituents: mesityl (M), pentafluorophenyl (F), TIPS-ethynyl (TIPS).

REKS. Parent hydrocarbon without substituents, isolated molecule (gas phase); SI-SA-REKS(10,10)/BH\&HLYP/cc-pVTZ at the UCAM-B3LYP/6-31G\* geometries of Hu et al. (2016), not reoptimized; electronic energies without zero-point energy; absorption as a vertical energy.

Tables, definitions and every active space · further measurements: E(S1) absorption (Lukman et al. 2017)

T1: E(T1) at R<sub>T</sub> − E(S0) at R<sub>os</sub>, each state at its own geometry; vertical emission: E(T1) − E(S0) at R<sub>T</sub>

Absorption: E(Sn) − E(S0) at R<sub>os</sub>, vertical (no Sn geometry computed); Sn: the H→L-led singlet of largest f; experiment E = 1239.84 / λ(nm)

Δ = REKS − experiment, from energies in E<sub>h</sub>

E(T1) − E(S0) / eV; REKS at (10,10)

| Molecule | Exp. PS | REKS | Δ | Exp. film | Vert. | Δ vert. |
| - | - | - | - | - | - | - |
| HZ-M | 0.85 | 0.85 | 0.00 | 0.84 | 0.61 | −0.24 |
| HZ-F | 0.86 | 0.85 | −0.01 | 0.89 | 0.61 | −0.25 |
| HZ-TIPS | 0.83 | 0.85 | +0.02 | 0.82 | 0.61 | −0.22 |

Exp.: Lukman et al. (2017), Table 1, Pt-porphyrin-sensitized phosphorescence after triplet energy transfer from Pt-octaethylporphyrin (PtOEP). PS: column “sol”, read as the polystyrene sample of the Methods (molecule:PtOEP:polystyrene 1:5:94 wt %, drop-cast, for isolated chromophores); derived from the Methods, not stated by the authors. Film: column “film”, molecule:PtOEP 95:5 to 98:2 wt %. Vert.: REKS vertical emission.

E(T1) at R<sub>T</sub> − E(S0) at R<sub>os</sub> corresponds to the 0-0 band without zero-point energy, the vertical emission to the band maximum; Lukman et al. (2017) do not state which one Table 1 gives (Supplementary Fig. 1, not archived).

Absorption maximum / eV; REKS at (10,10)

| Molecule | λ / nm | Exp. | REKS | Δ | Sn · f |
| - | - | - | - | - | - |
| HZ (parent) ‡ | 586 | 2.116 | 2.389 | +0.27 | S1 · 1.42 |
| HZ-M | 613 | 2.023 | 2.389 | +0.37 | S1 · 1.42 |
| HZ-F | 610 | 2.033 | 2.389 | +0.36 | S1 · 1.42 |
| HZ-TIPS | 634 | 1.956 | 2.389 | +0.43 | S1 · 1.42 |

Solvent: CH<sub>2</sub>Cl<sub>2</sub>: HZ-M; toluene: HZ-F (Hu et al. 2016, SI Fig. S12 caption); CHCl<sub>3</sub>: HZ-TIPS (Li et al. 2012, Fig. 1); not given: HZ (parent).

Hu et al. 2016, p. 1068, on the one-photon spectra: “Their one-photon absorption spectra (OPA) in dichloromethane (DCM) are shown in Figure 2d and Figure S12”; the SI Fig. S12 caption names toluene.

The authors' TD-DFT (B3LYP/6-31G\*) assigns the band to HOMO→LUMO for HZ-M. HZ-F and HZ-TIPS: the same band of the core, not assigned in the source.

‡ HZ (parent): Clar and Macpherson (1962) as quoted by Hu and Wu 2017 (review), p. 223.

REKS along the active-space ladder / eV

| Core | | (2,2) | (4,4) | (6,6) | (8,8) | (10,10) | R<sub>cs</sub> |
| - | - | - | - | - | - | - | - |
| HZ | T1 | 0.637 | 0.735 | 0.757 | 0.776 | 0.850 | – |
| | T1 kcal | 14.69 | 16.94 | 17.47 | 17.89 | 19.60 | – |
| | vert. | 0.449 | 0.553 | 0.584 | 0.593 | 0.605 | – |
| | min | 0.716 | 0.738 | 0.757 | 0.776 | 0.850 | – |
| | Sn | 2.126 | 2.282 | 2.138 | 2.294 | 2.389 | 2.436 |

T1: E(T1) at R<sub>T</sub> − E(S0) at R<sub>os</sub>, in eV and in kcal mol⁻¹; vert.: vertical emission at R<sub>T</sub>; min: lowest T1 − lowest S0 over the computed geometries of the same active space (lowest at R<sub>T</sub> and R<sub>os</sub> except S0 at R<sub>cs</sub>: HZ (2,2), (4,4)).

Sn: S0 → Sn (H→L) at R<sub>os</sub>, Sn chosen per active space by the rule of Table 2.

R<sub>cs</sub>: the same quantity at (10,10) and R<sub>cs</sub>. –: not computed.

Further measurements of the same molecules / eV; REKS at (10,10)

| Molecule | Exp. | Exp. film | REKS | Δ | Sn · f |
| - | - | - | - | - | - |
| HZ-M | 2.02 | 1.84 | 2.389 | +0.37 | S1 · 1.42 |
| HZ-F | 2.01 | 1.82 | 2.389 | +0.38 | S1 · 1.42 |
| HZ-TIPS | 1.95 | 1.70 | 2.389 | +0.44 | S1 · 1.42 |

HZ-M, HZ-F and HZ-TIPS: E(S1) abs of Lukman et al. 2017, Table 1, in CHCl<sub>3</sub>, 0.1 mM (Methods), peak or onset not stated; film: thin film; Δ for the solution value.

Sources: Lukman et al. 2017, Table 1 (HZ-M, HZ-F, HZ-TIPS), [doi:10.1021/jacs.7b10762](https://doi.org/10.1021/jacs.7b10762); Hu and Wu 2017 ‡, p. 223 (HZ (parent)), [doi:10.1139/cjc-2016-0568](https://doi.org/10.1139/cjc-2016-0568); Hu et al. 2016, Table 2 (HZ-M, HZ-F), [doi:10.1021/jacs.5b12532](https://doi.org/10.1021/jacs.5b12532); Li et al. 2012, Table 1 (HZ-TIPS), [doi:10.1021/ja304618v](https://doi.org/10.1021/ja304618v).

[All compounds](https://reksstudio.github.io/v2/main/results/zethrenes/index.md#experiment)

## Calculations

One entry per geometry and active space; the summary gives ΔE<sub>ST</sub>, ΔE<sub>SQ</sub> / kcal mol⁻¹ to 1 decimal. Inside: the run line, the SI states (f (length) of S0 → Sn; leading excitation patterns as a share of the listed configurations, given where these carry at least half of the state, else the listed share; ΔD entries with |ΔD| ≥ 0.15, as in the hover of the SI-state chart), the SA-REKS active orbitals and the input. Inputs as run; starting orbitals read from a seed file (RKS or ROHF orbitals; for HZ and HZD the orbitals of an earlier REKS(2,2) run), active pairs set per rung.

Orbitals: one column per active pair as the code pairs them, frontier pair first, antibonding orbital above, bonding below. Contours ±0.01, ±0.02, ±0.04 a.u. in a plane 0.6 Å above the molecular plane; blue + / copper −.

### R<sub>cs</sub> {#geom-cs}

R<sub>cs</sub> · (2,2) · 2 orbitals · ΔE<sub>ST</sub> **+26.4** kcal mol⁻¹ · ΔE<sub>SQ</sub> **n/a**

SI configurations 2S = 0: 3, 2S = 2: 1 · wall time 196 s, 8 threads · fenrir04, 2026-10-12 · Psi4 b0c2d45a7 · input [HZ_S_cs_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZ_S_cs_22.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +2.292 | 2.10923 | H→L 100 % | H −0.99, L +0.99 |
| S2 | +3.512 | 0.00000 | H,H→L,L 100 % | H −1.98, L +1.98 |
| S3 | n/a | | | |
| S4 | n/a | | | |
| S5 | n/a | | | |
| T1 | +1.146 | | H→L 100 % | H −0.99, L +0.99 |
| T2 | n/a | | | |
| T3 | n/a | | | |
| Q1 | n/a | | | |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(a, b)

![HZ R_cs (2,2), orbital 93A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_cs/22_93A.svg)**b** 93A · 0.0121\
−0.130300

![HZ R_cs (2,2), orbital 92A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_cs/22_92A.svg)**a** 92A · 1.9879\
−0.193890

R<sub>cs</sub> · (4,4) · 4 orbitals · ΔE<sub>ST</sub> **+27.0** · ΔE<sub>SQ</sub> **+100.3** kcal mol⁻¹

SI configurations 2S = 0: 18, 2S = 2: 11, 2S = 4: 1 · wall time 442 s, 8 threads · fenrir04, 2026-10-12 · Psi4 b0c2d45a7 · input [HZ_S_cs_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZ_S_cs_44.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 99 %, H−1,H→L,L+1 1 % | |
| S1 | +2.373 | 1.93226 | H→L 100 % | H −0.96, L +0.96 |
| S2 | +3.046 | 0.00000 | H,H→L,L 57 %, H→L+1 31 %, H−1→L 12 % | H−1 −0.17, H −1.35, L +1.17, L+1 +0.35 |
| S3 | +3.517 | 0.00000 | H→L+1 63 %, H−1→L 27 %, H,H→L,L 10 % | H−1 −0.28, H −0.78, L +0.44, L+1 +0.62 |
| S4 | +3.840 | 0.00000 | H−1→L 63 %, H,H→L,L 28 %, H→L+1 9 % | H−1 −0.63, H −0.62, L +1.14 |
| S5 | +4.827 | 0.41965 | H−1→L+1 99 % | H−1 −0.99, L+1 +0.99 |
| T1 | +1.173 | | H→L 96 %, H−1→L+1 4 % | H −0.92, L +0.92 |
| T2 | +2.466 | | H→L+1 57 %, H−1→L 43 % | H−1 −0.42, H −0.54, L +0.39, L+1 +0.57 |
| T3 | +3.558 | | H−1→L 56 %, H→L+1 42 %, H−1,H→L,L+1 2 % | H−1 −0.57, H −0.40, L +0.54, L+1 +0.43 |
| Q1 | +4.350 | | H−1,H→L,L+1 100 % | H−1 −0.99, H −0.96, L +0.96, L+1 +0.99 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(b, c)

![HZ R_cs (4,4), orbital 93A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_cs/44_93A.svg)**c** 93A · 0.0065\
−0.138993

![HZ R_cs (4,4), orbital 92A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_cs/44_92A.svg)**b** 92A · 1.9935\
−0.194581

(a, d)

![HZ R_cs (4,4), orbital 94A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_cs/44_94A.svg)**d** 94A · 0.0000\
−0.100541

![HZ R_cs (4,4), orbital 91A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_cs/44_91A.svg)**a** 91A · 2.0000\
−0.253511

R<sub>cs</sub> · (6,6) · 6 orbitals · ΔE<sub>ST</sub> **+28.1** · ΔE<sub>SQ</sub> **+104.1** kcal mol⁻¹

SI configurations 2S = 0: 161, 2S = 2: 153, 2S = 4: 41, 2S = 6: 1 · wall time 422 s, 8 threads · fenrir06, 2026-10-13 · Psi4 d40267fc2 · input [HZ_S_cs_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZ_S_cs_66.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +2.262 | 1.60158 | H→L 100 % | H −0.91, L +0.91 |
| S2 | +2.890 | 0.00000 | H,H→L,L 83 %, H→L+1 17 % | H −1.37, L +1.31, L+1 +0.16 |
| S3 | +3.491 | 0.00000 | H→L+1 96 %, H,H→L,L 4 % | H −1.00, L+1 +0.85 |
| S4 | +3.738 | 0.00000 | H−1→L 97 %, H,H→L,L 3 % | H−1 −0.89, L +0.99 |
| S5 | +4.351 | 0.00000 | H→L+2 95 %, H−2→L 5 % | H −0.89, L+2 +0.84 |
| T1 | +1.217 | | H→L 98 %, H−1→L+1 2 % | H −0.89, L +0.89 |
| T2 | +2.601 | | H→L+1 58 %, H−1→L 42 % | H−1 −0.39, H −0.51, L +0.37, L+1 +0.53 |
| T3 | +3.537 | | H→L+1 47 %, H−1→L 41 %, H−2→L 12 % | H−1 −0.38, H −0.44, L +0.45, L+1 +0.43 |
| Q1 | +4.516 | | H−1,H→L,L+1 99 %, H−2,H→L,L+2 1 % | H−1 −0.96, H −0.92, L +0.92, L+1 +0.96 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(c, d)

![HZ R_cs (6,6), orbital 93A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_cs/66_93A.svg)**d** 93A · 0.0037\
−0.146569

![HZ R_cs (6,6), orbital 92A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_cs/66_92A.svg)**c** 92A · 1.9963\
−0.194763

(b, e)

![HZ R_cs (6,6), orbital 94A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_cs/66_94A.svg)**e** 94A · 0.0000\
−0.103347

![HZ R_cs (6,6), orbital 91A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_cs/66_91A.svg)**b** 91A · 2.0000\
−0.255024

(a, f)

![HZ R_cs (6,6), orbital 95A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_cs/66_95A.svg)**f** 95A · 0.0000\
−0.062846

![HZ R_cs (6,6), orbital 90A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_cs/66_90A.svg)**a** 90A · 2.0000\
−0.290338

R<sub>cs</sub> · (8,8) · 8 orbitals · ΔE<sub>ST</sub> **+27.4** · ΔE<sub>SQ</sub> **+101.7** kcal mol⁻¹

SI configurations 2S = 0: 1 934, 2S = 2: 2 524, 2S = 4: 1 172, 2S = 6: 199, 2S = 8: 1 · wall time 605 s, 8 threads · fenrir06, 2026-10-13 · Psi4 d40267fc2 · input [HZ_S_cs_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZ_S_cs_88.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 12.0 % of the state | |
| S1 | +2.373 | 1.59525 | H→L 100 % | H −0.89, L +0.89 |
| S2 | +2.862 | 0.00000 | H,H→L,L 100 % | H −1.28, L +1.21, L+1 +0.20 |
| S3 | +3.496 | 0.00000 | H→L+1 100 % | H −0.97, L+1 +0.81 |
| S4 | +3.763 | 0.00000 | H−1→L 100 % | H−1 −0.88, L +0.95 |
| S5 | +4.383 | 0.00000 | H→L+2 100 % | H −0.96, L+2 +0.87 |
| T1 | +1.190 | | H→L 100 % | H −0.86, L +0.86 |
| T2 | +2.553 | | H→L+1 58 %, H−1→L 42 % | H−1 −0.38, H −0.49, L +0.34, L+1 +0.53 |
| T3 | +3.510 | | H−1→L 51 %, H→L+1 49 % | H−1 −0.44, H −0.39, L +0.45, L+1 +0.44 |
| Q1 | +4.409 | | H−1,H→L,L+1 100 % | H−1 −0.90, H −0.89, L +0.89, L+1 +0.91 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(d, e)

![HZ R_cs (8,8), orbital 93A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_cs/88_93A.svg)**e** 93A · 0.0030\
−0.153717

![HZ R_cs (8,8), orbital 92A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_cs/88_92A.svg)**d** 92A · 1.9970\
−0.195702

(c, f)

![HZ R_cs (8,8), orbital 94A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_cs/88_94A.svg)**f** 94A · 0.0000\
−0.112018

![HZ R_cs (8,8), orbital 91A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_cs/88_91A.svg)**c** 91A · 2.0000\
−0.253952

(b, g)

![HZ R_cs (8,8), orbital 95A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_cs/88_95A.svg)**g** 95A · 0.0000\
−0.065172

![HZ R_cs (8,8), orbital 90A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_cs/88_90A.svg)**b** 90A · 2.0000\
−0.290843

(a, h)

![HZ R_cs (8,8), orbital 96A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_cs/88_96A.svg)**h** 96A · 0.0000\
−0.051502

![HZ R_cs (8,8), orbital 87A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_cs/88_87A.svg)**a** 87A · 2.0000\
−0.303925

R<sub>cs</sub> · (10,10) · 10 orbitals · ΔE<sub>ST</sub> **+27.7** · ΔE<sub>SQ</sub> **+96.7** kcal mol⁻¹

SI configurations 2S = 0: 29 082, 2S = 2: 48 090, 2S = 4: 31 275, 2S = 6: 9 635, 2S = 8: 1 209, 2S = 10: 1 · wall time 3867 s, 8 threads · fenrir01, 2026-10-14 · Psi4 d40267fc2 · input [HZ_S_cs_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZ_S_cs_1010.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 2.4 % of the state | |
| S1 | +2.436 | 1.60401 | listed configurations 11.7 % of the state | H −0.88, L +0.88 |
| S2 | +2.881 | 0.00000 | listed configurations 6.3 % of the state | H −1.24, L +1.17, L+1 +0.20 |
| S3 | +3.526 | 0.00000 | listed configurations 9.6 % of the state | H −0.92, L+1 +0.80 |
| S4 | +3.787 | 0.00000 | listed configurations 10.2 % of the state | H−1 −0.85, L +0.94 |
| S5 | +4.424 | 0.00000 | listed configurations 9.3 % of the state | H −0.78, L+2 +0.76 |
| T1 | +1.200 | | listed configurations 10.8 % of the state | H −0.84, L +0.83 |
| T2 | +2.461 | | listed configurations 6.3 % of the state | H−1 −0.39, H −0.45, L +0.33, L+1 +0.51 |
| T3 | +3.471 | | listed configurations 4.2 % of the state | H−2 −0.34, H −0.46, L +0.31, L+1 +0.20, L+2 +0.36 |
| Q1 | +4.195 | | H−1,H→L,L+1 100 % | H−1 −0.90, H −0.86, L +0.86, L+1 +0.90 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(e, f)

![HZ R_cs (10,10), orbital 93A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_cs/1010_93A.svg)**f** 93A · 0.0016\
−0.159461

![HZ R_cs (10,10), orbital 92A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_cs/1010_92A.svg)**e** 92A · 1.9984\
−0.196511

(d, g)

![HZ R_cs (10,10), orbital 94A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_cs/1010_94A.svg)**g** 94A · 0.0000\
−0.118230

![HZ R_cs (10,10), orbital 91A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_cs/1010_91A.svg)**d** 91A · 2.0000\
−0.253332

(c, h)

![HZ R_cs (10,10), orbital 95A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_cs/1010_95A.svg)**h** 95A · 0.0000\
−0.079032

![HZ R_cs (10,10), orbital 90A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_cs/1010_90A.svg)**c** 90A · 2.0000\
−0.289043

(b, i)

![HZ R_cs (10,10), orbital 96A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_cs/1010_96A.svg)**i** 96A · 0.0000\
−0.055829

![HZ R_cs (10,10), orbital 87A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_cs/1010_87A.svg)**b** 87A · 2.0000\
−0.303590

(a, j)

![HZ R_cs (10,10), orbital 97A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_cs/1010_97A.svg)**j** 97A · 0.0000\
−0.025869

![HZ R_cs (10,10), orbital 86A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_cs/1010_86A.svg)**a** 86A · 2.0000\
−0.337455

### R<sub>os</sub> {#geom-os}

R<sub>os</sub> · (2,2) · 2 orbitals · ΔE<sub>ST</sub> **+17.3** kcal mol⁻¹ · ΔE<sub>SQ</sub> **n/a**

SI configurations 2S = 0: 3, 2S = 2: 1 · wall time 138 s, 8 threads · fenrir04, 2026-10-12 · Psi4 b0c2d45a7 · input [HZ_S_os_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZ_S_os_22.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +2.126 | 1.40357 | H→L 100 % | H −0.85, L +0.85 |
| S2 | +2.932 | 0.00000 | H,H→L,L 100 % | H −1.70, L +1.70 |
| S3 | n/a | | | |
| S4 | n/a | | | |
| S5 | n/a | | | |
| T1 | +0.749 | | H→L 100 % | H −0.85, L +0.85 |
| T2 | n/a | | | |
| T3 | n/a | | | |
| Q1 | n/a | | | |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(a, b)

![HZ R_os (2,2), orbital 93A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_os/22_93A.svg)**b** 93A · 0.1483\
−0.138041

![HZ R_os (2,2), orbital 92A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_os/22_92A.svg)**a** 92A · 1.8517\
−0.187754

R<sub>os</sub> · (4,4) · 4 orbitals · ΔE<sub>ST</sub> **+19.4** · ΔE<sub>SQ</sub> **+90.5** kcal mol⁻¹

SI configurations 2S = 0: 18, 2S = 2: 11, 2S = 4: 1 · wall time 542 s, 8 threads · fenrir04, 2026-10-12 · Psi4 b0c2d45a7 · input [HZ_S_os_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZ_S_os_44.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 99 %, H−1,H→L,L+1 1 % | |
| S1 | +2.282 | 1.49894 | H→L 99 % | H −0.85, L +0.85 |
| S2 | +2.739 | 0.00000 | H,H→L,L 82 %, H→L+1 12 %, H−1→L 6 % | H −1.43, L +1.37, L+1 +0.16 |
| S3 | +3.357 | 0.00000 | H→L+1 89 %, H,H→L,L 10 %, H−1,H→L,L+1 1 % | H −0.93, L+1 +0.88 |
| S4 | +3.596 | 0.00000 | H−1→L 94 %, H,H→L,L 5 %, H−1,H→L,L+1 1 % | H−1 −0.93, L +0.89 |
| S5 | +4.734 | 0.58583 | H−1→L+1 99 % | H−1 −0.99, L+1 +0.99 |
| T1 | +0.841 | | H→L 97 %, H−1→L+1 3 % | H −0.82, L +0.82 |
| T2 | +2.457 | | H→L+1 58 %, H−1→L 41 %, H−1,H−1,H→L,L,L+1 1 % | H−1 −0.41, H −0.44, L +0.27, L+1 +0.58 |
| T3 | +3.405 | | H−1→L 58 %, H→L+1 41 %, H−1,H→L,L+1 1 % | H−1 −0.58, H −0.26, L +0.44, L+1 +0.40 |
| Q1 | +3.922 | | H−1,H→L,L+1 100 % | H−1 −0.98, H −0.84, L +0.84, L+1 +0.98 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(b, c)

![HZ R_os (4,4), orbital 93A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_os/44_93A.svg)**c** 93A · 0.1444\
−0.149018

![HZ R_os (4,4), orbital 92A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_os/44_92A.svg)**b** 92A · 1.8556\
−0.189606

(a, d)

![HZ R_os (4,4), orbital 94A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_os/44_94A.svg)**d** 94A · 0.0000\
−0.104519

![HZ R_os (4,4), orbital 91A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_os/44_91A.svg)**a** 91A · 2.0000\
−0.252035

R<sub>os</sub> · (6,6) · 6 orbitals · ΔE<sub>ST</sub> **+20.3** · ΔE<sub>SQ</sub> **+94.1** kcal mol⁻¹

SI configurations 2S = 0: 161, 2S = 2: 153, 2S = 4: 41, 2S = 6: 1 · wall time 414 s, 8 threads · fenrir01, 2026-10-13 · Psi4 d40267fc2 · input [HZ_S_os_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZ_S_os_66.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +2.138 | 1.43570 | H→L 100 % | H −0.83, L +0.83 |
| S2 | +2.491 | 0.00000 | H,H→L,L 96 %, H−2→L 4 % | H −1.37, L +1.35 |
| S3 | +3.283 | 0.00000 | H→L+1 97 %, H,H→L,L 3 % | H −0.87, L+1 +0.88 |
| S4 | +3.572 | 0.00000 | H−1→L 98 %, H→L+1 2 % | H−1 −0.90, L +0.82 |
| S5 | +4.225 | 0.00000 | H→L+2 94 %, H−2→L 6 % | H −0.84, L +0.20, L+2 +0.77 |
| T1 | +0.879 | | H→L 99 %, H−1→L+1 1 % | H −0.83, L +0.83 |
| T2 | +2.538 | | H→L+1 59 %, H−1→L 41 % | H−1 −0.37, H −0.45, L +0.28, L+1 +0.54 |
| T3 | +3.369 | | H−1→L 46 %, H→L+1 43 %, H−2→L 11 % | H−1 −0.44, H −0.31, L +0.42, L+1 +0.42 |
| Q1 | +4.082 | | H−1,H→L,L+1 99 %, H−2,H→L,L+2 1 % | H−1 −0.97, H −0.84, L +0.84, L+1 +0.97 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(c, d)

![HZ R_os (6,6), orbital 93A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_os/66_93A.svg)**d** 93A · 0.1218\
−0.156956

![HZ R_os (6,6), orbital 92A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_os/66_92A.svg)**c** 92A · 1.8782\
−0.190040

(b, e)

![HZ R_os (6,6), orbital 94A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_os/66_94A.svg)**e** 94A · 0.0000\
−0.107221

![HZ R_os (6,6), orbital 91A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_os/66_91A.svg)**b** 91A · 2.0000\
−0.253842

(a, f)

![HZ R_os (6,6), orbital 95A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_os/66_95A.svg)**f** 95A · 0.0000\
−0.063057

![HZ R_os (6,6), orbital 90A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_os/66_90A.svg)**a** 90A · 2.0000\
−0.288457

R<sub>os</sub> · (8,8) · 8 orbitals · ΔE<sub>ST</sub> **+20.1** · ΔE<sub>SQ</sub> **+92.1** kcal mol⁻¹

SI configurations 2S = 0: 1 934, 2S = 2: 2 524, 2S = 4: 1 172, 2S = 6: 199, 2S = 8: 1 · wall time 464 s, 8 threads · fenrir01, 2026-10-13 · Psi4 d40267fc2 · input [HZ_S_os_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZ_S_os_88.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 14.4 % of the state | |
| S1 | +2.294 | 1.42240 | H→L 100 % | H −0.81, L +0.81 |
| S2 | +2.597 | 0.00000 | H,H→L,L 100 % | H −1.31, L +1.29 |
| S3 | +3.260 | 0.00000 | H→L+1 100 % | H −0.84, L+1 +0.87 |
| S4 | +3.597 | 0.00000 | H−1→L 100 % | H−1 −0.89, L +0.78 |
| S5 | +4.259 | 0.00000 | H→L+2 100 % | H −0.83, L +0.18, L+2 +0.77 |
| T1 | +0.873 | | H→L 100 % | H −0.81, L +0.81 |
| T2 | +2.479 | | H→L+1 61 %, H−1→L 39 % | H−1 −0.36, H −0.42, L +0.23, L+1 +0.55 |
| T3 | +3.351 | | H−1→L 54 %, H→L+1 46 % | H−1 −0.49, H −0.28, L +0.42, L+1 +0.41 |
| Q1 | +3.994 | | H−1,H→L,L+1 100 % | H−1 −0.91, H −0.82, L +0.81, L+1 +0.91 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(d, e)

![HZ R_os (8,8), orbital 93A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_os/88_93A.svg)**e** 93A · 0.1599\
−0.165943

![HZ R_os (8,8), orbital 92A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_os/88_92A.svg)**d** 92A · 1.8401\
−0.192222

(c, f)

![HZ R_os (8,8), orbital 94A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_os/88_94A.svg)**f** 94A · 0.0000\
−0.115359

![HZ R_os (8,8), orbital 91A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_os/88_91A.svg)**c** 91A · 2.0000\
−0.252148

(b, g)

![HZ R_os (8,8), orbital 95A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_os/88_95A.svg)**g** 95A · 0.0000\
−0.065482

![HZ R_os (8,8), orbital 90A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_os/88_90A.svg)**b** 90A · 2.0000\
−0.288988

(a, h)

![HZ R_os (8,8), orbital 96A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_os/88_96A.svg)**h** 96A · 0.0000\
−0.052131

![HZ R_os (8,8), orbital 87A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_os/88_87A.svg)**a** 87A · 2.0000\
−0.301855

R<sub>os</sub> · (10,10) · 10 orbitals · ΔE<sub>ST</sub> **+20.6** · ΔE<sub>SQ</sub> **+88.0** kcal mol⁻¹

SI configurations 2S = 0: 29 082, 2S = 2: 48 090, 2S = 4: 31 275, 2S = 6: 9 635, 2S = 8: 1 209, 2S = 10: 1 · wall time 4489 s, 8 threads · fenrir01, 2026-10-14 · Psi4 d40267fc2 · input [HZ_S_os_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZ_S_os_1010.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 3.0 % of the state | |
| S1 | +2.389 | 1.42486 | listed configurations 11.7 % of the state | H −0.80, L +0.80 |
| S2 | +2.722 | 0.00000 | listed configurations 8.1 % of the state | H −1.31, L +1.28 |
| S3 | +3.294 | 0.00000 | listed configurations 10.2 % of the state | H −0.82, L+1 +0.86 |
| S4 | +3.615 | 0.00000 | listed configurations 10.5 % of the state | H−1 −0.88, L +0.75 |
| S5 | +4.342 | 0.00000 | listed configurations 9.6 % of the state | H −0.84, L+2 +0.82 |
| T1 | +0.894 | | listed configurations 11.7 % of the state | H −0.80, L +0.80 |
| T2 | +2.426 | | listed configurations 6.0 % of the state | H−1 −0.37, H −0.38, L +0.23, L+1 +0.53 |
| T3 | +3.375 | | listed configurations 4.2 % of the state | H−2 −0.22, H−1 −0.25, H −0.34, L +0.32, L+1 +0.36 |
| Q1 | +3.814 | | H−1,H→L,L+1 100 % | H−1 −0.90, H −0.80, L +0.79, L+1 +0.91 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(e, f)

![HZ R_os (10,10), orbital 93A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_os/1010_93A.svg)**f** 93A · 0.1716\
−0.172054

![HZ R_os (10,10), orbital 92A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_os/1010_92A.svg)**e** 92A · 1.8284\
−0.193584

(d, g)

![HZ R_os (10,10), orbital 94A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_os/1010_94A.svg)**g** 94A · 0.0000\
−0.121126

![HZ R_os (10,10), orbital 91A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_os/1010_91A.svg)**d** 91A · 2.0000\
−0.251327

(c, h)

![HZ R_os (10,10), orbital 95A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_os/1010_95A.svg)**h** 95A · 0.0000\
−0.079039

![HZ R_os (10,10), orbital 90A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_os/1010_90A.svg)**c** 90A · 2.0000\
−0.286992

(b, i)

![HZ R_os (10,10), orbital 96A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_os/1010_96A.svg)**i** 96A · 0.0000\
−0.056800

![HZ R_os (10,10), orbital 87A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_os/1010_87A.svg)**b** 87A · 2.0000\
−0.301242

(a, j)

![HZ R_os (10,10), orbital 97A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_os/1010_97A.svg)**j** 97A · 0.0000\
−0.024345

![HZ R_os (10,10), orbital 85A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_S_os/1010_85A.svg)**a** 85A · 2.0000\
−0.338000

### R<sub>T</sub> {#geom-t}

R<sub>T</sub> · (2,2) · 2 orbitals · ΔE<sub>ST</sub> **+10.4** kcal mol⁻¹ · ΔE<sub>SQ</sub> **n/a**

SI configurations 2S = 0: 3, 2S = 2: 1 · wall time 148 s, 8 threads · fenrir03, 2026-10-12 · Psi4 b0c2d45a7 · input [HZ_T_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZ_T_22.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +2.081 | 1.01359 | H→L 100 % | H −0.69, L +0.69 |
| S2 | +2.572 | 0.00000 | H,H→L,L 100 % | H −1.38, L +1.38 |
| S3 | n/a | | | |
| S4 | n/a | | | |
| S5 | n/a | | | |
| T1 | +0.449 | | H→L 100 % | H −0.69, L +0.69 |
| T2 | n/a | | | |
| T3 | n/a | | | |
| Q1 | n/a | | | |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(a, b)

![HZ R_T (2,2), orbital 93A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_T/22_93A.svg)**b** 93A · 0.3115\
−0.145153

![HZ R_T (2,2), orbital 92A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_T/22_92A.svg)**a** 92A · 1.6885\
−0.182024

R<sub>T</sub> · (4,4) · 4 orbitals · ΔE<sub>ST</sub> **+12.7** · ΔE<sub>SQ</sub> **+83.1** kcal mol⁻¹

SI configurations 2S = 0: 18, 2S = 2: 11, 2S = 4: 1 · wall time 527 s, 8 threads · fenrir03, 2026-10-12 · Psi4 b0c2d45a7 · input [HZ_T_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZ_T_44.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 99 %, H−1,H→L,L+1 1 % | |
| S1 | +2.231 | 1.14146 | H→L 99 %, H−1,H,H→L,L,L+1 1 % | H −0.70, L +0.70 |
| S2 | +2.469 | 0.00000 | H,H→L,L 88 %, ground (reference pairs) 8 %, H→L+1 4 % | H −1.29, L +1.27 |
| S3 | +3.267 | 0.00000 | H→L+1 91 %, H,H→L,L 5 %, H−1→L 4 % | H −0.70, L −0.15, L+1 +0.89 |
| S4 | +3.535 | 0.00000 | H−1→L 94 %, H→L+1 5 %, H,H→L,L 1 % | H−1 −0.92, H +0.22, L +0.66 |
| S5 | +4.624 | 0.68249 | H−1→L+1 99 %, H−1,H,H→L,L,L+1 1 % | H−1 −0.98, L+1 +0.98 |
| T1 | +0.553 | | H→L 98 %, H−1→L+1 2 % | H −0.69, L +0.69 |
| T2 | +2.516 | | H→L+1 60 %, H−1→L 40 %, H−1,H,H→L,L+1,L+1 1 % | H−1 −0.39, H −0.31, L+1 +0.59 |
| T3 | +3.332 | | H−1→L 60 %, H→L+1 40 %, H−1,H→L,L+1 1 % | H−1 −0.58, L +0.31, L+1 +0.39 |
| Q1 | +3.605 | | H−1,H→L,L+1 100 % | H−1 −0.98, H −0.70, L +0.70, L+1 +0.98 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(b, c)

![HZ R_T (4,4), orbital 93A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_T/44_93A.svg)**c** 93A · 0.3165\
−0.157121

![HZ R_T (4,4), orbital 92A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_T/44_92A.svg)**b** 92A · 1.6835\
−0.185167

(a, d)

![HZ R_T (4,4), orbital 94A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_T/44_94A.svg)**d** 94A · 0.0000\
−0.106467

![HZ R_T (4,4), orbital 91A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_T/44_91A.svg)**a** 91A · 2.0000\
−0.250753

R<sub>T</sub> · (6,6) · 6 orbitals · ΔE<sub>ST</sub> **+13.5** · ΔE<sub>SQ</sub> **+86.4** kcal mol⁻¹

SI configurations 2S = 0: 161, 2S = 2: 153, 2S = 4: 41, 2S = 6: 1 · wall time 325 s, 8 threads · fenrir06, 2026-10-13 · Psi4 d40267fc2 · input [HZ_T_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZ_T_66.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | ground (reference pairs) 100 % | |
| S1 | +2.086 | 1.16810 | H→L 99 %, H−1,H,H→L,L,L+2 1 % | H −0.71, L +0.71 |
| S2 | +2.191 | 0.00000 | H,H→L,L 96 %, H−2→L 4 % | H −1.21, L +1.21 |
| S3 | +3.151 | 0.00000 | H→L+1 95 %, H−1→L 5 % | H −0.67, L+1 +0.86 |
| S4 | +3.494 | 0.00000 | H−1→L 95 %, H→L+1 5 % | H−1 −0.85, L +0.63 |
| S5 | +4.079 | 0.00000 | H→L+2 73 %, H−2→L 27 % | H−2 −0.27, H −0.56, L +0.21, L+2 +0.64 |
| T1 | +0.584 | | H→L 99 %, H−1→L+1 1 % | H −0.71, L +0.71 |
| T2 | +2.531 | | H→L+1 61 %, H−1→L 39 % | H−1 −0.35, H −0.35, L+1 +0.56 |
| T3 | +3.273 | | H−1→L 55 %, H→L+1 45 % | H−1 −0.48, H −0.15, L +0.34, L+1 +0.39 |
| Q1 | +3.748 | | H−1,H→L,L+1 100 % | H−1 −0.97, H −0.72, L +0.72, L+1 +0.97 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(c, d)

![HZ R_T (6,6), orbital 93A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_T/66_93A.svg)**d** 93A · 0.3104\
−0.165527

![HZ R_T (6,6), orbital 92A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_T/66_92A.svg)**c** 92A · 1.6896\
−0.186811

(b, e)

![HZ R_T (6,6), orbital 94A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_T/66_94A.svg)**e** 94A · 0.0000\
−0.109387

![HZ R_T (6,6), orbital 91A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_T/66_91A.svg)**b** 91A · 2.0000\
−0.252737

(a, f)

![HZ R_T (6,6), orbital 95A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_T/66_95A.svg)**f** 95A · 0.0000\
−0.063990

![HZ R_T (6,6), orbital 90A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_T/66_90A.svg)**a** 90A · 2.0000\
−0.288303

R<sub>T</sub> · (8,8) · 8 orbitals · ΔE<sub>ST</sub> **+13.7** · ΔE<sub>SQ</sub> **+85.0** kcal mol⁻¹

SI configurations 2S = 0: 1 934, 2S = 2: 2 524, 2S = 4: 1 172, 2S = 6: 199, 2S = 8: 1 · wall time 376 s, 8 threads · fenrir06, 2026-10-13 · Psi4 d40267fc2 · input [HZ_T_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZ_T_88.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 33.6 % of the state | |
| S1 | +2.237 | 1.20024 | H→L 100 % | H −0.71, L +0.70 |
| S2 | +2.372 | 0.00000 | H,H→L,L 100 % | H −1.20, L +1.20 |
| S3 | +3.114 | 0.00000 | H→L+1 100 % | H −0.65, L+1 +0.84 |
| S4 | +3.506 | 0.00000 | H−1→L 100 % | H−1 −0.84, L +0.60 |
| S5 | +4.109 | 0.00000 | H→L+2 100 % | H−2 −0.22, H −0.61, L +0.17, L+2 +0.67 |
| T1 | +0.593 | | H→L 100 % | H −0.71, L +0.71 |
| T2 | +2.451 | | H→L+1 62 %, H−1→L 38 % | H−1 −0.35, H −0.34, L+1 +0.57 |
| T3 | +3.232 | | H−1→L 58 %, H→L+1 42 % | H−1 −0.52, L +0.34, L+1 +0.38 |
| Q1 | +3.687 | | H−1,H→L,L+1 100 % | H−1 −0.91, H −0.72, L +0.71, L+1 +0.91 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(d, e)

![HZ R_T (8,8), orbital 93A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_T/88_93A.svg)**e** 93A · 0.3316\
−0.173812

![HZ R_T (8,8), orbital 92A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_T/88_92A.svg)**d** 92A · 1.6684\
−0.189677

(c, f)

![HZ R_T (8,8), orbital 94A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_T/88_94A.svg)**f** 94A · 0.0000\
−0.117756

![HZ R_T (8,8), orbital 91A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_T/88_91A.svg)**c** 91A · 2.0000\
−0.251187

(b, g)

![HZ R_T (8,8), orbital 95A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_T/88_95A.svg)**g** 95A · 0.0000\
−0.067323

![HZ R_T (8,8), orbital 90A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_T/88_90A.svg)**b** 90A · 2.0000\
−0.289452

(a, h)

![HZ R_T (8,8), orbital 96A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_T/88_96A.svg)**h** 96A · 0.0000\
−0.051891

![HZ R_T (8,8), orbital 87A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_T/88_87A.svg)**a** 87A · 2.0000\
−0.299852

R<sub>T</sub> · (10,10) · 10 orbitals · ΔE<sub>ST</sub> **+14.0** · ΔE<sub>SQ</sub> **+85.1** kcal mol⁻¹

SI configurations 2S = 0: 29 082, 2S = 2: 48 090, 2S = 4: 31 275, 2S = 6: 9 635, 2S = 8: 1 209, 2S = 10: 1 · wall time 2816 s, 8 threads · fenrir04, 2026-10-14 · Psi4 d40267fc2 · input [HZ_T_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZ_T_1010.py.txt)

| State | E − E(S0) / eV | f (length) | Leading patterns | ΔD |
| - | - | - | - | - |
| S0 | 0.000 | | listed configurations 3.6 % of the state | |
| S1 | +2.308 | 1.23640 | listed configurations 11.7 % of the state | H −0.70, L +0.70 |
| S2 | +2.411 | 0.00000 | listed configurations 8.1 % of the state | H −1.18, L +1.18 |
| S3 | +3.125 | 0.00000 | listed configurations 10.2 % of the state | H −0.65, L+1 +0.86 |
| S4 | +3.541 | 0.00000 | listed configurations 10.2 % of the state | H−1 −0.85, L +0.61 |
| S5 | +4.055 | 0.00000 | listed configurations 6.3 % of the state | H−2 −0.27, H −0.57, L +0.28, L+2 +0.58 |
| T1 | +0.605 | | listed configurations 11.7 % of the state | H −0.71, L +0.71 |
| T2 | +2.469 | | listed configurations 6.6 % of the state | H−1 −0.34, H −0.34, L+1 +0.57 |
| T3 | +3.258 | | listed configurations 5.7 % of the state | H−1 −0.48, H −0.15, L +0.34, L+1 +0.37 |
| Q1 | +3.690 | | H−1,H→L,L+1 100 % | H−1 −0.89, H −0.71, L +0.71, L+1 +0.90 |

**slot** MO · SA-REKS FON / ε (E<sub>h</sub>); header: (bonding, antibonding) slots of the pair

(e, f)

![HZ R_T (10,10), orbital 93A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_T/1010_93A.svg)**f** 93A · 0.3361\
−0.179594

![HZ R_T (10,10), orbital 92A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_T/1010_92A.svg)**e** 92A · 1.6639\
−0.190891

(d, g)

![HZ R_T (10,10), orbital 94A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_T/1010_94A.svg)**g** 94A · 0.0000\
−0.120991

![HZ R_T (10,10), orbital 91A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_T/1010_91A.svg)**d** 91A · 2.0000\
−0.250908

(c, h)

![HZ R_T (10,10), orbital 95A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_T/1010_95A.svg)**h** 95A · 0.0000\
−0.076034

![HZ R_T (10,10), orbital 90A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_T/1010_90A.svg)**c** 90A · 2.0000\
−0.287688

(b, i)

![HZ R_T (10,10), orbital 96A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_T/1010_96A.svg)**i** 96A · 0.0000\
−0.060882

![HZ R_T (10,10), orbital 87A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_T/1010_87A.svg)**b** 87A · 2.0000\
−0.299687

(a, j)

![HZ R_T (10,10), orbital 99A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_T/1010_99A.svg)**j** 99A · 0.0000\
0.046588

![HZ R_T (10,10), orbital 83A](https://reksstudio.github.io/v2/figures/zeth/orb/HZ_T/1010_83A.svg)**a** 83A · 2.0000\
−0.389615

[Back to the compounds](https://reksstudio.github.io/v2/main/results/zethrenes/index.md#c-hz) · [HZD →](https://reksstudio.github.io/v2/main/results/zethrenes/hzd/index.md)

## Linked files

[inputs/zethrenes/HZ_S_cs_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZ_S_cs_22.py.txt)

[inputs/zethrenes/HZ_S_cs_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZ_S_cs_44.py.txt)

[inputs/zethrenes/HZ_S_cs_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZ_S_cs_66.py.txt)

[inputs/zethrenes/HZ_S_cs_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZ_S_cs_88.py.txt)

[inputs/zethrenes/HZ_S_cs_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZ_S_cs_1010.py.txt)

[inputs/zethrenes/HZ_S_os_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZ_S_os_22.py.txt)

[inputs/zethrenes/HZ_S_os_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZ_S_os_44.py.txt)

[inputs/zethrenes/HZ_S_os_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZ_S_os_66.py.txt)

[inputs/zethrenes/HZ_S_os_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZ_S_os_88.py.txt)

[inputs/zethrenes/HZ_S_os_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZ_S_os_1010.py.txt)

[inputs/zethrenes/HZ_T_22.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZ_T_22.py.txt)

[inputs/zethrenes/HZ_T_44.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZ_T_44.py.txt)

[inputs/zethrenes/HZ_T_66.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZ_T_66.py.txt)

[inputs/zethrenes/HZ_T_88.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZ_T_88.py.txt)

[inputs/zethrenes/HZ_T_1010.py](https://reksstudio.github.io/v2/inputs/zethrenes/HZ_T_1010.py.txt)
