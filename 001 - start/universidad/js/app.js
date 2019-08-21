// Selección de multiples elementos
// let enlaces = document.getElementsByClassName('enlace')[3];

// // CSS
// enlaces.style.background = '#333';
// enlaces.textContent = 'Nuevo enlace';

// console.log(enlaces);


// Combinando Query Selector
// const listaEnlaces = document.querySelector('#principal')
//     .getElementsByClassName('enlace');

// console.log(listaEnlaces);


// Obteniendo Elementos por nombre etiquetas
const links = document.getElementsByTagName('a');
// links[18].style.color = 'red';
// links[18].textContent = 'Nuevo enlace';
// console.log(links);

let enlaces = Array.from(links);
enlaces.forEach(function(enlace) {
    console.log(enlace.textContent);
});