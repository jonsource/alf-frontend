import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn} from '@angular/forms';


export function noSpaceValidator(): ValidatorFn {
	return (control: AbstractControl): {[key: string]: any} => {
		const noSpace = new RegExp('^[\\S]+$').test(control.value);
		return noSpace ? null : {'noSpace': {value: control.value}};
	};
}

export function numberValidator(): ValidatorFn {
	return (control: AbstractControl): {[key: string]: any} => {
		const needNumber = new RegExp('[0-9]').test(control.value);
		return needNumber ? null : {'needNumber': {value: control.value}};
	};
}

export function characterValidator(): ValidatorFn {
	return (control: AbstractControl): {[key: string]: any} => {
		const needChar = new RegExp('[a-zA-Z]').test(control.value);
		return needChar ? null : {'needChar': {value: control.value}};
	};
}

export function sameValidator(same: string): ValidatorFn {
	return (control: AbstractControl): {[key: string]: any} => {
		return same === control.value ? null : {'samePassword': {value: control.value}};
	};
}

@Directive({
	selector: '[appNoSpace][ngModel]',
	providers: [{provide: NG_VALIDATORS, useExisting: NoSpaceValidatorDirective, multi: true}]
})
export class NoSpaceValidatorDirective implements Validator {

	validate(control: AbstractControl): {[key: string]: any} {
		return noSpaceValidator()(control);
	}
}

@Directive({
	selector: '[appNeedNumber][ngModel]',
	providers: [{provide: NG_VALIDATORS, useExisting: NeedNumberValidatorDirective, multi: true}]
})
export class NeedNumberValidatorDirective implements Validator {

	validate(control: AbstractControl): {[key: string]: any} {
		return numberValidator()(control);
	}
}

@Directive({
	selector: '[appNeedChar][ngModel]',
	providers: [{provide: NG_VALIDATORS, useExisting: NeedCharValidatorDirective, multi: true}]
})
export class NeedCharValidatorDirective implements Validator {

	validate(control: AbstractControl): {[key: string]: any} {
		return characterValidator()(control);
	}
}

@Directive({
	selector: '[appSamePassword][ngModel]',
	providers: [{provide: NG_VALIDATORS, useExisting: SamePasswordValidatorDirective, multi: true}]
})
export class SamePasswordValidatorDirective implements Validator {
	@Input() appSamePassword: string;

	validate(control: AbstractControl): {[key: string]: any} {
		return this.appSamePassword ? sameValidator(this.appSamePassword)(control) : null;
	}
}


