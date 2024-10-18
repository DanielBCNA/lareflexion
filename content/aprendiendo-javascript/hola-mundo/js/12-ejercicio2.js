'use strict'

/*
Utilizando un bucle, mostrar la suma y la media de los números introducidos
hasta introducir un número negativo y ahí mostrar el resultado
*/

var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt('Introduce números hasta que metas uno negativo.'));

    if(isNaN(numero)) {
        numero = 0;
    } else if(numero >= 0) {
        suma = suma + numero; // se puede hacer también [suma += numero]

        contador++;
    }

} while(numero >= 0)

alert('La suma de los números es de ' + suma + ' y la media es de ' + (suma / contador)) + '.';