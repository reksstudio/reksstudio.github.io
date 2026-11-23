"""SI-SA-REKS(6,6) of all-trans-hexatriene, BH&HLYP/6-31G(d), pi window from RKS orbitals; singlet, triplet,
quintet and septet states from one SCF.
python first_hexatriene.py rks   -> RKS orbitals: first_hexatriene_rks.wfn.npy + Molden file to inspect
python first_hexatriene.py reks  -> REKS(6,6) with pairs (pi1, pi6) (pi2, pi5) (pi3, pi4); LUMO+2 is sigma*"""
import sys
import psi4

stage = sys.argv[1]
psi4.set_output_file(f"first_hexatriene_{stage}.out", False)
psi4.set_memory("4 GB")

psi4.geometry("""
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
""")
psi4.set_options({"basis": "6-31g(d)", "scf_type": "pk"})

if stage == "rks":
    psi4.set_options({"molden_write": True})
    e, wfn = psi4.energy("bhhlyp", return_wfn=True)
    wfn.to_file("first_hexatriene_rks.wfn")
    print(f"E(RKS) = {e:.10f}")
else:
    psi4.set_options({
        "reference": "reks",
        "reks": [6, 6],
        "guess_active_window": ["HOMO-2", "HOMO-1", "HOMO", "LUMO", "LUMO+1", "LUMO+3"],
        "sa_reks_extra": [[1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0]],     # all-alpha determinant in SA
        "si_reks_configs": [[["full"]], [["full"]], [["full"]], [["full"]]],
        "si_reks_2spin": [0, 2, 4, 6],
    })
    e_sa, wfn = psi4.energy("bhhlyp", return_wfn=True, restart_file="first_hexatriene_rks.wfn.npy")
    print(f"E(SA) = {e_sa:.10f}")
