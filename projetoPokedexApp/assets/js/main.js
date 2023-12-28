
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

                                              
pokeApi.getPokemons().then((pokemons = []) => {
    
    const newList =  pokemons.map((value, index, array) => {
        return "";
    });
        
    
    
    
    // const listItens = [];
    // for (let i = 0; i < pokemons.length; i++) {
    //     const pokemon = pokemons[i];
    //     listItens.push(convertPokemonToLi(pokemon));
    // }
    // console.log(listItens);
})

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
