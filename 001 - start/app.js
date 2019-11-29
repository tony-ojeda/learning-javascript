// Prmises 
const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = false;
    if (descuento) {
        resolve('Descuento Aplicado');
    } else {
        reject('No se puede aplicar descuento');
    }
});

aplicarDescuento.then((resultado) => {
    console.log(resultado);
}).catch((error) => {
    console.log(error);
})