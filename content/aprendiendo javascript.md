---
title: Aprendiendo Javascript
---
# Utilizando la Consola

- En la consola podemos usar estas tres instancias:
	- alert() -> mensaje de alerta pop-up
	- console.log(), console.info(), console.warn(), console.error()
	- debugger -> para la ejecución de la página y ver qué está pasando

### Fichero HTML de ejemplo con Javascript incluido

```javascript
<html lang="es">
	<head>
		<meta charset="UTF-8">
		<title>Javascript: Console</title>
	</head>
	<body>
		<script type="text/javascript">
			alert(Hello World!)
			
		</script>
	</body>
</html>
```

# Creando variables

- Hay tres tipos de variables, ya sean globales o locales:
	- var -> puede ser cambiado su valor, antiguo uso de variable
	- let -> puede ser cambiado su valor, solo en su alcance (scope) de bloque
	- const -> variable constante, no puede cambiar su valor

### Se demuestra que *let* tiene un ámbito de bloque

```javascript
let saludar = "dice Hola";
let tiempos = 4;

if (tiempos > 3) {
    let hola = "dice Hola tambien";
    console.log(hola);// "dice Hola tambien"
}
console.log(hola) // hola is not defined
```

- Formato para escribirlas:
	- var message = 'Text whatever'
	- let telephone = '1234567890'
	- const whatever = 'Whatever'

- Nomenclatura de las variables:
	- camelCase = varias palabras (Ej: let totalPrice)
	- lowercase = una palabra (Ej: let total)
- Nomenclatura variables constantes:
	- const LOCATION = MAYÚSCULAS
	- const DEFAULT_LOCATION = MAYÚSCULAS con guiones bajos


# Tipos de datos primitivos

- **Numbers:** números
- **Strings:** textos
- **Booleans:** true / false
- **Undefined:** no definido
- **(·) Null:** valor nulo

## Numbers

- Cualquier número positivo o negativo, con decimales o sin ellos
- Se pueden hacer cualquier operación como en la vida real: sumar, restar, multiplicar, dividir... y comparación entre ellos: mayor que, igual a, menor que...

```javascript
console.log(2 + 2); console.log(3 - 1); console.log(3 ** 2); console.log(4 / 2)

console.log(10 < 20); console.log(40 > 20); console.log(20 <= 40)
console.log(40 === '40') // Compara valor y tipo (daría false)
console.log(40 === 40) // Compara valor (daría true)
console.log(30 != 30) // Es distinto (daria false)
```

### Operaciones con números

- **typeof** -> qué tipo de variable es [console.log(typeof whatever)] (String)
- **NaN** y **isNaN()** -> comprobar que no es un número [console.log(isNaN('whatever'))] (True)
- **toString()** -> pasar variable a string
	```javascript
	let number = 100
	console.log(number) // [100] en number
	console.log(number.toString()) // [100] en string
	```
- **.toFixed()** -> para añadir decimales y redondear números
```javascript
	let number = 100.113593576
	console.log(number.toFixed(2)) // [100.11]
	```

## Strings

- Cualquier cadena de caracteres o texto. Ej: 'Hello World!'
- Se puede concatenar con otras cadenas de texto y comparación de valores.
	- Ej: 'hello' + 'Cris'
	- Igual que, distinto que...

### Operaciones con strings

- **concatenar texto** -> unir dos textos que estan en dos cadenas distintas
```javascript
	console.log('Hello ' + 'World!')
```
- **template literals** -> declarar plantillas y poder usar variables dinámicas
```javascript
	const name = 'Daniel'
	console.log('Hello ' + name + ' whatever') // [Hello Daniel whatever]
	console.log(`Hello ${name} whatever`) // devuelve lo mismo
```
- **typeof** -> extraer el tipo de la variable
```javascript
	console.log(typeof name) // [string]
```
- **.length** -> atributo, no necesita paréntesis, nos mide los caracteres del texto
```javascript
	console.log(name.length) // [6]
```
- **.includes()** -> método, comprobar si un texto tiene alguna información
```javascript
	console.log(name.includes('Da')) // [true]
```
- **.slice(start,end)** -> método, cortar el texto (en JS siempre empieza desde cero)
```javascript
	console.log(name.slice(2, 5)) // [nie]
```
- **.replace('este texto','por este otro')** -> método, cambiar caracteres por otros
```javascript
	console.log(name.replace('el','asd')) // [Daniasd]
```
- **.trim()** -> método, para limpiar cualquier input
```javascript
	const TEXT = '    asd fr asd     '
	console.log(TEXT.trim()) // [asd fr asd]
```
- **.split(',')** -> método, para cuando la cadena de texto viene separada por comas
```javascript
	const GEOLOCATION = 'Calle Whatever, 7, 1D'
	console.log(GEOLOCATION.split(,))
```

## Booleans

- Solo admite dos valores: true o false
	- Muy útil para comprobar ciertos estados de nuestra aplicación
- Se aconseja declararlos con texto positivo
	- Ej: userIsLogged
- Nos permitirá extraer el valor de ciertas variables o condiciones

### Operaciones con booleans

#### Los que devuelven True
```javascript
	console.log(Boolean(1)) // [true]
	console.log(Boolean('Whatever')) // [true]
	console.log(Boolean(3.14)) // [true]
	console.log(Boolean(100 > 5)) // [true]
	console.log(Boolean(1 < 100)) // [true]
	console.log(Boolean('1' == 1)) // [true]
```

#### Los que devuelven False
```javascript
	console.log(Boolean(0)) // [false]
	console.log(Boolean(-0)) // [false]
	console.log(Boolean('') // [false]
	console.log(Boolean(NaN) // [false]
	console.log(Boolean(null) // [false]
	console.log(Boolean(undefined) // [false]
	console.log(Boolean('1' === 1)) // [false]
```

## Undefined

- Ausencia de valor
```javascript
var a;
console.log(a)
console.log(typeof a) // undefined
```

## Null

- Tiene valor, pero es nulo
```javascript
var a = null;
console.log(a)
console.log(typeof a) // object
```

# Funciones

- Una función es una tarea donde se engloba tu lógica y se determina un ámbito (scope)
- Se define y se ejecuta la función así:
```javascript
// Se define
function sayHello() {
	console.log('Hello World!')
}
// Se ejecuta
sayHello()
```

- Declarando una variable global
```javascript
const message = 'Say Hello' // Se declara la variable global

function sayHello() {
	console.log(message)
}
sayHello()
```

## Parámetros de las funciones

- Las funciones pueden recibir parámetros aunque no son obligatorios
- Pueden ejecutar lógica gracias a ellos
- Pueden retornar esos valores modificados
- Pueden tener un valor por defecto

Ejemplo con la función de *suma*:
```javascript
function sum(a,b) {
	console.log(a + b)
}

sum(2, 5) // 7
sum(10, 5) // 15
sum(20, 50) // 70
sum(3, 8) // 11
```

## Funciones con retorno

- Tiene unos datos de entrada
- Ejecuta una lógica
- Tiene unos datos de salida

```javascript
function sayHello(name = 'world') {
	return `Hello ${name}`;
}
console.log(sayHello()) // Hello world
console.log(sayHello('Daniel')) // Hello Daniel
```

## Funciones anónimas por defecto

- No tienen nombre
- Se pueden asociar a una variable

```javascript
var sayHello = function(name = 'world') {
	return `Hello ${name}`;
}
console.log(sayHello()) // Hello world
console.log(sayHello('Daniel')) // Hello Daniel
```

## Funciones anónimas flecha (arrow)

- No tienen nombre
- Sintaxis reducidas y mantenimiento del ámbito (scope)
- Podemos usar el objeto global de la aplicación **this**
- Con o sin **body**

```javascript
const MESSAGE = 'Text example'
var sayHello = (name) => `Hello ${name}`
var sayBye = (name) => { return `Bye ${name}`}

console.log(sayHello('Daniel')) // Hello Daniel
console.log(sayBye('Daniel')) // Bye Daniel
```

# Aplicando lógica con JS

El ejemplo aplicando un diagrama de flujo es: Quiero irme de viaje (sentencia), ¿tengo suficiente dinero? (Incógnita) Dos posibilidades, sí o no.

## Operando con condicionales

- Comprobar si una condición se da
	- **if, else, else if...**
- Comparar valores
	- == (compara valor únicamente)
	- === (compara valor y tipo)
	- **&&** (**AND** unir una comprobación con otra, solo *true* si las dos condiciones se dan)
	- **||** (**OR** si se da la condición primera, o si es la secundaria, sigue el flujo)
	- **>, <, >=, <=**

```javascript
const FLIGHT = 100;
const HOTEL = 50;
const TOUR = 30;
const TOTAL = FLIGHT + HOTEL + TOUR;
const BUDGET = 300;

if (BUDGET > TOTAL) {
	console.log('Sí, me voy de viaje')
} else if (BUDGET === TOTAL) {
	console.log('Sí, pero tengo un presupuesto muy ajustado')
} else {
	console.log('No, tengo que seguir ahorrando')
}
```

## Operadores ternarios

- Comprueba una condición
	- Respuesta positiva -> **?**
	- Respuesta negativa -> **:**

```javascript
const FLIGHT = 100;
const HOTEL = 50;
const TOUR = 30;
const TOTAL = FLIGHT + HOTEL + TOUR;
const BUDGET = 300;

const RESULT = BUDGET > total
	? console.log('Sí, me voy de viaje')
	: console.log('No, no me voy de viaje')
```

## Resumiendo la lógica con JS

- Puedes utilizar los diagramas de flujo para entender un problema y sus posibles soluciones.
- Puedes operar con condicionales para hacer comprobaciones de esas posibles soluciones.
- Puedes usar los operadores ternarios para cuando tienes dos caminos posibles.