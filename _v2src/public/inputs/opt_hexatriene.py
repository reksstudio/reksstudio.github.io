"""T1 of all-trans-hexatriene, SI-SA-REKS(6,6) BH&HLYP/6-31G(d), DF, optimized with DL-FIND.
python opt_hexatriene.py  ->  opt_hexatriene.xyz, opt_hexatriene_reks.wfn.npy, opt_hexatriene.out"""
import psi4
from reks_dlfind import optimize

psi4.set_output_file("opt_hexatriene.out", False)
psi4.set_memory("8 GB")
psi4.set_num_threads(8)

mol = psi4.geometry("""
0 1
C  0.60339339  0.29949761 0.0
C -0.60339339 -0.29949761 0.0
C  1.86027300 -0.41756279 0.0
C -1.86027300  0.41756279 0.0
C  3.06217998  0.17861930 0.0
C -3.06217998 -0.17861930 0.0
H  0.65325904  1.38424312 0.0
H -0.65325904 -1.38424312 0.0
H  1.80329639 -1.50000213 0.0
H -1.80329639  1.50000213 0.0
H  3.14885369  1.25746431 0.0
H -3.14885369 -1.25746431 0.0
H  3.97661154 -0.39587705 0.0
H -3.97661154  0.39587705 0.0
symmetry c1
no_com
no_reorient
""")

# seed orbitals: RKS with the same functional and basis
psi4.set_options({"basis": "6-31g(d)", "scf_type": "df"})
e, wfn = psi4.energy("bhhlyp", return_wfn=True)
wfn.to_file("opt_hexatriene_rks.wfn")

# REKS(6,6) at the start geometry: pi window from the RKS orbitals (LUMO+2 is sigma*), triplet SI cassette
psi4.set_options({"reference": "reks", "reks": [6, 6],
                  "guess_active_window": ["HOMO-2", "HOMO-1", "HOMO", "LUMO", "LUMO+1", "LUMO+3"],
                  "sa_reks_extra": [[1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]],
                  "si_reks_2spin": [2]})
e, wfn = psi4.energy("bhhlyp", return_wfn=True, restart_file="opt_hexatriene_rks.wfn.npy")
wfn.to_file("opt_hexatriene_start.wfn")

# optimize T1: later points read the REKS orbitals of the previous point, the window is off
psi4.set_options({"guess_active_window": [], "si_reks_grad": [[0]]})
e, wfn = optimize("bhhlyp", mol, restart_file="opt_hexatriene_start.wfn.npy")

print(f"E(T1) = {e:.10f}")
mol.save_xyz_file("opt_hexatriene.xyz", True)
wfn.to_file("opt_hexatriene_reks.wfn")
