"""Geometry optimization of a REKS state with DL-FIND.   pip install libdlfind"""
import numpy as np
import psi4
from libdlfind import dl_find
from libdlfind.callback import dlf_get_gradient_wrapper, dlf_put_coords_wrapper, make_dlf_get_params


def optimize(method, molecule, restart_file, tolerance=4.5e-4, maxcycle=100):
    """Minimize the state that si_reks_grad follows (tolerance: largest gradient component, a.u.).
    Returns its energy and wavefunction; molecule ends at the optimized geometry."""
    molecule.fix_com(True)
    molecule.fix_orientation(True)
    molecule.update_geometry()
    x0 = molecule.geometry().np
    natom = molecule.natom()
    last = {"restart_file": restart_file, "energy": 0.0}
    errors = []

    @dlf_get_gradient_wrapper
    def gradient(x, iimage, kiter):
        if errors:
            return last["energy"], np.zeros_like(x)
        try:
            molecule.set_geometry(psi4.core.Matrix.from_array(np.array(x)))
            g, wfn = psi4.gradient(method, molecule=molecule, return_wfn=True,
                                   restart_file=last["restart_file"])
        except Exception as error:
            # DL-FIND cannot be interrupted from here: a zero gradient ends it, then the error is raised
            print(f"reks_dlfind: {type(error).__name__}; stopping DL-FIND", flush=True)
            errors.append(error)
            return last["energy"], np.zeros_like(x)
        wfn.to_file("dlfind_orbitals.wfn")
        last.update(restart_file="dlfind_orbitals.wfn.npy", energy=psi4.variable("CURRENT ENERGY"),
                    x=np.array(x), wfn=wfn)
        return last["energy"], g.np

    # DL-FIND: L-BFGS (iopt 3) in delocalized internal coordinates (icoord 3); all atoms active,
    # nuclear charges for the internal coordinates
    spec = np.concatenate([np.ones(natom, dtype=int),
                           [round(molecule.Z(i)) for i in range(natom)],
                           np.zeros(natom, dtype=int)])
    params = make_dlf_get_params(coords=x0, spec=spec, nz=natom, icoord=3, iopt=3, tolerance=tolerance,
                                 tolerance_e=tolerance / 450, maxcycle=maxcycle, printl=2)
    dl_find(nvarin=x0.size, nspec=spec.size, dlf_get_gradient=gradient, dlf_get_params=params,
            dlf_put_coords=dlf_put_coords_wrapper(lambda *args: None))
    if errors:
        raise errors[0]
    molecule.set_geometry(psi4.core.Matrix.from_array(last["x"]))
    return last["energy"], last["wfn"]
