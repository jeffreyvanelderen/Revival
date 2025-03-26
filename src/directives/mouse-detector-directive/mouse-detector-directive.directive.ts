import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appMouseDetectorDirective]',
})
export class MouseDetectorDirectiveDirective {
  // This can be set directly on the directive like: <p [appMouseDetectorDirective]="color">
  // Or using the separate property for color: <p appMouseDetectorDirective color="red">
  @Input() color: string = '';
  @Input() defaultColor: string = '';

  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.doHighlight(this.color || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.doHighlight('transparent');
  }

  private doHighlight(_color: string) {
    this.elementRef.nativeElement.style.backgroundColor = _color;
  }
}
