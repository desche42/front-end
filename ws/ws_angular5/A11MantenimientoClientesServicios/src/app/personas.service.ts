import { MATRIZ_PERSONAS } from './matriz_personas';
import { Injectable } from '@angular/core';
import { Persona } from './Persona';


// declaro esta clase como Servicio
@Injectable()
export class PersonasService {
  private _personas = MATRIZ_PERSONAS;
  // método que devuelve una copia de la matriz personas
  getPersonas() {
    return Object.assign([], this._personas);
  }

  // método insertar que recibirá una persona y la insertará en la matriz
  insertar( p: Persona ) {
    this._personas.push(p);
    // devuelvo una copia de la matriz personas, que ya lo hace getPersonas así que llamo a dicho método
    return this.getPersonas();
  }

  // método borrar que borra una persona de la matriz de personas
  borrar( dni: number ) {
    this._personas = this._personas.filter( p => p.dni !== dni );
    return this.getPersonas();
  }
}
