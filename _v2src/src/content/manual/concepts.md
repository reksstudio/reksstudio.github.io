---
title: Concepts
---

## 2\. Concepts {#concepts}

### Active space, core, virtual {#active-core-virtual}

`REKS [N, M]` places `N` active electrons in `M` active orbitals with fractional occupation. The other occupied orbitals form a doubly occupied core shared by every determinant; the orbitals above the active space are virtual.

### Ensemble Kohn–Sham reference and FONs {#ensemble-fons}

The non-interacting reference density, with fractional occupation numbers (FONs) $n_q$ for the orbitals pseudo-degenerate at the Fermi level, is

$$
\rho_s = \sum_{k\in\mathrm{core}} 2|\varphi_k|^2 + \sum_{q\in\mathrm{active}} n_q|\varphi_q|^2,
$$

$$
0 \le n_q \le 2, \qquad \sum_q n_q = N.
$$

The energy functional follows from integration over the electron–electron coupling strength $\lambda$ from 0 to 1 at $\lambda$-independent FONs. The orbitals and the FONs are optimized variationally (Filatov, WIREs Comput. Mol. Sci. 2015, 5, 146).

### Microstate {#microstate}

A microstate `L` is a Slater determinant of the shared orbitals with fixed integer spin-orbital occupations $n_{q,L}^{\sigma}$. Its energy is an ordinary Kohn–Sham energy with the chosen functional (local, non-local, hybrid or range-separated):

$$
E_L = E[\rho_L^{\alpha}, \rho_L^{\beta}].
$$

### Geminals {#geminals}

An active orbital pair $(p, q)$ holds two electrons; its FONs satisfy

$$
n_p + n_q = 2.
$$

The pair is in one of four geminals, the triplet with its three components $m = 0, \pm 1$:

$$
\begin{aligned}
\Phi_0 &= \tfrac{1}{\sqrt2}\big(\sqrt{n_p}\,|p\bar p| - \sqrt{n_q}\,|q\bar q|\big) && \text{perfectly paired}\\
\Phi_2 &= \tfrac{1}{\sqrt2}\big(\sqrt{n_q}\,|p\bar p| + \sqrt{n_p}\,|q\bar q|\big) && \text{doubly excited}\\
\Phi_1 &= \tfrac{1}{\sqrt2}\big(|p\bar q| + |q\bar p|\big) && \text{open-shell singlet}\\
\Phi_{\mathrm{T0}} &= \tfrac{1}{\sqrt2}\big(|p\bar q| - |q\bar p|\big) && \text{triplet, } m = 0\\
\Phi_{\mathrm{T+}} &= |pq|, \quad \Phi_{\mathrm{T-}} = |\bar p\bar q| && \text{triplet, } m = \pm 1
\end{aligned}
$$

### Pairing scheme {#pairing-scheme}

A pairing scheme partitions the `M` active orbitals into $P = N/2$ geminals. With two-orbital geminals (REKS(M,M)) each geminal is a pair joining one orbital of the lower half with one of the upper half:

$$
P = M/2.
$$

With §reks_geminal_widths geminal $i$ spans $w_i$ orbitals, $\sum_i w_i = M$; `Pairing schemes` prints its first two orbitals.

Scheme 0 pairs the active slots (active columns, from 0, labelled a, b, …) from the outside in: (2,2) (a,b); (4,4) (a,d) & (b,c); (6,6) (a,f) & (b,e) & (c,d):

$$
(k,\; M-1-k), \qquad k = 0, \dots, P-1.
$$

REKS(M,M) with two-orbital geminals has $P!$ schemes, numbered from 0: one for (2,2), two for (4,4), six for (6,6) (§catalog).

### Configuration and its energy {#configuration-energy}

A configuration (geminal product state) is the antisymmetrized product of the core and one geminal per pair of one scheme:

$$
\Psi = \hat{A}\big[(\mathrm{core})\,\Phi_{t_1}(p_1, q_1)\cdots\Phi_{t_P}(p_P, q_P)\big].
$$

One scheme carries $3^P$ singlet configurations, named by type (§catalog). Its energy is a weighted sum of microstate energies, the coefficients being functions of the FONs (Filatov, Martínez, Kim, Phys. Chem. Chem. Phys. 2016, 18, 21040):

$$
E^X = \sum_L C_L^X(\{n\})\,E_L, \qquad \sum_L C_L^X = 1.
$$

### Coupling Δ and factor f {#coupling}

The energy expressions contain, for each pair $(a, b)$, the coupling $\Delta_{ab}$ in place of the exchange integral $K_{ab}$, multiplied by $f(x)$ in place of the FON radical $\sqrt{x}$:

$$
\Delta_{ab} = \tfrac12\big[E(a\bar b) + E(b\bar a) - E(ab) - E(\bar a\bar b)\big],
$$

$$
f(x) = x^{\,1-\frac{x+\delta}{2(1+\delta)}}, \qquad x = n_a n_b.
$$

For REKS(2,2), with $f = f(n_a n_b)$ and $n_a \ge 1$, the configuration energies are

$$
\begin{aligned}
E_{\mathrm{PPS}} &= \tfrac{n_a}{2}E(a\bar a) + \tfrac{n_b}{2}E(b\bar b) - f\,\Delta_{ab}\\
E_{\mathrm{DES}} &= \tfrac{n_b}{2}E(a\bar a) + \tfrac{n_a}{2}E(b\bar b) + f\,\Delta_{ab}\\
E_{\mathrm{OSS}} &= E(a\bar b) + E(b\bar a) - \tfrac12\big[E(ab) + E(\bar a\bar b)\big]\\
E_{\mathrm{T}} &= \tfrac12\big[E(ab) + E(\bar a\bar b)\big]
\end{aligned}
$$

$E_{\mathrm{OSS}}$ and $E_{\mathrm{T}}$ carry no FON.

Towards the closed-shell limit ($n_a \to 2$) the factor $f$ suppresses the $\Delta$ term, which avoids counting correlation twice, by the formalism and by the functional. At $n_a = n_b = 1$ it equals 1 (Moreira et al., J. Chem. Theory Comput. 2007, 3, 764). $\delta$ is `REKS_FON_INTERP_DELTA` (default 0.4, §fons).

### FON set and generation {#fon-generation}

The generation of a configuration is its number of open pairs: $\Phi_1$, and a triplet geminal ($\Phi_{\mathrm{T+}}$, $\Phi_{\mathrm{T0}}$, $\Phi_{\mathrm{T-}}$) in a sector of positive $2S$. A FON set holds the FONs of one generation, pairing scheme and run sector; all configurations of that set use the same FONs. $\Phi_0$ and $\Phi_2$ of one pair use the same FONs; $\Phi_1$ and $\Phi_{\mathrm{T0}}$ use none. FON-set labels: §fon-sets.

### SA-REKS ensemble and weights {#sa-ensemble}

The SCF minimizes the ensemble energy over the orbitals and the FONs read by the SA configurations, at fixed weights $w_X$ (ensemble variational principle: Gross, Oliveira, Kohn, Phys. Rev. A 1988, 37, 2805; SA-REKS: Filatov, Top. Curr. Chem. 2016, 368, 97):

$$
E_{\mathrm{SA}} = \sum_X w_X E^X = \sum_L C_L E_L, \qquad C_L = \sum_X w_X C_L^X,
$$

$$
0 \le w_X \le 1, \qquad \sum_X w_X = 1.
$$

The default weights are equal (§sa_reks_weights). $E_{\mathrm{SA}}$ is a weighted average of configuration energies, not the energy of a state; the variational principle bounds $E_{\mathrm{SA}}$, not an individual $E^X$. Raw determinants enter the ensemble through §sa_reks_extra.

### Orbitals, orbital energies, SCF convergence {#orbitals-scf}

The orbitals satisfy, with orbital-specific Fock operators $\hat{F}_q$,

$$
f_q \hat{F}_q \varphi_q = \sum_p \varphi_p \varepsilon_{pq}, \qquad f_q = n_q/2.
$$

At convergence the Lagrangian $\varepsilon_{pq}$ is symmetric (generalized Brillouin condition) but not diagonal, so the orbitals are not canonical. The printed orbital energies are the diagonal of the SA-REKS coupling Fock matrix in the MO basis and carry no Koopmans meaning; ionization energies come from EKT (§reks_ekt). The SCF is converged when $E_{\mathrm{SA}}$ is stationary and the orbital gradient vanishes (generalized Brillouin condition, §scf-engines).

### Spin-polarized configurations {#sps-configurations}

In REKS(4,4) the double open-shell singlet (DOSS) and the doubly spin-polarized state (DSPS) both arise from two simultaneous OSS-type one-electron transitions between the active orbitals: DOSS couples two open-shell singlet pairs to an overall singlet, DSPS can be viewed as two triplet excitations coupled to an overall singlet, and the two are orthogonalized (Filatov, Martínez, Kim, J. Chem. Phys. 2017, 147, 064104). Fully open configurations of different schemes overlap (overlap −½ for the two DOSS configurations of REKS(4,4)); the catalog replaces them by a set orthogonalized by sequential Gram–Schmidt across schemes, the spin-polarized configurations (`SPS`) `DOSS_SPS_k`, `T_OSS_SPS_k`, …, in which each member $k$ after the first is orthogonal to the preceding members (Filatov et al., J. Chem. Phys. 2016, 145, 244104). They carry no FON.

### Spin manifold and run sector {#run-sector}

A manifold is one total spin $2S$ of the catalog. The sectors of a run are the manifolds addressed by any SA block or SI group, in ascending $2S$, sector 0 being the lowest. Every configuration is built in its component of zero $M_S$, so all sectors share one determinant space and one set of orbitals, and the molecule multiplicity stays canonical (1 for even `N`) (§active-space, §spin-manifolds). Determinants of other $M_S$ enter the SA ensemble only through §sa_reks_extra.

A 2S = 2 configuration holds one $\Phi_{\mathrm{T0}}$. In 2S ≥ 4 (`TT_SPS_0`, `TTT_SPS_0`) the $n_T$ triplet geminals couple to $S = n_T$ through $\Phi_{\mathrm{T+}}$, $\Phi_{\mathrm{T0}}$, $\Phi_{\mathrm{T-}}$ with Clebsch–Gordan coefficients, e.g.

$$
\mathrm{TT\_SPS\_0} = \tfrac{1}{\sqrt6}\,\Phi_{\mathrm{T-}}\Phi_{\mathrm{T+}} + \sqrt{\tfrac23}\,\Phi_{\mathrm{T0}}\Phi_{\mathrm{T0}} + \tfrac{1}{\sqrt6}\,\Phi_{\mathrm{T+}}\Phi_{\mathrm{T-}}.
$$

### SI cassette {#si-cassette}

A cassette is a set of configurations of one manifold over which the SI Hamiltonian and overlap are built and diagonalized after the SCF, in the converged SA orbitals. It is chosen independently of the SA pool. A run may hold several cassettes, each its own eigenproblem. The label `kSI-lSA-REKS(N,M)` denotes $k$ SI configurations in the orbitals of an SA ensemble of $l$ configurations (§si_reks_configs).

### SI-only FONs {#si-only-fons}

FONs that no SA configuration uses (higher generations, or schemes absent from the SA pool) are optimized once after the SCF, with the SA FONs held fixed. Each SI-only geminal belongs to its primary configuration $K$, the lowest-index configuration of the cassette among those that use it. Its FONs minimize, at the microstate energies $E_L$ of the converged SA orbitals,

$$
E_K = \sum_L C_L^K(\{n\})\,E_L, \qquad 1 \le n_p \le 2 - 10^{-8},
$$

for a two-orbital geminal; in a geminal of width $w$ each free FON is $\ge 10^{-8}$ and their sum $\le 2 - 10^{-8}$. These bounds are fixed; `REKS_<L>_FON` does not apply. The geminals of one generation with the same $K$ are solved jointly; Gauss–Seidel sweeps over these groups repeat until no FON changes by more than $10^{-7}$. Output: §si-fons.

### SI Hamiltonian and overlap {#si-hamiltonian}

The diagonal elements of $\mathbf{H}$ are the configuration energies $E^X$. The off-diagonal elements are sums over microstate energies $E_L$, spin-Fock differences $(F^{\alpha} - F^{\beta})_{pq}$, Lagrangian elements $\varepsilon_{pq}$ and active two-electron integrals $(pq|rs)$ (table `Off-diagonal channel`, `REKS_REPORT_LEVEL` ≥ 3). They follow from the Slater–Condon rules at small $\lambda$ and integration over $\lambda$ (Filatov, Martínez, Kim, J. Chem. Phys. 2017, 147, 064104). $\mathbf{S}$ is diagonal within one scheme and non-diagonal across schemes, so each cassette solves

$$
\mathbf{H}\mathbf{c} = E\,\mathbf{S}\mathbf{c}.
$$

Over (PPS, OSS, DES) the SSR(2,2) Hamiltonian, with the Lagrangian element $\varepsilon_{ab}$ and $\mathbf S = \mathbf 1$, is

$$
\mathbf H = \begin{pmatrix} E_{\mathrm{PPS}} & (\sqrt{n_a}-\sqrt{n_b})\,\varepsilon_{ab} & 0\\ (\sqrt{n_a}-\sqrt{n_b})\,\varepsilon_{ab} & E_{\mathrm{OSS}} & (\sqrt{n_a}+\sqrt{n_b})\,\varepsilon_{ab}\\ 0 & (\sqrt{n_a}+\sqrt{n_b})\,\varepsilon_{ab} & E_{\mathrm{DES}} \end{pmatrix}.
$$

Eigenvectors of $\mathbf{S}$ whose eigenvalue $s$ satisfies

$$
s \le c\, s_{\max}
$$

($s_{\max}$ the largest eigenvalue of $\mathbf{S}$, $c$ = `SI_REKS_OVERLAP_CUTOFF`) are null modes, removed before diagonalization; the rank of $\mathbf{S}$ depends on the FONs. In full singlet cassettes the 18 configurations of REKS(4,4) span 16 dimensions and the 161 of REKS(6,6) span 115 (§si-matrices).

### Coupling damping below 100 % exact exchange {#coupling-damping}

With a functional whose global (short-range) exact-exchange fraction is below 100 %, range-separated functionals included, the off-diagonal elements $H_{ij}$ that the catalog marks as carried only by four-orbital active integrals $(pq|rs)$ are scaled, energies in $E_{\mathrm{h}}$ (Filatov, Martínez, Kim, J. Chem. Phys. 2017, 147, 064104, Eq. B50; parameters from Grimme, Waletzke, J. Chem. Phys. 1999, 111, 5645):

$$
H_{ij} \to 0.619\,\exp\!\big[{-3.27}\,(H_{ii}-H_{jj})^4\big]\,H_{ij}.
$$

At 100 % exact exchange no element is scaled. When an element was scaled, the `References` block (`REKS_REPORT_LEVEL` ≥ 3) lists `Coupling damping (DFT)`. The exact-exchange fraction is in the `XC evaluation` line of the setup block (§run-report).

### Adiabatic (SSR) states {#ssr-states}

An adiabatic state is an eigenvector $\mathbf{c}_k$ of one cassette:

$$
\mathbf{H}\mathbf{c}_k = E_k\,\mathbf{S}\mathbf{c}_k.
$$

Roots are 0-based and sorted by energy; they are labeled `S0`, `S1`, … for $2S$ zero and `T1`, `Q1`, … (counted from 1) for positive $2S$ (§spin-manifolds). Physical roots exclude the overlap null modes and ghost roots more than 100 $E_{\mathrm{h}}$ above the lowest root (§diag-ghost-states); `SSR ENERGIES K=e` holds every physical root of cassette e (§ssr-energies).

### Chirgwin–Coulson weights {#cc-weights}

The weight of configuration $j$ in a state is

$$
\omega_j = c_j\,(\mathbf{S}\mathbf{c})_j, \qquad \sum_j \omega_j = 1.
$$

In the non-orthogonal configuration set an individual $\omega_j$ can be negative. `Adiabatic states` prints them in % (column `w_j`).

### Unrelaxed and relaxed densities {#densities}

The unrelaxed density of states $I$, $J$ is the one-particle (transition) density of the model wavefunctions at the fixed orbitals and FONs:

$$
\langle I|\hat{E}_{pq}|J\rangle.
$$

Every `SI_REKS_ANALYSIS` property uses it (§properties). The relaxed density $P^{\mathrm{r}}$ of a state adds the orbital- and FON-response terms of the coupled-perturbed REKS (CP-REKS, Z-vector) solve (Filatov, Liu, Martínez, J. Chem. Phys. 2017, 147, 034113), so that its dipole is the energy derivative

$$
\mu = -\frac{\mathrm{d}E_I}{\mathrm{d}F}.
$$

It is formed for the `SI_REKS_PROPERTY_FOR` states. $P^{\mathrm{r}}$ is not N-representable: it can have negative natural occupations, and bond indices from it are stored but not printed (§relaxed-bond-indices).
