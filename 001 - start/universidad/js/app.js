// Eventos Teclado
const busqueda = document.querySelector('#buscador');

// keydown: Se activa el evento por cualquier cambio
// busqueda.addEventListener('keydown', obtenerEvento);

// keyup: Se activa el evento por cada vez aue sueltas la tecla
// busqueda.addEventListener('keyup', obtenerEvento);

// keypress: Evento se activa por cada tecla presionada
//busqueda.addEventListener('keypress', obtenerEvento);

// focus: Se activa el evento cuando el elemento este apuntado o enfocado
// busqueda.addEventListener('focus', obtenerEvento);

// blur: Se activa cuando pierdes el enfoque del elemento previo
// busqueda.addEventListener('blur', obtenerEvento);

// cut: cortar
// busqueda.addEventListener('cut', obtenerEvento);

// copy: copiar
// busqueda.addEventListener('copy', obtenerEvento);

// input: Captura todos los eventos ya antes mecionados
busqueda.addEventListener('input', obtenerEvento);


function obtenerEvento(event) {
    document.querySelector('#encabezado').innerText = busqueda.value;
    console.log(`EVENTO: ${event.type}`);
}