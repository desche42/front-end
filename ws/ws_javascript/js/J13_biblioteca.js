//definición de una variable global que será el título
var titulo = "Variables globales";


//esta función accede a la variable global "titulo" (declarada en el head)
// y lo escribe en los dos h1 con ids lowerCase y upperCase y también en el título de la página

function establecerTitulo(){
    document.getElementById("lowerCase").innerHTML = titulo ;
    document.getElementById("upperCase").innerHTML = titulo.toUpperCase() ;
    document.getElementById("titulo").innerHTML = titulo ;
}

