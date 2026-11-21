"""SSR(2,2) of 90-degree twisted ethylene, BH&HLYP/cc-pVTZ, read from the 6-31G(d) REKS orbitals.
python first_c2h4_90.py rks; python first_c2h4_90.py reks   -> first_c2h4_90_reks.wfn.npy
python first_c2h4_90_basis.py                              -> REKS(2,2) in cc-pVTZ, projected from 6-31G(d)"""
import psi4

psi4.set_output_file("first_c2h4_90_basis.out", False)
psi4.set_memory("2 GB")

psi4.geometry("""
0 1
C   0.000000   0.000000   0.665000
C   0.000000   0.000000  -0.665000
H   0.000000   0.920840   1.231300
H   0.000000  -0.920840   1.231300
H   0.920840   0.000000  -1.231300
H  -0.920840   0.000000  -1.231300
symmetry c1
""")
psi4.set_options({"basis": "cc-pvtz", "scf_type": "pk"})

psi4.set_options({"reference": "reks", "reks": [2, 2]})
e_sa, wfn = psi4.energy("bhhlyp", return_wfn=True, restart_file="first_c2h4_90_reks.wfn.npy")
print(f"E(SA) = {e_sa:.10f}")
