# C₂H₂: SSR(6,6) dissociation — REKS Studio

HTML: <https://reksstudio.github.io/v2/main/results/dissociation/c2h2/>

Install: branch kk/reks.studio of <https://github.com/ConstLike/psi4>.

Site index: <https://reksstudio.github.io/v2/llms.txt>. Every page: `https://reksstudio.github.io/v2/<page>/index.md` (markdown). Option cards: `https://reksstudio.github.io/v2/options/<NAME>.md`. Raw files: file URL + `.txt` (text/plain), e.g. `https://reksstudio.github.io/v2/inputs/<file>.txt`.

# C<sub>2</sub>H<sub>2</sub>: SSR(6,6) dissociation

Acetylene (C<sub>2</sub>H<sub>2</sub>) shows analogous behavior. The pathway correlating with triple C≡C character dissociates to two CH radicals in their <sup>4</sup>Σ<sup>−</sup> states \[[Siegbahn 1981](https://reksstudio.github.io/v2/manual/reference/index.md#siegbahn1981-acetylene)]. Since isolated CH's ground state is <sup>2</sup>Π, an avoided crossing occurs between pathways converging to the (<sup>4</sup>Σ<sup>−</sup>)CH + (<sup>4</sup>Σ<sup>−</sup>)CH and (<sup>2</sup>Π)CH + (<sup>2</sup>Π)CH asymptotes \[[Siegbahn 1981](https://reksstudio.github.io/v2/manual/reference/index.md#siegbahn1981-acetylene)]. SSR(6,6) captures this crossing accurately, with the <sup>1</sup>Σ<sub>g</sub><sup>+</sup> PECs converging smoothly to their limits after traversing the crossing region. Together, these results show REKS/SSR delivers a chemically sound description of multiple-bond cleavage while resolving fine topological features of complex dissociation pathways.

BH\&HLYP/aug-cc-pVTZ · 161SI-5SA-REKS(6,6) · R 0.80–5.00 Å · 85 points

[Curves](#curves) · [Numbers](#numbers) · [Active orbitals](#orbitals) · [Calculations](#calculations)

![C₂H₂: drawing at R_e of S0](https://reksstudio.github.io/v2/figures/dissociation/c2h2.svg)

Geometry at R<sub>e</sub> of S0.

* C
* H

## Curves

C₂H₂ SSR(6,6): S0 energy along R(C–C) from 0.8 to 5 Å, states S1; natural occupations below

C₂H₂ SSR(6,6): S0 energy along R(C–C) from 0.8 to 5 Å, states S1; natural occupations below

Singlet PECs of acetylene under C≡C stretch with fixed experimental C–H bonds \[[Kuchitsu 1998](https://reksstudio.github.io/v2/manual/reference/index.md#kuchitsu1998-structures)]. Short dashed lines: asymptotic energies of two C–H fragments in ground (<sup>2</sup>Π) and lowest excited (<sup>4</sup>Σ<sup>−</sup>) states. Lower panel: natural occupations of S0 (solid) and S1 (dashed). Thin vertical lines: S0 changes state; dashed ticks: S1.

## Numbers

R<sub>e</sub> 1.205 Å (rigid R<sub>CC</sub> scan)

Table: S0, named states and n<sub>i</sub> of S0 at every R

| R / Å | E(S0) / E<sub>h</sub> | E(S1) / E<sub>h</sub> | n(σ<sub>g</sub>) | n(π<sub>u</sub>) | n(π<sub>u</sub>) | n(π<sub>g</sub>) | n(π<sub>g</sub>) | n(σ<sub>u</sub>) |
| - | - | - | - | - | - | - | - | - |
| 0.800 | -76.55685619 | -76.14946485 | 1.99961 | 1.99815 | 1.99815 | 0.00201 | 0.00201 | 0.00007 |
| 0.850 | -76.79859838 | -76.40816358 | 1.99958 | 1.99733 | 1.99733 | 0.00284 | 0.00284 | 0.00007 |
| 0.900 | -76.97589115 | -76.59977453 | 1.99956 | 1.99626 | 1.99626 | 0.00392 | 0.00392 | 0.00007 |
| 0.950 | -77.10328746 | -76.74915777 | 1.99955 | 1.99492 | 1.99492 | 0.00526 | 0.00526 | 0.00008 |
| 1.000 | -77.19217303 | -76.86199537 | 1.99955 | 1.99327 | 1.99327 | 0.00691 | 0.00691 | 0.00009 |
| 1.050 | -77.25139277 | -76.94381997 | 1.99955 | 1.99126 | 1.99126 | 0.00891 | 0.00891 | 0.00010 |
| 1.100 | -77.28796118 | -77.00168005 | 1.99956 | 1.98883 | 1.98883 | 0.01133 | 0.01133 | 0.00012 |
| 1.150 | -77.30729310 | -77.04193673 | 1.99958 | 1.98591 | 1.98591 | 0.01423 | 0.01423 | 0.00015 |
| 1.200 | -77.31361268 | -77.06835372 | 1.99959 | 1.98240 | 1.98240 | 0.01770 | 0.01770 | 0.00020 |
| 1.250 | -77.31027972 | -77.08387797 | 1.99959 | 1.97822 | 1.97822 | 0.02184 | 0.02184 | 0.00029 |
| 1.300 | -77.29990728 | -77.09088208 | 1.99958 | 1.97325 | 1.97325 | 0.02674 | 0.02674 | 0.00043 |
| 1.350 | -77.28458539 | -77.09108770 | 1.99954 | 1.96730 | 1.96730 | 0.03261 | 0.03260 | 0.00064 |
| 1.400 | -77.26608101 | -77.08615480 | 1.99946 | 1.95977 | 1.95977 | 0.04002 | 0.04002 | 0.00096 |
| 1.450 | -77.24557557 | -77.07753996 | 1.99929 | 1.94965 | 1.94965 | 0.05000 | 0.05000 | 0.00142 |
| 1.500 | -77.22320479 | -77.06602069 | 1.99898 | 1.93753 | 1.93753 | 0.06194 | 0.06194 | 0.00206 |
| 1.550 | -77.19948157 | -77.05255501 | 1.99843 | 1.92447 | 1.92447 | 0.07482 | 0.07482 | 0.00299 |
| 1.600 | -77.17518428 | -77.03776991 | 1.99755 | 1.91053 | 1.91053 | 0.08854 | 0.08854 | 0.00430 |
| 1.650 | -77.15093780 | -77.02212380 | 1.99622 | 1.89553 | 1.89553 | 0.10330 | 0.10330 | 0.00611 |
| 1.700 | -77.12720325 | -77.00601860 | 1.99431 | 1.87922 | 1.87922 | 0.11934 | 0.11934 | 0.00857 |
| 1.750 | -77.10430692 | -76.99004463 | 1.99168 | 1.86131 | 1.86131 | 0.13693 | 0.13693 | 0.01184 |
| 1.800 | -77.08246478 | -76.97547163 | 1.98816 | 1.84152 | 1.84152 | 0.15635 | 0.15635 | 0.01611 |
| 1.850 | -77.06181214 | -76.96105609 | 1.98358 | 1.81963 | 1.81963 | 0.17779 | 0.17779 | 0.02158 |
| 1.900 | -77.04243052 | -76.94688439 | 1.97774 | 1.79551 | 1.79551 | 0.20137 | 0.20137 | 0.02851 |
| 1.950 | -77.02437718 | -76.93300064 | 1.97039 | 1.76919 | 1.76919 | 0.22684 | 0.22683 | 0.03757 |
| 2.000 | -77.00767233 | -76.91937832 | 1.96119 | 1.73778 | 1.73778 | 0.25286 | 0.25285 | 0.05754 |
| 2.050 | -76.99216600 | -76.90596660 | 1.94976 | 1.69729 | 1.69729 | 0.28032 | 0.28031 | 0.09502 |
| 2.100 | -76.97815671 | -76.89638697 | 1.93538 | 1.65093 | 1.65093 | 0.31085 | 0.31085 | 0.14105 |
| 2.150 | -76.96569397 | -76.89125453 | 1.91661 | 1.59766 | 1.59766 | 0.34236 | 0.34236 | 0.20334 |
| 2.200 | -76.95517110 | -76.88881725 | 1.89075 | 1.54866 | 1.54866 | 0.37820 | 0.37820 | 0.25554 |
| 2.250 | -76.94631915 | -76.88862405 | 1.85944 | 1.50509 | 1.50670 | 0.42255 | 0.42113 | 0.28509 |
| 2.300 | -76.93862081 | -76.89156697 | 1.82546 | 1.45793 | 1.46117 | 0.47156 | 0.46857 | 0.31531 |
| 2.350 | -76.93191706 | -76.89740976 | 1.78950 | 1.41105 | 1.41507 | 0.52128 | 0.51738 | 0.34573 |
| 2.400 | -76.92599639 | -76.90276984 | 1.75248 | 1.36838 | 1.37178 | 0.56674 | 0.56336 | 0.37724 |
| 2.450 | -76.92071835 | -76.90763424 | 1.71474 | 1.32947 | 1.33163 | 0.60881 | 0.60667 | 0.40868 |
| 2.500 | -76.91619259 | -76.91202602 | 1.67627 | 1.29466 | 1.29565 | 0.64771 | 0.64673 | 0.43899 |
| 2.550 | -76.91605565 | -76.91229829 | 1.99914 | 0.50352 | 0.50353 | 0.50250 | 0.50250 | 1.98882 |
| 2.600 | -76.91958333 | -76.90896500 | 1.99906 | 0.50303 | 0.50304 | 0.50239 | 0.50238 | 1.99010 |
| 2.650 | -76.92275913 | -76.90609702 | 1.99900 | 0.50267 | 0.50268 | 0.50227 | 0.50226 | 1.99111 |
| 2.700 | -76.92561777 | -76.90364046 | 1.99894 | 0.50240 | 0.50240 | 0.50216 | 0.50215 | 1.99194 |
| 2.750 | -76.92818555 | -76.90154932 | 1.99889 | 0.50219 | 0.50219 | 0.50206 | 0.50204 | 1.99263 |
| 2.800 | -76.93047244 | -76.89975872 | 1.99884 | 0.50202 | 0.50203 | 0.50196 | 0.50195 | 1.99321 |
| 2.850 | -76.93252355 | -76.89822342 | 1.99879 | 0.50188 | 0.50189 | 0.50187 | 0.50186 | 1.99371 |
| 2.900 | -76.93434959 | -76.89691209 | 1.99875 | 0.50178 | 0.50179 | 0.50178 | 0.50177 | 1.99413 |
| 2.950 | -76.93597669 | -76.89577435 | 1.99870 | 0.50168 | 0.50169 | 0.50172 | 0.50170 | 1.99451 |
| 3.000 | -76.93743157 | -76.89478015 | 1.99866 | 0.50161 | 0.50161 | 0.50165 | 0.50164 | 1.99484 |
| 3.050 | -76.93874122 | -76.89390739 | 1.99862 | 0.50155 | 0.50154 | 0.50159 | 0.50157 | 1.99513 |
| 3.100 | -76.93992767 | -76.89313760 | 1.99859 | 0.50149 | 0.50148 | 0.50154 | 0.50152 | 1.99538 |
| 3.150 | -76.94100822 | -76.89245670 | 1.99855 | 0.50144 | 0.50143 | 0.50149 | 0.50147 | 1.99562 |
| 3.200 | -76.94199301 | -76.89185641 | 1.99852 | 0.50140 | 0.50138 | 0.50145 | 0.50143 | 1.99582 |
| 3.250 | -76.94288820 | -76.89132327 | 1.99849 | 0.50136 | 0.50134 | 0.50141 | 0.50138 | 1.99601 |
| 3.300 | -76.94369984 | -76.89085074 | 1.99846 | 0.50133 | 0.50131 | 0.50138 | 0.50135 | 1.99618 |
| 3.350 | -76.94443346 | -76.89042487 | 1.99843 | 0.50130 | 0.50128 | 0.50135 | 0.50132 | 1.99633 |
| 3.400 | -76.94509625 | -76.89003311 | 1.99840 | 0.50128 | 0.50125 | 0.50132 | 0.50129 | 1.99646 |
| 3.450 | -76.94569644 | -76.88967977 | 1.99838 | 0.50126 | 0.50122 | 0.50130 | 0.50126 | 1.99659 |
| 3.500 | -76.94624363 | -76.88935397 | 1.99836 | 0.50123 | 0.50120 | 0.50127 | 0.50124 | 1.99670 |
| 3.550 | -76.94674558 | -76.88905464 | 1.99833 | 0.50122 | 0.50118 | 0.50126 | 0.50121 | 1.99680 |
| 3.600 | -76.94724277 | -76.88881639 | 1.99831 | 0.50120 | 0.50116 | 0.50123 | 0.50120 | 1.99690 |
| 3.650 | -76.94767846 | -76.88856295 | 1.99829 | 0.50118 | 0.50114 | 0.50122 | 0.50118 | 1.99698 |
| 3.700 | -76.94808998 | -76.88833275 | 1.99828 | 0.50117 | 0.50113 | 0.50120 | 0.50116 | 1.99706 |
| 3.750 | -76.94847873 | -76.88812272 | 1.99826 | 0.50115 | 0.50111 | 0.50119 | 0.50115 | 1.99714 |
| 3.800 | -76.94884401 | -76.88793091 | 1.99824 | 0.50114 | 0.50110 | 0.50117 | 0.50114 | 1.99720 |
| 3.850 | -76.94918644 | -76.88775246 | 1.99823 | 0.50113 | 0.50109 | 0.50116 | 0.50113 | 1.99727 |
| 3.900 | -76.94950584 | -76.88758554 | 1.99822 | 0.50112 | 0.50108 | 0.50115 | 0.50111 | 1.99733 |
| 3.950 | -76.94980383 | -76.88742883 | 1.99820 | 0.50111 | 0.50107 | 0.50114 | 0.50110 | 1.99738 |
| 4.000 | -76.95008204 | -76.88728619 | 1.99819 | 0.50110 | 0.50106 | 0.50113 | 0.50109 | 1.99743 |
| 4.050 | -76.95034231 | -76.88714514 | 1.99818 | 0.50110 | 0.50104 | 0.50112 | 0.50108 | 1.99747 |
| 4.100 | -76.95058636 | -76.88700076 | 1.99817 | 0.50109 | 0.50104 | 0.50111 | 0.50108 | 1.99751 |
| 4.150 | -76.95081799 | -76.88687042 | 1.99816 | 0.50108 | 0.50103 | 0.50110 | 0.50108 | 1.99755 |
| 4.200 | -76.95103552 | -76.88674455 | 1.99815 | 0.50107 | 0.50103 | 0.50109 | 0.50107 | 1.99758 |
| 4.250 | -76.95124222 | -76.88662367 | 1.99815 | 0.50107 | 0.50102 | 0.50108 | 0.50107 | 1.99762 |
| 4.300 | -76.95143941 | -76.88650764 | 1.99814 | 0.50106 | 0.50101 | 0.50108 | 0.50107 | 1.99765 |
| 4.350 | -76.95162510 | -76.88641759 | 1.99813 | 0.50106 | 0.50100 | 0.50107 | 0.50106 | 1.99768 |
| 4.400 | -76.95182744 | -76.88631257 | 1.99813 | 0.50105 | 0.50100 | 0.50106 | 0.50106 | 1.99770 |
| 4.450 | -76.95199514 | -76.88622837 | 1.99812 | 0.50105 | 0.50099 | 0.50106 | 0.50105 | 1.99773 |
| 4.500 | -76.95219474 | -76.88614515 | 1.99812 | 0.50104 | 0.50099 | 0.50105 | 0.50106 | 1.99775 |
| 4.550 | -76.95233950 | -76.88605707 | 1.99811 | 0.50104 | 0.50098 | 0.50104 | 0.50105 | 1.99777 |
| 4.600 | -76.95263886 | -76.88603094 | 1.99811 | 0.50104 | 0.50098 | 0.50104 | 0.50105 | 1.99779 |
| 4.650 | -76.95265734 | -76.88589636 | 1.99813 | 0.50101 | 0.50097 | 0.50103 | 0.50102 | 1.99783 |
| 4.700 | -76.95285543 | -76.88582378 | 1.99813 | 0.50101 | 0.50097 | 0.50103 | 0.50102 | 1.99785 |
| 4.750 | -76.95297663 | -76.88574932 | 1.99813 | 0.50101 | 0.50096 | 0.50102 | 0.50101 | 1.99787 |
| 4.800 | -76.95310672 | -76.88568118 | 1.99813 | 0.50101 | 0.50096 | 0.50102 | 0.50101 | 1.99788 |
| 4.850 | -76.95329043 | -76.88561705 | 1.99812 | 0.50100 | 0.50095 | 0.50101 | 0.50101 | 1.99790 |
| 4.900 | -76.95338661 | -76.88553825 | 1.99812 | 0.50100 | 0.50095 | 0.50101 | 0.50101 | 1.99791 |
| 4.950 | -76.95350082 | -76.88547363 | 1.99813 | 0.50100 | 0.50094 | 0.50101 | 0.50100 | 1.99793 |
| 5.000 | -76.95361588 | -76.88541203 | 1.99813 | 0.50099 | 0.50094 | 0.50100 | 0.50100 | 1.99794 |

## Active orbitals

Acetylene active orbitals and fractional occupations at 1.200 Å (equilibrium), 2.500 Å (avoided crossing), and 4.000 Å (dissociation).

One column per GVB pair, weakly occupied above strongly occupied; under each orbital its SA-REKS FON and orbital energy / E<sub>h</sub>. Contours ±0.03, ±0.06, ±0.12 a.u. in a plane through the bond axis; blue +, copper −.

R = 1.200 Å

(a, f)

![C₂H₂ R 1.200 Å, orbital σu](https://reksstudio.github.io/v2/figures/dissociation/orb/c2h2/R1.200_10A.svg)**f** σ<sub>u</sub> · 0.0000\
−0.095035

![C₂H₂ R 1.200 Å, orbital σg](https://reksstudio.github.io/v2/figures/dissociation/orb/c2h2/R1.200_5A.svg)**a** σ<sub>g</sub> · 2.0000\
−0.626661

(b, e)

![C₂H₂ R 1.200 Å, orbital πg](https://reksstudio.github.io/v2/figures/dissociation/orb/c2h2/R1.200_9A.svg)**e** π<sub>g</sub> · 0.0009\
−0.167410

![C₂H₂ R 1.200 Å, orbital πu](https://reksstudio.github.io/v2/figures/dissociation/orb/c2h2/R1.200_7A.svg)**b** π<sub>u</sub> · 1.9991\
−0.413904

(c, d)

![C₂H₂ R 1.200 Å, orbital πg](https://reksstudio.github.io/v2/figures/dissociation/orb/c2h2/R1.200_8A.svg)**d** π<sub>g</sub> · 0.0009\
−0.167410

![C₂H₂ R 1.200 Å, orbital πu](https://reksstudio.github.io/v2/figures/dissociation/orb/c2h2/R1.200_6A.svg)**c** π<sub>u</sub> · 1.9991\
−0.413904

R = 2.500 Å

(a, f)

![C₂H₂ R 2.500 Å, orbital σu](https://reksstudio.github.io/v2/figures/dissociation/orb/c2h2/R2.500_6A.svg)**f** σ<sub>u</sub> · 0.2912\
−0.365442

![C₂H₂ R 2.500 Å, orbital σg](https://reksstudio.github.io/v2/figures/dissociation/orb/c2h2/R2.500_5A.svg)**a** σ<sub>g</sub> · 1.7088\
−0.456065

(b, e)

![C₂H₂ R 2.500 Å, orbital πg](https://reksstudio.github.io/v2/figures/dissociation/orb/c2h2/R2.500_9A.svg)**e** π<sub>g</sub> · 0.6852\
−0.269884

![C₂H₂ R 2.500 Å, orbital πu](https://reksstudio.github.io/v2/figures/dissociation/orb/c2h2/R2.500_7A.svg)**b** π<sub>u</sub> · 1.3148\
−0.288798

(c, d)

![C₂H₂ R 2.500 Å, orbital πg](https://reksstudio.github.io/v2/figures/dissociation/orb/c2h2/R2.500_10A.svg)**d** π<sub>g</sub> · 0.6852\
−0.269884

![C₂H₂ R 2.500 Å, orbital πu](https://reksstudio.github.io/v2/figures/dissociation/orb/c2h2/R2.500_8A.svg)**c** π<sub>u</sub> · 1.3148\
−0.288798

R = 4.000 Å

(a, f)

![C₂H₂ R 4.000 Å, orbital σu](https://reksstudio.github.io/v2/figures/dissociation/orb/c2h2/R4.000_6A.svg)**f** σ<sub>u</sub> · 0.8842\
−0.414542

![C₂H₂ R 4.000 Å, orbital σg](https://reksstudio.github.io/v2/figures/dissociation/orb/c2h2/R4.000_5A.svg)**a** σ<sub>g</sub> · 1.1158\
−0.420570

(b, e)

![C₂H₂ R 4.000 Å, orbital πg](https://reksstudio.github.io/v2/figures/dissociation/orb/c2h2/R4.000_9A.svg)**e** π<sub>g</sub> · 0.9643\
−0.272515

![C₂H₂ R 4.000 Å, orbital πu](https://reksstudio.github.io/v2/figures/dissociation/orb/c2h2/R4.000_7A.svg)**b** π<sub>u</sub> · 1.0357\
−0.274935

(c, d)

![C₂H₂ R 4.000 Å, orbital πg](https://reksstudio.github.io/v2/figures/dissociation/orb/c2h2/R4.000_10A.svg)**d** π<sub>g</sub> · 0.9643\
−0.272513

![C₂H₂ R 4.000 Å, orbital πu](https://reksstudio.github.io/v2/figures/dissociation/orb/c2h2/R4.000_8A.svg)**c** π<sub>u</sub> · 1.0357\
−0.274934

## Calculations

The SSR(6,6) calculations for N<sub>2</sub> and C<sub>2</sub>H<sub>2</sub> were performed using a five-state ensemble – comprising PPS1, OSS1, OSS2, OSS3, and HS – for orbital optimization, combined with a complete set of configurations for the state-interaction stage. Dissociation fragments were computed via the ROKS high-spin method. All simulations utilized the BH\&HLYP density functional alongside the aug-cc-pVTZ basis set.

Method: SI-SA-REKS(6,6) = SSR(6,6); 161SI-5SA-REKS(6,6)

SA pool: PPS1 0.200000, OSS1 0.200000, OSS2 0.200000, OSS3 0.200000, all-α determinant 0.200000

SI: catalogue configuration set full; 2S = 0: 161 configurations; 2S = 2: 153 configurations; 2S = 4: 41 configurations; 2S = 6: 1 configuration

Functional, basis: BH\&HLYP/aug-cc-pVTZ

SCF: DF, energy/density thresholds 1.00e-07/1.00e-05, grid 75 × 302

Coordinate: R(C–C); linear H–C–C–H, R(C–H) 1.0605 Å fixed

R window: R 0.800–5.000 Å, 85 points

[← N<sub>2</sub>](https://reksstudio.github.io/v2/main/results/dissociation/n2/index.md) · [Back to the curves](https://reksstudio.github.io/v2/main/results/dissociation/index.md#c2h2) · [C<sub>2</sub> →](https://reksstudio.github.io/v2/main/results/dissociation/c2/index.md)

[Install](https://reksstudio.github.io/v2/docs/index.md#install) · [Manual: first calculation](https://reksstudio.github.io/v2/manual/first-calculation/index.md#first-calculation) · [Contact](https://reksstudio.github.io/v2/docs/index.md#contact)
