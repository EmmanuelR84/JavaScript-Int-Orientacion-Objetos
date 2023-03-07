import { Cliente } from "./Cliente.js"; //Para ver la clase Cliente().

export class CuentaCorriente {
    #cliente;
    numero;
    agencia;
    #saldo;   // Este # hace que esta propiedad sea privada en js, no mostrara este valor y no se podra modificar desde otra linea de codigo.
    static cantidadCuentas = 0; //static (comun para cada instancia) es para que tome cada nueva instancia creada y no por separado como lo hace con this(una en especifico). Un contador de cuentas, inicia en 0.

    set cliente(valor) { // Para protejer el cliente de no modificarlo por error
        if(valor instanceof Cliente) //Esto hace que solo si el valor es una instancia de cliente, logro atribuir mi referencia de cliente.
            this.#cliente = valor; //Asi podemos acceder en index.js al #cliente
    }

    get cliente() {
        return this.#cliente; //Asi nos dejara ver el #cliente q es privado-
    }

    constructor(cliente, numero, agencia) { // Esto define que dato va a ser cada propiedad.
        this.cliente = cliente; //Desde el set cliente(valor).
      //this.#cliente = null; // este null es para poder relacionarlo a otro punto donde sera creado el cliente.
        this.numero = numero; // Inicializa vacio.
        this.agencia = agencia; // Inicializa vacio.
        this.#saldo = 0; // Inicializa en 0.
        CuentaCorriente.cantidadCuentas++; //cada vez q se cree una nueva cuenta, aumentara su valor de 1 en 1.
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

    transferirParaCuenta(valor, cuentaDestino) {
        this.retiroEnCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }
}