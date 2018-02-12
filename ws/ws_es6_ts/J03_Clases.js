// ---------- Declara la clase Figura, que será una figura geométrica
    class Figura{
        // ---------- constructor es lo que se ejecuta cuando creamos un nuevo objeto de la clase figura ------
        // ---------- y nos permite inicializar el objeto, es lo primero que se ejecuta del objeto       ------

        constructor(a,b){
            // esto será el centro de la figura
            this.x = a ;
            this.y = b ;
        }

        // este método imprime en consola el centro de la figura. no se pone function
        imprimir(){
            console.log("Figura con centro en",this.x,this.y);
            
            // para poder concatenar métodos
            return this ;
        }

        // este método devuelve el módulo 
        modulo(){
            let modulo =  Math.sqrt( Math.pow(this.x,2) + Math.pow(this.y,2) );
            modulo = modulo.toFixed(5) ;
            
            console.log("Tiene un módulo de " + modulo ) ;

            return this ;
        }
    }

// ------------ PRUEBA ----------
    // creo la figura
    var f1 = new Figura(4,5);

    // ejecuto el método imprimir y el módulo sobre el objeto f1 de clase Figura .
    f1.imprimir().modulo() ;

    // Puedo escribir atributos
    f1.x = 9 ; 
    f1.imprimir().modulo() ;


//-------------------------------------

// declaro la clase personas

class Persona{
    constructor(a,b){
        console.log("Creando persona....")
        this.nombre = a ;
        this.apellidos = b ;
    }

    quien(){
        console.log("¿Quién es", this.nombre , this.apellidos , "?") ;
    }
}

// creo dos personas 

var pers = new Persona("M.","Rajoy") ;
var peop = new Persona("Soraya","Sáenz de Santamaría") ;

pers.quien();
peop.quien();





