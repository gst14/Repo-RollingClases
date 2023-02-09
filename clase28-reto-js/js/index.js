let listIcecream = [{
    id: 1,
    nombre: "Helado tacho 1/2",
    detalle: "Producto hecho con nuestros maestros heladeros. Fabricado con mucho love",
    precio: '1050,00'
},
{
    id: 2,
    nombre: "Helado 1/4",
    detalle: "Producto hecho con nuestros maestros heladeros. Fabricado con mucho love",
    precio: '740,00'
},
{
    id: 3,
    nombre: "Cookies and cream (190 g)",
    detalle: "Producto hecho con nuestros maestros heladeros. Fabricado con mucho love",
    precio: '500,00'
},
{
    id: 4,
    nombre: "Chocolate blanco y Latte",
    detalle: "Producto hecho con nuestros maestros heladeros. Fabricado con mucho love",
    precio: '500,00'
}, {
    id: 5,
    nombre: "Pistacho",
    detalle: "Producto hecho con nuestros maestros heladeros. Fabricado con mucho love",
    precio: '500,00'
}, {
    id: 6,
    nombre: "Maracuya y Caramelo",
    detalle: "Producto hecho con nuestros maestros heladeros. Fabricado con mucho love",
    precio: '600,00'
},
{
    id: 7,
    nombre: "Dulce de Leche",
    detalle: "Producto hecho con nuestros maestros heladeros. Fabricado con mucho love",
    precio: '600,00'
},
{
    id: 8,
    nombre: "Mascarpone",
    detalle: "Producto hecho con nuestros maestros heladeros. Fabricado con mucho love",
    precio: '600,00'
},
{
    id: 9,
    nombre: "Postre Suizo",
    detalle: "Producto hecho con nuestros maestros heladeros. Fabricado con mucho love",
    precio: '600,00'
},
{
    id: 10,
    nombre: "Frutilla",
    detalle: "Producto hecho con nuestros maestros heladeros. Fabricado con mucho love",
    precio: '600,00'
},
]

const storeIcecream = localStorage.getItem('listIcecream')

if(storeIcecream){// pregunto si storeIcecream tiene algun valor (es decir distinto de null)
    listIcecream = JSON.parse(storeIcecream) 
}else{
    localStorage.setItem('listIcecream', JSON.stringify(listIcecream))
}

let filteredIcecream = []

let shoppingCartItems = []

let searchInputDOM = document.getElementById('search-input');
let cardsContainerDOM = document.getElementById('products-cards');
let cartCounterDOM = document.getElementById('items-shop');

searchInputDOM.onkeyup = (e)=>{
    let userFilter = (e.target.value).toLowerCase().trim(); // esto es lo que el usuario esta escribiendo en el input de busqueda
    filteredIcecream = listIcecream.filter( (product)=> product.nombre.toLowerCase().trim().includes(userFilter))
    generateCardsHeladitouHTML(filteredIcecream)
}

function generateCardsHeladitouHTML(listItems){
    let htmlCards = []
    for (let i = 0; i < listItems.length; i++) {
        const product = listItems[i];
        let htmlCard = `<div class="card mb-3 col-12" style="max-width: 540px;">
                            <div class="row g-0 h-25">
                                <div class="col-6">
                                    <img src="./img/icecream_back.png" class="img-fluid rounded-start object-fit-cover custom-img mt-2 mb-2 rounded-end" alt="helado">
                                </div>
                                <div class="col-6">
                                    <div class="card-body">
                                        <h5 class="card-title">${product.nombre}</h5>
                                        <p class="card-text">${product.detalle}</p>
                                        <p class="card-text"><small class="text-muted">Precio unitario $${product.precio}</small></p>
                                        <button onclick="addCartProduct(${product.id})" class="btn btn-secondary btn-add-cart">Agregar al carrito</button>
                                    </div>
                                </div>
                            </div>
                        </div>`
        htmlCards.push(htmlCard)
    }
    cardsContainerDOM.innerHTML = htmlCards.join('')
}

function addCartProduct(idProduct){
    let productClick = listIcecream.find(product => product.id == idProduct) 
    
    const storeShopping = localStorage.getItem('shopping')
    if(storeShopping){// pregunto si storeShopping tiene algun valor (es decir distinto de null)
        shoppingCartItems = JSON.parse(storeShopping) 
    }
    shoppingCartItems.push(productClick)
    localStorage.setItem('shopping', JSON.stringify(shoppingCartItems))
    cartCounterDOM.textContent = shoppingCartItems.length
}


generateCardsHeladitouHTML(listIcecream)