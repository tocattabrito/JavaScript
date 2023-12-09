function escrevaMeuNome(nome) {
    return 'Meu nome é ' + nome;
}

escrevaMeuNome('Brito');
escrevaMeuNome('Carlos');

function verificaIdade(idade) {
    
    if (idade >= 18) {
        console.log(escrevaMeuNome('Brito ') + 'Sou maior de idade');
    } else {
        console.log('Menor de idade');
    }

}
verificaIdade(18);