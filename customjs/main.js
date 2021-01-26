// Code Snippet from Telmo Sampaio in Youtube and modified by me

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.icon span').textContent = productNumbers;
    }
}

function printCartNumber() {
    let total = 0;
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if (cartItems) {
        Object.keys(cartItems).forEach((key) => {
            let cart = cartItems[key];
            total += cart.inCart;
        })
    }
    document.querySelector('.icon span').textContent = total;
}

function addToCart(product, quantity) {
    quantity = quantity || 1;
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if(cartItems != null){
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += quantity; 
    }
    else {
        product.inCart = quantity;
        cartItems = {
            [product.tag]: product
        }
    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
    printCartNumber();
}

printCartNumber();
onLoadCartNumbers();