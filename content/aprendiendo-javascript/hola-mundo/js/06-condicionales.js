'use strict'

// Condicionales
// Ejemplo: Si A es igual a B entonces haz algo

var edad1 = 30;
var edad2 = 12;

// Si pasa esto
if(edad1 > edad2) {
    // Ejecuta esto
    console.log('Edad uno es mayor que edad dos');
} else {
    console.log('La edad uno es inferior a edad 2');
}


var edad = 10;
var nombre = 'David Suárez';

if(edad >= 18) {
    // Es mayor de edad
    console.log(nombre + ' tiene ' + edad + ' años, es mayor de edad.');
} else {
    // Es menor de edad
    console.log(nombre + ' tiene ' + edad + ' años, es menor de edad.');
}


/*
// Operadores lógicos
AND(Y): &&
OR(O): ||
Negación: !
*/

var year = 2023;

// Negación
if(year != 2020) {
    console.log('El año no es 2020. Estamos en el ' + year + '.');
}

// AND
if(year >= 2000 && year <= 2030) {
    console.log('Estamos en la era actual.');
} else {
    console.log('Estamos en la era post moderna.');
}

// OR
if(year == 2013 || year == 2023) {
    console.log('El año acaba en 3.');
}