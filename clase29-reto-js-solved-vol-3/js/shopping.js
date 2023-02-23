let shoppingCartItems = []
let cartCountDOM = document.getElementById('items-shop')
let listItemsShoppingDOM = document.getElementById('list-items')
const storageShoppingCartItems = localStorage.getItem('shopping') // null

if (storageShoppingCartItems) { // storageShoppingCartItems es distinto de null
    shoppingCartItems = JSON.parse(storageShoppingCartItems)
}
cartCountDOM.textContent = shoppingCartItems.length

// alert(`Hay ${shoppingCartItems.length} items en el carrito`)

let liLISTHtml = []

let itemsShopping = []

for (let i = 0; i < shoppingCartItems.length; i++) {
    // iterar array de items del carrito y regresar un arreglo con cada item y su cantidad de veces repetido
    const item = shoppingCartItems[i];
    const itemFind = itemsShopping.find(itemShopping => itemShopping.id === item.id)
    if (itemFind) {
        itemFind.cantidad++
    } else {
        itemsShopping.push({
            id: item.id,
            nombre: item.nombre,
            precio: item.precio,
            cantidad: 1
        })
    }
}
// convertir un string "5,000.00" a un numero decimal, ej 5000.00 con 2 digitos en JS
for (let i = 0; i < itemsShopping.length; i++) {
    const item = itemsShopping[i];
    const price = parseFloat(item.precio.replace(/,/g, ''));
    const liHTML = `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span> 
        <span class="badge bg-primary custom-color rounded-pill me-1">${item.cantidad}</span>
        <span>${item.nombre}</span>
        </span>
        <span class="ps-2">PU: $${price} - Total: ${parseFloat(price * item.cantidad)}</span>
        </li>`
    liLISTHtml.push(liHTML)
}

listItemsShoppingDOM.innerHTML = liLISTHtml.join('')

