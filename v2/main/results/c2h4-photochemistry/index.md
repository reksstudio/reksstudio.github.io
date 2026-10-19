# Ethylene photochemistry: MECI, torsion barrier, surface hopping — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/c2h4-photochemistry/>

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# Ethylene photochemistry: MECI, torsion barrier, surface hopping

S0/S1 minimum-energy conical intersection, the S0 torsion transition state by three methods, and an FSSH trajectory of C<sub>2</sub>H<sub>4</sub>, all from SSR gradients and couplings.

Reference class: workflow demonstration

MECI gap 1.49·10<sup>−4</sup> E<sub>h</sub>; S0 torsion barrier 0.1068793 E<sub>h</sub> = 2.908 eV.

[S0/S1 MECI](#meci) · [S0 torsion transition state](#ts) · [FSSH trajectory](#trajectory)

## S0/S1 MECI

Gap 1.49·10<sup>−4</sup> E<sub>h</sub>; twist 88–90°, pyramidalization 76°, R<sub>CC</sub> 1.377 Å.

Figure to be added: MECI structure

### Setup

Method: to be added

Input: to be added

**Provenance:** Site run, Psi4 d40267fc2 (2026-10-13).

## S0 torsion transition state

Barrier 0.1068793 E<sub>h</sub> = 2.908 eV, by NEB, dimer and P-RFO.

Figure to be added: the three TS searches side by side

| Method | Barrier / E<sub>h</sub> |
| - | - |
| NEB | to be added |
| dimer | to be added |
| P-RFO | to be added |

### Setup

Optimizer: DL-FIND

Input: to be added

**Provenance:** Site run, Psi4 d40267fc2 (2026-10-13).

## FSSH trajectory

Trajectory, state history and total energy: Manual, Check the trajectory (not redrawn here).

[Check the trajectory](https://reksstudio.github.io/v2/manual/dynamics/index.md#check-trajectory) · [Cost of one dynamics step](https://reksstudio.github.io/v2/main/cost/index.md#dynamics-step)

**Provenance:** Manual run; Psi4 revision as stated there.

**Scope:** No reference MECI compared. Gradients, NACs and SSR dynamics are capabilities of the method lineage (History); here they are run with REKS Studio's implementation.

## Run, ask, cite

* Manual: [worked inputs and checks](https://reksstudio.github.io/v2/manual/dynamics/index.md#dynamics-inputs)
* [Manual: Start](https://reksstudio.github.io/v2/manual/index.md#overview) · [Install](https://reksstudio.github.io/v2/docs/index.md#install) · [Cite](https://reksstudio.github.io/v2/docs/index.md#cite) · [Contact](https://reksstudio.github.io/v2/docs/index.md#contact)
* [Back to the Results index](https://reksstudio.github.io/v2/main/results/index.md#row-c2h4-photochemistry)

Other results: [Exactness](https://reksstudio.github.io/v2/main/results/exactness/index.md) · [H chains](https://reksstudio.github.io/v2/main/results/h-chains/index.md) · [Bond breaking](https://reksstudio.github.io/v2/main/results/bond-breaking/index.md) · [C<sub>2</sub>](https://reksstudio.github.io/v2/main/results/c2/index.md) · [QUEST](https://reksstudio.github.io/v2/main/results/quest/index.md) · [TTR](https://reksstudio.github.io/v2/main/results/ttr/index.md) · [Zethrenes](https://reksstudio.github.io/v2/main/results/zethrenes/index.md)
