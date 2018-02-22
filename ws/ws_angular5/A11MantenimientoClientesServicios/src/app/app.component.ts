import { Component, OnInit, ViewChild } from '@angular/core';
import { Persona } from './Persona';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonasService } from './personas.service';


@Component({
  selector: 'app-root', // nombre de etiqueta para insertar este componente en el html (index.html)
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  personas: Persona[];
  apellidos = '';
  nuevo: Persona;
  // atributo que hace referencia al servicio, al ponerlo en el constructor, ANGULAR (que es el que hace el new de
  // AppComponent) también hace el new de personasService y le pasa un objeto de clase PersonasService. Esto se llama
  // inyección de dependencias (o inversión del control) y por eso declaramos la clase PersonasService con el decorador @Inyectable
  constructor( private personasService: PersonasService ) {

  }

  // ------------------- ATRIBUTOS DEL MODELO DE VALIDACIÓN -----------------
  @ViewChild('frm')
  frm: FormGroup;

  ngOnInit(): void {
    this.personas = this.personasService.getPersonas();
    this.nuevo = new Persona();
  }


  insertar(event) {
    this.apellidos = '';
    this.personas = this.personasService.insertar( this.nuevo );
    this.nuevo = new Persona();
  }

  borrar(i: number, p: Persona) {
    this.personas = this.personasService.borrar( p.dni );
  }

}
