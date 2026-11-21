"""SSR(2,2) of 90-degree twisted ethylene, BH&HLYP/6-31G(d): state properties, relaxed properties and EKT.
python first_c2h4_90_properties.py rks   -> RKS orbitals: first_c2h4_90_properties_rks.wfn.npy
python first_c2h4_90_properties.py reks  -> REKS(2,2) from them with the property blocks below"""
import sys

import psi4

stage = sys.argv[1]
psi4.set_output_file(f"first_c2h4_90_properties_{stage}.out", False)
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
    wfn.to_file("first_c2h4_90_properties_rks.wfn")
    print(f"E(RKS) = {e:.10f}")
else:
    psi4.set_options({"reference": "reks", "reks": [2, 2],
                      # + TRANSITION_DIPOLE, NO_OCCUPATIONS (always on)
                      "si_reks_analysis": ["DIPOLE", "RADICAL", "NTO", "MULTIPOLE(3)"],
                      # relaxed properties and EKT of S0, S1
                      "si_reks_property_for": [["S0..1"]],
                      "reks_ekt": True,
                      "molden_write": True})
    e_sa, wfn = psi4.energy("bhhlyp", return_wfn=True, restart_file="first_c2h4_90_properties_rks.wfn.npy")
    print(f"E(SA) = {e_sa:.10f}")
