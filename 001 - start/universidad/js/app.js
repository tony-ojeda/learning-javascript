// Traversing  Hijo - padre
// Nos permite recorrer todo los nodos del DOM (adelante, atras, saltos)

// const enlaces = document.querySelectorAll('.enlace');


// console.log(enlaces[0].parentElement.parentElement.parentElement);


const enlaces = document.querySelectorAll('.enlace');


console.log(enlaces[0].nextElementSibling.nextElementSibling.parentElement.children[4]);