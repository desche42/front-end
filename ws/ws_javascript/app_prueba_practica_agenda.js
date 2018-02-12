// Importamos los elementos de las bibliotecas que vamos a emplear
var express = require('express');
// Permite analizar (leer) el cuerpo de los mensajes recibidos
// por ejemplo peticiones post.
var bodyParser = require('body-parser');
// Crear una aplicación web de express.
var app = express();
// Para analizar datos del body en formato JSON
app.use(bodyParser.json());
// Para analizar datos del body en formato QueryString=urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Carpeta de archivos estáticos.
app.use(express.static(__dirname));

// ################# INSERTAR ########################
app.post("/agenda", function (req, res) {
    var nuevo = req.body;
    console.log("Insertando: ", nuevo);
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.send(nuevo);
});

// ################# INICIO DEL SERVIDOR ########################
app.listen(3020, function () {
    console.log("Aplicación escuchando en el puerto 3020");
});
