import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
} from '@angular/router';

import { routes } from './app.routes';
import {
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@jsverse/transloco';
import { Language } from '../models/enums/internal/language.enum';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),

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
    ),
    provideTransloco({
      config: {
        availableLangs: Object.values(Language),
        defaultLang: Language.EN,
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader
    }),
  ],
};
