---
title: 'Web Workers'
date: 2021-01-06
---

## Web Workers

- makes it possible to run a script operation in a background thread separate from the main execution thread of a web application.
- can access XMLHttpRequest
- can't access localStorage, sessionStorage

**Advantage:** laborious processing can be performed in a separate thread, allowing the main (usually the UI) thread to run without being blocked/slowed down.
