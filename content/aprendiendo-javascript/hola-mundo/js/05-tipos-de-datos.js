'use strict'

// Operadores
var numero1 = 7;
var numero2 = 12;
var operacion = numero1 * numero2;

alert('El resultado de la operación es: ' + operacion);

// Tipos de datos
var numero_entero = 44;
var cadena_texto = 'Hola, qué tal';
var verdadero_o_falso = false;

var numero_falso = '33'; // el número lo interpeta como texto
console.log(Number(numero_falso) + 7); // Ahora sí hace la suma

console.log(String(numero_entero) + ' Esto es un texto'); // Suma dos strings

console.log(typeof(numero_entero)); // Devuelve el tipo de dato de la variable