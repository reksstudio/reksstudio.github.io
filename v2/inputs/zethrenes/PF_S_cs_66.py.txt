import os

import psi4

psi4.set_num_threads(int(os.environ.get("OMP_NUM_THREADS", "8")))
psi4.set_memory(os.environ.get("PSI4_MEMORY", "10 GB"))
psi4.core.set_output_file("PF_S_cs_ref_reks66.out", False)
psi4.geometry("""
0 1
C      0.22615700    -0.86007400     0.00000000
C      0.54761900     0.57351100     0.00000000
C     -0.46947800     1.47799000     0.00000000
C     -1.83850500     1.06092100     0.00000000
C     -2.15096800    -0.37121400     0.00000000
C     -1.16237700    -1.28118800     0.00000000
H     -0.26781400     2.54369900     0.00000000
H     -1.36630400    -2.34910900     0.00000000
C     -3.00325500     1.76934700     0.00000000
C     -4.12290500     0.83758300     0.00000000
C     -5.49705500     1.05050300     0.00000000
C     -6.34781400    -0.05214000     0.00000000
C     -5.84006300    -1.35083700     0.00000000
C     -4.46357500    -1.57367700     0.00000000
C     -3.61125400    -0.48251000     0.00000000
H     -5.90263400     2.05806300     0.00000000
H     -7.42278900     0.10125600     0.00000000
H     -6.52216500    -2.19520500     0.00000000
H     -4.07309300    -2.58760100     0.00000000
C      1.97433400     0.95690900     0.00000000
C      1.21567600    -1.78766400     0.00000000
C      2.97483200    -0.06001700     0.00000000
C      2.61257700    -1.44082100     0.00000000
C      2.39175700     2.27726500     0.00000000
C      4.35173100     0.28744800     0.00000000
C      3.59599600    -2.41239800     0.00000000
H      1.66194300     3.07837500     0.00000000
C      3.75203100     2.62311100     0.00000000
C      4.71933700     1.65169900     0.00000000
C      5.32701800    -0.74332700     0.00000000
C      4.95719000    -2.06290300     0.00000000
H      4.03113700     3.67208800     0.00000000
H      5.77295600     1.91497800     0.00000000
H      6.37684800    -0.46473700     0.00000000
H      5.71193900    -2.84278100     0.00000000
H      3.30696600    -3.45952100     0.00000000
H      0.95657600    -2.84362800     0.00000000
H     -3.09759900     2.84901600     0.00000000
units angstrom
symmetry c1
no_reorient
no_com
""")
psi4.set_options({'basis': 'cc-pvtz',
 'scf_type': 'mem_df',
 'scf_subtype': 'auto',
 'df_scf_guess': False,
 'maxiter': 150,
 'e_convergence': 7,
 'd_convergence': 5,
 'level_shift': 0.5,
 'level_shift_cutoff': 0.0,
 'level_shift_adapt': True,
 'dft_grid_name': 'SG1',
 'guess': 'read',
 'diis': False,
 'soscf': False,
 'reks_gvb_diis': True,
 'reks_diis_formulation': 'ORBITAL',
 'reks_use_trah': False,
 'fail_on_maxiter': False,
 'molden_write': True,
 'reference': 'reks',
 'reks_report_level': 3,
 'reks': [6, 6],
 'sa_reks_configs': [['PPS1', 'OSS1', 'OSS2', 'OSS3'], [], [], []],
 'sa_reks_extra': [[1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]],
 'sa_reks_weights': [0.2, 0.2, 0.2, 0.2, 0.2],
 'sa_reks_2spin': [0, 2, 4, 6],
 'si_reks_configs': [[['full']], [['full']], [['full']], [['full']]],
 'si_reks_2spin': [0, 2, 4, 6],
 'si_reks_store_states': [20, 20, 20, 1],
 'si_reks_print_states': 20})
E, wfn = psi4.energy("bhhlyp", restart_file="PF_S_cs_ref_reks66.npy", return_wfn=True)
wfn.to_file("PF_S_cs_ref_reks66.wfn")
