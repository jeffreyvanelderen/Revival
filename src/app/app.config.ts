import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HobbyService } from '../services/hobby.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 

    /* Import router with given routes */
    provideRouter(routes),

    /* Global provider */
    // { provide: HobbyService },
  ]
};
