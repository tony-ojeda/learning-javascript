// conversion de datos: entero a string
const numero1 = "50",
    numero2 = 10,
    numero3 = 'tres';

// console.log(Number(numero1) + numero2);  // realiza la suma normal
// console.log(parseInt(numero1) + numero2); // realiza la suma normal
// console.log(numero1 - numero2); // si resta sin ningun problema
//console.log(object);

let dato;
dato = Number("20");
dato = Number("20.10951");
dato = Number(true);
dato = Number(false);
dato = Number(null);
dato = Number(undefined);
dato = Number('Hola mundo');
dato = Number([1, 2, 3, 4]);

// ParseFloar y ParseInt
dato = parseInt('100');
dato = parseFloat('100');
dato = parseInt('100.2030');

// toFixed
dato = 1384343;
console.log(dato.toFixed(2));

console.log(dato);


// NaN: no es dato numerico