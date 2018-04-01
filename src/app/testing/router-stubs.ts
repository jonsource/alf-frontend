export {ActivatedRoute, Router, RouterLink, RouterOutlet} from '@angular/router';

import {Component, Directive, Injectable, Input} from '@angular/core';
import {NavigationExtras} from '@angular/router';

// @Directive({
// 	selector: '[routerLink]',
// 	host: {
// 		'(click)': 'onClick()'
// 	}
// })
// export class RouterLinkStubDirective {
// 	@Input('routerLink') linkParams: any;
// 	navigatedTo: any = null;
//
// 	onClick() {
// 		this.navigatedTo = this.linkParams;
// 	}
// }

// @Component({selector: 'router-outlet', template: ''})
// export class RouterOutletStubComponent { }

@Injectable()
export class RouterStub {
	navigate(commands: any[], extras?: NavigationExtras) { }
}


import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {convertToParamMap, ParamMap, Params} from '@angular/router';

@Injectable()
export class ActivatedRouteStub {

	private subjectParams = new BehaviorSubject(this.testParams);
	params = this.subjectParams.asObservable();
	private subjectQueryParams = new BehaviorSubject(this.testQueryParams);
	queryParams = this.subjectQueryParams.asObservable();
	private subjectUrl = new BehaviorSubject(this.testUrl);
	url = this.subjectUrl.asObservable();
	private subjectFragment = new BehaviorSubject(this.testFragment);
	fragment = this.subjectFragment.asObservable();

	private _testParams: Params;
	private _testQueryParams: Params;
	private _testUrl: any;
	private _testFragment: any;

	// constructor(testQueryParams: Params, testUrl: any) {
	//
	// }


	get testParams() { return this._testParams; }
	set testParams(params: {}) {
		this._testParams = params;
		this.subjectParams.next(this._testParams);
	}
	get testQueryParams() { return this._testQueryParams; }
	set testQueryParams(queryParams: {}) {
		this._testQueryParams = queryParams;
		this.subjectQueryParams.next(this._testQueryParams);
	}
	get testUrl() { return this._testUrl; }
	set testUrl(url: {}) {
		this._testUrl = [url];
		this.subjectUrl.next(this._testUrl);
	}

	get testFragment() { return this._testFragment; }
	set testFragment(fragment: {}) {
		this._testFragment = fragment;
		this.subjectFragment.next(this._testFragment);
	}

	get snapshot() {
		return { params: this.testParams, queryParams: this.testQueryParams, url: this.testUrl, fragment: this.fragment };
	}
}
