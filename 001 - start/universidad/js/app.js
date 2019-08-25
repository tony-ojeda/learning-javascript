// variables
const encabezado = document.querySelector('#encabezado');
const enlaces = document.querySelectorAll('.enlace');
const boton = document.querySelector('#vaciar-carrito');

// Click
//boton.addEventListener('click', obtenerEvento);

// Doble Click
// boton.addEventListener('dblClick', obtenerEvento);

// Mouse Enter: Se activa el evento cuando el cursor se acerca al elemento escogido
// boton.addEventListener('mouseenter', obtenerEvento);

// Moouse Leave: Se activa el evento cuando el cursor se retira del elemento
// boton.addEventListener('mouseleave', obtenerEvento);

// Mouse Over: Se activa el evento cuando el cursor esta sobre el elemento
//boton.addEventListener('mouseover', obtenerEvento);

// Mouse Out: Similar a mouse leave
// boton.addEventListener('mouseleave', obtenerEvento);

//Mouse Down: Similar mouse enter
// boton.addEventListener('mousedown', obtenerEvento);

// Mouse Up: Se activa el evento cuando despues de un click, sueltas el click
// boton.addEventListener('mouseup', obtenerEvento);

// Mouse Move: Se activa por cualquier movimiento del cursor dentro del elemento
encabezado.addEventListener('mousemove', obtenerEvento);


function obtenerEvento(event) {
    console.log(`EVENTO: ${event.type}`);
}