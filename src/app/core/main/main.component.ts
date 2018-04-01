import {OnInit, Component, LOCALE_ID, Inject} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {LoggedInUser} from '../../resources/user.resource';
import {Router} from '@angular/router';
import {Language} from '../language';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.less']
})

export class MainComponent implements OnInit {
	languages: [Language] = [
		{code: 'en', label: 'English'},
		// {code: 'cs', label: 'Čeština'},
		// {code: 'de', label: 'Deutsch'},
		// {code: 'pl', label: 'Polszczyzna'},
	];

	public user: LoggedInUser;

	constructor(private authService: AuthService, private router: Router, @Inject(LOCALE_ID) public localeId: string) {
	}

	ngOnInit() {
		this.user = this.authService.getLoggedInUser();
	}

	logout() {
		this.authService.logout();
		return this.router.navigate(['login']);
	}

}
