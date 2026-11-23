"""SI-SA-REKS(4,4) of linear H4 (H-H 0.9 A), HF/STO-3G: explicit SA pool and weights, four SI cassettes."""
import psi4

psi4.set_output_file("reks44_h4_cassettes.out", False)
psi4.set_memory("1 GB")

r = 0.9
psi4.geometry(f"""
0 1
H 0 0 0
H 0 0 {r}
H 0 0 {2 * r}
H 0 0 {3 * r}
symmetry c1
""")

psi4.set_options({
    "basis":           "sto-3g",
    "reference":       "reks",
    "reks":            [4, 4],
    "sa_reks_configs": ["PPS1", "OSS1", "OSS2"],
    "sa_reks_weights": [0.5, 0.25, 0.25],
    "si_reks_configs": [[["PPS1", "PPS2", "OSS1", "OSS2"], ["single-scheme"], ["mixed-scheme"], ["full"]]],
})
e_sa, wfn = psi4.energy("scf", return_wfn=True)
print(f"E(SA) = {e_sa:.10f}")
for k in range(4):
    print(f"cassette {k}:", wfn.array_variable(f"SSR ENERGIES K={k}").np.ravel()[:3])
