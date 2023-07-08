const addProduct = () => {
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;

    productField.value = '';
    quantityField.value = '';
    showProducts(product, quantity);
}

const showProducts = (product, quantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    productContainer.appendChild(li);
    saveProductToLocalStorage(product, quantity)
}

const getStoredShoppingCart = () => {
    const storedCart = localStorage.getItem('cart');
    let cart = {};
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductToLocalStorage = (product, quantity) =>{
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    // console.log(cart);
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const displayProductsFromLocalStorage = () => {
    const savedCart = getStoredShoppingCart();
    // console.log(savedCart);
    for(const product in savedCart){
        const quantity = savedCart[product];
        showProducts(product, quantity);
    }
}

displayProductsFromLocalStorage()