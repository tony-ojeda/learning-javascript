// Event Bubbling

const card = document.querySelector('.card');
const infoCurso = document.querySelector('.info-card');
const agregarCarrito = document.querySelector('.agregar-carrito');

card.addEventListener('click', function(event) {
    console.log('Click en Card');
    event.stopPropagation();
});

infoCurso.addEventListener('click', function(event) {
    console.log('Click en Info Curso');
    event.stopPropagation();
});

agregarCarrito.addEventListener('click', function(event) {
    console.log('Click en Agregar a Carrito');
    event.stopPropagation();
});