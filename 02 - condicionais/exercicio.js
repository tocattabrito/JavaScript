/*
    Façaum programa para calcular o valor de uma viagem.

    Você terá  5 variáveis. Sendo elas:
     1 - Preço do etanol;
     2 - Preço da gasolina;
     3 - O tipo de combustivel que está no seu carro;
     4 - Gasto médio de combustível do carro por Km;
     5 - Distância em Km da viagem;
    
    Imprima no console o valor que será gasto para realizar esta viagem.
*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;           // em km/l
const distanciaEmKm = 100;
const tipoCombustivel = 'gasolina'; // pode ser "gasolina" ou "etanol"

const litrosConsumidos = distanciaEmKm / kmPorLitros;



if (tipoCombustivel === 'etanol') {

    const valorGasto = litrosConsumidos * precoEtanol;

    console.log('O valor gasto com Etanol foi de: ' + 'R$ ' + valorGasto.toFixed(2));

} else {
    
    const valorGasto = litrosConsumidos * precoGasolina;

        console.log('O valor gasto com Gasolina foi de: ' + 'R$ ' + valorGasto.toFixed(2));

}

