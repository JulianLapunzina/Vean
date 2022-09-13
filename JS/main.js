                    // Validación del formulario  
const nameField = document.querySelector("#inputBookName");
const authorField = document.querySelector("#inputAuthor");
const dateField = document.querySelector('#inputDate');
const priceField = document.querySelector('#inputPrice');
const descriptionField = document.querySelector('#inputDescription');


const validateEmptyField = (e) => {
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.length < 1) {
        field.classList.add('invalid')
        field.nextElementSibling.classList.add('error')
        field.nextElementSibling.innerText = `Debe rellenar este campo`;
    } else {
        field.classList.remove('invalid')
        field.nextElementSibling.classList.remove('error')
        field.nextElementSibling.innerHTML = "";
    }
}


nameField.addEventListener("blur",validateEmptyField);
authorField.addEventListener('blur', validateEmptyField);
dateField.addEventListener('blur', validateEmptyField);
priceField.addEventListener('blur', validateEmptyField);
descriptionField.addEventListener('blur', validateEmptyField);



// La manera que encontré de hacer que solamente rellenando todos los campos del formulario se pueda apretar el boton de registro 

nameField,authorField,dateField,priceField,descriptionField.addEventListener("change",(e)=> {
    boton.classList.remove('disabled')
});

        // FUNCIÓN CONSTRUCTORA DEL LIBRO
const createBook = () => {
    let id = prompt('Ingrese su número de documento para registrar el libro')
    let nombreDelLibro = document.querySelector("#inputBookName").value
    let autor = document.querySelector("#inputAuthor").value
    let fechaDePublicacion = document.querySelector("#inputDate").value
    let precio = parseInt(document.querySelector("#inputPrice").value)
    let categoria = document.querySelector("#inputCategoria").value
    let nuevoLibro = new Libro (nombreDelLibro, autor, fechaDePublicacion, precio, categoria)
    libros.push(nuevoLibro)
        let accion = confirm ('¡Felicitaciones! Su libro ha sido registrado exitosamente. ¿Desea verificar los datos? Si continua, al finalizar, por favor acepte en caso de que sus datos sean correctos o cancele para volver a realizar el proceso nuevamente')
            if(accion != false) {
            let accion2 = confirm(JSON.stringify(nuevoLibro,null,3));
            if(accion2 != true) {
            libros.splice(0,7)
            createBook()
            }
            else {
            localStorage.setItem(id, JSON.stringify(nuevoLibro))
            let stockNuevo = localStorage.getItem(id, (nuevoLibro))
            libros.push(stockNuevo)
            console.log(libros)
            }
            }
    }

    // evento de escucha del boton para registro de libro. 
    let boton = document.getElementById('botonRegistro')
    boton.onclick = (e) => {
    e.preventDefault()
    }
    boton.addEventListener('click', createBook) 


