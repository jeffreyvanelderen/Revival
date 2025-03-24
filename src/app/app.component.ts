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
import { ResponsiveItemComponent } from './responsive-item/responsive-item.component';
import { SignalComponent } from "./signal/signal.component";
import { AttributeComponent } from "./attribute/attribute.component";
import { UsingNgContentComponent } from "./using-ng-content/using-ng-content.component";
import { TemplateFragmentComponent } from "./template-fragment/template-fragment.component";
import { UsingNgContainerComponent } from "./using-ng-container/using-ng-container.component";
import { NgContainerDirectiveComponent, Theme } from "./ng-container-directive/ng-container-directive.component";
import { VariablesInTemplatesComponent } from "./variables-in-templates/variables-in-templates.component";
import { NgClassDirectiveComponent } from "./ng-class-directive/ng-class-directive.component";

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
    TemplateFragmentComponent,
    UsingNgContainerComponent,
    NgContainerDirectiveComponent,
    VariablesInTemplatesComponent,
    NgClassDirectiveComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  viewProviders: [Theme] // Nodig om de directive bloot te stellen aan zijn child items!
})
export class AppComponent {
  title = 'Revival';
  
  someName = 'Jeffrey';  
  someLastName = 'Vanelderen';

  onReceiveDidSubmitEvent(event: string) {
    alert("Parent received event from child: " + event);
  }

}
