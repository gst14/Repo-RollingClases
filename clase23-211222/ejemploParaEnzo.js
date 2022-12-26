let bebidasEspirituosasNavidad = ["Cerveza","Sidra","Champagne","Vino","Ferne","Coca","Vodka"]

function bebidaParaBrindarDoce(bebida){
    if(bebida=='Sidra' || bebida=="Champagne"){
        console.log(`${bebida} es para brindar`)
    }else{
        console.log(`${bebida} no es para brindar`)
    }
}

for (let index = 0; index < bebidasEspirituosasNavidad.length; index++) {
    const bebidaParaAnalizar = bebidasEspirituosasNavidad[index];
    bebidaParaBrindarDoce(bebidaParaAnalizar)
}