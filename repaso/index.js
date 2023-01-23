// let div_app = document.getElementById('container_app');
// let inp_id = document.getElementById('inp_1');
// let inp_precio = document.getElementById('inp_2');
// let inp_stock = document.getElementById('inp_3');
// let inp_name = document.getElementById('inp_4');
// let btn_form = document.getElementById('btn_from');
// let cards_container = document.getElementById('cards_container');
// let btn_print = document.getElementById('btn_print');

// let data_base = []

// function Productos(id, precio, stock, name) { //cosntructor de los productos
//   this.id = id;
//   this.precio = precio;
//   this.stock = stock;
//   this.name = name;
// };

// btn_form.onclick = () => { //sube el producto a la base de datos data_base
//   let almacen = [inp_id.value, inp_precio.value,inp_stock.value, inp_name.value]
//   console.log(almacen);

//   let product_1 = new Productos(almacen[0],almacen[1],almacen[2],almacen[3])

//   data_base.push(product_1);

//   console.log(data_base);
// };

// function print_data__base() { //imprimer nuestros productos en la pagina web
//   data_base.forEach(el => {
//     let div = document.createElement('div');
//     div.innerHTML = `
//       <div class="card" style="width: 18rem;">
//         <img src="" class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title"> ${el.name} </h5>
//           <p class="card-text">precio: ${el.precio}</p>
//           <p class="card-text">stock: ${el.stock}</p>
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//       </div>
//     `
//     cards_container.appendChild(div);
//   })
// }

// btn_print.onclick = () => {
//   print_data__base()
// }



let url = 'https://pokeapi.co/api/v2/pokemon/1100'

let nombre = 'pepe'

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)

    let poke_id =  data.id
    let poke_name = data.name
    let poke_stats = data.stats
    let poke_img = data.sprites.front_default

    print_info_poke(poke_id, poke_name, poke_stats,poke_img)

  })


function print_info_poke(id, name, stats, img) {
    let fila = document.querySelector('#poke_container')
    let col = document.createElement('div')
    col.innerHTML = `<img src="${img}" alt=""> la busqueda del pokemon ${name} con el id ${id} tiene las siguientes estadisticas`

    stats.forEach(el => {
      let div = document.createElement('div');
      col.appendChild(div);
      div.innerHTML = `${el.stat.name}: ${el.base_stat}`
    });

    fila.appendChild(col)
}








