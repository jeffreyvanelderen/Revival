import {Component} from '@angular/core';

@Component({
  selector: 'app-attribute',
  imports: [],
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.scss',
})
export class AttributeComponent {
  getRole() {
    return 'some-role';
  }
}
