"use strict"

window.addEventListener("load",function(){
	// body...
	var titulo = document.querySelector("#titulo");
	titulo.style.background = "#536895";
	titulo.style.color = "white";
	titulo.innerHTML = "COSTEO DE TRABAJOS";
	titulo.className = "clasHOLA";
	var colorLetras = document.querySelector(".clasHOLA");
	colorLetras.style.padding = "10px";

	var formulario = document.getElementById("#formulario");
	
	var todosInputs = document.getElementsByTagName("h1");
	var contitu = todosInputs[0].textContent;
	console.log(contitu);

	function cambiarNombre(nombre){
		
	}

});

