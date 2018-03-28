/*var num = prompt('Digite um núnero:');
var resultado;

document.write('Essa é a tabuada do ' + num + '<br/>');
for(var i = 1; i <= 10; i++){
	resultado = num * i;
	document.write(i + " X " + num + " = " + resultado + "<br/>");
}
*/

function tabuada() {
	var resultado;
	var num = document.getElementsByName("num")[0].value;
	var areaTabuada = document.getElementById("area-tabuada");

	//document.write('Essa é a tabuada do ' + num + '<br/>');
	for(var i = 1; i <= 10; i++){
		resultado = num * i;
		var msg = "<br/>" + i + " X " + num + " = " + resultado;
		areaTabuada.innerHTML += msg
	}
}
//////////////
//PARA i DE 1 ATÉ 10 FAÇA
//
//resultado = num*i
//
//IMPRIME 'num X i = resultado'
//
//
//FIM DO LOOP
//
//
