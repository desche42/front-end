var segundos = 0;
// ############# Establecer esta función para que reciba los mensaje desde el hilo principal.
function(event){
	console.log(event.data);
	// ##########Enviamos al hilo principal el mismo mensaje anteponiendole "Leido: ".
	
};
this.nombre = "HiloPepe";
function comprobarHora()
{
	var ahora = new Date();
	var s = ahora.getSeconds();
	if(s!=segundos)
	{
		segundos = s;
		var m = ahora.getMinutes();
		var h = ahora.getHours();
		if(s<10) s = "0" + s;
		if(m<10) m = "0" + m;
		if(h<10) h = "0" + h;
		// Avisamos a la página que ha cambiado la hora
		var texto = h + ":" + m + ":" + s; 
		// ########## Enviar un mensaje al resto de la aplicación.
	}
	setTimeout(comprobarHora, 330);
}

// Ejecutamos la funcion
comprobarHora();