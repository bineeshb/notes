---
title: 'Lazily Loading Feature Modules'
date: 2018-10-08
---

## Feature module

```js
/**
 *  feature.module.ts
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
...

@NgModule({
    imports: [
        CommonModule,
        ...
        RouterModule.forChild(FEATURE_ROUTES)
    ],
    declarations: [
        // components
    ],
    providers: [
        // services
    ]
})

export class FeatureModule {}

/**
 *  app.routes.ts
 */
...
export const APP_ROUTES: Routes = [
    ...
    { path: 'feature', loadChildren: './feature/feature.module#FeatureModule' }
];
```
