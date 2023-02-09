let shoppingCartItems = []
let cartCountDOM = document.getElementById('items-shop')
const storageShoppingCartItems = localStorage.getItem('shoppingCartItems')
if (storageShoppingCartItems) {
    shoppingCartItems = JSON.parse(storageShoppingCartItems)
}
localStorage.setItem('shoppingCartItems')
cartCountDOM.textContent = shoppingCartItems.length