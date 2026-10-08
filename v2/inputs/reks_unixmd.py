"""PyUNIxMD interface to Psi4 REKS: SSR energies, gradients and NACs from one gradient() per step."""
import os
import random
import numpy as np
import psi4
from molecule import Molecule
from qm.qm_calculator import QM_calculator


def molecule(xyz_file, nstates, temperature, charge=0, seed=1):
    """PyUNIxMD molecule from an xyz file (Angstrom); velocities: one Maxwell-Boltzmann draw at temperature (K)."""
    atoms = [line for line in open(xyz_file).read().split("\n")[2:] if line.strip()]
    mol = Molecule(geometry=f"{len(atoms)}\n\n" + "\n".join(a + " 0 0 0" for a in atoms),
                   nstates=nstates, unit_pos="angs", charge=charge)
    rng = np.random.default_rng(seed)
    random.seed(seed)
    kT = temperature / 315775.02                 # Eh; masses and velocities in atomic units
    v = rng.normal(size=mol.pos.shape) * np.sqrt(kT / mol.mass)[:, None]
    mol.vel = v - (mol.mass[:, None] * v).sum(axis=0) / mol.mass.sum()
    return mol


class REKS(QM_calculator):

    def __init__(self, molecule, method, restart_file):
        super().__init__()
        self.qm_prog, self.qm_method = "psi4", "REKS"
        self.method = method
        self.restart_file = os.path.abspath(restart_file)
        # every state's gradient and the NAC vectors come from the same call
        self.re_calc = False
        molecule.l_nacme = False

    def get_data(self, molecule, base_dir, bo_list, dt, istep, calc_force_only, traj=None):
        atoms = "\n".join(f"{s} {x} {y} {z}" for s, (x, y, z) in zip(molecule.symbols, molecule.pos))
        mol = psi4.geometry(f"{int(molecule.charge)} 1\n{atoms}\nunits bohr\nsymmetry c1\nno_com\nno_reorient")
        n = molecule.nst
        # running state first: its gradient is the one gradient() returns; NAC pairs add the other states
        psi4.set_options({"si_reks_grad": [[bo_list[0]]],
                          "si_reks_nac": [[[i, j] for i in range(n) for j in range(i + 1, n)]]})
        g, wfn = psi4.gradient(self.method, molecule=mol, return_wfn=True, restart_file=self.restart_file)
        self.restart_file = os.path.join(base_dir, "md_orbitals.wfn.npy")
        wfn.to_file(self.restart_file)

        # roots of cassette 0; a 2S > 0 cassette carries a sector prefix (REKS SECTOR s SSR ENERGIES K=0)
        key = next(k for k in wfn.array_variables() if k.endswith("SSR ENERGIES K=0"))
        energies = wfn.array_variable(key).np.ravel()
        for i in range(n):
            molecule.states[i].energy = energies[i]
            molecule.states[i].force = -wfn.array_variable(f"SSR ROOT {i} GRADIENT CASSETTE 0").np
            for j in range(i + 1, n):
                d = wfn.array_variable(f"SSR NAC {i} {j} CASSETTE 0").np
                molecule.nac[i, j], molecule.nac[j, i] = d, -d
