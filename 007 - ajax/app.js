document.getElementById('cargar').addEventListener('click', cargarDatos);

function cargarDatos() {
    // Crear el objeto xmlhttprequest
    const xhr = new XMLHttpRequest();

    // Abrir una conexión
    xhr.open('GET', 'datos.txt', true);

    // una vez que carga
    xhr.onreadystatechange = () => {
            /**
             * ready status
             * 0 : no inicializada
             * 1 : conexión establecida
             * 2 : Recibido
             * 3 : Procesado
             * 4 : Respuesta lista
             */
            if (xhr.readyState === 4 && xhr.status === 200) {
                document.getElementById('listado').innerHTML = `<h1>${xhr.responseText}<h1>`;
            }
        }
        // Enviar el request
    xhr.send();
}