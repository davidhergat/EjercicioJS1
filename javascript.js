
function comprobarParImpar(){

  var numero = prompt('Ingrese valor del numero:','');

  if (numero % 2 == 0)  {

    alert('El numero introducido es par');

  }else {
	alert('El numero introducido es impar');
  }
}


function comprobarPalindromo(){
	var palabra = prompt("Escribe una palabra").toLowerCase();

	if(palabra === palabra.split('').reverse().join('')){
		alert("Esto es palíndromo");
	}else{
		alert("Esto no es palíndromo")
	}
}
 
function comprobarBotonPulsado(boton){
	
	if(boton.id === "button1"){
		document.getElementById("mostrarTexto").innerHTML = "Se ha pulsado el boton 1";
	}else if(boton.id === "button2"){
		document.getElementById("mostrarTexto").innerHTML = "Se ha pulsado el boton 2";
	}else if(boton.id === "button3"){
		document.getElementById("mostrarTexto").innerHTML = "Se ha pulsado el boton 3";
	}
}

function invertirTexto(){
	
	var palabra = prompt("Escribe una palabra");
	palabra = palabra.split('').reverse().join('');
	alert(palabra);
	
}