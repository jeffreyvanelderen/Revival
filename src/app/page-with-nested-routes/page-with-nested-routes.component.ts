import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-page-with-nested-routes',
  imports: [
    /* Needed for (sub)routing */
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './page-with-nested-routes.component.html',
  styleUrl: './page-with-nested-routes.component.scss',
})
export class PageWithNestedRoutesComponent {}
