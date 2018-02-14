import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// indica si estamos en producción o desarrollo
if (environment.production) {
  enableProdMode();
}


// esto arranca el javascript de Angular, tomando lo que tiene que cargar del archivo app.module donde está 
// definido AppModule (nuestra aplicación se configura aquí)
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
