# `REKS_DIIS_COND_STALE_DELTA`

HTML: <https://reksstudio.github.io/v2/manual/reference/#gvb-diis-conditioning-chain-expert>

Psi4 b275f4294, 2026-10-11: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `<page>/index.md` (markdown). Option cards: `options/<NAME>.md`. Raw files: `<file>.txt` (text/plain).

Default: `1e-4`

Meaning: Stale-drop threshold δ: GVB-DIIS error vectors with norm above the newest norm / √δ are dropped; 0 switches it off.
