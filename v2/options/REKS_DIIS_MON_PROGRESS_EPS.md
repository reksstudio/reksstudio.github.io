# `REKS_DIIS_MON_PROGRESS_EPS`

HTML: <https://reksstudio.github.io/v2/manual/reference/#gvb-diis-monitors-verdicts-expert>

Chapter: [18. Option Table](https://reksstudio.github.io/v2/manual/reference/index.md#option-table)

Psi4 72ce4d58b, 2026-10-17: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

Default: `1e-2`

Meaning: Sufficient-decrease fraction ε: a GVB-DIIS iterate counts as progress only if ‖g_orb‖ ≤ (1 − ε) × best ‖g_orb‖.

Used in: 
