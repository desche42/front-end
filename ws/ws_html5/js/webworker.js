var segundos = 0;
// ############# Establecer esta función para que reciba los mensaje desde el hilo principal.
onmessage = function (event){
	console.log(event.data);
	// ##########Enviamos al hilo principal el mismo mensaje anteponiendole "Leido: ".
	postMessage("Leído: " + event.data) ;
	
};
function comprobarHora()
{
	var ahora = new Date();
	var s = ahora.getSeconds();
	if(s!=segundos)
	{
		segundos = s;
		// Avisamos a la página que ha cambiado la hora
		var texto = ahora.toLocaleTimeString() ;
		// ########## Enviar un mensaje al resto de la aplicación.
		postMessage(texto) ;
	}
	setTimeout(comprobarHora, 330);
}

// Ejecutamos la funcion
comprobarHora();