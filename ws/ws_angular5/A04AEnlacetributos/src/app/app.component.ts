import { Component, OnInit } from '@angular/core';
import { MATRIZ_PERSONAS, MEDIA_SALDOS } from './matriz_personas';

import { Persona } from './persona' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  // hacemos una matriz de strgins con las rutas de las imagenes
  imagenes: string[] = [ 'assets/img/casa.gif' , 'assets/img/perro.png' , 'assets/img/gato.png'];
  // cuando se inicie la aplicación, guarda en el atributo foto el src de una foto
  foto: string;
  saludo = 'Hola';

  ngOnInit(): void {
    // generamos un índice aleatorio de la matriz imagenes
    const num: number = Math.floor( Math.random() * this.imagenes.length ) ;
    this.foto =  this.imagenes[num] ;
  }

}

