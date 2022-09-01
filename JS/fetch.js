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

