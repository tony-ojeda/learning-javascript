document.getElementById('txtBtn').addEventListener('click', cargarTXT);
document.getElementById('jsonBtn').addEventListener('click', cargarJSON);

function cargarTXT() {
    fetch('datos.txt')
        .then((res) => {
            return res.text();
        })
        .then((empleados) => {
            document.getElementById('resultado').innerHTML = empleados;
        })
        .catch(() => {
            console.log(error);
        })
}

function cargarJSON() {
    fetch('empleados.json')
        .then((res) => {
            return res.json();
        })
        .then((empleados) => {
            let html = '';
            empleados.forEach((empleado) => {
                html += `
                    <li> ${empleado.nombre} ${empleado.puesto}</li>
                `;
            })
            document.getElementById('resultado').innerHTML = html;
        })
        .catch((error) => {
            console.log(error);
        });
}