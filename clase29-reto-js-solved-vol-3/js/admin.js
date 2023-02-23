const storageProducts = localStorage.getItem('listIcecream')
const storageUserLogIn = localStorage.getItem('userLogIn')
const storageUsers = localStorage.getItem('users')
let productToEdit = null;
let userToEdit = null;
let userLogIn = undefined;
let deleteConfig = {};
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
let listUsers = []
if(storageUsers){
    listUsers = JSON.parse(storageUsers)
}

let tbodyProductDOM = document.getElementById('productTableDetail')
let tbodyUserDOM = document.getElementById('userTableDetail')
let inputSearchProductsDOM = document.getElementById('search-products')
let inputSearchUsersDOM = document.getElementById('search-users')
let formProducAMBDOM = document.getElementById('formEditProduct')
let formUserAMBDOM = document.getElementById('formEditUser')
let btnDeleteDOM = document.getElementById('btnDeleteItem')
let btnNewProductDOM = document.getElementById('btnNewProduct')
let btnLogoutDOM = document.getElementById('btnLogout')

function loadEditProductModal(product){
    productToEdit = product;
    const nameDOM = document.getElementById('nameProductForm')
    nameDOM.value = product.nombre
    const detailDOM = document.getElementById('detailProducForm')
    detailDOM.textContent = product.detalle
    const priceDOM = document.getElementById('priceProductForm')
    priceDOM.value = product.precio
}

function deleteProduct(id){
    deleteConfig = {
        for:'product',
        Id: id
    }
}
function loadEditUser(user){
    userToEdit = user;
    const nameDOM = document.getElementById('nameUserForm')
    nameDOM.value = user.name;
    const emailDOM = document.getElementById('emailUserForm')
    emailDOM.value = user.mail
    const typeUserDOM = document.getElementById('typeUserForm')
    typeUserDOM.value = user.type
}

function deleteUser(mail){
    deleteConfig = {
        for: 'user',
        mail: mail
    }
}

function generateTableProductos(listProducts){
    tbodyProductDOM.innerHTML = ''
    listProducts.forEach(product => {
        const trDOM = document.createElement('tr')
        const thDOM = document.createElement('th')
        thDOM.textContent = product.id
        const tdNameDOM = document.createElement('td')
        tdNameDOM.textContent = product.nombre
        const tdPriceDOM = document.createElement('td')
        tdPriceDOM.textContent = `$${product.precio}`
        const tdActionsDOM = document.createElement('td')
        const btnEditDOM = document.createElement('button')
        btnEditDOM.innerHTML = `<span class="fa fa-solid fa-pencil"></span>`
        btnEditDOM.classList = 'btn btn-outline-dark me-1'
        btnEditDOM.setAttribute("data-bs-toggle", "modal");
        btnEditDOM.setAttribute("data-bs-target", "#productModal");
        btnEditDOM.onclick = () => {loadEditProductModal(product)}
        const btnDeleteDOM = document.createElement('button')
        btnDeleteDOM.innerHTML = `<span class="fa fa-solid fa-trash"></span>`
        btnDeleteDOM.classList = 'btn btn-outline-danger'
        btnDeleteDOM.setAttribute("data-bs-toggle", "modal");
        btnDeleteDOM.setAttribute("data-bs-target", "#confirmDelete");
        btnDeleteDOM.onclick = () => {deleteProduct(product.id)}
        tdActionsDOM.appendChild(btnEditDOM)
        tdActionsDOM.appendChild(btnDeleteDOM)
        trDOM.appendChild(thDOM)
        trDOM.appendChild(tdNameDOM)
        trDOM.appendChild(tdPriceDOM)
        trDOM.appendChild(tdActionsDOM)
        tbodyProductDOM.append(trDOM)
    });
}
function generateTableUsers(listUsers){
    tbodyUserDOM.innerHTML = ''
    listUsers.forEach((user,i) => {
        const trDOM = document.createElement('tr')
        const thDOM = document.createElement('th')
        thDOM.textContent = i+1
        const tdNameDOM = document.createElement('td')
        tdNameDOM.textContent = user.name
        const tdMailDOM = document.createElement('td')
        tdMailDOM.textContent = user.mail
        const tdAdminDOM = document.createElement('td')
        tdAdminDOM.textContent = user.type == 'admin' ? 'Yes' : 'No'
        const tdActionsDOM = document.createElement('td')
        const btnEditDOM = document.createElement('button')
        btnEditDOM.innerHTML = `<span class="fa fa-solid fa-pencil"></span>`
        btnEditDOM.classList = 'btn btn-outline-dark me-1'
        btnEditDOM.setAttribute("data-bs-toggle", "modal");
        btnEditDOM.setAttribute("data-bs-target", "#editUserModal");
        btnEditDOM.onclick = () => {loadEditUser(user)}
        const btnDeleteDOM = document.createElement('button')
        btnDeleteDOM.innerHTML = `<span class="fa fa-solid fa-trash"></span>`
        btnDeleteDOM.classList = 'btn btn-outline-danger'
        btnDeleteDOM.setAttribute("data-bs-toggle", "modal");
        btnDeleteDOM.setAttribute("data-bs-target", "#confirmDelete");
        btnDeleteDOM.onclick = () => {deleteUser(user.mail)}
        tdActionsDOM.appendChild(btnEditDOM)
        tdActionsDOM.appendChild(btnDeleteDOM)
        trDOM.appendChild(thDOM)
        trDOM.appendChild(tdNameDOM)
        trDOM.appendChild(tdMailDOM)
        trDOM.appendChild(tdAdminDOM)
        trDOM.appendChild(tdActionsDOM)
        tbodyUserDOM.append(trDOM)
    });
}


inputSearchProductsDOM.onkeyup = (e)=>{
    const userFilter = e.target.value.trim().toLowerCase()
    const filterProducts = listProducts.filter( product => product.nombre.trim().toLowerCase().includes(userFilter))
    generateTableProductos(filterProducts)
}

inputSearchUsersDOM.onkeyup = (e)=>{
    const userFilter = e.target.value.trim().toLowerCase()
    const filterUsers = listUsers.filter( u => u.name.trim().toLowerCase().includes(userFilter))
    generateTableUsers(filterUsers)
}


formProducAMBDOM.onsubmit = (e)=>{
    e.preventDefault()
    const nameDOM = document.getElementById('nameProductForm')
    const detailDOM = document.getElementById('detailProducForm')
    const priceDOM = document.getElementById('priceProductForm')
    if(nameDOM.value && detailDOM.value && priceDOM.value){
        if(productToEdit){
            const id = listProducts.findIndex( p => p.id == productToEdit.id )
            listProducts[id].nombre = nameDOM.value
            listProducts[id].detalle = detailDOM.value
            listProducts[id].precio = priceDOM.value        
        }else{
            listProducts.push({
                id: listProducts.length+1,
                nombre: nameDOM.value,
                detalle: detailDOM.value,
                precio: priceDOM.value
            })
        }
        localStorage.setItem('listIcecream', JSON.stringify(listProducts))
        listProducts = JSON.parse(localStorage.getItem('listIcecream'))
        generateTableProductos(listProducts)
        const toastOkDOM = document.getElementById('toastOk')
        const toast = new bootstrap.Toast(toastOkDOM)
        toast.show()
    }else{
        const toastErrorDOM = document.getElementById('toastError')
        const toast = new bootstrap.Toast(toastErrorDOM)
        toast.show()
    }
}

formUserAMBDOM.onsubmit = (e)=>{
    e.preventDefault()
    const id= listUsers.findIndex( u => u.mail == userToEdit.mail )
    const nameUserDOM = document.getElementById('nameUserForm')
    const emailUserDOM = document.getElementById('emailUserForm')
    const typeUserDOM = document.getElementById('typeUserForm')
    userToEdit = null;
    if(nameUserDOM.value && emailUserDOM.value && typeUserDOM.value){
        listUsers[id].name = nameUserDOM.value
        listUsers[id].mail = emailUserDOM.value
        listUsers[id].type = typeUserDOM.value
        localStorage.setItem('users', JSON.stringify(listUsers))
        listUsers = JSON.parse(localStorage.getItem('users'))
        generateTableUsers(listUsers)
        const toastOkDOM = document.getElementById('toastOk')
        const toast = new bootstrap.Toast(toastOkDOM)
        toast.show()
    }else{
        const toastErrorDOM = document.getElementById('toastError')
        const toast = new bootstrap.Toast(toastErrorDOM)
        toast.show()
    }
}

btnDeleteDOM.onclick = (e)=>{
    let newItems = []
    if(deleteConfig.for == 'product'){
        newItems = listProducts.filter( p => p.id != deleteConfig.Id )
        localStorage.setItem('listIcecream', JSON.stringify(newItems))
        listProducts = newItems;
        generateTableProductos(newItems)
    }else{
        newItems = listUsers.filter( u => u.mail != deleteConfig.mail )
        localStorage.setItem('users',JSON.stringify(newItems))
        listUsers = newItems;
        generateTableUsers(newItems)
    }
}

btnNewProductDOM.onclick = (e)=>{
    const nameDOM = document.getElementById('nameProductForm')
    const detailDOM = document.getElementById('detailProducForm')
    const priceDOM = document.getElementById('priceProductForm')
    nameDOM.value = ''
    detailDOM.value = ''
    priceDOM.value = ''
    productToEdit = null;
}

btnLogoutDOM.onclick = (e)=>{
    localStorage.removeItem('userLogIn')
    window.location.href = 'index.html'
}


generateTableProductos(listProducts)
generateTableUsers(listUsers)