// if( condicion ){

// }

if( 2 < 5){
    console.log('2 es menor a 5')
}

// Usuario y contraseña

let user = 'gavila'
let password = '1234'

if(user == 'gavila'){
    console.log('El usuario "gavila" es valido')
}
if (password === '1234') {
    console.log('Contraseña correcta')
}

if( user=='gavila' && password==='124' ){
    console.log('El usuario y la contraseña ingresados son validos')
}else{
    console.log('El usuario y la contraseña ingresados son INVALIDOS')
}

// Condiciones para entrar al boliche 🕺🏻
// let edad = 20
// let vistaBermuda = false
// let estaVestido = false
// if( edad >= 18 ){
//     console.log('Es mayor a 18 años')
//     if(vistaBermuda == true){
//         console.log('Arafueee tiene Bermuda')
//     }else{
//         if(estaVestido == true){
//             console.log('Atroden maestro')
//         }else{
//             console.log('911 🚨')
//         }
//     }
// }else{
//     console.log('Es menor a 18 años')
// }


// Condicion para ser alumno destacado 

// Alumno Fulanito Fulano
// let asistenciaMayorNoventaPorc = true;
// let trabajosPracticosHechos = true;
// let ponerLaCasaParaLaJoda = false;
// let pagarElAsado_Pollo = false;

// if(asistenciaMayorNoventaPorc == false){
//     console.log('Naaa no pasa nada. Chau, fuera de mi vida')
// }else if( trabajosPracticosHechos == false ){
//     console.log('No cumplis los TP hechos >:(')
// }else if( ponerLaCasaParaLaJoda == true || pagarElAsado_Pollo == true ){
//     console.log('Alumno Destacado *')
// }else{
//     console.log('Lo lamento demasiado. Te vas a otra comision. No sos digno >:(')
// }

// SWITCH 

let estacion = 'verano'
switch (estacion) {
    case 'verano':
        console.log('Hace calorrr. Sale birrita');
        break;
    case 'invierno':
        console.log('The winter is comming');
        break;
    case 'otoño':
        console.log('Flores amarillas')
        break;
    case 'primavera':
        console.log('Las flores son rojas y el pasto es verde')
        break;
    default:
        console.log('No tengo idea que pusiste')
        break;
}