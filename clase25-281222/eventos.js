let btnCrearCaja = document.getElementById('crear_caja')

let mainDOM = document.getElementById('cards')

btnCrearCaja.onclick = function crearCaja(){
    let cajaDiv = document.createElement('div')
    cajaDiv.classList = ['card']
    mainDOM.appendChild(cajaDiv)
}