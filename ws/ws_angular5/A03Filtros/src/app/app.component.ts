import { Component, OnInit } from '@angular/core';
import { MATRIZ_PERSONAS, MEDIA_SALDOS } from './matriz_personas';
import { Persona } from './persona' ;

@Component({
  selector: 'app-root', // nombre de la etiqueta para insertar este componente en el html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  // Método del ciclo de vida del componente que se ejecuta cuando angular esté iniciado y
  // todas las dependencias disponibles.
  // indicamoa que la variable personas es de la clase Persona
  personas: Persona[];
  mediaSaldos: number;
  ngOnInit(): void {
    // no podemos acceder desde el HTML la matriz_personas, por lo que la guardamos en la variable personas
    this.personas = MATRIZ_PERSONAS ;
    this.mediaSaldos = MEDIA_SALDOS ;
  }
  // creamos el método ahora de clase Date, que devuelve el objeto Date
  ahora(): Date {
    return new Date();
  }
}

