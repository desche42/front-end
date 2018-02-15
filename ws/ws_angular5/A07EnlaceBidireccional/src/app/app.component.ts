import { Component, OnInit } from '@angular/core';
import { MATRIZ_PERSONAS, MEDIA_SALDOS } from './matriz_personas';

import { Persona } from './persona' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  apellidos: string;
  ngOnInit(): void {

  }
  borrar(){
    this.apellidos="";
  }
}

