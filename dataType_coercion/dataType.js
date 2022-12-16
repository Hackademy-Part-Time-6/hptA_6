//datos de reference 
let lista = [1,true,3,4,,'hola']

console.log(typeof lista);

//data type numbers

console.log(Number);

console.log(Number.MAX_SAFE_INTEGER);

console.log(0.1 + 0.2);

console.log('cero'/ 10);

console.log(typeof ('cero'/ 10))

//data type string

console.log(typeof 'hola mundo');

//suma de strings

let a = 'hola';
let b = 'mundo';
let c = a + b;

console.log(a + ' ' + b);

//suma de num y string

let d = a + 5

console.log(d);

console.log('hola' + 5);

console.log(typeof (d))

//usar concatenacion con los vertics ` `
 let name = 'Jhony'
 let apellido = 'Mogollon'

 console.log(`mi nombre es ${name} y mi apellido es ${apellido}`);

 //hacer un template y un console log de la edad, correo y si esta presente

 let edad = 20;
 let correo = 'test@gmail.com'
 let asistencia = true;

 console.log(`mi edad es ${edad}, mi correo es ${correo}, mi asistencia: ${asistencia}`);

 //los strings funcionan como arrys 

 console.log(String);

 let saludo = 'hola mundo'

 console.log(saludo.length);

 console.log(saludo[5]);

 //comparacion de valores js


//comparacion de numeros


console.log(a < b);

console.log(a > b);

console.log(c > b > a);

/* c > b == true 
   true > a ----> type convertion 
   1 > a == false
*/

let resultado = c > b == 1;

/* c < b == true
   true == 1 ----> type convertion 
   1 == 1 = true 
*/

let resultado2 = a > b > c // 

console.log(resultado2);

/*let a = 9;
let b = 12;
let c = 15;*/

let resultado3 = a > b == 0// 

/* a > b == false 
   false == 0 ----> type convertion 
   0 == 0 = true ----
*/

console.log(resultado3 );


//type convertion implicit


console.log(c + d);

console.log(typeof (c + d));

console.log(a * b);

console.log(typeof (a * b));

//type convertion explicit
 
console.log(typeof  b);
console.log(typeof Number(b));

resultado = a + Number(b);

console.log(resultado); // 2 105, 3 15

//ejemplos

console.log(2 + 2) // 4

console.log(2 + '2') // 22 

console.log(true + true) // 2 true , 3 2

// 1 + 1


console.log(true + false) // 2 1, 1 NaN, 1 false

console.log('2' + '2' - 2) // 1 222, 2 22, 1 20 

/* '2' + '2' == '22'
    '22' - 2 ------> type convertion '22' == 22
    22 - 2 = 20
*/

// operados de asignacion '='

let nombre = 'jhony'

nombre = 'pepe'

//operadores de aritmetica




//operador ingremento y asignacion

num = 10
num ++
num ++
 
num = num + 1

console.log(num);

//comparasion de iguldad 

a = 'pepe'
b = 'sofia'

console.log(a == b);

c = 3;
d = '3';

resultado = c == d;

console.log(c == d); // 1 false, 4 true

console.log(c === d)

//comparador de diferencia

console.log(c != d);

console.log(c !== d);


//ejemplos

let x = 2;
let y = "2";
let z = 1;



console.log(x == y); // true
console.log(x === y); //false
console.log(x != y); //false, 
console.log(x !== y); // true

console.log(x > z); //true
console.log(x < z); //false 
console.log(x >= z); //1 falso, 3 true
console.log(x <= z); // false

x >= z
/* 2 > 1 == true 
   2 == 1 == false

   true o false == true 
*/
