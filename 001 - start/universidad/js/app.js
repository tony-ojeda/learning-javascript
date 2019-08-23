// Elminar elementos
const enlaces = document.querySelectorAll('.enlace');
const navegacion = document.querySelector('#principal');

//navegacion.removeChild(enlaces[0])
enlaces[0].remove();

// Obtener enlaces
const primerLi = document.querySelector('.enlace');

let elemento;

// obtener una clase de CSS
elemento = primerLi.className;
elemento = primerLi.classList.add('nueva-clase');
elemento = primerLi.classList.remove('nueva-clase');
elemento = primerLi.classList;

// Atributos
elemento = primerLi.getAttribute('href');
primerLi.setAttribute('href', 'httt://facebook.com');
primerLi.setAttribute('data-id', 20);
elemento = primerLi.hasAttribute('data-id'); // verifica si el atributo existe
primerLi.removeAttribute('data-id');

elemento = primerLi;