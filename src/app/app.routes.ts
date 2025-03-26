import {Routes} from '@angular/router';
import {FirstPageComponent} from './first-page/first-page.component';
import {SecondPageComponent} from './second-page/second-page.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ErrorHandler, inject} from '@angular/core';
import {PageWithNestedRoutesComponent} from './page-with-nested-routes/page-with-nested-routes.component';
import {FirstSubPageComponent} from './first-sub-page/first-sub-page.component';
import {SecondSubPageComponent} from './second-sub-page/second-sub-page.component';
import {GeneralComponent} from './general/general.component';
import {isAuthenticatedGuard} from '../guards/is-authenticated/is-authenticated.guard';
import {ProfileComponent} from './profile/profile.component';

/*
    The order of routes is important because the Router uses a first-match wins strategy when matching routes, so more specific routes should be placed above less specific routes. 
    List routes with a static path first, followed by an empty path route, which matches the default route. 
    The wildcard route comes last because it matches every URL and the Router selects it only if no other routes match first.
*/

export const routes: Routes = [
  {path: '', component: GeneralComponent},

  {path: 'first-page/:id', component: FirstPageComponent},
  {path: 'second-page', component: SecondPageComponent},

  /* Nested routes */
  {
    path: 'page-with-nested-routes',
    component: PageWithNestedRoutesComponent,
    children: [
      {
        path: 'sub-first-page',
        component: FirstSubPageComponent,
      },
      {
        path: 'sub-second-page',
        component: SecondSubPageComponent,
      },
    ],
  },

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
        new Error("Attempted navigation to user page without 'someValue'."),
      );
      return ``;
    },
  },

  /* Lazy loaded components/routes */
  {
    path: 'lazy-loaded',
    loadComponent: () =>
      import('./first-page/first-page.component').then(
        component => component.FirstPageComponent,
      ),
  },

  /* Guarded route(s) */
  {
    path: 'authenticated',
    component: ProfileComponent,
    canActivate: [isAuthenticatedGuard],
  },

  {path: '**', component: NotFoundComponent},
];
