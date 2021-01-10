---
title: 'null v undefined'
date: 2019-03-14
---

## null v undefined

  || null | undefined |
  |---|---|---|
  | means | Assigned value, means nothing<br>needs explicit assignment | Variable declared, but not defined.<br>*Variable's default value.* |
  | typeof | object | undefined |

  ```js
  var a; //undefined
  var b = null; //null

  null = 'value' //Reference error
  undefined = 'value' //value
  ```

  ```js
  null == undefined  //true

  null === undefined  //false
  null == 0  //false
  ```

  ```js
  var undefined = null;
  undefined === null //true
  ```

### Function with default parameters

  undefined is the only value that can't get explicitly passed in for a default-value parameter
  
  ```js
  function foo(a = 2) {
    console.log(a);
  }

  foo(null);	// null
  foo(undefined);	// 2
  ```
