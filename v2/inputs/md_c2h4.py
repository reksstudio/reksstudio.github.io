"""Surface hopping of C2H4 on S1 from opt_c2h4.py, SSR(2,2) BH&HLYP/6-31G(d), DF, PyUNIxMD.
export PYTHONPATH=/path/to/unixmd/src:/path/to/unixmd:$PYTHONPATH
python md_c2h4.py  ->  md/MDENERGY, md/SHSTATE, md/MOVIE.xyz, md_c2h4.out"""
import psi4
import mqc
from reks_unixmd import REKS, molecule

psi4.set_output_file("md_c2h4.out", False)
psi4.set_memory("2 GB")
psi4.set_num_threads(4)
psi4.set_options({"basis": "6-31g(d)", "scf_type": "df",
                  "reference": "reks", "reks": [2, 2], "fail_on_maxiter": False})

mol = molecule("opt_c2h4.xyz", nstates=3, temperature=300)
qm = REKS(mol, "bhhlyp", restart_file="opt_c2h4_reks.wfn.npy")

md = mqc.SH(molecule=mol, istate=1, dt=0.5, nsteps=200, unit_dt="fs")
md.run(qm=qm)
