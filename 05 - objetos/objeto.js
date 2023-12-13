
// chave e valor
const pessoa = {
    nome: 'João Brito',
    idade: 43,
    altura: 1.77,
   
    descreve: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

pessoa.descreve();


// Acessar um atributo dinamicamente
console.log(pessoa['altura'] + ' de altura');

/*
    Exemplos:
   
   // Acesso direto
    pessoa.nome = 'teste';

    // Acesso dinâmico
    pessoa['nome'] = 'teste';
*/ 


// brito.altura = 1.77;

// delete brito.altura;

// //acessando os dados da pessoa
// console.log(brito.nome);
// console.log(brito.idade);
// console.log(brito);