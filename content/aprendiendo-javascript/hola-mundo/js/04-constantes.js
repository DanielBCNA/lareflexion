'use strict'

// Constantes
// Como una variable, pero su valor no puede cambiar

var web = 'https://danielbarcelona.com';
const ip = '192.168.0.1';

web = 'https://lareflexion.com'; // nos deja cambiar el valor sin problema
ip = '12345' // no nos deja, pues es una constante

console.log(web, ip);