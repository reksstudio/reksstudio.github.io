"""BH states from SI-SA-REKS(2,3) over the lone pair and both pi orbitals, BH&HLYP/cc-pVDZ, RKS seed.
python wide_bh_states.py rks      -> RKS seed wide_bh_rks.wfn.npy
python wide_bh_states.py sa23     -> SA: default pool + all-alpha |ab|, |ac|, |bc|; SI on 2S = 0 and 2S = 2
python wide_bh_states.py sa23_ab  -> the same with |ab| only"""
import sys
import psi4

stage = sys.argv[1]
psi4.set_output_file(f"wide_bh_states_{stage}.out", False)
psi4.set_memory("2 GB")

psi4.geometry("""
0 1
B   0.0   0.0   0.0
H   0.0   0.0   1.2324
symmetry c1
""")
psi4.set_options({"basis": "cc-pvdz", "scf_type": "pk", "e_convergence": 1e-10, "d_convergence": 1e-8})

if stage == "rks":
    e, wfn = psi4.energy("bhhlyp", return_wfn=True)
    wfn.to_file("wide_bh_rks.wfn")
    print(f"E(RKS) = {e:.10f}")
    sys.exit()

# all-alpha determinants: alpha occupations of a, b, c, then beta occupations
extra = [[1, 1, 0, 0, 0, 0], [1, 0, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0]]
psi4.set_options({"reference": "reks", "reks": [2, 3], "reks_geminal_widths": [3],
                  "sa_reks_extra": extra if stage == "sa23" else extra[:1],
                  "si_reks_configs": [[["full"]], [["full"]]], "si_reks_2spin": [0, 2],
                  "reks_use_trah": True, "reks_gvb_diis": False, "maxiter": 200})
e_sa, wfn = psi4.energy("bhhlyp", return_wfn=True, restart_file="wide_bh_rks.wfn.npy")
print(f"E(SA) = {e_sa:.10f}")
