// importo la biblioteca "express"
var express = require("express"); 

// Creo una aplicación web
var app = express();

// A esta aplicación le decimos que coja los archivos estáticos del directorio actual.
app.use(express.static(__dirname)) ;

// Solo falta arrancar el servidor con el método "listen", que escucha por el puerto indicado, y tiene la función de callback definida
// los puertos 0-1000 suelen estar predefinidos para algún uso, por encima de ese número se puede usar (en principio) el que quieras.
app.listen(3020,function(){
    console.log("Servidor escuchando el puerto 3020");
});
