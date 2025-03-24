import { NgClass, NgStyle } from '@angular/common';
import { Component, computed, OnInit, signal, Signal } from '@angular/core';

  /*
   Directive types:
    1. Components:             Used with a template. This type of directive is the most common directive type.
    2. Attribute directives:   Change the appearance or behavior of an element, component, or another directive.
        - NgClass:	Adds and removes a set of CSS classes.
        - NgStyle:	Adds and removes a set of HTML styles.
        - NgModel:	Adds two-way data binding to an HTML form element.
    3. Structural directives:  Change the DOM layout by adding and removing DOM elements.
   */

@Component({
  selector: 'app-ng-class-directive',
  imports: [NgClass],
  templateUrl: './ng-class-directive.component.html',
  styleUrl: './ng-class-directive.component.scss'
})
export class NgClassDirectiveComponent {

  isSpecial = signal<boolean>(false);

  classesSetViaMethod = computed<Record<string, boolean>>(() => ({
    special: this.isSpecial(),
    'non-special': !this.isSpecial(),
  }));

}
