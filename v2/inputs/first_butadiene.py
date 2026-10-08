"""SI-SA-REKS(4,4) of s-trans-butadiene, BH&HLYP/6-31G(d), pi window from RKS orbitals.
python first_butadiene.py rks   -> RKS orbitals: first_butadiene_rks.wfn.npy + Molden file to inspect
python first_butadiene.py reks  -> REKS(4,4) with pairs (pi1, pi4) and (pi2, pi3)"""
import sys
import psi4

stage = sys.argv[1]
psi4.set_output_file(f"first_butadiene_{stage}.out", False)
psi4.set_memory("2 GB")

psi4.geometry("""
0 1
C
C 1 1.34
C 2 1.46 1 124.0
C 3 1.34 2 124.0 1 180.0
H 1 1.08 2 121.0 3 0.0
H 1 1.08 2 121.0 3 180.0
H 2 1.09 1 119.0 3 180.0
H 3 1.09 4 119.0 2 180.0
H 4 1.08 3 121.0 2 0.0
H 4 1.08 3 121.0 2 180.0
symmetry c1
""")
psi4.set_options({"basis": "6-31g(d)", "scf_type": "pk"})

if stage == "rks":
    psi4.set_options({"molden_write": True})
    e, wfn = psi4.energy("bhhlyp", return_wfn=True)
    wfn.to_file("first_butadiene_rks.wfn")
    print(f"E(RKS) = {e:.10f}")
else:
    psi4.set_options({
        "reference": "reks",
        "reks": [4, 4],
        "guess_active_window": ["HOMO-1", "HOMO", "LUMO", "LUMO+1"],
    })
    e_sa, wfn = psi4.energy("bhhlyp", return_wfn=True, restart_file="first_butadiene_rks.wfn.npy")
    print(f"E(SA) = {e_sa:.10f}")
    print("SSR states:", wfn.array_variable("SSR ENERGIES K=0").np.ravel()[:3])
