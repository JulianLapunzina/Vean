        /*
        const usuarios = []

        class Usuario {
            constructor(nombreDeUsuario, contrasenia) {
            this.nombreDeUsuario = nombreDeUsuario
            this.contrasenia = contrasenia
            }
        }
        
        const registrarUsuario = (nombredeUsuario, contrasenia) => {
            nombreDeUsuario = prompt('Ingrese el nuevo nombre de Usuario')
            contrasenia = prompt('Ingrese su nueva contraseña')
            let usuarioNuevo = new Usuario (nombreDeUsuario, contrasenia)
            usuarios.push(usuarioNuevo)
        }
        
                // Usuarios ya creados que se almacenan para verificar si coincide o no con los que ingresa el usuario en un futuro
        
        const usuarioRuben = new Usuario ("Ruben", 12345)
        usuarios.push(usuarioRuben)
        const ususarioFernanda = new Usuario ("Fernanda",12345)
        usuarios.unshift(ususarioFernanda)
        
        console.log(usuarios)
        
                // Registro de usuario
        let bienvenida = alert('Bienvenido a Vean, para comenzar necesitamos que cree un nuevo Usuario')
        registrarUsuario()
        */
                        // Clase con función constructora del libro + comisión de la plataforma igualado al iva
        
        // alert('Perfecto, ahora comencemos a cargar los datos de su libro')
        
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

                // Array de almacenamiento de Libros + Función que pide los datos y construye el libro
        
        const Libros = []
        
        const registrarLibro = () => {
            let nombreDelLibro = document.querySelector("#inputBookName").value
            let autor = document.querySelector("#inputAuthor").value
            let fechaDePublicacion = document.querySelector("#inputDate").value
            let precio = parseFloat(document.querySelector("#inputPrice").value)
            let categoria = document.querySelector("#inputCategoria").value
            let id = prompt('Ingrese su número de documento para registrar el libro')
            let libroNuevo = new Libro (nombreDelLibro, autor, fechaDePublicacion, precio, categoria, id)
            Libros.push(libroNuevo)
            Libros.join(',')
            let accion = confirm ('¡Felicitaciones! Su libro ha sido registrado exitosamente. ¿Desea verificar los datos? Si continua, al finalizar, por favor acepte en caso de que sus datos sean correctos o cancele para volver a realizar el proceso nuevamente')
            //el condicional de abajo lo que hace es que si el usuario confirma que los datos que ingresó están mal, vuelve a llamar a la función para que pueda agregarlos nuevamente, y además elimina los datos que ingresó viejos.
            if(accion != false) {
            let accion2 = confirm(JSON.stringify(libroNuevo,null,3));
            if(accion2 != true) {
            Libros.splice(0,7)
            registrarLibro()
                }
            }
        }

        // evento de escucha del boton para registro de libro. 
        let boton = document.getElementById('botonRegistro')
        boton.addEventListener("click", registrarLibro)

        // Dejo algunos libros creados ya para que el usuario pueda ver el catálogo de libros disponibles en el caso que quiera comprar
        let libro1 = new Libro ("El oficio de enamorarse", "Juan Báez Nudelman", "12/06/2020", 2500, "poesía", 37056014)
        Libros.push(libro1)
        let libro2 = new Libro ("tan cerca tan cerca","Ariel Duce Bemez", "27/12/2021", 1500, "poesía", 30455613)
        Libros.unshift(libro2)

        //Agrega el libro al párrafo que está debajo.
        Libros.forEach(el => {
        let nodo = document.createElement("div")
            nodo.innerHTML = `<h3>${el.nombreDelLibro}</h3>
                            <h3>${el.autor}</h3>
                            <p>${el.categoria}</p>
                            <p>${el.fechaDePublicacion}</p>
                            <p>${el.precio}</p>`
        document.getElementById('libros').appendChild(nodo)
        })


        // Foreach - Va a ser la función que tenga el catálogo completo de los libros existentes.
        Libros.forEach(producto => {
        console.log(`Este Libro es "${producto.nombreDelLibro}", su autor es "${producto.autor}", la fecha de publicación es "${producto.fechaDePublicacion}", su precio es "${producto.precio}", tiene colaboradores "${producto.colaboradores}" y el numero de identificación es "${producto.id}"`)
        })

        // Map - Método que permite ver el catálogo pero solamente por nombres
        const nombresLibros = Libros.map((nombre) => nombre.nombreDelLibro)
        console.log(nombresLibros)


                                        //LO DE ABAJO NO ESTOY SEGURO POR QUÉ NO FUNCIONA                            
        // Filter - Función que permite traer el o los libros específicos
        let busquedaLibro = document.querySelector('#busqueda').value;
        const buscarLibro = () => {
            Libros.filter(libro => libro.nombreDelLibro == busquedaLibro)
        }
        console.log(buscarLibro) // ARRAY

        //Event search with Filter
        let search = document.getElementById('search')
        search.addEventListener('click', buscarLibro)
                                        //HASTA ACÁ

/*
        // Some - Método que permite ver si el libro está disponible o no
        let stockLibro = prompt('¿Desea conocer si tenemos stock del libro que busca? por favor escriba aquí')
        let stockLibroValor = Libros.some(libro => libro.nombreDelLibro == stockLibro)
        console.log(stockLibroValor) // true or false
*/
/*
        // Carrito de compras con reduce
        const usuarioCompra = [{ precio: 2500}, {precio: 2000}] // precio de los libros (aún no sé cómo traerlos desde el otro array)
        const usuarioCompraTotal = usuarioCompra.reduce((acc,el) => acc + el.precio, 0)
        alert(`El precio de su compra es de ${usuarioCompraTotal}`)
        
*/ 
        // ordenar los libros alfabeticamente - se puede usar el metodo sort (a.nombre > b.nombre) No lo uso ahora porque no tiene sentido.



        // console.log(Libros)
        // const librosyusuarios = usuarios.concat(Libros)
        // console.log(librosyusuarios)

