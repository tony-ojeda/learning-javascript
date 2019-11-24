// Object literal

const cliente = {
    nombre: 'Juan',
    saldo: 200,
    tipoCliente: () => {
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
}

console.log(cliente.tipoCliente());