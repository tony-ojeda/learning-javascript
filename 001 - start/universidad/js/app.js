// Delegation
document.body.addEventListener('click', eliminarElemento);

function eliminarElemento(event) {
    event.preventDefault();

    if (event.target.classList.contains('borrar-curso')) {
        console.log(event.target.parentElement.parentElement.remove());
    }
    if (event.target.classList.contains('agregar-carrito')) {
        console.log('Curso Agregado');
    }
}