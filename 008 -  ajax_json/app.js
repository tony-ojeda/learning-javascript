const boton1 = document.getElementById('boton1');

boton1.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'empleado.json', true);

    xhr.onload = () => {
        if (xhr.status === 200) {
            const persona = JSON.parse(xhr.responseText);

            const htmlTemplate = `
                <ul>
                    <li>ID: ${persona.id}</li>
                    <li>Nombre: ${persona.nombre}</li>
                    <li>Empresa: ${persona.empresa}</li>
                    <li>Actividad: ${persona.trabajo}</li>
                </ul>
            `;
            document.getElementById('empleado').innerHTML = htmlTemplate;
        }
    }

    xhr.send();
})