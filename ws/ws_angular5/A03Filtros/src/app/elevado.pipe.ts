import { Pipe, PipeTransform } from '@angular/core';

// nombre con el que usaré el filtro:
@Pipe({ name: 'elevado' })
export class ElevadoPipe implements PipeTransform {
  // la clase PipeTransform nos obliga a declarar para ElevadoPipe el método valor, que toma como argumentos la
  // variable que vamos a transformar (pasada por pipe | ) y una serie de argumentos que queramos
  // esta en concreto lo que hace es elevar a la potencia y devolver el resultado. el exponente por defecto es 1
    transform(valor: number, exponente: number = 1) {
        return Math.pow(valor, exponente);
    }
}
