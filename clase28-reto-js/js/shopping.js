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
for (let i = 0; i < shoppingCartItems.length; i++) {
    const item = shoppingCartItems[i];
    const liHTML = `<li class="list-group-item d-flex align-items-center">
                        <span class="badge bg-primary custom-color rounded-pill">1</span>
                            ${item.nombre}
                    </li>`
    liLISTHtml.push(liHTML)
}


listItemsShoppingDOM.innerHTML = liLISTHtml.join('')

