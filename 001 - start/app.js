// EMACScript6
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

    imprimirSaldo() {
        return `Hola ${this.nombre}, tu saldo es de : ${this.saldo}`;
    }

    static bienvenida() {
        return `Bienvenido al cajero`;
    }
}

// const tony = new Cliente('Pedro', 1000);
// console.log(tony.imprimirSaldo());

class Empresa extends Cliente {
    constructor(nombre, saldo, telefono, tipo) {
        // Va hacia el constructor pader
        super(nombre, saldo);

        // No existe en el constructor pader
        this.telefono = telefono;
        this.tipo = tipo;
    }

    static bienvenida() {
        return `Bienvenido al cajero para Empresas`;
    }
}

const empresa = new Empresa('EDTeam', 100000, 33535353, 'Construcción');

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());