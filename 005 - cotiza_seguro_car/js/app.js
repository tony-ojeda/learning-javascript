// Constructor para Seguro
function Seguro(marca, anio, tipo) {
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}

// Todo lo que se muestra en la vista
function Interfaz() {}

// Mensaje que se imprime en el HTML
Interfaz.prototype.mostrarError = function(mensaje, tipo) {
    const div = document.createElement('div');

    if (tipo === 'error') {
        div.classList.add('mensaje', 'error');
    } else {
        div.classList.add('mensaje', 'correcto');
    }
    div.innerHTML = `${mensaje}`;
    formulario.insertBefore(div, document.querySelector('.form-group'));

    setTimeout(() => {
        document.querySelector('.mensaje').remove();
    }, 3000);
}

// EventListener
const formulario = document.getElementById('cotizar-seguro');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // Leer la marca seleccionada
    const marca = document.getElementById('marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;

    // Leer el año seleccionado del <select>
    const anio = document.getElementById('anio');
    const anioSeleecionado = anio.options[anio.selectedIndex].value;

    // Lee el valor del radio button
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    // Crear instancia de Interfaz
    const interfaz = new Interfaz();

    // Revisamos que los campos no esten vacios
    if (marcaSeleccionada === '' || anioSeleecionado === '' || tipo === '') {
        // Interfaz imprimiendo un error
        interfaz.mostrarError('Faltan datos, revisar el formulario y prueba de nuevo', 'error');
    } else {
        // Instanciar seguro y mostrar interfaz
        console.log('Todo Correcto');
    }
});

const max = new Date().getFullYear(),
    min = max - 20;

const selectAnios = document.getElementById('anio');
for (let i = max; i > min; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectAnios.appendChild(option);
}