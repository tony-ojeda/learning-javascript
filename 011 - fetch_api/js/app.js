document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);
document.getElementById('apiBtn').addEventListener('click', cargarREST);

function cargarTXT() {
    fetch('datos.txt')
        .then(res => res.text())
        .then(empleados => document.getElementById('resultado').innerHTML = empleados)
        .catch(error => console.log(error))
}

function cargarJSON() {
    fetch('empleados.json')
        .then(res => res.json())
        .then(empleados => {
            let html = '';
            empleados.forEach((empleado) => {
                html += `
                    <li> ${empleado.nombre} ${empleado.puesto}</li>
                `;
            })
            document.getElementById('resultado').innerHTML = html;
        })
        .catch(error => console.log(error));
}

function cargarREST() {
    fetch('https://picsum.photos/list')
        .then(res => res.json())
        .then(imagenes => {
            let html = '';
            imagenes.forEach((imagen) => {
                html += `
                    <li>
                        <a href="${imagen.post_url}" target="_blank" > Ver Imagen </a>
                        ${imagen.author}
                    </li>
                `;
            })
            document.getElementById('resultado').innerHTML = html;
        })
        .catch(error => console.log(error));
}