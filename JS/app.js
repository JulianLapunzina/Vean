const modalContainer = document.getElementById('modal_container')
const openCart = document.getElementById('open')
const closeCart = document.getElementById('close')
const modalCart = document.getElementById('modalCart')


openCart.addEventListener('click', ()=>{
    modalContainer.classList.toggle('modal-active')
    console.log('Llegó el click')
})


closeCart.addEventListener('click', ()=>{
    modalContainer.classList.remove('modal-active')
    console.log('Llegó el segundo click')
})

modalContainer.addEventListener('click', ()=>{
    closeCart.click()
})

modalCart.addEventListener('click', (e)=>{
    e.stopPropagation()
})

class Products {
    constructor (id, name, price, img, quantity) {
        this.id = id
        this.name = name
        this.price = price
        this.img = img
        this.quantity = quantity
    }
}

const products = []

const prod1 = new Products ("1", "Tan cerca, tan cerca", 2500, '../images/tancerca.png', 3)
const prod2 = new Products ("2", "Rocas Ígneas", 2000, '../images/rocasIgneas.png', 2)
const prod3 = new Products ("3", "Tremendismos", 2500, "../images/tremendismos.png", 1)
const prod4 = new Products ("4", "Líquidos", 2500, "../images/liquidos.jpg", 5)
const prod5 = new Products ("5", "El oficio de enamorarse", 2500, "../images/juancete.jpg", 3)

products.push(prod1,prod2,prod3,prod4,prod5)
console.log(products)



// funcion para mostrar los productos

const mostrarProductos = (products) => {
    const productsContainer = document.getElementById('product-container')
    products.forEach(product => {
        const card = document.createElement('card')
        card.innerHTML += `<div class="card" style="width:25rem;">
                            <img src="${product.img}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${product.name}</h5>
                                <p class="card-text">Price: $${product.price}</p>
                                <p id="quantity" class="card-text">Stock: ${product.quantity}</p>
                                <button class="btn btn-primary" id="button${product.id}">Add to Cart</button>
                            </div>
                        </div>`
    
    productsContainer.appendChild(card)
    const button = document.getElementById(`button${product.id}`)
    button.addEventListener('click', () => {
        cart(product.id)
        alert(`Agregaste ${product.name}`)
        })
    })
}

mostrarProductos(products)