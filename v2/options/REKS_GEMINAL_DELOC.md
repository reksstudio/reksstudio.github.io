# `REKS_GEMINAL_DELOC`

HTML: <https://reksstudio.github.io/v2/manual/run-control/#reks_geminal_deloc>

Chapter: [14. Geminal Delocalization](https://reksstudio.github.io/v2/manual/run-control/index.md#geminal-deloc)

Psi4 d40267fc2, 2026-10-13: the commit of every output on this site. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

After the SCF, rotates generation-0 geminal pairs to their IPR minimum and reconverges; kept if it converges to a lower E_SA.

Type: bool

Default: `false`

```python
"reks_geminal_deloc": True,
```

```log
==> REKS Geminal Delocalization <==

  Geminal  MO a  MO b          x  angle (deg)
        0     8     9   1.000000     -45.0000

  x: position of the pair's Loewdin frame between the minimum (0) and the maximum (1) of
     IPR_ab = sum_A [p_a(A)^2 + p_b(A)^2] over rotations of the pair; rotated to the minimum
     when x > 1/2. The SCF restarts from the rotated orbitals.
```

```log
==> REKS Geminal Delocalization <==

  E_SA before rotation       -78.351265591745
  E_SA after rotation        -78.362111811377
  Rotated solution kept (lower E_SA).
```

```log
==> REKS Geminal Delocalization <==

  E_SA before rotation       -77.884884825216
  E_SA after rotation        -77.884884825216
  Rotated solution rejected; SCF restarts from the orbitals before the rotation.
```

* After the SCF converges, every orbital pair (a, b) of every generation-0 geminal is tested: IPR<sub>ab</sub>, the Löwdin inverse participation ratio of the pair, runs over \[IPR<sub>ab</sub>(0) + α − r, IPR<sub>ab</sub>(0) + α + r] under the rotation θ, and x is the position of the current orbitals in that range (0 = minimum, 1 = maximum). A pair with x > 1/2 is rotated by θ<sup>\*</sup> to the minimum; a pair with r ≤ 64 ε IPR<sub>ab</sub>(0) (ε the machine epsilon) is left alone. Sweeps over all pairs repeat until one rotates nothing; the FONs are not changed.
* First block: the rotated pairs (geminal, 1-based MO numbers, x, θ<sup>\*</sup> in degrees); the SCF then converges again from the rotated orbitals. Without a pair at x > 1/2 the block reads `No geminal orbital pair with x > 1/2.` and no further SCF runs.
* Second block: the rotated solution is kept when its SCF converges with E<sub>SA</sub>(after) \< E<sub>SA</sub>(before) − `E_CONVERGENCE`; otherwise the SCF converges once more from the orbitals before the rotation. The SI step, properties and gradients follow the final solution.
* C<sub>2</sub>H<sub>4</sub> at 90°, BH\&HLYP/6-31G, SSR(2,2) with the all-α determinant, from a localized seed (the active pair of the delocalized solution rotated by 45°, n = 2): without the option the SCF stays there, E<sub>SA</sub> = −78.351265591745 E<sub>h</sub>, n<sub>a</sub> = 2; with it x = 1, θ<sup>\*</sup> = −45°, and the SCF reaches E<sub>SA</sub> = −78.362111811377 E<sub>h</sub>, n<sub>a</sub> = 1, the solution of the 0° → 90° restart chain (first two blocks above).
* HF/6-31G(d), seed built the same way from the HF delocalized solution, `REKS_USE_TRAH` with `REKS_GVB_DIIS` false: the localized solution, E<sub>SA</sub> = −77.884884825216 E<sub>h</sub>, lies below the delocalized one, −77.879948708032 E<sub>h</sub>; the SCF from the rotated orbitals (θ<sup>\*</sup> = 45°) returns to the localized solution, and the rotation is rejected (third block).

$$
a' = a\cos\theta + b\sin\theta, \qquad b' = -a\sin\theta + b\cos\theta
$$

$$
p_A(i) = \sum_{\mu \in A} \tilde C_{\mu i}^{\,2}, \qquad t_A(a,b) = \sum_{\mu \in A} \tilde C_{\mu a} \tilde C_{\mu b}, \qquad \tilde{\mathbf C} = \mathbf S^{1/2}\mathbf C
$$

$$
\mathrm{IPR}_{ab}(\theta) = \sum_A \big[p_A(a')^2 + p_A(b')^2\big] = \mathrm{IPR}_{ab}(0) + \alpha\,(1 - \cos 4\theta) + \beta \sin 4\theta
$$

$$
\alpha = \sum_A \Big[t_A(a,b)^2 - \tfrac14\big(p_A(a) - p_A(b)\big)^2\Big], \qquad \beta = \sum_A t_A(a,b)\big(p_A(a) - p_A(b)\big)
$$

$$
r = \sqrt{\alpha^2 + \beta^2}, \qquad \mathrm{IPR}_{ab}(\theta) \in \big[\mathrm{IPR}_{ab}(0) + \alpha - r,\ \mathrm{IPR}_{ab}(0) + \alpha + r\big]
$$

$$
x = \frac{r - \alpha}{2r}, \qquad \theta^{*} = -\tfrac14\,\mathrm{atan2}(\beta, \alpha), \qquad \mathrm{IPR}_{ab}(\theta^{*}) = \mathrm{IPR}_{ab}(0) - 2 r x
$$
