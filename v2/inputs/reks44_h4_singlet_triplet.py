"""SI-SA-REKS(4,4) of linear H4 (R = 1.6 A), BH&HLYP/6-31G: default SA pool + all-alpha determinant,
one full SI cassette per manifold (2S = 0, 2)."""
import psi4

psi4.set_output_file("reks44_h4_singlet_triplet.out", False)
psi4.set_memory("1 GB")

psi4.geometry("""
0 1
H 0.0 0.0 0.0
H 0.0 0.0 1.6
H 0.0 0.0 3.2
H 0.0 0.0 4.8
symmetry c1
""")

psi4.set_options({
    "basis": "6-31g",
    "reference": "reks",
    "reks": [4, 4],
    "reks_use_trah": True,
    "e_convergence": 1e-8,
    "d_convergence": 1e-6,
    "sa_reks_extra": [[1, 1, 1, 1, 0, 0, 0, 0]],
    "si_reks_configs": [[["full"]], [["full"]]],
})

e_sa, wfn = psi4.energy("bhhlyp", return_wfn=True)
print(f"E(SA) = {e_sa:.10f}")
print("S states:", wfn.array_variable("SSR ENERGIES K=0").np.ravel()[:3])
print("T states:", wfn.array_variable("REKS SECTOR 1 SSR ENERGIES K=1").np.ravel()[:3])
print("J [Eh]  :", wfn.array_variable("REKS HEISENBERG J").np.ravel())
