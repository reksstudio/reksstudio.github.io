import os

import psi4

psi4.set_num_threads(int(os.environ.get("OMP_NUM_THREADS", "8")))
psi4.set_memory(os.environ.get("PSI4_MEMORY", "10 GB"))
psi4.core.set_output_file("IF_T_ref_reks88.out", False)
psi4.geometry("""
0 1
C      0.95063300     1.00830300     0.00061200
C      1.34103500    -0.35661800     0.00007700
C      0.39478000    -1.37334500    -0.00053800
C     -0.95063300    -1.00830300    -0.00061200
C     -1.34103500     0.35661800    -0.00007700
C     -0.39478000     1.37334500     0.00053800
C      2.15150800     1.82218200     0.00118200
C      3.27501600     0.95675000     0.00099600
C      2.80830200    -0.39325000     0.00031800
C     -2.15150800    -1.82218200    -0.00118200
C     -3.27501600    -0.95675000    -0.00099600
C     -2.80830200     0.39325000    -0.00031800
C      4.65162300     1.22144900     0.00135500
C      5.54133600     0.15593700     0.00104000
C      5.07637300    -1.16240900     0.00037500
C      3.70589300    -1.44291500     0.00001100
C     -4.65162300    -1.22144900    -0.00135500
C     -5.54133600    -0.15593700    -0.00104000
C     -5.07637300     1.16240900    -0.00037500
C     -3.70589300     1.44291500    -0.00001100
H      0.68899900    -2.41918800    -0.00094800
H     -0.68899900     2.41918800     0.00094800
H      2.17796300     2.90502500     0.00166500
H     -2.17796300    -2.90502500    -0.00166500
H      5.01488300     2.24492900     0.00187100
H      6.60999100     0.34606900     0.00131100
H      5.78924700    -1.98105500     0.00013800
H      3.36161900    -2.47317000    -0.00050500
H     -5.01488300    -2.24492900    -0.00187100
H     -6.60999100    -0.34606900    -0.00131100
H     -5.78924700     1.98105500    -0.00013800
H     -3.36161900     2.47317000     0.00050500
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
 'reks': [8, 8],
 'sa_reks_configs': [['PPS1', 'OSS1', 'OSS2', 'OSS3', 'OSS4'], [], [], [], []],
 'sa_reks_extra': [[1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]],
 'sa_reks_weights': [0.16666666666666666,
                     0.16666666666666666,
                     0.16666666666666666,
                     0.16666666666666666,
                     0.16666666666666666,
                     0.16666666666666666],
 'sa_reks_2spin': [0, 2, 4, 6, 8],
 'si_reks_configs': [[['full']], [['full']], [['full']], [['full']], [['full']]],
 'si_reks_2spin': [0, 2, 4, 6, 8],
 'si_reks_store_states': [20, 20, 20, 20, 1],
 'si_reks_print_states': 20})
E, wfn = psi4.energy("bhhlyp", restart_file="IF_T_ref_reks88.npy", return_wfn=True)
wfn.to_file("IF_T_ref_reks88.wfn")
