---
title: 'Scope'
date: 2021-01-06
---

### let & const
- doesn't hoist
- block scoped

#### let:
- cannot be accessed before declaration/initialisation

#### const:
- cannot reassign
- object properties can be reassigned / added / removed

### Lexical scope

- describes how a parser resolves variable names when functions are nested.
- The word lexical refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available.
- Nested functions have access to variables declared in their outer scope.
