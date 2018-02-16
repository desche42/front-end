import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import {registerLocaleData} from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { AppComponent } from './app.component';
import { FiltrarPipe } from './filtrar.pipe';
import { PersonasService } from './personas.service';

// Registramos la localización de español con el nombre 'es'.
registerLocaleData(localeEs, 'es');

@NgModule({
  // Declaramos en este módulo un filtro personalizados además del componente
  // y del servicio PersonasService
  declarations: [AppComponent, FiltrarPipe],
  imports: [BrowserModule, FormsModule ],
  // se puede indicar en un módulo o en un componente y contiene a todos los servicios que se puedne intyectar en
  // el módulo o en el componente
  providers: [PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
