
// id = "pokemon-list"

const pokemon = ['피카츄','라이츄','파이리','꼬부기'];

const updatedPokemon = pokemon.map((pokemonName) => {
  if(pokemonName === '파이리') {
    return '버터플'
  }
  return pokemonName; 
});

const pokemonListContainer = document.getElementById('pokemon-list');
updatedPokemon.forEach((pokemonName) => {
  const pokemonElement = document.createElement('div');
  pokemonElement.innerHTML = `<p>${pokemonName}</p>`; 
  pokemonListContainer.appendChild(pokemonElement);
});

