/*

Estructura Do-While

do{

}while(condicion)
*/

// Apagar las luces del comedor

let lucesPrendidas = true

do {
    console.log('Do-while')
    console.log('Revisar las luces si estan prendidas')
    lucesPrendidas = false;
} while (lucesPrendidas == true);





while (lucesPrendidas == false) {
    console.log('While')
    console.log('Revisar las luces si estan prendidas')
    lucesPrendidas = true;
}