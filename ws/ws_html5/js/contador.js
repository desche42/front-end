// inicializo la variable contador

var i = 0 ;

// declaro la función que va a ser el contador

function segundos(){
    i = i + 1;
    //envía al hilo principal el número de veces contadas
    postMessage(i);
    // ejecuta la función segundos después de 500 ms
    setTimeout(segundos,1000);
}

// ejecuto la función

segundos();