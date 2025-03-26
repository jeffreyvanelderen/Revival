import {Routes} from '@angular/router';
import {FirstPageComponent} from './first-page/first-page.component';
import {SecondPageComponent} from './second-page/second-page.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ErrorHandler, inject} from '@angular/core';

/*
    The order of routes is important because the Router uses a first-match wins strategy when matching routes, so more specific routes should be placed above less specific routes. 
    List routes with a static path first, followed by an empty path route, which matches the default route. 
    The wildcard route comes last because it matches every URL and the Router selects it only if no other routes match first.
*/

export const routes: Routes = [
  {path: 'first-page/:id', component: FirstPageComponent},
  {path: 'second-page', component: SecondPageComponent},

  /* Redirect */
  {
    path: 'some-other-url',
    redirectTo: '/first-page/123?queryParam=via_redirect',
    pathMatch: 'full',
  },

  /* Redirect */
  {
    path: 'some-old-page',
    redirectTo: ({queryParams}) => {
      const errorHandler = inject(ErrorHandler);
      const someValue = queryParams['someValue'];
      if (someValue) {
        return `/first-page/${someValue}`;
      }

      errorHandler.handleError(
        new Error('Attempted navigation to user page without user ID.'),
      );
      return `**`;
    },
  },

  {path: '**', component: NotFoundComponent},
];
