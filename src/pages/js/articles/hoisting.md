---
title: 'Hoisting'
date: 2019-03-29
---

# Hoisting

>Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope 
before code execution.

## Hoisting variables
```sh
> a = 20
>
> var a;
>
> console.log(a) // Output: 20
>
> console.log(b) // Output: ReferenceError: b is not defined
>
/**NOTE: reference error thrown when trying to access undeclared variable b **/
```
## Hoisting function
### Function declarations
```sh
>test(); // Output: Hello World
>
>function test(){
>
>    console.log('Hello World');
>
>}
```
### Function expressions
```sh
>expression(); // Output: TypeError: expression is not a function
>
>var expression = function() {
>
>  console.log('Will this work?');
>
>};
>
/**NOTE: In JavaScript all variables and functions declared at the top of the global scope.
   Its mean if we initialized function like example above then 
   it was just hoisted in the scope not initialized.**/
```
