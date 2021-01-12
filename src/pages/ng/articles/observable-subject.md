---
title: 'Observable and Subject'
date: 2021-01-07
---

| Observable | Subject |
|---|---|
| we can only subscribe | we can publish and subscribe |
| unicast | multicast |

| | Subject | Behavior & Replay Subject |
|---|---|---|
| on initial subscription | cannot get value<br>can get values emitted after subscription | can get value |

**Behavior Subject:**
- get the last value emitted on initial subscription, can add a initial value

**Replay Subject:**
- get a specified number of last values emitted
- can set number of last values to be stored and how long to be stored

**Async Subject:**
- can get value only after the subject is complete
