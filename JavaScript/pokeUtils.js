import { bench } from './pokeBenchState.js';
// recieve a name or id of a pokemon already catched and returns his benchState

function pokemonById(pokemonId) {
  const pokemonName = Object.entries(bench).filter(
    ([name, { id }]) => id === pokemonId || name === pokemonId
  )[0][0];

  return bench[pokemonName];
}

function getRandomPokemonNumber() {
  const randomPokemonId = Math.floor(Math.random() * 806 + 1);
  return randomPokemonId;
}

export { pokemonById, getRandomPokemonNumber };
