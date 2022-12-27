// programacion orientada a objetos

console.log('POO')

// Funcion constructora
// Color, marca, modelo, año y propietario
// function Car(color, brand, model, year=2000 ,owner="Ciudadano promedio"){
//     this.color = color;
//     this.brand = brand;
//     this.model = model;
//     this.year = year;
//     this.owner = owner;
// }

// Clase Auto
class Car{
    constructor(color, brand, model, year=2000 ,owner="Ciudadano promedio"){
        this.color = color;
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.owner = owner;
    }

    runCar(){
        console.log(`Running ${this.owner} car...`)
    }

    // showDetails
    showDetails(){
        console.log(`Brand: ${this.brand} | Model: ${this.model} | Owner: ${this.owner}`)
    }
}

// Auto de Enzo
const enzoCar = new Car('White','Peugeot',"208", 2020,"Enzo") 

const miguelCar = new Car('Blue','Fiat',"Siena", 2012,"Miguel") 

// enzoCar es: un objeto de la clase CAR o tambien llamado una INSTANCIA (Instance == Ejemplar)

console.log(enzoCar)
console.log(miguelCar)


enzoCar.runCar();

console.log(enzoCar.color) 
miguelCar.runCar();

enzoCar.showDetails();