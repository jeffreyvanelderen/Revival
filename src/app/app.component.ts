import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputOutputComponent } from "./input-output/input-output.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, InputOutputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Revival';
  
  someName = 'Jeffrey';  
  someLastName = 'Vanelderen';

  onReceiveDidSubmitEvent(event: string) {
    alert("Parent received event from child: " + event);
  }

}
