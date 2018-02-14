import { BrowserModule } from '@angular/platform-browser';

// núcleo de Angular
import { NgModule, LOCALE_ID } from '@angular/core';

// importar para la fecha local
import { registerLocaleData } from '@angular/common';
// le damos un alias a la fecha local
import localeEs from '@angular/common/locales/es';
// y lo registramos para que se pueda usar como 'es' en el pipeline
registerLocaleData(localeEs, 'es');

// imprortar el componente app
import { AppComponent } from './app.component';
import { ElevadoPipe } from './elevado.pipe';
import { FiltrarPipe } from './filtrar.pipe';












// esto configura la clase definida más abajo (y que está vacía)
@NgModule({
  // Declaramos en este módulo dos filtros personalizados
  declarations: [ AppComponent , ElevadoPipe , FiltrarPipe ],
  imports: [ BrowserModule ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
