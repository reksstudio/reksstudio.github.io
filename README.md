# REKS Studio

Website: https://reksstudio.github.io

REKS Studio is an open-source package that brings ensemble density functional theory to Psi4. Where a single
Kohn-Sham determinant fails — breaking bonds, polyradicals, excited states — it describes the electrons with
fractionally occupied orbitals, through the spin-restricted ensemble-referenced Kohn-Sham (REKS) method and its
extensions state-averaged REKS (SA-REKS) and state-interaction SA-REKS (SI-SA-REKS, or SSR).

Strong correlation at the cost of ordinary DFT: [against ORCA and Q-Chem](https://reksstudio.github.io/main/cost/#md),
[against DFT in Psi4](https://reksstudio.github.io/main/cost/#psi4).

## Code

- Psi4: https://psicode.org, https://github.com/psi4/psi4
- REKS Studio in Psi4: branch [`kk/reks.studio`](https://github.com/constlike/psi4/tree/kk/reks.studio) of
  https://github.com/constlike/psi4

## Citation

If you use REKS Studio, please cite:

K. Komarov, M. Filatov, S. K. Min. Automated Symbolic Derivation Enables Scalable Ensemble DFT for Strongly Correlated
Molecules and Materials. *ChemRxiv* **2026**. https://doi.org/10.26434/chemrxiv.15008475/v1

```bibtex
@article{komarov2026-reks-studio,
  author  = {Komarov, Konstantin and Filatov, Michael and Min, Seung Kyu},
  title   = {{Automated Symbolic Derivation Enables Scalable Ensemble DFT for Strongly Correlated Molecules and Materials}},
  journal = {ChemRxiv},
  year    = {2026},
  doi     = {10.26434/chemrxiv.15008475/v1}
}
```

## Authors

- **Konstantin Komarov** — Department of Chemistry, Ulsan National Institute of Science and Technology (UNIST),
  UNIST-gil 50, Ulsan, 44919, Republic of Korea. constlike@gmail.com
- **Michael Filatov (Gulak)** — Center for Multidimensional Carbon Materials, Institute for Basic Science (IBS),
  UNIST-gil 50, Ulsan, 44919, Republic of Korea. mike.filatov@gmail.com
- **Seung Kyu Min** — Department of Chemistry, Ulsan National Institute of Science and Technology (UNIST),
  UNIST-gil 50, Ulsan, 44919, Republic of Korea; Center for Multidimensional Carbon Materials, Institute for Basic
  Science (IBS), UNIST-gil 50, Ulsan, 44919, Republic of Korea. skmin@unist.ac.kr

## License

The content and data of this website are licensed under the Creative Commons Attribution 4.0 International License
(CC BY 4.0), see [LICENSE](LICENSE); the REKS Studio name and logo are not covered by it. The bundled fonts (IBM Plex,
Newsreader) keep their SIL Open Font License 1.1.
Psi4 is distributed under the GNU Lesser General Public License v3.0 in its own repository.
