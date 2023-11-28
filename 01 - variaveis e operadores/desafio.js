/*
    Faça um programa para calcular o valor de uma viagem.
    
    Você terá 3 variáveis. Sendo elas:
        1 - Preço do combustível;
        2 - Gasto médio de combustível do carro por Km;
        3 - Distância em Km da viagem;

    Imprima no console o valor que será gasto  para
    realizar a viagem.
*/
// Entrada
const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distanciaKm = 100;

// Processamento
let valorGasto = precoCombustivel * (distanciaKm/kmPorLitros);


// Saída
console.log('R$ ' + valorGasto.toFixed(2));