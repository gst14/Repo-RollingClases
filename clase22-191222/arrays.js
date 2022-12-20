// Integrantes
let nombre = "Gaston";
let nombre1 = "Alejo";
let nombre2 = "Marcos";
let edad = 31;
let casado = false;

// console.log(nombre);
// console.log(nombre1);
// console.log(nombre2);

let integrantes = ["Gaston", "Alejo", "Marcos", "Alvaro"];

console.log(integrantes)

console.log(integrantes[0])
// Marcos
console.log(integrantes[2])

console.log(`La cantidad de integrantes es ${integrantes.length}`)

for (let index = 0; index < integrantes.length; index++) {
    let integrante = integrantes[index];
    integrante+=' ✋🏼'
    console.log(integrante)
}