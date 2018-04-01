import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {SuiModule} from 'ng2-semantic-ui';
import {ResourceModule} from 'ngx-resource';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {CoreModule} from './core/core.module';
import {AuthModule} from './auth/auth.module';
import {AuthService} from './auth/auth.service';


@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		CommonModule,
		BrowserModule,
		FormsModule,
		HttpModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		SuiModule,
		CoreModule,
		AuthModule,
		ResourceModule.forRoot()
	],
	providers: [
		AuthService,
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
