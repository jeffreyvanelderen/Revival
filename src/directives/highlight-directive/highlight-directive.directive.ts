import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]',
})
export class HighlightDirectiveDirective {
  /*
    ElementRef grants direct access to the host DOM element through its nativeElement property!
    Add ElementRef in the directive's constructor() to inject a reference to the host DOM element, the element to which you apply appHighlight.
  */
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }
}
