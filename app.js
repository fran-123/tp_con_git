const suma = require('./suma');
const resta = require('./resta');
const multiplicar = require('./multiplicar');
const dividir = require('./dividir');
const mod = require('./mods');

const process = require('process');
let num1 = +process.argv[3]
let num2 = +process.argv[4]

switch (process.argv[2]) {
    case "sumar":
        console.log(suma(num1,num2));
        
        break;
    case "restar":
        console.log(resta(num1,num2));
        break
    case "multiplicar":
        console.log(multiplicar(num1,num2));
        break
    case "dividir":
        console.log(dividir(num1,num2));
        break
    case "modulo":
        console.log(mod(num1,num2));
        break
}