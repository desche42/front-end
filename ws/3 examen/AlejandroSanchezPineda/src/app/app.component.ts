import { Component, OnInit } from '@angular/core';
import { PROVINCIAS } from './Provincias';
import { Provincia } from './Provincia';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // declaro la variable provincias del tipo provincia
  provincias: Provincia[] ;
  // declaro la variable donde se guardará el número aleatorio
  codigoSeleccionado: number ;

  // cuando se inicie Angular
  ngOnInit(): void {
    // inicializo la matriz provincias para este componente
    this.provincias = PROVINCIAS;

    // genero un número aleatorio entre 0 y el número de provincias
    // y lo guardo en la variable codigoSeleccionado
    this.codigoSeleccionado = Math.floor( Math.random() * ( this.provincias.length - 1 ) + 1 ) ;

    // tiene que ser int
    console.log(this.codigoSeleccionado);
  }
}
