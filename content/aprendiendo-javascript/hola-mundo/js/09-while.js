'use strict'

// Bucle WHILE (Comprobar una condición y entonces ejecutar un bloque de código)
var year = 2023;

while(year <= 2051) {
    // ejecuta esto hasta el infinito
    console.log('Estamos en el año: ' + year);

    year++; // le añadimos un año para que se ejecute hasta el 2051

    if(year == 2041) {
        break; // lo paramos en el 2040
    }
}

// Bucle DO WHILE (Ejecutar un bloque de código y luego comprobar una condición para volver a ejecutar el bloque de código o que pare)

var years = 20;

do {
    alert('Solo cuando sea diferente a 20');
    years++;
} while(years > 25)