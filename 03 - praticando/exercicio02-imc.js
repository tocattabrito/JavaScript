/* 
    2) O IMC - Indice de Massa Corporea é um criterio da Organzação Mundial da Saúde para dar
    uma indicação sobre a condição de peso de uma pessoa adulta.

    Fomula do IMC:
    IMC = peso / (Altura * Altura);

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição
    de acordo com a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima que 40 Obesidade Grave;
*/

let peso = 92.94;
let altura = 1.76;

let imc = peso / (altura * altura);
// let imc = peso / Math.pow(altura * 2);

if (imc < 18.5) {
    
    console.log(`IMC: ${imc.toFixed(2)} Abaixo do Peso`);

} else if (imc >= 18.5 && imc <= 25) {

    console.log(`IMC: ${imc.toFixed(2)} Peso Normal`);

} else if (imc >= 25 && imc <= 30) {

    console.log(`IMC: ${imc.toFixed(2)} Acima do Peso`)

} else if (imc >= 30 && imc <= 40) {

    console.log(`IMC: ${imc.toFixed(2)} Obeso`)

} else {

    console.log(`IMC: ${imc.toFixed(2)} Obesidade Grave`)
}
 