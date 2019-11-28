const cargarPosts = document.querySelector('#cargar');
cargarPosts.addEventListener('click', () => {
    // crear el objeto
    const xhr = new XMLHttpRequest();
    // abrir la conexión
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    // cargar y leer datos
    xhr.onload = () => {
            if (xhr.status === 200) {
                const respuesta = JSON.parse(xhr.responseText);

                let contenido = '';
                respuesta.forEach((post) => {
                    contenido += `
                        <h3>${post.title}</h3>
                        <p>${post.body}</p>
                    `;
                })
                document.getElementById('listado').innerHTML = contenido;
            }
        }
        // enviar la conexión
    xhr.send();
});