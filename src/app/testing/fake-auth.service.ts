import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {LoggedInUser, LoggedInUserRights} from '../resources/user.resource';
import {environment} from '../../environments/environment';

export const FAKE_DEFAULT_USER: LoggedInUser = {
		id: 1,
		client_id: 1,
		email: 'email',
		fullname: 'fullname',
		password: 'password',
		api_key: 'api_key',
		frontend_rights: {live_demo: true, config: true, zones: true, stats: true, ad_scan: true, super_admin: true}
	};


@Injectable()
export class FakeAuthService {

	constructor(private http: Http) {
	}

	login(email: string, password: string): Observable<Response> {
		return this.http.post(
			environment.apiEndpoint + '/login',
			{email: email, password: password}
		)
			.map(response => {
				console.log('logged in');
				localStorage.setItem('loggedinuser', response.text());
				return response;
			});
	}

	logout(): void {
		console.log('logout');
		localStorage.removeItem('loggedinuser');
		location.reload();
	}

	isLoggedIn(): boolean {
		return localStorage.getItem('loggedinuser') !== null;
	}

	getLoggedInUser(): LoggedInUser {
		return FAKE_DEFAULT_USER;
	}

	getRights(): LoggedInUserRights {
		return this.getLoggedInUser().frontend_rights;
	}

	isAllowed(url: string): boolean {
		const userRights = this.getLoggedInUser().frontend_rights;
		console.log(userRights);
		if (url.includes('installation') || url.includes('debug-page')) {
			return userRights['config'];
		}
		if (url.includes('zone')) {
			return userRights['zones'];
		}
		if (url.includes('live-demo')) {
			return userRights['live_demo'];
		}
		if (url.includes('ad-scan')) {
			return userRights['super_admin'];
		}
		return true;
	}


}
