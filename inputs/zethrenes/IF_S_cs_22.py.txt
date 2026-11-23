import os

import psi4

psi4.set_num_threads(int(os.environ.get("OMP_NUM_THREADS", "8")))
psi4.set_memory(os.environ.get("PSI4_MEMORY", "10 GB"))
psi4.core.set_output_file("IF_S_cs_ref_reks22.out", False)
psi4.geometry("""
0 1
C      0.96491900     1.01658300     0.00061800
C      1.35258100    -0.40287400     0.00005800
C      0.42954300    -1.38571800    -0.00053700
C     -0.96491900    -1.01658300    -0.00061800
C     -1.35258100     0.40287400    -0.00005800
C     -0.42954300     1.38571800     0.00053700
C      2.08920100     1.78132000     0.00115300
C      3.26265300     0.91297200     0.00097500
C      2.82029600    -0.43037500     0.00030300
C     -2.08920100    -1.78132000    -0.00115300
C     -3.26265300    -0.91297200    -0.00097500
C     -2.82029600     0.43037500    -0.00030300
C      4.61938000     1.20579100     0.00134200
C      5.53243400     0.15205200     0.00103600
C      5.09503600    -1.17027400     0.00037500
C      3.73183500    -1.47119900     0.00000300
C     -4.61938000    -1.20579100    -0.00134200
C     -5.53243400    -0.15205200    -0.00103600
C     -5.09503600     1.17027400    -0.00037500
C     -3.73183500     1.47119900    -0.00000300
H      0.70764600    -2.43636700    -0.00095200
H     -0.70764600     2.43636700     0.00095200
H      2.12452300     2.86494300     0.00163800
H     -2.12452300    -2.86494300    -0.00163800
H      4.96633600     2.23499200     0.00185800
H      6.59704800     0.36454400     0.00131700
H      5.82205500    -1.97636900     0.00014600
H      3.40019300    -2.50565100    -0.00051200
H     -4.96633600    -2.23499200    -0.00185800
H     -6.59704800    -0.36454400    -0.00131700
H     -5.82205500     1.97636900    -0.00014600
H     -3.40019300     2.50565100     0.00051200
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
 'reks': [2, 2],
 'sa_reks_configs': [['PPS1', 'OSS1'], []],
 'sa_reks_extra': [[1, 1, 0, 0]],
 'sa_reks_weights': [0.3333333333333333, 0.3333333333333333, 0.3333333333333333],
 'sa_reks_2spin': [0, 2],
 'si_reks_configs': [[['full']], [['full']]],
 'si_reks_2spin': [0, 2],
 'si_reks_store_states': [3, 1],
 'si_reks_print_states': 20})
E, wfn = psi4.energy("bhhlyp", restart_file="IF_S_cs_ref_reks22.npy", return_wfn=True)
wfn.to_file("IF_S_cs_ref_reks22.wfn")
