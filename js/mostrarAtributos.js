var usuario = "";
var password = "";

$("#boton").click(function(event) {
	usuario = $("[type='text']").val();
	password = $("[type='password']").val();

	console.log(usuario);
	console.log(password);

});