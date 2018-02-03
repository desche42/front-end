var ultimaTecla = 0 ;

function ultimaTeclaPulsada(event){
    // Lectura crossbrowser del código de la tecla. depende del navegador
    // en google no detecta flechas, probar
    // https://es.stackoverflow.com/questions/50043/como-obtener-el-c%C3%B3digo-ascii-de-la-teclas-presionada-en-min%C3%BAsculas-o-may%C3%BAsculas
    ultimaTecla = event.which || event.keyCode ;
    // console.log("ultima letra pulsada", ultimaTecla)
}