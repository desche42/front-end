import { Component, OnInit } from '@angular/core';
import { Persona } from './Persona';
import { MATRIZ_PERSONAS } from './matriz_personas';


@Component({
  selector: 'app-root', // nombre de etiqueta para insertar este componente en el html (index.html)
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  personas: Persona[];
  apellidos = '';
  nuevo: Persona;
  ngOnInit(): void {
    this.personas = MATRIZ_PERSONAS;
    this.nuevo = new Persona();
  }
  insertar(event) {
    event.preventDefault();
    this.apellidos = '';
    this.personas.push(this.nuevo);
    this.personas = Object.assign ([], this.personas);
    this.nuevo = new Persona();
  }

  borrar(i, p) {
    this.personas = this.personas.filter( personas => p.dni !== personas.dni );
  }

}
