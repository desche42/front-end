import { BrowserModule } from '@angular/platform-browser';

// núcleo de Angular
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';

// esto configura la clase definida más abajo (y que está vacía)
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // para poder usar ngModel en un formulario
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
