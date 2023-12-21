import React from "react";

const PokemonList = ()=> {
  const pokemon = [ "피카츄", "라이츄", "파이리", "꼬부기", "버터풀" ];

  const updatedPokemon = pokemon.map((pokemonName) => {
    if(pokemonName === '파이리') {
      return '버터플'
    }
    return pokemonName; 
  });

  const pokemonList = updatedPokemon.map((pokemonName, index) => (
    <div key ={index}>
      <p>{pokemonName}</p>
    </div>
  ));
  return  <div>{pokemonList}</div>;
};
export default PokemonList;