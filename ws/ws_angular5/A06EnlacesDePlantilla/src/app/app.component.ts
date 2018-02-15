import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MATRIZ_PERSONAS, MEDIA_SALDOS } from './matriz_personas';

import { Persona } from './persona' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  longitud: any;
  tiempo: number;
  veces = 0 ;

  // --------- Referencia a la etiqueta dviddeo de la plantilla ....
  @ViewChild('reproductor')
  repro: ElementRef ;


  ngOnInit(): void {

  }

  incrementar(): void {
    this.veces++ ;
  }

  pararVideo(){
    // con este accedemos al objeto del DOM (hay que evitarlo todo lo que se pueda)
    this.repro.nativeElement.pause();
  }
  cambioTiempo(event) {
    this.tiempo = this.repro.nativeElement.currentTime;
    this.longitud = this.repro.nativeElement.duration;
  }

}

