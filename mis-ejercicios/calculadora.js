var operacion = prompt('¿Qué operación quieres realizar?');
var num1 = parseInt(prompt('ingresa el primer numero'));
var num2 = parseInt(prompt('ingresa el segundo numero'));



if(operacion === 'suma'){
    var suma = num1 + num2; 
    document.write('el resultado es: ' + '</br>' + num1 + '+' + num2 + ' = ' + suma); // con </br> damos un enter para o un espacio hacia abajo
}else if(operacion === 'resta'){
    var resta = num1 - num2;
    document.write('el resultado es: '+ '</br>' + num1 + '-' + num2 + ' = ' + resta);
}else if(operacion === 'multiplicacion'){
    var multiplicacion = num1 * num2;
    document.write('el resultado es:' + '</br>' + num1 + 'x' + num2 + ' = ' + multiplicacion);
}else if(operacion === 'division'){
    var division = num1 / num2;
    document.write('el resultado es:' + '</br>' + num1 + '/' + num2 + ' = ' + division);
}else if(operacion == 'raiz cuadrada'){
    
}




/*
function operaciones(numero1, numero2){
    if(operacion === suma){
        var suma = numero1 + numero2;
    document.write('suma: ' + suma + '</br>');
    }else
    

    var resta = numero1 - numero2;
    document.write('resta: ' + resta + '</br>');

    var multiplicacion = numero1 * numero2;
    document.write('multiplicación: ' + multiplicacion + '</br>');

    var division = numero1 / numero2;
    document.write('división: ' + division + '</br>');
}
operaciones(numero1, numero2);
*/





