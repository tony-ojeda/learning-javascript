// instanciamos clases
const cotizador = new Cotizador();
const ui = new Interfaz();

// obtener formulario
const formulario = document.getElementById('formulario');
formulario.addEventListener('submit', e => {
    e.preventDefault();

    // leer moneda seleccionada
    const monedaSelect = document.getElementById('moneda');
    const monedaSeleccionada = monedaSelect[monedaSelect.selectedIndex].value;

    // leer crito seleccionada
    const criptoMonedaSelect = document.getElementById('criptomoneda');
    const criptoMonedaSeleccionada = criptoMonedaSelect[criptoMonedaSelect.selectedIndex].value;

    // comprobar que ambos campos tegand datos:
    if (monedaSeleccionada === '' || criptoMonedaSeleccionada === '') {
        // Faltan datos, imprimir alert
        ui.mostrarMensaje('Ambos campos son obligatorios', 'deep-orange darken-4 card-panel');
    } else {
        // Todo correcto, tomar valores del select y ejecutar
        cotizador.obtenerValores(monedaSeleccionada, criptoMonedaSeleccionada)
            .then(data => {
                console.log(data.resutado);
            })
    }
})