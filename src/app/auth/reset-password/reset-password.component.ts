import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ResetPasswordResource} from '../../resources/reset-password.resource';
import {Message, MessageService, MessageState} from '../../shared/message.service';
import {Subscription} from 'rxjs/Subscription';

const ERROR_MESSAGE = {
	state: MessageState.NEGATIVE,
	header: 'Invalid link',
	description: 'This link is invalid.'
};

@Component({
	selector: 'app-reset-password',
	templateUrl: './reset-password.component.html',
	providers: [ResetPasswordResource]
})

export class ResetPasswordComponent implements OnDestroy, OnInit {
	resetKey: string;
	password: string;
	confirmation: string;
	isLinkValid: boolean;
	message: Message = ERROR_MESSAGE;
	passwordSubscription: Subscription;
	resetKeySubscription: Subscription;

	constructor(private activatedRoute: ActivatedRoute,
				private router: Router,
				private resetPasswordResource: ResetPasswordResource,
				private messageService: MessageService) {
	}

	ngOnInit() {
		this.resetKey = this.activatedRoute.snapshot.params['reset_key'];
		this.resetKeySubscription = this.resetPasswordResource.get({token: this.resetKey}).$observable.subscribe((res) => {
			this.isLinkValid = res.ok;
		});
	}

	resetPassword() {
		if (this.password === this.confirmation) {
			const response = this.resetPasswordResource.postPassword({password: this.password, reset_key: this.resetKey});
			this.passwordSubscription = response.$observable.subscribe(
				(res) => {
					this.messageService.setMessage({state: MessageState.INFO, header: 'Please login with your new password'});
					this.router.navigate(['/login']);
				},
				(error: Response) => {
					this.isLinkValid = false;
				});
		}
	}

	ngOnDestroy() {
		if (this.passwordSubscription) {
			this.passwordSubscription.unsubscribe();
		}
		if (this.resetKeySubscription) {
			this.resetKeySubscription.unsubscribe();
		}
	}

}
