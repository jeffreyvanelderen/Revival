import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withRouterConfig,
} from '@angular/router';

import {routes} from './app.routes';
import {HobbyService} from '../services/hobby.service';
import { provideHttpClient, withFetch, withInterceptors, withJsonpSupport } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),

    /* Import router with given routes */
    provideRouter(
      routes,

      /* Allow information to be passed via query parameters in routes, like id's and such */
      withComponentInputBinding(),

      /* You can bind all route data with key, value pairs to component inputs: static or resolved route data, path parameters, matrix parameters, and query parameters  */
      // withRouterConfig({paramsInheritanceStrategy: 'always'}),
    ),

    /* Global provider */
    // { provide: HobbyService },

    // Add http client for dependency injection -> private http: HttpClient
    provideHttpClient(
      // use fetch instead of the older XMLHttpRequest api
      withFetch(),
      // withInterceptors(),
      // withJsonpSupport(),
    )
  ],
};
