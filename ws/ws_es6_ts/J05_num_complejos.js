class NumComplejo{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    toString(){
        return "(" + this.x + ", " + this.y + ")";
    }
    modulo(){
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    argumento(){
        return Math.atan2(this.y,this.x);
    }
    sumar(otro){// otro será un NumComplejo
        return new NumComplejo(this.x + otro.x, this.y + otro.y);
    }
}
// ------------- CREACION Y USO ---------------
let a = new NumComplejo(3,4);
console.log(a.toString() + " tiene un módulo de", a.modulo(), 
    "y un argumento de", a.argumento(), "radianes");
let b = new NumComplejo(1,1);
// Cuando una referencia a un objeto (en este caso b) está en 
// un sitio dondes se espera un String (por ejemplo en una
// concatenación), automáticamente se ejectuta el método toString.
console.log(b + " tiene un módulo de", b.modulo(), 
    "y un argumento de", b.argumento(), "radianes");
let c = a.sumar(b);
console.log(a + " + " + b + " = " + c);
