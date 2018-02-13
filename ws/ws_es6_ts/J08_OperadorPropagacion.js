// vamos a usar el operador propagación para pasarle al método Math.max un montón de números como una 
// matriz (que no los acepta)

// creo una lista de números
let lista = [] ;
for (let i = 0; i < 100; i++) {
    let num = Math.random()*256 ;
    num = Math.floor(num) ;
    lista.push(num)
}

// si le paso a console.log la lista, me devuelve la matriz
// console.log("analizando..",lista) ;

// si le paso la lista con el operador spread, me los devuelve como una lista
console.log("analizando..",lista.length, "numeros", ...lista) ;

// entonces ahora sí qaue puedo usar el método max del objeto math
let mayor = Math.max(...lista) ;
let menor = Math.min(...lista) ;
console.log("El mayor es", mayor, "y el menor es", menor); 

// ahora hago la suma de todos ellos con una función que toma un número ilimitado de argumentos
function sumar(...valores){ // sumar(3,4,67,3,6,3)
    let suma = 0 ;
    for (let i = 0; i < valores.length; i++) {
        suma += valores[i] ;        
    }
    return suma ;
} 
console.log("La suma de todos ellos es", sumar(...lista), "y la media",sumar(...lista)/lista.length )