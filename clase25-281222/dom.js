
// let nombre = window.prompt('Como te llamas? ')

// window.location.reload(true)

// let intervalo = setInterval(function repetirNombre(){
//     console.log(`Bienvenido ${nombre}`)
// },10)

// let nombreAsiste = prompt("Nombre: ")

// let ulListaPresentes = document.querySelector('ul')
let ulListaPresentes = document.getElementById('lista_presentes')

console.log(ulListaPresentes)

const alumnos = ['Enzo','Miguel',"Fernando",'Brisa',"Marcos"]


for (let index = 0; index < alumnos.length; index++) {
    const alumno = alumnos[index]
    let alumnoPresente =  prompt(`Alumno ${alumno}, presente?`)
    let liPresente = document.createElement('li')
    if(alumnoPresente == "S"){
        liPresente.textContent = `Alumno ${alumno} - Presente`
        liPresente.classList = ['presente']
    }else{
        liPresente.textContent = `Alumno ${alumno} - Ausente`
        liPresente.classList = ['ausente']
    }
    ulListaPresentes.appendChild(liPresente)
}







// h4DOM.textContent = 'Un titulo creado desde JS'

