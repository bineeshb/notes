---
title: 'Barrels - Organize exports'
date: 2018-10-10
---

## Barrels

To organize exports

```js
/**
 * Folder: app/some/
 *
 * some.component.ts
 * some.component.html
 * some.component.scss
 * some.service.scss
 * some-sub.component.ts
 * some-sub.component.html
 * some-sub.component.scss
 * some-sub.service.scss
 * some-other.component.ts
 * some-other.component.html
 * some-other.component.scss
 * some-other.service.scss
 *
 */

/**
 * app/some/index.ts
 */
export * from './some.component';
export * from './some.service';
export * from './some-sub.component';
export * from './some-sub.service';
export * from './some-other.component';
export * from './some-other.service';

/**
 * app.module.ts
 */
...
import {
    SomeComponent,
    SomeService,
    SomeSubComponent,
    SomeSubService,
    SomeOtherComponent,
    SomeOtherService
} from './some/index';
...
```
