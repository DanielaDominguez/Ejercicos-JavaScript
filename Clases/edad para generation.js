
/*Preguntarle al usuario su edad por promt. Despues hacer una condicional if con las siguierntes situaciones, si el usuario es mayor de 18 y mennor de 29 añor mostrar mensaje:
Felicidades has sido aceptado en el bootcamp de genertion, en caso contrario
mostrar mensaje: No cumples con los requisitos del programa. */
var nombre = prompt('Ingresa tu nombre');
alert('Hola ' + nombre,' ingresa tu edad para saber si cumples con los requisitos para participar en el bootcamp Generatio Full Stack Java Script');
var edad = prompt('¿Cuál es tu edad?');

if(edad >=18 && edad<=29) {
    document.write('Felicidades has sido aceptado en el bootcamp de Generation. ' + nombre, ' , todo el equipo de Generation te da la bienvenida');
}else{
    document.write('Lo siento ' + nombre,' No cumples con los requisitos del programa ');
}