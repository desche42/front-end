// recibe algo y lo devuelve. esta función es un decorador, se ponen delante de clases, métodos o miembros de una clase
// y permiten anotarlos (con info adicional) o modificarlos
function Info(clase:any){
    console.log(clase);
    return clase;
}

// delcaro la clase MiClase poniendo un decorador antes, se ejecutará cuando se declare la clase
@Info
class MiClase{
    nombre:string;
}

// cuando declaras una variable es mejor poner el tipo que es. Si la declaras e inicializas no hace falta porque ya
// coge el tipo de la clase que es
// let tu:MiClase = new MiClase();  // es equivalente a 
let tu = new MiClase();
// y se nos queja si le queremos asignar otra cosa
// tu = "hola";

// sin embargo si delcaramos una variable pero no la inicializamos
// let ccc; 
// esta variable es del tipo any, es decir, admite cualquier tipo de valor

let el = new MiClase();
