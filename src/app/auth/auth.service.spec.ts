import {TestBed, inject} from '@angular/core/testing';
import {AppModule} from 'app/app.module';
import {AuthService} from './auth.service';
import {APP_BASE_HREF} from '@angular/common';


describe('AuthService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				AppModule,
			],
			providers: [
				{ provide: APP_BASE_HREF, useValue: '/' }
			]
		});
	});

	it('should create', inject([AuthService], (service: AuthService) => {
		expect(service).toBeTruthy();
	}));
});
