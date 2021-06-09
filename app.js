const suma = require('./suma');
const resta = require('./resta');
const multiplicar = require('./multiplicar');
const dividir = require('./dividir');
const mod = require('./mods');

const process = require('process');

let n1 = +process.argv[3];
let n2 = +process.argv[4];
let resultado = 0;

switch (process.argv[2]) {
    case 'sumar':
        resultado = suma(n1,n2);
        break;
    case 'restar':
        resultado = resta(n1,n2);
        break;
    case 'multiplicar':
        resultado = multiplicar(n1,n2);
        break;
    case 'dividir':
        resultado = dividir(n1,n2);
        break;
    case 'modulo':
        resultado = mod(n1,n2);
        break;
    default:
        break;
}