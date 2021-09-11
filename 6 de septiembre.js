/*
1.- Crear un programa que solicite al usuario su nombre por prompt y devuelva el siguiente saludo: 
"Hola nombre, saludos desde javascript". 
Nota: El saludo puede ser mostrado por consola o por html.
*/
//Shei y Dani
/*
var nombre = prompt ('ingrese su nombre, por favor');
document.write('Hola ' + nombre.toLocaleLowerCase() + ' ,saludos desde javascript'); // el nombre saldra en en mayusculas

var nombre = prompt ('ingrese su nombre, por favor');
document.write('Hola ' + nombre. + ' ,saludos desde javascript');


var nombre = prompt ('ingrese su nombre, por favor');
document.write('Hola ' + nombre + ' ,saludos desde javascript');
*/

/*
--------------------------------------------------------
2.- Crear un programa que solicite 2 números por prompt. Mandar esos dos valores a una función por 
parámetros para realizar las operaciones aritméticas básicas( suma, resta, multiplicación y división), y mostrar el resultado.
Nota: El resultado puede ser mostrado por consola o por html.
*/
// EJERCICIO DANIELA

//alert('te mostraremos las operaciones aritméticas básicas de dos numeros.');
/*
var num1 = parseInt(prompt('ingresa el primer numero:'));
var num2 = parseInt(prompt('ingresa el segundo numero:'));
document.write('las operaciones aritméticas básicas de '+ num1 + ' y ' + num2 + ' son:' + '</br>');

function suma(resultadoS){
    var resultadoS = num1 + num2;
    document.write(num1 + '+' + num2 + ' = ' + resultadoS + '</br>'); // con </br> damos un enter para o un espacio hacia abajo
}
suma() // con esto mandamos a llamar a la funcion 

function resta(resultadoR){
    var resultadoR = num1 - num2;
    document.write(num1 + '-' + num2 + ' = ' + resultadoR + '</br>');
}
resta()

function multiplicación(resultadoM){
    var resultadoM = num1 * num2;
    document.write(num1 + 'x' + num2 + ' = ' + resultadoM + '</br>');
}
multiplicación()

function división(resultadoD){
    var resultadoD = num1 / num2;
    document.write(num1 + '/' + num2 + ' = ' + resultadoD + '</br>');
}
división()
*/


/*
var numero1 = parseInt(prompt('ingresa un numero '));
var numero2 = parseInt(prompt('ingresa otro numero '));

function operaciones(numero1, numero2){
    var suma = numero1 + numero2;
    document.write('suma: ' + suma + '</br>');

    var resta = numero1 - numero2;
    document.write('resta: ' + resta + '</br>');

    var multiplicacion = numero1 * numero2;
    document.write('multiplicación: ' + multiplicacion + '</br>');

    var division = numero1 / numero2;
    document.write('división: ' + division + '</br>');
}
operaciones(numero1, numero2);
*/