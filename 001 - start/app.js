// tipos de datos
// javascrip es un lenguaje del tipo dinamico donde no se especifican el tipo de dato

let valor;

// Tipos de datos primitivos
valor = 'Cadena de texto';
valor = 20;
valor = true;
valor = null;
valor = undefined;
valor = Symbol('Simbolo');

// Tipos de dato por referencia
valor = { nombre: 'tony', apellido: 'ojeda' };
valor = [1, 2, 3, 4];
valor = new Date();

console.log(typeof valor);