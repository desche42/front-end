import { BrowserModule } from '@angular/platform-browser';

// núcleo de Angular
import { NgModule } from '@angular/core';

// importar para la fecha local
import { registerLocaleData } from '@angular/common';
// le damos un alias a la fecha local
import localeEs from '@angular/common/locales/es';
// y lo registramos para que se pueda usar como 'es' en el pipeline
registerLocaleData(localeEs, 'es');

// imprortar el componente app
import { AppComponent } from './app.component';

// esto configura la clase definida más abajo (y que está vacía)
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


