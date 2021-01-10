---
title: 'Content Projection / Transclusion'
date: 2018-10-23
---

## Content Projection

```html
<!--
    comp-a.component.html
  -->
...
<comp-b [someParam]="paramRef">
  ... Content ...
</comp-b>
...
```

```js
/**
 *  comp-b.component.ts
 */
...
export class CompBComponent {
  @Input() someParam: string;
}
```

```html
<!--
    comp-b.component.html
  -->
<div>
  <h4>{{ someParam }}</h4>
  <ng-content></ng-content>
</div>
```

## Multi Slot Content Projection

```html
<!--
    comp-a.component.html
  -->
...
<comp-b>
  <div class="header">
    ... Header ...
  </div>
  <div section-content>
    ... Content ...
  </div>
</comp-b>
...
```

```html
<!--
    comp-b.component.html
  -->
<div class="title">
  <ng-content select=".header"></ng-content>
</div>
<div class="body">
  <ng-content select="[section-content]"></ng-content>
</div>
```
