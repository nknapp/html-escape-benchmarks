# About this repo

This repo contains multiple more or less esoteric implementations of an "escapHTML"-function.

I had hoped that some implementations would be faster. But in the end, the fastest one appeared to be
https://www.npmjs.com/package/html-escape, which is already 7 years old, but still good.


## Usage
```
yarn 
yarn test
yarn bench
```

## Results

```
  ✓ htmlEscape 5 cha<5 cha<5 cha<5 cha<5 cha<5 cha<5 cha<5 cha<5  (600 chars) (10) 6275ms
     name                               hz     min      max    mean     p75     p99    p995    p999      rme  samples
   · npmInstallEscapeHtml       158,495.59  0.0047   0.7663  0.0063  0.0066  0.0103  0.0112  0.0158   ±0.84%    79248   fastest
   · iterateStringAndSwitch     127,210.90  0.0053   0.8901  0.0079  0.0085  0.0114  0.0127  0.1895   ±1.01%    63606  
   · iterateCharsWithmap         69,718.94  0.0105   2.8693  0.0143  0.0148  0.0210  0.0236  0.2581   ±1.42%    34860  
   · iterateCharsWithRuleArray   55,320.02  0.0136   0.8095  0.0181  0.0191  0.0319  0.0352  0.0417   ±0.71%    27661  
   · escapeHtmlRegexpExec        68,586.87  0.0105   0.7478  0.0146  0.0156  0.0215  0.0233  0.2169   ±0.78%    34294  
   · stringReplaceAll            95,873.23  0.0063   1.7752  0.0104  0.0108  0.0158  0.0172  0.0253   ±1.09%    47937  
   · stringReplaceWithRegexp     58,442.64  0.0106   5.7807  0.0171  0.0176  0.0359  0.0400  0.0795   ±2.39%    29222  
   · iterateTypedArrayUtf8       70,725.92  0.0085  14.4823  0.0141  0.0132  0.0216  0.0244  0.1162   ±9.57%    35363  
   · iterateTypedArrayUtf16      49,431.93  0.0119  26.7711  0.0202  0.0199  0.0412  0.0465  0.0786  ±13.43%    24716   slowest
   · iterateWithRegexTest        64,466.49  0.0118   5.4526  0.0155  0.0165  0.0240  0.0256  0.0343   ±2.19%    32234  
   ✓ htmlEscape 10 chars b<10 chars b<10 chars b<10 chars b<10 cha (1100 chars) (10) 11448ms
     name                               hz     min      max    mean     p75     p99    p995    p999     rme  samples
   · npmInstallEscapeHtml       121,704.73  0.0062   0.3752  0.0082  0.0083  0.0145  0.0165  0.0236  ±0.56%    60853  
   · iterateStringAndSwitch      58,475.60  0.0097   2.6458  0.0171  0.0181  0.0377  0.0421  0.3282  ±1.60%    29238  
   · iterateCharsWithmap         32,817.62  0.0211   2.4932  0.0305  0.0336  0.0713  0.0801  0.2969  ±1.36%    16409  
   · iterateCharsWithRuleArray   32,748.31  0.0228   0.5366  0.0305  0.0348  0.0492  0.0675  0.0960  ±0.57%    16375   slowest
   · escapeHtmlRegexpExec        73,740.64  0.0104   0.4197  0.0136  0.0143  0.0215  0.0230  0.1733  ±0.67%    36871  
   · stringReplaceAll           137,552.49  0.0062   0.4823  0.0073  0.0071  0.0122  0.0136  0.0288  ±0.61%    68777   fastest
   · stringReplaceWithRegexp     89,313.28  0.0094   2.7093  0.0112  0.0112  0.0172  0.0184  0.0269  ±1.15%    44657  
   · iterateTypedArrayUtf8       66,665.42  0.0102  14.8298  0.0150  0.0142  0.0279  0.0318  0.1453  ±8.39%    33333  
   · iterateTypedArrayUtf16      39,590.70  0.0176  15.8753  0.0253  0.0243  0.0425  0.0557  0.1401  ±8.57%    19796  
   · iterateWithRegexTest        68,008.92  0.0122   3.0650  0.0147  0.0150  0.0227  0.0241  0.0331  ±1.28%    34005  
   ✓ htmlEscape 20 chars between esc<20 chars between esc<20 chars (2100 chars) (10) 16571ms
     name                               hz     min     max    mean     p75     p99    p995    p999     rme  samples
   · npmInstallEscapeHtml        87,841.38  0.0089  0.5198  0.0114  0.0121  0.0188  0.0205  0.0274  ±0.54%    43922  
   · iterateStringAndSwitch      46,584.50  0.0172  0.4803  0.0215  0.0212  0.0339  0.0414  0.2703  ±0.89%    23298  
   · iterateCharsWithmap         19,838.71  0.0414  0.6311  0.0504  0.0522  0.0802  0.0891  0.3607  ±0.76%     9920  
   · iterateCharsWithRuleArray   16,363.27  0.0473  0.6520  0.0611  0.0646  0.0932  0.0978  0.1076  ±0.52%     8182   slowest
   · escapeHtmlRegexpExec        76,475.01  0.0102  0.5179  0.0131  0.0134  0.0221  0.0238  0.1754  ±0.68%    38238  
   · stringReplaceAll           136,889.24  0.0060  1.8321  0.0073  0.0073  0.0116  0.0122  0.0192  ±0.96%    68445   fastest
   · stringReplaceWithRegexp     83,102.49  0.0102  2.6928  0.0120  0.0117  0.0217  0.0234  0.0271  ±1.16%    41552  
   · iterateTypedArrayUtf8       43,475.85  0.0169  4.8459  0.0230  0.0236  0.0352  0.0395  0.1463  ±4.09%    21738  
   · iterateTypedArrayUtf16      24,589.90  0.0296  8.3801  0.0407  0.0416  0.0618  0.0682  0.1720  ±5.70%    12295  
   · iterateWithRegexTest        71,584.79  0.0117  3.2467  0.0140  0.0139  0.0207  0.0221  0.0294  ±1.34%    35793  
   ✓ htmlEscape 50 chars between escaped chars -------------50 cha (5100 chars) (10) 21627ms
     name                               hz     min     max    mean     p75     p99    p995    p999     rme  samples
   · npmInstallEscapeHtml        38,557.87  0.0200  0.4136  0.0259  0.0271  0.0399  0.0427  0.0505  ±0.46%    19279  
   · iterateStringAndSwitch      18,321.81  0.0449  0.7166  0.0546  0.0529  0.1031  0.2175  0.3927  ±0.94%     9161  
   · iterateCharsWithmap          8,680.87  0.0954  0.7029  0.1152  0.1187  0.1923  0.3217  0.4706  ±0.83%     4341  
   · iterateCharsWithRuleArray    7,989.78  0.1099  0.6648  0.1252  0.1239  0.1848  0.1936  0.2073  ±0.52%     3995   slowest
   · escapeHtmlRegexpExec        62,302.96  0.0128  0.3965  0.0161  0.0168  0.0294  0.0375  0.1901  ±0.60%    31152  
   · stringReplaceAll           132,382.54  0.0063  0.4053  0.0076  0.0073  0.0118  0.0127  0.0226  ±0.67%    66192   fastest
   · stringReplaceWithRegexp     65,671.28  0.0129  3.0126  0.0152  0.0152  0.0256  0.0287  0.0339  ±1.28%    32836  
   · iterateTypedArrayUtf8       20,853.41  0.0363  3.6740  0.0480  0.0488  0.0760  0.0931  0.2208  ±3.29%    10427  
   · iterateTypedArrayUtf16      11,221.12  0.0692  5.8337  0.0891  0.0892  0.1757  0.2166  2.0854  ±3.80%     5611  
   · iterateWithRegexTest        56,946.62  0.0144  1.9221  0.0176  0.0183  0.0302  0.0320  0.0389  ±0.89%    28474  
   ✓ htmlEscape 100 chars between escaped chars -------------100 c (10100 chars) (10) 26645ms
     name                               hz     min     max    mean     p75     p99    p995    p999     rme  samples
   · npmInstallEscapeHtml        20,458.52  0.0379  0.3923  0.0489  0.0504  0.0855  0.0906  0.1034  ±0.52%    10230  
   · iterateStringAndSwitch       8,449.12  0.0917  1.1392  0.1184  0.1142  0.5493  0.6542  0.9573  ±1.96%     4225  
   · iterateCharsWithmap          4,054.82  0.2042  1.5335  0.2466  0.2426  0.6857  0.8143  1.1200  ±1.59%     2029  
   · iterateCharsWithRuleArray    3,959.29  0.2145  0.7640  0.2526  0.2593  0.4011  0.4126  0.4500  ±0.82%     1980   slowest
   · escapeHtmlRegexpExec        47,741.79  0.0174  0.3695  0.0209  0.0215  0.0363  0.0391  0.1899  ±0.54%    23871  
   · stringReplaceAll           117,917.03  0.0070  0.6391  0.0085  0.0085  0.0134  0.0140  0.1667  ±0.75%    58959   fastest
   · stringReplaceWithRegexp     46,586.24  0.0177  3.1769  0.0215  0.0221  0.0360  0.0383  0.1915  ±1.37%    23294  
   · iterateTypedArrayUtf8       10,798.51  0.0718  2.4464  0.0926  0.0959  0.1650  0.2104  2.0274  ±2.56%     5400  
   · iterateTypedArrayUtf16       4,744.42  0.1371  4.1250  0.2108  0.2290  0.3453  0.3859  3.2599  ±3.00%     2384  
   · iterateWithRegexTest        35,222.19  0.0220  0.5914  0.0284  0.0298  0.0487  0.0520  0.0619  ±0.52%    17612  
   ✓ htmlEscape 200 chars between escaped chars -------------200 c (20100 chars) (10) 31621ms
     name                              hz     min     max    mean     p75     p99    p995    p999     rme  samples
   · npmInstallEscapeHtml        8,700.83  0.0846  0.6556  0.1149  0.1272  0.1650  0.1774  0.1888  ±0.57%     4351  
   · iterateStringAndSwitch      3,467.49  0.2106  1.7930  0.2884  0.2728  1.0289  1.2784  1.6032  ±2.58%     1734  
   · iterateCharsWithmap         1,525.83  0.4801  2.4290  0.6554  0.7105  1.5939  1.8215  2.4290  ±2.24%      763   slowest
   · iterateCharsWithRuleArray   1,617.52  0.4957  1.0660  0.6182  0.6466  0.9515  1.0045  1.0660  ±1.18%      810  
   · escapeHtmlRegexpExec       23,851.82  0.0336  0.7044  0.0419  0.0448  0.0646  0.0705  0.2834  ±0.59%    11926  
   · stringReplaceAll           74,845.07  0.0102  0.4845  0.0134  0.0136  0.0211  0.0235  0.2195  ±0.89%    37424   fastest
   · stringReplaceWithRegexp    30,314.66  0.0289  1.8940  0.0330  0.0342  0.0468  0.0501  0.2285  ±0.91%    15158  
   · iterateTypedArrayUtf8       5,620.89  0.1361  2.6270  0.1779  0.1833  0.4091  0.4448  2.2307  ±2.26%     2811  
   · iterateTypedArrayUtf16      2,902.82  0.2623  3.4133  0.3445  0.3578  0.6084  0.6675  3.3466  ±2.45%     1452  
   · iterateWithRegexTest       27,477.96  0.0308  2.1611  0.0364  0.0384  0.0580  0.0619  0.0806  ±0.97%    13739  
   ✓ htmlEscape 500 chars between escaped chars -------------500 c (50100 chars) (10) 36561ms
     name                              hz     min     max    mean     p75     p99    p995    p999     rme  samples
   · npmInstallEscapeHtml        4,669.40  0.1734  0.5297  0.2142  0.2246  0.3073  0.3104  0.3466  ±0.59%     2335  
   · iterateStringAndSwitch      1,646.58  0.4544  1.9798  0.6073  0.6331  1.6748  1.8027  1.9798  ±2.74%      824  
   · iterateCharsWithmap           787.48  1.0296  2.7773  1.2699  1.3347  2.6109  2.7357  2.7773  ±2.32%      394  
   · iterateCharsWithRuleArray     598.78  1.1800  2.8811  1.6701  1.8659  2.4344  2.6755  2.8811  ±1.92%      300   slowest
   · escapeHtmlRegexpExec       12,813.86  0.0589  0.5013  0.0780  0.0847  0.1245  0.1329  0.3740  ±0.58%     6407  
   · stringReplaceAll           46,686.81  0.0148  0.5657  0.0214  0.0225  0.0377  0.0463  0.3199  ±1.06%    23344   fastest
   · stringReplaceWithRegexp    13,587.06  0.0582  0.7971  0.0736  0.0772  0.1214  0.1443  0.4232  ±0.77%     6794  
   · iterateTypedArrayUtf8       2,137.07  0.3339  4.1865  0.4679  0.4900  1.0624  1.9509  3.7649  ±2.92%     1069  
   · iterateTypedArrayUtf16      1,098.47  0.6521  3.6628  0.9104  0.9882  1.9148  3.0640  3.6628  ±2.46%      550  
   · iterateWithRegexTest       14,249.76  0.0583  4.0215  0.0702  0.0762  0.1218  0.1936  0.3455  ±1.70%     7125  
   ✓ htmlEscape 1000 chars between escaped chars -------------1000 (100100 chars) (10) 41490ms
     name                              hz     min     max    mean     p75     p99    p995    p999     rme  samples
   · npmInstallEscapeHtml        2,255.21  0.3481  0.8677  0.4434  0.4818  0.6765  0.7554  0.8180  ±1.04%     1129  
   · iterateStringAndSwitch        821.95  0.9086  2.8959  1.2166  1.4492  2.4365  2.5076  2.8959  ±2.87%      411  
   · iterateCharsWithmap           399.93  2.0746  5.0519  2.5004  2.7824  4.5175  4.8141  5.0519  ±2.94%      201   slowest
   · iterateCharsWithRuleArray     402.41  2.1582  4.2414  2.4851  2.5709  3.8465  3.9222  4.2414  ±2.18%      202  
   · escapeHtmlRegexpExec        7,115.52  0.1018  0.8308  0.1405  0.1625  0.2493  0.2730  0.3806  ±0.93%     3558  
   · stringReplaceAll           31,088.54  0.0247  0.7569  0.0322  0.0321  0.0547  0.2046  0.3163  ±0.99%    15545   fastest
   · stringReplaceWithRegexp     8,169.40  0.1072  0.6279  0.1224  0.1217  0.2656  0.2926  0.4784  ±0.79%     4085  
   · iterateTypedArrayUtf8       1,194.83  0.6617  3.1719  0.8369  0.8806  1.9241  2.6992  3.1719  ±2.28%      598  
   · iterateTypedArrayUtf16        587.85  1.3029  5.0147  1.7011  1.8127  4.2509  4.8466  5.0147  ±3.69%      294  
   · iterateWithRegexTest        5,553.26  0.1207  1.3911  0.1801  0.1928  0.2869  0.3107  0.3707  ±0.85%     2777  


 BENCH  Summary

  npmInstallEscapeHtml - src/htmlEscape.bench.ts > htmlEscape 5 cha<5 cha<5 cha<5 cha<5 cha<5 cha<5 cha<5 cha<5  (600 chars)
    1.25x faster than iterateStringAndSwitch
    1.65x faster than stringReplaceAll
    2.24x faster than iterateTypedArrayUtf8
    2.27x faster than iterateCharsWithmap
    2.31x faster than escapeHtmlRegexpExec
    2.46x faster than iterateWithRegexTest
    2.71x faster than stringReplaceWithRegexp
    2.87x faster than iterateCharsWithRuleArray
    3.21x faster than iterateTypedArrayUtf16

  stringReplaceAll - src/htmlEscape.bench.ts > htmlEscape 10 chars b<10 chars b<10 chars b<10 chars b<10 cha (1100 chars)
    1.13x faster than npmInstallEscapeHtml
    1.54x faster than stringReplaceWithRegexp
    1.87x faster than escapeHtmlRegexpExec
    2.02x faster than iterateWithRegexTest
    2.06x faster than iterateTypedArrayUtf8
    2.35x faster than iterateStringAndSwitch
    3.47x faster than iterateTypedArrayUtf16
    4.19x faster than iterateCharsWithmap
    4.20x faster than iterateCharsWithRuleArray

  stringReplaceAll - src/htmlEscape.bench.ts > htmlEscape 20 chars between esc<20 chars between esc<20 chars (2100 chars)
    1.56x faster than npmInstallEscapeHtml
    1.65x faster than stringReplaceWithRegexp
    1.79x faster than escapeHtmlRegexpExec
    1.91x faster than iterateWithRegexTest
    2.94x faster than iterateStringAndSwitch
    3.15x faster than iterateTypedArrayUtf8
    5.57x faster than iterateTypedArrayUtf16
    6.90x faster than iterateCharsWithmap
    8.37x faster than iterateCharsWithRuleArray

  stringReplaceAll - src/htmlEscape.bench.ts > htmlEscape 50 chars between escaped chars -------------50 cha (5100 chars)
    2.02x faster than stringReplaceWithRegexp
    2.12x faster than escapeHtmlRegexpExec
    2.32x faster than iterateWithRegexTest
    3.43x faster than npmInstallEscapeHtml
    6.35x faster than iterateTypedArrayUtf8
    7.23x faster than iterateStringAndSwitch
    11.80x faster than iterateTypedArrayUtf16
    15.25x faster than iterateCharsWithmap
    16.57x faster than iterateCharsWithRuleArray

  stringReplaceAll - src/htmlEscape.bench.ts > htmlEscape 100 chars between escaped chars -------------100 c (10100 chars)
    2.47x faster than escapeHtmlRegexpExec
    2.53x faster than stringReplaceWithRegexp
    3.35x faster than iterateWithRegexTest
    5.76x faster than npmInstallEscapeHtml
    10.92x faster than iterateTypedArrayUtf8
    13.96x faster than iterateStringAndSwitch
    24.85x faster than iterateTypedArrayUtf16
    29.08x faster than iterateCharsWithmap
    29.78x faster than iterateCharsWithRuleArray

  stringReplaceAll - src/htmlEscape.bench.ts > htmlEscape 200 chars between escaped chars -------------200 c (20100 chars)
    2.47x faster than stringReplaceWithRegexp
    2.72x faster than iterateWithRegexTest
    3.14x faster than escapeHtmlRegexpExec
    8.60x faster than npmInstallEscapeHtml
    13.32x faster than iterateTypedArrayUtf8
    21.58x faster than iterateStringAndSwitch
    25.78x faster than iterateTypedArrayUtf16
    46.27x faster than iterateCharsWithRuleArray
    49.05x faster than iterateCharsWithmap

  stringReplaceAll - src/htmlEscape.bench.ts > htmlEscape 500 chars between escaped chars -------------500 c (50100 chars)
    3.28x faster than iterateWithRegexTest
    3.44x faster than stringReplaceWithRegexp
    3.64x faster than escapeHtmlRegexpExec
    10.00x faster than npmInstallEscapeHtml
    21.85x faster than iterateTypedArrayUtf8
    28.35x faster than iterateStringAndSwitch
    42.50x faster than iterateTypedArrayUtf16
    59.29x faster than iterateCharsWithmap
    77.97x faster than iterateCharsWithRuleArray

  stringReplaceAll - src/htmlEscape.bench.ts > htmlEscape 1000 chars between escaped chars -------------1000 (100100 chars)
    3.81x faster than stringReplaceWithRegexp
    4.37x faster than escapeHtmlRegexpExec
    5.60x faster than iterateWithRegexTest
    13.79x faster than npmInstallEscapeHtml
    26.02x faster than iterateTypedArrayUtf8
    37.82x faster than iterateStringAndSwitch
    52.89x faster than iterateTypedArrayUtf16
    77.26x faster than iterateCharsWithRuleArray
    77.74x faster than iterateCharsWithmap
```

## Conclusion

* For small strings of strings with many illegal chars, iterating is faster. The `escape-html` package from `npm`
  makes some additional improvements to the iteration (testing with a regex once in the beginning. Copying missing 
  substrings when an illegal char is found. Using "switch" with numbers.
* For long strings that are scarcely filled with illegal chars, looping over the illegal chars starting with "&" and 
  replacing them with "string.replaceAll" seems to be the fastest way.
* Using native arrays does not make it faster.
  
Possible solution for Handlebars. 

if length < 10, use iteration, otherwise use regex-replace

