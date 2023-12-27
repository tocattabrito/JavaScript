
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

// Método assicrono "quando ocorrer" exiba a respota
/*Utilizado o arrow function =>*/ 

fetch(url)
    .then((response) => {
        return response.json()
    })
    .then(function (jsonbody) {
        console.log(jsonbody);
    })
    .catch(function (error) {
        console.error(error);
    })
    .finally(function () {
        console.log('Requisição concluida!');
    });

/*Retorna o mesmo resultado do código acima*/ 
// fetch(url)
//     .then(function (response) {
//         return response.json()
//     })
//     .then(function (jsonbody) {
//         console.log(jsonbody);
//     })
//     .catch(function (error) {
//         console.error(error);
//     })
//     .finally(function () {
//         console.log('Requisição concluida!');
//     });

/*Retonar o mesmo resultdo do código acima*/ 
// fetch(url)
//     .then(function (response) {
//         response
//             .json()
//             .then(function (resposebody) {
//                 console.log(resposebody);
//             })
//     })
//     .catch(function (error) {
//         console.error(error);
//     })
//     .finally(function () {
//         console.log('Requisição concluida!');
//     });