// console.log('Hola mundo ❤️')




let cantidadPlatosEnLaMesa = 0;
const cantidadDeComensales = 2;

// while(condicion){
//     Codigo a ejecutar mientras la condicion sea verdadera
// }

// 0 <= 13
/*
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

*/

while (cantidadPlatosEnLaMesa < cantidadDeComensales) {
    cantidadPlatosEnLaMesa = cantidadPlatosEnLaMesa + 1;
    if( cantidadPlatosEnLaMesa == 1 ){
        console.log('Puse '+ cantidadPlatosEnLaMesa  +' plato')
    }else{
        console.log('Puse '+ cantidadPlatosEnLaMesa  +' platos')
    }
}