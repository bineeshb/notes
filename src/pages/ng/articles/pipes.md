---
title: 'Pipes'
date: 2018-10-23
---

## Built-in Pipes

```html{% raw %}
...
<span>{{ title | uppercase }}</span>
<span>{{ date | date: shortDate }}</span>
...
{% endraw %}```

## Custom Pipes

```js
/**
 *  customPipe.pipe.ts
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeName'
})
export class CustomPipe implements PipeTransform {
  transform(value) {
    ...
	return formattedValue;
  }
}

/**
 *  app.module.ts
 */
...
import { CustomPipe } from './customPipe.pipe';
...
@NgModule({
  ...,
  declarations: [
    ...,
	CustomPipe
  ]
})
```

```html{% raw %}
...
<span>{{ content | pipeName }}</span>
...
{% endraw %}```
