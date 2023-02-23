// Programacion funcional. Arrow function
const fruits = ["apple", "banana", "orange", "grapes"];
let counter = 0;
const persons = [
    {
        name: 'Gaston',
        age: 31,
        state: 'Tucuman'
    },
    {
        name: 'Enzo',
        age: 27,
        state: 'Tucuman'
    },
    {
        name: 'Masiel',
        age: 20,
        state: 'Cordoba'
    },
    {
        name: 'Flor',
        age: 30,
        state: 'Tucuman'
    },
];


let ulDOM = document.getElementById('lista_items')
let ulDetailDOM = document.getElementById('fruits_details')
let ulPersonsDOM = document.getElementById('fruits_details')

// for (let index = 0; index < fruits.length; index++) {
//     const fruit = fruits[index];
//     const liItem = `<li class="list-group-item">${fruit}</li>`
//     ulDOM.innerHTML += liItem;
// }
// function createFruit(fruit){

// }

fruits.forEach((fruit) => {
    const liItem = `<li class="list-group-item">${fruit} (forEach)</li>`
    ulDOM.innerHTML += liItem;
});


// Usando map en arreglos

const quantityLetterFruits = fruits.map((fruit) => {
    const qLetters =  fruit.length
    return { fruit, qLetters  }
})

quantityLetterFruits.forEach((detail) => {
    const liItem = `<li class="list-group-item">${detail.fruit} | Cantidad letras: ${detail.qLetters} (map)</li>`
    ulDetailDOM.innerHTML += liItem;
})

persons.forEach((p) => {
    const newPerson = createPersonWithID(p)
    const li = createLiPerson(newPerson)
    ulPersonsDOM.innerHTML += li
});


// Desestructuracion
function createLiPerson({id, name, state, age}){
    const liItem = `<li class="list-group-item"> (${id}) Nombre: ${name} | Provincia: ${state} | Edad: ${age}</li>`
    return liItem
}

// Spread operator ("Desparramar, difundir, compartir")
function createPersonWithID(person){
    counter++
    // return {
    //     id: counter,
    //     name: person.name,
    //     age: person.age,
    //     state: person.state
    // }
    return { id: counter, ...person}
}





