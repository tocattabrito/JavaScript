
const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`


function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>
            
        
            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
                    alt="${pokemon.name}">
            </div>
        </li>
        
    `    
}

const pokemonList = document.getElementById('pokemonList');
pokemonList.innerHTML += "<li>teste</li>";

// Método assicrono "quando ocorrer" exiba a respota

/*Utilizado o arrow function => em uma função de call back*/ 
// fetch(url)
//     .then((response) => response.json())
//     .then((jsonbody) => jsonbody.results)
//     .then((pokemonlist) => {
      
//         for (let i = 0; i < pokemonlist.length; i++) {
//             const pokemon = pokemonlist[i];
//             console.log(convertPokemonToLi(pokemon));
//         }
//     })   
//     .catch((error) => console.log(error))
 

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