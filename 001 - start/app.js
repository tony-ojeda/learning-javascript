// Recorrer un arreglo con forEach
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Aprender JS'];

// for comun
/*
for (let i = 0; i < pendientes.length; i++) {
    console.log(pendientes[i]);
}
*/

// forEach
pendientes.forEach(function(pendiente, index) {
    console.log(`${index + 1} - ${pendiente}`);
});