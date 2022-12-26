console.log('Funciones')

// Funciones sin parametros
function multiplicarNumeros(){
    let resultado = 3 * 10
    console.log(resultado)
}
// multiplicarNumeros()

// Funciones con parametros
function multiplicarPorDiez( numero ){
    let resultado = numero * 10
    console.log(resultado)
}
// multiplicarPorDiez(10)
// multiplicarPorDiez(20)
// multiplicarPorDiez(4)
// multiplicarPorDiez(7)


// Funcion sin retorno
// Al final de la funcion no tiene la palabra RETURN
function multiplicarNumeros(){
    let resultado = 3 * 10
    console.log(resultado)
}

// Funcion con retorno
// a = b = c => a = c
function multiplicarPorDiezConRetorno( numero ){
    let resultado = numero * 10
    return resultado
}

let resultado = multiplicarPorDiezConRetorno(25)

console.log(resultado)