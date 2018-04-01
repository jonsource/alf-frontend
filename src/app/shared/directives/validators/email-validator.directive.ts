import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn} from '@angular/forms';

const E = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


export function emailValidator(): ValidatorFn {
	return (control: AbstractControl): {[key: string]: any} => {
		const email = E.test(control.value);
		return email ? null : {'wrongEmail': {value: control.value}};
	};
}

@Directive({
	selector: '[appEmail][ngModel]',
	providers: [{provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true}]
})
export class EmailValidatorDirective implements Validator {

	validate(control: AbstractControl): {[key: string]: any} {
		return emailValidator()(control);
	}
}


