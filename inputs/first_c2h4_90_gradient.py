"""SSR(2,2) of 90-degree twisted ethylene, BH&HLYP/6-31G(d): S1 gradient and S0/S1 coupling, seeded from RKS orbitals.
python first_c2h4_90_gradient.py rks   -> RKS orbitals: first_c2h4_90_gradient_rks.wfn.npy
python first_c2h4_90_gradient.py reks  -> REKS(2,2) from them: gradient of S1, NAC of S0/S1"""
import sys

import psi4

stage = sys.argv[1]
psi4.set_output_file(f"first_c2h4_90_gradient_{stage}.out", False)
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
psi4.set_options({"basis": "6-31g(d)", "scf_type": "pk"})

if stage == "rks":
    psi4.set_options({"molden_write": True})
    e, wfn = psi4.energy("bhhlyp", return_wfn=True)
    wfn.to_file("first_c2h4_90_gradient_rks.wfn")
    print(f"E(RKS) = {e:.10f}")
else:
    psi4.set_options({"reference": "reks", "reks": [2, 2],
                      "si_reks_grad": [[1]],          # gradient of S1
                      "si_reks_nac": [[[0, 1]]]})     # coupling of S0 and S1
    g, wfn = psi4.gradient("bhhlyp", return_wfn=True, restart_file="first_c2h4_90_gradient_rks.wfn.npy")
    print("S1 gradient:\n", g.np)
    print("NAC S0/S1:\n", wfn.array_variable("SSR NAC 0 1 CASSETTE 0").np)
