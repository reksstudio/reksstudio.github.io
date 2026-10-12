# `REKS_DIIS_MON_PROGRESS_EPS`

HTML: <https://reksstudio.github.io/v2/manual/reference/#gvb-diis-monitors-verdicts-expert>

Psi4 b275f4294, 2026-10-11: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `<page>/index.md` (markdown). Option cards: `options/<NAME>.md`. Raw files: `<file>.txt` (text/plain).

Default: `1e-2`

Meaning: Sufficient-decrease fraction ε: a GVB-DIIS iterate counts as progress only if ‖g_orb‖ ≤ (1 − ε) × best ‖g_orb‖.
