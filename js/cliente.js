// Vamos a crear clases (class) en js para crear el molde para guardar cada dato de los clientes
export class Cliente {
    nombreCliente;
    dniCliente;
    rutCliente;

    constructor(nombreCliente, dniCliente, rutCliente) {
        this.nombreCliente = nombreCliente;
        this.dniCliente = dniCliente;
        this.rutCliente = rutCliente;
    }
}