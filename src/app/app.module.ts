import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {SuiModule} from 'ng2-semantic-ui';
import {ResourceModule} from 'ngx-resource';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {AuthModule} from './auth/auth.module';
import {environment} from '../environments/environment';


@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		CommonModule,
		BrowserModule,
		FormsModule,
		HttpClientModule,
		AppRoutingModule,
		AuthModule.forRoot({message: 'auth_test', loginAPI: environment.apiEndpoint + '/login', loginUrl: '/admin/login'}),
		SuiModule,
		CoreModule,
		ResourceModule.forRoot()
	],
	providers: [
	],
	bootstrap: [AppComponent]
})

export class AppModule {
}
