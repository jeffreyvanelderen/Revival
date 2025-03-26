import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { ONLY_LETTERS } from '../../utils/regex.util';

@Component({
  selector: 'app-reactive-form-validation',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form-validation.component.html',
  styleUrl: './reactive-form-validation.component.scss'
})
export class ReactiveFormValidationComponent {

    nameFormControl = new FormControl('', [
      Validators.minLength(4), 
      Validators.required, 
      Validators.pattern(ONLY_LETTERS)
    ]);

}
