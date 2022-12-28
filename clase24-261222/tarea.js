// Crear una clase Estudiante
// Propiedades: nombre, edad, comision, y asistencia (arreglo vacio)
// 2 Metodos: cargarAsistencia, y revisarAsistencia

class Estudiante{
    // constructor(nombre, edad, comision, asistencia =[]) {
    //     this.nombre = nombre;
    //     this.edad = edad;
    //     this.comision = comision;
    //     this.asistencia = asistencia
    // }
    constructor(nombre, edad, comision) {
        this.nombre = nombre;
        this.edad = edad;
        this.comision = comision;
        this.asistencia = []
    }

    cargarAsistencia(fecha){
        this.asistencia.push(fecha)
    }
    cargarAsistencias(fechas){
        for (let i = 0; i < fechas.length; i++) {
            const fecha = fechas[i];
            this.asistencia.push(fecha)
        }
    }

    revisarAsistencia(){
        // return this.asistencia;
        return {
            asistencias: this.asistencia,
            presentes: this.asistencia.length
        }
    }
}

let estudiante_a = new Estudiante('Enzo (A) Martinez',35, 'Comision 12i') // Objetos o Instancias
let estudiante_b = new Estudiante('Guille (B) Fernandez',20, 'Comision 12i') // Objetos o Instancias
let estudiante_c = new Estudiante('Lucas (C) Santolaya',45, 'Comision 12i') // Objetos o Instancias

// 10-12-22 13-12-22 20-12-22
// estudiante_a.cargarAsistencia('10-12-22')
// estudiante_a.cargarAsistencia('13-12-22')
// estudiante_a.cargarAsistencia('20-12-22')
estudiante_a.cargarAsistencias(['10-12-22','13-12-22','20-12-22'])
console.log(estudiante_a)

// 10-12-22 20-12-22
estudiante_b.cargarAsistencia('10-12-22')
estudiante_b.cargarAsistencia('20-12-22')
console.log(estudiante_b)

// 20-12-22
estudiante_c.cargarAsistencia('20-12-22')
console.log(estudiante_c)

console.log(estudiante_a.nombre)
console.log(estudiante_a.revisarAsistencia())

console.log(estudiante_b.nombre)
console.log(estudiante_b.revisarAsistencia())

console.log(estudiante_c.nombre)
console.log(estudiante_c.revisarAsistencia())