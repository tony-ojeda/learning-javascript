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
        console.log('Faltan datos');
    } else {
        console.log('cotizar');
    }
})