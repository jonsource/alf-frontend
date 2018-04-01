import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppModule} from '../../app.module';
import {LoginComponent} from './login.component';
import {APP_BASE_HREF} from '@angular/common';

describe('LoginComponent', () => {
	let component: LoginComponent;
	let fixture: ComponentFixture<LoginComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				AppModule,
			],
			providers: [
				{ provide: APP_BASE_HREF, useValue: '/' }
				// AuthService,
			]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LoginComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
