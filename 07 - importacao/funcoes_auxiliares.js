
const entradas = [5, 50, 10, 98, 23];
let i = 0;

function gets() {
    const valor = entradas[i];
    i = i + 1;
    return valor;
}
 
function print(texto) {
    console.log(texto);
}

// Exportando um objeto
module.exports = {gets,print}; // Objeto literal com 2 atributos