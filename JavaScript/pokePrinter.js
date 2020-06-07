import { bench } from './pokeBenchState';
import { lista } from './Selectors';
import { catchPokemon } from './pokedexDataLocalStorage';
import { getRandomPokemonNumber } from './pokeUtils';

async function printPokemon(pokemonId = false) {
  const pokemonName = pokemonId
    ? (await catchPokemon(pokemonId)).name
    : (await catchPokemon(getRandomPokemonNumber())).name;
  let pokeImgHtml = `
      <div draggable="true" class="${pokemonName} pokemon">
      <img src="${bench[pokemonName].sprites.default.male.front}">
      <button class="rotate oculto">rotate</button>
      <button class="color oculto">color</button>`;

  if (bench[pokemonName].state.warning === 'No female') {
    pokeImgHtml += `</div>`;
  } else {
    pokeImgHtml += ` <button class="sex oculto">sex swamp</button></div>`;
  }

  lista.innerHTML += pokeImgHtml;
  const dragables = document.querySelectorAll("[draggable='true']");
  return dragables;
}

export { printPokemon };
