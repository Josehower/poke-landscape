import { bench } from './pokeBenchState.js';

function pokemonById(pokemonId) {
  const pokemonName = Object.entries(bench).filter(
    ([name, { id }]) => id === pokemonId || name === pokemonId
  )[0][0];

  return bench[pokemonName];
}

export { pokemonById };
