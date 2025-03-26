import {
  Component,
  inject,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
// Render template fragment either via ViewContainerRef OR NgTemplateOutlet
import {NgTemplateOutlet} from '@angular/common';

/*
  https://angular.dev/guide/templates/ng-template
*/
@Component({
  selector: 'app-template-fragment',
  imports: [],
  templateUrl: './template-fragment.component.html',
  styleUrl: './template-fragment.component.scss',
})
export class TemplateFragmentComponent {
  // Search via query for name on template fragment (thisIsATemplateFragment)
  @ViewChild('thisIsATemplateFragment', {read: TemplateRef})
  thisIsATemplateFragment: TemplateRef<unknown> | undefined;

  constructor(private viewContainer: ViewContainerRef) {}

  onPressButton() {
    if (this.thisIsATemplateFragment) {
      this.viewContainer.createEmbeddedView(this.thisIsATemplateFragment, {
        pizzaTopping: 'Ham',
      });
    }
  }

  /*
    You could pass the fragment to the child component (via template like [fragment]="thisIsATemplateFragment"), 
    which can then add the fragment to the viewContainer.createEmbeddedView(fragment, properties) when wanted
  */
}
