import { Component, OnInit } from '@angular/core';
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
  frm: FormGroup; // grupo de controles, por ejemplo un formulario
  // control de formulario con validación FormControl tienen las propiedades:
  // "errors" => para guardar los errores producidos.
  // "dirty" , "valid" e "invalid" para indicar el estado del control.
  dni: FormControl;
  nombre: FormControl;
  ape: FormControl;
  saldo: FormControl;





  ngOnInit(): void {
    this.personas = MATRIZ_PERSONAS;
    this.nuevo = new Persona();

    // ---------------- Configuración de la validación ----------
    this.dni = new FormControl( '', // podemos pasarle un validador o una matriz de validadores
     [ Validators.required, Validators.pattern('[0-9]*') ]
    );
    this.nombre = new FormControl( '', Validators.required);
    this.ape = new FormControl( '',
    [ Validators.required, Validators.minLength(2) ]
      );
    this.saldo = new FormControl( '', Validators.required );
    // FormGroup recibe un objeto de inicialización con el modelo de validación de cada campo
    // con la sintaxis valorFormControlName: objetoFormControlValidación,
    this.frm = new FormGroup( {
      dni: this.dni, nombre: this.nombre, ape: this.ape, saldo: this.saldo
    } );
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
    } else {
      // este alert nunca se muestra porque el botón se deshabilita si no se cumple la validación
      alert('Revise lo que ha insertado en el formulario');
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
