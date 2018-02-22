import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filtrar' })
export class FiltrarPipe implements PipeTransform {
    transform(valor: any[], criterio: string): any[] {
        console.log('--------- Filtrando -----------');
        return valor.filter(
          persona => persona.apellidos.toLowerCase().indexOf(criterio.toLowerCase()) >= 0
        );
    }
}
