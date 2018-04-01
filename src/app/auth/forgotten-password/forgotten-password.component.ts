import {Component, OnInit, Input} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ResetPasswordResource} from 'app/resources/reset-password.resource';
import {Message, MessageState} from '../../shared/message.service';

@Component({
	selector: 'app-forgotten-password',
	templateUrl: './forgotten-password.component.html',
	providers: [ResetPasswordResource],
	animations: [
			trigger('formEmail', [
				state('in',
				style({
					opacity: 1,
					transform: 'translateX(0)'
				})
			),
			transition('void => *', [
				style({
					opacity: 0,
					transform: 'translateX(-100%)'
				}),
				animate('0.2s ease-in')
			]),
			transition('* => void', [
				animate('0.5s ease-out', style({
					opacity: 0,
					transform: 'translateX(100%)'
				}))
			])
		])
	]
})
export class ForgottenPasswordComponent implements OnInit {
	@Input() defaultEmail: string;
	showForgottenPasswordForm = false;
	goodMessage: Message;

	constructor(private resetPasswordResource: ResetPasswordResource) {
	}

	ngOnInit() {
	}

	showForm() {
		this.showForgottenPasswordForm = true;
	}

	sendEmail(email: string) {
		const message = this.resetPasswordResource.post({email: email}).$observable;
		this.showForgottenPasswordForm = false;
	}

	animationDone(event: any, email: any) {
		if (event.toState === 'void') {
			this.goodMessage = {
				header: `Your password was send to your email ${email}`,
				description: 'Please check your email and reset your password.',
				state: MessageState.INFO
			};
		}
	}

	closeMessage() {
		this.goodMessage = null;
	}

}
