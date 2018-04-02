import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SuiModule} from 'ng2-semantic-ui';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ForgottenPasswordComponent} from './forgotten-password/forgotten-password.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {AuthService, AuthServiceConfig, AUTH_CONFIG} from './auth.service';

export const authRoutes: Routes = [
		{path: 'login', component: LoginComponent},
		{path: 'reset-password/:reset_key', component: ResetPasswordComponent},
		{path: 'change-password/:reset_key', component: ResetPasswordComponent}
	];

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
		// RouterModule.forChild(authRoutes)
		],
	providers: [
	]
})

export class AuthModule {
	static forRoot(config?: AuthServiceConfig): ModuleWithProviders {
		return {
			ngModule: AuthModule,
			providers: [
				{ provide: AUTH_CONFIG, useValue: config },
				AuthService
			]
		};
	}
}
