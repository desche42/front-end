// defino una clase nueva
class SuperClase{
    // atributo privado
    private miVariable:string = "Esta variable es solo para superclase" ;
    protected nuestraVariable:string = "Esta variable es para superclase y sus subclases" ;
    public deTodosVariable:string = "Esta variable la ven todos" ;
    constructor(mostrar:boolean=true){
        // al constructor le paso un bool que si es true muestra lo siguiente. esto es para que solo se imprima 
        // en el caso de crear un objeto de tipo superclase. en caso contrario lo que haremos será pasar false (ver abajo)
        if(mostrar){
            console.log("--------- SUPERCLASE ---------") ;
            console.log(this.miVariable);
            console.log(this.nuestraVariable);
            console.log(this.deTodosVariable);
        }
    }
}

// creo una clase que hereda de SuperClase

class SubClase extends SuperClase{
    constructor(){
        // este es el constructor de la superclase; super(argumentos); se define así en el lenguaje
        super(false); // pasamos false para que no se imprima el constructor de la superclase
        console.log("---------------- SUBCLASE -------") ;
        // console.log(this.miVariable);  // esta clase da error, solo vale para la superclase
        console.log(this.nuestraVariable);
        console.log(this.deTodosVariable);
    }
}

// ahora creo dos objetos de tipo superclase y subclase
let sup = new SuperClase();
console.log("");
let sub = new SubClase();

// las variables privadas dan error de compilación, en JS no hay variables privadas por lo que el código sí que 
// se ejecutará, sin emabargo en TS dará error. poniendo en las opciones del compilador noEmitOnError: true
console.log("");
// console.log("la variable private es:",sup.miVariable);  // esto da error en TypeScript
// console.log("la variable protected es:",sup.nuestraVariable);  // esto da error en TypeScript
console.log("la variable public es:",sup.deTodosVariable);
console.log("");
// sup.miVariable = "hola";  // esto da error en TypeScript
// console.log("la variable private es:",sup.miVariable);  // esto da error en TypeScript
