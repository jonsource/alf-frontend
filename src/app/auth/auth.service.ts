import {Injectable, InjectionToken, Inject, Optional} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {LoggedInUser} from '../resources/user.resource';

export const AUTH_CONFIG = new InjectionToken<AuthServiceConfig>('auth.config');

@Injectable()
export class AuthService {
	public config: AuthServiceConfig;

	constructor(private http: HttpClient,
				@Optional() @Inject(AUTH_CONFIG) config: AuthServiceConfig,
	) {
		if (!config) {
			config = {message: 'zlo', loginAPI: '/login', loginUrl: '/login'};
		}
		this.config = config;
	}

	login(email: string, password: string): Observable<LoggedInUser> {
		console.log(this.config);
		return this.http.post<LoggedInUser>(
			// environment.apiEndpoint + '/login',
			this.config.loginAPI,
			{email: email, password: password}
		)
			.map(response => {
				console.log('logged in');
				localStorage.setItem('loggedinuser', JSON.stringify(response));
				return response;
			});
	}

	logout(): void {
		console.log('logout');
		localStorage.removeItem('loggedinuser');
		location.reload();
	}

	isLoggedIn(): boolean {
		console.log(this.config.message);
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

export interface AuthServiceConfig {
	message: string;
	loginUrl: string;
	loginAPI: string;
}
