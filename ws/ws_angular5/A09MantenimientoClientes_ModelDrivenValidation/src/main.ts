import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
//Para indicar si estamos en producción o desarrollo.
if (environment.production) {
  enableProdMode();
}
// Arranca el Javascript de Angular, tomando lo que tiene
// que cargar del archivo app.module donde está definido AppModule.
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
