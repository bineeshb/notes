---
title: 'Bindings'
date: 2018-10-02
---

## String interpolation - {% raw %}{{...}}{% endraw %}

```html{% raw %}
<p>{{ obj.prop }}</p>
{% endraw %}```

## Property binding - [...]

```html
...
<p [class.some-class]="booleanParam">...</p>
...
```

## Event binding - (...)

```html
...
<button (click)="func()">Button</button>
...
```

## Two way binding / Banana-in-a-box - [(ngModel)]

```html
...
<input type="text" name="user" [(ngModel)]="obj.prop">
<!-- Only to get input -->
<input type="text" name="user" (ngModel)="obj.prop">
<!-- Only to display value -->
<input type="text" name="user" [ngModel]="obj.prop">
...
```

## Safe-Navigation operator - ?.

To handle null values

```html{% raw %}
...
<p>{{ obj?.prop }}</p>
<div *ngIf="obj?.prop">...</div>
...
{% endraw %}```

## Structural bindings / directives

- #### *ngFor

Repeating data.

```html{% raw %}
...
<p *ngFor="let obj of objs">{{ obj.prop }}</p>
...
{% endraw %}```

- #### *ngIf

Show / Hide content - Adds / Removes element from the DOM.

```html
...
<p *ngIf="booleanParam">...</p>
...
```

- #### [hidden]

Show / Hide content - Changes the visibility of the element in the DOM.

```html
...
<p [hidden]="booleanParam">...</p>
...
```

- #### [ngSwitch], *ngSwitchCase, *ngSwitchDefault

Adds the matching element and removes the unmatching element from the DOM.

```html
...
<div [ngSwitch]="obj.prop">
    <p *ngSwitchCase="param">...</p>
    <p *ngSwitchCase="'value'">...</p>
    <p *ngSwitchDefault>...</p>
</div>
...
```
