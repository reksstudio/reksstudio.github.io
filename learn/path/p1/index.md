# P1. One pair — REKS Studio Learn

HTML: <https://reksstudio.github.io/learn/path/p1/>

Psi4 e95c2d234, 2026-10-19: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/llms.txt>. Every page: `https://reksstudio.github.io/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/inputs/<file>.txt`.

[Learn](https://reksstudio.github.io/learn/index.md) › P1. One pair

# P1. One pair

The method is SI-SA-REKS, SSR for short ([SA-REKS ensemble and weights](https://reksstudio.github.io/learn/concepts/index.md#sa-ensemble), [SI cassette](https://reksstudio.github.io/learn/concepts/index.md#si-cassette)); the steps of this path use the BH\&HLYP functional. The functionals REKS rejects: [Required and rejected settings](https://reksstudio.github.io/learn/reference/index.md#required-settings).

## One electron pair: H₂, REKS(2,2) {#case-h2-pair}

**What happens to one electron pair when a bond stretches?**

Predict

At 0.74 Å the bond is intact. How are the two electrons of the pair shared between the bonding and the antibonding orbital? And when the bond is stretched?

Input: [`first_h2.dat`](https://reksstudio.github.io/inputs/first_h2.dat.txt); charge 0, multiplicity 1

```psithon
#! SI-SA-REKS(2,2) of H2, BH&HLYP/cc-pVDZ, default SA ensemble and SI cassette.

molecule h2 {
0 1
H 0.0 0.0 0.0
H 0.0 0.0 0.74
symmetry c1
}

set {
  basis      cc-pvdz
  reference  reks
  reks       [2, 2]
}

energy('bhhlyp')
```

Run settings

Active space: catalog `reks22` = REKS(2,2); units `[2]`: electron geminal (FON n); 2S = 0 (3 configurations), 2 (1 configuration)

SA, SI: defaults ([SA-REKS ensemble and weights](https://reksstudio.github.io/learn/concepts/index.md#sa-ensemble), [SI cassette](https://reksstudio.github.io/learn/concepts/index.md#si-cassette))

Look at: the FON line of the pair in `Post-Iterations` ([Fractional occupation numbers of the SA-REKS ensemble](https://reksstudio.github.io/learn/reference/properties/index.md#sa-fons))

Output: to be computed

Orbitals: orbitals will be shown

Check: near equilibrium the bonding orbital holds nearly both electrons; stretched, both FONs approach one

Figure: the [H₂ dissociation curves](https://reksstudio.github.io/main/results/dissociation/h2/index.md), from the bond to two separated atoms

Try: set the second H at `1.6` Å; predict the FONs, then compare the FON line

Why

The pair is one electron geminal of width 2 ([Unit](https://reksstudio.github.io/learn/concepts/index.md#unit)): two electrons in two orbitals, n<sub>a</sub> + n<sub>b</sub> = 2 ([Geminals](https://reksstudio.github.io/learn/concepts/index.md#geminals)). Stretching the bond moves occupation from the bonding to the antibonding orbital; the FONs are optimized with the orbitals ([Ensemble Kohn–Sham reference and FONs](https://reksstudio.github.io/learn/concepts/index.md#ensemble-fons)).

Next step: [P2. Broken π bond](https://reksstudio.github.io/learn/path/p2/index.md#p2) — Can a bond break without stretching?

Branches from here: [Lone pair over three orbitals: BH, REKS(2,3) 3](https://reksstudio.github.io/learn/branch/units/index.md#case-wide-bh-23) · [Hole geminal: REKS(4,3) h3](https://reksstudio.github.io/learn/branch/units/index.md#case-hole-43)

## Linked files

[inputs/first_h2.dat](https://reksstudio.github.io/inputs/first_h2.dat.txt)
