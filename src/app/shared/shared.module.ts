import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';

import {MessageComponent} from './message/message.component';
import {OrderByPipe} from './directives/order-by.pipe';
import {EscapeHtmlPipe} from './directives/keep-html.pipe';
import {CssFriendlyPipe} from './directives/css-friendly.pipe';
import {EmailValidatorDirective} from './directives/validators/email-validator.directive';
import {NeedCharValidatorDirective,	NeedNumberValidatorDirective, NoSpaceValidatorDirective, SamePasswordValidatorDirective
} from './directives/validators/password-validator.directive';
import {MessageService} from './message.service';
import {GAService} from './ga.service';


@NgModule({
	declarations: [
		MessageComponent,
		OrderByPipe,
		EscapeHtmlPipe,
		CssFriendlyPipe,
		EmailValidatorDirective,
		NoSpaceValidatorDirective,
		NeedNumberValidatorDirective,
		NeedCharValidatorDirective,
		SamePasswordValidatorDirective,
	],
	imports: [
		CommonModule,
		FormsModule,
		SuiModule,
	],
	exports: [
		MessageComponent,
		OrderByPipe,
		EscapeHtmlPipe,
		CssFriendlyPipe,
		EmailValidatorDirective,
		NoSpaceValidatorDirective,
		NeedNumberValidatorDirective,
		NeedCharValidatorDirective,
		SamePasswordValidatorDirective,
	],
	providers: [
		MessageService,
		GAService
	]
})

export class SharedModule {

}
