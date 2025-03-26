import {Component} from '@angular/core';
import {HighlightDirectiveDirective} from '../../directives/highlight-directive/highlight-directive.directive';
import {MouseDetectorDirectiveDirective} from '../../directives/mouse-detector-directive/mouse-detector-directive.directive';
import {AttributeComponent} from '../attribute/attribute.component';
import {ControlFlowsComponent} from '../control-flows/control-flows.component';
import {DeferrableComponent} from '../deferrable/deferrable.component';
import {DividerComponent} from '../divider/divider.component';
import {InputOutputComponent} from '../input-output/input-output.component';
import {NgClassDirectiveComponent} from '../ng-class-directive/ng-class-directive.component';
import {NgContainerDirectiveComponent} from '../ng-container-directive/ng-container-directive.component';
import {NgModelDirectiveComponent} from '../ng-model-directive/ng-model-directive.component';
import {NgStyleDirectiveComponent} from '../ng-style-directive/ng-style-directive.component';
import {OptimizedImageComponent} from '../optimized-image/optimized-image.component';
import {PipeUsageComponent} from '../pipe-usage/pipe-usage.component';
import {ReactiveFormComponent} from '../reactive-form/reactive-form.component';
import {ResponsiveItemComponent} from '../responsive-item/responsive-item.component';
import {SignalComponent} from '../signal/signal.component';
import {TemplateFormComponent} from '../template-form/template-form.component';
import {TemplateFragmentComponent} from '../template-fragment/template-fragment.component';
import {UsingNgContainerComponent} from '../using-ng-container/using-ng-container.component';
import {UsingNgContentComponent} from '../using-ng-content/using-ng-content.component';
import {VariablesInTemplatesComponent} from '../variables-in-templates/variables-in-templates.component';
import {StorageService} from '../../services/storage/storage.service';
import {RouterLink} from '@angular/router';
import {StorageKey} from '../../models/enums/internal/StorageKey';
import {ReactiveFormValidationComponent} from '../reactive-form-validation/reactive-form-validation.component';

@Component({
  selector: 'app-general',
  imports: [
    /* Needed for routing */
    RouterLink,
    /* Directives */
    HighlightDirectiveDirective,
    MouseDetectorDirectiveDirective,
    /* Component */
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
    NgClassDirectiveComponent,
    NgStyleDirectiveComponent,
    NgModelDirectiveComponent,
    ReactiveFormValidationComponent,
  ],
  templateUrl: './general.component.html',
  styleUrl: './general.component.scss',
})
export class GeneralComponent {
  title = 'Revival';

  someName = 'Jeffrey';
  someLastName = 'Vanelderen';

  constructor(private storageService: StorageService) {}

  onReceiveDidSubmitEvent(event: string) {
    alert('Parent received event from child: ' + event);
  }

  doMockLogin() {
    this.storageService.set(StorageKey.TOKEN, 'mocked-token');
  }

  doMockLogout() {
    this.storageService.storage.removeItem(StorageKey.TOKEN);
  }
}
