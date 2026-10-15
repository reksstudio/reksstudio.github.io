# `REKS_DIIS_MON_VERDICT_RHO`

HTML: <https://reksstudio.github.io/v2/manual/reference/#gvb-diis-monitors-verdicts-expert>

Chapter: [18. Option Table](https://reksstudio.github.io/v2/manual/reference/index.md#option-table)

Psi4 f31cf1f94, 2026-10-15: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

Default: `1.5`

Meaning: Verdict trip ratio: a GVB-DIIS step is rewound when ‖g_orb‖ exceeds this multiple of its maximum over the recent iterates.

Used in: §13 `REKS_GVB_ROBUST_VERDICT`
