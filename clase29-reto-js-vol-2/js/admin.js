const storageProducts = localStorage.getItem('listIcecream')
const storageUserLogIn = localStorage.getItem('userLogIn')
let userLogIn = undefined;
if(storageUserLogIn){
    userLogIn = JSON.parse(storageUserLogIn)
}else{
    window.location = 'login.html'
}

if(userLogIn.type=='user'){
    window.location = '/'
}

let listProducts = []
if(storageProducts){
    listProducts = JSON.parse(storageProducts)
}

let tbodyDOM = document.getElementById('productTableDetail')

for (let i = 0; i < listProducts.length; i++) {
    const product = listProducts[i];
    const trDOM = document.createElement('tr')
    const thDOM = document.createElement('th')
    thDOM.textContent = product.id
    const tdNameDOM = document.createElement('td')
    tdNameDOM.textContent = product.nombre
    const tdPriceDOM = document.createElement('td')
    tdPriceDOM.textContent = product.precio
    trDOM.appendChild(thDOM)
    trDOM.appendChild(tdNameDOM)
    trDOM.appendChild(tdPriceDOM)
    tbodyDOM.append(trDOM)
}


{/* <tr>
    <th scope="row">1</th>
    <td>Nombre</td>
    <td>Precio</td>
</tr> */}