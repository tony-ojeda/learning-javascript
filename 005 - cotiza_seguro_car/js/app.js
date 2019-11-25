// Constructor para Seguro
function Seguro(marca, anio, tipo) {
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}

Seguro.prototype.cotizarSeguro = function() {
        /*
            1 = americano 1.15
            2 = asiatico 1.05
            3 = europeo 1.35
        */
        let cantidad;
        const base = 2000;

        switch (this.marca) {
            case '1':
                cantidad = base * 1.15;
                break;
            case '2':
                cantidad = base * 1.05;
                break;
            case '3':
                cantidad = base * 1.35;
                break;
        }
        // leer el año
        const diferencia = new Date().getFullYear() - this.anio;

        // cada año la diferencia hay que reducir 3% su valor del seguro
        cantidad -= ((diferencia * 3) * cantidad) / 100;

        /**
         * Si el seguro es básico se multiplica por 30% mas
         * Si el seguro es completo 50% mas
         */
        if (this.tipo === 'basico') {
            cantidad *= 1.30;
        } else {
            cantidad *= 1.50;
        }

        return cantidad;
    }
    // Todo lo que se muestra en la vista
function Interfaz() {}

// Mensaje que se imprime en el HTML
Interfaz.prototype.mostrarMensaje = function(mensaje, tipo) {
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

// Imprime el resultado de la cotización
Interfaz.prototype.mostrarResultado = function(seguro, total) {
    const resultado = document.getElementById('resultado');
    let marca;
    switch (seguro.marca) {
        case '1':
            marca = 'Americano';
            break;
        case '2':
            marca = 'Asiatico';
            break;
        case '3':
            marca = 'Europa';
            break;
    }
    // Crear un div
    const div = document.createElement('div');
    // Insertar la información
    div.innerHTML = `
        <p class="header"> Tu Resumen: </p>
        <p> Marca: ${marca} </p>
        <p> Año: ${seguro.anio} </p>
        <p> Tipo: ${seguro.tipo} </p>
        <p> Total: ${total} </p>
    `;
    const spinner = document.querySelector('#cargando img');
    spinner.style.display = 'block';
    setTimeout(() => {
        spinner.style.display = 'none';
        resultado.appendChild(div);
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
        interfaz.mostrarMensaje('Faltan datos, revisar el formulario y prueba de nuevo', 'error');
    } else {
        // Limpiar restultados anteriores
        const resultados = document.querySelector('#resultado div');
        if (resultados != null) {
            resultados.remove();
        }
        // Instanciar seguro y mostrar interfaz
        const seguro = new Seguro(marcaSeleccionada, anioSeleecionado, tipo);
        // Cotizar el seguro
        const cantidad = seguro.cotizarSeguro(seguro);
        // Mostar el resultado
        interfaz.mostrarResultado(seguro, cantidad);
        interfaz.mostrarMensaje('Cotizando...', 'exito');
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