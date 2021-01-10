---
title: '@ViewChild decorator'
date: 2018-10-30
---

## @ViewChild

```html
<!--
    a.component.html
-->
...
<div #templateRef>...</div>
...
```

```js
/**
 * a.component.ts
 */
import { ViewChild, ElementRef } from '@angular/core';
...
export class AComponent {
    @ViewChild('templateRef') el: ElementRef;
    ...
    someFunc() {
        console.log(this.el.nativeElement);
    }
}
```

## @ViewChildren

```js
/**
 * a.component.ts
 */
import { ViewChildren } from '@angular/core';
...
```

## @ContentChild

```js
/**
 * a.component.ts
 */
import { ContentChild } from '@angular/core';
...
```

## @ContentChildren

```js
/**
 * a.component.ts
 */
import { ContentChildren } from '@angular/core';
...
```
