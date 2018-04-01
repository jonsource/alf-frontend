import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../auth.service';

@Injectable()
export class AllowedGuard implements CanActivate {
	constructor(private authService: AuthService, private router: Router) {
	}

	canActivate(next: ActivatedRouteSnapshot,
				state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		// console.log('activated route: ', next);
		// console.log('router state: ', state.url);
		const isAllowed = this.authService.isAllowed(state.url);
		if (!isAllowed) {
			this.router.navigate(['not-allowed']);
		}
		return isAllowed;
	}
}
