/*

while(condicion){
    Codigo a ejecutar mientras la condicion sea verdadera
} 

let cantidadPlatosEnLaMesa = 0;
const cantidadDeComensales = 2;

1ra vuelta 
cantidadPlatosEnLaMesa = 0
cantidadDeComensales = 2
-- al final cantidadPlatosEnLaMesa = 1

2da vuelta 
cantidadPlatosEnLaMesa = 1
cantidadDeComensales = 2
-- al final cantidadPlatosEnLaMesa = 2

3ra vuelta 
cantidadPlatosEnLaMesa = 2
cantidadDeComensales = 2
-- la condicion es falsa y se termina el bucle

while (cantidadPlatosEnLaMesa < cantidadDeComensales) {
    // cantidadPlatosEnLaMesa = cantidadPlatosEnLaMesa + 1;
    // cantidadPlatosEnLaMesa +=1;
    cantidadPlatosEnLaMesa++;
    if( cantidadPlatosEnLaMesa == 1 ){
        console.log('Puse '+ cantidadPlatosEnLaMesa  +' plato')
    }else{
        console.log('Puse '+ cantidadPlatosEnLaMesa  +' platos')
    }
}

*/

// Bucle for

// for(inicializacion; condicion; incrementador){
//     Codigo a ejecutar mientras la condicion sea verdadera
// }

// for (let index = 0; index < 5; index++) {
//     console.log(' * Hola mundo '+index)
// }

// for (let index = 1; index <= 5; index++) {
//     console.log('- Hola mundo '+index)
// }

// for (let index = 0; index < 5; index++) {
//     console.log('G - Hola mundo '+(index+1))
// }

// Interpolacion - backtics
for (let index = 0; index < 100; index++) {
    // console.log('G - Hola mundo '+(index+1))
    console.log(`${index+1} - Hola mundo`)
}
for (let index = 1; index <= 10; index++) {
    console.log('*'.repeat(index))
}
