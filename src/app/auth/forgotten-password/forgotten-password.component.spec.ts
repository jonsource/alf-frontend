import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppModule} from '../../app.module';
import {ForgottenPasswordComponent} from './forgotten-password.component';
import {APP_BASE_HREF} from '@angular/common';

describe('ForgottenPasswordComponent', () => {
	let component: ForgottenPasswordComponent;
	let fixture: ComponentFixture<ForgottenPasswordComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				AppModule,
			],
			providers: [
				{ provide: APP_BASE_HREF, useValue: '/' }
			]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ForgottenPasswordComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
