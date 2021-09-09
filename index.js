
const addItem = () => {
    const nameField = document.getElementById('product-name')
    const name = nameField.value;

    if (!name) {
        return;
    }
    //Display in the UI
    displayProduct(name)
    // Add local storage
    addProductToCart(name)
    //clear
    nameField.value = '';

}

const displayProduct = (name) => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}
const getCart = () => {

}

const addProductToCart = () => {
    const cart = getCart();
}

const placeOrder = () => {

}