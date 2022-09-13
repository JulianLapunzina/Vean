let divCatalogo = document.getElementById('catalogo')
let botonDatos = document.getElementById('btn-DB')


const obtenerDatos = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(result => {
            let datos = result;
            datos.forEach(post => {
            divCatalogo.innerHTML += `
                <div id="${post.id}">
                    <h3>"Título": "${post.title}"</h3>
                    <p>"Autor:" ${post.body}</p>
                    </div>`
                })
        })
        .catch(err => console.log(err))
}

botonDatos.onclick = () => {
    obtenerDatos()
}

let divCatalogoDos = document.getElementById('catalogoDos')
let botonDatosDos = document.getElementById('btnDB')

const obtenerDatosDos = () => {
    fetch('../DB/products.json')
    .then(response => response.json())
    .then(result => {
        let datos = result;
        datos.forEach(book => {
            divCatalogoDos.innerHTML += `<div id= "${book.id}">
            <img src="${book.img}" style="width: 200px">
            <h3>"Título": "${book.name}"</h3>
            <p>"Autor: " ${book.author}</p>
            <h4>$${book.price}</h4>
            </div>`
        })
    })
    .catch(err => console.log(err))
}

botonDatosDos.onclick = () => {
    obtenerDatosDos()
}