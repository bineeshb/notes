---
title: 'CSS Methodologies'
date: 2021-01-06
---

### OOCSS - Object Oriented CSS
- OO style
- styles using class, no type selectors
- DRY principle
- discourages use of descentant selectors

**Disadvantage:** number of classes grows


### BEM - Block, Element, Modifier
.block
.block--modifier
.block__element
.block__element--modifier
- class name strict convention

**Disadvantage:** class name can get ugly


### SMACSS - Scalable and Modular Architecture for CSS
base - type selectors
layout - .layout-* , .l-* classes
modules - reusable components
state - current state - .is-visible, .is-submitted
themes
- discourages use of descentant selectors
