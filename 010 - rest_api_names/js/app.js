document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

// llamado ajax e imprimir resultados
function cargarNombres(e) {
    e.preventDefault();

    // leer las variables
    const origen = document.getElementById('origen');
    const origenSeleccionado = origen.options[origen.selectedIndex].value

    const genero = document.getElementById('genero');
    const generoSeleccionado = genero.options[genero.selectedIndex].value

    const cantidad = document.getElementById('numero').value;

    let url = '';
    url += 'https://uinames.com/api/?';
    // si hay origen agregarlo a la url
    if (origenSeleccionado !== '') {
        url += `region=${origenSeleccionado}&`;
    }
    // si hay un genero agregarlo a la url
    if (generoSeleccionado !== '') {
        url += `gender=${generoSeleccionado}&`;
    }
    // si hay una cantidad agregarlo a la url
    if (cantidad !== null) {
        url += `amount=${cantidad}&`;
    }
    // conectar con ajax
    // iniciar XMLHTTPRequest
    const xhr = new XMLHttpRequest();
    // abrimos la conexión
    xhr.open('GET', url, true);
    // datos e imiprimimos del template
    xhr.onload = () => {
            if (xhr.status === 200) {
                const nombres = JSON.parse(xhr.responseText);
                // generar html
                let htmlNombres = '<h2>Nombres generados</h2>';
                htmlNombres += '<ul class="lista">';

                // imprimir cada nombre
                nombres.forEach(nombre => {
                    htmlNombres += `
                        <li>${nombre.name}
                    `;
                });

                htmlNombres += '</ul>';
                document.getElementById('resultado').innerHTML = htmlNombres;
            }
        }
        // enviar el request
    xhr.send();

}