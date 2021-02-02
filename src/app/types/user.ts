import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export interface User {
	picture?: string;
	_id?: string;
	email?: string;
	firstname?: string;
	lastname?: string;
	password?: string;
	posts?: string[];
	likedPosts?: string[];
}

export const atLeastOne = (validator: ValidatorFn) => (
	group: FormGroup,
): ValidationErrors | null => {
	const hasAtLeastOne =
		group &&
		group.controls &&
		Object.keys(group.controls).some(k => !validator(group.controls[k]));

	return hasAtLeastOne ? null : { atLeastOne: true };
};



export const isNullOrEmpty = (value: any) => !value || value.toString() === 'undefined' || value.toString() === 'null';
