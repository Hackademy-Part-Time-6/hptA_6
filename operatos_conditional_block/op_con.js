/*
//repaso de operadores

//operador de asignacion '='

let ej = 'data'; // asignacion a una variable

console.log(ej);

ej = 'reasigno mi dato' // reasigancion de un dato

console.log(ej);

//aritmeticos '+ - % * /'

let a = 2;

let b = 3;

console.log(a + b);

console.log(a - b);

console.log(a * b);

console.log(a / b);

console.log(a % b);

console.log(a ** b);

//operadores de incremento y asignacion

a++ //incremento unitario

console.log(a);

a = 10 //incremento general

//a += 4

console.log(a);

//operadores aritmeticos y de asignacion para

a %= 2

console.log(a);

//operadores de comparacion <, >, ==, ===

//abstract equality comparison (permite hacer una comparacion con un type convertion)

console.log(2 == '2');

console.log(2 == (true + true));

//strict operator equality comparison ()

console.log(2 === '2');
console.log(2 === 2);

//recordemos que podemos comparar los datos de una variable

a = 6

console.log(a == 6);
console.log(a == '6');

console.log(a === 6);
console.log(a === '6');

//and operator

console.log((2==2) && (2=='2'))

/* 2 == 2 = true
   2 == '2' = true
   true && true = true


//tabla de la verdad de and

console.log((true) && (true));
console.log((true) && (false));
console.log((false) && (true));
console.log((false) && (false));

//or
console.log((2==2) || (2 =='2'));

// tabla de la verdad de or

console.log((true) || (true)); 
console.log((true) || (false));
console.log((false) || (true));
console.log((false) || (false));

//ejemplos


console.log((2 == 2) || (2 == 2)); true
console.log((2 == 2) || (2 ==='2')); true
console.log((2 < 2) || (2 == '2')); true
console.log((2 > 2) || (2 === '2')); false 
console.log((2 == 9 ) || (2 ==='2')); false


console.log((2 == 2) && (2 === 2)); true
console.log((2 == 2) && (2 ==='2')); false
console.log((2 <= 2) && (2 =='2')); true
console.log((2 > 2) && (2 ==='2')); false
console.log((2 == 9) && (2 === '2')); false

//operadores de flujo

if (true) {
  console.log('se ejecuta el bloque de coding');
}

if (false) {
  console.log('se ejecuta el bloque de codigo');
}

if (false) {
  console.log('se ejecuta el bloque de codigo');
} else {
  console.log('la primera sentencia es falsa por lo tanto se ejecuta este bloque');
}

//ej

let x = 2;

if (x == 2) {
  console.log('hacertaste el numero');
} else {
  console.log('no era el numero');
}

let p = 'secreto';

if (p == 'secreto') {
  console.log('acertaste');
} else {
  console.log('prueba otra vez');
}

let y = 1234;

if (y == 1234) {
  console.log('correcto');
} else {
  console.log('pin incorrecto');
}

//else if

if (false) {
  console.log('se ejecuta el bloque de coding');
} else if (false) {
  console.log('se ejecuta solo si la anterior sentencia es false');
} else if (false) {
  console.log('se ejecuta solo si la anterior sentencia es false');
} else if (false) {
  console.log('se ejecuta solo si la anterior sentencia es false');
} else if (false) {
  console.log('se ejecuta solo si la anterior sentencia es false');
} else {
  console.log('ninguna de las sentencias es verdadera');
}

//ej

let num = 19
num = 5
num = 22
num = 19


if (num < 19) {
  console.log('tu numero es menor a 19');
} else if (num == 19) {
  console.log('tu numero es igual a 19');
} else if (num > 19) {
  console.log('tu numero es mayor a 19');
} */

//crea una entra que sea un numero y genera una salida para un producto segun el numero seleccionado 

let entrada = prompt('producto');

entrada = Number(entrada);

if (entrada === 1) {
  console.log('patatas');
} else if (entrada === 2 ) {
  console.log('Cocacola');
} else if (entrada === 3) {
  console.log('barrita de proteina');2
} else if (entrada === 4) {
  console.log('agua');
} else if (entrada === 5) {
  console.log('barra de chocolate');
} else {
  console.log('no tenemos el producto');
}

