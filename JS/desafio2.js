// Desafío N° 2 - Simulador Interactivo

// Web de venta de libros

// La idea es en un principio que los usuarios puedan ingresar los datos de sus libros: 
// - nombre del libro - autor/a - fecha de publicación - precio - categoría (cuentos, autoayuda, novela, poesía)
// por cada uno de esos usuarios que ingresen un libro, va a generar un ID. Que correspondería al identificador de ese libro, que luego será ingresado en una base de datos.
// dentro de la plataforma, ese usuario va a tener acceso a los libros y va a tener la posibilidad de visualizarlo, leer una breve descripción y comprarlo en el caso de que esté interesado.
//Al precio de cada libro se sumará la comisión, que en este caso la igualé al iba.



// Datos del usuario - Función de mostrar Resultado

// const nombreDelLibro = prompt('Ingrese el nombre de su libro')
// const autor = prompt('Ingrese el nombre de autoría')
// const fechaDePublicacion = prompt('Ingrese la fecha de publicación')
// const precio = prompt('Ingrese el precio de su libro')
// const categoria = prompt('Elija entre una de las siguientes categorías: 1) cuentos 2) autoayuda 3) novela 4) poesía')

// let resultadoFinal = nombreDelLibro + ' ' + autor + ' ' + fechaDePublicacion + ' $' + precio + ' ' + categoria

// function mostrarResultado () {
//     alert('Los valores que ha ingresado son los siguientes, verifique que sean correctos: ' + resultadoFinal)
// }

// mostrarResultado()


// function crearIdLibro (nombreDelLibro, autor, fechaDePublicacion, precio, categoria) {
//     const libro1 = {resultadoFinal}
// }

// crearIdLibro()


// función constructora del libro

// const Libro1 (nombreDelLibro, autor, fechaDePublicacion, precio, categoria) {
//     this.nombreDelLibro= nombre
//     this.autor = autor
//     this.fechaDePublicacion = fechaDePublicacion
//     this.precio = precio
//     this.categoria = categoria
//     this.getID = function () {
//         this.categoria = this.categoria 
//     }
// }



// Formulario para Inscripción de un nuevo libro
/*
const nombreDelLibro = prompt('Ingrese el nombre del libro')
const autor = prompt('Ingrese su nombre')
const fechaDePublicacion = prompt('Ingrese la fecha de publicación en el siguiente formato 00/00/0000')
const precio = prompt('Ingrese el precio de su libro')
const categoria = prompt('Ingrese la categoría de su libro: 1) cuentos, 2) poesía, 3) novela')
const id = prompt('Ingrese su número de documento')

let resultado = nombreDelLibro + ', ' + autor + ', ' + fechaDePublicacion + ', ' + precio + ', ' + categoria + ', ' + id

alert('Los datos ingresados son: ' + resultado)



// Clase con función constructora del libro + comisión de la plataforma igualado al iva

class Libro {
    constructor(nombredelLibro, autor, fechaDePublicacion, precio, categoria,id) {
        this.nombreDelLibro = nombredelLibro
        this.autor = autor
        this.fechaDePublicacion = fechaDePublicacion
        this.precio = precio
        this.categoria = categoria
        this.id = id
    }
    comision() {
        this.precio = this.precio * 1.21 
    }
}


// Debajo pongo un ejemplo de cómo crear un nuevo Libro, pasandole los parámetros 
const Libro1 = new Libro("Game of Thrones", "George Martin", "06/08/1996", 4700, 3, 33064675)
Libro1.comision()
console.log(Libro1)

// No sé cómo resolver el hecho de pasarle los parámetros que ingrese el usuario, ahora solamente hice que el usuario ingrese esos valores y los almacené en una variable contenedora. Paralelamente creé un ejemplo de una función constructora que se encargue de hacer un objeto que contiene los valores de cada libro y se muestran en console (línea 86)


let categoria1 = prompt('ingrese en qué categoría se encuentra su libro: opción 1) novela, opción 2) cuentos')
while (categoria1 =! 1 && categoria1 != 2) {
    alert('Ingrese nuevamente una opción, recuerde que puede ser 1) novela o 2) cuentos')
    categoria1 = prompt()
    if(categoria1 == 1) {
        categoria1 = 1
    }
    else if(categoria1 == 2) {
        categoria1 = 2
    }
    else(console.log('error'))
}

console.log(categoria1)


*/
