import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';
import {SharedModule} from '../shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from '../app-routing.module';

import {LoginComponent} from './login/login.component';
import {ForgottenPasswordComponent} from './forgotten-password/forgotten-password.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';


@NgModule({
	declarations: [
		LoginComponent,
		ForgottenPasswordComponent,
		ResetPasswordComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		SuiModule,
		SharedModule,
		BrowserAnimationsModule,
		AppRoutingModule
		],
	providers: [

	]
})

export class AuthModule {

}
