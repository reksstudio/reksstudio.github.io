# Environment and files — REKS Studio Learn

HTML: <https://reksstudio.github.io/learn/branch/environment/>

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/llms.txt>. Every page: `https://reksstudio.github.io/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/inputs/<file>.txt`.

[Learn](https://reksstudio.github.io/learn/index.md) › Environment and files

# Environment and files

## Environment, engines and files {#branch-environment}

External fields, dispersion, integral engines, ghost atoms, fragments and the files a run writes.

### Point charges {#case-env-point-charges}

**How do external point charges enter the states and their gradients?**

* **Input:** input will be added

* **System:** system to be chosen

* **Output:** to be computed

* **Orbitals:** orbitals will be shown

* **Check:** to be added

### Dispersion correction (D3) {#case-env-dispersion}

**How is a dispersion correction added to the REKS energies and gradients?**

* **Input:** input will be added

* **System:** system to be chosen

* **Output:** to be computed

* **Orbitals:** orbitals will be shown

* **Check:** to be added

### Integral engines: DF, CD, COSX, DIRECT {#case-env-integrals}

**Which integral engine runs a REKS calculation?**

* **Input:** input will be added

* **System:** system to be chosen

* **Output:** to be computed

* **Orbitals:** orbitals will be shown

* **Check:** `@DF-REKS iter` lines with density fitting, `@REKS iter` otherwise ([The three engines](https://reksstudio.github.io/learn/reference/run-control/index.md#engines))

### Ghost atoms {#case-env-ghost}

**How are basis functions without nuclei placed in a REKS run?**

* **Input:** input will be added

* **System:** system to be chosen

* **Output:** to be computed

* **Orbitals:** orbitals will be shown

* **Check:** to be added

### Fragment couplings {#case-env-fragments}

**How strongly are the states of two fragments coupled?**

* **Input:** input will be added

* **System:** system to be chosen

* **Output:** to be computed

* **Orbitals:** orbitals will be shown

* **Check:** the fragment blocks of the cassette are printed ([Fragment charge-transfer descriptors](https://reksstudio.github.io/learn/reference/properties/index.md#fragment-ct), [Fragment couplings (FCD, FED, FSD)](https://reksstudio.github.io/learn/reference/properties/index.md#fragment-couplings))

### Molden, cube and wavefunction files {#case-env-files}

**Which files does a run leave for viewers and later runs?**

* **Input:** input will be added

* **System:** system to be chosen

* **Output:** to be computed

* **Orbitals:** orbitals will be shown

* **Check:** the file summary at the end of the run lists every file written ([Files](https://reksstudio.github.io/learn/reference/output/index.md#files))
