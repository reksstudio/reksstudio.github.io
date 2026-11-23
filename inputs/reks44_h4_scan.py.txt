"""REKS(4,4) scan of linear H4, BH&HLYP/6-31G: the first point reads an RKS seed at its geometry, each further point
the REKS orbitals of the previous one."""
import psi4

psi4.set_output_file("reks44_h4_scan.out", False)
psi4.set_memory("1 GB")


def h4(r):
    return psi4.geometry(f"H 0 0 0\nH 0 0 {r}\nH 0 0 {2 * r}\nH 0 0 {3 * r}\nsymmetry c1")


psi4.set_options({"basis": "6-31g", "scf_type": "pk"})
h4(1.4)
e, wfn = psi4.energy("bhhlyp", return_wfn=True)                     # RKS seed of the first point
wfn.to_file("h4_rks.wfn")
psi4.core.clean()

psi4.set_options({"reference": "reks", "reks": [4, 4]})
restart = {"restart_file": "h4_rks.wfn.npy"}
for r in (1.4, 1.5, 1.6):
    h4(r)
    e, wfn = psi4.energy("bhhlyp", return_wfn=True, **restart)
    wfn.to_file(f"h4_{r}.wfn")
    restart = {"restart_file": f"h4_{r}.wfn.npy"}
    psi4.core.clean()
    print(f"R = {r}  E(SA) = {e:.10f}")
