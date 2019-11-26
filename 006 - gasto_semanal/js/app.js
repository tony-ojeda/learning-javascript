// variables
const presupuestoUsuario = prompt('Cual es tu presupesto Semanal');
const formulario = document.getElementById('agregar-gasto');
let cantidadPresupuesto;

// clases
// Clase de Presupuesto
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
    }

    // Metodo para ir restando del presupuesto actual
    presupuestoRestante(cantidad = 0) {
        return this.restante -= Number(cantidad);
    }
}

// Clase de Interfaz maneja todo lo relacionado en el HTML
class Interfaz {
    insertarPresupuesto(cantidad) {
        const presupuestoSpan = document.querySelector('span#total');
        const restanteSpan = document.querySelector('span#restante');

        // Insertar al HTML
        presupuestoSpan.innerHTML = `${cantidad}`;
        restanteSpan.innerHTML = `${cantidad}`;
    }
    imprimirMensaje(mensaje, tipo) {
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');
        if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }
        divMensaje.appendChild(document.createTextNode(mensaje));
        // inserter en el DOM
        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        // quitar el aler despues de 3s
        setTimeout(() => {
            document.querySelector('.primario .alert').remove();
            formulario.reset();
        }, 3000);
    }
}


// event listeners
document.addEventListener('DOMContentLoaded', () => {
    if (presupuestoUsuario === null || presupuestoUsuario === '') {
        window.location.reload();
    } else {
        // Instanciar un presupuesto
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
        // Instanciar la clase de interfaz
        const ui = new Interfaz();
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
    }
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // leer del formulario de gastos
    const nombreGasto = document.querySelector('#gasto').value;
    const cantidadGasto = document.querySelector('#cantidad').value;

    // instanciar la interfaz
    const ui = new Interfaz();

    // Comprobar que los campos no esten vacios
    if (nombreGasto === '' || cantidadGasto === '') {
        // 2 paramatros: mensaje y tipo
        ui.imprimirMensaje('Hubo un error', 'error');
    } else {
        // Insertar en el html
        ui.imprimirMensaje('Correcto', 'correcto');
    }
});