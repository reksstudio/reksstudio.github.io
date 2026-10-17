# Concepts — REKS Studio Manual

HTML: <https://reksstudio.github.io/v2/manual/concepts/>

Psi4 72ce4d58b, 2026-10-17: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

[Manual](https://reksstudio.github.io/v2/manual/index.md) › Concepts

# Concepts

Chapter 2 of the REKS Studio user manual

## 2. Concepts {#concepts}

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

The energy functional follows from integration over the electron–electron coupling strength $\lambda$ from 0 to 1 at $\lambda$-independent FONs. The orbitals and the FONs are optimized variationally ([Filatov, WIREs Comput. Mol. Sci. 2015, 5, 146](https://reksstudio.github.io/v2/manual/reference/index.md#filatov2015-wires)).

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

There are six simplest geminals, three singlets and three triplets with $m = 0, \pm 1$:

$$
\begin{aligned} \Phi_0 &= \tfrac{1}{\sqrt2}\big(\sqrt{n_p}\,|p\bar p| - \sqrt{n_q}\,|q\bar q|\big) && \text{perfectly paired}\\ \Phi_2 &= \tfrac{1}{\sqrt2}\big(\sqrt{n_q}\,|p\bar p| + \sqrt{n_p}\,|q\bar q|\big) && \text{doubly excited}\\ \Phi_1 &= \tfrac{1}{\sqrt2}\big(|p\bar q| + |q\bar p|\big) && \text{open-shell singlet}\\ \Phi_{\mathrm{T0}} &= \tfrac{1}{\sqrt2}\big(|p\bar q| - |q\bar p|\big) && \text{triplet, } m = 0\\ \Phi_{\mathrm{T+}} &= |pq|, \quad \Phi_{\mathrm{T-}} = |\bar p\bar q| && \text{triplet, } m = \pm 1 \>. \end{aligned}
$$

Only four geminals with $m = 0$ are included in REKS(M,M).

### Pairing scheme {#pairing-scheme}

A pairing scheme partitions the `M` active orbitals into $P = N/2$ geminals. With two-orbital geminals (REKS(M,M)) each geminal is a pair joining one orbital of the lower half with one of the upper half:

$$
P = M/2.
$$

With [`REKS_GEMINAL_WIDTHS`](https://reksstudio.github.io/v2/options/REKS_GEMINAL_WIDTHS.md) geminal $i$ spans $w_i$ orbitals, $\sum_i w_i = M$; `Pairing schemes` prints all its orbitals.

Scheme 0 pairs the active slots (active columns, from 0, labelled a, b, …) from the outside in: (2,2) (a,b); (4,4) (a,d) & (b,c); (6,6) (a,f) & (b,e) & (c,d):

$$
(k,\; M-1-k), \qquad k = 0, \dots, P-1.
$$

REKS(M,M) with two-orbital geminals has $P!$ schemes, numbered from 0: one for (2,2), two for (4,4), six for (6,6) ([§6](https://reksstudio.github.io/v2/manual/setup/index.md#catalog)).

### Configuration and its energy {#configuration-energy}

A configuration (geminal product state) is the antisymmetrized product of the core and one geminal per electron pair within a given scheme:

$$
\Psi = \hat{A}\big[(\mathrm{core})\,\Phi_{t_1}(p_1, q_1)\cdots\Phi_{t_P}(p_P, q_P)\big].
$$

One scheme carries $3^P$ singlet configurations, named by type ([§6](https://reksstudio.github.io/v2/manual/setup/index.md#catalog)). Its energy is a weighted sum of microstate energies, the coefficients being functions of the FONs ([Filatov et al., Phys. Chem. Chem. Phys. 2016, 18, 21040](https://reksstudio.github.io/v2/manual/reference/index.md#filatov2016-gvb-ansatz)):

$$
E^X = \sum_L C_L^X(\{n\})\,E_L, \qquad \sum_L C_L^X = S_{XX},
$$

the FON normalizes the configuration to 1 for two-orbital geminals, and possibly below 1 for a configuration with wider geminals ([SI Hamiltonian and overlap](#si-hamiltonian)).

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
\begin{aligned} E_{\mathrm{PPS}} &= \tfrac{n_a}{2}E(a\bar a) + \tfrac{n_b}{2}E(b\bar b) - f\,\Delta_{ab}\\ E_{\mathrm{DES}} &= \tfrac{n_b}{2}E(a\bar a) + \tfrac{n_a}{2}E(b\bar b) + f\,\Delta_{ab}\\ E_{\mathrm{OSS}} &= E(a\bar b) + E(b\bar a) - \tfrac12\big[E(ab) + E(\bar a\bar b)\big]\\ E_{\mathrm{T}} &= \tfrac12\big[E(ab) + E(\bar a\bar b)\big] \end{aligned}
$$

$E_{\mathrm{OSS}}$ and $E_{\mathrm{T}}$ carry no FON.

As the closed-shell limit ($n_a \to 2$) is approached, the factor $f$ suppresses the $\Delta$ term, thereby avoiding the double-counting of correlation by both the formalism and the functional. At $n_a = n_b = 1$ it equals 1 ([Moreira et al., J. Chem. Theory Comput. 2007, 3, 764](https://reksstudio.github.io/v2/manual/reference/index.md#moreira2007-interpolation)). $\delta$ is `REKS_FON_INTERP_DELTA` (default 0.4, [§12](https://reksstudio.github.io/v2/manual/run-control/index.md#fons)).

### FON set and generation {#fon-generation}

The \emph{generation} of a configuration is its number of open pairs: $\Phi_1$, and a triplet of geminals ($\Phi_{\mathrm{T+}}$, $\Phi_{\mathrm{T0}}$, $\Phi_{\mathrm{T-}}$) in a sector of positive $2S$. A FON set keeps the FONs of one generation, pairing scheme, and run sector; all configurations of that set use the same FONs. $\Phi_0$ and $\Phi_2$ of one pair use the same FONs; $\Phi_1$ and $\Phi_{\mathrm{T0}}$ use none. FON-set labels: [FON sets](https://reksstudio.github.io/v2/manual/setup/index.md#fon-sets).

### SA-REKS ensemble and weights {#sa-ensemble}

The SCF minimizes the ensemble energy over the orbitals and the FONs read by the SA configurations, at fixed weights $w_X$ (ensemble variational principle: [Gross et al., Phys. Rev. A 1988, 37, 2805](https://reksstudio.github.io/v2/manual/reference/index.md#gross1988-variational); SA-REKS: [Filatov, Top. Curr. Chem. 2016, 368, 97](https://reksstudio.github.io/v2/manual/reference/index.md#filatov2016-sa-reks)):

$$
E_{\mathrm{SA}} = \sum_X w_X E^X = \sum_L C_L E_L, \qquad C_L = \sum_X w_X C_L^X,
$$

$$
0 \le w_X \le 1, \qquad \sum_X w_X = 1.
$$

The default weights are equal ([`SA_REKS_WEIGHTS`](https://reksstudio.github.io/v2/options/SA_REKS_WEIGHTS.md)). $E_{\mathrm{SA}}$ is a weighted average of configuration energies, not the energy of a state; the variational principle bounds $E_{\mathrm{SA}}$, not an individual $E^X$. Extra determinants can be added to the ensemble using [`SA_REKS_EXTRA`](https://reksstudio.github.io/v2/options/SA_REKS_EXTRA.md).

### Orbitals, orbital energies, SCF convergence {#orbitals-scf}

The orbitals satisfy, with orbital-specific Fock operators $\hat{F}_q$,

$$
f_q \hat{F}_q \varphi_q = \sum_p \varphi_p \varepsilon_{pq}, \qquad f_q = n_q/2.
$$

At convergence, the Lagrangian $\varepsilon_{pq}$ is symmetric (generalized Brillouin condition) but not diagonal, so the orbitals are not canonical. The printed orbital energies are the diagonal of the SA-REKS coupling Fock matrix in the MO basis and carry no Koopmans meaning; ionization energies come from EKT ([`REKS_EKT`](https://reksstudio.github.io/v2/options/REKS_EKT.md)). The SCF is converged when $E_{\mathrm{SA}}$ is stationary, and the orbital gradient vanishes (generalized Brillouin condition, [§13](https://reksstudio.github.io/v2/manual/run-control/index.md#scf-engines)).

### Spin-polarized configurations {#sps-configurations}

In REKS(4,4) the double open-shell singlet (DOSS) and the doubly spin-polarized state (DSPS) both arise from two simultaneous OSS-type one-electron transitions between the active orbitals: DOSS couples two open-shell singlet pairs to an overall singlet, DSPS can be viewed as two triplet excitations coupled to an overall singlet, and the two are orthogonalized ([Filatov et al., J. Chem. Phys. 2017, 147, 064104](https://reksstudio.github.io/v2/manual/reference/index.md#filatov2017-extended-space)). Fully open configurations of different schemes overlap (overlap −½ for the two DOSS configurations of REKS(4,4)); the catalog replaces them by a set orthogonalized by sequential Gram–Schmidt procedure across schemes, the spin-polarized configurations (`SPS`) `DOSS_SPS_k`, `T_OSS_SPS_k`, …, in which each member $k$ after the first is orthogonal to the preceding members ([Komarov et al., ChemRxiv 2026](https://reksstudio.github.io/v2/manual/reference/index.md#komarov2026-reks-studio)). They carry no FON.

### Spin manifold and run sector {#run-sector}

A manifold is one total spin $2S$ of the catalog. The sectors of a run are the manifolds addressed by any SA block or SI group, in ascending $2S$, sector 0 being the lowest. Every configuration is built from components of zero $M_S$, so all sectors share one determinant space and one set of orbitals, and the molecular multiplicity remains canonical (1 for even `N`) ([Active space](https://reksstudio.github.io/v2/manual/setup/index.md#active-space), [§9](https://reksstudio.github.io/v2/manual/setup/index.md#spin-manifolds)). Determinants with non-zero $M_S$ enter the SA ensemble only through [`SA_REKS_EXTRA`](https://reksstudio.github.io/v2/options/SA_REKS_EXTRA.md).

A 2S = 2 configuration holds one $\Phi_{\mathrm{T0}}$. In 2S ≥ 4 (`TT_SPS_0`, `TTT_SPS_0`) the $n_T$ triplet geminals couple to $S = n_T$ through $\Phi_{\mathrm{T+}}$, $\Phi_{\mathrm{T0}}$, $\Phi_{\mathrm{T-}}$ with Clebsch–Gordan coefficients, e.g.

$$
\mathrm{TT\_SPS\_0} = \tfrac{1}{\sqrt6}\,\Phi_{\mathrm{T-}}\Phi_{\mathrm{T+}} + \sqrt{\tfrac23}\,\Phi_{\mathrm{T0}}\Phi_{\mathrm{T0}} + \tfrac{1}{\sqrt6}\,\Phi_{\mathrm{T+}}\Phi_{\mathrm{T-}}.
$$

### SI cassette {#si-cassette}

A cassette is a set of configurations of one manifold over which the SI Hamiltonian and overlap are built and diagonalized after the SCF, in the converged SA orbitals. It is chosen independently of the SA pool. A run may hold several cassettes, each its own eigenproblem ([SI eigensolver](#si-solver)). The label `kSI-lSA-REKS(N,M)` denotes $k$ SI configurations in the orbitals of an SA ensemble of $l$ configurations ([`SI_REKS_CONFIGS`](https://reksstudio.github.io/v2/options/SI_REKS_CONFIGS.md)).

### SI-only FONs {#si-only-fons}

FONs that no SA configuration uses (higher generations, or schemes absent from the SA pool) are optimized once after the SCF, with the SA FONs held fixed. Each SI-only geminal belongs to its primary configuration $K$, the lowest-index configuration of the cassette among those that use it. Its FONs minimize, at the microstate energies $E_L$ of the converged SA orbitals,

$$
E_K = \sum_L C_L^K(\{n\})\,E_L, \qquad m \le n_p \le 2 - m,
$$

for a two-orbital geminal; in a geminal of width $w$ each free FON is $\ge m$ and their sum $\le 2 - m$; $m$ = `SI_REKS_FON_BOUND_MARGIN` (default $10^{-8}$). A FON pushed past its bound stops on it and counts as converged there. `REKS_<L>_FON` does not apply. The geminals of one generation with the same $K$ are solved jointly; Gauss–Seidel sweeps over these groups repeat until no FON changes by more than $10^{-7}$. Output: [FONs of the SI-only geminals](https://reksstudio.github.io/v2/manual/properties/index.md#si-fons).

### SI Hamiltonian and overlap {#si-hamiltonian}

The diagonal elements of $\mathbf{H}$ are the configuration energies $E^X$. An off-diagonal element is the sum of the Slater–Condon elements between the microstates of the two configurations, times the FON factors of their geminals; its terms carry microstate energies $E_L$, active Fock elements of the microstates, and active two-electron integrals $(pq|rs)$, the latter unscaled with any functional (table `Off-diagonal channel`, `REKS_REPORT_LEVEL` ≥ 3). A one-electron excitation $p \to q$ in spin $\sigma$ from microstate $L$ to $L'$ takes the bra/ket mean of the two microstate Fock matrices, with the sign of the excitation:

$$
\langle L|\hat H|L'\rangle = \pm\tfrac12\big[F^{\sigma}_L + F^{\sigma}_{L'}\big]_{pq},
$$

$$
F^{\sigma}_L(pq) = h_{pq} + \sum_{c\,\in\,\text{core}}\big[2(pq|cc) - (pc|cq)\big] + \sum_{r\,\in\,L}\big[(pq|rr) - \delta_{\sigma_r\sigma}\,(pr|rq)\big],
$$

shown for HF; using a DFT functional, the exchange terms carry the exact-exchange fraction (the long-range fraction for the long-range part of a range-separated functional), and the spin-polarized XC potential of the microstate density (core included) is added. A spin-difference term takes the same mean of $\pm(F^{\alpha} - F^{\beta})$ over two microstates. $\mathbf{S}$ depends on the FONs only. Between configurations of two-orbital geminals, it is diagonal within one scheme and non-diagonal across schemes; configurations of a wider geminal overlap within their scheme and can have $S_{XX} \ne 1$. Each cassette solves

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

($s_{\max}$ the largest eigenvalue of $\mathbf{S}$, $c$ = `SI_REKS_OVERLAP_CUTOFF`) are null modes, removed before diagonalization; the rank of $\mathbf{S}$ depends on the FONs. In full singlet cassettes the 18 configurations of REKS(4,4) span 16 dimensions and the 161 of REKS(6,6) span 115 ([SI Hamiltonian and overlap](https://reksstudio.github.io/v2/manual/properties/index.md#si-matrices)).

### SI eigensolver {#si-solver}

In the basis left after the null modes (dimension $r$), each cassette solves the standard eigenproblem $\mathbf A\mathbf x = \theta\mathbf x$ with one of two solvers (`SI_REKS_SOLVER`); $n$ is the number of configurations of the cassette:

| Solver | Roots | Memory |
| - | - | - |
| `DIRECT` | every root, LAPACK on the dense matrix | $n^2$ |
| `DAVIDSON` | the lowest $k$ roots, block Davidson on the sparse $\mathbf H$ | no dense $\mathbf H$; $\mathcal O\big((m + k)\,r\big)$ for the basis, its products and the work vectors, plus dense matrices of order $p$ ($m$, $p$ below); several $r \times r$ arrays when the whole space is solved |
| `AUTO` (default) | `DIRECT` for $n \le 4000$, `DAVIDSON` above | |

The catalogs shipped with Psi4 end at REKS(6,6) (161 singlet configurations), so `AUTO` runs `DIRECT` on them; a cassette above 4000 configurations, from a catalog in `PSI4_REKS_CATALOG` ([§6](https://reksstudio.github.io/v2/manual/setup/index.md#catalog)), runs `DAVIDSON`. Davidson computes

$$
k = \min\big(r,\ n_{\mathrm{req}} + \max(4, \lceil n_{\mathrm{req}}/4 \rceil)\big), \qquad n_{\mathrm{req}} = \min\big(r,\ \max(1,\ n_{\mathrm{store}},\ n_{\mathrm{print}},\ 1 + r_{\max})\big),
$$

$n_{\mathrm{store}}$, $n_{\mathrm{print}}$ the counts of `SI_REKS_STORE_STATES` and `SI_REKS_PRINT_STATES`, $r_{\max}$ the highest root named in `SI_REKS_GRAD`, `SI_REKS_NAC` or `SI_REKS_PROPERTY_FOR`; a count of `-1` stands for the 50 lowest roots. The search space holds up to

$$
m = \min\big(r,\ \max(40,\ 16k)\big)
$$

vectors; when $m = r$, the whole space is solved and every root returned. Otherwise, with $\mathbf A = \boldsymbol\Lambda + \mathbf X'^{\mathsf T}\mathbf H_{\times}\mathbf X'$ ($\boldsymbol\Lambda$ the eigenvalues of the diagonal blocks of $\mathbf A$, one per block of $\mathbf S$; $\mathbf H_\times$ the couplings between blocks), the $p = \min\big(r, \max(8k, 1000)\big)$ columns of lowest $\Lambda$ form the P space:

* start: the $k$ lowest eigenvectors of $\mathbf A_{PP}$ (more to complete a cluster within `REKS_GRAD_DEGEN_TOL`) and one random vector;
* preconditioner: $(\theta - \mathbf A_{PP})^{-1}$ on P, $(\theta - \Lambda_q)^{-1}$ outside it;
* correction: up to two GMRES steps of the Jacobi–Davidson equation on an operator that keeps at most 2 % of the cross-block couplings (the largest $|H_{ij}|$), its P block equal to $\mathbf A_{PP}$; without kept couplings, the preconditioned residual;
* collapse: about $\max(k, \lfloor 2m/5 \rfloor)$ Ritz vectors plus the previous Ritz vectors of the unconverged roots.

Residuals, θ and the final check use the exact $\mathbf A$. Each root converges to

$$
\lVert(\mathbf A - \theta)\,\mathbf x\rVert_2 \le \tau, \qquad \tau = \texttt{SI\_REKS\_DAVIDSON\_R\_CONVERGENCE} = 10^{-12}\ E_{\mathrm h};
$$

a root whose residual stalls at the rounding level of its product is accepted there, and that level is printed. When the last computed root lies within `REKS_GRAD_DEGEN_TOL` of the last requested one, $k$ grows by the margin and the iteration continues. Roots above $k$ are not computed: `SSR ENERGIES K=e` holds the $k$ roots ($r$ when the whole space is solved). Hexatriene REKS(6,6), singlet and triplet cassettes (r = 115, 117): with the default counts $m = r$; with 3 stored and printed states $k = 7$, $m = 112$, $p = r$, and one iteration converges. In both cases the printed roots of `DAVIDSON` differ from those of `DIRECT` by at most one unit of the twelfth decimal. Output: [SI Davidson solver](https://reksstudio.github.io/v2/manual/properties/index.md#si-davidson).

### Coupling damping below 100 % exact exchange {#coupling-damping}

With a functional whose global (short-range) exact-exchange fraction is below 100 %, range-separated functionals included, the off-diagonal elements $H_{ij}$ that the catalog marks as carried only by four-orbital active integrals $(pq|rs)$ are scaled, energies in $E_{\mathrm{h}}$ ([Filatov et al., J. Chem. Phys. 2017, 147, 064104](https://reksstudio.github.io/v2/manual/reference/index.md#filatov2017-extended-space), Eq. B50; parameters from [Grimme and Waletzke, J. Chem. Phys. 1999, 111, 5645](https://reksstudio.github.io/v2/manual/reference/index.md#grimme1999-dft-mrci)):

$$
H_{ij} \to 0.619\,\exp\!\big[{-3.27}\,(H_{ii}-H_{jj})^4\big]\,H_{ij}.
$$

At 100 % exact exchange, no element is scaled. When an element is scaled, the `References` block (`REKS_REPORT_LEVEL` ≥ 3) lists `Coupling damping (DFT)`. The exact-exchange fraction is in the `XC evaluation` line of the setup block ([Run report](https://reksstudio.github.io/v2/manual/properties/index.md#run-report)).

### Adiabatic (SSR) states {#ssr-states}

An adiabatic state is an eigenvector $\mathbf{c}_k$ of one cassette:

$$
\mathbf{H}\mathbf{c}_k = E_k\,\mathbf{S}\mathbf{c}_k.
$$

Roots are 0-based and sorted by energy; they are labeled `S0`, `S1`, … for $2S$ zero and `T1`, `Q1`, … (counted from 1) for positive $2S$ ([§9](https://reksstudio.github.io/v2/manual/setup/index.md#spin-manifolds)). Physical roots exclude the overlap null modes and ghost roots more than 100 $E_{\mathrm{h}}$ above the lowest root ([Ghost states and a collapsed SI spectrum](https://reksstudio.github.io/v2/manual/diagnose/index.md#diag-ghost-states)); `SSR ENERGIES K=e` holds every physical root of cassette e, on the Davidson path its computed roots ([SI eigensolver](#si-solver), [SSR state energies](https://reksstudio.github.io/v2/manual/properties/index.md#ssr-energies)).

### Chirgwin–Coulson weights {#cc-weights}

The weight of configuration $j$ in a state is

$$
\omega_j = c_j\,(\mathbf{S}\mathbf{c})_j, \qquad \sum_j \omega_j = 1.
$$

In the non-orthogonal configuration set, an individual $\omega_j$ can be negative. `Adiabatic states` prints them in % (column `w_j`).

### Unrelaxed and relaxed densities {#densities}

The unrelaxed density of states $I$, $J$ is the one-particle (transition) density of the model wavefunctions at the fixed orbitals and FONs:

$$
\langle I|\hat{E}_{pq}|J\rangle.
$$

Every `SI_REKS_ANALYSIS` property uses it ([§16](https://reksstudio.github.io/v2/manual/properties/index.md#properties)). The relaxed density $P^{\mathrm{r}}$ of a state adds the orbital- and FON-response terms of the coupled-perturbed REKS (CP-REKS, Z-vector) solve ([Filatov et al., J. Chem. Phys. 2017, 147, 034113](https://reksstudio.github.io/v2/manual/reference/index.md#filatov2017-gradients)), so that its dipole is the energy derivative

$$
\mu = -\frac{\mathrm{d}E_I}{\mathrm{d}F}.
$$

It is formed for the `SI_REKS_PROPERTY_FOR` states. $P^{\mathrm{r}}$ is not N-representable: it can have negative natural occupations, and bond indices from it are stored but not printed ([Bond indices of the relaxed density](https://reksstudio.github.io/v2/manual/properties/index.md#relaxed-bond-indices)).
