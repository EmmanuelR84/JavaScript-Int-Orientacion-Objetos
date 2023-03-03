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



// Importacion de clases - en la terminal ejecutamos el siguiente comando: npm init, luego el nombre del proyecto 'proyecto' - enter - enter: y ponemos una descripcion - dejamos por ahora el entry point index.js - etc etc - autor: curso alura - licencia nada - y colocames 'yes que esta todo bien. Luego de esos pasos se nos habra generado el archivo package.json en nuestra carpeta del proyecto.
import { cuentaCorriente } from "./cuentaCorriente.js";
const cuentaDeLeonardo = new cuentaCorriente();

let saldo = cuentaDeLeonardo.verSaldo();
console.log(`El saldo actual es ${saldo}`);

saldo = cuentaDeLeonardo.depositoEnCuenta(100);
console.log(`El saldo actual es ${saldo}`);
saldo = cuentaDeLeonardo.retiroEnCuenta(50);
console.log(`El saldo actual es ${saldo}`);