---
title: 'Forms'
date: 2018-10-11
---

## Template-driven form

```js
/**
 *  app.module.ts
 */
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ...
    FormsModule
  ],
  ...
})
...


/**
 *  a.component.ts
 */
...
export class AComponent {
  paramA: string;
  paramB: string;
  mouseoverLogin: boolean;
  ...
  formSubmitted(formValues) {
    console.log(formValues);
  }
}
```

```html
<!--
    a.component.html
  -->
...
<form #formVar="ngForm" (ngSubmit)="formSubmitted(formVar.value)" novalidate>
  ...
  <input type="text" id="paramA" name="paramA" (ngModel)="paramA" required>
  <span *ngIf="formVar.controls.paramA?.invalid
               && (formVar.controls.paramA?.touched || mouseoverLogin)">Error</span>
  ...
  <input type="text" id="paramB" name="paramB" [(ngModel)]="paramB" required>
  <span *ngIf="formVar.controls.paramB?.invalid &&
               (formVar.controls.paramB?.touched || mouseoverLogin)">Error</span>
  ...
  <div ngModelGroup="groupParam">
    ...
    <input type="text" id="paramC" name="paramC" [(ngModel)]="paramC">
    <span *ngIf="formVar.controls.groupParam?.controls.paramC.invalid &&
                 (formVar.controls.groupParam?.controls.paramC.touched || mouseoverLogin)">Error</span>
    ...
    <input type="text" id="paramD" name="paramD" [(ngModel)]="paramD">
    <span *ngIf="formVar.controls.groupParam?.controls.paramD?.invalid &&
                 (formVar.controls.groupParam?.controls.paramD?.touched || mouseoverLogin)">Error</span>
    ...
  </div>
  ...
  <span (mouseenter)="mouseoverLogin=true" (mouseleave)="mouseoverLogin=false">
    <button type="submit" [disabled]="formVar.invalid">Submit</button>
  </span>
  ...
</form>
...
```

### Limitations

* Not unit testable
* For larger forms, all validation logic in template makes it more complex
* Difficult for cross field validation

## Reactive / Model-driven form

```js
/**
 *  app.module.ts
 */
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    ...
    ReactiveFormsModule
  ],
  ...
})
...


/**
 *  a.component.ts
 */
...
import { FormGroup, FormControl } from '@angular/forms';
...
export class AComponent implements OnInit {
  formVar: FormGroup;
  groupParam: FormGroup;
  paramA: FormControl = new FormControl();
  paramB: FormControl = new FormControl();
  paramC: FormControl = new FormControl();
  paramD: FormControl = new FormControl();
  mouseoverLogin: boolean;
  ...
  ngOnInit() {
    this.groupParam = new FormGroup({
      paramC: this.paramC,
      paramD: this.paramD
    });
    this.formVar = new FormGroup({
      paramA: this.paramA,
      paramB: this.paramB,
      groupParam: this.groupParam
    });
  }
  ...
  formSubmitted(formValues) {
    console.log(formValues);
  }
}
```

```html
<!--
    a.component.html
  -->
...
<form [formGroup]="formVar" (ngSubmit)="formSubmitted(formVar.value)" novalidate>
  ...
  <input type="text" id="paramA" formControlName="paramA">
  <span *ngIf="formVar.controls.paramA?.invalid
               && (formVar.controls.paramA?.touched || mouseoverLogin)">Error</span>
  ...
  <input type="text" id="paramB" formControlName="paramB">
  <span *ngIf="formVar.controls.paramB?.invalid &&
               (formVar.controls.paramB?.touched || mouseoverLogin)">Error</span>
  ...
  <div formGroupName="groupParam">
    ...
    <input type="text" id="paramC" formControlName="paramC">
    <span *ngIf="formVar.controls.groupParam?.controls.paramC.invalid &&
                 (formVar.controls.groupParam?.controls.paramC.touched || mouseoverLogin)">Error</span>
    ...
    <input type="text" id="paramD" formControlName="paramD">
    <span *ngIf="formVar.controls.groupParam?.controls.paramD?.invalid &&
                 (formVar.controls.groupParam?.controls.paramD?.touched || mouseoverLogin)">Error</span>
    ...
  </div>
  ...
  <span (mouseenter)="mouseoverLogin=true" (mouseleave)="mouseoverLogin=false">
    <button type="submit" [disabled]="formVar.invalid">Submit</button>
  </span>
  ...
</form>
...
```

## Validators

```js
/**
 *  some.component.ts
 */
import { FormControl, Validators } from '@angular/forms';
...
export class SomeComponent {
	paramA: FormControl;
	paramB: FormControl;
	...
	ngOnInit() {
		this.paramA = new FormControl('', Validators.required);
		this.paramB = new FormControl('', [ Validators.required, Validators.maxLength(400) ]);
	}
}
```

```html
<!--
    some.component.html
  -->
...
<input type="text" id="paramA" formControlName="paramA">
<span *ngIf="paramA?.invalid && paramA?.dirty">Error</span>
...
<input type="text" id="paramB" formControlName="paramB">
<span *ngIf="paramB?.invalid && paramB?.dirty && paramB?.errors.required">Error</span>
<span *ngIf="paramB?.invalid && paramB?.dirty && paramB?.errors.maxlength">Max Length Error</span>
...
```

## Custom Validators

```js
/**
 *  some.validator.ts
 */
import { FormControl } from '@angular/forms';

export function someValidator(control: FormControl): {[key: string]: any} {
	...
	return (condition) ? { errorKey: value } : null;
}
```

```js
/**
 *  some.component.ts
 */
import { FormControl, Validators } from '@angular/forms';
import { someValidator } from './some.validator';
...
export class SomeComponent {
	paramC: FormControl;
	...
	ngOnInit() {
		this.paramC = new FormControl('', [ Validators.required, someValidator ]);
	}
}
```

```html
<!--
    some.component.html
  -->
...
<input type="text" id="paramC" formControlName="paramC">
<span *ngIf="paramC?.invalid && paramC?.dirty && paramC?.errors.required">Error</span>
<span *ngIf="paramC?.invalid && paramC?.dirty && paramC?.errors.errorKey">Error: {{ paramC?.errors.errorKey }}</span>
...
```
