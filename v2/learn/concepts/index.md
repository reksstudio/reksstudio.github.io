# Concepts — REKS Studio Learn

HTML: <https://reksstudio.github.io/v2/learn/concepts/>

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

[Learn](https://reksstudio.github.io/v2/learn/index.md) › Concepts

# Concepts

## Concepts {#concepts}

### Active space, core, virtual {#active-core-virtual}

[`REKS [N, M]`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-reks) places `N` active electrons in `M` active orbitals with fractional occupation. The other occupied orbitals form a doubly occupied core shared by every determinant; the orbitals above the active space are virtual.

Used in: [P1. One pair](https://reksstudio.github.io/v2/learn/path/p1/index.md#p1).

### Unit {#unit}

The active space is a list of units, one token each ([`REKS_GEMINAL_WIDTHS`](https://reksstudio.github.io/v2/learn/reference/index.md#reks_geminal_widths)); $K$ is the width, the number of orbitals of the unit. An ordinary pair is the unit `2`: an electron geminal of width 2, two electrons in a bonding and an antibonding orbital, $n_a + n_b = 2$ ([Geminals](#geminals)).

#### Width ≥ 3, holes, doublets {#unit-kinds}

| Unit | Electron | Hole |
| - | - | - |
| Geminal | `K`, K ≥ 2: 2 electrons; FON n, Σ n = 2 | `"hK"`, K ≥ 3: 2K − 2 electrons; FON h = 2 − n, Σ h = 2 |
| Doublet | `"dK"`, K ≥ 1: 1 electron; no FON | `"hdK"`, K ≥ 2: 2K − 1 electrons; no FON |

A hole unit is the particle–hole mirror of the electron unit: a width-2 hole geminal would be the ordinary pair and a width-1 hole doublet the SOMO, hence K ≥ 3 and K ≥ 2. An active space holds at least one geminal and at most one doublet; for odd N without a doublet token the SOMO is the implicit `d1`.

The PPS geminal over the slots $p_1, \dots, p_K$ of one electron geminal of width $K$:

$$
\Phi_0 = \sum_{k=1}^{K} s_k \sqrt{\tfrac{n_{p_k}}{2}}\;|p_k\bar p_k|, \qquad \sum_{k=1}^{K} n_{p_k} = 2, \qquad s = (+, -, \dots, -).
$$

For $K = 2$ this is $\Phi_0$ of [Geminals](#geminals). The anchor slot carries the + sign: the first slot of an electron geminal, default signs $(+, -, \dots, -)$; the last slot of a hole geminal, default signs $(-, \dots, -, +)$. For $K \ge 3$ the signs of the other $K - 1$ slots are variational: the FON solver compares the $2^{K-1}$ sign patterns, starting from the default, and keeps the lowest-energy one; the result is published as `REKS ROOT SIGNS` (`REKS M_ROOT SIGNS`, … for higher generations). A doublet carries no FON; its aufbau slot is the first orbital of an electron doublet, the last of a hole doublet.

With HF and $\delta \to \infty$ ([`reks_fon_interp_delta`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-reks_fon_interp_delta) $10^{10}$), $f(x) = \sqrt{x}$ ([Coupling Δ and factor f](#coupling)) and $E(\mathrm{PPS1})$ equals $\langle\Psi|H|\Psi\rangle$ of the product $\Psi$ of the geminals $\Phi_0$ in the converged orbitals, $H$ the Hamiltonian of the active space with the core frozen. A product of geminals is GVB, not CAS: it has no correlation between the geminals, so CASCI in the same orbitals is lower for two geminals; for one geminal CASCI equals $E(\mathrm{PPS1})$. Slots and seeds of each unit kind: [Slots of each unit kind](https://reksstudio.github.io/v2/learn/procedure/index.md#unit-slots).

Used in: [P1. One pair](https://reksstudio.github.io/v2/learn/path/p1/index.md#p1), [Lone pair over three orbitals: BH, REKS(2,3) 3](https://reksstudio.github.io/v2/learn/branch/units/index.md#case-wide-bh-23), [Hole geminal: REKS(4,3) h3](https://reksstudio.github.io/v2/learn/branch/units/index.md#case-hole-43), [Electron doublet over two orbitals: REKS(3,4) 2 d2](https://reksstudio.github.io/v2/learn/branch/units/index.md#case-doublet-34), [Implicit SOMO: REKS(3,3) 2 d1](https://reksstudio.github.io/v2/learn/branch/units/index.md#case-odd-33).

### Ensemble Kohn–Sham reference and FONs {#ensemble-fons}

The non-interacting reference density, with fractional occupation numbers (FONs) $n_q$ for the orbitals pseudo-degenerate at the Fermi level, is

$$
\rho_s = \sum_{k\in\mathrm{core}} 2|\varphi_k|^2 + \sum_{q\in\mathrm{active}} n_q|\varphi_q|^2,
$$

$$
0 \le n_q \le 2, \qquad \sum_q n_q = N.
$$

The energy functional follows from integration over the electron–electron coupling strength $\lambda$ from 0 to 1 at $\lambda$-independent FONs. The orbitals and the FONs are optimized variationally ([Filatov, WIREs Comput. Mol. Sci. 2015, 5, 146](#filatov2015-wires)).

Used in: [P1. One pair](https://reksstudio.github.io/v2/learn/path/p1/index.md#p1).

### Microstate {#microstate}

A microstate `L` is a Slater determinant of the shared orbitals with fixed integer spin-orbital occupations $n_{q,L}^{\sigma}$. Its energy is an ordinary Kohn–Sham energy with the chosen functional (local, non-local, hybrid or range-separated):

$$
E_L = E[\rho_L^{\alpha}, \rho_L^{\beta}].
$$

Used in: [P2. Broken π bond](https://reksstudio.github.io/v2/learn/path/p2/index.md#p2).

### Geminals {#geminals}

An active orbital pair $(p, q)$ holds two electrons; its FONs satisfy

$$
n_p + n_q = 2.
$$

There are six simplest geminals, three singlets and three triplets with $m = 0, \pm 1$:

$$
\begin{aligned} \Phi_0 &= \tfrac{1}{\sqrt2}\big(\sqrt{n_p}\,|p\bar p| - \sqrt{n_q}\,|q\bar q|\big) && \text{perfectly paired}\\ \Phi_2 &= \tfrac{1}{\sqrt2}\big(\sqrt{n_q}\,|p\bar p| + \sqrt{n_p}\,|q\bar q|\big) && \text{doubly excited}\\ \Phi_1 &= \tfrac{1}{\sqrt2}\big(|p\bar q| + |q\bar p|\big) && \text{open-shell singlet}\\ \Phi_{\mathrm{T0}} &= \tfrac{1}{\sqrt2}\big(|p\bar q| - |q\bar p|\big) && \text{triplet, } m = 0\\ \Phi_{\mathrm{T+}} &= |pq|, \quad \Phi_{\mathrm{T-}} = |\bar p\bar q| && \text{triplet, } m = \pm 1 \>. \end{aligned}
$$

A configuration of REKS(M,M) is a product of these four $m = 0$ geminals; $\Phi_{\mathrm{T+}}$ and $\Phi_{\mathrm{T-}}$ enter only the spin-coupled configurations of $2S \ge 4$ ([Spin manifold and run sector](#run-sector)).

Used in: [P1. One pair](https://reksstudio.github.io/v2/learn/path/p1/index.md#p1).

### Pairing scheme {#pairing-scheme}

A pairing scheme partitions the `M` active orbitals into $P = N/2$ geminals. With pairs only (REKS(M,M)) each pair joins one orbital of the lower half with one of the upper half:

$$
P = M/2.
$$

With [`REKS_GEMINAL_WIDTHS`](https://reksstudio.github.io/v2/learn/reference/index.md#reks_geminal_widths) unit $i$ spans $K_i$ orbitals, $\sum_i K_i = M$: an electron geminal holds 2 electrons, a hole geminal $2K_i - 2$, a doublet unit 1 or $2K_i - 1$. `Pairing schemes` prints all orbitals of each unit.

Scheme 0 pairs the active slots ($k = 0, 1, \dots$, labelled a, b, …) from the outside in: (2,2) (a,b); (4,4) (a,d) & (b,c); (6,6) (a,f) & (b,e) & (c,d):

$$
(k,\; M-1-k), \qquad k = 0, \dots, P-1.
$$

REKS(M,M) with pairs has $P!$ schemes, numbered from 0: one for (2,2), two for (4,4), six for (6,6) ([Active space and catalog](https://reksstudio.github.io/v2/learn/reference/index.md#catalog)).

Used in: [P4. Two pairs](https://reksstudio.github.io/v2/learn/path/p4/index.md#p4).

### Configuration and its energy {#configuration-energy}

A configuration is the antisymmetrized product of the core and one geminal per electron pair within a given scheme:

$$
\Psi = \hat{A}\big[(\mathrm{core})\,\Phi_{t_1}(p_1, q_1)\cdots\Phi_{t_P}(p_P, q_P)\big].
$$

One scheme carries $3^P$ singlet configurations, named by type ([Active space and catalog](https://reksstudio.github.io/v2/learn/reference/index.md#catalog)). Its energy is a weighted sum of microstate energies, the coefficients being functions of the FONs ([Filatov et al., Phys. Chem. Chem. Phys. 2016, 18, 21040](#filatov2016-gvb-ansatz)):

$$
E^X = \sum_L C_L^X(\{n\})\,E_L, \qquad \sum_L C_L^X = S_{XX},
$$

the FON normalizes the configuration to 1 for pairs, and possibly below 1 for a configuration with wider geminals ([SI Hamiltonian and overlap](#si-hamiltonian)).

Used in: [P2. Broken π bond](https://reksstudio.github.io/v2/learn/path/p2/index.md#p2).

### Coupling Δ and factor f {#coupling}

The energy expressions contain, for each pair $(a, b)$, the coupling $\Delta_{ab}$ in place of the exchange integral $K_{ab}$, multiplied by $f(x)$ in place of the FON radical $\sqrt{x}$:

$$
\Delta_{ab} = \tfrac12\big[E(a\bar b) + E(b\bar a) - E(ab) - E(\bar a\bar b)\big],
$$

$$
f(x) = x^{\,1-\frac{x+\delta}{2(1+\delta)}}, \qquad x = n_a n_b.
$$

For REKS(2,2), with $f = f(n_a n_b)$, the configuration energies are

$$
\begin{aligned} E_{\mathrm{PPS}} &= \tfrac{n_a}{2}E(a\bar a) + \tfrac{n_b}{2}E(b\bar b) - f\,\Delta_{ab}\\ E_{\mathrm{DES}} &= \tfrac{n_b}{2}E(a\bar a) + \tfrac{n_a}{2}E(b\bar b) + f\,\Delta_{ab}\\ E_{\mathrm{OSS}} &= E(a\bar b) + E(b\bar a) - \tfrac12\big[E(ab) + E(\bar a\bar b)\big]\\ E_{\mathrm{T}} &= \tfrac12\big[E(ab) + E(\bar a\bar b)\big] \end{aligned}
$$

$E_{\mathrm{OSS}}$ and $E_{\mathrm{T}}$ carry no FON.

As the closed-shell limit ($n_a \to 2$) is approached, the factor $f$ suppresses the $\Delta$ term, thereby avoiding the double-counting of correlation by both the formalism and the functional. At $n_a = n_b = 1$ it equals 1 ([Moreira et al., J. Chem. Theory Comput. 2007, 3, 764](#moreira2007-interpolation)). $\delta$ is [`REKS_FON_INTERP_DELTA`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-reks_fon_interp_delta) (default 0.4, [Fractional occupation numbers (FONs)](https://reksstudio.github.io/v2/learn/reference/run-control/index.md#fons)).

Used in: [P2. Broken π bond](https://reksstudio.github.io/v2/learn/path/p2/index.md#p2), [Lone pair over three orbitals: BH, REKS(2,3) 3](https://reksstudio.github.io/v2/learn/branch/units/index.md#case-wide-bh-23).

### FON set and generation {#fon-generation}

The **generation** of a configuration is its number of open pairs: $\Phi_1$, and a triplet of geminals ($\Phi_{\mathrm{T+}}$, $\Phi_{\mathrm{T0}}$, $\Phi_{\mathrm{T-}}$) in a manifold of positive $2S$. A FON set keeps the FONs of one generation, pairing scheme, and run sector; all configurations of that set use the same FONs. $\Phi_0$ and $\Phi_2$ of one pair use the same FONs; $\Phi_1$ and $\Phi_{\mathrm{T0}}$ use none. FON-set labels: [FON sets](https://reksstudio.github.io/v2/learn/reference/index.md#fon-sets).

Used in: [P4. Two pairs](https://reksstudio.github.io/v2/learn/path/p4/index.md#p4).

### SA-REKS ensemble and weights {#sa-ensemble}

The SCF minimizes the ensemble energy over the orbitals and the FONs read by the SA configurations, at fixed weights $w_X$ (ensemble variational principle: [Gross et al., Phys. Rev. A 1988, 37, 2805](#gross1988-variational); SA-REKS: [Filatov, Top. Curr. Chem. 2016, 368, 97](#filatov2016-sa-reks)):

$$
E_{\mathrm{SA}} = \sum_X w_X E^X = \sum_L C_L E_L, \qquad C_L = \sum_X w_X C_L^X,
$$

$$
0 \le w_X \le 1, \qquad \sum_X w_X = 1.
$$

The default weights are equal ([`SA_REKS_WEIGHTS`](https://reksstudio.github.io/v2/learn/reference/index.md#sa_reks_weights)). $E_{\mathrm{SA}}$ is a weighted average of configuration energies, not the energy of a state; the variational principle bounds $E_{\mathrm{SA}}$, not an individual $E^X$. Extra determinants can be added to the ensemble using [`SA_REKS_EXTRA`](https://reksstudio.github.io/v2/learn/reference/index.md#sa_reks_extra).

Used in: [P2. Broken π bond](https://reksstudio.github.io/v2/learn/path/p2/index.md#p2), [A triplet configuration in the SA ensemble](https://reksstudio.github.io/v2/learn/branch/spin/index.md#case-hexatriene-sa-t1).

### Orbitals, orbital energies, SCF convergence {#orbitals-scf}

The orbitals satisfy, with orbital-specific Fock operators $\hat{F}_q$,

$$
f_q \hat{F}_q \varphi_q = \sum_p \varphi_p \varepsilon_{pq}, \qquad f_q = n_q/2.
$$

At convergence, the Lagrangian $\varepsilon_{pq}$ is symmetric (generalized Brillouin condition) but not diagonal, so the orbitals are not canonical. The printed orbital energies are the diagonal of the SA-REKS coupling Fock matrix in the MO basis and carry no Koopmans meaning; ionization energies come from EKT ([`REKS_EKT`](https://reksstudio.github.io/v2/learn/reference/index.md#reks_ekt)). The SCF is converged when $E_{\mathrm{SA}}$ is stationary and the orbital gradient vanishes ([SCF convergence engines](https://reksstudio.github.io/v2/learn/reference/run-control/index.md#scf-engines)).

Used in: [P3. Seed orbitals](https://reksstudio.github.io/v2/learn/path/p3/index.md#p3).

### Spin-polarized configurations {#sps-configurations}

In REKS(4,4) the double open-shell singlet (DOSS) and the doubly spin-polarized state (DSPS) both arise from two simultaneous OSS-type one-electron transitions between the active orbitals: DOSS couples two open-shell singlet pairs to an overall singlet, DSPS can be viewed as two triplet excitations coupled to an overall singlet, and the two are orthogonalized ([Filatov et al., J. Chem. Phys. 2017, 147, 064104](#filatov2017-extended-space)). Fully open configurations of different schemes overlap (overlap −½ for the two DOSS configurations of REKS(4,4)); the catalog replaces them by a set orthogonalized by sequential Gram–Schmidt procedure across schemes, the spin-polarized configurations (`SPS`) `DOSS_SPS_k`, `T_OSS_SPS_k`, …, in which each member $k$ after the first is orthogonal to the preceding members ([Komarov et al., ChemRxiv 2026](#komarov2026-reks-studio)). They carry no FON.

Used in: [P4. Two pairs](https://reksstudio.github.io/v2/learn/path/p4/index.md#p4).

### Spin manifold and run sector {#run-sector}

A manifold is one total spin $2S$ of the catalog. The sectors of a run are the manifolds addressed by any SA block or SI group, in ascending $2S$, sector 0 being the lowest. Every configuration has the canonical total $M_S$ (0 for even `N`, 1/2 for odd `N`), so all sectors share one determinant space and one set of orbitals, and the molecular multiplicity remains canonical (1 for even `N`, 2 for odd `N`) ([Active space](https://reksstudio.github.io/v2/learn/reference/index.md#active-space), [Spin manifolds (2S) and multi-manifold runs](https://reksstudio.github.io/v2/learn/reference/index.md#spin-manifolds)).

A 2S = 2 configuration holds one $\Phi_{\mathrm{T0}}$. In 2S ≥ 4 (`TT_SPS_0`, `TTT_SPS_0`) the $n_T$ triplet geminals couple to $S = n_T$ through $\Phi_{\mathrm{T+}}$, $\Phi_{\mathrm{T0}}$, $\Phi_{\mathrm{T-}}$ with Clebsch–Gordan coefficients, e.g.

$$
\mathrm{TT\_SPS\_0} = \tfrac{1}{\sqrt6}\,\Phi_{\mathrm{T-}}\Phi_{\mathrm{T+}} + \sqrt{\tfrac23}\,\Phi_{\mathrm{T0}}\Phi_{\mathrm{T0}} + \tfrac{1}{\sqrt6}\,\Phi_{\mathrm{T+}}\Phi_{\mathrm{T-}}.
$$

Used in: [P5. Spin states](https://reksstudio.github.io/v2/learn/path/p5/index.md#p5).

### SI cassette {#si-cassette}

A cassette is a set of configurations of one manifold over which the SI Hamiltonian and overlap are built and diagonalized after the SCF, in the converged SA orbitals. It is chosen independently of the SA pool. A run may hold several cassettes, each its own eigenproblem ([SI eigensolver](#si-solver)). The label `kSI-lSA-REKS(N,M)` denotes $k$ SI configurations in the orbitals of an SA ensemble of $l$ configurations ([`SI_REKS_CONFIGS`](https://reksstudio.github.io/v2/learn/reference/index.md#si_reks_configs)).

Used in: [P2. Broken π bond](https://reksstudio.github.io/v2/learn/path/p2/index.md#p2), [P4. Two pairs](https://reksstudio.github.io/v2/learn/path/p4/index.md#p4).

### SI-only FONs {#si-only-fons}

FONs that no SA configuration uses (higher generations, or schemes absent from the SA pool) are optimized once after the SCF, with the SA FONs held fixed. Each SI-only geminal belongs to its primary configuration $Y$, the lowest-index configuration of the cassette among those that use it. Its FONs minimize, at the microstate energies $E_L$ of the converged SA orbitals,

$$
E^Y = \sum_L C_L^Y(\{n\})\,E_L, \qquad \eta \le n_p \le 2 - \eta,
$$

for a pair; in a geminal of width $K$ each free FON is $\ge \eta$ and their sum $\le 2 - \eta$; $\eta$ = [`SI_REKS_FON_BOUND_MARGIN`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-si_reks_fon_bound_margin) (default $10^{-8}$). A FON pushed past its bound stops on it and counts as converged there. `REKS_<L>_FON` does not apply. The geminals of one generation with the same $Y$ are solved jointly; Gauss–Seidel sweeps over these groups repeat until no FON changes by more than $10^{-7}$. Output: [FONs of the SI-only geminals](https://reksstudio.github.io/v2/learn/reference/properties/index.md#si-fons).

Used in: [P4. Two pairs](https://reksstudio.github.io/v2/learn/path/p4/index.md#p4).

### SI Hamiltonian and overlap {#si-hamiltonian}

The diagonal elements of $\mathbf{H}$ are the configuration energies $E^X$. An off-diagonal element is the sum of the Slater–Condon elements between the microstates of the two configurations, times the FON factors of their geminals; its terms carry microstate energies $E_L$, active Fock elements of the microstates, and active two-electron integrals $(pq|rs)$, the latter unscaled with any functional (table `Off-diagonal channel`, [`REKS_REPORT_LEVEL`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-reks_report_level) ≥ 3). A one-electron excitation $p \to q$ in spin $\sigma$ from microstate $L$ to $L'$ takes the bra/ket mean of the two microstate Fock matrices, with the sign of the excitation:

$$
\langle L|\hat H|L'\rangle = \pm\tfrac12\big[F^{\sigma}_L + F^{\sigma}_{L'}\big]_{pq},
$$

$$
F^{\sigma}_L(pq) = h_{pq} + \sum_{c\,\in\,\text{core}}\big[2(pq|cc) - (pc|cq)\big] + \sum_{r\,\in\,L}\big[(pq|rr) - \delta_{\sigma_r\sigma}\,(pr|rq)\big],
$$

shown for HF; using a DFT functional, the exchange terms carry the exact-exchange fraction (the long-range fraction for the long-range part of a range-separated functional), and the spin-polarized XC potential of the microstate density (core included) is added. A spin-difference term takes the same mean of $\pm(F^{\alpha} - F^{\beta})$ over two microstates. $\mathbf{S}$ depends on the FONs only. Between configurations of pairs, it is diagonal within one scheme and non-diagonal across schemes; configurations of a wider geminal overlap within their scheme. Each cassette solves

$$
\mathbf{H}\mathbf{c} = E\,\mathbf{S}\mathbf{c}.
$$

Over (PPS, OSS, DES) the SSR(2,2) Hamiltonian, with $\mathbf S = \mathbf 1$, is

$$
\mathbf H = \begin{pmatrix} E_{\mathrm{PPS}} & \sqrt{n_a}\,X_a-\sqrt{n_b}\,X_b & 0\\ \sqrt{n_a}\,X_a-\sqrt{n_b}\,X_b & E_{\mathrm{OSS}} & \sqrt{n_b}\,X_a+\sqrt{n_a}\,X_b\\ 0 & \sqrt{n_b}\,X_a+\sqrt{n_a}\,X_b & E_{\mathrm{DES}} \end{pmatrix},
$$

$$
X_a = \tfrac12\big[F_{a\bar a} + F^{\beta}_{a\bar b}\big]_{ab}, \qquad X_b = \tfrac12\big[F_{b\bar b} + F^{\alpha}_{a\bar b}\big]_{ab}.
$$

The catalog holds no PPS–DES coupling; that element is zero. With HF, $X_a = F_{a\bar a}(ab)$ and $X_b = F_{b\bar b}(ab)$. The sign of the OSS row and column follows the orbital phases; $E$ and the states do not depend on it.

Eigenvectors of $\mathbf{S}$ whose eigenvalue $s$ satisfies

$$
s \le c\, s_{\max}
$$

($s_{\max}$ the largest eigenvalue of $\mathbf{S}$, $c$ = [`SI_REKS_OVERLAP_CUTOFF`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-si_reks_overlap_cutoff)) are null modes, removed before diagonalization; the rank of $\mathbf{S}$ depends on the FONs. In full singlet cassettes the 18 configurations of REKS(4,4) span 16 dimensions and the 161 of REKS(6,6) span 115 ([SI Hamiltonian and overlap](https://reksstudio.github.io/v2/learn/reference/properties/index.md#si-matrices)).

Used in: [P4. Two pairs](https://reksstudio.github.io/v2/learn/path/p4/index.md#p4).

### SI eigensolver {#si-solver}

In the basis left after the null modes (dimension $r$), each cassette solves the standard eigenproblem $\mathbf A\mathbf x = \theta\mathbf x$ with one of two solvers ([`SI_REKS_SOLVER`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-si_reks_solver)); $n$ is the number of configurations of the cassette:

| Solver | Roots | Memory |
| - | - | - |
| `DIRECT` | every root, LAPACK on the dense matrix | $n^2$ |
| `DAVIDSON` | the lowest $k$ roots, block Davidson on the sparse $\mathbf H$ | no dense $\mathbf H$; $\mathcal O\big((m + k)\,r\big)$ for the basis, its products and the work vectors, plus dense matrices of order $p$ ($m$, $p$ below); several $r \times r$ arrays when the whole space is solved |
| `AUTO` (default) | `DIRECT` for $n \le 4000$, `DAVIDSON` above | |

The catalogs shipped with Psi4 end at REKS(6,6) (161 singlet configurations), so `AUTO` runs `DIRECT` on them; a cassette above 4000 configurations, from a catalog in `PSI4_REKS_CATALOG` ([Active space and catalog](https://reksstudio.github.io/v2/learn/reference/index.md#catalog)), runs `DAVIDSON`. Davidson computes

$$
k = \min\big(r,\ n_{\mathrm{req}} + \max(4, \lceil n_{\mathrm{req}}/4 \rceil)\big), \qquad n_{\mathrm{req}} = \min\big(r,\ \max(1,\ n_{\mathrm{store}},\ n_{\mathrm{print}},\ 1 + r_{\max})\big),
$$

$n_{\mathrm{store}}$, $n_{\mathrm{print}}$ the counts of [`SI_REKS_STORE_STATES`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-si_reks_store_states) and [`SI_REKS_PRINT_STATES`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-si_reks_print_states), $r_{\max}$ the highest root named in [`SI_REKS_GRAD`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-si_reks_grad), [`SI_REKS_NAC`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-si_reks_nac) or [`SI_REKS_PROPERTY_FOR`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-si_reks_property_for); a count of `-1` stands for the 50 lowest roots. The search space holds up to

$$
m = \min\big(r,\ \max(40,\ 16k)\big)
$$

vectors; when $m = r$, the whole space is solved and every root returned. Otherwise, with $\mathbf A = \boldsymbol\Lambda + \mathbf X'^{\mathsf T}\mathbf H_{\times}\mathbf X'$ ($\boldsymbol\Lambda$ the eigenvalues of the diagonal blocks of $\mathbf A$, one per block of $\mathbf S$; $\mathbf H_\times$ the couplings between blocks), the $p = \min\big(r, \max(8k, 1000)\big)$ columns of lowest $\Lambda$ form the P space:

* start: the $k$ lowest eigenvectors of $\mathbf A_{PP}$ (more to complete a cluster within [`REKS_GRAD_DEGEN_TOL`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-reks_grad_degen_tol)) and one random vector;
* preconditioner: $(\theta - \mathbf A_{PP})^{-1}$ on P, $(\theta - \Lambda_q)^{-1}$ outside it;
* correction: up to two GMRES steps of the Jacobi–Davidson equation on an operator that keeps at most 2 % of the cross-block couplings (the largest $|H_{ij}|$), its P block equal to $\mathbf A_{PP}$; without kept couplings, the preconditioned residual;
* collapse: about $\max(k, \lfloor 2m/5 \rfloor)$ Ritz vectors plus the previous Ritz vectors of the unconverged roots.

Residuals, θ and the final check use the exact $\mathbf A$. Each root converges to

$$
\lVert(\mathbf A - \theta)\,\mathbf x\rVert_2 \le \tau, \qquad \tau = \texttt{SI\_REKS\_DAVIDSON\_R\_CONVERGENCE} = 10^{-12}\ E_{\mathrm h};
$$

a root whose residual stalls at the rounding level of its product is accepted there, and that level is printed. When the last computed root lies within [`REKS_GRAD_DEGEN_TOL`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-reks_grad_degen_tol) of the last requested one, $k$ grows by the margin and the iteration continues. Roots above $k$ are not computed: `SSR ENERGIES K=e` holds the $k$ roots ($r$ when the whole space is solved). Hexatriene REKS(6,6), singlet and triplet cassettes (r = 115, 117): with the default counts $m = r$; with 3 stored and printed states $k = 7$, $m = 112$, $p = r$, and one iteration converges. Output: [SI Davidson solver](https://reksstudio.github.io/v2/learn/reference/properties/index.md#si-davidson).

Used in: [Lowest roots of a large cassette: Davidson](https://reksstudio.github.io/v2/learn/branch/solvers/index.md#case-davidson).

### Coupling damping below 100 % exact exchange {#coupling-damping}

With a functional whose global (short-range) exact-exchange fraction is below 100 %, range-separated functionals included, the off-diagonal elements $H_{ij}$ that the catalog marks as carried only by four-orbital active integrals $(pq|rs)$ are scaled, energies in $E_{\mathrm{h}}$ ([Filatov et al., J. Chem. Phys. 2017, 147, 064104](#filatov2017-extended-space), Eq. B50; parameters from [Grimme and Waletzke, J. Chem. Phys. 1999, 111, 5645](#grimme1999-dft-mrci)):

$$
H_{ij} \to 0.619\,\exp\!\big[{-3.27}\,(H_{ii}-H_{jj})^4\big]\,H_{ij}.
$$

At 100 % exact exchange, no element is scaled. When an element is scaled, the `References` block ([`REKS_REPORT_LEVEL`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-reks_report_level) ≥ 3) lists `Coupling damping (DFT)`. The exact-exchange fraction is in the `XC evaluation` line of the setup block ([Run report](https://reksstudio.github.io/v2/learn/reference/output/index.md#run-report)).

### Adiabatic (SSR) states {#ssr-states}

An adiabatic state is an eigenvector $\mathbf{c}_k$ of one cassette:

$$
\mathbf{H}\mathbf{c}_k = E_k\,\mathbf{S}\mathbf{c}_k.
$$

Roots are 0-based and sorted by energy; they are labeled by the spin letter (`S`, `D`, `T`, `Qa`, `Q`, `Sx`, `Sp`, `Oc`, `N`, `De`, `U`, `Du`, `Tr` for $2S$ = 0 … 12), counted from 0 on the lowest manifold (`S0`, `D0`) and from 1 on every other (`T1`, `Q1`) ([Spin manifolds (2S) and multi-manifold runs](https://reksstudio.github.io/v2/learn/reference/index.md#spin-manifolds)). Physical roots exclude the overlap null modes and ghost roots more than 100 $E_{\mathrm{h}}$ above the lowest root ([Ghost states and a collapsed SI spectrum](https://reksstudio.github.io/v2/learn/diagnose/index.md#diag-ghost-states)); `SSR ENERGIES K=e` holds every physical root of cassette e, on the Davidson path its computed roots ([SI eigensolver](#si-solver), [SSR state energies](https://reksstudio.github.io/v2/learn/reference/properties/index.md#ssr-energies)).

Used in: [P2. Broken π bond](https://reksstudio.github.io/v2/learn/path/p2/index.md#p2), [P5. Spin states](https://reksstudio.github.io/v2/learn/path/p5/index.md#p5).

### Chirgwin–Coulson weights {#cc-weights}

The weight of configuration $j$ in a state is

$$
\omega_j = c_j\,(\mathbf{S}\mathbf{c})_j, \qquad \sum_j \omega_j = 1.
$$

In the non-orthogonal configuration set, an individual $\omega_j$ can be negative. `Adiabatic states` prints them in % (column `w_j`).

Used in: [P4. Two pairs](https://reksstudio.github.io/v2/learn/path/p4/index.md#p4).

### Unrelaxed and relaxed densities {#densities}

The unrelaxed density of states $I$, $J$ is the one-particle (transition) density of the model wavefunctions at the fixed orbitals and FONs:

$$
\langle I|\hat{E}_{pq}|J\rangle.
$$

Every [`SI_REKS_ANALYSIS`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-si_reks_analysis) property uses it ([Properties](https://reksstudio.github.io/v2/learn/reference/properties/index.md#properties)). The relaxed density $P^{\mathrm{r}}$ of a state adds the orbital- and FON-response terms of the coupled-perturbed REKS (CP-REKS, Z-vector) solve ([Filatov et al., J. Chem. Phys. 2017, 147, 034113](#filatov2017-gradients)), so that its dipole is the energy derivative

$$
\mu = -\frac{\mathrm{d}E_I}{\mathrm{d}F}.
$$

It is formed for the [`SI_REKS_PROPERTY_FOR`](https://reksstudio.github.io/v2/learn/reference/options/index.md#row-si_reks_property_for) states. $P^{\mathrm{r}}$ is not N-representable: it can have negative natural occupations, and bond indices from it are stored but not printed ([Bond indices of the relaxed density](https://reksstudio.github.io/v2/learn/reference/properties/index.md#relaxed-bond-indices)).

Used in: [P6. Forces](https://reksstudio.github.io/v2/learn/path/p6/index.md#p6), [Dipoles, charges, NTOs, relaxed properties and EKT](https://reksstudio.github.io/v2/learn/branch/properties/index.md#case-props-c2h4).

## References {#references}

Method:

* Every REKS run: Filatov, M.; Shaik, S. A spin-restricted ensemble-referenced Kohn–Sham method and its application to diradicaloid situations. *Chem. Phys. Lett.* **1999**, *304*, 429–437. [doi:10.1016/S0009-2614(99)00336-X](https://doi.org/10.1016/S0009-2614\(99\)00336-X)
* Related REKS work: Filatov, M.; Shaik, S. Artificial symmetry breaking in radicals is avoided by the use of the Ensemble-Referenced Kohn–Sham (REKS) method. *Chem. Phys. Lett.* **2000**, *332*, 409–419. [doi:10.1016/S0009-2614(00)01257-4](https://doi.org/10.1016/S0009-2614\(00\)01257-4)
* Every REKS run: Filatov, M. Spin-restricted ensemble-referenced Kohn–Sham method: basic principles and application to strongly correlated ground and excited states of molecules. *WIREs Comput. Mol. Sci.* **2015**, *5*, 146–167. [doi:10.1002/wcms.1209](https://doi.org/10.1002/wcms.1209)
* Every REKS run (interpolating factor f): Moreira, I. de P. R.; Costa, R.; Filatov, M.; Illas, F. Restricted ensemble-referenced Kohn–Sham versus broken symmetry approaches in density functional theory: Magnetic coupling in Cu binuclear complexes. *J. Chem. Theory Comput.* **2007**, *3*, 764–774. [doi:10.1021/ct7000057](https://doi.org/10.1021/ct7000057)
* SA-REKS ensemble: Gross, E. K. U.; Oliveira, L. N.; Kohn, W. Rayleigh-Ritz variational principle for ensembles of fractionally occupied states. *Phys. Rev. A* **1988**, *37*, 2805–2808. [doi:10.1103/PhysRevA.37.2805](https://doi.org/10.1103/PhysRevA.37.2805)
* SA-REKS ensemble: Gross, E. K. U.; Oliveira, L. N.; Kohn, W. Density-functional theory for ensembles of fractionally occupied states. I. Basic formalism. *Phys. Rev. A* **1988**, *37*, 2809–2820. [doi:10.1103/PhysRevA.37.2809](https://doi.org/10.1103/PhysRevA.37.2809)
* SA-REKS ensemble: Theophilou, A. K. The energy density functional formalism for excited states. *J. Phys. C: Solid State Phys.* **1979**, *12*, 5419–5430. [doi:10.1088/0022-3719/12/24/013](https://doi.org/10.1088/0022-3719/12/24/013)
* SA-REKS ensemble: Filatov, M. Ensemble DFT approach to excited states of strongly correlated molecular systems. In *Density-Functional Methods for Excited States*; Ferré, N.; Filatov, M.; Huix-Rotllant, M., Eds.; Top. Curr. Chem., Vol. 368; Springer International Publishing: Cham, 2016; pp 97–124. [doi:10.1007/128_2015_630](https://doi.org/10.1007/128_2015_630)
* SA pool with more than one excited configuration; SSR (SI-SA-REKS): Filatov, M.; Huix-Rotllant, M.; Burghardt, I. Ensemble density functional theory method correctly describes bond dissociation, excited state electron transfer, and double excitations. *J. Chem. Phys.* **2015**, *142*, 184104. [doi:10.1063/1.4919773](https://doi.org/10.1063/1.4919773)
* REKS(4,4); (6,6) active space, or SI on a sector 2S > 0 (REKS(4,4) form generalized): Filatov, M.; Martínez, T. J.; Kim, K. S. Using the GVB Ansatz to develop ensemble DFT method for describing multiple strongly correlated electron pairs. *Phys. Chem. Chem. Phys.* **2016**, *18*, 21040–21050. [doi:10.1039/C6CP00236F](https://doi.org/10.1039/C6CP00236F)
* REKS(4,4); (6,6) active space, or SI on a sector 2S > 0 (REKS(4,4) form generalized): Filatov, M.; Liu, F.; Kim, K. S.; Martínez, T. J. Self-consistent implementation of ensemble density functional theory method for multiple strongly correlated electron pairs. *J. Chem. Phys.* **2016**, *145*, 244104. [doi:10.1063/1.4972174](https://doi.org/10.1063/1.4972174)
* SSR with four or more active orbitals; Coupling damping (Eq. (B50)): Filatov, M.; Martínez, T. J.; Kim, K. S. Description of ground and excited electronic states by ensemble density functional method with extended active space. *J. Chem. Phys.* **2017**, *147*, 064104. [doi:10.1063/1.4996873](https://doi.org/10.1063/1.4996873)
* CP-REKS, gradients and relaxed properties: Filatov, M.; Liu, F.; Martínez, T. J. Analytical derivatives of the individual state energies in ensemble density functional theory method. I. General formalism. *J. Chem. Phys.* **2017**, *147*, 034113. [doi:10.1063/1.4994542](https://doi.org/10.1063/1.4994542)
* CP-REKS, gradients and relaxed properties; Nonadiabatic coupling vectors (model part, Eq. (47)): Liu, F.; Filatov, M.; Martínez, T. J. Analytical derivatives of the individual state energies in ensemble density functional theory. II. Implementation on graphical processing units (GPUs). *J. Chem. Phys.* **2021**, *154*, 104108. [doi:10.1063/5.0041389](https://doi.org/10.1063/5.0041389)
* Nonadiabatic coupling vectors: Filatov, M.; Min, S. K.; Kim, K. S. Direct nonadiabatic dynamics by mixed quantum-classical formalism connected with ensemble density functional theory method: Application to trans-penta-2,4-dieniminium cation. *J. Chem. Theory Comput.* **2018**, *14*, 4499–4512. [doi:10.1021/acs.jctc.8b00217](https://doi.org/10.1021/acs.jctc.8b00217)
* Related REKS work: Filatov, M.; Min, S. K.; Kim, K. S. Non-adiabatic dynamics of ring opening in cyclohexa-1,3-diene described by an ensemble density-functional theory method. *Mol. Phys.* **2019**, *117*, 1128–1141. [doi:10.1080/00268976.2018.1519200](https://doi.org/10.1080/00268976.2018.1519200)
* Coupling damping (constants; one set for all spins): Grimme, S.; Waletzke, M. A combination of Kohn–Sham density functional theory and multi-reference configuration interaction methods. *J. Chem. Phys.* **1999**, *111*, 5645–5655. [doi:10.1063/1.479866](https://doi.org/10.1063/1.479866)
* Extended Koopmans' theorem (ionization energies): Filatov, M.; Lee, S.; Choi, C. H. Computation of molecular ionization energies using an ensemble density functional theory method. *J. Chem. Theory Comput.* **2020**, *16*, 4489–4504. [doi:10.1021/acs.jctc.0c00218](https://doi.org/10.1021/acs.jctc.0c00218)
* Related REKS work: Filatov, M.; Lee, S.; Nakata, H.; Choi, C. H. Computation of molecular electron affinities using an ensemble density functional theory method. *J. Phys. Chem. A* **2020**, *124*, 7795–7804. [doi:10.1021/acs.jpca.0c06976](https://doi.org/10.1021/acs.jpca.0c06976)
* Related REKS work: Filatov, M.; Lee, S.; Choi, C. H. Description of sudden polarization in the excited electronic states with an ensemble density functional theory method. *J. Chem. Theory Comput.* **2021**, *17*, 5123–5139. [doi:10.1021/acs.jctc.1c00479](https://doi.org/10.1021/acs.jctc.1c00479)
* SSR (SI-SA-REKS): Filatov, M. Assessment of density functional methods for obtaining geometries at conical intersections in organic molecules. *J. Chem. Theory Comput.* **2013**, *9*, 4526–4541. [doi:10.1021/ct400598b](https://doi.org/10.1021/ct400598b)
* SSR (SI-SA-REKS): Huix-Rotllant, M.; Filatov, M.; Gozem, S.; Schapiro, I.; Olivucci, M.; Ferré, N. Assessment of density functional theory for describing the correlation effects on the ground and excited state potential energy surfaces of a retinal chromophore model. *J. Chem. Theory Comput.* **2013**, *9*, 3917–3932. [doi:10.1021/ct4003465](https://doi.org/10.1021/ct4003465)
* Reference excitation energies (QUEST); References of the dissociation results (TBE of the vertical excitations of C₂H₄ and N₂ (paper text)): Véril, M.; Scemama, A.; Caffarel, M.; Lipparini, F.; Boggio-Pasqua, M.; Jacquemin, D.; Loos, P.-F. QUESTDB: A database of highly accurate excitation energies for the electronic structure community. *WIREs Comput. Mol. Sci.* **2021**, *11*, e1517. [doi:10.1002/wcms.1517](https://doi.org/10.1002/wcms.1517)
* Geometries of the zethrenes results: Hu, P.; Lee, S.; Herng, T. S.; Aratani, N.; Gonçalves, T. P.; Qi, Q.; Shi, X.; Yamada, H.; Huang, K.-W.; Ding, J.; Kim, D.; Wu, J. Toward tetraradicaloid: The effect of fusion mode on radical character and chemical reactivity. *J. Am. Chem. Soc.* **2016**, *138*, 1065–1077. [doi:10.1021/jacs.5b12532](https://doi.org/10.1021/jacs.5b12532)
* Every REKS run (catalog generator and engine); (6,6) active space, or SI on a sector 2S > 0 (primary source): Komarov, K.; Filatov, M.; Min, S. K. Automated Symbolic Derivation Enables Scalable Ensemble DFT for Strongly Correlated Molecules and Materials. *ChemRxiv* **2026**. [doi:10.26434/chemrxiv.15008475/v1](https://doi.org/10.26434/chemrxiv.15008475/v1)
* BH\&HLYP functional (half-and-half mixing; the reference Libxc gives for HYB_GGA_XC_BHANDHLYP): Becke, A. D. A new mixing of Hartree–Fock and local density-functional theories. *J. Chem. Phys.* **1993**, *98*, 1372–1377. [doi:10.1063/1.464304](https://doi.org/10.1063/1.464304)
* BH\&HLYP functional (B88 exchange): Becke, A. D. Density-functional exchange-energy approximation with correct asymptotic behavior. *Phys. Rev. A* **1988**, *38*, 3098–3100. [doi:10.1103/PhysRevA.38.3098](https://doi.org/10.1103/PhysRevA.38.3098)
* BH\&HLYP functional (LYP correlation): Lee, C.; Yang, W.; Parr, R. G. Development of the Colle-Salvetti correlation-energy formula into a functional of the electron density. *Phys. Rev. B* **1988**, *37*, 785–789. [doi:10.1103/PhysRevB.37.785](https://doi.org/10.1103/PhysRevB.37.785)

Properties:

* References of the dissociation results (C₂ X¹Σ_g⁺: D_e; N₂ X¹Σ_g⁺: r_e 1.097685 Å (as reproduced in the NIST Chemistry WebBook)): Huber, K. P.; Herzberg, G. *Molecular Spectra and Molecular Structure IV. Constants of Diatomic Molecules*; Springer: Boston, MA, 1979. [doi:10.1007/978-1-4757-0961-2](https://doi.org/10.1007/978-1-4757-0961-2)
* References of the dissociation results (C₂ X, a, A, B: R_e, T_e): Martin, M. C₂ spectroscopy and kinetics. *J. Photochem. Photobiol. A* **1992**, *66*, 263–289. [doi:10.1016/1010-6030(92)80001-C](https://doi.org/10.1016/1010-6030\(92\)80001-C)
* References of the dissociation results (Table 7, r_e: r(C=C) 1.3305 Å; r(C–H), ∠HCH of the C₂H₄ scan): Craig, N. C.; Groner, P.; McKean, D. C. Equilibrium structures for butadiene and ethylene: Compelling evidence for π-electron delocalization in butadiene. *J. Phys. Chem. A* **2006**, *110*, 7461–7469. [doi:10.1021/jp060695b](https://doi.org/10.1021/jp060695b)
* References of the dissociation results (fixed geometries of the polyatomic scans (paper text)): Kuchitsu, K. *Structure of Free Polyatomic Molecules: Basic Data*; Springer: Berlin, Heidelberg, 1998. [doi:10.1007/978-3-642-45748-7](https://doi.org/10.1007/978-3-642-45748-7)
* References of the dissociation results (acetylene dissociation pathways (paper text)): Siegbahn, P. E. M. Large scale contracted MC–CI calculations on acetylene and its dissociation into two CH(²Π) radicals. *J. Chem. Phys.* **1981**, *75*, 2314–2320. [doi:10.1063/1.442294](https://doi.org/10.1063/1.442294)
* References of the dissociation results (basis-set sensitivity of DFT (paper text)): Goerigk, L.; Grimme, S. A thorough benchmark of density functional methods for general main group thermochemistry, kinetics, and noncovalent interactions. *Phys. Chem. Chem. Phys.* **2011**, *13*, 6670–6688. [doi:10.1039/c0cp02984j](https://doi.org/10.1039/c0cp02984j)
* References of the dissociation results (basis-set sensitivity of DFT (paper text)): Bursch, M.; Mewes, J.-M.; Hansen, A.; Grimme, S. Best-practice DFT protocols for basic molecular computational chemistry. *Angew. Chem. Int. Ed.* **2022**, *61*, e202205735. [doi:10.1002/anie.202205735](https://doi.org/10.1002/anie.202205735)
* References of the dissociation results (C₂ bonding (paper text)): Shaik, S.; Rzepa, H. S.; Hoffmann, R. One molecule, two atoms, three views, four bonds?. *Angew. Chem. Int. Ed.* **2013**, *52*, 3020–3033. [doi:10.1002/anie.201208206](https://doi.org/10.1002/anie.201208206)
* References of the dissociation results (Table III: C₂ X, a, A, B, HCI extrapolated to FCI, frozen core, cc-pV5Z): Holmes, A. A.; Umrigar, C. J.; Sharma, S. Excited states using semistochastic heat-bath configuration interaction. *J. Chem. Phys.* **2017**, *147*, 164111. [doi:10.1063/1.4998614](https://doi.org/10.1063/1.4998614)
* Geometries of the large-molecules results (TNS); Experiment and models of the large-molecules results (TNS: IETS on Au(111) and models): Hieulle, J.; Castro, S.; Friedrich, N.; Vegliante, A.; Romero Lara, F.; Sanz, S.; Rey, D.; Corso, M.; Frederiksen, T.; Pascual, J. I.; Peña, D. On-surface synthesis and collective spin excitations of a triangulene-based nanostar. *Angew. Chem. Int. Ed.* **2021**, *60*, 25224–25229. [doi:10.1002/anie.202108301](https://doi.org/10.1002/anie.202108301)
* Geometries of the large-molecules results (TTR); Experiment and models of the large-molecules results (TTR: IETS on Au(111) and models): Song, S.; Pinar Solé, A.; Matěj, A.; Li, G.; Stetsovych, O.; Soler, D.; Yang, H.; Telychko, M.; Li, J.; Kumar, M.; Chen, Q.; Edalatmanesh, S.; Brabec, J.; Veis, L.; Wu, J.; Jelinek, P.; Lu, J. Highly entangled polyradical nanographene with coexisting strong correlation and topological frustration. *Nat. Chem.* **2024**, *16*, 938–944. [doi:10.1038/s41557-024-01453-9](https://doi.org/10.1038/s41557-024-01453-9)
* Mayer bond index: Mayer, I. Charge, bond order and valence in the ab initio SCF theory. *Chem. Phys. Lett.* **1983**, *97*, 270–274. [doi:10.1016/0009-2614(83)80005-0](https://doi.org/10.1016/0009-2614\(83\)80005-0)
* Odd and unpaired electrons (N_D, N_U, N_U,nl) (N_D): Takatsuka, K.; Fueno, T.; Yamaguchi, K. Distribution of odd electrons in ground-state molecules. *Theor. Chim. Acta* **1978**, *48*, 175–183. [doi:10.1007/BF00549017](https://doi.org/10.1007/BF00549017)
* Odd and unpaired electrons (N_D, N_U, N_U,nl) (N_U, N_U,nl): Head-Gordon, M. Characterizing unpaired electrons from the one-particle density matrix. *Chem. Phys. Lett.* **2003**, *372*, 508–511. [doi:10.1016/S0009-2614(03)00422-6](https://doi.org/10.1016/S0009-2614\(03\)00422-6)
* Natural transition orbitals: Martin, R. L. Natural transition orbitals. *J. Chem. Phys.* **2003**, *118*, 4775–4777. [doi:10.1063/1.1558471](https://doi.org/10.1063/1.1558471)
* Exciton descriptors: Plasser, F.; Wormit, M.; Dreuw, A. New tools for the systematic analysis and visualization of electronic excitations. I. Formalism. *J. Chem. Phys.* **2014**, *141*, 024106. [doi:10.1063/1.4885819](https://doi.org/10.1063/1.4885819)
* Exciton descriptors: Bäppler, S. A.; Plasser, F.; Wormit, M.; Dreuw, A. Exciton analysis of many-body wave functions: Bridging the gap between the quasiparticle and molecular orbital pictures. *Phys. Rev. A* **2014**, *90*, 052521. [doi:10.1103/PhysRevA.90.052521](https://doi.org/10.1103/PhysRevA.90.052521)
* Fragment charge-transfer descriptors: Plasser, F.; Lischka, H. Analysis of excitonic and charge transfer interactions from quantum chemical calculations. *J. Chem. Theory Comput.* **2012**, *8*, 2777–2789. [doi:10.1021/ct300307c](https://doi.org/10.1021/ct300307c)
* Fragment charge-transfer descriptors: Plasser, F. TheoDORE: A toolbox for a detailed and automated analysis of electronic excited state computations. *J. Chem. Phys.* **2020**, *152*, 084108. [doi:10.1063/1.5143076](https://doi.org/10.1063/1.5143076)
* Fragment charge difference: Voityuk, A. A.; Rösch, N. Fragment charge difference method for estimating donor–acceptor electronic coupling: Application to DNA π-stacks. *J. Chem. Phys.* **2002**, *117*, 5607–5616. [doi:10.1063/1.1502255](https://doi.org/10.1063/1.1502255)
* Fragment excitation difference: Hsu, C.-P.; You, Z.-Q.; Chen, H.-C. Characterization of the short-range couplings in excitation energy transfer. *J. Phys. Chem. C* **2008**, *112*, 1204–1212. [doi:10.1021/jp076512i](https://doi.org/10.1021/jp076512i)
* Fragment spin difference: You, Z.-Q.; Hsu, C.-P. The fragment spin difference scheme for triplet-triplet energy transfer coupling. *J. Chem. Phys.* **2010**, *133*, 074105. [doi:10.1063/1.3467882](https://doi.org/10.1063/1.3467882)
* Conical-intersection topography: Fdez. Galván, I.; Delcey, M. G.; Pedersen, T. B.; Aquilante, F.; Lindh, R. Analytical state-average complete-active-space self-consistent field nonadiabatic coupling vectors: Implementation with density-fitted two-electron integrals and application to conical intersections. *J. Chem. Theory Comput.* **2016**, *12*, 3636–3653. [doi:10.1021/acs.jctc.6b00384](https://doi.org/10.1021/acs.jctc.6b00384)
* Conical-intersection topography: Fdez. Galván, I.; Brakestad, A.; Vacher, M. Role of conical intersection seam topography in the chemiexcitation of 1,2-dioxetanes. *Phys. Chem. Chem. Phys.* **2022**, *24*, 1638–1653. [doi:10.1039/D1CP05028A](https://doi.org/10.1039/D1CP05028A)
* Chirgwin-Coulson weights: Chirgwin, B. H.; Coulson, C. A. The electronic structure of conjugated systems. VI. *Proc. R. Soc. London, Ser. A* **1950**, *201*, 196–209. [doi:10.1098/rspa.1950.0053](https://doi.org/10.1098/rspa.1950.0053)
* Wiberg bond index: Wiberg, K. B. Application of the Pople-Santry-Segal CNDO method to the cyclopropylcarbinyl and cyclobutyl cation and to bicyclobutane. *Tetrahedron* **1968**, *24*, 1083–1096. [doi:10.1016/0040-4020(68)88057-3](https://doi.org/10.1016/0040-4020\(68\)88057-3)
* Extended Koopmans' theorem (ionization energies): Smith, D. W.; Day, O. W. Extension of Koopmans' theorem. I. Derivation. *J. Chem. Phys.* **1975**, *62*, 113–114. [doi:10.1063/1.430253](https://doi.org/10.1063/1.430253)
* Extended Koopmans' theorem (ionization energies): Morrell, M. M.; Parr, R. G.; Levy, M. Calculation of ionization potentials from density matrices and natural functions, and the long-range behavior of natural orbitals and electron density. *J. Chem. Phys.* **1975**, *62*, 549–554. [doi:10.1063/1.430509](https://doi.org/10.1063/1.430509)

Solvers:

* GVB-DIIS solvers (multishell Fock extrapolation): Muller, R. P.; Langlois, J.-M.; Ringnalda, M. N.; Friesner, R. A.; Goddard, W. A. A generalized direct inversion in the iterative subspace approach for generalized valence bond wave functions. *J. Chem. Phys.* **1994**, *100*, 1226–1235. [doi:10.1063/1.466653](https://doi.org/10.1063/1.466653)
* GVB-DIIS solvers (orbital-rotation DIIS): Ionova, I. V.; Carter, E. A. Orbital-based direct inversion in the iterative subspace for the generalized valence bond method. *J. Chem. Phys.* **1995**, *102*, 1251–1256. [doi:10.1063/1.468912](https://doi.org/10.1063/1.468912)
* GVB-DIIS solvers (r-GDIIS extension): Sethio, D.; Azzopardi, E.; Fdez. Galván, I.; Lindh, R. A story of three levels of sophistication in SCF/KS-DFT orbital optimization procedures. *J. Phys. Chem. A* **2024**, *128*, 2472–2486. [doi:10.1021/acs.jpca.3c07647](https://doi.org/10.1021/acs.jpca.3c07647)
* Trust-region solver (TRAH) (Ch. 4 and 11): Nocedal, J.; Wright, S. J. *Numerical Optimization*, 2nd ed.; Springer: New York, 2006. ISBN 978-0-387-30303-1.
* Trust-region solver (TRAH): Baker, J. An algorithm for the location of transition states. *J. Comput. Chem.* **1986**, *7*, 385–395. [doi:10.1002/jcc.540070402](https://doi.org/10.1002/jcc.540070402)
* Trust-region solver (TRAH): Cerjan, C. J.; Miller, W. H. On finding transition states. *J. Chem. Phys.* **1981**, *75*, 2800–2806. [doi:10.1063/1.442352](https://doi.org/10.1063/1.442352)
* Trust-region solver (TRAH): Helmich-Paris, B. A trust-region augmented Hessian implementation for restricted and unrestricted Hartree–Fock and Kohn–Sham methods. *J. Chem. Phys.* **2021**, *154*, 164104. [doi:10.1063/5.0040798](https://doi.org/10.1063/5.0040798)
* Trust-region solver (TRAH) (state-averaged form): Helmich-Paris, B. A trust-region augmented Hessian implementation for state-specific and state-averaged CASSCF wave functions. *J. Chem. Phys.* **2022**, *156*, 204104. [doi:10.1063/5.0090447](https://doi.org/10.1063/5.0090447)

Optimization and dynamics:

* Geometry optimization (DL-FIND): Kästner, J.; Carr, J. M.; Keal, T. W.; Thiel, W.; Wander, A.; Sherwood, P. DL-FIND: An open-source geometry optimizer for atomistic simulations. *J. Phys. Chem. A* **2009**, *113*, 11856–11865. [doi:10.1021/jp9028968](https://doi.org/10.1021/jp9028968)
* Surface hopping (PyUNIxMD): Lee, I. S.; Ha, J.-K.; Han, D.; Kim, T. I.; Moon, S. W.; Min, S. K. PyUNIxMD: A Python-based excited state molecular dynamics package. *J. Comput. Chem.* **2021**, *42*, 1755–1766. [doi:10.1002/jcc.26711](https://doi.org/10.1002/jcc.26711)
* FSSH (mqc.SH): Tully, J. C. Molecular dynamics with electronic transitions. *J. Chem. Phys.* **1990**, *93*, 1061–1071. [doi:10.1063/1.459170](https://doi.org/10.1063/1.459170)
* mqc.SH, dec_correction="edc": Granucci, G.; Persico, M. Critical appraisal of the fewest switches algorithm for surface hopping. *J. Chem. Phys.* **2007**, *126*, 134114. [doi:10.1063/1.2715585](https://doi.org/10.1063/1.2715585)
* mqc.SH, dec_correction="idc": Nelson, T.; Fernandez-Alberti, S.; Roitberg, A. E.; Tretiak, S. Nonadiabatic excited-state molecular dynamics: Treatment of electronic decoherence. *J. Chem. Phys.* **2013**, *138*, 224111. [doi:10.1063/1.4809568](https://doi.org/10.1063/1.4809568)
* DISH-XF (mqc.SHXF): Ha, J.-K.; Lee, I. S.; Min, S. K. Surface hopping dynamics beyond nonadiabatic couplings for quantum coherence. *J. Phys. Chem. Lett.* **2018**, *9*, 1097–1104. [doi:10.1021/acs.jpclett.8b00060](https://doi.org/10.1021/acs.jpclett.8b00060)

Software:

* Every REKS run: Smith, D. G. A.; Burns, L. A.; Simmonett, A. C.; Parrish, R. M.; Schieber, M. C.; Galvelis, R.; Kraus, P.; Kruse, H.; Di Remigio, R.; Alenaizan, A.; James, A. M.; Lehtola, S.; Misiewicz, J. P.; Scheurer, M.; Shaw, R. A.; Schriber, J. B.; Xie, Y.; Glick, Z. L.; Sirianni, D. A.; O'Brien, J. S.; Waldrop, J. M.; Kumar, A.; Hohenstein, E. G.; Pritchard, B. P.; Brooks, B. R.; Schaefer, H. F., III; Sokolov, A. Y.; Patkowski, K.; DePrince, A. E., III; Bozkaya, U.; King, R. A.; Evangelista, F. A.; Turney, J. M.; Crawford, T. D.; Sherrill, C. D. PSI4 1.4: Open-source software for high-throughput quantum chemistry. *J. Chem. Phys.* **2020**, *152*, 184108. [doi:10.1063/5.0006002](https://doi.org/10.1063/5.0006002)
* DFT functional (Libxc): Lehtola, S.; Steigemann, C.; Oliveira, M. J. T.; Marques, M. A. L. Recent developments in libxc — A comprehensive library of functionals for density functional theory. *SoftwareX* **2018**, *7*, 1–5. [doi:10.1016/j.softx.2017.11.002](https://doi.org/10.1016/j.softx.2017.11.002)
* D3 dispersion correction (D3(0)): Grimme, S.; Antony, J.; Ehrlich, S.; Krieg, H. A consistent and accurate ab initio parametrization of density functional dispersion correction (DFT-D) for the 94 elements H-Pu. *J. Chem. Phys.* **2010**, *132*, 154104. [doi:10.1063/1.3382344](https://doi.org/10.1063/1.3382344)
* D3 dispersion correction (D3(BJ)): Grimme, S.; Ehrlich, S.; Goerigk, L. Effect of the damping function in dispersion corrected density functional theory. *J. Comput. Chem.* **2011**, *32*, 1456–1465. [doi:10.1002/jcc.21759](https://doi.org/10.1002/jcc.21759)

What to cite for a calculation: [Documentation, Cite](https://reksstudio.github.io/v2/docs/index.md#cite).
