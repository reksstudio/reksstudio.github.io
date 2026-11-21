"""Minimum-energy conical intersection of two REKS states with DL-FIND.   pip install libdlfind"""
import numpy as np
import psi4
from libdlfind import dl_find
from libdlfind.callback import dlf_put_coords_wrapper, make_dlf_get_params
from libdlfind.function_types import type_dlf_get_multistate_gradients
from numpy.ctypeslib import as_array


def meci(method, molecule, restart_file, states=(0, 1), tolerance=4.5e-4, maxstep=0.15, maxcycle=150):
    """Minimum-energy crossing of roots I < J of cassette 0 (tolerance: largest gradient component, a.u.).
    Returns the energies of the two roots and the wavefunction; molecule ends at the crossing."""
    molecule.fix_com(True)
    molecule.fix_orientation(True)
    molecule.update_geometry()
    x0 = molecule.geometry().np
    natom = molecule.natom()
    i, j = states
    last = {"restart_file": restart_file}
    errors = []

    def gradients(nvar, coords, energy, gradient, coupling, needcoupling, iimage, status):
        status[0] = 0
        if errors:
            return
        x = np.array(as_array(coords, (nvar,)))
        try:
            molecule.set_geometry(psi4.core.Matrix.from_array(x.reshape(-1, 3)))
            psi4.set_options({"si_reks_grad": [[j, i]], "si_reks_nac": [[[i, j]] if needcoupling else []]})
            g, wfn = psi4.gradient(method, molecule=molecule, return_wfn=True,
                                   restart_file=last["restart_file"])
        except Exception as error:
            # a nonzero status ends DL-FIND, then the error is raised
            print(f"reks_meci: {type(error).__name__}; stopping DL-FIND", flush=True)
            errors.append(error)
            status[0] = 1
            return
        wfn.to_file("meci_orbitals.wfn")
        e = wfn.array_variable("SSR ENERGIES K=0").np.ravel()
        energy[0], energy[1] = e[i], e[j]
        g_out = as_array(gradient, (2 * nvar,))
        g_out[:nvar] = wfn.array_variable(f"SSR ROOT {i} GRADIENT CASSETTE 0").np.ravel()
        g_out[nvar:] = wfn.array_variable(f"SSR ROOT {j} GRADIENT CASSETTE 0").np.ravel()
        if needcoupling:
            # coupling gradient h = (E_J - E_I) d_IJ
            d = wfn.array_variable(f"SSR NAC {i} {j} CASSETTE 0").np.ravel()
            as_array(coupling, (nvar,))[:] = (e[j] - e[i]) * d
        last.update(restart_file="meci_orbitals.wfn.npy", energies=(e[i], e[j]), x=x, wfn=wfn)

    # DL-FIND: gradient projection (imultistate 2) with the coupling vector, L-BFGS (iopt 3) in delocalized
    # internal coordinates (icoord 3); all atoms active, nuclear charges for the internal coordinates
    spec = np.concatenate([np.ones(natom, dtype=int),
                           [round(molecule.Z(k)) for k in range(natom)],
                           np.zeros(natom, dtype=int)])
    params = make_dlf_get_params(coords=x0, spec=spec, nz=natom, icoord=3, iopt=3, imultistate=2,
                                 coupled_states=1, state_i=i + 1, state_j=j + 1, tolerance=tolerance,
                                 tolerance_e=tolerance / 450, maxstep=maxstep, maxcycle=maxcycle, printl=2)
    dl_find(nvarin=x0.size, nspec=spec.size, dlf_get_multistate_gradients=type_dlf_get_multistate_gradients(gradients),
            dlf_get_params=params, dlf_put_coords=dlf_put_coords_wrapper(lambda *args: None))
    if errors:
        raise errors[0]
    molecule.set_geometry(psi4.core.Matrix.from_array(last["x"].reshape(-1, 3)))
    return last["energies"], last["wfn"]
