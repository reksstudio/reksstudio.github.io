# `LEVEL_SHIFT_ADAPT`

HTML: <https://reksstudio.github.io/v2/manual/run-control/#level_shift_adapt>

Chapter: [13. SCF Convergence Engines](https://reksstudio.github.io/v2/manual/run-control/index.md#scf-engines)

Psi4 72ce4d58b, 2026-10-17: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

Adaptive base of the staircase level shift: decays while the orbitals are stable, grows back up to `level_shift` on swaps or strong mixing.

Type: bool

Default: `true`

```python
"level_shift_adapt": False,
```

* True: the base shift equals `LEVEL_SHIFT` through iteration 3; afterwards it decays (factor 0.5–0.95) when the previous iteration had no orbital swaps and maximal active mixing below 0.15, and grows by a factor 1.5 when the previous iteration had swaps or mixing above 0.30; it stays within \[0.01, `LEVEL_SHIFT`].
* False holds the base shift at `LEVEL_SHIFT` for every iteration.
