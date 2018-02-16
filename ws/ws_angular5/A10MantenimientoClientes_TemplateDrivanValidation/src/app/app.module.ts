import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, } from '@angular/forms';
import {registerLocaleData} from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { AppComponent } from './app.component';
import { FiltrarPipe } from './filtrar.pipe';

// Registramos la localización de español con el nombre 'es'.
registerLocaleData(localeEs, 'es');

@NgModule({
  // Declaramos en este módulo un filtro personalizados además del componente
  declarations: [AppComponent, FiltrarPipe],
  imports: [BrowserModule, FormsModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
