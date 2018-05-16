$("#boton3").click(function(event) {
	/*Reemplazar el contenido*/
	$("#contenedor").html('<div id="c1">Adios!</div>');

});

$("#boton4").click(function(event) {
	/*Agregar contenido contenido*/
	$("#contenedor").append('<div id="c2">Adios!</div>');

	/*Agregar codigo HTML antes de la caja c1 seleccionada*/
	$("#c1").before('<h1>Título</h1>');

    /*Agregar codigo HTML antes de la caja c1 seleccionada*/
	$("#c1").after('<h3>Párrafo</h3>');

	/*Agregar texto nuevo antes del texto ya escrito*/
	$("#c1").prepend('Bienvenido ');

	/*Reemplazar con texto nuevo el texto ya escrito*/
	$("#c2").text('Un texto nuevo');
	
});