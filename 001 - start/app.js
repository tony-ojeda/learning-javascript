// functions in 3s

const numero1 = 30,
    numero2 = 20,
    numero3 = 20.20,
    numero4 = .1020,
    numero5 = -3;

let resultado;

// Valor pi
resultado = Math.PI;

// redondeo
resultado = Math.round(2.5); // 2.4 es 2, 2.5 es 3
resultado = Math.ceil(2.2); // redonde hacia arriba
resultado = Math.floor(2.2); // redonde hacia abajo
resultado = Math.sqrt(49); // raiz cuadrada
resultado = Math.abs(numero5); // retorna el valor absoluto
resultado = Math.pow(2, 3); // # a la potencia x
resultado = Math.min(3, 6, 5, 9, 7, 8); // retorna el minimo valor ya sea en decimal
resultado = Math.max(3, 6, 5, 9, 7, 8); // retorna el maximo valor ya sea en decimal
resultado = Math.floor(Math.random() * 10);

console.log(resultado);