// Tipos de datos
// String, Number, Booolean, Arreglos, 
// Objetos (Predefinidos o creados por el usuario)

// Creamos una playlist musical

let musicPlaylist = [] // Creamos una lista vacia

// Template cancion del Biza (Objeto literal)
/*
{
 vol: 53,
 artistaInvitado: "Shakira",
 productor: "Bizarrap",
 duracionSeg: 217,
 youtube: "sasasaas"
}
*/
// musicPlaylist.push({
//     vol: 53,
//     artistaInvitado: "Shakira",
//     productor: "Bizarrap",
//     duracionSeg: 217,
//     youtube: "https://youtu.be/CocEMWdc7Ck"
// })

let continueWorking = true;

do {
    let volUser = prompt('Ingrese nro. sesion Biza: ')
    let artistaInvitadoUser = prompt('Ingrese artista invitado: ')
    let bizaSong = {
        vol: volUser,
        artistaInvitado: artistaInvitadoUser,
        productor: "Bizarrap",
    }

    musicPlaylist.push(bizaSong)
    
    continueWorking = confirm("Dese continuar?")
} while (continueWorking);

// a = b y b = c, entonces a =c

console.log(musicPlaylist)