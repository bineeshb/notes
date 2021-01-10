---
title: 'Angular app Structure'
date: 2018-10-02
---

## Bootstrapping Angular app

1. angular.json

    ```js
    ...
      "index": "src/index.html",
      "main": "src/main.ts",
    ...
    ```

2. main.ts

    ```js
    ...
    import { AppModule } from './app/app.module';
    ...
    platformBrowserDynamic().bootstrapModule(AppModule)
          .catch(err => console.log(err));
    ```

3. app.module.ts

    ```js
    ...
    import { AppComponent } from './app.component';
    ...
    @NgModule({
        ...
        declarations: [ AppComponent ],
        bootstrap: [ AppComponent ]
    })

    export class AppModule { }
    ```

4. app.component.ts

    ```js
    ...
    @Component({
        selector: 'app-root',
        ...
    })

    export class AppComponent {
        ...
    }
    ```

5. index.html

    ```html
    ...
    <body>
      <app-root></app-root>
    </body>
    ...
    ```

## Accessing Static files

```js
/**
 * angular.json
 */
...
  "assets": [
    ...
    "src/assets"
  ],
  "styles": [
    ...
    "src/styles.scss"
  ],
  "scripts": [
    ...
  ]
...
```

## App module

```js
/**
 *  app.module.ts
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
...

@NgModule({
    imports: [
      // modules
      BrowserModule,
      ...
      RouterModule.forRoot(APP_ROUTES)
    ],
    declarations: [
      // components
      // directives
      // pipes
    ],
    providers: [
      // services
    ],
    bootstrap: [
      // root component
    ]
})

export class AppModule { }
```

## Component

```js
/**
 *  some.component.ts
 */
import { Component } from '@angular/core';
...

@Component({
    selector: 'app-some-component',

    /** including component template */
    templateUrl: `
      // path to external template
    `,
    /** or */
    template: `
      // inline template
    `,

    /** including component styles */
    styleUrls: [
      // paths to external stylesheets
    ],
    /** or */
    styles: [
      // array of inline styles
    ]
})

export class SomeComponent {
    ...
}
```
