/*
// CODIGO JAVASCRIPT NATIVO (1)
var caja = document.querySelector("#caja");

caja.addEventListener("click", cambiarColor);

function cambiarColor(){
	caja.style.background = "red";
}*/

//JQUERY
$("#caja").click(function(event) {
	$("#caja").css({
		"background":"red",
		"height:":"400px",
		"height":"1000px"
	});
});