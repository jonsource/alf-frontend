import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {AuthService} from 'app/auth/auth.service';
import {AppModule} from './app.module';
import {APP_BASE_HREF} from '@angular/common';

describe('AppComponent', () => {
	let component: AppComponent;
	let fixture: ComponentFixture<AppComponent>;
	let authService: AuthService;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				AppModule,
			],
			declarations: [
			],
			providers: [
				{ provide: APP_BASE_HREF, useValue: '/' }
			],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AppComponent);
		component = fixture.componentInstance;
		authService = fixture.debugElement.injector.get(AuthService);
		fixture.detectChanges();
	});

	it('should create the app', async(() => {
		expect(component).toBeTruthy();
	}));

	it('should inject AuthService', async(() => {
		expect(authService).toBeTruthy();
	}));

	// it(`should have as title 'app works!'`, async(() => {
	// 	const fixture = TestBed.createComponent(AppComponent);
	// 	const app = fixture.debugElement.componentInstance;
	// 	expect(app.title).toEqual('app works!');
	// }));
	//
	// it('should render title in a h1 tag', async(() => {
	// 	const fixture = TestBed.createComponent(AppComponent);
	// 	fixture.detectChanges();
	// 	const compiled = fixture.debugElement.nativeElement;
	// 	expect(compiled.querySelector('h1').textContent).toContain('app works!');
	// }));
});
