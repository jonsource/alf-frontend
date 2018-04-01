import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MainComponent} from './main.component';
import {AuthService} from 'app/auth/auth.service';
import {LoggedInUser} from 'app/resources/user.resource';
import {AppModule} from 'app/app.module';
import {APP_BASE_HREF} from '@angular/common';

describe('MainComponent', () => {
	let component: MainComponent;
	let fixture: ComponentFixture<MainComponent>;

	const DEFAULT_USER: LoggedInUser = {
		id: 1,
		client_id: 1,
		email: 'email',
		fullname: 'fullname',
		password: 'password',
		api_key: 'api_key',
		frontend_rights: {live_demo: true, config: true, zones: true}
	};

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				AppModule
			],
			declarations: [
			],
			providers: [
				{ provide: APP_BASE_HREF, useValue: '/' },
				AuthService,
			]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MainComponent);
		component = fixture.componentInstance;
		component.user = DEFAULT_USER;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
