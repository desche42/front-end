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
  foto1: string;
  foto2: string;
  foto3: string;
  vecesPulsadas = -1;

  ngOnInit(): void {
    this.jugar();
  }

  getFoto(): string {
    // generamos un índice aleatorio de la matriz imagenes
    const num: number = Math.floor( Math.random() * this.imagenes.length ) ;
    return  this.imagenes[num] ;
  }

  jugar(): void {
    this.foto1 = this.getFoto() ;
    this.foto2 = this.getFoto() ;
    this.foto3 = this.getFoto() ;
    this.vecesPulsadas += 1 ;
  }
}

