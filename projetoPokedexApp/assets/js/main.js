const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151;
const limit = 10;
let offset = 0;

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) =>  `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                
            
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        
                    </ol>

                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>
            </li>
        `).join('');
        pokemonList.innerHTML += newHtml;
    });
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    loadPokemonItens(offset, limit)
    // const qrdRecordWithNextPage = offset + limit

    // if (qrdRecordWithNextPage >= maxRecords) {
    //     const newLimit = maxRecords - offset
    //     loadPokemonItens(offset, newLimit)

    //     loadMoreButton.parentElement.removeChild(loadMoreButton)   
    // } else {
    //     // loadPokemonItems(offset, limit)
    // }
})
                                              
// pokeApi.getPokemons().then((pokemons = []) => {
//     pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('');
// })







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
