// classe é a definição do objeto
class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

// instancia é a ocorrencia do objeto
const vitor = new Pessoa('Vitor', 25);
const renan = new Pessoa('Renan', 30);

console.log(vitor);

vitor.descrever();
renan.descrever();