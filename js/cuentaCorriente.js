export class cuentaCorriente {
    numero;
    #saldo;   // Este # hace que esta propiedad sea privada en js, no mostrara este valor y no se podra modificar desde otra linea de codigo.
    agencia;

    constructor() { // Esto define que dato va a ser cada propiedad.
        this.numero = ''; // Inicializa vacio.
        this.#saldo = 0; // Inicializa en 0.
        this.agencia = ''; // Inicializa vacio.
    }

    depositoEnCuenta(valor) {
        if(valor > 0) {
            this.#saldo += valor; // el this hace generica la funcion, de esta forma sirve para cada cuentaCorriente de cliente.
        } else {
            console.log('El deposito debe ser mayor a 0');
        }
        return this.#saldo;
    }

    retiroEnCuenta(valor) {
        if(valor <= this.#saldo) {
            this.#saldo -= valor;
        } else {
            console.log('Fondos insuficientes');
        }
        return this.#saldo;
    }

    verSaldo() {
        return this.#saldo;
    }
}