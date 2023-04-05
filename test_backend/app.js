const btnGetProducts = document.getElementById('btnGetProducts');
// const btnGetProduct = document.getElementById('btnGetProduct');
const btnAddProduct = document.getElementById('btnAddProduct');
const formProductDOM = document.getElementById('formProduct');
formProductDOM.addEventListener('submit', submitFormProduct);

// const btnUpdateProduct = document.getElementById('btnUpdateProduct');
// const btnDeleteProduct = document.getElementById('btnDeleteProduct');
let isCreateForm = true;
let mode = 'create';
let currentProduct = {};
// Event listeners
btnGetProducts.addEventListener('click', getProducts);
// btnGetProduct.addEventListener('click', getProduct);
btnAddProduct.addEventListener('click', generateFormProduct);
// btnUpdateProduct.addEventListener('click', updateProduct);
// btnDeleteProduct.addEventListener('click', deleteProduct);

// Get Products
function getProducts() {
    // peticion get con fetch a http://localhost:8080/productos
    const tableBodyProductsDOM = document.getElementById('tbodyProducts');
    fetch('http://localhost:8080/productos')
        .then(res => res.json())
        .then(data => {
            let html = '';
            data.forEach(product => {
                html += `
                    <tr>
                        <td>${product.id}</td>
                        <td>${product.nombre}</td>
                        <td>${product.precio}</td>
                        <td>${product.stock}</td>
                        <td class="text-center">
                            <button class="btn btn-primary" onclick="editProduct(${product.id})">Editar</button>
                            <button class="btn btn-danger" onclick="deleteProduct(${product.id})">Eliminar</button>
                        </td>
                    </tr>
                `;
            });
            tableBodyProductsDOM.innerHTML = html;
        }
        );
}

function getProduct(id) {
    fetch(`http://localhost:8080/productos/${id}`)
        .then(res => res.json())
        .then(() => { });
}

function editProduct(id) {
    fetch(`http://localhost:8080/productos/${id}`)
        .then(res => res.json())
        .then(data => {
            generateFormProduct(false, data);
        });
}


function deleteProduct(id) {
    fetch(`http://localhost:8080/productos/${id}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
        .then(data => {
            getProducts();
        });
}

function generateFormProduct(isCreate = true, product = {}) {
    isCreateForm = !isCreate ? false : true;
    mode = isCreate ? 'create' : 'edit';
    currentProduct = product;
    const formTitle =  document.getElementById('formTitle');
    formTitle.style.display = 'block';
    formTitle.innerHTML = isCreate ? 'Agregar producto' : 'Editar producto';
    formProductDOM.innerHTML = `
        <div class="mb-3">
            <label for="txtName" class="form-label">Nombre</label>
            <input type="text" class="form-control" value="${product?.nombre || ""}" id="txtName" name="txtName">
        </div>
        <div class="mb-3">
            <label for="txtPrice" class="form-label">Precio</label>
            <input type="number" class="form-control" value="${product?.precio || ""}" id="txtPrice" name="txtPrice">
        </div>
        <div class="mb-3">
            <label for="txtStock" class="form-label">Stock</label>
            <input type="number" class="form-control" value="${product?.stock || ""}" id="txtStock" name="txtStock">
        </div>
        `;
    if (isCreate) {
        formProductDOM.innerHTML += `
            <div class="mb-3 d-flex justify-content-end gap-3">
                <button type="button" id="btnCancel" class="btn btn-secondary" onclick="disableFormProduct()">Cancelar</button>
                <button type="submit" class="btn btn-primary">Agregar</button>
            </div>`;
    } else {
        formProductDOM.innerHTML += `
            <div class="mb-3 d-flex justify-content-end gap-3">
                <button type="button" id="btnCancel" class="btn btn-secondary" onclick="disableFormProduct()">Cancelar</button>
                <button type="submit" class="btn btn-primary">Modificar</button>
            </div>`;
    }
}

function disableFormProduct() {
    const formProductDOM = document.getElementById('formProduct');
    formProductDOM.innerHTML = '';
    const formTitle =  document.getElementById('formTitle');
    formTitle.style.display = 'none';
    formTitle.innerHTML = '';
}

function submitFormProduct(e) {
    e.preventDefault();
    const txtName = document.getElementById('txtName');
    const txtPrice = document.getElementById('txtPrice');
    const txtStock = document.getElementById('txtStock');
    const product = {
        nombre: txtName.value,
        precio: txtPrice.value,
        stock: txtStock.value
    };
    switch (mode) {
        case 'create':
            fetch('http://localhost:8080/productos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            })
                .then(res => res.json())
                .then(() => {
                    getProducts();
                    generateFormProduct();
                });
            break;
        case 'edit':
            fetch(`http://localhost:8080/productos/${currentProduct.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            })
                .then(res => res.json())
                .then(() => {
                    getProducts();
                    disableFormProduct();
                });
            break;
    }
}


getProducts();