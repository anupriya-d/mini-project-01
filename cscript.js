
function getPokemons() {
    return axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=20`)
        .then(response => response.data.results)
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function getPokemonDetails(url) {
    return axios.get(url)
        .then(response => response.data)
        .catch(error => {
            console.error('Error fetching Pokémon details:', error);
        });
}

async function addCard(pokemon) {
    const details = await getPokemonDetails(pokemon.url);

    const template = document.getElementById("pokemon-template").content.cloneNode(true);
    template.querySelector('.poke-img').src = details.sprites.other["official-artwork"].front_default;
    template.querySelector('.card-title').innerText = details.name;
    template.querySelector('.id').innerText = details.id;
    template.querySelector('.xp').innerText = details.base_experience;
    template.querySelector('.type').innerText = details.types[0].type.name;
    template.querySelector('.weight').innerText = details.weight;
    template.querySelector('.height').innerText = details.height;
    document.querySelector('#pokemon-list').appendChild(template);
}

getPokemons().then((pokemons) => pokemons.forEach(pokemon => addCard(pokemon)));