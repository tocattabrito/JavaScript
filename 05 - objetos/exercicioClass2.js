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

    // método classificar imc
    classificaImc() {
        const imc = this.calculaImc();

        if (imc < 18.5) {
            return(`IMC: ${imc.toFixed(2)} Abaixo do Peso`);
        } else if (imc >=18.5 && imc <=25) {
            return(`IMC: ${imc.toFixed(2)} Peso Normal`);
        } else if (imc >= 25 && imc <= 30) {
            return(`IMC: ${imc.toFixed(2)} Acima do Peso`);
        } else if (imc >= 30 && imc <=40) {
            return(`IMC: ${imc.toFixed(2)} Obeso`);
        } else {
            return(`IMC: ${imc.toFixed(2)} Obesidade Grave`);
        }
    }
}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose);
console.log(jose.classificaImc());

const brito = new Pessoa('Brito', 80, 1.77);
console.log(brito);
console.log(brito.classificaImc());

const renan = new Pessoa('Renan', 63, 1.75);
console.log(renan)
console.log(renan.classificaImc());
