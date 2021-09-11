/*Camila acaba de comenzar su nuevo rol como Desarrolladora Java Junior en un banco
Ella está trabajando en cuentas de clientes para una nueva aplicación de banca móvil. Se le pide que 
implemente una función que muestre la cantidad mayor de tres cantidades en la pantalla de inicio.*/
/*
alert ('Ingrese 3 valores y muestraremos el número mayor');

//ingreso de valores
var x1=prompt('ingresa el primer numero');
var x2=prompt('ingresa el segundo numero');
var x3=prompt('ingresa el tercer numero');

//comparacion

if(x1==x2 && x1==x3){
    document.write('Los numeros son iguales');
}
else if(x1>x2 && x1>x3) {
    document.write(x1 +' es el munero mas grande ');
}
else if(x2>x1 && x2>x3){
    document.write(x2+' es el número más grande');
}
else if (x3>x1 && x3>x2){
    document.write(x3+ ' es el número más grande');
}
*/

alert('Ingresa 3 valores y mostraremos el numero mayor');
let valores=[];
let x1 = prompt('ingresa el primer numero');
valores.push(x1);
let x2 = prompt('ingresa el segundo numero');
valores.push(x2);
let x3 = prompt('ingresa el tercer numero');
valores.push(x3); //agrega al finar de una lista el elemento
valores.sort(function(a,b){return a-b});//ordena de mennor a mayor
valores.reverse();//voltea el sort
document.write('el numero mayor es: '+(valores[0]));



