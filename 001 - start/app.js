function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

// Crear un prototype
Cliente.prototype.tipoCliente = function() {
    let tipo;
    if (this.saldo > 1000) {
        tipo = 'Gold';
    } else if (this.saldo > 500) {
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }
    return tipo;
}

// Prototipo que imprime saldo y nombre
Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Tu saldo es de ${this.saldo}, 
    Tipo Cliente ${this.tipoCliente()}`;
}

// Retirar Saldo
Cliente.prototype.retirarSaldo = function(retiro) {
    return this.saldo -= retiro;
}

const cliente1 = new Cliente('Jose', 100);
const cliente2 = new Cliente('David', 600);
const cliente3 = new Cliente('Willy', 12000);

cliente2.retirarSaldo(300);

console.log(cliente1.nombreClienteSaldo());
console.log(cliente2.nombreClienteSaldo());
console.log(cliente3.nombreClienteSaldo());