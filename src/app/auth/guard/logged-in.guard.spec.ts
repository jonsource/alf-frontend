import {TestBed, inject} from '@angular/core/testing';
import {LoggedInGuard} from 'app/auth/guard/logged-in.guard';
import {AppModule} from 'app/app.module';
import {APP_BASE_HREF} from '@angular/common';

describe('LoggedInGuard', () => {
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

	it('should create', inject([LoggedInGuard], (guard: LoggedInGuard) => {
		expect(guard).toBeTruthy();
	}));
});
