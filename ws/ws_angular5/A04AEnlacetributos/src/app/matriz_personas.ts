import { Persona } from './persona';

export const MATRIZ_PERSONAS: Persona[] = [
        {dni: 22 , nombre: 'Daniel' , apellidos: 'Valiente' , saldo: 3834.777},
        {dni: 32 , nombre: 'Sergio' , apellidos: 'Valiente' , saldo: 245.888},
        {dni: 54 , nombre: 'Laura' , apellidos: 'Villanueva' , saldo: 265.333},
        {dni: 85 , nombre: 'Alicia' , apellidos: 'Gonzalez' , saldo: 338.777},
        {dni: 91 , nombre: 'Martin' , apellidos: 'Gonzalez' , saldo: 523.888},
        {dni: 100 , nombre: 'Marta' , apellidos: 'Gomez' , saldo: 348.777},
        {dni: 121 , nombre: 'Manuel' , apellidos: 'Diaz' , saldo: 234.333},
        {dni: 134 , nombre: 'Raquel' , apellidos: 'Gomez' , saldo: 264.888},
        {dni: 154 , nombre: 'Luis' , apellidos: 'Botín' , saldo: 758.777},
        {dni: 155 , nombre: 'Diego' , apellidos: 'Garcia' , saldo: 384.888},
        {dni: 163 , nombre: 'Ana' , apellidos: 'Garcia' , saldo: 246.777},
        {dni: 171 , nombre: 'Eloisa' , apellidos: 'Jimenez' , saldo: 234.888},
        {dni: 183 , nombre: 'Pablo' , apellidos: 'Lopez' , saldo: 425.333},
        {dni: 190 , nombre: 'Gonzalo' , apellidos: 'Lopez' , saldo: 564.333},
        {dni: 193 , nombre: 'Antonio' , apellidos: 'Martinez' , saldo: 664.333},
        {dni: 194 , nombre: 'Pablo' , apellidos: 'Martin' , saldo: 864.333}
];

// calculo la media de los saldos

let saldo = 0 ;
MATRIZ_PERSONAS.forEach(element => {
        saldo += element.saldo ;
});

export const MEDIA_SALDOS: number = parseFloat(( saldo / MATRIZ_PERSONAS.length ).toFixed(2)) ;
