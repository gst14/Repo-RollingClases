console.log('Arrow functions')




/*
// Funcion sin parametros y sin retorno
function saludar(){
    console.log('Hola mundo')
}
*/
// Convertirla en arrow function (funcion flecha)
const saludar = ()=>{
    console.log('Hola mundo (AF)')
}

/*
// Funcion sin parametros y con retorno
function saludarRetorno(){
    let mensaje = 'Hola mundo (R)__'
    return mensaje;
}
*/
const saludarRetorno = ()=>{
    let mensaje = 'Hola mundo (R-AF)'
    return mensaje;
}
let msg = saludarRetorno()

console.log(msg)

/*
// Funcion con parametros y sin retorno
function saludarSujeto(nombre="fulano"){
    // console.log('Hola '+nombre)
    console.log(`Hola ${nombre}`)
}
*/
const saludarSujeto = (nombre="fulano")=>{
    // console.log('Hola '+nombre)
    console.log(`Hola ${nombre} (AF)`)
}

/*
// Funcion con parametros y con retorno
function saludarSujetoRetorno(nombre="fulano"){
    // console.log('Hola '+nombre)
    let mensaje =  `Hola ${nombre} (R)`
    return mensaje;
}
*/

const saludarSujetoRetorno = (nombre="fulano")=>{
      // console.log('Hola '+nombre)
      let mensaje =  `Hola ${nombre} (R-AF)`
      return mensaje;
}

saludar()

saludarSujeto()

msg = saludarSujetoRetorno()

console.log(msg)