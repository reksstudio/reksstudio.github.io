"""BH lone pair: REKS(2,3), one geminal over the boron lone pair and both pi orbitals. HF with
REKS_FON_INTERP_DELTA 1e10 (f = sqrt(x)): E(PPS1) is the exact GVB energy, compared with CASSCF(2,3).
python wide_bh_23.py rhf      -> RHF seed wide_bh_rhf.wfn.npy + Molden file
python wide_bh_23.py reks22   -> REKS(2,2): lone pair + one pi
python wide_bh_23.py reks23   -> REKS(2,3): lone pair + both pi
python wide_bh_23.py sigma    -> REKS(2,3) with sigma* in place of the second pi
python wide_bh_23.py casscf   -> CASSCF(2,3): 1s and B-H bond doubly occupied, active lone pair + both pi"""
import sys
import psi4

stage = sys.argv[1]
psi4.set_output_file(f"wide_bh_23_{stage}.out", False)
psi4.set_memory("2 GB")

psi4.geometry("""
0 1
B   0.0   0.0   0.0
H   0.0   0.0   1.2324
symmetry c1
""")
psi4.set_options({"basis": "cc-pvdz", "scf_type": "pk"})

gvb = {"reference": "reks", "sa_reks_configs": ["PPS1"], "si_reks_configs": [[]],
       "reks_fon_interp_delta": 1e10, "e_convergence": 1e-10, "d_convergence": 1e-8}

if stage == "rhf":
    psi4.set_options({"molden_write": True})
    e, wfn = psi4.energy("hf", return_wfn=True)
    wfn.to_file("wide_bh_rhf.wfn")
    print(f"E(RHF) = {e:.10f}")
elif stage == "casscf":
    psi4.set_options({"restricted_docc": [2], "active": [3]})
    print(f"E(CASSCF(2,3)) = {psi4.energy('casscf'):.10f}")
else:
    if stage == "reks22":
        psi4.set_options({**gvb, "reks": [2, 2]})
    elif stage == "reks23":
        psi4.set_options({**gvb, "reks": [2, 3], "reks_geminal_widths": [3]})
    elif stage == "sigma":
        psi4.set_options({**gvb, "reks": [2, 3], "reks_geminal_widths": [3],
                          "guess_active_window": ["HOMO", "LUMO", "LUMO+2"]})
    e, wfn = psi4.energy("hf", return_wfn=True, restart_file="wide_bh_rhf.wfn.npy")
    wfn.to_file(f"wide_bh_{stage}.wfn")
    print(f"E(PPS1) = {e:.10f}")
