import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SuiModule} from 'ng2-semantic-ui';
import {AppRoutingModule} from '../app-routing.module';
import {MainComponent} from './main/main.component';
import {PageWithMessageComponent} from './page-with-message/page-with-message.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
	declarations: [
		MainComponent,
		PageWithMessageComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		SuiModule,
		AppRoutingModule,
		SharedModule,
	],
	providers: [

	]
})

export class CoreModule {

}
