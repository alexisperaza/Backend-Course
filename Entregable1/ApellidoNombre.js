class Usuario {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName = () => {
        return `${this.nombre} ${this.apellido}`
    }
    addMascota = (mascota) => {
        this.mascotas.push(mascota)
    }
    countMascotas = () => {
        return this.mascotas.length
    }
    addBook = (nombre, autor) => {
        this.libros.push({nombre: nombre, autor: autor})
    }
    getBookNames = () => {
        let nombres = []
        this.libros.forEach((libro) => nombres.push(libro.nombre))
        return nombres
    }

    getBooks = () => {
        return this.libros;
    }



}    

let persona = new Usuario("Alexis", "Peraza");

console.log(persona.getFullName());

persona.addMascota('Ted')
persona.addMascota('Coco')
persona.addMascota('Max')

console.log(persona.countMascotas());

persona.addBook('Harry Potter', 'JK Collins')
persona.addBook('Cien años de soledad', 'Garcia Marquez')

console.log(persona.getBookNames());

console.log(persona);

