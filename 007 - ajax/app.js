document.getElementById('cargar').addEventListener('click', cargarDatos);

function cargarDatos() {
    // Crear el objeto xmlhttprequest
    const xhr = new XMLHttpRequest();

    // Abrir una conexión
    xhr.open('GET', 'datos.txt');

    // una vez que carga
    xhr.onload = () => {
            /**
             * 200 : correcto
             * 403 : prohibido
             * 404 : no encontrado
             */
            if (xhr.status === 200) {
                console.log(this.responseText);
            }
        }
        // Enviar el request
    xhr.send();
}