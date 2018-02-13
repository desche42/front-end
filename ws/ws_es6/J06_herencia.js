class Figura {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    toString(){
        return "(" + this.x + ", " + this.y + ")";
    }
    distancia(otra){
        let dx = this.x - otra.x;
        let dy = this.y - otra.y;
        return Math.sqrt(dx*dx + dy * dy);
    }
}
// Circulo hereda de Figura
// Figura es la superclase (clase madre) de Circulo
// Circulo es una subclase (clase hija) de Figura

class Circulo extends Figura{
    constructor(x,y,r){
        //constructor(x,y) de Figura
        super(x,y);
        //Inicializamos lo nuevo
        this.r = r;
    }
    toString(){
        return super.toString() +
            "[" + this.r + "]";
    }
    area(){
        return Math.PI * this.r * this.r;
    }
}


var c1 = new Circulo(1,1,3);
var c2 = new Circulo(2,2,5);
console.log("La distancia de " + c1 + " a " 
    + c2 + " es " + c1.distancia(c2));
console.log(c1 + " tiene un área de " + c1.area() + " u2");
console.log(c2 + " tiene un área de " + c2.area() + " u2");
