const libros = []
// Clase con función constructora del libro + comisión de la plataforma igualado al iva


class Libro {
    constructor(nombredelLibro, autor, fechaDePublicacion, precio, categoria, id) {
    this.nombreDelLibro = nombredelLibro
    this.autor = autor
    this.fechaDePublicacion = fechaDePublicacion
    this.precio = precio
    this.categoria = categoria
    this.id = id
    }
    comision() {
    this.precio = this.precio / 0,30
    }
}

// Dejo algunos libros creados ya para que el usuario pueda ver el catálogo de libros disponibles en el caso que quiera comprar

let libro1 = new Libro ("El oficio de enamorarse", "Juan Báez Nudelman", "12/06/2020", 2500, "poesía", 37056014)
libros.push(libro1)
let libro2 = new Libro ("tan cerca tan cerca","Ariel Duce Bemez", "27/12/2021", 1500, "poesía", 30455613)
libros.unshift(libro2)

//Agrega el libro al párrafo que está debajo.
libros.forEach(el => {
let nodo = document.createElement("div")
    nodo.innerHTML = `<h3>"${el.nombreDelLibro}"</h3>
                        <h4>${el.autor}</h4>
                        <p>${el.categoria}</p>
                        <p>${el.fechaDePublicacion}</p>
                        <p>${el.precio}</p>`
document.getElementById('libros').appendChild(nodo)
})

