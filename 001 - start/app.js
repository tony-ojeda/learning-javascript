// EMACScript6
class Cliente {
    constructor(nombre, apellido, saldo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.saldo = saldo;
    }

    imprimirSaldo() {
        return `Hola ${this.nombre}, tu saldo es de : ${this.saldo}`;
    }

    tipoCliente() {
        let tipo;
        if (this.saldo > 10000) {
            tipo = 'Gold';
        } else if (this.saldo > 5000) {
            tipo = 'Platinum';
        } else {
            tipo = 'Normal';
        }
        return tipo;
    }

    retirarSaldo(retiro) {
        return this.saldo -= retiro;
    }

    static bienvenida() {
        return `Bienvenido al cajero`;
    }
}

// const tony = new Cliente('Tony', 'Ojeda', 110000);
// tony.retirarSaldo(3000);
// console.log(tony.imprimirSaldo());

console.log(Cliente.bienvenida());