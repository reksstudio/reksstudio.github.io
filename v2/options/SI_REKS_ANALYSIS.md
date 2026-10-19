# `SI_REKS_ANALYSIS`

HTML: <https://reksstudio.github.io/v2/manual/setup/#si_reks_analysis>

Chapter: [10. Properties, Gradients, Couplings](https://reksstudio.github.io/v2/manual/setup/index.md#response)

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

State-property blocks of the SI states to compute, print and store (moments, charges, bond indices, NTO, exciton, …).

Type: array

Default: all blocks except multipoles > 2

```python
"si_reks_analysis": ["all"],
```

```log
=> State analysis [PROPERTIES] <=

   DENSITIES               active 1-RDMs of the states and the adiabatic 1-RDM (stored)
   DIPOLE                  permanent and difference dipoles of the states
   E_TDM_VEL               velocity transition moments, oscillator strengths f_vel
   EXCITON                 exciton and CT descriptors, hole/electron populations; NDOs (stored)
   FRAGMENT_COUPLINGS      FCD and FED (FSD for 2S > 0) fragment couplings
   LOWDIN_CHARGES          Lowdin charges of the states
   LOWDIN_SPINS            Lowdin spin populations of the 2S > 0 states
   M_TDM                   magnetic transition moments, rotatory strengths
   MAYER_INDICES           Mayer bond indices of the states
   MULLIKEN_CHARGES        Mulliken charges of the states
   MULLIKEN_SPINS          Mulliken spin populations of the 2S > 0 states
   M̶U̶L̶T̶I̶P̶O̶L̶E̶(̶n̶)̶            multipoles of order 3..n of the states and transitions
   NO_OCCUPATIONS          natural occupation numbers and natural orbitals of the states
   NTO                     NTO weights and participation ratios; natural transition orbitals (stored)
   QUADRUPOLE              quadrupoles of the states, full Cartesian and traceless
   RADICAL                 radical indices; unpaired atomic populations (stored)
   REKS_EKT                ionization energies and Dyson orbitals (EKT) of the states below
   SI_REKS_PROPERTY_FOR    relaxed dipole, quadrupole and atomic charges (density P^r) of the states below
   TRANSITION_CHARGES      Mulliken and Lowdin transition charges
   TRANSITION_DIPOLE       transition dipoles, oscillator strengths f_len
   TRANSITION_QUADRUPOLE   transition second moments, trace included
   WIBERG_LOWDIN_INDICES   Wiberg-Lowdin bond indices of the states

   Cassette  States
   ----------------
          0  S1, S2
   ----------------
```

* Property blocks to compute, print and store. Unset: every block except multipoles above order 2. `[]`: `TRANSITION_DIPOLE` and `NO_OCCUPATIONS`. A list: these two plus the listed names.
* Names: `DIPOLE`, `QUADRUPOLE`, `MULTIPOLE(n)`, `TRANSITION_DIPOLE`, `TRANSITION_QUADRUPOLE`, `E_TDM_VEL`, `M_TDM`, `MULLIKEN_CHARGES`, `LOWDIN_CHARGES`, `MULLIKEN_SPINS`, `LOWDIN_SPINS`, `TRANSITION_CHARGES`, `MAYER_INDICES`, `WIBERG_LOWDIN_INDICES`, `NO_OCCUPATIONS`, `DENSITIES`, `RADICAL`, `NTO`, `EXCITON`, `FRAGMENT_COUPLINGS`, `ALL`, case-insensitive; each property entry names its switch ([§16](https://reksstudio.github.io/v2/manual/properties/index.md#properties)). `MULLIKEN_SPINS`, `LOWDIN_SPINS` act on 2S > 0 cassettes ([Atomic spin populations of the states (2S > 0)](https://reksstudio.github.io/v2/manual/properties/index.md#atomic-spins)).
* A block another listed block needs is computed without being printed or stored: `RADICAL` needs `NO_OCCUPATIONS`, `FRAGMENT_COUPLINGS` the state and transition charges and, in a 2S > 0 cassette, the Löwdin spins.
* `MULTIPOLE(n)` adds `DIPOLE` and `TRANSITION_DIPOLE`, for n ≥ 2 `QUADRUPOLE` and `TRANSITION_QUADRUPOLE`, for n ≥ 3 the multipoles of order 3..n. `ALL` switches on every name except `MULTIPOLE(n)`: `["ALL", "MULTIPOLE(4)"]` adds both.
* `State analysis [PROPERTIES]` lists every name, `SI_REKS_PROPERTY_FOR` and `REKS_EKT` in alphabetical order (`_` read as a space) with a description, names not run struck through; with `SI_REKS_PROPERTY_FOR` it adds the states of each cassette that receive relaxed properties (and EKT when `REKS_EKT` is true).
