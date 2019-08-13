// arreglos en js
const numeros = [10, 20, 30, 50];
//console.table(numeros);

// Areglo de string (metodo alternativo)
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril');
//console.log(meses.length);

// añadir un arreglo
meses[4] = 'Mayo';
meses.push('Junio');

// Añadir al inicio del arreglo
meses.unshift('Mes 0');

// Eliminar un elemento ubicado en la ultima posición de un arreglo
meses.pop();

// Eliminar un elemento ubicado al inicio del arreglo
meses.shift();

// Eliminar desde un rango en especifico
meses.splice(2, 1);

// Revertir
meses.reverse();

// encontrar un elemento en el arreglo
//console.log(meses.indexOf('Abril'));  // Se puede realizar para buscar en una lista de productos

// unir arreglo con otro
let arreglo1 = [1, 2, 3],
    arreglo2 = [4, 5, 6];
//console.log(arreglo1.concat(arreglo2));

// Ordenar un arreglo
const frutas = ['Platano', 'Manzana', 'Fresa', 'Naranja', 'Anis'];
frutas.sort();
//console.log(frutas);

// Ordenar numeros
arreglo1 = [3, 9, 91, 92, 23, 45, 21, 56, 1, 100, 10];
arreglo1.sort(function(x, y) {
    return x - y; // menor a mayo    return y - x; de mayor a menor
});
console.table(arreglo1);