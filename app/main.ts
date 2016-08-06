/**
 * Created by lerry on 8/3/16.
 */
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { appRouterProviders } from './app.routes';

bootstrap(AppComponent, [ appRouterProviders ]);
