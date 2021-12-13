"use strict"

const product = document.querySelector(".product")
const remove = document.querySelector(".product-remove")

const removeProduct = () => {
    if (product.parentNode) {
        product.parentNode.removeChild(product);
}
}

remove.addEventListener('click', removeProduct)