import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { OnlyLettersValidatorDirective } from './validator/only-letters-validator.directive';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule, OnlyLettersValidatorDirective, MatInputModule, MatFormFieldModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss',
})
export class TemplateFormComponent {
  // Set via input in HTML
  firstname: string = '';
  // Set via input in HTML
  email: string = '';


  onPressSubmit() {
    alert(`values: firstName=${this.firstname} and email=${this.email}`);
  }
}
