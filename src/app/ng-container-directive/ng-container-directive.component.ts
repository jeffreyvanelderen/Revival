import {
  Component,
  Directive,
  Input,
  input,
  OnInit,
  Optional,
} from '@angular/core';

/*
  DIRECTIVE
*/

@Directive({
  selector: '[theme]',
  providers: [{provide: Theme, useExisting: Theme}], // Dit maakt de directive injecteerbaar!
})
export class Theme {
  @Input() theme: 'dark' | 'light' = 'light';
}

/*
  COMPONENT
*/

@Component({
  selector: 'app-ng-container-directive',
  imports: [],
  templateUrl: './ng-container-directive.component.html',
  styleUrl: './ng-container-directive.component.scss',
})
export class NgContainerDirectiveComponent implements OnInit {
  /*
    The component can inject the Theme directive and apply styles based on its mode. (since a parent ng-container has set the theme directive, 
    and NgContainerDirectiveComponent is a child of the ng-container)

    !!!! Op de parent component die in zijn template de directive gebruikt, moet je nog `viewProviders: [Theme]` toevoegen!!! (zie app.component.html)
   */
  constructor(public themeDirective: Theme) {}

  ngOnInit(): void {
    console.log(`INJECTED DIRECTIVE - mode=${this.themeDirective?.theme}`);
  }
}
