---
title: 'Communicating with Components'
date: 2018-10-02
---

## Communicating with Child component

  - Using **@Input()**:

    ```js
    /**
     * child.component.ts
     */
    import { Input } from '@angular/core';
    ...
    export class ChildComponent {
        @Input() inputParam;
    }
    ...
    ```

    ```html
    <!--
        parent.component.html
      -->
    ...
    <child-component [inputParam]="passParam">...</child-component>
    ...
    ```

  - Using **Template variable**:

    ```html
    <!--
        parent.component.html
      -->
    ...
    <child-component #templateRef>...</child-component>
    ...
    <span>{ { templateRef.publicObj }}</span>
    ...
    <button (click)="templateRef.publicFunc()"></button>
    ...
    ```

## Communicating with Parent component

  - Using **@Output()**:

    ```js
    /**
     * child.component.ts
     */
    import { Output, EventEmitter } from '@angular/core';
    ...
    export class ChildComponent {
        @Output() outputEvent = new EventEmitter();
        ...
        func() {
            ...
            this.outputEvent.emit(optionalParam);
            ...
        }
        ...
    }
    ...
    ```

    ```html
    <!--
        parent.component.html
      -->
    ...
    <child-component (outputEvent)="parentFunc($event)">...</child-component>
    ...
    ```
