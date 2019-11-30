async function leerTodos() {
    // esperar la respuesta
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');

    // procede cuando la respuesta este hecha
    const datos = await respuesta.json();
    return datos;
}

leerTodos()
    .then(usuarios => console.log(usuarios));