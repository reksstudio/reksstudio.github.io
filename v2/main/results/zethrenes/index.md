# Zethrenes and related PAHs, REKS(2,2) to (10,10) — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/zethrenes/>

Psi4 builds of these outputs: b0c2d45a7, d40267fc2, 2424fb773 (kk/reks.v42), named on each run line. Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# Zethrenes and related PAHs, REKS(2,2) to (10,10)

Seven PAHs of Hu et al. (2016), 32–70 atoms, 20 geometries (three per compound, two for IF); SA-REKS and SI-SA-REKS from (2,2) to (10,10), BH\&HLYP/cc-pVTZ; 98 calculations; energies, occupations and active orbitals of every one, with its input.

Reference class: trend without reference

7 compounds · 20 geometries · 98 calculations · up to 70 atoms, 1716 basis functions · SI up to 29 082 configurations (2S = 0)

[Definitions](#definitions) · [Compounds](#compounds) · [Spin gaps along the active-space ladder](#ladder) · [Natural occupations of S0 along the ladder](#occupations) · [vs experiment](#experiment) · [Setup and reference](#setup)

## Definitions

ΔE<sub>ST</sub> = E(T1) − E(S0), ΔE<sub>SQ</sub> = E(Q1) − E(S0)

Same geometry, same active space; S0, T1, Q1 = lowest state with 2S = 0, 2, 4; positive: T1 (Q1) above S0. Spin gaps and ΔE<sub>geom</sub> in kcal mol⁻¹ (1 decimal, with sign); SI state energies E − E(S0) in eV.

R<sub>cs</sub>, R<sub>os</sub>, R<sub>T</sub>: optima of the closed-shell singlet, the broken-symmetry open-shell singlet and the triplet (SI appendix blocks “Singlet Closed Shell”, “Singlet Biradical Open Shell”, “Triplet”; UCAM-B3LYP/6-31G\*, Hu et al. 2016, SI p. S16).

[SA-REKS](https://reksstudio.github.io/v2/manual/concepts/index.md#sa-ensemble): ensemble SCF, gives the orbitals and their FONs · [SI](https://reksstudio.github.io/v2/manual/concepts/index.md#si-cassette): configurations of one spin manifold diagonalized in the SA-REKS orbitals, gives the states S0, T1, Q1, … · [FON](https://reksstudio.github.io/v2/manual/concepts/index.md#ensemble-fons): fractional occupation of an active orbital in the SA-REKS ensemble · [natural occupation](https://reksstudio.github.io/v2/manual/properties/index.md#natural-orbitals): eigenvalue of the active 1-RDM of one SI state.

## Compounds

* ![HZ: carbon skeleton](https://reksstudio.github.io/v2/figures/zeth/mol/HZ_skel.svg)

  [HZ](https://reksstudio.github.io/v2/main/results/zethrenes/hz/index.md "Heptazethrene") C<sub>28</sub>H<sub>16</sub>

  | kcal mol⁻¹ | ΔE<sub>ST</sub> | ΔE<sub>SQ</sub> |
  | - | - | - |
  | R<sub>cs</sub> | +27.7 | +96.7 |
  | R<sub>os</sub> | +20.6 | +88.0 |
  | R<sub>T</sub> | +14.0 | +85.1 |

* ![HZD: carbon skeleton](https://reksstudio.github.io/v2/figures/zeth/mol/HZD_skel.svg)

  [HZD](https://reksstudio.github.io/v2/main/results/zethrenes/hzd/index.md "Fused heptazethrene dimer") C<sub>46</sub>H<sub>24</sub>

  | kcal mol⁻¹ | ΔE<sub>ST</sub> | ΔE<sub>SQ</sub> |
  | - | - | - |
  | R<sub>cs</sub> | +16.8 | +57.0 |
  | R<sub>os</sub> | +5.3 | +47.0 |
  | R<sub>T</sub> | +3.8 | +47.5 |

* ![FP: carbon skeleton](https://reksstudio.github.io/v2/figures/zeth/mol/FP_skel.svg)

  [FP](https://reksstudio.github.io/v2/main/results/zethrenes/fp/index.md "Bis-fluoreno-pyrene") C<sub>38</sub>H<sub>20</sub>

  | kcal mol⁻¹ | ΔE<sub>ST</sub> | ΔE<sub>SQ</sub> |
  | - | - | - |
  | R<sub>cs</sub> | +20.6 | +74.7 |
  | R<sub>os</sub> | +6.8 | +63.0 |
  | R<sub>T</sub> | +4.5 | +61.6 |

* ![PIF: carbon skeleton](https://reksstudio.github.io/v2/figures/zeth/mol/PIF_skel.svg)

  [PIF](https://reksstudio.github.io/v2/main/results/zethrenes/pif/index.md "Bis-phenaleno-indenofluorene") C<sub>42</sub>H<sub>22</sub>

  | kcal mol⁻¹ | ΔE<sub>ST</sub> | ΔE<sub>SQ</sub> |
  | - | - | - |
  | R<sub>cs</sub> | +25.6 | +64.0 |
  | R<sub>os</sub> | +15.4 | +48.7 |
  | R<sub>T</sub> | +4.6† | +51.5† |

* ![IFD: carbon skeleton](https://reksstudio.github.io/v2/figures/zeth/mol/IFD_skel.svg)

  [IFD](https://reksstudio.github.io/v2/main/results/zethrenes/ifd/index.md "Linearly fused indenofluorene dimer") C<sub>34</sub>H<sub>18</sub>

  | kcal mol⁻¹ | ΔE<sub>ST</sub> | ΔE<sub>SQ</sub> |
  | - | - | - |
  | R<sub>cs</sub> | +32.5 | +75.3 |
  | R<sub>os</sub> | +28.0 | +68.1 |
  | R<sub>T</sub> | +10.6 | +58.4 |

* ![PF: carbon skeleton](https://reksstudio.github.io/v2/figures/zeth/mol/PF_skel.svg)

  [PF](https://reksstudio.github.io/v2/main/results/zethrenes/pf/index.md "Phenalenofluorene") C<sub>24</sub>H<sub>14</sub>

  | kcal mol⁻¹ | ΔE<sub>ST</sub> | ΔE<sub>SQ</sub> |
  | - | - | - |
  | R<sub>cs</sub> | +34.8 | +115.4 |
  | R<sub>os</sub> | +29.6 | +109.0 |
  | R<sub>T</sub> | +16.4 | +95.9 |

* ![IF: carbon skeleton](https://reksstudio.github.io/v2/figures/zeth/mol/IF_skel.svg)

  [IF](https://reksstudio.github.io/v2/main/results/zethrenes/if/index.md "Indenofluorene") C<sub>20</sub>H<sub>12</sub>

  | kcal mol⁻¹ | ΔE<sub>ST</sub> | ΔE<sub>SQ</sub> |
  | - | - | - |
  | R<sub>cs</sub> | +40.1 | +116.4 |
  | R<sub>T</sub> | +21.8 | +98.1 |

Carbon skeletons, one scale for all seven. ΔE<sub>ST</sub> = E(T1) − E(S0), ΔE<sub>SQ</sub> = E(Q1) − E(S0) / kcal mol⁻¹ at the largest computed active space, (10,10); † PIF R<sub>T</sub> at (8,8) ((10,10) not computed); the full ladder in the chart below. Hu et al. (2016) give no R<sub>os</sub> for IF. Each compound page: SI states joined across active spaces by excitation pattern, natural occupations, active orbitals and the input of every calculation.

## Spin gaps along the active-space ladder

ΔE_ST / kcal mol⁻¹ of HZ, HZD, FP, PIF, IFD, PF, IF, every geometry, (2,2) to (10,10); values in the table below

ΔE_SQ / kcal mol⁻¹ of HZ, HZD, FP, PIF, IFD, PF, IF, every geometry, (2,2) to (10,10); values in the table below

ΔE<sub>ST</sub> = E(T1) − E(S0), ΔE<sub>SQ</sub> = E(Q1) − E(S0) / kcal mol⁻¹; positive: T1 (Q1) above S0. One row per compound and geometry, the carbon skeleton under the compound name (one scale for all seven); one dot per active space, coloured and set from the top to the bottom of the row from (2,2) to (10,10); the larger dot is the largest computed active space. Right column: the value at (10,10); † at the largest computed active space instead: PIF R<sub>T</sub> at (8,8). ΔE<sub>SQ</sub> at (2,2): n/a (no 2S = 4 state in the SI space).

Table: ΔE<sub>ST</sub> and ΔE<sub>SQ</sub> / kcal mol⁻¹ per active space

ΔE<sub>ST</sub> / kcal mol<sup>−1</sup>

| Compound | Geometry | (2,2) | (4,4) | (6,6) | (8,8) | (10,10) |
| - | - | - | - | - | - | - |
| HZ | R<sub>cs</sub> | +26.4 | +27.0 | +28.1 | +27.4 | +27.7 |
| | R<sub>os</sub> | +17.3 | +19.4 | +20.3 | +20.1 | +20.6 |
| | R<sub>T</sub> | +10.4 | +12.7 | +13.5 | +13.7 | +14.0 |
| HZD | R<sub>cs</sub> | +14.5 | +16.0 | +16.3 | +17.1 | +16.8 |
| | R<sub>os</sub> | +2.9 | +6.1 | +4.8 | +5.4 | +5.3 |
| | R<sub>T</sub> | +1.8 | +4.4 | +3.3 | +3.8 | +3.8 |
| FP | R<sub>cs</sub> | +17.1 | +18.4 | +18.8 | +20.4 | +20.6 |
| | R<sub>os</sub> | +4.1 | +8.3 | +6.9 | +6.9 | +6.8 |
| | R<sub>T</sub> | +2.5 | +6.2 | +4.4 | +4.8 | +4.5 |
| PIF | R<sub>cs</sub> | +27.7 | +22.5 | +24.1 | +26.4 | +25.6 |
| | R<sub>os</sub> | +11.7 | +12.5 | +13.7 | +15.8 | +15.4 |
| | R<sub>T</sub> | +1.7 | +7.9 | +5.7 | +4.6 | – |
| IFD | R<sub>cs</sub> | +35.4 | +36.1 | +30.8 | +32.7 | +32.5 |
| | R<sub>os</sub> | +29.6 | +30.4 | +26.0 | +28.1 | +28.0 |
| | R<sub>T</sub> | +7.0 | +10.3 | +10.7 | +11.0 | +10.6 |
| PF | R<sub>cs</sub> | +30.3 | +32.2 | +33.7 | +35.0 | +34.8 |
| | R<sub>os</sub> | +24.3 | +26.4 | +28.2 | +29.4 | +29.6 |
| | R<sub>T</sub> | +11.0 | +14.2 | +15.4 | +15.9 | +16.4 |
| IF | R<sub>cs</sub> | +38.1 | +40.2 | – | +45.1 | +40.1 |
| | R<sub>T</sub> | +16.4 | +19.6 | +20.4 | +20.9 | +21.8 |

ΔE<sub>SQ</sub> / kcal mol<sup>−1</sup>

| Compound | Geometry | (2,2) | (4,4) | (6,6) | (8,8) | (10,10) |
| - | - | - | - | - | - | - |
| HZ | R<sub>cs</sub> | n/a | +100.3 | +104.1 | +101.7 | +96.7 |
| | R<sub>os</sub> | n/a | +90.5 | +94.1 | +92.1 | +88.0 |
| | R<sub>T</sub> | n/a | +83.1 | +86.4 | +85.0 | +85.1 |
| HZD | R<sub>cs</sub> | n/a | +60.6 | +58.6 | +58.1 | +57.0 |
| | R<sub>os</sub> | n/a | +51.5 | +49.5 | +48.4 | +47.0 |
| | R<sub>T</sub> | n/a | +52.1 | +50.1 | +49.0 | +47.5 |
| FP | R<sub>cs</sub> | n/a | +74.5 | +75.2 | +75.9 | +74.7 |
| | R<sub>os</sub> | n/a | +64.8 | +65.1 | +63.6 | +63.0 |
| | R<sub>T</sub> | n/a | +64.3 | +63.3 | +62.5 | +61.6 |
| PIF | R<sub>cs</sub> | n/a | +65.7 | +66.3 | +67.4 | +64.0 |
| | R<sub>os</sub> | n/a | +49.9 | +50.9 | +51.6 | +48.7 |
| | R<sub>T</sub> | n/a | +50.3 | +50.0 | +51.5 | – |
| IFD | R<sub>cs</sub> | n/a | +80.3 | +77.7 | +78.3 | +75.3 |
| | R<sub>os</sub> | n/a | +72.5 | +70.2 | +70.9 | +68.1 |
| | R<sub>T</sub> | n/a | +55.3 | +58.4 | +58.0 | +58.4 |
| PF | R<sub>cs</sub> | n/a | +113.7 | +115.0 | +116.5 | +115.4 |
| | R<sub>os</sub> | n/a | +106.9 | +108.9 | +109.9 | +109.0 |
| | R<sub>T</sub> | n/a | +92.9 | +94.6 | +95.0 | +95.9 |
| IF | R<sub>cs</sub> | n/a | +117.7 | – | +119.5 | +116.4 |
| | R<sub>T</sub> | n/a | +95.8 | +99.4 | +95.9 | +98.1 |

–: not computed; n/a: no 2S = 4 state in the SI space of this active space.

## Natural occupations of S0 along the ladder

n_i of S0 of HZ, HZD, FP, PIF, every geometry, (2,2) to (10,10); values in the table below

n_i of S0 of IFD, PF, IF, every geometry, (2,2) to (10,10); values in the table below

n<sub>i</sub>: natural occupations of the S0 SI state (eigenvalues of its active one-particle density), as the output prints them under "Natural occupation numbers and natural orbitals of the active space"; they sum to the number of active electrons. One row per compound and geometry, the carbon skeleton under the compound name (one scale for all seven); one dot per natural orbital at each active space, coloured and set from the top to the bottom of the row from (2,2) to (10,10); axis 0.0 to 2.0. The table gives n<sub>i</sub> in the printed order.

Table: natural occupations of S0 per active space

Natural occupations n<sub>i</sub> of S0, printed order

| Compound | Geometry | (2,2) | (4,4) | (6,6) | (8,8) | (10,10) |
| - | - | - | - | - | - | - |
| HZ | R<sub>cs</sub> | 1.9879 0.0121 | 1.9875 1.9588 0.0414 0.0123 | 1.9913 1.9816 1.9347 0.0656 0.0180 0.0088 | 1.9859 1.9879 1.9741 1.9135 0.0873 0.0255 0.0121 0.0137 | 1.9902 1.9837 1.9830 1.9696 1.9084 0.0925 0.0299 0.0171 0.0158 0.0099 |
| | R<sub>os</sub> | 1.8517 0.1483 | 1.9840 1.8447 0.1554 0.0159 | 1.9885 1.9778 1.8535 0.1468 0.0219 0.0115 | 1.9850 1.9852 1.9707 1.8341 0.1666 0.0290 0.0147 0.0147 | 1.9904 1.9822 1.9807 1.9670 1.8304 0.1705 0.0325 0.0193 0.0172 0.0097 |
| | R<sub>T</sub> | 1.6885 0.3115 | 1.9824 1.7029 0.2971 0.0176 | 1.9868 1.9754 1.7302 0.2700 0.0244 0.0132 | 1.9841 1.9838 1.9683 1.7297 0.2710 0.0315 0.0161 0.0156 | 1.9957 1.9823 1.9812 1.9664 1.7282 0.2727 0.0333 0.0187 0.0174 0.0040 |
| HZD | R<sub>cs</sub> | 1.8965 0.1035 | 1.9643 1.8567 0.1432 0.0357 | 1.9824 1.9516 1.8343 0.1660 0.0484 0.0174 | 1.9862 1.9783 1.9434 1.8025 0.1979 0.0565 0.0213 0.0139 | 1.9894 1.9838 1.9748 1.9357 1.7945 0.2059 0.0644 0.0247 0.0162 0.0106 |
| | R<sub>os</sub> | 1.4426 0.5574 | 1.9733 1.3827 0.6174 0.0266 | 1.9805 1.9514 1.3976 0.6024 0.0487 0.0195 | 1.9843 1.9768 1.9427 1.3981 0.6020 0.0573 0.0231 0.0158 | 1.9878 1.9810 1.9724 1.9344 1.4012 0.5989 0.0657 0.0274 0.0191 0.0121 |
| | R<sub>T</sub> | 1.3573 0.6427 | 1.9802 1.3091 0.6910 0.0198 | 1.9814 1.9585 1.3106 0.6894 0.0416 0.0185 | 1.9855 1.9781 1.9507 1.3084 0.6917 0.0493 0.0219 0.0145 | 1.9879 1.9820 1.9735 1.9427 1.3099 0.6902 0.0574 0.0264 0.0180 0.0120 |
| FP | R<sub>cs</sub> | 1.9379 0.0621 | 1.9747 1.8811 0.1200 0.0242 | 1.9950 1.9667 1.8585 0.1440 0.0307 0.0050 | 1.9915 1.9895 1.9649 1.8694 0.1344 0.0341 0.0079 0.0082 | 1.9892 1.9918 1.9863 1.9599 1.8716 0.1360 0.0386 0.0099 0.0117 0.0049 |
| | R<sub>os</sub> | 1.5081 0.4919 | 1.9824 1.4158 0.5840 0.0179 | 1.9923 1.9728 1.4518 0.5481 0.0272 0.0078 | 1.9918 1.9890 1.9665 1.4937 0.5076 0.0343 0.0096 0.0076 | 1.9878 1.9915 1.9872 1.9622 1.5010 0.5003 0.0382 0.0116 0.0082 0.0121 |
| | R<sub>T</sub> | 1.4187 0.5813 | 1.9872 1.3352 0.6647 0.0128 | 1.9962 1.9851 1.3781 0.6221 0.0165 0.0020 | 1.9918 1.9901 1.9725 1.3893 0.6114 0.0286 0.0076 0.0086 | 1.9898 1.9915 1.9888 1.9682 1.3898 0.6110 0.0323 0.0081 0.0103 0.0102 |
| PIF | R<sub>cs</sub> | 1.9999 0.0001 | 1.9632 1.9465 0.0512 0.0391 | 1.9954 1.9526 1.9336 0.0645 0.0506 0.0034 | 1.9884 1.9875 1.9471 1.9271 0.0714 0.0575 0.0103 0.0108 | 1.9933 1.9893 1.9883 1.9427 1.9184 0.0809 0.0607 0.0094 0.0106 0.0063 |
| | R<sub>os</sub> | 1.9624 0.0376 | 1.9350 1.8028 0.1957 0.0666 | 1.9944 1.9264 1.8154 0.1827 0.0769 0.0040 | 1.9876 1.9864 1.9219 1.8215 0.1751 0.0848 0.0108 0.0120 | 1.9915 1.9878 1.9865 1.9143 1.8046 0.1925 0.0915 0.0107 0.0128 0.0078 |
| | R<sub>T</sub> | 1.4547 0.5453 | 1.9696 1.3671 0.6311 0.0322 | 1.9949 1.9644 1.3972 0.6023 0.0365 0.0048 | 1.9921 1.9935 1.9638 1.4128 0.5881 0.0353 0.0089 0.0055 | – |
| IFD | R<sub>cs</sub> | 2.0000 0.0000 | 1.9994 1.9945 0.0042 0.0020 | 1.9585 1.9947 1.9499 0.0539 0.0400 0.0031 | 1.9921 1.9560 1.9896 1.9418 0.0604 0.0458 0.0081 0.0062 | 1.9954 1.9904 1.9567 1.9884 1.9392 0.0625 0.0470 0.0085 0.0078 0.0041 |
| | R<sub>os</sub> | 1.9998 0.0002 | 1.9994 1.9909 0.0074 0.0023 | 1.9482 1.9941 1.9299 0.0740 0.0503 0.0035 | 1.9915 1.9461 1.9886 1.9216 0.0807 0.0557 0.0089 0.0067 | 1.9952 1.9899 1.9468 1.9874 1.9190 0.0829 0.0569 0.0093 0.0084 0.0043 |
| | R<sub>T</sub> | 1.6638 0.3362 | 1.9988 1.6084 0.3906 0.0022 | 1.9421 1.9937 1.5864 0.4148 0.0583 0.0046 | 1.9924 1.9356 1.9883 1.6311 0.3704 0.0652 0.0098 0.0072 | 1.9947 1.9908 1.9398 1.9875 1.6597 0.3440 0.0606 0.0110 0.0093 0.0025 |
| PF | R<sub>cs</sub> | 1.9956 0.0044 | 1.9956 1.9803 0.0198 0.0043 | 1.9872 1.9925 1.9561 0.0448 0.0065 0.0129 | 1.9815 1.9838 1.9915 1.9465 0.0548 0.0076 0.0158 0.0185 | 1.9895 1.9781 1.9798 1.9847 1.9390 0.0627 0.0199 0.0140 0.0218 0.0107 |
| | R<sub>os</sub> | 1.9844 0.0156 | 1.9947 1.9613 0.0388 0.0051 | 1.9859 1.9916 1.9359 0.0651 0.0070 0.0144 | 1.9813 1.9824 1.9904 1.9272 0.0743 0.0082 0.0173 0.0190 | 1.9893 1.9773 1.9786 1.9835 1.9193 0.0825 0.0229 0.0150 0.0206 0.0110 |
| | R<sub>T</sub> | 1.7289 0.2711 | 1.9936 1.7749 0.2252 0.0064 | 1.9836 1.9901 1.7800 0.2205 0.0076 0.0181 | 1.9814 1.9781 1.9888 1.7975 0.2039 0.0095 0.0224 0.0185 | 1.9929 1.9809 1.9773 1.9838 1.8031 0.1978 0.0238 0.0137 0.0186 0.0081 |
| IF | R<sub>cs</sub> | 1.9969 0.0031 | 1.9949 1.9824 0.0176 0.0050 | – | 1.9849 1.9871 1.9834 1.9669 0.0355 0.0155 0.0131 0.0137 | 1.9857 1.9794 1.9803 1.9754 1.9593 0.0466 0.0204 0.0194 0.0219 0.0115 |
| | R<sub>T</sub> | 1.7664 0.2336 | 1.9941 1.8055 0.1945 0.0059 | 1.9914 1.9879 1.8315 0.1690 0.0078 0.0125 | 1.9892 1.9862 1.9840 1.8534 0.1486 0.0149 0.0132 0.0105 | 1.9832 1.9855 1.9816 1.9776 1.8319 0.1707 0.0185 0.0208 0.0175 0.0127 |

–: not computed.

## REKS vs experiment

T1 = E(T1) at R<sub>T</sub> − E(S0) at R<sub>os</sub>: Δ −0.01 to +0.08 eV, 4 molecules (2 cores); vertical emission: Δ −0.25 to −0.22 eV · Absorption maximum: Δ +0.27 to +0.81 eV, 9 molecules (5 cores)

* experiment: substituted derivative (dashed: parent HZ, secondary source ‡); T1 in polystyrene, absorption maximum in solution
* REKS, parent hydrocarbon, isolated molecule (gas phase), one dot per active space, the larger at the last:
* (2,2)
* (4,4)
* (6,6)
* (8,8)
* (10,10)
* Δ = REKS(10,10) − experiment / eV

E(T1) − E(S0) / eV, experiment and REKS(10,10): 4 molecules; values in Table 1 of the details

S0 → Sn vertical at R<sub>os</sub> (IF: R<sub>cs</sub>), Sn the H→L-led singlet of largest f; experiment E = 1239.84 / λ(nm)

Absorption maximum / eV, experiment and REKS(10,10): 9 molecules; values in Table 2 of the details

(8,8) → (10,10): T1 +0.07 / +0.10 eV (HZ / PF), absorption −0.02 to +0.10 eV; every active space in the details.

Experiment. T1: Pt-porphyrin-sensitized phosphorescence (Lukman et al. 2017). Absorption: band maximum in solution (Hu et al. 2016, Li et al. 2012; ‡ Hu and Wu 2017, review). Substituents: mesityl (M), pentafluorophenyl (F), TIPS-ethynyl (TIPS), 3,5-bis(CF3)phenyl (CF3).

REKS. Parent hydrocarbon without substituents, isolated molecule (gas phase); SI-SA-REKS(10,10)/BH\&HLYP/cc-pVTZ at the UCAM-B3LYP/6-31G\* geometries of Hu et al. (2016), not reoptimized; electronic energies without zero-point energy; absorption as a vertical energy.

Tables, definitions and every active space · further measurements: E(S1) absorption (Lukman et al. 2017), PF-F 627 nm, FP-M SQUID 2J, FP-M 1096 nm, PF-M 436 nm

T1: E(T1) at R<sub>T</sub> − E(S0) at R<sub>os</sub>, each state at its own geometry; vertical emission: E(T1) − E(S0) at R<sub>T</sub>

Absorption: E(Sn) − E(S0) at R<sub>os</sub> (IF: R<sub>cs</sub>), vertical (no Sn geometry computed); Sn: the H→L-led singlet of largest f; experiment E = 1239.84 / λ(nm)

Δ = REKS − experiment, from energies in E<sub>h</sub>

E(T1) − E(S0) / eV; REKS at (10,10)

| Molecule | Exp. PS | REKS | Δ | Exp. film | Vert. | Δ vert. |
| - | - | - | - | - | - | - |
| HZ-M | 0.85 | 0.85 | 0.00 | 0.84 | 0.61 | −0.24 |
| HZ-F | 0.86 | 0.85 | −0.01 | 0.89 | 0.61 | −0.25 |
| HZ-TIPS | 0.83 | 0.85 | +0.02 | 0.82 | 0.61 | −0.22 |
| PF-M | 0.93 | 1.01 | +0.08 | 0.92 | 0.71 | −0.22 |

Exp.: Lukman et al. (2017), Table 1, Pt-porphyrin-sensitized phosphorescence after triplet energy transfer from Pt-octaethylporphyrin (PtOEP). PS: column “sol”, read as the polystyrene sample of the Methods (molecule:PtOEP:polystyrene 1:5:94 wt %, drop-cast, for isolated chromophores); derived from the Methods, not stated by the authors. Film: column “film”, molecule:PtOEP 95:5 to 98:2 wt %. Vert.: REKS vertical emission.

E(T1) at R<sub>T</sub> − E(S0) at R<sub>os</sub> corresponds to the 0-0 band without zero-point energy, the vertical emission to the band maximum; Lukman et al. (2017) do not state which one Table 1 gives (Supplementary Fig. 1, not archived).

Absorption maximum / eV; REKS at (10,10)

| Molecule | λ / nm | Exp. | REKS | Δ | Sn · f |
| - | - | - | - | - | - |
| HZ (parent) ‡ | 586 | 2.116 | 2.389 | +0.27 | S1 · 1.42 |
| HZ-M | 613 | 2.023 | 2.389 | +0.37 | S1 · 1.42 |
| HZ-F | 610 | 2.033 | 2.389 | +0.36 | S1 · 1.42 |
| HZ-TIPS | 634 | 1.956 | 2.389 | +0.43 | S1 · 1.42 |
| PF-M | 627 | 1.977 | 2.293 | +0.32 | S1 · 0.83 |
| FP-M | 836 | 1.483 | 2.294 | +0.81 | S2 · 1.08 |
| IFD-CF3 | 722 | 1.717 | 2.429 | +0.71 | S3 · 1.43 |
| IF-M | 515 | 2.407 | 3.017 | +0.61 | S2 · 0.90 |
| IF-CF3 | 541 | 2.292 | 3.017 | +0.72 | S2 · 0.90 |

Solvent: CH<sub>2</sub>Cl<sub>2</sub>: HZ-M, PF-M, FP-M, IFD-CF3, IF-M; toluene: HZ-F, IF-CF3 (Hu et al. 2016, SI Fig. S12 caption); CHCl<sub>3</sub>: HZ-TIPS (Li et al. 2012, Fig. 1); not given: HZ (parent).

Hu et al. 2016, p. 1068, on the one-photon spectra: “Their one-photon absorption spectra (OPA) in dichloromethane (DCM) are shown in Figure 2d and Figure S12”; the SI Fig. S12 caption names toluene.

The authors' TD-DFT (B3LYP/6-31G\*) assigns the band to HOMO→LUMO for HZ-M, PF-M, IFD-CF3 and IF-M. HZ-F, HZ-TIPS and IF-CF3: the same band of the core, not assigned in the source. FP-M: the band of largest ε<sub>max</sub>, not assigned in the source; its H→L pairing is ours.

‡ HZ (parent): Clar and Macpherson (1962) as quoted by Hu and Wu 2017 (review), p. 223.

REKS along the active-space ladder / eV

| Core | | (2,2) | (4,4) | (6,6) | (8,8) | (10,10) | R<sub>cs</sub> |
| - | - | - | - | - | - | - | - |
| HZ | T1 | 0.637 | 0.735 | 0.757 | 0.776 | 0.850 | – |
| | T1 kcal | 14.69 | 16.94 | 17.47 | 17.89 | 19.60 | – |
| | vert. | 0.449 | 0.553 | 0.584 | 0.593 | 0.605 | – |
| | min | 0.716 | 0.738 | 0.757 | 0.776 | 0.850 | – |
| | Sn | 2.126 | 2.282 | 2.138 | 2.294 | 2.389 | 2.436 |
| PF | T1 | 0.796 | 0.850 | 0.893 | 0.915 | 1.014 | – |
| | T1 kcal | 18.36 | 19.61 | 20.59 | 21.10 | 23.39 | – |
| | vert. | 0.479 | 0.615 | 0.666 | 0.688 | 0.712 | – |
| | min | 0.842 | 0.869 | 0.905 | 0.924 | 1.020 | – |
| | Sn | 2.100 | 2.208 | 2.226 | 2.255 | 2.293 | 2.477 |
| FP | Sn | 2.004 | 2.343 | 2.201 | 2.254 | 2.294 | 1.931 |
| IFD | Sn | 1.969 | 1.898 | 2.189 | 2.446 | 2.429 | 2.547 |
| IF | Sn | 2.996 | 2.905 | – | 2.949 | 3.017 | 3.017 |

T1: E(T1) at R<sub>T</sub> − E(S0) at R<sub>os</sub>, in eV and in kcal mol⁻¹; vert.: vertical emission at R<sub>T</sub>; min: lowest T1 − lowest S0 over the computed geometries of the same active space (lowest at R<sub>T</sub> and R<sub>os</sub> except S0 at R<sub>cs</sub>: HZ (2,2), (4,4); PF (2,2), (4,4), (6,6), (8,8), (10,10)).

Sn: S0 → Sn (H→L) at R<sub>os</sub> (IF: R<sub>cs</sub>), Sn chosen per active space by the rule of Table 2.

R<sub>cs</sub>: the same quantity at (10,10) and R<sub>cs</sub>. –: not computed.

Further measurements of the same molecules / eV; REKS at (10,10)

| Molecule | Exp. | Exp. film | REKS | Δ | Sn · f |
| - | - | - | - | - | - |
| HZ-M | 2.02 | 1.84 | 2.389 | +0.37 | S1 · 1.42 |
| HZ-F | 2.01 | 1.82 | 2.389 | +0.38 | S1 · 1.42 |
| HZ-TIPS | 1.95 | 1.70 | 2.389 | +0.44 | S1 · 1.42 |
| PF-M | 1.85 | 1.81 | 2.293 | +0.44 | S1 · 0.83 |
| PF-F | 1.977 | – | 2.293 | +0.32 | S1 · 0.83 |

HZ-M, HZ-F, HZ-TIPS and PF-M: E(S1) abs of Lukman et al. 2017, Table 1, in CHCl<sub>3</sub>, 0.1 mM (Methods), peak or onset not stated; film: thin film; Δ for the solution value.

PF-F: absorption maximum 627 nm, Hu et al. 2016, Table 2, in toluene (SI Fig. S12 caption); λ<sub>abs</sub>, ε<sub>max</sub> and τ printed as for PF-M.

Other measured quantities; REKS at (10,10)

| Molecule | Quantity | Exp. | REKS | Δ | Unit |
| - | - | - | - | - | - |
| FP-M | 2J | −1.69 | −6.20 | −4.51 | kcal mol<sup>−1</sup> |
| FP-M | 1096 nm | 1.131 | 1.537 | +0.41 | eV |
| PF-M | 436 nm | 2.844 | 3.436 | +0.59 | eV |

FP-M 2J: 2J/k<sub>B</sub> = ΔE<sub>S−T</sub> = −852.6 K (Hu et al. 2016, p. 1069), SQUID, powder, Bleaney-Bowers fit; REKS: E(S0) at R<sub>os</sub> − E(T1) at R<sub>T</sub>.

FP-M 1096 nm: absorption band assigned by the authors to H,H→L,L (Hu et al. 2016, Table 2); REKS: S1 (H,H→L,L), f 0.00, at R<sub>os</sub>.

PF-M 436 nm: absorption band assigned by the authors to H−1→L (Hu et al. 2016, Table 2); REKS: S3 (H−1→L), f 0.35, at R<sub>os</sub>.

Sources: Lukman et al. 2017, Table 1 (HZ-M, HZ-F, HZ-TIPS, PF-M), [doi:10.1021/jacs.7b10762](https://doi.org/10.1021/jacs.7b10762); Hu and Wu 2017 ‡, p. 223 (HZ (parent)), [doi:10.1139/cjc-2016-0568](https://doi.org/10.1139/cjc-2016-0568); Hu et al. 2016, Table 2, p. 1069 (HZ-M, HZ-F, PF-M, FP-M, IFD-CF3, IF-M, IF-CF3, PF-F), [doi:10.1021/jacs.5b12532](https://doi.org/10.1021/jacs.5b12532); Li et al. 2012, Table 1 (HZ-TIPS), [doi:10.1021/ja304618v](https://doi.org/10.1021/ja304618v).

## Setup and reference

### Setup

Method: SA-REKS(M,M), ensemble PPS + OSSs + all-α determinant; SI-SA-REKS over the full catalog for every spin the input lists; states shown for 2S = 0, 2, 4

Active spaces: (2,2), (4,4), (6,6), (8,8), (10,10); SI configurations at (10,10), 2S = 0: 29 082

Functional, basis: BH\&HLYP/cc-pVTZ

Geometries: R<sub>cs</sub>, R<sub>os</sub>, R<sub>T</sub>: optima of the closed-shell singlet, the broken-symmetry open-shell singlet and the triplet of the parent hydrocarbons (SI appendix blocks “Singlet Closed Shell”, “Singlet Biradical Open Shell”, “Triplet”; UCAM-B3LYP/6-31G\*, Hu et al. 2016, SI p. S16); three per compound, two for IF

Not computed: IF R<sub>cs</sub> (6,6), PIF R<sub>T</sub> (10,10)

Inputs: as run, on the compound pages; starting orbitals read from a seed file (RKS or ROHF orbitals; for HZ and HZD the orbitals of an earlier REKS(2,2) run), active pairs set per rung

Code: Psi4 kk/reks.v42; builds b0c2d45a7 (fenrir psi4-reks, 10 runs, 2026-10-12); d40267fc2 (fenrir psi4-multiscf, 82 runs, 2026-10-13 to 2026-10-16); 2424fb773 (hawk psi4-reks, 6 runs, 2026-10-16); the .out headers carry no revision

Numbers: every number from the .out of its calculation; orbital energies and FONs of the SA-REKS SCF, states and natural occupations of the SI

Experiment: 4 sources, cited in the experiment block

### Reference

Geometries: Hu et al., J. Am. Chem. Soc. 2016, 138, 1065, doi:10.1021/jacs.5b12532.

**Provenance:** to be added

**Scope:** Calculated values: these calculations. Experiment: values as printed in the cited sources, in the experiment block; wavelengths there also in eV (E = 1239.84 / λ).

## Run, ask, cite

* Catalogues (8,8) and (10,10) not installed; their 39 inputs run on request. Ask via [Contact](https://reksstudio.github.io/v2/docs/index.md#contact).
* [Manual: Start](https://reksstudio.github.io/v2/manual/index.md#overview) · [Install](https://reksstudio.github.io/v2/docs/index.md#install) · [Cite](https://reksstudio.github.io/v2/docs/index.md#cite) · [Contact](https://reksstudio.github.io/v2/docs/index.md#contact)
* [Back to the Results index](https://reksstudio.github.io/v2/main/results/index.md#row-zethrenes)

Other results: [Exactness](https://reksstudio.github.io/v2/main/results/exactness/index.md) · [H chains](https://reksstudio.github.io/v2/main/results/h-chains/index.md) · [Bond breaking](https://reksstudio.github.io/v2/main/results/bond-breaking/index.md) · [C<sub>2</sub>](https://reksstudio.github.io/v2/main/results/c2/index.md) · [QUEST](https://reksstudio.github.io/v2/main/results/quest/index.md) · [TTR](https://reksstudio.github.io/v2/main/results/ttr/index.md) · [C<sub>2</sub>H<sub>4</sub> photochemistry](https://reksstudio.github.io/v2/main/results/c2h4-photochemistry/index.md)
