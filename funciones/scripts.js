function persona(nombre, edad, altura, estado_civil) {
  console.log(`el nombre del usuario es ${nombre}`);
  console.log(`la edad del usuario es ${edad}`);
  console.log(`la altura de el usuario es ${altura}`);
  console.log(`el estado civil del usuario es ${estado_civil}`);
}

persona('pepe',26, '1.70', 'soltero');
persona('maria',37, 1.63, 'casada');

//definir una funcion que imprima el modelo y el color de un carro y luego hacer su llamado

function carro(modelo,color) {
  console.log('el modelo del auto es: ' + modelo);
  console.log('elcolor del auto es: ' + color);
};

carro('bmw','negro');
carro('ferrari','rojo');

//crear una funcion que me devuelva el area de un rectangulo

function area_rectangulo(base, altura) {
  return base * altura
}

let rectangulo_1 = area_rectangulo(10,8)

let rectangulo_2 = area_rectangulo(12, 10)

if (rectangulo_1 > rectangulo_2) {
  console.log(rectangulo_1);
} else {
  console.log(rectangulo_2);
}

//calcular una funcion que calcule el area de un circulo

function area_circulo(radio) {
  return Math.floor(Math.PI * Math.pow(radio,2)) 
};

for (let i = 1; i <= 10; i++) {
  console.log(area_circulo(i));
}

// CONSEJOS:
// Crear una función, tipCalculator(), que tenga dos
// parámetros: una cadena que represente la calidad del
// servicio recibido y un número que represente el coste
// total. Devuelve la propina, como un número, basado en lo
// siguiente

// 'fatal' debería devolver un 5% de propina.
// 'ok' debería devolver un 15% de propina.
// 'bueno' debería devolver un 20% de propina.
// 'excelente' debería devolver un 30% de propina.
// Toda la demás propina deben ser predeterminadas al 18%.

/* 1. crear una funcion que calcule la propina 
   2. nuestros parametros (servicio, coste)
   3. al llamar la funcion tenemos que devolver lo siguiente
        'fatal' debería devolver un 5% de propina.
        'ok' debería devolver un 15% de propina.
        'bueno' debería devolver un 20% de propina.
        'excelente' debería devolver un 30% de propina.
        Toda la demás propina deben ser predeterminadas al 18%.
*/

function propina(servicio, coste) {
  let prop = 0

  if (servicio == 'fatal') {
    prop = coste * 0.05
  } else if (servicio == 'ok') {
    prop = coste * 0.15
  } else if (servicio == 'bueno') {
    prop = coste * 0.2
  } else if (servicio == 'exelente') {
    prop = coste * 0.3
  } else {
    prop = coste * 0.18
  }

  return prop
}

let douglas_prop = propina('bueno', 30);
let borja_prop = propina('nada', 15);
let emilio_prop = propina('ok',50);
let carlos_prop = propina('exelente',75);

let prop_mesa_1 = [douglas_prop, borja_prop, emilio_prop, carlos_prop]