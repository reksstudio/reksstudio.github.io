# Exactness of the implementation — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/exactness/>

Psi4 f31cf1f94, 2026-10-15: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# Exactness of the implementation

Identities, finite differences and conservation checks of the shipped code, each against an exact oracle.

Reference class: implementation vs exact oracle

Model identities to ≤ 10<sup>−10</sup> E<sub>h</sub>; analytic gradients vs FD5 within 7.8·10<sup>−5</sup> E<sub>h</sub> a<sub>0</sub><sup>−1</sup> (worst case, BH wide geminals).

[Model identities and size consistency](https://reksstudio.github.io/v2/main/results/exactness/index.md#identities) · [Derivatives and dynamics](https://reksstudio.github.io/v2/main/results/exactness/index.md#derivatives)

Figure to be added: overview figure, max deviation per check against its criterion

**Scope:** Exact checks of the generated equations reach (4,6) PPS and (2,2) SI couplings; (6,6) and (8,8) checks to be added.

## Model identities and size consistency

| System | Quantity | Identity tested | Oracle | Criterion | Max deviation | Psi4 revision | Manual |
| - | - | - | - | - | - | - | - |
| BH | E(PPS1), REKS(2,3) | one geminal = CASSCF(2,M) | CASSCF(2,3) | to be added | ≤ 10<sup>−10</sup> E<sub>h</sub> | to be added | [Lone pair: REKS(2,3)](https://reksstudio.github.io/v2/manual/wide-geminals/index.md#wide-lone-pair) |
| to be added | E(PPS1), (4,4), (4,5), (4,6) | HF, δ → ∞: E(PPS1) = ⟨geminal product\|H\|geminal product⟩ | geminal product | to be added | ≤ 10<sup>−11</sup> E<sub>h</sub> | to be added | [Bond and lone pair](https://reksstudio.github.io/v2/manual/wide-geminals/index.md#wide-two-pairs) |
| H<sub>2</sub> | GVB(2,2)–(2,4) | GVB = CASSCF | CASSCF | to be added | ≤ 9.9·10<sup>−12</sup> E<sub>h</sub> | to be added (rerun at the site revision) | to be added |
| two H<sub>2</sub> at 50 Å | total energy | E(2 H<sub>2</sub>) = 2 E(H<sub>2</sub>) | two separate runs | to be added | 9.3·10<sup>−11</sup> E<sub>h</sub> | to be added (rerun at the site revision) | to be added |
| He–H–H | SI couplings | SI couplings = MO-integral evaluation | MO-integral oracle | to be added | agreement to 6 decimals | to be added (rerun at the site revision) | to be added |
| BH | ¹Π / ³Π pairs | degenerate states stay degenerate | symmetry | to be added | 1.6·10<sup>−7</sup> E<sub>h</sub> | to be added | [States: SI-SA-REKS(2,3)](https://reksstudio.github.io/v2/manual/wide-geminals/index.md#wide-states) |

## Derivatives and dynamics

| System | Quantity | Identity tested | Oracle | Criterion | Max deviation | Psi4 revision | Manual |
| - | - | - | - | - | - | - | - |
| C<sub>2</sub>H<sub>4</sub> | analytic gradients | analytic = derivative of E | FD5 | to be added | 5.6·10<sup>−7</sup> E<sub>h</sub> a<sub>0</sub><sup>−1</sup> | to be added | [Gradients and couplings against FD](https://reksstudio.github.io/v2/manual/dynamics/index.md#grad-fd) |
| butadiene, (4,4) | analytic gradients | analytic = derivative of E | FD5 | to be added | 8.0·10<sup>−6</sup> / 3.2·10<sup>−6</sup> / 7.1·10<sup>−5</sup> E<sub>h</sub> a<sub>0</sub><sup>−1</sup> (80° near-degenerate case) | to be added | [Gradients and couplings against FD](https://reksstudio.github.io/v2/manual/dynamics/index.md#grad-fd) |
| BH, wide geminals | analytic gradients, all roots | analytic = derivative of E | FD5 | to be added | 2.9·10<sup>−9</sup> … 7.8·10<sup>−5</sup> E<sub>h</sub> a<sub>0</sub><sup>−1</sup> | to be added | [Gradients](https://reksstudio.github.io/v2/manual/wide-geminals/index.md#wide-gradients) |
| C<sub>2</sub>H<sub>4</sub> | NAC, model part | model part = FD of H and S | FD | to be added | to be added | to be added | [Gradients and couplings against FD](https://reksstudio.github.io/v2/manual/dynamics/index.md#grad-fd) |
| C<sub>2</sub>H<sub>4</sub> S1, hexatriene T1 | MD total energy | to be added (no exact oracle; dt² scaling candidate) | to be added | to be added | to be added | to be added | [Check the trajectory](https://reksstudio.github.io/v2/manual/dynamics/index.md#check-trajectory) |

## Run, ask, cite

* Manual: [worked inputs and checks](https://reksstudio.github.io/v2/manual/dynamics/index.md#grad-fd)
* [Manual: Start](https://reksstudio.github.io/v2/manual/index.md#overview) · [Install](https://reksstudio.github.io/v2/docs/index.md#install) · [Cite](https://reksstudio.github.io/v2/docs/index.md#cite) · [Contact](https://reksstudio.github.io/v2/docs/index.md#contact)
* [Back to the Results index](https://reksstudio.github.io/v2/main/results/index.md#row-exactness)

Other results: [H chains](https://reksstudio.github.io/v2/main/results/h-chains/index.md) · [Bond breaking](https://reksstudio.github.io/v2/main/results/bond-breaking/index.md) · [C<sub>2</sub>](https://reksstudio.github.io/v2/main/results/c2/index.md) · [QUEST](https://reksstudio.github.io/v2/main/results/quest/index.md) · [TTR](https://reksstudio.github.io/v2/main/results/ttr/index.md) · [Zethrenes](https://reksstudio.github.io/v2/main/results/zethrenes/index.md) · [C<sub>2</sub>H<sub>4</sub> photochemistry](https://reksstudio.github.io/v2/main/results/c2h4-photochemistry/index.md)
