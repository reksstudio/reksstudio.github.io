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

### One Fock build

Per Fock build, SA-REKS over the reference, median over the six largest molecules: BH\&HLYP 1.57–5.59, HF 1.30–2.29.

| Functional | (2,2) | (4,4) | (6,6) | (8,8) |
| - | - | - | - | - |
| HF | 1.30 | 1.65 | 1.95 | 2.29 |
| BH\&HLYP | 1.57 | 2.06 | 2.96 | 5.59 |

| SCF iterations, median | Reference | (2,2) | (4,4) | (6,6) | (8,8) |
| - | - | - | - | - | - |
| HF | 17 | 15 | 17.5 | 32 | 40 |
| BH\&HLYP | 20.5 | 12.5 | 17.5 | 25 | 40.5 |

SA-REKS(8,8) from RKS orbitals: median 40.5 SCF iterations; RKS from SAD: 20.5.

The per-build ratio stays far below the whole-SCF ratio; the whole-SCF ratio follows the iteration counts.

Fitted exponent of the Fock-build time in the number of basis functions (log–log, all 16): HF reference 3.44, (2,2) 3.09, (4,4) 2.97, (6,6) 2.87, (8,8) 2.80; BH\&HLYP reference 2.99, (2,2) 2.68, (4,4) 2.52, (6,6) 2.22, (8,8) 1.97. The drop reflects the cache, not an improvement in scaling.

### Ground state: whole SCF

Whole SCF, SA-REKS / RKS, median: 0.86 at (2,2) to 10.47 at (8,8) with BH\&HLYP; 0.80 to 2.25 with HF (SA-REKS / RHF).

| Functional | (2,2) | (4,4) | (6,6) | (8,8) |
| - | - | - | - | - |
| BH\&HLYP, SA-REKS / RKS | 0.86 | 1.53 | 3.33 | 10.47 |
| HF, SA-REKS / RHF | 0.80 | 1.03 | 2.14 | 2.25 |
| Iterations, BH\&HLYP (reference 20.5) | 12.5 | 17.5 | 25 | 40.5 |

### Excited states

Complete SSR over the complete 20-state TDA calculation, median; (8,8)/BH\&HLYP lies above parity on 14 of 16 molecules.

| Functional | (2,2) | (4,4) | (6,6) | (8,8) |
| - | - | - | - | - |
| HF, SSR / CIS | 0.13 | 0.18 | 0.38 | 0.81 |
| BH\&HLYP, SSR / TDDFT-TDA | 0.14 | 0.24 | 0.57 | 2.65 |

SI step alone over the TDA response (TDA wall minus its SCF), median, (2,2), (4,4), (6,6), (8,8): HF 1/1105, 1/205, 1/70, 1/36; BH\&HLYP 1/1194, 1/190, 1/68, 1/13.

![SSR against TDA: step and complete-calculation time ratios and peak memory against the number of basis functions](https://reksstudio.github.io/v2/figures/main/cost_excited.webp)

SSR against the TDA reference (CIS for HF, TDDFT-TDA for BH\&HLYP), and peak memory, against the number of basis functions. Source: paper v1, SI Fig. 7.

### Memory

Peak memory, SA-REKS over the reference, six largest molecules, median over spaces and functionals: SCF 1.01× (0.93–1.02), per space 1.00–1.01; SSR over TDA 0.93× (0.83–1.01).

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

### Equations, determinants and SCF configurations {#equations}

| REKS | 2S | Configurations | Equations | Determinants | in SCF |
| - | - | - | - | - | - |
| (2,2) | 0 | 3 | 5 | 4 | 4 |
| | 2 | 1 | 1 | 1 | 1 |
| (4,4) | 0 | 18 | 167 | 37 | 18 |
| | 2 | 11 | 66 | 23 | 10 |
| | 4 | 1 | 1 | 7 | 7 |
| (6,6) | 0 | 161 | 12 271 | 435 | 68 |
| | 2 | 153 | 10 829 | 343 | 48 |
| | 4 | 41 | 861 | 151 | 67 |
| | 6 | 1 | 1 | 25 | 25 |
| (8,8) | 0 | 1 934 | 1 524 753 | 5 537 | 224 |
| | 2 | 2 524 | 2 231 806 | 4 987 | 176 |
| | 4 | 1 172 | 489 890 | 3 003 | 368 |
| | 6 | 199 | 19 900 | 891 | 288 |
| | 8 | 1 | 1 | 91 | 91 |
| (10,10) | 0 | 29 082 | 263 423 495 | 73 078 | 672 |
| | 2 | 48 090 | 522 771 815 | 70 026 | 560 |
| | 4 | 31 275 | 195 551 410 | 52 526 | 1 560 |
| | 6 | 9 635 | 25 109 526 | 23 526 | 1 880 |
| | 8 | 1 209 | 731 445 | 4 886 | 1 246 |
| | 10 | 1 | 1 | 336 | 336 |
| (12,12) | 0 | 524 292 | 59 351 892 458 | 986 534 | 1 888 |
| | 2 | 1 045 737 | 143 099 611 285 | 970 490 | 1 632 |
| | 4 | 864 275 | 73 057 039 358 | 834 746 | 5 680 |
| | 6 | 374 554 | 16 693 280 767 | 499 496 | 9 280 |
| | 8 | 86 454 | 1 579 846 605 | 168 456 | 9 492 |
| | 10 | 8 651 | 37 424 226 | 25 446 | 5 276 |
| | 12 | 1 | 1 | 1 254 | 1 254 |
| (14,14) | 0 | 11 017 869 | 16 918 238 601 779 | 13 544 877 | 5 056 |
| | 2 | 25 684 841 | 46 584 198 237 597 | 13 463 829 | 4 480 |
| | 4 | 25 614 281 | 29 041 519 627 069 | 12 508 917 | 18 704 |
| | 6 | 14 112 637 | 9 288 669 797 107 | 9 158 493 | 38 640 |
| | 8 | 4 586 673 | 1 607 467 057 929 | 4 339 343 | 53 704 |
| | 10 | 846 797 | 122 286 938 043 | 1 122 003 | 45 640 |
| | 12 | 70 573 | 2 490 309 451 | 127 611 | 22 275 |
| | 14 | 1 | 1 | 4 719 | 4 719 |

## Catalogue

| Active space | Configurations | Catalogue size | Emission time, peak memory |
| - | - | - | - |
| (2,2) | 3 | 1.7 KB | 0.033 s, 40 MB |
| (4,4) | 18 | 27.5 KB | 0.040 s, 42 MB |
| (6,6) | 161 | 1.99 MB | 0.458 s, 80 MB |
| (8,8), mixed-scheme | 355 | 11.9 MB | 2.20 s, 177 MB |
| (8,8), full | 1934 | 284 MB | 62.4 s, 804 MB |

Symbolic contraction of the full (12,12) ensemble: 40.47 h, 83.0 GB.

**Provenance:** paper v1, SI Tables 3 and 6.

## Largest run

The (10,10) run on TTR: [Results, TTR, run size](https://reksstudio.github.io/v2/main/results/ttr/index.md#run).

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
