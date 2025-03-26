import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { onlyLetters } from '../../../form-validators';

/*
  This way is only used for template forms, not reactive
*/

@Directive({
  selector: '[appOnlyLettersValidator]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: OnlyLettersValidatorDirective, multi: true} // Add this to expose this validator to the template form!
  ],
})
export class OnlyLettersValidatorDirective implements Validator { // Implement Validator interface

  // This becomes the following in the template: 
  // <input id="firstnameInput" type="text" [(ngModel)]="firstname" appOnlyLettersValidator [appOnlyLetters]="firstname" />
  @Input('appOnlyLetters') onlyLetters = ''; // Add Input() so we can receive the necessary parameters

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    // existing validator function used for reactive forms, we can reuse it; this function returns a function which we can call
    return this.onlyLetters ? onlyLetters()(control) : null;
  }

}
