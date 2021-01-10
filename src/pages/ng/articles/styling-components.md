---
title: 'Styling components'
date: 2018-10-02
---

## Using **[style]**:

  ```html
  ...
  <div [style.color]="{ booleanExp ? 'red': 'green' }"></div>
  ...
  ```

## Using **[ngStyle]**:

  ```html
  ...
  <div [ngStyle]="{ 'color': red }">...</div>
  ...
  <h2 [ngStyle]="getStyles()">...</h2>
  ...
  ```

  ```js
  ...
  getStyles() {
    ...
    return { color: 'red', fontWeight: 'bold', 'background-color': 'grey' };
  }
  ...
  ```

## Using **[class]**:

  ```html
  ...
  <div
    [class.class-1]="booleanParam"
    [class.class-2]="funcReturningBoolean()"
    [class.class-3]="booleanExp">...</div>
  ...
  ```

## Using **[ngClass]**:

  ```html
  ...
  <div [ngClass]="{
      'class-1': booleanParam,
      'class-2 class-3': funcReturningBoolean()
      }">...</div>
  ...
  <h2 [ngClass]="getClass()">...</h2>
  ...
  ```

  ```js
  ...
  getClass() {
    ...
    return ['class-1', 'class-2'];
    // or
    return { 'class-1': booleanParam, 'class-2': booleanExp };
  }
  ...
  ```
