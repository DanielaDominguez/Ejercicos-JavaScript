/* Ciclo FOR en JavaScript
Sirve para ejecutar n cantidad de veces un código.
*/
/*
//para mandar saludos la forma sencilla es esta, sin embargo cuando son un 
numero mas grande nos puede ser imposible realizar esta accion
console.log('hola Rodrigo');
console.log('hola Rod');
console.log('hola Dani');
console.log('hola Ramiro');
console.log('hola Karla');
console.log('hola Javier');
console.log('hola Mariana');
console.log('hola Carmen');
*/


//nos es util al recorrer un arreglo 
// es recomendable declarar la variable dentro del mismo ciclo
/*
for(var i = 0; i < 50; i++){ //i++ es un incrementador
    console.log('hola desde mi ciclo for. Vuelta ' + i);
}
*/
const frutas = ['manzana', 'mango', 'pera', 'piña', 'sandia', 'melon'];
/*
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);
console.log(frutas[5]);
*/

//EL COMENTARIO ANTERIOR ES EQUIVALENTE AL SIGUIENTE:

for(var i = 0; i < frutas.length; i++){//length es el tamaño del arreglo entonce i debe ser menor al tamaño del arreglo
    console.log(frutas[i]);
} 