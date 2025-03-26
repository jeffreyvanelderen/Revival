import { Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { NotFoundComponent } from './not-found/not-found.component';


/*
    The order of routes is important because the Router uses a first-match wins strategy when matching routes, so more specific routes should be placed above less specific routes. 
    List routes with a static path first, followed by an empty path route, which matches the default route. 
    The wildcard route comes last because it matches every URL and the Router selects it only if no other routes match first.
*/

export const routes: Routes = [
    { path: 'first-page', component: FirstPageComponent },
    { path: 'second-page', component: SecondPageComponent },

    { path: '*', component: NotFoundComponent },];
