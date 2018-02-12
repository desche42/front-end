// ---------- Declara la clase Figura, que será una figura geométrica
    class Figura{
        // ---------- Atributos, no se declaran en ECMAScript 6 ------------ //
        // x ; 
        // y ;
        // ---------- constructor es lo que se ejecuta cuando creamos un nuevo objeto de la clase figura ------
        constructor(a,b){
            // esto será el centro de la figura
            this.x = a ;
            this.y = b ;
        }

        // este método imprime en consola el centro de la figura
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

    // ejecuto el método imprimir
    f1.imprimir().modulo() ;





