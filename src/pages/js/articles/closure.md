---
title: 'Closure'
date: 2019-03-15
---

## Closure

  - combination of a function enclosed with references to its surrounding state (lexical environment)
  - gives you access to an outer function's scope from an inner function


### Application

  - primary mechanism used to enable **data privacy**
    - enclosed variables are only in scope within the containing (outer) function
    - can't get the data from an outside scope except through the object's privileged methods (any exposed method defined within the closure scope)

  ```js
  function counter() {
    var count = 0; //only accessible through methods returned

    return {
      inc: function () { count++; },
      dec: function () { count--; },
      getCount: function () { return count; }
    };
  }

  var count1 = new counter();
  
  count1.inc();
  count1.inc();
  console.log(count1.getCount());
  
  count1.dec();
  console.log(count1.getCount());
  ```

  - **partial application and currying**
    - a function that takes a function with multiple parameters and returns a function with fewer parameters.
    - takes advantage of closure scope in order to fix parameters
  
  ```js
  const partialApply = (fn, ...fixedArg) => {
    return function (...remainingArg) {
      return fn.apply(this, fixedArg.concat(remainingArg));
    };
  };

  const add = (a, b) => a + b;

  const add10 = partialApply(add, 10);

  console.log(add10(5));
  ```


### Resources

  - [Master the JavaScript Interview: What is a Closure?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36)
