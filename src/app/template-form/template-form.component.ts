import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.scss'
})
export class TemplateFormComponent {

  // Set via input in HTML
  firstname: string = '';
  // Set via input in HTML
  email: string = '';

  onPressSubmit() {
    alert(`values: firstName=${this.firstname} and email=${this.email}`)
  }

}
