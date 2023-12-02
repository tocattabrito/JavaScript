/*
    3) Elabore um algoritmo que calcula o que deve ser pago por um produto,
    considerando o preço normal de etiqueta e a escolha de condição de 
    pagamento.

    Código condição de pagamento:
    1- À vista Débito, recebe 10% de desconto;
    2- Á vista no Dinheiro ou Pix, recebe 15% de desconto;
    3- Em credito duas vezes, preço normal de etiqueta sem juros;
    4- Credito Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

let precoEtiqueta = 100;
let formaDePagamento = 4;

if (formaDePagamento === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
} else if (formaDePagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if (formaDePagamento === 3) {
    console.log(precoEtiqueta);
} else {
    // let parcelas = prompt("Quantas parcelas?");
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}