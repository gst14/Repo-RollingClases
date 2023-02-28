const nombres = ['Alejo','Enzo','Lucas',"Masiel","Guille"]
const mainDOM = document.getElementById('main')
const fetchDOM = document.getElementById('fetchContainer')
mainDOM.style.display = 'block'
fetchDOM.style.display = 'none'
// function nombre(id){
//     return nombres[id]
// }

const obtenerNombre = (id)=>{
    return nombres[id]
}

const respuesta = obtenerNombre(1)

console.log(respuesta)

// POO
const hoy = new Date(); // hoy es una instancia de la clase Date
console.log(hoy)


// Promesas: Creacion
// resolve, es el retorno para cuando la promesa esta resulta correctamente
// reject, es el retorno para cuando la promesa ha fallado
// const nombres = ['Alejo','Enzo','Lucas',"Masiel","Guille"]
const ejPromesa = new Promise((resolve, reject)=>{
    const id = 8
    const personaExiste = nombres[id]
    // Enzo, pero en caso de que no exista el id, me devuelve undefined
    if(personaExiste){
        resolve(`El Id ${id} existe, y la persona se llama ${personaExiste}`)
    }else{
        reject(`El Id ${id} no existe. No se encontro a ninguna persona`)
    }
})

ejPromesa.then( (respuesta)=>{
    console.log(`${respuesta} - Desde .then()`)
}).catch((error)=>{
    console.log(`${error} - Desde .catch()`)
})


const pResultadoDOM = document.getElementById('resultado')
const msgCargandoDOM = document.getElementById('msgCargando')
const btnBuscarDOM = document.getElementById('btnBuscar')
const inputIdPersonaDOM = document.getElementById('idPersonaInput')

const buscarPersonaPorId = (id, delay = 3000)=>{
    const personaEncontrada = nombres[id]
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            if(personaEncontrada){
                resolve(`>>> El Id ${id} existe, y la persona se llama ${personaEncontrada}`)
            }else{
                reject(`>>> El Id ${id} no existe. No se encontro a ninguna persona`)
            }
        }, delay);
    })
}

buscarPersonaPorId(2,1000).then((respuesta) => { // Lucas
    console.log(respuesta) 
}).catch((error)=>{
    console.log(error)
})

buscarPersonaPorId(4,1000).then((respuesta) => { // Guille
    console.log(respuesta) 
}).catch((error)=>{
    console.log(error)
})

buscarPersonaPorId(3,500).then((respuesta) => { // Masiel
    console.log(respuesta) 
}).catch((error)=>{
    console.log(error)
})



btnBuscarDOM.onclick = (e)=>{
    msgCargandoDOM.textContent = "Cargando..."
    const id = inputIdPersonaDOM.value
    buscarPersonaPorId(id).then((respuesta) => {
        pResultadoDOM.textContent = respuesta
        msgCargandoDOM.textContent = ""
    }).catch((error)=>{
        alert(error)
        msgCargandoDOM.textContent = ""
    })
}