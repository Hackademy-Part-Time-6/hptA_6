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
