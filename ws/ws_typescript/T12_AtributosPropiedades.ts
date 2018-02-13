// declaramos la clase círculo
    // class Circulo{
    //     public x:number;
    //     public y:number;
    //     private r:number;
    //     constructor(x:number,y:number,r:number){
    //         this.x = x;
    //         this.y = y;
    //         this.r = r;
    //     }
    // }
// forma fácil
class Circulo{
    // al decir public x:number estás diciendo que x es tanto un atributo como lo que se le pasa al constructor, 
    // y además es de tipo number. Lo mismo pasa con private y protected
    constructor(public x:number, public y:number, private r:number){  
    }
    area(){
        return ( Math.PI*Math.pow(this.r,2) ).toFixed(3) ;
    }
}


// prueba

let c = new Circulo(2,3,5) ;
console.log(c.area());