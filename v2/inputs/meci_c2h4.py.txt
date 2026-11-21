"""S0/S1 minimum-energy conical intersection of C2H4, SSR(2,2) BH&HLYP/6-31G(d), with DL-FIND.
python meci_c2h4.py  ->  meci_c2h4.xyz, meci_c2h4_reks.wfn.npy, meci_c2h4.out
Seed: first_c2h4_90_reks.wfn.npy of first_c2h4_90.py (90-degree twist) in this directory."""
import psi4
from reks_meci import meci

psi4.set_output_file("meci_c2h4.out", False)
psi4.set_memory("2 GB")
psi4.set_num_threads(4)

# start: 90-degree twist, the two H of the second C shifted 0.35 A (pyramidalized)
mol = psi4.geometry("""
0 1
C    0.310000    0.170000    0.765000
C    0.310000    0.170000   -0.565000
H    0.310000    1.090840    1.331300
H    0.310000   -0.750840    1.331300
H    1.230840    0.520000   -1.131300
H   -0.610840    0.520000   -1.131300
symmetry c1
no_com
no_reorient
""")

psi4.set_options({"basis": "6-31g(d)", "scf_type": "pk", "maxiter": 300, "reference": "reks", "reks": [2, 2]})
(e0, e1), wfn = meci("bhhlyp", mol, restart_file="first_c2h4_90_reks.wfn.npy", states=(0, 1))

print(f"E(S0) = {e0:.10f}  E(S1) = {e1:.10f}  gap = {e1 - e0:.3e}")
mol.save_xyz_file("meci_c2h4.xyz", True)
wfn.to_file("meci_c2h4_reks.wfn")
