async function randPokemon() {
  const randPokemonId = Math.floor(Math.random() * 100) + 1;
  console.log(randPokemonId);

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${randPokemonId}`
    );
    const data = await response.json();
    const pokemonName = data.name.toUpperCase();
    const pokemonImgUrl = data.sprites.other["official-artwork"].front_default;

    document.getElementById("pokemon-name").innerHTML = pokemonName;
    document.getElementById("pokemon-img").src = pokemonImgUrl;
  } catch (error) {
    console.error("Erro fetching pokemon data:", error);
  }
}
setInterval(randPokemon, 3000);
