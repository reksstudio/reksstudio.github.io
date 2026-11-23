# `GUESS_ACTIVE_WINDOW`

HTML: <https://reksstudio.github.io/manual/run-control/#guess_active_window>

Chapter: [11. Guesses and Restarts](https://reksstudio.github.io/manual/run-control/index.md#guesses)

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/llms.txt>. Every page: `https://reksstudio.github.io/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/inputs/<file>.txt`.

MOs of the read guess placed in the active columns, one token per active orbital: 0-based index, `HOMO-k` or `LUMO+k`.

Type: array

Default: `[]` (off)

```python
"guess_active_window": ["HOMO-1", "HOMO", "LUMO", "LUMO+1"],
```

* Moves the listed MOs of the read guess into the active MO columns by column swaps, one token per active orbital, in active-column order; a displaced MO takes the vacated column. Token order sets the pairs ([Pairing scheme](https://reksstudio.github.io/manual/concepts/index.md#pairing-scheme), [Choose the pairs](https://reksstudio.github.io/manual/first-calculation/index.md#choose-pairs)). The call above is for `reks [4, 4]`.
* Tokens: 0-based MO indices or `HOMO`, `LUMO`, `HOMO-k`, `LUMO+k` of the loaded α occupation. The `GUESS READ: active window` line reports the resolved columns and swaps ([SCF converges instantly to a wrong energy after a restart](https://reksstudio.github.io/manual/diagnose/index.md#diag-wrong-window)).
* Requires `guess read` (a REKS run stops with a `ValidationError` otherwise); a non-REKS reference ignores the option. C1 only.
* If projection onto the current basis drops a read MO as linearly dependent, `REKS READ: WARNING` names it; the later columns shift, and the window may no longer match.
