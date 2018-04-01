import {Component} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {Router, NavigationEnd} from '@angular/router';
import {GAService} from './shared/ga.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less']
})
export class AppComponent {

	constructor(public router: Router, private authService: AuthService, public gaService: GAService) {
		this.router.events.subscribe(event => {
			if (event instanceof NavigationEnd) {
				this.gaService.setPage(event.urlAfterRedirects);
				this.gaService.sendPageview();
			}
		});
	}
}
