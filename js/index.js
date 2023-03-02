// Vamos a crear clases (class) en js para crear el molde para guardar cada dato de los clientes
class cliente {
    nombreCliente;
    dniCliente;
    rutCliente;
}

class cuentaCorriente {
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

// const cliente1 = new cliente(); // Los parentesis es pq es una clase.

// cliente1.nombreCliente = 'Jose';
// cliente1.dniCliente = 13850987;
// cliente1.rutCliente = 20138509878;

// const cuentaCorriente1 = new cuentaCorriente();

// cuentaCorriente1.numero = 12343435;
// cuentaCorriente1.saldo = 1500;
// cuentaCorriente1.agencia = 1001;


// const cliente2 = new cliente(); // Los parentesis es pq es una clase.

// cliente2.nombreCliente = 'Leonardo';
// cliente2.dniCliente = 43564786;
// cliente2.rutCliente = 20435647868;

// const cuentaCorriente2 = new cuentaCorriente();

// cuentaCorriente2.numero = 12349870;
// cuentaCorriente2.saldo = 5000;
// cuentaCorriente2.agencia = 1002;


// console.log(cuentaCorriente2.saldo);
// cuentaCorriente2.depositoEnCuenta(100); //utilizamos el metodo de la clase cuentaCorriente.
// console.log(cuentaCorriente2.saldo);
// cuentaCorriente2.depositoEnCuenta(1500);
// console.log(cuentaCorriente2.saldo);
// cuentaCorriente2.retiroEnCuenta(300);
// console.log(cuentaCorriente2.saldo);

cuentaDeLeonardo = new cuentaCorriente();

let saldo = cuentaDeLeonardo.verSaldo();
console.log(`El saldo actual es ${saldo}`);

saldo = cuentaDeLeonardo.depositoEnCuenta(100);
console.log(`El saldo actual es ${saldo}`);
saldo = cuentaDeLeonardo.retiroEnCuenta(50);
console.log(`El saldo actual es ${saldo}`);