function sayMyName(name) {
    console.log('Your name is: ' + name);
}

sayMyName('João');
sayMyName('Brito');



function quadrado(valor) {
    
    return valor * valor;
    
}

const quadradoDeDez = quadrado(10);
console.log('10^2 = ' + quadradoDeDez);


function incrementarJuros(valor, percentualJuros) {
    
    const valorDeAcrescimo = (percentualJuros / 100) * valor;

    return valor + valorDeAcrescimo;
    
}

console.log('10% de 100 = ' + incrementarJuros(100, 10));