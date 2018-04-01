import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {LoggedInUser} from '../resources/user.resource';
import {environment} from '../../environments/environment';

@Injectable()
export class AuthService {

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
		return <LoggedInUser>JSON.parse(localStorage.getItem('loggedinuser'));
	}

	isAllowed(url: string): boolean {
		const userRights = this.getLoggedInUser().frontend_rights;
		if (url.includes('more')) {
			return userRights['more'];
		}
		return false;
	}


}
