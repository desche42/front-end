// ---------- DECLARACIÓN DE LA CLASE -------
class Automovil{
    constructor(marca,numRuedas){
        this.marca = marca;
        this.numRuedas = numRuedas;
    }
    datos(){
        return this.marca + " " + this.numRuedas;
    }
    setMarca(marca){
        this.marca = marca;
    }
    getMarca(){
        return this.marca;
    }
}
// -------------- CREACIÓN DE OBJETOS (INSTANCIACIÓN) ------------

let a1 = new Automovil("Seat",4);
let a2 = new Automovil("Ford",6);
// -------------- USO DE LOS OBJETOS ----------------------

console.log(a1.marca);// Lectura de atributo
a1.marca = "Volkswagen";// Escritura de atributo
console.log(a1.datos());// Ejecución de método (que retorna un string y lo imprimimos).
a1.setMarca("Citroen");// Método set (Asignan valores a un atributo)
console.log(a1.getMarca());// Método get (Retornan valores de atributos)
console.log("----- VEHICULO 2 ----------");
console.log(a2.datos());
console.log("----- VEHICULO 1 ----------");
console.log(a1.datos());
