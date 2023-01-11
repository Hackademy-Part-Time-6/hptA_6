let lista = [1,2,3,4,5,6,7,8,9]

let matrices = [
  ['html',10],
  ['cass',12],
  ['javaScript',15],
  ['python',19],
  ['php',14]
];

// // // let lista = [1,2,3,4,5,6,7,8,9]

// // // console.log(typeof lista);

// // let matrices = [
// //   ['html',10],
// //   ['css',12],
// //   ['javaScript',15],
// //   ['python',19],
// //   ['php',14]
// // ];

// // console.log(matrices[0]);
// // console.log(matrices[0][1]);

// // let js = matrices[2]

// // console.log(js);
// // console.log(js[1]);


// // matrices[5] = ['c++',10]

// // console.log(matrices);



// // let array = [
// //   {
// //     name: 'name',
// //     edad: 25,
// //     email: 'email@example.com',
// //     isalive: true,
// //     family: ['papá','mamá','hermano']
// //   },
// //   {
// //     modelo: 'hunday',
// //     color: 'rojo',
// //     año:1999,
// //     otros_colores: {
// //       color_primario: 'morado',
// //       color_secundario:'azul',
// //       color_oscuro: 'negro'
// //     }
// //   },
// //   {
// //     ram: 8,
// //     disco: 256,
// //     modelo: 'asus'
// //   }
// // ];

// // console.log(array[2]);
// // console.log(array[2].modelo);

// // let asus = array[2]
// // console.log(asus.modelo);

// // console.log(array[1].otros_colores.color_oscuro);
// // console.log(array[0].family[1]);

// // // let a = 'hola'
// // // a = Array.from(a)

// // // console.log(a);

// // // let b = Array.from(a, el => el.toUpperCase());

// // // console.log(b);

// // // let c = [1,2,3,4,5]
// // // let d = Array.from(c)

// // // console.log(d);

// // // console.log(c == d);

// // let a = [1,2,3]
// // let b = [4,5,6]
// // let c= [7,8,9]

// // console.log(a.concat(b,c));

// // let scores = [
// //   ['ani', 22],
// //   ['lucas', 40],
// //   ['marco', 59]
// // ]

// // console.log(scores.every(el => el[1] > 20));
// // function double(number) {
// //   return number * 2
// // }

// // let lista = [1,2,3,4,5,6,7,8,9]
// // let result = []

// // for (let i = 0; i < lista.length; i++) {
// //   const element = lista[i];
// //   console.log(element);
// //   result[i] = double(element)
// // }

// // console.log(result);

// // // let resultados_map = lista.map(double)

// // // console.log(resultados_map );

// // // resultados_map = lista.map(el => {
// // //   return el * 2
// // // })

// // // console.log(resultados_map);


// // let frutas = ['manzana', 'banano', 'fresa', 'mango']

// // let frutas_fa = frutas.map(el => {
// //   if (el[el.length - 1] === 'a') {
// //     return el
// //   } else {
// //     return el = ''
// //   }
// // })

// // console.log(frutas_fa);

// // // frutas.pop() ---> quita el ultimo elemento
// // // frutas.shift() ---> quita el primer elemento
// // //filter() ---> crea un nuevo array filtrando los elementos que no cumplen la condicion 

// // console.log(frutas.filter(el => el[el.length - 1] === 'a'));

// // let array_2 = ['one','two','three','four','five','six','seven','eight']

// // let reversed = array_2.reverse();

// // //reversed ----> invierte las posciones de mi array
// // console.log(reversed);

// // let animals = ['pato', 'perro', 'tigre', 'jirafa', 'camello']

// // console.log(animals.slice(2));

// // console.log(animals.slice(2,4));

// // console.log(animals.slice(-2));

// // let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May']

// // let array_3 = [11,250,98,45,36,78000,4,59,6,12]

// // console.log(array_3.sort((a,b) => a - b));

// // console.log(months.sort());

// //ej 1

// let array = [
//   [1,2,3,4,5,6],
//   ['one','two','three','four','five', 'six'],
//   ['uno','dos','tres','cuatro', 'cinco', 'seis']
// ]

// let array_p0 = array[0]
// let array_p1 = array[1]
// let array_p2 = array[2]

// console.log(array_p0);

// let array_final = [];

// array_final = array_final.concat(array_p0,array_p1,array_p2)

// console.log(array_final);


// let texto = 'Lorem  ipsum dolor sit amet, consectetur adipisicing elit. Eligendi sint a ullam corporis possimus in totam quibusdam omnis porro quas, ratione et quasi natus suscipit. Facere nobis sint vitae tempora!'

// let texto_array = texto.split(' ');

// texto_array = texto_array.filter(el => el != '')

// console.log(texto_array);

// console.log(texto_array.length);

// let numeros = [10000,580,460,309,78,540,23,98,45,74,15,98]

// numeros = numeros.sort((a, b) => a - b);

// console.log(numeros);

// numeros = numeros.reverse()

// console.log(numeros);

// let myset = new Set(numeros);

// console.log(myset);

// console.log(typeof myset);

// let final = Array.from(myset)

// console.log(final);

// let num = [2, 2, 2, 2, 3, 2, 2, 2, 2]

// let myset2 = new Set(num)
// let diferent_num;

// num.map(el => {
//   console.log(el);
//   if (diferent_num !== el) {
//     diferent_num = el
//   }
// })

// for (let i = 0; i < num.length; i++) {
//   const element = num[i];
//   if (diferent_num != element) {
//     diferent_num = element
//     break
//   } 
// }

// console.log(diferent_num);

// let cumpleaños = [
//   {
//     name:'borja',
//     date: 20,
//     month:11,
//     year:97
//   },
//   {
//     name:'carlos',
//     date: 02,
//     month:08,
//     year:99
//   },
//   {
//     name:'belen',
//     date: 31,
//     month:10,
//     year:86
//   },
//   {
//     name:'luber',
//     date: 05,
//     month:11,
//     year:99
//   },
//   {
//     name:'jhony',
//     date: 28,
//     month:03,
//     year:96
//   },
//   {
//     name:'pepe',
//     date: 09,
//     month:11,
//     year:99
//   },
// ]

// cumpleaños = cumpleaños.sort((a, b) => a.year - b.year);

// cumpleaños = cumpleaños.sort((a, b) => {
//   if(a.year === b.year) {
//     return a.month - b.month;
//   } 
//   if (a.month === b.month) {
//     return a.date - b.date;
//   }
// })

// console.log(cumpleaños);

