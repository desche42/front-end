export class Persona{
    nombre:string;
    apellidos:string;
    dni:number;
    saldo:number;
    // para que este sea opcional
    seleccionada?:boolean;
    telefono?:number;
    editando?:boolean;
}