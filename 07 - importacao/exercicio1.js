/*
    Uma sala contem 5 aulos cada aluno foi sorteado um número de 1 - 100.
    Faça um programa que receba 5 números sorteados para os alunos  
    mostre o maior valor sorteado.

    Dados de entrada:
    5
    10
    98
    23

    Saída
    98
*/

const { gets, print } = require('./funcoes_auxiliares');

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(Number(numeroSorteado));
    
}

print(numerosSorteados);

// exibe o maior número do array
let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++){
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}

print( maiorValor + ' É o maior valor sorteado');