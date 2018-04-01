import {AuthService} from '../auth/auth.service';
import {Http} from '@angular/http';
import {Inject} from '@angular/core';
import * as _ from 'lodash';
import {RestClientWithoutKey} from './rest-client-without-key';

export class RestClient extends RestClientWithoutKey {

	constructor(
		@Inject(Http) http,
		@Inject(AuthService) protected authService
	) {
		super(http);
	}

	getHeaders(methodOptions?: any): any | Promise<any> {
		const headers = super.getHeaders();
		headers.Authorization = _.get(this.authService.getUser(), 'api_key');
		return headers;
	}

}
