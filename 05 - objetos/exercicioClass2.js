/*
    2 - Crie uma classe para representar pessoas.
        Para cada pessoa teremos os atributos nome, peso e altura.
        As pessoas devem ter a capacidade de dizer o valor do seu IMC
        (IMC = peso/(altura * altura));
        Instanciar uma pessoa chamada José que tenha 70kg de peso e 1,75 de 
        altura e peça a José para dizer o valor do seu IMC;

*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    // método calcular imc
    calculaImc() {
        return this.peso / (this.altura * this.altura);
    }
}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose);
console.log(jose.calculaImc());

const brito = new Pessoa('Brito', 80, 1.77);
console.log(brito);
console.log(brito.calculaImc());

const renan = new Pessoa('Renan', 63, 1.75);
console.log(renan)
console.log(renan.calculaImc());
