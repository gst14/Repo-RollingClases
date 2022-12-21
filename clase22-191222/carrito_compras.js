let itemsCarrito = [] // Arreglo vacio

console.log(itemsCarrito)

// for (let index = 0; index < 5; index++) {
//     let articuloIngresado =  prompt('Ingrese articulo: ')
//     if(articuloIngresado.trim() != ""){
//         itemsCarrito.push( articuloIngresado )
//     }
// }

const cantidadDeItems = 3

for (let index = 0; index < cantidadDeItems; index++) {
    let articuloIngresado = ''
    do {
        articuloIngresado = prompt(`Ingrese articulo (${index+1} de ${cantidadDeItems}): `)
        if(articuloIngresado.trim() != ""){
            itemsCarrito.push( articuloIngresado )
        }
    } while (articuloIngresado.trim() == "");
}

//  ['Arroz', 'Budin', 'Fideo', 'Pan dulce', 'Turron']
console.log(itemsCarrito)

