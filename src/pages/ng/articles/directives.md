---
title: 'Directives'
date: 2018-10-26
---

## Directives

```js
/**
 *  some.directive.ts
 */
import { Directive } from '@angular/core';

@Directive({
  selector: '[selector]'  // CSS Selector
})
export class SomeDirective {
  ...
}

/**
 *  app.module.ts
 */
...
import { SomeDirective } from './some.directive';

@NgModule({
  ...,
  declarations: [
    ...,
    SomeDirective
  ]
})
...
```
