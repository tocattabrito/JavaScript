
// chave e valor
const brito = {
    nome: 'João Brito',
    idade: 43,
   
};

brito.altura = 1.77;

delete brito.altura;

//acessando os dados da pessoa
console.log(brito.nome);
console.log(brito.idade);
console.log(brito);