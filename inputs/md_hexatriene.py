"""Surface hopping of all-trans-hexatriene on T1 from opt_hexatriene.py, SI-SA-REKS(6,6) BH&HLYP/6-31G(d), DF,
three triplet states, PyUNIxMD.
export PYTHONPATH=/path/to/unixmd/src:/path/to/unixmd:$PYTHONPATH
python md_hexatriene.py  ->  md/MDENERGY, md/SHSTATE, md/MOVIE.xyz, md_hexatriene.out"""
import psi4
import mqc
from reks_unixmd import REKS, molecule

psi4.set_output_file("md_hexatriene.out", False)
psi4.set_memory("8 GB")
psi4.set_num_threads(8)
psi4.set_options({"basis": "6-31g(d)", "scf_type": "df",
                  "reference": "reks", "reks": [6, 6],
                  "sa_reks_extra": [[1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]],
                  "si_reks_2spin": [2],
                  "d_convergence": 1e-6, "reks_cpreks_conv": 1e-8,
                  "fail_on_maxiter": False})

mol = molecule("opt_hexatriene.xyz", nstates=3, temperature=300)
qm = REKS(mol, "bhhlyp", restart_file="opt_hexatriene_reks.wfn.npy")

md = mqc.SH(molecule=mol, istate=0, dt=0.5, nsteps=50, unit_dt="fs")
md.run(qm=qm)
