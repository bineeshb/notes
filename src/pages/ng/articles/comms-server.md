---
title: 'Communicating with the Server'
date: 2018-10-31
---

## HTTP

```js
/**
 *  some.service.ts
 */
...
import { HttpClient } from '@angular/common/http';
...
export class SomeService {
    constructor(private http: HttpClient) {}
    ...
}

/**
 *  app.module.ts
 */
...
import { HttpClientModule } from '@angular/common/http';
...
@NgModule({
    imports: [
        ...,
        HttpClientModule
    ],
    ...
})
...
```

## HTTP - Get, Post, Put and Delete

```js
/**
 *  some.service.ts
 */
...
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
...
export class SomeService {
    constructor(private http: HttpClient) {}

	getService(): Observable<TYPE> {
		return this.http.get<TYPE>('/SERVICE_URL')
			.pipe(catchError(funcToHandleError));
	}

	postService(requestObj): Observable<TYPE> {
		let options = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };

		return this.http.post<TYPE>('/SERVICE_URL', requestObj, options)
			.pipe(catchError(funcToHandleError));
	}

	putService(requestObj): Observable<TYPE> {
		let options = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };

		return this.http.put<TYPE>('/SERVICE_URL', requestObj, options)
			.pipe(catchError(funcToHandleError));
	}

	deleteService(): Observable<TYPE> {
		return this.http.delete<TYPE>('/SERVICE_URL')
			.pipe(catchError(funcToHandleError));
	}
	...
}

/**
 *  some.component.ts
 */
...
import { SomeService } from './some.service';
...
export class SomeComponent {
	constructor(private someService: SomeService) {}
	...
	callGetService() {
		this.someService.getService().subscribe(response => console.log(response));
	}

	callPostService() {
		this.someService.postService(requestObj).subscribe(response => console.log(response));
	}

	callPutService() {
		this.someService.putService(requestObj).subscribe(response => console.log(response));
	}

	callDeleteService() {
		this.someService.deleteService().subscribe(response => console.log(response));
	}
}
```

## Rx - tap, map

```js
/**
 *  some.service.ts
 */
...
import { tap, map, catchError } from 'rxjs/operators';
...
export class SomeService {
	...
	funcA(): Observable<TYPE> {
		return this.http.get<TYPE>('/SERVICE_URL')
			.pipe(tap(response => {
				...
			}))
			.pipe(catchError(funcToHandleError));
	}

	funcB(): Observable<TYPE> {
		return this.http.get<TYPE>('/SERVICE_URL')
			.pipe(map(response => {
				...
				return response;
			}))
			.pipe(catchError(funcToHandleError));
	}
}
```
