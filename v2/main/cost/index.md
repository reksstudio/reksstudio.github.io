# Cost — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/cost/>

Psi4 builds of these outputs: benchmark A REKS rows: kk/reks.v42 @ cf0bacc93 (TC def2-TZVP (8,8): 3eb094626); Psi4 RKS/UKS: 2acf2c145; benchmark B paper v1, build not recorded; C2H4 step e95c2d234. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# Cost and speed

Wall time, iterations and peak memory of REKS Studio. A: against ORCA and Q-Chem, one hot-start step of a 60-atom molecule. B: against DFT inside Psi4, 16 molecules.

def2-TZVP, 1260 basis functions: closed shell SI-SA-REKS(6,6) 132.53 s vs ORCA TDA 259.81 s; open shell SI-SA-REKS(6,6) 185.17 s vs ORCA SF-TDA 386.26 s.

(2,2)–(6,6) (SI-SA-REKS(2,2): 3 states): less time than ORCA TDA and SF-TDA on all four tests. (8,8): less in def2-TZVP on both systems (closed shell †); in 6-31G(d) 66.69 s vs ORCA TDA 67.53 s (closed shell), 87.74 s vs ORCA SF-TDA 75.44 s / TDA 88.12 s (open shell).

† REKS run at e 1e-7, d 1e-6.

* Tetracene dimer C<sub>36</sub>H<sub>24</sub>, 60 atoms
* 552 / 1260 basis functions
* BH\&HLYP
* SG-1 grid (ORCA DefGrid2)
* 36 cores
* hot start
* open source

[Install, free](https://reksstudio.github.io/v2/docs/index.md#install) From the install: up to [(6,6)](#catalogue).

## A. Against ORCA and Q-Chem

One hot-start step; it imitates a dynamics step: orbitals of the previous geometry 0.01 Å away; energies and states, no gradients.

Tetracene dimer C<sub>36</sub>H<sub>24</sub>, two geometries (TO open shell, TC closed shell); 6-31G(d) (552 basis functions) and def2-TZVP (1260 basis functions); BH\&HLYP, SG-1 grid (ORCA DefGrid2), density fitting in all codes; 36 cores; hot start from the orbitals of the neighbouring point; SCF and SCF + states as separate jobs. [Full setup](#md-setup).

### Wall time: SCF

* REKS Studio
* ORCA
* Q-Chem
* Psi4
* † e 1e-7, d 1e-6

Wall time per SCF job, log scale: TO, open shell, 6-31G(d), 552 bf. REKS Studio (2,2) 42.51 s; REKS Studio (4,4) 46.48 s; REKS Studio (6,6) 57.53 s; REKS Studio (8,8) 77.45 s; REKS Studio (10,10) 143.17 s; ORCA RKS 50.12 s; ORCA UKS (T) 43.38 s; ORCA ROKS (T) 43.05 s; Q-Chem RKS 76.44 s; Q-Chem UKS (T) 119.47 s; Q-Chem ROKS (T) 299.80 s; Psi4 RKS 31.89 s; Psi4 UKS (T) 28.66 s.

Wall time per SCF job, log scale: TC, closed shell, 6-31G(d), 552 bf. REKS Studio (2,2) 31.04 s; REKS Studio (4,4) 29.89 s; REKS Studio (6,6) 48.74 s; REKS Studio (8,8) 56.71 s; REKS Studio (10,10) 87.78 s †; ORCA RKS 38.23 s; ORCA UKS (T) 41.82 s; ORCA ROKS (T) 36.88 s; Q-Chem RKS 15.45 s; Q-Chem UKS (T) 70.40 s; Q-Chem ROKS (T) 132.05 s; Psi4 RKS 29.84 s; Psi4 UKS (T) 33.74 s.

Wall time per SCF job, log scale: TO, open shell, def2-TZVP, 1260 bf. REKS Studio (2,2) 153.20 s; REKS Studio (4,4) 174.24 s; REKS Studio (6,6) 181.95 s; REKS Studio (8,8) 260.98 s; REKS Studio (10,10) 417.01 s; ORCA RKS 180.64 s; ORCA UKS (T) 222.43 s; ORCA ROKS (T) 192.01 s; Q-Chem RKS 284.31 s; Q-Chem UKS (T) 364.51 s; Q-Chem ROKS (T) 1412.60 s; Psi4 RKS 86.10 s; Psi4 UKS (T) 98.24 s.

Wall time per SCF job, log scale: TC, closed shell, def2-TZVP, 1260 bf. REKS Studio (2,2) 103.33 s; REKS Studio (4,4) 103.18 s; REKS Studio (6,6) 128.39 s; REKS Studio (8,8) 139.43 s †; REKS Studio (10,10) 226.84 s †; ORCA RKS 122.71 s; ORCA UKS (T) 150.06 s; ORCA ROKS (T) 112.94 s; Q-Chem RKS 37.75 s; Q-Chem UKS (T) 259.36 s; Q-Chem ROKS (T) 610.53 s; Psi4 RKS 66.92 s; Psi4 UKS (T) 95.82 s.

Fig. 1a. Wall time of the SCF jobs of one hot-start step, log axis shared with Fig. 1b. Dotted line: ORCA RKS (closed shell) or UKS (T) (open shell). Fastest converged repeat; min–max in the tooltips. † REKS run at e 1e-7, d 1e-6.

### Wall time: SCF + response

SI-SA-REKS against ORCA TDA and SF-TDA, larger spaces — (10,10): more, shown as is. † REKS run at e 1e-7, d 1e-6 (TC (10,10), TC def2-TZVP (8,8), (10,10)).

* REKS Studio
* ORCA
* Q-Chem
* Psi4
* stopped
* † e 1e-7, d 1e-6

Wall time per SCF + response job, log scale: TO, open shell, 6-31G(d), 552 bf. REKS Studio (2,2) 42.98 s; REKS Studio (4,4) 45.48 s; REKS Studio (6,6) 58.14 s; REKS Studio (8,8) 87.74 s; REKS Studio (10,10) 345.95 s; ORCA TDA 88.12 s; ORCA SF-TDA 75.44 s; Q-Chem TDA 1545.28 s; Q-Chem SF-TDA 1476.85 s; Q-Chem MRSF-TDA 5681.09 s.

Wall time per SCF + response job, log scale: TC, closed shell, 6-31G(d), 552 bf. REKS Studio (2,2) 30.24 s; REKS Studio (4,4) 29.91 s; REKS Studio (6,6) 49.07 s; REKS Studio (8,8) 66.69 s; REKS Studio (10,10) 280.11 s †; ORCA TDA 67.53 s; ORCA SF-TDA 71.93 s; Q-Chem TDA 1309.04 s; Q-Chem SF-TDA 1202.12 s; Q-Chem MRSF-TDA 5517.88 s.

Wall time per SCF + response job, log scale: TO, open shell, def2-TZVP, 1260 bf. REKS Studio (2,2) 154.44 s; REKS Studio (4,4) 178.52 s; REKS Studio (6,6) 185.17 s; REKS Studio (8,8) 272.94 s; REKS Studio (10,10) 629.22 s; ORCA TDA 395.75 s; ORCA SF-TDA 386.26 s; Q-Chem TDA not run; Q-Chem SF-TDA stopped after 11 h; Q-Chem MRSF-TDA not run.

Wall time per SCF + response job, log scale: TC, closed shell, def2-TZVP, 1260 bf. REKS Studio (2,2) 105.89 s; REKS Studio (4,4) 105.42 s; REKS Studio (6,6) 132.53 s; REKS Studio (8,8) 152.58 s †; REKS Studio (10,10) 424.89 s †; ORCA TDA 259.81 s; ORCA SF-TDA 284.70 s; Q-Chem TDA stopped after ~30 min, not completed; Q-Chem SF-TDA 38159.22 s; Q-Chem MRSF-TDA stopped after 11.5 h.

Fig. 1b. Wall time of the SCF + response jobs (SCF and states in one run), log axis shared with Fig. 1a. Dotted line: ORCA TDA (closed shell) or SF-TDA (open shell). Arrow: run stopped at the time shown; not run: job not started. Fastest converged repeat; min–max in the tooltips. REKS rows: kk/reks.v42 @ cf0bacc93 (TC def2-TZVP (8,8): 3eb094626); Psi4 RKS/UKS: 2acf2c145.

### Iterations and CPU load

SA-REKS(8,8) from the previous-step orbitals: 11–13 SCF iterations (8 in TC def2-TZVP †).

Cores: CPU / wall of the whole run; n/p: ORCA prints wall times only and the benchmark recorded wall and peak memory only. Stopped and not-run jobs: measurement notes below. Per Fock build inside Psi4: [B](#fock).

#### SCF

SCF, s + resp, s = Wall, s: SCF = SCF time the code reports (ORCA 'SCF iterations' module, Q-Chem 'SCF time ... wall', Psi4 SI-SA-REKS: timers before 'REKS: compute_si'), resp = the rest of the run; an SCF-only job is SCF throughout; s / SCF it = SCF, s / SCF iterations.

TO, open shell, 6-31G(d)

| Job | Wall / s | SCF it. | s / SCF it. | Cores |
| - | - | - | - | - |
| REKS Studio, SA-REKS | | | | |
| (2,2) | 42.51 | 12 | 3.54 | 21.9 |
| (4,4) | 46.48 | 12 | 3.87 | 24.0 |
| (6,6) | 57.53 | 13 | 4.43 | 26.5 |
| (8,8) | 77.45 | 13 | 5.96 | 29.1 |
| (10,10) | 143.17 | 13 | 11.01 | 31.0 |
| ORCA | | | | |
| RKS | 50.12 | 12 | 4.18 | n/p |
| UKS (T) | 43.38 | 10 | 4.34 | n/p |
| ROKS (T) | 43.05 | 6 | 7.17 | n/p |
| Q-Chem | | | | |
| RKS | 76.44 | 14 | 5.46 | 26.9 |
| UKS (T) | 119.47 | 17 | 7.03 | 22.9 |
| ROKS (T) | 299.80 | 14 | 21.41 | 27.7 |
| Psi4 | | | | |
| RKS | 31.89 | 17 | 1.88 | 24.7 |
| UKS (T) | 28.66 | 9 | 3.18 | 26.1 |

TC, closed shell, 6-31G(d)

| Job | Wall / s | SCF it. | s / SCF it. | Cores |
| - | - | - | - | - |
| REKS Studio, SA-REKS | | | | |
| (2,2) | 31.04 | 11 | 2.82 | 22.9 |
| (4,4) | 29.89 | 9 | 3.32 | 25.3 |
| (6,6) | 48.74 | 15 | 3.25 | 28.5 |
| (8,8) | 56.71 | 11 | 5.16 | 30.5 |
| (10,10) † | 87.78 | 8 | 10.97 | 31.6 |
| ORCA | | | | |
| RKS | 38.23 | 12 | 3.19 | n/p |
| UKS (T) | 41.82 | 10 | 4.18 | n/p |
| ROKS (T) | 36.88 | 5 | 7.38 | n/p |
| Q-Chem | | | | |
| RKS | 15.45 | 6 | 2.57 | 27.4 |
| UKS (T) | 70.40 | 15 | 4.69 | 26.3 |
| ROKS (T) | 132.05 | 11 | 12.00 | 30.1 |
| Psi4 | | | | |
| RKS | 29.84 | 9 | 3.32 | 21.7 |
| UKS (T) | 33.74 | 8 | 4.22 | 24.4 |

TO, open shell, def2-TZVP

| Job | Wall / s | SCF it. | s / SCF it. | Cores |
| - | - | - | - | - |
| REKS Studio, SA-REKS | | | | |
| (2,2) | 153.20 | 12 | 12.77 | 20.7 |
| (4,4) | 174.24 | 12 | 14.52 | 23.5 |
| (6,6) | 181.95 | 11 | 16.54 | 25.8 |
| (8,8) | 260.98 | 13 | 20.08 | 28.4 |
| (10,10) | 417.01 | 13 | 32.08 | 30.6 |
| ORCA | | | | |
| RKS | 180.64 | 14 | 12.90 | n/p |
| UKS (T) | 222.43 | 15 | 14.83 | n/p |
| ROKS (T) | 192.01 | 8 | 24.00 | n/p |
| Q-Chem | | | | |
| RKS | 284.31 | 9 | 31.59 | 25.1 |
| UKS (T) | 364.51 | 18 | 20.25 | 21.8 |
| ROKS (T) | 1412.60 | 19 | 74.35 | 27.1 |
| Psi4 | | | | |
| RKS | 86.10 | 14 | 6.15 | 25.7 |
| UKS (T) | 98.24 | 9 | 10.92 | 27.9 |

TC, closed shell, def2-TZVP

| Job | Wall / s | SCF it. | s / SCF it. | Cores |
| - | - | - | - | - |
| REKS Studio, SA-REKS | | | | |
| (2,2) | 103.33 | 11 | 9.39 | 22.9 |
| (4,4) | 103.18 | 9 | 11.46 | 25.8 |
| (6,6) | 128.39 | 10 | 12.84 | 28.4 |
| (8,8) † | 139.43 | 8 | 17.43 | 30.1 |
| (10,10) † | 226.84 | 8 | 28.36 | 32.0 |
| ORCA | | | | |
| RKS | 122.71 | 9 | 13.63 | n/p |
| UKS (T) | 150.06 | 9 | 16.67 | n/p |
| ROKS (T) | 112.94 | 4 | 28.23 | n/p |
| Q-Chem | | | | |
| RKS | 37.75 | 5 | 7.55 | 27.2 |
| UKS (T) | 259.36 | 15 | 17.29 | 29.5 |
| ROKS (T) | 610.53 | 13 | 46.96 | 23.9 |
| Psi4 | | | | |
| RKS | 66.92 | 9 | 7.44 | 24.6 |
| UKS (T) | 95.82 | 9 | 10.65 | 27.7 |

#### SCF + response

SCF, s + resp, s = Wall, s: SCF = SCF time the code reports (ORCA 'SCF iterations' module, Q-Chem 'SCF time ... wall', Psi4 SI-SA-REKS: timers before 'REKS: compute_si'), resp = the rest of the run; an SCF-only job is SCF throughout; s / SCF it = SCF, s / SCF iterations; resp. it = Davidson iterations of the response (1 (direct) = SI of dimension \<= 4000 solved by one dense LAPACK diagonalization); s / resp. it = resp, s / resp. it.

TO, open shell, 6-31G(d)

| Job | Wall / s | SCF / s | SCF it. | s / SCF it. | Response / s | Resp. it. | s / resp. it. | Cores |
| - | - | - | - | - | - | - | - | - |
| REKS Studio, SI-SA-REKS | | | | | | | | |
| (2,2) | 42.98 | 38.23 | 12 | 3.19 | 4.75 | 1 (direct) | 4.75 | 22.4 |
| (4,4) | 45.48 | 40.54 | 12 | 3.38 | 4.94 | 1 (direct) | 4.94 | 24.4 |
| (6,6) | 58.14 | 51.63 | 13 | 3.97 | 6.51 | 1 (direct) | 6.51 | 26.7 |
| (8,8) | 87.74 | 71.20 | 13 | 5.48 | 16.54 | 1 (direct) | 16.54 | 29.9 |
| (10,10) | 345.95 | 142.45 | 13 | 10.96 | 203.50 | 10 | 20.35 | 30.1 |
| ORCA | | | | | | | | |
| TDA | 88.12 | 43.15 | 12 | 3.60 | 44.97 | 7 | 6.42 | n/p |
| SF-TDA | 75.44 | 37.76 | 10 | 3.78 | 37.68 | 5 | 7.54 | n/p |
| Q-Chem | | | | | | | | |
| TDA | 1545.28 | 50.00 | 14 | 3.57 | 1495.28 | 9 | 166.14 | 2.6 |
| SF-TDA | 1476.85 | 119.00 | 17 | 7.00 | 1357.85 | 10 | 135.78 | 2.9 |
| MRSF-TDA | 5681.09 | 277.00 | 14 | 19.79 | 5404.09 | 7 | 772.01 | 19.7 |

TC, closed shell, 6-31G(d)

| Job | Wall / s | SCF / s | SCF it. | s / SCF it. | Response / s | Resp. it. | s / resp. it. | Cores |
| - | - | - | - | - | - | - | - | - |
| REKS Studio, SI-SA-REKS | | | | | | | | |
| (2,2) | 30.24 | 26.02 | 11 | 2.37 | 4.22 | 1 (direct) | 4.22 | 23.8 |
| (4,4) | 29.91 | 25.50 | 9 | 2.83 | 4.41 | 1 (direct) | 4.41 | 26.1 |
| (6,6) | 49.07 | 43.91 | 15 | 2.93 | 5.16 | 1 (direct) | 5.16 | 29.1 |
| (8,8) | 66.69 | 51.96 | 11 | 4.72 | 14.73 | 1 (direct) | 14.73 | 31.7 |
| (10,10) † | 280.11 | 87.13 | 8 | 10.89 | 192.98 | 10 | 19.30 | 30.7 |
| ORCA | | | | | | | | |
| TDA | 67.53 | 32.26 | 12 | 2.69 | 35.27 | 5 | 7.05 | n/p |
| SF-TDA | 71.93 | 34.58 | 10 | 3.46 | 37.36 | 5 | 7.47 | n/p |
| Q-Chem | | | | | | | | |
| TDA | 1309.04 | 14.00 | 6 | 2.33 | 1295.04 | 9 | 143.89 | 1.7 |
| SF-TDA | 1202.12 | 69.00 | 15 | 4.60 | 1133.12 | 9 | 125.90 | 2.6 |
| MRSF-TDA | 5517.88 | 132.00 | 11 | 12.00 | 5385.88 | 10 | 538.59 | 19.6 |

TO, open shell, def2-TZVP

| Job | Wall / s | SCF / s | SCF it. | s / SCF it. | Response / s | Resp. it. | s / resp. it. | Cores |
| - | - | - | - | - | - | - | - | - |
| REKS Studio, SI-SA-REKS | | | | | | | | |
| (2,2) | 154.44 | 143.03 | 12 | 11.92 | 11.41 | 1 (direct) | 11.41 | 21.0 |
| (4,4) | 178.52 | 166.79 | 12 | 13.90 | 11.73 | 1 (direct) | 11.73 | 23.4 |
| (6,6) | 185.17 | 172.30 | 11 | 15.66 | 12.87 | 1 (direct) | 12.87 | 25.9 |
| (8,8) | 272.94 | 250.12 | 13 | 19.24 | 22.82 | 1 (direct) | 22.82 | 28.8 |
| (10,10) | 629.22 | 415.86 | 13 | 31.99 | 213.36 | 10 | 21.34 | 30.2 |
| ORCA | | | | | | | | |
| TDA | 395.75 | 169.42 | 14 | 12.10 | 226.33 | 9 | 25.15 | n/p |
| SF-TDA | 386.26 | 223.73 | 16 | 13.98 | 162.53 | 5 | 32.51 | n/p |
| Q-Chem | | | | | | | | |
| TDA | – | – | – | – | – | not run | – | – |
| SF-TDA | – | – | – | – | – | stopped | – | – |
| MRSF-TDA | – | – | – | – | – | not run | – | – |

TC, closed shell, def2-TZVP

| Job | Wall / s | SCF / s | SCF it. | s / SCF it. | Response / s | Resp. it. | s / resp. it. | Cores |
| - | - | - | - | - | - | - | - | - |
| REKS Studio, SI-SA-REKS | | | | | | | | |
| (2,2) | 105.89 | 97.45 | 11 | 8.86 | 8.44 | 1 (direct) | 8.44 | 23.1 |
| (4,4) | 105.42 | 96.57 | 9 | 10.73 | 8.85 | 1 (direct) | 8.85 | 25.8 |
| (6,6) | 132.53 | 122.52 | 10 | 12.25 | 10.01 | 1 (direct) | 10.01 | 28.3 |
| (8,8) † | 152.58 | 133.36 | 8 | 16.67 | 19.22 | 1 (direct) | 19.22 | 30.5 |
| (10,10) † | 424.89 | 227.48 | 8 | 28.43 | 197.41 | 10 | 19.74 | 31.2 |
| ORCA | | | | | | | | |
| TDA | 259.81 | 110.42 | 9 | 12.27 | 149.39 | 6 | 24.90 | n/p |
| SF-TDA | 284.70 | 139.48 | 9 | 15.50 | 145.22 | 5 | 29.04 | n/p |
| Q-Chem | | | | | | | | |
| TDA | – | – | – | – | – | stopped | – | – |
| SF-TDA | 38159.22 | 199.00 | 15 | 13.27 | 37960.22 | 9 | 4217.80 | 1.2 |
| MRSF-TDA | – | – | – | – | – | stopped | – | – |

### Peak memory

* REKS Studio
* ORCA
* Q-Chem
* Psi4
* SCF + states, SCF
* † e 1e-7, d 1e-6

Peak memory per job, GiB: TO, open shell, 6-31G(d), 552 bf. REKS Studio (2,2) 9.0 GiB; REKS Studio (4,4) 9.0 GiB; REKS Studio (6,6) 9.1 GiB; REKS Studio (8,8) 9.3 GiB; REKS Studio (10,10) 44.0 GiB; ORCA RKS → TDA 13.5 GiB; ORCA UKS (T) → SF-TDA 23.1 GiB; ORCA ROKS (T) 5.1 GiB; Q-Chem RKS → TDA 9.0 GiB; Q-Chem UKS (T) → SF-TDA 12.2 GiB; Q-Chem ROKS (T) → MRSF-TDA 11.7 GiB; Psi4 RKS 9.3 GiB; Psi4 UKS (T) 9.5 GiB.

Peak memory per job, GiB: TC, closed shell, 6-31G(d), 552 bf. REKS Studio (2,2) 9.2 GiB; REKS Studio (4,4) 9.2 GiB; REKS Studio (6,6) 9.3 GiB; REKS Studio (8,8) 9.5 GiB; REKS Studio (10,10) 44.3 GiB †; ORCA RKS → TDA 13.4 GiB; ORCA UKS (T) → SF-TDA 22.9 GiB; ORCA ROKS (T) 5.0 GiB; Q-Chem RKS → TDA 9.0 GiB; Q-Chem UKS (T) → SF-TDA 12.4 GiB; Q-Chem ROKS (T) → MRSF-TDA 12.0 GiB; Psi4 RKS 9.1 GiB; Psi4 UKS (T) 9.3 GiB.

Peak memory per job, GiB: TO, open shell, def2-TZVP, 1260 bf. REKS Studio (2,2) 42.1 GiB; REKS Studio (4,4) 42.1 GiB; REKS Studio (6,6) 42.1 GiB; REKS Studio (8,8) 42.2 GiB; REKS Studio (10,10) 58.7 GiB; ORCA RKS → TDA 52.8 GiB; ORCA UKS (T) → SF-TDA 96.7 GiB; ORCA ROKS (T) 12.9 GiB; Q-Chem RKS → TDA not run; Q-Chem UKS (T) → SF-TDA stopped; Q-Chem ROKS (T) → MRSF-TDA not run; Psi4 RKS 42.3 GiB; Psi4 UKS (T) 42.4 GiB.

Peak memory per job, GiB: TC, closed shell, def2-TZVP, 1260 bf. REKS Studio (2,2) 41.6 GiB; REKS Studio (4,4) 41.6 GiB; REKS Studio (6,6) 41.6 GiB; REKS Studio (8,8) 41.8 GiB †; REKS Studio (10,10) 58.3 GiB †; ORCA RKS → TDA 52.5 GiB; ORCA UKS (T) → SF-TDA 96.3 GiB; ORCA ROKS (T) 12.7 GiB; Q-Chem RKS → TDA stopped; Q-Chem UKS (T) → SF-TDA 40.5 GiB; Q-Chem ROKS (T) → MRSF-TDA stopped; Psi4 RKS 41.6 GiB; Psi4 UKS (T) 41.6 GiB.

Fig. 2. Peak memory per job, GiB, linear axis. Bar: SCF + states job (rows with SCF only: SCF job); tick: SCF job. Psi4 keeps the 3-index DF tensor in core: 5.19–5.28 GiB in 6-31G(d), 26.70–27.17 GiB in def2-TZVP.

### Setup

System: Tetracene dimer (TTRCN2), C<sub>36</sub>H<sub>24</sub>, 60 atoms; DR = interplanar displacement of the monomers. TO, open shell: DR −0.40 Å, SA-REKS(2,2) occupations 1.71 / 0.29 in 6-31G(d), 1.76 / 0.24 in def2-TZVP; TC, closed shell: DR 0 Å, SA-REKS(2,2) occupations 2.00 / 0.00.

Bases: 6-31G(d), 552; def2-TZVP, 1260 basis functions, spherical, the same count in all three codes.

Protocol: Zeroth calculation at the seed geometry, DR 0.01 Å away, untimed; the timed run reads its orbitals. SCF and SCF + states are separate jobs. Wall = whole program run, start-up included.

Settings: Default settings of each code except what was set for all: basis, BH\&HLYP, SG-1 grid (ORCA DefGrid2, it has no SG-1), density-fitted integrals (Psi4 DF, ORCA RIJCOSX, Q-Chem RI-J/RI-K), SCF convergence energy 1e-8 / density (error) 1e-7, at most 150 SCF cycles, response convergence 1e-6, 10 roots, 36 cores, 300 GB. REKS rows marked † ran at e 1e-7, d 1e-6 (TC (10,10), TC def2-TZVP (8,8), (10,10)).

Hardware: 2x Xeon Gold 6240, 36 cores; 36 threads or MPI ranks and 300 GB for every code.

Repeats: ORCA and Psi4 3; Q-Chem 3 where its wall time is within 1.5x of the faster of ORCA (same method) and SA-REKS(2,2), else 1. Shown: the fastest converged repeat.

Too slow: a Q-Chem run still going past both 2 x max(ORCA with the same method, slowest REKS job of the molecule) and 1 h is killed; every finished run keeps its numbers.

Memory: Peak PSS summed over the process tree, sampled every 0.5 s; GiB.

Energies: RKS energies of the three codes agree within 1.8 mEh.

Builds: REKS rows: kk/reks.v42 @ cf0bacc93 (TC def2-TZVP (8,8): 3eb094626); Psi4 RKS/UKS: 2acf2c145.

| | REKS Studio (Psi4) | ORCA | Q-Chem |
| - | - | - | - |
| Version | Psi4 kk/reks.v42 @ cf0bacc93 (TC def2-TZVP (8,8): 3eb094626) | ORCA 6.0.0 | Q-Chem 6.4 |
| Functional | `bhhlyp` | `BHANDHLYP` | `bhhlyp` |
| 6-31G(d) | `6-31g*`, `puream true` | `6-31G(d)` (spherical) | `6-31g*`, `purecart 1111` |
| Integrals, 6-31G(d) | `scf_type mem_df`, Psi4 default fitting basis | `RIJCOSX`, def2/J | `ri_j`+`ri_k`, rijk-def2-svp |
| def2-TZVP, integrals | `def2-tzvp`, `puream true`, default fitting basis | `def2-TZVP`, `RIJCOSX`, def2/J | `def2-tzvp`, rijk-def2-tzvp |
| Fitting set, size | (6-31G\* AUX) 3072 / (DEF2-TZVP AUX) 3132, J+K | def2/J 2028, J | rijk-def2-SVP 3132 / rijk-def2-TZVP 3132, J+K |
| Grid | `SG1` | `DefGrid2` (no SG1 in ORCA) | `xc_grid 1` (SG-1) |
| SCF convergence | e 1e-8, d 1e-7 | `TightSCF` + `TolE 1e-8 TolErr 1e-7 TolG 1e-7` | `scf_convergence 7` |
| Response convergence | direct diagonalization up to (8,8); (10,10) Davidson, residual 1e-12 | `ETol 1e-6 RTol 1e-6` | `cis_convergence 6` |
| Response | SI-SA-REKS, 10 singlet states; SI-SA-REKS(2,2): 3 | TDA, 10 roots | TDA (`rpa false`), 10 roots |
| Parallel | OpenMP, `OMP_NUM_THREADS` | MPI `%pal nprocs`, OpenMPI 4.1.6 | OpenMP, `qchem -nt` |
| Memory | `PSI4_MEMORY` | `%maxcore` = total / nprocs | `mem_total` |

Inputs, TO (open shell, 6-31G(d)); seeds not shipped

* [`reks_sa66.py`](https://reksstudio.github.io/v2/inputs/cost/reks_sa66.py.txt): SA-REKS(6,6): threads and memory from the environment (`OMP_NUM_THREADS`, `PSI4_MEMORY`); seed orbitals read from `prev.npy` (not shipped).
* [`reks_si66.py`](https://reksstudio.github.io/v2/inputs/cost/reks_si66.py.txt): SI-SA-REKS(6,6), 10 states: environment and `prev.npy` seed as for SA-REKS(6,6).
* [`orca_sftda.inp`](https://reksstudio.github.io/v2/inputs/cost/orca_sftda.inp.txt): ORCA SF-TDA, 10 roots: `%pal nprocs 36` and `%maxcore 8333` (MB per rank) set in the input; seed `prev.gbw` read by `MORead` (not shipped).
* [`qchem_sftda.in`](https://reksstudio.github.io/v2/inputs/cost/qchem_sftda.in.txt): Q-Chem SF-TDA, 10 roots: `mem_total 300000` (MB) set in the input, threads from `qchem -nt`; seed read by `scf_guess read` (not shipped).

### Measurement notes

* Q-Chem CPU load (CPU / wall from its output, 6-31G(d)): SCF 23-30 cores; response part TDA 1.4-1.9 cores, SF-TDA 1.1, MRSF-TDA 19.3. Q-Chem 6.4 runs in parallel only through OpenMP (qchem -nt 36; MPI only for finite-difference / many-body jobs, and this install has no MPI build): the TDA and SF-TDA response is effectively serial. def2-TZVP SF-TDA: 94 % of one core (top).
* Psi4 memory: MEM_DF keeps the 3-index DF tensor in core (Psi4 output 'AOs need': 5.19 GiB 6-31G(d), 26.70 GiB def2-TZVP = (1260/552)^2 x); ORCA RIJCOSX stores no 3-index K tensor.
* Psi4 has no ROKS ("ROHF reference for DFT is not available"): no Psi4 ROKS row. Psi4 UKS starts from the Psi4 UKS triplet seed, which reads the RKS seed (as in ORCA and Q-Chem).
* Time split, every code: SCF, s + resp, s = Wall, s of the same run. SCF = the SCF time the code reports (ORCA 'SCF iterations' module timing, Q-Chem 'SCF time ... wall', Psi4 SI-SA-REKS: wall sum of the timers before 'REKS: compute_si'); resp = the rest of the run, start-up and output included. Psi4 SI: the run time outside the Psi4 timers falls into resp.
* TO def2-TZVP: Q-Chem MRSF-TDA too slow: the same job in TC_tz took ~8 h for its first Davidson iteration; not run.
* TO def2-TZVP: Q-Chem SF-TDA too slow: 7 Davidson iterations in 11 h on one core (94 % CPU), then stopped.
* TO def2-TZVP: Q-Chem TDA too slow, not run: in 6-31G(d) TDA took as long as SF-TDA (1545 vs 1477 s), and SF-TDA here runs 10-11 h.
* TC def2-TZVP: Q-Chem MRSF-TDA too slow: SCF 495 s, then the first Davidson iteration took ~8 h (6-31G(d): 10 iterations of ~540 s); stopped after 11.5 h.
* TC def2-TZVP, Q-Chem TDA: stopped after ~30 min, no Davidson iteration completed.
* † TC (10,10), TC def2-TZVP (8,8), (10,10): e 1e-7, d 1e-6; every other row e 1e-8, d 1e-7.

### All jobs

TO, open shell, 6-31G(d), 552 basis functions

| Job | Wall / s | Repeats, min–max / s | Peak / GiB | Build |
| - | - | - | - | - |
| REKS Studio SA-REKS(2,2) | 42.51 | 3: 42.51–43.48 | 9.1 | cf0bacc93 |
| REKS Studio SI-SA-REKS(2,2) | 42.98 | 3: 42.98–43.70 | 9.0 | cf0bacc93 |
| REKS Studio SA-REKS(4,4) | 46.48 | 3: 46.48–46.66 | 9.0 | cf0bacc93 |
| REKS Studio SI-SA-REKS(4,4) | 45.48 | 3: 45.48–46.65 | 9.0 | cf0bacc93 |
| REKS Studio SA-REKS(6,6) | 57.53 | 3: 57.53–57.87 | 9.1 | cf0bacc93 |
| REKS Studio SI-SA-REKS(6,6) | 58.14 | 3: 58.14–59.22 | 9.1 | cf0bacc93 |
| REKS Studio SA-REKS(8,8) | 77.45 | 3: 77.45–78.49 | 9.2 | cf0bacc93 |
| REKS Studio SI-SA-REKS(8,8) | 87.74 | 3: 87.74–89.44 | 9.3 | cf0bacc93 |
| REKS Studio SA-REKS(10,10) | 143.17 | 3: 143.17–148.20 | 10.4 | cf0bacc93 |
| REKS Studio SI-SA-REKS(10,10) | 345.95 | 3: 345.95–349.68 | 44.0 | cf0bacc93 |
| ORCA RKS | 50.12 | 3: 50.12–50.37 | 4.7 | 6.0.0 |
| ORCA TDA-TDDFT | 88.12 | 3: 88.12–89.53 | 13.5 | 6.0.0 |
| ORCA UKS (T) | 43.38 | 3: 43.38–44.66 | 4.9 | 6.0.0 |
| ORCA SF-TDA | 75.44 | 3: 75.44–76.73 | 23.1 | 6.0.0 |
| ORCA ROKS (T) | 43.05 | 3: 43.05–43.31 | 5.1 | 6.0.0 |
| Q-Chem RKS | 76.44 | 1 | 9.0 | 6.4 |
| Q-Chem TDA-TDDFT | 1545.28 | 1 | 9.0 | 6.4 |
| Q-Chem UKS (T) | 119.47 | 1 | 12.2 | 6.4 |
| Q-Chem SF-TDA | 1476.85 | 1 | 12.2 | 6.4 |
| Q-Chem ROKS (T) | 299.80 | 1 | 11.7 | 6.4 |
| Q-Chem MRSF-TDA | 5681.09 | 1 | 11.7 | 6.4 |
| Psi4 RKS | 31.89 | 3: 31.89–33.73 | 9.3 | 2acf2c145 |
| Psi4 UKS (T) | 28.66 | 3: 28.66–28.79 | 9.5 | 2acf2c145 |

TC, closed shell, 6-31G(d), 552 basis functions

| Job | Wall / s | Repeats, min–max / s | Peak / GiB | Build |
| - | - | - | - | - |
| REKS Studio SA-REKS(2,2) | 31.04 | 3: 31.04–31.16 | 9.2 | cf0bacc93 |
| REKS Studio SI-SA-REKS(2,2) | 30.24 | 3: 30.24–30.62 | 9.2 | cf0bacc93 |
| REKS Studio SA-REKS(4,4) | 29.89 | 3: 29.89–30.44 | 9.2 | cf0bacc93 |
| REKS Studio SI-SA-REKS(4,4) | 29.91 | 3: 29.91–30.10 | 9.2 | cf0bacc93 |
| REKS Studio SA-REKS(6,6) | 48.74 | 3: 48.74–49.18 | 9.3 | cf0bacc93 |
| REKS Studio SI-SA-REKS(6,6) | 49.07 | 3: 49.07–50.04 | 9.3 | cf0bacc93 |
| REKS Studio SA-REKS(8,8) | 56.71 | 3: 56.71–57.32 | 9.4 | cf0bacc93 |
| REKS Studio SI-SA-REKS(8,8) | 66.69 | 3: 66.69–69.12 | 9.5 | cf0bacc93 |
| REKS Studio SA-REKS(10,10) † | 87.78 | 3: 87.78–89.45 | 10.6 | cf0bacc93 |
| REKS Studio SI-SA-REKS(10,10) † | 280.11 | 3: 280.11–282.42 | 44.3 | cf0bacc93 |
| ORCA RKS | 38.23 | 3: 38.23–39.51 | 4.6 | 6.0.0 |
| ORCA TDA-TDDFT | 67.53 | 3: 67.53–67.99 | 13.4 | 6.0.0 |
| ORCA UKS (T) | 41.82 | 3: 41.82–41.92 | 4.9 | 6.0.0 |
| ORCA SF-TDA | 71.93 | 3: 71.93–72.99 | 22.9 | 6.0.0 |
| ORCA ROKS (T) | 36.88 | 3: 36.88–37.66 | 5.0 | 6.0.0 |
| Q-Chem RKS | 15.45 | 3: 15.45–15.57 | 9.0 | 6.4 |
| Q-Chem TDA-TDDFT | 1309.04 | 1 | 9.0 | 6.4 |
| Q-Chem UKS (T) | 70.40 | 1 | 12.4 | 6.4 |
| Q-Chem SF-TDA | 1202.12 | 1 | 12.4 | 6.4 |
| Q-Chem ROKS (T) | 132.05 | 1 | 11.9 | 6.4 |
| Q-Chem MRSF-TDA | 5517.88 | 1 | 12.0 | 6.4 |
| Psi4 RKS | 29.84 | 3: 29.84–30.14 | 9.1 | 2acf2c145 |
| Psi4 UKS (T) | 33.74 | 3: 33.74–34.82 | 9.3 | 2acf2c145 |

TO, open shell, def2-TZVP, 1260 basis functions

| Job | Wall / s | Repeats, min–max / s | Peak / GiB | Build |
| - | - | - | - | - |
| REKS Studio SA-REKS(2,2) | 153.20 | 3: 153.20–161.45 | 42.1 | cf0bacc93 |
| REKS Studio SI-SA-REKS(2,2) | 154.44 | 3: 154.44–164.11 | 42.1 | cf0bacc93 |
| REKS Studio SA-REKS(4,4) | 174.24 | 3: 174.24–179.62 | 42.1 | cf0bacc93 |
| REKS Studio SI-SA-REKS(4,4) | 178.52 | 3: 178.52–188.01 | 42.1 | cf0bacc93 |
| REKS Studio SA-REKS(6,6) | 181.95 | 3: 181.95–195.24 | 42.1 | cf0bacc93 |
| REKS Studio SI-SA-REKS(6,6) | 185.17 | 3: 185.17–193.73 | 42.1 | cf0bacc93 |
| REKS Studio SA-REKS(8,8) | 260.98 | 3: 260.98–273.26 | 42.1 | cf0bacc93 |
| REKS Studio SI-SA-REKS(8,8) | 272.94 | 3: 272.94–282.55 | 42.2 | cf0bacc93 |
| REKS Studio SA-REKS(10,10) | 417.01 | 3: 417.01–420.90 | 43.1 | cf0bacc93 |
| REKS Studio SI-SA-REKS(10,10) | 629.22 | 3: 629.22–634.92 | 58.7 | cf0bacc93 |
| ORCA RKS | 180.64 | 3: 180.64–205.31 | 11.0 | 6.0.0 |
| ORCA TDA-TDDFT | 395.75 | 3: 395.75–430.03 | 52.8 | 6.0.0 |
| ORCA UKS (T) | 222.43 | 3: 222.43–401.01 | 12.1 | 6.0.0 |
| ORCA SF-TDA | 386.26 | 3: 386.26–507.69 | 96.7 | 6.0.0 |
| ORCA ROKS (T) | 192.01 | 3: 192.01–195.29 | 12.9 | 6.0.0 |
| Q-Chem RKS | 284.31 | 1 | 33.7 | 6.4 |
| Q-Chem TDA-TDDFT | not run | – | – | – |
| Q-Chem UKS (T) | 364.51 | 1 | 41.1 | 6.4 |
| Q-Chem SF-TDA | stopped after 11 h | – | – | – |
| Q-Chem ROKS (T) | 1412.60 | 1 | 39.8 | 6.4 |
| Q-Chem MRSF-TDA | not run | – | – | – |
| Psi4 RKS | 86.10 | 3: 86.10–87.18 | 42.3 | 2acf2c145 |
| Psi4 UKS (T) | 98.24 | 3: 98.24–98.54 | 42.4 | 2acf2c145 |

TC, closed shell, def2-TZVP, 1260 basis functions

| Job | Wall / s | Repeats, min–max / s | Peak / GiB | Build |
| - | - | - | - | - |
| REKS Studio SA-REKS(2,2) | 103.33 | 3: 103.33–104.75 | 41.7 | cf0bacc93 |
| REKS Studio SI-SA-REKS(2,2) | 105.89 | 3: 105.89–106.32 | 41.6 | cf0bacc93 |
| REKS Studio SA-REKS(4,4) | 103.18 | 3: 103.18–103.47 | 41.7 | cf0bacc93 |
| REKS Studio SI-SA-REKS(4,4) | 105.42 | 3: 105.42–106.20 | 41.6 | cf0bacc93 |
| REKS Studio SA-REKS(6,6) | 128.39 | 3: 128.39–130.67 | 41.6 | cf0bacc93 |
| REKS Studio SI-SA-REKS(6,6) | 132.53 | 3: 132.53–134.26 | 41.6 | cf0bacc93 |
| REKS Studio SA-REKS(8,8) † | 139.43 | 3: 139.43–142.11 | 41.6 | 3eb094626 |
| REKS Studio SI-SA-REKS(8,8) † | 152.58 | 3: 152.58–155.18 | 41.8 | 3eb094626 |
| REKS Studio SA-REKS(10,10) † | 226.84 | 3: 226.84–230.01 | 42.7 | cf0bacc93 |
| REKS Studio SI-SA-REKS(10,10) † | 424.89 | 3: 424.89–432.87 | 58.3 | cf0bacc93 |
| ORCA RKS | 122.71 | 3: 122.71–125.47 | 10.8 | 6.0.0 |
| ORCA TDA-TDDFT | 259.81 | 3: 259.81–262.40 | 52.5 | 6.0.0 |
| ORCA UKS (T) | 150.06 | 3: 150.06–232.13 | 11.9 | 6.0.0 |
| ORCA SF-TDA | 284.70 | 3: 284.70–458.73 | 96.3 | 6.0.0 |
| ORCA ROKS (T) | 112.94 | 3: 112.94–114.81 | 12.7 | 6.0.0 |
| Q-Chem RKS | 37.75 | 3: 37.75–38.08 | 33.0 | 6.4 |
| Q-Chem TDA-TDDFT | stopped after ~30 min, not completed | – | – | – |
| Q-Chem UKS (T) | 259.36 | 1 | 40.5 | 6.4 |
| Q-Chem SF-TDA | 38159.22 | 1 | 40.5 | 6.4 |
| Q-Chem ROKS (T) | 610.53 | 1 | 39.0 | 6.4 |
| Q-Chem MRSF-TDA | stopped after 11.5 h | – | – | – |
| Psi4 RKS | 66.92 | 3: 66.92–67.18 | 41.6 | 2acf2c145 |
| Psi4 UKS (T) | 95.82 | 3: 95.82–97.00 | 41.6 | 2acf2c145 |

[Install, free](https://reksstudio.github.io/v2/docs/index.md#install) From the install: up to [(6,6)](#catalogue).

## B. Inside Psi4

Paper v1: 16 molecules, 322–1868 basis functions (9 aug-cc-pVTZ, 7 cc-pVTZ); single points; RKS / RHF references and 20-state TDA from SAD, SA-REKS and SSR from the converged reference orbitals (untimed); Intel Xeon E5-2697 v3 (Haswell), 28 threads.

### Ground state: whole SCF run

Whole run of the SCF job, SA-REKS over the reference, median over 16 molecules, (2,2) to (8,8): BH\&HLYP 0.86–10.47; HF 0.80–2.25. Below parity at (2,2): 12 of 16 with BH\&HLYP, 14 with HF; at (8,8): 0 of 16 with BH\&HLYP, 0 with HF.

* SA-REKS(2,2)
* SA-REKS(4,4)
* SA-REKS(6,6)
* SA-REKS(8,8)
* parity

BH\&HLYP: SA-REKS / RKS

median, 16 molecules: (2,2) 0.86 · (4,4) 1.53 · (6,6) 3.33 · (8,8) 10.47

BH\&HLYP: SA-REKS / RKS, whole SCF run, per molecule against basis functions, log–log; median over 16 molecules: (2,2) 0.86, (4,4) 1.53, (6,6) 3.33, (8,8) 10.47

HF: SA-REKS / RHF

median, 16 molecules: (2,2) 0.80 · (4,4) 1.03 · (6,6) 2.14 · (8,8) 2.25

HF: SA-REKS / RHF, whole SCF run, per molecule against basis functions, log–log; median over 16 molecules: (2,2) 0.80, (4,4) 1.03, (6,6) 2.14, (8,8) 2.25

Fig. B1. Whole run of the SCF job, SA-REKS over the reference (RKS for BH\&HLYP, RHF for HF), per molecule; log–log; dashed: parity. SA-REKS reads the converged reference orbitals (seed run not timed); reference from SAD. Fastest converged repeat. Each point opens its molecule card.

### One Fock build

Per Fock build, SA-REKS over the reference, median over the 6 largest molecules (1064–1868 basis functions), (2,2) to (8,8): BH\&HLYP 1.57–5.59; HF 1.30–2.29.

* SA-REKS(2,2)
* SA-REKS(4,4)
* SA-REKS(6,6)
* SA-REKS(8,8)
* parity

BH\&HLYP: SA-REKS / RKS

median, 16 molecules: (2,2) 2.15 · (4,4) 3.12 · (6,6) 6.29 · (8,8) 14.83

BH\&HLYP: SA-REKS / RKS, one Fock build, per molecule against basis functions, log–log; median over 16 molecules: (2,2) 2.15, (4,4) 3.12, (6,6) 6.29, (8,8) 14.83

HF: SA-REKS / RHF

median, 16 molecules: (2,2) 1.76 · (4,4) 2.48 · (6,6) 3.21 · (8,8) 4.03

HF: SA-REKS / RHF, one Fock build, per molecule against basis functions, log–log; median over 16 molecules: (2,2) 1.76, (4,4) 2.48, (6,6) 3.21, (8,8) 4.03

Fig. B2. Time of one Fock build, SA-REKS over the reference (RKS for BH\&HLYP, RHF for HF), per molecule; log–log; dashed: parity. Panel median over all 16 molecules. Each point opens its molecule card.

| SCF iterations, median (range) | Reference | (2,2) | (4,4) | (6,6) | (8,8) |
| - | - | - | - | - | - |
| BH\&HLYP, RKS | 20.5 (13–86) | 12.5 (10–23) | 17.5 (12–39) | 25 (13–49) | 40.5 (15–75) |
| HF, RHF | 17 (13–32) | 15 (12–26) | 17.5 (12–40) | 32 (13–81) | 40 (14–91) |

BH\&HLYP, SA-REKS(8,8) from RKS orbitals: median 40.5 SCF iterations; RKS from SAD: 20.5.

Fitted exponent k of the Fock-build time t ∝ N<sup>k</sup>, N basis functions (log–log least squares, all 16 molecules): BH\&HLYP RKS N<sup>2.99</sup>, (2,2) N<sup>2.68</sup>, (4,4) N<sup>2.52</sup>, (6,6) N<sup>2.22</sup>, (8,8) N<sup>1.97</sup>; HF RHF N<sup>3.44</sup>, (2,2) N<sup>3.09</sup>, (4,4) N<sup>2.97</sup>, (6,6) N<sup>2.87</sup>, (8,8) N<sup>2.80</sup>.

### Excited states

Whole SSR run over the whole 20-state TDA run, median over 16 molecules, (2,2) to (8,8): BH\&HLYP 0.14–2.65 (TDDFT-TDA); HF 0.13–0.81 (CIS). Above parity at (8,8): 14 of 16 with BH\&HLYP, 5 with HF.

* SSR(2,2), 3 states
* SSR(4,4), 16 states
* SSR(6,6), 115 states
* SSR(8,8), 996 states
* TDDFT-TDA | CIS: 20 states
* parity

BH\&HLYP: SSR / TDDFT-TDA

median, 16 molecules: (2,2) 0.14 · (4,4) 0.24 · (6,6) 0.57 · (8,8) 2.65

BH\&HLYP: SSR / TDDFT-TDA, whole run, per molecule against basis functions, log–log; median over 16 molecules: (2,2) 0.14, (4,4) 0.24, (6,6) 0.57, (8,8) 2.65

HF: SSR / CIS

median, 16 molecules: (2,2) 0.13 · (4,4) 0.18 · (6,6) 0.38 · (8,8) 0.81

HF: SSR / CIS, whole run, per molecule against basis functions, log–log; median over 16 molecules: (2,2) 0.13, (4,4) 0.18, (6,6) 0.38, (8,8) 0.81

Fig. B3. Whole SSR run over the whole 20-state TDA run (TDDFT-TDA for BH\&HLYP, CIS for HF), per molecule; log–log; dashed: parity. SSR reads the converged reference orbitals (seed run not timed); TDA from SAD. Fastest converged repeat. Each point opens its molecule card.

SI step alone over the TDA response (TDA wall minus its SCF wall), median, (2,2), (4,4), (6,6), (8,8): BH\&HLYP 1/1194, 1/190, 1/68, 1/13; HF 1/1105, 1/205, 1/70, 1/36.

### Memory

Peak memory, median over the 6 largest molecules, all active spaces and functionals: SA-REKS over the reference 1.01 (0.93–1.02), per space and functional 1.00–1.01; SSR over TDA 0.93 (0.83–1.01).

### Molecules

Wall: whole run in s, fastest converged of 4 repeats; it.: SCF iterations of that repeat; peak memory: lowest of the 4 repeats, GiB. Reference and TDA from SAD, SA-REKS and SSR from the converged reference orbitals (not timed).

#### aug-cc-pVTZ: 9 molecules

* ![acetone: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/cost/mol/acetone.svg)

  acetone

  C<sub>3</sub>H<sub>6</sub>O · 10 atoms · aug-cc-pVTZ · 322 bf

  | | BH\&HLYP | | | HF | | |
  | - | - | - | - | - | - | - |
  | | s | it. | GiB | s | it. | GiB |
  | Ground state: reference, SA-REKS | | | | | | |
  | RKS \| RHF | 6.38 | 14 | 1.6 | 5.85 | 14 | 1.4 |
  | (2,2) | 7.19 | 15 | 1.6 | 4.88 | 16 | 1.4 |
  | (4,4) | 12.4 | 22 | 1.5 | 6.05 | 19 | 1.4 |
  | (6,6) | 25.5 | 26 | 1.5 | 9.24 | 30 | 1.4 |
  | (8,8) | 151 | 35 | 1.7 | 22.3 | 73 | 1.4 |
  | Excited states, states computed: TDA, SSR | | | | | | |
  | TDA \| CIS 20 | 29.0 | 14 | 2.0 | 22.4 | 14 | 1.4 |
  | (2,2) 3 | 7.31 | 15 | 1.5 | 5.29 | 16 | 1.4 |
  | (4,4) 16 | 12.2 | 22 | 1.5 | 6.25 | 19 | 1.4 |
  | (6,6) 115 | 26.3 | 26 | 1.5 | 9.63 | 30 | 1.4 |
  | (8,8) 996 | 158 | 35 | 2.0 | 24.6 | 73 | 1.6 |

* ![cyclopentadiene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/cost/mol/cyclopentadiene.svg)

  cyclopentadiene

  C<sub>5</sub>H<sub>6</sub> · 11 atoms · aug-cc-pVTZ · 368 bf

  | | BH\&HLYP | | | HF | | |
  | - | - | - | - | - | - | - |
  | | s | it. | GiB | s | it. | GiB |
  | Ground state: reference, SA-REKS | | | | | | |
  | RKS \| RHF | 6.77 | 13 | 1.9 | 6.24 | 13 | 1.9 |
  | (2,2) | 8.02 | 14 | 1.9 | 6.05 | 16 | 1.8 |
  | (4,4) | 12.0 | 16 | 1.9 | 7.01 | 17 | 1.8 |
  | (6,6) | 23.3 | 18 | 1.9 | 15.3 | 40 | 1.8 |
  | (8,8) | 110 | 40 | 2.1 | 18.0 | 41 | 1.9 |
  | Excited states, states computed: TDA, SSR | | | | | | |
  | TDA \| CIS 20 | 39.4 | 13 | 2.4 | 27.2 | 13 | 1.8 |
  | (2,2) 3 | 8.19 | 14 | 1.9 | 5.97 | 16 | 1.8 |
  | (4,4) 16 | 12.4 | 16 | 1.9 | 6.84 | 17 | 1.8 |
  | (6,6) 115 | 24.6 | 18 | 1.9 | 15.7 | 40 | 1.8 |
  | (8,8) 996 | 120 | 40 | 2.4 | 21.3 | 41 | 2.0 |

* ![strepto-c5: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/cost/mol/strepto-c5.svg)

  strepto-c5

  C<sub>5</sub>H<sub>9</sub>N<sub>2</sub><sup>+</sup> · 16 atoms · aug-cc-pVTZ · 529 bf

  | | BH\&HLYP | | | HF | | |
  | - | - | - | - | - | - | - |
  | | s | it. | GiB | s | it. | GiB |
  | Ground state: reference, SA-REKS | | | | | | |
  | RKS \| RHF | 15.6 | 14 | 4.0 | 13.8 | 14 | 3.9 |
  | (2,2) | 16.6 | 11 | 4.1 | 11.5 | 12 | 4.0 |
  | (4,4) | 33.8 | 24 | 4.2 | 17.1 | 20 | 4.0 |
  | (6,6) | 92.1 | 35 | 4.1 | 35.8 | 38 | 4.0 |
  | (8,8) | 314 | 51 | 4.1 | 29.7 | 26 | 4.0 |
  | Excited states, states computed: TDA, SSR | | | | | | |
  | TDA \| CIS 20 | 99.2 | 14 | 4.5 | 88.6 | 14 | 3.9 |
  | (2,2) 3 | 15.6 | 11 | 4.1 | 12.1 | 12 | 4.0 |
  | (4,4) 16 | 34.4 | 24 | 4.1 | 18.9 | 20 | 4.0 |
  | (6,6) 115 | 94.0 | 35 | 4.1 | 35.8 | 38 | 4.0 |
  | (8,8) 996 | 318 | 51 | 4.3 | 35.9 | 26 | 4.2 |

* ![diketopyrrolopyrrole: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/cost/mol/diketopyrrolopyrrole.svg)

  diketopyrrolopyrrole

  C<sub>6</sub>H<sub>4</sub>N<sub>2</sub>O<sub>2</sub> · 14 atoms · aug-cc-pVTZ · 552 bf

  | | BH\&HLYP | | | HF | | |
  | - | - | - | - | - | - | - |
  | | s | it. | GiB | s | it. | GiB |
  | Ground state: reference, SA-REKS | | | | | | |
  | RKS \| RHF | 21.9 | 15 | 4.8 | 21.2 | 17 | 4.7 |
  | (2,2) | 19.4 | 11 | 4.9 | 16.3 | 15 | 4.8 |
  | (4,4) | 33.0 | 18 | 4.9 | 21.6 | 19 | 4.8 |
  | (6,6) | 73.1 | 24 | 4.9 | 28.2 | 23 | 4.8 |
  | (8,8) | 223 | 34 | 4.9 | 39.0 | 27 | 4.9 |
  | Excited states, states computed: TDA, SSR | | | | | | |
  | TDA \| CIS 20 | 138 | 15 | 5.2 | 112 | 17 | 4.8 |
  | (2,2) 3 | 19.3 | 11 | 4.9 | 16.4 | 15 | 4.8 |
  | (4,4) 16 | 32.4 | 18 | 4.9 | 23.9 | 19 | 4.8 |
  | (6,6) 115 | 70.9 | 24 | 4.9 | 31.4 | 23 | 4.8 |
  | (8,8) 996 | 233 | 34 | 5.1 | 44.6 | 27 | 5.0 |

* ![naphthalene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/cost/mol/naphthalene.svg)

  naphthalene

  C<sub>10</sub>H<sub>8</sub> · 18 atoms · aug-cc-pVTZ · 644 bf

  | | BH\&HLYP | | | HF | | |
  | - | - | - | - | - | - | - |
  | | s | it. | GiB | s | it. | GiB |
  | Ground state: reference, SA-REKS | | | | | | |
  | RKS \| RHF | 26.5 | 16 | 7.2 | 22.3 | 14 | 7.1 |
  | (2,2) | 26.3 | 11 | 7.3 | 21.1 | 14 | 7.2 |
  | (4,4) | 44.7 | 17 | 7.3 | 27.4 | 16 | 7.2 |
  | (6,6) | 88.2 | 19 | 7.3 | 32.2 | 17 | 7.2 |
  | (8,8) | 201 | 19 | 7.4 | 48.1 | 21 | 7.2 |
  | Excited states, states computed: TDA, SSR | | | | | | |
  | TDA \| CIS 20 | 190 | 16 | 7.5 | 160 | 14 | 7.1 |
  | (2,2) 3 | 26.0 | 11 | 7.4 | 21.2 | 14 | 7.2 |
  | (4,4) 16 | 45.5 | 17 | 7.3 | 28.3 | 16 | 7.2 |
  | (6,6) 115 | 90.8 | 19 | 7.3 | 36.9 | 17 | 7.2 |
  | (8,8) 996 | 219 | 20 | 7.6 | 52.5 | 21 | 7.4 |

* ![dimethylaniline: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/cost/mol/dimethylaniline.svg)

  dimethylaniline

  C<sub>8</sub>H<sub>11</sub>N · 20 atoms · aug-cc-pVTZ · 667 bf

  | | BH\&HLYP | | | HF | | |
  | - | - | - | - | - | - | - |
  | | s | it. | GiB | s | it. | GiB |
  | Ground state: reference, SA-REKS | | | | | | |
  | RKS \| RHF | 33.1 | 19 | 7.8 | 27.2 | 17 | 7.7 |
  | (2,2) | 38.2 | 19 | 8.0 | 25.5 | 18 | 7.8 |
  | (4,4) | 57.0 | 20 | 7.9 | 33.3 | 20 | 7.8 |
  | (6,6) | 185 | 39 | 7.9 | 60.5 | 34 | 7.8 |
  | (8,8) | 572 | 50 | 8.0 | 235 | 56 | 7.9 |
  | Excited states, states computed: TDA, SSR | | | | | | |
  | TDA \| CIS 20 | 212 | 19 | 8.0 | 179 | 17 | 7.8 |
  | (2,2) 3 | 38.1 | 19 | 7.9 | 25.7 | 18 | 7.8 |
  | (4,4) 16 | 55.8 | 20 | 7.9 | 33.3 | 20 | 7.8 |
  | (6,6) 115 | 198 | 39 | 8.0 | 67.0 | 34 | 7.8 |
  | (8,8) 996 | 578 | 50 | 8.1 | 232 | 56 | 8.0 |

* ![twisted-n-phenylpyrrole: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/cost/mol/twisted-n-phenylpyrrole.svg)

  twisted-n-phenylpyrrole

  C<sub>10</sub>H<sub>9</sub>N · 20 atoms · aug-cc-pVTZ · 713 bf

  | | BH\&HLYP | | | HF | | |
  | - | - | - | - | - | - | - |
  | | s | it. | GiB | s | it. | GiB |
  | Ground state: reference, SA-REKS | | | | | | |
  | RKS \| RHF | 64.6 | 31 | 9.3 | 38.0 | 17 | 9.2 |
  | (2,2) | 54.4 | 23 | 9.4 | 57.7 | 22 | 9.3 |
  | (4,4) | 222 | 39 | 9.4 | 124 | 40 | 9.3 |
  | (6,6) | 590 | 38 | 9.4 | 272 | 81 | 9.3 |
  | (8,8) | 1364 | 75 | 9.4 | 314 | 44 | 9.3 |
  | Excited states, states computed: TDA, SSR | | | | | | |
  | TDA \| CIS 20 | 287 | 31 | 9.3 | 226 | 17 | 9.2 |
  | (2,2) 3 | 55.0 | 23 | 9.4 | 55.6 | 22 | 9.3 |
  | (4,4) 16 | 232 | 39 | 9.4 | 127 | 40 | 9.3 |
  | (6,6) 115 | 222 | 41 | 9.5 | 276 | 81 | 9.3 |
  | (8,8) 996 | 1551 | 89 | 9.6 | 302 | 44 | 9.4 |

* ![tdmabn: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/cost/mol/tdmabn.svg)

  tdmabn

  C<sub>9</sub>H<sub>10</sub>N<sub>2</sub> · 21 atoms · aug-cc-pVTZ · 736 bf

  | | BH\&HLYP | | | HF | | |
  | - | - | - | - | - | - | - |
  | | s | it. | GiB | s | it. | GiB |
  | Ground state: reference, SA-REKS | | | | | | |
  | RKS \| RHF | 45.9 | 21 | 10.0 | 34.0 | 17 | 10.0 |
  | (2,2) | 42.2 | 15 | 10.2 | 41.9 | 26 | 10.0 |
  | (4,4) | 73.5 | 21 | 10.2 | 44.4 | 20 | 10.0 |
  | (6,6) | 129 | 21 | 10.2 | 82.8 | 34 | 10.0 |
  | (8,8) | 514 | 39 | 10.2 | 105 | 36 | 10.0 |
  | Excited states, states computed: TDA, SSR | | | | | | |
  | TDA \| CIS 20 | 295 | 21 | 10.0 | 263 | 17 | 9.9 |
  | (2,2) 3 | 41.8 | 15 | 10.2 | 41.4 | 26 | 10.0 |
  | (4,4) 16 | 75.2 | 21 | 10.2 | 47.9 | 20 | 10.0 |
  | (6,6) 115 | 134 | 21 | 10.2 | 87.2 | 34 | 10.0 |
  | (8,8) 996 | 513 | 39 | 10.4 | 113 | 36 | 10.2 |

* ![nitrodimethylaniline: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/cost/mol/nitrodimethylaniline.svg)

  nitrodimethylaniline

  C<sub>8</sub>H<sub>10</sub>N<sub>2</sub>O<sub>2</sub> · 22 atoms · aug-cc-pVTZ · 782 bf

  | | BH\&HLYP | | | HF | | |
  | - | - | - | - | - | - | - |
  | | s | it. | GiB | s | it. | GiB |
  | Ground state: reference, SA-REKS | | | | | | |
  | RKS \| RHF | 59.6 | 20 | 11.6 | 48.4 | 17 | 11.5 |
  | (2,2) | 52.6 | 14 | 11.7 | 45.4 | 19 | 11.6 |
  | (4,4) | 92.8 | 23 | 11.8 | 62.7 | 24 | 11.6 |
  | (6,6) | 251 | 37 | 11.8 | 194 | 26 | 11.6 |
  | (8,8) | 640 | 43 | 11.8 | 131 | 39 | 11.6 |
  | Excited states, states computed: TDA, SSR | | | | | | |
  | TDA \| CIS 20 | 351 | 20 | 11.6 | 315 | 17 | 11.5 |
  | (2,2) 3 | 52.4 | 14 | 11.8 | 44.6 | 19 | 11.6 |
  | (4,4) 16 | 97.0 | 23 | 11.8 | 63.8 | 24 | 11.6 |
  | (6,6) 115 | 248 | 37 | 11.8 | 190 | 26 | 11.6 |
  | (8,8) 996 | 939 | 62 | 11.9 | 307 | 90 | 11.7 |

#### cc-pVTZ: 7 molecules

* ![zethrene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/cost/mol/zethrene.svg)

  zethrene

  C<sub>24</sub>H<sub>14</sub> · 38 atoms · cc-pVTZ · 916 bf

  | | BH\&HLYP | | | HF | | |
  | - | - | - | - | - | - | - |
  | | s | it. | GiB | s | it. | GiB |
  | Ground state: reference, SA-REKS | | | | | | |
  | RKS \| RHF | 85.4 | 20 | 15.5 | 80.4 | 20 | 15.5 |
  | (2,2) | 71.8 | 12 | 15.7 | 56.5 | 12 | 15.6 |
  | (4,4) | 116 | 18 | 15.7 | 76.3 | 16 | 15.6 |
  | (6,6) | 438 | 49 | 15.9 | 259 | 63 | 15.6 |
  | (8,8) | 2716 | 35 | 15.9 | 463 | 91 | 15.6 |
  | Excited states, states computed: TDA, SSR | | | | | | |
  | TDA \| CIS 20 | 559 | 20 | 16.0 | 546 | 20 | 15.5 |
  | (2,2) 3 | 72.0 | 12 | 15.7 | 55.3 | 12 | 15.6 |
  | (4,4) 16 | 120 | 18 | 15.7 | 78.0 | 16 | 15.6 |
  | (6,6) 115 | 446 | 49 | 15.9 | 332 | 79 | 15.6 |
  | (8,8) 996 | 2972 | 141 | 15.9 | 460 | 88 | 15.8 |

* ![heptazethrene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/cost/mol/heptazethrene.svg)

  heptazethrene

  C<sub>28</sub>H<sub>16</sub> · 44 atoms · cc-pVTZ · 1064 bf

  | | BH\&HLYP | | | HF | | |
  | - | - | - | - | - | - | - |
  | | s | it. | GiB | s | it. | GiB |
  | Ground state: reference, SA-REKS | | | | | | |
  | RKS \| RHF | 160 | 22 | 21.3 | 156 | 23 | 21.2 |
  | (2,2) | 108 | 11 | 21.6 | 98.0 | 13 | 21.3 |
  | (4,4) | 157 | 15 | 21.5 | 116 | 14 | 21.3 |
  | (6,6) | 422 | 33 | 21.7 | 351 | 52 | 21.4 |
  | (8,8) | 1205 | 47 | 21.7 | 363 | 46 | 21.4 |
  | Excited states, states computed: TDA, SSR | | | | | | |
  | TDA \| CIS 20 | 882 | 22 | 22.5 | 902 | 23 | 21.4 |
  | (2,2) 3 | 108 | 11 | 21.5 | 98.5 | 13 | 21.3 |
  | (4,4) 16 | 158 | 15 | 21.6 | 117 | 14 | 21.3 |
  | (6,6) 115 | 446 | 33 | 21.7 | 942 | 142 | 21.3 |
  | (8,8) 996 | 2630 | 62 | 21.8 | 994 | 102 | 21.5 |

* ![octazethrene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/cost/mol/octazethrene.svg)

  octazethrene

  C<sub>32</sub>H<sub>18</sub> · 50 atoms · cc-pVTZ · 1212 bf

  | | BH\&HLYP | | | HF | | |
  | - | - | - | - | - | - | - |
  | | s | it. | GiB | s | it. | GiB |
  | Ground state: reference, SA-REKS | | | | | | |
  | RKS \| RHF | 280 | 29 | 27.7 | 242 | 25 | 27.6 |
  | (2,2) | 159 | 12 | 27.9 | 142 | 13 | 27.8 |
  | (4,4) | 205 | 14 | 28.0 | 166 | 14 | 27.9 |
  | (6,6) | 342 | 18 | 28.0 | 271 | 25 | 27.9 |
  | (8,8) | 1256 | 41 | 28.2 | 525 | 48 | 27.9 |
  | Excited states, states computed: TDA, SSR | | | | | | |
  | TDA \| CIS 20 | 1368 | 29 | 29.7 | 1375 | 25 | 28.4 |
  | (2,2) 3 | 161 | 12 | 28.0 | 142 | 13 | 27.8 |
  | (4,4) 16 | 209 | 14 | 28.0 | 169 | 14 | 27.8 |
  | (6,6) 115 | 348 | 18 | 28.0 | 274 | 25 | 27.8 |
  | (8,8) 996 | 3590 | 97 | 28.1 | 543 | 48 | 28.0 |

* ![super-heptazethrene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/cost/mol/super-heptazethrene.svg)

  super-heptazethrene

  C<sub>40</sub>H<sub>18</sub> · 58 atoms · cc-pVTZ · 1452 bf

  | | BH\&HLYP | | | HF | | |
  | - | - | - | - | - | - | - |
  | | s | it. | GiB | s | it. | GiB |
  | Ground state: reference, SA-REKS | | | | | | |
  | RKS \| RHF | 429 | 26 | 47.7 | 442 | 29 | 47.6 |
  | (2,2) | 259 | 12 | 48.1 | 241 | 14 | 47.9 |
  | (4,4) | 334 | 14 | 48.2 | 274 | 14 | 47.9 |
  | (6,6) | 1020 | 40 | 48.3 | 904 | 58 | 47.9 |
  | (8,8) | 2328 | 50 | 48.2 | 933 | 51 | 48.1 |
  | Excited states, states computed: TDA, SSR | | | | | | |
  | TDA \| CIS 20 | 2399 | 26 | 49.8 | 2482 | 29 | 47.9 |
  | (2,2) 3 | 263 | 12 | 48.2 | 244 | 14 | 47.9 |
  | (4,4) 16 | 339 | 14 | 48.1 | 283 | 14 | 47.9 |
  | (6,6) 115 | 2140 | 81 | 48.1 | 946 | 58 | 47.9 |
  | (8,8) 996 | 2555 | 56 | 48.3 | 2296 | 103 | 48.0 |

* ![super-octazethrene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/cost/mol/super-octazethrene.svg)

  super-octazethrene

  C<sub>46</sub>H<sub>20</sub> · 66 atoms · cc-pVTZ · 1660 bf

  | | BH\&HLYP | | | HF | | |
  | - | - | - | - | - | - | - |
  | | s | it. | GiB | s | it. | GiB |
  | Ground state: reference, SA-REKS | | | | | | |
  | RKS \| RHF | 628 | 25 | 58.4 | 656 | 28 | 57.7 |
  | (2,2) | 398 | 13 | 56.9 | 378 | 15 | 58.0 |
  | (4,4) | 476 | 14 | 56.9 | 422 | 15 | 58.0 |
  | (6,6) | 836 | 21 | 57.0 | 552 | 19 | 58.1 |
  | (8,8) | 1437 | 23 | 57.1 | 1051 | 38 | 58.2 |
  | Excited states, states computed: TDA, SSR | | | | | | |
  | TDA \| CIS 20 | 3680 | 25 | 67.1 | 3843 | 28 | 65.2 |
  | (2,2) 3 | 404 | 13 | 56.9 | 382 | 15 | 58.1 |
  | (4,4) 16 | 487 | 14 | 56.9 | 430 | 15 | 58.0 |
  | (6,6) 115 | 870 | 21 | 57.0 | 582 | 19 | 58.1 |
  | (8,8) 996 | 6023 | 103 | 57.1 | 2415 | 78 | 58.2 |

* ![pentacene-dimer: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/cost/mol/pentacene-dimer.svg)

  pentacene-dimer

  C<sub>44</sub>H<sub>28</sub> · 72 atoms · cc-pVTZ · 1712 bf

  | | BH\&HLYP | | | HF | | |
  | - | - | - | - | - | - | - |
  | | s | it. | GiB | s | it. | GiB |
  | Ground state: reference, SA-REKS | | | | | | |
  | RKS \| RHF | 839 | 32 | 70.8 | 558 | 19 | 68.0 |
  | (2,2) | 403 | 10 | 66.9 | 389 | 12 | 63.9 |
  | (4,4) | 515 | 12 | 67.0 | 435 | 12 | 63.9 |
  | (6,6) | 688 | 13 | 67.3 | 497 | 13 | 63.9 |
  | (8,8) | 1226 | 15 | 68.1 | 582 | 14 | 63.9 |
  | Excited states, states computed: TDA, SSR | | | | | | |
  | TDA \| CIS 20 | 6264 | 32 | 78.0 | 4620 | 19 | 77.4 |
  | (2,2) 3 | 399 | 10 | 66.7 | 381 | 12 | 63.9 |
  | (4,4) 16 | 531 | 12 | 66.9 | 453 | 12 | 64.0 |
  | (6,6) 115 | 722 | 13 | 67.4 | 537 | 13 | 63.9 |
  | (8,8) 996 | 1354 | 15 | 68.2 | 629 | 14 | 64.1 |

* ![super-nonazethrene: drawing of the computed geometry](https://reksstudio.github.io/v2/figures/cost/mol/super-nonazethrene.svg)

  super-nonazethrene

  C<sub>52</sub>H<sub>22</sub> · 74 atoms · cc-pVTZ · 1868 bf

  | | BH\&HLYP | | | HF | | |
  | - | - | - | - | - | - | - |
  | | s | it. | GiB | s | it. | GiB |
  | Ground state: reference, SA-REKS | | | | | | |
  | RKS \| RHF | 2454 | 86 | 71.5 | 1024 | 32 | 72.2 |
  | (2,2) | 552 | 13 | 70.8 | 548 | 16 | 67.5 |
  | (4,4) | 723 | 16 | 71.0 | 662 | 18 | 67.7 |
  | (6,6) | 978 | 18 | 71.3 | 821 | 21 | 67.9 |
  | (8,8) | 3536 | 48 | 72.4 | 1346 | 36 | 68.4 |
  | Excited states, states computed: TDA, SSR | | | | | | |
  | TDA \| CIS 20 | 9015 | 87 | 79.2 | 5667 | 32 | 80.6 |
  | (2,2) 3 | 551 | 13 | 70.8 | 547 | 16 | 67.5 |
  | (4,4) 16 | 722 | 16 | 71.0 | 669 | 18 | 67.7 |
  | (6,6) 115 | 1006 | 18 | 71.3 | 833 | 21 | 67.9 |
  | (8,8) 996 | 3635 | 47 | 72.5 | 5724 | 145 | 68.7 |

### Hardware and test set

Hardware: Intel Xeon E5-2697 v3 (Haswell), one exclusive node, 28 threads

Test set: 16 molecules, 322–1868 basis functions

Guess: References from SAD; SA-REKS and SSR from the converged reference orbitals, untimed

Build: Psi4 revision not recorded in the outputs

### Mechanism

Integrals and the DFT quadrature grid are evaluated once; every configuration of the ensemble reads them. The Fock matrices of the configurations combine by weighted addition; energy and gradient of the ensemble follow from the assembled matrices.

## Configuration count

Singlet configurations generated for P electron pairs, (2P,2P): n<sub>SI</sub> = 3<sup>P</sup> P! − (P! − C<sub>P</sub>), C<sub>P</sub> the Catalan number.

### Configurations generated per active space and spin

Linearly independent configurations per spin sector S and active space, log scale: (2,2) S=0 3, S=1 1; (4,4) S=0 18, S=1 11, S=2 1; (6,6) S=0 161, S=1 153, S=2 41, S=3 1; (8,8) S=0 1 934, S=1 2 524, S=2 1 172, S=3 199, S=4 1; (10,10) S=0 29 082, S=1 48 090, S=2 31 275, S=3 9 635, S=4 1 209, S=5 1; (12,12) S=0 524 292, S=1 1 045 737, S=2 864 275, S=3 374 554, S=4 86 454, S=5 8 651, S=6 1; (14,14) S=0 11 017 869, S=1 25 684 841, S=2 25 614 281, S=3 14 112 637, S=4 4 586 673, S=5 846 797, S=6 70 573, S=7 1

* S = 0
* S = 1
* S = 2
* S = 3
* S = 4
* S = 5
* S = 6
* S = 7

### Equations, terms, determinants and catalogue size {#equations}

| REKS | 2S | Configurations | Equations | Terms | Determinants | Catalogue |
| - | - | - | - | - | - | - |
| (2,2) | 0 | 3 | 5 | 14 | 4 | 2.46 KB |
| | 2 | 1 | 1 | 1 | 1 | 1.58 KB |
| (4,4) | 0 | 18 | 167 | 1 615 | 37 | 22.6 KB |
| | 2 | 11 | 66 | 482 | 23 | 11.7 KB |
| | 4 | 1 | 1 | 7 | 7 | 1.85 KB |
| (6,6) | 0 | 161 | 12 271 | 200 903 | 435 | 1.15 MB |
| | 2 | 153 | 10 829 | 127 132 | 343 | 718 KB |
| | 4 | 41 | 861 | 15 217 | 151 | 107 KB |
| | 6 | 1 | 1 | 25 | 25 | 2.70 KB |
| (8,8) | 0 | 1 934 | 1 524 753 | 33 831 709 | 5 537 | 151 MB |
| | 2 | 2 524 | 2 231 806 | 33 848 876 | 4 987 | 130 MB |
| | 4 | 1 172 | 489 890 | 9 521 337 | 3 003 | 34.1 MB |
| | 6 | 199 | 19 900 | 607 643 | 891 | 2.13 MB |
| | 8 | 1 | 1 | 91 | 91 | 6.58 KB |
| (10,10) | 0 | 29 082 | 263 423 495 | 7 252 797 347 | 73 078 | 29.1 GB |
| | 2 | 48 090 | 522 771 815 | 9 690 808 194 | 70 026 | 30.8 GB |
| | 4 | 31 275 | 195 551 410 | 4 333 865 754 | 52 526 | 13.7 GB |
| | 6 | 9 635 | 25 109 526 | 759 955 283 | 23 526 | 2.40 GB |
| | 8 | 1 209 | 731 445 | 42 169 785 | 4 886 | 82.7 MB |
| | 10 | 1 | 1 | 336 | 336 | 26.3 KB |
| (12,12) | 0 | 524 292 | 59 351 892 458 | 1 940 383 429 553 | 986 534 | 8.22 TB<sup>†</sup> |
| | 2 | 1 045 737 | 143 099 611 285 | 3 144 757 198 668 | 970 490 | 9.71 TB<sup>†</sup> |
| | 4 | 864 275 | 73 057 039 358 | 1 859 770 442 447 | 834 746 | 6.06 TB<sup>†</sup> |
| | 6 | 374 554 | 16 693 280 767 | 543 855 811 001 | 499 496 | 1.71 TB<sup>†</sup> |
| | 8 | 86 454 | 1 579 846 605 | 98 125 447 957 | 168 456 | 298 GB<sup>†</sup> |
| | 10 | 8 651 | 37 424 226 | 5 026 090 849 | 25 446 | 6.62 GB |
| | 12 | 1 | 1 | 1 254 | 1 254 | 139 KB |
| (14,14) | 0 | 11 017 869 | 16 918 238 601 779 | 639 147 179 488 068 | 13 544 877 | 2.63 PB<sup>†</sup> |
| | 2 | 25 684 841 | 46 584 198 237 597 | 1 188 693 596 908 138 | 13 463 829 | 3.70 PB<sup>†</sup> |
| | 4 | 25 614 281 | 29 041 519 627 069 | 847 074 930 111 080 | 12 508 917 | 2.80 PB<sup>†</sup> |
| | 6 | 14 112 637 | 9 288 669 797 107 | 333 416 042 155 132 | 9 158 493 | 1.21 PB<sup>†</sup> |
| | 8 | 4 586 673 | 1 607 467 057 929 | 110 094 006 108 480 | 4 339 343 | 404 TB<sup>†</sup> |
| | 10 | 846 797 | 122 286 938 043 | 20 623 311 192 918 | 1 122 003 | 65.6 TB<sup>†</sup> |
| | 12 | 70 573 | 2 490 309 451 | 924 088 630 219 | 127 611 | 840 GB<sup>†</sup> |
| | 14 | 1 | 1 | 4 719 | 4 719 | 916 KB<sup>†</sup> |

**Equations:** nonzero Hamiltonian elements, H<sub>KK′</sub> ≠ 0, K ≤ K′. **Terms:** symbolic terms of those elements after collection. **Determinants:** microstates of the sector's elements. **Catalogue:** size of the file of one spin sector, from generator runs; † estimated value.

## Catalogue

### Determinant contraction

| Active space | Configurations | Threads | Wall time | Peak memory |
| - | - | - | - | - |
| (2,2) | 3 | 1 | 0.098 s | 34 MB |
| (4,4) | 18 | 1 | 0.096 s | 34 MB |
| (6,6) | 161 | 1 | 0.272 s | 65 MB |
| (8,8) | 1 934 | 1 | 27.66 s | 284 MB |
| (10,10) | 29 082 | 28 | 469.4 s | 3.30 GB |
| (12,12) | 524 292 | 28 | 40.47 h | 83.0 GB |

Symbolic Slater–Condon–Fock contraction, singlet sector. Up to (4,4) the time is engine start-up. **Provenance:** paper v1, SI Table 3.

### Catalogue generation

| Active space | Configurations | Catalogue size | Threads | Wall time | Peak memory |
| - | - | - | - | - | - |
| (2,2) | 4 | 2.76 KB | 8 | 0.08 s | 56.6 MB |
| (4,4) | 30 | 32.4 KB | 8 | 0.09 s | 74.3 MB |
| (6,6) | 356 | 1.91 MB | 8 | 0.28 s | 240 MB |
| (8,8) | 5 830 | 315 MB | 8 | 15.5 s | 3.85 GB |
| (10,10) | 119 292 | 74.5 GB | 96 | 39.6 min | 157 GB |

One file with every spin sector; the time covers the whole run, contraction included.

## Largest run

TNS (12,12), def2-TZVP · BH\&HLYP · SCF 2 h 12 min, SI 2S = 0 48 min on PC-1 × 96; SI 2S = 2 3 h 9 min, SI 2S = 4 2 h 53 min, SI 2S = 6–12 2 h 2 min on PC-2 × 36: [Results, large molecules, run sheet](https://reksstudio.github.io/v2/main/results/large-molecules/index.md#time).

## One dynamics step

One gradient() call at 90° C<sub>2</sub>H<sub>4</sub> from RKS orbitals: SSR(2,2)/6-31G(d), BH\&HLYP, DF, 4 threads, faster of two repeats.

| Call | Wall / s |
| - | - |
| one-state gradient | 1.11 |
| two gradients | 1.21 |
| three gradients | 1.26 |
| gradient + 3 NACs | 1.70 |

**Provenance:** site run, Psi4 e95c2d234.

## Get it

Free and open source.

[Install, free](https://reksstudio.github.io/v2/docs/index.md#install) From the install: up to [(6,6)](#catalogue).

## Linked files

[inputs/cost/reks_sa66.py](https://reksstudio.github.io/v2/inputs/cost/reks_sa66.py.txt)

[inputs/cost/reks_si66.py](https://reksstudio.github.io/v2/inputs/cost/reks_si66.py.txt)

[inputs/cost/orca_sftda.inp](https://reksstudio.github.io/v2/inputs/cost/orca_sftda.inp.txt)

[inputs/cost/qchem_sftda.in](https://reksstudio.github.io/v2/inputs/cost/qchem_sftda.in.txt)
