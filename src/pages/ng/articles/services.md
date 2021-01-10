---
title: 'Services'
date: 2018-10-07
---

## Creating and Injecting Services

```js
/**
 * some.service.ts
 */
import { Injectable } from '@angular/core';

@Injectable()
export class SomeService {
    ...
}

/**
 * app.module.ts
 */
...
import { SomeService } from './some.service';

@NgModule({
    ...
    providers: [ SomeService ]
})
...

/**
 * some.component.ts
 */
...
import { SomeService } from './some.service';
...
export class SomeComponent {
    constructor(private someService: SomeService) {}
    ...
}
```
