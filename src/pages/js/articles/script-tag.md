---
title: 'script v script async v script defer'
date: 2021-01-06
---

| | script | script async | script defer |
|---|---|---|---|
| HTML parsing | will be paused on download & execution | will be paused on execution | will not be paused |
| script execution | immediate after download | immediate after download | after HTML parsing before DOMContentLoaded |
| order of execution | | runs in 'load-first' (downloaded) order | runs in programmed order |
| use for scripts | | which are independent (eg. Google Analytics) | which are dependented on other async or deferred scripts |

**defer** works only for external scripts. It is ignored if there is no _src_ attribute.

**Dynamic scripts (added using js):**
- behaves as async
- can make as defer by setting script.async = false
