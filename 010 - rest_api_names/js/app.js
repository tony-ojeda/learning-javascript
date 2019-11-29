document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

// llamado ajax e imprimir resultados
function cargarNombres(e) {
    e.preventDefault();

    // leer las variables
    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value

    const genero = document.getElementById('genero');
    const generoSeleccionado = origen.options[origen.selectedIndex].value

    const cantidad = document.getElementById('numero').value;

}