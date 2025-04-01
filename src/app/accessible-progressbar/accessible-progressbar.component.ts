import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accessible-progressbar',
  templateUrl: './accessible-progressbar.component.html',
  styleUrls: ['./accessible-progressbar.component.scss'],
  host: {
    // Sets the role for this component to "progressbar"
    role: 'progressbar',
    // Sets the minimum and maximum values for the progressbar role.
    'aria-valuemin': '0',
    'aria-valuemax': '100',
    // Binding that updates the current value of the progressbar.
    '[attr.aria-valuenow]': 'value',
  },
})
export class AccessibleProgressbar {

  /** Current value of the progressbar. */
  @Input() value = 0;

}
