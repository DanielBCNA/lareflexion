'use strict'

/*
Tabla de multiplicar de un número introducido por pantalla
*/

var numero = parseInt(prompt('De qué número quieres la tabla:', 1));

document.write('<h2>Tabla del ' + numero + '</h2>');

for(var i = 1; i <=10; i++) {
    document.write(i + ' x ' + numero + ' = ' + (i * numero) + '<br />');
}

// Tabla de multiplicar de todos los números

for(var c = 1; c <=10; c++) {
    document.write('<h2>Tabla del ' + c + '</h2>');

    for(var i = 1; i <=10; i++) {
        document.write(i + ' x ' + c + ' = ' + (i * c) + '<br />');
    }
}