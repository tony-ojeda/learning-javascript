// variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');

// event listener
eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', inicioApp);
}

// funciones
function inicioApp() {
    // deshabilitar el envio
    btnEnviar.disabled = true;
}