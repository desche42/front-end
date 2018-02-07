// Importamos los elementos de las bibliotecas que vamos a emplear 
// permite analizar el cuepro de los mensajes recibidos, por ejemplo para peiticiones post
var express = require('express');

// importo matrices con todas las localidades de España
var bodyParser = require('body-parser');
var spain = require("./js/ListaLocalidades.js");

// Crear aplicación web de express
var app = express();

// para analizar datos del body en formato JSON
app.use(bodyParser.json());
// Para analaizar datos del body en formato QueryString == urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Carpeta de archivos estáticos
app.use(express.static(__dirname));

// base de datos de personas
var bbdd = {
    "personas": [
        { "dni": 22, "nombre": "Daniel", "apellidos": "Valiente", "saldo": 834.777 },
        { "dni": 32, "nombre": "Sergio", "apellidos": "Valiente", "saldo": 245.888 },
        { "dni": 54, "nombre": "Laura", "apellidos": "Villanueva", "saldo": 265.333 },
        { "dni": 85, "nombre": "Alicia", "apellidos": "Gonzalez", "saldo": 338.777 },
        { "dni": 91, "nombre": "Martin", "apellidos": "Gonzalez", "saldo": 523.888 },
        { "dni": 100, "nombre": "Marta", "apellidos": "Gomez", "saldo": 348.777 },
        { "dni": 121, "nombre": "Manuel", "apellidos": "Diaz", "saldo": 234.333 },
        { "dni": 134, "nombre": "Raquel", "apellidos": "Gomez", "saldo": 264.888 },
        { "dni": 154, "nombre": "Luis", "apellidos": "Garcia", "saldo": 744.777 },
        { "dni": 155, "nombre": "Diego", "apellidos": "Garcia", "saldo": 384.888 },
        { "dni": 163, "nombre": "Ana", "apellidos": "Garcia", "saldo": 246.777 },
        { "dni": 171, "nombre": "Eloisa", "apellidos": "Jimenez", "saldo": 234.888 },
        { "dni": 183, "nombre": "Pablo", "apellidos": "Lopez", "saldo": 425.333 },
        { "dni": 190, "nombre": "Gonzalo", "apellidos": "Lopez", "saldo": 564.333 },
        { "dni": 193, "nombre": "Antonio", "apellidos": "Martinez", "saldo": 664.333 },
        { "dni": 194, "nombre": "Pablo", "apellidos": "Martin", "saldo": 864.333 }
    ]
};


// ################# LISTADO DE PERSONAS ########################
app.get("/personas", function (req, res) {
    // req -> información de la petición recibida
    // res -> información de la respuesta que vamos a enviar
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.send(bbdd.personas);
});

// ################# BUSCAR PERSONAS ########################
// localhost:3020/personas_buscar?apellidos=ez
app.get("/personas_buscar", function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    var apellidos = req.query["apellidos"].toLowerCase();
    var resultado = bbdd.personas.filter(function (persona) {
        return persona.apellidos.toLowerCase().indexOf(apellidos) >= 0;
    });
    res.send(resultado);
});
// ################# INSERTAR ########################
app.post("/personas", function (req, res) {
        // body: objeto json con los datos recibidos, siempre que el Content-Type=application/json.
        var nuevo = req.body;
        console.log("Insertando: ", nuevo);
        bbdd.personas.push(nuevo);
        res.setHeader("Content-Type", "application/json");
        res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        res.send(bbdd.personas);
    });

// ################# BORRAR ########################
app.delete("/personas/:dni", function (req, res) {
    var dni = req.params.dni;
    bbdd.personas = bbdd.personas.filter(p => p.dni != dni);
    console.log("Borrando: ", dni);
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.send(bbdd.personas);
});
// ################# BORRAR VARIOS ########################
app.post("/borrar_personas", function (req, res) {
    var mDni = req.body;//Matriz de dnis que hay que borrar.
    bbdd.personas = bbdd.personas.filter(
        (p) => {
            for (var i = 0; i < mDni.length; i++) {
                if (p.dni == mDni[i]) {
                    return false;
                }
            }
            return true;
        }
    );
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.send(bbdd.personas);
});

// ################# LISTADO DE PROVINCIAS ########################
app.get("/provincias", function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.send(spain.provincias);
});
// ################# LISTADO DE LOCALIDADES DE UNA PROVINCIA ##############
// localhost:3020/localidades?provincia=28
app.get("/localidades", function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    var prov = parseInt(req.query["provincia"]);
    res.send(spain.localidades[prov]);
});
// ################# SUGERIR LOCALIDADES ##############
// localhost:3020/sugerir?provincia=13&texto=calatrava
app.get("/sugerir", function (req, res) {
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    var texto = req.query["texto"].toLowerCase();
    var prov = parseInt(req.query["provincia"]);
    var resul = spain.localidades[prov].filter(
        function (loc) {
            return loc.toLowerCase().indexOf(texto) >= 0;
        }
    );
    if (resul.length > 5) {
        resul.splice(5);
    }
    res.send(resul);
});



app.get("/J20_mantenimiento_clientes_routing_no_raiz.html*", function (req, res) {
    res.sendFile(__dirname + "/J20_mantenimiento_clientes_routing_no_raiz.html");
});
// ################# ARCHIVO POR DEFECTO ########################
// Cuando la ruta puesta en el navegador no corresponda con ningún 
// archivo estático, ni con ninguno de los mapeos anteriores, entonces
// que sirva el archivo: 
//        /J19_mantenimiento_clientes_routing_sin_almohadilla.html
// app.use(function(req,res){
//   // console.log("Peticion:" + req.path);
//   res.sendFile( __dirname + //__dirname es la ruta del archivo app.
//     "/J19_mantenimiento_clientes_routing_sin_almohadilla.html");
// });
// ################# INICIO DEL SERVIDOR ########################
app.listen(3020, function () {
    console.log("Aplicación escuchando en el puerto 3020");
});