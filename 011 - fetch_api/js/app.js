document.getElementById('txtBtn').addEventListener('click', cargarTXT);

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