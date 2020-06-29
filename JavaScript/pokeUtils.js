import { bench } from './pokeBenchState';
// recieve a name or id of a pokemon already catched and returns his benchState

function getPokemonBluePrintReference(pokemonIdOrName) {
  const pokemonName = Object.entries(bench.bluePrint).filter(
    ([name, { id }]) => id === pokemonIdOrName || name === pokemonIdOrName
  )[0][0];

  return bench.bluePrint[pokemonName];
}

function getRandomPokemonNumber() {
  const randomPokemonId = Math.floor(Math.random() * 806 + 1);
  return randomPokemonId;
}

export { getPokemonBluePrintReference, getRandomPokemonNumber };
