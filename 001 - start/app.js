const paises = ['Francia', 'España', 'Portugal', 'Australia', 'Inglaterra', 'Irlanda'];

function nuevoPais(nuevo, callback) {
    setTimeout(() => {
        paises.push(nuevo);
        callback();
    }, 3000)
}

function mostrarPaises() {
    setTimeout(() => {
        let html = '';
        paises.forEach((pais) => {
            html += `<li>${pais}</li>`;
        })
        document.getElementById('app').innerHTML = html;
    }, 1000);
}

nuevoPais('Perú', mostrarPaises);
mostrarPaises();