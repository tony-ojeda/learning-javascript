// Map para recorrer un arreglo de objetos
const carrito = [
    { id: 1, producto: 'Libro' },
    { id: 2, producto: 'Camisa' },
    { id: 3, producto: 'Guitarra' },
    { id: 4, producto: 'Disco' }
];

const lista_por_nombre_carrito = carrito.map(function(carrito) {
    return carrito.producto;
});

//console.dir(lista_por_nombre_carrito);

const automovil = {
    modelo: 'Camaro',
    motor: 6.1,
    anio: 1999,
    marca: 'Chevrole'
};

for (let auto in automovil) {
    console.log(`${auto} : ${automovil[auto]}`);
}

console.dir(automovil);