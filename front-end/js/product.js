"use strict"

const productImage = document.querySelector("small-img-col");

const zoomImage = () => {
    productImage.style.width = '150px';
}

//eventos
productImage.addEventListener('mouseenter', zoomImage)