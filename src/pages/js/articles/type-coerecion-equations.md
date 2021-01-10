---
title: 'Type coerecion equations'
date: 2019-03-14
---

## Type coerecion equations

  Operator between number and boolean, or between booleans. boolean is converted to number (true == 1, false == 0).

  ```js
  3 + true  //4
  3 - true  //2
  3 * true  //3
  3 / true  //3

  3 + false //3
  3 - false //3
  3 * false //0
  3 / false //Infinity

  true + false  //1
  ```

  Add operator between string and number/boolean. number/boolean is converted to string.

  ```js
  'string' + 4  //string4

  'string' + true //stringtrue
  'string' + false //stringfalse

  4 + 'string'  //4string

  true + 'string' //truestring
  false + 'string' //falsestring


  'string' - 4  //NaN
  'string' * 4  //NaN
  'string' / 4  //NaN

  4 - 'string'  //NaN
  4 * 'string'  //NaN
  4 / 'string'  //NaN
  ```

### Resources

  - [JavaScript: Why does 3 + true = 4? (and 7 other tricky equations)](https://codeburst.io/javascript-why-does-3-true-4-and-7-other-tricky-equations-9dd13cb2a92a)
