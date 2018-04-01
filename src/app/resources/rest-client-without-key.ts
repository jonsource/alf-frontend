import {Resource} from 'ngx-resource';
import {Http} from '@angular/http';
import {Inject} from '@angular/core';
import {environment} from '../../environments/environment';

export class RestClientWithoutKey extends Resource {

	constructor(
		@Inject(Http) http
	) {
		super(http);
	}

	getUrl(methodOptions?: any): string | Promise<string> {
		return environment.apiEndpoint + super.getUrl();
	}
}
