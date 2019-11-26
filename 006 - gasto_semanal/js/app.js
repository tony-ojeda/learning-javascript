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
        // Insertar los gastos a la lista
    agregarGastoListado(nombre, cantidad) {
            const gastosListado = document.querySelector('#gastos ul');
            // crear un li
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex justify-content-between align-items-center';
            // insertar el gasto
            li.innerHTML = `
            ${nombre}
            <span class="badge badge-primary badge-pill"> S/ ${cantidad} </span>
        `;
            // insertar al htmll
            gastosListado.appendChild(li);
        }
        // Comprueba el presupuesto restante
    presupuestoRestante(cantidad) {
            const restante = document.querySelector('span#restante');
            // leemos presupuesto restante
            const presupuestoRestanteUsuario = cantidadPresupuesto.presupuestoRestante(cantidad);
            restante.innerHTML = `${presupuestoRestanteUsuario}`;
            this.comprobarPresupuesto();
        }
        // cambiar de color el presupuesto restante
    comprobarPresupuesto() {
        const presupuestoTotal = cantidadPresupuesto.presupuesto;
        const presupuestoRestante = cantidadPresupuesto.restante;

        // comprobar el 25%
        if ((presupuestoTotal / 4) > presupuestoRestante) {
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-success', 'alert-warning');
            restante.classList.add('alert-danger');
        } else if ((presupuestoTotal / 2) > presupuestoRestante) {
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-success');
            restante.classList.add('alert-warning');
        }
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
        ui.agregarGastoListado(nombreGasto, cantidadGasto);
        ui.presupuestoRestante(cantidadGasto);
    }
});