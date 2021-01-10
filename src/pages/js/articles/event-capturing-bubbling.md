---
title: 'Events - Capturing & Bubbling'
date: 2018-12-03
---

## 3 phases of event propagation

  - **Capturing phase** - the event goes down to the element
    -  addEventListener(..., true)
  - **Target phase** - the event reached the target element
  - **Bubbling phase** - the event bubbles up from the element
    -  addEventListener(..., false)

## event.target and event.currentTarget

  - **event.target** - the deepest element that originated the event
  - **event.currentTarget (=this)** - the current element that handles the event (the one that has the handler on it)

## Stop bubbling

  - **event.stopPropagation** - stops the move upwards, but on the current element all other handlers will run
  - **event.stopImmediatePropagation** - stops the bubbling and prevent handlers on the current element from running
