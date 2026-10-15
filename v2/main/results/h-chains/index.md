# Hydrogen chains H2, H4, H6, H8 — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/h-chains/>

Psi4 f31cf1f94, 2026-10-15: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# Hydrogen chains H<sub>2</sub>, H<sub>4</sub>, H<sub>6</sub>, H<sub>8</sub>

Dissociation of linear hydrogen chains with SSR(n,n) along the H–H distance, against FCI in the same basis.

Reference class: model vs near-exact theory (FCI/SHCI)

Deviation from FCI along R: to be added.

[H<sub>2</sub>](https://reksstudio.github.io/v2/main/results/h-chains/index.md#h2) · [H<sub>4</sub>](https://reksstudio.github.io/v2/main/results/h-chains/index.md#h4) · [H<sub>6</sub>](https://reksstudio.github.io/v2/main/results/h-chains/index.md#h6) · [H<sub>8</sub>](https://reksstudio.github.io/v2/main/results/h-chains/index.md#h8)

## H<sub>2</sub>

SSR(2,2)/aug-cc-pVTZ vs FCI/aug-cc-pVTZ; deviation: to be added.

![H2 potential energy curves, SSR(2,2), FCI and KS](https://reksstudio.github.io/v2/figures/main/h2.webp)

Absolute energies as printed in paper v1; curves relative to separated atoms to be added.

Figure to be added: occupations along R, SSR state natural orbitals vs FCI NOONs

### Setup

Method: SSR(2,2), BH\&HLYP

Basis: aug-cc-pVTZ

Coordinate: R<sub>HH</sub>, step 0.05 Å

SA pool, SI cassette: to be added

### Reference

FCI, aug-cc-pVTZ, Psi4.

KS curve shown for contrast.

**Provenance:** Paper v1, Fig. 2A. Curve data (CSV): to be added.

## H<sub>4</sub>

SSR(4,4)/cc-pVTZ vs FCI/cc-pVTZ; deviation: to be added.

![H4 potential energy curves, SSR(4,4) and FCI](https://reksstudio.github.io/v2/figures/main/h4.webp)

Absolute energies as printed in paper v1; curves relative to separated atoms to be added.

Figure to be added: occupations along R

### Setup

Method: SSR(4,4), BH\&HLYP

Basis: cc-pVTZ

Coordinate: R<sub>HH</sub>

SA pool, SI cassette: to be added

### Reference

FCI, cc-pVTZ, Psi4.

**Provenance:** Paper v1, Fig. 2B. Curve data (CSV): to be added.

## H<sub>6</sub>

SSR(6,6)/6-31G(d) vs FCI/6-31G(d); deviation: to be added.

![H6 potential energy curves, SSR(6,6) and FCI](https://reksstudio.github.io/v2/figures/main/h6.webp)

Absolute energies as printed in paper v1; the FCI/aug-cc-pVDZ single point is a larger-basis point, not a measure of agreement.

Figure to be added: occupations along R

### Setup

Method: SSR(6,6), BH\&HLYP

Basis: 6-31G(d)

Coordinate: R<sub>HH</sub>

SA pool, SI cassette: to be added

### Reference

FCI, 6-31G(d), Psi4.

Single point FCI/aug-cc-pVDZ (larger basis), marked as such.

**Provenance:** Paper v1, Fig. 2C. Curve data (CSV): to be added.

## H<sub>8</sub>

SSR(8,8)/6-31G(d) vs FCI/6-31G(d); deviation: to be added.

![H8 potential energy curves, SSR(8,8) and FCI](https://reksstudio.github.io/v2/figures/main/h8.webp)

Absolute energies as printed in paper v1; the FCI/cc-pVDZ single point is a larger-basis point, not a measure of agreement.

Figure to be added: occupations along R

### Setup

Method: SSR(8,8), BH\&HLYP

Basis: 6-31G(d)

Coordinate: R<sub>HH</sub>

SA pool, SI cassette: to be added

### Reference

FCI, 6-31G(d), Psi4.

Single point FCI/cc-pVDZ (larger basis), marked as such.

**Provenance:** Paper v1, Fig. 2D. Curve data (CSV): to be added.

**Scope:** Not shown: deviation numbers, occupations along R, absolute DFT vs absolute FCI as agreement.

## Run, ask, cite

* Paper result; catalogue (8,8) not installed. Ask via [Contact](https://reksstudio.github.io/v2/docs/index.md#contact).
* [Manual: Start](https://reksstudio.github.io/v2/manual/index.md#overview) · [Install](https://reksstudio.github.io/v2/docs/index.md#install) · [Cite](https://reksstudio.github.io/v2/docs/index.md#cite) · [Contact](https://reksstudio.github.io/v2/docs/index.md#contact)
* [Back to the Results index](https://reksstudio.github.io/v2/main/results/index.md#row-h-chains)

Other results: [Exactness](https://reksstudio.github.io/v2/main/results/exactness/index.md) · [Bond breaking](https://reksstudio.github.io/v2/main/results/bond-breaking/index.md) · [C<sub>2</sub>](https://reksstudio.github.io/v2/main/results/c2/index.md) · [QUEST](https://reksstudio.github.io/v2/main/results/quest/index.md) · [TTR](https://reksstudio.github.io/v2/main/results/ttr/index.md) · [Zethrenes](https://reksstudio.github.io/v2/main/results/zethrenes/index.md) · [C<sub>2</sub>H<sub>4</sub> photochemistry](https://reksstudio.github.io/v2/main/results/c2h4-photochemistry/index.md)
