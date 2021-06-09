const suma = require('./suma');
const resta = require('./resta');
const multiplicar = require('./multiplicar');
const dividir = require('./dividir');
const mod = require('./mods');

const process = require('process');

switch (process.argv[2]) {
    case 'sumar':
        suma(+process.argv[3],+process.argv[4]);
        break;
    case 'restar':
        resta(+process.argv[3],+process.argv[4]);
        break;
    case 'multiplicar':
        multiplicar(+process.argv[3],+process.argv[4]);
        break;
    case 'dividir':
        dividir(+process.argv[3],+process.argv[4]);
        break;
    case 'modulo':
        mod(+process.argv[3],+process.argv[4]);
        break;
    default:
        break;
}