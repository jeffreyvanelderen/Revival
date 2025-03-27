import {ValidatorFn, AbstractControl, ValidationErrors} from '@angular/forms';
import {ONLY_LETTERS} from '../utils/regex.util';

export const ONLY_LETTERS_ERROR = 'onlyLettersError';

export const onlyLetters =
  (): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    const isValid = ONLY_LETTERS.test(control.value);
    return isValid ? null : {[`${ONLY_LETTERS_ERROR}`]: {value: control.value}};
  };
