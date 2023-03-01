// Vamos a crear clases (class) en js para crear el molde para guardar cada dato de los clientes
class cliente {
    nombreCliente;
    dniCliente;
    numeroCuenta;
    saldoCuenta;
}

const cliente1 = new cliente(); // Los parentesis es pq es una clase.

cliente1.nombreCliente = 'Jose';
cliente1.dniCliente = 13850987;
cliente1.numeroCuenta = 12343435;
cliente1.saldoCuenta = 1500;


const cliente2 = new cliente(); // Los parentesis es pq es una clase.

cliente2.nombreCliente = 'Leonardo';
cliente2.dniCliente = 43564786;
cliente2.numeroCuenta = 12349870;
cliente2.saldoCuenta = 5000;


const cliente3 = new cliente(); // Los parentesis es pq es una clase.

cliente3.nombreCliente = 'Maria';
cliente3.dniCliente = 34564124;
cliente3.numeroCuenta = 12358769;
cliente3.saldoCuenta = 8500;


console.log(cliente1);
console.log(cliente2);
console.log(cliente3);