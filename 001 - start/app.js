// functions in js

let nombre, mensaje;

nombre = "tony";
mensaje = "Estoy aprendiendo JS "

console.log(nombre.length);
console.log(nombre.toUpperCase()); // Convierte a mayuscula
console.log(nombre.toLowerCase()); //  Convierte a minuscula
console.log(mensaje.substring(6, 10)); // muestra el texto desde , hasta
console.log(mensaje.slice(6, 10)); // corta  el texto
console.log(mensaje.split(' ')); // separa el string en arrays, segun el filtro
console.log(mensaje.replace('JS', 'TypeScript')); // reemplaza un valor especifo de la cadena
console.log(mensaje.includes('JS')); // permite buscar un dato en especifico (true o false)
console.log(mensaje.repeat(3)); // repite el dato