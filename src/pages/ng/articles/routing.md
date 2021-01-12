---
title: 'Routing'
date: 2021-01-08
---

- resolve - data resolve before loading the path/component
- canActivate 
- canDeactivate
- children
- loadChildren - lazy loading


| Eager Loading | Lazy Loading | Pre-Loading |
|---|---|---|
| default | on demand | loads after eager loading files/modules based on preLoadingStrategy |


## Basic Routing

```html
<!--
    index.html
  -->
...
<head>
    <base href="/">
    ...
</head>
...
```

```js
/**
 *  app.routes.ts
 */
import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
    { path: 'urlPathA', component: AComponent },
    { path: 'urlPathB/:id', component: BComponent },
    { path: '', redirectTo: 'urlPathA', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

/**
 *  app.module.ts
 */
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';

@NgModule({
    imports: [
        ...
        RouterModule.forRoot(APP_ROUTES)
    ],
    ...
})
...

/**
 *  b.component.ts
 */
...
import { Router, ActivatedRoute } from '@angular/router';
...
export class BComponent implements OnInit {
    constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        console.log(this.activatedRoute.snapshot.params['id']);
    }

    func() {
        ...
        this.router.navigate(['urlPathA'], optionalParam);
    }
}
```

```html
<!--
    app.component.html
  -->
...
<nav>
    <a routerLink="/urlPathA"
       routerLinkActive='className'
       [routerLinkActiveOptions]="{exact: true}">Link</a>
    <a [routerLink]="['/urlPathB', param]" routerLinkActive='className'>Link</a>
</nav>
...
<router-outlet></router-outlet>
...
```

## Listen to Route Parameter changes

```js
/**
 *  a.component.ts
 */
...
import { ActivatedRoute, Params } from '@angular/router';
...
export class AComponent implements OnInit {
    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.activatedRoute.params.forEach((params: Params) => {
            console.log(params['id']);
        });
    }
}
```

## Route guards - canActivate, canDeactivate

- ### canActivate

Navigates to the route if condition is true.

```js
/**
 * route-activator.service.ts
 */
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';

@Injectable()
export class RouteActivatorService implements CanActivate {
    ...
    canActivate(route: ActivatedRouteSnapshot) {
        ...
        console.log(route.params['id']);
        ...
        return booleanValue;
    }
}

/**
 *  app.module.ts
 */
import { RouteActivatorService } from './route-activator.service';

@NgModule({
    ...
    providers: [ RouteActivatorService ]
})
...

/**
 * app.routes.ts
 */
...
import { RouteActivatorService } from './route-activator.service';

export const APP_ROUTES: Routes = [
    ...
    { path: 'urlPathB/:id', component: BComponent,
        canActivate: [RouteActivatorService] },
    ...
];
```

- ### canDeactivate

Navigates out of the route if condition is true.

```js
/**
 * route-activator.service.ts
 */
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable()
export class RouteActivatorService implements CanDeactivate {
    ...
    canDeactivate(component) {
        ...
        return booleanValue;
    }
}

/**
 *  app.module.ts
 */
import { RouteActivatorService } from './route-activator.service';

@NgModule({
    ...
    providers: [ RouteActivatorService ]
})
...

/**
 * app.routes.ts
 */
...
import { RouteActivatorService } from './route-activator.service';

export const APP_ROUTES: Routes = [
    ...
    { path: 'urlPathB/:id', component: BComponent,
        canDeactivate: [RouteActivatorService] },
    ...
];
```

- ### resolve

Pre-loads data for a component

```js
/**
 * route-resolver.service.ts
 */
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable()
export class RouteResolverService implements Resolve {
    ...
    resolve() {
        ...
        return asyncDataObservable;
    }
}

/**
 *  app.module.ts
 */
import { RouteResolverService } from './route-resolver.service';

@NgModule({
    ...
    providers: [ RouteResolverService ]
})
...

/**
 * app.routes.ts
 */
...
import { RouteResolverService } from './route-resolver.service';

export const APP_ROUTES: Routes = [
    ...
    { path: 'urlPathA', component: AComponent,
        resolve: { param: RouteResolverService } },
    ...
];

/*
 * a.component.ts
 */
...
import { ActivatedRoute } from '@angular/router';
...
export class AComponent implements OnInit {
    constructor (private route: ActivatedRoute) {}

    ngOnInit() {
        this.data = this.route.snapshot.data['param'];
    }
}
```
