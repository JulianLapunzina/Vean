//LO DE ABAJO NO ESTOY SEGURO POR QUÉ NO FUNCIONA                            
// Filter - Función que permite traer el o los libros específicos
let busquedaLibro = document.querySelector('#busqueda').value;
const buscarLibro = () => {
    libros.filter(libro => libro.nombreDelLibro == busquedaLibro)

}
console.log(libro) // ARRAY

//Event search with Filter
let search = document.getElementById('search')
search.onclick = (e) => {
    e.preventDefault()
}
search.addEventListener('click', buscarLibro)

