const mainDOM = document.getElementById('main')
const fetchDOM = document.getElementById('fetchContainer')
mainDOM.style.display = 'none'
fetchDOM.style.display = 'block'


fetch('https://randomuser.me/api/?results=1') // Peticion GET (Obtener) -> Esto es un verbo HTTP
.then( (respuesta) => {
    return respuesta.json()
})
.then( (jsonRespuesta) => {
    const persona = jsonRespuesta['results'][0]
    console.log(persona)
})
.catch((error) =>{
    console.log(error)
})