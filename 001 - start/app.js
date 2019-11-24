// Object Create 
const Cliente = {
    imprimirSaldo: function() {
        return `hola ${this.nombre} tu saldo es ${this.saldo}`;
    },
    retirarSaldo: function(retiro) {
        return this.saldo -= retiro;
    }
}

// Crear el objeto
const tony = Object.create(Cliente);
tony.nombre = 'Tony';
tony.saldo = 500;

tony.retirarSaldo(200);

console.log(tony.imprimirSaldo());