'use strict'

// Pruebas con LET y VAR

//Prueba con VAR
var numero = 40;
console.log(numero); // valor 40

if(true) {
    var numero = 50;
    console.log(numero); // valor 50
}

console.log(numero); // valor 50

//Prueba con LET
var texto = 'Curso JS';
console.log(texto); // valor 'Curso JS'

if(true) {
    let texto = 'Curso Laravel 5';
    console.log(texto); //valor 'Laravel 5'
}

console.log(texto); // valor 'Curso JS'