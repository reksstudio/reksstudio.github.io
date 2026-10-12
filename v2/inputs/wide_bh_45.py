"""BH bond pair + lone pair: REKS(4,5) with geminal widths [2, 3], then REKS(4,6) with [3, 3]. HF with
REKS_FON_INTERP_DELTA 1e10 (f = sqrt(x)): E(PPS1) is the exact energy of the geminal product.
python wide_bh_45.py rhf        -> RHF seed wide_bh_rhf.wfn.npy
python wide_bh_45.py reks44     -> REKS(4,4) from RHF
python wide_bh_45.py reks45_rhf -> REKS(4,5) straight from RHF (does not converge in MAXITER)
python wide_bh_45.py reks23     -> REKS(2,3) of the lone pair from RHF
python wide_bh_45.py reks45     -> REKS(4,5) from the REKS(2,3) orbitals
python wide_bh_45.py reks46     -> REKS(4,6) from the REKS(4,5) orbitals
python wide_bh_45.py columns wide_bh_reks23.wfn.npy -> character of columns 0..7 of a saved file"""
import sys
import psi4

stage = sys.argv[1]
psi4.set_output_file(f"wide_bh_45_{stage}.out", False)
psi4.set_memory("2 GB")

if stage == "columns":
    # Mulliken population of each column on B and H; pi = share of the p functions px, py (m != 0)
    wfn = psi4.core.Wavefunction.from_file(sys.argv[2])
    C, S, bs = wfn.Ca().np, wfn.S().np, wfn.basisset()
    for i in range(8):
        q = C[:, i] * (S @ C[:, i])
        on_b = sum(q[mu] for mu in range(bs.nbf()) if bs.function_to_center(mu) == 0)
        pi = 0.0
        for mu in range(bs.nbf()):
            shell = bs.shell(bs.function_to_shell(mu))
            if shell.am == 1 and mu > shell.function_index:
                pi += q[mu]
        print(f"column {i}:  B {on_b:5.2f}  H {1 - on_b:5.2f}  pi {pi:4.2f}")
    sys.exit()

psi4.geometry("""
0 1
B   0.0   0.0   0.0
H   0.0   0.0   1.2324
symmetry c1
""")
psi4.set_options({"basis": "cc-pvdz", "scf_type": "pk"})

gvb = {"reference": "reks", "sa_reks_configs": ["PPS1"], "si_reks_configs": [[]],
       "reks_fon_interp_delta": 1e10, "e_convergence": 1e-10, "d_convergence": 1e-8}
seed = "wide_bh_rhf.wfn.npy"

if stage == "rhf":
    e, wfn = psi4.energy("hf", return_wfn=True)
    wfn.to_file("wide_bh_rhf.wfn")
    print(f"E(RHF) = {e:.10f}")
    sys.exit()
if stage == "reks44":
    psi4.set_options({**gvb, "reks": [4, 4]})
elif stage == "reks45_rhf":
    psi4.set_options({**gvb, "reks": [4, 5], "reks_geminal_widths": [2, 3], "fail_on_maxiter": False})
elif stage == "reks23":
    psi4.set_options({**gvb, "reks": [2, 3], "reks_geminal_widths": [3]})
elif stage == "reks45":
    # columns of the REKS(2,3) file: 1 B-H bond, 2 lone pair, 3 4 pi, 5 sigma*
    # slots (a,c,d) & (b,e): a lone pair, b bond, c d pi, e sigma*
    psi4.set_options({**gvb, "reks": [4, 5], "reks_geminal_widths": [2, 3],
                      "guess_active_window": [2, 1, 3, 4, 5]})
    seed = "wide_bh_reks23.wfn.npy"
elif stage == "reks46":
    # columns of the REKS(4,5) file: 1 lone pair, 2 bond, 3 4 pi, 5 sigma*, 6 next sigma
    # slots (a,d,f) & (b,c,e): a lone pair, d f pi, b bond, c sigma*, e next sigma
    psi4.set_options({**gvb, "reks": [4, 6], "reks_geminal_widths": [3, 3],
                      "guess_active_window": [1, 2, 5, 3, 6, 4]})
    seed = "wide_bh_reks45.wfn.npy"
e, wfn = psi4.energy("hf", return_wfn=True, restart_file=seed)
wfn.to_file(f"wide_bh_{stage}.wfn")
print(f"E(PPS1) = {e:.10f}")
