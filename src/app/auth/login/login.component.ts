import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Message, MessageService, MessageState} from 'app/shared/message.service';
declare function require(moduleName: string): any;
const {version : appVersion} = require('../../../../package.json');

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.less'],
})

export class LoginComponent implements OnInit {
	messages: Message[] = [];
	version: string;

	constructor(private authService: AuthService, private router: Router,
				private route: ActivatedRoute, private messageService: MessageService) {
	}

	ngOnInit() {
		this.version = appVersion;
		const messages = this.messageService.getMessages();
		messages.forEach(message => {
			if (message) {
				this.messages.push(message);
				this.messageService.removeMessage(message);
			}
		});
	}

	login(email: string, password: string) {
		this.messages = [];
		this.authService.login(email, password).subscribe(
			(data) => {
				this.router.navigate(['protected']);
			},
			(err) => {
				switch (err.status) {
					case 401: {
						const text = err.statusText === 'Unauthorized' ? 'Your username or password is wrong.' : 'Something went wrong (401)';
						this.messages.push({state: MessageState.NEGATIVE, header: text});
						break;
					}
					default: {
						this.messages.push({state: MessageState.NEGATIVE, header: 'Something went wrong'});
						break;
					}
				}
			}
		);
	}


}
