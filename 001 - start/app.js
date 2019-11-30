// Async Await
async function obtenerClientes() {
    // crear un pomise
    const clientes = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Clientes descargados...');
        }, 5000)
    });

    // error o no...
    const error = false;

    if (!error) {
        const respuesta = await clientes;
        return respuesta;
    } else {
        await Promise.reject('Hubo un error...');
    }
}

obtenerClientes()
    .then(res => console.log(res))
    .catch(error => console.log(error))