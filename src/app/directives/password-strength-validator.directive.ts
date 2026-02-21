import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

import * as zxcvbn from 'zxcvbn';

@Directive({
  selector: '[appPasswordStrengthValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordStrengthValidatorDirective,
    multi: true
  }]
})
export class PasswordStrengthValidatorDirective implements Validator {
  
  validate(control: AbstractControl): ValidationErrors | null {
    if(!control || !control.value) return null;

    const result = zxcvbn(control.value);
    const PASSWORD_IS_WEAK_OR_MEDIUM = result.score !== 4;

    return PASSWORD_IS_WEAK_OR_MEDIUM ? { invalidPasswordStrengthValidator: true } : null;
  }

}
