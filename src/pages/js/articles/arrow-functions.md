---
title: 'Arrow functions / Fat arrow functions'
date: 2019-03-14
---

## Arrow functions / Fat arrow functions

  - has context of lexical bound this
  - anonymous


### Syntax variations

  | Variation | Example |
  |:---|:---|
  | No parameters | () => console.log('Hi')<br>_or_<br>_ => console.log('Hi') |
  | Single parameter | x => x * x |
  | Multiple parameters | (x, y) => x * y |
  | Body block | x => {<br>let y = x * 3;<br>return y;<br>} |
  | Returns Object literals | x => ({y: x}) |


### Anonymity creates some issues

  - Hard to debug
  - No self-referencing (eg. recursion, event handler that needs to unbind)


### When not to use

  - **Object methods**
    - this is not bound to anything, and will inherit the value of this from its parent scope

    ```js
    var obj = {
      a: 1,
      get: () => {
        return this.a;
      }
    };

    console.log(obj.get());	//undefined
    ```

  - **Callback functions with dynamic context**

    ```js
    var button = document.getElementById('press');

    button.addEventListener('click', () => {
      this.classList.toggle('on');	//TypeError
    });
    ```


### When to use

  - requires **this** to be bound to the context, and not the function itself.


### Resources

  - [When (and why) you should use ES6 arrow functions — and when you shouldn’t](https://medium.freecodecamp.org/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26)
