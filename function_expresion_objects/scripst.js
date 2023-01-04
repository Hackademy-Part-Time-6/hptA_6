//funcion declaration
suma(5,8)
carro('bmw', 'morado')

function saluda(nombre) {
  console.log('hola ' + nombre);
};

function suma( a, b ) {
  return a + b;
};

function carro(modelo,color) {
  console.log('el modelo del auto es: ' + modelo);
  console.log('elcolor del auto es: ' + color);
};

//funciones de expresion

let suma_2 = function (a, b) {
  console.log(a + b);
}

suma_2(96,528)

let new_suma = suma_2(59,38)

//arrow funcition

let product = (x, y) => {
  return x * y
}
//single line

let product_2 = (x, y) => {return x * y}

//ej 

let area = function(h, b) {
  console.log(h * b);
}

area(10,15)
area(6, 8)

//ej 

let area_circulo = (r) => {return Math.floor(Math.PI * Math.pow(r,2))}

console.log(area_circulo(10));

//objetos

// key : value

// value = dato entonces sera una propiedad

//value = function entonces sera un metodo

let user = {
  'name': 'homero',
  'edad': 66,
  'hijos': ['bart', 'lissa', 'maggie'],
  'n_familia': function(n){
    return (`somos una familia de ${n} personas`);
  }
}

console.log(user.edad);
console.log(user['name']);
console.log(user.n_familia(4));

let car = {
  'año': 2004,
  'color': 'negro',
  'marca': 'ford',
  'auto_reparado': function(dato){
    let resp = ``;

    if (dato == 'si') {
      resp = 'el auto fue reparado'
    } else {
      resp = 'el auto no fue reparado'
    }
    return resp
  }
}

console.log(car['color']);
console.log(car.auto_reparado('asfsaf'));

let persona = {
  'edad': 30,
  'altura': 1.80,
  'nombre': 'rick'
}

console.log(persona.nombre);


persona.is_alive = true;
persona.presentacion = function() {
  console.log(`hola me llamo ${persona.nombre}`);
}

console.log(persona);
persona.presentacion()

let perro = {
  'nombre': 'toby',
  'raza': 'beagle',
  'edad': 2
}

perro.familia = 'torres';

perro.paseo = function(paseo) {
  let resp = '';
  if (paseo == true) {

    resp = 'toby salio al parque';
  } else {
    resp = 'toby no salio al parque';
  }

  return resp
}

console.log(perro);

console.log(perro.paseo(true));
