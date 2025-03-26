import {Component, EventEmitter, Input, Output} from '@angular/core';
import {HobbyService} from '../../services/hobby.service';

@Component({
  selector: 'app-input-output',
  imports: [],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.scss',
})
export class InputOutputComponent {
  // These @Input tags are like properties: They can be set via the parent component, using this component:
  // <app-input-output name="Jeffrey" lastName="Vanelderen" /> OR <app-input-output [name]="someName" [lastName]="someLastName" /> (when parent component need to interpret the values!)
  @Input() name?: string;
  @Input() lastName?: string;

  hobbies?: string;

  // Output tag is like an outgoing event from this component to the parent component, notifying other components something has happened
  // You can call this via the template or via the methods below using like so: <button (onclick)="onSubmitEvent.emit('Button was pressed!')" ></button>

  // parent component uses this event like so: <app-input-output (onSubmitEvent)="onReceiveDidSubmitEvent($event)" />
  @Output() onSubmitEvent: EventEmitter<string> = new EventEmitter<string>();

  // Dependency injection via constructor, also possible via Inject();
  constructor(private hobbyService: HobbyService) {
    this.hobbies = hobbyService.getHobbies().join(', ');
  }

  // Same as directly calling this in the template
  onPressSubmit(value: string) {
    this.onSubmitEvent.emit('Button was pressed!' + value);
  }
}
