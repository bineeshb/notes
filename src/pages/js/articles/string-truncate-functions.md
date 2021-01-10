---
title: 'String - slice(), substring(), substr()'
date: 2019-03-08
---

## String - slice() v substring()

  - char at &lt;end&gt; will not be displayed
  - &lt;end&gt; is optional

  | | slice(start, end)	| substring(start, end) |
  |:---|:---:|:---:|
  | start == end | returns empty string | returns empty string |
  | end is omitted | extracts characters to the end of the string | returns empty string |
  | start / end > string.length | string's length will be used instead | returns empty string |
  | start > end | returns empty string | swaps two arguments |
  | start = -ve | sets char from the end of string | treated as 0 |
  | end = -ve | Math.max(0, string.length + end) | treated as 0 |
  | start / end = NaN | treated as 0 | treated as 0 |


## String - substr()

  | | substr(start, length) |
  |:---|:---:|
  | length - omitted / > string.length | extracts characters to the end of the string |
  | start > string.length | returns empty string |
  | start / length = -ve | returns empty string |
  | start = NaN | treated as 0 |
  | length = NaN | returns empty string |


### Examples

  string = "0123456789"

  | string char | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" |
  |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
  | index from left | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
  | index from right | -10 | -9 | -8 | -7 | -6 | -5 | -4 | -3 | -2 | -1 |


  | start | end / length | slice(start, end) | substring(start, end) | substr(start, length) |
  |:---:|:---:|:---:|:---:|:---:|
  | 1 | 3 | 12 | 12 | 123 |
  | 7 | 3 |  | 3456 | 789 |
  | 3 | 3 |  |  | 345 |
  | 10 | 1 |  | 123456789 |  |
  | 2 | 100 | 23456789 | 23456789 | 23456789 |
  | 100 | 101 |  |  |  |
  | -7 | -3 | 3456 |  |  |
  | -3 | -7 |  |  |  |
  | -7 | 3 |  | 12 | 345 |
  | -3 | 7 |  | 123456 | 789 |
  | 7 | -3 |  | 123456 |  |
  | 3 | -7 |  | 12 |  |
  | 3 |  | 3456789 | 3456789 | 3456789 |
  | -3 |  | 789 | 123456789 | 789 |
  | NaN | 8 | 1234567 | 1234567 | 1234567 |
  | NaN | 12 | 123456789 | 123456789 | 123456789 |
  | NaN | -7 | 12 |  |  |
  | NaN | -10 |  |  |  |
  | 3 | NaN |  | 12 |  |
  | -3 | NaN |  |  |  |
  | NaN | NaN |  |  |  |
