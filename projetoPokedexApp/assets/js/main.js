
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

// Método assicrono "quando ocorrer" exiba a respota
fetch(url)
    .then(function (response) {
        response.json().then(function (resposebody) {
            console.log(resposebody);
        })
    })
    .catch(function (error) {
        console.error(error);
    })
    .finally(function () {
        console.log('Requisição concluida!');
    });