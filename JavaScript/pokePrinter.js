import { bench } from './pokeBenchState';
import { lista, imagesSvg } from './Selectors';
import { catchPokemon } from './pokedexDataLocalStorage';
import { getRandomPokemonNumber } from './pokeUtils';

async function printPokemon(pokemonId = false) {
  const pokemonName = pokemonId
    ? (await catchPokemon(pokemonId)).name
    : (await catchPokemon(getRandomPokemonNumber())).name;
  let pokeImgHtml = `
      <div draggable="true" class="${pokemonName} pokemon">
      <img draggable="false" src="${bench[pokemonName].sprites.default.male.front}">
      <button draggable="false" class="bye oculto">
       <img class="icon" src=${imagesSvg['008-tacho-de-reciclaje']} alt="trash">  
      </button>
      <button draggable="false" class="color oculto">
       <img class="icon" src=${imagesSvg.pokemon} alt="trash">  
      </button>`;

  if (bench[pokemonName].state.warning2 !== 'No back') {
    pokeImgHtml += `<button draggable="false" class="rotate oculto">
        <img class="icon" src=${imagesSvg['003-brujula']} alt="trash">  
       </button>`;
  }

  if (bench[pokemonName].state.warning === 'No female') {
    pokeImgHtml += `</div>`;
  } else {
    pokeImgHtml += `
    <button class="sex oculto">
       <img class="icon" src=${imagesSvg['002-lucha']} alt="trash"> 
    </button>
    </div>`;
  }

  lista.innerHTML = pokeImgHtml + lista.innerHTML;
  const dragables = document.querySelectorAll("[draggable='true']");
  return dragables;
}

export { printPokemon };
