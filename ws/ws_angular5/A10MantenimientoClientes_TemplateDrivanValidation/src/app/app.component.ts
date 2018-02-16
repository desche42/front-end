import { Component, OnInit, ViewChild } from '@angular/core';
import { Persona } from './Persona';
import { MATRIZ_PERSONAS } from './matriz_personas';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root', // nombre de etiqueta para insertar este componente en el html (index.html)
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent implements OnInit {
  personas: Persona[];
  apellidos = '';
  nuevo: Persona;

  // ------------------- ATRIBUTOS DEL MODELO DE VALIDACIÓN -----------------
  @ViewChild('frm')
  frm: FormGroup;






  ngOnInit(): void {
    this.personas = MATRIZ_PERSONAS;
    this.nuevo = new Persona();
  }


  insertar(event) {
    event.preventDefault();
    // este if tiene que estar porque, auqnue el botón se deshabilita si el formulario no es válido
    // se puede enviar pulsando intro
    if ( this.frm.valid ) {
      // BORRAMOS EL filtro para que cuando se inserte algo, se muestre siempre. si no cumple el filtro de apellidos
      // no se mostraría
      this.apellidos = '';
      this.personas.push(this.nuevo);
    } 
    this.personas = Object.assign ([], this.personas);
    this.nuevo = new Persona();
  }

  borrar(i, p) {
    this.personas = this.personas.filter( personas => p.dni !== personas.dni );
  }

  log(valor) {
    console.log(valor, 'es de tipo', typeof valor);
  }

}
