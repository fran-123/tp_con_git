const suma = require('./suma');
const resta = require('./resta');
const multiplicar = require('./multiplicar');
const dividir = require('./dividir');
const mod = require('./mods');

const process = require('process');

let resultado = 0;

switch (process.argv[2]) {
    case 'sumar':
        resultado = suma(+process.argv[3],+process.argv[4]);
        break;
    case 'restar':
        resultado = resta(+process.argv[3],+process.argv[4]);
        break;
    case 'multiplicar':
        resultado = multiplicar(+process.argv[3],+process.argv[4]);
        break;
    case 'dividir':
        resultado = dividir(+process.argv[3],+process.argv[4]);
        break;
    case 'modulo':
        resultado = mod(+process.argv[3],+process.argv[4]);
        break;
    default:
        break;
}