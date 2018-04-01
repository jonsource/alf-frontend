import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {MainComponent} from './core/main/main.component';
import {LoggedInGuard} from './auth/guard/logged-in.guard';
import {AllowedGuard} from 'app/auth/guard/allowed.guard';
import {LoginComponent} from './auth/login/login.component';
import {ResetPasswordComponent} from './auth/reset-password/reset-password.component';
import {PageWithMessageComponent} from 'app/core/page-with-message/page-with-message.component';

const routes: Routes = [
	{
		path: '', component: MainComponent, children: [
			{path: '', component: PageWithMessageComponent, data: [{message: 'Public page.'}]},
			{path: 'protected', component: PageWithMessageComponent, canActivate: [LoggedInGuard],
				data: [{message: 'Protected page.'}]},
			{path: 'protected/more', component: PageWithMessageComponent, canActivate: [LoggedInGuard, AllowedGuard],
				data: [{message: 'More protected page.'}]},
		]
	},
	{path: 'login', component: LoginComponent},
	{path: 'reset-password/:reset_key', component: ResetPasswordComponent},
	{path: 'change-password/:reset_key', component: ResetPasswordComponent},

	{path: '**', redirectTo: 'not-found'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
	exports: [RouterModule],
	providers: [
		LoggedInGuard, AllowedGuard
	],
})
export class AppRoutingModule {
}
