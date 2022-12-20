let itemsCarrito = [] // Arreglo vacio

console.log(itemsCarrito)

// for (let index = 0; index < 5; index++) {
//     let articuloIngresado =  prompt('Ingrese articulo: ')
//     if(articuloIngresado.trim() != ""){
//         itemsCarrito.push( articuloIngresado )
//     }
// }

for (let index = 0; index < 5; index++) {
    let articuloIngresado = ''
    do {
        articuloIngresado = prompt('Ingrese articulo: ')
        if(articuloIngresado.trim() != ""){
            itemsCarrito.push( articuloIngresado )
        }
    } while (articuloIngresado.trim() == "");
}

//  ['Arroz', 'Budin', 'Fideo', 'Pan dulce', 'Turron']
console.log(itemsCarrito)

