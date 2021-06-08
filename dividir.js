let dividir = (a,b) => {
    if (a == 0 || b == 0) {
        return 'No se puede dividir por 0';
    }
    return a / b;
}

module.exports = dividir;

console.log(dividir(15,5));