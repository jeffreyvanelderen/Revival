import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputOutputComponent } from "./input-output/input-output.component";
import { ControlFlowsComponent } from "./control-flows/control-flows.component";
import { DividerComponent } from "./divider/divider.component";
import { DeferrableComponent } from "./deferrable/deferrable.component";
import { OptimizedImageComponent } from "./optimized-image/optimized-image.component";
import { TemplateFormComponent } from "./template-form/template-form.component";
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PipeUsageComponent } from "./pipe-usage/pipe-usage.component";
import {Breakpoints} from '@angular/cdk/layout';
import { ResponsiveItemComponent } from './responsive-item/responsive-item.component';
import { SignalComponent } from "./signal/signal.component";
import { AttributeComponent } from "./attribute/attribute.component";
import { UsingNgContentComponent } from "./using-ng-content/using-ng-content.component";
import { TemplateFragmentComponent } from "./template-fragment/template-fragment.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    InputOutputComponent,
    ControlFlowsComponent,
    DividerComponent,
    DeferrableComponent,
    OptimizedImageComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    PipeUsageComponent,
    ResponsiveItemComponent,
    SignalComponent,
    AttributeComponent,
    UsingNgContentComponent,
    TemplateFragmentComponent
],
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
