// Metodo alternativo
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipoCliente = () => {
        let tipo;
        if (this.saldo > 2000) {
            tipo = 'Gold';
        } else if (this.saldo > 500) {
            tipo = 'Platinum';
        } else {
            tipo = 'Normal';
        }
        return tipo;
    }
}

const persona = new Cliente('Pedro', 2000);

console.log(persona.tipoCliente());