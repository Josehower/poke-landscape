import { catchPokemon } from './pokedexDataLocalStorage';
import { printPokemon } from './pokeDomManipulation';
import { pokemonById } from './pokeUtils';

async function getPokemonHandler() {
  const randomPokemonId = Math.floor(Math.random() * 100 + 1);
  await catchPokemon(randomPokemonId);
  printPokemon(pokemonById(randomPokemonId).name);
}

export { getPokemonHandler };
