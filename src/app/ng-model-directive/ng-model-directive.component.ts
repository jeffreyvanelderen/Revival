import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-model-directive',
  imports: [FormsModule], // Import FormsModule for ngModel!
  templateUrl: './ng-model-directive.component.html',
  styleUrl: './ng-model-directive.component.scss'
})
export class NgModelDirectiveComponent {

  name: string = '';

}
