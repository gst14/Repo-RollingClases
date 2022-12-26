let bolsaPapaNoel = []


// if(buenoMaloStatusYear[0] == true){
//     bolsaPapaNoel.push('regalo')
// }else{
//     bolsaPapaNoel.push('carbon')
// }

// if(buenoMaloStatusYear[1] == true){
//     bolsaPapaNoel.push('regalo')
// }else{
//     bolsaPapaNoel.push('carbon')
// }

// if(buenoMaloStatusYear[2] == true){
//     bolsaPapaNoel.push('regalo')
// }else{
//     bolsaPapaNoel.push('carbon')
// }

// if(buenoMaloStatusYear[3] == true){
//     bolsaPapaNoel.push('regalo')
// }else{
//     bolsaPapaNoel.push('carbon')
// }

// if(buenoMaloStatusYear[4] == true){
//     bolsaPapaNoel.push('regalo')
// }else{
//     bolsaPapaNoel.push('carbon')
// }

// let buenoMaloStatusYear = [ true, true, false, true, false ]

let personasAVisitar = [
    {
        nombre: "Gaston",
        ciudad: "SMT",
        sePortoBien: false
    },
    {
        nombre: "Enzo",
        ciudad: "SMT",
        sePortoBien: true
    },
    {
        nombre: "Alejo",
        ciudad: "San Rafael - Mendoza",
        sePortoBien: false
    },
    {
        nombre: "Miguel",ciudad: "Famailla", sePortoBien: true
    }
]

function agregarRegaloALaBolsa( persona ){

    if( persona.sePortoBien == true){
        bolsaPapaNoel.push({ nombre: persona.nombre, cargar: "Regalo sorpresa" })
    }else{
        bolsaPapaNoel.push({ nombre: persona.nombre, cargar: "Carbon :(" })
    }
}

for (let index = 0; index < personasAVisitar.length; index++) {
    const personaAnalisis = personasAVisitar[index];
    agregarRegaloALaBolsa( personaAnalisis )
}


console.log(bolsaPapaNoel)