/**
 * Created by lerry on 16-8-6.
 */
import { provideRouter, RouterConfig }  from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];

