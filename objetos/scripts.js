//objeto literal

let persona = {
  'name': 'John',
  'apellidos': 'martinez',
  'age': 18,
  'alive': true,
  'function': function (tiempo) {
    return `hola ${persona.name} buenas ${tiempo}`;
  }
};

console.log(persona);
console.log(typeof persona);

//ej 

let carro = {
  modelo: 'toyota',
  año: 2023,
  color: 'rojo',
  uso: function (uso) {
    return `este carro esta ${uso}`;
  }
};

console.log(carro);
console.log(typeof carro);

//acceder a las propiedades o a los metodos (objeto.propiedad/metodo, objeto[propiedad/metodo])

console.log(carro.modelo);
console.log(carro['año']);

console.log(persona.function('tardes'));
console.log(persona.function('noches'));
console.log(persona.function('dias'));

console.log(carro.uso('nuevo'));

//HOST: host enviroment - estan definidos dentro de nuestro entorno de trabajo

//host

// console
// window
// document
// location

let perro = {
  raza: 'doberman',
  color: 'blanco',
  nombre: 'tequila',
  edad: 2,
  saludar: function(){
    return `hola ${perro.nombre}`
  }
};


console.log(perro.saludar());

// agregamos propiedades y metodos luego de crear un objeto 

perro.familia = 'torres';

console.log(perro);

perro.salida = function(salida){
  let resp = '';

  if (salida == true) {
    resp = 'si a salido'
  } else (
    resp = 'no a salido'
  )

  return resp
}

console.log(perro.salida(false));

//ej

let computador = {
  precio: 500,
  modelo: 'hp',
  ram: '8g',
  estado: function(modo){
    return `mi computador ${computador.modelo} esta ${modo}`
  }
}

console.log(computador.estado('apagado'));


computador.memoria = 256;

computador.espacio_d = function(porcentaje){
  return `mi disco tiene un espacio disponible de ${computador.memoria * porcentaje} gb`
}

console.log(computador);

console.log(computador.espacio_d(0.2));

let prop = Object.create({name:'pepe'})

console.log(prop);

//constructor: sirve para crear nuevos objetos 

function Product(name, price, sell, stock) {
  this.name= name;
  this.price = price;
  this.sell = sell;
  this.stock = stock;
  this.data = function () {
    return `nuestro producto es un ${this.name} con un pecio de ${this.price}`
  }
}

let pr_001 = new Product('iphone', 500, false, 10);
let pr_002 = new Product('xiaomi', 250, true, 8);
let pr_003 = new Product('hp', 350, true, 13);

console.log(pr_001);
console.log(pr_002);
console.log(pr_003.data());
console.log(pr_002.data());
console.log(pr_001.data());

// constructor con objetos literales

function Persona(literal) {
  this.name = literal.name;
  this.age = literal.age;
  this.height = literal.height;
  this.email = literal.email;
}

const person_001 = new Persona(
  {
    name: 'pepito',
    age: 36,
    height: 120,
    email: 'pepito@gmail.com'
  }
)

console.log(person_001);

//sintaxis simplificada de un constructor
let ej = {
  x:10,
  y:20
}


let prod = Object.create({x:13, y:10})

//ej 

function Coche(marca,año,color, funciona) {
  this.marca = marca;
  this.año = año;
  this.color = color;
  this.funciona = funciona;
  this.util = function(){
    return `el carro con la marca ${this.marca} y del año ${this.año} ${this.funciona}`
  }
}

let coche_1 = new Coche('ford', 2016, 'gris', 'funciona');
let coche_2 = new Coche('citroen', 2012, 'rojo', 'no funciona');

console.log(coche_1);
console.log(coche_2);

console.log(coche_1.util());
console.log(coche_2.util());